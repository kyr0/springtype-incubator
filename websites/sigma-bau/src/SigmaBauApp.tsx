import {WebApp} from "../../../src/package/html/src/decorator/WebApp";
import {Home} from "./pages/home/Home";
import "./components/navigation/Navigation";
import "./components/footer/Footer";
import {Service} from "./pages/service/Service";
import {About} from "./pages/about/About";
import {WebComponent} from "../../../src/package/html";
import {NavigationProps} from "./components/navigation/Navigation";
import {Reference} from "./pages/references/Reference";
import {FooterProps} from "./components/footer/Footer";
import {Imprint} from "./pages/imprint/Imprint";
import {Privacy} from "./pages/privacy/Privacy";

@WebApp({
    routes: {
        '': Home,
        '/services': Service,
        '/reference': Reference,
        '/about_us': About,
        '/imprint': Imprint,
        '/privacy': Privacy,
    }
})
@WebComponent({
        tag: 'sb-root',
        template: (view: SigmaBauApp) => (
            <div>
                <sb-navigation props={view.navProps}/>
                <div >
                    <router-outlet/>
                </div>
                <sb-footer props={view.footerProps}/>
            </div>
        )
    }
)
export class SigmaBauApp extends HTMLElement {
    footerProps: FooterProps ={name: 'SIGΣA plan + bau'  };
    navProps: NavigationProps = {
        menus: [
            {
            displayName: 'Referenzen',
            routeFunction: Reference
        },/* {
            displayName: 'Leistungen',
            routeFunction: Service
        },*/
            {
            displayName: 'Über Uns',
            routeFunction: About
        }]
    }


}