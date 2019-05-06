import {HOST_SELECTOR,TypedStyleSheet} from "@springtype/springtype-incubator-core";
import {MWCSelect} from "./MWCSelect";

export default (view: MWCSelect): TypedStyleSheet => ({

    [HOST_SELECTOR]: {
        outline: 'none'
    }
});


