import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Explanation extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.identifier = props.identifier;
    }

}
Explanation.propTypes = {
    identifier: PropTypes.string.isRequired
};