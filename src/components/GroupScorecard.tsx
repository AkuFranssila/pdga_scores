import { Box, Card, CardMedia, Grid } from "@mui/material";
import {
  PDGALiveSingleRoundResultLayout,
  PDGALiveSingleRoundResultScore,
} from "../types/pdgaLiveRoundResults";
import { PlayerScorecard } from "./PlayerScorecard";
import { BaseTable } from "./table/BaseTable";
import { generateHoleImageUrl } from "../utils/generateHoleImageUrl";

type GroupScorecardProps = {
  groupPlayerScores: PDGALiveSingleRoundResultScore[];
  holeDetails: PDGALiveSingleRoundResultLayout[];
  cardNumber: number;
  eventId: string;
};

export function GroupScorecard(props: GroupScorecardProps) {
  const { groupPlayerScores, holeDetails, eventId } = props;

  //Check which hole group has played and display the hole picture of the next hole

  // Find what is the layout id of the first player
  const layoutId = groupPlayerScores[0].LayoutID;

  // Find the layout with the layout id
  const layout = holeDetails.find((layout) => layout.LayoutID === layoutId);

  // Hole units
  const holeUnits = layout?.Units || "ft";

  const roundNumber = groupPlayerScores[0].Round;

  const headerTitle = `Round ${roundNumber} - Card ${props.cardNumber} - ${groupPlayerScores[0].TeeTime}`;

  const sortedGroupPlayerScores = groupPlayerScores.sort(
    (a, b) => a.RunningPlace - b.RunningPlace
  );

  const currentHole =
    sortedGroupPlayerScores[0].Played === 18
      ? sortedGroupPlayerScores[0].Played
      : sortedGroupPlayerScores[0].Played + 1;

  const holeImage = generateHoleImageUrl(
    eventId,
    layoutId.toString(),
    currentHole
  );

  return (
    <Card
      sx={{
        maxHeight: "400px",
      }}
    >
      <Grid container>
        <Grid item xs={10} paddingTop={5} paddingBottom={5}>
          {sortedGroupPlayerScores && sortedGroupPlayerScores.length > 0 && (
            <BaseTable
              data={sortedGroupPlayerScores}
              holeDetails={layout?.Detail || []}
              holeUnits={holeUnits}
              headerTitle={headerTitle}
            />
          )}
          {/* {groupPlayerScores.map((player) => (
          <PlayerScorecard key={player.PDGANum} playerScores={player} />
        ))} */}
        </Grid>
        <Grid item xs={2}>
          <CardMedia
            component="img"
            image={holeImage}
            alt={`Hole ${currentHole}`}
            sx={{
              paddingTop: 1,
              width: 250,
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
