const initialState = {
  loading: false,
  news: null,
  message: null,
  error: false,

};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCH_PENDING":
      return { ...state, loading: true, news: null };
    case "NEWS_FETCH_SUCCESS":
      return { ...state, loading: false, news: action.news };
    case "NEWS_FETCH_ERROR":
      return { ...state, loading: false, message: action.message , error: true };
    default:
      return { ...state };
  }
};

export default newsReducer;