import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ProjectComponent} from './project.component';
import * as actions from './project.actions';

interface Props {
    projectId: string;
}

const ProjectContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <ProjectComponent projectId={props.projectId}/>
        </div>
    );
};

function mapStateToProps(state, myProps) {
    return {
        projectId: myProps.projectId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect<{}, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(ProjectContainer);
