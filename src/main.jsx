import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, Routes, BrowserRouter } from "react-router";
import Profile from "./components/Profile.jsx";
import Signup from "./components/Signup.jsx";
import { Provider } from "react-redux";
import store from "./store";
import Authenticate from "./components/Authenticate.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Authenticate>
              <App />
            </Authenticate>
          }
        />
        <Route
          path="/signup"
          element={
            <Authenticate>
              <Signup />
            </Authenticate>
          }
        />
        <Route
          path="/profile"
          element={
            <Authenticate>
              <Profile />
            </Authenticate>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
);
