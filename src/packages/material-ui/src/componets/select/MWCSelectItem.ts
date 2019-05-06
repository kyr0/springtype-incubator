import {VirtualElement} from "@springtype/springtype-incubator-core";

export interface MWCSelectItem<T> {
    data: T;
    value: (data: T) => string | number;
    display: (data: T) => string | number | HTMLElement | VirtualElement
}