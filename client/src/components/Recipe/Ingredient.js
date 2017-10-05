import React from 'react';
import { Button } from 'react-bootstrap';
// import IngredientAddBtn from "./Button";

class Ingredient extends React.Component {

	render() {
		console.log('are you hereeeeee', this.props)
		const ingredient = this.props.ingredient;

		return (
			<div className="container">
				<div className="row">
					<div className="col=md-8">
						<ul>
							<li>
							{ingredient}
							</li>
						</ul>
					</div>
					
				</div>
				
			</div>
			)
	}
}

export default Ingredient;