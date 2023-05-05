import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './components/pages/MainPage';
import Contact from './components/pages/Nest/Contact'
import Skills from './components/pages/Shop/Skills';
import Introduce from "./components/pages/Guild/Introduce";
import Certificate from "./components/pages/Guild/Certificate";
import FrontEnd from "./components/pages/Shop/FrontEnd";
import BackEnd from "./components/pages/Shop/BackEnd";
import Etc from "./components/pages/Shop/Etc";
import Projects from "./components/pages/Library/Projects";
import ToContact from "./components/pages/Nest/ToContact";
import Profile from "./components/pages/Guild/Profile";
import Project from "./components/pages/Library/Project";


// import FullPage from "./pages/FullPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/ToContact" element={<ToContact />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Reception/introduce" element={<Introduce />} />
        <Route path="/Reception/Certificate" element={<Certificate />} />
        <Route path="/Skills/FrontEnd" element={<FrontEnd />} />
        <Route path="/Skills/BackEnd" element={<BackEnd />} />
        <Route path="/Skills/Etc" element={<Etc />} />
        <Route path="/Projects/Projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/MainPage" />} />
      </Routes>
    </>
  );
}

export default App;
