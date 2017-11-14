/**
 * Created by jgm16 on 07/11/2017.
 */
import mongoose, { Schema} from 'mongoose';

const UserSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required: false,
    }

});

export default mongoose.model('User', UserSchema);