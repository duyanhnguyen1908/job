import { REST_API_METHOD as METHOD,  BASE_URL} from '../constant'

const API_SCHEME = {
    // update when apply real authen api
    AUTHEN: {
        VALIDATE_TOKEN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGIN: {
            url: `${BASE_URL}/auth`,
            method: METHOD.GET
        },
        LOGOUT: {
            url: `${BASE_URL}/logout`,
            method: METHOD.POST
        }
    },
    // business api
    JOB: {
        GET_JOB: {
            url: `${BASE_URL}/job`,
            method: METHOD.GET
        },
        GET_DETAIL_JOB: {
            url: `${BASE_URL}/job/:id`,
            method: METHOD.GET
        },
        CREATE_JOB: {
            url: `${BASE_URL}/job`,
            method: METHOD.POST
        },
        UPDATE_JOB: {
            url: `${BASE_URL}/job/:id`,
            method: METHOD.PUT
        },
        DELETE_JOB: {
            url: `${BASE_URL}/job/:id`,
            method: METHOD.DELETE
        },
        SEARCH_JOB: {
            url: `${BASE_URL}/job`,
            method: METHOD.GET
        },
    },

    STATUS: {
        GET_STATUS: {
            url: `${BASE_URL}/status`,
            method: METHOD.GET
        },
        GET_DETAIL_STATUS: {
            url: `${BASE_URL}/status/:id`,
            method: METHOD.GET
        },
        CREATE_STATUS: {
            url: `${BASE_URL}/status`,
            method: METHOD.POST
        },
        UPDATE_STATUS: {
            url: `${BASE_URL}/status/:id`,
            method: METHOD.PUT
        },
        DELETE_STATUS: {
            url: `${BASE_URL}/status/:id`,
            method: METHOD.DELETE
        },
        SEARCH_STATUS: {
            url: `${BASE_URL}/status`,
            method: METHOD.GET
        },
    },

    
}

export default API_SCHEME