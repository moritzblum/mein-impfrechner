import React from "react";
import {Link} from "react-router-dom";
import Leiste from "./leiste";
import Footer from "./footer";

class Impressum extends React.Component {

    render() {
        return (
            <div>
                <Leiste subpage={this.props.subpage} style={{"position":"relative"}}/>

                <div className="container main_page_text">
                    <h1 style={{textAlign: "center", fontWeight: "bold"}}>Impressum</h1>

                    Ole Wienke & Moritz Blum <br/>
                    c/o Block Services <br/>
                    Stuttgarter Str. 106 <br/>
                    70736 Fellbach <br/>
                    Deutschland <br/>
                    E-Mail: webmaster@mein-impfrechner.de <br/>
                    Website: www.mein-impfrechner.de
                    <br/>
                    <br/>
                    <div id="disclaimer"><span style={{color: "white"}}><b>Haftungsausschluss</b></span>: Die Inhalte dieser
                        Seite dienen ausschließlich der allgemeinen Information der
                        Öffentlichkeit. mein-impfrechner.de übernimmt keine Verantwortung für die Richtigkeit und
                        Vollständigkeit der
                        Daten und Informationen, die auf dieser Seite angegeben oder verlinkt werden, für Abweichungen von
                        Originaldaten
                        Übertragungsfehler oder Veränderung der Informationen durch Dritte.
                    </div>

                    <br/>
                    <br/>
                    <h1 style={{textAlign: "center", fontWeight: "bold"}}>Kontakt</h1>
                    <br/>

                    Bei weiteren Fragen, melden Sie sich gerne über unser Kontaktformular bei uns:
                    <br/>
                    <br/>

                    <form action="mailto:webmaster@mein-impfrechner.de?subject=mein-impfrechner.de%20Kontaktformular"
                          method="post" encType="text/plain">
                        <div className="mb-3">
                            <label htmlFor="field_terms">Ihr Name:</label>
                            <input id="field_terms" type="text" className="form-control" name="NameVorname"
                                   value="" size="30" maxLength="50"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Ihr Anliegen:</label>
                            <textarea style={{fontSize: "1em"}} className="form-control" name="Message"
                                      id="exampleFormControlTextarea1" rows="4"/>
                        </div>
                        <br/>
                        <div className="mb-3 form-check">
                            <input type="checkbox" onChange="this.setCustomValidity('')"
                                   onInvalid="this.setCustomValidity('Bitte zustimmen, um fortzufahren.')"
                                   required className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Beim
                                Absenden werden deine Eingaben automatisch in
                                dein E-Mail-Programm übernommen und eine E-Mail erstellt. Außerdem
                                stimmst du hiermit unserer <Link to={this.props.subpage + "/datenschutz"}> <i
                                    className="fas fa-user-friends"/> Datenschutzerklärung</Link> zu.</label>
                        </div>
                        <br/>
                        <button className="button button_next" type="submit">
                            senden
                        </button>
                    </form>
                </div>
                <Footer subpage={this.props.subpage} />
            </div>
        )
    }
}

export default Impressum;