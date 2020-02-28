import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';

export default class Context extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <strong className={"text-red-800"}>THIS PAGE IS UNDER CONSTRUCTION</strong>
                <h1>Context</h1>
            </Layout>
        );
    }

}