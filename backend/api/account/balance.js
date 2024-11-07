const { Account } = require("../../db");
const { authMiddleware } = require("../../middleware");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "GET") {
    await authMiddleware(req, res, async () => {
      const account = await Account.findOne({ userId: req.userId });
      res.json({ balance: account.balance });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
