import React, { Component } from "react";
import { DropdownButton, MenuItem, Col, Thumbnail, Button, Grid } from 'react-bootstrap';
import axios from 'axios';
import path from "path";
//import API from "../utils/API";



class Discover extends Component {
  
  constructor() {
    super();
    this.state = {
      link: "",
      ingredents: [],
      // activateScrape: activateScrape.bind()
    };
  }

  
  

  loadRecipe = (recipe, index,) => {
    return <Col xs={6} md={4} key={index}>
      <Thumbnail src={recipe.image_url} alt="242x200" width="200px" height="200px">
        <h3>{recipe.title}</h3>
        <p>
          <Button href={'/recipes/' + recipe.title}  bsStyle="primary">See Ingredients</Button>&nbsp;
        </p>
      </Thumbnail>
    </Col>  

  };

  getSelected = (eventKey, event) => {
    axios.get(`/api/recipes/${eventKey}`)
    .then(res => this.setState({recipes: res.data}))
    .catch(err => console.log('err occured', err));
  };



  render() {
    const recipes = this.state.recipes;
    const recipeMap = recipes ? recipes.map((recipe, index) => this.loadRecipe(recipe, index)) : [];
    return (
      <div className="container">
        <div>

    <DropdownButton title='Select Recipe' id={`recipe-dropdown`} onSelect={this.getSelected.bind(this)}>
      <MenuItem eventKey="vegan">Vegan</MenuItem>
      <MenuItem eventKey="vegetarian">Vegetarian</MenuItem>
      <MenuItem eventKey="chicken">Chicken</MenuItem>
      <MenuItem eventKey="beef">Beef</MenuItem>
      <MenuItem eventKey="pork">Pork</MenuItem>
    </DropdownButton>

        </div>
         <div className="w3-panel w3-light-grey">
        <span Style="font-size:150px;line-height:0.6em;opacity:0.2">❝</span>
         <h1 className="text-center">Recipes</h1>
         <h3 className="text-center">
        Pick a Recipe and add the ingredents to your grocery list! </h3>
         <h1 className="text-center">Making Grocery Shopping Easy!!</h1>
        </div>

            <Grid>
          {recipeMap}
            </Grid>
      </div>
    );
  }
}

export default Discover;
