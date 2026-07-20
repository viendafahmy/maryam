// Surah Al-Kahf 18:60–82 root data — verb forms, derived words, and occurrences.
// Story of Mūsā and al-Khiḍr.
// Add a new root by copying an existing { id: '...', ... } block into this array.
// Whenever you add a root here, also add its matching entry to ROOT_LINKS
// in the page's app script so it becomes clickable in the verse explorer.
// Loaded via <script src="data/roots.js"></script> before the page script runs.

if (typeof window.ROOTS === 'undefined') { window.ROOTS = [
  {
    id: 'sbr',
    arabic: 'صبر',
    letters: 'ص - ب - ر',
    roman: 'ṣ-b-r',
    meaning: 'to be patient, to endure with restraint',
    semantic: 'Active, willed endurance. Ṣabr is not passive resignation — it is the deliberate binding of the self against impulse. The root image is of tying a camel\'s legs to keep it from wandering. Al-Khiḍr uses this root as the central test: can Mūsā bind his reaction when he does not understand?',
    quranCount: '103',
    maryamCount: 0,
    kahfCount: 9,
    memoryAid: 'ṣabr appears 9 times in vv. 60–82 alone — it is the thematic spine of the entire passage. Al-Khiḍr says it (لَن تَسْتَطِيعَ مَعِيَ صَبْرًا — v.67), Mūsā promises it (صَابِرًا — v.69), fails it twice, and al-Khiḍr closes with it (تَأْوِيلُ مَا لَمْ تَسْطِعْ عَلَيْهِ صَبْرًا — v.82). The word صَبَرَ originally meant to tie a camel at its legs — patience as self-binding.',
    forms: [
      { num: 'I', arabic: 'صَبَرَ', roman: 'ṣabara', pattern: 'faʿala', meaning: 'to be patient, to endure, to persevere', masdar: 'صَبْر', attested: true,
        detail: 'Form I (faʿala — action pattern): to actively exercise patience. Unlike many emotional states in Arabic that use faʿila (e.g. رَحِمَ, فَرِحَ), صَبَرَ uses faʿala — patience is an *action*, not just a feeling. The imperfect يَصْبِرُ (with kasra middle vowel) is common in the Quran.',
        perfect: [{p:'صَبَرَ',t:'he was patient'},{p:'صَبَرَتْ',t:'she was patient'},{p:'صَبَرْتُ',t:'I was patient'}],
        imperfect: [{p:'يَصْبِرُ',t:'he is patient'},{p:'تَصْبِرُ',t:'she is patient / you are patient'},{p:'أَصْبِرُ',t:'I am patient'}]
      },
      { num: 'II', arabic: 'صَبَّرَ', roman: 'ṣabbara', pattern: 'faʿʿala', meaning: 'to cause someone to be patient, to console', masdar: 'تَصْبِير', attested: true,
        detail: 'Form II (faʿʿala — causative/intensive): to make someone else patient; to console. صَبَّرَهُ عَلَى مُصِيبَتِهِ — "he consoled him over his loss." Less common in the Quran than Form I.' },
      { num: 'III', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Form III is not attested for this root.' },
      { num: 'IV', arabic: 'أَصْبَرَ', roman: 'aṣbara', pattern: 'afʿala', meaning: 'to cause to be patient; intensive expression of wonder', masdar: 'إِصْبَار', attested: true,
        detail: 'Form IV rare: can be used as a causative. Also appears in Quranic exclamations: مَا أَصْبَرَهُمْ عَلَى النَّارِ (2:175) — "how hardened/patient they are for the fire!" — here as an expression of astonishment at their brazenness.' },
      { num: 'V', arabic: 'تَصَبَّرَ', roman: 'taṣabbara', pattern: 'tafaʿʿala', meaning: 'to force oneself to be patient, to exercise patience deliberately', masdar: 'تَصَبُّر', attested: true,
        detail: 'Form V (reflexive of II): to make oneself patient by effort, to practice patience as a discipline. The Form V implies self-work — patience that does not come naturally but is cultivated.' },
      { num: 'VI–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Not commonly attested for this root.' },
    ],
    derived: [
      { arabic: 'صَبْر', roman: 'ṣabr', meaning: 'patience, endurance (the act)', pattern: 'faʿl — maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'صَابِر', roman: 'ṣābir', meaning: 'one who is patient (active state)', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'صَابِرًا', roman: 'ṣābiran', meaning: 'patient (accusative ḥāl — v.69)', pattern: 'fāʿil manṣūb — circumstantial', type: 'adj', badge: 'badge-adj' },
      { arabic: 'صَابِرُون', roman: 'ṣābirūn', meaning: 'the patient ones (plural)', pattern: 'fāʿilūn — sound plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'صَبُور', roman: 'ṣabūr', meaning: 'very patient (intensive)', pattern: 'faʿūl — intensive adjective', type: 'adj', badge: 'badge-adj' },
      { arabic: 'اصْطَبَرَ', roman: 'iṣṭabara', meaning: 'to practice patient endurance (Form VIII)', pattern: 'Form VIII — iṭtaʿala', type: 'verb', badge: 'badge-verb' },
      { arabic: 'مَصْبُور', roman: 'maṣbūr', meaning: 'one condemned to die patiently; one kept waiting', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
    ],
    occurrences: [
      { ref: '18:67', arabic: 'إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ <span class="occurrence-highlight">صَبْرًا</span>', trans: 'Indeed you will not be able to have <b>patience</b> with me', note: 'صَبْرًا: manṣūb — tamyīz (specification accusative) or mafʿūl bihi of تَسْتَطِيعَ. The first use — al-Khiḍr\'s assessment.' },
      { ref: '18:69', arabic: 'سَتَجِدُنِي إِن شَاءَ اللَّهُ <span class="occurrence-highlight">صَابِرًا</span>', trans: 'You will find me, if Allah wills, <b>patient</b>', note: 'صَابِرًا: active participle, ḥāl (second object of تَجِدُ) — "you will find me [in a state of being] patient." Mūsā\'s promise.' },
      { ref: '18:82', arabic: 'وَذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ <span class="occurrence-highlight">صَبْرًا</span>', trans: 'And that is the interpretation of that over which you could not have <b>patience</b>', note: 'صَبْرًا: same construction as v.67, closing the story\'s ring. The word with which al-Khiḍr opened (v.67) is the last content word of the explanation (v.82) — a perfect lexical ring structure.' },
    ]
  },

  {
    id: 'ʿlm',
    arabic: 'علم',
    letters: 'ع - ل - م',
    roman: 'ʿ-l-m',
    meaning: 'to know, to learn, to teach',
    semantic: 'Knowledge in its fullest sense — cognitive, spiritual, and experiential. This passage introduces two kinds of knowledge: the ʿilm ladunnī (knowledge directly from God\'s presence — al-Khiḍr\'s gift, v.65) and the knowledge Mūsā seeks to learn from him. The root appears ~854 times in the Quran — the most frequent root connected to a cognitive/epistemic concept.',
    quranCount: '854',
    maryamCount: 0,
    kahfCount: 5,
    memoryAid: 'In this passage, ع-ل-م appears in its most theologically charged form: عَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا (v.65) — "We taught him from Our immediacy a knowledge." The indefiniteness of عِلْمًا is the key: not *all* knowledge, but a *particular, unnamed* knowledge. Compare Mūsā\'s request: أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا (v.66) — both teaching and being taught come from the same root.',
    forms: [
      { num: 'I', arabic: 'عَلِمَ', roman: 'ʿalima', pattern: 'faʿila', meaning: 'to know, to be aware of', masdar: 'عِلْم', attested: true,
        detail: 'Form I (faʿila — state/experiential pattern): to be in a state of knowing. The kasra middle vowel is characteristic of states and emotional conditions — knowing is treated as a state of being, not just an action. يَعْلَمُ in the imperfect is a Divine attribute constantly in the Quran: اللهُ يَعْلَمُ (God knows).',
        perfect: [{p:'عَلِمَ',t:'he knew'},{p:'عَلِمَتْ',t:'she knew'},{p:'عَلِمْتُ',t:'I knew'}],
        imperfect: [{p:'يَعْلَمُ',t:'he knows'},{p:'تَعْلَمُ',t:'she knows / you know'},{p:'أَعْلَمُ',t:'I know'}]
      },
      { num: 'II', arabic: 'عَلَّمَ', roman: 'ʿallama', pattern: 'faʿʿala', meaning: 'to teach, to cause to know', masdar: 'تَعْلِيم', attested: true,
        detail: 'Form II (faʿʿala — causative): to cause someone to know = to teach. This is the form used in v.65: عَلَّمْنَاهُ (We taught him). And in v.66: تُعَلِّمَنِ (you teach me). Form II is the engine of education in Arabic — the same root as "to know" doubled to make "to teach."',
        perfect: [{p:'عَلَّمَ',t:'he taught'},{p:'عَلَّمَتْ',t:'she taught'},{p:'عَلَّمْنَا',t:'We taught (divine)'}],
        imperfect: [{p:'يُعَلِّمُ',t:'he teaches'},{p:'تُعَلِّمُ',t:'she teaches / you teach'},{p:'نُعَلِّمُ',t:'We teach'}]
      },
      { num: 'III', arabic: 'عَالَمَ', roman: 'ʿālama', pattern: 'fāʿala', meaning: 'to exchange knowledge with (rare)', masdar: 'مُعَالَمَة', attested: false,
        detail: 'Form III is not commonly attested for this root in the Quran. The important Form III-derived noun is عَالَم (world) — things that are "signs" of knowledge about God.' },
      { num: 'IV', arabic: 'أَعْلَمَ', roman: 'aʿlama', pattern: 'afʿala', meaning: 'to inform, to let know', masdar: 'إِعْلَام', attested: true,
        detail: 'Form IV (causative of Form I): to cause someone to know = to inform. إِعْلَام (iʿlām) is the modern Arabic word for media/communications. Different from Form II (عَلَّمَ = to teach systematically) — Form IV (أَعْلَمَ) means to convey a specific piece of information.',
        perfect: [{p:'أَعْلَمَ',t:'he informed'},{p:'أَعْلَمْتُ',t:'I informed'}],
        imperfect: [{p:'يُعْلِمُ',t:'he informs'},{p:'نُعْلِمُ',t:'we inform'}]
      },
      { num: 'V', arabic: 'تَعَلَّمَ', roman: 'taʿallama', pattern: 'tafaʿʿala', meaning: 'to learn (reflexive of being taught)', masdar: 'تَعَلُّم', attested: true,
        detail: 'Form V (reflexive of Form II): to receive teaching into oneself = to learn. تَعَلُّم is learning as a receptive act — the student\'s side of the teaching process. Mūsā\'s request to follow al-Khiḍr is precisely an act of تَعَلُّم.' },
      { num: 'X', arabic: 'اسْتَعْلَمَ', roman: 'istaʿlama', pattern: 'istafʿala', meaning: 'to seek to know, to inquire', masdar: 'اسْتِعْلَام', attested: false,
        detail: 'Form X (seeking): to seek knowledge, to inquire. اسْتِعْلَامَات (plural) is the modern word for intelligence/information services.' },
      { num: 'VI/VII/VIII/IX', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Not commonly attested for this root.' },
    ],
    derived: [
      { arabic: 'عِلْم', roman: 'ʿilm', meaning: 'knowledge, science', pattern: 'fiʿl — maṣdar/noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'عِلْمًا', roman: 'ʿilman', meaning: 'a knowledge (indefinite — v.65)', pattern: 'fiʿl manṣūb — accusative object', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'عَالِم', roman: 'ʿālim', meaning: 'one who knows, a scholar', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'عُلَمَاء', roman: 'ʿulamāʾ', meaning: 'scholars (plural)', pattern: 'fuʿalāʾ — broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'مَعْلُوم', roman: 'maʿlūm', meaning: 'known, specified', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
      { arabic: 'عَلَّام', roman: 'ʿallām', meaning: 'All-Knowing (intensified — divine)', pattern: 'faʿʿāl — intensive', type: 'adj', badge: 'badge-divine' },
      { arabic: 'أَعْلَم', roman: 'aʿlam', meaning: 'more/most knowing; God knows best', pattern: 'afʿal — elative/comparative', type: 'adj', badge: 'badge-adj' },
      { arabic: 'تَعْلِيم', roman: 'taʿlīm', meaning: 'teaching, education', pattern: 'Form II maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'عَالَم', roman: 'ʿālam', meaning: 'world, realm of creation', pattern: 'fāʿal — noun of scope', type: 'noun', badge: 'badge-noun' },
      { arabic: 'عَالَمِين', roman: 'ʿālamīn', meaning: 'all the worlds/all creation', pattern: 'fāʿalīn — plural', type: 'noun', badge: 'badge-plural' },
    ],
    occurrences: [
      { ref: '18:65', arabic: 'وَ<span class="occurrence-highlight">عَلَّمْنَاهُ</span> مِن لَّدُنَّا <span class="occurrence-highlight">عِلْمًا</span>', trans: 'And <b>We taught him</b> from Our immediacy a <b>knowledge</b>', note: 'عَلَّمْنَاهُ: Form II perfect 1pl divine + object suffix. عِلْمًا: indefinite accusative (second object of Form II). The indefiniteness is deliberate — a specific, unnamed kind of knowledge.' },
      { ref: '18:66', arabic: 'هَلْ أَتَّبِعُكَ عَلَىٰ أَن <span class="occurrence-highlight">تُعَلِّمَنِ</span> مِمَّا <span class="occurrence-highlight">عُلِّمْتَ</span> رُشْدًا', trans: 'May I follow you on the condition that you <b>teach me</b> from what <b>you were taught</b>?', note: 'تُعَلِّمَنِ: Form II imperfect subjunctive + object pronoun. عُلِّمْتَ: Form II passive perfect 2ms — the passive (fuʿʿilta) bringing God\'s teaching into the background.' },
    ]
  },

  {
    id: 'rwd',
    arabic: 'رود/أرد',
    letters: 'ر - و - د / أ - ر - د',
    roman: 'r-w-d / ʾ-r-d',
    meaning: 'to want, to intend, to will',
    semantic: 'Divine and human intention. This root (particularly in its Form IV: أَرَادَ — "he intended") is one of the most theologically significant roots in the Quran. It appears in this passage to mark every key decision: al-Khiḍr\'s own choices (فَأَرَدتُّ — v.79) and, more powerfully, God\'s will (فَأَرَادَ رَبُّكَ — v.82). The contrast between human and divine irāda is the story\'s theological heart.',
    quranCount: '175+',
    maryamCount: 0,
    kahfCount: 4,
    memoryAid: 'Watch for أَرَادَ / أَرَدْنَا / أَرَادَ رَبُّكَ in vv. 79–82 — three uses of the same root marking three layers of intention. First: al-Khiḍr\'s own will (فَأَرَدتُّ — I intended). Second: divine will through al-Khiḍr (فَأَرَدْنَا — We intended). Third: God\'s direct will (فَأَرَادَ رَبُّكَ — your Lord intended). The escalating agent reveals the story\'s true author.',
    forms: [
      { num: 'I', arabic: 'رَادَ', roman: 'rāda', pattern: 'fāʿala (hollow)', meaning: 'to go back and forth seeking; to scout', masdar: 'رَوْد / رِيَادَة', attested: false,
        detail: 'Form I is a hollow verb (middle radical wāw). The basic meaning is "to go back and forth in search of something" — like scouting a water source. This exploratory quality is preserved in Form IV (to seek/intend).' },
      { num: 'II', arabic: 'رَوَّدَ', roman: 'rawwada', pattern: 'faʿʿala', meaning: 'to scout, to break in (animals), to test', masdar: 'تَرْوِيد', attested: false,
        detail: 'Form II: intensive scouting/trying. Not commonly Quranic.' },
      { num: 'III', arabic: 'رَاوَدَ', roman: 'rāwada', pattern: 'fāʿala', meaning: 'to try to persuade someone toward something (repeated)', masdar: 'مُرَاوَدَة', attested: true,
        detail: 'Form III (reciprocal): to go back and forth persuading someone. Famously used for Zulaykha and Yūsuf: رَاوَدَتْهُ عَنْ نَفْسِهِ (12:23) — "she tried to seduce him." The reciprocal form adds the sense of persistent, back-and-forth persuasion.' },
      { num: 'IV', arabic: 'أَرَادَ', roman: 'arāda', pattern: 'afʿala (hollow)', meaning: 'to want, to intend, to will', masdar: 'إِرَادَة', attested: true,
        detail: 'Form IV (causative hollow verb): "to bring about a desire/intention." This is by far the most common form in the Quran. إِرَادَة (irāda) — will, intention — is a key theological concept (one of God\'s essential attributes in Islamic theology). The Form IV hollow imperfect: يُرِيدُ.',
        perfect: [{p:'أَرَادَ',t:'he intended/wanted'},{p:'أَرَادَتْ',t:'she intended'},{p:'أَرَدْتُ',t:'I intended'},{p:'أَرَدْنَا',t:'We intended (divine)'}],
        imperfect: [{p:'يُرِيدُ',t:'he wants/intends'},{p:'تُرِيدُ',t:'she wants'},{p:'نُرِيدُ',t:'We intend (divine)'}]
      },
      { num: 'V', arabic: 'تَرَوَّدَ', roman: 'tarawwada', pattern: 'tafaʿʿala', meaning: 'to move slowly and deliberately', masdar: 'تَرَوُّد', attested: false,
        detail: 'Form V: deliberate, unhurried movement. Not Quranic.' },
      { num: 'X', arabic: 'اسْتَرَادَ', roman: 'istarāda', pattern: 'istafʿala (hollow)', meaning: 'to seek to recover/retrieve', masdar: 'اسْتِرَادَة', attested: false,
        detail: 'Form X: to seek back, to retrieve. Not Quranic.' },
    ],
    derived: [
      { arabic: 'إِرَادَة', roman: 'irāda', meaning: 'will, intention (divine or human)', pattern: 'Form IV maṣdar (ifʿāla)', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مُرِيد', roman: 'murīd', meaning: 'one who wills/intends; spiritual seeker (Sufi)', pattern: 'Form IV active participle (mufʿil)', type: 'part', badge: 'badge-part' },
      { arabic: 'مُرَاد', roman: 'murād', meaning: 'that which is intended/desired', pattern: 'Form IV passive participle (mufʿal)', type: 'part', badge: 'badge-part' },
      { arabic: 'يُرِيدُ', roman: 'yurīdu', meaning: 'he wants/intends (divine: "it wants to...")', pattern: 'Form IV imperfect 3ms', type: 'verb', badge: 'badge-verb' },
      { arabic: 'مُرَاوَدَة', roman: 'murāwada', meaning: 'persistent persuasion (Form III maṣdar)', pattern: 'Form III maṣdar', type: 'masdar', badge: 'badge-masdar' },
    ],
    occurrences: [
      { ref: '18:77', arabic: 'جِدَارًا <span class="occurrence-highlight">يُرِيدُ</span> أَن يَنقَضَّ فَأَقَامَهُ', trans: 'A wall that <b>wanted</b> to collapse — so he set it upright', note: 'يُرِيدُ: Form IV imperfect 3ms — the wall is personified with irāda (will). Majāz (metaphor): the wall does not literally "want" but is depicted as if it has intention, to express its near-collapse.' },
      { ref: '18:79', arabic: '<span class="occurrence-highlight">فَأَرَدتُّ</span> أَنْ أَعِيبَهَا', trans: 'So <b>I intended</b> to make it defective', note: 'فَأَرَدتُّ: Form IV perfect 1ms — al-Khiḍr\'s own intention. First-person agent: human will (though divinely guided).' },
      { ref: '18:82', arabic: '<span class="occurrence-highlight">فَأَرَادَ رَبُّكَ</span> أَن يَبْلُغَا أَشُدَّهُمَا', trans: 'So <b>your Lord intended</b> that they reach their maturity', note: 'فَأَرَادَ رَبُّكَ: Form IV perfect 3ms — now explicitly God is the agent of intention. The shift from أَرَدتُّ (I) → أَرَدْنَا (We) → أَرَادَ رَبُّكَ (your Lord) across the three explanations maps the theological progression from human agent → divine plural → God named directly.' },
    ]
  },

  {
    id: 'qṣṣ',
    arabic: 'قصص',
    letters: 'ق - ص - ص',
    roman: 'q-ṣ-ṣ',
    meaning: 'to follow a track, to narrate',
    semantic: 'The root that means both "to follow a trail" and "to narrate a story." In verse 64, Mūsā and his companion قَصَصًا (retracing their footsteps) — and the word for their physical act of retracing is the same root as the Quran\'s word for storytelling. Narrative is etymologically: following the tracks of what happened.',
    quranCount: '30+',
    maryamCount: 0,
    kahfCount: 2,
    memoryAid: 'قَصَص literally means "to follow footprints/tracks" — like a tracker following an animal. This is why the same root means both physical retracing (v.64: ارْتَدَّا عَلَى آثَارِهِمَا قَصَصًا) and narrative storytelling (قَصَصٌ — a story you "track" through). The very genre this passage belongs to is named after the act of following a trail.',
    forms: [
      { num: 'I', arabic: 'قَصَّ', roman: 'qaṣṣa', pattern: 'faʿʿa (doubled)', meaning: 'to cut; to follow tracks; to narrate', masdar: 'قَصّ / قَصَص', attested: true,
        detail: 'Form I doubled verb (q-ṣ-ṣ): the doubling of ṣād. Two related meanings: (1) to cut/trim (القَصُّ — the cutting of hair or nails); (2) to follow a trail, track, narrate. Mūsā\'s mother follows the baby in the river: قَصِّيهِ (28:11) — "follow his trail." The narrative meaning emerges from this: a story is a trail you follow.',
        perfect: [{p:'قَصَّ',t:'he followed the track / narrated'},{p:'قَصَصْتُ',t:'I followed / I narrated'}],
        imperfect: [{p:'يَقُصُّ',t:'he follows / narrates'},{p:'نَقُصُّ',t:'We narrate (divine — frequent)'}]
      },
      { num: 'II', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Not attested.' },
      { num: 'III', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Not attested.' },
      { num: 'IV–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Not commonly attested for this root.' },
    ],
    derived: [
      { arabic: 'قَصَص', roman: 'qaṣaṣ', meaning: 'story, narration; retracing of tracks (v.64)', pattern: 'faʿal — maṣdar/noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'قِصَّة', roman: 'qiṣṣa', meaning: 'a story, a tale', pattern: 'fiʿla — noun of instance', type: 'noun', badge: 'badge-noun' },
      { arabic: 'قِصَص', roman: 'qiṣaṣ', meaning: 'stories, tales (plural)', pattern: 'fiʿal — broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'قَاصّ', roman: 'qāṣṣ', meaning: 'storyteller, narrator', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مَقْصُوص', roman: 'maqṣūṣ', meaning: 'narrated; followed (tracked)', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
      { arabic: 'قَصَصًا', roman: 'qaṣaṣan', meaning: 'by retracing (accusative ḥāl — v.64)', pattern: 'faʿal manṣūb — circumstantial', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'أَحْسَنَ الْقَصَصِ', roman: 'aḥsana l-qaṣaṣ', meaning: 'the best of narrations (Surah Yūsuf 12:3)', pattern: 'elative + definite genitive', type: 'noun', badge: 'badge-divine' },
    ],
    occurrences: [
      { ref: '18:64', arabic: 'فَارْتَدَّا عَلَىٰ آثَارِهِمَا <span class="occurrence-highlight">قَصَصًا</span>', trans: 'So they turned back, <b>retracing</b> their footsteps', note: 'قَصَصًا: manṣūb — mafʿūl muṭlaq (cognate accusative) or ḥāl. The physical act of retracing and the act of narration share one root. This passage, which narrates Mūsā retracing his steps, is itself a qaṣaṣ (narrative).' },
    ]
  },

  {
    id: 'ʾwl',
    arabic: 'أول',
    letters: 'أ - و - ل',
    roman: 'ʾ-w-l',
    meaning: 'to return to a first/fundamental meaning; to interpret',
    semantic: 'Interpretation as return to origins. التَّأْوِيل (taʾwīl) — the word al-Khiḍr uses three times in this passage — means to trace an act or text back to its fundamental reality. It is distinct from تَفْسِير (tafsīr = surface explanation). Al-Khiḍr\'s three explanations are the taʾwīl of his three acts: the hidden reality beneath what Mūsā could only see as injustice.',
    quranCount: '17',
    maryamCount: 0,
    kahfCount: 3,
    memoryAid: 'تَأْوِيل (taʾwīl) comes from أَوَّلَ — "to trace back to the first/origin." The word appears three times in this passage (vv.78, 82 twice), always as the thing al-Khiḍr promises to explain. His three explanations ARE the taʾwīl. In Islamic scholarship, taʾwīl is the technical term for interpretation of the Quran\'s metaphorical/inner meanings — as opposed to tafsīr, which is literal/surface explanation.',
    forms: [
      { num: 'I', arabic: 'آلَ', roman: 'āla', pattern: 'fāʿala (hollow)', meaning: 'to return to, to result in, to come back to an origin', masdar: 'أَوْل / مَآل', attested: true,
        detail: 'Form I hollow verb (first radical hamza, middle wāw): "to return to an original state." مَآل (maʾāl) — "what something eventually comes to, ultimate outcome" — derives from this form. Common in classical usage: آلَ الأَمْرُ إِلَى كَذَا — "the matter returned/resulted in such-and-such."' },
      { num: 'II', arabic: 'أَوَّلَ', roman: 'awwala', pattern: 'faʿʿala (weak-first)', meaning: 'to interpret, to trace back to first principles', masdar: 'تَأْوِيل', attested: true,
        detail: 'Form II: to actively interpret by returning to origins. تَأْوِيل (taʾwīl) is the Form II maṣdar on the pattern of تَفْعِيل → تَأْوِيل. "To ʾawwala a text or act" means to explain its underlying reality, not its surface appearance. This is the word al-Khiḍr uses for what he is about to give Mūsā: سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِعْ عَلَيْهِ صَبْرًا (v.78).',
        perfect: [{p:'أَوَّلَ',t:'he interpreted'},{p:'أَوَّلْتُ',t:'I interpreted'}],
        imperfect: [{p:'يُؤَوِّلُ',t:'he interprets'},{p:'نُؤَوِّلُ',t:'we interpret'}]
      },
      { num: 'III–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Not commonly attested for this root in its interpretive sense.' },
    ],
    derived: [
      { arabic: 'تَأْوِيل', roman: 'taʾwīl', meaning: 'interpretation; the underlying reality of an act/text', pattern: 'Form II maṣdar (taʿwīl pattern)', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مَآل', roman: 'maʾāl', meaning: 'ultimate outcome, final result', pattern: 'mafʿal — noun of result', type: 'noun', badge: 'badge-noun' },
      { arabic: 'أَوَّل', roman: 'awwal', meaning: 'first, the first; the beginning', pattern: 'afʿal — adjective', type: 'adj', badge: 'badge-adj' },
      { arabic: 'الْأَوَّل', roman: 'al-Awwal', meaning: 'The First (divine name)', pattern: 'with definite article', type: 'adj', badge: 'badge-divine' },
      { arabic: 'أُولَى', roman: 'ūlā', meaning: 'first (feminine)', pattern: 'feminine of awwal', type: 'adj', badge: 'badge-adj' },
    ],
    occurrences: [
      { ref: '18:78', arabic: 'سَأُنَبِّئُكَ بِ<span class="occurrence-highlight">تَأْوِيلِ</span> مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا', trans: 'I will inform you of the <b>interpretation</b> of that over which you could not have patience', note: 'بِتَأْوِيلِ: preposition بِـ + تَأْوِيل in genitive (majrūr as muḍāf). Al-Khiḍr uses the term precisely: not تَفْسِير (explanation of surface) but تَأْوِيل (the inner reality).' },
      { ref: '18:82', arabic: 'وَذَٰلِكَ <span class="occurrence-highlight">تَأْوِيلُ</span> مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا', trans: 'And that is the <b>interpretation</b> of that over which you could not have patience', note: 'تَأْوِيلُ: marfūʿ as khabar (predicate) of a nominal sentence — "that [is] the interpretation of..." The closing verse returns to the word of v.78, forming a ring around the three explanations.' },
    ]
  },

  {
    id: 'khshy',
    arabic: 'خشي',
    letters: 'خ - ش - ي',
    roman: 'kh-sh-y',
    meaning: 'to fear with reverence, to be in awe of',
    semantic: 'Reverent fear — distinct from خَوْف (fear of harm). خَشْيَة is fear mixed with respect and knowledge of the one feared. It is the emotion of the scholar who knows God\'s greatness (إِنَّمَا يَخْشَى اللهَ مِنْ عِبَادِهِ الْعُلَمَاءُ — "only the scholars among God\'s servants fear Him," 35:28). In v.80, divine خَشْيَة anticipates harm: فَخَشِينَا أَن يُرْهِقَهُمَا.',
    quranCount: '48',
    maryamCount: 0,
    kahfCount: 1,
    memoryAid: 'خَشِيَ is fear with knowledge — you fear something because you know its power. This is why the Quran reserves خَشْيَة for the truly God-conscious: the scholars (35:28), the prophets. In v.80 it is God Himself who "feared" (خَشِينَا) — meaning God foresaw and took action to prevent harm. Divine خَشْيَة = divine foreknowledge acting preventively.',
    forms: [
      { num: 'I', arabic: 'خَشِيَ', roman: 'khashiya', pattern: 'faʿila (defective)', meaning: 'to fear with reverence, to be in awe of', masdar: 'خَشْيَة / خَشَى', attested: true,
        detail: 'Form I (faʿila — state pattern, defective yāʾ third radical): to be in a state of reverential fear. The kasra middle vowel marks it as an emotional/cognitive state. يَخْشَى in the imperfect (alif maqṣūra). Crucially: the object of خَشِيَ is always something or someone whose power you recognize — it implies knowledge of the one feared.',
        perfect: [{p:'خَشِيَ',t:'he feared'},{p:'خَشِيَتْ',t:'she feared'},{p:'خَشِينَا',t:'We feared (divine — v.80)'}],
        imperfect: [{p:'يَخْشَى',t:'he fears'},{p:'تَخْشَى',t:'she fears'},{p:'أَخْشَى',t:'I fear'}]
      },
      { num: 'II–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Forms II–X are not commonly attested for this root in the Quran.' },
    ],
    derived: [
      { arabic: 'خَشْيَة', roman: 'khashya', meaning: 'reverential fear, awe', pattern: 'faʿla — maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'خَاشِع', roman: 'khāshiʿ', meaning: 'humble, submissive (from خ-ش-ع, related root)', pattern: 'fāʿil — participle of related root', type: 'part', badge: 'badge-part' },
      { arabic: 'خَشِي اللهَ', roman: 'khashiya llāha', meaning: 'to fear God (reverentially)', pattern: 'Form I + divine object', type: 'verb', badge: 'badge-verb' },
    ],
    occurrences: [
      { ref: '18:80', arabic: '<span class="occurrence-highlight">فَخَشِينَا</span> أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا', trans: 'So <b>We feared</b> he would overwhelm them with transgression and disbelief', note: 'خَشِينَا: Form I perfect 1pl — divine first person. God\'s "fear" here means divine foreknowledge of harm and action to prevent it. A uniquely intimate divine expression.' },
      { ref: '35:28 (context)', arabic: 'إِنَّمَا <span class="occurrence-highlight">يَخْشَى</span> اللهَ مِنْ عِبَادِهِ الْعُلَمَاءُ', trans: 'Only the scholars among God\'s servants truly <b>fear</b> Him', note: 'يَخْشَى: Form I imperfect 3ms, alif maqṣūra (defective verb). The verse establishes that khashya requires knowledge — which is exactly why it is used for al-Khiḍr\'s divinely-granted foreknowledge in 18:80.' },
    ]
  }
];

}
