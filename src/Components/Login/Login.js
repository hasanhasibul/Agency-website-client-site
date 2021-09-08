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

const Login = () => {
    const [service, setService, loginInfo, setLoginInfo] = useContext(userContext);
    const provider = new GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    const auth = getAuth();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSingIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // verify admin
                sessionStorage.clear();
                auth.currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                    // Send token to your backend via HTTPS
                    // ...
                    console.log(idToken);
                    sessionStorage.setItem('idToken', idToken)
                    setLoginInfo(user)
                    history.replace(from);
                }).catch(function (error) {
                    // Handle error
                    console.log(error);
                });

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

    // const varifyIdToken = () =>{

    // }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="p-4 p-6 d-flex justify-content-center ">
                    <div>
                        <h4 className="h4 p-4 text-center">Login With</h4>
                        <button onClick={handleGoogleSingIn} className="google-button"><img width="30px" src={gogoleIcon} alt="" srcset="" /> <span className="button-text">  Continue With Google </span> </button>
                        <br />
                        <span>Don't have an account <Link to="/" className="text-denger" > create an account</Link> </span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;