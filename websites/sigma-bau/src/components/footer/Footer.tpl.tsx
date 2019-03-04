import "./../banner/Banner";

import {Footer} from "./Footer";
import "./Footer.scss"
import {RESOURCES} from "../../Resource";
import {Imprint} from "../../pages/imprint/Imprint";
import {Privacy} from "../../pages/privacy/Privacy";

export default (view: Footer) => {
    const scrollToTop = (scrollDuration: number) => {
        setTimeout(() => {
            const scrollHeight = window.scrollY,
                scrollStep = Math.PI / (scrollDuration / 15),
                cosParameter = scrollHeight / 2;
            let scrollCount = 0,
                scrollMargin,
                scrollInterval = setInterval(function () {
                    if (window.scrollY != 0) {
                        scrollCount = scrollCount + 1;
                        scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                        window.scrollTo(0, (scrollHeight - scrollMargin));
                    } else clearInterval(scrollInterval);
                }, 15);
        }, 150);
    };

    return (
        [
            <div class="container">
                <div class="row no margin">
                    <div className="col s12">
                        <sb-banner props={{banner: RESOURCES.footer.company}}/>
                    </div>
                </div>
            </div>,
            <div class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <img id="logo" src={RESOURCES.logo.small} alt=""/>
                            <hr class="w20"/>
                            <div class="left-side">
                                <div class="contact">
                                    <b><i class="padding bottom">Johannes Kranzmaier</i></b>
                                    <br/>
                                    <a href="mailto:kranzmaier@sigma-bau.de" target="_top">
                                        <i class="fas fa-envelope" style="margin-right: 10px;"/>kranzmaier@sigma-bau.de
                                    </a>
                                    <br/>
                                    <a href="tel:+491794608414">
                                        <i class="fas fa-phone" style="margin-right: 10px;"/>+49 (0)179 4608414
                                    </a>
                                </div>
                                <div class="margin top x3 contact">
                                    <b><i class="padding bottom">Wolfgang Reiter</i></b>
                                    <br/>
                                    <a href="mailto:reiter@sigma-bau.de" target="_top">
                                        <i class="fas fa-envelope" style="margin-right: 10px;"/>reiter@sigma-bau.de
                                    </a>
                                    <br/>
                                    <a href="tel:+4915126611467">
                                        <i class="fas fa-phone" style="margin-right: 10px;"/>+49 (0)151 26611467
                                    </a>
                                </div>
                            </div>
                            <hr class="w20"/>
                        </div>
                        <div class="col offset-l1 l4 s12">
                            <div class="box padding x2 bottom">
                                <h5 class="padding x2 bottom"><b>Standort</b></h5>
                                <iframe class="map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5318.161555992948!2d12.23221!3d48.20506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775fa3db75b19c9%3A0xd7d00ba07af7f60a!2sOberthalham+2%2C+84419+Obertaufkirchen!5e0!3m2!1sde!2sde!4v1549129894137"
                                        frameBorder="0" style="border:0" allowFullScreen/>
                                SigmaBau GbR <br/>
                                Oberthalham 2 <br/>
                                84419 Obertaufkirchen
                            </div>
                        </div>
                    </div>
                </div>
                <div class="padding bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col s12 m6">
                                <div>
                                    © {new Date().getFullYear()} Copyright {view.props.name}
                                </div>
                            </div>
                            <div class="col s12 m6">
                                <div>
                                    <a class="click" onClick={() => {
                                        view.router.navigate(Privacy, {});
                                        scrollToTop(1000);
                                    }}>Datenschutzerklärung</a>
                                </div>
                                <div>
                                    <a class="click" onClick={() => {
                                        view.router.navigate(Imprint, {});
                                        scrollToTop(1000);
                                    }}>Impressum</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ])
}
