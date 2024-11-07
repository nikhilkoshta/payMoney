const zod = require("zod");
const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config");

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string()
});

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST") {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "Invalid inputs" });
    }

    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if (user) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
