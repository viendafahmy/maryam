// Surah Al-Baqarah — verse-by-verse grammar data.
// SCOPE NOTE: this is batch 1 of the requested 2:40–123 range (verses 40–50).
// 84 verses of scholarly-grade grammar is a large undertaking — this file will
// grow in batches so each addition stays accurate rather than rushed.
// Add new verses by copying an existing block (e.g. `51: { ... }`).

if (typeof window.verses === 'undefined') { window.verses = {
  40: {
    arabic: 'يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ وَإِيَّايَ فَارْهَبُونِ',
    transliteration: 'yā banī isrāʾīla dhkurū niʿmatiya llatī anʿamtu ʿalaykum wa-awfū biʿahdī ūfi biʿahdikum wa-iyyāya fa-rhabūni',
    translation: 'O Children of Israel, remember My favor which I bestowed upon you, and fulfill My covenant so I will fulfill your covenant, and Me alone should you fear',
    tags: ['verb', 'structure'],
    tagLabels: ['Vocative + imperative', 'Conditional jussive', 'Iyyāya fronting'],
    summary: 'The opening address to Banī Isrāʾīl — covenant grammar begins',
    analysis: [
      { word: 'يَا بَنِي إِسْرَائِيلَ', detail: 'يَا: vocative particle. بَنِي: construct-state plural of ابْن (son), majrūr in form (the ي ending) as the mundā muḍāf — a vocative noun in iḍāfah loses tanwīn and takes this reduced form. إِسْرَائِيلَ: proper noun (Jacob), diptote — no tanwīn, fixed fatḥa in oblique cases. This exact vocative recurs at v.47, forming a structural bracket around the intervening commands.' },
      { word: 'اذْكُرُوا', detail: 'Form I imperative, root ذ-ك-ر (to remember/mention), masculine plural: "remember!" The hamzat al-waṣl (اذْ) is a connecting hamza, pronounced only when the word begins an utterance — dropped in continuous recitation after a vowel.' },
      { word: 'وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ', detail: 'أَوْفُوا: Form IV imperative from root و-ف-ي (to fulfill), masculine plural — command form. أُوفِ: Form IV imperfect jussive, first-person singular (majestic "I") — jussive because it is the response (jawāb) to the imperative, a construction where a command followed by an imperfect verb creates an implicit conditional: "[if] you fulfill My covenant, I will fulfill yours." بِعَهْدِي / بِعَهْدِكُمْ: noun عَهْد (covenant, root ع-ه-د) with preposition بِـ and possessive suffixes, parallel construction reinforcing reciprocity.' },
      { word: 'وَإِيَّايَ فَارْهَبُونِ', detail: 'إِيَّايَ: the independent (disjunctive) pronoun "Me," fronted before the verb for emphasis (taqdīm) — since Arabic verbs already contain their subject/object, fronting a free-standing pronoun signals exclusivity: "Me and no other." فَـ: consequential particle. ارْهَبُونِ: Form I imperative from root ر-ه-ب (to fear/dread), plural, with the final ن retained before the elided يَ (object pronoun "me") — a common Qurʾānic elision for rhythm.' }
    ],
    highlight: 'إِيَّايَ فَارْهَبُونِ fronts the disjunctive pronoun before the verb — grammatical emphasis expressing exclusivity: fear Him and no other. This fronting pattern (taqdīm mā ḥaqquhu al-taʾkhīr) is one of Arabic rhetoric\'s primary emphasis devices.'
  },
  41: {
    arabic: 'وَآمِنُوا بِمَا أَنزَلْتُ مُصَدِّقًا لِّمَا مَعَكُمْ وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ ۖ وَلَا تَشْتَرُوا بِآيَاتِي ثَمَنًا قَلِيلًا وَإِيَّايَ فَاتَّقُونِ',
    transliteration: 'wa-āminū bimā anzaltu muṣaddiqan limā maʿakum wa-lā takūnū awwala kāfirin bihi wa-lā tashtarū bi-āyātī thamanan qalīlan wa-iyyāya fa-ttaqūni',
    translation: 'And believe in what I have sent down, confirming what is with you, and do not be the first to disbelieve in it, and do not exchange My verses for a small price, and fear only Me',
    tags: ['verb', 'noun'],
    tagLabels: ['Ḥāl accusative', 'Negated kāna', 'Metaphor: buying/selling'],
    summary: 'A call to belief, with a warning against trading truth for cheap gain',
    analysis: [
      { word: 'مُصَدِّقًا', detail: 'Active participle, Form II, from root ص-د-ق (to be truthful/to confirm). Case: manṣūb as ḥāl (circumstantial accusative) describing the state of مَا أَنزَلْتُ (what I sent down) at the moment of its revelation — it descended *in a state of confirming* the earlier scriptures.' },
      { word: 'وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ', detail: 'لَا + تَكُونُوا: negated jussive of the defective verb كَانَ, plural — "do not be." أَوَّلَ: khabar kāna, manṣūb, elative noun (superlative pattern afʿal) meaning "first." كَافِرٍ: majrūr, muḍāf ilayhi in iḍāfah with أَوَّلَ, active participle from ك-ف-ر (to disbelieve) — literally "first of a disbeliever [in it]," singular used generically for the class of disbelievers.' },
      { word: 'وَلَا تَشْتَرُوا بِآيَاتِي ثَمَنًا قَلِيلًا', detail: 'تَشْتَرُوا: Form VIII jussive (negated by لَا) from root ش-ر-ي (to buy/exchange) — Form VIII here carries a reflexive-commercial sense, "to purchase for oneself." ثَمَنًا: manṣūb, direct object (price/payment). قَلِيلًا: manṣūb, adjective modifying ثَمَنًا. The verse builds an extended commercial metaphor — trading away divine verses as though bartering goods, condemned precisely because the "price" received is trivial next to what is surrendered.' }
    ],
    highlight: 'لَا تَشْتَرُوا بِآيَاتِي ثَمَنًا قَلِيلًا uses a commercial root (ش-ر-ي, to buy) metaphorically for compromising religious truth for worldly gain — a recurring Qurʾānic image of exchanging the eternal for the cheap and temporary.'
  },
  42: {
    arabic: 'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ وَتَكْتُمُوا الْحَقَّ وَأَنتُمْ تَعْلَمُونَ',
    transliteration: 'wa-lā talbisū l-ḥaqqa bi-l-bāṭili wa-taktumū l-ḥaqqa wa-antum taʿlamūna',
    translation: 'And do not mix truth with falsehood or conceal the truth while you know',
    tags: ['verb', 'structure'],
    tagLabels: ['Coordinated jussive', 'Ḥāl clause (wa + pronoun + verb)'],
    summary: 'Two parallel prohibitions, closed by a circumstantial clause of culpability',
    analysis: [
      { word: 'تَلْبِسُوا', detail: 'Form I jussive (negated), root ل-ب-س — literally "to clothe/cover," here metaphorically "to mix/conceal by disguising." تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ: "do not clothe truth with falsehood" — the image is of falsehood as a garment thrown over the plain form of truth, obscuring its shape.' },
      { word: 'وَتَكْتُمُوا الْحَقَّ', detail: 'تَكْتُمُوا: Form I jussive, root ك-ت-م (to hide/conceal), coordinated with تَلْبِسُوا under the same لَا — both prohibitions share one negation. الْحَقَّ: repeated direct object, manṣūb, definite — "the truth," referring in context to the recognizable signs of prophethood the People of the Book possessed.' },
      { word: 'وَأَنتُمْ تَعْلَمُونَ', detail: 'A ḥāl (circumstantial) clause built from an independent pronoun + imperfect verb (wa + mubtadaʾ + khabar fiʿlī) — this construction always marks simultaneity: "while you [in fact] know." Its grammatical function is to remove any excuse of ignorance — the concealment described is not innocent error but knowing suppression.' }
    ],
    highlight: 'وَأَنتُمْ تَعْلَمُونَ is a ḥāl clause of pronoun + verb — a construction that pins deliberate knowledge onto the preceding action. This exact ḥāl pattern (wa + independent pronoun + imperfect) recurs throughout the Qurʾān to strip away claims of innocent mistake.'
  },
  43: {
    arabic: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ',
    transliteration: 'wa-aqīmū l-ṣalāta wa-ātū l-zakāta wa-rkaʿū maʿa l-rākiʿīna',
    translation: 'And establish prayer, and give zakāh, and bow with those who bow',
    tags: ['verb', 'noun'],
    tagLabels: ['Form IV أَقِيمُوا', 'Triple imperative'],
    summary: 'Three ritual commands, ending with communal worship',
    analysis: [
      { word: 'أَقِيمُوا', detail: 'Form IV imperative, root ق-و-م (to stand/rise), plural: "establish!" Form IV here is causative-intensive — not merely "pray" but "cause prayer to stand/be properly established," implying full, upright, unwavering performance rather than a token act.' },
      { word: 'آتُوا الزَّكَاةَ', detail: 'آتُوا: Form IV imperative, root أ-ت-ي (to come/bring), plural — "give/bring." الزَّكَاةَ: direct object, manṣūb, from root ز-ك-و (to grow/purify). The pairing of ṣalāh and zakāh (prayer and almsgiving) is one of the Qurʾān\'s most frequent formulas, appearing over two dozen times, binding the vertical (God-ward) and horizontal (community-ward) dimensions of worship.' },
      { word: 'وَارْكَعُوا مَعَ الرَّاكِعِينَ', detail: 'ارْكَعُوا: Form I imperative, root ر-ك-ع (to bow), plural. الرَّاكِعِينَ: active participle plural, majrūr after مَعَ (with) — "those who bow." The command to bow specifically *with* the bowing congregation (rather than simply "bow") emphasizes communal, congregational prayer over solitary devotion.' }
    ],
    highlight: 'ارْكَعُوا مَعَ الرَّاكِعِينَ singles out congregational posture — commanding not just the act of bowing but bowing *alongside* others, making communal prayer part of the grammatical command itself.'
  },
  44: {
    arabic: 'أَتَأْمُرُونَ النَّاسَ بِالْبِرِّ وَتَنسَوْنَ أَنفُسَكُمْ وَأَنتُمْ تَتْلُونَ الْكِتَابَ ۚ أَفَلَا تَعْقِلُونَ',
    transliteration: 'a-taʾmurūna l-nāsa bi-l-birri wa-tansawna anfusakum wa-antum tatlūna l-kitāba a-fa-lā taʿqilūna',
    translation: 'Do you order righteousness to people and forget yourselves, while you recite the Scripture? Then will you not reason?',
    tags: ['verb', 'structure'],
    tagLabels: ['Interrogative hamza (rebuke)', 'Ḥāl clause', 'Rhetorical question'],
    summary: 'A rebuke built entirely from interrogative grammar',
    analysis: [
      { word: 'أَتَأْمُرُونَ', detail: 'Interrogative hamza أَ + Form I imperfect تَأْمُرُونَ (root أ-م-ر, to command), 2nd person plural. This is not a genuine question but istifhām inkārī — an interrogative used rhetorically to express reproach/disbelief at the addressee\'s behavior: "How can you possibly command...?"' },
      { word: 'وَتَنسَوْنَ أَنفُسَكُمْ', detail: 'تَنسَوْنَ: Form I imperfect, root ن-س-ي (to forget), 2nd person plural, coordinated under the same interrogative force as أَتَأْمُرُونَ. أَنفُسَكُمْ: plural of نَفْس (self/soul) + possessive suffix, direct object — "yourselves." The pairing sets commanding-others against forgetting-oneself as a glaring, self-indicting contradiction.' },
      { word: 'وَأَنتُمْ تَتْلُونَ الْكِتَابَ', detail: 'Another ḥāl clause (independent pronoun + imperfect verb, as in v.42) — "while you recite the Scripture." Its function here is to intensify the rebuke: the very people forgetting themselves are those with direct, ongoing access to the guidance that should prevent such forgetting.' },
      { word: 'أَفَلَا تَعْقِلُونَ', detail: 'أَ + فَـ + لَا + تَعْقِلُونَ: a second rhetorical question, root ع-ق-ل (to reason/comprehend, the same root giving ʿaql, intellect), 2nd person plural imperfect. This closing formula (a-fa-lā taʿqilūn, "will you not then reason?") recurs as a Qurʾānic refrain following an argument the listener is expected to find self-evidently compelling.' }
    ],
    highlight: 'The verse is built from stacked interrogatives (أَتَأْمُرُونَ ... أَفَلَا تَعْقِلُونَ) — Arabic rhetoric uses genuine grammatical questions to deliver a rebuke stronger than a flat statement could, forcing the listener to supply their own indictment.'
  },
  45: {
    arabic: 'وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى الْخَاشِعِينَ',
    transliteration: 'wa-staʿīnū bi-l-ṣabri wa-l-ṣalāti wa-innahā la-kabīratun illā ʿalā l-khāshiʿīna',
    translation: 'And seek help through patience and prayer, and indeed it is difficult except for the humbly submissive',
    tags: ['verb', 'noun'],
    tagLabels: ['Form X اسْتَعِينُوا', 'إِنَّ + لَ emphasis', 'Exceptive إِلَّا'],
    summary: 'The method (patience and prayer) and the one exception clause that defines who finds it easy',
    analysis: [
      { word: 'اسْتَعِينُوا', detail: 'Form X imperative, root ع-و-ن (to help), plural — "seek help/assistance." Form X consistently carries the sense of "seeking/requesting X for oneself"; here, actively seeking support rather than passively hoping for it.' },
      { word: 'بِالصَّبْرِ وَالصَّلَاةِ', detail: 'بِـ: instrumental preposition ("by means of/through"). الصَّبْرِ: majrūr, noun from root ص-ب-ر (patience/steadfastness — the same root anchoring the ṣabr theme in Sūrat al-Kahf). الصَّلَاةِ: majrūr, coordinated noun — prayer. The pairing names an inner discipline (patience) alongside an outer ritual (prayer) as the joint means of support.' },
      { word: 'وَإِنَّهَا لَكَبِيرَةٌ', detail: 'إِنَّ: emphatic particle governing هَا (it, referring back to the matter of seeking help/prayer) in accusative. لَ: the lām al-tawkīd (emphatic lām), doubling the certainty already carried by إِنَّ. كَبِيرَةٌ: khabar of إِنَّ, marfūʿ — "difficult/burdensome" (literally "great/heavy" — the root ك-ب-ر spans size and difficulty).' },
      { word: 'إِلَّا عَلَى الْخَاشِعِينَ', detail: 'إِلَّا: exceptive particle. الْخَاشِعِينَ: active participle plural, majrūr after عَلَى, from root خ-ش-ع (to be humbly submissive/reverent). The exception clause inverts the preceding difficulty: what is heavy for most becomes light specifically for those with khushūʿ — a grammatical pivot that makes the entire verse hinge on this one excepted group.' }
    ],
    highlight: 'إِلَّا عَلَى الْخَاشِعِينَ is an exceptive (istithnāʾ) clause — grammatically, it carves the khāshiʿīn out of the general rule of difficulty, meaning the burden described in the first half of the verse simply does not apply to them the way it applies to everyone else.'
  },
  46: {
    arabic: 'الَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَاقُو رَبِّهِمْ وَأَنَّهُمْ إِلَيْهِ رَاجِعُونَ',
    transliteration: 'alladhīna yaẓunnūna annahum mulāqū rabbihim wa-annahum ilayhi rājiʿūna',
    translation: 'Who are certain that they will meet their Lord and that they will return to Him',
    tags: ['noun', 'structure'],
    tagLabels: ['Relative clause defining الْخَاشِعِينَ', 'أَنَّ + noun clause', 'Construct participle مُلَاقُو'],
    summary: 'Defining the khāshiʿīn of v.45 — those certain of the meeting with God',
    analysis: [
      { word: 'الَّذِينَ', detail: 'Relative pronoun, masculine plural — this entire verse is a ṣila (relative clause) describing الْخَاشِعِينَ from the previous verse, answering "who are these humbly submissive ones?"' },
      { word: 'يَظُنُّونَ', detail: 'Form I imperfect, root ظ-ن-ن, 3rd person plural. ظَنّ in Qurʾānic usage ranges from "suppose" to "know with certainty" depending on context; here, paired with the confident content that follows (meeting God, returning to Him), it functions closer to certain conviction than mere conjecture — a nuance many exegetes highlight explicitly.' },
      { word: 'أَنَّهُم مُّلَاقُو رَبِّهِمْ', detail: 'أَنَّ + هُمْ: subordinating particle governing a noun clause, "that they..." مُلَاقُو: active participle (ism fāʿil) from Form III لَاقَى (to meet), in construct (muḍāf) form — note the dropped ن and و ending, the regular construct-state contraction of sound masculine plural participles. رَبِّهِمْ: muḍāf ilayhi, majrūr, "their Lord" — completing the iḍāfah "meeters-of their-Lord."' },
      { word: 'وَأَنَّهُمْ إِلَيْهِ رَاجِعُونَ', detail: 'A second, parallel أَنَّ-clause. إِلَيْهِ: prepositional phrase fronted before the predicate for emphasis — "to Him [specifically] they return." رَاجِعُونَ: active participle plural, marfūʿ, khabar of أَنَّ — root ر-ج-ع (to return). The fronting of إِلَيْهِ stresses exclusivity of destination, echoing the إِيَّايَ fronting pattern from v.40.' }
    ],
    highlight: 'مُلَاقُو رَبِّهِمْ shows the construct-state contraction of a sound masculine plural participle (مُلَاقُونَ → مُلَاقُو when followed by a muḍāf ilayhi) — recognizing this dropped نون + وَاو pattern is essential for reading iḍāfah chains built on participles throughout the Qurʾān.'
  },
  47: {
    arabic: 'يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ',
    transliteration: 'yā banī isrāʾīla dhkurū niʿmatiya llatī anʿamtu ʿalaykum wa-annī faḍḍaltukum ʿalā l-ʿālamīna',
    translation: 'O Children of Israel, remember My favor which I bestowed upon you, and that I preferred you over the worlds',
    tags: ['verb', 'structure'],
    tagLabels: ['Refrain (matches v.40)', 'Form II فَضَّلْتُكُمْ'],
    summary: 'The refrain returns — closing the bracket opened at v.40',
    analysis: [
      { word: 'يَا بَنِي إِسْرَائِيلَ اذْكُرُوا نِعْمَتِيَ الَّتِي أَنْعَمْتُ عَلَيْكُمْ', detail: 'This entire opening repeats v.40 verbatim — the vocative, the imperative اذْكُرُوا, and the relative clause on نِعْمَتِيَ (My favor). Structurally, this exact repetition brackets vv.40–46 as a single rhetorical unit addressed to Banī Isrāʾīl, with vv.41–46 as the content inserted between two matching calls to "remember."' },
      { word: 'وَأَنِّي فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ', detail: 'أَنِّي: أَنَّ + first-person suffix, "that I..." — grammatically this clause is coordinated with نِعْمَتِيَ as a second object of remembrance (i.e., "remember My favor... and [remember] that I preferred you"). فَضَّلْتُكُمْ: Form II perfect, root ف-ض-ل (to prefer/favor), 1st person + object suffix كُمْ — Form II intensifies the base meaning into active, deliberate favoring. الْعَالَمِينَ: majrūr after عَلَى, plural of عَالَم (world/created beings) — "over the worlds," i.e., the nations of their era, per the majority of exegetes, not an absolute claim over all peoples for all time.' }
    ],
    highlight: 'The verse repeats v.40\'s opening verbatim — a literary ring structure (tarṣīʿ) bracketing the intervening commands (vv.41–46) as one address, with the second occurrence adding the specific favor being invoked: preference over the nations.'
  },
  48: {
    arabic: 'وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا وَلَا يُقْبَلُ مِنْهَا شَفَاعَةٌ وَلَا يُؤْخَذُ مِنْهَا عَدْلٌ وَلَا هُمْ يُنصَرُونَ',
    transliteration: 'wa-ttaqū yawman lā tajzī nafsun ʿan nafsin shayʾan wa-lā yuqbalu minhā shafāʿatun wa-lā yuʾkhadhu minhā ʿadlun wa-lā hum yunṣarūna',
    translation: 'And fear a Day when no soul will avail another soul at all, nor will intercession be accepted from it, nor will compensation be taken from it, nor will they be helped',
    tags: ['verb', 'structure'],
    tagLabels: ['Fourfold negation', 'Passive verbs (yuqbalu/yuʾkhadhu/yunṣarūna)'],
    summary: 'A fourfold negation describing the utter self-sufficiency required on Judgment Day',
    analysis: [
      { word: 'وَاتَّقُوا يَوْمًا', detail: 'اتَّقُوا: Form VIII imperative, root و-ق-ي (to protect/guard), plural — "fear/be wary of," the same root that gives taqwā. يَوْمًا: manṣūb, indefinite — "a day," introducing a relative-like description without an explicit relative pronoun (the following clause الَّا تَجْزِي... functions as its implicit ṣifa/description).' },
      { word: 'لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا', detail: 'تَجْزِي: Form I imperfect, root ج-ز-ي (to recompense/avail), negated by لَا. نَفْسٌ: subject, marfūʿ, indefinite — "a soul." عَن نَّفْسٍ: "on behalf of/instead of another soul." شَيْئًا: manṣūb, object of specification (mafʿūl muṭlaq-like usage) — "anything at all," intensifying the totality of the negation.' },
      { word: 'وَلَا يُقْبَلُ ... وَلَا يُؤْخَذُ ... وَلَا هُمْ يُنصَرُونَ', detail: 'Three further negated clauses, each in the passive voice: يُقْبَلُ (it will be accepted, root ق-ب-ل), يُؤْخَذُ (it will be taken, root أ-خ-ذ), يُنصَرُونَ (they will be helped, root ن-ص-ر). The passive voice throughout removes any named agent capable of intervening — no one accepts, no one takes, no one helps; the grammar itself enacts the total absence of intercessory power on that Day.' }
    ],
    highlight: 'Four consecutive negations (لَا...لَا...لَا...لَا), three of them in the passive voice, systematically close off every avenue of rescue — intercession, ransom, and aid — building a grammatical wall of total accountability before the verse even reaches its content.'
  },
  49: {
    arabic: 'وَإِذْ نَجَّيْنَاكُم مِّنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ ۚ وَفِي ذَٰلِكُم بَلَاءٌ مِّن رَّبِّكُمْ عَظِيمٌ',
    transliteration: 'wa-idh najjaynākum min āli firʿawna yasūmūnakum sūʾa l-ʿadhābi yudhabbiḥūna abnāʾakum wa-yastaḥyūna nisāʾakum wa-fī dhālikum balāʾun min rabbikum ʿaẓīmun',
    translation: 'And [remember] when We saved you from the people of Pharaoh, who afflicted you with the worst torment, slaughtering your sons and letting your women live — and in that was a great trial from your Lord',
    tags: ['verb', 'structure'],
    tagLabels: ['إِذْ narrative shift', 'Form II نَجَّيْنَا', 'Ḥāl clauses describing Pharaoh\'s people'],
    summary: 'The narrative pivots to history — the rescue from Pharaoh begins',
    analysis: [
      { word: 'وَإِذْ نَجَّيْنَاكُم', detail: 'إِذْ: temporal particle, here with an implied governing verb "remember" (اذْكُرُوا) carried over from v.47/40 — a common Qurʾānic ellipsis when shifting into historical narrative. نَجَّيْنَا: Form II perfect, root ن-ج-و (to be safe/rescued), 1st person plural (majestic) + object suffix كُم — "We saved you," Form II carrying the causative sense of *making* someone safe.' },
      { word: 'مِّنْ آلِ فِرْعَوْنَ', detail: 'آل: "people/household of," majrūr after مِنْ, in iḍāfah with فِرْعَوْنَ. فِرْعَوْنَ: proper noun (Pharaoh), diptote — no tanwīn, fixed fatḥa. Compare آل used similarly for prophetic lineages (آل إبراهيم) — here for a ruling dynasty instead, the same construct-noun mechanism applied to a different kind of "house."' },
      { word: 'يَسُومُونَكُمْ سُوءَ الْعَذَابِ', detail: 'يَسُومُونَ: Form I imperfect, root س-و-م (to impose/afflict continuously), 3rd person plural — describing repeated, ongoing affliction rather than a single act, hence imperfect (not perfect) tense despite the historical setting. سُوءَ الْعَذَابِ: manṣūb, "the worst of torment" — a cognate-object-like intensifying accusative.' },
      { word: 'يُذَبِّحُونَ أَبْنَاءَكُمْ وَيَسْتَحْيُونَ نِسَاءَكُمْ', detail: 'يُذَبِّحُونَ: Form II imperfect, root ذ-ب-ح (to slaughter), plural — Form II intensifies into repeated, systematic slaughter (of male infants specifically, per the historical account). يَسْتَحْيُونَ: Form X imperfect, root ح-ي-ي (to live — the same root behind يَحْيَى in Sūrat Maryam), here meaning "to spare alive/let live," describing the selective sparing of female children as part of the same oppressive policy. Both verbs function as ḥāl clauses describing the manner of the affliction just named.' }
    ],
    highlight: 'يَسْتَحْيُونَ shares its root (ح-ي-ي) with Yaḥyā\'s name in Sūrat Maryam — but Form X here twists the root\'s meaning toward a grim technical sense, "sparing alive [as part of a persecution policy]," showing how the same root can carry opposite emotional weight depending on form and context.'
  },
  50: {
    arabic: 'وَإِذْ فَرَقْنَا بِكُمُ الْبَحْرَ فَأَنجَيْنَاكُمْ وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ',
    transliteration: 'wa-idh faraqnā bikumu l-baḥra fa-anjaynākum wa-aghraqnā āla firʿawna wa-antum tanẓurūna',
    translation: 'And [remember] when We parted the sea for you and saved you and drowned the people of Pharaoh while you were looking on',
    tags: ['verb', 'structure'],
    tagLabels: ['Form I فَرَقْنَا vs Form IV أَنجَيْنَا/أَغْرَقْنَا', 'Ḥāl clause of witnessing'],
    summary: 'The sea parts — narrative climax of the rescue, witnessed firsthand',
    analysis: [
      { word: 'فَرَقْنَا بِكُمُ الْبَحْرَ', detail: 'فَرَقْنَا: Form I perfect, root ف-ر-ق (to split/separate), 1st person plural — "We split." بِكُمُ: "for your sake/on your behalf," the بِـ indicating the beneficiaries of the act rather than an instrument. الْبَحْرَ: direct object, manṣūb, "the sea."' },
      { word: 'فَأَنجَيْنَاكُمْ وَأَغْرَقْنَا آلَ فِرْعَوْنَ', detail: 'أَنجَيْنَا: Form IV perfect, root ن-ج-و (the same root as نَجَّيْنَا in v.49, but Form IV here rather than Form II — both forms carry causative "to save" with only subtle emphasis differences between them). أَغْرَقْنَا: Form IV perfect, root غ-ر-ق (to drown/sink) — the same causative pattern applied to the opposite outcome, drowning Pharaoh\'s people. The two verbs are grammatically twinned (same form, same tense, same subject) to stage the single event as one rescue and one destruction happening together.' },
      { word: 'وَأَنتُمْ تَنظُرُونَ', detail: 'A third instance of the wa + independent pronoun + imperfect ḥāl construction seen in vv.42 and 44 — "while you were watching." تَنظُرُونَ: root ن-ظ-ر (to look/observe), imperfect despite the past setting, conveying the ongoing, ordinary act of watching *as it happened* — emphasizing that this was witnessed directly, not merely reported to them after the fact.' }
    ],
    highlight: 'أَنجَيْنَاكُمْ (Form IV) and أَغْرَقْنَا (Form IV) sit side by side in identical grammatical form — one root for rescue, one for destruction, both causative, both first-person plural, both perfect tense — a deliberate grammatical parallel staging salvation and ruin as two faces of the same divine act.'
  },
  51: {
    arabic: 'وَإِذْ وَاعَدْنَا مُوسَىٰ أَرْبَعِينَ لَيْلَةً ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِن بَعْدِهِ وَأَنتُمْ ظَالِمُونَ',
    transliteration: 'wa-idh wāʿadnā mūsā arbaʿīna laylatan thumma ttakhadhtumu l-ʿijla min baʿdihi wa-antum ẓālimūna',
    translation: 'And [remember] when We appointed forty nights for Moses, then you took up the calf in his absence, while you were wrongdoers',
    tags: ['verb', 'structure'],
    tagLabels: ['Form III وَاعَدْنَا', 'Form VIII اتَّخَذْتُمُ', 'Ḥāl clause'],
    summary: 'The forty nights, and the calf taken in Moses\' absence',
    analysis: [
      { word: 'وَاعَدْنَا', detail: 'Form III perfect, root و-ع-د (to promise), 1st person plural — "We appointed/set a promised time." Form III here marks the mutual, agreed-upon nature of the appointment — a term set between two parties (God and Moses) rather than a one-sided command.' },
      { word: 'اتَّخَذْتُمُ الْعِجْلَ', detail: 'اتَّخَذْتُمُ: Form VIII perfect, root أ-خ-ذ (to take), 2nd person plural — "you took [for yourselves]." Form VIII\'s reflexive quality is key: not merely "you took" but "you took up/adopted for yourselves," describing an act of chosen devotion, not passive possession. الْعِجْلَ: direct object, manṣūb — "the calf," referring to the golden calf idol.' },
      { word: 'وَأَنتُمْ ظَالِمُونَ', detail: 'The recurring ḥāl construction (wa + independent pronoun + predicate) — here with a participle instead of a verb. ظَالِمُونَ: active participle plural, marfūʿ, khabar of أَنتُمْ, from root ظ-ل-م (to wrong/oppress — one of the Qurʾān\'s most frequent roots, anchoring this entire passage). "While you were wrongdoers" — the participle (not a verb) casts wrongdoing as their settled state at that moment, not a single lapse.' }
    ],
    highlight: 'ظَالِمُونَ (root ظ-ل-م) recurs across this passage — v.51, twice in v.54, and again in v.57 and v.59 — making "wrongdoing" the grammatical thread tying the golden-calf narrative together.'
  },
  52: {
    arabic: 'ثُمَّ عَفَوْنَا عَنكُم مِّن بَعْدِ ذَٰلِكَ لَعَلَّكُمْ تَشْكُرُونَ',
    transliteration: 'thumma ʿafawnā ʿankum min baʿdi dhālika laʿallakum tashkurūna',
    translation: 'Then We pardoned you after that, so perhaps you would be grateful',
    tags: ['verb', 'particle'],
    tagLabels: ['لَعَلَّ + subjunctive', 'ثُمَّ sequencing'],
    summary: 'A short verse of pardon, closing with a purpose clause',
    analysis: [
      { word: 'ثُمَّ', detail: 'Coordinating particle marking sequence *with a gap* — unlike فَـ (immediate sequence), ثُمَّ implies a delay or a rhetorical step back before the next event, appropriate here as the pardon follows meaningfully after (not immediately upon) the offense.' },
      { word: 'عَفَوْنَا عَنكُم', detail: 'عَفَوْنَا: Form I perfect, root ع-ف-و (to pardon/efface), 1st person plural. عَنكُم: preposition عَنْ + suffix — "from/concerning you." The root\'s core sense is "to erase/wipe away," so pardon here is imaged as an erasure of the offense, not merely overlooking it.' },
      { word: 'لَعَلَّكُمْ تَشْكُرُونَ', detail: 'لَعَلَّ: particle of hoped-for purpose/expectation, governing كُمْ in accusative. تَشْكُرُونَ: Form I imperfect, root ش-ك-ر (to be grateful), 2nd person plural — marfūʿ since لَعَلَّ (unlike أَنْ) does not put the following verb in the subjunctive; it is simply the khabar of a nominal-type sentence. "So that you might be grateful" — the pardon is framed as extended with a hoped-for, not guaranteed, response.' }
    ],
    highlight: 'لَعَلَّكُمْ تَشْكُرُونَ uses لَعَلَّ (perhaps/so that) rather than a hard purpose particle like لِـ — grammatically softer, framing gratitude as a hoped-for response to mercy rather than a demanded one.'
  },
  53: {
    arabic: 'وَإِذْ آتَيْنَا مُوسَى الْكِتَابَ وَالْفُرْقَانَ لَعَلَّكُمْ تَهْتَدُونَ',
    transliteration: 'wa-idh ātaynā mūsā l-kitāba wa-l-furqāna laʿallakum tahtadūna',
    translation: 'And [remember] when We gave Moses the Scripture and the Criterion, so perhaps you would be guided',
    tags: ['verb', 'noun'],
    tagLabels: ['Form IV آتَيْنَا, two objects', 'Form VIII تَهْتَدُونَ'],
    summary: 'The giving of the Torah and the Furqān',
    analysis: [
      { word: 'آتَيْنَا مُوسَى الْكِتَابَ وَالْفُرْقَانَ', detail: 'آتَيْنَا: Form IV perfect, root أ-ت-ي, 1st person plural — "We gave," taking two objects (as seen already with this root in v.12 of Sūrat Maryam): مُوسَى (indirect recipient) and الْكِتَابَ وَالْفُرْقَانَ (direct objects, coordinated). الْفُرْقَانَ: from root ف-ر-ق (to separate/distinguish), a noun meaning "the Criterion" — that which separates truth from falsehood. Most exegetes read الْكِتَابَ وَالْفُرْقَانَ as two descriptions of one gift (the Torah), joined by وَ for emphasis (ʿaṭf tafsīrī) rather than two separate items.' },
      { word: 'لَعَلَّكُمْ تَهْتَدُونَ', detail: 'تَهْتَدُونَ: Form VIII imperfect, root ه-د-ي (to guide), 2nd person plural — "you may be guided." Form VIII carries a reflexive sense: not merely receiving guidance passively but actively finding/taking one\'s way through it — an apt verb for a "Criterion" meant to be actively applied in judgment.' }
    ],
    highlight: 'الْكِتَابَ وَالْفُرْقَانَ pairs two nouns for what most exegetes take as a single gift — a construction (ʿaṭf tafsīrī, explanatory coordination) where the second noun re-describes rather than adds to the first.'
  },
  54: {
    arabic: 'وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ يَا قَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَىٰ بَارِئِكُمْ فَاقْتُلُوا أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌ لَّكُمْ عِندَ بَارِئِكُمْ فَتَابَ عَلَيْكُمْ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ',
    transliteration: 'wa-idh qāla mūsā li-qawmihi yā qawmi innakum ẓalamtum anfusakum bi-ttikhādhikumu l-ʿijla fa-tūbū ilā bāriʾikum fa-qtulū anfusakum dhālikum khayrun lakum ʿinda bāriʾikum fa-tāba ʿalaykum innahu huwa l-tawwābu l-raḥīmu',
    translation: 'And [remember] when Moses said to his people, "O my people, you have wronged yourselves by your taking of the calf, so turn in repentance to your Maker and kill yourselves — that is best for you in your Maker\'s sight." Then He accepted your repentance; indeed He is the Accepting of Repentance, the Merciful',
    tags: ['verb', 'structure'],
    tagLabels: ['Elative خَيْرٌ', 'Form I تَابَ / Form III التَّوَّابُ', 'بَارِئ — Creator'],
    summary: 'Moses\' address to his people, and the acceptance of their repentance',
    analysis: [
      { word: 'إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم', detail: 'إِنَّكُمْ: إِنَّ + suffix, emphatic — "indeed you." ظَلَمْتُمْ: Form I perfect, root ظ-ل-م, 2nd person plural — "you wronged." أَنفُسَكُم: direct object — "yourselves." The reflexive object is key theologically: the wrong of idol-worship is framed grammatically as self-directed harm, not merely an offense against God.' },
      { word: 'فَتُوبُوا إِلَىٰ بَارِئِكُمْ', detail: 'تُوبُوا: Form I imperative, root ت-و-ب (to turn/repent), plural — "repent!" بَارِئِكُمْ: active participle from root ب-ر-أ (to create/originate), majrūr after إِلَى, + possessive suffix — "your Maker/Originator," a divine name emphasizing God as the one who brought them into being from nothing, invoked here precisely because their offense (worshipping a self-made calf) inverted the maker/made relationship.' },
      { word: 'فَاقْتُلُوا أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌ لَّكُمْ', detail: 'اقْتُلُوا: Form I imperative, root ق-ت-ل (to kill), plural. أَنفُسَكُمْ: reflexive object again — "yourselves" (exegetes differ on whether this means mutual killing among the offenders or a more general self-sacrifice/repentance). خَيْرٌ: elative (comparative/superlative pattern afʿal, irregularly formed from خير), marfūʿ, khabar — "better," here functioning without an explicit "than" (comparison implied against remaining in the wrong).' },
      { word: 'فَتَابَ عَلَيْكُمْ ۚ إِنَّهُ هُوَ التَّوَّابُ الرَّحِيمُ', detail: 'تَابَ عَلَيْكُمْ: Form I perfect, same root ت-و-ب — but now with God as subject and عَلَى (upon), a fixed idiom meaning "He turned/relented toward you [accepting repentance]," distinct from تَابُوا (they repented, human-subject). التَّوَّابُ: intensive active-participle pattern (faʿʿāl), from the same root — "the Ever-Accepting of Repentance," one of God\'s names, its intensive form reflecting repeated, ongoing acceptance rather than a single instance.' }
    ],
    highlight: 'تَابَ عَلَيْكُمْ (God turning toward them) and تُوبُوا (the people turning to Him) share the same root ت-و-ب but move in grammatically opposite directions — إِلَى for the human act of turning-to, عَلَى for the divine act of turning-toward/relenting — the preposition alone tells you who is repenting and who is forgiving.'
  },
  55: {
    arabic: 'وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نُّؤْمِنَ لَكَ حَتَّىٰ نَرَى اللَّهَ جَهْرَةً فَأَخَذَتْكُمُ الصَّاعِقَةُ وَأَنتُمْ تَنظُرُونَ',
    transliteration: 'wa-idh qultum yā mūsā lan nuʾmina laka ḥattā narā llāha jahratan fa-akhadhatkumu l-ṣāʿiqatu wa-antum tanẓurūna',
    translation: 'And [remember] when you said, "O Moses, we will never believe you until we see God plainly" — so the thunderbolt seized you while you were looking on',
    tags: ['verb', 'particle'],
    tagLabels: ['لَنْ + subjunctive (emphatic future negation)', 'حَتَّى + subjunctive'],
    summary: 'A demand for direct vision, and its consequence',
    analysis: [
      { word: 'لَن نُّؤْمِنَ لَكَ', detail: 'لَنْ: particle of emphatic future negation, governing the following verb in the subjunctive (manṣūb) — stronger than لَا, "we will never/absolutely not." نُّؤْمِنَ: Form IV subjunctive, root أ-م-ن (to believe/trust), 1st person plural — note the assimilated ن (from نُؤْمِنُ, the imperfect ending drops for subjunctive marking). لَكَ: "in you" — the believing here is trust *in Moses as messenger*, not abstract faith.' },
      { word: 'حَتَّىٰ نَرَى اللَّهَ جَهْرَةً', detail: 'حَتَّى: subordinating particle ("until"), also governing the subjunctive. نَرَى: Form I subjunctive, root ر-أ-ي (to see), 1st person plural. اللَّهَ: direct object, manṣūb. جَهْرَةً: manṣūb, from root ج-ه-ر (to be open/manifest) — ḥāl or tamyīz, "openly/plainly," specifying the manner of seeing demanded: not a vision or dream, but direct, unmediated sight.' },
      { word: 'فَأَخَذَتْكُمُ الصَّاعِقَةُ', detail: 'أَخَذَتْكُمُ: Form I perfect, root أ-خ-ذ (to take/seize), feminine (agreeing with الصَّاعِقَةُ) + object suffix — "it seized you." الصَّاعِقَةُ: subject, marfūʿ, from root ص-ع-ق (to be struck by thunder/lightning) — "the thunderbolt." The same root أ-خ-ذ that described the people "taking up" the calf (v.51, اتَّخَذْتُمُ) now appears with them as the object being "taken" — a grammatical echo linking the offense to its consequence.' }
    ],
    highlight: 'أَخَذَتْكُمُ ("it seized you," v.55) echoes اتَّخَذْتُمُ ("you took," v.51) — same root أ-خ-ذ, but the grammatical roles invert: having been the agents who "took" the calf, they become the objects "taken" by the thunderbolt.'
  },
  56: {
    arabic: 'ثُمَّ بَعَثْنَاكُم مِّن بَعْدِ مَوْتِكُمْ لَعَلَّكُمْ تَشْكُرُونَ',
    transliteration: 'thumma baʿathnākum min baʿdi mawtikum laʿallakum tashkurūna',
    translation: 'Then We revived you after your death, so perhaps you would be grateful',
    tags: ['verb', 'noun'],
    tagLabels: ['Form I بَعَثْنَاكُم', 'Refrain: لَعَلَّكُمْ تَشْكُرُونَ (matches v.52)'],
    summary: 'Revival after death, closing with the same refrain as v.52',
    analysis: [
      { word: 'بَعَثْنَاكُم', detail: 'Form I perfect, root ب-ع-ث (to raise/resurrect/send), 1st person plural + object suffix — "We raised/revived you." This is the same root behind يُبْعَثُ (he is resurrected) in Sūrat Maryam v.15 and the Kahf root explorer\'s bʿth entry — here describing a this-worldly revival after the thunderbolt of v.55, which most exegetes read as literal death and revival, functioning as a smaller sign of the greater resurrection to come.' },
      { word: 'مِّن بَعْدِ مَوْتِكُمْ', detail: 'مِّن بَعْدِ: "after," compound preposition. مَوْتِكُمْ: majrūr, noun from root م-و-ت (to die — the same root as يَمُوتُ in Maryam v.15\'s three-clause benediction) + possessive suffix — "your death."' },
      { word: 'لَعَلَّكُمْ تَشْكُرُونَ', detail: 'Identical to the closing clause of v.52 — the refrain reappears, this time following resurrection rather than pardon, tying the two mercies (forgiveness, revival) together under the same hoped-for response of gratitude.' }
    ],
    highlight: 'لَعَلَّكُمْ تَشْكُرُونَ closes both v.52 and v.56 verbatim — a refrain marking two separate acts of mercy (pardon, then revival) as belonging to the same rhetorical pattern: mercy extended, gratitude hoped for.'
  },
  57: {
    arabic: 'وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ وَأَنزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ ۖ كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ ۖ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ',
    transliteration: 'wa-ẓallalnā ʿalaykumu l-ghamāma wa-anzalnā ʿalaykumu l-manna wa-l-salwā kulū min ṭayyibāti mā razaqnākum wa-mā ẓalamūnā wa-lākin kānū anfusahum yaẓlimūna',
    translation: 'And We shaded you with clouds and sent down upon you manna and quail: "Eat from the good things We have provided you." And they did not wrong Us, but they used to wrong themselves',
    tags: ['verb', 'structure'],
    tagLabels: ['Form II ظَلَّلْنَا', 'Negated + exceptive contrast (مَا...وَلَٰكِن)'],
    summary: 'Provision in the wilderness, and a grammatical correction of whom the wrong actually harmed',
    analysis: [
      { word: 'وَظَلَّلْنَا عَلَيْكُمُ الْغَمَامَ', detail: 'ظَلَّلْنَا: Form II perfect, root ظ-ل-ل (to shade), 1st person plural — causative, "We caused shade over you." الْغَمَامَ: direct object, manṣūb — "the clouds," from root غ-م-م.' },
      { word: 'وَأَنزَلْنَا عَلَيْكُمُ الْمَنَّ وَالسَّلْوَىٰ', detail: 'أَنزَلْنَا: Form IV perfect, root ن-ز-ل (to descend), 1st person plural — "We sent down." الْمَنَّ: "manna," root م-ن-ن. وَالسَّلْوَىٰ: "quail," a separate root س-ل-و unrelated to صلو (prayer) or سلم (peace) despite superficial similarity — a useful reminder that root identification must go by the actual triliteral, not surface resemblance.' },
      { word: 'وَمَا ظَلَمُونَا وَلَٰكِن كَانُوا أَنفُسَهُمْ يَظْلِمُونَ', detail: 'مَا ظَلَمُونَا: negated Form I perfect, root ظ-ل-م again, + object suffix نَا (Us) — "they did not wrong Us." وَلَٰكِن: strong adversative "but rather," introducing a correction. كَانُوا ... يَظْلِمُونَ: كَانَ + imperfect verb, a periphrastic construction expressing habitual past action — "they used to wrong." أَنفُسَهُمْ: reflexive object, fronted before the verb for emphasis — "[it was] themselves [that] they used to wrong." The grammar itself relocates the harm: not outward (against God), but inward (against their own selves).' }
    ],
    highlight: 'مَا ظَلَمُونَا وَلَٰكِن ... أَنفُسَهُمْ يَظْلِمُونَ is a mā...wa-lākin correction structure — grammatically retracting one claim (wronging God) and replacing it with the true one (wronging themselves), with أَنفُسَهُمْ fronted for emphasis exactly as in v.54\'s ظَلَمْتُمْ أَنفُسَكُم.'
  },
  58: {
    arabic: 'وَإِذْ قُلْنَا ادْخُلُوا هَٰذِهِ الْقَرْيَةَ فَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ رَغَدًا وَادْخُلُوا الْبَابَ سُجَّدًا وَقُولُوا حِطَّةٌ نَّغْفِرْ لَكُمْ خَطَايَاكُمْ ۚ وَسَنَزِيدُ الْمُحْسِنِينَ',
    transliteration: 'wa-idh qulnā dkhulū hādhihi l-qaryata fa-kulū minhā ḥaythu shiʾtum raghadan wa-dkhulū l-bāba sujjadan wa-qūlū ḥiṭṭatun naghfir lakum khaṭāyākum wa-sanazīdu l-muḥsinīna',
    translation: 'And [remember] when We said, "Enter this town and eat therefrom wherever you wish, abundantly, and enter the gate prostrating and say, \'Relieve us of our burdens,\' and We will forgive you your sins — and We will increase the doers of good"',
    tags: ['verb', 'structure'],
    tagLabels: ['ḥāl accusatives سُجَّدًا/رَغَدًا', 'Jussive نَّغْفِرْ as response to imperative'],
    summary: 'The command to enter the town, and the conditional grammar of forgiveness',
    analysis: [
      { word: 'ادْخُلُوا هَٰذِهِ الْقَرْيَةَ', detail: 'ادْخُلُوا: Form I imperative, root د-خ-ل (to enter), plural. الْقَرْيَةَ: direct object, manṣūb, from root ق-ر-ي — "the town/village," referring per the majority of exegetes to Jerusalem or a town in the Holy Land.' },
      { word: 'حَيْثُ شِئْتُمْ رَغَدًا', detail: 'حَيْثُ: locative adverb, "wherever." شِئْتُمْ: Form I perfect, root ش-ي-أ (to will/wish), 2nd person plural, inside the relative-like clause. رَغَدًا: manṣūb, mafʿūl muṭlaq-like accusative of manner from root ر-غ-د — "abundantly/in ease."' },
      { word: 'وَادْخُلُوا الْبَابَ سُجَّدًا', detail: 'سُجَّدًا: manṣūb, ḥāl (circumstantial accusative), plural of سَاجِد (prostrating), from root س-ج-د — describing the manner of entry: humbly, in prostration, not the literal full prayer-prostration but a bowed posture of humility.' },
      { word: 'وَقُولُوا حِطَّةٌ نَّغْفِرْ لَكُمْ خَطَايَاكُمْ', detail: 'قُولُوا: Form I imperative, root ق-و-ل, plural. حِطَّةٌ: marfūʿ, from root ح-ط-ط (to lower/relieve) — an exclamatory nominal expression, roughly "[our plea is for] relief/unburdening." نَّغْفِرْ: Form I jussive, root غ-ف-ر (to forgive), 1st person plural — jussive because it functions as the response to the preceding imperatives (the same enter-then-consequence pattern as وَأَوْفُوا بِعَهْدِي أُوفِ in v.40). خَطَايَاكُمْ: direct object, plural of خَطِيئَة (sin/error, root خ-ط-أ) + suffix.' }
    ],
    highlight: 'نَّغْفِرْ لَكُمْ خَطَايَاكُمْ is jussive because it is the grammatical response to a string of imperatives (enter, eat, prostrate, say) — the same "command → jussive consequence" pattern seen in v.40\'s أَوْفُوا/أُوفِ, now extended across four imperatives before its single jussive payoff.'
  },
  59: {
    arabic: 'فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا غَيْرَ الَّذِي قِيلَ لَهُمْ فَأَنزَلْنَا عَلَى الَّذِينَ ظَلَمُوا رِجْزًا مِّنَ السَّمَاءِ بِمَا كَانُوا يَفْسُقُونَ',
    transliteration: 'fa-baddala lladhīna ẓalamū qawlan ghayra lladhī qīla lahum fa-anzalnā ʿalā lladhīna ẓalamū rijzan mina l-samāʾi bimā kānū yafsuqūna',
    translation: 'But those who wronged changed the word to other than what had been said to them, so We sent down upon those who wronged a punishment from the sky for what they used to defiantly transgress',
    tags: ['verb', 'structure'],
    tagLabels: ['Form II بَدَّلَ', 'Passive قِيلَ', 'Causal بِمَا + كَانَ'],
    summary: 'The substitution of the word, and its consequence',
    analysis: [
      { word: 'فَبَدَّلَ الَّذِينَ ظَلَمُوا قَوْلًا', detail: 'بَدَّلَ: Form II perfect, root ب-د-ل (to exchange/substitute), 3rd person masculine — causative-intensive, "changed/substituted." الَّذِينَ ظَلَمُوا: relative clause, subject, "those who wronged" — the same root ظ-ل-م appearing for the third time in this passage (vv.51, 54, 57, now 59), each time marking the recurring offenders. قَوْلًا: direct object, manṣūb, from root ق-و-ل — "a word/statement."' },
      { word: 'غَيْرَ الَّذِي قِيلَ لَهُمْ', detail: 'غَيْرَ: "other than," manṣūb as a description of قَوْلًا. قِيلَ: Form I passive perfect, root ق-و-ل — "was said," passive to avoid naming the original speaker (God/Moses) as directly contradicted, focusing instead on the act of substitution itself.' },
      { word: 'رِجْزًا مِّنَ السَّمَاءِ', detail: 'رِجْزًا: manṣūb, indefinite noun from root ر-ج-ز — "punishment/plague," an ambiguous term exegetes render variously (plague, wrath). مِّنَ السَّمَاءِ: "from the sky," السَّمَاءِ sharing its root (س-م-و) with سَمِيًّا (namesake) in Maryam v.7 — the same root spans "loftiness" broadly enough to cover both "sky" and "name/renown."' },
      { word: 'بِمَا كَانُوا يَفْسُقُونَ', detail: 'بِمَا: "because of what," causal. كَانُوا يَفْسُقُونَ: كَانَ + imperfect, the same periphrastic habitual-past construction as v.57\'s كَانُوا ... يَظْلِمُونَ — "they used to transgress," root ف-س-ق (to defiantly overstep bounds).' }
    ],
    highlight: 'كَانُوا يَفْسُقُونَ (v.59) mirrors كَانُوا ... يَظْلِمُونَ (v.57) — the same كَانَ + imperfect habitual-past construction recurs to describe ongoing, repeated transgression rather than a single lapse, a grammatical signature of this whole narrative\'s portrayal of persistent (not one-time) wrongdoing.'
  },
  60: {
    arabic: 'وَإِذِ اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ فَقُلْنَا اضْرِب بِّعَصَاكَ الْحَجَرَ ۖ فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا ۖ قَدْ عَلِمَ كُلُّ أُنَاسٍ مَّشْرَبَهُمْ ۖ كُلُوا وَاشْرَبُوا مِن رِّزْقِ اللَّهِ وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ',
    transliteration: 'wa-idhi stasqā mūsā li-qawmihi fa-qulnā ḍrib biʿaṣāka l-ḥajara fa-nfajarat minhu thnatā ʿashrata ʿaynan qad ʿalima kullu unāsin mashrabahum kulū wa-shrabū min rizqi llāhi wa-lā taʿthaw fī l-arḍi mufsidīna',
    translation: 'And [remember] when Moses sought water for his people, so We said, "Strike the stone with your staff." Then twelve springs gushed forth from it; every people knew their drinking place. "Eat and drink from the provision of God, and do not act wickedly on earth, spreading corruption"',
    tags: ['verb', 'structure'],
    tagLabels: ['Form X اسْتَسْقَىٰ', 'Form VII انفَجَرَتْ', 'Ḥāl مُفْسِدِينَ'],
    summary: 'The twelve springs from the struck stone',
    analysis: [
      { word: 'اسْتَسْقَىٰ مُوسَىٰ لِقَوْمِهِ', detail: 'اسْتَسْقَىٰ: Form X perfect, root س-ق-ي (to give drink), 3rd person masculine — "he sought water/prayed for rain," Form X\'s "seeking" sense applied to petitioning God for water on behalf of his people. لِقَوْمِهِ: "for his people."' },
      { word: 'اضْرِب بِّعَصَاكَ الْحَجَرَ', detail: 'اضْرِب: Form I imperative, root ض-ر-ب (to strike), singular, addressed to Moses. بِّعَصَاكَ: instrumental بِـ + noun عَصَا (staff) + suffix. الْحَجَرَ: direct object, manṣūb — "the stone/rock," root ح-ج-ر.' },
      { word: 'فَانفَجَرَتْ مِنْهُ اثْنَتَا عَشْرَةَ عَيْنًا', detail: 'انفَجَرَتْ: Form VII perfect, root ف-ج-ر (to burst/gush), feminine — Form VII\'s inherently passive/reflexive sense fits perfectly: the springs burst forth *of themselves*, an event without a stated agent, following directly from the strike. اثْنَتَا عَشْرَةَ: "twelve" (feminine compound numeral, agreeing with عَيْنًا, spring, which is grammatically feminine). عَيْنًا: manṣūb, tamyīz (specifying accusative) after the numeral.' },
      { word: 'وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ', detail: 'لَا تَعْثَوْا: Form I jussive (negated), root ع-ث-و (to act wickedly/wreak havoc), plural. مُفْسِدِينَ: active participle plural, manṣūb, ḥāl — from root ف-س-د (to corrupt, the same root behind يَفْسُقُونَ\'s neighbor concept in v.59 though a distinct root) — "as corruptors," specifying the *manner* of the prohibited wickedness rather than adding a separate prohibition.' }
    ],
    highlight: 'انفَجَرَتْ (Form VII, root ف-ج-ر) is grammatically agentless by design — Form VII marks the springs as bursting forth spontaneously from the struck stone, with the miracle\'s cause (the strike) and its effect (the gushing) linked by فَـ but kept grammatically distinct: a human strikes, but no human is said to make the water burst.'
  },
  61: {
    arabic: 'وَإِذْ قُلْتُمْ يَا مُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ فَادْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنبِتُ الْأَرْضُ مِن بَقْلِهَا وَقِثَّائِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا ۖ قَالَ أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَىٰ بِالَّذِي هُوَ خَيْرٌ ۚ اهْبِطُوا مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ ۗ وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ وَبَاءُوا بِغَضَبٍ مِّنَ اللَّهِ ۗ ذَٰلِكَ بِأَنَّهُمْ كَانُوا يَكْفُرُونَ بِآيَاتِ اللَّهِ وَيَقْتُلُونَ النَّبِيِّينَ بِغَيْرِ الْحَقِّ ۗ ذَٰلِكَ بِمَا عَصَوا وَّكَانُوا يَعْتَدُونَ',
    transliteration: 'wa-idh qultum yā mūsā lan naṣbira ʿalā ṭaʿāmin wāḥidin fa-dʿu lanā rabbaka yukhrij lanā mimmā tunbitu l-arḍu min baqlihā wa-qiththāʾihā wa-fūmihā wa-ʿadasihā wa-baṣalihā qāla atastabdilūna lladhī huwa adnā bi-lladhī huwa khayrun ihbiṭū miṣran fa-inna lakum mā saʾaltum wa-ḍuribat ʿalayhimu l-dhillatu wa-l-maskanatu wa-bāʾū bi-ghaḍabin mina llāhi dhālika bi-annahum kānū yakfurūna bi-āyāti llāhi wa-yaqtulūna l-nabiyyīna bi-ghayri l-ḥaqqi dhālika bimā ʿaṣaw wa-kānū yaʿtadūna',
    translation: 'And when you said, O Moses, we will not endure one kind of food, so call upon your Lord to bring forth for us what the earth grows of its herbs and cucumbers and garlic and lentils and onions. He said, Would you exchange what is better for what is lesser? Go down to a city, for you shall have what you asked. And they were struck with humiliation and misery and returned with anger from God, because they used to disbelieve in the signs of God and kill the prophets without right, because they disobeyed and used to transgress',
    tags: ['verb', 'structure'],
    tagLabels: ['Form X أَتَسْتَبْدِلُونَ', 'Passive وَضُرِبَتْ', 'Causal بِأَنَّهُمْ / بِمَا'],
    summary: 'The demand for variety in food, and a long causal chain explaining the resulting disgrace',
    analysis: [
      { word: 'لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَاحِدٍ', detail: 'لَن: emphatic future negation, governing the subjunctive. نَّصْبِرَ: Form I subjunctive, root ص-ب-ر (the same root anchoring patience in Baqarah v.45 and the Kahf root explorer), 1st person plural — the people declare they will not endure a single, monotonous food, the very opposite of the patience commanded earlier in this surah.' },
      { word: 'أَتَسْتَبْدِلُونَ الَّذِي هُوَ أَدْنَىٰ بِالَّذِي هُوَ خَيْرٌ', detail: 'أَتَسْتَبْدِلُونَ: interrogative hamza + Form X imperfect, root ب-د-ل (to exchange), 2nd person plural — Form X carries a deliberate, sought-after sense: "are you seeking to exchange for yourselves." أَدْنَىٰ: elative (comparative pattern afʿal), from root د-ن-و, "lesser/lower." خَيْرٌ: elative from a different, irregular root (خ-ي-ر), "better" — the verse pairs two elatives on opposite ends of a value judgment.' },
      { word: 'وَضُرِبَتْ عَلَيْهِمُ الذِّلَّةُ وَالْمَسْكَنَةُ', detail: 'ضُرِبَتْ: Form I passive perfect, root ض-ر-ب (to strike — the same root used literally for striking the stone in v.60, here used metaphorically), feminine, agreeing with الذِّلَّةُ. The passive removes any named agent, presenting humiliation and misery as an imposed, encompassing condition rather than a specific act by a specific party.' },
      { word: 'ذَٰلِكَ بِأَنَّهُمْ كَانُوا يَكْفُرُونَ ... ذَٰلِكَ بِمَا عَصَوا', detail: 'Two parallel causal clauses, each beginning ذَٰلِكَ ("that is because") followed by a causal preposition (بِـ) governing either أَنَّ + a noun clause or مَا + a verb. كَانُوا يَكْفُرُونَ: the same كَانَ + imperfect habitual-past pattern seen already in vv.57 and 59, describing persistent disbelief, not a single lapse. عَصَوا: Form I perfect, root ع-ص-ي (to disobey — the same root behind عَصِيًّا in Sūrat Maryam v.14), 3rd person plural.' }
    ],
    highlight: 'Two consecutive ذَٰلِكَ بِـ causal clauses stack up the reasons for the disgrace, disbelief and killing prophets, then disobedience and transgression, a grammatical accumulation that mirrors the accumulation of offenses being described.'
  },
  62: {
    arabic: 'إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَىٰ وَالصَّابِئِينَ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَعَمِلَ صَالِحًا فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
    transliteration: 'inna lladhīna āmanū wa-lladhīna hādū wa-l-naṣārā wa-l-ṣābiʾīna man āmana bi-llāhi wa-l-yawmi l-ākhiri wa-ʿamila ṣāliḥan fa-lahum ajruhum ʿinda rabbihim wa-lā khawfun ʿalayhim wa-lā hum yaḥzanūna',
    translation: 'Indeed, those who believed and those who were Jewish and the Christians and the Sabians, whoever believed in God and the Last Day and did righteousness, for them is their reward with their Lord, and no fear will there be upon them, nor will they grieve',
    tags: ['structure', 'noun'],
    tagLabels: ['إِنَّ + multiple subjects', 'Conditional-like مَنْ clause', 'Double negation لَا...وَلَا'],
    summary: 'A universal criterion for reward, stated as a general principle',
    analysis: [
      { word: 'إِنَّ الَّذِينَ آمَنُوا وَالَّذِينَ هَادُوا وَالنَّصَارَىٰ وَالصَّابِئِينَ', detail: 'إِنَّ governs four coordinated groups in accusative, though only the first (الَّذِينَ) shows the case audibly since relative pronouns and the proper nouns here do not visibly decline: those who believed (generic reference, likely the Muslim community), the Jews (root ه-و-د), the Christians (النَّصَارَىٰ), and the Sabians (a smaller religious community mentioned three times in the Qurʾān).' },
      { word: 'مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَعَمِلَ صَالِحًا', detail: 'مَنْ: conditional/generic relative pronoun, "whoever" — grammatically restarting the sentence as the true subject of the reward clause, effectively narrowing the four named groups down to a shared condition applying across all of them. آمَنَ: Form IV perfect, root أ-م-ن. عَمِلَ صَالِحًا: Form I perfect + accusative object/adjective, root ع-م-ل + ص-ل-ح — "did righteousness."' },
      { word: 'فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ', detail: 'فَـ: introduces the result of the مَنْ-clause, functioning like the answer to a conditional. أَجْرُهُمْ: subject of a nominal sentence, marfūʿ, "their reward" — from root أ-ج-ر.' },
      { word: 'وَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', detail: 'A twinned negation: لَا خَوْفٌ (a negated nominal sentence, "no fear") followed by وَلَا هُمْ يَحْزَنُونَ (a negated verbal sentence with a fronted pronoun, "nor will they grieve"). The shift from nominal to verbal negation across the pair is a common Qurʾānic rhetorical variation, avoiding flat repetition of structure while doubling the reassurance.' }
    ],
    highlight: 'لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ pairs a nominal negation with a verbal one, grammatically two different sentence types used back to back for the same reassurance, a stylistic variation rather than a change in meaning.'
  },
  63: {
    arabic: 'وَإِذْ أَخَذْنَا مِيثَاقَكُمْ وَرَفَعْنَا فَوْقَكُمُ الطُّورَ خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ وَاذْكُرُوا مَا فِيهِ لَعَلَّكُمْ تَتَّقُونَ',
    transliteration: 'wa-idh akhadhnā mīthāqakum wa-rafaʿnā fawqakumu l-ṭūra khudhū mā ātaynākum bi-quwwatin wa-dhkurū mā fīhi laʿallakum tattaqūna',
    translation: 'And when We took your covenant and raised over you the mount, saying, take what We have given you with determination and remember what is in it, so perhaps you would become righteous',
    tags: ['verb', 'noun'],
    tagLabels: ['Form I أَخَذْنَا مِيثَاقَكُمْ', 'Imperative خُذُوا (echoes v.60 اضْرِب)'],
    summary: 'The covenant taken at the mount, and the command to hold it firmly',
    analysis: [
      { word: 'أَخَذْنَا مِيثَاقَكُمْ', detail: 'أَخَذْنَا: Form I perfect, root أ-خ-ذ (to take, already seen in v.51 اتَّخَذْتُمُ and v.55 أَخَذَتْكُمُ), 1st person plural, "We took." مِيثَاقَكُمْ: direct object, from root و-ث-ق (to bind/tie firmly), a near-synonym of عَهْد (v.40) but etymologically emphasizing the firmness of the binding rather than the mutual agreement itself.' },
      { word: 'وَرَفَعْنَا فَوْقَكُمُ الطُّورَ', detail: 'رَفَعْنَا: Form I perfect, root ر-ف-ع (to raise), 1st person plural. فَوْقَكُمُ: "above you." الطُّورَ: "the mount" (Sinai), most exegetes read this as a dramatic, awe-inducing backdrop to the covenant, the mountain suspended above the people as they accepted its terms.' },
      { word: 'خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ', detail: 'خُذُوا: Form I imperative, same root أ-خ-ذ as أَخَذْنَا earlier in the verse, now addressed to the people themselves, "take it for yourselves." بِقُوَّةٍ: "with strength/determination," the identical phrase used for Yaḥyā in Sūrat Maryam v.12 (خُذِ الْكِتَابَ بِقُوَّةٍ), a deliberate Qurʾānic formula for receiving revealed guidance with full commitment.' }
    ],
    highlight: 'خُذُوا مَا آتَيْنَاكُم بِقُوَّةٍ echoes خُذِ الْكِتَابَ بِقُوَّةٍ addressed to Yaḥyā in Maryam v.12 almost word for word, the same command (root أ-خ-ذ, take with strength) applied to two different scriptures, showing this phrase as a fixed Qurʾānic formula for committed reception of guidance.'
  },
  64: {
    arabic: 'ثُمَّ تَوَلَّيْتُم مِّن بَعْدِ ذَٰلِكَ ۖ فَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ لَكُنتُم مِّنَ الْخَاسِرِينَ',
    transliteration: 'thumma tawallaytum min baʿdi dhālika fa-lawlā faḍlu llāhi ʿalaykum wa-raḥmatuhu la-kuntum mina l-khāsirīna',
    translation: 'Then you turned away after that, and if not for the favor of God upon you and His mercy, you would have been among the losers',
    tags: ['verb', 'particle'],
    tagLabels: ['Form V تَوَلَّيْتُم', 'لَوْلَا (counterfactual) + لَـ response'],
    summary: 'A turning-away, saved only by unearned mercy',
    analysis: [
      { word: 'تَوَلَّيْتُم', detail: 'Form V perfect, root و-ل-ي (to be near/to turn, related to الْمَوَالِيَ, the heirs, in Maryam v.5), 2nd person plural, "you turned away." Form V here carries a reflexive-departure sense: turning oneself away from a commitment just accepted.' },
      { word: 'فَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ', detail: 'لَوْلَا: counterfactual conditional particle, "were it not for," followed by a nominal subject rather than a verb (فَضْلُ اللَّهِ, marfūʿ, mubtadaʾ), a distinct grammatical pattern from the verbal-conditional لَوْ. وَرَحْمَتُهُ: coordinated second subject, "and His mercy," the same root ر-ح-م anchoring the divine-mercy root entry already covered in the Maryam Root Explorer.' },
      { word: 'لَكُنتُم مِّنَ الْخَاسِرِينَ', detail: 'لَـ: the response-particle required after لَوْلَا, marking the apodosis of a counterfactual, "you would certainly have been." كُنتُم: perfect of كَانَ. الْخَاسِرِينَ: majrūr after مِنَ, active participle plural from root خ-س-ر (to lose), "the losers."' }
    ],
    highlight: 'لَوْلَا ... لَـ is the grammar of counterfactual near-miss: لَوْلَا introduces what did not happen (mercy withheld), and the لَـ-prefixed verb states what would have followed. Recognizing this pair is essential for reading the many were-it-not-for warnings across the Qurʾān.'
  },
  65: {
    arabic: 'وَلَقَدْ عَلِمْتُمُ الَّذِينَ اعْتَدَوْا مِنكُمْ فِي السَّبْتِ فَقُلْنَا لَهُمْ كُونُوا قِرَدَةً خَاسِئِينَ',
    transliteration: 'wa-laqad ʿalimtumu lladhīna ʿtadaw minkum fī l-sabti fa-qulnā lahum kūnū qiradatan khāsiʾīna',
    translation: 'And you had certainly known those among you who transgressed in the matter of the sabbath, and We said to them, be apes, despised',
    tags: ['verb', 'particle'],
    tagLabels: ['لَقَدْ emphatic past', 'كَانَ imperative + predicate'],
    summary: 'The transgression of the sabbath, and its stark consequence',
    analysis: [
      { word: 'وَلَقَدْ عَلِمْتُمُ', detail: 'لَقَدْ: لَـ (emphatic) + قَدْ (particle of realized completion), together intensifying a perfect verb, "you certainly already knew." عَلِمْتُمُ: Form I perfect, root ع-ل-م (the same root behind the ʿlm entry in the Kahf Root Explorer), 2nd person plural.' },
      { word: 'الَّذِينَ اعْتَدَوْا مِنكُمْ فِي السَّبْتِ', detail: 'اعْتَدَوْا: Form VIII perfect, root ع-د-و (to transgress a limit, related to عَدُوّ, enemy, and to يَعْتَدُونَ in v.61), 3rd person plural, "those who transgressed." Form VIII\047s reflexive sense marks this as active, self-directed overstepping of a set boundary, here the sabbath restrictions.' },
      { word: 'كُونُوا قِرَدَةً خَاسِئِينَ', detail: 'كُونُوا: imperative of the defective verb كَانَ, plural, an unusual construction, a divine command directly transforming a state of being rather than commanding an action. قِرَدَةً: manṣūb, khabar of كُونُوا, plural of قِرْد (ape). خَاسِئِينَ: manṣūb, active participle plural from root خ-س-أ (to be driven away in disgrace), functioning as a second, descriptive predicate, "apes, despised."' }
    ],
    highlight: 'كُونُوا قِرَدَةً uses the imperative of كَانَ itself, grammatically a command to become, not merely to do, which is precisely why exegetes read this as an instantaneous transformation rather than a gradual consequence.'
  },
  66: {
    arabic: 'فَجَعَلْنَاهَا نَكَالًا لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا وَمَوْعِظَةً لِّلْمُتَّقِينَ',
    transliteration: 'fa-jaʿalnāhā nakālan limā bayna yadayhā wa-mā khalfahā wa-mawʿiẓatan lil-muttaqīna',
    translation: 'And We made it a deterrent punishment for those who were present and those who succeeded them, and a lesson for the righteous',
    tags: ['verb', 'noun'],
    tagLabels: ['Form I جَعَلْنَاهَا, two objects', 'Idiom: بَيْنَ يَدَيْ (before/present)'],
    summary: 'The transformation becomes a lesson for others, near and far',
    analysis: [
      { word: 'فَجَعَلْنَاهَا نَكَالًا', detail: 'جَعَلْنَا: Form I perfect, root ج-ع-ل (to make/render, the same root behind اجْعَلْهُ in Maryam v.6 and وَاجْعَلْهُ رَبِّ), taking two objects: هَا (it, referring back to the transformation of v.65) and نَكَالًا (deterrent example/exemplary punishment, root ن-ك-ل).' },
      { word: 'لِّمَا بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا', detail: 'بَيْنَ يَدَيْهَا: idiomatic phrase, literally "between its two hands," meaning "before it / in its presence," a common Qurʾānic idiom for what is contemporaneous or immediately following. مَا خَلْفَهَا: "what is behind it," i.e., later generations. Together the phrase spans both the immediate witnesses and those who would hear of the event afterward.' },
      { word: 'وَمَوْعِظَةً لِّلْمُتَّقِينَ', detail: 'مَوْعِظَةً: coordinated third object of جَعَلْنَا, from root و-ع-ظ (to admonish/counsel), "a lesson/admonition." لِّلْمُتَّقِينَ: "for the righteous," active participle plural from root و-ق-ي (the same root behind تَقِيًّا in Maryam v.13), specifying that the lesson lands specifically on those already inclined toward God-consciousness.' }
    ],
    highlight: 'بَيْنَ يَدَيْهَا وَمَا خَلْفَهَا (before it and behind it) is a fixed Qurʾānic idiom using body-part vocabulary (يَدَيْ, two hands) for temporal/spatial position, recognizing such idioms is essential, since a literal hands-and-back translation would misread the verse entirely.'
  },
  67: {
    arabic: 'وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِ إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا بَقَرَةً ۖ قَالُوا أَتَتَّخِذُنَا هُزُوًا ۖ قَالَ أَعُوذُ بِاللَّهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ',
    transliteration: 'wa-idh qāla mūsā li-qawmihi inna llāha yaʾmurukum an tadhbaḥū baqaratan qālū atattakhidhunā huzuwan qāla aʿūdhu billāhi an akūna mina l-jāhilīna',
    translation: 'And when Moses said to his people, indeed God commands you to slaughter a cow, they said, do you take us in mockery? He said, I seek refuge in God from being among the ignorant',
    tags: ['verb', 'structure'],
    tagLabels: ['أَنْ + subjunctive (commanded action)', 'The surah namesake root بقر begins here'],
    summary: 'The command to slaughter a cow, the beginning of the story that names this surah',
    analysis: [
      { word: 'إِنَّ اللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا بَقَرَةً', detail: 'يَأْمُرُكُمْ: Form I imperfect, root أ-م-ر (to command, the same root behind أَتَأْمُرُونَ in v.44), 3rd person, + object suffix. أَن: subordinating particle introducing a subjunctive noun clause after a verb of commanding. تَذْبَحُوا: Form I subjunctive, root ذ-ب-ح (to slaughter, the same root as يُذَبِّحُونَ describing Pharaoh\047s slaughter of infants in v.49, here in a starkly different ritual context). بَقَرَةً: direct object, manṣūb, indefinite, "a cow," root ب-ق-ر, the word that gives this entire surah its name.' },
      { word: 'أَتَتَّخِذُنَا هُزُوًا', detail: 'أَتَتَّخِذُنَا: interrogative hamza + Form VIII imperfect, root أ-خ-ذ (the same root running through this whole passage: اتَّخَذْتُمُ v.51, أَخَذْنَا v.63, خُذُوا v.63), 2nd person + object suffix, "are you taking us." هُزُوًا: manṣūb, second object, from root ه-ز-أ (to mock), "in mockery."' },
      { word: 'قَالَ أَعُوذُ بِاللَّهِ أَنْ أَكُونَ مِنَ الْجَاهِلِينَ', detail: 'أَعُوذُ: Form I imperfect, root ع-و-ذ (to seek refuge), 1st person singular, Moses immediate, humble response to the accusation. أَنْ أَكُونَ: subjunctive of كَانَ after أَنْ, "that I be." الْجَاهِلِينَ: majrūr after مِنَ, active participle plural from root ج-ه-ل (to be ignorant), Moses distances himself from the charge of mockery by invoking its opposite: ignorance, the state a true messenger of God cannot occupy.' }
    ],
    highlight: 'بَقَرَةً, a single indefinite noun in this verse (root ب-ق-ر), gives the entire surah its name, Al-Baqarah, The Cow. Everything from here through v.71 elaborates a single grammatical object introduced in this one clause.'
  },
  68: {
    arabic: 'قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ ۖ فَافْعَلُوا مَا تُؤْمَرُونَ',
    transliteration: 'qālū dʿu lanā rabbaka yubayyin lanā mā hiya qāla innahu yaqūlu innahā baqaratun lā fāriḍun wa-lā bikrun ʿawānun bayna dhālika fa-fʿalū mā tuʾmarūna',
    translation: 'They said, call upon your Lord to make clear to us what it is. He said, He says it is a cow neither old nor young, but median between that, so do what you are commanded',
    tags: ['verb', 'structure'],
    tagLabels: ['Jussive response يُبَيِّن', 'Double negation لَّا...وَلَا (neither...nor)'],
    summary: 'The first clarifying question, age, answered with a negation pair',
    analysis: [
      { word: 'ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ', detail: 'ادْعُ: Form I imperative, root د-ع-و (to call/supplicate, the same root as دُعَاء in Maryam v.4), singular, addressed to Moses. يُبَيِّن: Form II jussive, root ب-ي-ن (to be clear), 3rd person, jussive as the response to the imperative, the same command-then-jussive-consequence pattern seen repeatedly (v.40, v.58). مَا هِيَ: "what it is," an embedded question clause.' },
      { word: 'بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ', detail: 'بَقَرَةٌ: predicate, marfūʿ, indefinite. لَّا فَارِضٌ: negated noun, "not old" (root ف-ر-ض, here meaning advanced in age). وَلَا بِكْرٌ: second negated noun, "nor young" (root ب-ك-ر). The لَا...وَلَا pair creates an exhaustive exclusion of both extremes.' },
      { word: 'عَوَانٌ بَيْنَ ذَٰلِكَ', detail: 'عَوَانٌ: marfūʿ, a second predicate describing the cow as middling, from a root associated with things at a mature midpoint. بَيْنَ ذَٰلِكَ: "between that," an unusual but attested construction using the singular demonstrative ذَٰلِكَ to summarize the two extremes just named as one collective reference point.' }
    ],
    highlight: 'لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌ بَيْنَ ذَٰلِكَ excludes both extremes, old and young, before naming the actual answer, middling, a rhetorical technique of negating the boundaries first, which sharpens the positive description that follows.'
  },
  69: {
    arabic: 'قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا ۚ قَالَ إِنَّهُ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ النَّاظِرِينَ',
    transliteration: 'qālū dʿu lanā rabbaka yubayyin lanā mā lawnuhā qāla innahu yaqūlu innahā baqaratun ṣafrāʾu fāqiʿun lawnuhā tasurru l-nāẓirīna',
    translation: 'They said, call upon your Lord to make clear to us its color. He said, He says it is a yellow cow, bright in color, pleasing to the observers',
    tags: ['noun', 'structure'],
    tagLabels: ['Refrain repeats v.68 opening exactly', 'Elative-adjacent فَاقِعٌ'],
    summary: 'The second clarifying question, color, using the same question-formula as before',
    analysis: [
      { word: 'قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا', detail: 'This entire opening repeats v.68 verbatim, with only the embedded question changing (مَا لَوْنُهَا instead of مَا هِيَ), the same ring-structure device seen already in vv.40/47 with the Banī Isrāʾīl address, here used to stage the escalating, increasingly detailed demands of the people through a repeated grammatical frame.' },
      { word: 'بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَّوْنُهَا', detail: 'صَفْرَاءُ: feminine adjective (pattern faʿlāʾ, used for basic colors), root ص-ف-ر, "yellow," agreeing with بَقَرَةٌ. فَاقِعٌ: marfūʿ, intensifying adjective describing the vividness/brightness of the color specifically, functioning almost adverbially over لَّوْنُهَا (its color) even though grammatically it is the predicate of a separate nominal clause embedded within the description.' },
      { word: 'تَسُرُّ النَّاظِرِينَ', detail: 'تَسُرُّ: Form I imperfect, root س-ر-ر (to please/delight), 3rd person feminine (referring to the cow), "it pleases." النَّاظِرِينَ: direct object, active participle plural from root ن-ظ-ر (to look, the same root as تَنظُرُونَ in vv.50 and 55), "those who look/observers."' }
    ],
    highlight: 'The verse repeats v.68 question-formula word for word, changing only the embedded question, this exact-repetition-with-one-variable pattern is a recurring Qurʾānic device (compare vv.40/47) for staging a sequence of related events without inventing new syntax for each.'
  },
  70: {
    arabic: 'قَالُوا ادْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ إِنَّ الْبَقَرَ تَشَابَهَ عَلَيْنَا وَإِنَّا إِن شَاءَ اللَّهُ لَمُهْتَدُونَ',
    transliteration: 'qālū dʿu lanā rabbaka yubayyin lanā mā hiya inna l-baqara tashābaha ʿalaynā wa-innā in shāʾa llāhu la-muhtadūna',
    translation: 'They said, call upon your Lord to make clear to us what it is; indeed all cows look alike to us, and indeed we, if God wills, will be guided',
    tags: ['verb', 'structure'],
    tagLabels: ['Form VI تَشَابَهَ (mutual resemblance)', 'إِنْ + شَاءَ conditional', 'لَـ + مُهْتَدُونَ emphasis'],
    summary: 'The third question, and a rare note of hope closing the exchange',
    analysis: [
      { word: 'إِنَّ الْبَقَرَ تَشَابَهَ عَلَيْنَا', detail: 'الْبَقَرَ: collective noun, "cattle/cows in general" (distinct from بَقَرَةٌ, a single cow, used in the preceding verses), subject of إِنَّ, manṣūb. تَشَابَهَ: Form VI perfect, root ش-ب-ه (to resemble), 3rd person masculine, Form VI reciprocal sense fits precisely: the cows resemble one another to the point of indistinguishability, not simply resemble some external standard.' },
      { word: 'وَإِنَّا إِن شَاءَ اللَّهُ لَمُهْتَدُونَ', detail: 'إِنَّا: إِنَّ + suffix, "indeed we." إِن شَاءَ اللَّهُ: conditional particle إِنْ + Form I perfect (root ش-ي-أ, to will), a fixed formula of humble qualification, "if God wills." لَمُهْتَدُونَ: لَـ (emphatic) + active participle plural, Form VIII, root ه-د-ي (the same root as تَهْتَدُونَ in v.53), "surely guided," the emphatic لَـ reinforcing their expressed hope despite their repeated hesitation across the three questions.' }
    ],
    highlight: 'تَشَابَهَ (Form VI, root ش-ب-ه) grammatically encodes mutual, reciprocal resemblance among the cattle, after three rounds of questions revealing increasing specificity, the people admit the underlying problem is not stubbornness but genuine visual indistinguishability among ordinary cows.'
  }
} }
