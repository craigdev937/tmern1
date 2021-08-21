import express from "express";
import { indexHome } from "../controllers/fileCon";

export const fileRt: express.Router = express.Router();
    fileRt.get("/", indexHome);




