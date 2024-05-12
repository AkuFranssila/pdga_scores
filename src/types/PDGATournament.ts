export type TournamentStatus = "Upcoming" | "Ongoing" | "Finished";

export type PDGATournament = {
  PdgaNumber: string;
  TournamentName: string;
  City: string;
  State: string;
  StateShort: string;
  Country: string;
  CountryShort: string;
  StartDate: string;
  EndDate: string;
  Timezone: string;
  LogoUrl: string;
  Tier: string;
  LivestreamUrl: string;
};
