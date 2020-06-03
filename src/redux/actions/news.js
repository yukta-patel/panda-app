import axios from "axios";
let url;
export const fetchNews = (countryName) => {

  url = `http://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=ab7c85e4f10b4a3ab0c80c4b69afc8e6`
  return dispach => {
    dispach({ type: "NEWS_FETCH_PENDING" });

    try{
      axios.get(url).then(res => {
        dispach({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles });
      });
    }

    catch{
      alert("error");
    }

    // axios.get(url).then(res => {
    //   dispach({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles });
    // });
  };
};


