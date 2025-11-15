import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Designer from "./pages/Designer";
import Profile from "./pages/Profile";
import UploadHistory from "./pages/UploadHistory";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Help from "./pages/Help";
import Dashboard from "./pages/Dashboard";
import DesignDetails from "./pages/DesignDetails";
import Gallery from "./pages/Gallery";
import Onboarding from "./pages/Onboarding";
import AuthLogin from "./pages/AuthLogin";
import AuthRegister from "./pages/AuthRegister";
import Upload from "./pages/Upload";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <ErrorBoundary>
      {/* Navbar always visible */}
      <Navbar />

      {/* Routes */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthLogin />} />
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/help" element={<Help />} />
          <Route path="/onboarding" element={<Onboarding />} />

          {/* User Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />

          {/* Designer & Upload Pages */}
          <Route path="/designer" element={<Designer />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload-history" element={<UploadHistory />} />
          <Route path="/design/:id" element={<DesignDetails />} />

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Catch-all 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </ErrorBoundary>
  );
}
