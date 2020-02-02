import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import ChartManager from "../src/ui/chart/ChartManager";
import {sanitizePublicPath} from "../src/util/helpers";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Visualisation</h1>
                <ChartManager/>
                <img className={"image layout"} src={sanitizePublicPath("static/gf_layout.png")} alt="map"/>
            </Layout>
        );
    }

}