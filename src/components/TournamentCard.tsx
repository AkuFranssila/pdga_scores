import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

type TournamentCardProps = {
  tournamentId: string;
  name: string;
  startDate: string;
  endDate: string;
  logoUrl: string;
  livestreamUrl: string;
};

export function TournamentCard(props: TournamentCardProps) {
  const { tournamentId, name, startDate, endDate, logoUrl, livestreamUrl } =
    props;

  const tournamentStartsInDays = Math.floor(
    (new Date(startDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  );

  const tournamentDates = `${startDate} - ${endDate}`;

  return (
    <Card sx={{ display: "flex", height: "260px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flexGrow: 1,
        }}
      >
        <CardHeader
          title={name}
          subheader={tournamentDates}
          titleTypographyProps={{
            variant: "h6",
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Tournament starts in {tournamentStartsInDays} days
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            paddingLeft: 1.5,
          }}
        >
          <Button size="small" href={`#/tournament/${tournamentId}`}>
            Scores
          </Button>
          <Button size="small" href={livestreamUrl} target="_blank">
            Livestream
          </Button>
          <Button
            size="small"
            href={`https://www.pdga.com/tour/event/${tournamentId}`}
            target="_blank"
          >
            PDGA
          </Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        height="140"
        image={logoUrl}
        alt={name}
        sx={{
          paddingTop: 1,
          width: 250,
          objectFit: "contain",
        }}
      />
    </Card>
  );
}
