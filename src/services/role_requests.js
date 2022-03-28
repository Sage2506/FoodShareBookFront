import { setRole } from "../actions/role";
import { getAndSendAction } from "./common_requests";

const path = 'roles'

export const getRole = id => {
  return getAndSendAction({
    path : `${path}/${id}`,
    action: setRole
  })
}