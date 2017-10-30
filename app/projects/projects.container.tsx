import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './projects.actions';
import {ProjectComponent} from './projects.component';
import {ProjectState} from './projects.state';
import {FloatingAddButton} from './add/floating-add-button';

interface Props {
    projects: ProjectState;
    actions: Actions;
}

interface Actions {
    fetchProjects();

    addProject();
}

const ProjectContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            <ProjectComponent projects={props.projects} fetchProjectList={props.actions.fetchProjects}/>

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
)(ProjectContainer);
