import React from "react";
import {Link} from "react-router-dom";
import Leiste from "./leiste";
import Footer from "./footer";

class Information extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Leiste subpage={this.props.subpage}  main_page={"gray"} faq={"gray"} information={"black"}  style={{"position":"relative"}}/>
            <div style={{"position":"relative"}}>
                <div className="container main_page_text">
                    <h1 style={{textAlign: "center", fontWeight: "bold"}}>Informationen</h1>
                    <br/>
                        <br/>
                            <h2 id="dr">Fachwissenschaftliche Begleitung</h2>
                            Besonderer Dank gilt <b>Herrn Prof. Dr. med. Theodor Windhorst</b>, langjähriger
                            Ehrenpräsident der Ärztekammer
                            Westfalen-Lippe und medizinischer Leiter des städtischen Impfzentrums Bielefeld,
                            für seine Unterstützung und fachliche Begleitung.
                            <br/>
                                <br/>
                                    <br/>
                                        <h2>Datenschutz und Sicherheit</h2>
                                        Es werden keine Daten an uns
                                        oder Dritte übermittelt.
                                        Ihre Daten (Cookies) werden nur im Zeitraum Ihres Besuchs im Browser
                                        zwischengespeichert und anschließend gelöscht.
                                        Darüber hinaus ist der Impfrechner durch ein HTTPS/SSL Zertifikat verschlüsselt,
                                        damit niemand Ihre Daten abgreifen
                                        oder manipulieren kann.
                                        Unser Tool <Link to={this.props.subpage + "/"} style={{color: "white", fontweight: "bold"}}>mein-impfrechner.de</Link> soll
                                        Ihnen helfen, die Masse an Informationen zu bündeln und eine einfache
                                        Lösung bieten, die für Sie passende Impfempfehlung zu ermitteln.
                                        Wir möchten uns nicht bereichern, daher ist der Rechner für alle kostenlos
                                        zugänglich (Open Source) und der
                                        Programmcode im GitHub einsehbar.
                                        <br/>
                                            <br/>
                                                <br/>
                                                    <h2 style={{fontWeight: "bold"}}>Informationsquellen</h2>
                                                    <a target="_blank"
                                                       href="https://www.infektionsschutz.de/coronavirus/schutzimpfung/">www.infektionsschutz.de</a>
                                                    <br/>
                                                        <b>Infektionsschutz</b> ist ein Informationsangebot der
                                                        Bundeszentrale für gesundheitliche Aufklärung (BZgA) mit
                                                        verlässlichen, fachlich fundierten und aktuellen Informationen.

                                                        <br/>
                                                            <br/>
                                                                <a target="_blank"
                                                                   href="https://www.bundesgesundheitsministerium.de/coronavirus.html">www.bundesgesundheitsministerium.de</a>
                                                                <br/>
                                                                    Webseite des <b>Bundesministeriums für Gesundheit
                                                                    (BMG)</b>. Das BMG ist die oberste Bundesbehörde der
                                                                    Bundesrepublik Deutschland.
                                                                    Das BMG hat die Dienst- und Fachaufsicht über
                                                                    folgende Behörden: Bundesinstitut für Arzneimittel
                                                                    und Medizinprodukte (BfArM),
                                                                    Bundeszentrale für gesundheitliche Aufklärung (BZgA)
                                                                    in Köln, Paul-Ehrlich-Institut (PEI), Robert
                                                                    Koch-Institut (RKI)


                                                                    <br/>
                                                                        <br/>
                                                                            <a target="_blank"
                                                                               href="https://www.rki.de/DE/Content/Infekt/Impfen/ImpfungenAZ/COVID-19/Impfempfehlung-Zusfassung.html">www.rki.de</a>
                                                                            <br/>
                                                                                Die <b> Ständige Impfkommission
                                                                                (STIKO)</b> ist Expertengruppe in der
                                                                                Bundesrepublik Deutschland, die beim
                                                                                Robert
                                                                                Koch-Institut in Berlin angesiedelt ist.
                                                                                Die Kommission beschäftigt sich mit den
                                                                                gesundheitspolitisch wichtigen Fragen
                                                                                zu Schutzimpfungen und
                                                                                Infektionskrankheiten in Forschung und
                                                                                Praxis und erarbeiten entsprechende
                                                                                Empfehlungen.

                                                                                <br/>
                                                                                    <br/>
                                                                                        <a target="_blank"
                                                                                           href="https://www.pei.de/DE/home/home-node.html">www.pei.de</a>
                                                                                        <br/>
                                                                                            Webseite des <b>Paul-Ehrlich-Instituts
                                                                                            (PEI)</b>. Das PEI ist das
                                                                                            deutsche Bundesinstitut für
                                                                                            Impfstoffe und
                                                                                            biomedizinische
                                                                                            Arzneimittel.

                                                                                            <br/>
                                                                                                <br/>
                                                                                                    <a target="_blank"
                                                                                                       href="https://www.rki.de/DE/Home/homepage_node.html">www.rki.de</a>
                                                                                                    <br/>
                                                                                                        Das <b>Robert
                                                                                                        Koch-Institut
                                                                                                        (RKI)</b> erfasst
                                                                                                        kontinuierlich
                                                                                                        die aktuelle
                                                                                                        COVID-19-Lage,
                                                                                                        bewertet alle
                                                                                                        Informationen
                                                                                                        und schätzt das
                                                                                                        Risiko für die
                                                                                                        Bevölkerung in
                                                                                                        Deutschland ein.
                                                                                                        Darüber hinaus
                                                                                                        stellt das RKI
                                                                                                        umfassende
                                                                                                        Empfehlungen
                                                                                                        für die
                                                                                                        Fachöffentlichkeit
                                                                                                        zur Verfügung
                                                                                                        und gibt einen
                                                                                                        Überblick über
                                                                                                        eigene
                                                                                                        Forschungsvorhaben.

                                                                                                        <br/>
                                                                                                            <br/>
                                                                                                                <a target="_blank"
                                                                                                                   href="https://www.zusammengegencorona.de/">www.zusammengegencorona.de</a>
                                                                                                                <br/>
                                                                                                                    <b>Zusammengegencorona</b> liefert
                                                                                                                    und
                                                                                                                    verlässliche
                                                                                                                    Informationen
                                                                                                                    rund
                                                                                                                    um
                                                                                                                    das
                                                                                                                    Thema
                                                                                                                    Corona.
                                                                                                                    Zusammengegencorona
                                                                                                                    ist
                                                                                                                    eine
                                                                                                                    Initiative
                                                                                                                    der
                                                                                                                    BZgA.
                </div>
            </div> <Footer subpage={this.props.subpage} />
            </div>
        )}
}

export default Information;