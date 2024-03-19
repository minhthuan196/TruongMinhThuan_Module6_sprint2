import './App.css';
import {Home} from "./components/Home";
import {Route, Routes} from "react-router-dom";
import {ListBlog} from "./components/ListBlog";
import {DetailBlog} from "./components/DetailBlog";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/blog"} element={<ListBlog/>}/>
        <Route path={"/header"} element={<Header/>}/>
        <Route path={"/footer"} element={<Footer/>}/>
        <Route path={"/blog/detail/:id"} element={<DetailBlog/>}/>
      </Routes>
  );
}

export default App;
