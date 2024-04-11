import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider.js';
import { AuthContextType } from '../types/AuthContext.js';
import LinkParts from '../components/parts/LinkParts.js';

const Home = () => {
  const auth = useContext<AuthContextType>(AuthContext);

  const LoginOrLogoutLink = () => {
    if (auth.user) {
      return <LinkParts className='hover-underline' to={'/mypage'}>To MyPage</LinkParts>
    } else {
      return <LinkParts className='hover-underline' to={'/login'}>To Login</LinkParts>
    }
  }
  return (
    <div>
        <h1>Home Page</h1>
        {
          auth.user ?
          <p>ログイン済ユーザーです</p> : <p>ログインしてください</p>
        }
        <LoginOrLogoutLink/>
    </div>
  )
}

export default Home