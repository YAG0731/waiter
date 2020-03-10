const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restapp1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(err => console.err('Could not connect to Mongo', err))

//@ts-check
const checkoutTable = new mongoose.Schema({
    total: number, 
    uid: String
});
this.setState({
    dataHistory : [...this.state.dataHistory, newArr]
    })
async function createCheckOut(){
    const {date, month, year} = getDMY()

    if (!total)
        return

    if (todayData === undefined) {
        const data = [...dataHistory, {date, month, year, money: total, customer: 1}]
        await db.collection('db').doc(uid).set({data})

        dispatch({
            type: "CHECK_OUT",
            data,
            amount: total
        })
    } else {
        dataHistoryCopy.push({date, month, year, money: total + lastItem.money, customer: lastItem.customer + 1})

        await db.collection('db').doc(uid).set({
            data: dataHistoryCopy
        })

        dispatch({
            type: "CHECK_OUT",
            data: dataHistoryCopy,
            amount: total
        })
    }
}

createCheckOut();