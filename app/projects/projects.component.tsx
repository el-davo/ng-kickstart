import * as React from 'react';
import {ProjectState} from './projects.state';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';
import {ProjectCardComponent} from './card/project-card.component';
import {Simulate} from 'react-dom/test-utils';

interface Props {
    projects: ProjectState;

    fetchProjectList();
}

export class ProjectComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.fetchProjectList();
    }

    render() {
        return (
            <Grid fluid style={{paddingLeft: 0}}>
                <Row>
                    {
                        Object.keys(this.props.projects.projects).map((key) => {
                            return <Col xs={12} sm={6} md={4} key={key}>
                                <ProjectCardComponent project={this.props.projects.projects[key]}/>
                            </Col>;
                        })
                    }
                </Row>
            </Grid>
        );
    }
}
