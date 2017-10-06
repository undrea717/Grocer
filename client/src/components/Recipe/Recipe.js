import React from "react";
import axios from 'axios';
import Recipes from "../../pages/Recipes";
import Plan from "../../pages/Plan";
import RecipeIngredient from './Ingredient';
import { Button } from 'react-bootstrap';
import API from "../../utils/API"
import path from "path"


class Recipe extends React.Component {
	constructor() {
		super();
		this.state = {
			ingredient: ""
		}
	}

	handleAddIngredient = event => {
   			 event.preventDefault();
    	 {
      API.saveIngredients({
        ingredient: this.state.ingredient,
        })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


	render() {
		const recipeTitle = this.props.match.params.id;
		//axios.post('/recipes', )
		axios.get(`/api/recipes/${recipeTitle}`)
		.then(res => {
			const recipe = res.data.find(recipe => recipe.title == recipeTitle);
			axios.get(`/api/recipes/scrape?f2f_url=${recipe.f2f_url}`)
			.then(res => {
				this.setState({recipeData: res.data});
			})
			.catch(err => console.log('some errrrrrrrr', err));
		})
		.catch(err => console.log('another errr occured', err));

		const recipeIngredients = this.state.recipeData ? this.state.recipeData.map((ingredient, i) => <RecipeIngredient key={i} ingredient={ingredient} />) : ''
		
	

		return(
			<div className="container">
				<h2>Here Are the Ingredient for {recipeTitle}</h2>
				{recipeIngredients}
				<div className="row">
					<div className="col-md-3">
						<Button bsStyle="success" href="/plan"> 
						Add to Grocery List 
						</Button>
					</div>
					<div className="col-md-3">
						<Button bsStyle="success" href="/recipe">
						Return to Recipes 
						</Button>
					</div>
				</div>
			</div>
		)
	}
}


export default Recipe;
