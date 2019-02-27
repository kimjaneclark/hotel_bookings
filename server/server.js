const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    //client response from connection
    const db = client.db('hotel_booking')
    const bookings = db.collection('bookings')
    const bookingRouter = createRouter(bookings)
    app.use('/api/bookings', bookingRouter)

  })
  .catch(console.error)

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
