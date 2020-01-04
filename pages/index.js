import Layout from '../src/ui/Layout';
import "../src/css/main.scss"
import React, {PureComponent} from 'react';

export default class Home extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Home</h1>
            </Layout>
        );
    }

}