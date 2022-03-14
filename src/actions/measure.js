import { paginate, paginateHeaders } from "../components/lib/common"

export const GET_MEASURES = 'GET_MEASURES'
export const SET_MEASURE = 'SET_MEASURE'

export const setMeasuresAndPaginate = args => {
  const { data , pagination } = args
  return {
    type: GET_MEASURES,
    measures: data,
    pagination
  }

}
