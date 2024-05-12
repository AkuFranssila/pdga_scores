import { PDGALiveTeammate, PdgaLiveUnits } from "./pdgaCommonTypes";

export type PdgaLivePlayerResultsLayoutDetailsInfo = {
    Label: string;
    Length: number;
    Par: number;
};

export type PdgaLivePlayerResultsLayoutDetails = {
    [key: string]: PdgaLivePlayerResultsLayoutDetailsInfo;
};

export type PdgaLivePlayerResultsLayout = {
    CourseName: string;
    ShortCourseName: string;
    Name: string;
    ShortName: string;
    Holes: number;
    Par: number;
    Length: number;
    Units: PdgaLiveUnits;
    Detail: PdgaLivePlayerResultsLayoutDetails;
};

export type PdgaLivePlayerResultsHoleScores = {
    [key: string]: number;
};

export type PdgaLivePlayerResultScore = {
    ScoreID: number;
    Round: number;
    RoundDate: string;
    RoundField: string;
    TeeTime: string;
    TeeStart: string;
    RoundScore: number;
    ScoreToPar: string;
    RoundtoPar: number;
    Birdies: number;
    BirdieHoles: number;
    Bogeys: number;
    BogeyHoles: number;
    HotRound: boolean;
    RoundComplete: boolean;
    RoundRating: number;
    HoleScores: PdgaLivePlayerResultsHoleScores;
};

export type PdgaLivePlayerResult = {
    TournID: number;
    ResultID: number;
    FirstName: string;
    LastName: string;
    PDGANum: number;
    Division: string;
    Pool: string;
    Place: number;
    PlaceRank: number;
    ToPar: number;
    Tied: boolean;
    Prize: string;
    DNF: boolean;
    Name: string;
    Avatar: string | null;
    ProfileURL: string;
    DivisionName: string;
    FormattedPlace: string;
    TierLetter: string;
    TierType: string;
    Class: string;
    Rating: number;
    RatingEffectiveDate: string;
    Location: string;
    Country: string;
    Nationality: string | null;
    AvatarURL: string;
    Scores: PdgaLivePlayerResultScore[];
    AverageRoundRating: number;
    RatingDiff: number;
    ToParString: string;
    Teammates: PDGALiveTeammate[];
};

export type PdgaLivePlayerResults = {
    data: PdgaLivePlayerResult;
    hash: string;
};