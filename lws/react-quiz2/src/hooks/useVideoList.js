import classes from "../styles/Videos.module.css";
import {Link} from "react-router-dom";
import Video from "../components/Video";
import {useEffect, useState} from "react";
import {getDatabase,ref,query, get, orderByKey} from "firebase/database"
// import {queries} from "@testing-library/react";

export default function useVideoList(){
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videos, setVideos] = useState({});

    useEffect(() => {
        async function fetchVideos(){
            // database related works
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(
              videosRef,
              orderByKey()
            );
            try{
                setError(false)
                setLoading(true)
                const snapshot = await get(videoQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setVideos((prevVideos)=>{
                        return [...prevVideos, ...Object.values(snapshot.val())]
                    });
                }else {
                    //
                }
            }catch (err){
                console.log(err);
                setVideos(false);
                setError(true);
            }
        }
        fetchVideos();
    }, []);

    return{
        loading,
        error,
        videos,
    };
}