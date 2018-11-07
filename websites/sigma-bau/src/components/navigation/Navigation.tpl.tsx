import {Navigation} from "./Navigation";
import {BurgerType} from "../../../../../examples/burger-button/src/burger-button/BurgerButton";

export default (view: Navigation) =>
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {view.props.menu.map(menu => (<li><a onclick={() => {
                        menu.routeFunction()
                    }}>{menu.displayName}</a></li>))}
                </ul>
                <ul id="nav-mobile" className="right hide-on-large-only">
                    <li>
                        <burger-button props={{
                            type: BurgerType.ROUND_CONNER,
                            width: 64,
                            onClose: () => {
                                console.error("close");
                                view.open = false;
                            },
                            onOpen: () => {
                                console.error("open");
                                view.open = true;
                            }
                        }
                        }/>
                    </li>
                </ul>
            </div>
            <ul id="nav-mobile" className="hide-on-large-only" hidden={() => !!view.open}>
                <li>
                    {view.props.menu.map(menu => (<li><a onClick={() => {
                        menu.routeFunction()
                    }}>{menu.displayName}</a></li>))}
                </li>
            </ul>
        </nav>
    </div>