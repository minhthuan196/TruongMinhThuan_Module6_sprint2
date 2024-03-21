import './App.css';
import {Home} from "./components/Home";
import {Route, Routes} from "react-router-dom";
import {ListBlog} from "./components/ListBlog";
import {DetailBlog} from "./components/DetailBlog";
import {Login} from "./components/Login";
import {Contact} from "./components/Contact";
import ("../src/css/style.css")
function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/blog"} element={<ListBlog/>}/>
        <Route path={"/blog/detail/:id"} element={<DetailBlog/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/contact"} element={<Contact/>}/>
      </Routes>
  );
}

export default App;
