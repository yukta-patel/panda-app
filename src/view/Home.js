import React, {useEffect} from "react";
import {Layout, CountryList} from "../components"
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleNews } from "../redux/actions/news";

const Home = () => {

    const dispatch = useDispatch();

    const { loading, news, singleloaging, singlenews } = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news,
        singleloaging: state.newsReducer.singleNews.loading,
        singlenews: state.newsReducer.singleNews.news,
      }));

      // const { loadingsingle, newssingle } = useSelector(state => ({
      //   loadingsingle: state.postsReducer.singleNews.loading,
      //   newssingle: state.postsReducer.singleNews.news
      // }));
    
      // useEffect(() => {
      //   dispatch(fetchNews());
      // }, [dispatch]);

      

    return (
    <div>
        <Layout />
        
      

      <div className="row border">
         
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
          </div>

          <div className="col-sm-6">
            <div className="right-div">  
            {singleloaging ? (
                <div>Loding...</div>
                ) : (
                <div>
                  {singlenews !== null &&
                    singlenews.map(newsingle => (
                      <div key={newsingle.id}>
                        <div className="news-title-div">
                          <div className="news-title">{newsingle.title}</div>
                        </div>
                      </div>
                    ))}

                </div>
                )}
            </div>
          </div>

          {/* <div className="col-sm-6">
            <div className="right-div">  
            {singleloaging ? (
                <div>Loding...</div>
                ) : (
                <div>
                  {singlenews !== null &&
                    singlenews.map(newsingle => (
                      <div key={newsingle.id}>
                        <div className="news-title-div">
                          <div className="news-title">{newsingle.title}</div>
                        </div>
                      </div>
                    ))}

                </div>
                )}
            </div>
          </div> */}

           



          {/* <div className="col-sm-6">
            <div className="right-div">  
            {singleloaging ? (
                <div>Loding...</div>
                ) : (
                <div>
                  {singlenews !== null &&
                  singlenews.map(newsingle => (
                     
                       <>
                      {news !== null &&
                         (
                        

                      <div>
                        <div className="news-title-div">
                        <div className="news-title">{news.title}</div>
                        </div>
                      </div>
                      

                      )} 
                      </>      
                  ))}

                        

                </div>
                )}
            </div>
          </div> */}



              {/* <div className="col-sm-4">
                <div className="middle-div">  {loading ? (
              <div>Loding...</div>
              ) : (
              <div>
                {news !== null &&
                  news.map(news => (
                    <>

                    {singlenews !== null &&(
                      <>
                    <div>
                      <div className="news-title-div">
                        <div className="news-title">{news.title}</div>
                        <div className="read-more"><p onClick={() => {dispatch(fetchSingleNews())}}>Read More</p></div>
                      </div>
                    </div>

                    <div className="news-title-div">
                    <div className="news-title">{singlenews.title}</div>
                    </div>
                    </>
                    )}
                      

                    </>
                  ))}

              </div>
              )}
            </div>
          </div> */}

         
          







      

      </div>
      </div>

       
    

    
    );
};

export default Home;