import React, {useState} from 'react';
import reg_pic from '../assets/images/undraw_online_ad_re_ol62.svg';
import {NavLink} from 'react-router-dom';
import './log-reg.css';
import axios from 'axios'
import Button from '../components/Button';
const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword:""
    })

    const handleChange = e => {
        console.log('e.target',e.target)
        const {name, value} = e.target
        setUser({
            ...user, 
            [name]: value
        })
    }
 
    const register = () => {
        console.log('user',user)
        const {email, password, confirmPassword} = user;
        if(email && password && confirmPassword){
            if(password === confirmPassword)
            {
                // alert('posted')
                axios.post("http://localhost:5000/register", {email: user.email, password: user.password}).then(res => console.log('post', res)).catch(err=>console.log('there is an err',err))
            }
            else {
                alert('password did not match')
            }
        }
        else
        alert('All the fields are required')
    }

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h1 className="form-title"> Register </h1>
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
                                <div className="form-group">
                                <label htmlFor="confirm-password">
                                <i className="zmdi zmdi-key material-icons-name"></i>
                                </label>
                                <input type="password" name="confirmPassword" value={user.value} id="confirm-password" autoComplete="off" placeholder="Retype password" onChange={handleChange}/>

                                </div>
                                <div className="form-group form-button" onClick={register}>
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="register"></input> */}
                                    <Button name="Register" />
                                </div>
                            </form>
                            
                        </div>
                        <div className="reg-img">
                                <figure>
                                    <img src={reg_pic} alt="registration pic" />
                                </figure>
                                <h5 className="text-center msg">Already Registered?<NavLink to="/login"> Login</NavLink> here.</h5>
                            </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Register;