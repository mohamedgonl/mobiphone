import { useEffect, useState } from "react";
import "../style.css";
import android from "../../../images/Android.svg";
import ios from "../../../images/Ios.svg";
import {guideSteps1, guideSteps2} from './datatest'
import "./slideshow.style.css";


const Step = ({i, content, stepChoosed, setStepChoosed}) => {

  const onChangeStep = () => {
    console.log('1 c',stepChoosed);
    setStepChoosed(()=>i); 
    console.log('2 c', stepChoosed);
    currentSlide(i);
  }
  return (
    <div className="guide-steps-step" onClick={()=>onChangeStep()} choosed={stepChoosed? "true":"false"}>
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
  console.log({dots, slides});
  // if(slides.length && dots.length) {
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
  // }
};

const plusSlides = (n) => {
  showSlide(slideIndex += n);
};

const currentSlide = (n) => {
  showSlide(slideIndex = n);
};
// 

//  Slideshow component
const SlideShow = ({setStepChoosed, guideSteps}) => {


    useEffect(()=>{
      // slideIndex = 1
      // showSlide(1)
      currentSlide(1)
      console.log('call slideshow - effect');
    }, [guideSteps])

  const handleClickPreNext = (plus) => {
    plusSlides(plus)
    setStepChoosed(slideIndex)
  }
  
  const Slide = ({img}) => {
    return (
      <div className="slide fade" >
      <img src={img} style={{ width: "100%" }}></img>
      {/* <div className="text">Caption Text {i}</div> */}
    </div>
    )
  };
  
  const Dot = ({i}) => {
    const onChangeDot = () => {
      currentSlide(i+1);
      setStepChoosed(i+1)
    }
    return (
      <span className="dot" onClick={()=>onChangeDot()}></span>
      );
    };
    
  return (
    <>
      <div className="prev" onClick={()=>handleClickPreNext(-1)}>
        &#10094;
      </div>
    <div className="slide-show">
      <div className="slideshow-container">
        {guideSteps.map((e)=> <Slide img = {e.img} />)}
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        {guideSteps.map((_, i) => <Dot i={i}/>)}
      </div>
    </div>
      <div className="next" onClick={()=>handleClickPreNext(1)}>
        &#10095;
      </div>
    </>
  );
};






// Entry Guide start
const Guide = () => {
  const [guideSteps, setGuideSteps] = useState([]); 
  const [stepChoosed, setStepChoosed] = useState(1);
  const [os, setOs] = useState('Android');
  const [loaded, setLoaded] = useState(false);

  
  // CALL API 
  useEffect(()=>{
    setTimeout(() => {
      setGuideSteps(guideSteps1)
      setLoaded(true)
    }, 1000);
    console.log('call guide - effect 1');
  },[loaded])


  // reset step choosed when switch os
  useEffect(() => {
    setStepChoosed(1);
    console.log('call guide - effect 2');
  }, [os]);

  useEffect(()=>{
    console.log('step choosed changed');
    console.log(stepChoosed);
  },[stepChoosed])
  
  const handleOSChange = (os) => {
    if(os === 'Android') setGuideSteps(guideSteps1)
    else setGuideSteps(guideSteps2)
    setOs(os) 
  }

  return (
    loaded && <div className="body-guide" id="guide">
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
            <div>
            {guideSteps.map((e,i) => <Step i ={i+1} content = {e.content} stepChoosed = {i+1 === stepChoosed ? true : false}  guideSteps={guideSteps}  setStepChoosed = {setStepChoosed}/>) }
            </div>
          </div>
          <div className="guide-steps-img">
          {<SlideShow setStepChoosed = {setStepChoosed} guideSteps={guideSteps}></SlideShow>}  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
