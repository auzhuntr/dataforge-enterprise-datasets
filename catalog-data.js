window.DATAFORGE_CATALOG = {
  "generated_at_utc": "2026-11-10T01:57:34Z",
  "total_datasets": 8,
  "total_cumulative_records": 1137,
  "refresh_cycle": "12-Hourly Automated Pipeline (Rolling 90-Day Master + 60 Snapshot Archive)",
  "datasets": [
    {
      "id": "world_universities_poi",
      "title": "US Higher Education Institutions & Domain Mapping",
      "category": "Points of Interest (POI) & Geospatial Data",
      "description": "Directory of United States universities and colleges with their websites and internet domains, from the Hipo university-domains-list. Up to 300 records per refresh.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-10T01:57:34Z",
      "next_update_utc": "2026-11-10T07:00:00Z",
      "latest_records": 299,
      "master_records": 299,
      "retained_snapshots": 1,
      "completeness_pct": 84.7,
      "columns": [
        "institution_name",
        "country",
        "alpha_two_code",
        "state_province",
        "domains",
        "web_pages",
        "collected_at_iso"
      ],
      "price_monthly_usd": 140,
      "price_new_member_usd": 126,
      "price_oneoff_usd": 187,
      "badge": "Open-licence source",
      "source": "Hipo university-domains-list",
      "licence": "MIT License (c) Hipo",
      "licence_url": "https://github.com/Hipo/university-domains-list/blob/master/LICENSE.txt",
      "attribution": "Includes data from the Hipo university-domains-list, MIT License.",
      "sample_csv_url": "samples/world_universities_poi_sample_50.csv",
      "preview_rows": [
        {
          "institution_name": "42 US",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "student.42.us.org",
          "web_pages": "http://www.42.us.org/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "A.T. Still University",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "atsu.edu",
          "web_pages": "https://www.atsu.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "ASA College",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "asa.edu",
          "web_pages": "http://www.asa.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "Aaniiih Nakoda College",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "ancollege.edu",
          "web_pages": "http://www.ancollege.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "Abilene Christian University",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "acu.edu",
          "web_pages": "http://www.acu.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "Abraham Baldwin Agricultural College",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "Georgia",
          "domains": "abac.edu; stallions.abac.edu",
          "web_pages": "https://www.abac.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "Academic medical center at State University of New York at Stony Brook",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "",
          "domains": "stonybrookmedicine.edu",
          "web_pages": "http://www.stonybrookmedicine.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "institution_name": "Academy of Art University",
          "country": "United States",
          "alpha_two_code": "US",
          "state_province": "California",
          "domains": "academyart.edu; art.edu",
          "web_pages": "https://www.academyart.edu/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        }
      ]
    },
    {
      "id": "openfda_drug_ndc",
      "title": "FDA National Drug Code (NDC) Directory & Labeling Feed",
      "category": "Healthcare & Life Sciences Data",
      "description": "Product records from the openFDA National Drug Code directory: brand and generic names, labeler, active ingredient, dosage form, route and marketing category. 100 records per refresh, accumulated into a rolling 90-day master file.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-09T19:00:13Z",
      "next_update_utc": "2026-11-10T07:00:13Z",
      "latest_records": 100,
      "master_records": 248,
      "retained_snapshots": 8,
      "completeness_pct": 100.0,
      "columns": [
        "product_ndc",
        "brand_name",
        "generic_name",
        "labeler_name",
        "active_ingredient",
        "dosage_form",
        "route",
        "marketing_category",
        "collected_at_iso"
      ],
      "price_monthly_usd": 178,
      "price_new_member_usd": 160,
      "price_oneoff_usd": 246,
      "badge": "Open-licence source",
      "source": "openFDA (U.S. Food & Drug Administration)",
      "licence": "Public domain (CC0)",
      "licence_url": "https://open.fda.gov/license/",
      "attribution": "Not endorsed or certified by the U.S. FDA.",
      "sample_csv_url": "samples/openfda_drug_ndc_sample_50.csv",
      "preview_rows": [
        {
          "product_ndc": "10237-482",
          "brand_name": "Zicam",
          "generic_name": "Allium cepa 5x, Zincum aceticum 2x, Zincum gluconium 1x",
          "labeler_name": "Church & Dwight Co., Inc.",
          "active_ingredient": "ZINC ACETATE ANHYDROUS",
          "dosage_form": "TABLET",
          "route": "ORAL",
          "marketing_category": "UNAPPROVED HOMEOPATHIC"
        },
        {
          "product_ndc": "10967-667",
          "brand_name": "CERAMIDE LIFT and FIRM EYE SPF 15",
          "generic_name": "Oxybenzone, Octinoxate",
          "labeler_name": "REVLON",
          "active_ingredient": "OCTINOXATE",
          "dosage_form": "EMULSION",
          "route": "TOPICAL",
          "marketing_category": "OTC MONOGRAPH DRUG"
        },
        {
          "product_ndc": "10967-694",
          "brand_name": "RV Illuminance Serum Tint Broad Spectrum 15 Buff Beige",
          "generic_name": "Face foundation with SPF",
          "labeler_name": "REVLON CONSUMER PR Consumer Products Corp",
          "active_ingredient": "TITANIUM DIOXIDE",
          "dosage_form": "CREAM",
          "route": "TOPICAL",
          "marketing_category": "OTC MONOGRAPH DRUG"
        },
        {
          "product_ndc": "11043-002",
          "brand_name": "Nitrogen",
          "generic_name": "Nitrogen",
          "labeler_name": "S. J. Smith Co., Inc.",
          "active_ingredient": "NITROGEN",
          "dosage_form": "GAS",
          "route": "RESPIRATORY (INHALATION)",
          "marketing_category": "NDA"
        },
        {
          "product_ndc": "11673-683",
          "brand_name": "Ibuprofen Mini",
          "generic_name": "Ibuprofen Mini 200 mg",
          "labeler_name": "TARGET CORPORATION",
          "active_ingredient": "IBUPROFEN",
          "dosage_form": "CAPSULE, LIQUID FILLED",
          "route": "ORAL",
          "marketing_category": "ANDA"
        },
        {
          "product_ndc": "11673-741",
          "brand_name": "Up and Up Childrens Ibuprofen",
          "generic_name": "ibuprofen",
          "labeler_name": "Target Corporation",
          "active_ingredient": "IBUPROFEN",
          "dosage_form": "TABLET, CHEWABLE",
          "route": "ORAL",
          "marketing_category": "ANDA"
        },
        {
          "product_ndc": "11788-159",
          "brand_name": "Isosorbide Mononitrate",
          "generic_name": "Isosorbide Mononitrate",
          "labeler_name": "AiPing Pharmaceutical, Inc.",
          "active_ingredient": "ISOSORBIDE MONONITRATE",
          "dosage_form": "TABLET, EXTENDED RELEASE",
          "route": "ORAL",
          "marketing_category": "ANDA"
        },
        {
          "product_ndc": "21130-516",
          "brand_name": "Extra Strength Smooth",
          "generic_name": "Antacid Tablets",
          "labeler_name": "SAFEWAY",
          "active_ingredient": "CALCIUM CARBONATE",
          "dosage_form": "TABLET, CHEWABLE",
          "route": "ORAL",
          "marketing_category": "OTC MONOGRAPH DRUG"
        }
      ]
    },
    {
      "id": "open_brewery_poi",
      "title": "Brewery Venues & Hospitality POI Directory",
      "category": "Points of Interest (POI) & Geospatial Data",
      "description": "Brewery, taproom and brewpub listings from Open Brewery DB with addresses, postal codes, coordinates and websites where available. Up to 200 records per refresh.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-10T01:57:34Z",
      "next_update_utc": "2026-11-10T07:00:00Z",
      "latest_records": 200,
      "master_records": 200,
      "retained_snapshots": 1,
      "completeness_pct": 93.2,
      "columns": [
        "venue_id",
        "venue_name",
        "venue_type",
        "address",
        "city",
        "state_province",
        "postal_code",
        "country",
        "latitude",
        "longitude",
        "phone",
        "website_url",
        "collected_at_iso"
      ],
      "price_monthly_usd": 140,
      "price_new_member_usd": 126,
      "price_oneoff_usd": 187,
      "badge": "Open-licence source",
      "source": "Open Brewery DB",
      "licence": "MIT License (c) Open Brewery DB",
      "licence_url": "https://github.com/openbrewerydb/openbrewerydb/blob/master/LICENSE",
      "attribution": "Includes data from Open Brewery DB, MIT License.",
      "sample_csv_url": "samples/open_brewery_poi_sample_50.csv",
      "preview_rows": [
        {
          "venue_id": "ae7b3174-8be8-4d53-a3a5-9b8240970eea",
          "venue_name": "'s",
          "venue_type": "brewpub",
          "address": "Friesener Straße 1",
          "city": "Kronach",
          "state_province": "Bayern",
          "postal_code": "96317",
          "country": "Germany",
          "latitude": "50.241246",
          "longitude": "11.327765",
          "phone": "+49 9261 628000",
          "website_url": "http://www.antla.de",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "aa7cbe9b-3a0f-4888-9884-6186b0042b55",
          "venue_name": "’t Drankorgel",
          "venue_type": "micro",
          "address": "31a Geelsebaan",
          "city": "Mol",
          "state_province": "Vlaanderen",
          "postal_code": "2400",
          "country": "Belgium",
          "latitude": "51.1762578",
          "longitude": "5.0569549",
          "phone": "+32 496 76 40 63",
          "website_url": "http://tdrankorgel.be/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "1034754f-abf9-4b42-bd6d-37e110ba4b1a",
          "venue_name": "'T Kroontje",
          "venue_type": "micro",
          "address": "62 Hogebrug",
          "city": "Lebbeke",
          "state_province": "Vlaanderen",
          "postal_code": "9280",
          "country": "Belgium",
          "latitude": "51.0078878",
          "longitude": "4.0913928",
          "phone": "+32 495 43 33 25",
          "website_url": "http://www.tkroontje.be/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "907826b3-6902-4d28-a5e2-f73084bebeed",
          "venue_name": "'t Veense Brouwhuys",
          "venue_type": "micro",
          "address": "Langeweg 16",
          "city": "Roelofarendsveen",
          "state_province": "Zuid-Holland",
          "postal_code": "2371 EG",
          "country": "Netherlands",
          "latitude": "",
          "longitude": "",
          "phone": "071-3314585",
          "website_url": "https://www.t-veen.nl/t-veense-brouwhuys/",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "5128df48-79fc-4f0f-8b52-d06be54d0cec",
          "venue_name": "(405) Brewing Co",
          "venue_type": "micro",
          "address": "1716 Topeka St",
          "city": "Norman",
          "state_province": "Oklahoma",
          "postal_code": "73069-8224",
          "country": "United States",
          "latitude": "35.25738891",
          "longitude": "-97.46818222",
          "phone": "4058160490",
          "website_url": "http://www.405brewing.com",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "9c5a66c8-cc13-416f-a5d9-0a769c87d318",
          "venue_name": "(512) Brewing Co",
          "venue_type": "micro",
          "address": "407 Radam Ln Ste F200",
          "city": "Austin",
          "state_province": "Texas",
          "postal_code": "78745-1197",
          "country": "United States",
          "latitude": "",
          "longitude": "",
          "phone": "5129211545",
          "website_url": "http://www.512brewing.com",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "34e8c68b-6146-453f-a4b9-1f6cd99a5ada",
          "venue_name": "1 of Us Brewing Company",
          "venue_type": "micro",
          "address": "8100 Washington Ave",
          "city": "Mount Pleasant",
          "state_province": "Wisconsin",
          "postal_code": "53406-3920",
          "country": "United States",
          "latitude": "42.720108268996",
          "longitude": "-87.883363502094",
          "phone": "2624847553",
          "website_url": "https://www.1ofusbrewing.com",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "venue_id": "21f21cc0-5b2f-4b79-be29-3bc625bcc4c8",
          "venue_name": "1. Altenberger Brauhaus",
          "venue_type": "brewpub",
          "address": "Zirndorfer Straße 18",
          "city": "Oberasbach",
          "state_province": "Bayern",
          "postal_code": "90522",
          "country": "Germany",
          "latitude": "49.4369958",
          "longitude": "10.9685585",
          "phone": "+49 911 604237",
          "website_url": "http://www.altenberger-brauhaus.de",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        }
      ]
    },
    {
      "id": "fda_medical_devices",
      "title": "FDA Medical Device Classification Index",
      "category": "Healthcare & Life Sciences Data",
      "description": "Device classification records from openFDA: device name, device class, medical specialty, regulation number and review panel. 100 records per refresh, accumulated into a rolling 90-day master file. This is the classification database, not a list of approvals or clearances.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-09T19:00:15Z",
      "next_update_utc": "2026-11-10T07:00:15Z",
      "latest_records": 100,
      "master_records": 112,
      "retained_snapshots": 8,
      "completeness_pct": 100.0,
      "columns": [
        "device_class",
        "device_name",
        "medical_specialty",
        "regulation_number",
        "review_panel",
        "collected_at_iso"
      ],
      "price_monthly_usd": 178,
      "price_new_member_usd": 160,
      "price_oneoff_usd": 246,
      "badge": "Open-licence source",
      "source": "openFDA (U.S. Food & Drug Administration)",
      "licence": "Public domain (CC0)",
      "licence_url": "https://open.fda.gov/license/",
      "attribution": "Not endorsed or certified by the U.S. FDA.",
      "sample_csv_url": "samples/fda_medical_devices_sample_50.csv",
      "preview_rows": [
        {
          "device_class": "1",
          "device_name": "Automated Urinalysis System",
          "medical_specialty": "Clinical Chemistry",
          "regulation_number": "862.2900",
          "review_panel": "CH",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "2",
          "device_name": "Apparatus, Electrosurgical",
          "medical_specialty": "General, Plastic Surgery",
          "regulation_number": "878.4400",
          "review_panel": "SU",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "2",
          "device_name": "Monitor, Heart Sound, Fetal, Ultrasonic",
          "medical_specialty": "Obstetrics/Gynecology",
          "regulation_number": "884.2660",
          "review_panel": "OB",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "2",
          "device_name": "Heparin, Vascular Access Flush",
          "medical_specialty": "General Hospital",
          "regulation_number": "880.5200",
          "review_panel": "HO",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "1",
          "device_name": "Monitor, U.V., Glc",
          "medical_specialty": "Clinical Chemistry",
          "regulation_number": "862.2250",
          "review_panel": "TX",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "1",
          "device_name": "Kit, Identification, Dermatophyte",
          "medical_specialty": "Microbiology",
          "regulation_number": "866.2660",
          "review_panel": "MI",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "2",
          "device_name": "Neurosurgical Laser With Mr Thermography",
          "medical_specialty": "General, Plastic Surgery",
          "regulation_number": "878.4810",
          "review_panel": "NE",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        },
        {
          "device_class": "1",
          "device_name": "Electrophoretic Separation, Lipoproteins",
          "medical_specialty": "Clinical Chemistry",
          "regulation_number": "862.1475",
          "review_panel": "CH",
          "collected_at_iso": "2026-11-09T19:00:15.089514+00:00"
        }
      ]
    },
    {
      "id": "fda_drug_recalls",
      "title": "FDA Pharmaceutical Recalls & Regulatory Enforcement Feed",
      "category": "Healthcare & Life Sciences Data",
      "description": "The 100 most recent drug enforcement reports (recalls) from openFDA each refresh: recall number, firm, classification, status, reason and product description, accumulated into a rolling 90-day master file.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-09T19:00:13Z",
      "next_update_utc": "2026-11-10T07:00:13Z",
      "latest_records": 100,
      "master_records": 100,
      "retained_snapshots": 8,
      "completeness_pct": 100.0,
      "columns": [
        "recall_number",
        "recalling_firm",
        "classification",
        "status",
        "reason_for_recall",
        "product_description",
        "recall_initiation_date",
        "collected_at_iso"
      ],
      "price_monthly_usd": 178,
      "price_new_member_usd": 160,
      "price_oneoff_usd": 246,
      "badge": "Open-licence source",
      "source": "openFDA (U.S. Food & Drug Administration)",
      "licence": "Public domain (CC0)",
      "licence_url": "https://open.fda.gov/license/",
      "attribution": "Not endorsed or certified by the U.S. FDA.",
      "sample_csv_url": "samples/fda_drug_recalls_sample_50.csv",
      "preview_rows": [
        {
          "recall_number": "D-321-2016",
          "recalling_firm": "Kalman Health & Wellness, Inc. dba Essential Wellness Pharma",
          "classification": "Class II",
          "status": "Terminated",
          "reason_for_recall": "Lack of Assurance of Sterility:  A recall of all compounded sterile prepara...",
          "product_description": "Progesterone 100 mg/mL in Corn Oil Injection, 2 mL vials, Rx only, Essentia...",
          "recall_initiation_date": "20150903",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-0080-2021",
          "recalling_firm": "Albek De Mexico S.A. De C.V.",
          "classification": "Class II",
          "status": "Ongoing",
          "reason_for_recall": "CGMP Deviations: Next Advanced Antibacterial Hand Sanitizer was found to be...",
          "product_description": "Assured Instant Hand Sanitizer Aloe & Moisturizers (Ethyl Alcohol 70% v/v) ...",
          "recall_initiation_date": "20200730",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-0115-2026",
          "recalling_firm": "ProRx LLC",
          "classification": "Class II",
          "status": "Ongoing",
          "reason_for_recall": "Lack of Assurance of Sterility",
          "product_description": "Semaglutide Injection, 10 mg/4 mL (2.5 mg/mL), 4mL Multidose Vial, For Subc...",
          "recall_initiation_date": "20251015",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-1285-2020",
          "recalling_firm": "Teva Pharmaceuticals USA",
          "classification": "Class II",
          "status": "Terminated",
          "reason_for_recall": "Some bottles may contain mixed strengths of the product.",
          "product_description": "Dextroamphetamine Saccharate, Amphetamine Aspartate, Dextroamphetamine Sulf...",
          "recall_initiation_date": "20200522",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-0623-2022",
          "recalling_firm": "Perrigo Company PLC",
          "classification": "Class II",
          "status": "Terminated",
          "reason_for_recall": "CGMP Deviations: Products were manufactured with contaminated excipient tha...",
          "product_description": "No Drip Nasal Spray, Oxymetazoline HCl 0.05% Nasal Decongestant, 1 FL Oz (3...",
          "recall_initiation_date": "20211026",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-1398-2016",
          "recalling_firm": "Pharmedium Services, LLC",
          "classification": "Class II",
          "status": "Terminated",
          "reason_for_recall": "Presence of Particulate Matter: API contaminated with glass particulate was...",
          "product_description": "2 mcg/mL Fentanyl Citrate and 0.16% Bupivacaine HCl (Preservative Free) in ...",
          "recall_initiation_date": "20160505",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-1443-2014",
          "recalling_firm": "Pfizer Inc.",
          "classification": "Class III",
          "status": "Terminated",
          "reason_for_recall": "Labeling: Incorrect or missing lot and or Exp Date: The bottles were labele...",
          "product_description": "VIRACEPT (R) (nelfinavir mesylate) Tablets, 625 mg, 120-count bottle, Rx on...",
          "recall_initiation_date": "20140708",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        },
        {
          "recall_number": "D-0572-2024",
          "recalling_firm": "Little Moon Essentials LLC",
          "classification": "Class II",
          "status": "Ongoing",
          "reason_for_recall": "CGMP deviations",
          "product_description": "Little Moon Essentials, Crampy Belly Rub (Camphor 1.1%), Packaged as a) 4 F...",
          "recall_initiation_date": "20240620",
          "collected_at_iso": "2026-11-09T19:00:13.366278+00:00"
        }
      ]
    },
    {
      "id": "fda_food_recalls",
      "title": "FDA Food Safety Recall Alerts",
      "category": "Supply Chain, ESG & Risk Data",
      "description": "The 100 most recent food enforcement reports (recalls) from openFDA each refresh: recall number, firm, classification, reason, voluntary or mandated, and report date, accumulated into a rolling 90-day master file. United States data.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-09T19:00:13Z",
      "next_update_utc": "2026-11-10T07:00:13Z",
      "latest_records": 100,
      "master_records": 100,
      "retained_snapshots": 8,
      "completeness_pct": 100.0,
      "columns": [
        "recall_number",
        "recalling_firm",
        "classification",
        "reason_for_recall",
        "voluntary_mandated",
        "report_date",
        "collected_at_iso"
      ],
      "price_monthly_usd": 178,
      "price_new_member_usd": 160,
      "price_oneoff_usd": 246,
      "badge": "Open-licence source",
      "source": "openFDA (U.S. Food & Drug Administration)",
      "licence": "Public domain (CC0)",
      "licence_url": "https://open.fda.gov/license/",
      "attribution": "Not endorsed or certified by the U.S. FDA.",
      "sample_csv_url": "samples/fda_food_recalls_sample_50.csv",
      "preview_rows": [
        {
          "recall_number": "F-0276-2017",
          "recalling_firm": "Pharmatech LLC",
          "classification": "Class II",
          "reason_for_recall": "Recall initiated as a precautionary measure due to potential risk of produc...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20161102",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-0865-2017",
          "recalling_firm": "Magic Gourmet Trading Inc",
          "classification": "Class II",
          "reason_for_recall": "Mooncake products, manufactured and distributed by Magic Gourmet Trading, I...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20170118",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-0609-2015",
          "recalling_firm": "Oasis Brands, Inc",
          "classification": "Class I",
          "reason_for_recall": "Virginia State (VDACS) found Listeria monocytogenes in Lacteos Santa Martha...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20141210",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-1922-2012",
          "recalling_firm": "FreshPoint South Florida",
          "classification": "Class I",
          "reason_for_recall": "FreshPoint South Florida is recalling sliced fresh yellow onions and salsa ...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20120815",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-0904-2020",
          "recalling_firm": "Organic By Nature, Inc.",
          "classification": "Class III",
          "reason_for_recall": "Firm was notified by supplier that Organic Ground Flaxseed powder was under...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20200401",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-1578-2018",
          "recalling_firm": "Yukon Jackson",
          "classification": "Class III",
          "reason_for_recall": "Coffee Toffee is recalled because pecan is listed on the Ingredients statem...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20180620",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-0921-2020",
          "recalling_firm": "Rong Shing Trading NY Inc",
          "classification": "Class III",
          "reason_for_recall": "Product contains dried peaches, but front labeling of product stated dried ...",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20200506",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        },
        {
          "recall_number": "F-2326-2017",
          "recalling_firm": "Trophy Nut Co Inc",
          "classification": "Class II",
          "reason_for_recall": "The firm stated that the product contains undeclared allergens.",
          "voluntary_mandated": "Voluntary: Firm initiated",
          "report_date": "20170614",
          "collected_at_iso": "2026-11-09T19:00:13.302343+00:00"
        }
      ]
    },
    {
      "id": "arxiv_ai_research",
      "title": "arXiv AI Research Paper Metadata",
      "category": "Alternative Investment & Sentiment Signals",
      "description": "Metadata for the 30 most recently updated cs.AI papers on arXiv each refresh: title, link, 250-character abstract preview and update date, accumulated into a rolling 90-day master file.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-10T01:57:34Z",
      "next_update_utc": "2026-11-10T07:00:00Z",
      "latest_records": 30,
      "master_records": 30,
      "retained_snapshots": 1,
      "completeness_pct": 100.0,
      "columns": [
        "paper_title",
        "arxiv_url",
        "abstract_preview",
        "publication_date",
        "category",
        "collected_at_iso"
      ],
      "price_monthly_usd": 110,
      "price_new_member_usd": 99,
      "price_oneoff_usd": 153,
      "badge": "Open-licence source",
      "source": "arXiv.org paper metadata",
      "licence": "CC0 (metadata only)",
      "licence_url": "https://info.arxiv.org/help/api/tou.html",
      "attribution": "Thank you to arXiv for use of its open access interoperability. Not endorsed by arXiv.",
      "sample_csv_url": "samples/arxiv_ai_research_sample_50.csv",
      "preview_rows": [
        {
          "paper_title": "On Agentic Manipulation Policies",
          "arxiv_url": "http://arxiv.org/abs/2611.09892v1",
          "abstract_preview": "Recent work on robot manipulation has focused on specialist policies trained on demonstrations. We show that generalist AI models can control manipulators more reliably than specialist policies such as vision-language-action models (VLAs) and world-a",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse",
          "arxiv_url": "http://arxiv.org/abs/2611.09891v1",
          "abstract_preview": "Large language models reinvent the wheel all the time. They conflate task-solving with the execution of the solutions, which forces them to solve every problem from scratch. We show that once a task has been reasoned through, the application of its s",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning",
          "arxiv_url": "http://arxiv.org/abs/2611.09872v1",
          "abstract_preview": "Test-time reinforcement learning (TTRL) adapts pretrained language models to unlabeled target-domain data using self-generated pseudo-labels, whose reliability remains poorly understood. We analyze majority-vote supervision for TTRL with online Direc",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "GRAC: Graph-Based Retrieval-Augmented Captioning for Surgical Scene Description",
          "arxiv_url": "http://arxiv.org/abs/2611.09866v1",
          "abstract_preview": "Purpose: Surgical operative reports support procedural documentation, surgical training, performance assessment, and workflow review. However, extracting meaningful information often requires extensive manual review and clinical expertise. Automated ",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "Grasp-TAGS: Task-Aware Grasp Selection via Critic Distillation for Prehensile Loco-Manipulation",
          "arxiv_url": "http://arxiv.org/abs/2611.09864v1",
          "abstract_preview": "Loco-manipulation, which requires mobile manipulators to coordinate locomotion and manipulation over long horizons, is a key capability for large-object rearrangement in applications such as service robotics and warehouse automation. Despite recent p",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "Flow-Guided Target-Space Alignment via Path Consistency",
          "arxiv_url": "http://arxiv.org/abs/2611.09863v1",
          "abstract_preview": "Many multimodal alignment problems require mapping a source modality into a fixed space defined by a target modality, where the target space is not merely an intermediate embedding but is used directly for downstream analysis. In this setting, succes",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "Differentiable Nonlinear Model Predictive Control",
          "arxiv_url": "http://arxiv.org/abs/2505.01353v3",
          "abstract_preview": "The efficient computation of parametric solution sensitivities is a key challenge in the integration of learning-enhanced methods with nonlinear model predictive control, as their availability is crucial for many learning algorithms. This paper discu",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "paper_title": "Ensemble Methodology for Reference-Free Confidence Estimation in LLM-based Code Summarization",
          "arxiv_url": "http://arxiv.org/abs/2611.09846v1",
          "abstract_preview": "This paper describes an approach and use case to estimate the correctness of LLM-generated COBOL summaries without access to human-authored references. The core intuition is that inter-model agreement on semantics is informative about truth, and that",
          "publication_date": "2026-11-06",
          "category": "Computer Science (AI)",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        }
      ]
    },
    {
      "id": "wikipedia_entity_trends",
      "title": "Wikipedia Pageview Attention Tracker",
      "category": "Alternative Investment & Sentiment Signals",
      "description": "Daily English Wikipedia pageview counts for 6 tracked entities (Nvidia, OpenAI, Microsoft, Tesla, Bitcoin, Amazon) over the most recent 9 days. Pageviews only; it does not include search volume.",
      "update_frequency": "Every 12 Hours (06:00 & 18:00)",
      "last_updated_utc": "2026-11-10T01:57:34Z",
      "next_update_utc": "2026-11-10T07:00:00Z",
      "latest_records": 48,
      "master_records": 48,
      "retained_snapshots": 1,
      "completeness_pct": 100.0,
      "columns": [
        "entity",
        "date",
        "daily_views",
        "collected_at_iso"
      ],
      "price_monthly_usd": 110,
      "price_new_member_usd": 99,
      "price_oneoff_usd": 153,
      "badge": "Open-licence source",
      "source": "Wikimedia Pageviews API",
      "licence": "CC0",
      "licence_url": "https://dumps.wikimedia.org/other/pageviews/readme.html",
      "attribution": "Not endorsed by the Wikimedia Foundation.",
      "sample_csv_url": "samples/wikipedia_entity_trends_sample_50.csv",
      "preview_rows": [
        {
          "entity": "Nvidia",
          "date": "20261101",
          "daily_views": "7196",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261102",
          "daily_views": "7838",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261103",
          "daily_views": "8383",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261104",
          "daily_views": "7206",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261105",
          "daily_views": "7613",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261106",
          "daily_views": "7740",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261107",
          "daily_views": "8324",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        },
        {
          "entity": "Nvidia",
          "date": "20261108",
          "daily_views": "21027",
          "collected_at_iso": "2026-11-10T01:57:34+00:00"
        }
      ]
    }
  ]
};
