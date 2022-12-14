import "../style.css";
import React from "react";
import { useState} from "react";
// import parse from 'html-react-parser';




const Reasons = ({data}) => {
  const [reasons] = useState([...data,]);
  const changeReasonsShowing = (i) => {
    let listReasons = document.querySelector(".body-reasons-list");
    let move =i*listReasons.clientWidth;
    listReasons.scrollBy({ left: move, top: 0, behavior: "smooth" });
  };

  const Reason = ({ title, content, icon }) => {
    return (
      <div className="body-reasons-reason">
        <div className="reason-icon">
          <img alt="icon" src={icon}></img>
        </div>
        <div className="reason-content">
          <div className="reason-content-title">{title}</div>
          <hr></hr>
          <div className="reason-content-main">{content}</div>
        </div>
      </div>
    );
  };
  return (
     (
      <div className="body-reasons">
        <div className="body-reasons-header">
          <h1>Vì sao bạn cần sử dụng eSIM MobiFone?</h1>
        </div>

        <div className="body-reasons-reasons">
          <button
            className="body-reasons-nextprev"
            onClick={() => changeReasonsShowing(-1)}
          >
          </button>
          <div className="body-reasons-list">
            {reasons.map((e,i) => (
              <Reason key={i} title = {e.title1} content={e.title2} icon={e.icon} />
            ))}
          </div>
          <button
            className="body-reasons-nextprev"
            onClick={() => changeReasonsShowing(1)}
            style={{ transform: "rotate(0.5turn)" }}
          ></button>
        </div>
      </div>
    )
  );
};

export default Reasons;
