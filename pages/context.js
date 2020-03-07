import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import {
    PageHeadBox,
    PageHeadTitle,
    LoadingMessage,
    ButtonCta
} from "src/ui/components";
import {URL} from "../constants";
import {redirect} from "src/util/helpers";
import PropTypes from "prop-types";
import Visualisation from "src/ui/context/Visualisation";
import GeorgFischer from "src/ui/context/GeorgFischer";
import AssetTracking from "src/ui/context/Asset Tracking";

const EXPLANATION_VISUALISATION = "EXPLANATION_VISUALISATION";
const EXPLANATION_GEORG_FISCHER = "EXPLANATION_GEORG_FISCHER";
const EXPLANATION_ASSET_TRACKING = "EXPLANATION_ASSET_TRACKING";

export default class Context extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.contentCfg = [
            {
                identifier: EXPLANATION_VISUALISATION,
                navText: "Visualisation",
                content: <Visualisation identifier={EXPLANATION_VISUALISATION}/>
            },
            {
                identifier: EXPLANATION_ASSET_TRACKING,
                navText: "Asset Tracking",
                content: <AssetTracking identifier={EXPLANATION_ASSET_TRACKING}/>
            },
            {
                identifier: EXPLANATION_GEORG_FISCHER,
                navText: "Georg Fischer Fittings",
                content: <GeorgFischer identifier={EXPLANATION_GEORG_FISCHER}/>
            }
        ];
        this.state = {loading: true, activeTab: this.contentCfg[0].identifier};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: false});
        }, 250);
    }

    redirectToVisualisation(event) {
        event.preventDefault();
        this.setState({loading: true}, () => {
            redirect(URL.visualisation);
        });
    }

    setTab(event, identifier) {
        event.preventDefault();
        this.setState({activeTab: identifier});
    }

    initContent() {
        let content = [];
        for (let i = 0; i < this.contentCfg.length; i++) {
            let cur = this.contentCfg[i];
            content.push(
                <TabContent key={"tab_content_" + i} active={this.state.activeTab === cur.identifier}>
                    {cur.content}
                </TabContent>
            )
        }
        return content;
    }

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Context"}/>
                </PageHeadBox>
                {this.state.loading ? <LoadingMessage/> :
                    <div className={"context-container flex flex-wrap w-full mt-6"}>
                        <div className={"w-3/4 m-auto "}>
                            <div className={"w-full"}>
                                <TabNavigation tabs={this.contentCfg} current={this.state.activeTab}
                                               onClick={(event, identifier) => this.setTab(event, identifier)}/>
                            </div>
                            <div className={"flex w-full m-auto border "}>
                                {this.initContent()}
                            </div>
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

const TabNavigation = React.memo(function TabNavigation(props) {
    let tabs = [];
    for (let i = 0; i < props.tabs.length; i++) {
        let cur = props.tabs[i];
        tabs.push(<Tab key={"tab_" + i} active={props.current === cur.identifier} text={cur.navText}
                       onClick={(event) => props.onClick(event, cur.identifier)}/>)
    }
    return <div className={"w-full"}>
        <ul className={"flex"}>
            {tabs}
        </ul>
    </div>;
});
TabNavigation.propTypes = {
    tabs: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired
};

const Tab = React.memo(function Tab(props) {
    let active = "tab-nav active bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold cursor-pointer";
    let inactive = "tab-nav bg-white inline-block py-2 px-4 font-semibold cursor-pointer";
    return <li className={"-mb-px mr-1 hover:bg-blue-600"}>
        <a className={props.active ? active : inactive} onClick={props.onClick}>{props.text}</a>
    </li>
});
Tab.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

const TabContent = React.memo(function TabContent(props) {
    let css = props.className ? props.className + " tab-content w-full ml-6 p-6 " : " tab-content w-full ml-6 p-6 ";
    props.active ? css += "block" : css += "hidden";
    return <div className={css}>
        {props.children}
    </div>
});
TabContent.propTypes = {
    active: PropTypes.bool.isRequired
};

const TabContentHeadline = React.memo(function TabContentHeadline(props) {
    return <h2>{props.text}</h2>
});
TabContentHeadline.propTypes = {
    text: PropTypes.string.isRequired
};