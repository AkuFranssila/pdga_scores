import { PDGALiveSingleRoundResultScore } from "../types/pdgaLiveRoundResults";

type PlayerScorecardProps = {
  playerScores: PDGALiveSingleRoundResultScore;
};

export function PlayerScorecard(props: PlayerScorecardProps) {
  const { playerScores } = props;

  return (
    <div>
      <h2>{playerScores.Name}</h2>
      <table>
        <thead>
          <tr>
            <th>Hole</th>
            <th>Par</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
