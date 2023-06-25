import { ProposalsType } from './types';

/*
    Extract duration of the proposal from the proposal string
*/
export const extractDurationFromProposal = (str: string): number | null => {
    const matchRegex = /\b(?:\d+min|lightning)\b/;
    const matchResult = str.match(matchRegex);
    if (matchResult) {
        const matchStrSegment = matchResult[0];
        if (matchStrSegment === 'lightning') {
            return 5;
        }
        const strCut = matchStrSegment.slice(0, -3);
        return parseInt(strCut);
    }
    return  null;
};

/*
    Sort proposals by the minutes, ascending order
*/
export const sortProposals = (proposals: ProposalsType): ProposalsType => (
    proposals.sort((a, b) => {
        const numA = extractDurationFromProposal(a);
        const numB = extractDurationFromProposal(b);
        if (numA && numB) {
            return numA - numB;
        }
        return 0;
    })
);
