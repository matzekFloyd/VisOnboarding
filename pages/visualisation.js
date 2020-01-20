import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import "../src/css/main.scss";
import ChartManager from "../src/ui/chart/ChartManager";
import {JAN_15} from "../constants";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Visualisation</h1>
                <ChartManager identifier={JAN_15}/>
                <img src={"../static/map.PNG"} alt="map"/>
            </Layout>
        );
    }

}