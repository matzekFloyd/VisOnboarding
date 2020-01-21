import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import "../src/css/main.scss";
import ChartManager from "../src/ui/chart/ChartManager";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Visualisation</h1>
                <ChartManager/>
                <img className={"image layout"} src={"/static/gf_layout.PNG"} alt="map"/>
            </Layout>
        );
    }

}