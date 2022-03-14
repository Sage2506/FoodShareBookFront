import { api } from './foodsharebook_api';
import { paginate,showError } from "../components/lib/common"

export const getAndSendAction = args => {
    if(!args.path) { return dispatch(showError("No path provided"))}
    if(!args.action) { return dispatch(showError("No action provided"))}
    const { path, action,params } = args
    return async dispatch => {
        try {
            const response = await api.get(`${path}?${ params ? new URLSearchParams(params).toString() : '' }`);
            dispatch(action(response))
        } catch (error) {
            dispatch(showError(error))
        }
    }
}