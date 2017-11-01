import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';
import {ADD_PROJECT} from '../projects.action-types';
import {addProjectFail, addProjectSuccess} from '../projects.actions';
import {addProject, ensureIsAngularCliProject, getPackageJson, selectProjectDirectory} from '../projects.service';
import {ProjectsState} from '../projects.state';
import {generateId} from '../../core/utils.service';

function* add() {
    try {
        const {projects}: ProjectsState = yield select((state: any) => state.projects);

        const location = yield call(selectProjectDirectory);

        const id = yield call(generateId);

        yield call(ensureIsAngularCliProject, location);

        const packageJson = yield call(getPackageJson, location);

        yield call(addProject, {...projects, [id]: {id, location, name: packageJson.name}});

        yield put(addProjectSuccess({id, location, name: packageJson.name}));
    } catch (err) {
        yield put(addProjectFail());
    }
}

export function* addProjectSaga() {
    yield* takeEvery(ADD_PROJECT, add);
}
