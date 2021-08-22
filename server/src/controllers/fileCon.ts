import { config } from "../config/keys";
import { RequestHandler } from "express";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { File, IFile } from "../models/File";

export const UploadFile: RequestHandler = 
async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400)
                .json({msg: "Please select a file"});
        };
        let uploadedFile: UploadApiResponse;
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
            folder: "sharedFile",
            resource_type: "auto"
        });
        const { originalname } = req.file;
        const { secure_url, bytes, format } = uploadedFile;
        const file: IFile = await File.create({
            filename: originalname,
            sizeInBytes: bytes,
            secure_url: secure_url, 
            format: format
        });
        res.status(200).json({
            id: file._id,
            downloadPageLink: `${config.API_BASE_ENDPOINT_CLIENT}
                download/${file._id}`
        })
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const indexHome: RequestHandler = 
(req, res) => {
    res.json({ api: "Multer and Nodemailer!" });
};




