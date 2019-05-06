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

    onFlow(initial: boolean) {
        const inputField = this.getElementsByTagName('input')[0];
        const label = this.getElementsByTagName('label')[0];

        if (initial) {
            inputField.addEventListener('focusin', () => {
                this['is-focused'] = true;
                above();
            });
            inputField.addEventListener('focusout', () => {
                this['is-focused'] = false;
                above()
            });
            inputField.addEventListener('change', () => {
                this.value = inputField.value;
            });
        }
        const above = () => {
            if (this.variant == 'outlined' && (this['is-focused'] || this.value)) {
                const labelParent = this.getElementsByClassName('mdc-notched-outline__notch')[0];
                if (labelParent) {
                    setTimeout(() => {
                        labelParent.setAttribute('style', `width: ${label.getBoundingClientRect().width+ 8}px`);
                        console.error("label.getBoundingClientRect().width", label.getBoundingClientRect().width)
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