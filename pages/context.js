import React, {PureComponent} from 'react';
import Layout from 'src/ui/Layout';
import {
    PageHeadBox,
    PageHeadTitle,
    LoadingMessage,
    ButtonCta
} from "src/ui/components";
import {URL} from "../constants";
import {redirect, sanitizePublicPath} from "src/util/helpers";
import PropTypes from "prop-types";

const TAB_VISUALISATION = "TAB_VISUALISATION";
const TAB_GEORG_FISCHER = "TAB_GEORG_FISCHER";
const TAB_ASSET_TRACKING = "TAB_ASSET_TRACKING";

export default class Context extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {loading: true, activeTab: TAB_VISUALISATION};
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

    render() {
        return (
            <Layout>
                <PageHeadBox>
                    <PageHeadTitle title={"Task"}/>
                </PageHeadBox>
                {this.state.loading ? <LoadingMessage/> :
                    <div className={"context-container flex flex-wrap w-full mt-6"}>
                        <div className={"w-3/4 m-auto "}>
                            <div className={"w-full"}>
                                <TabNavigation current={this.state.activeTab}
                                               onClick={(event, identifier) => this.setTab(event, identifier)}/>
                            </div>
                            <div className={"flex w-full m-auto border "}>
                                <TabContent active={this.state.activeTab === TAB_VISUALISATION}>
                                    <TabContentHeadline text={"Visualisation"}/>
                                    <div className={"flex w-full"}>
                                        <div className={"w-1/2 mr-6 "}>
                                            <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                                ipsum dolor sit amet.
                                            </p>
                                            <br/>
                                            <p>
                                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                                                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                                                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                                                ipsum dolor sit amet.</p>
                                        </div>
                                        <div className={"w-1/2 ml-6"}>
                                            <img className={"m-auto"}
                                                 src={sanitizePublicPath("static/visualisation/gf_layout.png")}
                                                 alt={"map_image"}/>
                                        </div>
                                    </div>
                                </TabContent>
                                <TabContent active={this.state.activeTab === TAB_GEORG_FISCHER}>
                                    <TabContentHeadline text={"Georg Fischer"}/>
                                </TabContent>
                                <TabContent active={this.state.activeTab === TAB_ASSET_TRACKING}>
                                    <TabContentHeadline text={"Asset Tracking"}/>
                                </TabContent>
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
        tabs.push(<Tab key={"tab_" + i} active={props.current === cur.identifier} text={cur.text}
                       onClick={(event) => props.onClick(event, cur.identifier)}/>)
    }
    return <div className={"w-full"}>
        <ul className={"flex"}>
            {tabs}
        </ul>
    </div>;
});
TabNavigation.defaultProps = {
    tabs: [
        {identifier: TAB_VISUALISATION, text: "Visualisation"},
        {identifier: TAB_GEORG_FISCHER, text: "Georg Fischer"},
        {identifier: TAB_ASSET_TRACKING, text: "Asset Tracking"}
    ],
};
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
    let css = props.className + " tab-content w-full ml-6 mt-6 p-6 ";
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