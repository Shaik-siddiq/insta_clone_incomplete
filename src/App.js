import {lazy, Suspense} from "react"
import {Routes, Route } from "react-router-dom"
//import './App.css';
import * as ROUTES from "./constants/routes"
import UseAuthListner from "./hooks/use-auth-listener"
import UserContext from "./context/UserContext"
//import Login from "./pages/Login"
const Login = lazy(() => import ("./pages/Login"))
const SignUp = lazy(() => import ("./pages/Signup"))
const Dashboard = lazy(() => import ("./pages/Dashboard"))
function App() {
  const {user} = UseAuthListner()
  return (
    <UserContext.Provider value={{user}}>
      <Suspense fallback={<p>Loading...</p>} />
       <Routes>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
       </Routes>
    </UserContext.Provider>
  );
}

export default App;
