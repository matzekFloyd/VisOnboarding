import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import {withPageRouter} from "../../src/util/helpers";

//TODO basic/advanced/proficient -> DRY
class Basic extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {score: parseInt(props.router.query.pts) || null};
    }

    render() {
        return (
            <Layout>
                <div className={"h-screen border-8 border-green-700"}>
                    <h1>Basic</h1>
                    <p>{this.state.score}</p>
                </div>
            </Layout>
        );
    }

}

export default withPageRouter(Basic)