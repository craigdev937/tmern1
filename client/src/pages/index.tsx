import React from "react";
import { DropZone } from "../components/DropZone";

export default function Index(): JSX.Element {
    const [file, setFile] = React.useState({} as any);

    return (
        <React.StrictMode>
            <main className="
                h-screen bg-gray-500 
                flex flex-col items-center 
                justify-center"
            >
                <DropZone setFile={setFile} />
                {file?.name}
            </main>
        </React.StrictMode>
    );
};




