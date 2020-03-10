import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import VisualisationManager from "src/ui/visualisation/VisualisationManager";
import {
    PageHeadBox,
    PageHeadTitle,
    PageHeadContent,
    LoadingMessage,
    PageDescriptionIcon
} from "src/ui/components";
import {sanitizePublicPath} from "../src/util/helpers";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true};
    }

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Asset Tracking - Temporal Development"}/>
                    <PageHeadContent>
                        <VisualisationDescription/>
                    </PageHeadContent>
                </PageHeadBox>
                {this.state.loading ? <LoadingMessage/> : <VisualisationManager/>}
            </Layout>
        );
    }

}

const VisualisationDescription = React.memo(function VisualisationDescription() {
    return <div className={"visualisation-description mb-2"}>
        <p><PageDescriptionIcon icon={"static/onboarding/error_outline-24px.svg"}/>Click these icons to toggle the
            visibility of the Context (left) and Control (right) panel:
            <img className={"toggle-icons ml-2 mr-2"} alt={""}
                 src={sanitizePublicPath("static/visualisation/collapse_increase.png")}/>
            <img className={"toggle-icons mr-2"} alt={""}
                 src={sanitizePublicPath("static/visualisation/collapse_decrease.png")}/>
        </p>
    </div>
});