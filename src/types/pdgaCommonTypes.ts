export type PdgaLiveUnits = 'Feet' | 'Meters' | null;

export type PdgaLiveTiers = 'M' | 'A' | 'B' | 'C';

export type PdgaLiveFormattedTiers = 'Major' | 'A-Tier' | 'B-Tier' | 'C-Tier';

export type PdgaLiveDivisions = 'MPO' | 'FPO' | 'MA1';

export type PdgaLiveDivisionName = 'Mixed Pro Open' | "Women's Pro Open";


export type PDGALiveTeammate = {
    ResultID: number;
    PDGANum: number;
    Name: string;
    FirstName: string;
    LastName: string;
    ShortName: string;
    Country: string;
    StateProv: string;
    City: string
    FullLocation: string;
    AvatarURL: string; //https://www.pdga.com/files/styles/large/public/pictures/picture-305056-1690146683.jpg
    ProfileURL: string; //pdga url
};