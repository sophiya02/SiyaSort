import React, {useState} from 'react';
import log_pic from '../assets/images/undraw_login_re_4vu2.svg';
import Button from '../components/Button'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import './log-reg.css';
const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        console.log('e.target',e.target)
        const {name, value} = e.target
        setUser({
            ...user, 
            [name]: value
        })
    }

    const login = () => {
        console.log('user',user)
        const {email, password} = user;
        if(email && password){
            axios.post("http://localhost:5000/login", user).then(res => console.log('post', res)).catch(err=>console.log('there is an err',err))
        }
        else
        alert('All the fields are required')
    }

    return (
        <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title"> Login </h1>
                            <form className="register-form" id="register-form">
                                <div className="form-group">
                                <label htmlFor="email">
                                <i className="zmdi zmdi-account material-icons-name "></i>
                                </label>
                                <input type="text" name="email" value={user.value} id="email" autoComplete="off" placeholder="abc@example.com" onChange={handleChange}/>

                                </div>
                                <div className="form-group">
                                <label htmlFor="password">
                                <i className="zmdi zmdi-key material-icons-name"></i>
                                </label>
                                <input type="password" name="password" value={user.value} id="password" autoComplete="off" placeholder="password" onChange={handleChange}/>

                                </div>
                                
                                <div className="form-group form-button" onClick={login}>
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input> */}
                                    <Button name="Login"/>
                                </div>
                            </form>
                            
                    
                </div>
                <div className="reg-img">
                                <figure>
                                    <img src={log_pic} alt="log pic" />
                                </figure>
                                <h5 className="text-center msg">Don't have an account?<NavLink to="/register"> Register</NavLink> here.</h5>
                            </div>
            </div>

        </div>
    </section>
    );
}
export default Login;