import {WebApp} from "../../../src/package/html/src/decorator/WebApp";
import {Home} from "./pages/home/Home";

@WebApp({
    routes: {
        '': Home
    }
})
export class SigmaBauApp {
}