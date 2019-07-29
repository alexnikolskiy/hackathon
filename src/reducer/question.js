import { GET_QUESTION, START, SUCCESS, FAIL, SET_CATEGORY, SET_ANSWER } from '../constants';

const initialState = {
  isLoading: false,
  isRight: null,
};

export default (question = {}, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case GET_QUESTION + START:
      return Object.assign({}, question, { isLoading: true });
    case GET_QUESTION + SUCCESS:
      return Object.assign({}, question, response.data, { isLoading: false });
    case GET_QUESTION + FAIL:
      return Object.assign({}, question, { isLoading: false });
    case SET_CATEGORY + SUCCESS:
      return Object.assign({}, question, { isLoading: true, isRight: null });
    case SET_ANSWER + SUCCESS:
      const isRight = Number(response.data.points) > 0;
      return Object.assign({}, question, { isLoading: false, isRight });
    default:
      return question;
  }
};
