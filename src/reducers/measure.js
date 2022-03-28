import { GET_MEASURES, SET_MEASURE } from "../actions/measure";


const initialMeasureState = {
  measures: [],
  pagination: {
    pages: [],
    arrows: {},
  },
  measure: undefined,
  newMeasure: undefined
}

export const measureReducer = (state = initialMeasureState, action ) => {
  switch(action.type){
    case GET_MEASURES:
      return {...state, measures: action.measures, pagination: action.pagination, measure: undefined }
    case SET_MEASURE:
      return {...state, measure: action.measure, newMeasure: undefined}
    default:
      return state
  }
}

export default measureReducer;