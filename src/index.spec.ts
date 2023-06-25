import { spreadProposals } from './index';
import { ProposalsType } from "./types";

describe("Spreading algo test coverage", () => {
    it("we should return empty object if there is no given proposals", () => {
        const testInput: ProposalsType = [];
        const confSessions = spreadProposals(testInput);
        expect(confSessions).toEqual({});
    });
});