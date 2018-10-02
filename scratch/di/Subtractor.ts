import {Component} from "../../src/di/index";
import {AbstractSubtractor} from "./AbstractSubtractor";

@Component
export class Subtractor extends AbstractSubtractor {

    signed: boolean = false;

    subtract(a: number, b: number): number {

        if (this.signed) {
            return 1 - (a - b);
        }
        return a - b;
    }

    setSigned(): Subtractor {
        this.signed = true;
        return this;
    }
}