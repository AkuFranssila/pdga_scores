//https://www.pdga.com/apps/tournament/live-api/live_results_fetch_round?TournID=78584&Division=FPO&Round=1

import { PDGALiveTeammate } from "./pdgaCommonTypes";

export type PDGALiveRoundResults = {
    data: PDGALiveSingleRoundResults;
    hash: string;
};

export type PDGALiveSingleRoundResults = {
    pool: string;
    layouts: PDGALiveSingleRoundResultLayout[];
    division: string;
    live_round_id: number;
    id: number;
    shotgun_time: string;
    tee_times: boolean;
    holes: PDGALiveSingleRoundResultHole[]
    scores: PDGALiveSingleRoundResultScore[];
};

export type PDGALiveSingleRoundResultLayout = {
    LayoutID: number;
    CourseID: number;
    CourseName: string;
    TournID: number;
    Name: string;
    Holes: number;
    Par: number;
    Length: number;
    Units: string;
    Accuracy: string;
    H1: number;
    H2: number;
    H3: number;
    H4: number;
    H5: number;
    H6: number;
    H7: number;
    H8: number;
    H9: number;
    H10: number;
    H11: number;
    H12: number;
    H13: number;
    H14: number;
    H15: number;
    H16: number;
    H17: number;
    H18: number;
    H19: number;
    H20: number;
    H21: number;
    H22: number;
    H23: number;
    H24: number;
    H25: number;
    H26: number;
    H27: number;
    H28: number;
    H29: number;
    H30: number;
    H31: number;
    H32: number;
    H33: number;
    H34: number;
    H35: number;
    H36: number;
    SSARd1: number | null;
    SSARd2: number | null;
    SSARd3: number | null;
    SSARd4: number | null;
    SSARd5: number | null;
    SSARd6: number | null;
    SSARd7: number | null;
    SSARd8: number | null;
    SSARd9: number | null;
    SSARd10: number | null;
    SSASemis: number | null;
    SSAFinals: number | null;
    CombinedSSA: number | null;
    ProvisionalSSA: number | null;
    ChallengeFactor: number | null;
    UpdatedDate: string;
    Detail: PDGALiveSingleRoundResultHole[];
};

export type PDGALiveSingleRoundResultHole = {
    Hole: string,
    HoleOrdinal: number,
    Label: string,
    Par: number,
    Length: number,
    Units: string | null,
    Accuracy: string | null,
    Ordinal: number,
};


export type PDGALiveSingleRoundResultScore = {
    ResultID: number;
    RoundID: number;
    ScoreID: number;
    FirstName: string;
    LastName: string;
    Name: string;
    AvatarURL: string;
    City: string;
    Country: string;
    Nationality: string | null;
    StateProv: string;
    PDGANum: number;
    HasPDGANum: number;
    Rating: number;
    Division: string;
    Pool: string;
    Team: number;
    TeamName: string | null;
    Round: number;
    Authoritative: number;
    ScorecardUpdatedAt: string;
    WonPlayoff: string;
    Prize: string | null;
    PrevRounds: number;
    RoundStatus: string;
    Holes: number;
    LayoutID: number;
    GrandTotal: number;
    CardNum: number;
    TeeTime: string;
    TeeStart: string;
    HasGroupAssignment: number; // 0 or 1 (boolean)
    PlayedPreviousRound: number;
    HasRoundScore: number;
    UpdateDate: string;
    Played: number;
    Completed: number; // 0 or 1 (boolean)
    RoundStarted: number; // 0 or 1 (boolean)
    PrevRndTotal: number;
    RoundScore: number;
    SubTotal: number;
    RoundtoPar: number;
    ToPar: number | null;
    Scores: string; // , separated list of scores
    SortScores: string; // , separated list of scores
    Pars: string; // , separated list of pars
    Rounds: string; // , separated list of rounds
    SortRounds: number; // 0 or 1 (boolean)
    RoundRating: number | null;
    PreviousPlace: number | null;
    FullLocation: string;
    ShortName: string;
    ProfileURL: string;
    ParThruRound: number;
    RoundPool: string;
    Teammates: PDGALiveTeammate[];
    TeeTimeShort: string;
    PlayerThrowStatus: PlayerThrowStatus;
    RunningPlace: number;
    Tied: boolean;
    HoleScores: string[];
};

export type PlayerThrowStatus = {
    ThrowCount: number;
    ThrowOrdinal: number;
    ZoneID: number;
    Distance: number;
    DistanceToTarget: number | null;
    DropZoneID: number | null;
    DropDistanceToTarget: number | null;
    HoleOrdinal: number;
    HolePar: number;
    HoleLabel: string;
    HoleLength: number;
};
