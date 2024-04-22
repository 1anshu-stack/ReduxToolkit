import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Navbars from "./components/Navbars";
import Create from "./components/Create";
import { BrowserRoute, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRoute>
        <Navbars />
        <Routes>
          <Route path="/" element={<Create />} />
        </Routes>
      </BrowserRoute>
    </div>
  );
}

export default App;