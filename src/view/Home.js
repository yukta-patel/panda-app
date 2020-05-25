import React, {useEffect} from "react";
// import india from "../image/india.png"
import {Layout, CountryList} from "../components"

import { useDispatch, useSelector } from "react-redux";
// import { fetchNews } from "../redux/actions/news";

const Home = () => {

    // const dispatch = useDispatch();

    const { loading, news } = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news
      }));
    
      // useEffect(() => {
      //   dispatch(fetchNews());
      // }, [dispatch]);

      // function hello()
      // {
      //     console.log("hello");
      // }

      

    return (
    <div>
        <Layout />
        
      

      <div className="row border">
          {/* <div className="col-sm-2 border">
            <div className="left-div">
              <div className="border row">
                <div className="col-4"><img className="flag" src={india} alt="indian-flag" onClick={() => {dispatch(fetchNews("in"))}}/></div>
                <div className="col-6"><p onClick={() => {dispatch(fetchNews("in"))}}>INDIA</p></div>
              </div>
            </div>
          </div> */}
         

          <div className="col-sm-2">
            <CountryList />
          </div> 

          <div className="col-sm-4">
                <div className="middle-div">  {loading ? (
              <div>Loding...</div>
              ) : (
              <div>
                {news !== null &&
                  news.map(news => (
                    <div key={news.id}>
                      <div className="news-title-div">
                        <div className="news-title">{news.title}</div>
                        <div className="read-more">Read More</div>
                      </div>
                    </div>
                  ))}

              </div>
              )}
            </div>
          </div>

          <div className="col-sm-6">
            <div className="right-div">123</div>
          </div>
      </div>

       
    </div>

    
    );
}

export default Home