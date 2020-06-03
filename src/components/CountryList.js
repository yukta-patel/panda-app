import React, { useState, useEffect } from "react"
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
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

const CountryList = () => {

  function HideLastDiv() {
    document.getElementById('RightDiv').style.display = "none";
  }

  const { loading, news } = useSelector(state => ({
    loading: state.newsReducer.loading,
    news: state.newsReducer.news,
  }));

  const dispatch = useDispatch();

  const CountryArray = [
    { key: "in", value: "INDIA", img: india },
    { key: "au", value: "AUSTRALIA", img: australia },
    { key: "at", value: "AUSTRIA", img: austris },
    { key: "be", value: "BELGIUM", img: belgium },
    { key: "br", value: "BRAZIL", img: brazil },
    { key: "ca", value: "CANADA", img: canada },
    { key: "cn", value: "CHINA", img: china },
    { key: "eg", value: "EGYPT", img: egypt },
    { key: "fr", value: "FRANCE", img: france },
    { key: "de", value: "GERMANY", img: germany },
    { key: "gr", value: "GREECE", img: greece },
    { key: "hu", value: "HUNGARY", img: hungary },
    { key: "ie", value: "IRELAND", img: ireland },
    { key: "jp", value: "JAPAN", img: japan },
    { key: "mx", value: "MEXICO", img: mexico },
    { key: "ua", value: "UKRAINE", img: ukraine },
  ];

  return (
    <div className="left-div">

      {CountryArray !== null &&
        CountryArray.map((country) => (
          <div className="row mt-1">
            <div className="col-4"><img className="flag" src={country.img} alt="indian-flag" onClick={() => { dispatch(fetchNews(country.key));HideLastDiv()}} /></div>
            <div className="col-6 country-name"><p onClick={() => { dispatch(fetchNews(country.key));HideLastDiv()}}>{country.value}</p></div>
          </div>
        ))}

    </div>
  )
}

export default CountryList