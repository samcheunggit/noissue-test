import express from "express";
import cartRoutes from "./cart-route";
import orderRoutes from "./order-route";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Root route is working");
});

router.use("/cart", cartRoutes);
router.use("/order", orderRoutes);

export default router;
