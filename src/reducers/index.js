import { combineReducers } from 'redux'
import jobCollectionReducer from './jobReducer/job.collection.reducer'
import jobInstanceReducer from './jobReducer/job.instance.reducer'
import statusCollectionReducer from './statusReducer/status.collection.reducer'
import statusInstanceReducer from './statusReducer/status.instance.reducer'

export default combineReducers({
    jobCollection: jobCollectionReducer,
    jobInstance: jobInstanceReducer,
    statusCollection: statusCollectionReducer,
    statusInstance: statusInstanceReducer
})