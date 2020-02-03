import React, {PureComponent} from 'react';
import Layout from "../../src/ui/Layout";
import {withRouter} from 'next/router'
import {URL} from "../../constants";

//TODO basic/advanced/proficient -> DRY
class Basic extends PureComponent {

    constructor(props, context) {
        super(props, context);
        const {router} = this.props;
        this.state = {score: parseInt(router.query.res) || null};
    }

    render() {
        return (
            <Layout>
                <h1>Basic</h1>
                {this.state.score === null ?
                    <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                        <p className="font-bold">Informational message</p>
                        <p className="text-sm">Something went wrong! <a href={URL.assessment}><strong>Please try
                            again</strong></a>
                        </p>
                    </div> : <p><strong>
                        {this.state.score}
                    </strong></p>}
            </Layout>
        );
    }

}

export default withRouter(Basic)