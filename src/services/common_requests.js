import { apiDelete, apiGet, apiPost, apiPut } from './foodsharebook_api';
import { paginateHeaders, showError } from "../components/lib/common"

export const getAndDispatch = args => {
    args.method = apiGet;
    return requestAndDispatch(args);
}

export const deleteAndDispatch = args => {
    if (!args.id) { return showError("No object id provided") }
    args.method = apiDelete;
    return requestAndDispatch(args);
}

export const postAndDispatch = args => {
    if (!args.data) { return showError("No object data provided") }
    args.method = apiPost;
    return requestAndDispatch(args);
}

export const putAndDispatch = args => {
    if (!args.id) { return showError("No object id provided") }
    if (!args.data) { return showError("No object data provided") }
    args.method = apiPut;
    return requestAndDispatch(args);
}

const requestAndDispatch = (args) => {
    if (!args.path) { return showError("No path provided") }
    if (!args.action) { return showError("No action provided") }
    if (!args.method) { return showError("No method provided") }
    const { action } = args;
    return async dispatch => {
        try {
            const response = await args.method(args)
            const { data, headers } = response
            if (args.params && args.params.page && args.params.per_page) {
                dispatch(action(data, paginateHeaders(headers)))
            } else {
                dispatch(action(data))
            }

        } catch (error) {
            dispatch(showError(error))
        }
    }
}