import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./About.scss"
import "./member/Member";
import {MemberProps} from "./member/Member";
import "./joboffer/JobOffer";
import {JobOfferProps} from "./joboffer/JobOffer";
import {RESOURCES} from "../../Resource";

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
        const jobOffer: JobOfferProps = {
            jobName: 'Bauingenieur oder Architekt (m/w)',
            description: 'Bearbeitung der LPH 1-8 sowie Projektleitung und -steuerung',
            requirements: ['Abgeschlossenes Hochschulstudium Fachrichtung Architektur bzw. Bauingenieurwesen',
                'ausgeprägte Team- und Kommunikationsfähigkeit',
                'Flexibilität und Einsatzbereitschaft sowie selbstständige Arbeitsweise',
                'Berufserfahrung im Bereich Hochbau und Tiefbau',
                'CAD-Kenntnisse (Allplan) und MS-Office-Kenntnisse erwünscht',
                'Führerscheinklasse B'
            ],
            offer: ['Einen sicheren Arbeitsplatz in einer Wachstumsbranche',
                'Eine abwechslungsreiche Tätigkeit',
                'Eine gezielte Einarbeitung durch interne Schulung',
                'Ein interessantes Aufgabengebiet',
                'Ein gutes Betriebsklima und nette Kollegen'
            ],
            footer: ['Freuen Sie sich auf unsere abwechslungsreichen Bauvorhaben, auf freies selbstständiges Arbeiten und auf ein junges kollegiales Team.',
                'Habe Sie Interesse? Dann senden Sie bitte Ihre Bewerbungsunterlagen unter Angabe Ihrer Gehaltsvorstellungen sowie des frühestmöglichen Eintrittstermins bitte direkt an:'
            ],


            mail: 'info@sigma-bau.de'
        };

        const hans: MemberProps = {
            position: 'Projektleiter',
            name: 'Hans Kranzmaier',
            email: 'kranzmaier@sigma-bau.de',
            cv: ['Staatlich geprüfte Bautechniker',
                'Hochbau - Tiefbau - Wasserbau',
                'Wärmebedarfsberechnungen',
                'Brandschutzplanungen'
            ],
            img_src: RESOURCES.team.kranzmaier,
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
            img_src: RESOURCES.team.reiter,
        };

        return (

            [
                <div className="container">
                    <div className="row">
                        <div className="col s12 offset-l3 l6">
                            <p>Aus der Summe der zwei Einzelunternehmen "Bauplanung Reiter Wolfgang"
                                und "kranzmaier planung" entwickelte sich das Unternehmen "SIGΣA plan + bau".</p>
                        </div>
                        <div className="col s12 offset-l3 l6">
                            <img class="logo_company" src={RESOURCES.logo.reiter}/>
                            <img class="logo_company" src={RESOURCES.logo.kranzmaier}/>
                        </div>
                        <div className="col s12 offset-l3 l6">
                            <p>Zusammen sind wir mittlerweile <b>45 Jahre</b> in der Baubranche
                                tätig. <br/> Als <i>gelernter Mauerer und Zimmerer</i> konnten wir weitreichend
                                praktische Bauerfahrung
                                sammeln.
                                <hr class="w20"/>
                                Dieser Erfahrungsschatz und unsere stetigen Weitbildungen, können wir jetzt gemeinsam in
                                der Bau- und Planungsbranche, für unsere Kunden sowie Geschäftspartner nutzen.
                            </p>
                            <img className="logo_company x2" src={RESOURCES.logo.normal}/>

                        </div>
                    </div>
                </div>,
                <div className="gray-background">
                    <div className="container">
                        <div className="team row">
                            <div className="col s12 padding bottom x3">
                                <div className="member_header">Unser Team</div>
                            </div>
                            <div className="col s12 m6 offset-l2 l4">
                                <sb-member props={hans}/>
                            </div>
                            <div className="col s12 m6 l4">
                                <sb-member props={reiter}/>
                            </div>
                        </div>
                    </div>
                </div>,
                <div className="container">
                    <div className="team row">
                        <div className="col s12 padding bottom x3">
                            <div className="member_header">Ausstatung</div>
                        </div>
                        <div className="col s12">
                            Das Büro ist mit modernster Hard- und Software ausgestattet.

                            <ul>
                                <li>
                                    Controlling und Management
                                </li>
                                <li>
                                    verschiedene CAD Programme
                                </li>
                                <li>
                                    AVA Software
                                </li>
                                <li>
                                    A-0-Plotter HP-Designjet
                                </li>
                                <li>
                                    Großkopierer
                                </li>
                                <li>
                                    Wärmebildkamera
                                </li>
                                <li>
                                    Tachymeter
                                </li>
                                <li>
                                    Nivelliergerät
                                </li>
                                <li>
                                    Baufeuchtemessgerät
                                </li>
                                <li>
                                    3D-Drucker
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

            ]
        )
    }

    /* <div className="spacer vertical"/>
                   <div className="container ">
                       <div className="row">
                           <div className="col s12 m12 xl6 offset-xl3">
                               <h5>Wir suchen Verstärkung</h5>
                               <sb-job-offer props={jobOffer}/>
                           </div>
                       </div>
                   </div>*/

}