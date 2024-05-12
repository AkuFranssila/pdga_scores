import "./index.css";
import reportWebVitals from "./reportWebVitals";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TournamentView } from "./pages/TournamentView";
import { TournamentScoresPages } from "./pages/TournamentScoresPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

const router = createBrowserRouter([
  {
    path: "/*",
    element: <TournamentView />,
  },
  {
    path: "/tournament/:tournamentId",
    element: <TournamentScoresPages />,
  },
]);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
