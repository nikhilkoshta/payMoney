const mongoose = require("mongoose");
const { Account } = require("../../db");
const { authMiddleware } = require("../../middleware");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST") {
    await authMiddleware(req, res, async () => {
      const session = await mongoose.startSession();
      session.startTransaction();
      const { amount } = req.body;

      try {
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
          await session.abortTransaction();
          return res.status(400).json({ message: "Insufficient balance" });
        }

        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
      } catch (error) {
        await session.abortTransaction();
        res.status(500).json({ message: "Transfer failed due to an internal error" });
      } finally {
        session.endSession();
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
