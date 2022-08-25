import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:name" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
