import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, 
  Route, Navigate, Link, useNavigate} from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formdata, setFormdata] = useState([]);

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("formdata")) !== null){
      setFormdata(JSON.parse(localStorage.getItem("formdata")));
    }
    
  }, [])

  const loginHandler = (e) => {
    e.preventDefault();
    
    const checkLogin = obj => (obj.email === email) && (obj.password === password);

    if(formdata.some(checkLogin)){
      navigate('/calculator')
    }
    else{
      alert('wrong credentials..!')
    }

  }

  return (
    <div className='login-form'>
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <div className="txt_field">
          <input required
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          value={email || ''}
          type="email" 
          className="form-control" 
          id="email" 
          aria-describedby="emailHelp"  />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="txt_field">
          <input required
           onChange={(e) => {
            setPassword(e.target.value)
          }} 
          value={password || ''}
          type="password" 
          className="form-control" 
          id="password" 
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value='Login' className=""></input>
        <div className="signup_link">
          Not a member? <Link to='/reg'><a href="">Sign Up</a></Link>
        </div>
      </form>
    </div>
  )
}
