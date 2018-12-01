import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./About.scss"
import "./member/member";
import {MemberProps} from "./member/member";
import hansImg from "../../assets/images/hans.jpg";
import reiterImg from "../../assets/images/reiter.jpg";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-about'
})
export class About extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }
    init = () => {
    };

    render() {

        const hans: MemberProps = {
            position: 'Projektleiter',
            name: 'Hans Kranzmaier',
            email: 'kranzmaier@sigma-bau.de',
            cv: ['Staatlich geprüfte Bautechniker',
                'Hochbau - Tiefbau - Wasserbau',
                'Wärmebedarfsberechnungen',
                'Brandschutzplanungen'
            ],
            img_src: hansImg,
        };

        const reiter: MemberProps = {
            position: 'Projektleiter',
            name: 'Wolfgang Reiter',
            email: 'reiter@sigma-bau.de',
            cv: ['Staatlich geprüfter Bautechniker',
                'Hochbau - Tiefbau - Strassenbau',
                'Begrünungspläne nach BayKompV',
                'Aussiedlungskonzepte'
            ],
            img_src: reiterImg,
        };

        return (

            <div>
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <p>Aus der Summe der zwei Einzelunternehmen "Bauplanung Reiter Wolfgang"
                                und "kranzmaier planung" entwickelte sich das Unternehmen</p>
                        </div>
                        <div class="col s12">
                            <p>"SIGΣA plan + bau". Zusammen sind wir mittlerweile 45 Jahre in der Baubranche tätig. Als
                                gelernter Mauerer und Zimmerer konnten wir weitreichend praktische Bauerfahrung sammeln.
                                Dieser Erfahrungsschatz und unsere stetigen Weitbildungen, können wir jetzt gemeinsam in
                                der Bau- und Planungsbranche, für unsere Kunden sowie Geschäftspartner nutzen.</p>
                        </div>
                    </div>
                </div>

                <div className="gray-background">
                    <div className="team container"  style="">
                        <div className="row">
                            <div class="col s12">
                                <div class="member header">Unser Team</div>
                            </div>
                            <div class="col s12 m6">
                                <sb-member props={hans}/>
                            </div>
                            <div class="col s12 m6">
                                <sb-member props={reiter}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container ">
                    <div className="row">
                        <div className="col s12">
                            <h1>Wir stellen ein</h1>
                        </div>
                        <div className="col s12">
                            <h2> Zur Verstärkung unseres Teams suchen wir:</h2>
                        </div>
                        <div className="col s12">
                            <p> Bauingenieur oder Architekt (m/w)
                                Bearbeitung der LPH 1-8 sowie Projektleitung und -steuerung
                            </p>
                            <p>
                                Das sollten Sie mitbringen:
                            </p>
                            <ul>
                                <li>Abgeschlossenes Hochschulstudium Fachrichtung Architektur bzw. Bauingenieurwesen
                                </li>
                                <li>Ausgeprägte Team- und Kommunikationsfähigkeit</li>
                                <li>Flexibilität und Einsatzbereitschaft sowie selbstständige Arbeitsweise</li>
                                <li>Berufserfahrung im Bereich Hochbau und Tiefbau</li>
                                <li>CAD-Kenntnisse (Allplan) und MS-Office-Kenntnisse erwünscht</li>
                                <li>Führerscheinklasse B</li>
                            </ul>
                            <p> Wir bieten Ihnen:</p>
                            <ul>
                                <li>Sicheren Arbeitsplatz in einer Wachstumsbranche</li>
                                <li>Abwechslungsreiche Tätigkeit</li>
                                <li>Gezielte Einarbeitung durch interne Schulung</li>
                                <li>Interessantes Aufgabengebiet</li>
                                <li>Gutes Betriebsklima und nette Kollegen</li>
                            </ul>
                            <p>
                                Freuen Sie sich auf unsere abwechslungsreichen Bauvorhaben, auf freies
                                selbstständiges
                                Arbeiten und auf ein junges kollegiales Team.
                            </p><p>
                            Habe Sie Interesse? Dann senden Sie bitte Ihre Bewerbungsunterlagen unter Angabe Ihrer
                            Gehaltsvorstellungen sowie des frühestmöglichen Eintrittstermins bitte direkt an:</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}