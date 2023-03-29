import React from 'react'
import { Icon, Button, Grid } from 'semantic-ui-react'

const Footer = () => {

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, "_blank")
    }, 100)
  };

  return (
    <div className='footer-container'>
    <div className="footer">
      <Grid centered columns={3}>
        <Grid.Column className="centered-column" textAlign="center">
        <Button
              color="blue"
              basic
              animated
              onClick={() => handleClick("https://www.linkedin.com/in/antonio-reid/")}
            >
              <Button.Content visible>Find us on LinkedIn!</Button.Content>
              <Button.Content hidden>
                <Icon name="linkedin" />
              </Button.Content>
            </Button>
        </Grid.Column>
        <Grid.Column className="centered-column" textAlign="center">
          <Button color="purple" basic animated>
            <Button.Content visible>Follow the team on Instagram!</Button.Content>
            <Button.Content hidden>
              <Icon name="instagram" />
            </Button.Content>
          </Button>
        </Grid.Column>
        <Grid.Column className="centered-column" textAlign="center">
          <Button 
            color="red" 
            basic 
            animated 
            onClick={() => handleClick("https://www.linkedin.com/in/david-ritchey-56112215b/")}
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