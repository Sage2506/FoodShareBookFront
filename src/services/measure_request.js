import { setMeasure, setMeasures } from "../actions/measure"
import { getAndSendAction } from "./common_requests"

const path = 'measures'

export const getMeasure = id => {
    return getAndSendAction({
        path : `${path}/${id}`,
        action: setMeasure
    })
}

export const getMeasures = params => {
    return getAndSendAction({
        path,
        action: setMeasures,
        params : { page : 1, per_page : 10, ...params}
    })
}