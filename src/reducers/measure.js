import { ADD_MEASURE, GET_MEASURES, SET_MEASURE } from "../actions/measure";


const initialMeasureState = {
  measures: [],
  pagination: {
    pages: [],
    arrows: {},
  },
  measure: undefined,
  newMeasure: undefined
}

export const measureReducer = (state = initialMeasureState, action) => {
  switch (action.type) {
    case GET_MEASURES:
      return { ...state, measures: action.data, pagination: action.pagination, measure: undefined }
    case SET_MEASURE:
      return { ...state, measure: action.data, newMeasure: undefined }
    case ADD_MEASURE:
      return { ...state, newMeasure: action.data, measure: undefined }
    default:
      return state
  }
}

export default measureReducer;