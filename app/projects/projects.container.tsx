import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './projects.actions';
import {ProjectComponent} from './projects.component';
import {ProjectState} from './projects.state';
import {FloatingAddButton} from './add/floating-add-button';
import {AddProjectModalComponent} from './add/add-project-modal.component';

interface Props {
    projects: ProjectState;
    actions: Actions;
}

interface Actions {
    fetchProjects();

    showAddProjectModal();

    hideAddProjectModal();

    addProject();

    handleUpdateFormLocation(value: string);
}

const ProjectContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <ProjectComponent projects={props.projects} fetchProjectList={props.actions.fetchProjects}/>

            <FloatingAddButton showAddProjectModal={props.actions.showAddProjectModal}/>

            <AddProjectModalComponent projects={props.projects}
                                      hideAddProjectModal={props.actions.hideAddProjectModal}
                                      addProject={props.actions.addProject}
                                      handleUpdateFormLocation={props.actions.handleUpdateFormLocation}/>
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
)(ProjectContainer);
