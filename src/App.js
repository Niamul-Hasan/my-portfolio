import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import NavBar from "./Pages/Shared/NavBar";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>

    </div>
  );
}

export default App;
