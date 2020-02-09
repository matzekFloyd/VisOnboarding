import React from "react";
import Header from './Header';
import {sanitizePublicPath} from "../util/helpers";
import "../../public/styles/main.scss";

const layoutStyle = {
    margin: 10,
    padding: 10,
};

const Layout = props => (
    <div style={layoutStyle}>
        <link type={"text/scss"} href={sanitizePublicPath("styles/main.scss")}/>
        <Header/>
        {props.children}
    </div>
);

export default Layout;