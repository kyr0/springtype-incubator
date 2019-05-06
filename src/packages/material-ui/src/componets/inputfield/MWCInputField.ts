import {
    Attribute, AttributeType,
    Element,
    EventAttribute,
    Lifecycle,
    Style,
    Template,
    Partial
} from '@springtype/springtype-incubator-core';
import template from './MWCInputfield.tpl';
import style from './MWCInputfield.tss';

@Element('mwc-input')
@Template(template)
@Style(style)
export class MWCInputField extends HTMLElement implements Lifecycle {

    @Attribute
    variant: 'outlined' | 'filled' = "outlined";

    @Attribute(AttributeType.BOOLEAN)
    disabled = false;

    @Attribute(AttributeType.BOOLEAN)
    'trailing-icon' = false;

    @Attribute
    'icon' = '';

    @Attribute
    label = '';

    @Attribute
    'helper-text' = '';

    @EventAttribute
    onchange = (evt: Event) => {
    };

    @Attribute
    'is-focused' = false;

    @Attribute
    value = '';

    constructor(protected inputEL: HTMLInputElement,
                protected labelEL: HTMLLabelElement
    ) {
        super();
    }

    onFlow(initial: boolean) {

        if (initial) {
            this.inputEL.addEventListener('focusin', () => {
                this['is-focused'] = true;
                above();
            });
            this.inputEL.addEventListener('focusout', () => {
                this['is-focused'] = false;
                above()
            });
            this.inputEL.addEventListener('change', () => {
                this.value = this.inputEL.value;
            });
        }
        const above = () => {
            if (this.variant == 'outlined' && (this['is-focused'] || this.value)) {
                const labelParent = this.getElementsByClassName('mdc-notched-outline__notch')[0];
                if (labelParent) {
                    setTimeout(() => {
                        labelParent.setAttribute('style', `width: ${this.labelEL.getBoundingClientRect().width + 8}px`);
                        console.error("label.getBoundingClientRect().width", this.labelEL.getBoundingClientRect().width)
                    }, 100)

                }
            }
        };

    }

}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'mwc-input': Partial<MWCInputField>;
        }
    }
}