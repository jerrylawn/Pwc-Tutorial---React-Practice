import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Studentform from "./pages/Studentform";
import Studentdata from "./pages/Studentdata";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recruitmentform from "./pages/Recruitmentform";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import Loginpage from "./pages/Loginpage";
import Singleblogpost from "./pages/Singleblogpost";

function App() {
  return (
    <div className="App">
      <h1>Hello pwc trainees </h1>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Gallery"} element={<Gallery />} />
          <Route path={"/Contactus"} element={<Contactus />} />
          <Route path={"/Studentdata"} element={<Studentdata />} />
          <Route path={"/Studentform"} element={<Studentform />} />
          <Route path={"/Aboutus"} element={<Aboutus />} />
          <Route path={"/Recruitmentform"} element={<Recruitmentform />} />
          <Route path={"/Posts"} element={<Posts />} />
          <Route path={"/Todos"} element={<Todos />} />
          <Route path={"/Users"} element={<Users />} />
          <Route path={"/Loginpage"} element={<Loginpage />} />
          <Route path={"/Singleblogpost"} element={<Singleblogpost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
