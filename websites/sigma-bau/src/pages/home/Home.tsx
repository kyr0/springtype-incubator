import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {Router} from "../../../../../src/package/html/src/router/Router";

interface HomeProps {

}

@WebComponent({
    tag: 'sigma-bau-home'
})
export class Home extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps,
        protected router: Router,
    ) {
        super();
    }

    render() {
        return (
            <div>
                <m-navigation props={
                    {
                        menu: [
                            {displayName: 'home', routeFunction: () => this.router.navigate(Home, {})}]
                    }
                }/>
                <div class="container">
                    my content is here
                </div>
                <m-footer props={
                    {name: 'Sigma-bau'}
                }/>
            </div>)
    }
}