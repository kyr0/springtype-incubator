import {Navigation} from "./Navigation";
import {BurgerType} from "../../../../../examples/burger-button/src/burger-button/BurgerButton";
import "./Navigation.scss"
import {Home} from "../../pages/home/Home";
import {logoSVGMinimal} from "./NavigationRessource";

export default (view: Navigation) => {
    const size: number = view.props.menus.length;
    const listItmes = view.props.menus.map((menu) =>
        <li class="menu-item">
            <a onClick={() => view.router.navigate(menu.routeFunction, {})}>{menu.displayName}</a>
        </li>);
    const listItmesPhone = view.props.menus.map((menu, index) =>
        <li class="menu-item">
            <a onClick={() => view.router.navigate(menu.routeFunction, {})}>{menu.displayName}</a>
        </li>);
    return (<div>
        <nav>
            <div className="nav-wrapper container">
                <img onclick={() => view.router.navigate(Home, {})} className="brand-logo" src={logoSVGMinimal}/>
                <a data-target="mobile-demo" className="sidenav-trigger">
                    <burger-button props={{
                        type: BurgerType.SWORD,
                        width: 60,
                        onClose: () => {
                            let menu: HTMLElement | null = document.getElementById('mobile-menu');
                            if (menu) {
                                menu.classList.remove('open');
                            }
                            view.open = false;
                        },
                        onOpen: () => {
                            let menu: HTMLElement | null = document.getElementById('mobile-menu');
                            if (menu) {
                                menu.classList.add('open');
                            }
                            view.open = true;
                        }
                    }
                    }/>
                </a>
                <ul className="right hide-on-med-and-down">
                    {
                        listItmes
                    }
                </ul>
            </div>
        </nav>
        <ul id="mobile-menu" className="center hide-on-large-only">
            {
                listItmesPhone
            }
        </ul>


    </div>)
}