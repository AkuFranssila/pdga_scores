import { useEffect, useState } from "react";
import {
  PDGALiveRoundResults,
  PDGALiveSingleRoundResultScore,
} from "../types/pdgaLiveRoundResults";
import { PDGALIVE_API_ROUND_SCORES_URL } from "../utils/constants";
import { apiGet } from "../utils/apiGet";
import { GroupScorecard } from "../components/GroupScorecard";

type TournamentGroupScoresPageProps = {
  tournamentId?: string;
  division: string;
  roundNumber: string;
};

export function TournamentGroupScoresPage(
  props: TournamentGroupScoresPageProps
) {
  const { tournamentId, division, roundNumber } = props;
  const [selectedGroupNumber, setSelectedGroupNumber] = useState<
    number | undefined
  >(undefined);
  const [roundResults, setRoundResults] = useState<PDGALiveRoundResults>();
  const [scoresUpdatedTime, setScoresUpdatedTime] = useState<Date | null>(null);

  useEffect(() => {
    const fetchTournamentInfo = async () => {
      const response = await apiGet<PDGALiveRoundResults>(
        `${PDGALIVE_API_ROUND_SCORES_URL}${tournamentId}&Division=${division}&Round=${roundNumber}`
      );
      setRoundResults(response);
      setScoresUpdatedTime(new Date());
    };

    // Call once immediately
    fetchTournamentInfo();

    // Then set up the interval
    const intervalId = setInterval(fetchTournamentInfo, 30000); // 30000 ms = 30 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [tournamentId, division, roundNumber]);

  //group players that have the same LayoutID and the same Pool and same TeeTime, sort them by lowest score
  const playersInSameGroup = roundResults?.data.scores
    .filter((score) => score.Round === Number(roundNumber))
    .sort((a, b) => a.GrandTotal - b.GrandTotal)
    .reduce((acc: PDGALiveSingleRoundResultScore[][], score) => {
      const group = acc.find(
        (group) =>
          group[0].LayoutID === score.LayoutID &&
          group[0].Pool === score.Pool &&
          group[0].TeeTime === score.TeeTime
      );
      if (group) {
        group.push(score);
      } else {
        acc.push([score]);
      }
      return acc;
    }, []);

  //Sort the groups by latest tee time first
  playersInSameGroup?.sort((a, b) => {
    const aTeeTime = a[0].TeeTime;
    const bTeeTime = b[0].TeeTime;
    return aTeeTime < bTeeTime ? 1 : -1;
  });

  return (
    <>
      {playersInSameGroup &&
        playersInSameGroup.map((group, index) => (
          <GroupScorecard
            key={index}
            cardNumber={index + 1}
            groupPlayerScores={group}
            holeDetails={roundResults?.data.layouts || []}
            eventId={tournamentId || ""}
          />
        ))}
    </>
  );
}
