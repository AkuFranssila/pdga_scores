import { PDGALiveTeammate } from "./pdgaCommonTypes";

export type PDGALiveEventTopPlayers = {
    data: PDGALiveEventTopPlayersDivisions;
    hash: string;
};

export type PDGALiveEventTopPlayersDivisions = {
    DivisionStandings: PdgaLiveEventTopPlayersDivisionStanding[];
    HasInternationalPresence: boolean;
};

export type PdgaLiveEventTopPlayersDivisionStanding = {
    round: number;
    division: string;
    scores: PdgaLiveEventTopPlayersDivisionStandingScore[];
    players: number; //player count
    shotgun_time: string;
    tee_times: boolean;
    registered: number;
};

export type PdgaLiveEventTopPlayersDivisionStandingScore = {
    ResultID: number;
    FirstName: string;
    LastName: string;
    Name: string;
    ShortName: string;
    AvatarURL: string;
    FullLocation: string;
    Country: string;
    Nationality: string;
    Team: string | null;
    TeamName: string | null;
    Prize: string | null;
    TeeTime: string;
    TeeStart: string;
    Played: number;
    RoundtoPar: number;
    ToPar: number;
    ParThruROund: number;
    Tied: boolean;
    Rounds: string; // comma separated
    Teammates: PDGALiveTeammate[];
    Scores: string; // comma separated
    RunningPlace: number;
    Completed: number; // 0 or 1 (boolean)
    RoundScore: number;
};
