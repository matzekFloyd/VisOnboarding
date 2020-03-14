import React from 'react';
import Explanation from "./Explanation";

export default class Visualisation extends Explanation {

    constructor(props, context) {
        super(props, context);
        this.identifier = props.identifier;
    }

    render() {
        let content = <div>
            <p>
                At the beginning of 2017, the company Georg Fischer Fittings (+GF+) wanted to make boxes of castings
                <strong> traceable</strong> and <strong>locatable</strong> in its <strong>manufacturing
                process</strong>.
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
                different <strong>departments</strong> at the factory, where the assets were tracked. The <strong>color
                encoding</strong> helps in associating the different data points to their related <strong>locations</strong>.
                <br/> Selecting a location in the image will hide all data points not belonging to this location.</p>
            <br/>
        </div>;
        return <div className={"flex w-full p-4 "}>
            {this.explanation(content)}
        </div>;
    }

}