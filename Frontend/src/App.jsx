import { BrowserRouter , Routes , Route } from 'react-router-dom';

///import AddingNewAdmin from './pages/AdminPage/AddingNewAdmin';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminLoginPage from './pages/LoginPages/AdminLoginPage';
import StudenLoginPage from './pages/LoginPages/StudentLoginPage';

import './App.css';

import LandingPage from './pages/LandingPage/LandingPage.jsx';
import LoginPage from './pages/LoginPage/Login.jsx';
import MyCourses from './pages/StudentPage/MyCourses.jsx';
import Dashboard from './pages/StudentPage/Dashboard.jsx';
import BrowseCourse from './pages/StudentPage/BrowseCourses.jsx';
import Profile from './pages/StudentPage/Profile.jsx';
import Setting from './pages/SettingPage/SettingPage.jsx';
import Enrollments from './pages/StudentPage/Enrollments.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/student/my-courses' element={<MyCourses/>}></Route>
            <Route path='/student/dashboard' element={<Dashboard/>}></Route>
            <Route path='/student/browse-courses' element={<BrowseCourse/>}></Route>
            <Route path='/student/profile' element={<Profile/>}></Route>
            <Route path='/student/setting' element={<Setting/>}></Route>
            <Route path='/student/enrollments' element={<Enrollments/>}></Route>
            
        </Routes>
    </BrowserRouter>
    
);

export default App;


    









/*






*/








