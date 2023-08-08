import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateProfile = () => {

    const { login } = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const router = useNavigate();

    const handlingForm = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        if (!currentUser) {
            router('/login')
        }
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                setUserData(allUser[i])
            }
        }
    },[])

    const formValidation =() => {
        const currentUser = JSON.parse(localStorage.getItem("CurrentUser"))
        const allUser = JSON.parse(localStorage.getItem("Users"))
        for (var i = 0; i < allUser.length; i++) {
            if(allUser[i].email == currentUser.email && allUser[i].password == currentUser.password){
                allUser[i].name = userData.name;
                allUser[i].password = userData.password;
                currentUser.name= userData.name;
                currentUser.password = userData.password; 
            }
        }
        login(currentUser)
        localStorage.setItem("Users",JSON.stringify(allUser));
        localStorage.setItem("Currentuser",JSON.stringify(currentUser));
        setUserData({});
        toast.success("profile updated");
        router('/');
    }

    return (
        <div className="loginDiv">
            <div className="loginForm">
                <img src="https://images.meesho.com/images/marketing/1661417516766.webp" className="imageSize" alt="" />
                <div className="loginpage">
                    <p className="loginHeading"><b>Edit Profile</b></p>
                    <form onSubmit={formValidation}>
                        <input type="text" className="inputCss" value={userData.name} name="name" onChange={handlingForm} />
                        <input type="text" className="inputCss" value={userData.password} name="password" onChange={handlingForm} />
                        <input type='submit' className="buttonCss buttonMargin" value="Update Profile" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile