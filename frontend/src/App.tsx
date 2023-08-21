import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "pages/Main";
import One from "pages/One";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/One" element={<One />} />
    </Routes>
  );
}

export default App;
