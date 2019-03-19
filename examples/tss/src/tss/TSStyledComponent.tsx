import template from "./TSStyledComponent.tpl";
import style from "./TSStyledComponent.style";
import {
    Attribute,
    OnAttributeChange, ShadowDOM,
    Style, Template,
    Element,
    WebComponentLifecycle
} from "@springtype/springtype-incubator-core";

interface Props {
    styleMode: StyleMode;
}

export enum StyleMode {
    STANDARD, INVERTED
}

@Element('tsstyled-component')
@ShadowDOM
@Template(template)
@Style(style)
export class TSStyledComponent extends HTMLElement implements WebComponentLifecycle {

    @Attribute
    props: Props = {
        styleMode: Math.random() > 0.5 ? StyleMode.INVERTED : StyleMode.STANDARD
    };

    @OnAttributeChange("props")
    onPropsChanged() {
        console.log('programmatic interception');
    }

    @OnAttributeChange("props")
    onPropsChanged2() {
        console.log('programmatic interception 2');
    }
}