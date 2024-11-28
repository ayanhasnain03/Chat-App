import { CssBaseline } from "@mui/material";

import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </Provider>
);
