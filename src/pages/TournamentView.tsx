import { Container, Box, ButtonGroup, Button } from "@mui/material";
import { PDGATournaments2024 } from "../data/PDGATournaments";
import { TournamentList } from "../components/TournamentList";
import { useState } from "react";
import { TournamentStatus } from "../types/PDGATournament";

export const TournamentView = () => {
  const [selectedTournamentTypes, setSelectedTournamentTypes] = useState<
    TournamentStatus[]
  >(["Ongoing", "Upcoming", "Finished"]);

  const ongoingTournaments = PDGATournaments2024.filter((t) => {
    const startDate = new Date(t.StartDate);
    const endDate = new Date(t.EndDate);
    endDate.setDate(endDate.getDate() + 1);
    const now = new Date();
    return startDate <= now && now <= endDate;
  });

  const upcomingTournaments = PDGATournaments2024.filter((t) => {
    const startDate = new Date(t.StartDate);
    const now = new Date();
    return startDate > now;
  });

  const pastTournaments = PDGATournaments2024.filter((t) => {
    const endDate = new Date(t.EndDate);
    const now = new Date();
    return endDate < now;
  }).reverse();

  const handleTournamentTypeChange = (type: TournamentStatus) => {
    if (selectedTournamentTypes.includes(type)) {
      setSelectedTournamentTypes(
        selectedTournamentTypes.filter((t) => t !== type)
      );
    } else {
      setSelectedTournamentTypes([...selectedTournamentTypes, type]);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <ButtonGroup variant="outlined">
          <Button
            onClick={() => handleTournamentTypeChange("Ongoing")}
            color={
              selectedTournamentTypes.includes("Ongoing") ? "primary" : "error"
            }
          >
            Ongoing
          </Button>
          <Button
            onClick={() => handleTournamentTypeChange("Upcoming")}
            color={
              selectedTournamentTypes.includes("Upcoming") ? "primary" : "error"
            }
          >
            Upcoming
          </Button>
          <Button
            onClick={() => handleTournamentTypeChange("Finished")}
            color={
              selectedTournamentTypes.includes("Finished") ? "primary" : "error"
            }
          >
            Finished
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ my: 4 }}>
        {ongoingTournaments.length > 0 &&
          selectedTournamentTypes.includes("Ongoing") && (
            <TournamentList
              title="Ongoing tournaments"
              tournaments={ongoingTournaments}
            />
          )}
        {upcomingTournaments.length > 0 &&
          selectedTournamentTypes.includes("Upcoming") && (
            <TournamentList
              title="Upcoming tournaments"
              tournaments={upcomingTournaments}
            />
          )}
        {pastTournaments.length > 0 &&
          selectedTournamentTypes.includes("Finished") && (
            <TournamentList
              title="Finished tournaments"
              tournaments={pastTournaments}
            />
          )}
      </Box>
    </Container>
  );
};
