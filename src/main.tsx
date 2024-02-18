import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1001569910908-h0d91flus52h0hdb99539fr4nlanp193.apps.googleusercontent.com">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);
