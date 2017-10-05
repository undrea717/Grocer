import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const About = () =>
  <div>
    
    <Hero backgroundImage="https://ak5.picdn.net/shutterstock/videos/13723595/thumb/4.jpg">
      <h1>SmartGrocer</h1>
      <h2>Meal Planning Done Right</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To SmartGrocer!</h1>
        </Col>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
     <br/>
      <Row>
        <Col size="md-12">
          <p className="text-center">
            We all know going grocery shopping is a hassle. Even more so when you're squinting at the list you scribbled down on your way out the door! And it's all the same old recipes too. Well now SmartGrocer is here to help you break out of your rut without breaking the bank. 
          </p>
          <p className="text-center">
           On our recipes page use the preferences icon to select what kind of recipes you would like to eat. SmartGrocer then provides you with a number of delicious suggestions. Select one and if you like what you see, click "Add Ingredients" to add them to your shopping list. Do this to your hert's content! When you've finished select the list tab to see all the ingredients you'll need grouped in one place! No scraps of paper or bad handwriting required.  
          </p>
          <p className="text-center">
            Happy Shopping!
          </p>
        </Col>
      </Row>
      <Row>
      <Col size="md-12">
      </Col>
      </Row>
      </Container>
  </div>

export default About;
