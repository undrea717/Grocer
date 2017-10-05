const router = require("express").Router();
// const ingrdientsRoutes = require("./ingredents");
const path = require("path")
const axios = require("axios");
const cheerio = require("cheerio");
var request = require("request");
var querystring = require('querystring');
const GroceryController = require("../../controllers/grocery-controllers");
// Recipe Routes



	router.get("/recipes/scrape", (req, res) => { 
		request(req.query.f2f_url, function(error, response, html) {
			var $ = cheerio.load(html);
			var results = [];
			var push = false
			$("li").each(function(i, element){
				var ingredents = $(element).text();
				if(push){
					results.push(ingredents.trim());
				}
				if(ingredents == " "){
					push = true;
				}
			});
			res.json(results);
		});
	});

	router.get('/test', (req, res) => res.send('workssss!!!'))

	router.get("/recipes/:id", (req, res) => {
		console.log('why not entering', req.params);
		request('http://food2fork.com/api/search?key=6c03ee7c962fbdb30c6b6e3a8002c196&q='+req.params.id, function(error, response, body){
			console.log('some err', error);
			console.log('==================================', response);
			console.log('**********************************', body);
			body = JSON.parse(body)
			res.json(body.recipes)
		})		 
});

		




module.exports = router;