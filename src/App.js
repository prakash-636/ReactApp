import Sidebar from "./components/Sidebar";
import { Rightbar } from "./components/Rightbar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sigin from "./components/Sigin";
import SignUp from "./components/SignUp";
import BasicDetails from "./components/profile/BasicDetails";
import Sliderpost from "./components/Sliderpost";
import DetailContainer from "./components/profile/DetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from "./components/pages/ListingPage";
import DetailPage from "./components/pages/DetailPage";
import FilterCards from "./components/pages/FilterCards";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<ListingPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/profile" element={<DetailContainer />} />
          <Route path="/Signin" element={<Sigin />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
