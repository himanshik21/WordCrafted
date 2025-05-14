import './App.css';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Routes, Route } from "react-router-dom";
import { Register } from './components/Register';

function App() {

  return (
    <Routes>
      {/* Use Routes to define routing */}
      <Route path="/" element={<Layout />} /> {/* Route for Layout */}
      <Route path="/login" element={<Login />} /> {/* Route for Login */}
      <Route path="/register" element={<Register />} /> {/* Route for Register */}
    </Routes>
  );
}

export default App
