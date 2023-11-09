import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "./store/store.ts";
import { Provider } from "react-redux";
import GlobalStyle from "./app/styledComponents/GlobalStyle.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyle />
    <Toaster />
      <App />
  </Provider>
);
