import * as React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import {Card, CardText, CardHeader} from 'material-ui/Card';

interface Props {
    projectId: string;

    lintStart(projectId: string);
}

export class LintComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.lintStart(this.props.projectId);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="Lint"
                />
                <CardText>
                </CardText>
            </Card>
        );
    }
}
