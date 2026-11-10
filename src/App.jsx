import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Hero, About, Skills, Education, Projects, Contact, Footer } from "./components/Sections";
import Project from "./pages/Project";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 50);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

const Home = () => (
  <main><Hero /><About /><Skills /><Education /><Projects /><Contact /></main>
);

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
