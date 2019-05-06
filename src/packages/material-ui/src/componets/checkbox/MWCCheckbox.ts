import {
    Attribute, AttributeType,
    Element,
    EventAttribute,
    Lifecycle,
    Style,
    Template,
    Partial
} from "@springtype/springtype-incubator-core";
import template from "./MWCCheckbox.tpl";
import style from "./MWCCheckbox.tss";
import {ComponentName} from "../ComponentName";

@Element(ComponentName.CHECKBOX)
@Template(template)
@Style(style)
export class MWCCheckbox extends HTMLElement implements Lifecycle {

    @Attribute(AttributeType.BOOLEAN)
    checked = false;

    @Attribute(AttributeType.BOOLEAN)
    indeterminate = false;

    @Attribute(AttributeType.BOOLEAN)
    disabled = false;

    @Attribute
    value = '';

    @Attribute
    name = '';

    @EventAttribute
    onchange = (evt: Event) => {};



}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            [ComponentName.CHECKBOX]: Partial<MWCCheckbox>;
        }
    }
}