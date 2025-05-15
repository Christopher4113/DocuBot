import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import './App.css'
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />}/>
      <Route path="/landing" element={<Landing />} />
      <Route path='/main' element={<Main />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App
