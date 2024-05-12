import { Route, Routes } from "react-router-dom";
import { TournamentScoresPages } from "./pages/TournamentScoresPage";
import { TournamentView } from "./pages/TournamentView";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<TournamentView />} />
      <Route
        path="/tournament/:tournamentId"
        element={<TournamentScoresPages />}
      />
      {/* <Route exact path="*" element={<Page404 />}></Route> */}
    </Routes>
  );
}
