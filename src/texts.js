import React from "react";
import {CreateDateStringModified, parseDate} from "./date_operations";

export const DATE_OPTIONS = {day: '2-digit', month: '2-digit', year: 'numeric'};

export default function Appointment_asbowl() {
    return (
        <div style={{textAlign: "center"}}>
            <br/>
            <button type="button" onClick={() => window.open('https://www.terminland.eu/1-2-impfung/', '_blank')}
                    className="btn btn-warning" style={{
                "width": "50%",
                fontSize: "1em",
                backgroundColor: "#fff3cd",
                color: "#664d03",
                border: "none",
                borderColor: "#ffecb5",
                borderWidth: "3px"
            }}>Terminbuchung
            </button>
        </div>
    )
}

export function Error() {
    // #1
    return (<div>
        Basierend auf Ihren Angaben ist es uns derzeit nicht möglich, eine generelle Empfehlung auszusprechen. Ihre
        persönliche Situation erfordert eine ärztliche Einzelfallprüfung, um eine valide Aussage treffen zu können. Wir
        bitten um Ihr Verständnis.</div>)
}

export function Really_old() {
    // #2
    return (<div>
        <b>Bitte überprüfen Sie Ihre Angaben</b>. Wenn Sie schon so lange gelebt haben, dann haut Sie auch Corona nicht
        mehr aus den Socken.
    </div>)

}

export function No_further_recommendation() {
    // #3
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren Angaben wird für Sie <b>keine
        Impfempfehlung</b> ausgesprochen, da Sie aktuell <b>ausreichend geschützt</b> sind.
    </div>)
}

export function No_recommendation_too_young() {
    // #4
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung wird für Sie aktuell <b>keine
        Impfempfehlung</b> ausgesprochen, <b>da Sie unter 5 Jahre alt sind</b>. <br/>
        * Im Zweifelsfall holen Sie sich ärztlichen Rat.
    </div>)
}


export function No_recommendation_symptoms() {
    // #6
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung sollten Sie mit der Impfung warten, bis die Symptome abklingen.
        Aktuell wird ein Impftermin <b>vier Wochen nach Ihrem individuellen Symptomende empfohlen</b>. <br/><br/>
        *Sollten Ihre Symptome länger andauern, besprechen Sie Ihre persönliche Situation mit einer Ärztin / einem Arzt.
    </div>)
}

export function Contact_dr() {
    // #7
    return (<div>
        Basierend auf der derzeitigen STIKO- Empfehlung und Ihren Angaben, können wir leider keine generelle
        Impfempfehlung aussprechen. Bitte besprechen Sie Ihre persönliche Situation mit einer Ärztin / einem Arzt.
    </div>)
}

export function Contact_dr_young() {
    // #8
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren Angaben können wir leider keine generelle
        Impfempfehlung aussprechen. Bitte besprechen Sie Ihre persönliche Situation mit einer Kinderärztin / einem
        Kinderarzt.
    </div>)
}

export function Recommendation_young(props) {
    // #9
    return (
        <div>
            Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine
            Impfung ("Grundimmunisierung") durchzuführen. <br/><br/>
            Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
            Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
        </div>)
}

export function Recommendation_young_no_risk_group(props) {
    // #10
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben, liegt für Ihre Altersgruppe keine
        generelle Impfempfehlung vor. <br/>
        Auf individuellen Wunsch der Kinder und Sorgeberechtigten ist eine Impfung nach ärztlicher Aufklärung
        ab <CreateDateStringModified date={props.date}/> möglich. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first(props) {
    // #11
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung
        (Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first_alternative(props) {
    // #12
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)
}

export function Next_possible_date_first_infection(props) {
    // #13
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung
        (Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab dem <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first_infection_alternative(props) {
    // #14
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)
}

export function Second_vaccination_range(props) {

    let now = new Date();
    now.setHours(0, 0, 0, 0);

    // todo wenn zwei gleiche Tage, dann sollte in diesen Fall gegangen werden
    if ((parseDate(props.date_second) <= now) || (parseDate(props.date_second) === undefined) || (parseDate(props.date_first).getDate() === parseDate(props.date_second).getDate())) {
        // 15.1
        return (<div>
            Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine
            Impfung
            (Vervollständigung der Grundimmunisierung) durchzuführen. <br/><br/>
            Sie können sich ab <CreateDateStringModified date={props.date_first}/> impfen lassen.<br/><br/>
            Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
        </div>)
    } else {
        // 15.2
        return (<div>
            Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine
            Impfung
            (Vervollständigung der Grundimmunisierung) durchzuführen. <br/><br/>
            Sie können sich ab <CreateDateStringModified date={props.date_first}/> impfen lassen.<br/>
            Idealerweise wählen Sie einen Termin im Zeitraum vom <b>{props.date_first}</b> bis
            zum <b>{props.date_second}.</b> <br/>
            Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
        </div>)
    }
}


export function Second_vaccination_range_alternative(props) {

    let now = new Date();
    now.setHours(0, 0, 0, 0);

    if ((parseDate(props.date_second) <= now) || (parseDate(props.date_second) === undefined) || (parseDate(props.date_first).getDate() === parseDate(props.date_second).getDate())) {
        // #16.1
        return (<div> Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified
            date={props.date_first}/> impfen
            lassen. </div>)
    } else {
        // #16.2
        return (<div>
            Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified
            date={props.date_first}/> impfen
            lassen. <br/>
            Idealerweise wählen Sie einen Termin im Zeitraum vom <b>{props.date_first}</b> bis
            zum <b>{props.date_second}</b>.
        </div>)
    }
}

export function Next_possible_date_second_dose_infection(props) {
    // #17
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung
        (Vervollständigung der Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_second_dose_infection_alternative(props) {
    // #18
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)
}

export function Next_possible_date_booster(props) {
    // #19
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung
        (Boosterimpfung/ Auffrischimpfung) durchzuführen. <br/><br/>
        Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_booster_alternative(props) {
    // #20
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)
}

export function Next_possible_date_booster_infection(props) {
    // #21
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine
        „Booster-/Auffrischimpfung“ durchzuführen. <br/><br/>
        Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_booster_infection_alternative(props) {
    // #22
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)

}

export function Alternative() {
    // #23
    return (<div>
        Weiterhin kommt für Sie folgende Option in Betracht:
    </div>)
}


export function No_recommendation_too_young_past_infection() {
    // #24
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung wird für Sie aktuell <b>keine
        Impfempfehlung</b> ausgesprochen, <b>da Sie unter 12 Jahre alt und bereits genesen sind.</b><br/>
        * Im Zweifelsfall holen Sie sich ärztlichen Rat.
    </div>)
}

export function Next_possible_date_booster_2(props) {
    // #25
    return (<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen
        wir Ihnen, eine "2. Booster-/Auffrischimpfung" durchzuführen. <br/><br/>
        Sie können sich ab <CreateDateStringModified date={props.date}/> impfen lassen.<br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_booster_2_alternative(props) {
    // #26
    return (<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab <CreateDateStringModified date={props.date}/> impfen
        lassen.
    </div>)
}






export function Vaccination_1_instruction() {
    // #27
    return (<span>
        Welcher Impfstoff wurde bei Ihrer <b>ersten</b> Corona-Schutzimpfung verimpft?
    </span>)
}

export function Vaccination_2_instruction() {
    // #28
    return (<span>
        Welcher Impfstoff wurde bei Ihrer <b>zweiten</b> Corona-Schutzimpfung verimpft?
    </span>)
}

export function Vaccination_3_instruction() {
    // #29
    return (<span>
        Welcher Impfstoff wurde bei Ihrer <b>dritten</b> Corona-Schutzimpfung verimpft?
    </span>)
}

export function Vaccinated_instruction() {
    // #30
    return (<span>
        Haben Sie bereits eine Impfung gegen das Coronavirus (SARS-CoV-2) erhalten?
    </span>)
}

export function Pregnancy_week_instruction() {
    // #31
    return (<span>
        Befinden Sie sich derzeit noch im ersten Schwangerschaftsdrittel (1.-13. Schwangerschaftswoche)?
    </span>)
}

export function Past_infection_instruction() {
    // #32
    return (<span>
        Wurden Sie bereits positiv auf das Coronavirus (SARS-CoV-2) getestet (Kein Selbsttest)?
    </span>)
}

export function Risk_group_instruction() {
    // #33
    return (<span>
        Sie sind aktuell einer Risikogruppe angehörig oder haben regelmäßig Kontakt zu Personen einer Risikogruppe?
    </span>)
}

export function Pregnant_instruction() {
    // #34
    return (<span>
        Sind Sie zum aktuellen Zeitpunkt schwanger?
    </span>)
}

export function Exception_instruction() {
    // #35
    return (<span>
        Bitte geben Sie an ob eine oder mehrere der folgenden Optionen auf Sie zutreffen (Mehrfachauswahl möglich):
    </span>)
}

export function Got_unregistered_vaccination_instruction() {
    // #36
    return (<span>
        Wurden Sie bereits mit einem in Deutschland <b>nicht</b> zulässigen Corona-Impfstoff geimpft?
    </span>)
}

export function Breast_feeding_instruction() {
    // #37
    return (<span>
        Befinden Sie sich aktuell in Stillzeit?
    </span>)
}

export function Unregistered_vaccination_date_instruction() {
    // #38
    return (<span>
        Wann haben Sie die letzte <b>nicht</b> zulässige Corona-Schutzimpfung erhalten?
    </span>)
}

export function Symptoms_registered_instruction() {
    // #39
    return (<span>
        Hatten oder haben Sie Symptome in Folge Ihrer Corona-Infektion entwickelt?
    </span>)
}

export function Number_vaccinations_instruction() {
    // #40
    return (<span>
        Wie viele zugelassene Corona-Schutzimpfungen haben Sie erhalten?
    </span>)
}

export function Infection_date_instruction() {
    // #41
    return (<span>
        Wann wurden Sie erstmalig positiv auf das Coronavirus getestet (kein Selbsttest)?
    </span>)
}

export function Symptoms_end_date_instruction() {
    // #42
    return (<span>
        Wann haben ihre Symptome aufgehört?
    </span>)
}

export function Age_instruction() {
    // #43
    return (<span>
        Wie alt sind Sie?
    </span>)
}

export function Pregnancy_week_exact_instruction() {
    // #44
    return (<span>
        In der wievielten Schwangerschaftswoche befinden Sie sich?
    </span>)
}

export function Disclaimer() {
    // #45
    return (<div>
        <b>Haftungsausschluss:</b> Die Inhalte dieser Seite dienen ausschließlich der allgemeinen Information der
        Öffentlichkeit. mein-impfrechner.de übernimmt keine Verantwortung für die Richtigkeit und Vollständigkeit der
        Daten und Informationen, die auf dieser Seite angegeben oder verlinkt werden, für Abweichungen von
        Originaldaten,
        Übertragungsfehler oder Veränderung der Informationen durch Dritte.
    </div>)
}

export function Start_header() {
    // #46
    return (<span>Impfrechner</span>)
}

export function Vaccination_1_header() {
    // #47
    return (<span>1. Corona-Schutzimpfung</span>)
}

export function Vaccination_2_header() {
    // #48
    return (<span>2. Corona-Schutzimpfung</span>)
}

export function Vaccinated_header() {
    // #49
    return (<span>Impfstatus</span>)
}

export function Exception_header() {
    // #50
    return (<span>Besonders gefährdete Personen</span>)
}

export function Pregnancy_week_header() {
    // #51
    return (<span>Schwangerschaftswoche</span>)
}

export function Past_infection_header() {
    // #52
    return (<span>Genesenenstatus</span>)
}

export function Risk_group_header() {
    // #53
    return (<span>Risikogruppe</span>)
}

export function Pregnant_header() {
    // #54
    return (<span>Schwangerschaft</span>)
}

export function Got_unregistered_vaccination_header() {
    // #55
    return (<span>Impfstoff ohne STIKO-Zulassung</span>)
}

export function Breast_feeding_header() {
    // #56
    return (<span>Stillend</span>)
}

export function Unregistered_vaccination_date_header() {
    // #57
    return (<span>Impfstoff ohne STIKO-Zulassung</span>)
}

export function Symptoms_registered_header() {
    // #58
    return (<span>Symptome</span>)
}

export function Number_vaccinations_header() {
    // #59
    return (<span>Anzahl Corona-Schutzimpfungen</span>)
}

export function Infection_date_header() {
    // #60
    return (<span>Erkrankungsdatum</span>)
}

export function Symptoms_end_date_header() {
    // #61
    return (<span>Ende der Symptomatik</span>)
}

export function Age_header() {
    // #62
    return (<span>Alter</span>)
}

export function Pregnancy_week_exact_header() {
    // #63
    return (<span>Schwangerschaftswoche</span>)
}

// todo new: add number
export function Vaccination_3_header() {
    return (<span>3. Corona-Schutzimpfung</span>)
}


export const texts_german = {
    "date_label": "Datum",
    "exception": {
        "label_immun_def": "Vorliegen einer Immunschwäche",
        "label_healthcare": "Betreut bzw. wohnhaft in medizinischer oder pflegerischer Einrichtung",
        "label_healthcare_staff": "Tätigkeit in medizinischer oder pflegerischer Einrichtung",
        "other": "Sonstiges"
    },
    "form_validation": {
        "valid": "Eingabe ist valide",
        "invalid": "Bitte machen Sie eine valide Eingabe, um fortzufahren"
    },
    "vaccination_brand_date": {
        "vaccination_label": "Impfstoff",
        "vaccination_default": "bitte auswählen",
        "date_labe": "Datum",
    },
    "yes": "Ja",
    "no": "Nein",
    "past_infection": {
        "no": "Nein",
        "yes_single": "Ja, einmal",
        "yes_multiple": "Ja, mehrfach",
    },
    "symptoms_registered": {
        "never": "Nein, ich hatte nie Symptome",
        "still": "Ja, ich habe immer noch Symptome",
        "past": "Ja, ich hatte Symptome"
    },
    "number_vaccinations": {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4"
    },
    "age": {
        "age_placeholder": "Alter"
    },
    "pregnancy_week_exact": {
        "pregnancy_week_exact_placeholder": "Schwangerschaftswoche"
    },
    "vaccines": {
        "biontec": "BioNTech (Comirnaty®)",
        "moderna": "Moderna (Spikevax®)",
        "astra": "AstraZeneca (Vaxeriva®)",
        "johnson": "Janssen-Cilag (Janssen®)",
        "novavax": "Novavax (Nuvaxovid®)"
    },
    "recommendation": "Empfehlung",
    "your_data": "Ihre Angaben"
};

export const constants = {
    'age_groups': {
        // the two values specify the range of age, e.g. [13,200] means everybody with an age of 13 up to 200
        'age_group_1': [0, 4],
        'age_group_2': [5, 11],
        'age_group_3': [12, 17],
        'age_group_4': [18, 29],
        'age_group_5': [30, 59],
        'age_group_6': [60, 199],
        'age_group_7': [200, Number.MAX_SAFE_INTEGER],
    },
    'symptoms': {
        'never': 0,
        'still': 1,
        'past': 2
    },
}

export const modal_risk_group_title = "Risikogruppe Corona";
export const modal_risk_group_text = <div>
    <br/>
    Zur Risikogruppe gehören insbesondere alte und ältere Menschen sowie Menschen mit verschiedenen Grunderkrankungen
    und Schwangere.
    Folgende Personengruppen haben ein erhöhtes Risiko für einen schweren Erkrankungsverlauf:
    <br/>
    <br/>
    <ul>
        <li>Ab einem Alter von 50 bis 60 Jahren steigt das Risiko für einen schweren Erkrankungsverlauf stetig an.
            Es gibt keine feste Altersgrenze, ab der man als besonders gefährdet eingestuft wird. Grundsätzlich gilt:
            Je älter eine Person ist, desto höher ist auch ihr Risiko schwer an Corona (SARS-CoV-2) zu erkranken.
        </li>
        <li>Personen mit Grunderkrankungen wie z. B. Herzkreislauferkrankungen, Diabetes, Erkrankungen des
            Atmungssystems,
            der Leber, der Niere, Krebserkrankungen oder mit vorliegenden Risikofaktoren wie z. B. starkem Übergewicht
            oder Rauchen haben ein höheres Risiko für einen schweren Krankheitsverlauf. Besonders betroffen sind
            erkrankte Personen
            mit unterdrücktem Immunsystem aufgrund ihrer Erkrankung oder der Einnahme von Medikamenten, die die
            Immunabwehr
            unterdrücken (z. B. Cortison).
        </li>
        <li>Nach aktuellem Kenntnisstand haben Schwangere ebenfalls ein erhöhtes Risiko eines schweren Verlaufs
            gegenüber Frauen der gleichen Altersgruppe, die nicht schwanger sind. Das gilt insbesondere für
            Schwangere mit vorbestehenden Risikofaktoren wie Bluthochdruck und starkem Übergewicht sowie vorbestehenden
            Vorerkrankungen.
        </li>
    </ul>
    <br/>
    <br/>
    <b>* Die Risikofaktoren für einen schweren Verlauf sind sehr komplex. Eine generelle Festlegung bzw. Definition
        einer Risikogruppe ist nicht möglich. Vielmehr erfordert dies eine individuelle Risikofaktoren-Bewertung durch
        eine medizinische Begutachtung.</b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank" href="http://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Risikogruppen.html">Robert
        Koch-Institut</a>
    <br/>
</div>;

export const modal_pregnant_title = "Schwangerschaft und Stillzeit";
export const modal_pregnant_text = <div>
    <b>Corona-Schutzimpfung für Schwangere:
    </b>
    <br/>
    <br/>
    Schwangere Frauen haben ein erhöhtes Risiko für einen schweren Krankheitsverlauf im Vergleich zu Nicht-Schwangeren.
    Im Falle von zusätzlich vorliegenden Vorerkrankungen erhöht sich das Risiko weiter. Die Corona-Schutzimpfung bietet
    Schwangeren einen wirksamen Schutz gegen schwere Krankheitsverläufe.
    <br/>
    <br/>
    Die STIKO empfiehlt die Corona-Schutzimpfung generell für Schwangere ab dem zweiten Schwangerschaftsdrittel (13.
    SSW). Die Empfehlung gilt gleichermaßen für ungeimpfte als auch unvollständig geimpfte Schwangere.
    Wenn die Schwangerschaft nach der bereits erfolgten Impfung festgestellt wurde, sollte die zweite Impfung ab dem
    zweiten Schwangerschaftsdrittel durchgeführt werden. Darüber hinaus wird auch Schwangeren eine Auffrischimpfung mit
    einem Mindestabstand von 3 Monaten zur letzten Impfstoffdosis empfohlen. Die Impfung sollte unabhängig vom Alter mit
    dem mRNA-Impfstoff Comirnaty® von BioNTech/Pfizer erfolgen.
    <br/>
    <br/>
    <b>Corona-Schutzimpfung für Stillende:
    </b>
    <br/>
    <br/>
    Die STIKO empfiehlt allen Stillenden eine Corona-Schutzimpfung während der Stillzeit. Die Impfung sollte unter
    Berücksichtigung der Altersgrenze mit einem der mRNA-Impfstoffe Comirnaty® (von BioNTech/Pfizer) oder Spikevax® (von
    Moderna) erfolgen.
    Eine Corona-Schutzimpfung von Stillenden ist bei unkompliziertem Verlauf auch im Wochenbett möglich.
    Darüber hinaus wird auch Stillenden eine Auffrischimpfung mit einem Mindestabstand von 3 Monaten zur letzten
    Impfstoffdosis empfohlen.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank"
       href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html">Robert
        Koch-Institut</a>
</div>;


export const modal_vaccinated_title = "Impfung";
export const modal_vaccinated_text = <div>
    Aktuell sind die Impfstoffe der folgenden Pharmaunternehmen für Deutschland zulässig:
    <ul>
        <li>BioNTech (Comirnaty)</li>
        <li>Moderna (Spikevax)</li>
        <li>AstraZeneca (Vaxeriva)</li>
        <li>Janssen-Cilag (Janssen)</li>
        <li>Novovax (Nuvaxovid)</li>
    </ul>
    *Die o.g. Impfstoffe sind Präparate, die eine gültige Zulassung der Europäischen Kommission besitzen. <b>Sie gibt
    keine Auskunft darüber, ob die Präparate auf dem Markt verfügbar sind.</b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank"
       href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html">Paul-Ehrlich-Institut</a>
</div>;


export const modal_pregnancy_week_title = "Impfung in der Schwangerschaft";
export const modal_pregnancy_week_text = <div>
    Die STIKO empfiehlt eine Corona-Schutzimpfung für ungeimpfte Schwangere ab dem 2. Trimenon (bzw. ab der 13.
    Schwangerschaftswoche) sowie für ungeimpfte Stillende.
    Die Grundimmunisierung soll mit zwei Dosen des COVID-19 Impfstoffs Comirnaty (Biontech) erfolgen.
    Schwangere sollen altersunabhängig mit Comirnaty (Biontech) und <b>nicht</b> mit (Moderna) geimpft werden. Wenn die
    Schwangerschaft nach bereits erfolgter Erstimpfung festgestellt wurde, sollte die Zweitimpfung dennoch erst ab dem
    2. Trimenon durchgeführt werden.
    Schwangeren Frauen, die bereits ihre Grundimmunisierung abgeschlossen haben, soll unabhängig vom Alter ab dem 2.
    Trimenon eine Auffrischimpfung mit dem mRNA-Impfstoff Comirnaty im Abstand von mindestens 3 Monaten zur letzten
    Impfstoffdosis angeboten werden.
    Stillenden sollen entsprechend der Altersempfehlung mit einem der Impfstoffe Comirnaty (Biontech) oder Spikevax
    (Moderna) geimpft werden.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank"
       href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html">Robert
        Koch-Institut</a>
</div>;


export const modal_got_unregistered_vaccination_title = "Nicht zugelassener Impfstoff";
export const modal_got_unregistered_vaccination_text = <div>
    Personen, die im Ausland bereits mit nicht in der EU zugelassenen COVID-19-Impfstoffen geimpft wurden, benötigen
    gemäß aktueller Rechtslage und unter Berücksichtigung der altersentsprechenden Impfempfehlungen eine erneute
    Impfserie, um in der EU den Status als Geimpfte zu erlangen. Für diese Einstufung wird (derzeit) eine vollständige
    Impfserie mit einem von der europäischen Zulassungsbehörde (EMA) zugelassenen Impfstoff benötigt. Eine aktuelle
    Liste der EU-zugelassenen COVID-19-Impfstoffe wie auch Informationen zur notwendigen Anzahl an Impfdosen sind auf
    den Internetseiten des Paul-Ehrlich-Instituts (PEI) zu finden.
    <br/>
    <br/>
    Diese Impfserie sollte in einem <b> Mindestabstand von ≥28 Tagen </b> begonnen werden.
    <br/>
    <br/>
    Quellen: &nbsp;
    <a target="_blank"
       href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16696900">
        Robert Koch-Institut
    </a>
    <br/>
    <a target="_blank"
       href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html;jsessionid=372E495A216B0DD332AA96F4617E5FE1.intranet241">
        Paul-Ehrlich-Institut
    </a>
</div>;


export const modal_past_infection_title = "Genesen";
export const modal_past_infection_text = <div>
    Neben der Corona-Schutzimpfung wird auch durch eine durchgemachte Corona (SARS-CoV-2) -Erkrankung ein körpereigener
    Schutz vor Corona aufgebaut. Aus diesem Grund ist auch bei Genesenen von einer Grundimmunität auszugehen.
    <br/>
    <br/>
    Neben der Corona-Schutzimpfung wird auch durch eine durchgemachte Corona (SARS-CoV-2) -Erkrankung ein körpereigener
    Schutz vor Corona aufgebaut. Aus diesem Grund ist auch bei Genesenen von einer Grundimmunität auszugehen.
    <br/>
    <br/>
    Als "Genesene" bezeichnet man Personen,
    <br/>
    die eine <b>gesicherte</b> SARS-CoV-2-Infektion (PCR, PoC-PCR etc.) durchgemacht haben <b> und </b>
    <br/>
    deren Testentnahme mindestens <b>28 Tage</b> zurückliegt <b> und </b>
    <br/>
    deren Testentnahme maximal <b>90 Tage</b> zurückliegt.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank"
       href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16072404">Robert
        Koch-Institut</a>
</div>;

export const modal_infection_date_title = "Erkrankungsdatum";
export const modal_infection_date_text = <div>
    Bitte geben Sie hier das Datum Ihrer gesicherten Corona- Infektion an.
    <br/>
    <br/>
    Das Datum bezieht sich auf das Ausstellungsdatums Ihres <b>ersten positiven Erregernachweises</b> (PCR-,
    PoC-PCR-Befund etc.). Bitte beachten Sie, dass Antigen- bzw. Schnelltests und Selbsttests unzulässig sind.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank"
       href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Genesenennachweis.html">Robert
        Koch-Institut</a>

</div>;

export const modal_quarantine_test_date_title = "Testentnahmedatum";
export const modal_quarantine_test_date_text = <div>
    <br/>
    Datum der Testentnahme des <b>ersten</b> positiven Tests.
    <br/>
    <b>(Kein Selbsttest!)</b>
    <br/>
    <br/>
    Nach aktueller <a target="_blank"
                      href="https://www.land.nrw/corona">Corona-Test-und-Quarantäneverordnung</a> verpflichten
    positive Testergebnisse von PCR-, PoC-PCR- und Schnelltests zur Quarantäne.
    <br/>
    <br/>
</div>;

export const modal_symptoms_registered_title = "Symptome";
export const modal_symptoms_registered_text = <div>
    Symptome ist der Sammelbegriff für die Anzeichen einer Krankheit.
    <br/>
    Die folgende Auflistung gibt einen Überblick über die typischen Symptome einer Coviderkrankung.
    <br/>
    <br/>
    Husten, Fieber, Schnupfen, Störung des Geruchs- und/oder Geschmackssinns, Halsschmerzen, Atemnot, Kopf- und
    Gliederschmerzen, Appetitlosigkeit, Gewichtsverlust, Übelkeit, Bauchschmerzen, Erbrechen, Durchfall,
    Lymphknotenschwellung, Bindehautentzündung, Hautausschlag, Teilnahmslosigkeit, Benommenheit.
    <br/>
    <br/>
    <b>*Die Risikofaktoren für einen schweren Verlauf sind sehr komplex. Eine generelle Festlegung bzw. Definition einer
        Risikogruppe ist nicht möglich. Vielmehr erfordert dies eine individuelle Risikofaktoren-Bewertung durch eine
        medizinische Begutachtung.
    </b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank" href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Steckbrief.html">Robert
        Koch-Institut</a>
</div>;


export const modal_symptoms_end_date_title = "Ende der Symptome";
export const modal_symptoms_end_date_text = <div>Das Ende der Symptome meint den Tag (Datum), ab dem Sie symptomfrei
    waren. Sollten Ihre Symptomatik länger andauern, wenden Sie sich bitte an Ihren Arzt. </div>;
