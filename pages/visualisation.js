import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import VisualisationManager from "src/ui/visualisation/VisualisationManager";
import {PageHeadBox, PageHeadTitle, PageHeadContent, Empty, LoadingMessage} from "src/ui/components";

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
                        <Empty/>
                    </PageHeadContent>
                </PageHeadBox>
                {this.state.loading ? <LoadingMessage/> : <VisualisationManager/>}
            </Layout>
        );
    }

}