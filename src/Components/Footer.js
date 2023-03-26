import React from 'react'
import { Image } from 'semantic-ui-react'
import { Item } from 'semantic-ui-react'

const Footer = () => (
  <Item.Group>
    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content horizontalAlign='left'>
        <Item.Header>left Aligned</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content horizontalAlign='middle'>
        <Item.Header>Middle Aligned</Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />

      <Item.Content horizontalAlign='right'>
        <Item.Header>Right Aligned</Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default Footer;