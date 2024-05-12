export type PDGALiveEventQueryResult = {
    TournID: number;
    StartDate: string;
    EndDate: string;
    Tier: string;
    AdministrativeAreaISO: string;
    CountryISO: string;
    Name: string;
    Haystack: string;
    SimpleName: string;
    HighestTier: string;
    ShortLocation: string;
    Location: string;
    RawTier: string;
    FormattedTier: string;
    FormattedLongTier: string;
    DateRange: string;
};

export type PDGALiveEventQuery = {
    data: PDGALiveEventQueryResult[];
    hash: string;
};