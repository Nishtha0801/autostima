import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Analytics from './Components/Analytics/Analytics';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dahsboard/Dashboard';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import Practice from './Components/Dahsboard/Practice';
import AboutPage from './Components/About/AboutPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/results" element={<Analytics />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/practice" element={<Practice />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
