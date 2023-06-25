import type { Config } from 'jest';

export default async (): Promise<Config> => {
    return {
        verbose: true,
        preset: "ts-jest/presets/js-with-ts-esm",
        testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
        testEnvironment: "node",
    };
};