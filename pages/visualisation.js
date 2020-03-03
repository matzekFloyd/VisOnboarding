import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import VisualisationManager from "src/ui/visualisation/VisualisationManager";
import {PageHeadBox, PageHeadTitle, PageHeadContent, Empty} from "src/ui/components";

export default class Visualisation extends PureComponent {

    constructor(props, context) {
        super(props, context);
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
                <VisualisationManager/>
            </Layout>
        );
    }

}