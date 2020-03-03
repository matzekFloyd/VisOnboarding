import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Empty} from "../components";
import {sanitizePublicPath} from "../../util/helpers";

export default class Description extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            html: props.html
        }
    }

    initParagraphs() {
        let html = [];
        for (let i = 0; i < this.state.html.body.length; i++) {
            let cur = this.state.html.body[i];
            html.push(
                <div key={"description_paragraph_" + i} className={"mb-6"}>{cur}</div>
            );
        }
        return html;
    }

    render() {
        const {html} = this.state;
        return (
            this.state.html ? <div className={"description-container m-6"}>
                <DescriptionHeader text={html.header.text} img={html.header.img}/>
                <DescriptionBody>
                    {this.initParagraphs()}
                </DescriptionBody>
                <DescriptionFooter>
                    {html.footer}
                </DescriptionFooter>
            </div> : <Empty/>
        );
    }
}
Description.propTypes = {
    html: PropTypes.object.isRequired
};

const DescriptionHeader = React.memo(function DescriptionHeader(props) {
    return <div className={"flex w-full m-auto"}>
        <div className='mb-6'><img src={sanitizePublicPath("static/onboarding/" + props.img)} alt={""}/><h2
        >{props.text}</h2></div>
    </div>;
});
DescriptionHeader.propTypes = {
    text: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

const DescriptionBody = React.memo(function DescriptionBody(props) {
    return <div className={"m-auto"}>{props.children}</div>
});

const DescriptionFooter = React.memo(function DescriptionFooter(props) {
    return <div className={"flex w-full m-auto"} dangerouslySetInnerHTML={{__html: props.children}}/>;
});


