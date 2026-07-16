import './App.css';

import LandingPage from './pages/LandingPage/LandingPage.jsx';
import LoginPage from './pages/LoginPage/Login.jsx';
import MyCourses from './pages/StudentPage/MyCourses.jsx';
import BrowseCourses from './pages/StudentPage/BrowseCourses.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/browse-courses" element={<BrowseCourses />} />
        </Routes>
    </BrowserRouter>
);

export default App;