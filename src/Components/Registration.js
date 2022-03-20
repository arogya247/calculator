import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export const Registration = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [mobile, setMobile] = useState("")
  const [formdata, setFormdata] = useState([])

  useEffect(() => {
    if(email && password && confirm && mobile){
      localStorage.setItem('formdata', JSON.stringify(formdata))
    }
  }, [formdata])

  const registrationHandler = (e) => {
    e.preventDefault();

    const temp = {
      email: email,
      password: password,
      mobile: mobile
    }

    if(JSON.parse(localStorage.getItem("formdata")) !== null){
      setFormdata(JSON.parse(localStorage.getItem("formdata")))
    }   

    const checkEmail = obj => obj.email === email;
    const checkMobile = obj => obj.mobile === mobile;

    if(formdata.some(checkEmail)){
      alert('Email already exists!!');
    }
    else if(formdata.some(checkMobile)){
      alert('Mobile Number already exists!!');
    }
    else if(password !== confirm){
      alert('Passwords do not match!!')
    }
    else{
      setFormdata([...formdata, temp])
    }
  }

  return (
    <div className='login-form'>
      <h1>Register</h1>
      <form onSubmit={registrationHandler}>
        <div className="txt_field">
          <input required
          onChange={(e) => {
            setEmail(e.target.value)
          }} 
          value={email || ''}
          type="email" 
          className="form-control" 
          id="email" 
          aria-describedby="emailHelp" 
           />
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
        <div className="txt_field">
          <input required
           onChange={(e) => {
            setConfirm(e.target.value)
          }} 
          value={confirm || ''}
          type="password" 
          className="form-control" 
          id="confirm" 
          />
          <label htmlFor="confirm">Confirm Password</label>
        </div>
        <div className="txt_field">
          <input required
           onChange={(e) => {
            setMobile(e.target.value)
          }} 
          value={mobile || ''}
          type="text" 
          className="form-control" 
          id="mobile" 
          />
          <label htmlFor="mobile">Mobile</label>
        </div>
        <input type="submit" value='Sign Up' className=""></input>
        <div className="signup_link">
          Already a member? <Link to='/'><a href="">Sign In</a></Link>
        </div>
      </form>
    </div>
  )
}
