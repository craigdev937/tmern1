import React from "react";
import { useDropzone } from "react-dropzone";

export const DropZone: React.FC<{
    setFile: React.Dispatch<React.ReactNode>}> = 
({ setFile }) => {
    const onDrop = React.useCallback((acceptedFiles) => {
        console.log(acceptedFiles);
        setFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, 
        isDragReject, isDragAccept } = useDropzone({
        onDrop: onDrop,
        multiple: false,
        accept: "image/jpeg, image/png, audio/mpeg"
    });

    return (
        <main className="w-full p-4">
            <aside {...getRootProps()} 
                className="h-80 w-full 
                bg-gray-800 text-white text-center
                rounded-md cursor-pointer focus:outline-none"
            >
                <div className={
                    `flex flex-col items-center justify-center 
                    border-2 border-dashed border-yellow-200 
                    rounded-xl h-full space-y-3` + 
                    (isDragReject === true ? "border-red-500" : "") +
                    (isDragAccept === true ? "border-green-500" : "")
                }>
                    <input {...getInputProps()} />
                    <img 
                        src="/images/folder.png" 
                        alt="folder" 
                        className="w-16 h-16 align-center"
                    />
                    {isDragReject ? (
                        <p>Sorry, only supports images and MP3</p>
                    ) : (
                        <>
                            <p>Drag and Drop Files Here</p>
                            <p className="mt-2 text-base text-gray-300">
                                Only jpeg, png and mp3 files
                            </p>
                        </>
                    )}
                </div>
            </aside>
        </main>
    );
};





