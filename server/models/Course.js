import mongoose from 'mongoose';
const courseSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:String
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
});
export default mongoose.model('Course',courseSchema);