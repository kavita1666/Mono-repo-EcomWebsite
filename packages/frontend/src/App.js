import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginPage from "./components/login-page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Product listing</h1>}></Route>
          <Route path="/add" element={<h1>Product add</h1>}></Route>
          <Route path="/update" element={<h1>Product update</h1>}></Route>
          <Route path="/logout" element={<h1>Product logout</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
