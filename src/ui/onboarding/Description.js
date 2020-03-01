import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Empty} from "../components";

export default class Description extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.state = {
            html: props.html
        }
    }

    render() {
        const {html} = this.state;
        return (
            this.state.html ? <div className={"m-6"}>
                <DescriptionHeader>
                    {html.header}
                </DescriptionHeader>
                <DescriptionBody>
                    {html.body}
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
    return <div className={"flex w-full m-auto"}>{props.children}</div>
});

const DescriptionBody = React.memo(function DescriptionBody(props) {
    return <div className={"m-auto"}>{props.children}</div>
});

const DescriptionFooter = React.memo(function DescriptionFooter(props) {
    return <div className={"flex w-full m-auto"}>{props.children}</div>
});


