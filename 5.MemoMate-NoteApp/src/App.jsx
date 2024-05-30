import "./App.css";
import { Home, Archive, Bin, Important } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="/important" element={<Important />}/>
      <Route path="/bin" element={<Bin />}/>
    </Routes>
  );
}

export default App;
