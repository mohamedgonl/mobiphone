import { useEffect, useState } from "react";
import "../style.css";
import android from "../../../images/Android.svg";
import ios from "../../../images/Ios.svg";

import {guideSteps1, guideSteps2} from './datatest'
import "./slideshow.style.css";

var guideSteps = guideSteps1;





const Step = (i, content, choosed, setStepChoosed) => {

  const chooseStep = () => {
    let stepChoosed = new Array(guideSteps.length).fill(false);
    stepChoosed[i-1] = true;
    setStepChoosed(stepChoosed)
  }

  const onChangeStep = () => {
    currentSlide(i);
    chooseStep();
  }
  return (
    <div className="guide-steps-step" onClick={onChangeStep} choosed={choosed?"true":"false"}>
      <div className="step-order" >
        {i}
      </div>
      <div className="step-content">
        {content}
      </div>
    </div>
  );
};

// Slide show function
var slideIndex = 1;

const showSlide = (n) => {
  let dots = document.querySelectorAll(".dot")
  let slides = document.querySelectorAll(".slide")

  if(slides.length && dots.length) {
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
};

const plusSlides = (n) => {
  showSlide(slideIndex += n);
};

const currentSlide = (n) => {
  showSlide(slideIndex = n);
};
// 

//  Slideshow component
const SlideShow = ({setStepChoosed}) => {
  
  const handleClickPreNext = (plus) => {
    plusSlides(plus)
    let stepChoosed = new Array(guideSteps.length).fill(false);
    stepChoosed[slideIndex-1] = true;
    setStepChoosed(stepChoosed)
  }
  
  const Slide = (imgUrl) => {
    return (
      <div className="slide fade" >
      <img alt="Guide"  src={imgUrl} style={{ width: "100%" }}></img>
      {/* <div className="text">Caption Text {i}</div> */}
    </div>
    )
  };
  
  const Dot = (i) => {
    const onChangeDot = () => {
      currentSlide(i+1);
      let stepChoosed = new Array(guideSteps.length).fill(false);
      stepChoosed[i] = true;
      setStepChoosed(stepChoosed)
    }
    return (
      <span className="dot" onClick={()=>onChangeDot()}></span>
      );
    };
    
    
    useEffect(()=>{
      showSlide(1)
    })
    
 
  return (
    <>
      <a className="prev" onClick={()=>handleClickPreNext(-1)}>
        &#10094;
      </a>
    <div className="slide-show">
      <div className="slideshow-container">
        {guideSteps.map((e,i)=>Slide(e.img))}
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        {guideSteps.map((_, i) => Dot(i))}
      </div>
    </div>
      <a className="next" onClick={()=>handleClickPreNext(1)}>
        &#10095;
      </a>
    </>
  );
};






// Entry Guide start
const Guide = () => { 
  const [stepChoosed, setStepChoosed] = useState([]);
  const [os, setOs] = useState('Android');

  useEffect(()=>{
    let stepChoosed = new Array(guideSteps.length).fill(false);
    stepChoosed[0] = true;
    setStepChoosed(stepChoosed)
  },[])

  const handleOSChange = (os) => {
    if(os === 'Android') guideSteps = guideSteps1;
    else guideSteps = guideSteps2;
    setOs(os) 
  }

  return (
    <div className="body-guide" id="guide">
      <div className="body-guide-container">
        <div className="guide-title">
          <h1>Hướng dẫn kích hoạt eSIM</h1>
          <ul>
            <li choosed = {os==='Android'?'false':'true'} onClick = {()=>handleOSChange('IOS')}>IOS</li>
            <li choosed = {os==='Android'?'true':'false'} onClick = {()=> handleOSChange('Android')}>ANDROID</li>
          </ul>
        </div>
        <div className="guide-steps">
          <div className="guide-steps-text">
            <div className="guide-steps-step">
              <img
                className="guide-steps-os step-order"
                alt="os"
                os=""
                src={os === 'Android' ? android: ios}
              ></img>
              <div className="step-content" os="">
                <h2>Đối với {os}</h2>
                <p>Lưu ý: Bật kết nối Internet trước khi thao tác</p>
              </div>
            </div>

            {guideSteps.map((e,i) => Step(i+1, e.content, stepChoosed[i], setStepChoosed))}
          </div>
          <div className="guide-steps-img">
            <SlideShow setStepChoosed = {setStepChoosed}></SlideShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
