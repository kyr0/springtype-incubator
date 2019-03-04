import {Navigation} from "./Navigation";
import {BurgerType} from "../../../../../examples/burger-button/src/burger-button/BurgerButton";
import "./Navigation.scss"
import {Home} from "../../pages/home/Home";
import {RESOURCES} from "../../Resource";

export default (view: Navigation) => {
    return [
        <nav>
            <div class="nav-wrapper container">
                <img onclick={() => view.router.navigate(Home, {})} class="nav-sigma-logo"
                     src={RESOURCES.logo.minimal} alt=""/>
                <a data-target="mobile-demo" class="sidenav-trigger">
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
                <ul id="desktop-menu" class="right hide-on-med-and-down">
                    {
                        view.props.menus.map((menu) =>
                            <li class="menu-item">
                                <a onClick={() => view.router.navigate(menu.routeFunction, {})}>{menu.displayName}</a>
                            </li>)
                    }
                </ul>
            </div>
        </nav>,
        <ul id="mobile-menu" class="center hide-on-large-only hide-on-extra-large-only">
            {
                view.props.menus.map((menu) =>
                    <li class="menu-item">
                        <a onClick={() => {
                            view.router.navigate(menu.routeFunction, {});
                        }}>{menu.displayName}</a>
                    </li>)
            }
        </ul>]
}