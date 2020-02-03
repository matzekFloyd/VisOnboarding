import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import {withPageRouter} from "../../src/util/helpers";

//TODO basic/advanced/proficient -> DRY
export class Proficient extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {score: parseInt(props.router.query.res) || null};
    }

    render() {
        return (
            <Layout>
                <h1>Proficient</h1>
                <p>{this.state.score}</p>
            </Layout>
        );
    }

}

export default withPageRouter(Proficient);