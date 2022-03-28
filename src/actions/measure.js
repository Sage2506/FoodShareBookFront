export const GET_MEASURES = 'GET_MEASURES'
export const SET_MEASURE = 'SET_MEASURE'

export const setMeasures = (data, pagination) => {
  return {
    type: GET_MEASURES,
    measures: data,
    pagination
  }
}

export const setMeasure = (data) => {
  return {
    type: SET_MEASURE,
    measure: data
  }
}

