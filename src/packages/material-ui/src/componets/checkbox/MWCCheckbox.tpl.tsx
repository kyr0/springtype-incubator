import {MWCCheckbox} from "./MWCCheckbox";
import {VirtualElement, ActiveRenderer} from "@springtype/springtype-incubator-core";
import classNames from "classnames";

export default (view: MWCCheckbox) => {

    const classes = classNames({
        'mdc-checkbox': true,
        'mdc-checkbox--disabled': view.disabled,
    });

    const inputElement: VirtualElement = <input type="checkbox" class="mdc-checkbox__native-control" />;
    if (view.checked) {
        inputElement.attributes.checked = true;
    }
    if (view.disabled) {
        inputElement.attributes.disabled = true;
    }
    if (view.value) {
        inputElement.attributes.value = view.value;
    }
    if (view.name) {
        inputElement.attributes.name = view.name;
    }
    return <div class={classes}>
        {inputElement}

        <div class="mdc-checkbox__background">
            <svg class="mdc-checkbox__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
            <div class="mdc-checkbox__mixedmark"/>
        </div>
    </div>
}