import { CssBaseline } from "@mui/material";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <CssBaseline />
    <div onContextMenu={(e) => e.preventDefault()}>
      <App />
    </div>
  </HelmetProvider>
);
