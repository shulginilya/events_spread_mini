/*
    Import utility functions, test input and types
*/
import { sortProposals } from "./utils";
import { testInput } from "./data";
import {
    SpreadSessionsReturnType,
    ProposalsType
} from "./types";

/*
    Spread proposals across sessions function implementation
*/
export const spreadProposals = (proposals: ProposalsType): SpreadSessionsReturnType => {
    /*
        Sort given array of strings by the minutes, ascending order
    */
    const proposalsSorted = sortProposals(proposals);
    /*
        We are trying to fit the list of the proposals into 'track1'.
        If we didn't fit all of them into 'track1' we are trying to fit the ramining into 'track2 ... trackN'
        We loop over the sorted proposals backwards because we are gonna mutate array
    */
    for (let i = proposalsSorted.length - 1; i >= 0; i--) {
        const currentProposal = proposalsSorted[i];
        console.log(currentProposal);
    }
    /*
        After that implement spreading algo
    */
    return {};
};

/*
    Spread proposals function invocation
*/
spreadProposals(testInput);
