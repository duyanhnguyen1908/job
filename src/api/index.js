import { Helpers } from '../utils'
import ApiScheme from './scheme'

export const authApi = {
    login: Helpers.createApi(ApiScheme.AUTHEN.LOGIN),
    logout: Helpers.createApi(ApiScheme.AUTHEN.LOGOUT),
    validateToken: Helpers.createApi(ApiScheme.AUTHEN.VALIDATE_TOKEN)
}

export const jobApi = {
    getJob: Helpers.createApi(ApiScheme.JOB.GET_JOB),
    createJob: Helpers.createApi(ApiScheme.JOB.CREATE_JOB),
    deleteJob: Helpers.createApi(ApiScheme.JOB.DELETE_JOB),
    updateJob: Helpers.createApi(ApiScheme.JOB.UPDATE_JOB),
    searchJob: Helpers.createApi(ApiScheme.JOB.SEARCH_JOB)
}

export const statusApi = {
    getStatus: Helpers.createApi(ApiScheme.STATUS.GET_STATUS),
    createStatus: Helpers.createApi(ApiScheme.STATUS.CREATE_STATUS),
    deleteStatus: Helpers.createApi(ApiScheme.STATUS.DELETE_STATUS),
    updateStatus: Helpers.createApi(ApiScheme.STATUS.UPDATE_STATUS),
    searchStatus: Helpers.createApi(ApiScheme.STATUS.SEARCH_STATUS)
}
