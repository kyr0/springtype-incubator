import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";

interface ReferenceProps {
}

@WebComponent({
    tag: 'sb-reference'
})
export class Reference extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: ReferenceProps
    ) {
        super();
    }

    init = () => {
    };

    mountChildren = () => {
        const elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {});
    };

    render() {

        return <div class="container">
            REFERENZEN
        </div>
    }
}