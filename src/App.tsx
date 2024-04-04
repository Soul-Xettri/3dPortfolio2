import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={"Home"} />
            <Route path="about" element={"About"} />
            <Route path="projects" element={"Projects"} />
            <Route path="contact" element={"Contact"} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
