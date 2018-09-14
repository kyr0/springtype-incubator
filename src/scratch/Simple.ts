import {Component, Autowired, Inject} from "../package/di";
import {Multiplier} from "./Multiplier";
import {Subtractor} from "./Subtractor";

@Component()
class Simple {



    constructor(
        protected multiplier?: Multiplier
    ) {
    }

    @Autowired
    calc(a: number, b: number, @Inject() subtractor?: Subtractor): number {

        if (subtractor && this.multiplier) {
            return subtractor.subtract(
                this.multiplier.multiply(a, b), a
            );
        }
        return NaN;
    }
}


const result = new Simple().calc(7, 7);
console.log('result', result); // 42