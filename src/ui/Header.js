import React from 'react';
import {URL} from "../../constants";

const Header = () => (
    <div>
        <a className={"nav"} href={URL.home}>Home</a>
        <a className={"nav"} href={URL.assessment}>Assessment</a>
        <a className={"nav"} href={URL.context}>Context</a>
        <a className={"nav"} href={URL.visualisation}>Visualisation</a>
    </div>
);

export default Header;