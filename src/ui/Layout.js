import React from "react";
import "../../public/styles/main.scss";
import Head from 'next/head'
import {sanitizePublicPath} from "src/util/helpers";

export default ({children, title = 'VisOnboarding'}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="VisOnboarding - A Proof of concept Prototype"/>
            <meta name="author" content="Mathias Mayrhofer"/>
            <link rel="shortcut icon" href={sanitizePublicPath("static/favicon.ico")}/>
        </Head>
        <div className={"flex flex-wrap w-9/10 mr-8 ml-8"}>
            {children}
        </div>
        <CopyRight/>
    </div>
)

const CopyRight = React.memo(function CopyRight() {
    return <div className={"copy-right"}>
        © Mathias Mayrhofer 2020
    </div>;
});