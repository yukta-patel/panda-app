import React from "react"
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

const CountryList = () => {

  function HideLastDiv(){
    document.getElementById('RightDiv').style.display = "none";
  }

    const dispatch = useDispatch();
    
    return (
    <div className="left-div">
        <div className="row mt-1">
          <div className="col-4"><img className="flag" src={india} alt="indian-flag" onClick={() => {dispatch(fetchNews("in"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("in"));HideLastDiv()}}>INDIA</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={australia} alt="australia-flag" onClick={() => {dispatch(fetchNews("au"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("au"));HideLastDiv()}}>AUSTRALIA</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={austris} alt="austria-flag" onClick={() => {dispatch(fetchNews("at"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("at"));HideLastDiv()}}>AUSTRIA</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={belgium} alt="belgium-flag" onClick={() => {dispatch(fetchNews("be"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("be"));HideLastDiv()}}>BELGIUM</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={brazil} alt="brazil-flag" onClick={() => {dispatch(fetchNews("br"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("br"));HideLastDiv()}}>BRAZIL</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={canada} alt="canada-flag" onClick={() => {dispatch(fetchNews("ca"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ca"));HideLastDiv()}}>CANADA</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={china} alt="china-flag" onClick={() => {dispatch(fetchNews("cn"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("cn"));HideLastDiv()}}>CHINA</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={egypt} alt="egypt-flag" onClick={() => {dispatch(fetchNews("eg"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("eg"));HideLastDiv()}}>EGYPT</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={france} alt="france-flag" onClick={() => {dispatch(fetchNews("fr"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("fr"));HideLastDiv()}}>FRANCE</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={germany} alt="germany-flag" onClick={() => {dispatch(fetchNews("de"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("de"));HideLastDiv()}}>GERMANY</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={greece} alt="greece-flag" onClick={() => {dispatch(fetchNews("gr"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("gr"));HideLastDiv()}}>GREECE</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={hungary} alt="hungary-flag" onClick={() => {dispatch(fetchNews("hu"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("hu"));HideLastDiv()}}>HUNGARY</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={ireland} alt="ireland-flag" onClick={() => {dispatch(fetchNews("ie"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ie"));HideLastDiv()}}>IRELAND</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={japan} alt="japan-flag" onClick={() => {dispatch(fetchNews("jp"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("jp"));HideLastDiv()}}>JAPAN</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={mexico} alt="mexico-flag" onClick={() => {dispatch(fetchNews("mx"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("mx"));HideLastDiv()}}>MEXICO</p></div>
        </div>

        <div className="row">
          <div className="col-4"><img className="flag" src={ukraine} alt="ukraine-flag" onClick={() => {dispatch(fetchNews("ua"))}}/></div>
          <div className="col-6 country-name"><p onClick={() => {dispatch(fetchNews("ua"));HideLastDiv()}}>UKRAINE</p></div>
        </div>
        
    </div>
    )
}

export default CountryList