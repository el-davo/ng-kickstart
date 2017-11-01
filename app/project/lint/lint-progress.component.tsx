import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export class LintProgressComponent extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <CircularProgress/>
        );
    }
}
