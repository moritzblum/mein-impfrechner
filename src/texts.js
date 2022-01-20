export function Error(){
    return(<div>
        Basierend auf Ihren Angaben ist es uns derzeit nicht möglich, eine generelle Empfehlung auszusprechen. Ihre persönliche Situation erfordert eine ärztliche Einzelfallprüfung, um eine valide Aussage treffen zu können. Wir bitten um Ihr Verständnis.</div>)
}

export function Really_old(){
    return(<div>
        <b>Bitte überprüfen Sie Ihre Angaben</b>. Wenn Sie schon so lange gelebt haben, dann haut Sie auch Corona nicht mehr aus den Socken.
    </div>)

}

export function No_further_recommendation(){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren Angaben wird für Sie <b>keine Impfempfehlung</b> ausgesprochen, da Sie aktuell <b>ausreichend geschützt</b> sind.
    </div>)
}

export function No_recommendation_too_young(){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung wird für Sie aktuell <b>keine Impfempfehlung</b> ausgesprochen, <b>da Sie unter 5 Jahre alt sind</b>. <br/>
        * Im Zweifelsfall holen Sie sich ärztlichen Rat.
    </div>)
}

export function No_recommendation_pregnant(){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung wird für Sie aktuell <b>keine Impfempfehlung</b> ausgesprochen, da Sie sich im ersten Schwangerschaftsdrittel befinden. Die STIKO empfiehlt eine Impfung erst <b>ab der 13. Schwangerschaftswoche</b>. <br/>
        * Im Zweifelsfall holen Sie sich ärztlichen Rat.
    </div>)
}

export function No_recommendation_symptoms() {
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung sollten Sie mit der Impfung warten, bis die Symptome abklingen. Aktuell wird ein Impftermin <b>vier Wochen nach Ihrem individuellen Symptomende empfohlen</b>. <br/>
        *Sollten Ihre Symptome länger andauern, besprechen Sie Ihre persönliche Situation mit einer Ärztin / einem Arzt.
    </div>)
}

export function Contact_dr(){
    return(<div>
        Basierend auf der derzeitigen STIKO- Empfehlung und Ihren Angaben, können wir leider keine generelle Impfempfehlung aussprechen. Bitte besprechen Sie Ihre persönliche Situation mit einer Ärztin / einem Arzt.
    </div>)
}

export function Contact_dr_young(){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren Angaben können wir leider keine generelle Impfempfehlung aussprechen. Bitte besprechen Sie Ihre persönliche Situation mit einer Kinderärztin / einem Kinderarzt.
    </div>)
}

export function Recommendation_young(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung ("Grundimmunisierung") durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date}</b> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.</div>)
}

export function Recommendation_young_no_risk_group(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben, liegt für Ihre Altersgruppe keine generelle Impfempfehlung vor. <br/>
        Auf individuellen Wunsch der Kinder und Sorgeberechtigten ist eine Impfung nach ärztlicher Aufklärung ab dem <b>{props.date}</b> möglich. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung (Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date}</b> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab dem <b>{props.date}</b> impfen lassen.
    </div>)
}

export function Next_possible_date_first_infection(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung (Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date}</b> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}</b>.
    </div>)
}

export function Next_possible_date_first_infection_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab dem <b>{props.date}</b> impfen lassen.
    </div>)
}

export function Second_vaccination_range(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung (Vervollständigung der Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date_first}</b> impfen lassen.<br/>
        Idealerweise wählen Sie einen Termin im Zeitraum vom <b>{props.date_first}</b> bis zum <b>{props.date_second}.</b> <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Second_vaccination_range_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b>  ab dem <b>{props.date_first}</b> impfen lassen. <br/>
        Idealerweise wählen Sie einen Termin im Zeitraum vom <b>{props.date_first}</b> bis zum <b>{props.date_second}</b>.
    </div>)
}

export function Next_possible_date_second_dose_infection(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung (Vervollständigung der Grundimmunisierung) durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date}</b> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_second_dose_infection_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b>  ab dem <b>{props.date_first}</b> impfen lassen.
    </div>)
}

export function Next_possible_date_booster(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine Impfung (Boosterimpfung/ Auffrischimpfung) durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date} </b>impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_booster_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab dem <b>{props.date}</b> impfen lassen.
    </div>)
}

export function Next_possible_date_booster_infection(props){
    return(<div>
        Basierend auf der derzeitigen STIKO-Empfehlung und Ihren persönlichen Angaben empfehlen wir Ihnen, eine „Booster-/Auffrischimpfung“ durchzuführen. <br/><br/>
        Sie können sich ab dem <b>{props.date}</b> impfen lassen. <br/>
        Für Sie wird folgender Impfstoff empfohlen: <b>{props.vaccination_brand}.</b>
    </div>)
}

export function Next_possible_date_booster_infection_alternative(props){
    return(<div>
        Sie können sich mit <b>{props.vaccination_brand}</b> ab dem <b>{props.date}</b> impfen lassen.
    </div>)

}

export function Alternative(){
    return(<div>
        Weiterhin kommt für Sie folgende Option in Betracht:
    </div>)
}







export function Vaccination_1_instruction(){
    return(<div>
        Welcher Impfstoff wurde bei Ihrer <b>ersten</b> Corona-Schutzimpfung verimpft?
    </div>)
}

export function Vaccination_2_instruction(){
    return(<div>
        Welcher Impfstoff wurde bei Ihrer <b>zweiten</b> Corona-Schutzimpfung verimpft?
    </div>)
}

export function Vaccinated_instruction(){
    return(<div>
        Haben Sie bereits eine Impfung gegen das Coronavirus (SARS-CoV-2) erhalten?
    </div>)
}

export function Pregnancy_week_instruction(){
    return(<div>
        Befinden Sie sich derzeit noch im ersten Schwangerschaftsdrittel (1.-13. Schwangerschaftswoche)?
    </div>)
}

export function Past_infection_instruction(){
    return(<div>
        Wurden Sie bereits positiv auf das Coronavirus (SARS-CoV-2) getestet (Kein Selbsttest)?
    </div>)
}

export function Risk_group_instruction(){
    return(<div>
        Sind Sie zum aktuellen Zeitpunkt einer Risikogruppe angehörig oder haben Sie regelmäßig Kontakt zu Personen einer Risikogruppe?
    </div>)
}

export function Pregnant_instruction(){
    return(<div>
        Sind Sie zum aktuellen Zeitpunkt schwanger?
    </div>)
}

export function Got_unregistered_vaccination_instruction(){
    return(<div>
        Wurden Sie bereits mit einem in Deutschland <b>nicht</b> zulässigen Corona-Impfstoff geimpft?
    </div>)
}

export function Unregistered_vaccination_date_instruction(){
    return(<div>
        Wann haben Sie die letzte <b>nicht</b> zulässige Corona-Schutzimpfung erhalten?
    </div>)
}

export function Symptoms_registered_instruction(){
    return(<div>
        Hatten oder haben Sie Symptome in Folge Ihrer Corona-Infektion entwickelt?
    </div>)
}

export function Number_vaccinations_instruction(){
    return(<div>
        Wie viele zugelassene Corona-Schutzimpfungen haben Sie erhalten?
    </div>)
}

export function Infection_date_instruction(){
    return(<div>
        Wann wurden Sie erstmalig positiv auf das Coronavirus getestet (kein Selbsttest)?
    </div>)
}

export function Symptoms_end_date_instruction(){
    return(<div>
        Wann haben ihre Symptome aufgehört?
    </div>)
}

export function Age_instruction(){
    return(<div>
        Wie alt sind Sie?
    </div>)
}

export function Disclaimer(){
    return(<div>
        <b>Haftungsausschluss:</b> Die Inhalte dieser Seite dienen ausschließlich der allgemeinen Information der
        Öffentlichkeit. mein-impfrechner.de übernimmt keine Verantwortung für die Richtigkeit und Vollständigkeit der
        Daten und Informationen, die auf dieser Seite angegeben oder verlinkt werden, für Abweichungen von Originaldaten,
        Übertragungsfehler oder Veränderung der Informationen durch Dritte.
    </div>)
}

export function Start_header (){
    return(<span>Impfrechner</span>)
}

export function Vaccination_1_header (){
    return(<span>1. Corona-Schutzimpfung</span>)
}

export function Vaccination_2_header (){
    return(<span>2. Corona-Schutzimpfung</span>)
}

export function Vaccinated_header (){
    return(<span>Impfstatus</span>)
}

export function Pregnancy_week_header (){
    return(<span>Schwangerschaftswoche</span>)
}

export function Past_infection_header (){
    return(<span>Genesenenstatus</span>)
}

export function Risk_group_header (){
    return(<span>Risikogruppe</span>)
}

export function Pregnant_header (){
    return(<span>Schwangerschaft</span>)
}

export function Got_unregistered_vaccination_header (){
    return(<span>Impfstoff ohne STIKO-Zulassung</span>)
}

export function Unregistered_vaccination_date_header (){
    return(<span>Impfstoff ohne STIKO-Zulassung</span>)
}

export function Symptoms_registered_header (){
    return(<span>Symptome</span>)
}

export function Number_vaccinations_header (){
    return(<span>Anzahl Corona-Schutzimpfungen</span>)
}

export function Infection_date_header (){
    return(<span>Erkrankungsdatum</span>)
}

export function Symptoms_end_date_header (){
    return(<span>Ende der Symptomatik</span>)
}

export function Age_header (){
    return(<span>Alter</span>)
}


export const texts_german = {
    "form_validation": {
        "valid": "Eingabe ist valide",
        "invalid" : "Bitte machen Sie eine valide Eingabe, um fortzufahren"
    },
    "vaccination_brand_date": {
        "vaccination_label": "Impfstoff",
        "vaccination_default": "bitte auswählen",
        "date_labe": "Datum",
    },
    "vaccinated": {
        "vaccinated_yes": "Ja",
        "vaccinated_no": "Nein"
    },
    "pregnancy_week": {
        "short": "Erstes Schwangerschaftsdrittel",
        "pregnancy_week_yes": "Ja",
        "pregnancy_week_no": "Nein"
    },
    "past_infection": {
        "past_infection_yes": "Ja",
        "past_infection_no": "Nein"
    },
    "risk_group": {
        "risk_group_yes": "Ja",
        "risk_group_no": "Nein"
    },
    "pregnant": {
        "pregnant_yes": "Ja",
        "pregnant_no": "Nein"
    },
    "got_unregistered_vaccination": {
        "got_unregistered_vaccination_yes": "Ja",
        "got_unregistered_vaccination_no": "Nein"
    },
    "unregistered_vaccination_date": {
        "label": "Datum"
    },
    "symptoms_registered": {
        "never": "Nein, ich hatte nie Symptome",
        "still": "Ja, ich habe immer noch Symptome",
        "past": "Ja, ich hatte Symptome"
    },
    "number_vaccinations": {
        "one": "1",
        "two": "2",
        "three": "3"
    },
    "infection_date": {
        "label": "Datum"
    },
    "symptoms_end_date": {
        "label": "Datum"
    },
    "age": {
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
    <br/>
    <b>* Die Risikofaktoren für einen schweren Verlauf sind sehr komplex. Eine generelle Festlegung bzw. Definition einer Risikogruppe ist nicht möglich. Vielmehr erfordert dies eine individuelle Risikofaktoren-Bewertung durch eine medizinische Begutachtung.</b>
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank" href="http://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Risikogruppen.html">Robert Koch-Institut</a>
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
    <a target="_blank" href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html">Robert Koch-Institut</a>
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
    <a target="_blank" href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html" >Paul-Ehrlich-Institut</a>
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
    <a target="_blank" href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Impfung_Schwangere_Stillende.html" >Robert Koch-Institut</a>
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
    <a target="_blank" href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16696900" >
        Robert Koch-Institut
    </a>
    <br/>
    <a target="_blank" href="https://www.pei.de/DE/arzneimittel/impfstoffe/covid-19/covid-19-node.html;jsessionid=372E495A216B0DD332AA96F4617E5FE1.intranet241" >
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
    festgelegt. Für die rechtlichen Verordnungen sind die Ministerien zuständig,
    und werden ggf. vom Gesetzgeber verabschiedet. Sie sind getrennt von den
    Empfehlungen der STIKO zu sehen, die als unabhängiges Gremium agieren.
    <br/>
    <br/>
    Quelle: &nbsp;
    <a target="_blank" href="https://www.rki.de/SharedDocs/FAQ/COVID-Impfen/FAQ_Liste_Durchfuehrung_Impfung.html#FAQId16072404" >Robert Koch-Institut</a>
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
    <a target="_blank" href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Steckbrief.html" >Robert Koch-Institut</a>
</div>;


export const modal_symptoms_end_date_title = "Ende der Symptome";
export const modal_symptoms_end_date_text = <div>Das Ende der Symptome meint den Tag (Datum), ab dem Sie symptomfrei waren. Sollten Ihre Symptomatik länger andauern, wenden Sie sich bitte an Ihren Arzt.  </div>;
