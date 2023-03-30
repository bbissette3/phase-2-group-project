import React from 'react'
import cursedImage from "../images/cursed.png"


const Cursed=() => {
    return (
        <div className='cursed'>
            <h2 className='cursed-header'> This is how YOU can look in just 3 months with Swolldiers!
                <img id="cursed-image"src={cursedImage}  alt="This-is-cursed"/>
            </h2>
        </div> 
    )
}

export default Cursed;