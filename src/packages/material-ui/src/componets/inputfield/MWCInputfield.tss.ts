import {HOST_SELECTOR} from "@springtype/springtype-incubator-core";
import {MWCInputField} from "./MWCInputField";
import {TypedStyleSheet} from "@springtype/springtype-incubator-core";

export default (view: MWCInputField): TypedStyleSheet => {
    return ({

        [HOST_SELECTOR]: {
            outline: 'none'
        },
        [
        '.mdc-text-field--outlined.mdc-text-field--with-leading-icon .mdc-notched-outline__notch:not(.mdc-help--float-above), ' +
        '.mdc-text-field--outlined.mdc-text-field--with-trailing-icon .mdc-notched-outline__notch:not(.mdc-help--float-above)']: {
            'width': '100%',
        },
        [
       '.mdc-text-field--outlined.mdc-text-field--with-leading-icon .mdc-notched-outline__notch>label:not(.mdc-floating-label--float-above),' +
        '.mdc-text-field--outlined.mdc-text-field--with-trailing-icon .mdc-notched-outline__notch>label:not(.mdc-floating-label--float-above)']: {
            'width': 'calc(100% - 40px)'
        },

        ['.mdc-ripple-upgraded label:not(.mdc-floating-label--float-above)']: {
            'width': 'calc(100% - 50px)'
        },
        ['.mdc-ripple-upgraded label.mdc-floating-label--float-above']: {
            'width': '100%'
        },
        ['.no-display']: {
            display: 'none'
        }
    });
};


