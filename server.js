const express = require('express');
const app = express();
const coffee = require('./data/coffee');
const multer = require('multer');
const mongoose =require('mongoose');

mongoose.Promise= global.Promise;

mongoose.connect('mongodb://user:automat1@ds026898.mlab.com:26898/coffeshop');
mongoose.connection
.once('open',()=>console.log('connected to Db'))
.on('error', (e)=>console.log(e));

let storage= multer.diskStorage({
    destination:function(req, file ,cb){
        cb(null , file.originalname)
    }
})
const upload = multer({storage:storage});

router.post('/api/additem', upload.single('itemimage'), async (req, res) => {
    try {
      console.log(req.file);
      console.log(req.body);
      // naujas irasas i DB
  
      const item = new Item({
        name: req.body.name,
        price: req.body.price,
        img: '/uploads/' + req.file.originalname
      });
      await item.save();
      res.send({
        message: 'new item saved',
        name: item.name,
        price: item.price,
        img: item.img,
        _id:item._id
      },console.log('saved'));
  
    } catch (err) {
      console.log(err.message);
      res.status(400).send({message: 'ups, something went wrong'})
    }
  
  });

const port = process.env.PORT || 9000;

app.use(express.static(__dirname + '/public'));


app.get('/api/', (req, res) => {
    res.json({coffee});
})
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})
