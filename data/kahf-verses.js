// Surah Al-Kahf 18:60–82 — verse-by-verse grammar data.
// Story of Mūsā and al-Khiḍr.
// Add new verses by copying an existing block.
// Loaded via <script src="data/verses.js"></script> before the page script runs.

if (typeof window.verses === 'undefined') { window.verses = {
  60: {
    arabic: 'وَإِذْ قَالَ مُوسَىٰ لِفَتَىٰهُ لَا أَبْرَحُ حَتَّىٰ أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ أَوْ أَمْضِيَ حُقُبًا',
    transliteration: 'wa-idh qāla mūsā li-fatāhu lā abraḥu ḥattā ablugha majmaʿa l-baḥrayni aw amḍiya ḥuqubā',
    translation: 'And when Mūsā said to his boy-servant: I will not stop until I reach the junction of the two seas, or I will travel on for a long time',
    tags: ['verb', 'structure'],
    tagLabels: ['إِذْ temporal frame', 'لَا أَبْرَحُ negation of cessation', 'حَتَّى + subjunctive', 'Dual الْبَحْرَيْن'],
    summary: 'The vow — Mūsā resolves to find the junction of the two seas',
    analysis: [
      { word: 'وَإِذْ قَالَ مُوسَىٰ', detail: 'وَإِذْ: wāw al-ʿaṭf (conjunction) + إِذْ (temporal particle: "when"). This إِذْ opens a narrative flashback, framing the entire story of vv. 60–82 inside a remembered past event. قَالَ: Form I hollow verb (root ق-و-ل), past tense 3ms. مُوسَىٰ: proper noun, non-Arabic (aʿjamī), diptote — only two case vowels, alif maqṣūra final.' },
      { word: 'لِفَتَىٰهُ', detail: 'Preposition لِـ (to/for) + فَتَى (young man, servant, youth) + pronoun suffix هُ (his). فَتَى is a defective noun (manqūṣ, base ending in yāʾ): in iḍāfah it becomes فَتَا + pronoun. Identified in tafsīr as Yūshaʿ ibn Nūn (Joshua), Mūsā\'s companion and student. The word فَتَى implies a young companion on a journey, not merely a slave.' },
      { word: 'لَا أَبْرَحُ', detail: 'لَا: negation particle. أَبْرَحُ: Form I imperfect of root ب-ر-ح (to cease, to leave off). The expression لَا أَبْرَحُ is an idiomatic oath-like formula meaning "I will not stop / I will keep going." It negates *cessation* — not the action itself. Grammatically: لَا + present tense = habitual/future negation. Root ب-ر-ح is one of the five "sisters of كَانَ" (akhawāt kāna) — nāqiṣah verbs that negate continuation.' },
      { word: 'حَتَّىٰ أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ', detail: 'حَتَّى: particle of purpose/limit ("until"). It places the following verb in the subjunctive (manṣūb) mood. أَبْلُغَ: Form I imperfect of ب-ل-غ (to reach, to arrive), manṣūb — the alif at the end is the marker of the subjunctive (replacing the ḍamma of the indicative). مَجْمَعَ: ism al-makān (noun of place) from root ج-م-ع (to gather) — "the place where they gather/meet." الْبَحْرَيْنِ: dual noun of بَحْر (sea), genitive case (majrūr) as muḍāf ilayhi: "of the two seas." Dual: بَحْرَانِ (nominative) → بَحْرَيْنِ (genitive/accusative).' },
      { word: 'أَوْ أَمْضِيَ حُقُبًا', detail: 'أَوْ: disjunctive particle (or). أَمْضِيَ: Form I imperfect of م-ض-ي (to pass on, to proceed), subjunctive (manṣūb) — the yāʾ ending indicates a defective verb in the manṣūb. حُقُبًا: manṣūb — ẓarf al-zamān (adverb of time). From root ح-ق-ب, meaning a long stretch of time (typically 80 years in classical usage). Tanwīn fatḥa on an indefinite accusative time-noun. The phrase: "or I will journey on for ages" — expressing total, unconditioned commitment.' }
    ],
    highlight: 'لَا أَبْرَحُ is not a simple negation — ب-ر-ح is a sister of كَانَ (nāqiṣah verb) that negates *continuation of a state*. "I will not remain [in any place short of the goal]" — one of Arabic\'s most elegant ways to express an oath of perseverance.'
  },

  61: {
    arabic: 'فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا',
    transliteration: 'fa-lammā balagha majmaʿa bayni-himā nasiyā ḥūtahuma fa-ttakhadha sabīlahu fī l-baḥri saraban',
    translation: 'And when they reached the junction between them, they forgot their fish — and it took its way into the sea, burrowing',
    tags: ['verb', 'structure'],
    tagLabels: ['فَلَمَّا narrative hinge', 'Dual subject نَسِيَا', 'Form VIII اتَّخَذَ', 'ḥāl سَرَبًا'],
    summary: 'The forgotten fish — the sign that marks the meeting place',
    analysis: [
      { word: 'فَلَمَّا بَلَغَا', detail: 'فَـ: particle of immediate sequence (fāʾ al-taʿqīb). لَمَّا: temporal particle ("when, as soon as") — stronger and more sudden than إِذْ. It introduces a temporal clause where the main clause follows immediately. بَلَغَا: Form I perfect of ب-ل-غ (to reach), dual subject marker: the alif suffix ا indicates two subjects (Mūsā and his companion). This is the Arabic dual verb conjugation — third-person masculine dual past.' },
      { word: 'مَجْمَعَ بَيْنِهِمَا', detail: 'مَجْمَعَ: ism al-makān (noun of place) from ج-م-ع, manṣūb (direct object of بَلَغَا). بَيْنِهِمَا: adverb of place بَيْن (between) + dual pronoun suffix هِمَا (the two of them, referring to the two seas). بَيْن in iḍāfah with a dual pronoun is a complex but very frequent Quranic construction.' },
      { word: 'نَسِيَا حُوتَهُمَا', detail: 'نَسِيَا: Form I perfect of ن-س-ي (to forget) — defective verb (yāʾ third radical). Dual subject suffix ا: "the two of them forgot." حُوتَهُمَا: حُوت (fish) + dual possessive pronoun هُمَا (their, dual). Manṣūb (direct object). The fish is a symbol in tafsīr — Ibn ʿAbbās reports it was a salted fish that came to life at the junction of the waters. The forgetting is divinely arranged: the sign (the fish taking to the sea) happens precisely at the landmark they sought.' },
      { word: 'فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا', detail: 'اتَّخَذَ: Form VIII of أ-خ-ذ (to take) — Form VIII pattern iftaʿala, with assimilation of the tāʾ al-iftaʿāl (the Form VIII infix tāʾ assimilates to the first radical): اتَّخَذَ (not اِأْخَذَ). Meaning: "it took for itself." سَبِيلَهُ: "its path/way" — سَبِيل from root س-ب-ل, possessive pronoun هُ (its, referring to the fish). فِي الْبَحْرِ: prepositional phrase (in the sea), majrūr. سَرَبًا: ḥāl (circumstantial accusative), manṣūb — from root س-ر-ب meaning "tunneling, burrowing." The fish bored a tunnel through the water. This remarkable word gives the fish\'s movement a visual, physical quality.' }
    ],
    highlight: 'اتَّخَذَ is Form VIII of أ-خ-ذ — the Form VIII infix (ت) assimilates to the first radical producing اتَّخَذَ. This assimilation rule (idghām) applies whenever the first radical is ذ، د، ز، ر، ط، ظ. A critical phonological-morphological pattern to recognize.'
  },

  62: {
    arabic: 'فَلَمَّا جَاوَزَا قَالَ لِفَتَاهُ آتِنَا غَدَاءَنَا لَقَدْ لَقِينَا مِن سَفَرِنَا هَٰذَا نَصَبًا',
    transliteration: 'fa-lammā jāwazā qāla li-fatāhu ātinā ghadāʾanā la-qad laqīnā min safarina hādhā naṣaban',
    translation: 'And when they had passed on, he said to his boy-servant: Bring us our meal — we have certainly experienced hardship on this journey of ours',
    tags: ['verb', 'structure'],
    tagLabels: ['Form III جَاوَزَا', 'لَقَدْ emphasis', 'Demonstrative هَٰذَا', 'Form IV آتِنَا'],
    summary: 'The complaint of tiredness — just past the very place they were seeking',
    analysis: [
      { word: 'فَلَمَّا جَاوَزَا', detail: 'جَاوَزَا: Form III perfect of ج-و-ز (to pass, to cross) — dual subject ا. Form III (fāʿala) adds the sense of going *beyond* something, surpassing a boundary. The bitter irony: they passed the very landmark they were searching for — because they had forgotten the fish. The fāʾ of immediate sequence emphasizes the close succession of these events.' },
      { word: 'آتِنَا غَدَاءَنَا', detail: 'آتِنَا: Form IV imperative of أ-ت-ي/و (to bring) — "bring to us." Form IV imperative: the hamza replaces the alif of the afʿala pattern. نَا: first-person plural object suffix (us/our). غَدَاءَنَا: "our meal/lunch" from root غ-د-و (morning food, the midday meal). Manṣūb (direct object). The possessive suffix نَا attached to both the verb (آتِنَا) and the noun (غَدَاءَنَا) creates a rhythmic doubling in the original Arabic.' },
      { word: 'لَقَدْ لَقِينَا مِن سَفَرِنَا هَٰذَا نَصَبًا', detail: 'لَقَدْ: lām al-tawkīd (emphatic lām) + قَدْ (particle of emphasis with past tense, meaning "certainly/indeed"). Together لَقَدْ is among the strongest emphatic constructions in Arabic. لَقِينَا: Form I perfect of ل-ق-ي (to meet, to encounter, to experience). First-person plural: "we encountered." مِن سَفَرِنَا هَٰذَا: "from this journey of ours" — مِن سَفَرِنَا (prepositional phrase) + هَٰذَا (demonstrative pronoun: "this," masculine singular, agreeing with سَفَر). نَصَبًا: manṣūb, direct object (mafʿūl bihi) — from root ن-ص-ب, meaning fatigue, hardship, exhaustion. The irony: they were exhausted precisely because they overshot the destination.' }
    ],
    highlight: 'لَقَدْ = lām al-tawkīd + قَدْ + past verb. This triple emphasis (lām + qad + perfect) is one of the most forceful assertion structures in the Quran. When you see لَقَدْ, the speaker is insisting on the absolute truth of what follows.'
  },

  63: {
    arabic: 'قَالَ أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ فَإِنِّي نَسِيتُ الْحُوتَ وَمَا أَنسَانِيهُ إِلَّا الشَّيْطَانُ أَن أَذْكُرَهُ وَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا',
    transliteration: 'qāla ara-ayta idh awaynā ilā ṣ-ṣakhrati fa-innī nasītu l-ḥūta wa-mā ansānīhu illā sh-shayṭānu an adhkurahu wa-ttakhadha sabīlahu fī l-baḥri ʿajaban',
    translation: 'He said: Did you see? When we rested at the rock, I forgot the fish — and nothing made me forget it except Shayṭān — that I should mention it. And it took its way into the sea in an amazing manner',
    tags: ['verb', 'structure'],
    tagLabels: ['أَرَأَيْتَ attention formula', 'Exclusive إِلَّا', 'أَن + subjunctive noun clause', 'ḥāl عَجَبًا'],
    summary: 'The companion\'s confession — Shayṭān caused the forgetting',
    analysis: [
      { word: 'أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ', detail: 'أَرَأَيْتَ: Form I perfect of ر-أ-ي (to see), 2nd person singular masculine — literally "did you see?" But in Quranic usage, أَرَأَيْتَ is a formulaic attention-grabber: "Have you considered? Did you notice?" It introduces a remarkable event the listener needs to reconsider. إِذْ: temporal particle ("when"). أَوَيْنَا: Form I perfect of أ-و-ي (to take shelter, to rest at a place), 1st person plural. إِلَى الصَّخْرَةِ: "to/at the rock" — الصَّخْرَة (the rock) is the landmark already known from the journey context.' },
      { word: 'فَإِنِّي نَسِيتُ الْحُوتَ', detail: 'فَـ: fāʾ al-natīja (consequential). إِنِّي: إِنَّ + first-person suffix (indeed I). نَسِيتُ: Form I perfect of ن-س-ي (to forget), 1st person singular. الْحُوتَ: direct object (mafʿūl bihi), manṣūb — "the fish" (definite — the specific fish they were carrying). The confession is frank and immediate: فَإِنِّي presents it as an emphatic assertion.' },
      { word: 'وَمَا أَنسَانِيهُ إِلَّا الشَّيْطَانُ', detail: 'مَا...إِلَّا: the Arabic exclusion (ḥaṣr) construction — "nothing...except." This is one of the most important structures in the Quran. أَنسَانِيهُ: Form IV of ن-س-ي (causative: "to cause to forget") — "it caused me to forget it." Three suffixes stacked: أَنسَا (Form IV verb) + نِي (me, first-person object) + هُ (it, the fish, third-person object). Form IV with double object. الشَّيْطَانُ: fāʿil (subject), marfūʿ — Shayṭān is identified as the agent of forgetting.' },
      { word: 'أَن أَذْكُرَهُ', detail: 'أَن: subordinating particle creating a noun clause, placing the following verb in the subjunctive (manṣūb). أَذْكُرَهُ: Form I imperfect of ذ-ك-ر (to mention, to remember), 1st person singular, subjunctive (manṣūb — final ḍamma drops to fatḥa) + هُ (it, the fish). The full construction: "what made me forget it was Shayṭān [preventing] that I should mention it." The أَن clause gives the content of what Shayṭān prevented.' },
      { word: 'وَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا', detail: 'اتَّخَذَ سَبِيلَهُ: same Form VIII construction as verse 61 — "it took its way." عَجَبًا: ḥāl (circumstantial accusative), manṣūb — from root ع-ج-ب (to wonder, to be amazed). The fish moved "in an amazing manner" — the ḥāl describes the quality of the fish\'s movement. Note: in v. 61 the ḥāl was سَرَبًا (tunneling); here the same event is retold with عَجَبًا (amazingly) — showing how ḥāl can describe the same event from different perspectives.' }
    ],
    highlight: 'مَا...إِلَّا is the Arabic exclusion (ḥaṣr) formula — "nothing caused the forgetting EXCEPT Shayṭān." The fāʿil (Shayṭān) appears after إِلَّا in the nominative (marfūʿ). This structure — negation + إِلَّا + real subject — appears constantly in the Quran to assert exclusive agency or quality.'
  },

  64: {
    arabic: 'قَالَ ذَٰلِكَ مَا كُنَّا نَبْغِ فَارْتَدَّا عَلَىٰ آثَارِهِمَا قَصَصًا',
    transliteration: 'qāla dhālika mā kunnā nabghi fa-rtaddā ʿalā āthāri-himā qaṣaṣan',
    translation: 'He said: That is what we were seeking! — So they turned back, retracing their footsteps',
    tags: ['verb', 'structure'],
    tagLabels: ['Demonstrative subject ذَٰلِكَ', 'كُنَّا + imperfect (past continuous)', 'Form VIII فَارْتَدَّا', 'ḥāl قَصَصًا'],
    summary: 'The recognition — they turn back to find al-Khiḍr',
    analysis: [
      { word: 'ذَٰلِكَ مَا كُنَّا نَبْغِ', detail: 'ذَٰلِكَ: demonstrative pronoun (that) — mubtadaʾ (subject), referring to the sign of the fish. مَا: relative pronoun (that which / what). كُنَّا نَبْغِ: compound past continuous — كُنَّا (we were, Form I of كَانَ, 1st plural) + نَبْغِ (Form I imperfect of ب-غ-ي: to seek, to desire). This kāna + imperfect construction expresses a past continuous or habitual action: "what we were [continuously] seeking." The yāʾ of نَبْغِي is elided in the pause form (waṣl), producing نَبْغِ — a common Quranic feature of defective verbs.' },
      { word: 'فَارْتَدَّا عَلَىٰ آثَارِهِمَا', detail: 'فَـ: fāʾ al-taʿqīb (immediate consequence). ارْتَدَّا: Form VIII of ر-د-د (to return, to turn back) — doubled verb in Form VIII. The double dāl merges: ارْتَدَّ (he returned) → ارْتَدَّا (the two returned, dual alif). عَلَىٰ آثَارِهِمَا: "upon their traces/footsteps" — آثَار (broken plural of أَثَر, trace, footprint) from root أ-ث-ر. Dual possessive: هِمَا (their, of the two of them). The phrase "retracing their footsteps" is expressed idiomatically: literally "they returned upon their two traces."' },
      { word: 'قَصَصًا', detail: 'Maṣdar from root ق-ص-ص (to follow a track, to narrate). Manṣūb — functioning as mafʿūl muṭlaq (cognate/absolute object) or ḥāl (circumstantial): "retracing" or "in a retracing manner." This root ق-ص-ص is the same root as the word قَصَص (narrative, story) — the very literary genre that this passage itself exemplifies. The Quran uses a word whose root means "narrative retracing" to describe Mūsā physically retracing his steps. A profound self-referential linguistic choice.' }
    ],
    highlight: 'كُنَّا نَبْغِ = كَانَ + imperfect = past continuous. This is one of the most important compound tense constructions in Arabic. كَانَ + يَفْعَلُ = "was doing / used to do." It expresses ongoing, repeated, or habitual past action — distinct from the simple past (فَعَلَ).'
  },

  65: {
    arabic: 'فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا',
    transliteration: 'fa-wajadā ʿabdan min ʿibādinā ātaynāhu raḥmatan min ʿindinā wa-ʿallaynāhu min ladunnā ʿilman',
    translation: 'So they found a servant from among Our servants — We had given him mercy from Ourselves and had taught him from Ourselves a knowledge',
    tags: ['noun', 'structure'],
    tagLabels: ['Indefinite عَبْدًا', 'Form II عَلَّمْنَا', 'مِن لَّدُنَّا divine proximity', 'Two divine gifts'],
    summary: 'The meeting — al-Khiḍr introduced by his two divine gifts',
    analysis: [
      { word: 'فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا', detail: 'وَجَدَا: Form I perfect of و-ج-د (to find), dual subject (the two found). عَبْدًا: indefinite noun (servant), manṣūb (direct object). The indefiniteness of عَبْدًا is significant — al-Khiḍr is not named. He is introduced only through what God gave him, not through his identity. مِّنْ عِبَادِنَا: "from among Our servants" — عِبَاد (plural of عَبْد) + possessive نَا (Our). The preposition مِن is partitive (from among), indicating he is one of a category of God\'s specially close servants.' },
      { word: 'آتَيْنَاهُ رَحْمَةً مِّنْ عِندِنَا', detail: 'آتَيْنَاهُ: Form IV of أ-ت-ي (to give/bring to) — 1st person plural divine (We gave him). هُ: direct object (him). رَحْمَةً: second object (Form IV آتَى takes two objects) — "mercy," indefinite manṣūb. مِّنْ عِندِنَا: "from with Us / from Our presence." عِند is a locative particle meaning "at/with/in the presence of." With نَا: "from Our immediate presence." This phrase distinguishes ordinary divine mercy from a special, direct, intimate bestowal.' },
      { word: 'وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا', detail: 'عَلَّمْنَاهُ: Form II of ع-ل-م (to teach) — "We taught him." Form II of ع-ل-م is the causative of Form I (عَلِمَ: to know → عَلَّمَ: to cause to know = to teach). First-person plural divine + object suffix هُ. مِن لَّدُنَّا: "from Our immediate presence" — لَدُن is even more intimate than عِند: it means the very nearness of a person. عِلْمًا: direct object (mafʿūl bihi), indefinite, manṣūb — "a knowledge." The indefiniteness is theologically crucial: this is a specific, unnamed knowledge — not all knowledge, but a particular form of it. Classical scholars call it ʿilm ladunnī (knowledge from divine immediacy) — the technical term for al-Khiḍr\'s gift.' }
    ],
    highlight: 'Two divine gifts are grammatically parallel: آتَيْنَاهُ رَحْمَةً مِنْ عِندِنَا (mercy from Our presence) and عَلَّمْنَاهُ عِلْمًا مِن لَّدُنَّا (knowledge from Our immediacy). The shift from عِند to لَدُن marks an intensification — لَدُن is more intimate than عِند. The knowledge is even closer to God than the mercy was.'
  },

  66: {
    arabic: 'قَالَ لَهُ مُوسَىٰ هَلْ أَتَّبِعُكَ عَلَىٰ أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا',
    transliteration: 'qāla lahu mūsā hal attabiʿuka ʿalā an tuʿallimani mimmā ʿullimta rushdan',
    translation: 'Mūsā said to him: May I follow you on the condition that you teach me from what you have been taught of right guidance?',
    tags: ['verb', 'structure'],
    tagLabels: ['هَل interrogative (request)', 'Form VIII اتَّبَعَ', 'عَلَى أَن conditional', 'Passive عُلِّمْتَ'],
    summary: 'Mūsā\'s humble request — the student asks to follow the teacher',
    analysis: [
      { word: 'هَلْ أَتَّبِعُكَ', detail: 'هَل: interrogative particle — in classical Arabic, هَل expects a yes/no answer. But here, used with the first-person imperfect, it functions as a polite request: "May I follow you? Would you permit me to follow you?" — an interrogative of seeking permission, not seeking information. أَتَّبِعُكَ: Form VIII of ت-ب-ع (to follow) — the Form VIII pattern (iftaʿāl) here means "to actively, deliberately follow." كَ: second-person object suffix. Mūsā does not command — he asks.' },
      { word: 'عَلَىٰ أَن تُعَلِّمَنِ', detail: 'عَلَى أَن: "on the condition that / provided that." عَلَى is the preposition (on/upon) + أَن (subordinating particle creating a noun clause). تُعَلِّمَنِ: Form II imperfect of ع-ل-م (to teach), 2nd person masculine singular, with nūn al-tawkīd khaffy (light emphatic nūn) + yāʾ (me) — contracted to نِ in pause. The emphatic nūn underscores the seriousness of the condition: "that you TEACH me." Form II: the causative (tuʿallimani = cause me to know = teach me).' },
      { word: 'مِمَّا عُلِّمْتَ رُشْدًا', detail: 'مِمَّا: مِن + مَا (relative: "from what"). عُلِّمْتَ: Form II passive perfect of ع-ل-م — "you were taught." The passive (fuʿʿila pattern for Form II: عُلِّمَ) removes the agent (God) and focuses on the recipient and the gift. رُشْدًا: manṣūb — this is the second object of Form II عَلَّمَ (in the original active construction, عَلَّمَكَ اللهُ رُشْدًا — "God taught you right-guidance"), now surfacing as a ḥāl or tamyīz (specification) in the passive. From root ر-ش-د (to be rightly guided, to be mature in judgment). رُشْد is guidance characterized by sound, mature reasoning — more cognitive than هِدَايَة (which is more spiritual/directional).' }
    ],
    highlight: 'عُلِّمْتَ is Form II passive perfect — note the pattern: fuʿʿila (ʿullima) → fuʿʿilta (ʿullimta, 2nd person). Every Form (I–X) has its own passive pattern. Form II passive is fuʿʿila. When you see a verb with ُ on the first radical and ِ on the second, you are looking at a passive verb — regardless of form.'
  },

  67: {
    arabic: 'قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا',
    transliteration: 'qāla innaka lan tastaṭīʿa maʿiya ṣabran',
    translation: 'He said: Indeed you will not be able to have patience with me',
    tags: ['verb', 'particle'],
    tagLabels: ['إِنَّ + كَ accusative', 'لَن + subjunctive (categorical future negation)', 'Form X اسْتَطَاعَ', 'Maṣdar صَبْرًا'],
    summary: 'Al-Khiḍr\'s first warning — patience beyond Mūsā\'s capacity',
    analysis: [
      { word: 'إِنَّكَ', detail: 'إِنَّ: emphatic particle (indeed/verily). كَ: second-person singular masculine suffix — the ismu inna (subject of إِنَّ), placed in the accusative (manṣūb) by إِنَّ\'s governance. This is the standard إِنَّ construction: إِنَّ + noun/pronoun (accusative) + predicate. Al-Khiḍr opens with إِنَّ to make his statement maximally certain and emphatic — this is not a guess but a definitive assessment.' },
      { word: 'لَن تَسْتَطِيعَ', detail: 'لَن: negation particle for the future — the strongest future negation in Arabic. Unlike لَا (present/habitual negation) or لَمْ (past negation via jussive), لَن negates a future action categorically and permanently, using the subjunctive (manṣūb) mood. تَسْتَطِيعَ: Form X of ط-و-ع (to obey, to be tractable) — Form X means "to seek to do" or "to be capable of": تَسْتَطِيعُ = "you are able." Manṣūb after لَن: final ḍamma drops to fatḥa.' },
      { word: 'مَعِيَ صَبْرًا', detail: 'مَعِيَ: adverb مَعَ (with/together) + first-person suffix يَ (me/my). The pronunciation shift from مَعَ to مَعِيَ when followed by yāʾ is a standard Arabic phonological adjustment. صَبْرًا: manṣūb — this functions as either a mafʿūl bihi (object of تَسْتَطِيعَ: "you cannot bear patience") or a tamyīz (specification accusative: "you cannot manage — in terms of patience"). Root: ص-ب-ر (to be patient, to endure). The word صَبْر refers specifically to active, willed endurance — patience as a practice of self-restraint, not passive resignation.' }
    ],
    highlight: 'لَن + subjunctive = categorical future negation. This is stronger than لَا (present) and carries finality: "you will NEVER be able." Compare the three negation tools: لَا + imperfect (habitual/present), لَمْ + jussive (past), لَن + subjunctive (categorical future). Al-Khiḍr uses the most absolute one available.'
  },

  68: {
    arabic: 'وَكَيْفَ تَصْبِرُ عَلَىٰ مَا لَمْ تُحِطْ بِهِ خُبْرًا',
    transliteration: 'wa-kayfa taṣbiru ʿalā mā lam tuḥiṭ bihi khubran',
    translation: 'And how can you be patient about something you have not encompassed in knowledge?',
    tags: ['verb', 'particle'],
    tagLabels: ['كَيْفَ rhetorical question', 'لَمْ + jussive تُحِطْ', 'Form IV أَحَاطَ', 'Tamyīz خُبْرًا'],
    summary: 'The rhetorical challenge — knowledge is a prerequisite for patience',
    analysis: [
      { word: 'وَكَيْفَ تَصْبِرُ', detail: 'كَيْفَ: interrogative adverb of manner ("how?"). Here it is rhetorical — not seeking information but making the impossibility vivid. تَصْبِرُ: Form I imperfect of ص-ب-ر (to be patient), 2nd person masculine singular, indicative mood (marfūʿ, ḍamma). The rhetorical force: "HOW COULD you possibly be patient?" The question does not expect an answer — it expects the listener to feel the impossibility.' },
      { word: 'عَلَىٰ مَا لَمْ تُحِطْ بِهِ', detail: 'عَلَى: preposition (about/over/concerning). مَا: relative pronoun ("that which / what"). لَمْ تُحِطْ: لَمْ (past negation) + Form IV jussive of ح-و-ط (to surround, to encompass). Form IV (afʿala → yuḥīṭu → jussive: tuḥiṭ) means "to cause to surround / to encompass completely." The jussive of this hollow verb drops the wāw: يُحِيطُ → يُحِطْ. بِهِ: preposition بِـ + pronoun هِ (with it / in it). The full phrase: "that which you have not completely encompassed." The verb أَحَاطَ بِـ is an idiomatic expression: to encompass something in knowledge = to know it thoroughly.' },
      { word: 'خُبْرًا', detail: 'Manṣūb — tamyīz (accusative of specification): "in terms of knowledge/experience." From root خ-ب-ر (to know through direct experience). خُبْر is knowledge that comes from *having been through* something — experiential knowledge. This is subtly different from عِلْم (general knowledge) or فِقْه (legal understanding). The verse implies: you cannot be patient about things whose inner experience you have not lived.' }
    ],
    highlight: 'أَحَاطَ بِـ (Form IV of ح-و-ط) is one of the great Quranic expressions for divine omniscience: اللهُ بِكُلِّ شَيْءٍ مُحِيطٌ — "God encompasses all things." Here it is used negatively for Mūsā: he has not encompassed this knowledge. The same word used for God\'s all-knowing is used to describe Mūsā\'s limitation.'
  },

  69: {
    arabic: 'قَالَ سَتَجِدُنِي إِن شَاءَ اللَّهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا',
    transliteration: 'qāla sa-tajidunī in shāʾa llāhu ṣābiran wa-lā aʿṣī laka amran',
    translation: 'He said: You will find me, if Allah wills, patient — and I will not disobey you in any matter',
    tags: ['verb', 'particle'],
    tagLabels: ['سَـ future prefix', 'إِن شَاءَ اللَّهُ conditional', 'Active participle صَابِرًا', 'لَا + imperfect (vow)'],
    summary: 'Mūsā\'s promise — humility, with reliance on God\'s will',
    analysis: [
      { word: 'سَتَجِدُنِي', detail: 'سَـ: prefix of the near future (will, shortly). تَجِدُ: Form I imperfect of و-ج-د (to find). نِي: first-person singular object suffix (me). Together: "you will find me." The سَـ prefix — attached directly to the imperfect verb — is the most economical way to express the future in Arabic. It implies imminence (as opposed to سَوْفَ, which implies a more distant future).' },
      { word: 'إِن شَاءَ اللَّهُ', detail: 'إِن: conditional particle ("if"). شَاءَ: Form I perfect hollow verb from ش-ي-أ (to will, to wish) — "willed/wished." اللَّهُ: subject (fāʿil), marfūʿ. This is the famous "inshāʾallāh" — a complete conditional sentence. Importantly, Mūsā says إِن شَاءَ اللَّهُ before his promise: the conditional acknowledgment of divine will before a human commitment. The Quran uses Mūsā\'s own story here to model the correct use of this phrase — one should not promise without attributing the ability to fulfill that promise to God\'s will.' },
      { word: 'صَابِرًا', detail: 'Active participle (ism fāʿil) of ص-ب-ر, pattern fāʿil → ṣābir. Manṣūb — functioning as the second object of تَجِدُ (verb of finding takes two objects: "you will find me [as] patient"). This is the same structure as: وَجَدَهُ صَابِرًا — "he found him patient." The active participle صَابِرًا implies an active, ongoing quality: not just "having been patient" but "being in a state of patience."' },
      { word: 'وَلَا أَعْصِي لَكَ أَمْرًا', detail: 'لَا أَعْصِي: لَا (negation) + أَعْصِي (Form I imperfect of ع-ص-ي — to disobey, to rebel). The imperfect after لَا here functions as a vow: "I will not disobey." Root ع-ص-ي (defective verb with yāʾ third radical): in the imperfect the yāʾ appears as يَعْصِي / أَعْصِي. لَكَ: preposition لـ + pronoun كَ (you). أَمْرًا: indefinite noun (a matter, a command), manṣūb — direct object. The indefiniteness أَمْرًا is important: "any matter whatsoever" — a blanket, absolute vow of obedience.' }
    ],
    highlight: 'Mūsā uses إِن شَاءَ اللَّهُ before his promise — the Quran is teaching through narrative: the correct response to al-Khiḍr\'s warning is not bravado but humble reliance on God\'s enabling will. The إِن شَاءَ اللَّهُ is not a hedge but an acknowledgment of one\'s own insufficiency without God.'
  },

  70: {
    arabic: 'قَالَ فَإِنِ اتَّبَعْتَنِي فَلَا تَسْأَلْنِي عَن شَيْءٍ حَتَّىٰ أُحْدِثَ لَكَ مِنْهُ ذِكْرًا',
    transliteration: 'qāla fa-ini ttabaʿtanī fa-lā tasʾalnī ʿan shayʾin ḥattā uḥditha laka minhu dhikran',
    translation: 'He said: Then if you follow me, do not ask me about anything until I myself bring it up to you',
    tags: ['verb', 'structure'],
    tagLabels: ['Conditional إِنِ ... فَـ', 'لَا تَسْأَلْ prohibition (jussive)', 'Form IV أَحْدَثَ', 'حَتَّى + subjunctive'],
    summary: 'The condition of companionship — silence until explanation is offered',
    analysis: [
      { word: 'فَإِنِ اتَّبَعْتَنِي فَلَا تَسْأَلْنِي', detail: 'فَـ: fāʾ opening the conditional frame. إِنِ: conditional particle "if" (the kasra is assimilation before the initial alif of اتَّبَعْتَنِي). اتَّبَعْتَنِي: Form VIII of ت-ب-ع (to follow deliberately), 2nd person singular perfect + first-person object suffix نِي. This is the protasis (condition) of the conditional sentence. فَـ: the apodosis fāʾ — "then." لَا تَسْأَلْنِي: لَا (prohibition) + Form I imperfect jussive of س-أ-ل (to ask) — 2nd person singular. Prohibition: لَا + jussive = "do not!" The jussive cuts the nūn: تَسْأَلُنِي → تَسْأَلْنِي.' },
      { word: 'عَن شَيْءٍ', detail: 'عَن: preposition (about, concerning). شَيْءٍ: indefinite noun (thing, anything), majrūr (after عَن). The combination لَا تَسْأَلْنِي عَن شَيْءٍ = "do not ask me about anything." The indefinite شَيْءٍ with negation gives universal scope — not a thing, no thing whatsoever. This is a total prohibition on questioning, even implicit interrogation.' },
      { word: 'حَتَّىٰ أُحْدِثَ لَكَ مِنْهُ ذِكْرًا', detail: 'حَتَّى: particle of limit ("until"). أُحْدِثَ: Form IV imperfect of ح-د-ث (to occur, to originate), subjunctive (manṣūb) after حَتَّى — first-person singular. Form IV (afʿala) of ح-د-ث means "to bring about, to initiate, to cause to occur." لَكَ: for you (dative). مِنْهُ: "from it" (referring to each event). ذِكْرًا: maṣdar of ذ-ك-ر (mention, remembrance), manṣūb — "a mention/an account." The full phrase: "until I myself initiate for you, from it, a mention" — meaning: al-Khiḍr will explain things on his own timetable, not on Mūsā\'s schedule.' }
    ],
    highlight: 'إِنِ + perfect + فَـ + jussive/imperfect = the standard Arabic conditional (sharṭ wa-jawāb). The condition uses the perfect tense (even for a future situation), and the response uses either the jussive or imperfect. This conditional structure appears hundreds of times in the Quran — learn its signature: إِنْ (condition) / فَـ (result).'
  },

  71: {
    arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا رَكِبَا فِي السَّفِينَةِ خَرَقَهَا قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْئًا إِمْرًا',
    transliteration: 'fa-nṭalaqā ḥattā idhā rakibā fī s-safīnati kharaqahā qāla a-kharaqtahā li-tughriqа ahlahā la-qad jiʾta shayʾan imrā',
    translation: 'So they set off, until when they boarded the ship, he made a hole in it. He said: Have you made a hole in it to drown its passengers? You have done a terrible thing!',
    tags: ['verb', 'structure'],
    tagLabels: ['حَتَّى إِذَا narrative formula', 'Form V انْطَلَقَا', 'لَام التَّعْلِيل لِـ + subjunctive', 'لَقَدْ + جِئْتَ emphasis'],
    summary: 'First act: the ship — al-Khiḍr scuttles the boat and Mūsā objects',
    analysis: [
      { word: 'فَانطَلَقَا حَتَّىٰ إِذَا', detail: 'انطَلَقَا: Form VII of ط-ل-ق (to release, to set free) — Form VII is the reflexive/passive of Form I: "they released themselves / they set off." Dual alif. حَتَّى إِذَا: a compound narrative formula — "until, when." حَتَّى introduces the limit of their walking; إِذَا introduces the moment of arrival as a sudden event. This حَتَّى إِذَا formula appears throughout the Quran at moments of sudden encounter or transition. It creates narrative suspense.' },
      { word: 'رَكِبَا فِي السَّفِينَةِ خَرَقَهَا', detail: 'رَكِبَا: Form I perfect of ر-ك-ب (to ride, to board), dual. فِي السَّفِينَةِ: "in/onto the ship" (السَّفِينَة: the ship, from root س-ف-ن). خَرَقَهَا: Form I perfect of خ-ر-ق (to pierce, to make a hole in) + هَا (it, the ship). No conjunction between the two verbs — immediate, asyndetic sequence. They boarded, [and immediately] he pierced it. The abrupt juxtaposition mirrors the shocking swiftness of the action.' },
      { word: 'قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا', detail: 'أَ: hamzat al-istifhām (interrogative hamza) — "Did you?" Mūsā cannot contain himself despite his promise. لِتُغْرِقَ: lām al-taʿlīl (lām of purpose) + Form IV imperfect subjunctive of غ-ر-ق (to drown/to cause to drown). Form IV تُغْرِقُ = "you cause to drown." After lām al-taʿlīl, the verb goes to subjunctive (manṣūb): تُغْرِقَ. أَهْلَهَا: "its people/passengers" — أَهْل (family, people, those belonging to) + هَا (it, the ship). Mūsā interprets the action through apparent cause: you sank the ship IN ORDER TO drown its people.' },
      { word: 'لَقَدْ جِئْتَ شَيْئًا إِمْرًا', detail: 'لَقَدْ: emphatic lām + قَدْ (certainty). جِئْتَ: Form I perfect of ج-ي-أ (to come/bring), 2nd person singular — here with the idiomatic sense "you have brought/done." شَيْئًا: indefinite manṣūb (a thing, something). إِمْرًا: adjective or second noun, manṣūb — from root أ-م-ر (affair, matter) in the intensive pattern: "a monstrous thing, an enormous thing." Some scholars read إِمْر as a separate noun meaning "calamity." Either way, it intensifies: "you have done something truly terrible."' }
    ],
    highlight: 'حَتَّى إِذَا is a pivoting narrative formula — حَتَّى (limit: "until") + إِذَا (sudden event: "when suddenly"). This combination appears 12 times in the Quran, always at moments of unexpected encounter or shocking transition. It is the Quran\'s narrative "zoom lens."'
  },

  72: {
    arabic: 'قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا',
    transliteration: 'qāla a-lam aqul laka innaka lan tastaṭīʿa maʿiya ṣabran',
    translation: 'He said: Did I not tell you that you would not be able to have patience with me?',
    tags: ['verb', 'particle'],
    tagLabels: ['أَلَمْ rhetorical question', 'Jussive أَقُل (hollow verb)', 'Repetition of v. 67 — structural echo'],
    summary: 'Al-Khiḍr\'s first rebuke — verbatim repetition as a literary device',
    analysis: [
      { word: 'أَلَمْ أَقُل لَّكَ', detail: 'أَ: hamzat al-istifhām (interrogative hamza). لَمْ: past negation placing the verb in jussive. أَقُل: Form I jussive of ق-و-ل — hollow verb, jussive drops the wāw: يَقُولُ → يَقُلْ → أَقُلْ (first person). "Did I not say to you?" — a rhetorical question expecting "Yes, you did." This is softer than a direct accusation but more pointed: it forces Mūsā to remember his own promise and al-Khiḍr\'s warning. لَّكَ: preposition لـ + pronoun كَ (to you).' },
      { word: 'إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا', detail: 'This entire clause is a verbatim repetition of verse 67. In Quranic narrative, deliberate verbatim repetition (takrār) is never careless — it is a structural device. The repetition here: (1) shows al-Khiḍr was right from the start; (2) holds Mūsā to his original vow; (3) invites the reader to compare — Mūsā promised patience (v. 69) yet broke it immediately (v. 71). The contrast between promise and failure is the lesson. إِنَّكَ لَن تَسْتَطِيعَ: إِنَّ + accusative pronoun + لَن + subjunctive Form X of ط-و-ع.' }
    ],
    highlight: 'Deliberate repetition (takrār) in the Quran is a rhetorical device, not redundancy. أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا appears twice (vv. 72, 75) — framing Mūsā\'s two failures symmetrically. The reader is meant to hear the echo and feel the irony.'
  },

  73: {
    arabic: 'قَالَ لَا تُؤَاخِذْنِي بِمَا نَسِيتُ وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا',
    transliteration: 'qāla lā tuʾākhidhnī bi-mā nasītu wa-lā turhiqnī min amrī ʿusran',
    translation: 'He said: Do not take me to account for what I forgot, and do not burden me in my matter with difficulty',
    tags: ['verb', 'particle'],
    tagLabels: ['Form III تُؤَاخِذ prohibition', 'Form IV تُرْهِق prohibition', 'Maṣdar عُسْرًا (second object)', 'مَا نَسِيتُ noun clause'],
    summary: 'Mūsā\'s apology — invoking forgetting and asking for ease',
    analysis: [
      { word: 'لَا تُؤَاخِذْنِي بِمَا نَسِيتُ', detail: 'لَا تُؤَاخِذْنِي: prohibition (لَا + jussive) — "do not hold me to account." تُؤَاخِذ: Form III of أ-خ-ذ (to take, to seize) — Form III adds the sense of a directed, mutual or intensive action: to call someone to account, to penalize. جussive drops the case vowel. نِي: first-person object (me). بِمَا: preposition بِـ (for, because of) + مَا (relative: "that which"). نَسِيتُ: Form I perfect of ن-س-ي (to forget), 1st person singular. Full clause: "do not hold me responsible for what I forgot." Mūsā invokes النِّسْيَان (forgetting) as an excuse — legitimate mitigation in Islamic jurisprudence (one of the three things for which the ummah is forgiven, per hadith).' },
      { word: 'وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا', detail: 'لَا تُرْهِقْنِي: prohibition — "do not burden me / do not overwhelm me." تُرْهِق: Form IV of ر-ه-ق (to cover, to overlay with something oppressive), jussive + نِي. Form IV is causative: "cause burden upon me." مِنْ أَمْرِي: "from my affair/matter" — مِن here is partitive (from within the scope of). عُسْرًا: second object of Form IV تُرْهِق (causative verbs can take two objects: burden me with difficulty) — from root ع-س-ر (hardship, difficulty). Manṣūb. The antonym of عُسْر is يُسْر (ease), which appears in the famous Quranic promise: إِنَّ مَعَ الْعُسْرِ يُسْرًا.' }
    ],
    highlight: 'Form III تُؤَاخِذ vs Form IV تُرْهِق in the same verse — a study in form meanings: Form III (fāʿala) = intensive/directed action between two parties (holding to account); Form IV (afʿala) = causative (causing burden upon someone). Mūsā asks for relief from both: accountability AND burden.'
  },

  74: {
    arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا لَقِيَا غُلَامًا فَقَتَلَهُ قَالَ أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ لَّقَدْ جِئْتَ شَيْئًا نُّكْرًا',
    transliteration: 'fa-nṭalaqā ḥattā idhā laqiyā ghulāman fa-qatalahu qāla a-qatalta nafsan zakiyyatan bi-ghayri nafsin la-qad jiʾta shayʾan nukran',
    translation: 'So they set off again, until when they met a boy, he killed him. He said: Have you killed a pure soul without [that soul having killed] a soul? You have done a hateful thing!',
    tags: ['verb', 'structure'],
    tagLabels: ['حَتَّى إِذَا repeat formula', 'نَفْسًا زَكِيَّةً (accusative + naʿt)', 'بِغَيْرِ نَفْسٍ elliptical clause', 'شَيْئًا نُّكْرًا (escalation from v.71)'],
    summary: 'Second act: the boy — the killing of an innocent child',
    analysis: [
      { word: 'فَانطَلَقَا حَتَّىٰ إِذَا لَقِيَا غُلَامًا', detail: 'فَانطَلَقَا: identical to v. 71 — Form VII dual perfect ("they set off again"). حَتَّى إِذَا: same suspenseful narrative formula as v. 71. لَقِيَا: Form I perfect of ل-ق-ي (to meet, to encounter), dual — defective verb (yāʾ third radical). غُلَامًا: indefinite noun (a boy, a youth), manṣūb (direct object of لَقِيَا). The repetition of the formula فَانطَلَقَا حَتَّى إِذَا is structural — the three episodes are narrated in parallel, with each encounter introduced the same way.' },
      { word: 'فَقَتَلَهُ', detail: 'فَـ: fāʾ al-taʿqīb (immediate sequence). قَتَلَ: Form I perfect of ق-ت-ل (to kill). هُ: third-person object suffix (him, the boy). No description of method, no hesitation, no dialogue — just the stark fāʾ + verb. The abruptness of the action is encoded in the grammar: immediate sequence particle + shortest possible past verb + pronoun.' },
      { word: 'أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ', detail: 'أَقَتَلْتَ: interrogative hamza + Form I perfect 2ms of ق-ت-ل. نَفْسًا: indefinite accusative (a soul/person) — manṣūb as direct object. زَكِيَّةً: adjective (naʿt) to نَفْسًا — from root ز-ك-و (pure, innocent, growing in purity). Feminine because نَفْس is grammatically feminine. بِغَيْرِ نَفْسٍ: "without [the [killing of] another] soul" — elliptical: بِغَيْرِ (without) + نَفْسٍ (indefinite genitive). The full meaning: "without [this soul having killed] a soul [that would warrant its own death]." The omission of the full clause is a deliberate ellipsis (ḥadhf) that mirrors the brutality of the act.' },
      { word: 'لَّقَدْ جِئْتَ شَيْئًا نُّكْرًا', detail: 'لَقَدْ جِئْتَ شَيْئًا: identical construction to v. 71 — emphatic assertion. نُّكْرًا: adjective from root ن-ك-ر (to deny, to be unknown, to be reprehensible). "Something hateful/reprehensible/monstrous." Compare with v. 71\'s إِمْرًا (terrible) — scholars debate whether نُكْرًا is stronger or weaker. Ibn ʿĀshūr notes that killing an innocent person is linguistically framed as "worse" than sinking a ship: إِمْرًا (monstrous) escalates to نُكْرًا (utterly reprehensible). The vocabulary progression mirrors the moral escalation.' }
    ],
    highlight: 'زَكِيَّةً is the feminine naʿt (adjective) agreeing with نَفْسًا (feminine noun) in case (manṣūb), number (singular), and gender. This is Arabic grammatical agreement (muṭābaqa) in action — adjectives must match nouns in all four categories: case, number, gender, and definiteness.'
  },

  75: {
    arabic: 'قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا',
    transliteration: 'qāla a-lam aqul laka innaka lan tastaṭīʿa maʿiya ṣabran',
    translation: 'He said: Did I not tell you that you would not be able to have patience with me?',
    tags: ['verb', 'structure'],
    tagLabels: ['Verbatim repetition of v.72', 'Structural echo — second rebuke', 'Escalating pattern'],
    summary: 'Al-Khiḍr\'s second rebuke — the exact words again, but now without leniency',
    analysis: [
      { word: 'أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا', detail: 'This is a complete verbatim repetition of verse 72. Every word, every grammatical form, every vowel is identical. In Quranic rhetoric, this is not carelessness but precision: the second occurrence of the rebuke carries cumulative weight — al-Khiḍr has now said this twice, and this is Mūsā\'s second failure despite his promise. The repetition functions like a structural frame around the first episode: v. 67 (first warning) → v. 69 (Mūsā\'s promise) → v. 71 (first failure) → v. 72 (first rebuke, same words as v. 67) → v. 73 (Mūsā apologizes) → v. 74 (second failure) → v. 75 (second rebuke, same words again). The third episode will not have a third rebuke — it will have an explanation. This is deliberate triadic structure.' }
    ],
    highlight: 'The two rebukes (vv. 72 and 75) use identical language to create a structural frame. Classical rhetoricians call this tarṣīʿ (inlaying) or liff wa-nashr (wrapping and unwrapping). The verbal repetition invites the reader to compare and notice what changed — the tone did, even though the words did not.'
  },

  76: {
    arabic: 'قَالَ إِن سَأَلْتُكَ عَن شَيْءٍ بَعْدَهَا فَلَا تُصَاحِبْنِي قَدْ بَلَغْتَ مِن لَّدُنِّي عُذْرًا',
    transliteration: 'qāla in saʾaltuka ʿan shayʾin baʿdahā fa-lā tuṣāḥibnī qad balaghta min ladunnī ʿudhran',
    translation: 'He said: If I ask you about anything after this, then do not keep me as a companion — you have reached from me [the limit of] an excuse',
    tags: ['verb', 'structure'],
    tagLabels: ['إِن + perfect conditional', 'Form III تُصَاحِب prohibition', 'قَدْ + perfect (completed state)', 'Maṣdar عُذْرًا'],
    summary: 'Mūsā\'s final self-limitation — he sets his own condition for dismissal',
    analysis: [
      { word: 'إِن سَأَلْتُكَ عَن شَيْءٍ بَعْدَهَا', detail: 'إِن: conditional particle. سَأَلْتُكَ: Form I perfect of س-أ-ل (to ask), 1st person singular + 2nd person object suffix كَ (you). In Arabic conditional sentences, the perfect tense is used in the condition clause even for a future conditional — "if I ask you" (not "if I asked you"). عَن شَيْءٍ: "about anything" (indefinite in the scope of negation/condition = universal). بَعْدَهَا: "after this/after it" — بَعْد (after) + هَا (it, referring to the current instance).' },
      { word: 'فَلَا تُصَاحِبْنِي', detail: 'فَـ: apodosis fāʾ (then, the result). لَا تُصَاحِبْنِي: prohibition — "do not keep me as a companion." تُصَاحِب: Form III of ص-ح-ب (to accompany, to be a companion to). Form III (fāʿala) adds the reciprocal/mutual quality — not just being present but actively maintaining companionship. Jussive (after lā al-nāhiya). نِي: first-person object. Mūsā is explicitly requesting to be dismissed if he fails again — he holds himself accountable to his own standard.' },
      { word: 'قَدْ بَلَغْتَ مِن لَّدُنِّي عُذْرًا', detail: 'قَدْ بَلَغْتَ: قَدْ + perfect tense = completed state with present relevance: "you have reached / you have now arrived at." بَلَغْتَ: Form I perfect 2ms of ب-ل-غ (to reach). مِن لَّدُنِّي: "from my immediate presence / from my side" — لَدُن + first-person suffix نِّي (the nūn doubles for phonological reasons: لَدُنِّي). عُذْرًا: "an excuse, an acceptable reason for dismissal" — from root ع-ذ-ر. Manṣūb (direct object of بَلَغْتَ). The phrase means: "in my view, you have now exhausted the grounds for excuse — you have used up all the justification available to you."' }
    ],
    highlight: 'قَدْ + perfect tense = completed action with present relevance. قَدْ بَلَغْتَ means not just "you reached" (بَلَغْتَ alone) but "you have now arrived at — and that arrival is currently relevant." This is Arabic\'s equivalent of the English perfect tense. Learn to spot قَدْ before past-tense verbs: it always adds this "current relevance" nuance.'
  },

  77: {
    arabic: 'فَانطَلَقَا حَتَّىٰ إِذَا أَتَيَا أَهْلَ قَرْيَةٍ اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَن يَنقَضَّ فَأَقَامَهُ قَالَ لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا',
    transliteration: 'fa-nṭalaqā ḥattā idhā atayā ahla qaryatin istaṭʿamā ahla-hā fa-abaw an yuḍayyifūhumā fa-wajadā fīhā jidāran yurīdu an yanqaḍḍa fa-aqāmahu qāla law shiʾta la-ttakhadhta ʿalayhi ajran',
    translation: 'So they set off, until when they came to the people of a village and asked its people for food, but they refused to host them as guests. They found in it a wall that wanted to collapse, so he set it upright. He said: If you had wished, you could have taken payment for it!',
    tags: ['verb', 'structure'],
    tagLabels: ['Form X اسْتَطْعَمَا (seeking food)', 'Form II يُضَيِّفُ (to host)', 'يُرِيدُ أَن يَنقَضَّ (metaphor)', 'لَوْ counterfactual conditional'],
    summary: 'Third act: the wall — the ungrateful village and the paradox of generosity',
    analysis: [
      { word: 'اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَن يُضَيِّفُوهُمَا', detail: 'اسْتَطْعَمَا: Form X of ط-ع-م (to feed/eat) — "they sought food from." Form X (istaṭʿama) = seeking the action of Form I. Dual subject. أَهْلَهَا: "its people" (direct object). فَأَبَوْا: Form I perfect of أ-ب-ي (to refuse), plural — "they refused." أَن يُضَيِّفُوهُمَا: أَن + Form II imperfect subjunctive of ض-ي-ف (to host as a guest) + dual object هُمَا (them). Form II يُضَيِّفُ = to actively host and feed a guest. The village\'s refusal to host two travelers is a serious moral failure in the culture of Arabian hospitality — the text marks it with bluntness.' },
      { word: 'جِدَارًا يُرِيدُ أَن يَنقَضَّ', detail: 'جِدَارًا: indefinite accusative (a wall), from root ج-د-ر. يُرِيدُ: Form IV of ر-و-د (to desire, to intend) — "it desires/wants." أَن يَنقَضَّ: أَن + Form VII subjunctive of ق-ض-ض (to collapse, to crumble) — "that it collapse." Form VII (infaʿala) is the reflexive/passive: "to collapse on its own." The phrase جِدَارًا يُرِيدُ أَن يَنقَضَّ — "a wall wanting to collapse" — is one of the Quran\'s famous metaphorical personifications. The wall is given the attribute of irāda (will/intention), which classically belongs only to rational beings. This is majāz (metaphorical language): the wall was about to fall, expressed through the human quality of intention.' },
      { word: 'فَأَقَامَهُ', detail: 'فَـ: immediate sequence. أَقَامَ: Form IV of ق-و-م (to stand) — Form IV is causative: "to cause to stand = to set upright." هُ: the wall (direct object). Al-Khiḍr straightens the wall for free, for people who refused them food. The contrast is morally startling — and it is deliberately framed without any explanatory clause, letting the action speak.' },
      { word: 'لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا', detail: 'لَوْ: counterfactual conditional particle — "if [you had]." Unlike إِن (open condition for real possibilities), لَوْ introduces a hypothetical that did NOT happen. شِئْتَ: Form I perfect of ش-ي-أ (to will/wish), 2ms — "if you had wanted." لَاتَّخَذْتَ: lām al-jawāb (the "then-lām" of the counterfactual result) + Form VIII perfect of أ-خ-ذ — "you would have taken." The lām with counterfactual لَوْ conditions always accompanies the result clause. عَلَيْهِ أَجْرًا: "for it, a wage" — أَجْر (reward, payment) from root أ-ج-ر. Manṣūb. This is Mūsā\'s third and final objection — not about harm but about missed opportunity for just compensation.' }
    ],
    highlight: 'لَوْ vs إِن: the two conditionals. إِن = open condition (might happen): إِن سَأَلْتُكَ... (v.76). لَوْ = counterfactual (did NOT happen): لَوْ شِئْتَ لَاتَّخَذْتَ... — "if you HAD wanted [but you didn\'t]." This distinction is critical throughout the Quran. لَوْ almost always has a lām in its result clause.'
  },

  78: {
    arabic: 'قَالَ هَٰذَا فِرَاقُ بَيْنِي وَبَيْنَكَ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا',
    transliteration: 'qāla hādhā firāqu baynī wa-baynaka sa-unabbi-ʾuka bi-taʾwīli mā lam tastaṭiʿ ʿalayhi ṣabran',
    translation: 'He said: This is the parting between me and you — I will inform you of the interpretation of that over which you could not have patience',
    tags: ['noun', 'verb', 'structure'],
    tagLabels: ['هَٰذَا فِرَاق nominal sentence', 'بَيْن repeated (conjoined)', 'Form II سَأُنَبِّئ (to inform)', 'تَأْوِيل (interpretation)'],
    summary: 'The parting — al-Khiḍr announces explanation is coming',
    analysis: [
      { word: 'هَٰذَا فِرَاقُ بَيْنِي وَبَيْنَكَ', detail: 'هَٰذَا: demonstrative pronoun (this), mubtadaʾ — "this [moment] is..." فِرَاقُ: maṣdar of Form III فَارَقَ (to separate from, to part with), from root ف-ر-ق. Pattern fiʿāl = maṣdar of Form III. Marfūʿ — khabar (predicate) in a nominal sentence. The nominal sentence (rather than a verbal one) makes the separation a *state*, not just an event. بَيْنِي وَبَيْنَكَ: "between me and you" — بَيْن is repeated with both pronouns. In Arabic, بَيْن can take two pronoun objects by repetition (بَيْنِي وَبَيْنَكَ) rather than using the dual — this gives each party equal syntactic weight.' },
      { word: 'سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع', detail: 'سَأُنَبِّئُكَ: سَـ (near future) + Form IV of ن-ب-أ (to inform/give news of) + كَ (you). Form IV of ن-ب-أ = "to inform someone." Note: Form I أَنْبَأَ and Form II نَبَّأَ also mean to inform — the forms differ in register and object. بِتَأْوِيلِ: preposition بِـ + تَأْوِيل (interpretation, explanation of deeper meaning). تَأْوِيل from root أ-و-ل (to return to a first/fundamental meaning) — it specifically means the hidden reality that underlies an apparent act. مَا لَمْ تَسْتَطِعْ عَلَيْهِ صَبْرًا: "that over which you could not have patience" — echoing لَن تَسْتَطِيعَ of v. 67 and v. 72, but now in past (لَمْ) as the episode is complete.' }
    ],
    highlight: 'تَأْوِيل (taʾwīl) is the technical term for the deeper interpretation of an act or text — derived from أَوَّلَ (to trace back to its origin/first principle). It is distinct from تَفْسِير (tafsīr = explaining surface meaning). Al-Khiḍr is about to give the تَأْوِيل of his three acts — the inner reason that justifies what appeared unjust on the surface.'
  },

  79: {
    arabic: 'أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَاءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا',
    transliteration: 'ammā s-safīnatu fa-kānat li-masākīna yaʿmalūna fī l-baḥri fa-aradtu an aʿībahā wa-kāna warāʾahum malikun yaʾkhudu kulla safīnatin ghaṣban',
    translation: 'As for the ship — it belonged to poor people working at sea. I wanted to make it defective, for there was behind them a king who was seizing every sound ship by force',
    tags: ['noun', 'verb', 'structure'],
    tagLabels: ['أَمَّا...فَـ (topic-comment structure)', 'Form IV أَرَدْتُ + أَن + subjunctive', 'أَعِيبَ (Form I: to make defective)', 'ḥāl غَصْبًا'],
    summary: 'Explanation 1: the ship — damaged to protect it from seizure',
    analysis: [
      { word: 'أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ', detail: 'أَمَّا...فَـ: one of the most important discourse structures in the Quran. أَمَّا (as for) introduces a topic for special focus; فَـ introduces its comment. This structure (called al-tafṣīl — "itemized explanation") signals that a systematic, one-by-one explanation is beginning. Three acts, three أَمَّا clauses (vv. 79, 80, 82). السَّفِينَةُ: the definite subject (the specific ship). فَكَانَتْ: kāna (feminine) — it was. لِمَسَاكِينَ: "belonging to poor/needy people" — preposition لِـ of ownership + مَسَاكِين (plural of مِسْكِين, the destitute). The poor ownership of the boat is the key fact that makes the damage protective, not destructive.' },
      { word: 'يَعْمَلُونَ فِي الْبَحْرِ', detail: 'يَعْمَلُونَ: Form I imperfect plural of ع-م-ل (to work), present/habitual — "who work at sea." This is a ṣifa (relative clause) describing مَسَاكِين — it has no explicit relative pronoun because the antecedent is indefinite: "[poor people] working at sea." فِي الْبَحْرِ: prepositional phrase — their livelihood depended on this specific ship.' },
      { word: 'فَأَرَدتُّ أَنْ أَعِيبَهَا', detail: 'أَرَدْتُ: Form IV of ر-و-د (to desire, to intend) — 1st person perfect. أَن: subordinating particle (that) + subjunctive. أَعِيبَهَا: Form I imperfect of ع-ي-ب (to find fault with, to make defective), 1st person, manṣūb (after أَن) + هَا (it). The verb أَعَابَ means to deliberately introduce a defect — al-Khiḍr made the ship *appear* damaged to make it unattractive to the king. The genius of the act: the damage was protective.' },
      { word: 'وَكَانَ وَرَاءَهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا', detail: 'وَرَاءَهُم: "behind them / ahead of them (in their path)" — وَرَاء is a spatial adverb meaning behind, but in the context of a sea journey it means "ahead on their route." مَلِكٌ: "a king" — indefinite, the subject of كَانَ. يَأْخُذُ: imperfect of أ-خ-ذ (to take/seize) — ṣifa (relative clause) to مَلِكٌ: "[a king] who was seizing." كُلَّ سَفِينَةٍ: "every ship" — كُلّ with indefinite genitive = every/all. غَصْبًا: ḥāl (circumstantial accusative) or maṣdar substituting for an adverb — "by force/compulsorily." From root غ-ص-ب (to seize unlawfully).' }
    ],
    highlight: 'أَمَّا...فَـ is the Quran\'s precision explanation structure — used here to deliver al-Khiḍr\'s three explanations in turn. Every time you see أَمَّا in the Quran, a specific topic is about to receive focused, individual treatment. It is a discourse-level particle, not a sentence-level one.'
  },

  80: {
    arabic: 'وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا',
    transliteration: 'wa-ammā l-ghulāmu fa-kāna abawāhu muʾminayni fa-khashīnā an yurhiqahumā ṭughyānan wa-kufran',
    translation: 'And as for the boy — his parents were believers. We feared he would overwhelm them with transgression and disbelief',
    tags: ['noun', 'verb', 'structure'],
    tagLabels: ['أَمَّا...فَـ continuation', 'Dual أَبَوَاهُ / مُؤْمِنَيْنِ', 'Form IV خَشِينَا + أَن', 'Two maṣdars as objects'],
    summary: 'Explanation 2: the boy — killed to prevent his corrupting his believing parents',
    analysis: [
      { word: 'وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ', detail: 'وَأَمَّا: second topic in the أَمَّا series. الْغُلَامُ: the definite noun (topic, mubtadaʾ of the أَمَّا construction). فَكَانَ: kāna. أَبَوَاهُ: "his two parents" — أَبَوَا is the dual of أَب (father/parent) in the nominative dual construct state (أَبَوَا + possessive هُ). Nominative dual: أَبَوَانِ → أَبَوَا in construct. مُؤْمِنَيْنِ: "believers (dual)" — active participle of Form IV أَسْلَمَ/آمَنَ from ء-م-ن, dual genitive/accusative: مُؤْمِنَانِ → مُؤْمِنَيْنِ. This is the khabar of كَانَ — "his parents were believers (dual)."' },
      { word: 'فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا', detail: 'خَشِينَا: Form I perfect of خ-ش-ي (to fear), 1st plural — divine ("We feared"). Note the shift to divine first person: خَشِينَا (We feared). Al-Khiḍr speaks as an agent of divine will. أَن يُرْهِقَهُمَا: أَن + Form IV subjunctive of ر-ه-ق (to overwhelm/burden) + dual object هُمَا (them, his parents). طُغْيَانًا: "transgression" — from root ط-غ-ي (to exceed limits, to rebel). Maṣdar, manṣūb — second object of يُرْهِق (Form IV can take two objects: "burden them with transgression"). وَكُفْرًا: "and disbelief" — maṣdar of ك-ف-ر. Two objects joined: the boy would cause both طُغْيَان and كُفْر in his parents.' }
    ],
    highlight: 'خَشِينَا (We feared) — the divine first-person plural. This verse is theologically significant: God Himself (through al-Khiḍr as agent) reveals that the killing was an act of divine mercy toward the parents, preventing a future greater harm. The الفقه of قتل for future harm has been a deep scholarly discussion arising from this verse since the earliest tafsīr.'
  },

  81: {
    arabic: 'فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِّنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا',
    transliteration: 'fa-aradnā an yubdila-humā rabbuhuma khayran minhu zakātan wa-aqraba ruḥman',
    translation: 'So We desired that their Lord should substitute for them one better than him in purity and closer in affection',
    tags: ['verb', 'structure'],
    tagLabels: ['Form IV أَرَدْنَا divine will', 'Form II يُبْدِل (to substitute)', 'Elative خَيْرًا / أَقْرَبَ', 'Tamyīz زَكَاةً / رُحْمًا'],
    summary: 'The divine intention: replacing the boy with a better child',
    analysis: [
      { word: 'فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا', detail: 'فَأَرَدْنَا: Form IV perfect 1st plural divine of ر-و-د — "We intended/desired." أَن يُبْدِلَهُمَا: أَن + Form II subjunctive of ب-د-ل (to replace, to substitute). Form II بَدَّلَ / يُبَدِّلُ = to cause a substitution. Manṣūb after أَن. هُمَا: dual object (them, the parents). رَبُّهُمَا: subject of يُبْدِلَهُمَا — "their Lord." The agent of the substitution is explicitly identified as God (رَبُّهُمَا), though al-Khiḍr/We are the speakers — showing the layered divine-human agency in this story.' },
      { word: 'خَيْرًا مِّنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا', detail: 'خَيْرًا: elative adjective (the comparative/superlative pattern afʿal → khayrun, manṣūb: khayran) — "better." مِّنْهُ: "than him" (the boy who was killed). زَكَاةً: tamyīz (accusative of specification) — "in respect of purity." From root ز-ك-و. وَأَقْرَبَ: second elative, manṣūb — "closer" (from root ق-ر-ب). رُحْمًا: second tamyīz — "in terms of affection/mercy." Root ر-ح-م in the form ruḥm (tenderness, familial love). Two parallel specifications: better in purity AND closer in affection — the replacement child will exceed in both the spiritual and the relational.' }
    ],
    highlight: 'خَيْرًا مِنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا: two elative adjectives (خَيْر and أَقْرَب) each followed by a tamyīz (specification accusative: زَكَاةً and رُحْمًا). The elative + tamyīz construction = "better IN RESPECT OF X, closer IN RESPECT OF Y." It specifies the axis on which comparison is being made — essential for precision in Arabic.'
  },

  82: {
    arabic: 'وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَن يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةً مِّن رَّبِّكَ وَمَا فَعَلْتُهُ عَنْ أَمْرِي وَذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا',
    transliteration: 'wa-ammā l-jidāru fa-kāna li-ghulāmayni yatīmayni fī l-madīnati wa-kāna taḥtahu kanzun la-humā wa-kāna abūhumā ṣāliḥan fa-arāda rabbuka an yablughā ashuddahumā wa-yastakhrijā kanzahumā raḥmatan min rabbika wa-mā faʿaltuhu ʿan amrī wa-dhālika taʾwīlu mā lam tasṭiʿ ʿalayhi ṣabran',
    translation: 'And as for the wall — it belonged to two orphan boys in the city, and beneath it was a treasure belonging to them, and their father was a righteous man. So your Lord intended that they reach their maturity and extract their treasure — a mercy from your Lord. I did not do it of my own accord. And that is the interpretation of that over which you could not have patience.',
    tags: ['noun', 'verb', 'structure'],
    tagLabels: ['Third أَمَّا...فَـ closing', 'Dual يَتِيمَيْنِ / غُلَامَيْنِ', 'Form X يَسْتَخْرِجَا', 'وَمَا فَعَلْتُهُ عَنْ أَمْرِي — theological climax'],
    summary: 'Explanation 3: the wall — protecting an orphans\' inheritance. The closing theological statement.',
    analysis: [
      { word: 'وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ', detail: 'وَأَمَّا: third and final topic in the أَمَّا series. الْجِدَارُ: the wall (definite). فَكَانَ: kāna (masculine). لِغُلَامَيْنِ: "belonging to two boys" — لِـ of ownership + غُلَامَيْنِ (dual of غُلَام, genitive/accusative dual: يْنِ). يَتِيمَيْنِ: naʿt (adjective) agreeing with غُلَامَيْنِ in case, number, gender, definiteness — "two orphans." يَتِيم (orphan) from root ي-ت-م. Dual genitive adjective: يَتِيمَيْنِ. The orphan status creates the need for divine protection — orphans in Quranic law have the strongest claim to protection of their property.' },
      { word: 'وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَالِحًا', detail: 'وَكَانَ تَحْتَهُ كَنزٌ: the subject (كَنزٌ — treasure) follows kāna here because the prepositional phrase تَحْتَهُ (beneath it) is fronted — the "inverted" kāna construction. كَنز from root ك-ن-ز (to hoard, to store). لَّهُمَا: "belonging to the two of them" — dative of possession with dual pronoun. وَكَانَ أَبُوهُمَا صَالِحًا: "and their father was righteous." أَبُوهُمَا: dual possessive — أَبُو (nominative of أَب in construct) + هُمَا. صَالِحًا: khabar kāna, manṣūb — from root ص-ل-ح (to be righteous, to be sound). The father\'s righteousness is the theological hinge: his piety extended divine protection to his orphaned children.' },
      { word: 'فَأَرَادَ رَبُّكَ أَن يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا', detail: 'فَأَرَادَ رَبُّكَ: "so your Lord intended" — a dramatic shift from "We" (v. 80) to "your Lord" (رَبُّكَ), addressing Mūsā directly. يَبْلُغَا: Form I subjunctive dual of ب-ل-غ (to reach) — "that the two of them reach." أَشُدَّهُمَا: "their maturity/full strength" — أَشُدّ is an irregular plural (there is debate whether it has a singular) from root ش-د-د (to be firm, strong). Dual possessive: "their two maturities." يَسْتَخْرِجَا: Form X dual subjunctive of خ-ر-ج (to go out) — Form X: "to seek to extract / to extract by effort." كَنزَهُمَا: "their treasure" — dual possessive. رَحْمَةً مِّن رَّبِّكَ: "a mercy from your Lord" — ḥāl or maṣdar of purpose, manṣūb.' },
      { word: 'وَمَا فَعَلْتُهُ عَنْ أَمْرِي', detail: 'وَمَا فَعَلْتُهُ: مَا: negation of the past. فَعَلْتُهُ: Form I perfect of ف-ع-ل (to do), 1st person singular + object هُ (it — all three acts). "I did not do it." عَنْ أَمْرِي: "from my own affair/on my own initiative" — عَنْ here expresses origin or source ("proceeding from"). The meaning: "I did not act from my own volition/command." This is the theological climax of the entire passage: al-Khiḍr denies personal authorship of all three acts. He acted entirely from divine directive.' },
      { word: 'وَذَٰلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا', detail: 'وَذَٰلِكَ: "and that" — demonstrative pronoun referring to the three explanations just given. تَأْوِيلُ: maṣdar of Form II of أ-و-ل — "the interpretation." Marfūʿ as khabar (predicate). مَا لَمْ تَسْطِعْ: note the contracted form تَسْطِعْ (not تَسْتَطِعْ) — Arabic phonological reduction: Form X of ط-و-ع with the tāʾ of the Form X prefix (اسْتـ) assimilating into the first radical ط, giving اسْطَاعَ / يَسْطِيعُ. This is an internal Quranic variant that shows Arabic\'s phonological flexibility. عَلَيْهِ صَبْرًا: echoes the opening warning of v. 67 — the full circle is now complete.' }
    ],
    highlight: 'وَمَا فَعَلْتُهُ عَنْ أَمْرِي — the negation مَا + perfect is the formal Arabic denial of past action. But more than grammar: this sentence is the spiritual key to the entire passage. Three acts — sinking, killing, building — none was al-Khiḍr\'s. All were divine. The story teaches that apparent injustice may carry hidden mercy that only God sees fully.'
  }
};

}
