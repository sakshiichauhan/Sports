import { Route } from "react-router-dom";
import Landing from "./page/Landing.jsx";

function App() {
  return (
    <>
      <Route path="/" element={<Landing />} />
    </>
  );
}

export default App;
