import { Routes, Route } from "react-router";
// import NavbarComponent from "./component/member/NavbarComponent";
import HomePage from "./pages/guest/HomePage";
import { SearchProvider } from "./context/SearchContext";
import Login from "./pages/guest/Login";

function App() {
  // const [result, setResult] = React.useState("");
  return (
    <SearchProvider>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/login" element={<Login />} />
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
