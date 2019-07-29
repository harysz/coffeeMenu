const express = require('express');
const app = express();
const coffee = require('./data/coffee');
const bodyParser = require('body-parser');
const path= require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



const port = process.env.PORT || 9000;
app.use(express.static(path.join( __dirname + 'build')));

app.get('/api/', (req, res) => {
    
    res.json(coffee.coffee);

})
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'build/index.hrml' ))
});

app.post('/api/upload/',(req,res)=>{
 
    let name = req.body.name;
    let price = req.body.price;
    let url = req.body.url;
    res.end('got em');
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
