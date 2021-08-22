import express from "express";
import helmet from "helmet";
import logger from "morgan";
import mongoose from "mongoose";
import { config } from "./config/keys";
import { fileRt } from "./routes/fileRt";
import { v2 as cloudinary } from "cloudinary";

(async () => {
    // MondoDB and Express.
    await mongoose.connect(config.MONGO_URI, {
        useNewUrlParser: true, useFindAndModify: false,
        useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("MongoDB is now Connected!"))
    .catch((error) => console.log(error));
    const app: express.Application = express();
    app.use(helmet());

    // Cloudinary Connection
    cloudinary.config({
        cloud_name: config.CLOUDINARY_API_CLOUD,
        api_key: config.CLOUDINARY_API_KEY,
        api_secret: config.CLOUDINARY_API_SECRET
    })

    // CORS Setup.
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", 
            "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods",
                "POST, GET, PUT, PATCH, DELETE");
            return res.status(200).json({"status message": "OK"});
        };
        next();
    });

    // Middleware
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(logger("dev"));

    // Routes and Port
    app.use("/api/files", fileRt);
    const port = config.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})().catch((error) => console.log(error));





