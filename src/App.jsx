import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
    </>
  );
}

export default App;
