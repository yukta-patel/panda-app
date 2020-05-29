import React, {useState} from "react";
import {Layout, CountryList} from "../components"
import { useSelector } from "react-redux";

import india from "../image/india.png"
import australia from "../image/australia.png"
import austris from "../image/austria.png"
import belgium from "../image/belgium.png"
import brazil from "../image/brazil.png"
import canada from "../image/canada.png"
import china from "../image/china.png"
import egypt from "../image/egypt.jpg"
import france from "../image/france.png"
import germany from "../image/germany.png"
import greece from "../image/greece.png"
import hungary from "../image/hungary.png"
import ireland from "../image/ireland.jpg"
import japan from "../image/japan.jpg"
import mexico from "../image/mexico.jpg"
import ukraine from "../image/ukraine.jpg"

import { fetchNews } from "../redux/actions/news";
import { useDispatch} from "react-redux";


const Home = () => {

    const dispatch = useDispatch();

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

      function HideLastDiv(){
        document.getElementById('RightDiv').style.display = "none";
      }

      function HideCountryList(){
        document.getElementById('CountryList').style.display="none";
        document.getElementById('NewsTitle').style.display="block"
      }

      function HideNewsTitle(){
        document.getElementById('NewsTitle').style.display="none";
        document.getElementById('NewsDescription').style.display="block"
      }

      function backToCountrtyList(){
        document.getElementById('CountryList').style.display="block";
        document.getElementById('NewsTitle').style.display="none";
      }

      function backToTitles(){
        document.getElementById('NewsTitle').style.display="block";
        document.getElementById('NewsDescription').style.display="none";
      }

  return (
  <div>

    <div>
        <Layout />
    </div>


    <div className="main-div">
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


      </div>
    </div>

    <div className="mobile-dropdown-div">

          <div id="CountryList">
      
              <div className="row mt-1">
                <div className="col-4"><img className="flag" src={india} alt="indian-flag" onClick={() => {dispatch(fetchNews("in"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("in"));HideCountryList()}}>INDIA</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={australia} alt="australia-flag" onClick={() => {dispatch(fetchNews("au"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("au"));HideCountryList()}}>AUSTRALIA</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={austris} alt="austria-flag" onClick={() => {dispatch(fetchNews("at"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("at"));HideCountryList()}}>AUSTRIA</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={belgium} alt="belgium-flag" onClick={() => {dispatch(fetchNews("be"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("be"));HideCountryList()}}>BELGIUM</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={brazil} alt="brazil-flag" onClick={() => {dispatch(fetchNews("br"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("br"));HideCountryList()}}>BRAZIL</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={canada} alt="canada-flag" onClick={() => {dispatch(fetchNews("ca"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ca"));HideCountryList()}}>CANADA</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={china} alt="china-flag" onClick={() => {dispatch(fetchNews("cn"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("cn"));HideCountryList()}}>CHINA</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={egypt} alt="egypt-flag" onClick={() => {dispatch(fetchNews("eg"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("eg"));HideCountryList()}}>EGYPT</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={france} alt="france-flag" onClick={() => {dispatch(fetchNews("fr"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("fr"));HideCountryList()}}>FRANCE</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={germany} alt="germany-flag" onClick={() => {dispatch(fetchNews("de"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("de"));HideCountryList()}}>GERMANY</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={greece} alt="greece-flag" onClick={() => {dispatch(fetchNews("gr"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("gr"));HideCountryList()}}>GREECE</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={hungary} alt="hungary-flag" onClick={() => {dispatch(fetchNews("hu"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("hu"));HideCountryList()}}>HUNGARY</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={ireland} alt="ireland-flag" onClick={() => {dispatch(fetchNews("ie"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ie"));HideCountryList()}}>IRELAND</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={japan} alt="japan-flag" onClick={() => {dispatch(fetchNews("jp"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("jp"));HideCountryList()}}>JAPAN</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={mexico} alt="mexico-flag" onClick={() => {dispatch(fetchNews("mx"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("mx"));HideCountryList()}}>MEXICO</p></div>
              </div>

              <div className="row">
                <div className="col-4"><img className="flag" src={ukraine} alt="ukraine-flag" onClick={() => {dispatch(fetchNews("ua"))}}/></div>
                <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ua"));HideCountryList()}}>UKRAINE</p></div>
              </div>

        </div>

        {/* <select>
          <option onChange={() => {dispatch(fetchNews("in"))}}>India</option>
          <option >Austria</option>
          <option >Belgium</option>
          <option >Canada</option>
          <option >United States</option>
          <option >India</option>
          <option >China</option>
          <option >Columbia</option>
          <option >Cuba</option> 
        </select> */}

      

        <div className="mobile-title-div" id="NewsTitle"> 
          <button className="back-btn" onClick={backToCountrtyList}>Back</button>
              {loading ? (
                <div>Loding...</div>
                ) : (
                <div>
                  {news !== null &&
                    news.map(news => (
                        <div className="news-title-div">
                          <div className="news-title">{news.title}</div>
                          <div className="news-source">-{news.source.name}</div>
                          <div className="read-more"><p onClick={() => {setsinglenews(news);HideNewsTitle()}}>Read More</p></div>
                        </div>
                    ))}

                </div>
              )}
        </div>

        <div className="mobile-description-div" id="NewsDescription">
          <button className="back-btn" onClick={backToTitles}>Back</button>
          <div className="right-title">{singleNews.title}</div>
          <p className="published-at">Publishes at : {singleNews.publishedAt}</p>
          <img className="right-img" src={singleNews.urlToImage} />
          <div className="right-description">{singleNews.description}</div>
          <div className="right-description">{singleNews.content}</div>
          <div><p className="mt-3 more-information">For more information <a href={singleNews.url}>click here</a></p></div>
        </div>

      </div> 
    
  </div>

       
    

    
    );
};

export default Home;