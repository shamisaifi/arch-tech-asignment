import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todos from "./components/todos";
import Users from "./components/users";
import Navbar from "./components/navbar";
import Photo from "./components/photo";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/users" element={<Users />} />
        <Route path="/photos" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
