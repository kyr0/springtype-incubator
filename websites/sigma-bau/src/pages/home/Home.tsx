import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-home'
})
export class Home extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    render() {
        return (
            <div>
                home
            </div>)
    }
}