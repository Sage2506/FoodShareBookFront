import { api_delete, api_get } from './foodsharebook_api';
import { paginateHeaders,showError } from "../components/lib/common"

export const getAndSendAction = args => {
    if(!args.path) { return showError("No path provided")}
    if(!args.action) { return showError("No action provided")}
    const { action } = args
    return async dispatch => {
        try {
            const response = await api_get(args)
            const {data, headers} = response
            if(args.params && args.params.page && args.params.per_page){
                dispatch( action( data, paginateHeaders(headers) ))
            } else {
            dispatch( action( data ))
            }
        } catch (error) {
            dispatch(showError(error))
        }
    }
}

export const deleteAndSendAction = args => {
    if( !args.path ) { return showError("No path provided")}
    if( !args.action ) { return showError("No action provided")}
    if( !args.id ) { return showError("No object id provided")}
    const { action } = args
    return async dispatch => {
        try {
            const response = await api_delete(args)
            const { data } = response
            dispatch( action(data) )
        } catch (error) {
            dispatch( showError(error) )
        }
    }
}