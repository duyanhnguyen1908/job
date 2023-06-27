import { takeLatest, put,takeEvery } from 'redux-saga/effects'
import { JobAction } from '../actions'
import { actionTypes } from '../constant'
import { jobApi } from '../api'

function* handleJobRequest({ payload }) {
    try {
        const res = yield jobApi.getJob()
        yield put(JobAction.getJobSuccess({
            
            listJob : res.listJob,
        }))
    } catch (error) {
        yield put(JobAction.getJobFailure({
            message: error.message
        }))
    }
}


function* handleCreateJob({ payload }) {
    try {
        const res = yield jobApi.createJob(null, null, payload)
        yield put(JobAction.createJobSuccess(res))
        yield put (JobAction.getJobRequest())
    } catch (error) {
        yield put(JobAction.createJobFailure({
            message: error.message
        }))
    }
}

function* handleDeleteJob({ payload }) {
    try {
        const res = yield jobApi.deleteJob({id: payload}, null, null)
        yield put(JobAction.deleteJobSuccess(res))
        yield put (JobAction.getJobRequest())
    } catch (error) {
        yield put(JobAction.deleteJobFailure({
            message: error.message
        }))
    }
}


function* handleUpdateJob({ payload }) {
    try {
        console.log(payload);
        const res = yield jobApi.updateJob({id: payload.id}, null, {name: payload.name})
        yield put(JobAction.updateJobSuccess(res))
        yield put (JobAction.getJobRequest())
    } catch (error) {
        yield put(JobAction.updateJobFailure({
            message: error.message
        }))
    }
}

function* handleSearchJob({ payload }) {
    try {
        const res = yield jobApi.searchJob()
        yield put(JobAction.searchJobSuccess({
            list : res.listJob,
        }))
    } catch (error) {
        yield put(JobAction.searchJobFailure({
            message: error.message
        }))
    }
}

const JobSaga = [
    takeLatest(actionTypes.JobTypes.GET_JOB_REQUEST, handleJobRequest),
    takeLatest(actionTypes.JobTypes.CREATE_JOB_REQUEST, handleCreateJob),
    takeLatest(actionTypes.JobTypes.DELETE_JOB_REQUEST, handleDeleteJob),
    takeLatest(actionTypes.JobTypes.UPDATE_JOB_REQUEST, handleUpdateJob),
    takeEvery(actionTypes.JobTypes.SEARCH_JOB_REQUEST, handleSearchJob),
]

export default JobSaga;