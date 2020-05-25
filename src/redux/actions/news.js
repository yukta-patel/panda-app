import axios from "axios";

export const fetchNews = (countryName) => {
  // return dispach => {
  //   dispach({ type: "NEWS_FETCH_PENDING" });

  //   axios.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=ab7c85e4f10b4a3ab0c80c4b69afc8e6").then(res => {
  //     dispach({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles });
  //   });
  // };


  return dispach => {
    dispach({ type: "NEWS_FETCH_PENDING" });

    axios.get(`http://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=ab7c85e4f10b4a3ab0c80c4b69afc8e6`).then(res => {
      dispach({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles });
    });
  };
};

