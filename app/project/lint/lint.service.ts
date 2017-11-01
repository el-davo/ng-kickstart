import {eventChannel} from 'redux-saga';
import {spawn} from 'child_process';
import {Project} from '../../projects/projects.state';
import {lintFail, lintSuccess} from '../project.actions';

export function startLint(project: Project) {
    return eventChannel((emitter) => {

        const child = spawn('ng', ['lint'], {cwd: project.location});

        child.stdout.on('data', (data) => {

        });

        child.stderr.on('data', (data) => {

        });

        child.on('error', (data) => {

        });

        child.on('exit', (exitCode) => {
            exitCode === 0 ? emitter(lintSuccess()) : emitter(lintFail());
        });

        return () => {
        };
    });
}