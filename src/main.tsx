import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import ThemeProvider from "./contexts/ThemeProvider.tsx";
import LazyLoading from "./components/share/LazyLoading.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<LazyLoading />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
