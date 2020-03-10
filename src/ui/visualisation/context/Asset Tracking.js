import React from 'react';
import Explanation from "./Explanation";
import {sanitizePublicPath} from "src/util/helpers";

export default class AssetTracking extends Explanation {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let content = <div>
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

        return <div className={"flex flex-wrap w-full p-4 "}>
            <img className={"w-3/4 ml-auto mr-auto mb-4 rounded"} alt={""}
                 src={sanitizePublicPath("static/visualisation/manufacturing.jpg")}/>
            {this.explanation(content)}
        </div>;
    }

}