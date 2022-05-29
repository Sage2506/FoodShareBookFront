export const GET_MEASURES = 'GET_MEASURES'
export const SET_MEASURE = 'SET_MEASURE'
export const ADD_MEASURE = 'ADD_MEASURE';

export const setMeasures = (data, pagination) => {
  return {
    type: GET_MEASURES,
    data,
    pagination
  }
}

export const setMeasure = data => {
  return {
    type: SET_MEASURE,
    data
  }
}

export const addMeasure = data => {
  return {
    type: ADD_MEASURE,
    data
  }
}