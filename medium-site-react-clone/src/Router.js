import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginIn from "./pages/LoginIn";
import SignUp from "./pages/SignUp";
import SingleStory from "./pages/SingleStory";
import NewStory from "./pages/NewStory";
import Navigations from "./components/Navigations";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigations />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="story" element={<SingleStory />} />
          <Route path="newstory" element={<NewStory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
