const express = require('express')
const app = express()











app.use('/search',express.static(__dirname+'/public'))


app.listen(3000,()=>{
  console.log('server is running on port 5000');
});

