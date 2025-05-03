import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { NonprofitProvider } from './contexts/NonprofitContext';

function HomePage() {
  return (
    <NonprofitProvider>
      
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </NonprofitProvider>
  );
}

export default HomePage;
