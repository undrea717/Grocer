import React from "react";
import "./Hero.css";
import Velocity from 'velocity-react';
import { VelocityTransitionGroup } from 'velocity-react';

const Hero = props =>
  <div
    className="hero text-center"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
    <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>

             
            </VelocityTransitionGroup>
  </div>;

export default Hero;
