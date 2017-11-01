import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './project.actions';
import {ProjectComponent} from './project.component';

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

function mapStateToProps(state, ownProps) {
    return {
        projectId: ownProps.params.id
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
