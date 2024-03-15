import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
function StarFeed({noOfStart = 10}) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function handleMouseLeave(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    return (
        <div>
            {
                [...Array(noOfStart)].map((_,index)=>{
                    index += 1
                    return <FaStar
                        key={index}
                        onClick={()=>handleClick(index)}
                        onMouseEnter={()=>handleMouseLeave(index)}
                        size={50}
                        className={index <= (rating || hover) ? 'active' : 'inactive'}
                    />
                })
            }
            {/*[...Array(noOfStars)]*/}
            {/*<FaStar*/}
            {/*    size={40}*/}
            {/*/>*/}
        </div>
    );
}

export default StarFeed;