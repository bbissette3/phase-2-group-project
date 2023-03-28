import React from 'react';
import { Segment, Image, } from 'semantic-ui-react'
import aubrey from '../images/aubrey.jpeg';
import brian from '../images/brian.jpeg';
import tim from '../images/tim.jpeg';

const Trainers = () => {
    return (
        <div className="trainers" >
            <h3>Get To Know Your Trainer!</h3>
            <div className='trainer-pictures'>
                <Segment>
                    <Image src={brian} size='medium' circular centered/>
                     <p>Hey y'all, I'm Brian but all my buddies call me Bicep Brian! 
                        I've been a trainer for 6 years now and have competed in 7 
                        NPC Phil Health Classic Tournaments, placiing first in 3 of 
                        those competitions. I specialize in natural body building, and
                        hypertrophy training.</p>
                </Segment>
                <Segment>
                    <Image src={tim} size='medium' circular centered/>
                    <p>What's up guys! My name is Tim and I've been a personal trainer 
                        now for 7 years! My love for training started when I was competeing
                        in the USA Powerlifting Championships from 2012-2018. I claimed two 
                        gold medals before I started training some of my gym buddies for fun
                        and eventually got licensed to train professionally. </p>
                </Segment>
                <Segment>                      
                    <Image src={aubrey} size='medium' circular centered/>  
                    <p>Hey everyone! My name is Aubrey and I've been a personal trainer for 4 
                        years and a certified nutrition coach for 6 years! I have a major in 
                        Health and Phyical Education with a minor in Sports Studies. I recently 
                        started training for my first Womans Figure Classic competition and am 
                        set to compete in June! My training specialties include HIIT, functional 
                        fitness and nutritional coaching!
                    </p>
                </Segment>
            </div>
        </div>
    )
}

export default Trainers;