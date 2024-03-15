import React, {useEffect, useState} from 'react';
import './style.css'
function ImageSlider(props) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setImages(result);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    console.log(images)

    return (
        <div>
            <div className="container">
                {images && images.length
                    ? images.map((imageItem, index)=>(
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className="current-image"
                        />
                    ))
                    : null
                }
            </div>
        </div>
    );
}

export default ImageSlider;