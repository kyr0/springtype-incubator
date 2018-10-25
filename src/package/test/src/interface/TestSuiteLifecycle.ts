export interface TestSuiteLifecycle {
    beforeEach?(): void;
    beforeEach?(): Promise<void>;
    afterEach?(): void;
    afterEach?(): Promise<void>;
}