import { api } from "./foodsharebook_api";
import { getMeasures } from "../actions/measure";

export const get_measures = () => {
  return async ( dispatch : Function) =>{
    try {
      const response = await api.get(`measures`);
      dispatch(getMeasures(response.data));
    }
    catch (error) {
      throw (error);
    }
  }
}