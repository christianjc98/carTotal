import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/dashboard/SharedLayout";
import Landing from "./pages/Landing";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
