import axios from 'axios';
import { SUCCESS, FAIL, START } from '../constants';

export default store => next => action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);
  next({ ...rest, type: type + START });

  const { payload } = rest;

  axios
    .post(callAPI, payload)
    .then(response => {
      const { token, error } = response.data;
      console.log(response);
      if (!token && error) {
        throw new Error(error);
      }
      next({ ...rest, type: type + SUCCESS, response });
    })
    .catch(error => {
      next({...rest, type: type + FAIL, error})
    });
};
