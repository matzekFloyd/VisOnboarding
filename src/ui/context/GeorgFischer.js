import React from 'react';
import Explanation from "./Explanation";

export default class GeorgFischer extends Explanation {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={"flex w-full"}>
            <div className={"w-1/2 mr-6 "}>
                <h2>Georg Fischer</h2>
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
            </div>
            <div className={"w-1/2 ml-6 m-auto"}>

            </div>
        </div>;
    }

}