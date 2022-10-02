import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import Event from "./pages/Event/Event";
function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateEvent />} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}

export default App;
