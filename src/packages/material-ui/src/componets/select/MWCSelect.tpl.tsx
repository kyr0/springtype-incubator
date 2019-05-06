import {VirtualElement, ActiveRenderer} from "@springtype/springtype-incubator-core";
import classNames from "classnames";
import {MWCSelect} from "./MWCSelect";
// css
import '@material/radio/dist/mdc.radio.min.css';
import {MWCSelectItem} from "./MWCSelectItem";

export default (view: MWCSelect) => {

    const classes = classNames({
        'mdc-select': true,
        'mdc-select--disabled': view.disabled,
    });

    const optionElements: VirtualElement[] = [];
    if (view.values) {
        for (let i = 0; i < view.values.length; i++) {
            const item: MWCSelectItem<any> = view.values[i];
            optionElements.push(<option data={item.data} value={item.value(item.data)}>
                {item.display(item.data)}
            </option>)
        }
    }

    const selectElement: VirtualElement =
        <select inject={{select: view}} class="mdc-select__native-control">
            {optionElements}
        </select>;

    if (view.disabled) {
        selectElement.attributes.disabled = true;
    }
    if (view.name) {
        selectElement.attributes.name = view.name;
    }

    return <div class={classes}>
        <i class="mdc-select__dropdown-icon"/>
        {selectElement}
        <label class="mdc-floating-label">{view.label}</label>
        <div class="mdc-line-ripple"/>
    </div>
}