import * as React from 'react';

interface Props {
    initApp();
}

export class InitComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.initApp();
    }

    render() {
        return (
            <div>
                Loading
            </div>
        );
    }
}
