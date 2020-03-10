mongoose.connect('mongodb://localhost/restapp1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo', err))

const DeleteTableItem  =  new mongoose.Schema({
    tableId: number, 
    id: number
});

async function createDeleteItem(){
    type: "DELETE_TABLE_ITEM",
	tableId,
    id
}

createDeleteItem();


