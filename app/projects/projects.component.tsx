import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import {ProjectCardComponent} from './card/project-card.component';
import {ProjectsState} from './projects.state';

interface Props {
    projects: ProjectsState;

    fetchProjectList();
}

export class ProjectsComponent extends React.Component<Props, any> {

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
