import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Explanation extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.identifier = props.identifier;
    }

    explanation(html) {
        return <ExplanationContent html={html}/>;
    }

}
Explanation.propTypes = {
    identifier: PropTypes.string.isRequired
};

const ExplanationContent = React.memo(function ExplanationLeftColumn(props) {
    return props.html
});
ExplanationContent.propTypes = {
    html: PropTypes.object.isRequired
};