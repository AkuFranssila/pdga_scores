//https://www.pdga.com/apps/tournament/live-api/live_results_fetch_updated_round_scores?TournID=78651&Division=FPO&Round=1

import { PlayerThrowStatus } from "./pdgaLiveRoundResults";

export type PDGALiveUpdatedRoundScores = {
    data: PDGALiveUpdatedRoundScore[];
    hash: string;
};

export type PDGALiveUpdatedRoundScore = {
    ResultID: number;
    RunningPlace: number;
    PreviousPlace: number | null;
    Tied: boolean;
    Completed: number; // 0 or 1 (boolean)
    ParThruRound: number;
    Played: number;
    RoundRating: number | null;
    RoundScore: number;
    RoundtoPar: number;
    Scores: string; // comma separated
    ToPar: number | null;
    UpdatedDate: string;
    PlayerThrowStatus: PlayerThrowStatus;
};