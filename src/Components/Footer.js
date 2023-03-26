import React from 'react'
import { Item, Icon, Button } from 'semantic-ui-react'

const Footer = () => {
  return (
    <div className='footer'>

  <Item.Group>
    <Item>
      <Item.Content >
      <Button color="blue" basic icon>
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
    </div>
  )
  }

export default Footer;