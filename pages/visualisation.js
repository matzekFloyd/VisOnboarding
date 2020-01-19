import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import "../src/css/main.scss";
import Chart from "../src/ui/chart/Chart";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Visualisation</h1>
                <Chart identifier={"JAN_15"}/>
                <img src={"../static/map.PNG"} alt="map"/>
            </Layout>
        );
    }

}