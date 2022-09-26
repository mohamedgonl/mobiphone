import "../style.css";
import React from "react";
import { useState, useEffect } from "react";
import icon1 from "../../../images/icon1.svg";
import icon2 from "../../../images/icon2.svg";
import icon3 from "../../../images/icon3.svg";

var reasons11 = [
  {
    icon: icon1,
    title: "Sử dụng nhiều số điện thoại trên 1 thiết bị",
    content: "Không cần lắp đặt nhiều sim vật lý trên điện thoại.",
  },
  {
    icon: icon2,
    title: "Tránh hỏng mất SIM",
    content:
      "eSIM có phần cứng được lắp vào thiết bị di động, phần mềm được cài đặt quản lý SIM được tải và cài đặt ngay trên máy.",
  },
  {
    icon: icon3,
    title: "Mạng di động Nhanh - Ổn định - Khắp mọi nơi",
    content:
      "Trải nghiệm eSIM Viettel với tốc độ mạng 3G/4G nhanh và ổn định, cùng dịch vụ chăm sóc khách hàng hoàn hảo 24/7.",
  },
  {
    icon: icon1,
    title: "Test1",
    content: "Test1",
  },
  {
    icon: icon1,
    title: "Test2",
    content: "Test2",
  },
  {
    icon: icon1,
    title: "Test3",
    content: "Test3",
  },
  {
    icon: icon1,
    title: "Test4",
    content: "Test4",
  },
];

const Reasons = () => {
  const [reasons, setReasons] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // CALL API
  useEffect(() => {
    setInterval(() => {
      setReasons(reasons11);
      setLoaded(true);
    }, 3000);
  }, [loaded]);

  const changeReasonsShowing = (i) => {
    let listReasons = document.querySelector(".body-reasons-list");
    listReasons.scrollBy({ left: i, top: 0, behavior: "smooth" });
  };

  const Reason = ({ title, content, icon }) => {
    return (
      <div className="body-reasons-reason">
        <div className="reason-icon">
          <img alt="icon" src={icon}></img>
        </div>
        <div className="reason-content">
          <p className="reason-content-title">{title}</p>
          <hr></hr>
          <p className="reason-content-main">{content}</p>
        </div>
      </div>
    );
  };
  return (
    loaded && (
      <div className="body-reasons">
        <div className="body-reasons-header">
          <h1>Vì sao bạn cần sử dụng eSIM MobiFone?</h1>
        </div>

        <div className="body-reasons-reasons">
          <button
            className="body-reasons-nextprev"
            onClick={() => changeReasonsShowing(-700)}
          >
            {" "}
          </button>
          <div className="body-reasons-list">
            {reasons.map((e) => (
              <Reason title={e.title} content={e.content} icon={e.icon} />
            ))}
          </div>
          <button
            className="body-reasons-nextprev"
            onClick={() => changeReasonsShowing(700)}
            style={{ transform: "rotate(0.5turn)" }}
          ></button>
        </div>
      </div>
    )
  );
};

export default Reasons;
