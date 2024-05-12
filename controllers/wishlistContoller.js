const wishlist = require("../model/wishlist.model");

const createWishlistHandler = async(req, res)=>{
    const newWishlist = new wishlist(req.body);
    try{
        const savedWishlist = await newWishlist.save();
        res.status(201).json(savedWishlist);
    }catch(err){
        
        res.status(500).json({message: "Could Not Find Wishlists"});
    }
}

const deleteWishlistHandler = async(req, res) => {
    try{
        await wishlist.findByIdAndDelete(req.params.id);
        res.json({message: "Wishlist Deleted"});
    }catch(err){
        res.status(500).json({message: "Could Not Find Wishlists"});
    }
}

const getWishlistHandler = async(req, res) => {
    try{
        const wishlists = await wishlist.find({});
        wishlists ? res.json(wishlists) : res.json({message: "No item found into wishlist"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Could Not Find Wishlists"});
    }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};