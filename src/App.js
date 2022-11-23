import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { HomePage, OneCharacter } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/post/:id" element={<OneCharacter />} /> */}
      </Routes>
    </div>
  );
}

export default App;
