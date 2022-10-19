import dotenv from 'dotenv'
import { developerStatus } from './index';

describe("Index tests", () => {

    it("Runs a simple, easy to break test", () => {
        expect(true).toBe(true);
    });

    it("Runs a series of test on a third party, imported library", () => {
        dotenv.config({ path: '.env.example' });
        expect(process.env.PROJECT_ENVIRONMENT).toBe('dev');
        expect(process.env.NON_EXISTENT_ENV_VAR).toBeUndefined();
    });

    it("Runs a series of tests on an imported function", () => {
        expect(developerStatus("Trevor")).toBe("Trevor is an awesome developer!");
        expect(developerStatus("A rock")).toBe("A rock is NOT an awesome developer!");
    });

});
