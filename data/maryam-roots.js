// Quranic root data — verb forms, derived words, and occurrences.
// Add a new root by copying an existing { id: '...', ... } block into this array.
// Whenever you add a root here, also add its matching entry to ROOT_LINKS
// in data/verses.js's app.js (grammar explorer) so it becomes clickable there.
// This file is loaded via <script src="data/roots.js"></script> before app.js runs.

if (typeof window.ROOTS === 'undefined') { window.ROOTS = [
  {
    id: 'rbb',
    arabic: 'ربّ',
    letters: 'ر - ب - ب',
    roman: 'r-b-b',
    meaning: 'to nurture, to be lord over',
    semantic: 'Authority through care: the Lord who nurtures, raises, and sustains. Distinct from mere power — رَبّ implies ongoing, attentive sovereignty.',
    quranCount: '980+',
    maryamCount: 12,
    memoryAid: 'Think of a رَبّ (rab) as the one who cultivates a garden — not just owning it, but tending it. That tending quality is why رَبّ is both "Lord" and "the one who raises." Every time Zakariyyā says رَبِّ in his supplication, he is invoking this double meaning: You are my Lord AND my nurturer.',
    forms: [
      { num: 'I', arabic: 'رَبَّ', roman: 'rabba', pattern: 'faʿʿala', meaning: 'to raise, to foster, to be lord of', masdar: 'تَرْبِيَة', attested: true,
        detail: 'Form I verb: he was lord, he raised/fostered. The doubling of the middle radical (ب-ب) means this root behaves as a "doubled" (muḍāʿaf) verb — the two identical radicals merge in many forms.',
        perfect: [{p:'هُوَ رَبَّ',t:'he lorded/raised'},{p:'هِيَ رَبَّتْ',t:'she raised'},{p:'أَنَا رَبَبْتُ',t:'I raised'}],
        imperfect: [{p:'يَرُبُّ',t:'he raises'},{p:'تَرُبُّ',t:'she raises'},{p:'أَرُبُّ',t:'I raise'}]
      },
      { num: 'II', arabic: 'رَبَّى', roman: 'rabbā', pattern: 'faʿʿala (extended)', meaning: 'to bring up, to educate, to rear', masdar: 'تَرْبِيَة', attested: true,
        detail: 'Form II (in the extended form رَبَّى): to actively bring up and educate children or people. The form تَرْبِيَة (tarbiya) — meaning education and upbringing — comes from this form and is the standard Arabic word for education today.',
        perfect: [{p:'رَبَّى',t:'he brought up'},{p:'رَبَّيْتُ',t:'I brought up'}],
        imperfect: [{p:'يُرَبِّي',t:'he brings up'},{p:'تُرَبِّي',t:'she brings up'}]
      },
      { num: 'III–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested for this root', masdar: '—', attested: false, detail: 'Forms III–X are not commonly attested for ر-ب-ب. The root concentrates its meaning in Forms I and II.' }
    ],
    derived: [
      { arabic: 'رَبٌّ', roman: 'rabb', meaning: 'Lord, master, nurturer', pattern: 'faʿl (noun)', type: 'noun', badge: 'badge-noun' },
      { arabic: 'رَبِّي', roman: 'rabbī', meaning: 'my Lord', pattern: 'rabb + 1st person suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'رَبُّكَ', roman: 'rabbuka', meaning: 'your Lord', pattern: 'rabb + 2nd person suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'رَبُّهُ', roman: 'rabbuhu', meaning: 'his Lord', pattern: 'rabb + 3rd person suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'رَبَّنَا', roman: 'rabbanā', meaning: 'our Lord (in prayer)', pattern: 'rabb + 1st plural suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'الرَّبُّ', roman: 'al-Rabb', meaning: 'The Lord (God)', pattern: 'definite article', type: 'noun', badge: 'badge-divine' },
      { arabic: 'أَرْبَاب', roman: 'arbāb', meaning: 'lords, masters (plural)', pattern: 'afʿāl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'رُبُوبِيَّة', roman: 'rubūbiyya', meaning: 'lordship, sovereignty (theological term)', pattern: 'abstract noun', type: 'noun', badge: 'badge-masdar' },
      { arabic: 'تَرْبِيَة', roman: 'tarbiya', meaning: 'upbringing, education', pattern: 'Form II maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مُرَبِّي', roman: 'murabbī', meaning: 'educator, one who raises/nurtures', pattern: 'Form II active participle', type: 'part', badge: 'badge-part' },
    ],
    occurrences: [
      { ref: '19:2', arabic: 'ذِكْرُ رَحْمَتِ <span class="occurrence-highlight">رَبِّكَ</span> عَبْدَهُ زَكَرِيَّا', trans: 'A mention of the mercy of <b>your Lord</b> to His servant Zakariyyā', note: 'رَبِّكَ = rabb + 2nd person suffix (your). Genitive case (majrūr) as muḍāf ilayhi in iḍāfah chain.' },
      { ref: '19:3', arabic: 'إِذْ نَادَىٰ <span class="occurrence-highlight">رَبَّهُ</span> نِدَاءً خَفِيًّا', trans: 'When he called to <b>his Lord</b> a private call', note: 'رَبَّهُ = rabb + 3rd person suffix. Accusative (manṣūb) as direct object of نَادَى.' },
      { ref: '19:4', arabic: 'قَالَ <span class="occurrence-highlight">رَبِّ</span> إِنِّي وَهَنَ الْعَظْمُ مِنِّي', trans: 'He said: <b>My Lord</b>, my bones have weakened', note: 'رَبِّ = vocative form (munādā). The yāʾ suffix (my) is elided. Appears 4 times in vv. 4–6 alone.' },
    ]
  },

  {
    id: 'rhm',
    arabic: 'رحم',
    letters: 'ر - ح - م',
    roman: 'r-ḥ-m',
    meaning: 'to show mercy, to have compassion',
    semantic: 'The deepest compassion — linked etymologically to رَحِم (womb). Divine mercy in the Quran is womb-like: enveloping, protective, unconditional before any act of the recipient.',
    quranCount: '339',
    maryamCount: 16,
    memoryAid: 'The root ر-ح-م shares its consonants with رَحِم (raḥim), the womb. This is not coincidence — the Arabic language consciously linked divine mercy to the quality of womb-like envelopment and protection. When you hear الرَّحْمٰن الرَّحِيم, you are hearing two intensity levels of the same womb-mercy: Raḥmān (vast, surrounding) and Raḥīm (specific, targeted toward the believers).',
    forms: [
      { num: 'I', arabic: 'رَحِمَ', roman: 'raḥima', pattern: 'faʿila', meaning: 'to show mercy toward, to have compassion for', masdar: 'رَحْمَة / رُحْم', attested: true,
        detail: 'Form I (faʿila pattern — middle vowel kasra): "he showed mercy." The kasra in the middle indicates an emotional/experiential state — raḥima is mercy as an *experienced feeling*, not just an action.',
        perfect: [{p:'رَحِمَ',t:'he showed mercy'},{p:'رَحِمَتْ',t:'she showed mercy'},{p:'رَحِمْتُ',t:'I showed mercy'}],
        imperfect: [{p:'يَرْحَمُ',t:'he shows mercy'},{p:'تَرْحَمُ',t:'she shows mercy'},{p:'أَرْحَمُ',t:'I show mercy'}]
      },
      { num: 'II', arabic: 'رَحَّمَ', roman: 'raḥḥama', pattern: 'faʿʿala', meaning: 'to invoke mercy upon (rare)', masdar: 'تَرَحُّم', attested: false,
        detail: 'Form II is rare for this root. The derived noun تَرَحُّم (taraḥḥum, Form V noun) meaning "mutual bestowal of mercy" is more common.' },
      { num: 'III', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Form III is not attested for this root.' },
      { num: 'IV', arabic: 'أَرْحَمَ', roman: 'arḥama', pattern: 'afʿala', meaning: 'to cause to receive mercy (rare)', masdar: 'إِرْحَام', attested: false,
        detail: 'Form IV is rare. The comparative/elative أَرْحَمُ (most merciful, more merciful) exists but functions as an adjective, not a Form IV verb.' },
      { num: 'V', arabic: 'تَرَحَّمَ', roman: 'taraḥḥama', pattern: 'tafaʿʿala', meaning: 'to seek mercy, to show compassion deliberately', masdar: 'تَرَحُّم', attested: true,
        detail: 'Form V (reflexive of Form II): the deliberate, active seeking or showing of mercy. تَرَحَّمَ عَلَيْهِ means "he prayed for mercy upon him" — the phrase used after mentioning the dead.' },
      { num: 'VI', arabic: 'تَرَاحَمَ', roman: 'tarāḥama', pattern: 'tafāʿala', meaning: 'to show mercy to one another (mutual)', masdar: 'تَرَاحُم', attested: true,
        detail: 'Form VI (reciprocal): the Prophet ﷺ described the believers as تَرَاحُم (tarāḥum) — mutually compassionate toward each other, like one body.' },
      { num: 'VII–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Forms VII–X are not commonly attested for this root.' },
    ],
    derived: [
      { arabic: 'رَحْمَة', roman: 'raḥma', meaning: 'mercy, compassion (noun)', pattern: 'faʿla — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'الرَّحْمٰن', roman: 'al-Raḥmān', meaning: 'The Most Merciful (vast, all-encompassing)', pattern: 'faʿlān — intensive adjective', type: 'adj', badge: 'badge-divine' },
      { arabic: 'الرَّحِيم', roman: 'al-Raḥīm', meaning: 'The Especially Merciful (targeted, ongoing)', pattern: 'faʿīl — intensive adjective', type: 'adj', badge: 'badge-divine' },
      { arabic: 'رَحِيم', roman: 'raḥīm', meaning: 'merciful (of people too)', pattern: 'faʿīl — adjective', type: 'adj', badge: 'badge-adj' },
      { arabic: 'رَحِم', roman: 'raḥim', meaning: 'womb; kinship bonds', pattern: 'faʿil — noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'أَرْحَام', roman: 'arḥām', meaning: 'wombs; kinship ties (plural)', pattern: 'afʿāl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'رُحَمَاء', roman: 'ruḥamāʾ', meaning: 'merciful ones (plural)', pattern: 'fuʿalāʾ broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'تَرَاحُم', roman: 'tarāḥum', meaning: 'mutual compassion', pattern: 'Form VI maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مَرْحَمَة', roman: 'marḥama', meaning: 'act of mercy, compassionate deed', pattern: 'mafʿala — noun of instance', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '19:2', arabic: 'ذِكْرُ <span class="occurrence-highlight">رَحْمَتِ</span> رَبِّكَ عَبْدَهُ زَكَرِيَّا', trans: 'A mention of the <b>mercy</b> of your Lord to His servant Zakariyyā', note: 'رَحْمَتِ = raḥma in iḍāfah (construct state). The tāʾ marbūṭa becomes a full tāʾ when connected.' },
      { ref: '19:18', arabic: 'إِنِّي أَعُوذُ بِ<span class="occurrence-highlight">الرَّحْمٰن</span> مِنكَ', trans: 'Indeed, I seek refuge in <b>the Most Merciful</b> from you', note: 'الرَّحْمٰن used alone as a divine name — Maryam invokes the vastness of divine mercy as her protection.' },
      { ref: '19:21', arabic: 'قَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ وَلِنَجْعَلَهُ آيَةً لِلنَّاسِ وَ<span class="occurrence-highlight">رَحْمَةً</span> مِّنَّا', trans: 'He said: Thus has your Lord said — it is easy for Me, and We will make him a sign for the people and a <b>mercy</b> from Us', note: 'رَحْمَةً: manṣūb — mafʿūl bihi (direct object of نَجْعَل). ʿĪsā himself is described as a mercy.' },
    ]
  },

  {
    id: 'qwl',
    arabic: 'قول',
    letters: 'ق - و - ل',
    roman: 'q-w-l',
    meaning: 'to say, to speak',
    semantic: 'The most frequent root in the Quran (~1,722 times). Speech as the primary mode of divine and human action. The Quran itself is قَوْل (utterance), and every narrative turn in Surah Maryam is signalled by قَالَ.',
    quranCount: '1,722',
    maryamCount: 30,
    memoryAid: 'قَالَ / قَالَتْ (he said / she said) is the narrative engine of Surah Maryam. Every direct speech — whether from Zakariyyā, Maryam, the angel, ʿĪsā, or Ibrāhīm — is introduced by this word. If you can recognize قَالَ instantly, you can track who is speaking throughout the entire surah. It is a Form I hollow verb (the middle radical و contracts).',
    forms: [
      { num: 'I', arabic: 'قَالَ', roman: 'qāla', pattern: 'fāʿala (hollow verb)', meaning: 'he said, to say', masdar: 'قَوْل / مَقَالَة', attested: true,
        detail: 'Form I hollow verb: the middle radical و produces a long ā in the past tense (قَالَ) and a long ū in the present (يَقُولُ). This contraction is the signature of hollow verbs (al-fiʿl al-ajwaf). Critical for Surah Maryam: قَالَ appears every few verses.',
        perfect: [{p:'قَالَ',t:'he said'},{p:'قَالَتْ',t:'she said'},{p:'قُلْتُ',t:'I said'},{p:'قُلْنَا',t:'We said'}],
        imperfect: [{p:'يَقُولُ',t:'he says'},{p:'تَقُولُ',t:'she says'},{p:'أَقُولُ',t:'I say'},{p:'نَقُولُ',t:'We say (divine)'}]
      },
      { num: 'II', arabic: 'قَوَّلَ', roman: 'qawwala', pattern: 'faʿʿala', meaning: 'to put words in someone\'s mouth, to attribute a saying to', masdar: 'تَقْوِيل', attested: true,
        detail: 'Form II: the intensification carries a negative sense of "forcing speech" — attributing words to someone that they did not say. In 69:44: وَلَوْ تَقَوَّلَ عَلَيْنَا بَعْضَ الْأَقَاوِيلِ — "had he (the Prophet) invented some sayings against Us."' },
      { num: 'III', arabic: 'قَاوَلَ', roman: 'qāwala', pattern: 'fāʿala', meaning: 'to converse with (reciprocal speech)', masdar: 'مُقَاوَلَة', attested: false,
        detail: 'Form III (reciprocal direction): speaking *to* someone bidirectionally. مُقَاوَلَة (muqāwala) is the modern word for a contract (negotiated agreement) — speech directed back and forth until agreement.' },
      { num: 'V', arabic: 'تَقَوَّلَ', roman: 'taqawwala', pattern: 'tafaʿʿala', meaning: 'to fabricate speech, to invent sayings', masdar: 'تَقَوُّل', attested: true,
        detail: 'Form V (reflexive of II): to put words into one\'s own mouth falsely. A serious charge in the Quran — the accusation that the Prophet invented revelation.' },
      { num: 'X', arabic: 'اسْتَقَالَ', roman: 'istaqāla', pattern: 'istafʿala (hollow)', meaning: 'to request cancellation of a statement/contract', masdar: 'اسْتِقَالَة', attested: false,
        detail: 'Form X (seeking): to seek to un-say something. اسْتِقَالَة (istiqdla) is the modern word for a resignation — seeking to take back one\'s commitment.' },
      { num: 'VI/VII/VIII/IX', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested for this root', masdar: '—', attested: false, detail: 'Not commonly attested.' }
    ],
    derived: [
      { arabic: 'قَوْل', roman: 'qawl', meaning: 'saying, speech, word', pattern: 'faʿl — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'أَقْوَال', roman: 'aqwāl', meaning: 'sayings, words (plural)', pattern: 'afʿāl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'قَائِل', roman: 'qāʾil', meaning: 'the one who says, speaker', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مَقُول', roman: 'maqūl', meaning: 'what is said, utterance', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
      { arabic: 'قِيل', roman: 'qīla', meaning: 'it was said (passive)', pattern: 'fuʿila — passive hollow verb', type: 'verb', badge: 'badge-verb' },
      { arabic: 'مَقَالَة', roman: 'maqāla', meaning: 'article, essay, saying', pattern: 'mafʿala — noun of place/instance', type: 'noun', badge: 'badge-noun' },
      { arabic: 'قُولُوا', roman: 'qūlū', meaning: 'say! (plural command)', pattern: 'hollow imperative plural', type: 'verb', badge: 'badge-verb' },
      { arabic: 'قُلْ', roman: 'qul', meaning: 'say! (singular command)', pattern: 'hollow imperative singular', type: 'verb', badge: 'badge-verb' },
    ],
    occurrences: [
      { ref: '19:4', arabic: '<span class="occurrence-highlight">قَالَ</span> رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي', trans: '<b>He said:</b> My Lord, my bones have weakened', note: 'قَالَ: Form I hollow past tense, 3rd m. sg. Opens Zakariyyā\'s supplication. Subject implied from context.' },
      { ref: '19:7', arabic: 'يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا', trans: 'O Zakariyyā, indeed We give you glad tidings of a boy whose name is Yaḥyā', note: 'Divine speech — قَالَ is implied before يَا زَكَرِيَّا. The Quran sometimes drops the speech-verb when the speaker (God/angel) is clear.' },
      { ref: '19:9', arabic: '<span class="occurrence-highlight">قَالَ</span> كَذَٰلِكَ <span class="occurrence-highlight">قَالَ</span> رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ', trans: '<b>He said:</b> Thus <b>has your Lord said</b> — it is easy for Me', note: 'Double قَالَ: the angel quotes God. قَالَ is used to frame both the angel\'s speech and the divine speech within it.' },
    ]
  },

  {
    id: 'wld',
    arabic: 'ولد',
    letters: 'و - ل - د',
    roman: 'w-l-d',
    meaning: 'to give birth, to be born',
    semantic: 'Birth, generation, lineage. The root that carries the surah\'s central theological tension: God does not "give birth to" or "beget" (يَلِدُ) a son — yet His mercy births miracles through human mothers. The root threads through both the stories of Yaḥyā and ʿĪsā.',
    quranCount: '103',
    maryamCount: 8,
    memoryAid: 'وَلَدٌ (walad) means child/offspring — the word at the heart of the theological argument in verses 34–35 about ʿĪsā. مَا كَانَ لِلَّهِ أَن يَتَّخِذَ مِن وَلَدٍ — "it is not for God to take a child." The passive past وُلِدَ (wulida — he was born) appears in verse 15 and again in verse 33. Learn these two forms first.',
    forms: [
      { num: 'I', arabic: 'وَلَدَ', roman: 'walada', pattern: 'faʿala', meaning: 'to give birth, to beget', masdar: 'وِلَادَة / وَلْد', attested: true,
        detail: 'Form I: the mother or father produces a child. يَلِدُ in the imperfect. The passive وُلِدَ (wulida — he was born) is critical for Surah Maryam: verse 15 (Yaḥyā) and verse 33 (ʿĪsā) both use it.',
        perfect: [{p:'وَلَدَ',t:'he/she gave birth'},{p:'وُلِدَ',t:'he was born (passive)'},{p:'وَلَدْتُ',t:'I gave birth'}],
        imperfect: [{p:'يَلِدُ',t:'he/she gives birth'},{p:'يُولَدُ',t:'he is born (passive)'}]
      },
      { num: 'II', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Form II is not attested for this root.' },
      { num: 'III', arabic: '—', roman: '—', pattern: '—', meaning: 'Not attested', masdar: '—', attested: false, detail: 'Not attested.' },
      { num: 'IV', arabic: 'أَوْلَدَ', roman: 'awlada', pattern: 'afʿala', meaning: 'to cause to give birth, to sire', masdar: 'إِيلَاد', attested: false,
        detail: 'Form IV (causative): to cause or enable birth. Rare in the Quran itself but known in classical usage.' },
      { num: 'V', arabic: 'تَوَلَّدَ', roman: 'tawallada', pattern: 'tafaʿʿala', meaning: 'to be produced/generated from', masdar: 'تَوَلُّد', attested: false,
        detail: 'Form V (reflexive): for something to emerge or generate from a source. Used in modern Arabic for electrical generation (تَوَلُّد الكهرباء).' },
      { num: 'VI–X', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Not commonly attested in Quranic Arabic.' }
    ],
    derived: [
      { arabic: 'وَلَد', roman: 'walad', meaning: 'child, offspring, son', pattern: 'faʿal — noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'وِلَادَة', roman: 'wilāda', meaning: 'birth, delivery', pattern: 'fiʿāla — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'وَالِد', roman: 'wālid', meaning: 'father (the one who begot)', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'وَالِدَة', roman: 'wālida', meaning: 'mother (the one who gave birth)', pattern: 'fāʿila — feminine active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'وَالِدَان', roman: 'wālidān', meaning: 'both parents (dual)', pattern: 'dual of wālid', type: 'noun', badge: 'badge-noun' },
      { arabic: 'وَالِدَيْه', roman: 'wālidayhi', meaning: 'his two parents (genitive dual)', pattern: 'dual genitive + pronoun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'مَوْلُود', roman: 'mawlūd', meaning: 'newborn, the one who is born', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
      { arabic: 'أَوْلَاد', roman: 'awlād', meaning: 'children (plural)', pattern: 'afʿāl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'وُلِدَ', roman: 'wulida', meaning: 'he was born (passive past)', pattern: 'fuʿila — passive Form I', type: 'verb', badge: 'badge-verb' },
    ],
    occurrences: [
      { ref: '19:12 (Yaḥyā)', arabic: 'وَآتَيْنَاهُ الْحُكْمَ صَبِيًّا', trans: 'We gave him wisdom while still a child', note: 'صَبِيًّا (child) is from root ص-ب-و, not this root — but contextually Yaḥyā\'s childhood is the backdrop to his birth from this root.' },
      { ref: '19:15', arabic: 'وَسَلَامٌ عَلَيْهِ يَوْمَ <span class="occurrence-highlight">وُلِدَ</span> وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا', trans: 'And peace upon him the day he <b>was born</b>, and the day he dies, and the day he is raised alive', note: 'وُلِدَ = passive Form I perfect (fuʿila pattern). The passive removes the human agent and foregrounds birth as a divine event.' },
      { ref: '19:33', arabic: 'وَسَلَامٌ عَلَيَّ يَوْمَ <span class="occurrence-highlight">وُلِدتُّ</span> وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا', trans: 'And peace upon me the day I <b>was born</b>, and the day I die, and the day I am raised alive', note: 'ʿĪsā repeats the same benediction in the first person. وُلِدتُّ = passive 1st person singular of Form I (fuʿiltu).' },
    ]
  },

  {
    id: 'hyy',
    arabic: 'حيي',
    letters: 'ح - ي - ي',
    roman: 'ḥ-y-y',
    meaning: 'to live, to be alive',
    semantic: 'Life itself. The root not only produces words for biological life but for spiritual vitality (the "living" heart), divine life (الحَيّ — the Ever-Living), and — most remarkably for Surah Maryam — the prophet\'s name يَحْيَى (Yaḥyā) is itself a Form I imperfect verb from this root meaning "he will live / he lives."',
    quranCount: '184',
    maryamCount: 6,
    memoryAid: 'يَحْيَى (Yaḥyā = John the Baptist) IS this root. His name is a conjugated verb: Form I imperfect, 3rd person masculine singular — "he lives / he will live." Every time his name is called in the surah, you are hearing an Arabic verb. And حَيًّا at the end of verse 15 — "raised alive" — closes the benediction with the same root: born, dies, and raised ALIVE (ḥayyan).',
    forms: [
      { num: 'I', arabic: 'حَيَّ / حَيِيَ', roman: 'ḥayya / ḥayiya', pattern: 'faʿʿa / faʿila (doubled/weak)', meaning: 'to live, to be alive', masdar: 'حَيَاة / حَيّ', attested: true,
        detail: 'Form I: a doubled/weak verb (both the second and third radicals are yāʾ). يَحْيَى in the imperfect (he lives/will live) — this is the exact form used as Yaḥyā\'s name. The alif maqṣūra (ى) at the end is the long ā.',
        perfect: [{p:'حَيَّ / حَيِيَ',t:'he lived'},{p:'حَيَّتْ',t:'she lived'},{p:'حَيِيتُ',t:'I lived'}],
        imperfect: [{p:'يَحْيَى',t:'he lives (= Yaḥyā\'s name!)'},{p:'تَحْيَى',t:'she lives'},{p:'أَحْيَا',t:'I live'}]
      },
      { num: 'II', arabic: 'حَيَّا', roman: 'ḥayyā', pattern: 'faʿʿala (weak)', meaning: 'to greet, to say "ḥayyāka Allah" (may God keep you alive)', masdar: 'تَحِيَّة', attested: true,
        detail: 'Form II: to give greetings of life. تَحِيَّة (taḥiyya) — the word for greeting/salutation — comes from this form. The greeting اَلسَّلَامُ عَلَيْكُمْ is linguistically related: wishing the other person life-giving peace.' },
      { num: 'IV', arabic: 'أَحْيَا', roman: 'aḥyā', pattern: 'afʿala (weak)', meaning: 'to bring to life, to resurrect, to revive', masdar: 'إِحْيَاء', attested: true,
        detail: 'Form IV (causative): to cause life. Critical for Quranic theology — اللهُ يُحْيِي وَيُمِيتُ (God gives life and causes death). The resurrection (al-baʿth) is described using this form: يُحْيِي الْمَوْتَى (He revives the dead).',
        perfect: [{p:'أَحْيَا',t:'he gave life'},{p:'أَحْيَيْتُ',t:'I gave life'}],
        imperfect: [{p:'يُحْيِي',t:'he gives life (divine)'},{p:'تُحْيِي',t:'she gives life'}]
      },
      { num: 'X', arabic: 'اسْتَحْيَا', roman: 'istaḥyā', pattern: 'istafʿala (weak)', meaning: 'to feel shame, to be too shy (seeking to preserve life-dignity)', masdar: 'اسْتِحْيَاء', attested: true,
        detail: 'Form X (seeking): the sense of shame understood as "life-preservation" through social propriety. Related to the Hadith: "al-ḥayāʾ min al-īmān" — modesty/shame is from faith. The same root — life — gives rise to both biological life and social dignity.' },
      { num: 'II/III/V/VI/VII/VIII/IX', arabic: '—', roman: '—', pattern: '—', meaning: 'Not commonly attested', masdar: '—', attested: false, detail: 'Less common forms for this root.' }
    ],
    derived: [
      { arabic: 'يَحْيَى', roman: 'yaḥyā', meaning: 'he lives / will live (= the name Yaḥyā)', pattern: 'Form I imperfect 3ms (used as proper noun)', type: 'verb', badge: 'badge-divine' },
      { arabic: 'حَيَاة', roman: 'ḥayāt', meaning: 'life (noun)', pattern: 'faʿāla — abstract noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'حَيّ', roman: 'ḥayy', meaning: 'alive, living', pattern: 'faʿʿ — adjective/noun', type: 'adj', badge: 'badge-adj' },
      { arabic: 'حَيًّا', roman: 'ḥayyan', meaning: 'alive (accusative — ḥāl)', pattern: 'faʿʿ manṣūb — circumstantial', type: 'adj', badge: 'badge-adj' },
      { arabic: 'الْحَيُّ', roman: 'al-Ḥayy', meaning: 'The Ever-Living (divine name)', pattern: 'with definite article', type: 'adj', badge: 'badge-divine' },
      { arabic: 'تَحِيَّة', roman: 'taḥiyya', meaning: 'greeting, salutation', pattern: 'Form II maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'إِحْيَاء', roman: 'iḥyāʾ', meaning: 'giving life, revival, resurrection', pattern: 'Form IV maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'أَحْيَاء', roman: 'aḥyāʾ', meaning: 'the living (plural)', pattern: 'afʿāl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'حَيَاءٌ', roman: 'ḥayāʾ', meaning: 'modesty, shyness (preserving life-dignity)', pattern: 'faʿāʾ — abstract noun', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '19:7', arabic: 'بِغُلَامٍ اسْمُهُ <span class="occurrence-highlight">يَحْيَىٰ</span> لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا', trans: 'Of a boy whose name is <b>Yaḥyā</b> — We have not made for him before any namesake', note: 'يَحْيَى: Form I imperfect verb (yaḥyā = he lives/will live) used as a proper noun. The child\'s name IS a conjugated verb.' },
      { ref: '19:12', arabic: 'يَا <span class="occurrence-highlight">يَحْيَىٰ</span> خُذِ الْكِتَابَ بِقُوَّةٍ', trans: 'O <b>Yaḥyā</b>, take the Scripture with strength', note: 'يَا يَحْيَى: vocative address. God calls the prophet by his name — a living verb — and commands action.' },
      { ref: '19:15', arabic: 'وَيَوْمَ يُبْعَثُ <span class="occurrence-highlight">حَيًّا</span>', trans: 'And the day he is raised <b>alive</b>', note: 'حَيًّا: ḥāl accusative (circumstantial) — the state of being alive at the moment of resurrection. Same root as his name. The verse closes with the root of his very name.' },
    ]
  },

  {
    id: 'slm',
    arabic: 'سلم',
    letters: 'س - ل - م',
    roman: 's-l-m',
    meaning: 'to be safe, to be at peace, to submit',
    semantic: 'Safety, peace, and wholeness through the removal of harm. This root gives Islam (al-islām — submission to God), Muslim (muslim — one who submits), salām (peace/greeting), and the three benedictions سَلَامٌ عَلَيْهِ in verses 15, 33, and 47 of Surah Maryam — a structural echo binding the three miraculous stories.',
    quranCount: '140+',
    maryamCount: 4,
    memoryAid: 'سَلَامٌ عَلَيْهِ appears THREE times in Surah Maryam — at the birth of Yaḥyā (v.15), the birth of ʿĪsā (v.33), and Ibrāhīm\'s farewell to his father (v.47). This structural echo is the surah\'s musical refrain. Each time you hear سَلَام, know you are at a structural turning point. The root also gives you the greeting السَّلَامُ عَلَيْكُمْ — every Muslim greeting uses this root.',
    forms: [
      { num: 'I', arabic: 'سَلِمَ', roman: 'salima', pattern: 'faʿila', meaning: 'to be safe, to escape harm, to be sound', masdar: 'سَلَامَة', attested: true,
        detail: 'Form I (faʿila — emotional/state pattern): to be in a state of safety and wholeness. The person who سَلِمَ has emerged from danger without harm.',
        perfect: [{p:'سَلِمَ',t:'he was safe'},{p:'سَلِمَتْ',t:'she was safe'},{p:'سَلِمْتُ',t:'I was safe'}],
        imperfect: [{p:'يَسْلَمُ',t:'he is safe'},{p:'تَسْلَمُ',t:'she is safe'}]
      },
      { num: 'II', arabic: 'سَلَّمَ', roman: 'sallama', pattern: 'faʿʿala', meaning: 'to greet with peace, to hand over, to surrender', masdar: 'تَسْلِيم', attested: true,
        detail: 'Form II: the active bestowal of peace upon someone, or the handing over of something. وَسَلِّمُوا تَسْلِيمًا — "and submit with complete submission" (33:56). Also used for the formal ending of prayer (al-taslīm).' },
      { num: 'III', arabic: 'سَالَمَ', roman: 'sālama', pattern: 'fāʿala', meaning: 'to make peace with, to conclude a peace with', masdar: 'مُسَالَمَة', attested: true,
        detail: 'Form III (reciprocal peace-making): the mutual exchange of peace between two parties — treaty, truce. Used in Quranic contexts for relations between communities.' },
      { num: 'IV', arabic: 'أَسْلَمَ', roman: 'aslama', pattern: 'afʿala', meaning: 'to submit (to God), to become Muslim', masdar: 'إِسْلَام', attested: true,
        detail: 'Form IV (causative, but here reflexive-causative): to cause oneself to enter into peace through submission to God. إِسْلَام (islām) is the maṣdar of this form — "the submission." مُسْلِم is the active participle — "one who submits."',
        perfect: [{p:'أَسْلَمَ',t:'he submitted/became Muslim'},{p:'أَسْلَمْتُ',t:'I submitted'}],
        imperfect: [{p:'يُسْلِمُ',t:'he submits'},{p:'نُسْلِمُ',t:'we submit'}]
      },
      { num: 'V', arabic: 'تَسَلَّمَ', roman: 'tasallama', pattern: 'tafaʿʿala', meaning: 'to receive, to take delivery of', masdar: 'تَسَلُّم', attested: false,
        detail: 'Form V: to take something handed over to oneself. Used in modern Arabic for receiving a package or a position.' },
      { num: 'VI', arabic: 'تَسَالَمَ', roman: 'tasālama', pattern: 'tafāʿala', meaning: 'to make peace with one another', masdar: 'تَسَالُم', attested: false,
        detail: 'Form VI (mutual): both parties seeking peace simultaneously.' },
      { num: 'VIII/X', arabic: 'اسْتَسْلَمَ', roman: 'istaslama', pattern: 'istafʿala', meaning: 'to surrender, to submit oneself', masdar: 'اسْتِسْلَام', attested: true,
        detail: 'Form X (seeking): to seek peace by surrendering completely. اسْتِسْلَام (istislām) is total surrender — the word used for unconditional capitulation, and in spiritual contexts for complete reliance on God.' },
    ],
    derived: [
      { arabic: 'سَلَام', roman: 'salām', meaning: 'peace, safety, greeting', pattern: 'faʿāl — noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'سَلَامَة', roman: 'salāma', meaning: 'safety, soundness, wellbeing', pattern: 'faʿāla — abstract noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'إِسْلَام', roman: 'islām', meaning: 'submission to God; the religion', pattern: 'Form IV maṣdar (ifʿāl)', type: 'masdar', badge: 'badge-divine' },
      { arabic: 'مُسْلِم', roman: 'muslim', meaning: 'one who submits (to God)', pattern: 'Form IV active participle (mufʿil)', type: 'part', badge: 'badge-part' },
      { arabic: 'مُسَلَّم', roman: 'musallam', meaning: 'delivered, handed over; accepted as given', pattern: 'Form II passive participle', type: 'part', badge: 'badge-part' },
      { arabic: 'السَّلَامُ', roman: 'al-Salām', meaning: 'The Source of Peace (divine name)', pattern: 'with definite article', type: 'adj', badge: 'badge-divine' },
      { arabic: 'تَسْلِيم', roman: 'taslīm', meaning: 'greeting; the peace-ending of prayer', pattern: 'Form II maṣdar', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'سَلِيم', roman: 'salīm', meaning: 'sound, whole, unharmed', pattern: 'faʿīl — adjective', type: 'adj', badge: 'badge-adj' },
      { arabic: 'مَسَالِم', roman: 'masālim', meaning: 'peaceful (plural adjective)', pattern: 'broken plural', type: 'noun', badge: 'badge-plural' },
    ],
    occurrences: [
      { ref: '19:15', arabic: 'وَ<span class="occurrence-highlight">سَلَامٌ</span> عَلَيْهِ يَوْمَ وُلِدَ وَيَوْمَ يَمُوتُ وَيَوْمَ يُبْعَثُ حَيًّا', trans: 'And <b>peace</b> upon him the day he was born, the day he dies, and the day he is raised alive', note: 'سَلَامٌ: mubtadaʾ (subject), marfūʿ with tanwīn. Nominal sentence functioning as benediction. First of three structural refrains.' },
      { ref: '19:33', arabic: 'وَ<span class="occurrence-highlight">سَلَامٌ</span> عَلَيَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا', trans: 'And <b>peace</b> upon me the day I was born, the day I die, the day I am raised alive', note: 'Exact same structure, but ʿĪsā speaks in the first person (عَلَيَّ = upon me). The deliberate echo links the two miraculous births.' },
      { ref: '19:47', arabic: '<span class="occurrence-highlight">سَلَامٌ</span> عَلَيْكَ سَأَسْتَغْفِرُ لَكَ رَبِّي', trans: '<b>Peace</b> upon you — I will ask forgiveness for you from my Lord', note: 'Ibrāhīm\'s farewell سَلَام to his father — a gracious leave-taking, not a curse. Third structural refrain, now in human-to-human speech.' },
    ]
  }
];

}
