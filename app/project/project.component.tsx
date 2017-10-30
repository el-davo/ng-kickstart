import * as React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid/lib/index';

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

                </Row>
            </Grid>
        );
    }
}
