const Pets = require('./models/pets')
const Users = require('./models/user')
const Wishlist = require('./models/wishlist')
const bcrypt = require('bcrypt');

const getPets = async (req, res) => {
  try {
    const pets = await Pets.find({})
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({ error: 'Error getting pets' });
  }
};

const getWishlist = async(req, res) => {
  try{
    const wishlist = await Wishlist.find({})
    return res.status(200).json({ wishlist });
  }catch(error){
    console.log(error)
    return res.status(500).json({ error: 'Error getting wishlist' });
  }
}

const addWishlist = async (req, res) => {
  try{
    const data = req.body
    const wishlist = await Wishlist.create(data)
    return res.status(200).json({ wishlist });
  }catch(error){
    console.log(error)
    return res.status(500).json({ error: 'Error getting wishlist' });
  }
}

const deleteWishlist = async(req, res) => {
  try{
    const data = req.body
    console.log(data)
    const wishlist = await Wishlist.deleteOne({id: data.id})
    return res.status(200).json({ wishlist });
  }catch(error){
    console.log(error)
    return res.status(500).json({ error: 'Error getting wishlist' });
  }
}

const registerUser = async(req, res) => {
  try{
    const {email, password} = req.body
    console.log(email, password)
    const hashedPassword = await bcrypt.hash(password, 10);
    await Users.create({ email, password: hashedPassword });
    return res.status(200).json();
  }catch(error){
    console.log(error)
    return res.status(500).json({ error: 'Error registering new user' });
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password)
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    return res.status(200).json({ email });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error during login' });
  }
};


module.exports = {
  getPets,
  getWishlist,
  addWishlist,
  deleteWishlist,
  registerUser,
  loginUser
}

