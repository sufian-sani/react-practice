import Hero3Child from "./Hero3Child";

const Hero3 = () => {
    const ItemObj={
        name:'Rabbil Hassan',
        age:33,
        city:'Dhaka'
    }
    return (
        <div>
            <Hero3Child Item={ItemObj}/>
        </div>
    );
};

export default Hero3;