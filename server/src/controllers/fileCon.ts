import { RequestHandler } from "express";

export const indexHome: RequestHandler = 
(req, res) => {
    res.json({ api: "Multer and Nodemailer!" });
};




