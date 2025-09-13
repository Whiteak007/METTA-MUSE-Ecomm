import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from 'helmet';
import connectDB from "./Config/db_connect.js";
import AuthRouter from "./Routes/AuthRoute.js";
import ProductRouter from './Routes/ProductRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        
        app.use(bodyParser.json());
        app.use(cors());
        app.use(helmet());

        app.use("/api/auth", AuthRouter);
        app.use("/api/products", ProductRouter);

        app.get("/", (req, res) => {
            res.send("Hello! from Backend");
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1);
    }
};

startServer();