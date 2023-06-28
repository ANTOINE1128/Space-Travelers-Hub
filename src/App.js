import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navmenu from './components/Navmenu';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navmenu />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
