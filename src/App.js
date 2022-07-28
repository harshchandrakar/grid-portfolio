import "./App.css";
import Badge from "./Components/HomeView/Badge";
import GridView from "./Components/HomeView/GridView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfile from "./Components/Pages/MyProfile";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Badge />
                <GridView />
              </>
            }
          />
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
