import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import {
    PageDescriptionIcon,
    PageHeadBox,
    PageHeadTitle,
    LoadingMessage,
    ButtonCta
} from "src/ui/components";
import {URL} from "../constants";
import Router from "next/router";

export default class Context extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 250);
    }

    redirectToVisualisation(event) {
        event.preventDefault();
        this.setState({loading: true}, () => {
            let href = URL.visualisation;
            Router.push(href, href, {}).then(() => console.log("Redirecting: ", href));
        });
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Task"}/>
                </PageHeadBox>
                {this.state.loading ? <LoadingMessage/> :
                    <div className={"flex flex-wrap w-full mt-6 bg-green-200"}>
                        <div className={"w-1/3 m-auto bg-red-400"}>
                            Box 1
                        </div>
                        <div className={"w-1/2 m-auto bg-blue-400"}>
                            Box 2
                        </div>
                        <div className={"w-full m-auto"}>
                            <div className={"w-1/3 mr-auto ml-auto mt-6"}>
                                <div className={"flex w-full"}>
                                    <ButtonCta title={"Continue to the visualisation"} className={"w-2/4 m-auto"}
                                               onClick={(e) => this.redirectToVisualisation(e)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </Layout>
        );
    }

}

// noinspection JSUnusedLocalSymbols
/**
 * @deprecated
 * @type {{compare: (null|*), $$typeof: number, type: *}}
 */
const ContextDescription = React.memo(function AssessmentDescription() {
    return <div className={"context-description"}>
        <p><PageDescriptionIcon icon={"static/check-24px.svg"}/>Assessment</p>
        <p><PageDescriptionIcon icon={"static/check-24px.svg"}/>Onboarding</p>
        <p><PageDescriptionIcon icon={"static/radio_button_unchecked-24px.svg"}/>Task</p>
    </div>
});