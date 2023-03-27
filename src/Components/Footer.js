import React from 'react'
import { Item, Icon, Button, Sticky } from 'semantic-ui-react'

const Footer = () => {
  return (

    <div className='footer'>
    <Sticky >
    <Item.Group>
      <Item>
        <Item.Content >
        <Button color="blue" basic icon centered>
          <Icon name="facebook" ></Icon>
            Give us a like on Facebook!
          </Button>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content >
        <Button color="purple" basic icon>
          <Icon name="instagram" ></Icon>
          Follow the team on Instagram!
          </Button>
        </Item.Content>
      </Item>
      <Item>
        <Item.Content >
        <Button color="red" basic icon>
          <Icon name="youtube" ></Icon>
          Subscribe to our channel!
          </Button>
        </Item.Content>
      </Item>
    </Item.Group>
    </Sticky>
    </div>
  )
  }

export default Footer;