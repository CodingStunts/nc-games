import StartUp from "./components/StartUp";
import Home from "./components/Home";
import AllReviews from "./components/AllReviews";
import Community from "./components/Community";
import SingleUser from "./components/User";
import ReviewPage from "./components/ReviewPage";
import ReviewsByCat from "./components/ReviewsByCat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("Log in");
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<StartUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/reviews/:review_id" element={<ReviewPage />} />
          <Route
            path="/reviews/categories/:category"
            element={<ReviewsByCat />}
          />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:username" element={<SingleUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
