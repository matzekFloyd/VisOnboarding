import React, {PureComponent} from 'react';
import Visualisation from "./Visualisation";
import AssetTracking from "./Asset Tracking";
import GeorgFischer from "./GeorgFischer";
import PropTypes from "prop-types";

const EXPLANATION_VISUALISATION = "EXPLANATION_VISUALISATION";
const EXPLANATION_GEORG_FISCHER = "EXPLANATION_GEORG_FISCHER";
const EXPLANATION_ASSET_TRACKING = "EXPLANATION_ASSET_TRACKING";

export default class ContextManager extends PureComponent {

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
                navText: "Georg Fischer",
                content: <GeorgFischer identifier={EXPLANATION_GEORG_FISCHER}/>
            }
        ];
        this.state = {activeTab: this.contentCfg[0].identifier};
    }

    componentDidMount() {
        this.props.contextManagerLoadedCallback();
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
            <div id="context-container" className={"context-container block w-1/4 mr-10 border "}>
                <div className={"flex flex-wrap w-full "}>
                    <TabNavigation tabs={this.contentCfg} current={this.state.activeTab}
                                   onClick={(event, identifier) => this.setTab(event, identifier)}/>
                    {this.initContent()}
                </div>
            </div>
        );
    }

}
ContextManager.propTypes = {
    contextManagerLoadedCallback: PropTypes.func
};

const TabNavigation = React.memo(function TabNavigation(props) {
    let tabs = [];
    for (let i = 0; i < props.tabs.length; i++) {
        let cur = props.tabs[i];
        tabs.push(<Tab className={i === 1 ? "mr-2 ml-2" : ""} key={"tab_" + i} active={props.current === cur.identifier} text={cur.navText}
                       onClick={(event) => props.onClick(event, cur.identifier)}/>)
    }
    return <ul className={"flex m-auto pt-2 pl-1 pr-1 mb-4"}>
        {tabs}
    </ul>;
});
TabNavigation.propTypes = {
    tabs: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired
};

const Tab = React.memo(function Tab(props) {
    let active = "text-center tab-nav active bg-white inline-block rounded-t py-1 px-1 font-semibold cursor-pointer";
    let inactive = "text-center tab-nav bg-white inline-block py-1 px-1 font-semibold cursor-pointer hover:bg-blue-600 hover:text-white rounded";
    return <li className={"flex-none -mb-px " + props.className}>
        <a className={props.active ? active : inactive} onClick={props.onClick}>{props.text}</a>
    </li>
});
Tab.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string
};

const TabContent = React.memo(function TabContent(props) {
    let css = props.className ? props.className + " tab-content w-full " : " tab-content w-full ";
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