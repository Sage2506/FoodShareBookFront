import { addMeasure, setMeasure, setMeasures } from "../actions/measure"
import { getAndDispatch, postAndDispatch, putAndDispatch } from "./common_requests"
import { apiDelete } from "./foodsharebook_api"

const path = 'measures'

export const getMeasure = id => getAndDispatch({ path: `${path}/${id}`, action: setMeasure })

export const getMeasures = params => getAndDispatch({ path, action: setMeasures, params: { page: 1, per_page: 10, ...params } })

export const postMeasure = data => postAndDispatch({ path, action: addMeasure, data })

export const putMeasure = params => putAndDispatch({ path, id: params.id, data: params.data, action: addMeasure })

export const deleteMeasure = id => apiDelete({ path, id })