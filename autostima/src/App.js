import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Signup/Signup';

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

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
