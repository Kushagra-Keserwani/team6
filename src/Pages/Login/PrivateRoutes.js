import {Outlet,Navigate} from 'react-router-dom'

const PrivateRoutes = (role) => {
    let auth = {'authRole':localStorage['role']}
    return(
        (auth.authRole=='Admin' || auth.authRole=='User') ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes