const zod = require("zod");
const { User } = require("../../db");
const { authMiddleware } = require("../../middleware");

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional()
});

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "PUT") {
    await authMiddleware(req, res, async () => {
      const { success } = updateBody.safeParse(req.body);
      if (!success) {
        return res.status(400).json({ message: "Invalid input" });
      }

      await User.updateOne({ _id: req.userId }, req.body);
      res.json({ message: "Updated successfully" });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
