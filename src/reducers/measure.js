import { GET_MEASURES } from "../actions/measure";


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
    default:
      return state
  }
}

export default measureReducer;