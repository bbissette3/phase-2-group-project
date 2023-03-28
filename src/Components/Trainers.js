import React from 'react';
import { Image, Grid } from 'semantic-ui-react'
import aubrey from '../images/aubrey.png';
import brian from '../images/brian.png';
import tim from '../images/tim.png';

const Trainers = () => {
    return (
    <div className="trainers" >
        <h2>Get To Know Your Trainers!</h2>
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <Image id="training-photo" src={brian} size='medium' circular centered color="red"/>
                    <p>
                        Hey y'all, I'm Brian but all my buddies call me Bicep Brian! 
                        My fitness journey began with my time serving in the military.
                        I've been a trainer for 6 years now and have competed in 7 
                        NPC Phil Health Classic Tournaments, placing first in 3 of 
                        those competitions. I specialize in natural body building, and
                        hypertrophy training.
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Image id="training-photo" src={tim} size='medium' circular centered/>
                    <p>
                        What's up guys! My name is Tim and I've been a personal trainer 
                        now for 7 years! My love for training started when I was competing
                        in the USA Powerlifting Championships from 2012-2018. I claimed two 
                        gold medals before I started training some of my gym buddies for fun
                        and eventually got licensed to train professionally. I currently specialize 
                        in Powerlifting, HIIT and hypertrophy training.
                    </p>
                </Grid.Column>
                <Grid.Column>
                    <Image id="training-photo" src={aubrey} size='medium' circular centered/>  
                    <p>
                        Hey everyone! My name is Aubrey and I've been a personal trainer for 4 
                        years and a certified nutrition coach for 6 years! I have a major in 
                        Health and Physical Education with a minor in Sports Studies. I recently 
                        started training for my first Women's Figure Classic competition and am 
                        set to compete in June! My training specialties include HIIT, functional 
                        fitness and nutritional coaching!
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
    )
}

export default Trainers;