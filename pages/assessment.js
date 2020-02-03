import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import {URL} from "../constants";
import {ButtonOutLine} from "../src/ui/components";
import Router from 'next/router';

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    redirect(to) {
        let rand = Math.floor(Math.random() * 100);
        let href = to + "?res=" + rand.toString();
        Router.push(href, href + "~" + Date.now().toString(), {}).then(() => console.log("Redirecting: ", to));
    }

    render() {
        return (
            <Layout>
                <h1>Assessment</h1>
                <div>
                    <ButtonOutLine title={"Basic"} onClick={() => this.redirect(URL.onboarding.basic)}/>
                    <ButtonOutLine title={"Advanced"} onClick={() => this.redirect(URL.onboarding.advanced)}/>
                    <ButtonOutLine title={"Proficient"} onClick={() => this.redirect(URL.onboarding.proficient)}/>
                </div>
            </Layout>
        );
    }

}