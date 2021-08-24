import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";

export default function
App({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <Component {...pageProps} />
        </React.StrictMode>
    );
};




