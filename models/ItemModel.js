const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const itemScehma= new Schema({
    name:{
    type:String,
    required:true
        },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:'you need to upload an image good sir/mis'
    }
});

module.exports= mongoose.model('items', itemScehma);