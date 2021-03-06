import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import {Disclaimer} from "./texts";

class Impressum extends React.Component {

    render() {
        window.scrollTo(0, 0);
        return (
            <div>
                <Navbar subpage={this.props.subpage} style={{"position":"relative"}}/>

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
                    <div id="disclaimer"><Disclaimer/></div>

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
                                   size="30" maxLength="50" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Ihr Anliegen:</label>
                            <textarea style={{fontSize: "1em"}} className="form-control" name="Message"
                                      id="exampleFormControlTextarea1" rows="4" />
                        </div>
                        <br/>
                        <div className="mb-3 form-check">
                            <input type="checkbox"
                                   required className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Beim
                                Absenden werden deine Eingaben automatisch in
                                dein E-Mail Programm übernommen und eine E-Mail erstellt. Außerdem
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