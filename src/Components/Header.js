import React from 'react';
import { Button, Image, Grid } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import logo from '../images/logo.jpeg';

const Header = () => {
  return (
    <div className="header">
    <Grid columns={5} verticalAlign="middle">
      <Grid.Row >
        <Grid.Column>
          <Image src={logo} width={200} />
        </Grid.Column>
        <Grid.Column>
          <Link to="/">
            <Button color="blue" basic>
              HomePage
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/workouts">
            <Button color="blue" basic>
              Check out our Free Workouts!
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/trainers">
            <Button color="blue" basic>
              Our Trainers
            </Button>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/favorites">
            <Button color="blue" basic>
              Your Favorite Workouts
            </Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
  )
}

export default Header;