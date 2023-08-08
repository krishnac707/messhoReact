import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {

    const [userData, setUserData] = useState({ name: "", email: "", password: "", role: 'Buyer' });
    const router = useNavigate();

    const formValue = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const selectRole = (event) => {
        setUserData({ ...userData, ["role"]: event.target.value })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            if (userData.role == "Buyer") {
                const userArray = JSON.parse(localStorage.getItem("Users")) || [];
                console.log(userArray, "24");
                const userObj = {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    role: userData.role,
                    cart: []
                }
                userArray.push(userObj);
                localStorage.setItem("Users", JSON.stringify(userArray));
                toast.success("Registration Successfull");
                router("/login");
            }
            else {
                const users = JSON.parse(localStorage.getItem("Users")) || [];
                users.push(userData);
                localStorage.setItem("Users", JSON.stringify(users));
                toast.success("Registration Successfull");
                router("/login");
            }
        }
        else {
            toast.error("please fill all data");
        }
    }

    return (
        <div className="loginDiv">
            <div className="loginForm">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" className="imageSize" alt="" />
                <div className="loginpage">
                    <p className="loginHeading"><b>Sign Up here</b></p>
                    <form onSubmit={formSubmit}>
                        <input type="text" className="inputCss" name="name" onChange={formValue} placeholder="Enter Name" />
                        <input type="email" className="inputCss" name="email" onChange={formValue} placeholder="Enter Email" />
                        <input type="password" className="inputCss" name="password" onChange={formValue} placeholder="Enter password" />
                        <select className='form-select-css' onChange={selectRole}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        <input type='submit' className="buttonCss buttonMargin" value="Sign Up" />
                    </form>
                    <p className="terms loginMargin">By continuing, I agree to the <span><b>Terms of Use</b></span> & <span><b>Privacy Policy</b></span></p><br />
                    <p className="terms loginMargin" style={{marginBottom:"6%"}}>Already created account <span className="linkClick" onClick={()=> router("/login")}><b>login here</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default Register