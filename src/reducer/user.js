import { LOGIN, REGISTER, GET_USER_INFO, SET_ANSWER, START, SUCCESS, FAIL } from '../constants';

const initialState = {
  isLoading: true,
  isLogged: false,
  totalPoints: 0,
};

export default (user = initialState, action) => {
  const { type, payload, response } = action;

  let rest = payload;
  if (payload) {
    let { password, ...rest } = payload;
  }

  switch (type) {
    case REGISTER + SUCCESS:
      return Object.assign({}, user, rest, { isLogged: true });
    // case LOGIN + START:
    //   return Object.assign({}, user, rest, { isLoading: true });
    case LOGIN + SUCCESS:
      return Object.assign({}, user, rest, { isLogged: true, isLoading: true });
    case GET_USER_INFO + START:
      return Object.assign({}, user, { isLoading: true });
    case GET_USER_INFO + SUCCESS:
      return Object.assign({}, user, response.data, { isLogged: true, isLoading: false });
    case GET_USER_INFO + FAIL:
      return Object.assign({}, user, { isLoading: false, isLogged: false });
    case SET_ANSWER + SUCCESS:
      return Object.assign({}, user, {
        totalPoints: (user.totalPoints += Number(response.data.points)),
      });
    default:
      return user;
  }
};
