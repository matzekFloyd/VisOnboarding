import React from 'react';
import Explanation from "./Explanation";
import {sanitizePublicPath} from "src/util/helpers";

export default class GeorgFischer extends Explanation {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let leftCol = <div className={"left-col"}><p>
            The Georg Fischer Fittings GmbH (+GF+) is located in Traisen, Lower Austria, and consists of
            approximately 460 employees. On their industrial plant, 12.200 tons of <strong>pipe
            fittings</strong> are produced every year.
        </p>
            <br/>
            <p>
                These pipe fittings are <strong>manufactured</strong> from <strong>malleable cast
                iron</strong> and
                can be used in a wide range of applications such as:
            </p>
            <ul className={"w-3/4 mr-auto ml-auto list-disc list-inside text-left mt-3"}>
                <li>
                    <i>sanitary, heating and gas installation</i>
                </li>
                <li>
                    <i>cooling and air conditioning</i>
                </li>
                <li>
                    <i>construction of industrial plants</i>
                </li>
                <li>
                    <i>machine construction</i>
                </li>
                <li>
                    <i>commercial vehicles construction</i>
                </li>
            </ul>
            <br/>
            <p>
                The images on the right show two examples of their product.
            </p>
        </div>;

        let rightCol = <div className={"flex w-full "}>
            <img className={"w-1/2 m-auto"}
                 src={sanitizePublicPath("static/context/malleable_cast_iron_fitting_1.jpg")}
                 alt={"malleable_cast_iron_fitting_1"}/>
            <img className={"w-1/2 m-auto"}
                 src={sanitizePublicPath("static/context/malleable_cast_iron_fitting_2.jpg")}
                 alt={"malleable_cast_iron_fitting_2"}/>
        </div>;

        return <div className={"flex w-full"}>
            <div className={"w-1/2 mr-6 text-justify"}>
                {this.headline("Georg Fischer Fittings GmbH")}
                {this.leftColumn(leftCol)}
            </div>
            <div className={"w-1/2 ml-6 mr-auto mt-auto mb-auto"}>
                {this.rightColumn(rightCol)}
            </div>
        </div>;
    }

}