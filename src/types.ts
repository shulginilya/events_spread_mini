/*
    Generic object type
*/
export interface GenericObject {
    [key: string]: string
};

/*
    Return type of our main spread proposals function
*/
export interface SpreadSessionsReturnType {
    [key: string]: string[]
};

/*
    Type of incoming proposals
*/
export type ProposalsType = string[];