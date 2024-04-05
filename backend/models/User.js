import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const UserSchema = new Schema({
    name :{
        type: String
    },
    email :{
        type: String
    },
    password:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User = mongoose.model('User',UserSchema);

export default User ;