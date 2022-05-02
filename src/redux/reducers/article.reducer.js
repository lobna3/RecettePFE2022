import {
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE,
  GET_ARTICLE_LIST,
  GET_ARTICLE_LIST_SUCCESS,
} from "../actionTypes";

const articleInitState = {
  loading: false,
  articleList: [],
  selectedArticle: {},
};

const articleReducer = (state = articleInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_ARTICLE:
      return { ...state, loading: true };
    case ADD_ARTICLE_SUCCESS:
      return { ...state, loading: true };
    case GET_ARTICLE_LIST:
      return { ...state, loading: true };
    case GET_ARTICLE_LIST_SUCCESS:
      return { ...state, loading: false, articleList: payload };
    case UPDATE_CATEGORY:
      return { ...state, selectedCategory: payload };

    default:
      return state;
  }
};
export default articleReducer;
