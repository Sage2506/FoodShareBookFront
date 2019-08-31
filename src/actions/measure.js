export const GET_MEASURES = 'GET_MEASURES'

export const getMeasures = measures => {
  return {
    type: GET_MEASURES,
    measures: measures 
  }
}