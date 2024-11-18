import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "../context/authSlice"; // Adjust path as necessary

function AuthRoute({ children }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Only update if there's a change in token presence
    if (isAuthenticated) {
      dispatch(setAuthenticated(true));
    } else {
      dispatch(setAuthenticated(false));
    }
  }, [isAuthenticated, dispatch]);

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default AuthRoute;
