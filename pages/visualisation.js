import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import VisualisationManager from "src/ui/visualisation/VisualisationManager";
import "../public/styles/visualisation.scss";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1 className={"mt-12 text-xl font-extrabold"}>Asset Tracking - Temporal Development</h1>
                <VisualisationManager/>
            </Layout>
        );
    }

}