import React from 'react';
import '../style.css'
import './styletest.css'
const guides = [{i: 1, content: 'Trong mục cài đặt (Settings), Chọn kết nối (Connection)'},
{
    i: 2, content: 'Chọn quản lý Sim (Sim card manager) và chọn thêm gói di động (Add mobile plan)'
},
{
    i: 3, content: 'Chọn Thêm gói cước di động (Add mobile plan)'
},
{
    i: 4, content:'Chọn mục Thêm bằng mã QR (Add using QR code)'
},
{
    i: 5, content:'Đưa camera hướng vào mã QR sao cho mã QR nằm trong đường hướng dẫn để quét'
},
{
    i: 6, content:'Khi gói di động được quét ra, chạm vào Thêm (Add) để đăng ký'
},
{
    i:7, content: 'Chạm vào OK để bật gói di động'
},
{
    i:8, content: 'Kết quả: eSIM sau khi được kích hoạt sẽ xuất hiện trong mục eSIM như hình'
}]

const Step = (i, content) => {
    return (
        <div className='guide-steps-step'>
            <div className='step-order' choosed >{i}</div>
            <div className='step-content'>{content}</div>
        </div>
    )
}

const SlideShow = () => {


    return( 
        <></>
    ) 
    }
    


const Guide = () => {
    return (
        <div className='body-guide'>
           <div className='body-guide-container'>
                <div className='guide-title'>
                    <h1>Hướng dẫn kích hoạt eSIM</h1>
                    <ul>
                        <li>IOS</li>
                        <li choosed = {true} >ANDROID</li>
                    </ul>
                </div>
                <div className='guide-steps'>
                    <div className='guide-steps-text'>
                        <h2>Đối với Android</h2>
                        <p>Lưu ý: Bật kết nối Internet trước khi thao tác</p>
                        {guides.map(e => Step(e.i,e.content))}
                    </div>
                    <div className='guide-steps-img'>
                            <SlideShow></SlideShow>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Guide;
