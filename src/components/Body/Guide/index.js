import { useEffect, useState } from "react";
import "../style.css";
import android from "../../../images/Android.svg";

import img1 from "../../../images/img1.jpg";
import img2 from "../../../images/img2.jpg";
import img3 from "../../../images/img3.jpg";
import img4 from "../../../images/img4.jpg";
import img5 from "../../../images/img5.jpg";
import "./slideshow.style.css";

const slideImages = [img1,img2,img3,img4,img5];

const guides = [
  { i: 1, content: "Trong mục cài đặt (Settings), Chọn kết nối (Connection)" },
  {
    i: 2,
    content:
      "Chọn quản lý Sim (Sim card manager) và chọn thêm gói di động (Add mobile plan)",
  },
  {
    i: 3,
    content: "Chọn Thêm gói cước di động (Add mobile plan)",
  },
  {
    i: 4,
    content: "Chọn mục Thêm bằng mã QR (Add using QR code)",
  },
  {
    i: 5,
    content:
      "Đưa camera hướng vào mã QR sao cho mã QR nằm trong đường hướng dẫn để quét",
  },
  {
    i: 6,
    content: "Khi gói di động được quét ra, chạm vào Thêm (Add) để đăng ký",
  },
  {
    i: 7,
    content: "Chạm vào OK để bật gói di động",
  },
  {
    i: 8,
    content:
      "Kết quả: eSIM sau khi được kích hoạt sẽ xuất hiện trong mục eSIM như hình",
  },
];

const Step = (i, content) => {
  
  return (
    <div className="guide-steps-step" onClick={()=>currentSlide(i)}>
      <div className="step-order" choosed="">
        {i}
      </div>
      <div className="step-content" choosed>
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
const SlideShow = () => {
  
  const Slide = (imgUrl) => {
    return (
    <div className="slide fade" >
      <img alt="Guide"  src={imgUrl} style={{ width: "100%" }}></img>
      {/* <div className="text">Caption Text {i}</div> */}
    </div>
    )
  };

  const Dot = (i) => {
    return (
      <span className="dot" onClick={() => currentSlide(i+1)}></span>
    );
  };


  useEffect(()=>{
    showSlide(1)
  })

  return (
    <>
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
    <div className="slide-show">
      <div className="slideshow-container">
        {slideImages.map((img,i)=>Slide(img))}
      </div>
      <br></br>

      <div style={{ textAlign: "center" }}>
        {slideImages.map((e, i) => Dot(i))}
      </div>
    </div>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </>
  );
};






// Entry Guide start
const Guide = () => {
  return (
    <div className="body-guide" id="guide">
      <div className="body-guide-container">
        <div className="guide-title">
          <h1>Hướng dẫn kích hoạt eSIM</h1>
          <ul>
            <li>IOS</li>
            <li>ANDROID</li>
          </ul>
        </div>
        <div className="guide-steps">
          <div className="guide-steps-text">
            <div className="guide-steps-step">
              <img
                className="guide-steps-os step-order"
                alt="os"
                os=""
                src={android}
              ></img>
              <div className="step-content" os="">
                <h2>Đối với Android</h2>
                <p>Lưu ý: Bật kết nối Internet trước khi thao tác</p>
              </div>
            </div>

            {guides.map((e,i) => Step(i+1, e.content))}
          </div>
          <div className="guide-steps-img">
            <SlideShow></SlideShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
