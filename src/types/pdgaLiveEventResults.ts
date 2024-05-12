import { PdgaLiveUnits } from "./pdgaCommonTypes";

export type PdgaLiveMultilineName = {
  pre: string;
  main: string;
  post: string;
};

export type PdgaLiveRound = {
  Number: number;
  Label: string;
  LabelAbbreviated: string;
  Date: string;
  DateAbbreviated: string;
  ShowDate: boolean;
};

export type PdgaLiveRoundList = {
  [key: string]: PdgaLiveRound;
};

export type PdgaLiveLayout = {
  LayoutID: number;
  CourseID: number | null;
  CourseName: string;
  Name: string;
  Holes: number;
  Par: number;
  Length: number | null;
  Units: PdgaLiveUnits;
  Accuracy: string | null;
  Details: string[];
};

export type PdgaLiveLayoutId = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
  11: number;
  12: number;
  Division: string;
  Pool: string;
};

export type PdgaLiveDivisionLayoutAssignments = {
  [key: string]: number;
};

export type PdgaLiveDivision = {
  DivisionID: number;
  Division: string;
  DivisionName: string;
  ShortName: string;
  AbbreviatedName: string;
  Players: number;
  LayoutAssignments: PdgaLiveDivisionLayoutAssignments;
  IsPro: boolean;
  LatestRound: string;
};

export type PDGALiveEventResult = {
  TournamentId: string;
  Name: string;
  NameHtml: string;
  SimpleName: string;
  MultiLineName: PdgaLiveMultilineName;
  MultiLineNameHtml: string;
  TotalPlayers: number;

  DateRange: string;
  StartDate: string;
  EndDate: string;

  Country: string;
  Location: string;
  LocationShort: string;

  LatestRound: string;
  HighestCompletedRound: number | null;
  FinalRound: number;
  Rounds: number;
  RoundsList: PdgaLiveRoundList;
  Semis: string;
  Finals: string;
  Layouts?: PdgaLiveLayout[];
  LayoutIds?: PdgaLiveLayoutId[];

  RawTier: string;
  Tier: string;
  FormattedTier: string;
  FormattedLongTier: string;
  TierPro: string;
  TierAm: string;
  TierX: boolean;
  TimeZone: string;

  TDName: string;
  TDPDGANum: number;
  International: boolean;
  FullStats: boolean;
  Divisions?: PdgaLiveDivision[];
};

export type PDGALiveEventResults = {
  data: PDGALiveEventResult | null;
  hash: string;
};
