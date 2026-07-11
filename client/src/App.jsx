import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compare from "./pages/Compare";
import CompareResult from "./pages/CompareResult";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/compare" element={<Compare />} />

<Route
  path="/compare/result"
  element={<CompareResult />}
/>
        <Route path="/" element={<Home />} />
        <Route
  path="/favorites"
  element={
    <ProtectedRoute>
      <Favorites />
    </ProtectedRoute>
  }
/>
<Route path="/profile" element={<Profile />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;