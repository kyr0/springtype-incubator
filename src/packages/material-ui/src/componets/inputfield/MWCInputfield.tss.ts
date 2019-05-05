import {HOST_SELECTOR} from "@springtype/springtype-incubator-core";
import {MWCInputField} from "./MWCInputField";
import {TypedStyleSheet} from "@springtype/springtype-incubator-core";

export default (view: MWCInputField): TypedStyleSheet => ({

    [HOST_SELECTOR]: {
        outline: 'none'
    }
});


