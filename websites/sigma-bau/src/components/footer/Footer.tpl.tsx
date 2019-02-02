import {Footer} from "./Footer";
import "./Footer.scss"
import {RESOURCES} from "../../Resource";

export default (view: Footer) =>

    <div className="page-footer">
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <img id="logo" src={RESOURCES.logo.normal}/>
                    <hr class="w20"/>
                    <div className="left-side">
                        <div class="contact">
                            <b><i class="padding bottom">Johannes Kranzmaier</i></b>
                            <br/>
                            <a href="mailto:kranzmaier@sigma-bau.de" target="_top">
                                <i className="fas fa-envelope"></i> kranzmaier@sigma-bau.de
                            </a>
                            <br/>
                            <a href="tel:+491794608414">
                                <i className="fas fa-phone"></i> +49 (0)179 4608414
                            </a>
                        </div>
                        <div class="margin top x3 contact">
                            <b><i class="padding bottom">Wolfgang Reiter</i></b>
                            <br/>
                            <a href="mailto:reiter@sigma-bau.de" target="_top">
                                <i className="fas fa-envelope"></i> reiter@sigma-bau.de
                            </a>
                            <br/>
                            <a href="tel:+4915126611467">
                                <i className="fas fa-phone"></i> +49 (0)151 26611467
                            </a>
                        </div>
                    </div>
                    <hr className="w20"/>
                </div>
                <div className="col offset-l1 l4 s12">
                    <div class="box padding x2 bottom">
                        <h5 class="padding x2 bottom"><b>Standort</b></h5>
                        <iframe class="map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5318.161555992948!2d12.23221!3d48.20506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775fa3db75b19c9%3A0xd7d00ba07af7f60a!2sOberthalham+2%2C+84419+Obertaufkirchen!5e0!3m2!1sde!2sde!4v1549129894137"
                                frameBorder="0" style="border:0" allowFullScreen></iframe>
                        SigmaBau GbR <br/>
                        Oberthalham 2 <br/>
                        84419 Obertaufkirchen
                    </div>
                </div>
            </div>
        </div>
        <div class="padding bottom">
            <div className="container">
                <div className="row">
                    <div className="col s12 m6">
                        <div>
                            © {new Date().getFullYear()} Copyright {view.props.name}
                        </div>
                    </div>
                    <div className="col s12 m6">
                        <div>
                            <a href="#!">Impressum</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
/*
Tel: 0179 - 4608414 -> Kranzmaier

Tel: 0151 - 26611467 -> Reiter*/

