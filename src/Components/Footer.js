import React from 'react'
import { Item, Icon, Button } from 'semantic-ui-react'

const Footer = () => (
  <Item.Group>
    <Item>
      <Item.Content position="right">
      <Button color="blue" basic icon>
        <Icon name="facebook" ></Icon>
          Give us a like on Facebook!
        </Button>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content position="right">
      <Button color="purple" basic icon>
        <Icon name="instagram" ></Icon>
         Follow the team on Instagram!
        </Button>
      </Item.Content>
    </Item>

    <Item>
      <Item.Content position="right">
      <Button color="red" basic icon>
        <Icon name="youtube" ></Icon>
         Subscribe to our channel!
        </Button>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Footer;