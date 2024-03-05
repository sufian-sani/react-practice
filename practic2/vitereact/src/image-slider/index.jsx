import React, {useEffect, useState} from 'react';

function ImageSlider({url,limit, page=1}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl){
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setImages(data)
            }

        }catch (e){
            setErrorMsg(e.message);
        }
    }

    useEffect(() => {
        if(url !== '') fetchImages(url);
    }, [url]);

    console.log(images)

    if(loading){
        return <div>Loading data ! Please wait</div>
    }

    if(errorMsg !== null){
        return <div>Error occured ! {errorMsg}</div>
    }

    return (
        <div className="container">
            
        </div>
    );
}

export default ImageSlider;