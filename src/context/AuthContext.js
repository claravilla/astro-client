import React from "react";
import {useState} from "react";


const AuthContext = React.createContext();

function AuthContextWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const setToken =(token)=>{
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value={{isLoggedIn, setToken}}>
    {props.children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextWrapper};