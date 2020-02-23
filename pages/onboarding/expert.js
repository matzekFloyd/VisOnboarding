import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import {withPageRouter} from "../../src/util/helpers";

//TODO basic/advanced/proficient -> DRY
export class Expert extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {score: parseInt(props.router.query.pts) || null};
    }

    render() {
        return (
            <Layout>
                <h1>Expert</h1>
                <p>{this.state.score}</p>
            </Layout>
        );
    }

}

export default withPageRouter(Expert);