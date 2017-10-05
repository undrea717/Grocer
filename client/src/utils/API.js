import axios from "axios";

export default {
  // Gets all books
	  getRecipes: function() {
	    return axios.get("/api/recipes");
	  },
	  // Gets the book with the given id
	  saveIngredients: function(ingredients) {
	    return axios.post("/api/ingredients/add", ingredients);
	  },
}
  
  

