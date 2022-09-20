import {useEffect, useState} from "react";
import "../style.css";
import android from "../../../images/Android.svg";

import img1 from "../../../images/img1.jpg";
// import img2 from "../../../images/img2.jpg";
// import img3 from "../../../images/img3.jpg";
// import img4 from "../../../images/img4.jpg";
import "./slideshow.style.css";


const slideImages = ["../../../images/img1.jpg", "../../../images/img2.jpg","../../../images/img3.jpg", "../../../images/img4.jpg"]



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
    <div className="guide-steps-step">
      <div className="step-order" choosed="">
        {i}
      </div>
      <div className="step-content" choosed>
        {content}
      </div>
    </div>
  );
};

const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const showSlide = (n) => {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) setSlideIndex(1);

    if (n < 1) setSlideIndex(slides.length);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    showSlide(slideIndex + n);
    setSlideIndex(slideIndex+n);
  }

  const currentSlide = (n) => {
    showSlide(slideIndex - n);
    setSlideIndex(slideIndex - n);
  }

//   useEffect(() => {
//     showSlide(slideIndex);
//   }, [1]);

  const Slide = (imgUrl) => {
    console.log('call');
        <div className="slide fade">
          <img alt="Guide" src={img1} style={{ width: "100%" }}></img>
          {/* <div className="text">Caption Text</div> */}
        </div>
  }

  const Dot = (index) => {
    return (
        <span className="dot" onClick={() => currentSlide(index+1)}></span>
    )
  }

  return (
    <div className="slide-show">
      <div className="slideshow-container">
            {slideImages.map((e)=>Slide(e))}
      </div>
      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
      <br></br>

      <div style={{ textAlign: "center" }}>
        {slideImages.map((e,i)=>Dot(i))}
      </div>
    </div>
  );
};

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

            {guides.map((e) => Step(e.i, e.content))}
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
