export type PDGALiveRoundFullStats = {
    statId: number;
    statCount: number | null;
    statOpportunityCount: number | null;
    statValue: number | null;
} & PDGALiveRoundFullStatsType;

export type PDGALiveRoundFullStatsType =
    | { statId: 1; stat: 'fairway'; }
    | { statId: 2; stat: 'c1r'; }
    | { statId: 3; stat: 'c2r'; }
    | { statId: 4; stat: 'unknown1'; }
    | { statId: 5; stat: 'scramble'; }
    | { statId: 6; stat: 'unknown2'; }
    | { statId: 7; stat: 'c1xputting'; }
    | { statId: 8; stat: 'c2putting'; }
    | { statId: 9; stat: 'outofboundsCount'; }
    | { statId: 10; stat: 'unknown4'; }
    | { statId: 11; stat: 'unknown5'; }
    | { statId: 12; stat: 'unknown6'; }
    | { statId: 13; stat: 'unknown7'; }
    | { statId: 14; stat: 'unknown8'; }
    | { statId: 15; stat: 'unknown9'; }
    | { statId: 16; stat: 'totalPuttsLengthInFeet'; }
    | { statId: 17; stat: 'longPuttInFeet'; }
    | { statId: 18; stat: 'avgPuttLengthInFeet'; }
    | { statId: 19; stat: 'unknown13'; }

//Add new type to PDGALiveRoundFullStats based on the value of statId
//statId 1 is fairway
//statId 2 is c1r
//statId 3 is c2r
//statId 4 is unknown1
//statId 5 is scramble
//statId 6 is unknown2
//statId 7 is c1xputting
//statId 8 is c2putting
//statId 9 is outofboundsCount
//statId 10 is unknown4
//statId 11 is unknown5
//statId 12 is unknown6
//statId 13 is unknown7
//statId 14 is unknown8
//statId 15 is unknown9
//statId 16 is totalPuttsLengthInFeet
//statId 17 is longPuttInFeet
//statId 18 is avgPuttLengthInFeet
//statId 19 is unknown13

