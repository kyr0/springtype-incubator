import {WebApp} from "../../../src/package/html/src/decorator/WebApp";
import {Home} from "./pages/home/Home";
import "./components/navigation/Navigation";
import "./components/footer/Footer";

@WebApp({
    routes: {
        '': Home
    }
})
export class SigmaBauApp {
}