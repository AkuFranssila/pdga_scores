export type PDGALiveTournament = {
    TournId: number;
    Players: number;
    StartDate: string;
    EndDate: string;
    DateRange: string;
    EventDate: string;
    Name: string;
    SimpleName: string;
    Location: string;
    AdministrativeAreaISO: string;
    CountryISO: string;
    ShortLocation: string;
    Tier: string;
    HighestTier: string;
    RawTier: string;
    FormattedTier: string;
    FormattedLongTier: string;
};

export type PDGALiveLeague = {
    LeagueId: number;
    Players: number;
    StartDate: string;
    EndDate: string;
    DateRange: string;
    EventDate: string;
    Name: string;
    SimpleName: string;
    Location: string;
    AdministrativeAreaISO: string;
    CountryISO: string;
    ShortLocation: string;
    Tier: string;
    HighestTier: string;
    RawTier: string;
    FormattedTier: string;
    FormattedLongTier: string;
};

export type PDGALiveRecentEventsOptions = {
    Tournaments: PDGALiveTournament[];
    Leagues: PDGALiveLeague[];
};

export type PDGALiveRecentEvents = {
    data: PDGALiveRecentEventsOptions;
    hash: string;
};