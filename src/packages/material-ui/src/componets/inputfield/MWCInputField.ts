import {
    Attribute, AttributeType,
    Element,
    EventAttribute,
    Lifecycle,
    Style,
    Template,
    Partial
} from "@springtype/springtype-incubator-core";
import template from "./MWCInputfield.tpl";
import style from "./MWCInputfield.tss";

@Element('mwc-input')
@Template(template)
@Style(style)
export class MWCInputField extends HTMLElement implements Lifecycle {

    @Attribute(AttributeType.BOOLEAN)
    outlined = false;

    @Attribute(AttributeType.BOOLEAN)
    disabled = false;

    @Attribute
    'trailing-icon' = '';

    @Attribute
    'leading-icon' = '';

    @Attribute
    label = '';

    @EventAttribute
    onchange = (evt: Event) => {};
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'mwc-input': Partial<MWCInputField>;
        }
    }
}