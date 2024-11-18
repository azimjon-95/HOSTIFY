import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes/Routes";
import AuthRoute from "./authentication/AuthRoute";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();  // Get current route

  // Check if the current path matches the routes where you want to hide Navbar and Footer
  const isAuthRoute = location.pathname.startsWith("/userAuth");

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
        {!isAuthRoute && <Navbar />}

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
        {!isAuthRoute && <Footer />}
      </div>
    </Suspense>
  );
}

export default App;
