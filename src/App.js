import "./App.css";
import Badge from "./Components/HomeView/Badge";
import GridView from "./Components/HomeView/GridView";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLocation,
} from "react-router-dom";
import MyProfile from "./Components/Pages/MyProfile";
import Projects from "./Components/Pages/Projects";
import BackButton from "./Components/Helpers/BackButton";
function App() {
  const param = window.location.pathname;
  console.log(param);

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
          <Route
            path="/profile"
            element={
              <>
                <BackButton />
                <MyProfile />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <BackButton />
                <Projects />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
