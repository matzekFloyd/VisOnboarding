import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import {URL} from "../constants";
import {ButtonOutLine} from "../src/ui/components";
import Router from 'next/router';

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    redirect(e, to) {
        e.preventDefault();
        let rand = Math.floor(Math.random() * 100);
        let href = to + "?res=" + rand.toString();
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
    }

    render() {
        return (
            <Layout>
                <h1>Assessment</h1>
                <div>
                    <ButtonOutLine title={"Basic"} onClick={(e) => this.redirect(e, URL.onboarding.basic)}/>
                    <ButtonOutLine title={"Advanced"} onClick={(e) => this.redirect(e, URL.onboarding.advanced)}/>
                    <ButtonOutLine title={"Proficient"} onClick={(e) => this.redirect(e, URL.onboarding.proficient)}/>
                </div>
            </Layout>
        );
    }

}