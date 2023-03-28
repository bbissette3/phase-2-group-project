import React, { Component } from "react";
import teamLogo from "../images/teamLogo.png";
import { Image, Button, Form, Select, Icon } from "semantic-ui-react";

const options = [
  { key: "f", text: "Facebook", value: "Facebook" },
  { key: "i", text: "Instagram", value: "Instagram" },
  { key: "g", text: "Google", value: "Google" },
  { key: "e", text: "Existing Member", value: "Existing Member" },
  { key: "s", text: "Drove by the gym", value: "Drove by the gym" },
  { key: "o", text: "Other", value: "Other" },
];

class Home extends Component {
  state = {};

  handleChange = ({ name, value }) => this.setState({ [name]: value });

  handleSubmit = () => this.setState({ email: "", name: "", option: "" });

  render() {
    const { name, email, option } = this.state;
    return (
      <div className="home">
        <div className="home-bio">
          <Image id="team-logo" src={teamLogo} size="large" centered />
          <h2>About Us</h2>
          <p>
            Our gym was created by 3 extreme fitness competitors who grew a
            passion for helping other people reach their goals too! We offer
            group training classes, personal training sessions and we now have
            an online based training, so you can get swoll in the comfort of
            your own home! Each of our trainers have years of expierence and
            their own unique specialties and training styles, giving our clients
            a variety of different workouts to choose from. We take pride in our
            training and ability to work one-on-one with clients to give them
            the best diet and exercise routines that work with their individual
            lifestyles and body types. Sign up down below for a consultation and
            receive your first month with us completely free!
          </p>
        </div>
        <div className="home-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                value={name}
                name="name"
                placeholder="Name"
                onChange={this.handleChange}
              />
              <Form.Input
                value={email}
                name="email"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
              <Form.Input
                value={option}
                control={Select}
                name="referral"
                options={options}
                placeholder="How did you hear about us?"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button id="home-button" animated fluid color="blue">
              <Button.Content visible>Get my first month free!</Button.Content>
              <Button.Content hidden>
                <Icon name="paper plane outline" /> Sent!
              </Button.Content>
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Home;
