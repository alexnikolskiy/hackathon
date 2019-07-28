import { LOGIN, REGISTER, GET_USER_INFO, GET_CATEGORIES, SET_CATEGORY, GET_QUESTION, SET_ANSWER } from '../constants';

export function register(formData) {
  return {
    type: REGISTER,
    callAPI: `/register`,
    payload: { ...formData },
  };
}

export function login(formData) {
  return {
    type: LOGIN,
    callAPI: `/login`,
    payload: { ...formData },
  };
}

export function getUserInfo() {
  return {
    type: GET_USER_INFO,
    callAPI: '/get_info',
  };
}

export function getCategories() {
  return {
    type: GET_CATEGORIES,
    callAPI: '/get_categories'
  }
}

export function setCategory(categoryId) {
  return {
    type: SET_CATEGORY,
    payload: { categoryId }
  }
}

export function getQuestion(categoryId) {
  return {
    type: GET_QUESTION,
    payload: { category: categoryId },
    callAPI: '/get_next_question',
  }
}

export function setAnswer(answerId) {
  return {
    type: SET_ANSWER,
    payload: { answer: answerId },
    callAPI: '/set_answer'
  }
}
