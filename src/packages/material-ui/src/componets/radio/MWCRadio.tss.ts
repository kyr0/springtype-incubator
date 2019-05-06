import {HOST_SELECTOR,TypedStyleSheet} from "@springtype/springtype-incubator-core";
import {MWCRadio} from "./MWCRadio";

export default (view: MWCRadio): TypedStyleSheet => ({

    [HOST_SELECTOR]: {
        outline: 'none'
    }
});


