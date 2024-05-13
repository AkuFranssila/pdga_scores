import { Box, Divider, Grid, Typography } from "@mui/material";
import { TournamentCard } from "./TournamentCard";
import { PDGATournament } from "../types/PDGATournament";

type TournamentListProps = {
  title: string;
  tournaments: PDGATournament[];
};

export function TournamentList(props: TournamentListProps) {
  const { title, tournaments } = props;

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 3,
        }}
      >
        <Grid
          item
          sx={{
            paddingBottom: 2,
          }}
        >
          <Typography variant="h5">{title}</Typography>
        </Grid>
        <Grid item xs={12} flexDirection={"column"}>
          <Grid container spacing={2}>
            {tournaments.map((tournament) => (
              <Grid item key={tournament.PdgaNumber} xs={12} md={6} xl={6}>
                <TournamentCard
                  key={tournament.PdgaNumber}
                  tournamentId={tournament.PdgaNumber}
                  name={tournament.TournamentName}
                  startDate={tournament.StartDate}
                  endDate={tournament.EndDate}
                  logoUrl={tournament.LogoUrl}
                  livestreamUrl={tournament.LivestreamUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
