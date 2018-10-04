import {IValidator, VALIDATOR_DEFAULT} from "./Validator";
import {Validate as validateDecorator} from "./ValidateMethod";

export const Validation = (validator: IValidator = VALIDATOR_DEFAULT) =>
    <T extends { new(...args: any[]): {} }>(target: T) => {
        for (const propertyName of Object.keys(target.prototype)) {
            const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyName);
            if (descriptor && descriptor.value instanceof Function) {
                // decorate with validate
                validateDecorator(validator).apply(null, [target.prototype, propertyName, descriptor]);
                Object.defineProperty(target.prototype, propertyName, descriptor);
            }
        }
        return target
    };