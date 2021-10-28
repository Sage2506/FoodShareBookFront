export const ERROR = 'ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const raiseError = (error) => {
  return {
    type: ERROR,
    error,
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}