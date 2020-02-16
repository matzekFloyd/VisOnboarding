import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import VisManager from "../src/ui/chart/VisManager";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1 className={"mt-12 text-xl font-extrabold"}>Asset Tracking - Temporal Development</h1>
                <VisManager/>
            </Layout>
        );
    }

}