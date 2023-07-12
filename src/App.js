import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
