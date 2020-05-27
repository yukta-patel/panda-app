import React, {useState} from "react";
import {Layout, CountryList} from "../components"
import { useSelector } from "react-redux";

const Home = () => {

    

    const { loading, news } = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news,
      }));

    const [singleNews, setsinglenews] = useState({});


      // const { loadingsingle, newssingle } = useSelector(state => ({
      //   loadingsingle: state.postsReducer.singleNews.loading,
      //   newssingle: state.postsReducer.singleNews.news
      // }));
    
        function showLastDiv(){
        document.getElementById('RightDiv').style.display = "block";
      }

     return (
    <div>
        <Layout />

      <div className="row border">
         
         <div className="col-sm-2">
            <CountryList />
          </div> 

          {/* <div className="col-sm-4">
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
          </div> */}

          <div className="col-sm-4">
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
                          <div className="news-source">-{news.source.name}</div>
                          <div className="read-more"><p onClick={() => {setsinglenews(news);showLastDiv()}}>Read More</p></div>
                        </div>
                      </div>
                    ))}

                </div>
              )}
            </div>
          </div>

          <div className="col-sm-6 display" id="RightDiv">
            <div className="right-div font-weight-bold">
              <div className="right-title">{singleNews.title}</div>
              <p className="published-at">Publishes at : {singleNews.publishedAt}</p>
              <img className="right-img" src={singleNews.urlToImage} />
              <div className="right-description">{singleNews.description}</div>
              <div className="right-description">{singleNews.content}</div>
              <div><p className="mt-3 more-information">For more information <a href={singleNews.url}>click here</a></p></div>
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


      </div>
    </div>

       
    

    
    );
};

export default Home;