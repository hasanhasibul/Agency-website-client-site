import React, { useContext } from 'react';
import './Login.css'
import Footer from '../Home/Footer/Footer';
import Navbar from '../SharedComponents/NavBar/Navbar';
import gogoleIcon from '../../Image_Icon/Icon/Group 573.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeApp, firebase } from 'firebase/app';
import firebaseConfig from './../PrivateRoute/Firebase.confiq';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userContext } from './../../App';
initializeApp(firebaseConfig);

const AdminLogin = () => {
    const [service, setService, loginInfo, setLoginInfo] = useContext(userContext);
    const provider = new GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    const auth = getAuth();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleAdminSingIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const email = user.email;
                // verify admin
                if(email){
                    console.log("enter if statement");
                    fetch('http://localhost:5000/checkAdmin',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({email})
                    })
                    .then(res => res.json())
                    .then(adminInfo =>{
                        console.log("find admin statement",adminInfo);
                        if(adminInfo){
                            auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                                // Send token to your backend via HTTPS
                                sessionStorage.setItem('idToken', idToken)
                                sessionStorage.setItem('admin', true)

                                history.replace(from);
                            }).catch(function (error) {
                                // Handle error
                                console.log(error);
    
                            });   
                        }
                        else{
                            history.push('/')
                        }
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                }
              
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                // ...
            });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="p-4 p-6 d-flex justify-content-center ">
                    <div>
                        <h4 className="h4 pb-4 mb-4 text-center">Login With Google</h4>
                        <button onClick={handleAdminSingIn} className="btn login-button"> Admin Login</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AdminLogin;