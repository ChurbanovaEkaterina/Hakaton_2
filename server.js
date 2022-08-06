const express = require('express')
const app = express()
const axios = require("axios");

app.use('/',express.static(__dirname+'/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}));

const { getData } = require('./public/script.js')

let options = getData()

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

app.get('/search',(req,res)=>{
  console.log(req.query);
  res.sendFile(__dirname+'/public/index.html')
})


app.listen(3000,()=>{
  console.log('server is running on port 3000');
});

//console.log(options)