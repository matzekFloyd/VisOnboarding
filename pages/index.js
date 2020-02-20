import Layout from '../src/ui/Layout';
import React, {PureComponent} from 'react';
import {sanitizePublicPath} from "../src/util/helpers";
import Router from "next/router";
import {URL} from "../constants";

export default class Home extends PureComponent {

    constructor(props, context) {
        super(props, context);
    }

    navigate(event, to) {
        event.preventDefault();
        Router.push(to).then(() => console.log("Redirecting: ", to));
    }

    render() {
        return (
            <Layout>
                <div id={"cards-flex-container"} className="flex flex-wrap">
                    <div
                        className="w-1/4 ml-auto hover:bg-green-400 max-w-sm rounded overflow-hidden shadow-lg mr-6 cursor-pointer"
                        onClick={(e) => this.navigate(e, URL.assessment)}>
                        <img className="w-full"
                             src={sanitizePublicPath("static/person-holding-chart-and-bar-graph-669612.jpg")}
                             alt="onboarding_img"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Onboarding</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#onboarding</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#data</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#assessment</span>
                        </div>
                    </div>
                    <div
                        className="w-1/4 mr-auto hover:bg-green-400 max-w-sm rounded overflow-hidden shadow-lg ml-6 cursor-pointer"
                        onClick={(e) => this.navigate(e, URL.context)}>
                        <img className="w-full" src={sanitizePublicPath("static/chart-close-up-data-desk-590022.jpg")}
                             alt="visualistaion_img"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Visualisation</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 py-4">
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#visualisation</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#task</span>
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#data</span>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

}