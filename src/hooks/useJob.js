import { useDispatch, useSelector } from "react-redux"
import { JobAction } from '../actions'

export const useJob = () => {
    const dispatch = useDispatch()

    const listJob = useSelector(state => state.jobCollection.listJob)
    const textSearch = useSelector(state => state.jobCollection.textSearch)

    const isFetching = useSelector(state => state.jobCollection.isFetching)
    const isError = useSelector(state => state.jobCollection.isError)
    const message = useSelector(state => state.jobCollection.message)

    const handleGetJob = (data) => dispatch(JobAction.getJobRequest(data))
    const handleCreateJob = (data) => dispatch(JobAction.createJobRequest(data))
    const handleDeleteJob = (data) => dispatch(JobAction.deleteJobRequest(data))
    const handleUpdateJob = (data) => dispatch(JobAction.updateJobRequest(data))
    const handleSearchJob = (data) => dispatch(JobAction.searchJobRequest(data))

    return {
        listJob,
        isFetching,
        isError,
        message,
        handleGetJob,
        handleCreateJob,
        handleDeleteJob,
        handleUpdateJob,
        handleSearchJob,
        textSearch
    }
}