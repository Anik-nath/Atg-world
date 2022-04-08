import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Authentication/Context/AuthProvider";
import Home from "./Components/Pages/Home/Home";
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
