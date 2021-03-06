import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/HomePage/Home";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import NavBar from "./Pages/Shared/NavBar";


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='details/:id' element={<ProjectDetails />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>

    </div>
  );
}

export default App;
