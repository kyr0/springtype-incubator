import {Component} from "../../src/di/index";
import {UnresolvableBean} from "./UnresolvableBean";
import {MultiplierMock} from "./mock/MultiplierMock";

@Component({
    mockedBy: MultiplierMock
})
export class Multiplier {

    constructor(unresolvable: UnresolvableBean, mul?: Multiplier) {

        // even this is injected, no matter if UnresolvableBean is @Component annotated or not
        if (!unresolvable) {

            //console.log('Fine, unresolvable class name is injected as', unresolvable);

            //unresolvable.test();
        }

    }

    multiply(a: number, b: number) {

        return a * b;
    }
}