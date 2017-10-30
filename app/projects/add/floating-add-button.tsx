import * as React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
    bottom: 15,
    right: 15,
    position: 'fixed'
};

interface Props {
    addProject();
}

export class FloatingAddButton extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <FloatingActionButton style={style} onClick={() => this.props.addProject()}>
                <ContentAdd/>
            </FloatingActionButton>
        );
    }
}
