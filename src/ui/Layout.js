import React from "react";
import Header from './Header';
import {sanitizePublicPath} from "../util/helpers";
import "../../public/styles/main.scss";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <link type={"text/scss"} href={sanitizePublicPath("styles/main.scss")}/>
        <Header/>
        {props.children}
    </div>
);

export default Layout;