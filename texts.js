texts_german = {
  "start": {
    "header": "Impfrechner",
    "welcome": "Hier können Sie Ihren Impftermin berechnen",
    "data_storage": "Alle Daten bleiben im Browser"
  },
  "form_validation": {
    "valid": "Eingabe ist valide",
    "invalid" : "Bitte machen Sie eine valide Eingabe, um fortzufahren"
  },
  "vaccination_last": {
    "header": "Angaben zur letzten Corona-Schutzimpfung (SARS-CoV-2)",
    "instruction": "Bitte angeben",
    "vaccination_label": "Impfstoff",
    "vaccination_instruction": "bitte auswählen",
    "other_vaccines": "andere",
    "info_vaccines": "Welcher Impfstoff, Erklärungen, ....",
    "date_labe": "Datum",
    "info_date": "Welches Datum, warum, wie, was"// ggf. nicht benötigt
  },
  "vaccination_x": {
    "header": "Angaben zur ersten Corona-Schutzimpfung", //muss angepasst werden, wenn 4 Impfungen zulässig werden.
    "instruction": "Welcher Impfstoff wurde bei Ihrer ersten Corona-Schutzimpfung verimpft?",
    "vaccination_label": "Impfstoff",
    "vaccination_instruction": "bitte auswählen",
    "other_vaccines": "andere",
    "info_vaccines": "Welcher Impfstoff, Erklärungen, ...."
  },
  "vaccinated": {
    "header": "Impfstatus",
    "instruction": "Haben Sie bereits eine zulässige Impfung gegen das Coronavirus (SARS-CoV-2) erhalten?",
    "vaccinated_yes": "Ja",
    "vaccinated_no": "Nein"
  },
  "past_infection": {
    "header": "Genesenenstatus",
    "instruction": "Wurden Sie bereits positiv auf das Coronavirus (SARS-CoV-2) getestet (Kein Selbsttest)? ",
    "info_past_infection": "Warum nur kein Selbsttest, was zählt, wie, was...",
    "past_infection_yes": "Ja",
    "past_infection_no": "Nein"
  },
  "risk_group": {
    "header": "Risikogruppe",
    "instruction": "Sind Sie selbst einer Risikogruppe angehörig, haben Sie regelmäßig Kontakt zu Angehörigen einer Risikogruppe, oder sind Sie schwanger? ",
    "info_risk_group": "Wann genau und warum ist man Teil einer Risikogruppe",
    "risk_group_yes": "Ja",
    "risk_group_no": "Nein"
  },
  "got_unregistered_vaccination": {
    "header": "Impfstoff ohne STIKO- Zulassung",
    "instruction": "Wurden Sie bereits mit einem in Deutschland nicht zulässigen Corona-Impfstoff geimpft?",
    "info_got_unregistered_vaccination": "Was, wann, warum problematisch?",
    "got_unregistered_vaccination_yes": "Ja",
    "got_unregistered_vaccination_no": "Nein"
  },
  "unregistered_vaccination_date": {
    "header": "Angaben zur unzulässigen Corona-Schutzimpfung",
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
    "header": "Anzahl der erhaltenen Corona-Schutzimpfungen",
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
    "biontec": "BioNTech/Pfizer",
    "moderna": "Moderna",
    "astra": "AstraZeneca",
    "johnson": "Janssen",
  },
  "results": {
    "really_old": "Wenn du wirklich schon so lange gelebt hast, dann bringt dich Corona auch nicht mehr um.",
    "no_general_recommendation": "Aktuell keine Impfempfehlung",
    "contact_dr": "Keine generelle Impfempfehlung, bitte besprechen Sie Ihre individuellen Umstände mit Ihrem Hausarzt.",
    "no_recommendation_symptoms": "Aktuell keine Impfempfehlung, wenn noch Symptome oder Spätfolgen bestehen.",
    "no_further_recommendation": "Nach aktuellem Stand benötigen sie keine weitere Impfung.",
    "multiple_options": "Wir haben für sie folgende Optionen berechnet:",
    "next_possible_date": "Sie können sich mit <vaccination_brand> ab dem <date> Impfen lassen.",
    "second_vaccination": "Ihre zweite Impfung sollten Sie mit dem Impfstoff <vaccination_brand> nach dem <date_first> bekommen.",
    "second_vaccination_range": "Ihre zweite Impfung sollten Sie mit dem Impfstoff <vaccination_brand> zwischen dem <date_first> und dem <date_second> bekommen.",
    "third_vaccination": "Ihre dritte Impfung sollten Sie mit dem Impfstoff <vaccination_brand> nach dem  <date> bekommen.",
    "check_data": "Bitte überprüfen Sie Ihre Eingaben:"

  }
};

constants = {
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
