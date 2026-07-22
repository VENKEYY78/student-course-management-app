import { BrowserRouter , Routes , Route } from 'react-router-dom';

///import AddingNewAdmin from './pages/AdminPage/AddingNewAdmin';
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






*/








