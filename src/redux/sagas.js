import { call, put, takeEvery } from 'redux-saga/effects'
import { statsAPI } from '../api';
import { usersActions } from './users';
import { usersTypes } from './users'

function* fetchUser(action) {
    yield put(usersActions.userFetchLoading());
    try {
        const user = yield call(statsAPI.getUsers, action.payload);
        yield put(usersActions.userFetchSucceded(user));
    } catch (err) {
        yield put(usersActions.userFetchFailed(err.message));
    }
}

function* mySaga() {
    yield takeEvery(usersTypes.USER_FETCH_REQUESTED, fetchUser);
}

export default mySaga;