import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Layout } from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    theme={{
      colorScheme: "dark",
      colors: {
        // override dark colors to change them for all components
        dark: [
          "#ffffff",
          "#acaebf",
          "#8c8fa3",
          "#666980",
          "#4d4f66",
          "#34354a",
          "#2b2c3d",
          "#0b0b10",
          "#0c0d21",
          "#01010a",
        ],
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Layout>
      <App />
    </Layout>
  </MantineProvider>
);
