import React from 'react'
import cursedImage from "../images/cursed.png"


const Cursed=() => {
    return (
        <div className='cursed'>
            <h2> 
                <img id="cursed-image"src={cursedImage}  />
            </h2>
        </div> 
    )
}

export default Cursed;