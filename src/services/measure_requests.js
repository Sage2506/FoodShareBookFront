import { getMeasures } from '../actions/measure';
import { paginate, showError } from '../components/lib/common';
import { api } from './foodsharebook_api';

export const get_measures = ( page = 1, per_page = 10) => {
    return async dispatch => {
        try {
            const response = await api.get(`measures?page=${page}&per_page=${per_page}`);
            const { headers, data } = response
            const pagination = paginate(
            parseInt(headers['pagination-total']),
            parseInt(headers['pagination-page']),
            parseInt(headers['pagination-per-page']),
            undefined,
            headers['link']
            );
            dispatch(getMeasures(data, pagination))
        } catch (error) {
            dispatch(showError(error))
        }
    }
}