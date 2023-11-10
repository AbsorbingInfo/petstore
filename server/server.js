const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const configureDb = require('./config');

app.use(cors());
app.use(express.json());
configureDb();

const {
  getPets,
  getWishlist,
  addWishlist,
  deleteWishlist} = require('./controller')

app.get('/api/pets', getPets)
app.get('/api/wishlist', getWishlist)
app.post('/api/wishlist', addWishlist)
app.post('/api/deletewishlist', deleteWishlist)

app.listen( process.env.PORT || 4000, () => {
  console.log(`Server is running!`);
});
