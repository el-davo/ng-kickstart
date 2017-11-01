import * as React from 'react';
import SuccessIcon from 'material-ui/svg-icons/action/check-circle';
import {greenA200} from 'material-ui/styles/colors';

const iconStyles = {
    marginRight: 24,
    fontSize: 20
};

export class LintSuccessComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <SuccessIcon
                style={iconStyles}
                color={greenA200}
                height={100}
            />

        );
    }
}
