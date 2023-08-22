import {Outlet,Navigate} from 'react-router-dom'

const PrivateRoutesAdmin = (role) => {
    let auth = {'authRole':localStorage['role']}
    return(
        (auth.authRole=='Admin') ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutesAdmin