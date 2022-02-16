import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

class Faq extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }


    render() {
        window.scrollTo(0, 0);
        return (
            <div>
                <Navbar subpage={this.props.subpage} main_page={"gray"} faq={"black"} information={"gray"}
                        style={{"position": "relative"}}/>
                <div style={{"position": "relative"}}>
                    <h1 style={{textAlign: "center", fontWeight: "bold"}}>FAQs</h1>
                    <br/>

                    <div className="container main_page_text">
                        Haben Sie Fragen? Vielleicht haben wir Ihnen diese schon beantwortet. Hier finden Sie die
                        häufigsten
                        Fragen und Antworten zu unserem Impfrechner und der Corona-Schutzimpfung.
                        Noch nicht beantwortet? Dann nutzen Sie gerne unser <a
                        href="impressum.html">Kontaktformular</a>. <br/>
                        *Bitte haben Sie Verständnis, dass wir nicht jede Anfrage beantworten können.
                        <br/>
                        <br/>
                        <br/>

                        <button className="accordion">Warum sollte ich den Impfrechner nutzen?</button>
                        <div className="panel">
                            <br/>
                            Die Nachrichtenlage, Informationen und Empfehlungen rund um die Corona-Schutzimpfung
                            sind sehr schnelllebig und häufig schwer zugänglich. Mein-Impfrechner soll allen
                            Bürgerinnen und Bürgern eine einfache und niedrigschwellige Lösung zur Überprüfung
                            ihres
                            Impfstatus und zur Ermittlung ihrer persönlichen Impfempfehlung inklusive des
                            empfohlenen Zeitpunkts sowie des für Sie empfohlenen Impfstoffs bieten.
                            Die Empfehlung basiert auf der aktuellen Lage von Forschung und Wissenschaft,
                            entsprechend den Vorgaben der Ständigen Impfkommission (STIKO) des Robert
                            Koch-Instituts.
                            <br/>
                            <br/>
                            Aufgrund der kontinuierlichen Aktualisierungen der Impfempfehlungen raten
                            wir
                            dazu, Ihren Impfstatus regelmäßig mit Mein-Impfrechner zu kontrollieren.
                            <br/>
                            <br/>
                        </div>

                        <button className="accordion">Welche Corona-Testverfahren gibt es?</button>
                        <div className="panel">
                            <br/>
                            <br/>
                            <h2> PCR-Test
                            </h2>
                            <br/>
                            Der PCR-Test gilt als das zuverlässigste Verfahren, um einen Verdacht auf eine Infektion mit
                            SARS-CoV-2 abzuklären. Der Test wird durch medizinisches Personal entnommen und die
                            Auswertung erfolgt im Labor. Das Ergebnis in der Regel innerhalb von 24 Stunden vor.
                            <br/>
                            <br/>
                            Ablauf: Für den PCR-Test wird in der Regel eine Probe (in der Regel ein Abstrich) aus den
                            Schleimhäuten der Atemwege entnommen. Der Abstrich erfolgt aus dem Mund- und/oder aus dem
                            Nasen-Rachenraum. Weiterhin können Proben durch Hustenauswurf, Spülungen oder die Entnahme
                            von Sekret aus der Luftröhre gewonnen werden. Welche Methode der Probenentnahme im
                            Einzelfall gewählt wird, entscheidet die medizinische Fachperson.
                            Anschließend wird die Probe mit dem PCR-Verfahren in einem Labor analysiert. Mit dem
                            Verfahren der PCR wird Erbmaterial des Virus stark vervielfältigt, sodass es auch in
                            geringen Mengen nachgewiesen werden kann. Das Ergebnis wird in der Regel innerhalb von 24
                            Stunden ausgewertet und übermittelt.
                            <br/>
                            <br/>
                            Ein positiver PCR-Test stellt eine gesicherte Diagnose für eine Infektion mit dem
                            Coronavirus SARS-CoV-2 dar.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.infektionsschutz.de/coronavirus/tests-auf-sars-cov-2/">www.infektionsschutz.de/</a>
                            <br/>
                            <br/>
                            <br/>
                            <h2> PoC-NAT-Tests
                            </h2>
                            <br/>
                            Der PoC-NAT-Test ist ein Test, der auf derselben Technik (NAT) wie der PCR-Test basiert. Der
                            Test kann jedoch vor Ort (Point of Care), also patientennah und kurzfristig vor Ort
                            ausgewertet werden. Daher ist er in der Anwendung nicht auf ein Labor angewiesen
                            <br/>
                            <br/>
                            Ablauf: Für den PCR-Test wird in der Regel eine Probe (in der Regel ein Abstrich) aus den
                            Schleimhäuten der Atemwege entnommen. Der Abstrich erfolgt aus dem Mund- und/oder aus dem
                            Nasen-Rachenraum. Weiterhin können Proben durch Hustenauswurf, Spülungen oder die Entnahme
                            von Sekret aus der Luftröhre gewonnen werden. Welche Methode der Probenentnahme im
                            Einzelfall gewählt wird, entscheidet die medizinische Fachperson.
                            <br/>
                            Anschließend wird die Probe in einem speziellen (NAT) Verfahren analysiert. Mit dem
                            Verfahren der PCR wird Erbmaterial des Virus stark vervielfältigt, sodass es auch in
                            geringen Mengen nachgewiesen werden kann. Das Ergebnis liegt in der Regel innerhalb von 15
                            Min vor.
                            <br/>
                            <br/>
                            Ein positiver PoC-NAT-Tests stellt eine gesicherte Diagnose für eine Infektion mit dem
                            Coronavirus SARS-CoV-2 dar.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.bundesgesundheitsministerium.de/coronavirus/nationale-teststrategie/faq-covid-19-tests.html#c20484">BMG</a>
                            <br/>
                            <br/>
                            <br/>
                            <h2> Antigen-Schnelltest
                            </h2>
                            <br/>
                            Der Test wird durch geschultes Personal entnommen. Die Auswertung der Testergebnisse erfolgt
                            vor Ort in der Regel innerhalb von 15 bis 30 Minuten.
                            <br/>
                            <br/>
                            Ablauf: Beim Antigen-Schnelltest wird von geschulten Personen eine Probe aus den
                            Schleimhäuten der Atemwege entnommen. Der Abstrich erfolgt aus dem Mund- und/oder aus dem
                            Nasen-Rachenraum. Die Probe wird anschließend auf einen Teststreifen gegeben, der innerhalb
                            von 15 bis 30 Minuten das Ergebnis anzeigt.
                            <br/>
                            <br/>
                            Ein positiver Schnelltest ist meldepflichtig, aber stellt lediglich einen Verdacht und keine
                            Diagnose für eine Infektion mit dem Coronavirus SARS-CoV-2 dar. Der Antigen-Schnelltest
                            sollte im Falle eines positiven Ergebnisses mit einem PCR-Test bestätigt werden.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.infektionsschutz.de/coronavirus/tests-auf-sars-cov-2/">www.infektionsschutz.de</a>
                            <br/>
                            <br/>
                            <b> Davon zu unterscheiden sind Antigen-Selbsttests, die Privatpersonen zur Eigenanwendung
                                dienen.
                            </b>
                            <br/>
                            <br/>
                            <br/>
                            <h2> Antigen-Selbsttest
                            </h2>
                            <br/>
                            Selbsttests dienen der Anwendung durch Privatpersonen. Das Testergebnis liegt in der Regel
                            nach 15 bis 30 Minuten vor.
                            <br/>
                            <br/>
                            Ablauf: Bei den meisten Tests erfolgt die Probenentnahme per Abstrich aus dem vorderen
                            Nasenbereich. Darüber hinaus kann das Probenmaterial durch Spucken, Gurgeln oder Lutschen
                            gewonnen werden. Die genaue Durchführung der Selbsttests variiert mit der Testart und ist in
                            den beiliegenden Anleitungen beschrieben. Wie auch beim Antigen-Schnelltest liegt das
                            Testergebnis nach 15 bis 30 Minuten vor.
                            <br/>
                            <br/>
                            Ein positiver Selbsttest ist nicht meldepflichtig und stellt lediglich einen Verdacht und
                            keine Diagnose für eine Infektion mit dem Coronavirus SARS-CoV-2 dar. Man sollte sich jedoch
                            unverzüglich mit dem Hausarzt oder einem geeigneten Testzentrum in Verbindung setzen, um das
                            Ergebnis zu überprüfen.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.infektionsschutz.de/coronavirus/tests-auf-sars-cov-2/">www.infektionsschutz.de</a>
                            <br/>
                            <br/>
                            <br/>
                            <h2> Antikörpertest
                            </h2>
                            <br/>
                            Beim Antikörper-Test werden spezifische Antikörper (Eiweiße) im Blut bzw. Serum
                            nachgewiesen. Die Blutprobe wird durch medizinisches Personal entnommen und die Auswertung
                            erfolgt im Labor.
                            <br/>
                            <br/>
                            Anders als bei den anderen Testverfahren kann der Antikörpertest auch eine durchgemachte
                            Infektion nachweisen, denn die Antikörper entwickeln sich in der Regel ein bis zwei Wochen
                            nach der Infektion. Jedoch nimmt die Menge der Antikörper insbesondere bei Personen mit
                            einem milden Verlauf im Laufe der Zeit ab.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.impfen-info.de/mediathek/fragen-antworten/?tx_sschfaqtool_pi1%5Baction%5D=list&tx_sschfaqtool_pi1%5Bcontroller%5D=FAQ&tx_sschfaqtool_pi1%5Bfaq%5D=4695&cHash=bf633a8342fd6d9561b3ef32d84b8d18">BZgA</a>
                            <br/>
                            <br/>
                            Ein positiver Antikörpertest gilt als Nachweis für eine durchgemachte Infektion mit dem
                            Coronavirus SARS-CoV-2, lässt jedoch keine eindeutige Aussage zur Infektiosität und den
                            Zeitpunkt der Infektion zu.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.infektionsschutz.de/coronavirus/tests-auf-sars-cov-2/">www.infektionsschutz.de</a>
                            <br/>
                            <br/>
                        </div>

                        <button className="accordion">Was ist ein Genesenennachweis?</button>
                        <div className="panel">
                            <br/>
                            Personen, die eine bestätigte Infektion mit dem Coronavirus SARS-CoV-2 durchgemacht haben,
                            haben einen Anspruch auf ein Genesenenzertifikat. Voraussetzung ist der Nachweis eines
                            positiven Erregernachweises (PCR, PoC-PCR). Der Befund darf maximal 90 Tage alt sein und
                            muss mindestens 28 Tage zurückliegen.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Genesenennachweis.html">Robert
                                Koch-Insitut</a>

                            <br/>
                            <br/>
                            Sowohl Genesenenzertifikate als auch Genesenenimpfzertifikate können grundsätzlich in
                            Apotheken, Arztpraxen und Impfzentren ausgestellt werden. Die Anbieter können jedoch
                            frei entscheiden, ob sie diesen Service anbieten wollen. Die Zertifikate werden verfügen
                            über einen QR-Code, der in der CovPass-App oder Corona-Warn-App hinterlegt werden kann.
                            <br/>
                            <br/>
                            Quelle:
                            <a href="https://www.bundesgesundheitsministerium.de/coronavirus/faq-covid-19-impfung/faq-digitaler-impfnachweis.html#c21726">Bundesgesundheitsministerium</a>
                            <br/>
                            <br/>
                        </div>

                        <button className="accordion">Warum sollte ich mich impfen lassen?</button>
                        <div className="panel">
                            <br/>
                            Niemand kann vorhersagen, ob eine COVID-19-Erkrankung mild oder schwer verläuft. Am
                            besten ist es daher, <b>sich und andere</b> bestmöglich zu schützen und sich gegen
                            das
                            Virus SARS-CoV-2 impfen zu lassen.
                            <br/>
                            <b>Die Wahrscheinlichkeit, schwer an COVID-19 zu erkranken, ist bei den
                                vollständig
                                gegen COVID-19 geimpften Personen um etwa 90% geringer als bei den nicht
                                geimpften Personen.</b>
                            <br/>
                            <br/>
                            Quelle:
                            <a target="_blank"
                               href="https://www.zusammengegencorona.de/impfen/impfstoffe/wirksamkeit-und-sicherheit/#id-609840c1-b495-5dfc-96ee-802061b1fac4">Zusammen
                                gegen Corona(BMG)</a>
                            <br/>
                            <br/>
                            Alle Menschen, unabhängig von Geschlecht und Alter können schwer
                            an
                            COVID-19 erkranken. Neben schweren Krankheitsverläufen sind auch
                            Langzeitfolgen möglich. Nach einer Schätzung der Deutschen
                            Gesellschaft für Pneumologie und Beatmungsmedizin leidet jede
                            zehnte
                            erkrankte Person an Spätfolgen einer COVID-19-Erkrankung.
                            <br/>
                            <br/>
                            Dennoch sind einige Menschen verunsichert und befürchten
                            Impfschäden durch die Corona-Schutzimpfung. Dabei liegt
                            das
                            Risiko hierfür bei gerade einmal 0,02 Prozent.
                            Deutlich größer ist dagegen die Gefahr für ungeimpfte
                            Personen, schwere Komplikationen in Folge der
                            COVID-19-Erkrankung zu entwickeln.
                            <br/>
                            <br/>
                            Neben dem Schutz für die eigene Gesundheit und
                            die
                            Gesundheit anderer, hilft jede Impfung die
                            Pandemie
                            einzudämmen. Das ist gerade mit Blick auf das
                            dynamische Infektionsgeschehen die neuen
                            Virusvarianten wichtig. Darüber hinaus entlastet
                            Impfen unser Gesundheitssystem, denn je mehr
                            Menschen vollständig geimpft sind, desto weniger
                            schwere Verläufe gibt es, die im Krankenhaus
                            (intensivmedizinisch) behandelt werden müssen.
                            <br/>
                            <br/>
                            Quelle:
                            <a target="_blank"
                               href="https://www.zusammengegencorona.de/impfen/aufklaerung-zum-impftermin/10-gruende-sich-jetzt-gegen-das-coronavirus-impfen-zu-lassen/">Zusammen
                                gegen Corona(BMG)</a>
                            <br/>
                            <br/>
                        </div>


                        <br/>
                        <br/>
                        <br/>

                    </div>
                </div>
                <Footer subpage={this.props.subpage}/></div>
        )
    }
}

export default Faq;