const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapp1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo', err))

const reservationSchema = new mongoose.Schema({
    guestName: String,
    partyNumber: Number,
    resDate: Date,
    time24hr: String,
    tableNumber: Number,
    date: {type: Date, default: Date.now }
});

const Res = mongoose.model('Reservation', reservationSchema);

async function createRes(){

    const res1 = new Res({
        guestName: 'Jones',
        partyNumber: 4,
        resDate: '2020-03-15',
        time24hr: '1900',
        tableNumber: 1
    })
    
    var result = await res1.save();
    console.log("res1 - " + result);

    const res2 = new Res({
        guestName:"Smith",
        partyNumber: 2,
        resDate: '2020-03-16',
        time24hr: '1930',
        tableNumber: 3
    })

    result = await res2.save();
    console.log("res2 - " + result);

    const res3 = new Res({
        guestName:"Arther",
        partyNumber: 2,
        resDate: '2020-03-15',
        time24hr: '1930',
        tableNumber: 2
    })

    result = await res3.save();
    console.log("res3 - " + result);

};

createRes();