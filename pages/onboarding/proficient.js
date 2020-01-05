import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import "../../src/css/main.scss";

export default class Proficient extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Proficient</h1>
            </Layout>
        );
    }

}