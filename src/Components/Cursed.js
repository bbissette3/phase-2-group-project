import React from 'react';
import cursedImage from "../images/cursed.png";
import { Image } from "semantic-ui-react";


const Cursed=() => {
    return (
        <div className='cursed-container'>
            <div className='cursed'>
                <h2 className='cursed-header'> This is how YOU can look in just 3 months with Swolldiers!</h2>
                    <Image src={cursedImage} alt="This-is-cursed" centered size="big"/>
            </div> 
        </div>
    )
}

export default Cursed;