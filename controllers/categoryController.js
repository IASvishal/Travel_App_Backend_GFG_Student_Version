const category = require("../model/category.model");
const categoryHandler = async(req, res)=>{
    try{
        const categories = await category.find({});
        categories ? res.json(categories) : res.status(404).json({message: "No data found"});
    }catch(err){
        console.log(err);
        res.status(404).json({message: "Could Not Find Categories"});
    }
}

module.exports = categoryHandler;