const blogModel = require('../models/blogModel');
const userModel = require("../models/userModel");
const mongoose = require("mongoose");

//get all blog
exports.getAllBlogsController = async (req, res) => {
    try{
        const blogs = await blogModel.find({})
        if(!blogs){
            return res.status(200).json({
                success: false,
                message: "No Blogs Found",
            })
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            message: "All Blogs lists",
            blogs,
        });
    }catch (error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error While Getting Blogs",
            error,
        });
    }
}

exports.createBlogController = async (req, res) => {
    try{
        const {title, description, image, user} = req.body;
        //validation
        if (!title || !description || !image || !user) {
            return res.status(400).send({
                success: false,
                message: "Please Provide ALL Fields",
            })
        }
        const exisitingUser = await userModel.findById(user)
        if(!exisitingUser) {
            return res.status(400).send({
                success: false,
                message: "user not found",
            })
        }
        const newBlog = new blogModel({ title, description, image, user});
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save({session})
        exisitingUser.blogs.push(newBlog);
        await exisitingUser.save({ session });
        await session.commitTransaction();
        await newBlog.save();
        return res.status(200).send({
            success: true,
            message: "Blog Created",
            newBlog
        })
    }catch(error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error While Creating Blog",
            error,
        });
    }
}

exports.updateBlogController = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description, image} = req.body;
        const blog = await blogModel.findByIdAndUpdate(id,{...req.body}, {new:true});
        return res.status(200).send({
            success: true,
            message: "Blog Update",
            blog,
        });
    }catch(error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error While updating Blog",
            error,
        });
    }
}

exports.getBlogByIdController = async (req, res) => {
    try{
        const {id} = req.params;
        const blog = await blogModel.findById(id);
        if(!blog){
            return res.status(404).send({
                success: false,
                message: "No Blogs Found",
            })
        }
        return res.status(200).send({
            success: true,
            message: "Blog Update",
            blog,
        });
    }catch(error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error While getting single Blog",
            error,
        });
    }
}

exports.deleteBlogController = async (req, res) => {
    try{
        const blog = await blogModel.findOneAndDelete(req.params.id).populate("user");
        await blog.user.blogs.pull(blog)
        await blog.user.save()
        return res.status(200).send({
            success: true,
            message: "Blog Deleted!",
            blog,
        });
    }catch(error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Error While Deleteing Blog",
            error,
        });
    }
}

exports.userBlogControlller = async (req, res) => {
    try{
        const userBlog = await userModel.findById(req.params.id).populate("blogs")
        if(!userBlog){
            return res.status(404).send({
                success: false,
                message: "Blogs not found with this is",
            })
        }
        return res.status(200).send({
            success: true,
            message: "User Blog",
            userBlog,
        });
    }catch (error){
        console.log(error);
        return res.status(400).send({
            success: false,
            message: "Don't get any Blog",
            error,
        });
    }
}