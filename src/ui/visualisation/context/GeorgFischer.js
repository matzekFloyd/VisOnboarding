import React from 'react';
import Explanation from "./Explanation";
import {sanitizePublicPath} from "src/util/helpers";

export default class GeorgFischer extends Explanation {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let content = <div><p>
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
        </div>;

        return <div className={"flex flex-wrap w-full p-4 "}>
            <div className={"flex w-full"}>
                <img className={"w-1/2"} alt={""}
                     src={sanitizePublicPath("static/visualisation/malleable_cast_iron_fitting_1.jpg")}/>
                <img className={"w-1/2"} alt={""}
                     src={sanitizePublicPath("static/visualisation/malleable_cast_iron_fitting_2.jpg")}/>
            </div>
            {this.explanation(content)}
        </div>;
    }

}