import React from 'react';
import {useState} from 'react'
import HeaderMenu from '../../images/header-menu-mobile.png'
import Logo from '../../images/logo.svg'
import './style.css'

const Header = () => {
    const [navBarShowed, setNavBarShowed] = useState(false);

    const showMenu = () => {
        var menu = document.querySelector('.header-container nav').style;
        var body = document.querySelector('.body-content').style;
        // console.log({body, menu});
        if(navBarShowed) {
            menu['visibility']= 'hidden';
            body['pointer-events'] = 'all';
            body['opacity'] = 1;
            setNavBarShowed(false);
        }
        else {
            menu['visibility']= 'visible';
            body['pointer-events'] = 'none';
            body['opacity'] = 0.5;
            setNavBarShowed(true);
        }
    }

    const handleMobileNavigate = () => {
        if(window.screen.width < 761) {
            console.log('call');
            showMenu();
        } 
    }
    return (
        <header>
            <div className='header-container'>
            
                    <div className='header-menu-mobile' onClick={showMenu}>
                        <img src={HeaderMenu} alt = 'menu'></img>
                    </div>
                    <div className='header-logo'>
                        <img src={Logo} alt='Logo'/>
                    </div>
           
               
           {<nav>
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <a className='nav-link' href='#' onClick={()=> handleMobileNavigate()}>Giới thiệu eSim</a>
                        </li>
                        <li className='nav-list-item'>
                            <a className='nav-link' href='#guide' onClick={()=> handleMobileNavigate()}>Hướng dẫn kích hoạt</a>
                        </li>
                        <li className='nav-list-item'>
                            <a className='nav-link' href='#questions' onClick={()=> handleMobileNavigate()}>Câu hỏi thường gặp</a>
                        </li>
                    </ul>
                </nav>}     
            </div>
        </header>
    );
}

export default Header;
