import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const Home = () => {
  const auth = useContext(AuthContext);

  const LoginOrLogoutLink = () => {
    if (auth.user) {
      return <Link to={'/mypage'}>MyPage</Link>
    } else {
      return <Link to={'/login'}>Login</Link>
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