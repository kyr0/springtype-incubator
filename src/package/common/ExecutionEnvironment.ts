export class ExecutionEnvironment {

    static isNodeJs(): boolean {
        return !!(process && process.env && process.env.NODE_ENV);
    }
}