import api from "./foodsharebook_api"
import { setRoles, setRole } from "../actions/role";
import { showError } from "../components/lib/common";
import { convertPermisionStringToList } from "../lib/common";
import { getAndSendAction } from "./common_requests";

const path = 'roles'

export const getRole = id => {
  return getAndSendAction({
    path : `${path}/${id}`,
    action: setRole
  })
}