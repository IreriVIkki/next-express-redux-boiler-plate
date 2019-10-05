const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    registeredAt: {
        type: Date,
        default: Date.now,
    },
    userName: {
        type: String,
        trim: true,
    },
    firstName: {
        type: String,
        trim: true,
        default: null,
    },
    lastName: {
        type: String,
        trim: true,
        default: null,
    },
    avatar: {
        type: String,
        default: "/images/anonymous.png",
    },
    about: {
        type: String,
        default: "",
    },
    occupation: {
        type: String,
        trim: true,
        default: null,
    },
    nationality: {
        type: String,
        trim: true,
        default: null,
    },
    website: String,
    phone: Number,
    socialMedia: {
        type: Map,
        of: String,
    },
    gender: {
        type: String,
        enum: ["MALE", "FEMALE", "OTHER", "PREFER NOT TO SAY"],
    },
});

module.exports = mongoose.model("profile", ProfileSchema);
