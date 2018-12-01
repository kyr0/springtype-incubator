import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-reference'
})
export class Reference extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    init = () => {
    };

    render = () => {
        return (
            <div>
                referenz
            </div>)
    }
}