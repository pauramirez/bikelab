var express = require("express");
var fs = require ("fs")
var request = require("request");
var cheerio = require("cheerio");
var app = express();

app.get("/scrape", function(req, res){

	//URL Scrape
	url = 'http://www.bikehouse.com.co/subcategorias-terciaria/accesorios-para-bicicleta/accesorios/ciclo-computadores';
	request (url, function(error, response, html){
		var productsList = new Array();
		if(!error){
			// Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
			var $ = cheerio.load(html);

			// Finally, we'll define the variables we're going to capture
			var cat;

			var object = {name:"", price:"", image:""};
			var json = {cat :"", productsList:[]};
			$('.tit_y_decrip2').filter(function(){
				var data = $(this);
				console.log(data.children().text());
				json.cat = data.children().text();
			})
			$('#li-producto').filter(function(){

				$('.info_prod').filter(function(){
					$(this).each(function(k,v){
						console.log(v.children[3].children.data);
						//object.name = v.children('h2').text();
						//object.price = v.children('p').text();
						//productsList.push(object);
					});

					/*for(i = 0; i<data.children('h2').length;i++){
						object.name = data.children('h2').text();
						object.price = data.children('p').text();
						productsList.push(object);
					}*/


				})


				/*title = data.children().first().text();
				release = data.children().last().children().text();

				json.title = title;
				json.release = release;*/
			});
			console.log(productsList);
		}
		// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json', JSON.stringify(json, null, 4),function(err){
	if(err) throw err;
	console.log("File written");
});
res.send('Check console');
});
});

app.listen("8081");
console.log("Magic happens on port 8081");
exports = module.exports = app;