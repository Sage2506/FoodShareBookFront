import { GET_MEASURES } from "../actions/measure";

const initialMeasureState = {
  measures: []
}

export const measureReducer = (state = initialMeasureState, action : any ) => {
  switch(action.type){
    case GET_MEASURES:
      return {...state, measures: action.measures}
    default:
      return state
  }
}

export default measureReducer;