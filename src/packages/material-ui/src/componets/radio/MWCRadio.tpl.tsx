import {VirtualElement, ActiveRenderer} from "@springtype/springtype-incubator-core";
import classNames from "classnames";
import {MWCRadio} from "./MWCRadio";
// css
import '@material/radio/dist/mdc.radio.min.css';

export default (view: MWCRadio) => {

    const classes = classNames({
        'mdc-radio': true,
        'mdc-radio--disabled': view.disabled,
    });

    const inputElement: VirtualElement = <input inject={{radio: view}} type="radio" class="mdc-radio__native-control"/>;
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
        <div class="mdc-radio__background">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
    </div>
}