import {Navigation} from "./Navigation";
import {BurgerType} from "../../../../../examples/burger-button/src/burger-button/BurgerButton";
import "./Navigation.scss"
export default (view: Navigation) =>
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <a data-target="mobile-demo" className="sidenav-trigger">
                    <burger-button props={{
                        type: BurgerType.ROUND_CONNER,
                        width: 62,
                        onClose: () => {
                           let menu: HTMLElement | null = document.getElementById('mobile-menu');
                           if(menu){
                            menu.classList.remove('open');
                           }
                            view.open = false;
                        },
                        onOpen: () => {
                            let menu: HTMLElement | null = document.getElementById('mobile-menu');
                            if(menu){
                                menu.classList.add('open');
                            }
                            view.open = true;
                        }
                    }
                    }/>
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">Javascript</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                </ul>
            </div>
        </nav>

        <ul id="mobile-menu" className="center hide-on-large-only">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
        </ul>


    </div>