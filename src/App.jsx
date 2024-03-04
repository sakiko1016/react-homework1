import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}