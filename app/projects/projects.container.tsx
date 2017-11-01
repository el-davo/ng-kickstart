import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FloatingAddButton} from './add/floating-add-button';
import * as actions from './projects.actions';
import {ProjectsComponent} from './projects.component';
import {ProjectsState} from './projects.state';

interface Props {
    projects: ProjectsState;
    actions: Actions;
}

interface Actions {
    fetchProjects();

    addProject();
}

const ProjectsContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <ProjectsComponent projects={props.projects} fetchProjectList={props.actions.fetchProjects}/>

            <FloatingAddButton addProject={props.actions.addProject}/>
        </div>
    );
};

function mapStateToProps(state) {
    return {
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
)(ProjectsContainer);
