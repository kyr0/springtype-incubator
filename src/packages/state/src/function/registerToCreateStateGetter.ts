import {createStateGetter} from "./createStateGetter";
import {ComponentReflector} from "@springtype/springtype-incubator-core";

export const registerToCreateStateGetter = (prototype: any, stateFieldName: string) => {
    ComponentReflector.addInitializer(prototype, (instance: any) => {
        createStateGetter(instance, stateFieldName);
    })
};