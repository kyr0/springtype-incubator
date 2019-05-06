import {MWCInputField} from "./MWCInputField";
import classNames from "classnames";
import {VirtualElement, ActiveRenderer} from "@springtype/springtype-incubator-core";
//css
import "@material/textfield/dist/mdc.textfield.min.css"

const mdcIcon = (str: string) => {
    if (!str) {
        return ''
    }
    return <i class="material-icons mdc-text-field__icon">{str}</i>
};

const outlineLabel = (view: MWCInputField) => {
    return <div class={classNames({
        'mdc-notched-outline': true,
        'mdc-notched-outline--upgraded': true,
        'mdc-notched-outline--notched': view['is-focused'] || view.value
    })}>
        <div class="mdc-notched-outline__leading"/>
        <div class={classNames({
            'mdc-notched-outline__notch': true,
            'mdc-help--float-above': view['is-focused'] || view.value
        })}>
            <label class={classNames({
                'mdc-floating-label': true,
                'mdc-floating-label--float-above': view['is-focused'] || view.value
            })}>{view.label}</label>
        </div>
        <div class="mdc-notched-outline__trailing"/>
    </div>
};
const filledLabel = (view: MWCInputField) => {
    return <st-fragment>
        <div class="mdc-line-ripple"/>
        <label class={classNames({
            'mdc-floating-label': true,
            'mdc-floating-label--float-above': view['is-focused'] || view.value
        })}>{view.label}</label>
    </st-fragment>
};

export default (view: MWCInputField) => {

    const ariaLabel = view.label || view.icon;

    const classes = classNames({
        'mdc-text-field': true,
        'mdc-text-field--disabled': view.disabled,
        'mdc-text-field--outlined': view.variant === 'outlined',
        'mdc-ripple-upgraded': view.variant === 'filled',
        'mdc-text-field--with-leading-icon': view.icon && !view['trailing-icon'],
        'mdc-text-field--with-trailing-icon': view.icon && view['trailing-icon'],
        'mdc-text-field--focused': view['is-focused']
    });


    const inputElement: VirtualElement = <input inject={{input: view}} class="mdc-text-field__input" value={view.value}/>;
    if (view.disabled) {
        inputElement.attributes.disabled = true;
    }
    return <st-fragment>
        <div class={classes} aria-label={ariaLabel}>
            {view.variant === 'outlined' ? outlineLabel(view) : filledLabel(view)}
            {inputElement}
            {mdcIcon(view['icon'])}
        </div>
        <div class={classNames({
            'mdc-text-field-helper-line': true,
            'no-display': !view['helper-text']
        })}>
            <div class="mdc-text-field-helper-text mdc-text-field-helper-text--persistent">{view['helper-text']}</div>
        </div>
    </st-fragment>;
}

