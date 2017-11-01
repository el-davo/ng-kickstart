import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './init.actions';
import {InitComponent} from './init.component';
import {InitState} from './init.state';
import {AppComponent} from './app.component';

interface Props {
    children: any;

    init: InitState;

    actions: Actions;
}

interface Actions {
    initApp();
}

const InitContainer: React.StatelessComponent<Props> = (props) => {
    return (
        <div>
            {
                props.init.isAppReady ? (
                    <AppComponent children={props.children}/>
                ) : (
                    <InitComponent initApp={props.actions.initApp}/>
                )
            }
        </div>
    );
};

function mapStateToProps(state, ownProps) {
    return {
        init: state.init
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
)(InitContainer);
