import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-service'
})
export class Service extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }
    init = () => {
    };

    render() {
        return (
            <div class="container">
                SERVICE
            </div>
        )
    }
}