import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../project.actions';
import {LintComponent} from './lint.component';

interface Props {
    projectId: string;

    actions: Actions;
}

interface Actions {
    lintStart(projectId: string);
}

const ProjectContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <LintComponent projectId={props.projectId} lintStart={props.actions.lintStart}/>
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
