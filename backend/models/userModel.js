import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email is unique
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false, // Default to false for regular users
    },

},{
    timestamps: true, // Automatically add createdAt and updatedAt fields
});     

const User = mongoose.model("User", userSchema);
export default User;