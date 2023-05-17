//import films collection/model
const films = require('../models/filmsSchema')

//get all films api
exports.getallfilms = async (req,res)=>{
    //logic
    try{
        //get all films from films collection in mongodb
    const allfilms = await films.find()
    res.status(200).json(allfilms)

    }
    catch(error){
        res.status(401).json(error)
    }
}

//view films
exports.viewfilms = async (req,res)=>{

    const id = req.params.id
    

    //login
    try{
        const viewfilm = await films.findOne({id})
        if(viewfilm){
            //send to client
            res.status(200).json(viewfilm)
        }
        else{
            res.status(404).json('film not found')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}