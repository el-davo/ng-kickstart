import * as React from 'react';
import {Col, Grid, Row} from 'react-flexbox-grid/lib/index';
import LintContainer from './lint/lint.container';

interface Props {
    projectId: string;
}

export class ProjectComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid fluid style={{paddingLeft: 0}}>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <LintContainer projectId={this.props.projectId}/>
                    </Col>;
                </Row>
            </Grid>
        );
    }
}
