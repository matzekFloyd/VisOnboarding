import React, {PureComponent} from 'react';
import Layout from '../src/ui/Layout';
import {URL} from "../constants";
import {ButtonOutLine, Empty} from "../src/ui/components";
import Router from 'next/router';
import AssessmentManager from "../src/ui/assessment/AssessmentManager";
import {TASKS} from "../constants";

export default class Assessment extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.hideOnboardingButton = true;
        this.tasks = this.shuffle(TASKS);
    }

    navigate(event, to) {
        event.preventDefault();
        let rand = Math.floor(Math.random() * 100);
        let href = to + "?res=" + rand.toString();
        Router.push(href, href, {}).then(() => console.log("Redirecting: ", to));
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    render() {
        return (
            <Layout>
                <h1>Assessment</h1>
                <div>
                    <AssessmentManager tasks={this.tasks}/>
                    {this.hideOnboardingButton ? <Empty/> :
                        <div><ButtonOutLine title={"Basic"} onClick={(e) => this.navigate(e, URL.onboarding.basic)}/>
                            <ButtonOutLine title={"Advanced"}
                                           onClick={(e) => this.navigate(e, URL.onboarding.advanced)}/>
                            <ButtonOutLine title={"Proficient"}
                                           onClick={(e) => this.navigate(e, URL.onboarding.proficient)}/>
                        </div>}
                </div>
            </Layout>
        );
    }

}