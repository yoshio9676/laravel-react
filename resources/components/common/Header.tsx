import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider.js';
import { AuthContextType } from '../../types/AuthContext.js';
import { Link, useNavigate } from 'react-router-dom';
import CommonButton from '../parts/CommonButton.js';
import LinkParts from '../parts/LinkParts.js';
import "../../scss/common/HeaderFooter.scss";

const Header = () => {
    const auth = useContext<AuthContextType>(AuthContext);

    const HeaderLinks = () => {
        let path: string;
        let text: string;
        if (auth.user) {
            path = '/mypage';
            text = 'MyPage';
            const navigate = useNavigate();
            const handleLogout = () => {
                auth.logout();
                navigate('/login');
            }
            return (
                <div className='header-buttons'>
                    <CommonButton>
                        <LinkParts
                            to={path}
                        >{text}</LinkParts>
                    </CommonButton>
                    <CommonButton onClick={() => handleLogout()}>Logout</CommonButton>
                </div>
            )
        } else {
            path = '/login';
            text = 'Login';
            return (
                <CommonButton>
                    <LinkParts
                        to={path}
                    >{text}</LinkParts>
                </CommonButton>
            )
        }
    }

  return (
    <>
        <header>
            <h1>Clone</h1>
            <HeaderLinks/>
        </header>
    </>
  )
}

export default Header