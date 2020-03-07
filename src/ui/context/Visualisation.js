import React from 'react';
import {sanitizePublicPath} from "src/util/helpers";
import Explanation from "./Explanation";

export default class Visualisation extends Explanation {

    constructor(props, context) {
        super(props, context);
        this.identifier = props.identifier;
    }

    render() {
        let leftCol = <div className={"left-col"}>
            <p>
                At the beginning of 2017, the company Georg Fischer Fittings (+GF+) wanted to make boxes of castings
                <strong> traceable</strong> and <strong>locatable</strong> in its <strong>manufacturing
                process</strong>. At first, barcodes were attached to these assets, which were recorded in a
                resource planning system by manual scanning when they arrived in a department.
            </p>
            <br/>
            <p>
                As part of a research project, a commercial <strong>asset tracking system</strong>, which
                uses <strong>Bluetooth</strong> technology in an industrial environment was launched. The assets and
                the different departments were equipped with <strong>blue tooth beacons</strong> in order to
                <strong> automatically</strong> track their locations at all times.
            </p>
            <br/>
            <p>
                A <strong>Gantt visualization</strong> shows the <strong>temporal development</strong> of this asset
                tracking data for a selected period of time.
            </p>
            <br/>
            <p>
                The image on the right displays the <strong>layout</strong> of the
                different <strong>departments</strong> at the factory, where the assets were tracked. Thereby
                the <strong>color encoding</strong> plays a central
                role in associating the different data points to their related <strong>locations</strong>. Within
                the visualisation, selecting a location in the image will also function as
                a <strong>filter</strong>, by hiding all data points not belonging to this location.</p>
            <br/>
        </div>;

        let rightCol = <div className={"right-col"}>
            <img src={sanitizePublicPath("static/context/gf_layout.png")} alt={""}/>
        </div>;

        return <div className={"flex w-full m-auto"}>
            <div className={"w-2/3 mr-6 text-justify"}>
                {this.headline("Visualisation")}
                {this.leftColumn(leftCol)}
            </div>
            <div className={"ml-6 mr-auto mt-auto mb-auto"}>
                {this.rightColumn(rightCol)}
            </div>
        </div>;
    }

}