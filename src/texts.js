export function Next_possible_date_first_alternative(props){
    return(<div>Sie können sich
    mit <b>{props.vaccination_brand}</b> ab dem <b>{props.date}</b> impfen lassen.</div>)
}

export function Alternative(){
    return(<div>Weiterhin kommt für Sie folgende Option in Frage:</div>)
}

export function Really_old(){
    return(<div>Bitte überprüfen Sie Ihre Angaben. Wenn Sie wirklich schon so lange gelebt haben,
        dann haut Sie auch Corona nicht mehr aus den Socken.</div>)

}

export function No_recommendation_too_young(){
    return(<div>no_recommendation_too_young</div>)

}

export function No_recommendation_symptoms() {
    return(<div>Basierend auf der derzeitigen STIKO- Empfehlung sollten Sie mit der Impfung warten
        bis die Symptome abklingen. Aktuell wird ein Impftermin vier Wochen nach Ihrem individuellen Symptomende empfohlen.

        * Sollten Ihre Symptome länger andauern, besprechen Sie Ihre persönliche Situation mit einer Ärztin/ einem Arzt. </div>)
}

export function No_recommendation_pregnant(){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung,
        wird für Sie aktuell keine Impfempfehlung ausgesprochen,
        da Sie sich im ersten Trimenon befinden.

        * Im Zweifelsfall holen Sie sich ärztlichen Rat.</div>)
}

export function Recommendation_young(props){
    return(<div>{props.date} {props.vaccination_brand} Basierend auf der derzeitigen
        STIKO-Empfehlung, wird für Sie aktuell keine Impfempfehlung ausgesprochen, da Sie unter 5 Jahre alt sind.

        * Im Zweifelsfall holen Sie sich ärztlichen Rat.</div>)
}

export function Recommendation_young_no_risk_group(props){
    return(<div>{props.date} {props.vaccination_brand} Eingeschränkte Impfempfehlung. Der Impfstoff BioNTech
        (Comirnaty®) ist für die angegebene Altersgruppe zulässig, jedoch besteht aktuell noch keine generelle
        Impfempfehlung seitens der STIKO. Eine Impfung kann dennoch sinnvoll sein. Bitte besprechen Sie das
        weitere Vorgehen mit einer Kinderärztin oder einem Kinderarzt.</div>)
}

export function Next_possible_date_first(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben
        empfehlen wir Ihnen eine <b>„Erstimpfung“</b> durchzuführen. <br/><br/>

        Sie können sich ab dem <b>{props.date}</b> impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.</div>)
}

export function Next_possible_date_first_infection(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben
        empfehlen wir Ihnen eine „Erstimpfung“ durchzuführen.
        Sie können sich ab dem <b>{props.date}</b> impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.</div>)
}

export function Next_possible_date_first_infection_alternative(props){
    return(<div>Sie können sich mit {props.vaccination_brand} ab dem {props.date} impfen lassen.</div>)
}

export function No_further_recommendation(){
    return(<div>Basierend auf der derzeitigen STIKO- Empfehlung und Ihren Angaben, sind Sie aktuell ausreichend geschützt.</div>)
}

export function Contact_dr(){
    return(<div>Basierend auf der derzeitigen STIKO- Empfehlung und Ihren Angaben, können wir
        leider keine generelle Impfempfehlung aussprechen. Bitte besprechen Sie Ihre persönliche Situation mit
        einer Ärztin/ einem Arzt.</div>)
}

export function Second_vaccination_range(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben
        empfehlen wir Ihnen eine „Zweitimpfung“ durchzuführen.

        Sie können sich ab dem {props.date_first} impfen lassen.
        Idealer Weise wählen Sie einen Termin im Zeitraum vom {props.date_first} bis
        zum {props.date_second}.
        Für Sie wird folgender Impfstoff empfohlen: {props.vaccination_brand}.</div>)
}

export function Next_possible_date_second_dose_infection(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen
        Angaben empfehlen wir Ihnen eine zweite Impfung durchzuführen.
        Sie können sich ab dem {props.date} impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: {props.vaccination_brand}.</div>)
}

export function Next_possible_date_second_dose_infection_alternative(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen
        Angaben empfehlen wir Ihnen eine zweite Impfung durchzuführen.
        Sie können sich ab dem {props.date} impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: {props.vaccination_brand}.</div>)
}

export function Next_possible_date_booster_infection(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen
        Angaben empfehlen wir Ihnen eine „Booster-/Auffrischimpfung“ durchzuführen.
        Sie können sich ab dem {props.date} impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: {props.vaccination_brand}.</div>)
}

export function Next_possible_date_booster_infection_alternative(props){
    return(<div>Sie können sich mit {props.vaccination_brand} ab dem {props.date} impfen lassen.</div>)

}

export function Contact_dr_young(){
    return(<div>contact_dr_young - ausreichend geschützt, mit immun defizit kontaktiere arzt</div>)
}

export function Next_possible_date_booster(props){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben
        empfehlen wir Ihnen eine „Booster-/Auffrischimpfung“ durchzuführen.
        Sie können sich ab dem {props.date} impfen lassen.
        Für Sie wird folgender Impfstoff empfohlen: {props.vaccination_brand}.</div>)
}

export function Next_possible_date_booster_alternative(props){
    return(<div>Sie können sich mit {props.vaccination_brand} ab dem {props.date} impfen lassen</div>)
}

export function No_general_recommendation(){
    return(<div>Basierend auf der derzeitigen STIKO-Empfehlung und Ihren Angaben, wird für Sie
        aktuell keine Impfempfehlung ausgesprochen.

        * Im Zweifelsfall holen Sie sich ärztlichen Rat.</div>)
}

export function Error(){
    return(<div>Basierend auf Ihren Angaben ist es uns derzeit nicht möglich, eine generelle Empfehlung auszusprechen.
        Ihre persönliche Situation erfordert eine ärztliche Einzelfallprüfung, um eine valide Aussage zu
        treffen können. Wir bitten um Ihr Verständnis.</div>)
}

export function Second_vaccination_range_alternative(props){
    return(<div>Sie können sich mit {props.vaccination_brand}> ab dem {props.date_first} impfen lassen.
        Idealerweise wählen Sie einen Termin im Zeitraum vom {props.date_first} bis zum {props.date_second}</div>)
}

export const texts_german = {
    "start": {
        "header": "Impfrechner",
        "welcome": "Hier können Sie Ihren Impftermin berechnen",
        "data_storage": "Alle Daten bleiben im Browser"
    },
    "form_validation": {
        "valid": "Eingabe ist valide",
        "invalid" : "Bitte machen Sie eine valide Eingabe, um fortzufahren"
    },
    "vaccination_brand_date": {
        "instructions": "Welcher Impfstoff wurde bei Ihrer letzten Corona-Schutzimpfung verimpft?",
        "vaccination_label": "Impfstoff",
        "vaccination_instruction": "bitte auswählen",
        "other_vaccines": "andere",
        "info_vaccines": "Welcher Impfstoff, Erklärungen, ....",
        "date_labe": "Datum",
        "info_date": "Welches Datum, warum, wie, was"// ggf. nicht benötigt
    },
    "vaccination_1": {
        "header": "1. Corona-Schutzimpfung",
    },
    "vaccination_2": {
        "header": "2. Corona-Schutzimpfung",
    },


    "vaccination_x": {
        "header": "Erste Corona-Schutzimpfung", //muss angepasst werden, wenn 4 Impfungen zulässig werden.
        "instructions": "Welcher Impfstoff wurde bei Ihrer ersten Corona-Schutzimpfung verimpft?",
        "vaccination_label": "Impfstoff",
        "vaccination_instruction": "bitte auswählen",
        "other_vaccines": "andere",
        "info_vaccines": "Welcher Impfstoff, Erklärungen, ...."
    },
    "vaccinated": {
        "header": "Impfstatus",
        "instructions": "Haben Sie bereits eine Impfung gegen das Coronavirus (SARS-CoV-2) erhalten?",
        "vaccinated_yes": "Ja",
        "vaccinated_no": "Nein"
    },
    "pregnancy_week": {
        "header": "Schwangerschaftswoche",
        "instructions": "Befinden Sie sich derzeit noch im ersten Schwangerschaftsdrittel (1.-13. Schwangerschaftswoche)?",
        "pregnancy_week_yes": "Ja",
        "pregnancy_week_no": "Nein"
    },
    "past_infection": {
        "header": "Genesenenstatus",
        "instructions": "Wurden Sie bereits positiv auf das Coronavirus (SARS-CoV-2) getestet (Kein Selbsttest)? ",
        "info_past_infection": "Warum nur kein Selbsttest, was zählt, wie, was...",
        "past_infection_yes": "Ja",
        "past_infection_no": "Nein"
    },
    "risk_group": {
        "header": "Risikogruppe",
        "instructions": "Sind Sie zum aktuellen Zeitpunkt einer Risikogruppe angehörig oder haben Sie " +
            "regelmäßig Kontakt zu Personen einer Risikogruppe?",
        "info_risk_group": "Wann genau und warum ist man Teil einer Risikogruppe",
        "risk_group_yes": "Ja",
        "risk_group_no": "Nein"
    },
    "pregnant": {
        "header": "Schwangerschaft",
        "instructions": "Sind Sie zum aktuellen Zeitpunkt schwanger?",
        "info_pregnant": "Warum ist eine Schwangerschaft relevant für die Impfreihe.",
        "pregnant_yes": "Ja",
        "pregnant_no": "Nein"
    },
    "got_unregistered_vaccination": {
        "header": "Impfstoff ohne STIKO- Zulassung",
        "instructions": "Wurden Sie bereits mit einem in Deutschland nicht zulässigen Corona-Impfstoff geimpft?",
        "info_got_unregistered_vaccination": "Was, wann, warum problematisch?",
        "got_unregistered_vaccination_yes": "Ja",
        "got_unregistered_vaccination_no": "Nein"
    },
    "unregistered_vaccination_date": {
        "header": "Unzulässigen Corona-Schutzimpfung",
        "instructions": "Wann haben Sie die letzte nicht zulässige Corona-Schutzimpfung erhalten?",
        "label": "Datum"
    },
    "symptoms_registered": {
        "header": "Symptome",
        "instructions": "Hatten oder haben Sie Symptome in Folge Ihrer Corona-Infektion entwickelt?",
        "info_symptoms_registered": "Was sind Symptome, was sind Spätfolgen und wie muss ich die angeben...?",
        "never": "Nein, ich hatte nie Symptome",
        "still": "Ja, ich habe immer noch Symptome",
        "past": "Ja, ich hatte Symptome"
    },
    "number_vaccinations": {
        "header": "Anzahl Corona-Schutzimpfungen",
        "instructions": "Wie viele zugelassene Corona-Schutzimpfungen haben Sie erhalten?",
        "one": "1",
        "two": "2",
        "three": "3"
    },
    "infection_date": {
        "header": "Erkrankungsdatum",
        "instructions": "Wann wurden Sie erstmalig positiv auf das Coronavirus getestet (kein Selbsttest)?",
        "label": "Datum"
    },
    "symptoms_end_date": {
        "header": "Ende der Symptomatik",
        "instructions": "Wann haben ihre Symptome aufgehört?",
        "label": "Datum"
    },
    "age": {
        "header": "Alter",
        "instructions": "Wie alt sind Sie?",
        "age_placeholder": "Alter"
    },
    "vaccines": {
        "biontec": "BioNTech (Comirnaty®)",
        "moderna": "Moderna (Spikevax®)",
        "astra": "AstraZeneca (Vaxeriva®)",
        "johnson": "Janssen-Cilag (Janssen®)",
        "novavax": "Novavax (Nuvaxovid®)"
    },
    "disclaimer": "Haftungsausschluss: Die Inhalte dieser Seite dienen ausschließlich der allgemeinen Information der " +
        "Öffentlichkeit. mein-impfrechner.de übernimmt keine Verantwortung für die Richtigkeit und Vollständigkeit der " +
        "Daten und Informationen, die auf dieser Seite angegeben oder verlinkt werden, für Abweichungen von Originaldaten, " +
        "Übertragungsfehler oder Veränderung der Informationen durch Dritte."  // hardcoded in impressum.html, too
};

export const constants = {
    'age_groups': {
        // the two values specify the range of age, e.g. [13,200] means everybody with an age of 13 up to 200
        'age_group_1': [0,4],
        'age_group_2': [5,11],
        'age_group_3': [12,17],
        'age_group_4': [18,29],
        'age_group_5': [30,59],
        'age_group_6': [60,199],
        'age_group_7': [200,Number.MAX_SAFE_INTEGER],
    },
    'symptoms': {
        'never': 0,
        'still': 1,
        'past': 2
    },
    'registered_vaccination_brands': ['biontec', 'moderna', 'astra', 'johnson'],
    'registered_vaccination_brands_two_shots': ['biontec', 'moderna', 'astra'],
    'registered_vaccination_brands_one_shots': ['johnson'],
    'time_gap': {
        'other': {
            'other': 'min 4 weeks'
        },
        'immunization': {
            'biontec': '3-6 weeks',
            'moderna': '4-6 weeks',
            'astra': '8-10 weeks', // ?
            'other': 'min 4 weeks'
        },
        'booster': {
            'biontec': '5 month',
            'moderna': '5 month',
            'astra': '5 month',
            'johnson': '5 month',
            'other': 'min 4 weeks'
        }
    }
}

export const modal_risk_group_title = "Risikogruppe Corona";
export const modal_risk_group_text = <div >
    <br/>
    Zur Risikogruppe gehören insbesondere alte und ältere Menschen sowie Menschen mit verschiedenen Grunderkrankungen und Schwangere.
    Folgende Personengruppen haben ein erhöhtes Risiko für einen schweren Erkrankungsverlauf:
    <br/>
    <br/>
    <ul>
        <li>Ab einem Alter von 50 bis 60 Jahren steigt das Risiko für einen schweren Erkrankungsverlauf stetig an.
            Es gibt keine feste Altersgrenze, ab der man als besonders gefährdet eingestuft wird. Grundsätzlich gilt:
            Je älter eine Person ist, desto höher ist auch ihr Risiko schwer an Corona (SARS-CoV-2) zu erkranken.
        </li>
        <li>Personen mit Grunderkrankungen wie z. B. Herzkreislauferkrankungen, Diabetes, Erkrankungen des Atmungssystems,
            der Leber, der Niere, Krebserkrankungen oder mit vorliegenden Risikofaktoren wie z. B. starkem Übergewicht
            oder Rauchen haben ein höheres Risiko für einen schweren Krankheitsverlauf. Besonders betroffen sind erkrankte Personen
            mit unterdrücktem Immunsystem aufgrund ihrer Erkrankung oder der Einnahme von Medikamenten, die die Immunabwehr
            unterdrücken (z. B. Cortison).
        </li>
        <li>Nach aktuellem Kenntnisstand haben Schwangere ebenfalls ein erhöhtes Risiko eines schweren Verlaufs
            gegenüber Frauen der gleichen Altersgruppe, die nicht schwanger sind. Das gilt insbesondere für
            Schwangere mit vorbestehenden Risikofaktoren wie Bluthochdruck und starkem Übergewicht sowie vorbestehenden Vorerkrankungen.
        </li>
    </ul>
    <br/>
    <b>* Die Risikofaktoren für einen schweren Verlauf sind sehr komplex. Eine generelle Festlegung bzw. Definition einer Risikogruppe ist nicht möglich. Vielmehr erfordert dies eine individuelle Risikofaktoren-Bewertung durch eine medizinische Begutachtung.</b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="http://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Risikogruppen.html">Robert Koch-Institut</a>
    <br/>
</div>;

export const modal_pregnant_title = "Schwangerschaft";
export const modal_pregnant_text = <div>
    Die STIKO empfiehlt eine Corona-Schutzimpfung für ungeimpfte Schwangere ab dem 2. Trimenon (bzw. ab der 13. Schwangerschaftswoche) sowie für ungeimpfte Stillende.
    Die Grundimmunisierung soll mit zwei Dosen des COVID-19 Impfstoffs Comirnaty (Biontech) erfolgen.
    Schwangere sollen altersunabhängig mit Comirnaty (Biontech) und <b>nicht</b> mit (Moderna) geimpft werden. Wenn die Schwangerschaft nach bereits erfolgter Erstimpfung festgestellt wurde, sollte die Zweitimpfung dennoch erst ab dem 2. Trimenon durchgeführt werden.
    Schwangeren Frauen, die bereits ihre Grundimmunisierung abgeschlossen haben, soll unabhängig vom Alter ab dem 2. Trimenon eine Auffrischimpfung mit dem mRNA-Impfstoff Comirnaty im Abstand von mindestens 3 Monaten zur letzten Impfstoffdosis angeboten werden.
    Stillenden sollen entsprechend der Altersempfehlung mit einem der Impfstoffe Comirnaty (Biontech) oder Spikevax (Moderna) geimpft werden.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html">Robert Koch-Institut</a>
</div>;



export const modal_vaccinated_title = "Impfung in der Schwangerschaft";
export const modal_vaccinated_text = <div>
    Aktuell sind die Impfstoffe der folgenden Pharmaunternehmen für Deutschland zulässig:
    <ul>
        <li>BioNTech (Comirnaty)</li>
        <li>Moderna (Spikevax)</li>
        <li>AstraZeneca (Vaxeriva)</li>
        <li>Janssen-Cilag (Janssen)</li>
        <li>Novavax (Nuvaxovid)</li>
    </ul>
    *Die o.g. Impfstoffe sind Präparate, die eine gültige Zulassung der Europäischen Kommission besitzen. <b>Sie gibt keine Auskunft darüber, ob die Präparate auf dem Markt verfügbar sind.</b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html" >Paul-Ehrlich-Institut</a>
</div>;



export const modal_pregnancy_week_title = "Impfung in der Schwangerschaft";
export const modal_pregnancy_week_text = <div>
    Die STIKO empfiehlt eine Corona-Schutzimpfung für ungeimpfte Schwangere ab dem 2. Trimenon (bzw. ab der 13. Schwangerschaftswoche) sowie für ungeimpfte Stillende.
    Die Grundimmunisierung soll mit zwei Dosen des COVID-19 Impfstoffs Comirnaty (Biontech) erfolgen.
    Schwangere sollen altersunabhängig mit Comirnaty (Biontech) und <b>nicht</b> mit (Moderna) geimpft werden. Wenn die Schwangerschaft nach bereits erfolgter Erstimpfung festgestellt wurde, sollte die Zweitimpfung dennoch erst ab dem 2. Trimenon durchgeführt werden.
    Schwangeren Frauen, die bereits ihre Grundimmunisierung abgeschlossen haben, soll unabhängig vom Alter ab dem 2. Trimenon eine Auffrischimpfung mit dem mRNA-Impfstoff Comirnaty im Abstand von mindestens 3 Monaten zur letzten Impfstoffdosis angeboten werden.
    Stillenden sollen entsprechend der Altersempfehlung mit einem der Impfstoffe Comirnaty (Biontech) oder Spikevax (Moderna) geimpft werden.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html" >Robert Koch-Institut</a>
</div>;




export const modal_got_unregistered_vaccination_title = "Nicht zugelassener Impfstoff";
export const modal_got_unregistered_vaccination_text =   <div>
    Personen, die im Ausland bereits mit nicht in der EU zugelassenen COVID-19-Impfstoffen geimpft wurden, benötigen gemäß aktueller Rechtslage und unter Berücksichtigung der altersentsprechenden Impfempfehlungen eine erneute Impfserie, um in der EU den Status als Geimpfte zu erlangen. Für diese Einstufung wird (derzeit) eine vollständige Impfserie mit einem von der europäischen Zulassungsbehörde (EMA) zugelassenen Impfstoff benötigt. Eine aktuelle Liste der EU-zugelassenen COVID-19-Impfstoffe wie auch Informationen zur notwendigen Anzahl an Impfdosen sind auf den Internetseiten des Paul-Ehrlich-Instituts (PEI) zu finden.
    <br/>
    <br/>
    Diese Impfserie sollte in einem <b> Mindestabstand von ≥28 Tagen </b> begonnen werden.
    <br/>
    <br/>
    Quellen: &nbsp;
    <a href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16696900" >
        Robert Koch-Institut
    </a>
    <br/>
    <a href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html;jsessionid=372E495A216B0DD332AA96F4617E5FE1.intranet241" >
        Paul-Ehrlich-Institut
    </a>
</div>;

export const modal_past_infection_title = "Genesen";
export const modal_past_infection_text = <div>
    Neben der Corona-Schutzimpfung wird auch durch eine durchgemachte Corona (SARS-CoV-2) -Erkrankung ein körpereigener Schutz vor Corona aufgebaut. Aus diesem Grund ist auch bei Genesenen von einer Grundimmunität auszugehen.
    <br/>
    <br/>
    Folgende Personen gelten in Deutschland als „genesen“:
    <ul>
        <li>„Personen, die eine gesicherte SARS-CoV-2-Infektion durchgemacht haben,
            die <b> weniger als 6 Monate zurückliegt </b>. Der Nachweis einer gesicherten,
            durchgemachten Infektion muss durch einen direkten Erregernachweis (PCR)
            zum Zeitpunkt der Infektion erfolgen.“ </li>
        <li>„Personen, die einmal geimpft wurden und nach der ersten Impfstoffdosis
            eine SARS-CoV-2-Infektion durchgemacht haben, die weniger als 6 Monate
            zurückliegt. Die Infektion muss durch einen direkten Erregernachweis (PCR)
            zum Zeitpunkt der Infektion nachgewiesen werden.“
        </li>
    </ul>
    <br/>
    *Wer den Status „genesen“ erhält, wird u.a. in der
    COVID-19-Schutzmaßnahmen-Ausnahmenverordnung (§ 2 Nummer 3 und 5 SchAusnahmV)
    festgelegt.Für die rechtlichen Verordnungen sind die Ministerien zuständig,
    und werden ggf. vom Gesetzgeber verabschiedet. Sie sind getrennt von den
    Empfehlungen der STIKO zu sehen, die als unabhängiges Gremium agieren
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16072404" >Robert Koch-Institut</a>
</div>;

export const modal_infection_date_title = "Erkrankungsdatum";
export const modal_infection_date_text = <div>
    Bitte geben Sie hier das Datum Ihrer gesicherten Corona- Infektion an.
    <br/>
    <br/>
    Das Datum bezieht sich auf das Ausstellungsdatums Ihres
    <b>ersten positiven Erregernachweises</b> (PCR- Befund). Bitte beachten Sie,
    dass Antigen- bzw. Schnelltests und Selbsttests unzulässig sind.
    <br/>
    <br/>
    Bei der PCR- Untersuchung handelt es sich um den „Goldstandard“ in der
    Corona-Diagnostik. Hierbei wird ein Nasen-/Rachenabstrich durch geschultes,
    medizinisches Personal entnommen. Dieser wird anschließend in einem Labor
    untersucht. Die Durchführung der PCR im Labor dauert etwa vier bis fünf Stunden.
    Hinzu kommen die Transportzeit ins Labor, die Vorbereitungszeit im und
    gegebenenfalls eine Wartezeit wegen hohen Probeaufkommens. Meist liegt das
    Ergebnis innerhalb von 24 Stunden nach der Probenentnahme vor.
</div>;


export const modal_symptoms_registered_title = "Symptome";
export const modal_symptoms_registered_text =    <div>
    Symptome ist der Sammelbegriff für die Anzeichen einer Krankheit.
    <br/>
    Die folgende Auflistung gibt einen Überblick über die typischen Symptome einer Coviderkrankung.
    <br/>
    <br/>
    Husten, Fieber, Schnupfen, Störung des Geruchs- und/oder Geschmackssinns, Halsschmerzen, Atemnot, Kopf- und Gliederschmerzen, Appetitlosigkeit, Gewichtsverlust, Übelkeit, Bauchschmerzen, Erbrechen, Durchfall, Lymphknotenschwellung, Bindehautentzündung, Hautausschlag, Teilnahmslosigkeit, Benommenheit.
    <br/>
    <br/>
    <b>*Die Risikofaktoren für einen schweren Verlauf sind sehr komplex. Eine generelle Festlegung bzw. Definition einer Risikogruppe ist nicht möglich. Vielmehr erfordert dies eine individuelle Risikofaktoren-Bewertung durch eine medizinische Begutachtung.
    </b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Steckbrief.html" >Robert Koch-Institut</a>
</div>;


export const modal_symptoms_end_date_title = "Ende der Symptome";
export const modal_symptoms_end_date_text = <div>Das Ende der Symptome meint den Tag (Datum), ab dem Sie symptomfrei waren. Sollten Ihre Symptomatik länger andauern, wenden Sie sich bitte an Ihren Arzt.  </div>;
