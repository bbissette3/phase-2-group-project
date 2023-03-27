import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import logo from '../images/logo.jpeg'

const Home = () => {
    return (
        <div className="home" >
             <Segment centered>
                <Image src={logo} size='large' circular centered/>
                <p >fill this shit in later</p>
             </Segment>
        </div>
    )
}

export default Home;