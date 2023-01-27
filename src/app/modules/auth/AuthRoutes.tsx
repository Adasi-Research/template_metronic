import {Route, Routes} from 'react-router-dom'
import {Login} from './pages/Login'
import {AuthLayout} from './AuthLayout'

const AuthRoutes = () => (
    <Routes>
        <Route element={<AuthLayout/>}>
            <Route path='login' element={<Login/>}/>
            {/*<Route path='registration' element={<Registration />} />*/}
            {/*<Route path='forgot-password' element={<ForgotPassword />} />*/}
            <Route index element={<Login/>}/>
        </Route>
    </Routes>
)

export {AuthRoutes}
