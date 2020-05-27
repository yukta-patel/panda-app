import React from "react"
import { fetchSingleNews } from "../redux/actions/news";
import { useDispatch} from "react-redux";

const NewsTitle = () => {

    const dispatch = useDispatch();

    const { loading, news} = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news,
      }));

    return (
        <div className="middle-div">  
        {loading ? (
            <div>Loding...</div>
            ) : (
            <div>
              {news !== null &&
                news.map(news => (
                  <div>
                    <div className="news-title-div">
                      <div className="news-title">{news.title}</div>
                      <div className="read-more"><p onClick={() => {dispatch(fetchSingleNews())}}>Read More</p></div>
                    </div>
                  </div>
                ))}

            </div>
            )}
          </div>
    )
}

export default NewsTitle