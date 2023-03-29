import React from 'react'
import { Icon, Button, Grid } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className='footer-container'>
    <div className="footer">
      <Grid centered columns={3}>
        <Grid.Column className="centered-column" textAlign="center">
          <Button color="blue" basic animated>
            <Button.Content visible>Give us a like on Facebook!</Button.Content>
            <Button.Content hidden>
              <Icon name="facebook" />
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
          <Button color="red" basic animated>
            <Button.Content visible>Subscribe to our channel!</Button.Content>
            <Button.Content hidden>
              <Icon name="youtube" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  </div>
  );
};

export default Footer;