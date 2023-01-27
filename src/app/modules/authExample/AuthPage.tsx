import {Route, Routes} from 'react-router-dom'
import {Login} from './components/Login'

const AuthPage = () => (
    <Routes>
        <Route>
            <Route path='login' element={<Login/>}/>
            {/*<Route path='registration' element={<Registration />} />*/}
            {/*<Route path='forgot-password' element={<ForgotPassword />} />*/}
            <Route index element={<Login/>}/>
        </Route>
    </Routes>
)

export {AuthPage}