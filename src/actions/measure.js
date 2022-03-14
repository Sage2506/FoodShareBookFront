import { paginate, paginateHeaders } from "../components/lib/common"

export const GET_MEASURES = 'GET_MEASURES'
export const SET_MEASURE = 'SET_MEASURE'

export const setMeasuresAndPaginate = (data, pagination) => {
  return {
    type: GET_MEASURES,
    measures: data,
    pagination
  }

}
