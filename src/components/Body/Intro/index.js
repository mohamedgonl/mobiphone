import '../style.css'
import IntroBackGround from '../../../images/background-body.png'
import IntroBackGroundmobile from '../../../images/background-body-mobile.png'


const Intro = () => {
    return (

        <div className='body-intro'>
            <img src={IntroBackGround} className='pc' alt='background'
                style={{width: '100%', backgroundSize: '100% auto'}}></img>
            <img src={IntroBackGroundmobile} className='mobile' alt='background'
                style={{width: '100%', backgroundSize: '100% auto'}}>       
            </img>
            <div className='body-intro-content'>
                <h1>eSIM (EMBEDDED SIM)</h1>
                <br></br>
                <p>
                    eSIM  là một loại SIM điện tử, thay thế các loại SIM nhựa thông thường hiện nay. eSIM có các chức năng có thể thay thế SIM thông thường nhưng với kích thước nhỏ hơn.<br></br>
                    <br></br>
                    <b>Các thiết bị hỗ trợ eSIM bao gồm:</b>
                    <br></br>
                </p>
                <ul>
                    <li>Apple iPhone XR, XS Max</li>
                    <li>Google Pixel 2,3,4,4a,5, XL</li>
                    <li>Huawei P40/P40 Pro</li>
                </ul>
            </div>
        </div>
    );
}

export default Intro;