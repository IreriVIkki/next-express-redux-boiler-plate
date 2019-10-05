const config = require("config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token)
        return res.status(401).json({
            msg: "You need to be logged in to perform this action",
            _id: null,
            action: null,
        });

    try {
        // Verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        // Add user from payload
        req.user = decoded;
        return next();
    } catch (error) {
        res.status(400).json({
            msg: `Session Expired, login again`,
            _id: null,
            action: null,
        });
    }
};

module.exports = auth;
