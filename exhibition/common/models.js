module.exports = {
    user:{
        name: String,
        password:String,
        email: String,
        admin:{
            type:Boolean,default:false
        }
    },
    commodity:{
        name:String,
        price:Number,
        imgSrc:String,
        area:Number,
        detail:String,
        status : {
            type: Boolean, default: true
        }
    },
    cart:{
        uId:String,
        cId:String,
        cName:String,
        cPrice:String,
        cImgSrc:String ,
        cQuantity:Number,
        cStartTime:Date,
        cEndTime:Date,
        cStatus : { type: Boolean, default: false  }
    }
};