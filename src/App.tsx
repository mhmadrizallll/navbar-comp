import { Routes, Route } from "react-router";
import NavbarComponent from "./component/NavbarComponent";
import HomePage from "./pages/guest/HomePage";
import { SearchProvider } from "./context/SearchContext";

function App() {
  // const [result, setResult] = React.useState("");
  return (
    <SearchProvider>
      <div className="overflow-x-hidden">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={"About"} />
          <Route path="/contact" element={"Contact"} />
          <Route path="/blog" element={"blog"} />
        </Routes>
      </div>
    </SearchProvider>
  );
}

export default App;
