import * as React from 'react';
import {ProjectState} from './projects.state';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

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
                    {this.props.projects.projects.map((space, index) => {
                        return <Col xs={12} sm={6} md={4} key={index}>

                        </Col>
                    })}
                </Row>
            </Grid>
        );
    }
}
