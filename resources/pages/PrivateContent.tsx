/**
 * 認証後ページ管理
 */
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Sample from './Sample';
import MyPage from './MyPage';

const PrivateContent = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user === false || auth.user === null) {
      navigate('/login');
    }
  });

  const Content = () => {
    if (auth.user !== false || auth.user !== null) {
      // 認証済みの場合のルーティング群
      return (
        <Routes>
          <Route path='/mypage' element={<MyPage />}/>
          <Route path='/sample' element={<Sample />}/>
        </Routes>
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