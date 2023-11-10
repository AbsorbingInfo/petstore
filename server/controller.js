const Pets = require('./models/pets')
const Wishlist = require('./models/wishlist')


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


module.exports = {
  getPets,
  getWishlist,
  addWishlist,
  deleteWishlist
}

