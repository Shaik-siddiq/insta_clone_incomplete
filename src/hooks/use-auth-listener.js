import { useState, useEffect } from "react";
import FirebaseContext from "../context/FirebaseContext"
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../lib/Firebase"
const UseAuthListner = ()=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const {firebaseApp} = FirebaseContext;

    useEffect(()=>{
        document.title= "Instagram clone"
        const listener = onAuthStateChanged(auth, (authUser)=>{
            if(authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else{
                localStorage.removeItem('authUser');
                setUser(null)
            }
        })
        return () => listener();
    },[firebaseApp])
    return { user };
}

export default UseAuthListner;