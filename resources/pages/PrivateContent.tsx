/**
 * 認証後ページ管理
 */
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider.js';
import LinkParts from '../components/parts/LinkParts.js';
import MyPage from './MyPage.js';

const PrivateContent = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user === false) {
      navigate('/login');
    }
  });

  const Content = () => {
    if (auth.user !== false || auth.user !== null) {
      // 認証済みの場合のルーティング群
      return (
        <>
          <Routes>
            <Route path='/mypage' element={<MyPage />}/>
          </Routes>
          <LinkParts className='hover-underline' to={'/'}>To Home</LinkParts>
        </>
      )
    } else {
      return <></>
    }
  }

  return (
    <Content />
  )
}

export default PrivateContent