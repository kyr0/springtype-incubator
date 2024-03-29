import {MWCButton} from "./MWCButton";
import classNames from "classnames";
import {VirtualElement} from "@springtype/springtype-incubator-core";
import {ActiveRenderer} from "@springtype/springtype-incubator-core";

export default (view: MWCButton) => {

    const classes = classNames({
        'mdc-button': true,
        'mdc-button--raised': view.raised,
        'mdc-button--unelevated': view.unelevated,
        'mdc-button--outlined': view.outlined,
        'mdc-button--dense': view.dense
    });

    const ariaLabel = view.label || view.icon;
    const mdcButtonIcon = <span class="material-icons mdc-button__icon">{view.icon}</span>;

    const innerButtonElement =
        <st-fragment>
            {view.icon && !view["trailing-icon"] ? mdcButtonIcon : ''}
            <span class="mdc-button__label">
            {
                view.label
            }
            </span>
            {view.icon && view["trailing-icon"] ? mdcButtonIcon : ''}
            <st-slot />
        </st-fragment>;

    const button: VirtualElement = <button inject={{button: view}} class={classes} aria-label={ariaLabel}>{innerButtonElement}</button>;

    if (view.disabled) {
        //debugger;
        button.attributes.disabled = true;
    }
    return button;
}