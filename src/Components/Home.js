import React, { Component } from 'react'
import logo from '../images/logo.jpeg'
import { 
    Segment, 
    Image,
    Button,
    Form,
    Input,
    Radio,
    Select,
} from 'semantic-ui-react'

const options = [
    { key: 'f', text: 'Facebook', value: 'Facebook' },
    { key: 'i', text: 'Instagram', value: 'Instagram' },
    { key: 'g', text: 'Google', value: 'Google' },
    { key: 'e', text: 'Existing Member', value: 'Existing Member' },
    { key: 's', text: 'Drove by the gym', value: 'Drove by the gym' },
    { key: 'o', text: 'Other', value: 'Other' },
  ]
  

class Home extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
    return (
        <div className="home" >
             <Segment centered>
                <Image src={logo} size='large' circular centered/>
                <h2>About Us</h2>
                <p>Our gym was created by 3 extreme finess competitors 
                    who grew a passion for helping other people reach their
                    goals too! We offer group training classes, personal 
                    training sessions and we now have an online based training, 
                    so you can get swoll in the comfort of your own home! 
                    Each of our trainers have years of expierence and their own 
                    unique specialties and training styles, giving our clients
                    a variety of different workouts to choose from. We take pride 
                    in our training and ability to work one-on-one with clients 
                    to give them the best diet and exercise routines that work with 
                    their indivual lifestyles and body types. Sign up down below for 
                    a consultation and recieve your first month with us completely free!
                </p>
             </Segment>
             <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Name'
                    placeholder='Name'
                />
                <Form.Field
                    control={Input}
                    label='Email Address'
                    placeholder='Email Address'
                />
                <Form.Field
                    control={Select}
                    label='How did you hear about us?'
                    options={options}
                    placeholder='How did you hear about us?'
                />
                </Form.Group>
                <Form.Field control={Button}>Submit</Form.Field>
      </Form>
        </div>
    )
  }
}

export default Home;