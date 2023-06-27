import { useDispatch, useSelector } from "react-redux"
import { StatusAction } from '../actions'

export const useStatus = () => {
    const dispatch = useDispatch()

    const listStatus = useSelector(state => state.statusCollection.listStatus)
    const textSearch = useSelector(state => state.statusCollection.textSearch)

    const isFetching = useSelector(state => state.statusCollection.isFetching)
    const isError = useSelector(state => state.statusCollection.isError)
    const message = useSelector(state => state.statusCollection.message)

    const handleGetStatus = (data) => dispatch(StatusAction.getStatusRequest(data))
    const handleCreateStatus = (data) => dispatch(StatusAction.createStatusRequest(data))
    const handleDeleteStatus = (data) => dispatch(StatusAction.deleteStatusRequest(data))
    const handleUpdateStatus = (data) => dispatch(StatusAction.updateStatusRequest(data))
    const handleSearchStatus = (data) => dispatch(StatusAction.searchStatusRequest(data))

    return {
        listStatus,
        isFetching,
        isError,
        message,
        handleGetStatus,
        handleCreateStatus,
        handleDeleteStatus,
        handleUpdateStatus,
        handleSearchStatus,
        textSearch
    }
}