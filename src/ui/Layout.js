import React from "react";
import "../../public/styles/main.scss";
import Head from 'next/head'

export default ({children, title = 'VisOnboarding'}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="VisOnboarding - A Proof of concept Prototype"/>
            <meta name="author" content="Mathias Mayrhofer"/>
        </Head>
        <div className={"flex flex-wrap w-9/10 mr-8 ml-8"}>
            {children}
        </div>
    </div>
)