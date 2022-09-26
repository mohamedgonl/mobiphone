import React, { useEffect } from "react";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "../style.css";
import button from "../../../images/Path.svg";
import { getData } from "../../../helpers/fetchAPI";


var questions1 = [
  {
    question:
      "1. Tại 1 thời điểm khách hàng sử dụng được bao nhiêu số thuê bao trên eSIM?",
    answer:
    "Chỉ sử dụng “bật” được 1 thuê bao. Tuy nhiên, KH có thể tích hợp nhiều số thuê bao khác nhau của các nhà mạng khác nhau trên 1 eSim.",
  },
  {
    question:
    "2. Khách hàng có thể sử dụng đồng thời eSIM & sim vật lý được không?",
    answer: "2",
  },
  {
    question:
    "3. Khách hàng đang sử dụng sim Dcom,có chuyển sang eSIM được không?",
    answer: "3",
  },
  {
    question:
    "4. Khách hàng đang sử dụng 1 eSIM (được tích hợp 3 số thuê bao trên eSIM & 1 sim vật lý trên cùng 1 thiết bị. Vậy máy có hiển thị vạch sóng của cả 4 sim không?",
    answer: "4",
  },
  {
    question: "5. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "5",
  },
  {
    question: "6. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "6",
  },
  {
    question: "7. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "7",
  },
  {
    question: "8. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "8",
  },
  {
    question: "9. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "9",
  },
  {
    question: "10. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "10",
  },
  {
    question: "11. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "11",
  },
  {
    question: "12. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "12",
  },
  {
    question: "13. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "13",
  },
  {
    question: "14. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "14",
  },
  {
    question: "15. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "15",
  },
  {
    question: "16. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "16",
  },
  {
    question: "17. Có thể quét 1 QR code cho 2 thiết bị được không?",
    answer: "17",
  },
];

const pageStart = 1;
const maxQuestionPerPage = 5;
const Question = ({ques, ans}) => {
  const [hidden, setHidden] = useState(true);
  return (
    <div className="question-container" id="questions">
      <div className="question-q">
        <input
          alt="show"
          onClick={() =>setHidden(!hidden)}
          type={"image"}
          src={button}
          style={{
            width: "16px",
            height: "9px",
            margin: "auto 0",
            marginLeft: "1rem",
          }}
        ></input>
        <p  onClick={() =>setHidden(!hidden)}>{ques}</p>
      </div>

      <div className="question-a" hidden={hidden}>
        <hr></hr>
        <h3>Trả lời</h3>
        <p>{ans}</p>
      </div>
    </div>
  );
};

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [questionShowing, setQuestionShowing] = useState([]);
  const [curPage, setCurPage] = useState(pageStart);
  const [pageCount, setPageCount] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setQuestions(() => [...questions1]);
        setQuestionShowing(() => [...getQuestions(pageStart, questions)]);
        setPageCount(() => Math.ceil(questions.length / maxQuestionPerPage));
        setLoaded(true)
      }, 3000);
  }, [loaded]);

  const navigatePage = (event, page) => {
    setCurPage(page);
    setQuestionShowing([...getQuestions(page, questions)]);
  };

  return (
    <div className="body-question">
      <h1>Câu hỏi thường gặp</h1>
      {questionShowing.map(e => (<Question ques={e.question} ans={e.answer}/>))}
      <div  className="questions-navigate"  
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Pagination
          onChange={(e, page) => navigatePage(e, page)}
          count={pageCount}
          page={curPage}
          shape="rounded"
        ></Pagination>
      </div>
    </div>
  );
};

function getQuestions(page, questions) {
  let start = (page - 1) * maxQuestionPerPage;
  let end =
    start + maxQuestionPerPage - 1 >= questions.length
      ? questions.length
      : start + maxQuestionPerPage;
  end--;
  let q = [];
  for (let i = start; i <= end; i++) {
    q.push(questions[i]);
  }
  return q;
}

export default Questions;
