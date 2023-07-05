import { spreadProposals } from './index';
import { ProposalsType } from "./types";
import {
    testInput,
    testInputSorted,
    testExpectedOutput,
} from './data';
import {
    extractDurationFromProposal,
    sortProposals,
} from './utils';

describe("Utility functions", () => {
    it("duration from the proposal extraction: mins", () => {
        const testDurationMinStr = 'Ruby Errors from Mismatched Gem Versions 45min';
        const testDurationMin = extractDurationFromProposal(testDurationMinStr);
        expect(testDurationMin).toBe(45);
    });
    it("duration from the proposal extraction: nickname", () => {
        const testDurationNickStr = 'Rails for Python Developers lightning';
        const testDurationNick = extractDurationFromProposal(testDurationNickStr);
        expect(testDurationNick).toBe(5);
    });
    it("proposals sorting by minutes , ascending", () => {
        const testSortedProposals = sortProposals(testInput);
        expect(testSortedProposals).toEqual(testInputSorted);
    });
});

describe("Spreading algo", () => {
    it("we should return empty object if there is no given proposals", () => {
        const testInput: ProposalsType = [];
        const confSessions = spreadProposals(1, testInput);
        expect(confSessions).toEqual({});
    });
    it("we should return correct sessions tracks: test case 1", () => {
        const confSessions = spreadProposals(1, testInput);
        expect(confSessions).toEqual(testExpectedOutput);
    });
    // it("all sessions should be fit into the tracks", () => {
    //     const confSessions = spreadProposals(1, testInput);
    //     let sessionsCountInTracks = 0;
    //     for (let track in confSessions) {
    //         sessionsCountInTracks =+ confSessions[track].length;
    //     }
    //     console.log('sessionsCountInTracks: ', sessionsCountInTracks);
    //     expect(sessionsCountInTracks).toBe(testInputSorted.length);
    // });
});