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
    // const proposalsSorted = proposals;
    /*
        Loop over the proposals and implement the actual spreading
        We are looping from the back to start
        So will have no issues when we will be mutation proposalsSorted
    */
    for (let i = proposalsSorted.length - 1; i >= 0; i--) {
        const currentProposal = proposalsSorted[i];
        const proposalDuration = extractDurationFromProposal(currentProposal) || 0;
        const isMorningSession = CONF_START_LUNCH_TIME.isAfter(currentTime);
        const isAfternoonSession = currentTime.isAfter(CONF_START_LUNCH_TIME) || currentTime.isSame(CONF_START_LUNCH_TIME);
        if ((currentTime.isSame(CONF_END_TIME) || currentTime.isAfter(CONF_END_TIME)) && proposalsSorted.length > 0) {
            // track is filled up , so we need to switch to the new track if there is any proposals left
            // the day is over so we switch to the next day , recursion
            currentLocalTrack++;
            return spreadProposals(currentLocalTrack, proposalsSorted, sessionTracks);
        } else {
            // const prevTime = currentTime.clone();
            if (currentTime.isSame(CONF_START_LUNCH_TIME)) {
                // handle the lunch time case
                sessionTracks[`track${currentTrack}`].push(`${CONF_START_LUNCH_TIME.format('LT')} Lunch`);
                currentTime.add(1, 'hour');
            }
            // we need to check if we fits into the schedule when it comes to the lunch time and networking session
            const prevTime = currentTime.clone();
            currentTime.add(proposalDuration, 'minutes');
            if ((isMorningSession && currentTime.isAfter(CONF_START_LUNCH_TIME)) || (isAfternoonSession && currentTime.isAfter(CONF_END_TIME))) {
                // if we don't fit , we need to try to find a suitable proposal to replace
                let diff = currentTime.diff(CONF_START_LUNCH_TIME, 'minutes');
                if (isAfternoonSession && currentTime.isAfter(CONF_END_TIME)) {
                    diff = currentTime.diff(CONF_END_TIME, 'minutes');
                }
                const candidateDuration = proposalDuration - diff;
                let candidateReplaceProposalIndex = -1;
                for (let j = i - 1; j >= 0; j--) {
                    const candidateProposal = proposalsSorted[j];
                    const candidateProposalDuration = extractDurationFromProposal(candidateProposal) || 0;
                    if (candidateProposalDuration === candidateDuration) {
                        candidateReplaceProposalIndex = j;
                        break;
                    }
                }
                // sessionTracks[`track${currentTrack}`].push(`${prevTime.format('LT')} ${currentProposal}`);
                if (candidateReplaceProposalIndex > -1) {
                    const rTime = prevTime.add(candidateDuration, 'minutes');
                    const candidateReplaceProposal = proposalsSorted[candidateReplaceProposalIndex];
                    sessionTracks[`track${currentTrack}`].push(`${rTime.format('LT')} ${candidateReplaceProposal}`);
                    proposalsSorted.splice(candidateReplaceProposalIndex, 1);
                }
                // proposalsSorted.splice(i, 1);
            } else {
                sessionTracks[`track${currentTrack}`].push(`${prevTime.format('LT')} ${currentProposal}`);
                proposalsSorted.splice(i, 1);
            }
        }
    }
    /*
        Return tracks
    */
    console.log(sessionTracks);
    return sessionTracks;
};

/*
    Spread proposals function invocation
*/
spreadProposals(1, testInput);
