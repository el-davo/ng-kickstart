import * as React from 'react';
import FailIcon from 'material-ui/svg-icons/alert/error';
import {redA100} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
    fontSize: 20
};

export class LintFailComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <FailIcon
                style={iconStyles}
                color={redA100}
                height={100}
            />
        );
    }
}
