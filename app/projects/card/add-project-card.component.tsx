import {Card, CardText} from 'material-ui/Card';
import * as React from 'react';
import {ProjectState} from '../projects.state';

interface Props {
    project: ProjectState;
}

export class AddProjectCardComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Card>
                <CardText>
                </CardText>
            </Card>
        );
    }
}
