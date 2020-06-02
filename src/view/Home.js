import React, {useState} from "react";
import {Layout, CountryList} from "../components"
import { useSelector } from "react-redux";
import { fetchNews } from "../redux/actions/news";
import { useDispatch} from "react-redux";


const Home = () => {

    const dispatch = useDispatch();

    const { loading, news } = useSelector(state => ({
        loading: state.newsReducer.loading,
        news: state.newsReducer.news,
      }));

    const [singleNews, setsinglenews] = useState({});
    
      function showLastDiv(){
        document.getElementById('RightDiv').style.display = "block";
      }

      const SetCountryNews=(event)=>{
        document.getElementById('title-div').style.display="block";
        document.getElementById('Description-div').style.display="none";
        console.log(event.target.value)
        dispatch(fetchNews(event.target.value))
      }

      function HideNewsTitle(){
        document.getElementById('title-div').style.display="none";
        document.getElementById('Description-div').style.display="block"
      }

      function backToHome(){
        document.getElementById('dropdown-div').style.display="block";
        document.getElementById('title-div').style.display="block";
        document.getElementById('Description-div').style.display="none"
      }


      const CountryArray = [
        { key: "in", value: "INDIA" },
        { key: "au", value: "AUSTRALIA" },
        { key: "at", value: "AUSTRIA" },
        { key: "be", value: "BELGIUM" },
        { key: "br", value: "BRAZIL" },
        { key: "ca", value: "CANADA" },
        { key: "cn", value: "CHINA" },
        { key: "eg", value: "EGYPT" },
        { key: "fr", value: "FRANCE" },
        { key: "de", value: "GERMANY" },
        { key: "gr", value: "GREECE" },
        { key: "hu", value: "HUNGARY" },
        { key: "ie", value: "IRELAND" },
        { key: "jp", value: "JAPAN" },
        { key: "mx", value: "MEXICO" },
        { key: "ua", value: "UKRAINE" },
      ];

  return (
  <div className="container-fluid">

    <div>
        <Layout />
    </div>


    <div className="main-div">
        <div className="row border-top">
         
          <div className="col-sm-2">
            <CountryList />
          </div> 

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
  
        <select className="dropdown" id="dropdown-div" onChange={SetCountryNews}>
          <option className="options">Select Country</option>
            {CountryArray !== null &&
             CountryArray.map((country) => (
              <option className="options" value={country.key}>{country.value}</option>
          ))}
        </select>

        <div className="mobile-title-div" id="title-div">
        {loading ? (
                <div className="loading">Loding...</div>
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

        <div className="mobile-description-div" id="Description-div">
          <button className="back-btn" onClick={backToHome}>&lt;</button>
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