import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider.js'
import { LoginFormDataType } from '../types/AuthContext.js'
import LinkParts from '../components/parts/LinkParts.js'

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [form, setForm] = useState<LoginFormDataType>({email: '', password: ''});
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleLogin = async () => {
    const user = await auth.login({
      email: form.email,
      password: form.password
    });
    if (!user) {
      setLoginFailed(true);
    }
  }

  useEffect(() => {
    if (auth.user) {
      navigate('/mypage');
    }
  })

  return (
    (auth.user)
    ?
    <>Already Login.</>
    :
    <>
      <div className='login-page'>
        <h1 className='login-page_title'>Login Page</h1>
        {loginFailed && <p>Login Failed.</p>}
        <div className='login-page_form'>
          <input
            type="text"
            name="email"
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder='Password'
            value={form.password}
            onChange={handleChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
        <LinkParts className='hover-underline' to={'/'}>To Home Page</LinkParts>
      </div>
    </>
  )
}

export default Login