import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import {URL} from "../constants";

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout>
                <h1>Assessment</h1>
                <div>
                    <a className={"nav"} href={URL.onboarding.basic}>Onboarding Basic</a>
                    <a className={"nav"} href={URL.onboarding.advanced}>Onboarding Advanced</a>
                    <a className={"nav"} href={URL.onboarding.proficient}>Onboarding Proficient</a>
                </div>
            </Layout>
        );
    }

}