import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import './style.css'
function StarRating({noOfStars=5}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    function handleClick(getIndex){
        setRating(getIndex)
    }
    function handleMouseEnter(getIndex){
        setHover(getIndex)
    }
    function handleMouseLeave(){
        setHover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(noOfStars)].map((_,index)=>{
                    index += 1;
                    return <FaStar
                        key={index}
                        className={index <= (rating || hover) ? 'active' : 'inactive' }
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseEnter(index)}
                        onMouseLeave={()=>handleMouseLeave()}
                        size={40}
                    />
                })
            }
        </div>
    );
}

export default StarRating;