export type PDGALiveBreakdownScrambeOptions = 'fail' | 'success' | '';
export type PDGALiveBreakdownGreenOptions = 'c1' | 'c2' | 'parked' | '';
export type PDGALiveBreakdownDrivingOptions = 'c1' | 'c2' | 'ob' | 'hit' | 'short' | 'off' | '';

export type PDGALiveBreakdown = {
    driving: PDGALiveBreakdownDrivingOptions;
    scramble: PDGALiveBreakdownScrambeOptions;
    green: PDGALiveBreakdownGreenOptions;
    c1x: number;
    c1: number;
    c2: number;
    throwIn: number;
    ob: number;
    hazard: number;
    penalty: number;
};

export type PDGALiveHoleBreakdown = {
    holeOrdinal: number; //hole number
    holeBreakdown: PDGALiveBreakdown;
};