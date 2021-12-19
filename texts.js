texts_german = {
  "start": {
    "header": "Impfrechner",
    "welcome": "Guten Tag, hier können Sie Ihren Impftermin berechnen.",
    "info_data_storage": "Alle Daten bleiben im Browser."
  },
  "vaccination_last": {
    "header": "Vaccination last",
    "instruction": "Bitte angeben",
    "vaccination_label": "Impfstoff",
    "vaccination_instruction": "bitte auswählen",
    "other_vaccines": "andere",
    "info_vaccines": "Welcher Impfstoff, Erklärungen, ....",
    "date_labe": "Datum",
    "info_date": "Welches Datum, warum, wie, was"
  },
  "vaccination_x": {
    "header": "Vaccination number x",
    "instruction": "Bitte angeben",
    "vaccination_label": "Impfstoff",
    "vaccination_instruction": "bitte auswählen",
    "other_vaccines": "andere",
    "info_vaccines": "Welcher Impfstoff, Erklärungen, ....",
    "date_labe": "Datum",
    "info_date": "Welches Datum, warum, wie, was"
  },
  "vaccinated": {
    "header": "Vaccinated",
    "instruction": "Haben Sie bereits eine Corona-Schutzimpfung erhalten? :",
    "vaccinated_yes": "Ja",
    "vaccinated_no": "Nein"
  },
  "past_infection": {
    "header": "Past Infection",
    "instruction": "Wurden Sie bereits positiv auf Corona (SARS-CoV-2) getestet (Kein Selbsttest)? ",
    "info_past_infection": "Warum nur kein Selbsttest, was zählt, wie, was...",
    "past_infection_yes": "Ja",
    "past_infection_no": "Nein"
  },
  "risk_group": {
    "header": "Risikogruppe",
    "instruction": "Gehören Sie zu seiner Risikogruppe? :",
    "info_risk_group": "Wann genau und warum ist man Teil einer Risikogruppe",
    "risk_group_yes": "Ja",
    "risk_group_no": "Nein"
  },
  "got_unregistered_vaccination": {
    "header": "Nicht zugelassener Impfstoff",
    "instruction": "Wurden Sie im Ausland mit einem nicht in Deutschland von der StIK zugelassenen Covid Impfstoff geimpft?",
    "info_got_unregistered_vaccination": "Was, wann, warum problematisch?",
    "got_unregistered_vaccination_yes": "Ja",
    "got_unregistered_vaccination_no": "Nein"
  },
  "unregistered_vaccination_date": {
    "header": "Date last vaccination with brand not registered in Germany",
    "instructions": "Bitte Tag angeben!",
    "label": "Datum"
  },
  "symptoms_registered": {
    "header": "Symptoms",
    "instructions": "Symptoms?",
    "info_symptoms_registered": "Was sind Symptome, was sind Spätfolgen und wie muss ich die angeben...?",
    "never": "Nein, ich hatte nie Symptome",
    "still": "Ja, ich habe immer noch Symptome",
    "past": "Ja, ich hatte Symptome"
  },
  "number_vaccinations": {
    "header": "Anzahl erhaltene Impfungen",
    "instructions": "Anzahl Impfungen?",
    "one": "1",
    "two": "2",
    "three": "3"
  },
  "infection_date": {
    "header": "Infection Date",
    "instructions": "Intro",
    "label": "Datum",
    "info_infection_date": "Welches Datum, genauer ausführen: warum, wie, wo zu finden...",
  },
  "symptoms_end_date": {
    "header": "Symptoms End Date",
    "instructions": "Intro",
    "label": "Datum"
  },
  "age": {
    "header": "Alter",
    "instructions": "Bitte Alter angeben!",
    "age_placeholder": "Alter"
  },
  "vaccines": {
    "biontec": "BioNTech/Pfizer",
    "moderna": "Moderna",
    "astra": "AstraZeneca",
    "johnson": "Johnson"
  },
  "results": {
    "no_general_recommendation": "Aktuell keine Impfempfehlung",
    "contact_dr": "Keine generelle Impfempfehlung, bitte besprechen Sie Ihre individuellen Umstände mit Ihrem Hausarzt.",
    "no_recommendation_symptoms": "Aktuell keine Impfempfehlung, wenn noch Symptome oder Spätfolgen  bestehen.",
    "no_further_recommendation": "Nach aktuellem Stand benötigen sie keine weitere Impfung.",
    "next_possible_date": "Sie können sich mit <vaccination_brand> ab dem <date> Impfen lassen.",
    "second_vaccination": "Ihre zweite Impfung sollten Sie mit dem Impfstoff <vaccination_brand> zwischen dem <date_first> und dem <date_second> bekommen.",
    "third_vaccination": "Ihre dritte Impfung sollten Sie mit dem Impfstoff <vaccination_brand> nach dem  <date> bbekommen."

  }
};

constants = {
  'age_groups': {
    // the two values specify the range of age, e.g. [13,200] means everybody with an age of 13 up to 200
    'age_group_1': [0,11],
    'age_group_2': [12,29],
    'age_group_3': [30,199],
    'age_group_4': [200,Number.MAX_SAFE_INTEGER],
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