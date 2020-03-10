const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapp1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo', err))

const addTableItem  =  new mongoose.Schema({
    name: string, 
    price: number, 
    id: number
});
    
async function createItem(){
    type: "ADD_TABLE_ITEM";
    tableId: id;
    item: {
        price,
        name
    }
}

createItem();