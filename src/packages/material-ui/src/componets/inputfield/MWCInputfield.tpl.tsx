import {MWCInputField} from "./MWCInputField";
import classNames from "classnames";
import {VirtualElement, ActiveRenderer} from "@springtype/springtype-incubator-core";
//css
import "@material/textfield/dist/mdc.textfield.min.css"

export default (view: MWCInputField) => {

    const classes = classNames({
        'mdc-text-field': true,
        'mdc-text-field--disabled': view.disabled,
        'mdc-text-field--outlined': view.outlined,
        'mdc-text-field--with-leading-icon': view['leading-icon'],
        'mdc-text-field--with-trailing-icon': view['trailing-icon']
    });

    const ariaLabel = view.label || view['trailing-icon'] || view['leading-icon'];
    const mdcIcon = (str: string) => {
        if (!str) {
            return ''
        }
        return <span class="material-icons mdc-button__icon">{str}</span>
    };

    const inputElement: VirtualElement = <input inject={{input: view}} class="mdc-text-field__input"/>;
    if (view.disabled) {
        inputElement.attributes.disabled = true;
    }

    return <div class={classes} aria-label={ariaLabel}>
        {mdcIcon(view['leading-icon'])}
        {mdcIcon(view['trailing-icon'])}
        {inputElement}
        <div class="mdc-notched-outline mdc-notched-outline--upgraded">
            <div class="mdc-notched-outline__leading"/>
            <div class="mdc-notched-outline__notch">
                <label class="mdc-floating-label">{view.label}</label>
            </div>
            <div class="mdc-notched-outline__trailing"/>
        </div>
    </div>;
}