import {Theme, UseElement} from "@springtype/springtype-incubator-core";
import {MWCButton, MWCCheckbox, MWCInputField} from "../../../material-ui";

@UseElement(MWCCheckbox, MWCButton, MWCInputField)
@Theme({
    backgroundColor: 'red'
})
export class MaterialExampleApp {

    constructor() {

    }
}