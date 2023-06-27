import { takeLatest, put,takeEvery } from 'redux-saga/effects'
import { StatusAction } from '../actions'
import { actionTypes } from '../constant'
import { statusApi } from '../api'

function* handleGetStatus({ payload }) {
    try {
        const res = yield statusApi.getStatus()
        yield put(StatusAction.getStatusSuccess({
            
            listStatus : res.listStatus,
        }))
    } catch (error) {
        yield put(StatusAction.getStatusFailure({
            message: error.message
        }))
    }
}


function* handleCreateStatus({ payload }) {
    try {
        const res = yield statusApi.createStatus(null, null, payload)
        yield put(StatusAction.createStatusSuccess(res))
        yield put (StatusAction.getStatusRequest())
    } catch (error) {
        yield put(StatusAction.createStatusFailure({
            message: error.message
        }))
    }
}

function* handleDeleteStatus({ payload }) {
    try {
        const res = yield statusApi.deleteStatus(null, null, payload)
        yield put(StatusAction.deleteStatusSuccess(res))
        yield put (StatusAction.getStatusRequest())
    } catch (error) {
        yield put(StatusAction.deleteStatusFailure({
            message: error.message
        }))
    }
}


function* handleUpdateStatus({ payload }) {
    try {
        const res = yield statusApi.updateStatus(null, null, payload)
        yield put(StatusAction.updateStatusSuccess(res))
        yield put (StatusAction.getStatusRequest())
    } catch (error) {
        yield put(StatusAction.updateStatusFailure({
            message: error.message
        }))
    }
}

function* handleSearchStatus({ payload }) {
    try {
        const res = yield statusApi.searchStatus()
        yield put(StatusAction.searchStatusSuccess({
            list : res.listStatus,
        }))
    } catch (error) {
        yield put(StatusAction.searchStatusFailure({
            message: error.message
        }))
    }
}

const StatusSaga = [
    takeLatest(actionTypes.StatusTypes.GET_STATUS_REQUEST, handleGetStatus),
    takeLatest(actionTypes.StatusTypes.CREATE_STATUS_REQUEST, handleCreateStatus),
    takeLatest(actionTypes.StatusTypes.DELETE_STATUS_REQUEST, handleDeleteStatus),
    takeLatest(actionTypes.StatusTypes.UPDATE_STATUS_REQUEST, handleUpdateStatus),
    takeEvery(actionTypes.StatusTypes.SEARCH_STATUS_REQUEST, handleSearchStatus),
]

export default StatusSaga;