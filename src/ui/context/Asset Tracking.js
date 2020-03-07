import React from 'react';
import Explanation from "./Explanation";
import {sanitizePublicPath} from "src/util/helpers";

export default class AssetTracking extends Explanation {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let leftCol = <div className={"left-col"}>
            <p>
                Asset tracking refers to the method of tracking <strong>physical assets</strong>, either by <strong>scanning
                barcode</strong> labels attached to the assets or by using tags utilizing GPS, BLE or
                RFID which <strong> broadcast</strong> their <strong>location</strong>.
                These technologies can also be used for indoor tracking of persons wearing a tag.
            </p>
            <br/>
            <p>
                In the case of Georg Fischer Fittings, the aim of tracking was
                to <strong>optimize</strong> the <strong>manufacturing process </strong>
                by saving time in searching the assets and gaining increased knowledge about the
                actual production
                process.
            </p>
            <br/>
        </div>;

        let rightCol = <div className={"right-col"}>
            <img className={"w-3/4 m-auto rounded"} src={sanitizePublicPath("static/context/manufacturing.jpg")}
                 alt={"manufacturing"}/>
        </div>;

        return <div className={"flex w-full"}>
            <div className={"w-1/2 mr-6 text-justify"}>
                {this.headline("Asset Tracking")}
                {this.leftColumn(leftCol)}
            </div>
            <div className={"flex w-1/2 ml-6 mr-auto mt-auto mb-auto"}>
                {this.rightColumn(rightCol)}
            </div>
        </div>;
    }

}