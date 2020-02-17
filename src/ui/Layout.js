import React from "react";
import Header from './Header';
import "../../public/styles/main.scss";
import Head from 'next/head'

const layoutStyle = {
    margin: 10,
    padding: 10,
};

export default ({children, title = 'VisOnboarding'}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="VisOnboarding - A Proof of concept Prototype"/>
            <meta name="author" content="Mathias Mayrhofer"/>
        </Head>
        <div style={layoutStyle}>
            <Header/>
            {children}
        </div>
    </div>
)