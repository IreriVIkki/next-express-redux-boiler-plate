const router = require("express").Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = require("config").jwtSecret;

router.get("/me", auth, (req, res) => {
    User.findOne({ _id: req.user._id }, "-password", { lean: true })
        .populate("profile")
        .exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    msg: "Failed to fetch user",
                    _id: null,
                    action: null,
                });
            } else {
                return res.status(200).json({ ...user });
            }
        });
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            msg: `Please fill out all fields`,
            _id: 400,
            action: null,
        });
    }

    User.findOne({ email }, (err, user) => {
        if (err) {
            return res.status(503).json({
                msg: `Service unavailable, Try again later`,
                _id: 503,
                action: null,
            });
        }

        if (!user) {
            return res.status(403).json({
                msg: `User with this email does not exist**`,
                _id: 403,
                action: "Register now",
            });
        }

        bcrypt
            .compare(password, user.password)
            .then(isMatch => {
                if (!isMatch)
                    return res.status(406).json({
                        msg: `Error, Invalid credentials`,
                        _id: 406,
                        action: null,
                    });

                jwt.sign(
                    {
                        _id: user._id,
                        profileId: user.profile,
                    },
                    jwtSecret,
                    { expiresIn: 84600 },
                    (err, token) => {
                        if (err) throw err;

                        user["password"] = null;
                        return res.status(200).json({
                            user,
                            token,
                        });
                    },
                );
            })
            .catch(err => {
                return res.status(503).json({
                    msg: `Service unavailable, Try again later`,
                    _id: 503,
                    action: null,
                });
            });
    });
});

router.post("/register", (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        return res.status(400).json({
            msg: `Please fill out all the fields`,
            _id: 400,
            action: null,
        });
    }

    User.findOne({ email }, (err, user) => {
        if (err) {
            return res.status(503).json({
                msg: `Service unavailable, Try again later`,
                _id: 503,
                action: null,
            });
        }

        if (user) {
            return res.status(401).json({
                msg: `${email} is already in use ***`,
                _id: 401,
                action: null,
            });
        }

        const newUser = new User({
            userName,
            email,
            password,
        });
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                return res.status(500).json({
                    msg: `Something went wrong, Try again later`,
                    _id: 500,
                    action: null,
                });
            }

            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        msg: `Something went wrong, Try again later`,
                        _id: 500,
                        action: null,
                    });
                }
                newUser.password = hash;

                newUser
                    .save()
                    .then(user => {
                        jwt.sign(
                            {
                                _id: user._id,
                                profileId: user.profile,
                            },
                            jwtSecret,
                            { expiresIn: 84600 },
                            (err, token) => {
                                if (err) throw err;

                                user["password"] = null;

                                return res.status(200).json({
                                    user,
                                    token,
                                });
                            },
                        );
                    })
                    .catch(err => {
                        return res.status(503).json({
                            msg: `Service unavailable, Try again later`,
                            _id: 503,
                            action: null,
                        });
                    });
            });
        });
    });
});

module.exports = router;
