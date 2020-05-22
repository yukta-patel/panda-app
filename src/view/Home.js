import React, {useEffect} from "react";
import {Layout} from "../components"

import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions/news";

const Home = () => {

    const dispatch = useDispatch();

    const { loading, news } = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news
      }));
    
      useEffect(() => {
        dispatch(fetchNews());
      }, [dispatch]);

      

    return (
    <div>
        <Layout />
        
        {loading ? (
            <div>Loding...</div>
            ) : (
            <div>
            {news !== null &&
            (
                <>
                <div>{news.status} {news.totalResults}</div>
                </>
            )}

            </div>
        )}

      <div className="row border">
          <div className="col-sm-2 border">
            <div className="left-div">
              123456789 11 12 13 14 15 16 17 18 19 20 cdee fec dcea
            </div>
          </div>

          <div className="col-sm-4 border">
            <div className="middle-div">123</div>
          </div>

          <div className="col-sm-6 border">
            <div className="right-div">123</div>
          </div>
      </div>

       
    </div>

    
    );
}

export default Home