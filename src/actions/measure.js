export const GET_MEASURES = 'GET_MEASURES'

export const getMeasures = (measures, pagination) => {
  return {
    type: GET_MEASURES,
    measures,
    pagination
  }
}