import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import Resources from "./pages/Resources/Resources";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Navigate to="/resources" replace={true}></Navigate>}
      />
      <Route exact path="/resources" element={<Resources />} />
      <Route exact path="/bookmarks" element={<Bookmarks />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
