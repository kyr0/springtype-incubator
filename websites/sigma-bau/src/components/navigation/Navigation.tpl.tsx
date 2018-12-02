import {Navigation} from "./Navigation";
import {BurgerType} from "../../../../../examples/burger-button/src/burger-button/BurgerButton";
import "./Navigation.scss"
import {Home} from "../../pages/home/Home";

export default (view: Navigation) => {
    const listItmes = view.props.menus.map((menu) =>
        <li>
            <a class="grey-text text-lighten-1"
               onClick={() => view.router.navigate(menu.routeFunction, {})}>{menu.displayName}</a>
        </li>);
    return (<div>
        <nav class="grey-text text-lighten-1">
            <div className="nav-wrapper container">
                <a onclick={() => view.router.navigate(Home, {})} className="brand-logo">Logo</a>
                <a data-target="mobile-demo" className="sidenav-trigger">
                    <burger-button props={{
                        type: BurgerType.SWORD,
                        width: 62,
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
                listItmes
            }
        </ul>


    </div>)
}