// backend/user/index.js
const express = require('express');
const cors = require("cors");
const userRouter = require("./user");
const accountRouter = require("./account");

const app = express();

const router = express.Router();

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;