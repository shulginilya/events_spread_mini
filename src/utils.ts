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