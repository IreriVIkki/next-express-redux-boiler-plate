const express = require("express");
const next = require("next");
const config = require("config");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();
        const auth = require("./routes/auth/index");

        server.use(express.json());
        server.use("/api/auth", auth);

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        mongoose
            .connect(config.get("mongoURI"), {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            })
            .then(() => {
                server.listen(PORT, err => {
                    if (err) throw err;
                    console.log(`> Ready on ${PORT}`);
                });
            })
            .catch(err => console.log(err));
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
