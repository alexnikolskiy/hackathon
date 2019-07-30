import axios from 'axios';
import { SUCCESS, FAIL, START } from '../constants';

export default store => next => action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);
  next({ ...rest, type: type + START });

  const { payload } = rest;
  const api = process.env.NODE_ENV === 'development' ? '' : process.env.REACT_APP_API_URL;

  console.log(process.env);
  axios
    .post(`${api}${callAPI}`, payload, {
      withCredentials: true
    })
    .then(response => {
      const { token, error } = response.data;
      console.log(response);
      if (!token && error) {
        throw new Error(error);
      }
      next({ ...rest, type: type + SUCCESS, response });
    })
    .catch(error => {
      console.log(error);
      next({...rest, type: type + FAIL, error})
    });
};
