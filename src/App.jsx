import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PublishStory from "./pages/PublishStory";
import Header from "./components/Header";
import Stories from "./pages/Stories";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";
import { useAuthStore } from "./store/useAuthStore";
import StoryDetail from "./pages/StoryDetail";

const App = () => {
  const { authUser, checkAuth, approvedStory, stories } = useAuthStore()
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const initAuth = async () => {
      try {
        await checkAuth();
        await approvedStory();
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [checkAuth]);

  // if (loading) return (<div>Loading......</div>)
  return (
    <div className="w-full bg-black">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/publish" element={authUser && authUser.role == "user" ? <PublishStory /> : <Navigate to="/login" />} />
          <Route path="/story-detail" element={<StoryDetail/>} />
          <Route path="/login" element={authUser ? authUser.role == "admin" ? <Navigate to="/admin" /> : <Navigate to="/publish" /> : <Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={authUser && authUser.role == "admin" ? <Admin /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
