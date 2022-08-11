const express = require('express')
const app = express()
const axios = require("axios");
const {searchName} = require('./Modules/script.js');


app.use('/',express.static(__dirname+'/public'))


app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.get('/data/:name', (req,res)=> {
	const options = searchName(req.params.name)
	axios.request(options).then(function (response) {
		res.json(response.data.results)
	}).catch(function (error) {
		console.error(error);
	});
})

app.listen(3000,()=>{
  console.log('server is running on port 3000');
});
