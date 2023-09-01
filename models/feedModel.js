const moment = require("moment/moment")
const mongoose = require("mongoose")
const Schema =mongoose.Schema

const feedSchema = new Schema ({
    name :{
        type :String,
        required : true,
        maxlength :15
    },
    message:{
        type:String,
        required:true,
        maxlength :40

    },
    create_at:{
        type: Date ,
        default :Date.now,
        get:function(createAt){
            return moment(createAt).format("DD/MM/YYYY ")
        }
    }
},{timestamps:true}) 


module.exports=mongoose.model("Feed" , feedSchema)