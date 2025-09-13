import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../Middlewares/Auth.js";

// Protected product route
router.get("/", ensureAuthenticated, async (req, res) => {
    try {
        // Fetch products from external API
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Error fetching products" });
    }
});

export default router;