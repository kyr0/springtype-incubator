import {Simple} from "./Simple";
import {ApplicationContext} from "../../src/di/index";

let simple = ApplicationContext.getInstance().getBean(Simple);
let result = simple.calc(7, 7);


console.log('result', result); // 42