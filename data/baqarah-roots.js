// Surah Al-Baqarah — root data.
// SCOPE NOTE: covers only the roots introduced in verses 40–50 (batch 1).
// Add a new root by copying an existing { id: '...', ... } block into this array.
// Whenever you add a root here, also add its matching entry to ROOT_LINKS
// in baqarah-verse-grammar.html so it becomes clickable there.

if (typeof window.ROOTS === 'undefined') { window.ROOTS = [
  {
    id: 'ʿhd',
    arabic: 'عهد',
    letters: 'ع - ه - د',
    roman: 'ʿ-h-d',
    meaning: 'to make a covenant, to entrust, to know from before',
    semantic: 'Binding agreement and prior familiarity are fused in this root — a ʿahd is a covenant precisely because it rests on established, known terms between two parties, not an arbitrary demand.',
    quranCount: '46',
    baqarahCount: 4,
    memoryAid: 'وَأَوْفُوا بِعَهْدِي أُوفِ بِعَهْدِكُمْ (v.40) is a grammatical mirror: the same root, the same Form IV verb (awfū/ūfi), used for both God\'s side and the people\'s side of the covenant. The reciprocity is built into the sentence structure itself, not just the meaning.',
    forms: [
      { num: 'I', arabic: 'عَهِدَ', roman: 'ʿahida', pattern: 'faʿila', meaning: 'to entrust, to know beforehand, to make a covenant with', masdar: 'عَهْد', attested: true,
        detail: 'Form I (faʿila pattern): the base sense of prior knowledge/agreement. أَلَمْ أَعْهَدْ إِلَيْكُمْ (36:60, "did I not enjoin upon you") shows the "entrust/command" sense; the covenantal sense dominates elsewhere.',
        perfect: [{p:'عَهِدَ',t:'he made a covenant/entrusted'},{p:'عَهِدْتُ',t:'I made a covenant'}],
        imperfect: [{p:'يَعْهَدُ',t:'he entrusts'},{p:'أَعْهَدُ',t:'I entrust'}]
      },
      { num: 'III', arabic: 'عَاهَدَ', roman: 'ʿāhada', pattern: 'fāʿala', meaning: 'to make a mutual covenant with', masdar: 'مُعَاهَدَة', attested: true,
        detail: 'Form III (reciprocal direction): a two-party covenant, e.g. مَنْ عَاهَدَ اللَّهَ (48:10, "whoever makes a covenant with God") — the mutual-direction form fits the inherently bilateral nature of a covenant better than Form I.' },
      { num: 'IV', arabic: 'أَعْهَدَ', roman: 'aʿhada', pattern: 'afʿala', meaning: 'to charge/enjoin (rare)', masdar: 'إِعْهَاد', attested: false,
        detail: 'Form IV is not commonly attested independently; note that أُوفِ بِعَهْدِكُمْ in v.40 is Form IV of و-ف-ي (a different root, "to fulfill"), not of عهد itself — do not confuse the two.' },
      { num: 'V', arabic: 'تَعَهَّدَ', roman: 'taʿahhada', pattern: 'tafaʿʿala', meaning: 'to take it upon oneself, to look after (post-Qurʾānic/Modern Standard usage)', masdar: 'تَعَهُّد', attested: false,
        detail: 'Not Qurʾānic, but common in later and Modern Standard Arabic for "to pledge/commit to" — worth knowing since it shares the same covenantal root.' }
    ],
    derived: [
      { arabic: 'عَهْد', roman: 'ʿahd', meaning: 'covenant, pact, promise', pattern: 'faʿl — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'عَهْدِي', roman: 'ʿahdī', meaning: 'My covenant', pattern: 'ʿahd + 1st person suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'عَهْدِكُمْ', roman: 'ʿahdikum', meaning: 'your (pl.) covenant', pattern: 'ʿahd + 2nd person plural suffix', type: 'noun', badge: 'badge-noun' },
      { arabic: 'عُهُود', roman: 'ʿuhūd', meaning: 'covenants (plural)', pattern: 'fuʿūl broken plural', type: 'noun', badge: 'badge-plural' },
      { arabic: 'مِيثَاق', roman: 'mīthāq', meaning: 'solemn covenant (near-synonym, different root)', pattern: 'related concept, root و-ث-ق', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:40', arabic: 'وَأَوْفُوا بِ<span class="occurrence-highlight">عَهْدِي</span> أُوفِ بِ<span class="occurrence-highlight">عَهْدِكُمْ</span>', trans: 'And fulfill My <b>covenant</b> so I will fulfill your <b>covenant</b>', note: 'Two occurrences in one clause — عَهْدِي and عَهْدِكُمْ, both majrūr after بِـ, forming the reciprocal structure at the heart of the verse.' },
    ]
  },

  {
    id: 'njw',
    arabic: 'نجو',
    letters: 'ن - ج - و',
    roman: 'n-j-w',
    meaning: 'to be safe, to be rescued, to escape',
    semantic: 'Deliverance from danger — the root behind najāh (salvation) and najwā (a separate, secret conversation, from the image of two people "escaping" to speak privately).',
    quranCount: '82',
    baqarahCount: 2,
    memoryAid: 'v.49 uses نَجَّيْنَاكُم (Form II) and v.50 uses أَنجَيْنَاكُمْ (Form IV) for the same event — two causative forms of the same root, back to back, both meaning "We saved you." Arabic often allows Forms II and IV to overlap in causative meaning; seeing both used for one continuous narrative is a good example of that overlap in practice.',
    forms: [
      { num: 'I', arabic: 'نَجَا', roman: 'najā', pattern: 'faʿala (hollow)', meaning: 'to be safe, to escape, to survive', masdar: 'نَجَاة', attested: true,
        detail: 'Form I hollow verb (middle radical و): the base intransitive sense — the subject itself escapes/is safe, with no external cause implied.',
        perfect: [{p:'نَجَا',t:'he was saved/escaped'},{p:'نَجَوْتُ',t:'I was saved'}],
        imperfect: [{p:'يَنْجُو',t:'he is saved'},{p:'يَنْجُونَ',t:'they are saved'}]
      },
      { num: 'II', arabic: 'نَجَّى', roman: 'najjā', pattern: 'faʿʿala (extended)', meaning: 'to save, to rescue (someone)', masdar: 'تَنْجِيَة', attested: true,
        detail: 'Form II: causative — "to cause [someone] to be safe." نَجَّيْنَاكُم (v.49): "We saved you," 1st person plural + object suffix.' },
      { num: 'IV', arabic: 'أَنْجَى', roman: 'anjā', pattern: 'afʿala (extended)', meaning: 'to save, to rescue (near-synonym of Form II here)', masdar: 'إِنْجَاء', attested: true,
        detail: 'Form IV: also causative, largely overlapping with Form II in meaning for this root. أَنجَيْنَاكُمْ (v.50): "We saved you." The Qurʾān uses both forms across different verses for the same rescue narrative without a sharp meaning distinction.' }
    ],
    derived: [
      { arabic: 'نَجَاة', roman: 'najāh', meaning: 'safety, salvation, deliverance', pattern: 'faʿāla — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مُنجِي', roman: 'munjī', meaning: 'savior, rescuer', pattern: 'Form IV active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'نَاجٍ', roman: 'nājin', meaning: 'one who is saved/escapes', pattern: 'Form I active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'نَجْوَى', roman: 'najwā', meaning: 'secret/private conversation', pattern: 'related noun, same root', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:49', arabic: 'وَإِذْ <span class="occurrence-highlight">نَجَّيْنَاكُم</span> مِّنْ آلِ فِرْعَوْنَ', trans: 'And when We <b>saved you</b> from the people of Pharaoh', note: 'نَجَّيْنَاكُم = Form II perfect, 1st person plural + 2nd person plural object suffix.' },
      { ref: '2:50', arabic: 'فَ<span class="occurrence-highlight">أَنجَيْنَاكُمْ</span> وَأَغْرَقْنَا آلَ فِرْعَوْنَ', trans: 'So We <b>saved you</b> and drowned the people of Pharaoh', note: 'أَنجَيْنَاكُمْ = Form IV perfect, same subject/object pattern as v.49\'s Form II — the two verses use different forms of the same root for the same rescue.' },
    ]
  },

  {
    id: 'slw',
    arabic: 'صلو',
    letters: 'ص - ل - و',
    roman: 'ṣ-l-w',
    meaning: 'to pray, ritual prayer',
    semantic: 'The root behind ṣalāh, Islam\'s formal prayer — etymologically linked by many grammarians to warmth/closeness (via a related root ص-ل-ي, to burn/be warmed), suggesting prayer as drawing near.',
    quranCount: '99',
    baqarahCount: 2,
    memoryAid: 'أَقِيمُوا الصَّلَاةَ (v.43) uses Form IV أَقِيمُوا (root ق-و-م, "to stand," not this root) — the verb governing prayer is "establish/make-stand," while الصَّلَاةَ itself is the object. Don\'t confuse the command verb\'s root with ṣalāh\'s own root; they are two separate roots working together in the Qurʾān\'s most common ritual formula.',
    forms: [
      { num: 'I', arabic: 'صَلَّى', roman: 'ṣallā', pattern: 'faʿʿala (extended, doubled)', meaning: 'to pray', masdar: 'صَلَاة', attested: true,
        detail: 'Functions as a Form II-shaped verb for a I-weak/doubled root; the maṣdar صَلَاة is used far more often in the Qurʾān than the verb itself, which is why "establish" (أَقَامَ) commonly governs it as an object rather than the verb صَلَّى appearing directly.',
        perfect: [{p:'صَلَّى',t:'he prayed'},{p:'صَلَّيْتُ',t:'I prayed'}],
        imperfect: [{p:'يُصَلِّي',t:'he prays'}]
      }
    ],
    derived: [
      { arabic: 'صَلَاة', roman: 'ṣalāh', meaning: 'ritual prayer', pattern: 'faʿāla — verbal noun', type: 'masdar', badge: 'badge-divine' },
      { arabic: 'الصَّلَاةَ', roman: 'al-ṣalāh (accusative)', meaning: 'the prayer (definite, object case)', pattern: 'definite article + manṣūb', type: 'noun', badge: 'badge-noun' },
      { arabic: 'مُصَلٍّ', roman: 'muṣallin', meaning: 'one who prays', pattern: 'active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مُصَلَّى', roman: 'muṣallā', meaning: 'place of prayer', pattern: 'noun of place', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:43', arabic: 'وَأَقِيمُوا <span class="occurrence-highlight">الصَّلَاةَ</span> وَآتُوا الزَّكَاةَ', trans: 'And establish <b>prayer</b>, and give zakāh', note: 'الصَّلَاةَ: manṣūb, direct object of أَقِيمُوا (Form IV of ق-و-م, "establish" — a different root supplying the verb).' },
      { ref: '2:45', arabic: 'وَاسْتَعِينُوا بِالصَّبْرِ وَ<span class="occurrence-highlight">الصَّلَاةِ</span>', trans: 'And seek help through patience and <b>prayer</b>', note: 'الصَّلَاةِ: majrūr, coordinated after بِـ with الصَّبْرِ — prayer named as one of the two instruments of seeking help.' },
    ]
  },

  {
    id: 'ẓlm',
    arabic: 'ظلم',
    letters: 'ظ - ل - م',
    roman: 'ẓ-l-m',
    meaning: 'to wrong, to oppress, to place something not in its rightful place',
    semantic: 'The Arabic lexicographers define ẓulm at its root as "putting a thing where it does not belong" — injustice as displacement, whether against God, others, or (as this passage repeatedly stresses) against one\'s own self.',
    quranCount: '289',
    baqarahCount: 5,
    memoryAid: 'This root is the grammatical spine of vv.51–59: ظَالِمُونَ (51), ظَلَمْتُمْ (54), ظَلَمُونَا / يَظْلِمُونَ (57), ظَلَمُوا ×2 (59). Watch how the OBJECT of the wrongdoing shifts — sometimes unstated, sometimes explicitly "themselves" (أَنفُسَهُمْ) — that shift is the passage\'s central theological argument: the harm always lands on the wrongdoer, not on God.',
    forms: [
      { num: 'I', arabic: 'ظَلَمَ', roman: 'ẓalama', pattern: 'faʿala', meaning: 'to wrong, to do injustice', masdar: 'ظُلْم', attested: true,
        detail: 'Form I: the base transitive sense, "he wronged [someone/something]." The maṣdar ظُلْم (ẓulm) is the standard Qurʾānic and Islamic-legal term for injustice/wrongdoing generally.',
        perfect: [{p:'ظَلَمَ',t:'he wronged'},{p:'ظَلَمُوا',t:'they wronged'},{p:'ظَلَمْتُمْ',t:'you (pl.) wronged'}],
        imperfect: [{p:'يَظْلِمُ',t:'he wrongs'},{p:'يَظْلِمُونَ',t:'they wrong'}]
      },
      { num: 'V', arabic: 'تَظَلَّمَ', roman: 'taẓallama', pattern: 'tafaʿʿala', meaning: 'to complain of being wronged (post-Qurʾānic usage)', masdar: 'تَظَلُّم', attested: false,
        detail: 'Not Qurʾānic, but common in later Arabic for lodging a grievance/complaint of injustice — reflexive in the sense of experiencing, not committing, the wrong.' },
      { num: 'VIII', arabic: 'اظَّلَمَ', roman: 'iẓẓalama', pattern: 'iftaʿala (assimilated)', meaning: 'to suffer injustice (rare)', masdar: '—', attested: false,
        detail: 'Rare and not Qurʾānic in this exact form; included here mainly to note Form VIII is not the productive form for this root in Qurʾānic usage — Form I carries almost the entire semantic weight.' }
    ],
    derived: [
      { arabic: 'ظُلْم', roman: 'ẓulm', meaning: 'wrongdoing, injustice', pattern: 'faʿl — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'ظَالِم', roman: 'ẓālim', meaning: 'wrongdoer, oppressor', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'ظَالِمُونَ', roman: 'ẓālimūn', meaning: 'wrongdoers (plural)', pattern: 'sound masculine plural', type: 'part', badge: 'badge-part' },
      { arabic: 'ظُلُمَات', roman: 'ẓulumāt', meaning: 'darknesses (related noun, same root)', pattern: 'plural noun', type: 'noun', badge: 'badge-plural' },
      { arabic: 'مَظْلُوم', roman: 'maẓlūm', meaning: 'one who is wronged', pattern: 'mafʿūl — passive participle', type: 'part', badge: 'badge-part' },
    ],
    occurrences: [
      { ref: '2:51', arabic: 'ثُمَّ اتَّخَذْتُمُ الْعِجْلَ مِن بَعْدِهِ وَأَنتُمْ <span class="occurrence-highlight">ظَالِمُونَ</span>', trans: 'Then you took up the calf in his absence, while you were <b>wrongdoers</b>', note: 'ظَالِمُونَ: active participle plural, khabar of the ḥāl clause أَنتُمْ — casting wrongdoing as a settled state, not a single lapse.' },
      { ref: '2:54', arabic: 'إِنَّكُمْ <span class="occurrence-highlight">ظَلَمْتُمْ</span> أَنفُسَكُم بِاتِّخَاذِكُمُ الْعِجْلَ', trans: 'You have <b>wronged</b> yourselves by your taking of the calf', note: 'ظَلَمْتُمْ: Form I perfect, 2nd person plural, with the reflexive object أَنفُسَكُم making explicit that the harm is self-directed.' },
      { ref: '2:57', arabic: 'وَمَا <span class="occurrence-highlight">ظَلَمُونَا</span> وَلَٰكِن كَانُوا أَنفُسَهُمْ <span class="occurrence-highlight">يَظْلِمُونَ</span>', trans: 'And they did not <b>wrong</b> Us, but they used to <b>wrong</b> themselves', note: 'Two occurrences framing a correction (mā...wa-lākin): wrongdoing redirected from God to the self, with أَنفُسَهُمْ fronted for emphasis.' },
    ]
  },

  {
    id: 'twb',
    arabic: 'توب',
    letters: 'ت - و - ب',
    roman: 't-w-b',
    meaning: 'to turn, to repent, to relent',
    semantic: 'A single root for both sides of repentance — the human turning back to God (tawba) and God\'s turning toward the repentant (tawbah ʿalayh) — direction alone, marked by preposition, distinguishes the two.',
    quranCount: '87',
    baqarahCount: 2,
    memoryAid: 'v.54 uses both directions in one verse: تُوبُوا إِلَىٰ بَارِئِكُمْ ("turn to your Maker" — human act, with إِلَى) and فَتَابَ عَلَيْكُمْ ("He turned toward you" — divine act, with عَلَى). Same verb, same root, opposite prepositions marking who is doing the repenting and who is doing the accepting.',
    forms: [
      { num: 'I', arabic: 'تَابَ', roman: 'tāba', pattern: 'faʿala (hollow)', meaning: 'to turn, to repent, to relent/accept repentance', masdar: 'تَوْبَة', attested: true,
        detail: 'Form I hollow verb (middle radical و). With إِلَى: the human turning to God in repentance. With عَلَى: God turning toward the repentant, i.e., accepting/relenting — the same verb form, disambiguated entirely by preposition.',
        perfect: [{p:'تَابَ',t:'he turned/repented'},{p:'تُوبُوا',t:'turn! (imperative, pl.)'}],
        imperfect: [{p:'يَتُوبُ',t:'he turns/repents'}]
      },
      { num: 'IV', arabic: 'أَتَابَ', roman: 'atāba', pattern: 'afʿala', meaning: 'to cause to repent (rare)', masdar: '—', attested: false,
        detail: 'Not commonly attested; the causative sense of "leading someone to repentance" is more often expressed periphrastically than with a Form IV of this root.' }
    ],
    derived: [
      { arabic: 'تَوْبَة', roman: 'tawba', meaning: 'repentance, turning back to God', pattern: 'faʿla — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'التَّوَّابُ', roman: 'al-Tawwāb', meaning: 'The Ever-Accepting of Repentance (divine name)', pattern: 'faʿʿāl — intensive active participle', type: 'adj', badge: 'badge-divine' },
      { arabic: 'تَائِب', roman: 'tāʾib', meaning: 'one who repents', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مَتَاب', roman: 'matāb', meaning: 'a return, a place/act of repentance', pattern: 'mafʿal — noun of place/instance', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:54', arabic: 'فَ<span class="occurrence-highlight">تُوبُوا</span> إِلَىٰ بَارِئِكُمْ ... فَ<span class="occurrence-highlight">تَابَ</span> عَلَيْكُمْ ۚ إِنَّهُ هُوَ <span class="occurrence-highlight">التَّوَّابُ</span> الرَّحِيمُ', trans: 'So <b>turn</b> in repentance to your Maker ... Then He <b>accepted your repentance</b>; indeed He is the <b>Ever-Accepting of Repentance</b>', note: 'Three occurrences in one verse: the human imperative (تُوبُوا, with إِلَى), the divine perfect (تَابَ, with عَلَى), and the divine name (التَّوَّابُ) — the full grammar of repentance in miniature.' },
    ]
  },

  {
    id: 'wʿd',
    arabic: 'وعد',
    letters: 'و - ع - د',
    roman: 'w-ʿ-d',
    meaning: 'to promise, to appoint a time',
    semantic: 'A neutral root for promising — unlike عهد (covenant, which implies a binding two-way agreement), waʿd can be one-sided, and context alone (waʿd vs. waʿīd) determines whether the promise is of good or of warning/threat.',
    quranCount: '150',
    baqarahCount: 1,
    memoryAid: 'وَاعَدْنَا (v.51, Form III) uses the mutual-direction form for the forty-night appointment with Moses — grammatically marking it as an agreed meeting-time between two parties, not a unilateral command. Compare this to a simple Form I وَعَدَ, which would just mean "he promised" without that same bilateral flavor.',
    forms: [
      { num: 'I', arabic: 'وَعَدَ', roman: 'waʿada', pattern: 'faʿala', meaning: 'to promise', masdar: 'وَعْد', attested: true,
        detail: 'Form I: a straightforward promise from one party, positive or negative depending on context (Qurʾānic usage distinguishes waʿd, a promise of good, from waʿīd, a threat/warning, though both share this root).',
        perfect: [{p:'وَعَدَ',t:'he promised'},{p:'وَعَدْنَا',t:'We promised'}],
        imperfect: [{p:'يَعِدُ',t:'he promises'}]
      },
      { num: 'III', arabic: 'وَاعَدَ', roman: 'wāʿada', pattern: 'fāʿala', meaning: 'to make a mutual appointment/agreement with', masdar: 'مُوَاعَدَة', attested: true,
        detail: 'Form III (reciprocal): وَاعَدْنَا مُوسَىٰ (v.51) — "We appointed [a time] with Moses," the reciprocal form marking this as a set, agreed meeting-time rather than a one-sided decree.' }
    ],
    derived: [
      { arabic: 'وَعْد', roman: 'waʿd', meaning: 'promise (typically of good)', pattern: 'faʿl — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'وَعِيد', roman: 'waʿīd', meaning: 'threat, warning', pattern: 'faʿīl — related verbal noun, same root, negative sense', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'مَوْعِد', roman: 'mawʿid', meaning: 'appointed time/place', pattern: 'mafʿil — noun of time/place', type: 'noun', badge: 'badge-noun' },
      { arabic: 'مِيعَاد', roman: 'mīʿād', meaning: 'appointed time (near-synonym of mawʿid)', pattern: 'mifʿāl — noun of time', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:51', arabic: 'وَإِذْ <span class="occurrence-highlight">وَاعَدْنَا</span> مُوسَىٰ أَرْبَعِينَ لَيْلَةً', trans: 'And when We <b>appointed</b> forty nights for Moses', note: 'وَاعَدْنَا: Form III perfect, 1st person plural — the reciprocal form marking an agreed appointment, not a unilateral demand.' },
    ]
  },

  {
    id: 'bqr',
    arabic: 'بقر',
    letters: 'ب - ق - ر',
    roman: 'b-q-r',
    meaning: 'cow, cattle',
    semantic: 'The root that names this surah. Baqara (a single cow) and baqar (cattle collectively) describe the animal at the center of the vv.67-71 narrative, a story so central the entire 286-verse surah is named after it.',
    quranCount: '10',
    baqarahCount: 5,
    memoryAid: 'Track the definiteness across vv.67-71: بَقَرَةً (v.67, indefinite, a cow, any cow) becomes increasingly specified through three rounds of questions (age, color, character) until it is functionally definite, though the grammar itself never adds the definite article. The people, not the grammar, narrow the reference through their questions.',
    forms: [
      { num: 'I', arabic: '—', roman: '—', pattern: '—', meaning: 'No common verb form', masdar: '—', attested: false,
        detail: 'This root functions almost exclusively as a noun in Qurʾānic Arabic, with no productive verb form in regular use — unlike most roots covered so far, بقر does not supply a family of derived verb forms.' }
    ],
    derived: [
      { arabic: 'بَقَرَة', roman: 'baqara', meaning: 'a cow (singular)', pattern: 'faʿala — singular noun (ism al-waḥda)', type: 'noun', badge: 'badge-noun' },
      { arabic: 'بَقَر', roman: 'baqar', meaning: 'cattle, cows (collective)', pattern: 'faʿal — collective noun', type: 'noun', badge: 'badge-noun' },
      { arabic: 'الْبَقَرَة', roman: 'al-Baqara', meaning: 'The Cow (the name of this surah)', pattern: 'definite article + noun', type: 'noun', badge: 'badge-divine' },
    ],
    occurrences: [
      { ref: '2:67', arabic: 'أَن تَذْبَحُوا <span class="occurrence-highlight">بَقَرَةً</span>', trans: 'That you slaughter a <b>cow</b>', note: 'بَقَرَةً: indefinite, manṣūb, direct object — the word that gives the surah its name, introduced here for the first time.' },
      { ref: '2:68', arabic: 'إِنَّهَا <span class="occurrence-highlight">بَقَرَةٌ</span> لَّا فَارِضٌ وَلَا بِكْرٌ', trans: 'It is a <b>cow</b> neither old nor young', note: 'بَقَرَةٌ: predicate, marfūʿ, still indefinite despite the specificity being requested.' },
      { ref: '2:70', arabic: 'إِنَّ <span class="occurrence-highlight">الْبَقَرَ</span> تَشَابَهَ عَلَيْنَا', trans: 'Indeed all <b>cattle</b> look alike to us', note: 'الْبَقَرَ: the collective form with the definite article — "cattle in general," distinct from the singular بَقَرَة used throughout the rest of the exchange.' },
    ]
  },

  {
    id: 'hdy',
    arabic: 'هدي',
    letters: 'ه - د - ي',
    roman: 'h-d-y',
    meaning: 'to guide',
    semantic: 'Guidance as active leading toward a destination, not passive information — the root behind hidāya (guidance) and the daily prayer request ihdinā l-ṣirāṭa l-mustaqīm, guide us to the straight path.',
    quranCount: '316',
    baqarahCount: 2,
    memoryAid: 'تَهْتَدُونَ (v.53, guided by the Furqān) and لَمُهْتَدُونَ (v.70, closing the cow narrative in hope) both use Form VIII — the reflexive sense of actively finding/taking ones way through guidance already given, not merely receiving it passively.',
    forms: [
      { num: 'I', arabic: 'هَدَى', roman: 'hadā', pattern: 'faʿala (weak)', meaning: 'to guide', masdar: 'هُدًى / هِدَايَة', attested: true,
        detail: 'Form I: the base transitive sense, "he guided [someone]." هُدًى (hudan) is one of the Qurʾans most frequent terms for divine guidance itself.',
        perfect: [{p:'هَدَى',t:'he guided'},{p:'هَدَيْنَا',t:'We guided'}],
        imperfect: [{p:'يَهْدِي',t:'he guides'}]
      },
      { num: 'VIII', arabic: 'اهْتَدَى', roman: 'ihtadā', pattern: 'iftaʿala (weak)', meaning: 'to be guided, to find ones way', masdar: 'اهْتِدَاء', attested: true,
        detail: 'Form VIII: reflexive-middle sense, the guided party actively taking up the path shown to them rather than remaining a passive recipient. تَهْتَدُونَ (v.53) and مُهْتَدُونَ (v.70, active participle) both use this form.' }
    ],
    derived: [
      { arabic: 'هُدًى', roman: 'hudan', meaning: 'guidance', pattern: 'faʿal — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'هَادٍ', roman: 'hādin', meaning: 'guide, one who guides', pattern: 'fāʿil — active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مُهْتَدٍ', roman: 'muhtadin', meaning: 'one who is [rightly] guided', pattern: 'Form VIII active participle', type: 'part', badge: 'badge-part' },
      { arabic: 'مُهْتَدُونَ', roman: 'muhtadūn', meaning: 'the guided ones (plural)', pattern: 'Form VIII active participle, plural', type: 'part', badge: 'badge-part' },
    ],
    occurrences: [
      { ref: '2:53', arabic: 'الْكِتَابَ وَالْفُرْقَانَ لَعَلَّكُمْ <span class="occurrence-highlight">تَهْتَدُونَ</span>', trans: 'The Scripture and the Criterion, so perhaps you would be <b>guided</b>', note: 'تَهْتَدُونَ: Form VIII imperfect, 2nd person plural, the goal of receiving the Kitāb and Furqān.' },
      { ref: '2:70', arabic: 'وَإِنَّا إِن شَاءَ اللَّهُ <span class="occurrence-highlight">لَمُهْتَدُونَ</span>', trans: 'And indeed we, if God wills, will be <b>guided</b>', note: 'لَمُهْتَدُونَ: emphatic لَـ + Form VIII active participle plural, closing the cow narrative on a note of hope.' },
    ]
  },

  {
    id: 'wthq',
    arabic: 'وثق',
    letters: 'و - ث - ق',
    roman: 'w-th-q',
    meaning: 'to bind firmly, to trust',
    semantic: 'A near-synonym of عهد (covenant), but where ʿahd stresses mutual agreement, wathaqa stresses the firmness and reliability of the bond itself — the root behind mīthāq, a solemn, tightly-bound covenant.',
    quranCount: '36',
    baqarahCount: 1,
    memoryAid: 'مِيثَاقَكُمْ (v.63) names the same covenant event that عَهْدِي named back in v.40, but through a different root, one emphasizing firmness/tightness (و-ث-ق, related to trust and reliability) rather than mutual agreement (ع-ه-د). Two roots, two shades of the same covenant idea.',
    forms: [
      { num: 'I', arabic: 'وَثِقَ', roman: 'wathiqa', pattern: 'faʿila', meaning: 'to trust, to rely on', masdar: 'ثِقَة', attested: true,
        detail: 'Form I: to place ones trust/confidence in something firm and reliable. ثِقَة (thiqa, trust/reliability) is the standard word in later Arabic (including hadith science) for a trustworthy narrator.',
        perfect: [{p:'وَثِقَ',t:'he trusted'}],
        imperfect: [{p:'يَثِقُ',t:'he trusts'}]
      },
      { num: 'IV', arabic: 'أَوْثَقَ', roman: 'awthaqa', pattern: 'afʿala', meaning: 'to bind firmly, to tie securely', masdar: 'إِيثَاق', attested: true,
        detail: 'Form IV: causative, "to make firmly bound" — used elsewhere in the Qurʾān for physically tying/binding, extending the abstract sense of a firm covenant to concrete physical securing.' }
    ],
    derived: [
      { arabic: 'مِيثَاق', roman: 'mīthāq', meaning: 'solemn covenant, firm pledge', pattern: 'mifʿāl — noun of instrument/instance', type: 'noun', badge: 'badge-noun' },
      { arabic: 'ثِقَة', roman: 'thiqa', meaning: 'trust, reliability', pattern: 'fiʿla — verbal noun', type: 'masdar', badge: 'badge-masdar' },
      { arabic: 'وَثِيق', roman: 'wathīq', meaning: 'firm, secure', pattern: 'faʿīl — adjective', type: 'adj', badge: 'badge-adj' },
      { arabic: 'مَوْثِق', roman: 'mawthiq', meaning: 'a firm bond/pledge', pattern: 'mafʿil — noun of place/instance', type: 'noun', badge: 'badge-noun' },
    ],
    occurrences: [
      { ref: '2:63', arabic: 'وَإِذْ أَخَذْنَا <span class="occurrence-highlight">مِيثَاقَكُمْ</span> وَرَفَعْنَا فَوْقَكُمُ الطُّورَ', trans: 'And when We took your <b>covenant</b> and raised the mount over you', note: 'مِيثَاقَكُمْ: manṣūb, direct object of أَخَذْنَا — a firm, solemn pledge, distinct in root from عَهْدِي in v.40 though overlapping in referent.' },
    ]
  }
] }