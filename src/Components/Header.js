import React from 'react';
import { Menu , Button, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";
import logo from '../images/logo.jpeg';

const Header = () => {
  return (
    <div className="header">
     
      <Menu secondary pointing>
      <Image src={logo} width={200}/>
      <Menu.Item >
      <Link to="/">
        <Button color='blue' basic>
          HomePage
        </Button>
        </Link>
      </Menu.Item>
      <Menu.Item position="center">
      <Link to="/workouts">
        <Button color='blue' basic>
          Check out our Free Workouts!
        </Button>
        </Link>
      </Menu.Item>
      <Menu.Item position="center">
      <Link to="/trainers">
        <Button color='blue' basic>
          Our Trainers
        </Button>
      </Link>
      </Menu.Item>
      <Menu.Item position="center">
      <Link to="/favorites">
        <Button color='blue' basic>
          Your Favorite Workouts
        </Button>
      </Link>
      </Menu.Item>
    </Menu>
  </div>
  )
}

export default Header;