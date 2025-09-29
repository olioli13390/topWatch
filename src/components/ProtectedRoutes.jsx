import { authenticated } from '../utils/auth'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
    return authenticated() ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoutes