import * as React from 'react';

interface Props {
    children: any;
}

export class AppComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
