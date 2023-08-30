import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import News from "./pages/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";


function App() {
 
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
