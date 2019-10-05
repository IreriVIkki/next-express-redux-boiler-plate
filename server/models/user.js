const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Profile = require("./profile");

// Create Schema
const UserSchema = new Schema({
    userName: {
        type: String,
        trim: true,
        required: true,
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "profile",
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Field cannot be blank"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

UserSchema.pre("save", async function(next) {
    await Profile.create({ user: this._id, userName: this.userName })
        .then(profile => {
            this.profile = profile._id;
            next();
        })
        .catch(err => {
            next(err);
        });
});

UserSchema.pre("update", function() {
    this.update({}, { $set: { updatedAt: Date.now, updated: true } });
});

module.exports = User = mongoose.model("user", UserSchema);
