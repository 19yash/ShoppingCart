import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import{Store} from "./Redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

// import AppcontextProvider from "./Context/Appcontext";
{/* <BrowserRouter>
  <AppcontextProvider>
    <App />
  </AppcontextProvider>
</BrowserRouter> */}

root.render(

  <BrowserRouter>
    <Provider store={Store}>
      <App />
      <Toaster></Toaster>
    </Provider>
  </BrowserRouter>
);
