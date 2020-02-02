import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";

export default class Basic extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Basic</h1>
            </Layout>
        );
    }

}