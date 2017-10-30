import {Card, CardText, CardHeader} from 'material-ui/Card';
import {Link} from 'react-router';
import * as React from 'react';
import {Project} from '../projects.state';

interface Props {
    project: Project;
}

export class ProjectCardComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Link to={`/projects/${this.props.project.id}`}>
                <Card>
                    <CardHeader
                        title={this.props.project.name}
                    />
                    <CardText>
                    </CardText>
                </Card>
            </Link>
        );
    }
}
