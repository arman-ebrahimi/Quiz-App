import './App.sass';
import {Home} from "./Pages/home";
import {Result} from "./Pages/result";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
