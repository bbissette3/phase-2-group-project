import React from "react";
import { Icon, Button, Grid, Image } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  const location = useLocation();

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, "_blank");
    }, 100);
  };

  return (
    <div className="footer-container">
      <div className="footer">
        <Grid centered columns={3} verticalAlign="middle">
          <Grid.Column className="centered-column" textAlign="center">
            <Button
              color="instagram"
              animated
              onClick={() =>
                handleClick("https://www.linkedin.com/in/antonio-reid/")
              }
            >
              <Button.Content visible>Find us on LinkedIn!</Button.Content>
              <Button.Content hidden>
                <Icon name="linkedin" />
              </Button.Content>
            </Button>
          </Grid.Column>
          <Grid.Column className="centered-column" textAlign="center">
            <Link
              to="/"
              element={location.pathname === "/" ? "page" : undefined}
            >
              <Image src={logo} size="tiny" centered />
            </Link>
          </Grid.Column>
          <Grid.Column className="centered-column" textAlign="center">
            <Button
              color="instagram"
              animated
              onClick={() =>
                handleClick(
                  "https://www.linkedin.com/in/david-ritchey-56112215b/"
                )
              }
            >
              <Button.Content visible>Check out our AI!</Button.Content>
              <Button.Content hidden>
                <Icon name="user secret" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
