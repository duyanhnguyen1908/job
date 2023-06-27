import { all } from 'redux-saga/effects'
import JobSaga from './JobSaga'
import StatusSaga from './StatusSaga'

export default function* rootSaga() {
    yield all([
        ...JobSaga,
        ...StatusSaga,
    ])
}