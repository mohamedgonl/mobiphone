import React from 'react';
import {useState} from 'react'
import '../style.css'
import button from '../../../images/Path.svg'
var questions = [
{
    questions: '1. Tại 1 thời điểm khách hàng sử dụng được bao nhiêu số thuê bao trên eSIM?',
    answer: 'Chỉ sử dụng “bật” được 1 thuê bao. Tuy nhiên, KH có thể tích hợp nhiều số thuê bao khác nhau của các nhà mạng khác nhau trên 1 eSim.'
},
{
    questions: '2. Khách hàng có thể sử dụng đồng thời eSIM & sim vật lý được không?',
    answer: '2'
},
{
    questions: '3. Khách hàng đang sử dụng sim Dcom,có chuyển sang eSIM được không?',
    answer: '3'
},
{
    questions: '4. Khách hàng đang sử dụng 1 eSIM (được tích hợp 3 số thuê bao trên eSIM & 1 sim vật lý trên cùng 1 thiết bị. Vậy máy có hiển thị vạch sóng của cả 4 sim không?',
    answer: '4'
},
{
    questions: '5. Có thể quét 1 QR code cho 2 thiết bị được không?',
    answer: '5'
}]

const Questions = () => {
    const Question = (ques,ans) => {
        const [hiddenAns, setHiddenAns] = useState(true);
        const showAns = () => {
            hiddenAns == true? setHiddenAns(false): setHiddenAns(true)
        }
        return(
        <div className='question-container'>
            <div className='question-q'>
                <input onClick={showAns} type={'image'} src={button} style={{width: '16px', height: '9px', margin: 'auto 0'}}></input>
                <p onClick={showAns} >{ques}</p>
            </div>
        
            <div className='question-a' hidden = {hiddenAns}>
                <hr></hr>
                <h3>Trả lời</h3>
                <p>{ans}</p>
            </div>
        </div>
        )
    }
    return (
        <div className='body-question'>
                <h1>Câu hỏi thường gặp</h1>
                {questions.map(e => Question(e.questions,e.answer))}
                
        </div>
    );
}

export default Questions;
