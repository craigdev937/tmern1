import express from "express";
import multer from "multer";
import { indexHome, UploadFile } from "../controllers/fileCon";

const storage: multer.StorageEngine = multer.diskStorage({});
let upload: multer.Multer = multer({ storage });

export const fileRt: express.Router = express.Router();
    fileRt.post("/upload", upload.single("myFile"), UploadFile);
    fileRt.get("/", indexHome);




