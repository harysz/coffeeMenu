const express = require('express');
const app = express();
const coffee = require('./data/coffee');
const cors =require ('cors');
var corsOptions ={
    origin:'*',
    optionSuccessStatus:200,
}




const port = process.env.PORT || 9000;
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

app.get('/api/', (req, res) => {
    res.json({coffee});
})

app.use(cors(corsOptions))
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
