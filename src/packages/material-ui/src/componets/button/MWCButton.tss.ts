import {MWCButton} from "./MWCButton";
import {HOST_SELECTOR, TypedStyleSheet} from "@springtype/springtype-incubator-core";

export default (view: MWCButton): TypedStyleSheet => ({

    [HOST_SELECTOR]: {
        display: 'inline-flex',
        outline: 'none'
    },

    '.mdc-button': {
        flex: 1
    }

});


