import React,{useContext} from 'react'
import UserContext from '../../context/UserContext'
import Suggestion from './Suggestion'
import User from './User'
//import useUser from '../hooks/use-user'
const Sidebar = () => {
  //object destructuring in side  the obj destructing
  /*  const { user: { docId = '', fullName, username, userId, following } = {} } = useContext(
    useUser
  ); */
  const {user} = useContext(UserContext)
  console.log(user,"user of sidebar component")
  console.log(user.uid, "uid sidebar");
  return (
    <div>
      <User username={"sid"} fullname={"siddiq shaik"} />
      <Suggestion userId={user.uid} />
    </div>
  )
}

export default Sidebar;