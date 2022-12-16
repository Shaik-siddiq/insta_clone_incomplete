
import { useState, useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import {doesUserIdExist} from "../services/UserExists"

const useUser = () =>{
    const [activeuser, setActiveUser]=useState({});
    const {user} = useContext(UserContext)
    console.log(user, "use user hook")

    useEffect(()=>{
    async function getUserobjbyuserId(){
       const [response] = await doesUserIdExist(user.uid)
       console.log(response, "response of user hook")
       setActiveUser(response)
    }
    if(user.uid){
        getUserobjbyuserId()
    }
    },[]);

    return {user: activeuser}
}
export default useUser;