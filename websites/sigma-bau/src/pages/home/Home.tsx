import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./Home.scss";
import {RESOURCES} from "../../Resource";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-home'
})
export class Home extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    init = () => {
    };

    mountChildren = () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        M.Parallax.init(parallaxElements, {});

        var caruselElements = document.querySelectorAll('.carousel');
        M.Carousel.init(caruselElements, {
            indicators: true, numVisible: 1, duration: 200

        });
    };


    render() {
        return (
            [
                <div class="parallax-container">
                    <div class="parallax">
                        <img src={RESOURCES.page.home.parallax} alt=""/>
                    </div>
                </div>,
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <img id="sigma" src={RESOURCES.page.home.sigma} alt=""/>

                        </div>
                    </div>
                    <div className="row">
                        <div class="col s12 offset-m3 m6 offset-l4 l4">
                            "Das große Sigma Σ ist in der Mathematik

                            das Zeichen für Summe und Signatur.

                            SIGΣA plan + bau steht für die Summe

                            aller Leistungen von Planung über die

                            Bauleitung bis hin zur Übergabe an den Bauherren"
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 offset-m2 m8 offset-l2 l8">
                            <h5>Tätigkeitsbereiche</h5>
                            <img src={RESOURCES.page.home.wordcloud} width="100%"/>
                        </div>
                    </div>
                </div>
            ]
        )
    }
}