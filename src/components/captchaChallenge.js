import React, { Component } from 'react';
import refresh from './images/refresh.png'
import audio from './images/audio.png'
import info from './images/info.png'
import { stringify } from 'querystring';

const fs = require('fs');

class CaptchaChallenge extends Component {
  fs = require('fs');
  state = {
    "items":{
        "img1":{"imgurl":"","endless":false},
        "img2":{"imgurl":"","endless":false},
        "img3":{"imgurl":"","endless":false},
        "img4":{"imgurl":"","endless":false},
        "img5":{"imgurl":"","endless":false},
        "img6":{"imgurl":"","endless":false},
        "img7":{"imgurl":"","endless":false},
        "img8":{"imgurl":"","endless":false},
        "img9":{"imgurl":"","endless":false}
    },
    "liveImages":[],
    "category":"",
    "otherCategories":[]
  };
  render() {
    // var categories = [];
    // fs.readdirSync('./challenge-images').forEach(file => {
    //   categories.push(file)
    // });
    // //sort categories
    // var index = Math.floor(Math.random() * categories.length)
    // this.state.category = categories[index]
    // categories = categories.splice(index)
    // this.state.category = categories
    // //sort items
    // var imgNum = Math.floor(Math.random() * 9)
    // this.state.item["img"+stringify(imgNum+1)].endless = true
    // console.log(this.state)
    function verify() {
        alert("Please complete the captcha")
    }
    function error() {
        alert("Error occured, try again")
    }
    function refreshPage() {
        window.location.reload(false);
    }
    function infoAlert() {
        alert("An endless fading captcha, your worst nightmare 😈")
    }
    return (
        <div>
            <div className="captcha-topbox">
                <h5>Select all images with</h5>
                <h4>crosswalks</h4>
            </div>
            <div className="captcha-imgbox">
                <img className="img1" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img2" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img3" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img4" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img5" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img6" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img7" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img8" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
                <img className="img9" src="https://vimechomelifts.co.uk/wp-content/uploads/2019/08/BANNER-correlati-prodotti-dolcevita-1-1.jpg"></img>
            </div>
            <div className="captcha-bottombox">
                <img  onClick={refreshPage} className="links" src={refresh}></img>
                <img  onClick={error} className="links" src={audio}></img>
                <img  onClick={infoAlert} className="links" src={info}></img>
                <button onClick={verify} className="verify-button">Verify</button>
            </div>
        </div>
    );
  }
}

export default CaptchaChallenge;
