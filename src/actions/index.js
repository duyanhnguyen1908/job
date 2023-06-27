import { createAction } from "@reduxjs/toolkit"
import { actionTypes } from "../constant"

export const JobAction = {
    getJobRequest: createAction(actionTypes.JobTypes.GET_JOB_REQUEST),
    getJobSuccess: createAction(actionTypes.JobTypes.GET_JOB_SUCCESS),
    getJobFailure: createAction(actionTypes.JobTypes.GET_JOB_FAILURE),


    createJobRequest: createAction(actionTypes.JobTypes.CREATE_JOB_REQUEST),
    createJobSuccess: createAction(actionTypes.JobTypes.CREATE_JOB_SUCCESS),
    createJobFailure: createAction(actionTypes.JobTypes.CREATE_JOB_FAILURE),


    deleteJobRequest: createAction(actionTypes.JobTypes.DELETE_JOB_REQUEST),
    deleteJobSuccess: createAction(actionTypes.JobTypes.DELETE_JOB_SUCCESS),
    deleteJobFailure: createAction(actionTypes.JobTypes.DELETE_JOB_FAILURE),


    updateJobRequest: createAction(actionTypes.JobTypes.UPDATE_JOB_REQUEST),
    updateJobSuccess: createAction(actionTypes.JobTypes.UPDATE_JOB_SUCCESS),
    updateJobFailure: createAction(actionTypes.JobTypes.UPDATE_JOB_FAILURE),


    searchJobRequest: createAction(actionTypes.JobTypes.SEARCH_JOB_REQUEST),
    searchJobSuccess: createAction(actionTypes.JobTypes.SEARCH_JOB_SUCCESS),
    searchJobFailure: createAction(actionTypes.JobTypes.SEARCH_JOB_FAILURE),
}

export const StatusAction = {
    getStatusRequest: createAction(actionTypes.StatusTypes.GET_STATUS_REQUEST),
    getStatusSuccess: createAction(actionTypes.StatusTypes.GET_STATUS_SUCCESS),
    getStatusFailure: createAction(actionTypes.StatusTypes.GET_STATUS_FAILURE),

    createStatusRequest: createAction(actionTypes.StatusTypes.CREATE_STATUS_REQUEST),
    createStatusSuccess: createAction(actionTypes.StatusTypes.CREATE_STATUS_SUCCESS),
    createStatusFailure: createAction(actionTypes.StatusTypes.CREATE_STATUS_FAILURE),

    deleteStatusRequest: createAction(actionTypes.StatusTypes.DELETE_STATUS_REQUEST),
    deleteStatusSuccess: createAction(actionTypes.StatusTypes.DELETE_STATUS_SUCCESS),
    deleteStatusFailure: createAction(actionTypes.StatusTypes.DELETE_STATUS_FAILURE),

    updateStatusRequest: createAction(actionTypes.StatusTypes.UPDATE_STATUS_REQUEST),
    updateStatusSuccess: createAction(actionTypes.StatusTypes.UPDATE_STATUS_SUCCESS),
    updateStatusFailure: createAction(actionTypes.StatusTypes.UPDATE_STATUS_FAILURE),

    searchStatusRequest: createAction(actionTypes.StatusTypes.SEARCH_STATUS_REQUEST),
    searchStatusSuccess: createAction(actionTypes.StatusTypes.SEARCH_STATUS_SUCCESS),
    searchStatusFailure: createAction(actionTypes.StatusTypes.SEARCH_STATUS_FAILURE)
}