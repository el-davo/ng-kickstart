import * as React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {ProjectsState} from '../../projects/projects.state';
import {ProjectState} from '../project.state';
import {LintProgressComponent} from './lint-progress.component';
import {LintSuccessComponent} from './lint-success.component';
import {LintFailComponent} from './lint-fail.component';

const styles = {
    cardText: {
        textAlign: 'center'
    }
};

interface Props {
    projectId: string;

    project: ProjectState;

    projects: ProjectsState;

    lintStart(projectId: string);
}

export class LintComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this.lintStart = this.lintStart.bind(this);
    }

    componentDidMount() {
        this.lintStart();
    }

    lintStart() {
        this.props.lintStart(this.props.projectId);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="Lint"
                />
                <CardText style={styles.cardText}>
                    {
                        this.props.project.isRunningLint ? (
                            <LintProgressComponent/>
                        ) : (
                            this.props.project.isLintSuccess ? (
                                <LintSuccessComponent/>
                            ) : (
                                <LintFailComponent/>
                            )
                        )
                    }
                </CardText>
                <CardActions>
                    <FlatButton label="Start"
                                onClick={this.lintStart}
                                disabled={this.props.project.isRunningLint}/>
                </CardActions>
            </Card>
        );
    }
}
