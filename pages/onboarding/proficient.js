import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import {withPageRouter} from "../../src/util/helpers";

//TODO basic/advanced/proficient -> DRY
export class Proficient extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {score: parseInt(props.router.query.pts) || null};
    }

    render() {
        return (
            <Layout>
                <div className={"h-screen border-8 border-yellow-700"}>
                    <strong className={"text-red-800"}>THIS PAGE IS UNDER CONSTRUCTION</strong>
                    <h1>Proficient</h1>
                    <p>{this.state.score}</p>
                </div>
            </Layout>
        );
    }

}

export default withPageRouter(Proficient);