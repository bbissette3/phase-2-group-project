import React from "react";
import { Button, Image, Grid } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { user } = useAuth0();
  const location = useLocation();

  if (!user) {
    return (
      <div className="header-bar">
        <Grid columns={2} verticalAlign="middle">
          <Grid.Row>
            <Grid.Column>
              <Image src={logo} width={200} />
            </Grid.Column>
            <LoginButton />
          </Grid.Row>
        </Grid>
      </div>
    );
  }

  return (
    <div className="header-bar">
      <Grid columns={6} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
          <Link to="/cursed" >
            <Image src={logo} width={200} />
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              <Button color="black" basic={location.pathname !== "/"}>
                Home Page
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link
              to="/trainers"
              aria-current={
                location.pathname === "/trainers" ? "page" : undefined
              }
            >
              <Button color="black" basic={location.pathname !== "/trainers"}>
                Our Trainers
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link
              to="/workouts"
              aria-current={
                location.pathname === "/workouts" ? "page" : undefined
              }
            >
              <Button color="black" basic={location.pathname !== "/workouts"}>
                Free Workouts
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <Link
              to="/favorites"
              aria-current={
                location.pathname === "/favorites" ? "page" : undefined
              }
            >
              <Button color="black" basic={location.pathname !== "/favorites"}>
                My Favorite
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <LogoutButton />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Header;
