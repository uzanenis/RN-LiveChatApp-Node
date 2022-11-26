import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType:{
        type:String,
        enum:['USER', 'ADMIN'],
        default: 'USER'
    },
    isAvatarImageSet:{
        type:Boolean,
        default: false
    },
    avatarImage:{
        type: String,
        default: ""
    }
})

export default mongoose.model('User', userSchema)