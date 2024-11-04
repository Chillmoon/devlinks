import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ProfileProvider } from "./contex/ProfileContex";
import { ViewportProvider } from "./contex/ViewportContext";
import CustomizeLinksPage from "./pages/CustomizeLinksPage";
import ProfileDetailsEditorPage from "./pages/ProfileDetailsEditorPage";
import NavBar from "./components/NavBar";
import PreviewPage from "./pages/PreviewPage";

const App = () => {
  return (
    <ProfileProvider>
      <ViewportProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/profile-details"
              element={<ProfileDetailsEditorPage />}
            />
            <Route path="/customize-links" element={<CustomizeLinksPage />} />
            <Route path="/preview" element={<PreviewPage />} />
            <Route
              path="*"
              element={<Navigate to="/profile-details" replace />}
            />
          </Routes>
        </Router>
      </ViewportProvider>
    </ProfileProvider>
  );
};

export default App;
