import { GET_MEASURES } from "../actions/measure";

const emptyMeasure = { id: null }

const initialMeasureState = {
  measures: [],
  pagination: {
    pages: [],
    arrows: {},
  },
  measure: {...emptyMeasure},
  newMeasure: {...emptyMeasure}
}

export const measureReducer = (state = initialMeasureState, action ) => {
  switch(action.type){
    case GET_MEASURES:
      return {...state, measures: action.measures, pagination: action.pagination, measure: {...emptyMeasure}}
    default:
      return state
  }
}

export default measureReducer;