import './App.css';

import LandingPage from './pages/LandingPage/LandingPage.jsx';
import LoginPage from './pages/LoginPage/Login.jsx';
import MyCourses from './pages/StudentPage/MyCourses.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/my-courses" element={<MyCourses />} />
        </Routes>
    </BrowserRouter>
);

export default App;