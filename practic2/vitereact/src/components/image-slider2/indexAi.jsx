import React, {useEffect, useState} from 'react';
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setImages(result.map((image) => image.download_url));
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);


    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <button onClick={goToPrevSlide}>Prev</button>
            {/*<img*/}
            {/*    src={images.download_url}*/}
            {/*    alt={`Slide ${currentIndex + 1}`}*/}
            {/*    style={{ maxWidth: '100%', maxHeight: '300px' }}*/}
            {/*/>*/}
            {/*{*/}
            {/*    images && images.length*/}
            {/*    ? images.map((imagesItem, index)=>(*/}
            {/*        <img*/}
            {/*            src={images[currentIndex]}*/}
            {/*            alt={`Slide ${currentIndex + 1}`}*/}
            {/*            style={{ maxWidth: '100%', maxHeight: '300px' }}*/}
            {/*        />*/}
            {/*        ))*/}
            {/*        : null*/}
            {/*}*/}
            {images.length > 0 && (
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
            )}
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default ImageSlider;