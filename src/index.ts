/*
    Import utility functions, test input and types
*/
import {
    sortProposals,
    extractDurationFromProposal,
} from "./utils";
import { defineTimeByGivenHours } from './dates_util';
import { testInput } from "./data";
import {
    SpreadSessionsReturnType,
    ProposalsType
} from "./types";

/*
    Spread proposals across sessions function implementation
*/
export const spreadProposals = (currentTrack: number, proposalsParam: ProposalsType, previousSessionTracksParam: SpreadSessionsReturnType = {}): SpreadSessionsReturnType => {
    if (proposalsParam.length === 0) {
        return {};
    }
    const proposals = JSON.parse(JSON.stringify(proposalsParam));
    let currentLocalTrack = currentTrack;
    /*
        Merge with a previous track , if needed , and define
    */
    let sessionTracks: SpreadSessionsReturnType = {
        [`track${currentTrack}`]: []
    };
    const previousSessionTracks = JSON.parse(JSON.stringify(previousSessionTracksParam));
    if (Object.keys(previousSessionTracks).length > 0) {
        sessionTracks = Object.assign({}, previousSessionTracks, sessionTracks);
    }
    /*
        Constants and vars
    */
    let currentTime = defineTimeByGivenHours(9);
    const CONF_START_LUNCH_TIME = defineTimeByGivenHours(12);
    const CONF_END_TIME = defineTimeByGivenHours(17);
    /*
        Sort given array of proposals by the duration, ascending order
        Optional
    */
    const proposalsSorted = sortProposals(proposals);
    /*
        Loop over the proposals and implement the actual spreading
        We are looping from the back to start
        So will have no issues when we will be mutation proposalsSorted
    */
    for (let i = proposalsSorted.length - 1; i >= 0; i--) {
        const currentProposal = proposalsSorted[i];
        const proposalDuration = extractDurationFromProposal(currentProposal);
        if ((currentTime.isSame(CONF_END_TIME) || currentTime.isAfter(CONF_END_TIME)) && proposalsSorted.length > 0) {
            // track is filled up , so we need to switch to the new track if there is any proposals left
            // the day is over so we switch to the next day , recursion
            currentLocalTrack++;
            return spreadProposals(currentLocalTrack, proposalsSorted, sessionTracks);
        } else {
            if (currentTime.isSame(CONF_START_LUNCH_TIME)) {
                // handle the lunch time case
                sessionTracks[`track${currentTrack}`].push(`${CONF_START_LUNCH_TIME.format('LT')} Lunch`);
                currentTime.add(1, 'hour');
            }
            // add proposal to the track and inlarge the time
            sessionTracks[`track${currentTrack}`].push(`${currentTime.format('LT')} ${currentProposal}`);
            currentTime.add(proposalDuration, 'minutes');
            // if add a proposal we remove it from the list
            proposalsSorted.splice(i, 1);
        }
    }
    /*
        Return tracks
    */
    return sessionTracks;
};

/*
    Spread proposals function invocation
*/
spreadProposals(1, testInput);
