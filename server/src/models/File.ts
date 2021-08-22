import mongoose from "mongoose";

export interface IFile extends mongoose.Document {
    filename: string,
    secure_url: string,
    format: string,
    sizeInBytes: string,
    sender?: string,
    receiver?: string,
};

const FileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    secure_url: { type: String, required: true },
    format: { type: String, required: true },
    sizeInBytes: { type: String, required: true },
    sender: { type: String },
    receiver: { type: String },
}, { timestamps: true });

export const File = mongoose.model<IFile>("File", FileSchema);



