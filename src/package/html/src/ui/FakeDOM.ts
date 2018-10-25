import {ExecutionEnvironment} from "../../../common/ExecutionEnvironment";

if (ExecutionEnvironment.isNodeJs()) {

    const jsdom = import('jsdom');

    (<any>global).window = new jsdom.JSDOM().window;
    (<any>global).document = window.document;
    (<any>global).HTMLElement = (<any>global).window.HTMLElement;
}