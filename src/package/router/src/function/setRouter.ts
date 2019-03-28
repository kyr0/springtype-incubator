import {ApplicationContext} from "@springtype/springtype-incubator-core";
import {RouterConfig} from "../interface/RouterConfig";
import {getRouterImplInstance} from "./getRouterImplInstance";
import {ROUTER} from "../constant/ROUTER";

export const setRouter = (appRouterConfig: RouterConfig): void => {
    ApplicationContext.getInstance().set(ROUTER, getRouterImplInstance(appRouterConfig));
};