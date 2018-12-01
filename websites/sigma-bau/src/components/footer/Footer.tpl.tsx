import {Footer} from "./Footer";
import "./Footer.scss"
export default (view: Footer) =>

    <div className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Footer Content</h5>
                    <p className="grey-text text-lighten-1">You can use rows and columns here to organize your footer
                        content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                        <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div class="left-side">
                            © {new Date().getFullYear()} Copyright {view.props.name}
                        </div>
                    </div><div className="col s12 m6">
                        <div class="right-side">
                            © {new Date().getFullYear()} Copyright {view.props.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

