import { Routes, Route } from "react-router";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<NavbarComponent />} />
          <Route path="/about" element={"About"} />
          <Route path="/contact" element={"Contact"} />
          <Route path="/blog" element={"blog"} />
        </Routes>
      </div>
    </>
  );
}

export default App;
