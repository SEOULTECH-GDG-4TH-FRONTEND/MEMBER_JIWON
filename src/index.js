import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./GlobalStyle";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/login.jsx";
import Home from "./pages/home.jsx";
import Inbox from "./pages/inbox.jsx";
import "./assets/fonts/fonts.css";
import MyPage from "./pages/mypage.jsx";
import SignUp from "./pages/signup.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" index element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
