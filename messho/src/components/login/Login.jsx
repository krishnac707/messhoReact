import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast';
import { AuthContext } from './../../context/Auth.context';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [userdata, setuserdata] = useState({ email: "", password: "" });
    const { state, login } = useContext(AuthContext);
    console.log(state);
    const router = useNavigate();


    const formValue = (event) => {
        setuserdata({ ...userdata, [event.target.name]: event.target.value });
    }

    const formSubmit = (event) => {
        event.preventDefault();
        if (userdata.email && userdata.password) {
            const users = JSON.parse(localStorage.getItem("Users"));
            var flag = false
            for (var i = 0; i < users?.length; i++) {
                if (users[i].email == userdata.email && users[i].password == userdata.password) {
                    flag = true
                    login(users[i]);
                    toast.success("login successfull");
                    router('/');
                    setuserdata({ email: "", password: "" })
                    break;
                }
            }

            if (flag == false) {
                toast.error("Your email or password is incorrect");
            }
        }
        else {
            toast.error("Please fill all details");
        }
    }

    return (
        <div className="loginDiv">
            <div className="loginForm">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" className="imageSize" alt="" />
                <div className="loginpage">
                    <p className="loginHeading"><b>Login here</b></p>
                    <form onSubmit={formSubmit}>
                        <input type="email" className="inputCss" name="email" onChange={formValue} placeholder="Enter Email" />
                        <input type="password" className="inputCss" name="password" onChange={formValue} placeholder="Enter password" />
                        <input type='submit' className="buttonCss buttonMargin" value="Sign in" />
                    </form>
                    <p className="terms loginMargin">By continuing, I agree to the <span><b>Terms of Use</b></span> & <span><b>Privacy Policy</b></span></p><br />
                    <p className="terms loginMargin" style={{ marginBottom: "6%" }}>To created account <span className="linkClick" onClick={() => router("/register")}><b>Click here</b></span></p>
                </div>
            </div>
        </div>
    )
}

export default Login
