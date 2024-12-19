import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Frame from "./components/Frame";
import Home from "./pages/Home";
import User from "./pages/User";
function App() {
  return (
    <>
      <BrowserRouter>
        <Frame>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Frame>
      </BrowserRouter>
    </>
  );
}

export default App;
