import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { PDGATournaments2024 } from "../data/PDGATournaments";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { PDGALiveEventResults } from "../types/pdgaLiveEventResults";
import { useEffect, useState } from "react";
import { apiGet } from "../utils/apiGet";
import { PDGALIVE_API_EVENT_URL } from "../utils/constants";
import { CalendarToday } from "@mui/icons-material";
import { TournamentGroupScoresPage } from "./TournamentGroupScoresPage";

type ScoreTypes = "Scores" | "Group" | "Player";

export function TournamentScoresPages() {
  const [tournamentInfo, setTournamentInfo] =
    useState<PDGALiveEventResults | null>(null);
  const [scoresUpdatedTime, setScoresUpdatedTime] = useState<Date | null>(null);
  const [scoreType, setScoreType] = useState<ScoreTypes>("Group");
  const [division, setDivision] = useState<string>("MPO");
  const [roundNumber, setRoundNumber] = useState<string>("1");

  const { tournamentId } = useParams();

  useEffect(() => {
    const fetchTournamentInfo = async () => {
      const response = await apiGet<PDGALiveEventResults>(
        `${PDGALIVE_API_EVENT_URL}${tournamentId}`
      );
      setTournamentInfo(response);
      setScoresUpdatedTime(new Date());
    };

    fetchTournamentInfo();
  }, [tournamentId]);

  const tourLogo =
    tournamentInfo?.data?.RawTier === "ES"
      ? "https://www.dgpt.com/wp-content/uploads/2023/01/dgpt_logo_pdga.svg"
      : "https://cdn.discgolf.ultiworld.com/wp-content/uploads/2023/02/PDGA-Logo.png";

  console.log("found tournament id", tournamentId);

  const availableDivisions = tournamentInfo?.data?.Divisions?.map(
    (division) => division.Division
  );

  //Generate string array of round options based on value in "FinalRound" field
  const availableRounds = tournamentInfo?.data?.FinalRound
    ? Array.from({ length: tournamentInfo?.data?.FinalRound }, (_, i) =>
        (i + 1).toString()
      )
    : [];

  const handleDivisionChange = (event: React.SyntheticEvent, newValue: any) => {
    setDivision(newValue);
  };

  const handleScoreTypeChange = (
    event: React.SyntheticEvent,
    newValue: any
  ) => {
    setScoreType(newValue);
  };

  const handleRoundChange = (event: React.SyntheticEvent, newValue: any) => {
    setRoundNumber(newValue);
  };

  useEffect(() => {
    //change round number to HighestCompletedRound or 1
    if (tournamentInfo?.data?.HighestCompletedRound) {
      setRoundNumber(`${tournamentInfo?.data?.HighestCompletedRound}`);
    } else {
      setRoundNumber("1");
    }

    //change division to first division in list or MPO
    if (availableDivisions?.length) {
      setDivision(availableDivisions[0]);
    } else {
      setDivision("MPO");
    }
  }, []);

  const selectedScoreTypeComponent = () => {
    switch (scoreType) {
      case "Scores":
        return <Typography variant="h4">Scores</Typography>;
      case "Group":
        return (
          <TournamentGroupScoresPage
            tournamentId={tournamentId}
            division={division}
            roundNumber={roundNumber}
          />
        );
      case "Player":
        return <Typography variant="h4">Player</Typography>;
      default:
        return <Typography variant="h4">Scores</Typography>;
    }
  };

  return (
    <Container maxWidth={false}>
      <Header />
      <Box sx={{ my: 4 }}>
        {tournamentId && tournamentInfo ? (
          <Box>
            <Card variant="outlined">
              <Grid
                container
                sx={{
                  paddingTop: 2,
                }}
              >
                <Grid item xs={1}></Grid>
                <Grid
                  item
                  xs={10}
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Stack
                    alignItems="center"
                    direction="column"
                    gap={2}
                    textAlign={"center"}
                  >
                    <Typography variant="h4">
                      {tournamentInfo.data?.Name}
                    </Typography>
                    <Stack
                      alignItems="center"
                      direction="row"
                      gap={2}
                      textAlign={"center"}
                    >
                      <CalendarToday />
                      <Typography variant="body1">
                        {tournamentInfo.data?.DateRange}
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={1}>
                  <Box
                    sx={{
                      maxWidth: "140px",
                      maxHeight: "140px",
                      paddingTop: 2,
                    }}
                  >
                    <img src={tourLogo} alt="tournament logo" />
                  </Box>
                </Grid>
              </Grid>
              <CardContent>
                <Typography variant="body1"></Typography>
                <Typography variant="body1"></Typography>
              </CardContent>
            </Card>
            <Box
              sx={{
                paddingTop: 2,
              }}
            >
              <Box display={"flex"} flexDirection={"row"}>
                <Box display={"flex"} flexGrow={1}>
                  <Tabs
                    value={scoreType}
                    onChange={handleScoreTypeChange}
                    aria-label="score type tabs"
                    centered
                    sx={{
                      width: "100%",
                      flexGrow: 1,
                    }}
                  >
                    <Tab
                      label="Scores"
                      value={"Scores"}
                      disabled
                      sx={{
                        width: "100%",
                      }}
                    />
                    <Tab
                      label="Group"
                      value={"Group"}
                      sx={{
                        width: "100%",
                      }}
                    />
                    <Tab
                      label="Player"
                      value={"Player"}
                      disabled
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Tabs>
                </Box>
              </Box>
              <Divider
                orientation="horizontal"
                flexItem
                sx={{
                  paddingTop: 2,
                }}
              />
              <Box display={"flex"} flexDirection={"row"}>
                <Box display={"flex"} flexGrow={1}>
                  <Tabs
                    value={division}
                    onChange={handleDivisionChange}
                    aria-label="division tabs"
                  >
                    {availableDivisions?.map((division) => (
                      <Tab label={division} value={division} />
                    ))}
                  </Tabs>
                </Box>
                <Box display={"flex"} alignContent={"flex-end"}>
                  {/* <Typography
                    variant="body1"
                    sx={{
                      paddingTop: 2,
                    }}
                  >
                    Scores updated at: {scoresUpdatedTime?.toLocaleString()}
                  </Typography> */}
                  <Tabs
                    value={roundNumber}
                    onChange={handleRoundChange}
                    aria-label="round tabs"
                  >
                    {availableRounds?.map((round) => (
                      <Tab label={round} value={round} />
                    ))}
                  </Tabs>
                </Box>
              </Box>
            </Box>
            <Box>{selectedScoreTypeComponent()}</Box>
          </Box>
        ) : (
          <Typography variant="h4">Loading...</Typography>
        )}
      </Box>
    </Container>
  );
}
