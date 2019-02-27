import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./Imprint.scss";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-imprint'
})
export class Imprint extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    init = () => {
    };


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 offset-m2 m8">
                        <h2>Impressum</h2>

                        <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
                        <p>
                            {atob("TWFubnNlaWNoZXIgTWljaGFlbA==")}<br/>
                            {atob("U2NobmF1cHBpbmcgMTY=")}<br/>
                            {atob("ODQ0MTYgVGF1ZmtpcmNoZW4gVmlscw==")}
                        </p>

                        <h2>Kontakt</h2>
                        <p>
                            {atob("VGVsZWZvbjogMDgwODQgODQxMQ==")}<br/>
                            {atob("RS1NYWlsOiBtLm1hbnNpMUBnbXgubmV0")}
                        </p>

                        <h3>Haftung f&uuml;r Inhalte</h3> <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7
                        Abs.1 TMG
                        f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                        Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                        verpflichtet, &uuml;bermittelte
                        oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu
                        forschen, die auf
                        eine rechtswidrige T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder
                        Sperrung der
                        Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine
                        diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                        Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                        werden wir diese
                        Inhalte umgehend entfernen.</p> <h4>Haftung f&uuml;r Links</h4> <p>Unser Angebot
                        enth&auml;lt Links zu
                        externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen
                        wir f&uuml;r
                        diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der
                        verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                        Seiten wurden
                        zum Zeitpunkt der Verlinkung auf m&ouml;gliche
                        Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft.
                        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine
                        permanente
                        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                        Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                        derartige Links
                        umgehend entfernen.</p> <h3>Urheberrecht</h3> <p>Die durch die Seitenbetreiber erstellten
                        Inhalte und
                        Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung,
                        Bearbeitung,
                        Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                        bed&uuml;rfen der
                        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
                        Seite sind
                        nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte
                        auf dieser
                        Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                        Insbesondere
                        werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                        Urheberrechtsverletzung
                        aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                        Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.</p>

                        <p>Quelle: <a
                            href="https://www.e-recht24.de/impressum-generator.html"
                            target="_blank">e-recht24.de</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
