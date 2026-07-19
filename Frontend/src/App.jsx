import { BrowserRouter , Routes , Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage/LandingPage';
import AdminLoginPage from './pages/LoginPages/AdminLoginPage';
import StudenLoginPage from './pages/LoginPages/StudentLoginPage';

import './App.css';



const App = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/Admin_Login_Page" element={<AdminLoginPage />} />
            <Route path="/Student_Login_page" element={<StudenLoginPage />} />
        </Routes>
    </BrowserRouter>
    
);

export default App;

/*

import LandingPage from './pages/LandingPage/LandingPage.jsx';
import LoginPage from './pages/LoginPage/Login.jsx';
import MyCourses from './pages/StudentPage/MyCourses.jsx';

<BrowserRouter>
        <Routes>
            <Route />
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/my-courses' element={<MyCourses/>}></Route>
        </Routes>
    </BrowserRouter>
*/
    


















