import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    image: {
        url: String,
        public_id: String
    }
})

export default mongoose.model('Post', postSchema)