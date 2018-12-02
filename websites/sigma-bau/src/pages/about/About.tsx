import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./About.scss"
import "./member/member";
import {MemberProps} from "./member/member";
import "./joboffer/JobOffer";
import {JobOfferProps} from "./joboffer/JobOffer";
import {portraiKranzmaierSrc, portraiReiterSrc} from "./AboutRessource";

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


            mail: 'info@sigma-bau.de'};

        const hans: MemberProps = {
            position: 'Projektleiter',
            name: 'Hans Kranzmaier',
            email: 'kranzmaier@sigma-bau.de',
            cv: ['Staatlich geprüfte Bautechniker',
                'Hochbau - Tiefbau - Wasserbau',
                'Wärmebedarfsberechnungen',
                'Brandschutzplanungen'
            ],
            img_src: portraiKranzmaierSrc,
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
            img_src: portraiReiterSrc
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
                    <div className="team container" style="">
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
                <div class="spacer vertical"/>
                <div class="container ">
                    <div class="row">
                        <div class="col s12 m12 xl6 offset-xl3">
                            <sb-job-offer props={jobOffer}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}