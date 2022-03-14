import { api, api_get } from './foodsharebook_api';
import { paginateHeaders,showError } from "../components/lib/common"

export const getAndSendAction = args => {
    if(!args.path) { return dispatch(showError("No path provided"))}
    if(!args.action) { return dispatch(showError("No action provided"))}
    const { action } = args
    return async dispatch => {
        try {
            const response = await api_get(args)
            const {data, headers} = response
            if(args.params && (args.params.page || args.params.per_page)){ 
                dispatch( action( {data, pagination : paginateHeaders(headers) }))
             } else {
                dispatch( action({ data }))
             }
        } catch (error) {
            console.log(error)
            dispatch(showError(error))
        }
    }
}