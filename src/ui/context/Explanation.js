import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Explanation extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.identifier = props.identifier;
    }

    headline(text) {
        return <ExplanationHeadline text={text}/>;
    }

    leftColumn(html) {
        return <ExplanationLeftColumn html={html}/>;
    }

    rightColumn(html) {
        return <ExplanationRightColumn html={html}/>;
    }

}
Explanation.propTypes = {
    identifier: PropTypes.string.isRequired
};

const ExplanationHeadline = React.memo(function ExplanationHeadline(props) {
    return <h2>{props.text}</h2>
});
ExplanationHeadline.propTypes = {
    text: PropTypes.string.isRequired
};

const ExplanationLeftColumn = React.memo(function ExplanationLeftColumn(props) {
    return props.html
});
ExplanationLeftColumn.propTypes = {
    html: PropTypes.object.isRequired
};

const ExplanationRightColumn = React.memo(function ExplanationRightColumn(props) {
    return props.html
});
ExplanationRightColumn.propTypes = {
    html: PropTypes.object.isRequired
};