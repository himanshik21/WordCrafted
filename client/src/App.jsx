import './App.css';
import { Layout } from './components/Layout';
import { Login } from './components/Login';
import { Routes, Route } from "react-router-dom";
import { Register } from './components/Register';
import { Posts } from './pages/Posts';

function App() {

  return (
    <Routes>
      {/* Use Routes to define routing */}
      <Route element={<Layout />}> {/* Route for Layout */}
      <Route index path='/' element={<Posts />} />
      <Route path="/login" element={<Login />} /> {/* Route for Login */}
      <Route path="/register" element={<Register />} /> {/* Route for Register */}
      </Route>
    </Routes>
  );
}

export default App
