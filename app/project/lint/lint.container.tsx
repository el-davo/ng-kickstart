import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../project.actions';
import {LintComponent} from './lint.component';
import {ProjectState} from '../project.state';
import {ProjectsState} from '../../projects/projects.state';

interface Props {
    projectId: string;

    project: ProjectState;

    projects: ProjectsState;

    actions: Actions;
}

interface Actions {
    lintStart(projectId: string);
}

const ProjectContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <LintComponent projectId={props.projectId}
                       project={props.project}
                       projects={props.projects}
                       lintStart={props.actions.lintStart}/>
    );
};

function mapStateToProps(state, myProps) {
    return {
        projectId: myProps.projectId,
        project: state.project,
        projects: state.projects
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
