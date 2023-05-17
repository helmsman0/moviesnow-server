const mongoose = require('mongoose')

//define schema for product collection to store data
const filmsSchema = new mongoose.Schema({
    
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    rated:{
        type:String,
        required:true
    },
    release:{
        type:String,
        required:true
    },
    runtime:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        require:true
    },
    director:{
        type:String,
        require:true
    },
    writer:{
        type:String,
        require:true
    },
    actors:{
        type:String,
        require:true
    },
    plot:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    awards:{
        type:String,
        require:true
    },
    poster:{
        type:String,
        require:true
    },
    ratings:{
        source:{
            type:String,
            require:true
        },
        value:{
            type:String,
            require:true
        }
    }, 
    metascore:{
        type:String,
        require:true
    },
    imdbrating:{
        type:String,
        require:true
    },
    imdbvotes:{
        type:String,
        require:true
    },
    imdbid:{
        type:String,
        require:true
    },
    types:{
        type:String,
        require:true
    },
    dvd:{
        type:String,
        require:true
    },
    boxoffice:{
        type:String,
        require:true
    },
    production:{
        type:String,
        require:true
    },
    website:{
        type:String,
        require:true
    },
})

//const model to store products
const films = new mongoose.model("films",filmsSchema)

//export model
module.exports = films