import { extractDurationFromProposal } from "./utils";
import { SpreadSessionsReturnType } from "./types";

/*
    We define a test input
*/
const testInput = [
    'Writing Fast Tests Against Enterprise Rails 60min',
    'Overdoing it in Python 45min',
    'Lua for the Masses 30min',
    'Ruby Errors from Mismatched Gem Versions 45min',
    'Common Ruby Errors 45min',
    'Rails for Python Developers lightning',
    'Communicating Over Distance 60min',
    'Accounting-Driven Development 45min',
    'Woah 30min',
    'Sit Down and Write 30min',
    'Pair Programming vs Noise 45min',
    'Rails Magic 60min',
    'Ruby on Rails: Why We Should Move On 60min',
    'Clojure Ate Scala (on my project) 45min',
    'Programming in the Boondocks of Seattle 30min',
    'Ruby vs. Clojure for Back-End Development 30min',
    'Ruby on Rails Legacy App Maintenance 60min',
    'A World Without HackerNews 30min',
    'User Interface CSS in Rails Apps 30min',
];

/*
    Spread proposals across sessions function implementation
*/
const spreadProposals = (proposals: string[]): SpreadSessionsReturnType => {
    /*
        Sort given array of strings by the minutes, ascending order
    */
    const proposalsSorted = proposals.sort((a, b) => {
        const numA = extractDurationFromProposal(a);
        const numB = extractDurationFromProposal(b);
        if (numA && numB) {
            return numA - numB;
        }
        return 0;
    });
    /*
        We are trying to fit the list of the proposals into 'track1'.
        If we didn't fit all of them into 'track1' we are trying to fit the ramining into 'track2 ... trackN'
        We loop over the sorted proposals backwards because we are gonna mutate array
    */
    for (let i = proposalsSorted.length - 1; i >=0; i--) {
        const currentProposal = proposalsSorted[i];
        console.log(currentProposal);
    }
    /*
        After that implement spreading algo
    */
    return {
        track1: []
    };
};

/*
    Spread proposals function invocation
*/
spreadProposals(testInput);
