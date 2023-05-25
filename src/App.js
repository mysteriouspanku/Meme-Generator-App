import { Route, Routes } from "react-router-dom";
 import "bootstrap/dist/css/bootstrap.min.css";
 import EditPage from "./Pages/Edit";
import Homepage from "./Pages/Home";
function App() {
  return (
    <div >
      <h1>MeMe Generator</h1>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/edit" element={<EditPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
