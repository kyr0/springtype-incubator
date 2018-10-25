import {IComponent} from "../../di/src/decorator/Component";
import {WebApp} from "../../html/src/decorator/WebApp";

@WebApp({
    routes: []
})
export class DefaultTestWebApp {}

export class TestBed {

    testWebApp: IComponent<any> = DefaultTestWebApp;

    static configureTestFrontendModule(frontendModule: any): void {


    }
}