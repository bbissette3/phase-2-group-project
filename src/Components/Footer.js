import React from 'react'
import { Icon, Button, Grid } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className="footer">
      <Grid centered columns={3}>
        <Grid.Column>
          <Button color="blue" basic icon>
            <Icon name="facebook" />
            Give us a like on Facebook!
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color="purple" basic icon>
            <Icon name="instagram" />
            Follow the team on Instagram!
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button color="red" basic icon>
            <Icon name="youtube" />
            Subscribe to our channel!
          </Button>
        </Grid.Column>
      </Grid>
    </div>

  )
  }

export default Footer;