const zod = require("zod");
const { User, Account } = require("../../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string()
});

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST") {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ message: "Email already taken" });
    }

    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });

    await Account.create({ userId: user._id, balance: Math.random() * 10000 });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.json({ message: "User created successfully", token });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
