const initialState = {
    loading: false,
    news: null,
    singleNews: {
      loading: false,
      news: null
    }
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "NEWS_FETCH_PENDING":
        return { ...state, loading: true, news: null };
      case "NEWS_FETCH_SUCCESS":
        return { ...state, loading: false, news: action.news };
        // case "SINGLE_NEWS_PENDING":
        //   return { ...state, singleNews: { loading: true, news: null } };
        // case "SINGLE_NEWS_SUCCESS":
        //   return { ...state, singleNews: { loading: false, news: action.news } };
      default:
        return { ...state };
    }
  };
  
  export default newsReducer;