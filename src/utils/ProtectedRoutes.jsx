import {Outlet,Navigate} from 'react-router-dom'

const ProtectedRoutes = ()=>{
    const token = localStorage.getItem("token")
    let auth = token
    return (
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes