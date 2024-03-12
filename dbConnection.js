const mongoose = require('mongoose')

const dbConnect = async(req,res)=>{
    try{
        const connect  = await mongoose.connect(process.env.connect)
        res.status(200).json({'message':`${connect}`})
    }
    catch(err){
        res.status(404).json({"message": `Database connection error ${err}`})
    }
}

module.exports = dbConnect