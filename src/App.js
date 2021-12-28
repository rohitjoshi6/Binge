import './App.css';
import Landing from '../src/Pages/Landing/landing';
import MovieBooking from './Pages/MovieBooking/movieBooking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/shows/:id" element={<MovieBooking />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
