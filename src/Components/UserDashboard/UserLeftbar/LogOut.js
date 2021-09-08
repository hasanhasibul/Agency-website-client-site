import React, { useContext } from 'react';
import { userContext } from '../../../App';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';
const LogOut = () => {
    const [service,setService,loginInfo,setLoginInfo] = useContext(userContext);
    const idToken = sessionStorage.getItem('idToken')
    const decodedIdToken = jwt_decode(idToken);
    const email = decodedIdToken.email;

    const history = useHistory();
    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoginInfo({});
            sessionStorage.clear();
            history.push("/");

        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
              <div style={{ marginTop: '300px' }} className="logOut p-4">
                <h6 className="h6 p-4"> welcome: {email} </h6>
                <button onClick={handleLogOut} className="btn btn-primary" >Log Out</button>
            </div>
        </div>
    );
};

export default LogOut;