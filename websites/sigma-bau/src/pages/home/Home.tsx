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
                    <div class="row">
                        <div class="col s12 offset-m3 m6 offset-l4 l4">
                            <p>
                                "Das große Sigma Σ ist in der Mathematik
                                das Zeichen für Summe und Signatur.
                                <b> SIGΣA plan + bau</b> steht für die Summe
                                aller Leistungen von Planung über die
                                Bauleitung bis hin zur Übergabe an den Bauherren"
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 marginbottom">
                            <h3>Unsere Leistungen</h3>
                        </div>
                        {RESOURCES.page.home.theme.map(imgsrc => <div class="col xs12 s6 m6 l3">
                            <img class="topics" src={imgsrc} width="100%" alt=""/>
                        </div>)}
                    </div>
                </div>,
                <div className="gray-background">
                    <div className="container ">
                        <div className="row padding">
                            <div className="col s12">
                                <img class="house" src={RESOURCES.page.home.houses}/>
                            </div>
                            <div className="col s12 marginbottom">
                                <h3>Tätigkeitsbereiche</h3>

                                <h5>Alle Leistungsphasen der <a href="https://de.wikipedia.org/wiki/Leistungsphasen_nach_HOAI" target="_blank"><b>HOAI</b></a></h5>
                                <ul>
                                    {['Grundlagenermittlung',
                                        'Vorplanung mit Kostenschätzung',
                                        'Entwurfsplanung und Kostenberechnung',
                                        'Genehmigungsplanung',
                                        'Ausführungsplanung',
                                        'Vorbereitung der Vergabe, einschließlich Ermitteln der Mengen und Aufstellen von Leistungsverzeichnissen (LV)',
                                        'Mitwirkung bei der Vergabe inklusive Kostenanschlag',
                                        'Objektüberwachung - Bauüberwachung und Dokumentation',
                                        'Objektbetreuung'].map(value => <li><p>{value}</p></li>)}
                                </ul>
                            </div>
                            <div className="col s12 marginbottom">
                                <h3>Kernkompentenzen</h3>

                                <ul>
                                    <li><p>Planungen in der Landwirtschaft </p>
                                        {['Milchviehställe',
                                            'Aussiedlerhöfe',
                                            'Hallen',
                                            'Geflügelställe',
                                            'Reitanlagen'].map(value => <li><p>{`- ${value} -`}</p></li>)}</li>

                                    <li><p>3D-Planung</p></li>
                                    <li><p>Visualisierung und Druck</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ])

    }

    // <div class="row">
    //     <div class="col s12 xl8 offset-xl2">
    //         <h3>Visualisierung</h3>
    //         <div className="video-container">
    //             <iframe src="https://www.youtube.com/embed/dEg1-8qKRoo"
    //                     frameBorder="0"
    //                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //                     allowFullScreen/>
    //         </div>
    //     </div>
    // </div>
    // <div class="gray-background">
    //     <div class="container ">
    //         <div class="row padding">
    //             <div className="col s12 marginbottom">
    //                 <h3>Tätigkeitsbereiche</h3>
    //             </div>
    //             < div class="col s12 xl8 offset-xl2 ">
    //                 <img class="theme" src={RESOURCES.page.home.wordcloud} width="100%" alt=""/>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}