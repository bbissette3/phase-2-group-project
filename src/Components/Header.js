import React from "react";
import { Button, Image, Grid } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {

  const location = useLocation();

  return (
    <div className="header-bar">
      <Grid columns={5} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
          <Link to="/cursed" >
            <Image src={logo} width={200} />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>
              <Button color="black" basic={location.pathname !== "/"}>
                Home Page
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/trainers" aria-current={location.pathname === "/trainers" ? "page" : undefined}>
              <Button color="black" basic={location.pathname !== "/trainers"}>
                Our Trainers
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/workouts" aria-current={location.pathname === "/workouts" ? "page" : undefined}>
              <Button color="black" basic={location.pathname !== "/workouts"}>
                Free Workouts
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link to="/favorites" aria-current={location.pathname === "/favorites" ? "page" : undefined}>
              <Button color="black" basic={location.pathname !== "/favorites"}>
                My Favorite
              </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Header;
