import './App.css';
import MainLayout from './components/Layout/MainLayout';
import Otp from './components/Otp';
import { Routes, Route } from 'react-router-dom';
import Success from './components/Success';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route exact path="/" element={<Otp />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
