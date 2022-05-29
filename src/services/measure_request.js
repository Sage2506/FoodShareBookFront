import { addMeasure, setMeasure, setMeasures } from "../actions/measure"
import { getAndDispatch, postAndDispatch, putAndDispatch } from "./common_requests"

const path = 'measures'

export const getMeasure = id => {
    return getAndDispatch({
        path: `${path}/${id}`,
        action: setMeasure
    })
}

export const getMeasures = params => {
    return getAndDispatch({
        path,
        action: setMeasures,
        params: { page: 1, per_page: 10, ...params }
    })
}

export const postMeasure = data => {
    return postAndDispatch({
        path,
        action: addMeasure
    })
}

export const putMeasure = params => {
    return putAndDispatch({
        path,
        id: params.id,
        data: params.data,
        action: addMeasure
    })
}