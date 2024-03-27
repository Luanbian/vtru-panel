export interface Iprovenance {
    country: string[];
    plusCode: string;
    blockchain: string[];
    exhibitions: {
        exhibitionName: string;
        exhibitionUrl: string;
    };
    awards: {
        awardName: string;
        awardUrl: string;
    };
}
