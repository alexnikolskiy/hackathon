import { GET_CATEGORIES, SET_CATEGORY, START, SUCCESS, FAIL } from '../constants';

const initialState = {
  entities: [],
  isLoading: false,
  active: null,
};

export default (categories = initialState, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case GET_CATEGORIES + START:
      return Object.assign({}, categories, { isLoading: true });
    case GET_CATEGORIES + SUCCESS:
      return Object.assign({}, categories, {
        entities: response.data.result,
        isLoading: false,
      });
    case GET_CATEGORIES + FAIL:
      return Object.assign({}, categories, { isLoading: false });
    case SET_CATEGORY:
      return Object.assign({}, categories, { active: payload.categoryId });
    default:
      return categories;
  }
};
