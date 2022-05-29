import { setRole } from "../actions/role";
import { getAndDispatch } from "./common_requests";

const path = 'roles'

export const getRole = id => {
  return getAndDispatch({
    path : `${path}/${id}`,
    action: setRole
  })
}