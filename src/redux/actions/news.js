import axios from "axios";

export const fetchNews = () => {
  return dispach => {
    dispach({ type: "NEWS_FETCH_PENDING" });

    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ab7c85e4f10b4a3ab0c80c4b69afc8e6").then(res => {
      dispach({ type: "NEWS_FETCH_SUCCESS", news: res.data });
    });
  };
};

