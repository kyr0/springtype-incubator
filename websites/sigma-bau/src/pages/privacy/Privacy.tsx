import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import "./Privacy.scss";

interface HomeProps {

}

@WebComponent({
    tag: 'sb-privacy'
})
export class Privacy extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: HomeProps
    ) {
        super();
    }

    init = () => {
    };


    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 offset-m2 m8">
                            <h2>Datenschutzerkl&auml;rung</h2>
                            <h3>1. Datenschutz auf einen Blick</h3>
                            <h4>Allgemeine Hinweise</h4> <p>Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                            dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
                            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich
                            identifiziert werden k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema Datenschutz
                            entnehmen Sie unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.</p>
                            <h4>Datenerfassung auf unserer Website</h4> <p><strong>Wer ist verantwortlich f&uuml;r die
                            Datenerfassung auf dieser Website?</strong></p> <p>Die Datenverarbeitung auf dieser Website
                            erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Impressum dieser
                            Website entnehmen.</p> <p><strong>Wie erfassen wir Ihre Daten?</strong></p> <p>Ihre Daten
                            werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um
                            Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere Daten werden
                            automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                            technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p> <p>
                            <strong>Wof&uuml;r nutzen wir Ihre Daten?</strong></p> <p>Ein Teil der Daten wird erhoben,
                            um eine fehlerfreie Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                            k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.</p> <p><strong>Welche
                            Rechte haben Sie bez&uuml;glich Ihrer Daten?</strong></p> <p>Sie haben jederzeit das Recht
                            unentgeltlich Auskunft &uuml;ber Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                            personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein Recht, die Berichtigung,
                            Sperrung oder L&ouml;schung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum
                            Thema Datenschutz k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse
                            an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust&auml;ndigen
                            Aufsichtsbeh&ouml;rde zu.</p> <p>Au&szlig;erdem haben Sie das Recht, unter bestimmten
                            Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
                            verlangen. Details hierzu entnehmen Sie der Datenschutzerkl&auml;rung unter &bdquo;Recht auf
                            Einschr&auml;nkung der Verarbeitung&ldquo;.</p>
                            <h4>Analyse-Tools und Tools von Drittanbietern</h4> <p>Beim Besuch unserer Website kann Ihr
                            Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit
                            sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel
                            anonym; das Surf-Verhalten kann nicht zu Ihnen zur&uuml;ckverfolgt werden. Sie k&ouml;nnen
                            dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern.
                            Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerkl&auml;rung.</p>
                            <p>Sie k&ouml;nnen dieser Analyse widersprechen. &Uuml;ber die
                                Widerspruchsm&ouml;glichkeiten werden wir Sie in dieser Datenschutzerkl&auml;rung
                                informieren.</p>
                            <h3>2. Allgemeine Hinweise und Pflichtinformationen</h3>
                            <h4>Datenschutz</h4> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                            pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich
                            und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                            Datenschutzerkl&auml;rung.</p> <p>Wenn Sie diese Website benutzen, werden verschiedene
                            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
                            pers&ouml;nlich identifiziert werden k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                            erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie nutzen. Sie erl&auml;utert
                            auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass die
                            Daten&uuml;bertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                            Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz der Daten vor dem Zugriff
                            durch Dritte ist nicht m&ouml;glich.</p>
                            <h4>Hinweis zur verantwortlichen Stelle</h4> <p>Die verantwortliche Stelle f&uuml;r die
                            Datenverarbeitung auf dieser Website ist:</p>
                            <p>
                                {atob("TWFubnNlaWNoZXIgTWljaGFlbA==")}<br/>
                                {atob("U2NobmF1cHBpbmcgMTY=")}<br/>
                                {atob("ODQ0MTYgVGF1ZmtpcmNoZW4gVmlscw==")}
                            </p>

                            <p>
                                {atob("VGVsZWZvbjogMDgwODQgODQxMQ==")}<br/>
                                {atob("RS1NYWlsOiBtLm1hbnNpMUBnbXgubmV0")}
                            </p>
                            <p>Verantwortliche Stelle ist die nat&uuml;rliche oder juristische Person, die allein oder
                                gemeinsam mit anderen &uuml;ber die Zwecke und Mittel der Verarbeitung von
                                personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.</p>
                            <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4> <p>Viele
                            Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer ausdr&uuml;cklichen Einwilligung
                            m&ouml;glich. Sie k&ouml;nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                            reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtm&auml;&szlig;igkeit der bis zum
                            Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.</p>
                            <h4>Widerspruchsrecht gegen die Datenerhebung in besonderen F&auml;llen sowie gegen
                                Direktwerbung (Art. 21 DSGVO)</h4> <p><strong>Wenn die Datenverarbeitung auf Grundlage
                            von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
                            Gr&uuml;nden, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
                            personenbezogenen Daten Widerspruch einzulegen; dies gilt auch f&uuml;r ein auf diese
                            Bestimmungen gest&uuml;tztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine
                            Verarbeitung beruht, entnehmen Sie dieser Datenschutzerkl&auml;rung. Wenn Sie Widerspruch
                            einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei
                            denn, wir k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die Verarbeitung
                            nachweisen, die Ihre Interessen, Rechte und Freiheiten &uuml;berwiegen oder die Verarbeitung
                            dient der Geltendmachung, Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen
                            (Widerspruch nach Art. 21 Abs. 1 DSGVO).</strong></p> <p><strong>Werden Ihre
                            personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht,
                            jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum
                            Zwecke derartiger Werbung einzulegen; dies gilt auch f&uuml;r das Profiling, soweit es mit
                            solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre
                            personenbezogenen Daten anschlie&szlig;end nicht mehr zum Zwecke der Direktwerbung verwendet
                            (Widerspruch nach Art. 21 Abs. 2 DSGVO).</strong></p>
                            <h4>Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde</h4> <p>Im Falle von
                            Verst&ouml;&szlig;en gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                            Aufsichtsbeh&ouml;rde, insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                            Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma&szlig;lichen Versto&szlig;es zu.
                            Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                            gerichtlicher Rechtsbehelfe.</p>
                            <h4>Recht auf Daten&uuml;bertragbarkeit</h4> <p>Sie haben das Recht, Daten, die wir auf
                            Grundlage Ihrer Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
                            verarbeiten, an sich oder an einen Dritten in einem g&auml;ngigen, maschinenlesbaren Format
                            aush&auml;ndigen zu lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an einen
                            anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                            <h4>SSL- bzw. TLS-Verschl&uuml;sselung</h4> <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden
                            und zum Schutz der &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                            oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
                            TLS-Verschl&uuml;sselung. Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
                            Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und
                            an dem Schloss-Symbol in Ihrer Browserzeile.</p> <p>Wenn die SSL- bzw.
                            TLS-Verschl&uuml;sselung aktiviert ist, k&ouml;nnen die Daten, die Sie an
                            uns &uuml;bermitteln, nicht von Dritten mitgelesen werden.</p>
                            <h4>Auskunft, Sperrung, L&ouml;schung und Berichtigung</h4> <p>Sie haben im Rahmen der
                            geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                            Auskunft &uuml;ber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                            Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
                            Sperrung oder L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                            personenbezogene Daten k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen
                            Adresse an uns wenden.</p>
                            <h4>Recht auf Einschr&auml;nkung der Verarbeitung</h4> <p>Sie haben das Recht, die
                            Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
                            k&ouml;nnen Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das
                            Recht auf Einschr&auml;nkung der Verarbeitung besteht in folgenden F&auml;llen:</p>
                            <ul>
                                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                                    bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu &uuml;berpr&uuml;fen.
                                    F&uuml;r die Dauer der Pr&uuml;fung haben Sie das Recht, die Einschr&auml;nkung der
                                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                </li>
                                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm&auml;&szlig;ig geschah
                                    / geschieht, k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
                                    Datenverarbeitung verlangen.
                                </li>
                                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr ben&ouml;tigen, Sie sie jedoch zur
                                    Aus&uuml;bung, Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
                                    ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die Einschr&auml;nkung
                                    der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                </li>
                                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                                    Abw&auml;gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                                    nicht feststeht, wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                                    Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                </li>
                            </ul>
                            <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr&auml;nkt haben,
                                d&uuml;rfen diese Daten &ndash; von ihrer Speicherung abgesehen &ndash; nur mit Ihrer
                                Einwilligung oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
                                Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen nat&uuml;rlichen oder
                                juristischen Person oder aus Gr&uuml;nden eines wichtigen &ouml;ffentlichen Interesses
                                der Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                            <h4>Widerspruch gegen Werbe-E-Mails</h4> <p>Der Nutzung von im Rahmen der Impressumspflicht
                            ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von nicht ausdr&uuml;cklich
                            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber
                            der Seiten behalten sich ausdr&uuml;cklich rechtliche Schritte im Falle der unverlangten
                            Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.</p>
                            <h3>3. Datenerfassung auf unserer Website</h3>
                            <h4>Cookies</h4> <p>Die Internetseiten verwenden teilweise so genannte Cookies. Cookies
                            richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
                            unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine
                            Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.</p> <p>Die
                            meisten der von uns verwendeten Cookies sind so genannte &ldquo;Session-Cookies&rdquo;. Sie
                            werden nach Ende Ihres Besuchs automatisch gel&ouml;scht. Andere Cookies bleiben auf Ihrem
                            Endger&auml;t gespeichert bis Sie diese l&ouml;schen. Diese Cookies erm&ouml;glichen es uns,
                            Ihren Browser beim n&auml;chsten Besuch wiederzuerkennen.</p> <p>Sie k&ouml;nnen Ihren
                            Browser so einstellen, dass Sie &uuml;ber das Setzen von Cookies informiert werden und
                            Cookies nur im Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte F&auml;lle
                            oder generell ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies beim
                            Schlie&szlig;en des Browser aktivieren. Bei der Deaktivierung von Cookies kann die
                            Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.</p> <p>Cookies, die zur
                            Durchf&uuml;hrung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung
                            bestimmter, von Ihnen erw&uuml;nschter Funktionen (z.B. Warenkorbfunktion) erforderlich
                            sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber
                            hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und
                            optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse
                            Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerkl&auml;rung
                            gesondert behandelt.</p>
                            <h4>Server-Log-Dateien</h4> <p>Der Provider der Seiten erhebt und speichert automatisch
                            Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an
                            uns &uuml;bermittelt. Dies sind:</p>
                            <ul>
                                <li>Browsertyp und Browserversion</li>
                                <li>verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners</li>
                                <li>Uhrzeit der Serveranfrage</li>
                                <li>IP-Adresse</li>
                            </ul>
                            <p>Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird nicht
                                vorgenommen.</p> <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                            lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch
                            fehlerfreien Darstellung und der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die
                            Server-Log-Files erfasst werden.</p>
                            <h3>4. Soziale Medien</h3>
                            <h4>Facebook Plugins (Like &amp; Share-Button)</h4> <p>Auf unseren Seiten sind Plugins des
                            sozialen Netzwerks Facebook, Anbieter Facebook Inc., 1 Hacker Way, Menlo Park, California
                            94025, USA, integriert. Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder
                            dem &quot;Like-Button&quot; (&quot;Gef&auml;llt mir&quot;) auf unserer Seite.
                            Eine &Uuml;bersicht &uuml;ber die Facebook Plugins finden Sie hier: <a
                                href="https://developers.facebook.com/docs/plugins/?locale=de_DE" target="_blank"
                                rel="noopener">https://developers.facebook.com/docs/plugins/?locale=de_DE</a>.</p>
                            <p>Wenn Sie unsere Seiten besuchen, wird &uuml;ber das Plugin eine direkte Verbindung
                                zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erh&auml;lt dadurch
                                die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den
                                Facebook &quot;Like-Button&quot; anklicken w&auml;hrend Sie in Ihrem Facebook-Account
                                eingeloggt sind, k&ouml;nnen Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil
                                verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen.
                                Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt
                                der &uuml;bermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere
                                Informationen hierzu finden Sie in der Datenschutzerkl&auml;rung von Facebook unter: <a
                                    href="https://de-de.facebook.com/privacy/explanation" target="_blank"
                                    rel="noopener">https://de-de.facebook.com/privacy/explanation</a>.</p> <p>Wenn Sie
                            nicht w&uuml;nschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto
                            zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p> <p>Die
                            Verwendung der Facebook Plugins erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                            Websitebetreiber hat ein berechtigtes Interesse an einer m&ouml;glichst umfangreichen
                            Sichtbarkeit in den Sozialen Medien.</p>
                            <h3>5. Plugins und Tools</h3>
                            <h4>YouTube mit erweitertem Datenschutz</h4> <p>Unsere Website nutzt Plugins der Website
                            YouTube. Betreiber der Seiten ist die Google Ireland Limited (&ldquo;Google&rdquo;), Gordon
                            House, Barrow Street, Dublin 4, Irland.</p> <p>Wir nutzen YouTube im erweiterten
                            Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine
                            Informationen &uuml;ber die Besucher auf dieser Website speichert, bevor diese sich das
                            Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten
                            Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt
                            YouTube &ndash; unabh&auml;ngig davon, ob Sie sich ein Video ansehen &ndash; eine Verbindung
                            zum Google DoubleClick-Netzwerk her.</p> <p>Sobald Sie ein YouTube-Video auf unserer Website
                            starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem
                            YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem
                            YouTube-Account eingeloggt sind, erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt
                            Ihrem pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie verhindern, indem Sie sich
                            aus Ihrem YouTube-Account ausloggen.</p> <p>Des Weiteren kann YouTube nach Starten eines
                            Videos verschiedene Cookies auf Ihrem Endger&auml;t speichern. Mit Hilfe dieser Cookies kann
                            YouTube Informationen &uuml;ber Besucher unserer Website erhalten. Diese Informationen
                            werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu
                            verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endger&auml;t,
                            bis Sie sie l&ouml;schen.</p> <p>Gegebenenfalls k&ouml;nnen nach dem Start eines
                            YouTube-Videos weitere Datenverarbeitungsvorg&auml;nge ausgel&ouml;st werden, auf die wir
                            keinen Einfluss haben.</p> <p>Die Nutzung von YouTube erfolgt im Interesse einer
                            ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im
                            Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p> <p>Weitere Informationen &uuml;ber Datenschutz
                            bei YouTube finden Sie in deren Datenschutzerkl&auml;rung unter: <a
                                href="https://policies.google.com/privacy?hl=de" target="_blank"
                                rel="noopener">https://policies.google.com/privacy?hl=de</a>.</p>
                            <h4>Google Web Fonts</h4> <p>Diese Seite nutzt zur einheitlichen Darstellung von
                            Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts
                            sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.</p>
                            <h4>Google Maps</h4> <p>Diese Seite nutzt &uuml;ber eine API den Kartendienst Google Maps.
                            Anbieter ist die Google Ireland Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street,
                            Dublin 4, Irland.</p> <p>Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
                            IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google
                            in den USA &uuml;bertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen
                            Einfluss auf diese Daten&uuml;bertragung.</p> <p>Die Nutzung von Google Maps erfolgt im
                            Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten
                            Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes
                            Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p> <p>Mehr Informationen zum Umgang
                            mit Nutzerdaten finden Sie in der Datenschutzerkl&auml;rung von Google: <a
                                href="https://policies.google.com/privacy?hl=de" target="_blank"
                                rel="noopener">https://policies.google.com/privacy?hl=de</a>.</p>
                            <p>Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
