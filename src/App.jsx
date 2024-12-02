import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes/Routes";
import AuthRoute from "./authentication/AuthRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();  // Get current route

  // Check if Navbar and Footer should be hidden
  const isNavbarFooterHidden =
    location.pathname.startsWith("/userAuth") || location.pathname.startsWith("/auth");


  return (
    <Suspense
      fallback={
        <div className="main_loader">
          <div id="loader"></div>
        </div>
      }
    >
      <div className="app">
        {/* Conditionally render Navbar and Footer */}
        {!isNavbarFooterHidden && <Navbar />}

        <Routes>
          {routes.map(({ path, element, protected: isProtected }, index) => (
            <Route
              key={index}
              path={path}
              element={isProtected ? <AuthRoute>{element}</AuthRoute> : element}
            />
          ))}
        </Routes>

        {/* Conditionally render Footer */}
        {!isNavbarFooterHidden && <Footer />}
      </div>
    </Suspense>
  );
}

export default App;
