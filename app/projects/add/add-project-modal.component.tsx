import * as React from 'react';
import {ProjectState} from '../projects.state';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

interface Props {
    projects: ProjectState;

    hideAddProjectModal();

    addProject();

    handleUpdateFormLocation(value: string);
}

export class AddProjectModalComponent extends React.Component<Props, any> {

    constructor(props, context) {
        super(props, context);

        this._handleClose = this._handleClose.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleUpdateFormLocation = this._handleUpdateFormLocation.bind(this);
    }

    _handleClose() {
        this.props.hideAddProjectModal();
    }

    _handleSubmit() {
        this.props.addProject();
    }

    _handleUpdateFormLocation({target: {value}}) {
        this.props.handleUpdateFormLocation(value);
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this._handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this._handleSubmit}
            />
        ];

        return (
            <Dialog
                title="Create Project"
                actions={actions}
                modal={false}
                open={this.props.projects.showAddProjectModal}
                onRequestClose={this._handleClose}
                autoScrollBodyContent={true}
            >
                <TextField
                    fullWidth={true}
                    value={this.props.projects.addProjectForm.location}
                    onChange={this._handleUpdateFormLocation}
                    floatingLabelText="Location"
                />
            </Dialog>
        );
    }
}
