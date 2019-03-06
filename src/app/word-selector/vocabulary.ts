const allWords = [
  {
    "index": 1,
    "word": "arouse",
    "transcription": "[əˈraʊz]",
    "translation": "вызывать, пробуждать"
  },
  {
    "index": 2,
    "word": "pretty",
    "transcription": "[ˈprɪti]",
    "translation": "довольно-таки"
  },
  {
    "index": 3,
    "word": "grand",
    "transcription": "[grænd]",
    "translation": "большой, великий"
  },
  {
    "index": 4,
    "word": "volume",
    "transcription": "[ˈvɒljʊm]",
    "translation": "громкость"
  },
  {
    "index": 5,
    "word": "draw (drew, drawn)",
    "transcription": "[drɔː]",
    "translation": "тянуть"
  },
  {
    "index": 6,
    "word": "coach",
    "transcription": "[kəʊʧ]",
    "translation": "автобус, вагон, телега"
  },
  {
    "index": 7,
    "word": "provide",
    "transcription": "[prəˈvaɪd]",
    "translation": "обеспечивать, снабжать"
  },
  {
    "index": 8,
    "word": "provider",
    "transcription": "[prəˈvaɪdə]",
    "translation": "поставщик"
  },
  {
    "index": 9,
    "word": "provision",
    "transcription": "[prəˈvɪʒən]",
    "translation": "обеспечение"
  },
  {
    "index": 10,
    "word": "cope with",
    "transcription": "[kəʊpwɪð]",
    "translation": "совладать, справиться"
  },
  {
    "index": 11,
    "word": "condition",
    "transcription": "[kənˈdɪʃən]",
    "translation": "состояние"
  },
  {
    "index": 12,
    "word": "land",
    "transcription": "[lænd]",
    "translation": "приземляться, высаживаться"
  },
  {
    "index": 13,
    "word": "scope",
    "transcription": "[skəʊp]",
    "translation": "пределы, район"
  },
  {
    "index": 14,
    "word": "pack",
    "transcription": "[pæk]",
    "translation": "пачка, связка, колода, и т. д."
  },
  {
    "index": 15,
    "word": "package",
    "transcription": "[ˈpækɪʤ]",
    "translation": "пакет"
  },
  {
    "index": 16,
    "word": "craft",
    "transcription": "[krɑːft]",
    "translation": "ремесло, мастерство"
  },
  {
    "index": 17,
    "word": "craftsman",
    "transcription": "[ˈkrɑːftsmən]",
    "translation": "ремесленник"
  },
  {
    "index": 18,
    "word": "crafty",
    "transcription": "[ˈkrɑːfti]",
    "translation": "коварный"
  },
  {
    "index": 19,
    "word": "worth",
    "transcription": "[wɜːθ]",
    "translation": "стоимость, стоящий"
  },
  {
    "index": 20,
    "word": "worthy",
    "transcription": "[ˈwɜːði]",
    "translation": "достойный"
  },
  {
    "index": 21,
    "word": "urban",
    "transcription": "[ˈɜːbən]",
    "translation": "городской"
  },
  {
    "index": 22,
    "word": "urbanize",
    "transcription": "[ˈɜːbənaɪz]",
    "translation": "урбанизировать"
  },
  {
    "index": 23,
    "word": "urbanisation",
    "transcription": "[ˌɜːb(ə)naɪˈzeɪʃ(ə)n]",
    "translation": "урбанизация"
  },
  {
    "index": 24,
    "word": "pond",
    "transcription": "[pɒnd]",
    "translation": "пруд"
  },
  {
    "index": 25,
    "word": "familiar",
    "transcription": "[fəˈmɪliə]",
    "translation": "знакомый"
  },
  {
    "index": 26,
    "word": "familiarity",
    "transcription": "[fəˌmɪlɪˈærɪti]",
    "translation": "знакомство"
  },
  {
    "index": 27,
    "word": "unfamiliar",
    "transcription": "[ˌʌnfəˈmɪliə]",
    "translation": "незнакомый"
  },
  {
    "index": 28,
    "word": "familiarize",
    "transcription": "[fəˈmɪliəraɪz]",
    "translation": "ознакомиться"
  },
  {
    "index": 29,
    "word": "tap",
    "transcription": "[tæp]",
    "translation": "стучать"
  },
  {
    "index": 30,
    "word": "column",
    "transcription": "[ˈkɒləm]",
    "translation": "столб, колонна"
  },
  {
    "index": 31,
    "word": "guilt",
    "transcription": "[gɪlt]",
    "translation": "вина"
  },
  {
    "index": 32,
    "word": "guilty",
    "transcription": "[ˈgɪlti]",
    "translation": "виновный"
  },
  {
    "index": 33,
    "word": "arm",
    "transcription": "[ɑːm]",
    "translation": "рука"
  },
  {
    "index": 34,
    "word": "forearm",
    "transcription": "[ˈfɔːrɑːm]",
    "translation": "предплечье"
  },
  {
    "index": 35,
    "word": "chamber",
    "transcription": "[ˈʧeɪmbə]",
    "translation": "кабинет, зал, палата, камера"
  },
  {
    "index": 36,
    "word": "owe",
    "transcription": "[əʊ]",
    "translation": "задолжать"
  },
  {
    "index": 37,
    "word": "include",
    "transcription": "[ɪnˈkluːd]",
    "translation": "включать, содержать в себе"
  },
  {
    "index": 38,
    "word": "inclusion",
    "transcription": "[ɪnˈkluːʒən]",
    "translation": "включение"
  },
  {
    "index": 39,
    "word": "inclusive",
    "transcription": "[ɪnˈkluːsɪv]",
    "translation": "включающий в себя"
  },
  {
    "index": 40,
    "word": "inclusively",
    "transcription": "[ɪnˈkluːsɪvli]",
    "translation": "включительно"
  },
  {
    "index": 41,
    "word": "appoint",
    "transcription": "[əˈpɔɪnt]",
    "translation": "назначать, утверждать"
  },
  {
    "index": 42,
    "word": "appointment",
    "transcription": "[əˈpɔɪntmənt]",
    "translation": "деловое свидание, встреча"
  },
  {
    "index": 43,
    "word": "appointment",
    "transcription": "[əˈpɔɪntmənt]",
    "translation": "назначение на должность"
  },
  {
    "index": 44,
    "word": "celebrate",
    "transcription": "[ˈsɛlɪbreɪt]",
    "translation": "праздновать"
  },
  {
    "index": 45,
    "word": "celebration",
    "transcription": "[ˌsɛlɪˈbreɪʃən]",
    "translation": "праздник"
  },
  {
    "index": 46,
    "word": "celebratory",
    "transcription": "[celebratory]",
    "translation": "праздничный"
  },
  {
    "index": 47,
    "word": "abuse",
    "transcription": "[əˈbjuːs]",
    "translation": "оскорблять, бранить, брань"
  },
  {
    "index": 48,
    "word": "abusive",
    "transcription": "[əˈbjuːsɪv]",
    "translation": "оскорбительный"
  },
  {
    "index": 49,
    "word": "dig (dug, dug)",
    "transcription": "[dɪg]",
    "translation": "копать"
  },
  {
    "index": 50,
    "word": "behavior",
    "transcription": "[bɪˈheɪvjə]",
    "translation": "поведение"
  },
  {
    "index": 51,
    "word": "cable",
    "transcription": "[ˈkeɪbl]",
    "translation": "канат, кабель, трос и т.д."
  },
  {
    "index": 52,
    "word": "intelligent",
    "transcription": "[ɪnˈtɛlɪʤənt]",
    "translation": "умный"
  },
  {
    "index": 53,
    "word": "intelligence",
    "transcription": "[ɪnˈtɛlɪʤəns]",
    "translation": "интеллект"
  },
  {
    "index": 54,
    "word": "admit",
    "transcription": "[ədˈmɪt]",
    "translation": "признавать, допускать"
  },
  {
    "index": 55,
    "word": "admission",
    "transcription": "[ədˈmɪʃ(ə)n]",
    "translation": "вход"
  },
  {
    "index": 56,
    "word": "admittedly",
    "transcription": "[ədˈmɪtɪdli]",
    "translation": "по общему признанию"
  },
  {
    "index": 57,
    "word": "cream",
    "transcription": "[kriːm]",
    "translation": "крем, сливки"
  },
  {
    "index": 58,
    "word": "creamy",
    "transcription": "[ˈkriːmi]",
    "translation": "сливочный"
  },
  {
    "index": 59,
    "word": "ice cream",
    "transcription": "[aɪskriːm]",
    "translation": "мороженое"
  },
  {
    "index": 60,
    "word": "appropriate",
    "transcription": "[əˈprəʊprɪɪt]",
    "translation": "присвоить"
  },
  {
    "index": 61,
    "word": "appropriation",
    "transcription": "[əˌprəʊprɪˈeɪʃ(ə)n]",
    "translation": "присвоение"
  },
  {
    "index": 62,
    "word": "root",
    "transcription": "[ruːt]",
    "translation": "корень"
  },
  {
    "index": 63,
    "word": "compare",
    "transcription": "[kəmˈpeə]",
    "translation": "сравнить"
  },
  {
    "index": 64,
    "word": "comparable",
    "transcription": "[ˈkɒmpərəbl]",
    "translation": "сравнимый"
  },
  {
    "index": 65,
    "word": "incomparable",
    "transcription": "[ɪnˈkɒmpərəbl]",
    "translation": "несравнимый"
  },
  {
    "index": 66,
    "word": "comparative",
    "transcription": "[kəmˈpærətɪv]",
    "translation": "сравнительный"
  },
  {
    "index": 67,
    "word": "comparatively",
    "transcription": "[kəmˈpærətɪvli]",
    "translation": "в сравнении"
  },
  {
    "index": 68,
    "word": "human",
    "transcription": "[ˈhjuːmən]",
    "translation": "человек, человеческий"
  },
  {
    "index": 69,
    "word": "inhuman",
    "transcription": "[ɪnˈhjuːmən]",
    "translation": "бесчеловечный"
  },
  {
    "index": 70,
    "word": "humanity",
    "transcription": "[hju(ː)ˈmænɪti]",
    "translation": "человечество"
  },
  {
    "index": 71,
    "word": "slay (slew, slain)",
    "transcription": "[sleɪ]",
    "translation": "умертвить"
  },
  {
    "index": 72,
    "word": "persist",
    "transcription": "[pəˈsɪst]",
    "translation": "сохраниться"
  },
  {
    "index": 73,
    "word": "persistent",
    "transcription": "[pəˈsɪstənt]",
    "translation": "стойкий, устойчивый"
  },
  {
    "index": 74,
    "word": "persistence",
    "transcription": "[pəˈsɪstəns]",
    "translation": "упорство"
  },
  {
    "index": 75,
    "word": "wide",
    "transcription": "[waɪd]",
    "translation": "широкий, просторный"
  },
  {
    "index": 76,
    "word": "widely",
    "transcription": "[ˈwaɪdli]",
    "translation": "широко"
  },
  {
    "index": 77,
    "word": "widen",
    "transcription": "[ˈwaɪdn]",
    "translation": "расширять"
  },
  {
    "index": 78,
    "word": "width",
    "transcription": "[wɪdθ]",
    "translation": "ширина"
  },
  {
    "index": 79,
    "word": "quarter",
    "transcription": "[ˈkwɔːtə]",
    "translation": "четверть"
  },
  {
    "index": 80,
    "word": "vanish",
    "transcription": "[ˈvænɪʃ]",
    "translation": "исчезнуть"
  },
  {
    "index": 81,
    "word": "stir",
    "transcription": "[stɜː]",
    "translation": "шевелить(ся), двигать и т.д."
  },
  {
    "index": 82,
    "word": "much like",
    "transcription": "[mʌʧlaɪk]",
    "translation": "так же как"
  },
  {
    "index": 83,
    "word": "library",
    "transcription": "[ˈlaɪbrəri]",
    "translation": "библиотека"
  },
  {
    "index": 84,
    "word": "librarian",
    "transcription": "[laɪˈbreərɪən]",
    "translation": "библиотекарь"
  },
  {
    "index": 85,
    "word": "link",
    "transcription": "[lɪŋk]",
    "translation": "связь, звено, ссылка"
  },
  {
    "index": 86,
    "word": "linkage",
    "transcription": "[ˈlɪŋkɪʤ]",
    "translation": "связывание"
  },
  {
    "index": 87,
    "word": "expose",
    "transcription": "[ɪksˈpəʊz]",
    "translation": "выставлять, обнажать"
  },
  {
    "index": 88,
    "word": "exposition",
    "transcription": "[ˌɛkspəʊˈzɪʃən]",
    "translation": "экспозиция"
  },
  {
    "index": 89,
    "word": "dig up",
    "transcription": "[dɪgʌp]",
    "translation": "откопать"
  },
  {
    "index": 90,
    "word": "narrate",
    "transcription": "[nəˈreɪt]",
    "translation": "повествовать, рассказывать"
  },
  {
    "index": 91,
    "word": "narrative",
    "transcription": "[ˈnærətɪv]",
    "translation": "рассказ, повествовательный"
  },
  {
    "index": 92,
    "word": "narration",
    "transcription": "[nəˈreɪʃən]",
    "translation": "пересказ"
  },
  {
    "index": 93,
    "word": "enable",
    "transcription": "[ɪˈneɪbl]",
    "translation": "давать возможность"
  },
  {
    "index": 94,
    "word": "laugh",
    "transcription": "[lɑːf]",
    "translation": "смеяться"
  },
  {
    "index": 95,
    "word": "example",
    "transcription": "[ɪgˈzɑːmpl]",
    "translation": "пример"
  },
  {
    "index": 96,
    "word": "for example",
    "transcription": "[fɔːrɪgˈzɑːmpl]",
    "translation": "например"
  },
  {
    "index": 97,
    "word": "stake",
    "transcription": "[steɪk]",
    "translation": "стойка, кол, столб"
  },
  {
    "index": 98,
    "word": "decent",
    "transcription": "[ˈdiːsnt]",
    "translation": "приличный, достойный"
  },
  {
    "index": 99,
    "word": "indecent",
    "transcription": "[ɪnˈdiːsnt]",
    "translation": "неприличный"
  },
  {
    "index": 100,
    "word": "decency",
    "transcription": "[ˈdiːsnsi]",
    "translation": "порядочность"
  },
  {
    "index": 101,
    "word": "indecency",
    "transcription": "[ɪnˈdiːsnsi]",
    "translation": "непристойность"
  },
  {
    "index": 102,
    "word": "owe",
    "transcription": "[əʊ]",
    "translation": "быть обязанным чем-л."
  },
  {
    "index": 103,
    "word": "owing",
    "transcription": "[ˈəʊɪŋ]",
    "translation": "обязанный"
  },
  {
    "index": 104,
    "word": "glove",
    "transcription": "[glʌv]",
    "translation": "перчатка"
  },
  {
    "index": 105,
    "word": "cure",
    "transcription": "[kjʊə]",
    "translation": "лечить"
  },
  {
    "index": 106,
    "word": "curable",
    "transcription": "[ˈkjʊərəbl]",
    "translation": "излечимый"
  },
  {
    "index": 107,
    "word": "incurable",
    "transcription": "[ɪnˈkjʊərəbl]",
    "translation": "неизлечимый"
  },
  {
    "index": 108,
    "word": "curative",
    "transcription": "[ˈkjʊərətɪv]",
    "translation": "лечебный"
  },
  {
    "index": 109,
    "word": "avoid",
    "transcription": "[əˈvɔɪd]",
    "translation": "избегать"
  },
  {
    "index": 110,
    "word": "avoidance",
    "transcription": "[əˈvɔɪdəns]",
    "translation": "уклонение"
  },
  {
    "index": 111,
    "word": "think over",
    "transcription": "[θɪŋkˈəʊvə]",
    "translation": "обдумать"
  },
  {
    "index": 112,
    "word": "think through",
    "transcription": "[θɪŋkθruː]",
    "translation": "взвесить"
  },
  {
    "index": 113,
    "word": "emerge",
    "transcription": "[ɪˈmɜːʤ]",
    "translation": "появляться"
  },
  {
    "index": 114,
    "word": "emergent",
    "transcription": "[ɪˈmɜːʤənt]",
    "translation": "возникающий"
  },
  {
    "index": 115,
    "word": "emergence",
    "transcription": "[ɪˈmɜːʤəns]",
    "translation": "появление"
  },
  {
    "index": 116,
    "word": "take",
    "transcription": "[teɪk]",
    "translation": "воспринимать"
  },
  {
    "index": 117,
    "word": "fisherman",
    "transcription": "[ˈfɪʃəmən]",
    "translation": "рыбак"
  },
  {
    "index": 118,
    "word": "fishery",
    "transcription": "[ˈfɪʃəri]",
    "translation": "рыболовство"
  },
  {
    "index": 119,
    "word": "conscious",
    "transcription": "[ˈkɒnʃəs]",
    "translation": "сознательный, сознающий"
  },
  {
    "index": 120,
    "word": "unconscious",
    "transcription": "[ʌnˈkɒnʃəs]",
    "translation": "без сознания"
  },
  {
    "index": 121,
    "word": "consciousness",
    "transcription": "[ˈkɒnʃəsnɪs]",
    "translation": "сознание"
  },
  {
    "index": 122,
    "word": "subconscious",
    "transcription": "[ˌsʌbˈkɒnʃəs]",
    "translation": "подсознательный"
  },
  {
    "index": 123,
    "word": "subconsciousness",
    "transcription": "[ˌsʌbˈkɒnʃəsnəs]",
    "translation": "подсознание"
  },
  {
    "index": 124,
    "word": "detect",
    "transcription": "[dɪˈtɛkt]",
    "translation": "обнаружить, выявить"
  },
  {
    "index": 125,
    "word": "detection",
    "transcription": "[dɪˈtɛkʃn]",
    "translation": "обнаружение, выявление"
  },
  {
    "index": 126,
    "word": "anywhere",
    "transcription": "[ˈɛnɪweə]",
    "translation": "где угодно, куда угодно"
  },
  {
    "index": 127,
    "word": "anyhow",
    "transcription": "[ˈɛnɪhaʊ]",
    "translation": "как угодно"
  },
  {
    "index": 128,
    "word": "dare",
    "transcription": "[deə]",
    "translation": "осмелиться"
  },
  {
    "index": 129,
    "word": "anger",
    "transcription": "[ˈæŋgə]",
    "translation": "гнев"
  },
  {
    "index": 130,
    "word": "stuff",
    "transcription": "[stʌf]",
    "translation": "вещи, всякая фигня"
  },
  {
    "index": 131,
    "word": "fortunate",
    "transcription": "[ˈfɔːʧnɪt]",
    "translation": "удачный"
  },
  {
    "index": 132,
    "word": "fortunately",
    "transcription": "[ˈfɔːʧnɪtli]",
    "translation": "к счастью"
  },
  {
    "index": 133,
    "word": "unfortunately",
    "transcription": "[ʌnˈfɔːʧnɪtli]",
    "translation": "к сожалению"
  },
  {
    "index": 134,
    "word": "unfortunate",
    "transcription": "[ʌnˈfɔːʧnɪt]",
    "translation": "несчастный"
  },
  {
    "index": 135,
    "word": "wilderness",
    "transcription": "[ˈwɪldənɪs]",
    "translation": "глушь, дикая местность"
  },
  {
    "index": 136,
    "word": "shut out",
    "transcription": "[ʃʌtaʊt]",
    "translation": "не впускать"
  },
  {
    "index": 137,
    "word": "shut in",
    "transcription": "[ʃʌtɪn]",
    "translation": "не выпускать"
  },
  {
    "index": 138,
    "word": "noise",
    "transcription": "[nɔɪz]",
    "translation": "шум"
  },
  {
    "index": 139,
    "word": "noisy",
    "transcription": "[ˈnɔɪzi]",
    "translation": "шумный"
  },
  {
    "index": 140,
    "word": "noiseless",
    "transcription": "[ˈnɔɪzlɪs]",
    "translation": "бесшумный"
  },
  {
    "index": 141,
    "word": "fat",
    "transcription": "[fæt]",
    "translation": "жир, жирный"
  },
  {
    "index": 142,
    "word": "fatness",
    "transcription": "[ˈfætnəs]",
    "translation": "упитанность"
  },
  {
    "index": 143,
    "word": "fatten",
    "transcription": "[ˈfætn]",
    "translation": "откармливать"
  },
  {
    "index": 144,
    "word": "fail",
    "transcription": "[feɪl]",
    "translation": "потерпеть неудачу"
  },
  {
    "index": 145,
    "word": "steady",
    "transcription": "[ˈstɛdi]",
    "translation": "устойчивый"
  },
  {
    "index": 146,
    "word": "steadiness",
    "transcription": "[ˈstɛdɪnəs]",
    "translation": "устойчивость"
  },
  {
    "index": 147,
    "word": "unsteady",
    "transcription": "[ʌnˈstɛdi]",
    "translation": "неустойчивый"
  },
  {
    "index": 148,
    "word": "loss",
    "transcription": "[lɒs]",
    "translation": "потеря"
  },
  {
    "index": 149,
    "word": "path",
    "transcription": "[pɑːθ]",
    "translation": "путь"
  },
  {
    "index": 150,
    "word": "pathway",
    "transcription": "[ˈpɑːθweɪ]",
    "translation": "путь"
  },
  {
    "index": 151,
    "word": "upside down",
    "transcription": "[ˈʌpsaɪddaʊn]",
    "translation": "вверх ногами"
  },
  {
    "index": 152,
    "word": "cozy",
    "transcription": "[ˈkəʊzi]",
    "translation": "уютный"
  },
  {
    "index": 153,
    "word": "depict",
    "transcription": "[dɪˈpɪkt]",
    "translation": "изображать, описывать"
  },
  {
    "index": 154,
    "word": "depiction",
    "transcription": "[dɪˈpɪkʃ(ə)n]",
    "translation": "описание"
  },
  {
    "index": 155,
    "word": "room",
    "transcription": "[ruːm]",
    "translation": "место, пространство"
  },
  {
    "index": 156,
    "word": "roomy",
    "transcription": "[ˈruːmi]",
    "translation": "вместительный"
  },
  {
    "index": 157,
    "word": "lens",
    "transcription": "[lɛnz]",
    "translation": "линза, объектив"
  },
  {
    "index": 158,
    "word": "tail",
    "transcription": "[teɪl]",
    "translation": "хвост"
  },
  {
    "index": 159,
    "word": "tails",
    "transcription": "[teɪlz]",
    "translation": "обрезки, отходы"
  },
  {
    "index": 160,
    "word": "tailed",
    "transcription": "[teɪld]",
    "translation": "хвостатый"
  },
  {
    "index": 161,
    "word": "can",
    "transcription": "[kæn]",
    "translation": "банка"
  },
  {
    "index": 162,
    "word": "canned",
    "transcription": "[kænd]",
    "translation": "консервированный"
  },
  {
    "index": 163,
    "word": "flour",
    "transcription": "[ˈflaʊə]",
    "translation": "мука"
  },
  {
    "index": 164,
    "word": "magazine",
    "transcription": "[ˌmægəˈziːn]",
    "translation": "журнал"
  },
  {
    "index": 165,
    "word": "tense",
    "transcription": "[tɛns]",
    "translation": "напряжённый, напрягать"
  },
  {
    "index": 166,
    "word": "tension",
    "transcription": "[ˈtɛnʃən]",
    "translation": "напряженность"
  },
  {
    "index": 167,
    "word": "way",
    "transcription": "[weɪ]",
    "translation": "способ"
  },
  {
    "index": 168,
    "word": "split (split, split)",
    "transcription": "[splɪt]",
    "translation": "расколоться, распасться"
  },
  {
    "index": 169,
    "word": "ring (rang, rung)",
    "transcription": "[rɪŋ]",
    "translation": "звонить, звонок"
  },
  {
    "index": 170,
    "word": "thumb",
    "transcription": "[θʌm]",
    "translation": "большой палец"
  },
  {
    "index": 171,
    "word": "boundary",
    "transcription": "[ˈbaʊndəri]",
    "translation": "граница, черта"
  },
  {
    "index": 172,
    "word": "wage",
    "transcription": "[weɪʤ]",
    "translation": "заработок, оплата"
  },
  {
    "index": 173,
    "word": "point",
    "transcription": "[pɔɪnt]",
    "translation": "смысл, суть"
  },
  {
    "index": 174,
    "word": "pointless",
    "transcription": "[ˈpɒntlɪs]",
    "translation": "бессмысленный"
  },
  {
    "index": 175,
    "word": "favor (favour)",
    "transcription": "[ˈfeɪvə]",
    "translation": "благоприятствовать"
  },
  {
    "index": 176,
    "word": "favourite",
    "transcription": "[ˈfeɪvərɪt]",
    "translation": "любимый"
  },
  {
    "index": 177,
    "word": "favorable",
    "transcription": "[ˈfeɪvərəbl]",
    "translation": "благоприятный"
  },
  {
    "index": 178,
    "word": "unfavorable",
    "transcription": "[ʌnˈfeɪvərəbl]",
    "translation": "неблагоприятный"
  },
  {
    "index": 179,
    "word": "chef",
    "transcription": "[ʃɛf]",
    "translation": "шеф-повар"
  },
  {
    "index": 180,
    "word": "considerable",
    "transcription": "[kənˈsɪdərəbl]",
    "translation": "крупный, значительный"
  },
  {
    "index": 181,
    "word": "inconsiderable",
    "transcription": "[ˌɪnkənˈsɪdərəbl]",
    "translation": "неважный"
  },
  {
    "index": 182,
    "word": "multiple",
    "transcription": "[ˈmʌltɪpl]",
    "translation": "множественный, неединичный"
  },
  {
    "index": 183,
    "word": "lessen",
    "transcription": "[ˈlɛsn]",
    "translation": "уменьшать(ся)"
  },
  {
    "index": 184,
    "word": "landmark",
    "transcription": "[ˈlændmɑːk]",
    "translation": "ориентир"
  },
  {
    "index": 185,
    "word": "solid",
    "transcription": "[ˈsɒlɪd]",
    "translation": "сплошной"
  },
  {
    "index": 186,
    "word": "herb",
    "transcription": "[hɜːb]",
    "translation": "трава"
  },
  {
    "index": 187,
    "word": "herbal",
    "transcription": "[ˈhɜːbəl]",
    "translation": "травяной"
  },
  {
    "index": 188,
    "word": "topic",
    "transcription": "[ˈtɒpɪk]",
    "translation": "тема, предмет обсуждения"
  },
  {
    "index": 189,
    "word": "topical",
    "transcription": "[ˈtɒpɪkəl]",
    "translation": "актуальный, тематический"
  },
  {
    "index": 190,
    "word": "hurt (hurt, hurt)",
    "transcription": "[hɜːt]",
    "translation": "причинять боль или болеть"
  },
  {
    "index": 191,
    "word": "affiliate",
    "transcription": "[əˈfɪlɪeɪt]",
    "translation": "филиал, отделение, мл. партнёр"
  },
  {
    "index": 192,
    "word": "affiliated",
    "transcription": "[əˈfɪlɪeɪtɪd]",
    "translation": "аффилированная"
  },
  {
    "index": 193,
    "word": "affiliation",
    "transcription": "[əˌfɪlɪˈeɪʃ(ə)n]",
    "translation": "присоединение"
  },
  {
    "index": 194,
    "word": "anxiety",
    "transcription": "[æŋˈzaɪəti]",
    "translation": "беспокойство, тревога"
  },
  {
    "index": 195,
    "word": "wave",
    "transcription": "[weɪv]",
    "translation": "волна"
  },
  {
    "index": 196,
    "word": "long ago",
    "transcription": "[lɒŋəˈgəʊ]",
    "translation": "давно"
  },
  {
    "index": 197,
    "word": "space",
    "transcription": "[speɪs]",
    "translation": "пространство"
  },
  {
    "index": 198,
    "word": "spacious",
    "transcription": "[ˈspeɪʃəs]",
    "translation": "просторный"
  },
  {
    "index": 199,
    "word": "spatial",
    "transcription": "[ˈspeɪʃəl]",
    "translation": "пространственный"
  },
  {
    "index": 200,
    "word": "cord",
    "transcription": "[kɔːd]",
    "translation": "верёвка, шнур"
  },
  {
    "index": 201,
    "word": "vision",
    "transcription": "[ˈvɪʒən]",
    "translation": "зрение или видение"
  },
  {
    "index": 202,
    "word": "visionary",
    "transcription": "[ˈvɪʒnəri]",
    "translation": "провидец, мечтатель"
  },
  {
    "index": 203,
    "word": "dozen",
    "transcription": "[ˈdʌzn]",
    "translation": "дюжина"
  },
  {
    "index": 204,
    "word": "several",
    "transcription": "[ˈsɛvrəl]",
    "translation": "несколько"
  },
  {
    "index": 205,
    "word": "terms",
    "transcription": "[tɜːmz]",
    "translation": "отношения"
  },
  {
    "index": 206,
    "word": "generous",
    "transcription": "[ˈʤɛnərəs]",
    "translation": "великодушный, щедрый"
  },
  {
    "index": 207,
    "word": "generosity",
    "transcription": "[ˌʤɛnəˈrɒsɪti]",
    "translation": "щедрость"
  },
  {
    "index": 208,
    "word": "bay",
    "transcription": "[beɪ]",
    "translation": "залив"
  },
  {
    "index": 209,
    "word": "duty",
    "transcription": "[ˈdjuːti]",
    "translation": "обязанность, служба"
  },
  {
    "index": 210,
    "word": "dutiful",
    "transcription": "[ˈdjuːtɪfʊl]",
    "translation": "ответственный, обязательный"
  },
  {
    "index": 211,
    "word": "database",
    "transcription": "[ˈdeɪtəˌbeɪs]",
    "translation": "база данных"
  },
  {
    "index": 212,
    "word": "prompt",
    "transcription": "[prɒmpt]",
    "translation": "побуждать, подстрекать"
  },
  {
    "index": 213,
    "word": "observe",
    "transcription": "[əbˈzɜːv]",
    "translation": "наблюдать"
  },
  {
    "index": 214,
    "word": "observation",
    "transcription": "[ˌɒbzə(ː)ˈveɪʃən]",
    "translation": "наблюдение"
  },
  {
    "index": 215,
    "word": "observer",
    "transcription": "[əbˈzɜːvə]",
    "translation": "наблюдатель"
  },
  {
    "index": 216,
    "word": "spill",
    "transcription": "[spɪl]",
    "translation": "проливать, рассыпать"
  },
  {
    "index": 217,
    "word": "brief",
    "transcription": "[briːf]",
    "translation": "краткий"
  },
  {
    "index": 218,
    "word": "neck",
    "transcription": "[nɛk]",
    "translation": "шея"
  },
  {
    "index": 219,
    "word": "society",
    "transcription": "[səˈsaɪəti]",
    "translation": "общество"
  },
  {
    "index": 220,
    "word": "societal",
    "transcription": "[səˈsaɪətl]",
    "translation": "общественный"
  },
  {
    "index": 221,
    "word": "weak",
    "transcription": "[wiːk]",
    "translation": "слабый"
  },
  {
    "index": 222,
    "word": "weakness",
    "transcription": "[ˈwiːknɪs]",
    "translation": "слабое место"
  },
  {
    "index": 223,
    "word": "weaken",
    "transcription": "[ˈwiːkən]",
    "translation": "ослабевать"
  },
  {
    "index": 224,
    "word": "result in",
    "transcription": "[rɪˈzʌltɪn]",
    "translation": "привести к"
  },
  {
    "index": 225,
    "word": "result",
    "transcription": "[rɪˈzʌlt]",
    "translation": "результат"
  },
  {
    "index": 226,
    "word": "day off",
    "transcription": "[deɪɒf]",
    "translation": "выходной"
  },
  {
    "index": 227,
    "word": "customs",
    "transcription": "[ˈkʌstəmz]",
    "translation": "таможня"
  },
  {
    "index": 228,
    "word": "greet",
    "transcription": "[griːt]",
    "translation": "приветствовать"
  },
  {
    "index": 229,
    "word": "greeting",
    "transcription": "[ˈgriːtɪŋ]",
    "translation": "приветствие"
  },
  {
    "index": 230,
    "word": "edge",
    "transcription": "[ɛʤ]",
    "translation": "край"
  },
  {
    "index": 231,
    "word": "edged",
    "transcription": "[ɛʤd]",
    "translation": "окруженный, окантованный"
  },
  {
    "index": 232,
    "word": "edgy",
    "transcription": "[ˈɛʤi]",
    "translation": "острый или раздражительный"
  },
  {
    "index": 233,
    "word": "preserve",
    "transcription": "[prɪˈzɜːv]",
    "translation": "сохранять, беречь"
  },
  {
    "index": 234,
    "word": "preservation",
    "transcription": "[ˌprɛzə(ː)ˈveɪʃən]",
    "translation": "сохранение"
  },
  {
    "index": 235,
    "word": "handsome",
    "transcription": "[ˈhænsəm]",
    "translation": "красивый (обычно о мужчинах)"
  },
  {
    "index": 236,
    "word": "lack",
    "transcription": "[læk]",
    "translation": "недостаток, нуждаться"
  },
  {
    "index": 237,
    "word": "skin",
    "transcription": "[skɪn]",
    "translation": "кожа"
  },
  {
    "index": 238,
    "word": "encourage",
    "transcription": "[ɪnˈkʌrɪʤ]",
    "translation": "поддерживать, поощрять"
  },
  {
    "index": 239,
    "word": "encouragement",
    "transcription": "[ɪnˈkʌrɪʤmənt]",
    "translation": "поощрение"
  },
  {
    "index": 240,
    "word": "discourage",
    "transcription": "[dɪsˈkʌrɪʤ]",
    "translation": "отговорить, демотивировать"
  },
  {
    "index": 241,
    "word": "discouragement",
    "transcription": "[dɪsˈkʌrɪʤmənt]",
    "translation": "уныние"
  },
  {
    "index": 242,
    "word": "harass",
    "transcription": "[ˈhærəs]",
    "translation": "тревожить, изводить"
  },
  {
    "index": 243,
    "word": "harassment",
    "transcription": "[ˈhærəsmənt]",
    "translation": "домогательство"
  },
  {
    "index": 244,
    "word": "task",
    "transcription": "[tɑːsk]",
    "translation": "задание, задача"
  },
  {
    "index": 245,
    "word": "aid",
    "transcription": "[eɪd]",
    "translation": "помощь, помогать"
  },
  {
    "index": 246,
    "word": "aiding",
    "transcription": "[ˈeɪdɪŋ]",
    "translation": "вспомогательный"
  },
  {
    "index": 247,
    "word": "boil",
    "transcription": "[bɔɪl]",
    "translation": "кипеть, кипятить, варить"
  },
  {
    "index": 248,
    "word": "boiler",
    "transcription": "[ˈbɔɪlə]",
    "translation": "котел"
  },
  {
    "index": 249,
    "word": "adventure",
    "transcription": "[ədˈvɛnʧə]",
    "translation": "приключение"
  },
  {
    "index": 250,
    "word": "adventurer",
    "transcription": "[ədˈvɛnʧərə]",
    "translation": "авантюрист"
  },
  {
    "index": 251,
    "word": "adventurous",
    "transcription": "[ədˈvɛnʧərəs]",
    "translation": "авантюрный"
  },
  {
    "index": 252,
    "word": "weave (wove, woven)",
    "transcription": "[wiːv]",
    "translation": "плести, ткать"
  },
  {
    "index": 253,
    "word": "flavor",
    "transcription": "[ˈfleɪvə]",
    "translation": "вкус, приправлять"
  },
  {
    "index": 254,
    "word": "remove",
    "transcription": "[rɪˈmuːv]",
    "translation": "убрать, удалить"
  },
  {
    "index": 255,
    "word": "removal",
    "transcription": "[rɪˈmuːvəl]",
    "translation": "удаление"
  },
  {
    "index": 256,
    "word": "shadow",
    "transcription": "[ˈʃædəʊ]",
    "translation": "тень"
  },
  {
    "index": 257,
    "word": "shadowy",
    "transcription": "[ˈʃædəʊi]",
    "translation": "призрачный"
  },
  {
    "index": 258,
    "word": "suburb",
    "transcription": "[ˈsʌbɜːb]",
    "translation": "пригород"
  },
  {
    "index": 259,
    "word": "suburban",
    "transcription": "[səˈbɜːbən]",
    "translation": "пригородный"
  },
  {
    "index": 260,
    "word": "complex",
    "transcription": "[ˈkɒmplɛks]",
    "translation": "сложный"
  },
  {
    "index": 261,
    "word": "complexity",
    "transcription": "[kəmˈplɛksɪti]",
    "translation": "сложность"
  },
  {
    "index": 262,
    "word": "birth",
    "transcription": "[bɜːθ]",
    "translation": "рождение"
  },
  {
    "index": 263,
    "word": "birthday",
    "transcription": "[ˈbɜːθdeɪ]",
    "translation": "день рождения"
  },
  {
    "index": 264,
    "word": "exploit",
    "transcription": "[ˈɛksplɔɪt]",
    "translation": "использовать, эксплуатировать"
  },
  {
    "index": 265,
    "word": "exploitation",
    "transcription": "[ˌɛksplɔɪˈteɪʃən]",
    "translation": "использование"
  },
  {
    "index": 266,
    "word": "exploiter",
    "transcription": "[ɪksˈplɔɪtə]",
    "translation": "эксплуататор"
  },
  {
    "index": 267,
    "word": "contain",
    "transcription": "[kənˈteɪn]",
    "translation": "содержать"
  },
  {
    "index": 268,
    "word": "containment",
    "transcription": "[kənˈteɪnmənt]",
    "translation": "сдерживание"
  },
  {
    "index": 269,
    "word": "bargain",
    "transcription": "[ˈbɑːgɪn]",
    "translation": "сделка, торговаться"
  },
  {
    "index": 270,
    "word": "tool",
    "transcription": "[tuːl]",
    "translation": "инструмент"
  },
  {
    "index": 271,
    "word": "agenda",
    "transcription": "[əˈʤɛndə]",
    "translation": "повестка дня"
  },
  {
    "index": 272,
    "word": "ancestor",
    "transcription": "[ˈænsɪstə]",
    "translation": "предок"
  },
  {
    "index": 273,
    "word": "ancestral",
    "transcription": "[ænˈsɛstrəl]",
    "translation": "наследственный, родовой"
  },
  {
    "index": 274,
    "word": "missile",
    "transcription": "[ˈmɪsaɪl]",
    "translation": "ракета"
  },
  {
    "index": 275,
    "word": "elaborate",
    "transcription": "[ɪˈlæbərɪt]",
    "translation": "разработать, проработанный"
  },
  {
    "index": 276,
    "word": "elaboration",
    "transcription": "[ɪˌlæbəˈreɪʃən]",
    "translation": "разработка"
  },
  {
    "index": 277,
    "word": "pool",
    "transcription": "[puːl]",
    "translation": "бассейн"
  },
  {
    "index": 278,
    "word": "substitute",
    "transcription": "[ˈsʌbstɪtjuːt]",
    "translation": "заменять, замена"
  },
  {
    "index": 279,
    "word": "substitution",
    "transcription": "[ˌsʌbstɪˈtjuːʃən]",
    "translation": "замена"
  },
  {
    "index": 280,
    "word": "lone",
    "transcription": "[ləʊn]",
    "translation": "одинокий"
  },
  {
    "index": 281,
    "word": "lonely",
    "transcription": "[ˈləʊnli]",
    "translation": "одинокий"
  },
  {
    "index": 282,
    "word": "loneliness",
    "transcription": "[ˈləʊnlɪnəs]",
    "translation": "одиночество"
  },
  {
    "index": 283,
    "word": "lonesome",
    "transcription": "[ˈləʊnsəm]",
    "translation": "унылый"
  },
  {
    "index": 284,
    "word": "amaze",
    "transcription": "[əˈmeɪz]",
    "translation": "поражать, изумлять"
  },
  {
    "index": 285,
    "word": "amazement",
    "transcription": "[əˈmeɪzmənt]",
    "translation": "изумление"
  },
  {
    "index": 286,
    "word": "blonde",
    "transcription": "[blɒnd]",
    "translation": "блондинка"
  },
  {
    "index": 287,
    "word": "blond",
    "transcription": "[blɒnd]",
    "translation": "блондин"
  },
  {
    "index": 288,
    "word": "fascinate",
    "transcription": "[ˈfæsɪneɪt]",
    "translation": "очаровывать"
  },
  {
    "index": 289,
    "word": "fascination",
    "transcription": "[ˌfæsɪˈneɪʃən]",
    "translation": "очарование"
  },
  {
    "index": 290,
    "word": "fascinating",
    "transcription": "[ˈfæsɪneɪtɪŋ]",
    "translation": "очаровательный"
  },
  {
    "index": 291,
    "word": "violent",
    "transcription": "[ˈvaɪələnt]",
    "translation": "яростный, жестокий"
  },
  {
    "index": 292,
    "word": "violence",
    "transcription": "[ˈvaɪələns]",
    "translation": "насилие"
  },
  {
    "index": 293,
    "word": "relief",
    "transcription": "[rɪˈliːf]",
    "translation": "облегчение"
  },
  {
    "index": 294,
    "word": "exclude",
    "transcription": "[ɪksˈkluːd]",
    "translation": "исключать"
  },
  {
    "index": 295,
    "word": "exclusion",
    "transcription": "[ɪksˈkluːʒən]",
    "translation": "исключение"
  },
  {
    "index": 296,
    "word": "exclusive",
    "transcription": "[ɪksˈkluːsɪv]",
    "translation": "исключительный"
  },
  {
    "index": 297,
    "word": "visible",
    "transcription": "[ˈvɪzəbl]",
    "translation": "видимый"
  },
  {
    "index": 298,
    "word": "invisible",
    "transcription": "[ɪnˈvɪzəbl]",
    "translation": "невидимый"
  },
  {
    "index": 299,
    "word": "visibility",
    "transcription": "[ˌvɪzɪˈbɪlɪti]",
    "translation": "видимость"
  },
  {
    "index": 300,
    "word": "invisibility",
    "transcription": "[ɪnˌvɪzəˈbɪlɪti]",
    "translation": "невидимость"
  },
  {
    "index": 301,
    "word": "roll",
    "transcription": "[rəʊl]",
    "translation": "рулон, клубок, свиток и т. д."
  },
  {
    "index": 302,
    "word": "carry out",
    "transcription": "[ˈkæriaʊt]",
    "translation": "выполнить"
  },
  {
    "index": 303,
    "word": "rape",
    "transcription": "[reɪp]",
    "translation": "насиловать, изнасилование"
  },
  {
    "index": 304,
    "word": "rapist",
    "transcription": "[ˈreɪpɪst]",
    "translation": "насильник"
  },
  {
    "index": 305,
    "word": "manual",
    "transcription": "[ˈmænjʊəl]",
    "translation": "руководство, учебник"
  },
  {
    "index": 306,
    "word": "honor (honour)",
    "transcription": "[ˈɒnə]",
    "translation": "честь, чтить"
  },
  {
    "index": 307,
    "word": "honorary",
    "transcription": "[ˈɒnərəri]",
    "translation": "почетный"
  },
  {
    "index": 308,
    "word": "honorable",
    "transcription": "[ˈɒnərəbl]",
    "translation": "почетный"
  },
  {
    "index": 309,
    "word": "miss",
    "transcription": "[mɪs]",
    "translation": "скучать"
  },
  {
    "index": 310,
    "word": "oil",
    "transcription": "[ɔɪl]",
    "translation": "масло"
  },
  {
    "index": 311,
    "word": "oily",
    "transcription": "[ˈɔɪli]",
    "translation": "маслянистый"
  },
  {
    "index": 312,
    "word": "field",
    "transcription": "[fiːld]",
    "translation": "поле, область"
  },
  {
    "index": 313,
    "word": "render",
    "transcription": "[ˈrɛndə]",
    "translation": "делать, придавать свойство"
  },
  {
    "index": 314,
    "word": "accelerate",
    "transcription": "[əkˈsɛləreɪt]",
    "translation": "ускорять"
  },
  {
    "index": 315,
    "word": "acceleration",
    "transcription": "[əkˌsɛləˈreɪʃ(ə)n]",
    "translation": "ускорение"
  },
  {
    "index": 316,
    "word": "poke",
    "transcription": "[pəʊk]",
    "translation": "совать, тыкать"
  },
  {
    "index": 317,
    "word": "steel",
    "transcription": "[stiːl]",
    "translation": "сталь, стальной"
  },
  {
    "index": 318,
    "word": "bring (brought, brought)",
    "transcription": "[brɪŋ]",
    "translation": "принести"
  },
  {
    "index": 319,
    "word": "unit",
    "transcription": "[ˈjuːnɪt]",
    "translation": "единица, элемент"
  },
  {
    "index": 320,
    "word": "penalty",
    "transcription": "[ˈpɛnlti]",
    "translation": "наказание"
  },
  {
    "index": 321,
    "word": "matter",
    "transcription": "[ˈmætə]",
    "translation": "вещество, материя"
  },
  {
    "index": 322,
    "word": "conclude",
    "transcription": "[kənˈkluːd]",
    "translation": "заключать, завершать"
  },
  {
    "index": 323,
    "word": "conclusion",
    "transcription": "[kənˈkluːʒən]",
    "translation": "вывод"
  },
  {
    "index": 324,
    "word": "conclusive",
    "transcription": "[kənˈkluːsɪv]",
    "translation": "убедительный"
  },
  {
    "index": 325,
    "word": "put smth down to",
    "transcription": "[pʊtsmthdaʊntuː]",
    "translation": "объяснить, списать на"
  },
  {
    "index": 326,
    "word": "overnight",
    "transcription": "[ˌəʊvəˈnaɪt]",
    "translation": "ночной, с ночёвкой"
  },
  {
    "index": 327,
    "word": "poverty",
    "transcription": "[ˈpɒvəti]",
    "translation": "бедность, нищета"
  },
  {
    "index": 328,
    "word": "impoverish",
    "transcription": "[ɪmˈpɒvərɪʃ]",
    "translation": "обеднять"
  },
  {
    "index": 329,
    "word": "declare",
    "transcription": "[dɪˈkleə]",
    "translation": "объявлять"
  },
  {
    "index": 330,
    "word": "declaration",
    "transcription": "[ˌdɛkləˈreɪʃən]",
    "translation": "декларация"
  },
  {
    "index": 331,
    "word": "take into account",
    "transcription": "[teɪkˈɪntuːəˈkaʊnt]",
    "translation": "учесть"
  },
  {
    "index": 332,
    "word": "race",
    "transcription": "[reɪs]",
    "translation": "раса"
  },
  {
    "index": 333,
    "word": "racial",
    "transcription": "[ˈreɪʃəl]",
    "translation": "расовый"
  },
  {
    "index": 334,
    "word": "lead",
    "transcription": "[liːd]",
    "translation": "вести"
  },
  {
    "index": 335,
    "word": "condition",
    "transcription": "[kənˈdɪʃən]",
    "translation": "условие"
  },
  {
    "index": 336,
    "word": "conditional",
    "transcription": "[kənˈdɪʃənl]",
    "translation": "условный"
  },
  {
    "index": 337,
    "word": "unconditional",
    "transcription": "[ˌʌnkənˈdɪʃənl]",
    "translation": "безусловный"
  },
  {
    "index": 338,
    "word": "bar",
    "transcription": "[bɑː]",
    "translation": "пластина, брусок, прут и т. д."
  },
  {
    "index": 339,
    "word": "bars",
    "transcription": "[bɑːz]",
    "translation": "решётка"
  },
  {
    "index": 340,
    "word": "squeeze",
    "transcription": "[skwiːz]",
    "translation": "сжимать"
  },
  {
    "index": 341,
    "word": "cite",
    "transcription": "[saɪt]",
    "translation": "упоминать, цитировать"
  },
  {
    "index": 342,
    "word": "citation",
    "transcription": "[saɪˈteɪʃən]",
    "translation": "цитата"
  },
  {
    "index": 343,
    "word": "annual",
    "transcription": "[ˈænjʊəl]",
    "translation": "ежегодный"
  },
  {
    "index": 344,
    "word": "bow",
    "transcription": "[baʊ]",
    "translation": "бант, бабочка"
  },
  {
    "index": 345,
    "word": "punish",
    "transcription": "[ˈpʌnɪʃ]",
    "translation": "наказывать"
  },
  {
    "index": 346,
    "word": "punishable",
    "transcription": "[ˈpʌnɪʃəbl]",
    "translation": "наказуемый"
  },
  {
    "index": 347,
    "word": "punishment",
    "transcription": "[ˈpʌnɪʃmənt]",
    "translation": "наказание"
  },
  {
    "index": 348,
    "word": "unpunished",
    "transcription": "[ʌnˈpʌnɪʃt]",
    "translation": "безнаказанный"
  },
  {
    "index": 349,
    "word": "punitive",
    "transcription": "[ˈpjuːnɪtɪv]",
    "translation": "карательный"
  },
  {
    "index": 350,
    "word": "purple",
    "transcription": "[ˈpɜːpl]",
    "translation": "пурпурный, фиолетовый"
  },
  {
    "index": 351,
    "word": "handful",
    "transcription": "[ˈhændfʊl]",
    "translation": "горсть"
  },
  {
    "index": 352,
    "word": "armful",
    "transcription": "[ˈɑːmfʊl]",
    "translation": "охапка"
  },
  {
    "index": 353,
    "word": "mouthful",
    "transcription": "[ˈmaʊθfʊl]",
    "translation": "полный рот"
  },
  {
    "index": 354,
    "word": "witness",
    "transcription": "[ˈwɪtnɪs]",
    "translation": "свидетель"
  },
  {
    "index": 355,
    "word": "grade",
    "transcription": "[greɪd]",
    "translation": "оценка"
  },
  {
    "index": 356,
    "word": "pipe",
    "transcription": "[paɪp]",
    "translation": "трубка"
  },
  {
    "index": 357,
    "word": "restrain",
    "transcription": "[rɪsˈtreɪn]",
    "translation": "ограничивать, удерживать"
  },
  {
    "index": 358,
    "word": "restraint",
    "transcription": "[rɪsˈtreɪnt]",
    "translation": "сдержанность"
  },
  {
    "index": 359,
    "word": "unrestrained",
    "transcription": "[ˌʌnrɪsˈtreɪnd]",
    "translation": "несдержанный"
  },
  {
    "index": 360,
    "word": "constrain",
    "transcription": "[kənˈstreɪn]",
    "translation": "ограничивать (препятствием)"
  },
  {
    "index": 361,
    "word": "constraint",
    "transcription": "[kənˈstreɪnt]",
    "translation": "ограничение"
  },
  {
    "index": 362,
    "word": "unconstrained",
    "transcription": "[ˌʌnkənˈstreɪnd]",
    "translation": "непринужденный"
  },
  {
    "index": 363,
    "word": "suspect",
    "transcription": "[ˈsʌspɛkt]",
    "translation": "подозревать, подозреваемый"
  },
  {
    "index": 364,
    "word": "converse",
    "transcription": "[kənˈvɜːs]",
    "translation": "разговаривать"
  },
  {
    "index": 365,
    "word": "conversation",
    "transcription": "[ˌkɒnvəˈseɪʃən]",
    "translation": "разговор"
  },
  {
    "index": 366,
    "word": "liquid",
    "transcription": "[ˈlɪkwɪd]",
    "translation": "жидкость, жидкий"
  },
  {
    "index": 367,
    "word": "liquidity",
    "transcription": "[lɪˈkwɪdɪti]",
    "translation": "текучесть, ликвидность"
  },
  {
    "index": 368,
    "word": "resemble",
    "transcription": "[rɪˈzɛmbl]",
    "translation": "походить"
  },
  {
    "index": 369,
    "word": "resemblance",
    "transcription": "[rɪˈzɛmbləns]",
    "translation": "сходство"
  },
  {
    "index": 370,
    "word": "decide",
    "transcription": "[dɪˈsaɪd]",
    "translation": "решить"
  },
  {
    "index": 371,
    "word": "decision",
    "transcription": "[dɪˈsɪʒən]",
    "translation": "решение"
  },
  {
    "index": 372,
    "word": "indecision",
    "transcription": "[ˌɪndɪˈsɪʒən]",
    "translation": "нерешительность"
  },
  {
    "index": 373,
    "word": "bold",
    "transcription": "[bəʊld]",
    "translation": "смелый, дерзкий, безрассудный"
  },
  {
    "index": 374,
    "word": "boldness",
    "transcription": "[ˈbəʊldnəs]",
    "translation": "смелость, дерзость"
  },
  {
    "index": 375,
    "word": "case",
    "transcription": "[keɪs]",
    "translation": "случай, дело"
  },
  {
    "index": 376,
    "word": "case",
    "transcription": "[keɪs]",
    "translation": "дело"
  },
  {
    "index": 377,
    "word": "determine",
    "transcription": "[dɪˈtɜːmɪn]",
    "translation": "определить"
  },
  {
    "index": 378,
    "word": "determination",
    "transcription": "[dɪˌtɜːmɪˈneɪʃən]",
    "translation": "определение"
  },
  {
    "index": 379,
    "word": "determined",
    "transcription": "[dɪˈtɜːmɪnd]",
    "translation": "определённый, решённый"
  },
  {
    "index": 380,
    "word": "undetermined",
    "transcription": "[ˌʌndɪˈtɜːmɪnd]",
    "translation": "неопределённый"
  },
  {
    "index": 381,
    "word": "determinate",
    "transcription": "[dɪˈtɜːmɪnɪt]",
    "translation": "определённый, решённый"
  },
  {
    "index": 382,
    "word": "waste",
    "transcription": "[weɪst]",
    "translation": "отходы, обрезки, потери и т.п."
  },
  {
    "index": 383,
    "word": "wastewater",
    "transcription": "[ˈweɪstˌwɔːtə]",
    "translation": "сточные воды"
  },
  {
    "index": 384,
    "word": "regard",
    "transcription": "[rɪˈgɑːd]",
    "translation": "внимание, уважение"
  },
  {
    "index": 385,
    "word": "difficulty",
    "transcription": "[ˈdɪfɪkəlti]",
    "translation": "трудность"
  },
  {
    "index": 386,
    "word": "ticket",
    "transcription": "[ˈtɪkɪt]",
    "translation": "билет, талон"
  },
  {
    "index": 387,
    "word": "bet",
    "transcription": "[bɛt]",
    "translation": "ставка, пари, держать пари"
  },
  {
    "index": 388,
    "word": "settle",
    "transcription": "[ˈsɛtl]",
    "translation": "уладить"
  },
  {
    "index": 389,
    "word": "unsettle",
    "transcription": "[ʌnˈsɛtl]",
    "translation": "расстраивать"
  },
  {
    "index": 390,
    "word": "bow",
    "transcription": "[baʊ]",
    "translation": "лук"
  },
  {
    "index": 391,
    "word": "flow",
    "transcription": "[fləʊ]",
    "translation": "поток, течь"
  },
  {
    "index": 392,
    "word": "approve",
    "transcription": "[əˈpruːv]",
    "translation": "утвердить, одобрить (офиц.)"
  },
  {
    "index": 393,
    "word": "approval",
    "transcription": "[əˈpruːvəl]",
    "translation": "утверждение"
  },
  {
    "index": 394,
    "word": "disapprove",
    "transcription": "[ˌdɪsəˈpruːv]",
    "translation": "не одобрять"
  },
  {
    "index": 395,
    "word": "approve of",
    "transcription": "[əˈpruːvɒv]",
    "translation": "одобрять (субъективно)"
  },
  {
    "index": 396,
    "word": "at first",
    "transcription": "[ætfɜːst]",
    "translation": "сначала"
  },
  {
    "index": 397,
    "word": "occasion",
    "transcription": "[əˈkeɪʒən]",
    "translation": "случай, событие"
  },
  {
    "index": 398,
    "word": "occasional",
    "transcription": "[əˈkeɪʒənl]",
    "translation": "случайный"
  },
  {
    "index": 399,
    "word": "describe",
    "transcription": "[dɪsˈkraɪb]",
    "translation": "описать"
  },
  {
    "index": 400,
    "word": "descriptive",
    "transcription": "[dɪsˈkrɪptɪv]",
    "translation": "описательный"
  },
  {
    "index": 401,
    "word": "description",
    "transcription": "[dɪsˈkrɪpʃən]",
    "translation": "описание"
  },
  {
    "index": 402,
    "word": "rope",
    "transcription": "[rəʊp]",
    "translation": "верёвка"
  },
  {
    "index": 403,
    "word": "feature",
    "transcription": "[ˈfiːʧə]",
    "translation": "черта, особенность"
  },
  {
    "index": 404,
    "word": "featured",
    "transcription": "[ˈfiːʧəd]",
    "translation": "напоминающий, похожий"
  },
  {
    "index": 405,
    "word": "by far",
    "transcription": "[baɪfɑː]",
    "translation": "безусловно"
  },
  {
    "index": 406,
    "word": "drum",
    "transcription": "[drʌm]",
    "translation": "барабан, барабанить"
  },
  {
    "index": 407,
    "word": "drummer",
    "transcription": "[ˈdrʌmə]",
    "translation": "ударник"
  },
  {
    "index": 408,
    "word": "emit",
    "transcription": "[ɪˈmɪt]",
    "translation": "испускать, издавать"
  },
  {
    "index": 409,
    "word": "emission",
    "transcription": "[ɪˈmɪʃən]",
    "translation": "излучение"
  },
  {
    "index": 410,
    "word": "indeed",
    "transcription": "[ɪnˈdiːd]",
    "translation": "в самом деле"
  },
  {
    "index": 411,
    "word": "table",
    "transcription": "[ˈteɪbl]",
    "translation": "таблица"
  },
  {
    "index": 412,
    "word": "hostile",
    "transcription": "[ˈhɒstaɪl]",
    "translation": "враждебный, неприязненный"
  },
  {
    "index": 413,
    "word": "hostility",
    "transcription": "[hɒsˈtɪlɪti]",
    "translation": "враждебность"
  },
  {
    "index": 414,
    "word": "option",
    "transcription": "[ˈɒpʃən]",
    "translation": "выбор, вариант"
  },
  {
    "index": 415,
    "word": "optional",
    "transcription": "[ˈɒpʃənl]",
    "translation": "необязательный"
  },
  {
    "index": 416,
    "word": "significant",
    "transcription": "[sɪgˈnɪfɪkənt]",
    "translation": "значительный"
  },
  {
    "index": 417,
    "word": "significance",
    "transcription": "[sɪgˈnɪfɪkəns]",
    "translation": "значение"
  },
  {
    "index": 418,
    "word": "insignificant",
    "transcription": "[ˌɪnsɪgˈnɪfɪkənt]",
    "translation": "незначительный"
  },
  {
    "index": 419,
    "word": "make fun at",
    "transcription": "[meɪkfʌnæt]",
    "translation": "смеяться, издеваться"
  },
  {
    "index": 420,
    "word": "chop",
    "transcription": "[ʧɒp]",
    "translation": "рубить"
  },
  {
    "index": 421,
    "word": "general",
    "transcription": "[ˈʤɛnərəl]",
    "translation": "общий"
  },
  {
    "index": 422,
    "word": "generalise",
    "transcription": "[ˈʤɛnərəlaɪz]",
    "translation": "обобщать"
  },
  {
    "index": 423,
    "word": "generalisation",
    "transcription": "[ˌʤɛnərəlaɪˈzeɪʃən]",
    "translation": "обобщение"
  },
  {
    "index": 424,
    "word": "awake",
    "transcription": "[əˈweɪk]",
    "translation": "проснуться, бодрствующий"
  },
  {
    "index": 425,
    "word": "mere",
    "transcription": "[mɪə]",
    "translation": "всего лишь"
  },
  {
    "index": 426,
    "word": "perform",
    "transcription": "[pəˈfɔːm]",
    "translation": "выполнить, исполнить"
  },
  {
    "index": 427,
    "word": "performance",
    "transcription": "[pəˈfɔːməns]",
    "translation": "представление"
  },
  {
    "index": 428,
    "word": "lawn",
    "transcription": "[lɔːn]",
    "translation": "газон"
  },
  {
    "index": 429,
    "word": "lawn-mower",
    "transcription": "[ˈlɔːnˌməʊə]",
    "translation": "газонокосилка"
  },
  {
    "index": 430,
    "word": "gentle",
    "transcription": "[ˈʤɛntl]",
    "translation": "мягкий, тихий, нежный и т. д."
  },
  {
    "index": 431,
    "word": "beyond",
    "transcription": "[bɪˈjɒnd]",
    "translation": "вне, свыше"
  },
  {
    "index": 432,
    "word": "hide (hid, hidden)",
    "transcription": "[haɪd]",
    "translation": "скрывать"
  },
  {
    "index": 433,
    "word": "hide away",
    "transcription": "[haɪdəˈweɪ]",
    "translation": "скрывать"
  },
  {
    "index": 434,
    "word": "postpone",
    "transcription": "[pəʊstˈpəʊn]",
    "translation": "отложить, задержать"
  },
  {
    "index": 435,
    "word": "postponement",
    "transcription": "[pəʊstˈpəʊnmənt]",
    "translation": "отсрочка, откладывание"
  },
  {
    "index": 436,
    "word": "highlight",
    "transcription": "[ˈhaɪˌlaɪt]",
    "translation": "выделить, подсветить"
  },
  {
    "index": 437,
    "word": "straight",
    "transcription": "[streɪt]",
    "translation": "прямой, прямо"
  },
  {
    "index": 438,
    "word": "straighten",
    "transcription": "[ˈstreɪtn]",
    "translation": "выпрямлять"
  },
  {
    "index": 439,
    "word": "deal",
    "transcription": "[diːl]",
    "translation": "сделка"
  },
  {
    "index": 440,
    "word": "dealer",
    "transcription": "[ˈdiːlə]",
    "translation": "торговец"
  },
  {
    "index": 441,
    "word": "dealership",
    "transcription": "[ˈdiːləʃɪp]",
    "translation": "торговое агенство"
  },
  {
    "index": 442,
    "word": "delay",
    "transcription": "[dɪˈleɪ]",
    "translation": "задерживать(ся)"
  },
  {
    "index": 443,
    "word": "nerd",
    "transcription": "[nɜːd]",
    "translation": "ботан, задрот"
  },
  {
    "index": 444,
    "word": "fan",
    "transcription": "[fæn]",
    "translation": "вентилятор"
  },
  {
    "index": 445,
    "word": "debt",
    "transcription": "[dɛt]",
    "translation": "долг"
  },
  {
    "index": 446,
    "word": "debtor",
    "transcription": "[ˈdɛtə]",
    "translation": "должник"
  },
  {
    "index": 447,
    "word": "submit",
    "transcription": "[səbˈmɪt]",
    "translation": "подавать информацию"
  },
  {
    "index": 448,
    "word": "raise",
    "transcription": "[reɪz]",
    "translation": "растить (детей)"
  },
  {
    "index": 449,
    "word": "start up",
    "transcription": "[stɑːtʌp]",
    "translation": "основать, установить"
  },
  {
    "index": 450,
    "word": "below",
    "transcription": "[bɪˈləʊ]",
    "translation": "ниже, под"
  },
  {
    "index": 451,
    "word": "climb",
    "transcription": "[klaɪm]",
    "translation": "взбираться"
  },
  {
    "index": 452,
    "word": "crash",
    "transcription": "[kræʃ]",
    "translation": "горохот, крушение, разбивать и т. д."
  },
  {
    "index": 453,
    "word": "consist of",
    "transcription": "[kənˈsɪstɒv]",
    "translation": "состоять (из)"
  },
  {
    "index": 454,
    "word": "touch",
    "transcription": "[tʌʧ]",
    "translation": "связь, контакт"
  },
  {
    "index": 455,
    "word": "in touch",
    "transcription": "[ɪntʌʧ]",
    "translation": "на связи"
  },
  {
    "index": 456,
    "word": "gene",
    "transcription": "[ʤiːn]",
    "translation": "ген"
  },
  {
    "index": 457,
    "word": "neighbour",
    "transcription": "[ˈneɪbə]",
    "translation": "сосед"
  },
  {
    "index": 458,
    "word": "neighborhood",
    "transcription": "[ˈneɪbəhʊd]",
    "translation": "окрестности"
  },
  {
    "index": 459,
    "word": "neighbouring",
    "transcription": "[ˈneɪbərɪŋ]",
    "translation": "близлежащий, соседний"
  },
  {
    "index": 460,
    "word": "tender",
    "transcription": "[ˈtɛndə]",
    "translation": "нежный"
  },
  {
    "index": 461,
    "word": "tenderness",
    "transcription": "[ˈtɛndənɪs]",
    "translation": "нежность"
  },
  {
    "index": 462,
    "word": "tell apart",
    "transcription": "[tɛləˈpɑːt]",
    "translation": "различать"
  },
  {
    "index": 463,
    "word": "follow",
    "transcription": "[ˈfɒləʊ]",
    "translation": "следовать, следить"
  },
  {
    "index": 464,
    "word": "following",
    "transcription": "[ˈfɒləʊɪŋ]",
    "translation": "следующий"
  },
  {
    "index": 465,
    "word": "as follows",
    "transcription": "[æzˈfɒləʊz]",
    "translation": "следующим образом"
  },
  {
    "index": 466,
    "word": "follower",
    "transcription": "[ˈfɒləʊə]",
    "translation": "последователь"
  },
  {
    "index": 467,
    "word": "grocery",
    "transcription": "[ˈgrəʊsəri]",
    "translation": "продуктовый"
  },
  {
    "index": 468,
    "word": "consult",
    "transcription": "[kənˈsʌlt]",
    "translation": "советоваться"
  },
  {
    "index": 469,
    "word": "vague",
    "transcription": "[veɪg]",
    "translation": "смутный"
  },
  {
    "index": 470,
    "word": "vagueness",
    "transcription": "[ˈveɪgnəs]",
    "translation": "неопределенность"
  },
  {
    "index": 471,
    "word": "jury",
    "transcription": "[ˈʤʊəri]",
    "translation": "жюри или присяжные"
  },
  {
    "index": 472,
    "word": "juror",
    "transcription": "[ˈʤʊərə]",
    "translation": "присяжный"
  },
  {
    "index": 473,
    "word": "announce",
    "transcription": "[əˈnaʊns]",
    "translation": "объявлять"
  },
  {
    "index": 474,
    "word": "announcement",
    "transcription": "[əˈnaʊnsmənt]",
    "translation": "объявление"
  },
  {
    "index": 475,
    "word": "bring back",
    "transcription": "[brɪŋbæk]",
    "translation": "вернуть"
  },
  {
    "index": 476,
    "word": "give back",
    "transcription": "[gɪvbæk]",
    "translation": "отдать"
  },
  {
    "index": 477,
    "word": "take back",
    "transcription": "[teɪkbæk]",
    "translation": "забрать"
  },
  {
    "index": 478,
    "word": "stick",
    "transcription": "[stɪk]",
    "translation": "палка, тыкать палкой"
  },
  {
    "index": 479,
    "word": "as though",
    "transcription": "[æzðəʊ]",
    "translation": "как будто"
  },
  {
    "index": 480,
    "word": "court",
    "transcription": "[kɔːt]",
    "translation": "суд"
  },
  {
    "index": 481,
    "word": "courtroom",
    "transcription": "[ˈkɔːtrʊm]",
    "translation": "зал суда"
  },
  {
    "index": 482,
    "word": "courtyard",
    "transcription": "[ˈkɔːtˌjɑːd]",
    "translation": "двор"
  },
  {
    "index": 483,
    "word": "courthouse",
    "transcription": "[ˈkɔːtˈhaʊs]",
    "translation": "здание суда"
  },
  {
    "index": 484,
    "word": "tear (tore, torn)",
    "transcription": "[teə]",
    "translation": "рвать"
  },
  {
    "index": 485,
    "word": "tear apart",
    "transcription": "[teərəˈpɑːt]",
    "translation": "раздирать"
  },
  {
    "index": 486,
    "word": "watch",
    "transcription": "[wɒʧ]",
    "translation": "часы (наручные)"
  },
  {
    "index": 487,
    "word": "seek (sought, sought)",
    "transcription": "[siːk]",
    "translation": "искать, стремиться"
  },
  {
    "index": 488,
    "word": "naked",
    "transcription": "[ˈneɪkɪd]",
    "translation": "голый"
  },
  {
    "index": 489,
    "word": "nakedness",
    "transcription": "[ˈneɪkɪdnəs]",
    "translation": "нагота"
  },
  {
    "index": 490,
    "word": "strain",
    "transcription": "[streɪn]",
    "translation": "напрягать, напряжение"
  },
  {
    "index": 491,
    "word": "wear (wore, worn)",
    "transcription": "[weə]",
    "translation": "надевать, носить"
  },
  {
    "index": 492,
    "word": "blast",
    "transcription": "[blɑːst]",
    "translation": "дуновение, порыв"
  },
  {
    "index": 493,
    "word": "grain",
    "transcription": "[greɪn]",
    "translation": "зерно, крупица"
  },
  {
    "index": 494,
    "word": "drop out of",
    "transcription": "[drɒpaʊtɒv]",
    "translation": "бросить (учёбу)"
  },
  {
    "index": 495,
    "word": "dropout",
    "transcription": "[ˈdrɒpaʊt]",
    "translation": "тот, кто бросил"
  },
  {
    "index": 496,
    "word": "fireplace",
    "transcription": "[ˈfaɪəˌpleɪs]",
    "translation": "камин"
  },
  {
    "index": 497,
    "word": "quantity",
    "transcription": "[ˈkwɒntɪti]",
    "translation": "количество"
  },
  {
    "index": 498,
    "word": "quantitative",
    "transcription": "[ˈkwɒntɪtətɪv]",
    "translation": "количественный"
  },
  {
    "index": 499,
    "word": "crawl",
    "transcription": "[krɔːl]",
    "translation": "ползать"
  },
  {
    "index": 500,
    "word": "bag",
    "transcription": "[bæg]",
    "translation": "сумка, мешок"
  },
  {
    "index": 501,
    "word": "handbag",
    "transcription": "[ˈhændbæg]",
    "translation": "сумка"
  },
  {
    "index": 502,
    "word": "baggy",
    "transcription": "[ˈbægi]",
    "translation": "мешковатый"
  },
  {
    "index": 503,
    "word": "grave",
    "transcription": "[greɪv]",
    "translation": "могила"
  },
  {
    "index": 504,
    "word": "graveyard",
    "transcription": "[ˈgreɪvjɑːd]",
    "translation": "кладбище (у церкви)"
  },
  {
    "index": 505,
    "word": "make up",
    "transcription": "[meɪkʌp]",
    "translation": "выдумать"
  },
  {
    "index": 506,
    "word": "think up",
    "transcription": "[θɪŋkʌp]",
    "translation": "придумать"
  },
  {
    "index": 507,
    "word": "dream up",
    "transcription": "[driːmʌp]",
    "translation": "выдумывать"
  },
  {
    "index": 508,
    "word": "practice",
    "transcription": "[ˈpræktɪs]",
    "translation": "практика, практиковать"
  },
  {
    "index": 509,
    "word": "entitle",
    "transcription": "[ɪnˈtaɪtl]",
    "translation": "давать название"
  },
  {
    "index": 510,
    "word": "pile",
    "transcription": "[paɪl]",
    "translation": "куча, стопка"
  },
  {
    "index": 511,
    "word": "stockpile",
    "transcription": "[ˈstɒkpaɪl]",
    "translation": "штабель"
  },
  {
    "index": 512,
    "word": "surface",
    "transcription": "[ˈsɜːfɪs]",
    "translation": "поверхность"
  },
  {
    "index": 513,
    "word": "duckling",
    "transcription": "[ˈdʌklɪŋ]",
    "translation": "утёнок"
  },
  {
    "index": 514,
    "word": "conduct",
    "transcription": "[ˈkɒndʌkt]",
    "translation": "вести"
  },
  {
    "index": 515,
    "word": "conduction",
    "transcription": "[kənˈdʌkʃən]",
    "translation": "проводимость"
  },
  {
    "index": 516,
    "word": "conductor",
    "transcription": "[kənˈdʌktə]",
    "translation": "проводник"
  },
  {
    "index": 517,
    "word": "misconduct",
    "transcription": "[mɪsˈkɒndʌkt]",
    "translation": "проступок"
  },
  {
    "index": 518,
    "word": "lawsuit",
    "transcription": "[ˈlɔːsjuːt]",
    "translation": "тяжба, судебное дело"
  },
  {
    "index": 519,
    "word": "seize",
    "transcription": "[siːz]",
    "translation": "схватить"
  },
  {
    "index": 520,
    "word": "seizure",
    "transcription": "[ˈsiːʒə]",
    "translation": "захват"
  },
  {
    "index": 521,
    "word": "innocent",
    "transcription": "[ˈɪnəsənt]",
    "translation": "невинный, невиновный"
  },
  {
    "index": 522,
    "word": "innocence",
    "transcription": "[ˈɪnəsəns]",
    "translation": "невинность"
  },
  {
    "index": 523,
    "word": "curious",
    "transcription": "[ˈkjʊərɪəs]",
    "translation": "любопытный"
  },
  {
    "index": 524,
    "word": "curiosity",
    "transcription": "[ˌkjʊərɪˈɒsɪti]",
    "translation": "любопытство"
  },
  {
    "index": 525,
    "word": "well",
    "transcription": "[wɛl]",
    "translation": "колодец"
  },
  {
    "index": 526,
    "word": "environment",
    "transcription": "[ɪnˈvaɪərənmənt]",
    "translation": "среда, окружение"
  },
  {
    "index": 527,
    "word": "environmental",
    "transcription": "[ɪnˌvaɪərənˈmɛntl]",
    "translation": "экологическая"
  },
  {
    "index": 528,
    "word": "clear",
    "transcription": "[klɪə]",
    "translation": "ясный, чистый (пр. и перен.)"
  },
  {
    "index": 529,
    "word": "clearer",
    "transcription": "[ˈklɪərə]",
    "translation": "очиститель"
  },
  {
    "index": 530,
    "word": "unclear",
    "transcription": "[ʌnˈklɪə]",
    "translation": "не понятно"
  },
  {
    "index": 531,
    "word": "clearance",
    "transcription": "[ˈklɪərəns]",
    "translation": "зазор"
  },
  {
    "index": 532,
    "word": "envelope",
    "transcription": "[ˈɛnvələʊp]",
    "translation": "конверт"
  },
  {
    "index": 533,
    "word": "fill in",
    "transcription": "[fɪlɪn]",
    "translation": "заполнить"
  },
  {
    "index": 534,
    "word": "fill out",
    "transcription": "[fɪlaʊt]",
    "translation": "заполнять"
  },
  {
    "index": 535,
    "word": "see off",
    "transcription": "[siːɒf]",
    "translation": "провожать (в путь)"
  },
  {
    "index": 536,
    "word": "see out",
    "transcription": "[siːaʊt]",
    "translation": "проводить (до выхода)"
  },
  {
    "index": 537,
    "word": "credible",
    "transcription": "[ˈkrɛdəbl]",
    "translation": "заслуживающий доверия"
  },
  {
    "index": 538,
    "word": "credibility",
    "transcription": "[ˌkrədɪˈbɪlɪti]",
    "translation": "правдоподобие"
  },
  {
    "index": 539,
    "word": "respond",
    "transcription": "[rɪsˈpɒnd]",
    "translation": "отвечать"
  },
  {
    "index": 540,
    "word": "respondent",
    "transcription": "[rɪsˈpɒndənt]",
    "translation": "тот, кто отвечает"
  },
  {
    "index": 541,
    "word": "gain",
    "transcription": "[geɪn]",
    "translation": "получать, выигрывать"
  },
  {
    "index": 542,
    "word": "anymore",
    "transcription": "[ˌɛniˈmɔː]",
    "translation": "больше не"
  },
  {
    "index": 543,
    "word": "urgent",
    "transcription": "[ˈɜːʤənt]",
    "translation": "срочный"
  },
  {
    "index": 544,
    "word": "urgency",
    "transcription": "[ˈɜːʤənsi]",
    "translation": "острая необходимость"
  },
  {
    "index": 545,
    "word": "honey",
    "transcription": "[ˈhʌni]",
    "translation": "мёд"
  },
  {
    "index": 546,
    "word": "match",
    "transcription": "[mæʧ]",
    "translation": "соответствие, нечто соответствующее"
  },
  {
    "index": 547,
    "word": "mismatch",
    "transcription": "[ˌmɪsˈmæʧ]",
    "translation": "несоответствие"
  },
  {
    "index": 548,
    "word": "equip",
    "transcription": "[ɪˈkwɪp]",
    "translation": "оснащать, снаряжать"
  },
  {
    "index": 549,
    "word": "equipment",
    "transcription": "[ɪˈkwɪpmənt]",
    "translation": "оборудование"
  },
  {
    "index": 550,
    "word": "bump",
    "transcription": "[bʌmp]",
    "translation": "шишка, выпуклость"
  },
  {
    "index": 551,
    "word": "island",
    "transcription": "[ˈaɪlənd]",
    "translation": "остров"
  },
  {
    "index": 552,
    "word": "hand over",
    "transcription": "[hændˈəʊvə]",
    "translation": "передать"
  },
  {
    "index": 553,
    "word": "proper",
    "transcription": "[ˈprɒpə]",
    "translation": "правильный, надлежащий"
  },
  {
    "index": 554,
    "word": "properly",
    "transcription": "[ˈprɒpəli]",
    "translation": "должным образом"
  },
  {
    "index": 555,
    "word": "improper",
    "transcription": "[ɪmˈprɒpə]",
    "translation": "неподходящий"
  },
  {
    "index": 556,
    "word": "enhance",
    "transcription": "[ɪnˈhɑːns]",
    "translation": "повысить, усилить, расширить"
  },
  {
    "index": 557,
    "word": "enhancement",
    "transcription": "[ɪnˈhɑːnsmənt]",
    "translation": "усиление"
  },
  {
    "index": 558,
    "word": "nuclear",
    "transcription": "[ˈnjuːklɪə]",
    "translation": "ядерный"
  },
  {
    "index": 559,
    "word": "tournament",
    "transcription": "[ˈtʊənəmənt]",
    "translation": "турнир"
  },
  {
    "index": 560,
    "word": "stem",
    "transcription": "[stɛm]",
    "translation": "стебель"
  },
  {
    "index": 561,
    "word": "inner",
    "transcription": "[ˈɪnə]",
    "translation": "внутренний"
  },
  {
    "index": 562,
    "word": "outer",
    "transcription": "[ˈaʊtə]",
    "translation": "внешний"
  },
  {
    "index": 563,
    "word": "inspire",
    "transcription": "[ɪnˈspaɪə]",
    "translation": "вдохновить, внушить"
  },
  {
    "index": 564,
    "word": "inspiration",
    "transcription": "[ˌɪnspəˈreɪʃən]",
    "translation": "вдохновение"
  },
  {
    "index": 565,
    "word": "inspirational",
    "transcription": "[ˌɪnspəˈreɪʃən(ə)l]",
    "translation": "вдохновляющий"
  },
  {
    "index": 566,
    "word": "spare",
    "transcription": "[speə]",
    "translation": "щадить, избавить"
  },
  {
    "index": 567,
    "word": "capable",
    "transcription": "[ˈkeɪpəbl]",
    "translation": "способный к ч-л."
  },
  {
    "index": 568,
    "word": "incapable",
    "transcription": "[ɪnˈkeɪpəbl]",
    "translation": "неспособный"
  },
  {
    "index": 569,
    "word": "capability",
    "transcription": "[ˌkeɪpəˈbɪlɪti]",
    "translation": "возможность"
  },
  {
    "index": 570,
    "word": "dry up",
    "transcription": "[draɪʌp]",
    "translation": "пересохнуть, иссякнуть"
  },
  {
    "index": 571,
    "word": "brick",
    "transcription": "[brɪk]",
    "translation": "кирпич"
  },
  {
    "index": 572,
    "word": "bricklayer",
    "transcription": "[ˈbrɪkˌleɪə]",
    "translation": "каменщик"
  },
  {
    "index": 573,
    "word": "brickwork",
    "transcription": "[ˈbrɪkwɜːk]",
    "translation": "кирпичная кладка"
  },
  {
    "index": 574,
    "word": "move",
    "transcription": "[muːv]",
    "translation": "переезжать"
  },
  {
    "index": 575,
    "word": "garlic",
    "transcription": "[ˈgɑːlɪk]",
    "translation": "чеснок"
  },
  {
    "index": 576,
    "word": "Christmas",
    "transcription": "[ˈkrɪsməs]",
    "translation": "Рождество"
  },
  {
    "index": 577,
    "word": "trial",
    "transcription": "[ˈtraɪəl]",
    "translation": "испытание, пробный"
  },
  {
    "index": 578,
    "word": "nightmare",
    "transcription": "[ˈnaɪtmeə]",
    "translation": "кошмар"
  },
  {
    "index": 579,
    "word": "plant",
    "transcription": "[plɑːnt]",
    "translation": "растение, сажать"
  },
  {
    "index": 580,
    "word": "planting - посадка",
    "transcription": "[ˈplɑːntɪŋ-посадка]",
    "translation": "посадка - посадка"
  },
  {
    "index": 581,
    "word": "plantation",
    "transcription": "[plænˈteɪʃən]",
    "translation": "плантация"
  },
  {
    "index": 582,
    "word": "resolute",
    "transcription": "[ˈrɛzəluːt]",
    "translation": "решительный, твёрдый"
  },
  {
    "index": 583,
    "word": "resolution",
    "transcription": "[ˌrɛzəˈluːʃən]",
    "translation": "разрешающая способность"
  },
  {
    "index": 584,
    "word": "victim",
    "transcription": "[ˈvɪktɪm]",
    "translation": "жертва"
  },
  {
    "index": 585,
    "word": "victimize",
    "transcription": "[ˈvɪktɪmaɪz]",
    "translation": "делать жертвой"
  },
  {
    "index": 586,
    "word": "appeal",
    "transcription": "[əˈpiːl]",
    "translation": "обращаться, взывать"
  },
  {
    "index": 587,
    "word": "appealing",
    "transcription": "[əˈpiːlɪŋ]",
    "translation": "привлекательный, трогательный"
  },
  {
    "index": 588,
    "word": "barely",
    "transcription": "[ˈbeəli]",
    "translation": "едва, еле-еле"
  },
  {
    "index": 589,
    "word": "issue",
    "transcription": "[ˈɪʃuː]",
    "translation": "издать, выпустить, выпуск"
  },
  {
    "index": 590,
    "word": "per",
    "transcription": "[pɜː]",
    "translation": "(кол-во) на (единицу)"
  },
  {
    "index": 591,
    "word": "alter",
    "transcription": "[ˈɔːltə]",
    "translation": "изменять"
  },
  {
    "index": 592,
    "word": "alteration",
    "transcription": "[ˌɔːltəˈreɪʃ(ə)n]",
    "translation": "внесение изменений"
  },
  {
    "index": 593,
    "word": "alterable",
    "transcription": "[ˈɔːltərəbl]",
    "translation": "изменяемый"
  },
  {
    "index": 594,
    "word": "unaltered",
    "transcription": "[ʌnˈɔːltəd]",
    "translation": "неизменный"
  },
  {
    "index": 595,
    "word": "unalterable",
    "transcription": "[ʌnˈɔːltərəbl]",
    "translation": "непреложный"
  },
  {
    "index": 596,
    "word": "pound",
    "transcription": "[paʊnd]",
    "translation": "фунт"
  },
  {
    "index": 597,
    "word": "seat",
    "transcription": "[siːt]",
    "translation": "место, сиденье"
  },
  {
    "index": 598,
    "word": "candy",
    "transcription": "[ˈkændi]",
    "translation": "конфеты"
  },
  {
    "index": 599,
    "word": "meanwhile",
    "transcription": "[ˈmiːnˈwaɪl]",
    "translation": "тем временем"
  },
  {
    "index": 600,
    "word": "railway",
    "transcription": "[ˈreɪlweɪ]",
    "translation": "железная дорога"
  },
  {
    "index": 601,
    "word": "railroad",
    "transcription": "[ˈreɪlrəʊd]",
    "translation": "железная дорога"
  },
  {
    "index": 602,
    "word": "closet",
    "transcription": "[ˈklɒzɪt]",
    "translation": "стенной шкаф"
  },
  {
    "index": 603,
    "word": "violate",
    "transcription": "[ˈvaɪəleɪt]",
    "translation": "нарушать"
  },
  {
    "index": 604,
    "word": "violation",
    "transcription": "[ˌvaɪəˈleɪʃən]",
    "translation": "нарушение"
  },
  {
    "index": 605,
    "word": "violator",
    "transcription": "[ˈvaɪəleɪtə]",
    "translation": "нарушитель, преступник"
  },
  {
    "index": 606,
    "word": "front",
    "transcription": "[frʌnt]",
    "translation": "перед, передний"
  },
  {
    "index": 607,
    "word": "in front of",
    "transcription": "[ɪnfrʌntɒv]",
    "translation": "перед"
  },
  {
    "index": 608,
    "word": "frontal",
    "transcription": "[ˈfrʌntl]",
    "translation": "лобовой"
  },
  {
    "index": 609,
    "word": "take care",
    "transcription": "[teɪkkeə]",
    "translation": "позаботиться, заняться"
  },
  {
    "index": 610,
    "word": "caretaker",
    "transcription": "[ˈkeəˌteɪkə]",
    "translation": "смотритель"
  },
  {
    "index": 611,
    "word": "authorities",
    "transcription": "[ɔːˈθɒrɪtiz]",
    "translation": "органы власти"
  },
  {
    "index": 612,
    "word": "matter",
    "transcription": "[ˈmætə]",
    "translation": "дело, вопрос"
  },
  {
    "index": 613,
    "word": "thank",
    "transcription": "[θæŋk]",
    "translation": "благодарить"
  },
  {
    "index": 614,
    "word": "thankful",
    "transcription": "[ˈθæŋkfʊl]",
    "translation": "благодарный"
  },
  {
    "index": 615,
    "word": "thankless",
    "transcription": "[ˈθæŋklɪs]",
    "translation": "неблагодарный"
  },
  {
    "index": 616,
    "word": "get through",
    "transcription": "[gɛtθruː]",
    "translation": "дозвониться"
  },
  {
    "index": 617,
    "word": "cup",
    "transcription": "[kʌp]",
    "translation": "чашка, кружка, кубок"
  },
  {
    "index": 618,
    "word": "take off",
    "transcription": "[teɪkɒf]",
    "translation": "снять"
  },
  {
    "index": 619,
    "word": "devote",
    "transcription": "[dɪˈvəʊt]",
    "translation": "посвятить, уделить"
  },
  {
    "index": 620,
    "word": "devotion",
    "transcription": "[dɪˈvəʊʃən]",
    "translation": "преданность"
  },
  {
    "index": 621,
    "word": "assume",
    "transcription": "[əˈsjuːm]",
    "translation": "принимать на себя"
  },
  {
    "index": 622,
    "word": "assumption",
    "transcription": "[əˈsʌmpʃ(ə)n]",
    "translation": "принятие"
  },
  {
    "index": 623,
    "word": "array",
    "transcription": "[əˈreɪ]",
    "translation": "ряд, порядок, строй"
  },
  {
    "index": 624,
    "word": "shelter",
    "transcription": "[ˈʃɛltə]",
    "translation": "укрытие, убежище"
  },
  {
    "index": 625,
    "word": "contrary",
    "transcription": "[ˈkɒntrəri]",
    "translation": "противоположный, вопреки"
  },
  {
    "index": 626,
    "word": "diminish",
    "transcription": "[dɪˈmɪnɪʃ]",
    "translation": "уменьшаться"
  },
  {
    "index": 627,
    "word": "diminution",
    "transcription": "[ˌdɪmɪˈnjuːʃən]",
    "translation": "снижение, сокращение"
  },
  {
    "index": 628,
    "word": "offer",
    "transcription": "[ˈɒfə]",
    "translation": "предлагать, предложение"
  },
  {
    "index": 629,
    "word": "set out",
    "transcription": "[sɛtaʊt]",
    "translation": "разъяснять"
  },
  {
    "index": 630,
    "word": "complain",
    "transcription": "[kəmˈpleɪn]",
    "translation": "жаловаться"
  },
  {
    "index": 631,
    "word": "complaint",
    "transcription": "[kəmˈpleɪnt]",
    "translation": "жалоба"
  },
  {
    "index": 632,
    "word": "favor (favour)",
    "transcription": "[ˈfeɪvə]",
    "translation": "услуга"
  },
  {
    "index": 633,
    "word": "commitment",
    "transcription": "[kəˈmɪtmənt]",
    "translation": "приверженность"
  },
  {
    "index": 634,
    "word": "intervene",
    "transcription": "[ˌɪntə(ː)ˈviːn]",
    "translation": "вмешиваться"
  },
  {
    "index": 635,
    "word": "intervention",
    "transcription": "[ˌɪntə(ː)ˈvɛnʃən]",
    "translation": "вмешательство"
  },
  {
    "index": 636,
    "word": "error",
    "transcription": "[ˈɛrə]",
    "translation": "ошибка"
  },
  {
    "index": 637,
    "word": "hike",
    "transcription": "[haɪk]",
    "translation": "поход, ходить в поход"
  },
  {
    "index": 638,
    "word": "hitchhike",
    "transcription": "[ˈhɪʧˌhaɪk]",
    "translation": "автостоп"
  },
  {
    "index": 639,
    "word": "blink",
    "transcription": "[blɪŋk]",
    "translation": "мерцать, мигать"
  },
  {
    "index": 640,
    "word": "strip",
    "transcription": "[strɪp]",
    "translation": "полоса, лента"
  },
  {
    "index": 641,
    "word": "curl",
    "transcription": "[kɜːl]",
    "translation": "скручивать, клубиться, завиток"
  },
  {
    "index": 642,
    "word": "curly",
    "transcription": "[ˈkɜːli]",
    "translation": "кудрявый"
  },
  {
    "index": 643,
    "word": "concrete",
    "transcription": "[ˈkɒnkriːt]",
    "translation": "бетон, бетонировать"
  },
  {
    "index": 644,
    "word": "fold",
    "transcription": "[fəʊld]",
    "translation": "сворачивать, складывать"
  },
  {
    "index": 645,
    "word": "science",
    "transcription": "[ˈsaɪəns]",
    "translation": "наука"
  },
  {
    "index": 646,
    "word": "scientific",
    "transcription": "[ˌsaɪənˈtɪfɪk]",
    "translation": "научный"
  },
  {
    "index": 647,
    "word": "scientist",
    "transcription": "[ˈsaɪəntɪst]",
    "translation": "ученый"
  },
  {
    "index": 648,
    "word": "contest",
    "transcription": "[ˈkɒntɛst]",
    "translation": "соревнование, конкурс"
  },
  {
    "index": 649,
    "word": "contestant",
    "transcription": "",
    "translation": "конкурсант"
  },
  {
    "index": 650,
    "word": "bond",
    "transcription": "[bɒnd]",
    "translation": "связь, узы, соединение"
  },
  {
    "index": 651,
    "word": "retreat",
    "transcription": "[rɪˈtriːt]",
    "translation": "отступать"
  },
  {
    "index": 652,
    "word": "suspend",
    "transcription": "[səsˈpɛnd]",
    "translation": "приостановить, подвесить"
  },
  {
    "index": 653,
    "word": "suspension",
    "transcription": "[səsˈpɛnʃən]",
    "translation": "приостановление"
  },
  {
    "index": 654,
    "word": "suspense",
    "transcription": "[səsˈpɛns]",
    "translation": "подвешенность, неопределённость"
  },
  {
    "index": 655,
    "word": "suspended",
    "transcription": "[səsˈpɛndɪd]",
    "translation": "отсроченный, условный (приговор)"
  },
  {
    "index": 656,
    "word": "fry",
    "transcription": "[fraɪ]",
    "translation": "жарить"
  },
  {
    "index": 657,
    "word": "domestic",
    "transcription": "[dəʊˈmɛstɪk]",
    "translation": "домашний"
  },
  {
    "index": 658,
    "word": "domesticate",
    "transcription": "[dəʊˈmɛstɪkeɪt]",
    "translation": "приручить, одомашнить"
  },
  {
    "index": 659,
    "word": "ease",
    "transcription": "[iːz]",
    "translation": "лёгкость, облегчать"
  },
  {
    "index": 660,
    "word": "uneasy",
    "transcription": "[ʌnˈiːzi]",
    "translation": "тревожный"
  },
  {
    "index": 661,
    "word": "uneasiness",
    "transcription": "[ʌnˈiːzɪnɪs]",
    "translation": "тревожность"
  },
  {
    "index": 662,
    "word": "graduate",
    "transcription": "[ˈgrædjʊət]",
    "translation": "выпускник, выпускаться"
  },
  {
    "index": 663,
    "word": "undergraduate",
    "transcription": "[ˌʌndəˈgrædjʊɪt]",
    "translation": "студент"
  },
  {
    "index": 664,
    "word": "graduation",
    "transcription": "[ˌgrædjʊˈeɪʃən]",
    "translation": "градация"
  },
  {
    "index": 665,
    "word": "postgraduate",
    "transcription": "[ˌpəʊstˈgrædjʊɪt]",
    "translation": "аспирант"
  },
  {
    "index": 666,
    "word": "patch",
    "transcription": "[pæʧ]",
    "translation": "заплатка, латать"
  },
  {
    "index": 667,
    "word": "tire (tyre)",
    "transcription": "[ˈtaɪə]",
    "translation": "шина"
  },
  {
    "index": 668,
    "word": "unless",
    "transcription": "[ənˈlɛs]",
    "translation": "если не"
  },
  {
    "index": 669,
    "word": "shift",
    "transcription": "[ʃɪft]",
    "translation": "сменить, сдвинуть"
  },
  {
    "index": 670,
    "word": "shifty",
    "transcription": "[ˈʃɪfti]",
    "translation": "ловкий, изворотливый, нечестный"
  },
  {
    "index": 671,
    "word": "hood",
    "transcription": "[hʊd]",
    "translation": "капот, кожух"
  },
  {
    "index": 672,
    "word": "waste",
    "transcription": "[weɪst]",
    "translation": "тратить (впустую)"
  },
  {
    "index": 673,
    "word": "wasteful",
    "transcription": "[ˈweɪstfʊl]",
    "translation": "расточительный, разорительный"
  },
  {
    "index": 674,
    "word": "notice",
    "transcription": "[ˈnəʊtɪs]",
    "translation": "заметить"
  },
  {
    "index": 675,
    "word": "unnoticed",
    "transcription": "[ʌnˈnəʊtɪst]",
    "translation": "незамеченный"
  },
  {
    "index": 676,
    "word": "enormous",
    "transcription": "[ɪˈnɔːməs]",
    "translation": "огромный"
  },
  {
    "index": 677,
    "word": "hook",
    "transcription": "[hʊk]",
    "translation": "крюк, зацеплять"
  },
  {
    "index": 678,
    "word": "hooked",
    "transcription": "[hʊkt]",
    "translation": "крючковатый"
  },
  {
    "index": 679,
    "word": "partisan",
    "transcription": "[ˌpɑːtɪˈzæn]",
    "translation": "сторонник"
  },
  {
    "index": 680,
    "word": "partisanship",
    "transcription": "[ˌpɑːtɪˈzænʃɪp]",
    "translation": "пристрастность"
  },
  {
    "index": 681,
    "word": "angry",
    "transcription": "[ˈæŋgri]",
    "translation": "злой"
  },
  {
    "index": 682,
    "word": "measure",
    "transcription": "[ˈmɛʒə]",
    "translation": "мера, мероприятие"
  },
  {
    "index": 683,
    "word": "doubt",
    "transcription": "[daʊt]",
    "translation": "сомневаться, сомнение"
  },
  {
    "index": 684,
    "word": "doubtful",
    "transcription": "[ˈdaʊtfʊl]",
    "translation": "сомнительный"
  },
  {
    "index": 685,
    "word": "doubtless",
    "transcription": "[ˈdaʊtlɪs]",
    "translation": "несомненный"
  },
  {
    "index": 686,
    "word": "stiff",
    "transcription": "[stɪf]",
    "translation": "жёсткий, негнущийся"
  },
  {
    "index": 687,
    "word": "stiffness",
    "transcription": "[ˈstɪfnəs]",
    "translation": "жесткость"
  },
  {
    "index": 688,
    "word": "stiffen",
    "transcription": "[ˈstɪfn]",
    "translation": "деревенеть"
  },
  {
    "index": 689,
    "word": "preach",
    "transcription": "[priːʧ]",
    "translation": "проповедовать"
  },
  {
    "index": 690,
    "word": "preacher",
    "transcription": "[ˈpriːʧə]",
    "translation": "проповедник"
  },
  {
    "index": 691,
    "word": "come off",
    "transcription": "[kʌmɒf]",
    "translation": "выйти, получиться"
  },
  {
    "index": 692,
    "word": "come of",
    "transcription": "[kʌmɒv]",
    "translation": "получиться (как результат)"
  },
  {
    "index": 693,
    "word": "rail",
    "transcription": "[reɪl]",
    "translation": "рельс, перила"
  },
  {
    "index": 694,
    "word": "railing",
    "transcription": "[ˈreɪlɪŋ]",
    "translation": "перила"
  },
  {
    "index": 695,
    "word": "derail",
    "transcription": "[dɪˈreɪl]",
    "translation": "сходить с рельс"
  },
  {
    "index": 696,
    "word": "male",
    "transcription": "[meɪl]",
    "translation": "мужской"
  },
  {
    "index": 697,
    "word": "female",
    "transcription": "[ˈfiːmeɪl]",
    "translation": "женский"
  },
  {
    "index": 698,
    "word": "proof",
    "transcription": "[pruːf]",
    "translation": "доказательство (неисч.)"
  },
  {
    "index": 699,
    "word": "produce",
    "transcription": "[ˈprɒdjuːs]",
    "translation": "производить"
  },
  {
    "index": 700,
    "word": "producer",
    "transcription": "[prəˈdjuːsə]",
    "translation": "производитель"
  },
  {
    "index": 701,
    "word": "production",
    "transcription": "[prəˈdʌkʃən]",
    "translation": "производство"
  },
  {
    "index": 702,
    "word": "matter",
    "transcription": "[ˈmætə]",
    "translation": "иметь значение"
  },
  {
    "index": 703,
    "word": "tag",
    "transcription": "[tæg]",
    "translation": "этикетка, ярлык"
  },
  {
    "index": 704,
    "word": "subtle",
    "transcription": "[ˈsʌtl]",
    "translation": "тонкий, неуловимый"
  },
  {
    "index": 705,
    "word": "subtleness",
    "transcription": "[ˈsʌtlnəs]",
    "translation": "тонкость"
  },
  {
    "index": 706,
    "word": "subtlety",
    "transcription": "[ˈsʌtlti]",
    "translation": "тонкость"
  },
  {
    "index": 707,
    "word": "nurse",
    "transcription": "[nɜːs]",
    "translation": "медсестра, нянька"
  },
  {
    "index": 708,
    "word": "nursing",
    "transcription": "[ˈnɜːsɪŋ]",
    "translation": "уход"
  },
  {
    "index": 709,
    "word": "nursery",
    "transcription": "[ˈnɜːsəri]",
    "translation": "дет. ясли или питомник"
  },
  {
    "index": 710,
    "word": "wake (up)",
    "transcription": "[weɪk]",
    "translation": "просыпаться или будить"
  },
  {
    "index": 711,
    "word": "soil",
    "transcription": "[sɔɪl]",
    "translation": "почва"
  },
  {
    "index": 712,
    "word": "quiet",
    "transcription": "[ˈkwaɪət]",
    "translation": "тихий, спокойный, тишина"
  },
  {
    "index": 713,
    "word": "quietness",
    "transcription": "[ˈkwaɪətnɪs]",
    "translation": "спокойствие"
  },
  {
    "index": 714,
    "word": "quieten",
    "transcription": "[ˈkwaɪətn]",
    "translation": "успокаивать"
  },
  {
    "index": 715,
    "word": "represent",
    "transcription": "[ˌrɛprɪˈzɛnt]",
    "translation": "представлять"
  },
  {
    "index": 716,
    "word": "representative",
    "transcription": "[ˌrɛprɪˈzɛntətɪv]",
    "translation": "представитель"
  },
  {
    "index": 717,
    "word": "dispute",
    "transcription": "[dɪsˈpjuːt]",
    "translation": "спор, спорить"
  },
  {
    "index": 718,
    "word": "disputed",
    "transcription": "[dɪsˈpjuːtɪd]",
    "translation": "спорный"
  },
  {
    "index": 719,
    "word": "undisputed",
    "transcription": "[ˌʌndɪsˈpjuːtɪd]",
    "translation": "бесспорный, необсуждаемый"
  },
  {
    "index": 720,
    "word": "couch",
    "transcription": "[kaʊʧ]",
    "translation": "диван"
  },
  {
    "index": 721,
    "word": "trade",
    "transcription": "[treɪd]",
    "translation": "торговля, торговый"
  },
  {
    "index": 722,
    "word": "trader",
    "transcription": "[ˈtreɪdə]",
    "translation": "трейдер, торговец"
  },
  {
    "index": 723,
    "word": "affair",
    "transcription": "[əˈfeə]",
    "translation": "дело"
  },
  {
    "index": 724,
    "word": "term",
    "transcription": "[tɜːm]",
    "translation": "срок, период"
  },
  {
    "index": 725,
    "word": "long-term",
    "transcription": "[ˈlɒŋtɜːm]",
    "translation": "долгосрочный"
  },
  {
    "index": 726,
    "word": "short-term",
    "transcription": "[ʃɔːt-tɜːm]",
    "translation": "краткосрочный"
  },
  {
    "index": 727,
    "word": "give a ride",
    "transcription": "[gɪvəraɪd]",
    "translation": "подвезти"
  },
  {
    "index": 728,
    "word": "as well",
    "transcription": "[æzwɛl]",
    "translation": "также"
  },
  {
    "index": 729,
    "word": "twist",
    "transcription": "[twɪst]",
    "translation": "скручивать"
  },
  {
    "index": 730,
    "word": "twisted",
    "transcription": "[ˈtwɪstɪd]",
    "translation": "витой, закрученный, сплетённый"
  },
  {
    "index": 731,
    "word": "handle",
    "transcription": "[ˈhændl]",
    "translation": "рукоятка"
  },
  {
    "index": 732,
    "word": "remain",
    "transcription": "[rɪˈmeɪn]",
    "translation": "оставаться"
  },
  {
    "index": 733,
    "word": "take place",
    "transcription": "[teɪkpleɪs]",
    "translation": "происходить, бывать"
  },
  {
    "index": 734,
    "word": "upset",
    "transcription": "[ʌpˈsɛt]",
    "translation": "расстроенный, расстраивать"
  },
  {
    "index": 735,
    "word": "inspect",
    "transcription": "[ɪnˈspɛkt]",
    "translation": "проверять, осматривать"
  },
  {
    "index": 736,
    "word": "inspection",
    "transcription": "[ɪnˈspɛkʃən]",
    "translation": "осмотр"
  },
  {
    "index": 737,
    "word": "authorize",
    "transcription": "[ˈɔːθəraɪz]",
    "translation": "дать полномочия, поручение"
  },
  {
    "index": 738,
    "word": "authorized",
    "transcription": "[ˈɔːʌəraɪzd]",
    "translation": "уполномоченный, санкционированный"
  },
  {
    "index": 739,
    "word": "pigeon",
    "transcription": "[ˈpɪʤɪn]",
    "translation": "голубь"
  },
  {
    "index": 740,
    "word": "alert",
    "transcription": "[əˈlɜːt]",
    "translation": "тревога, бдительный"
  },
  {
    "index": 741,
    "word": "alertness",
    "transcription": "[əˈlɜːtnəs]",
    "translation": "настороженность"
  },
  {
    "index": 742,
    "word": "on the alert",
    "transcription": "[ɒnðiəˈlɜːt]",
    "translation": "начеку"
  },
  {
    "index": 743,
    "word": "increase",
    "transcription": "[ɪnˈkriːs]",
    "translation": "увеличивать(ся)"
  },
  {
    "index": 744,
    "word": "increase",
    "transcription": "[ˈɪnkriːs]",
    "translation": "увеличение"
  },
  {
    "index": 745,
    "word": "decrease",
    "transcription": "[diːˈkriːs]",
    "translation": "уменьшать(ся)"
  },
  {
    "index": 746,
    "word": "decrease",
    "transcription": "[ˈdiːkriːs]",
    "translation": "снижение"
  },
  {
    "index": 747,
    "word": "inquire",
    "transcription": "[ɪnˈkwaɪə]",
    "translation": "узнавать, интересоваться"
  },
  {
    "index": 748,
    "word": "inquiry",
    "transcription": "[ɪnˈkwaɪəri]",
    "translation": "запрос"
  },
  {
    "index": 749,
    "word": "false",
    "transcription": "[fɔːls]",
    "translation": "ложный, неверный"
  },
  {
    "index": 750,
    "word": "falsehood",
    "transcription": "[ˈfɔːlshʊd]",
    "translation": "ложность"
  },
  {
    "index": 751,
    "word": "falseness",
    "transcription": "[ˈfɔːlsnɪs]",
    "translation": "фальшь"
  },
  {
    "index": 752,
    "word": "either",
    "transcription": "[ˈaɪðə]",
    "translation": "либо"
  },
  {
    "index": 753,
    "word": "echo",
    "transcription": "[ˈɛkəʊ]",
    "translation": "эхо, отголосок, отражаться"
  },
  {
    "index": 754,
    "word": "stack",
    "transcription": "[stæk]",
    "translation": "стопка, куча, складывать"
  },
  {
    "index": 755,
    "word": "label",
    "transcription": "[ˈleɪbl]",
    "translation": "метка, ярлык, метить"
  },
  {
    "index": 756,
    "word": "neither",
    "transcription": "[ˈnaɪðə]",
    "translation": "ни один из двух"
  },
  {
    "index": 757,
    "word": "sale",
    "transcription": "[seɪl]",
    "translation": "продажа, сбыт"
  },
  {
    "index": 758,
    "word": "resail",
    "transcription": "[ˌriːˈseɪl]",
    "translation": "resail"
  },
  {
    "index": 759,
    "word": "bat",
    "transcription": "[bæt]",
    "translation": "бита"
  },
  {
    "index": 760,
    "word": "flat",
    "transcription": "[flæt]",
    "translation": "плоский, ровный"
  },
  {
    "index": 761,
    "word": "flatten",
    "transcription": "[ˈflætn]",
    "translation": "расплющивать"
  },
  {
    "index": 762,
    "word": "limit",
    "transcription": "[ˈlɪmɪt]",
    "translation": "ограничивать, ограничение"
  },
  {
    "index": 763,
    "word": "head off",
    "transcription": "[hɛdɒf]",
    "translation": "выйти, отправиться"
  },
  {
    "index": 764,
    "word": "get off",
    "transcription": "[gɛtɒf]",
    "translation": "уходить"
  },
  {
    "index": 765,
    "word": "go off",
    "transcription": "[gəʊɒf]",
    "translation": "уходить"
  },
  {
    "index": 766,
    "word": "drive off",
    "transcription": "[draɪvɒf]",
    "translation": "уехать (на машине)"
  },
  {
    "index": 767,
    "word": "walk off",
    "transcription": "[wɔːkɒf]",
    "translation": "уходить"
  },
  {
    "index": 768,
    "word": "rural",
    "transcription": "[ˈrʊərəl]",
    "translation": "сельский"
  },
  {
    "index": 769,
    "word": "compel",
    "transcription": "[kəmˈpɛl]",
    "translation": "вынуждать, заставлять"
  },
  {
    "index": 770,
    "word": "boost",
    "transcription": "[buːst]",
    "translation": "повышать, усиливать"
  },
  {
    "index": 771,
    "word": "booster",
    "transcription": "[ˈbuːstə]",
    "translation": "ускоритель, усилитель"
  },
  {
    "index": 772,
    "word": "grin",
    "transcription": "[grɪn]",
    "translation": "ухмыляться, ухмылка, оскал"
  },
  {
    "index": 773,
    "word": "tremendous",
    "transcription": "[trɪˈmɛndəs]",
    "translation": "громадный, страшный"
  },
  {
    "index": 774,
    "word": "pad",
    "transcription": "[pæd]",
    "translation": "подушечка пальца, лапы"
  },
  {
    "index": 775,
    "word": "anticipate",
    "transcription": "[ænˈtɪsɪpeɪt]",
    "translation": "ожидать"
  },
  {
    "index": 776,
    "word": "anticipation",
    "transcription": "[ænˌtɪsɪˈpeɪʃ(ə)n]",
    "translation": "ожидание"
  },
  {
    "index": 777,
    "word": "pattern",
    "transcription": "[ˈpætən]",
    "translation": "шаблон, образец"
  },
  {
    "index": 778,
    "word": "set smb up with",
    "transcription": "[sɛtsmbʌpwɪð]",
    "translation": "устроить, организовать"
  },
  {
    "index": 779,
    "word": "oven",
    "transcription": "[ˈʌvn]",
    "translation": "печь, духовка"
  },
  {
    "index": 780,
    "word": "microwave oven",
    "transcription": "[ˈmaɪkrəʊweɪvˈʌvn]",
    "translation": "микроволновая печь"
  },
  {
    "index": 781,
    "word": "anxious",
    "transcription": "[ˈæŋkʃəs]",
    "translation": "озабоченный, встревоженный"
  },
  {
    "index": 782,
    "word": "shift",
    "transcription": "[ʃɪft]",
    "translation": "смена (на работе)"
  },
  {
    "index": 783,
    "word": "meal",
    "transcription": "[miːl]",
    "translation": "еда"
  },
  {
    "index": 784,
    "word": "in advance",
    "transcription": "[ɪnədˈvɑːns]",
    "translation": "заранее"
  },
  {
    "index": 785,
    "word": "further",
    "transcription": "[ˈfɜːðə]",
    "translation": "дальнейший, далее"
  },
  {
    "index": 786,
    "word": "furthermore",
    "transcription": "[ˈfɜːðəˈmɔː]",
    "translation": "более того"
  },
  {
    "index": 787,
    "word": "furthest",
    "transcription": "[ˈfɜːðɪst]",
    "translation": "дальше всего"
  },
  {
    "index": 788,
    "word": "return",
    "transcription": "[rɪˈtɜːn]",
    "translation": "возвращаться"
  },
  {
    "index": 789,
    "word": "chop down",
    "transcription": "[ʧɒpdaʊn]",
    "translation": "срубить (дерево)"
  },
  {
    "index": 790,
    "word": "chop up",
    "transcription": "[ʧɒpʌp]",
    "translation": "порезать (на кусочки)"
  },
  {
    "index": 791,
    "word": "cut up",
    "transcription": "[kʌtʌp]",
    "translation": "порезать"
  },
  {
    "index": 792,
    "word": "prior",
    "transcription": "[ˈpraɪə]",
    "translation": "предварительный, предшествующий"
  },
  {
    "index": 793,
    "word": "silk",
    "transcription": "[sɪlk]",
    "translation": "шёлк, шёлковый"
  },
  {
    "index": 794,
    "word": "silky",
    "transcription": "[ˈsɪlki]",
    "translation": "шелковистый"
  },
  {
    "index": 795,
    "word": "line",
    "transcription": "[laɪn]",
    "translation": "строка"
  },
  {
    "index": 796,
    "word": "lap",
    "transcription": "[læp]",
    "translation": "колени"
  },
  {
    "index": 797,
    "word": "bind (bound, bound)",
    "transcription": "[baɪnd]",
    "translation": "связывать"
  },
  {
    "index": 798,
    "word": "mean",
    "transcription": "[miːn]",
    "translation": "неважный, посредственный"
  },
  {
    "index": 799,
    "word": "reach",
    "transcription": "[riːʧ]",
    "translation": "достичь"
  },
  {
    "index": 800,
    "word": "reachable",
    "transcription": "[ˈriːʧəbl]",
    "translation": "достижимый"
  },
  {
    "index": 801,
    "word": "once",
    "transcription": "[wʌns]",
    "translation": "однажды, когда-либо"
  },
  {
    "index": 802,
    "word": "vice",
    "transcription": "[vaɪs]",
    "translation": "порок, недостаток"
  },
  {
    "index": 803,
    "word": "vicious",
    "transcription": "[ˈvɪʃəs]",
    "translation": "порочный"
  },
  {
    "index": 804,
    "word": "light (lit, lit)",
    "transcription": "[laɪt]",
    "translation": "зажигать"
  },
  {
    "index": 805,
    "word": "lighter",
    "transcription": "[ˈlaɪtə]",
    "translation": "зажигалка"
  },
  {
    "index": 806,
    "word": "occupy",
    "transcription": "[ˈɒkjʊpaɪ]",
    "translation": "занимать"
  },
  {
    "index": 807,
    "word": "according to",
    "transcription": "[əˈkɔːdɪŋtuː]",
    "translation": "в соответствии"
  },
  {
    "index": 808,
    "word": "accordingly",
    "transcription": "[əˈkɔːdɪŋli]",
    "translation": "соответственно"
  },
  {
    "index": 809,
    "word": "out loud",
    "transcription": "[aʊtlaʊd]",
    "translation": "вслух"
  },
  {
    "index": 810,
    "word": "alive",
    "transcription": "[əˈlaɪv]",
    "translation": "живой"
  },
  {
    "index": 811,
    "word": "startle",
    "transcription": "[ˈstɑːtl]",
    "translation": "испугать (неожиданностью)"
  },
  {
    "index": 812,
    "word": "startling",
    "transcription": "[ˈstɑːtlɪŋ]",
    "translation": "поразительный"
  },
  {
    "index": 813,
    "word": "get",
    "transcription": "[gɛt]",
    "translation": "становиться"
  },
  {
    "index": 814,
    "word": "catch (caught, caught)",
    "transcription": "[kæʧ]",
    "translation": "ловить"
  },
  {
    "index": 815,
    "word": "shame",
    "transcription": "[ʃeɪm]",
    "translation": "стыд, позор"
  },
  {
    "index": 816,
    "word": "shameful",
    "transcription": "[ˈʃeɪmfʊl]",
    "translation": "постыдный"
  },
  {
    "index": 817,
    "word": "shameless",
    "transcription": "[ˈʃeɪmlɪs]",
    "translation": "бесстыдный"
  },
  {
    "index": 818,
    "word": "challenge",
    "transcription": "[ˈʧælɪnʤ]",
    "translation": "вызов, необычная задача"
  },
  {
    "index": 819,
    "word": "challenging",
    "transcription": "[ˈʧælɪnʤɪŋ]",
    "translation": "манящий, перспективный"
  },
  {
    "index": 820,
    "word": "mixture",
    "transcription": "[ˈmɪksʧə]",
    "translation": "смесь"
  },
  {
    "index": 821,
    "word": "endure",
    "transcription": "[ɪnˈdjʊə]",
    "translation": "выдерживать"
  },
  {
    "index": 822,
    "word": "endurable",
    "transcription": "[ɪnˈdjʊərəbl]",
    "translation": "терпимый"
  },
  {
    "index": 823,
    "word": "unendurable",
    "transcription": "[ˌʌnɪnˈdjʊərəbl]",
    "translation": "нестерпимый"
  },
  {
    "index": 824,
    "word": "endurance",
    "transcription": "[ɪnˈdjʊərəns]",
    "translation": "выносливость"
  },
  {
    "index": 825,
    "word": "board",
    "transcription": "[bɔːd]",
    "translation": "совет, коллегия"
  },
  {
    "index": 826,
    "word": "boardroom",
    "transcription": "[ˈbɔːdrʊm]",
    "translation": "зал заседаний"
  },
  {
    "index": 827,
    "word": "mate",
    "transcription": "[meɪt]",
    "translation": "товарищ, компаньон"
  },
  {
    "index": 828,
    "word": "classmate",
    "transcription": "[ˈklɑːsmeɪt]",
    "translation": "одноклассник"
  },
  {
    "index": 829,
    "word": "roommate",
    "transcription": "[ˈruːmmeɪt]",
    "translation": "сосед по комнате"
  },
  {
    "index": 830,
    "word": "compound",
    "transcription": "[ˈkɒmpaʊnd]",
    "translation": "состав, составной"
  },
  {
    "index": 831,
    "word": "bless",
    "transcription": "[blɛs]",
    "translation": "благословлять"
  },
  {
    "index": 832,
    "word": "blessing",
    "transcription": "[ˈblɛsɪŋ]",
    "translation": "благословение"
  },
  {
    "index": 833,
    "word": "might",
    "transcription": "[maɪt]",
    "translation": "мощь"
  },
  {
    "index": 834,
    "word": "mighty",
    "transcription": "[ˈmaɪti]",
    "translation": "могущественный"
  },
  {
    "index": 835,
    "word": "almighty",
    "transcription": "[ɔːlˈmaɪti]",
    "translation": "всемогущий"
  },
  {
    "index": 836,
    "word": "variety",
    "transcription": "[vəˈraɪəti]",
    "translation": "разнообразие, множество"
  },
  {
    "index": 837,
    "word": "sole",
    "transcription": "[səʊl]",
    "translation": "единственный"
  },
  {
    "index": 838,
    "word": "comprehensive",
    "transcription": "[ˌkɒmprɪˈhɛnsɪv]",
    "translation": "исчерпывающий, всесторонний"
  },
  {
    "index": 839,
    "word": "heal",
    "transcription": "[hiːl]",
    "translation": "лечить, заживать"
  },
  {
    "index": 840,
    "word": "healer",
    "transcription": "[ˈhiːlə]",
    "translation": "целитель"
  },
  {
    "index": 841,
    "word": "pipe",
    "transcription": "[paɪp]",
    "translation": "труба"
  },
  {
    "index": 842,
    "word": "pipeline",
    "transcription": "[ˈpaɪplaɪn]",
    "translation": "трубопровод"
  },
  {
    "index": 843,
    "word": "pipework",
    "transcription": "[pipework]",
    "translation": "система трубопроводов"
  },
  {
    "index": 844,
    "word": "cool",
    "transcription": "[kuːl]",
    "translation": "прохладный, свежий"
  },
  {
    "index": 845,
    "word": "coolness",
    "transcription": "[ˈkuːlnɪs]",
    "translation": "прохлада, охлаждение"
  },
  {
    "index": 846,
    "word": "point",
    "transcription": "[pɔɪnt]",
    "translation": "точка"
  },
  {
    "index": 847,
    "word": "checkpoint",
    "transcription": "[ˈʧɛkpɔɪnt]",
    "translation": "контрольная точка, КПП"
  },
  {
    "index": 848,
    "word": "beg",
    "transcription": "[bɛg]",
    "translation": "просить"
  },
  {
    "index": 849,
    "word": "beggar",
    "transcription": "[ˈbɛgə]",
    "translation": "нищий"
  },
  {
    "index": 850,
    "word": "spell",
    "transcription": "[spɛl]",
    "translation": "заклинание, чары"
  },
  {
    "index": 851,
    "word": "paper",
    "transcription": "[ˈpeɪpə]",
    "translation": "бумага, документ"
  },
  {
    "index": 852,
    "word": "wallpapers",
    "transcription": "[ˈwɔːlˌpeɪpəz]",
    "translation": "обои"
  },
  {
    "index": 853,
    "word": "charm",
    "transcription": "[ʧɑːm]",
    "translation": "обаяние, очаровывать"
  },
  {
    "index": 854,
    "word": "charming",
    "transcription": "[ˈʧɑːmɪŋ]",
    "translation": "обаятельный"
  },
  {
    "index": 855,
    "word": "break out",
    "transcription": "[breɪkaʊt]",
    "translation": "вспыхнуть, разразиться"
  },
  {
    "index": 856,
    "word": "heat",
    "transcription": "[hiːt]",
    "translation": "тепло, нагревать"
  },
  {
    "index": 857,
    "word": "heating",
    "transcription": "[ˈhiːtɪŋ]",
    "translation": "отопление"
  },
  {
    "index": 858,
    "word": "heater",
    "transcription": "[ˈhiːtə]",
    "translation": "обогреватель, нагреватель"
  },
  {
    "index": 859,
    "word": "particular",
    "transcription": "[pəˈtɪkjʊlə]",
    "translation": "частный, конкретный"
  },
  {
    "index": 860,
    "word": "particularly",
    "transcription": "[pəˈtɪkjʊləli]",
    "translation": "в частности"
  },
  {
    "index": 861,
    "word": "score",
    "transcription": "[skɔː]",
    "translation": "счёт, очко, балл"
  },
  {
    "index": 862,
    "word": "combine",
    "transcription": "[ˈkɒmbaɪn]",
    "translation": "соединять(ся)"
  },
  {
    "index": 863,
    "word": "combination",
    "transcription": "[ˌkɒmbɪˈneɪʃən]",
    "translation": "сочетание"
  },
  {
    "index": 864,
    "word": "mill",
    "transcription": "[mɪl]",
    "translation": "мельница или фабрика"
  },
  {
    "index": 865,
    "word": "miller",
    "transcription": "[ˈmɪlə]",
    "translation": "мельник"
  },
  {
    "index": 866,
    "word": "windmill",
    "transcription": "[ˈwɪnmɪl]",
    "translation": "ветряная мельница"
  },
  {
    "index": 867,
    "word": "move over",
    "transcription": "[muːvˈəʊvə]",
    "translation": "подвинуться"
  },
  {
    "index": 868,
    "word": "rock",
    "transcription": "[rɒk]",
    "translation": "камень, скала"
  },
  {
    "index": 869,
    "word": "fair",
    "transcription": "[feə]",
    "translation": "светлый"
  },
  {
    "index": 870,
    "word": "fall for",
    "transcription": "[fɔːlfɔː]",
    "translation": "вестись"
  },
  {
    "index": 871,
    "word": "frank",
    "transcription": "[fræŋk]",
    "translation": "откровенный"
  },
  {
    "index": 872,
    "word": "frankness",
    "transcription": "[ˈfræŋknəs]",
    "translation": "откровенность"
  },
  {
    "index": 873,
    "word": "rip",
    "transcription": "[rɪp]",
    "translation": "рвать"
  },
  {
    "index": 874,
    "word": "arrive",
    "transcription": "[əˈraɪv]",
    "translation": "прибывать"
  },
  {
    "index": 875,
    "word": "arrival",
    "transcription": "[əˈraɪvəl]",
    "translation": "прибытие"
  },
  {
    "index": 876,
    "word": "amend",
    "transcription": "[əˈmɛnd]",
    "translation": "исправить, улучшить"
  },
  {
    "index": 877,
    "word": "amendment",
    "transcription": "[əˈmɛndmənt]",
    "translation": "поправка"
  },
  {
    "index": 878,
    "word": "crush",
    "transcription": "[krʌʃ]",
    "translation": "раздавливать, дробить"
  },
  {
    "index": 879,
    "word": "accident",
    "transcription": "[ˈæksɪdənt]",
    "translation": "случайность"
  },
  {
    "index": 880,
    "word": "accidental",
    "transcription": "[ˌæksɪˈdɛntl]",
    "translation": "случайный"
  },
  {
    "index": 881,
    "word": "facility",
    "transcription": "[fəˈsɪlɪti]",
    "translation": "сооружение, объект"
  },
  {
    "index": 882,
    "word": "means",
    "transcription": "[miːnz]",
    "translation": "средство"
  },
  {
    "index": 883,
    "word": "focus",
    "transcription": "[ˈfəʊkəs]",
    "translation": "сосредоточить (ся)"
  },
  {
    "index": 884,
    "word": "knock",
    "transcription": "[nɒk]",
    "translation": "стучать"
  },
  {
    "index": 885,
    "word": "give up",
    "transcription": "[gɪvʌp]",
    "translation": "отказаться, сдаться"
  },
  {
    "index": 886,
    "word": "give in",
    "transcription": "[gɪvɪn]",
    "translation": "давать в"
  },
  {
    "index": 887,
    "word": "bend (bent, bent)",
    "transcription": "[bɛnd]",
    "translation": "изгибать, изгиб"
  },
  {
    "index": 888,
    "word": "clarify",
    "transcription": "[ˈklærɪfaɪ]",
    "translation": "прояснять"
  },
  {
    "index": 889,
    "word": "clarification",
    "transcription": "[ˌklærɪfɪˈkeɪʃən]",
    "translation": "осветление"
  },
  {
    "index": 890,
    "word": "rescue",
    "transcription": "[ˈrɛskjuː]",
    "translation": "спасать, спасение"
  },
  {
    "index": 891,
    "word": "tackle",
    "transcription": "[ˈtækl]",
    "translation": "принадлежности, снаряжение"
  },
  {
    "index": 892,
    "word": "retire",
    "transcription": "[rɪˈtaɪə]",
    "translation": "уходить в отставку, на пенсию"
  },
  {
    "index": 893,
    "word": "retirement",
    "transcription": "[rɪˈtaɪəmənt]",
    "translation": "выход на пенсию"
  },
  {
    "index": 894,
    "word": "belly",
    "transcription": "[ˈbɛli]",
    "translation": "живот"
  },
  {
    "index": 895,
    "word": "get off",
    "transcription": "[gɛtɒf]",
    "translation": "выходить (из транспорта)"
  },
  {
    "index": 896,
    "word": "get in",
    "transcription": "[gɛtɪn]",
    "translation": "садиться (в транспорт)"
  },
  {
    "index": 897,
    "word": "approach",
    "transcription": "[əˈprəʊʧ]",
    "translation": "приближаться, подходить"
  },
  {
    "index": 898,
    "word": "slap",
    "transcription": "[slæp]",
    "translation": "шлёпать, пощечина"
  },
  {
    "index": 899,
    "word": "coat",
    "transcription": "[kəʊt]",
    "translation": "покрывать"
  },
  {
    "index": 900,
    "word": "coating",
    "transcription": "[ˈkəʊtɪŋ]",
    "translation": "покрытие"
  },
  {
    "index": 901,
    "word": "raise",
    "transcription": "[reɪz]",
    "translation": "поднять, повысить"
  },
  {
    "index": 902,
    "word": "uncle",
    "transcription": "[ˈʌŋkl]",
    "translation": "дядя"
  },
  {
    "index": 903,
    "word": "fluid",
    "transcription": "[ˈflu(ː)ɪd]",
    "translation": "жидкий, текучий"
  },
  {
    "index": 904,
    "word": "issue",
    "transcription": "[ˈɪʃuː]",
    "translation": "вопрос, проблема"
  },
  {
    "index": 905,
    "word": "educate",
    "transcription": "[ˈɛdju(ː)keɪt]",
    "translation": "воспитывать, обучать"
  },
  {
    "index": 906,
    "word": "education",
    "transcription": "[ˌɛdju(ː)ˈkeɪʃən]",
    "translation": "образование"
  },
  {
    "index": 907,
    "word": "past",
    "transcription": "[pɑːst]",
    "translation": "мимо"
  },
  {
    "index": 908,
    "word": "benefit",
    "transcription": "[ˈbɛnɪfɪt]",
    "translation": "польза, создавать пользу"
  },
  {
    "index": 909,
    "word": "beneficial",
    "transcription": "[ˌbɛnɪˈfɪʃəl]",
    "translation": "выгодный"
  },
  {
    "index": 910,
    "word": "beneficiary",
    "transcription": "[ˌbɛnɪˈfɪʃəri]",
    "translation": "выгодополучатель"
  },
  {
    "index": 911,
    "word": "none",
    "transcription": "[nʌn]",
    "translation": "никакой, ни один"
  },
  {
    "index": 912,
    "word": "undergo",
    "transcription": "[ˌʌndəˈgəʊ]",
    "translation": "пройти через, подвергнуться"
  },
  {
    "index": 913,
    "word": "rank",
    "transcription": "[ræŋk]",
    "translation": "ранг, разряд, звание"
  },
  {
    "index": 914,
    "word": "north",
    "transcription": "[nɔːθ]",
    "translation": "север, северный"
  },
  {
    "index": 915,
    "word": "northern",
    "transcription": "[ˈnɔːðən]",
    "translation": "северный"
  },
  {
    "index": 916,
    "word": "northerner",
    "transcription": "[ˈnɔːðənə]",
    "translation": "северянин"
  },
  {
    "index": 917,
    "word": "northward",
    "transcription": "[ˈnɔːθwəd]",
    "translation": "на север"
  },
  {
    "index": 918,
    "word": "tired",
    "transcription": "[ˈtaɪəd]",
    "translation": "усталый"
  },
  {
    "index": 919,
    "word": "tiredness",
    "transcription": "[ˈtaɪədnəs]",
    "translation": "усталость"
  },
  {
    "index": 920,
    "word": "fraud",
    "transcription": "[frɔːd]",
    "translation": "обман, мошенничество"
  },
  {
    "index": 921,
    "word": "fraudulent",
    "transcription": "[ˈfrɔːdjʊlənt]",
    "translation": "мошеннический"
  },
  {
    "index": 922,
    "word": "glass",
    "transcription": "[glɑːs]",
    "translation": "стекло или стакан"
  },
  {
    "index": 923,
    "word": "run after",
    "transcription": "[rʌnˈɑːftə]",
    "translation": "гнаться за"
  },
  {
    "index": 924,
    "word": "target",
    "transcription": "[ˈtɑːgɪt]",
    "translation": "цель, мишень"
  },
  {
    "index": 925,
    "word": "during",
    "transcription": "[ˈdjʊərɪŋ]",
    "translation": "во время"
  },
  {
    "index": 926,
    "word": "worldwide",
    "transcription": "[ˌwɜːldˈwaɪd]",
    "translation": "всемирный"
  },
  {
    "index": 927,
    "word": "oil",
    "transcription": "[ɔɪl]",
    "translation": "нефть"
  },
  {
    "index": 928,
    "word": "work out",
    "transcription": "[wɜːkaʊt]",
    "translation": "тренироваться"
  },
  {
    "index": 929,
    "word": "workout",
    "transcription": "[ˈwɜːkaʊt]",
    "translation": "тренировка"
  },
  {
    "index": 930,
    "word": "fashion",
    "transcription": "[ˈfæʃən]",
    "translation": "мода"
  },
  {
    "index": 931,
    "word": "fashionable",
    "transcription": "[ˈfæʃnəbl]",
    "translation": "модный"
  },
  {
    "index": 932,
    "word": "unfashionable",
    "transcription": "[ʌnˈfæʃnəbl]",
    "translation": "немодный"
  },
  {
    "index": 933,
    "word": "old-fashioned",
    "transcription": "[əʊld-ˈfæʃənd]",
    "translation": "старомодный"
  },
  {
    "index": 934,
    "word": "cabin",
    "transcription": "[ˈkæbɪn]",
    "translation": "хижина"
  },
  {
    "index": 935,
    "word": "instant",
    "transcription": "[ˈɪnstənt]",
    "translation": "мгновенние, мгновенный"
  },
  {
    "index": 936,
    "word": "instantly",
    "transcription": "[ˈɪnstəntli]",
    "translation": "мгновенно"
  },
  {
    "index": 937,
    "word": "instantaneous",
    "transcription": "[ˌɪnstənˈteɪniəs]",
    "translation": "мгновенный"
  },
  {
    "index": 938,
    "word": "yet",
    "transcription": "[jɛt]",
    "translation": "пока ещё (отриц.)"
  },
  {
    "index": 939,
    "word": "investigate",
    "transcription": "[ɪnˈvɛstɪgeɪt]",
    "translation": "расследовать"
  },
  {
    "index": 940,
    "word": "investigation",
    "transcription": "[ɪnˌvɛstɪˈgeɪʃən]",
    "translation": "расследование"
  },
  {
    "index": 941,
    "word": "investigator",
    "transcription": "[ɪnˈvɛstɪgeɪtə]",
    "translation": "следователь"
  },
  {
    "index": 942,
    "word": "state",
    "transcription": "[steɪt]",
    "translation": "государство"
  },
  {
    "index": 943,
    "word": "statesman",
    "transcription": "[ˈsteɪtsmən]",
    "translation": "государственный деятель"
  },
  {
    "index": 944,
    "word": "coach",
    "transcription": "[kəʊʧ]",
    "translation": "тренер"
  },
  {
    "index": 945,
    "word": "gun",
    "transcription": "[gʌn]",
    "translation": "огнестрельное оружие"
  },
  {
    "index": 946,
    "word": "shotgun",
    "transcription": "[ˈʃɒtgʌn]",
    "translation": "дробовик"
  },
  {
    "index": 947,
    "word": "machine gun",
    "transcription": "[məˈʃiːngʌn]",
    "translation": "пулемет"
  },
  {
    "index": 948,
    "word": "due to",
    "transcription": "[djuːtuː]",
    "translation": "из-за, в связи"
  },
  {
    "index": 949,
    "word": "wrap",
    "transcription": "[ræp]",
    "translation": "заворачивать"
  },
  {
    "index": 950,
    "word": "unwrap",
    "transcription": "[ʌnˈræp]",
    "translation": "разворачивать"
  },
  {
    "index": 951,
    "word": "wrapping",
    "transcription": "[ˈræpɪŋ]",
    "translation": "обёртка"
  },
  {
    "index": 952,
    "word": "barrel",
    "transcription": "[ˈbærəl]",
    "translation": "barrel"
  },
  {
    "index": 953,
    "word": "get rid of",
    "transcription": "[gɛtrɪdɒv]",
    "translation": "избавиться от"
  },
  {
    "index": 954,
    "word": "scheme",
    "transcription": "[skiːm]",
    "translation": "схема"
  },
  {
    "index": 955,
    "word": "schematic",
    "transcription": "[skɪˈmætɪk]",
    "translation": "схематический"
  },
  {
    "index": 956,
    "word": "image",
    "transcription": "[ˈɪmɪʤ]",
    "translation": "изображение, образ"
  },
  {
    "index": 957,
    "word": "welfare",
    "transcription": "[ˈwɛlfeə]",
    "translation": "пособие, мат. помощь"
  },
  {
    "index": 958,
    "word": "incorporate",
    "transcription": "[ɪnˈkɔːpərɪt]",
    "translation": "вобрать, соединить"
  },
  {
    "index": 959,
    "word": "incorporation",
    "transcription": "[ɪnˌkɔːpəˈreɪʃən]",
    "translation": "включение"
  },
  {
    "index": 960,
    "word": "current",
    "transcription": "[ˈkʌrənt]",
    "translation": "текущий, актуальный"
  },
  {
    "index": 961,
    "word": "currently",
    "transcription": "[ˈkʌrəntli]",
    "translation": "в данный момент"
  },
  {
    "index": 962,
    "word": "spin",
    "transcription": "[spɪn]",
    "translation": "крутить"
  },
  {
    "index": 963,
    "word": "controversy",
    "transcription": "[ˈkɒntrəvɜːsi]",
    "translation": "спор, разногласие, дискуссия"
  },
  {
    "index": 964,
    "word": "controversial",
    "transcription": "[ˌkɒntrəˈvɜːʃəl]",
    "translation": "спорный"
  },
  {
    "index": 965,
    "word": "trial",
    "transcription": "[ˈtraɪəl]",
    "translation": "судебный процесс"
  },
  {
    "index": 966,
    "word": "terms",
    "transcription": "[tɜːmz]",
    "translation": "условия, соглашение"
  },
  {
    "index": 967,
    "word": "turn away",
    "transcription": "[tɜːnəˈweɪ]",
    "translation": "не пустить"
  },
  {
    "index": 968,
    "word": "stake",
    "transcription": "[steɪk]",
    "translation": "ставка, делать ставку"
  },
  {
    "index": 969,
    "word": "work out",
    "transcription": "[wɜːkaʊt]",
    "translation": "получиться, сработать"
  },
  {
    "index": 970,
    "word": "wander",
    "transcription": "[ˈwɒndə]",
    "translation": "бродить, блуждать"
  },
  {
    "index": 971,
    "word": "wanderer",
    "transcription": "[ˈwɒndərə]",
    "translation": "странник, скиталец"
  },
  {
    "index": 972,
    "word": "hit (hit, hit)",
    "transcription": "[hɪt]",
    "translation": "ударить, удар"
  },
  {
    "index": 973,
    "word": "defence (defense)",
    "transcription": "[dɪˈfɛns]",
    "translation": "защита, защитный"
  },
  {
    "index": 974,
    "word": "defensive",
    "transcription": "[dɪˈfɛnsɪv]",
    "translation": "оборонительный"
  },
  {
    "index": 975,
    "word": "defenceless",
    "transcription": "[dɪˈfɛnslɪs]",
    "translation": "беззащитный"
  },
  {
    "index": 976,
    "word": "drive out",
    "transcription": "[draɪvaʊt]",
    "translation": "выгнать"
  },
  {
    "index": 977,
    "word": "drive away",
    "transcription": "[draɪvəˈweɪ]",
    "translation": "прогнать"
  },
  {
    "index": 978,
    "word": "drive off",
    "transcription": "[draɪvɒf]",
    "translation": "отогнать"
  },
  {
    "index": 979,
    "word": "blow (blew blown)",
    "transcription": "[bləʊ]",
    "translation": "дуть"
  },
  {
    "index": 980,
    "word": "couple",
    "transcription": "[ˈkʌpl]",
    "translation": "пара"
  },
  {
    "index": 981,
    "word": "explore",
    "transcription": "[ɪksˈplɔː]",
    "translation": "изучать"
  },
  {
    "index": 982,
    "word": "exploration",
    "transcription": "[ˌɛksplɔːˈreɪʃən]",
    "translation": "исследование"
  },
  {
    "index": 983,
    "word": "exploratory",
    "transcription": "[ɛksˈplɔːrətəri]",
    "translation": "исследовательский"
  },
  {
    "index": 984,
    "word": "explorer",
    "transcription": "[ɪksˈplɔːrə]",
    "translation": "исследователь"
  },
  {
    "index": 985,
    "word": "unexplored",
    "transcription": "[ˌʌnɪksˈplɔːd]",
    "translation": "неизведанный"
  },
  {
    "index": 986,
    "word": "put on",
    "transcription": "[pʊtɒn]",
    "translation": "надеть"
  },
  {
    "index": 987,
    "word": "have on",
    "transcription": "[hævɒn]",
    "translation": "быть одетым в"
  },
  {
    "index": 988,
    "word": "prefer",
    "transcription": "[priˈfɜː]",
    "translation": "предпочитать"
  },
  {
    "index": 989,
    "word": "preferable",
    "transcription": "[ˈprɛfərəbl]",
    "translation": "предпочтительный"
  },
  {
    "index": 990,
    "word": "preferably",
    "transcription": "[ˈprɛfərəbli]",
    "translation": "желательно"
  },
  {
    "index": 991,
    "word": "preference",
    "transcription": "[ˈprɛfərəns]",
    "translation": "предпочтение"
  },
  {
    "index": 992,
    "word": "rough",
    "transcription": "[rʌf]",
    "translation": "грубый, неровный, жёсткий"
  },
  {
    "index": 993,
    "word": "roughly",
    "transcription": "[ˈrʌfli]",
    "translation": "грубо"
  },
  {
    "index": 994,
    "word": "roughness",
    "transcription": "[ˈrʌfnɪs]",
    "translation": "шероховатость"
  },
  {
    "index": 995,
    "word": "discourse",
    "transcription": "[dɪsˈkɔːs]",
    "translation": "речь, рассуждение"
  },
  {
    "index": 996,
    "word": "current",
    "transcription": "[ˈkʌrənt]",
    "translation": "ток, поток, течение"
  },
  {
    "index": 997,
    "word": "broad",
    "transcription": "[brɔːd]",
    "translation": "широкий"
  },
  {
    "index": 998,
    "word": "broaden",
    "transcription": "[ˈbrɔːdn]",
    "translation": "расширять"
  },
  {
    "index": 999,
    "word": "warrior",
    "transcription": "[ˈwɒrɪə]",
    "translation": "воин"
  },
  {
    "index": 1000,
    "word": "scale",
    "transcription": "[skeɪl]",
    "translation": "чешуя, шелуха"
  },
  {
    "index": 1001,
    "word": "count",
    "transcription": "[kaʊnt]",
    "translation": "считаться, иметь значение"
  },
  {
    "index": 1002,
    "word": "ensure",
    "transcription": "[ɪnˈʃʊə]",
    "translation": "обеспечить, гарантировать"
  },
  {
    "index": 1003,
    "word": "across",
    "transcription": "[əˈkrɒs]",
    "translation": "за, через"
  },
  {
    "index": 1004,
    "word": "state",
    "transcription": "[steɪt]",
    "translation": "состояние"
  },
  {
    "index": 1005,
    "word": "read out",
    "transcription": "[riːdaʊt]",
    "translation": "огласить, зачитать вслух"
  },
  {
    "index": 1006,
    "word": "extend",
    "transcription": "[ɪksˈtɛnd]",
    "translation": "расширять, удлиннять"
  },
  {
    "index": 1007,
    "word": "extension",
    "transcription": "[ɪksˈtɛnʃən]",
    "translation": "расширение"
  },
  {
    "index": 1008,
    "word": "extensive",
    "transcription": "[ɪksˈtɛnsɪv]",
    "translation": "обширный"
  },
  {
    "index": 1009,
    "word": "button",
    "transcription": "[ˈbʌtn]",
    "translation": "пуговица, застёгивать"
  },
  {
    "index": 1010,
    "word": "unbutton",
    "transcription": "[ʌnˈbʌtn]",
    "translation": "расстегивать"
  },
  {
    "index": 1011,
    "word": "slight",
    "transcription": "[slaɪt]",
    "translation": "лёгкий, слабый, незначительный"
  },
  {
    "index": 1012,
    "word": "slightly",
    "transcription": "[ˈslaɪtli]",
    "translation": "слегка"
  },
  {
    "index": 1013,
    "word": "disaster",
    "transcription": "[dɪˈzɑːstə]",
    "translation": "бедствие"
  },
  {
    "index": 1014,
    "word": "disastrous",
    "transcription": "[dɪˈzɑːstrəs]",
    "translation": "гибельный"
  },
  {
    "index": 1015,
    "word": "absorb",
    "transcription": "[əbˈsɔːb]",
    "translation": "впитывать, поглощать"
  },
  {
    "index": 1016,
    "word": "absorption",
    "transcription": "[əbˈsɔːpʃ(ə)n]",
    "translation": "поглощение, впитывание"
  },
  {
    "index": 1017,
    "word": "pull back",
    "transcription": "[pʊlbæk]",
    "translation": "отступить, отвести войска"
  },
  {
    "index": 1018,
    "word": "pull out",
    "transcription": "[pʊlaʊt]",
    "translation": "выйти из дела"
  },
  {
    "index": 1019,
    "word": "engage in",
    "transcription": "[ɪnˈgeɪʤɪn]",
    "translation": "заниматься"
  },
  {
    "index": 1020,
    "word": "engagement",
    "transcription": "[ɪnˈgeɪʤmənt]",
    "translation": "занятие"
  },
  {
    "index": 1021,
    "word": "movie",
    "transcription": "[ˈmuːvi]",
    "translation": "кино"
  },
  {
    "index": 1022,
    "word": "movie house",
    "transcription": "[ˈmuːvihaʊs]",
    "translation": "кинотеатр"
  },
  {
    "index": 1023,
    "word": "blanket",
    "transcription": "[ˈblæŋkɪt]",
    "translation": "одеяло, покрывало"
  },
  {
    "index": 1024,
    "word": "breast",
    "transcription": "[brɛst]",
    "translation": "грудь"
  },
  {
    "index": 1025,
    "word": "eager",
    "transcription": "[ˈiːgə]",
    "translation": "сильно желающий"
  },
  {
    "index": 1026,
    "word": "eagerness",
    "transcription": "[ˈiːgənɪs]",
    "translation": "рвение"
  },
  {
    "index": 1027,
    "word": "trace",
    "transcription": "[treɪs]",
    "translation": "след, отслеживать"
  },
  {
    "index": 1028,
    "word": "shade",
    "transcription": "[ʃeɪd]",
    "translation": "тень"
  },
  {
    "index": 1029,
    "word": "shady",
    "transcription": "[ˈʃeɪdi]",
    "translation": "тенистый или неясный"
  },
  {
    "index": 1030,
    "word": "perception",
    "transcription": "[pəˈsɛpʃən]",
    "translation": "восприятие"
  },
  {
    "index": 1031,
    "word": "grow (grew, grown)",
    "transcription": "[grəʊ]",
    "translation": "становиться"
  },
  {
    "index": 1032,
    "word": "shed (shed, shed)",
    "transcription": "[ʃɛd]",
    "translation": "проливать, терять, сбрасывать"
  },
  {
    "index": 1033,
    "word": "bloodshed",
    "transcription": "[ˈblʌdʃɛd]",
    "translation": "кровопролитие"
  },
  {
    "index": 1034,
    "word": "retail",
    "transcription": "[ˈriːteɪl]",
    "translation": "розничная продажа"
  },
  {
    "index": 1035,
    "word": "hesitate",
    "transcription": "[ˈhɛzɪteɪt]",
    "translation": "колебаться, медлить"
  },
  {
    "index": 1036,
    "word": "hesitation",
    "transcription": "[ˌhɛzɪˈteɪʃən]",
    "translation": "колебание"
  },
  {
    "index": 1037,
    "word": "hesitant",
    "transcription": "[ˈhɛzɪtənt]",
    "translation": "колеблющийся"
  },
  {
    "index": 1038,
    "word": "double",
    "transcription": "[ˈdʌbl]",
    "translation": "удваивать, двойной"
  },
  {
    "index": 1039,
    "word": "redouble",
    "transcription": "[rɪˈdʌbl]",
    "translation": "удваивать"
  },
  {
    "index": 1040,
    "word": "privacy",
    "transcription": "[ˈprɪvəsi]",
    "translation": "частная жизнь, конфиденциальность"
  },
  {
    "index": 1041,
    "word": "fear",
    "transcription": "[fɪə]",
    "translation": "страх, бояться"
  },
  {
    "index": 1042,
    "word": "fearful",
    "transcription": "[ˈfɪəfʊl]",
    "translation": "напуганный или пугающий"
  },
  {
    "index": 1043,
    "word": "fearless",
    "transcription": "[ˈfɪəlɪs]",
    "translation": "бесстрашный"
  },
  {
    "index": 1044,
    "word": "real estate",
    "transcription": "[rɪəlɪsˈteɪt]",
    "translation": "недвижимость"
  },
  {
    "index": 1045,
    "word": "estate",
    "transcription": "[ɪsˈteɪt]",
    "translation": "имущество"
  },
  {
    "index": 1046,
    "word": "kind",
    "transcription": "[kaɪnd]",
    "translation": "добрый"
  },
  {
    "index": 1047,
    "word": "kindness",
    "transcription": "[ˈkaɪndnɪs]",
    "translation": "доброта"
  },
  {
    "index": 1048,
    "word": "unkind",
    "transcription": "[ʌnˈkaɪnd]",
    "translation": "недобрый"
  },
  {
    "index": 1049,
    "word": "transfer",
    "transcription": "[trænsˈfɜ]",
    "translation": "перевести, передать"
  },
  {
    "index": 1050,
    "word": "transfer",
    "transcription": "[ˈtrænsfə]",
    "translation": "перевод"
  },
  {
    "index": 1051,
    "word": "aside",
    "transcription": "[əˈsaɪd]",
    "translation": "в стороне, в сторону"
  },
  {
    "index": 1052,
    "word": "revenue",
    "transcription": "[ˈrɛvɪnjuː]",
    "translation": "доход, выручка"
  },
  {
    "index": 1053,
    "word": "radiate",
    "transcription": "[ˈreɪdɪɪt]",
    "translation": "излучать"
  },
  {
    "index": 1054,
    "word": "radiation",
    "transcription": "[ˌreɪdɪˈeɪʃən]",
    "translation": "излучение"
  },
  {
    "index": 1055,
    "word": "sudden",
    "transcription": "[ˈsʌdn]",
    "translation": "внезапный"
  },
  {
    "index": 1056,
    "word": "suddenly",
    "transcription": "[ˈsʌdnli]",
    "translation": "вдруг"
  },
  {
    "index": 1057,
    "word": "late",
    "transcription": "[leɪt]",
    "translation": "поздний"
  },
  {
    "index": 1058,
    "word": "lately",
    "transcription": "[ˈleɪtli]",
    "translation": "в последнее время"
  },
  {
    "index": 1059,
    "word": "later",
    "transcription": "[ˈleɪtə]",
    "translation": "позднее"
  },
  {
    "index": 1060,
    "word": "latest",
    "transcription": "[ˈleɪtɪst]",
    "translation": "последний"
  },
  {
    "index": 1061,
    "word": "crucial",
    "transcription": "[ˈkruːʃəl]",
    "translation": "решающий, критический"
  },
  {
    "index": 1062,
    "word": "strike (struck, struck)",
    "transcription": "[straɪk]",
    "translation": "бить, удар"
  },
  {
    "index": 1063,
    "word": "stricken",
    "transcription": "[ˈstrɪkən]",
    "translation": "пораженный, раненый"
  },
  {
    "index": 1064,
    "word": "emphasis",
    "transcription": "[ˈɛmfəsɪs]",
    "translation": "акцент, внимание, ударение"
  },
  {
    "index": 1065,
    "word": "nerve",
    "transcription": "[nɜːv]",
    "translation": "смелость"
  },
  {
    "index": 1066,
    "word": "reserved",
    "transcription": "[rɪˈzɜːvd]",
    "translation": "скрытный, замкнутый"
  },
  {
    "index": 1067,
    "word": "set",
    "transcription": "[sɛt]",
    "translation": "набор, комплект"
  },
  {
    "index": 1068,
    "word": "profit",
    "transcription": "[ˈprɒfɪt]",
    "translation": "польза, извлекать пользу"
  },
  {
    "index": 1069,
    "word": "profitable",
    "transcription": "[ˈprɒfɪtəbl]",
    "translation": "прибыльный"
  },
  {
    "index": 1070,
    "word": "unprofitable",
    "transcription": "[ʌnˈprɒfɪtəbl]",
    "translation": "убыточный"
  },
  {
    "index": 1071,
    "word": "nonprofit",
    "transcription": "[nɒnˈprɒfɪt]",
    "translation": "некоммерческий"
  },
  {
    "index": 1072,
    "word": "record",
    "transcription": "[ˈrɛkɔːd]",
    "translation": "запись, записывать"
  },
  {
    "index": 1073,
    "word": "accept",
    "transcription": "[əkˈsɛpt]",
    "translation": "принять"
  },
  {
    "index": 1074,
    "word": "acceptable",
    "transcription": "[əkˈsɛptəbl]",
    "translation": "приемлемый"
  },
  {
    "index": 1075,
    "word": "unacceptable",
    "transcription": "[ˌʌnəkˈsɛptəbl]",
    "translation": "неприемлемый"
  },
  {
    "index": 1076,
    "word": "acceptance",
    "transcription": "[əkˈsɛptəns]",
    "translation": "принятие"
  },
  {
    "index": 1077,
    "word": "in charge",
    "transcription": "[ɪnʧɑːʤ]",
    "translation": "во главе"
  },
  {
    "index": 1078,
    "word": "hence",
    "transcription": "[hɛns]",
    "translation": "отсюда (следует, происходит)"
  },
  {
    "index": 1079,
    "word": "henceforth",
    "transcription": "[ˈhɛnsˈfɔːθ]",
    "translation": "отныне"
  },
  {
    "index": 1080,
    "word": "depend",
    "transcription": "[dɪˈpɛnd]",
    "translation": "зависеть"
  },
  {
    "index": 1081,
    "word": "subject",
    "transcription": "[ˈsʌbʤɪkt]",
    "translation": "предмет, тема"
  },
  {
    "index": 1082,
    "word": "hardly",
    "transcription": "[ˈhɑːdli]",
    "translation": "едва"
  },
  {
    "index": 1083,
    "word": "intend",
    "transcription": "[ɪnˈtɛnd]",
    "translation": "намереваться"
  },
  {
    "index": 1084,
    "word": "intent",
    "transcription": "[ɪnˈtɛnt]",
    "translation": "намерение"
  },
  {
    "index": 1085,
    "word": "intention",
    "transcription": "[ɪnˈtɛnʃən]",
    "translation": "намерение"
  },
  {
    "index": 1086,
    "word": "urge",
    "transcription": "[ɜːʤ]",
    "translation": "побуждать, гнать и т.д."
  },
  {
    "index": 1087,
    "word": "pride",
    "transcription": "[praɪd]",
    "translation": "гордость"
  },
  {
    "index": 1088,
    "word": "area",
    "transcription": "[ˈeərɪə]",
    "translation": "область, участок"
  },
  {
    "index": 1089,
    "word": "bean",
    "transcription": "[biːn]",
    "translation": "боб"
  },
  {
    "index": 1090,
    "word": "knock down",
    "transcription": "[nɒkdaʊn]",
    "translation": "снести, сбить"
  },
  {
    "index": 1091,
    "word": "pull down",
    "transcription": "[pʊldaʊn]",
    "translation": "снести, разрушить"
  },
  {
    "index": 1092,
    "word": "tear down",
    "transcription": "[teədaʊn]",
    "translation": "снести"
  },
  {
    "index": 1093,
    "word": "pull through",
    "transcription": "[pʊlθruː]",
    "translation": "выжить, выздороветь"
  },
  {
    "index": 1094,
    "word": "shoe",
    "transcription": "[ʃuː]",
    "translation": "туфля, ботинок (низкий)"
  },
  {
    "index": 1095,
    "word": "shoemaker",
    "transcription": "[ˈʃuːˌmeɪkə]",
    "translation": "сапожник, башмачник"
  },
  {
    "index": 1096,
    "word": "blind",
    "transcription": "[blaɪnd]",
    "translation": "слепой"
  },
  {
    "index": 1097,
    "word": "drive (drove, driven)",
    "transcription": "[draɪv]",
    "translation": "вести машину"
  },
  {
    "index": 1098,
    "word": "drive in",
    "transcription": "[draɪvɪn]",
    "translation": "ехать в машине"
  },
  {
    "index": 1099,
    "word": "besides",
    "transcription": "[bɪˈsaɪdz]",
    "translation": "кроме"
  },
  {
    "index": 1100,
    "word": "find out",
    "transcription": "[faɪndaʊt]",
    "translation": "выяснить"
  },
  {
    "index": 1101,
    "word": "blast",
    "transcription": "[blɑːst]",
    "translation": "взрыв, взрывать"
  },
  {
    "index": 1102,
    "word": "overcome",
    "transcription": "[ˌəʊvəˈkʌm]",
    "translation": "преодолеть, побороть"
  },
  {
    "index": 1103,
    "word": "trail",
    "transcription": "[treɪl]",
    "translation": "след, тропа"
  },
  {
    "index": 1104,
    "word": "give off",
    "transcription": "[gɪvɒf]",
    "translation": "издавать, испускать"
  },
  {
    "index": 1105,
    "word": "spend (spent, spent)",
    "transcription": "[spɛnd]",
    "translation": "тратить, проводить (время)"
  },
  {
    "index": 1106,
    "word": "spending",
    "transcription": "[ˈspɛndɪŋ]",
    "translation": "расходы"
  },
  {
    "index": 1107,
    "word": "spender",
    "transcription": "[ˈspɛndə]",
    "translation": "транжира"
  },
  {
    "index": 1108,
    "word": "overwhelm",
    "transcription": "[ˌəʊvəˈwɛlm]",
    "translation": "завалить, подавить"
  },
  {
    "index": 1109,
    "word": "overwhelming",
    "transcription": "[ˌəʊvəˈwɛlmɪŋ]",
    "translation": "подавляющий (напр. большинство)"
  },
  {
    "index": 1110,
    "word": "household",
    "transcription": "[ˈhaʊshəʊld]",
    "translation": "домашний, домохозяйство"
  },
  {
    "index": 1111,
    "word": "appreciate",
    "transcription": "[əˈpriːʃɪeɪt]",
    "translation": "ценить"
  },
  {
    "index": 1112,
    "word": "appreciation",
    "transcription": "[əˌpriːʃɪˈeɪʃ(ə)n]",
    "translation": "оценка, понимание"
  },
  {
    "index": 1113,
    "word": "appreciative",
    "transcription": "[əˈpriːʃətɪv]",
    "translation": "благодарный, довольный"
  },
  {
    "index": 1114,
    "word": "sand",
    "transcription": "[sænd]",
    "translation": "песок"
  },
  {
    "index": 1115,
    "word": "sandstone",
    "transcription": "[ˈsændstəʊn]",
    "translation": "песчаник"
  },
  {
    "index": 1116,
    "word": "bounce",
    "transcription": "[baʊns]",
    "translation": "отскакивать, прыгать"
  },
  {
    "index": 1117,
    "word": "bouncing",
    "transcription": "[ˈbaʊnsɪŋ]",
    "translation": "живой, шумный"
  },
  {
    "index": 1118,
    "word": "sound",
    "transcription": "[saʊnd]",
    "translation": "здоровый"
  },
  {
    "index": 1119,
    "word": "speculate",
    "transcription": "[ˈspɛkjʊleɪt]",
    "translation": "предполагать, строить догадки"
  },
  {
    "index": 1120,
    "word": "speculation",
    "transcription": "[ˌspɛkjʊˈleɪʃən]",
    "translation": "догадка, спекуляция"
  },
  {
    "index": 1121,
    "word": "speculative",
    "transcription": "[ˈspɛkjʊlətɪv]",
    "translation": "умозрительный"
  },
  {
    "index": 1122,
    "word": "net",
    "transcription": "[nɛt]",
    "translation": "чистый, конечный, без вычетов"
  },
  {
    "index": 1123,
    "word": "take advantage of",
    "transcription": "[teɪkədˈvɑːntɪʤɒv]",
    "translation": "воспользоваться"
  },
  {
    "index": 1124,
    "word": "drug",
    "transcription": "[drʌg]",
    "translation": "лекарство или наркотик"
  },
  {
    "index": 1125,
    "word": "drug dealer",
    "transcription": "[drʌgˈdiːlə]",
    "translation": "наркоторговец"
  },
  {
    "index": 1126,
    "word": "cotton",
    "transcription": "[ˈkɒtn]",
    "translation": "хлопок"
  },
  {
    "index": 1127,
    "word": "facility",
    "transcription": "[fəˈsɪlɪti]",
    "translation": "лёгкость, удобство"
  },
  {
    "index": 1128,
    "word": "just",
    "transcription": "[ʤʌst]",
    "translation": "справедливый, беспристрастный"
  },
  {
    "index": 1129,
    "word": "unjust",
    "transcription": "[ʌnˈʤʌst]",
    "translation": "несправедливый"
  },
  {
    "index": 1130,
    "word": "exhaust",
    "transcription": "[ɪgˈzɔːst]",
    "translation": "исчерпывать, истощать"
  },
  {
    "index": 1131,
    "word": "exhaustion",
    "transcription": "[ɪgˈzɔːsʧən]",
    "translation": "истощение"
  },
  {
    "index": 1132,
    "word": "exhaustive",
    "transcription": "[ɪgˈzɔːstɪv]",
    "translation": "исчерпывающий"
  },
  {
    "index": 1133,
    "word": "average",
    "transcription": "[ˈævərɪʤ]",
    "translation": "средний"
  },
  {
    "index": 1134,
    "word": "in average",
    "transcription": "[ɪnˈævərɪʤ]",
    "translation": "в среднем"
  },
  {
    "index": 1135,
    "word": "pace",
    "transcription": "[peɪs]",
    "translation": "шаг, шагать"
  },
  {
    "index": 1136,
    "word": "relieve",
    "transcription": "[rɪˈliːv]",
    "translation": "облегчить, освободить"
  },
  {
    "index": 1137,
    "word": "twin",
    "transcription": "[twɪn]",
    "translation": "близнец"
  },
  {
    "index": 1138,
    "word": "allow for",
    "transcription": "[əˈlaʊfɔː]",
    "translation": "выделять, рассчитывать"
  },
  {
    "index": 1139,
    "word": "shut (shut, shut)",
    "transcription": "[ʃʌt]",
    "translation": "закрыть"
  },
  {
    "index": 1140,
    "word": "shutters",
    "transcription": "[ˈʃʌtəz]",
    "translation": "жалюзи или ставни"
  },
  {
    "index": 1141,
    "word": "relevant",
    "transcription": "[ˈrɛlɪvənt]",
    "translation": "уместный, актуальный"
  },
  {
    "index": 1142,
    "word": "relevance",
    "transcription": "[ˈrɛlɪvəns]",
    "translation": "актуальность"
  },
  {
    "index": 1143,
    "word": "irrelevant",
    "transcription": "[ɪˈrɛlɪvənt]",
    "translation": "не имеет значения"
  },
  {
    "index": 1144,
    "word": "irrelevance",
    "transcription": "[ɪˈrɛlɪvəns]",
    "translation": "неуместность"
  },
  {
    "index": 1145,
    "word": "conviction",
    "transcription": "[kənˈvɪkʃən]",
    "translation": "убеждение, убеждённость"
  },
  {
    "index": 1146,
    "word": "put smb down",
    "transcription": "[pʊtsmbdaʊn]",
    "translation": "подавлять, угнетать"
  },
  {
    "index": 1147,
    "word": "weigh down",
    "transcription": "[weɪdaʊn]",
    "translation": "угнетать, отягощать"
  },
  {
    "index": 1148,
    "word": "scare",
    "transcription": "[skeə]",
    "translation": "пугать"
  },
  {
    "index": 1149,
    "word": "scary",
    "transcription": "[ˈskeəri]",
    "translation": "страшный"
  },
  {
    "index": 1150,
    "word": "stain",
    "transcription": "[steɪn]",
    "translation": "пятно, окрашиваться, пачкать"
  },
  {
    "index": 1151,
    "word": "stainless",
    "transcription": "[ˈsteɪnlɪs]",
    "translation": "незапятнанный или нержавеющий"
  },
  {
    "index": 1152,
    "word": "helicopter",
    "transcription": "[ˈhɛlɪkɒptə]",
    "translation": "вертолёт"
  },
  {
    "index": 1153,
    "word": "efficient",
    "transcription": "[ɪˈfɪʃənt]",
    "translation": "оптимальный, эффективный"
  },
  {
    "index": 1154,
    "word": "efficiency",
    "transcription": "[ɪˈfɪʃənsi]",
    "translation": "эффективность"
  },
  {
    "index": 1155,
    "word": "inefficient",
    "transcription": "[ˌɪnɪˈfɪʃənt]",
    "translation": "неэффективный"
  },
  {
    "index": 1156,
    "word": "inefficiency",
    "transcription": "[ˌɪnɪˈfɪʃənsi]",
    "translation": "неэффективность"
  },
  {
    "index": 1157,
    "word": "pole",
    "transcription": "[pəʊl]",
    "translation": "полюс"
  },
  {
    "index": 1158,
    "word": "gap",
    "transcription": "[gæp]",
    "translation": "разрыв, пробел"
  },
  {
    "index": 1159,
    "word": "enter",
    "transcription": "[ˈɛntə]",
    "translation": "войти"
  },
  {
    "index": 1160,
    "word": "entrance",
    "transcription": "[ˈɛntrəns]",
    "translation": "вход (место)"
  },
  {
    "index": 1161,
    "word": "entry",
    "transcription": "[ˈɛntri]",
    "translation": "вход (действие)"
  },
  {
    "index": 1162,
    "word": "respective",
    "transcription": "[rɪsˈpɛktɪv]",
    "translation": "соответственный"
  },
  {
    "index": 1163,
    "word": "respectively",
    "transcription": "[rɪsˈpɛktɪvli]",
    "translation": "соответственно"
  },
  {
    "index": 1164,
    "word": "irrespectively",
    "transcription": "[ˌɪrɪsˈpɛktɪvli]",
    "translation": "независимо"
  },
  {
    "index": 1165,
    "word": "cross",
    "transcription": "[krɒs]",
    "translation": "пересекать, пересечение, крест"
  },
  {
    "index": 1166,
    "word": "crosswise",
    "transcription": "[ˈkrɒswaɪz]",
    "translation": "крестообразно, крест-накрест"
  },
  {
    "index": 1167,
    "word": "vehicle",
    "transcription": "[ˈviːɪkl]",
    "translation": "транспортное средство"
  },
  {
    "index": 1168,
    "word": "vehicular",
    "transcription": "[vɪˈhɪkjʊlə]",
    "translation": "автомобильный"
  },
  {
    "index": 1169,
    "word": "response",
    "transcription": "[rɪsˈpɒns]",
    "translation": "ответ, отклик"
  },
  {
    "index": 1170,
    "word": "responsive",
    "transcription": "[rɪsˈpɒnsɪv]",
    "translation": "отзывчивый"
  },
  {
    "index": 1171,
    "word": "for sure",
    "transcription": "[fɔːʃʊə]",
    "translation": "наверняка, точно"
  },
  {
    "index": 1172,
    "word": "bare",
    "transcription": "[beə]",
    "translation": "голый"
  },
  {
    "index": 1173,
    "word": "trigger",
    "transcription": "[ˈtrɪgə]",
    "translation": "спусковой крючок"
  },
  {
    "index": 1174,
    "word": "so far",
    "transcription": "[səʊfɑː]",
    "translation": "до сих пор"
  },
  {
    "index": 1175,
    "word": "mount",
    "transcription": "[maʊnt]",
    "translation": "монтировать, устанавливать"
  },
  {
    "index": 1176,
    "word": "pursue",
    "transcription": "[pəˈsjuː]",
    "translation": "преследовать, гнаться"
  },
  {
    "index": 1177,
    "word": "pursuer",
    "transcription": "[pəˈsju(ː)ə]",
    "translation": "преследователь"
  },
  {
    "index": 1178,
    "word": "spring (sprang, sprung)",
    "transcription": "[sprɪŋ]",
    "translation": "прыгать"
  },
  {
    "index": 1179,
    "word": "lend (lent, lent)",
    "transcription": "[lɛnd]",
    "translation": "давать в долг"
  },
  {
    "index": 1180,
    "word": "rush",
    "transcription": "[rʌʃ]",
    "translation": "торопиться, мчаться, броситься"
  },
  {
    "index": 1181,
    "word": "concern",
    "transcription": "[kənˈsɜːn]",
    "translation": "забота, тревожить"
  },
  {
    "index": 1182,
    "word": "concerning",
    "transcription": "[kənˈsɜːnɪŋ]",
    "translation": "что касается"
  },
  {
    "index": 1183,
    "word": "spine",
    "transcription": "[spaɪn]",
    "translation": "позвоночник"
  },
  {
    "index": 1184,
    "word": "spineless",
    "transcription": "[ˈspaɪnlɪs]",
    "translation": "бесхарактерный"
  },
  {
    "index": 1185,
    "word": "spinal",
    "transcription": "[ˈspaɪnl]",
    "translation": "спинной, позвоночный"
  },
  {
    "index": 1186,
    "word": "joy",
    "transcription": "[ʤɔɪ]",
    "translation": "радость"
  },
  {
    "index": 1187,
    "word": "joyful",
    "transcription": "[ˈʤɔɪfʊl]",
    "translation": "радостный"
  },
  {
    "index": 1188,
    "word": "joyous",
    "transcription": "[ˈʤɔɪəs]",
    "translation": "радостный"
  },
  {
    "index": 1189,
    "word": "sacrifice",
    "transcription": "[ˈsækrɪfaɪs]",
    "translation": "жертва, жертвовать"
  },
  {
    "index": 1190,
    "word": "sacrificial",
    "transcription": "[ˌsækrɪˈfɪʃəl]",
    "translation": "жертвенный"
  },
  {
    "index": 1191,
    "word": "depress",
    "transcription": "[dɪˈprɛs]",
    "translation": "угнетать, подавлять"
  },
  {
    "index": 1192,
    "word": "disturb",
    "transcription": "[dɪsˈtɜːb]",
    "translation": "тревожить"
  },
  {
    "index": 1193,
    "word": "disturbance",
    "transcription": "[dɪsˈtɜːbəns]",
    "translation": "нарушение, волнение"
  },
  {
    "index": 1194,
    "word": "suffer",
    "transcription": "[ˈsʌfə]",
    "translation": "страдать"
  },
  {
    "index": 1195,
    "word": "suffering",
    "transcription": "[ˈsʌfərɪŋ]",
    "translation": "страдание"
  },
  {
    "index": 1196,
    "word": "run over",
    "transcription": "[rʌnˈəʊvə]",
    "translation": "переехать машиной"
  },
  {
    "index": 1197,
    "word": "run down",
    "transcription": "[rʌndaʊn]",
    "translation": "сбить машиной"
  },
  {
    "index": 1198,
    "word": "passage",
    "transcription": "[ˈpæsɪʤ]",
    "translation": "проход, коридор"
  },
  {
    "index": 1199,
    "word": "convict",
    "transcription": "[ˈkɒnvɪkt]",
    "translation": "осуждённый, осуждать"
  },
  {
    "index": 1200,
    "word": "conviction",
    "transcription": "[kənˈvɪkʃən]",
    "translation": "осуждение"
  },
  {
    "index": 1201,
    "word": "ruin",
    "transcription": "[rʊɪn]",
    "translation": "разрушать, губить"
  },
  {
    "index": 1202,
    "word": "reverse",
    "transcription": "[rɪˈvɜːs]",
    "translation": "обратный, обратить"
  },
  {
    "index": 1203,
    "word": "reversal",
    "transcription": "[rɪˈvɜːsəl]",
    "translation": "обращение, обратный ход и т.д."
  },
  {
    "index": 1204,
    "word": "reversible",
    "transcription": "[rɪˈvɜːsəbl]",
    "translation": "обратимый"
  },
  {
    "index": 1205,
    "word": "irreversible",
    "transcription": "[ˌɪrɪˈvɜːsəbl]",
    "translation": "необратимый"
  },
  {
    "index": 1206,
    "word": "add up",
    "transcription": "[ædʌp]",
    "translation": "сходиться (об информации)"
  },
  {
    "index": 1207,
    "word": "acquire",
    "transcription": "[əˈkwaɪə]",
    "translation": "обретать"
  },
  {
    "index": 1208,
    "word": "acquisition",
    "transcription": "[ˌækwɪˈzɪʃ(ə)n]",
    "translation": "получение"
  },
  {
    "index": 1209,
    "word": "conceive",
    "transcription": "[kənˈsiːv]",
    "translation": "помыслить, представить"
  },
  {
    "index": 1210,
    "word": "conceivable",
    "transcription": "[kənˈsiːvəbl]",
    "translation": "мыслимый"
  },
  {
    "index": 1211,
    "word": "inconceivable",
    "transcription": "[ˌɪnkənˈsiːvəbl]",
    "translation": "непостижимый"
  },
  {
    "index": 1212,
    "word": "superior",
    "transcription": "[sju(ː)ˈpɪərɪə]",
    "translation": "высший, превосходящий"
  },
  {
    "index": 1213,
    "word": "superiority",
    "transcription": "[sju(ː)ˌpɪərɪˈɒrɪti]",
    "translation": "превосходство"
  },
  {
    "index": 1214,
    "word": "inferior",
    "transcription": "[ɪnˈfɪərɪə]",
    "translation": "низший"
  },
  {
    "index": 1215,
    "word": "inferiority",
    "transcription": "[ɪnˌfɪərɪˈɒrɪti]",
    "translation": "неполноценность, низкий уровень"
  },
  {
    "index": 1216,
    "word": "coast",
    "transcription": "[kəʊst]",
    "translation": "побережье"
  },
  {
    "index": 1217,
    "word": "coastal",
    "transcription": "[ˈkəʊstəl]",
    "translation": "береговой"
  },
  {
    "index": 1218,
    "word": "coastline",
    "transcription": "[ˈkəʊstlaɪn]",
    "translation": "береговая линия"
  },
  {
    "index": 1219,
    "word": "beam",
    "transcription": "[biːm]",
    "translation": "балка, перекладина"
  },
  {
    "index": 1220,
    "word": "set smb up with",
    "transcription": "[sɛtsmbʌpwɪð]",
    "translation": "познакомить, свести"
  },
  {
    "index": 1221,
    "word": "lift",
    "transcription": "[lɪft]",
    "translation": "поднимать"
  },
  {
    "index": 1222,
    "word": "rigid",
    "transcription": "[ˈrɪʤɪd]",
    "translation": "жесткий"
  },
  {
    "index": 1223,
    "word": "rigidity",
    "transcription": "[rɪˈʤɪdɪti]",
    "translation": "жесткость"
  },
  {
    "index": 1224,
    "word": "chairman",
    "transcription": "[ˈʧeəmən]",
    "translation": "председатель"
  },
  {
    "index": 1225,
    "word": "argue",
    "transcription": "[ˈɑːgjuː]",
    "translation": "спорить, доказывать"
  },
  {
    "index": 1226,
    "word": "argument",
    "transcription": "[ˈɑːgjʊmənt]",
    "translation": "спор"
  },
  {
    "index": 1227,
    "word": "remark",
    "transcription": "[ˈrɪˈmɑːk]",
    "translation": "замечать, замечание"
  },
  {
    "index": 1228,
    "word": "remarkable",
    "transcription": "[rɪˈmɑːkəbl]",
    "translation": "замечательный"
  },
  {
    "index": 1229,
    "word": "demand",
    "transcription": "[dɪˈmɑːnd]",
    "translation": "требовать"
  },
  {
    "index": 1230,
    "word": "wound",
    "transcription": "[wuːnd]",
    "translation": "рана, ранить"
  },
  {
    "index": 1231,
    "word": "launch",
    "transcription": "[lɔːnʧ]",
    "translation": "начать, запустить, запуск"
  },
  {
    "index": 1232,
    "word": "anniversary",
    "transcription": "[ˌænɪˈvɜːsəri]",
    "translation": "годовщина"
  },
  {
    "index": 1233,
    "word": "deliver",
    "transcription": "[dɪˈlɪvə]",
    "translation": "доставлять"
  },
  {
    "index": 1234,
    "word": "delivery",
    "transcription": "[dɪˈlɪvəri]",
    "translation": "доставка"
  },
  {
    "index": 1235,
    "word": "senior",
    "transcription": "[ˈsiːnjə]",
    "translation": "старший"
  },
  {
    "index": 1236,
    "word": "seniority",
    "transcription": "[ˌsiːnɪˈɒrɪti]",
    "translation": "старшинство"
  },
  {
    "index": 1237,
    "word": "senior",
    "transcription": "[ˈsiːnjə]",
    "translation": "старшеклассник"
  },
  {
    "index": 1238,
    "word": "curtain",
    "transcription": "[ˈkɜːtn]",
    "translation": "занавеска, занавес"
  },
  {
    "index": 1239,
    "word": "do about",
    "transcription": "[duːəˈbaʊt]",
    "translation": "сделать (с чем-то)"
  },
  {
    "index": 1240,
    "word": "nevertheless",
    "transcription": "[ˌnɛvəðəˈlɛs]",
    "translation": "тем не менее"
  },
  {
    "index": 1241,
    "word": "space",
    "transcription": "[speɪs]",
    "translation": "космос"
  },
  {
    "index": 1242,
    "word": "spacecraft",
    "transcription": "[ˈspeɪskrɑːft]",
    "translation": "космический корабль"
  },
  {
    "index": 1243,
    "word": "spaceship",
    "transcription": "[ˈspeɪsʃɪp]",
    "translation": "космический корабль"
  },
  {
    "index": 1244,
    "word": "spaceman",
    "transcription": "[ˈspeɪsmæn]",
    "translation": "космонавт"
  },
  {
    "index": 1245,
    "word": "discuss",
    "transcription": "[dɪsˈkʌs]",
    "translation": "обсуждать"
  },
  {
    "index": 1246,
    "word": "discussion",
    "transcription": "[dɪsˈkʌʃən]",
    "translation": "обсуждение"
  },
  {
    "index": 1247,
    "word": "get away with",
    "transcription": "[gɛtəˈweɪwɪð]",
    "translation": "безнаказанно сделать"
  },
  {
    "index": 1248,
    "word": "be up to",
    "transcription": "[biːʌptuː]",
    "translation": "замышлять что-то"
  },
  {
    "index": 1249,
    "word": "weigh",
    "transcription": "[weɪ]",
    "translation": "весить"
  },
  {
    "index": 1250,
    "word": "fit (fit, fit)",
    "transcription": "[fɪt]",
    "translation": "подходить, помещаться"
  },
  {
    "index": 1251,
    "word": "fit in",
    "transcription": "[fɪtɪn]",
    "translation": "вписаться"
  },
  {
    "index": 1252,
    "word": "weight",
    "transcription": "[weɪt]",
    "translation": "вес"
  },
  {
    "index": 1253,
    "word": "interact",
    "transcription": "[ˌɪntərˈækt]",
    "translation": "взаимодействовать"
  },
  {
    "index": 1254,
    "word": "interaction",
    "transcription": "[ˌɪntərˈækʃən]",
    "translation": "взаимодействие"
  },
  {
    "index": 1255,
    "word": "dependent",
    "transcription": "[dɪˈpɛndənt]",
    "translation": "зависимый"
  },
  {
    "index": 1256,
    "word": "dependence",
    "transcription": "[dɪˈpɛndəns]",
    "translation": "зависимость"
  },
  {
    "index": 1257,
    "word": "independent",
    "transcription": "[ˌɪndɪˈpɛndənt]",
    "translation": "независимый"
  },
  {
    "index": 1258,
    "word": "independence",
    "transcription": "[ˌɪndɪˈpɛndəns]",
    "translation": "независимость"
  },
  {
    "index": 1259,
    "word": "act",
    "transcription": "[ækt]",
    "translation": "действовать"
  },
  {
    "index": 1260,
    "word": "actual",
    "transcription": "[ˈækʧʊəl]",
    "translation": "действующий, фактический"
  },
  {
    "index": 1261,
    "word": "wonder",
    "transcription": "[ˈwʌndə]",
    "translation": "удивление, удивляться"
  },
  {
    "index": 1262,
    "word": "wonderful",
    "transcription": "[ˈwʌndəfʊl]",
    "translation": "удивительный"
  },
  {
    "index": 1263,
    "word": "no wonder",
    "transcription": "[nəʊˈwʌndə]",
    "translation": "неудивительно"
  },
  {
    "index": 1264,
    "word": "pale",
    "transcription": "[peɪl]",
    "translation": "бледный"
  },
  {
    "index": 1265,
    "word": "paleness",
    "transcription": "[ˈpeɪlnəs]",
    "translation": "бледность"
  },
  {
    "index": 1266,
    "word": "coincide",
    "transcription": "[ˌkəʊɪnˈsaɪd]",
    "translation": "совпасть"
  },
  {
    "index": 1267,
    "word": "make out",
    "transcription": "[meɪkaʊt]",
    "translation": "разобрать, понять"
  },
  {
    "index": 1268,
    "word": "oppose",
    "transcription": "[əˈpəʊz]",
    "translation": "противостоять"
  },
  {
    "index": 1269,
    "word": "opposition",
    "transcription": "[ˌɒpəˈzɪʃən]",
    "translation": "противостояние"
  },
  {
    "index": 1270,
    "word": "put aside",
    "transcription": "[pʊtəˈsaɪd]",
    "translation": "отложить"
  },
  {
    "index": 1271,
    "word": "lay aside",
    "transcription": "[leɪəˈsaɪd]",
    "translation": "отложить"
  },
  {
    "index": 1272,
    "word": "turn over",
    "transcription": "[tɜːnˈəʊvə]",
    "translation": "перевернуть"
  },
  {
    "index": 1273,
    "word": "troop",
    "transcription": "[truːp]",
    "translation": "отряд"
  },
  {
    "index": 1274,
    "word": "troops",
    "transcription": "[truːps]",
    "translation": "войска"
  },
  {
    "index": 1275,
    "word": "refine",
    "transcription": "[rɪˈfaɪn]",
    "translation": "очищать, усовершенствовать и т.д."
  },
  {
    "index": 1276,
    "word": "refinery",
    "transcription": "[rɪˈfaɪnəri]",
    "translation": "очистительный завод"
  },
  {
    "index": 1277,
    "word": "refinement",
    "transcription": "[rɪˈfaɪnmənt]",
    "translation": "утонченность"
  },
  {
    "index": 1278,
    "word": "assign",
    "transcription": "[əˈsaɪn]",
    "translation": "назначать, присваивать"
  },
  {
    "index": 1279,
    "word": "assignment",
    "transcription": "[əˈsaɪnmənt]",
    "translation": "назначение"
  },
  {
    "index": 1280,
    "word": "smooth",
    "transcription": "[smuːð]",
    "translation": "гладкий"
  },
  {
    "index": 1281,
    "word": "smoothness",
    "transcription": "[ˈsmuːðnəs]",
    "translation": "гладкость, плавность"
  },
  {
    "index": 1282,
    "word": "decline",
    "transcription": "[dɪˈklaɪn]",
    "translation": "отказаться, отклонить"
  },
  {
    "index": 1283,
    "word": "rate",
    "transcription": "[reɪt]",
    "translation": "курс, тариф, ставка"
  },
  {
    "index": 1284,
    "word": "mature",
    "transcription": "[məˈtjʊə]",
    "translation": "зрелый, зреть"
  },
  {
    "index": 1285,
    "word": "immature",
    "transcription": "[ˌɪməˈtjʊə]",
    "translation": "незрелый"
  },
  {
    "index": 1286,
    "word": "maturation",
    "transcription": "[ˌmætjʊəˈreɪʃən]",
    "translation": "созревание"
  },
  {
    "index": 1287,
    "word": "maturity",
    "transcription": "[məˈtjʊərɪti]",
    "translation": "зрелость"
  },
  {
    "index": 1288,
    "word": "theme",
    "transcription": "[θiːm]",
    "translation": "тема"
  },
  {
    "index": 1289,
    "word": "give up",
    "transcription": "[gɪvʌp]",
    "translation": "бросить (привычку)"
  },
  {
    "index": 1290,
    "word": "pollute",
    "transcription": "[pəˈluːt]",
    "translation": "загрязнять"
  },
  {
    "index": 1291,
    "word": "pollution",
    "transcription": "[pəˈluːʃən]",
    "translation": "загрязнение"
  },
  {
    "index": 1292,
    "word": "do up",
    "transcription": "[duːʌp]",
    "translation": "привести в порядок"
  },
  {
    "index": 1293,
    "word": "like",
    "transcription": "[laɪk]",
    "translation": "как"
  },
  {
    "index": 1294,
    "word": "unlike",
    "transcription": "[ʌnˈlaɪk]",
    "translation": "в отличие от"
  },
  {
    "index": 1295,
    "word": "beat (beat, beaten)",
    "transcription": "[biːt]",
    "translation": "победить"
  },
  {
    "index": 1296,
    "word": "breed",
    "transcription": "[briːd]",
    "translation": "порода, поколение и т д."
  },
  {
    "index": 1297,
    "word": "large",
    "transcription": "[lɑːʤ]",
    "translation": "большой, широкий"
  },
  {
    "index": 1298,
    "word": "largely",
    "transcription": "[ˈlɑːʤli]",
    "translation": "в значительной степени"
  },
  {
    "index": 1299,
    "word": "nod",
    "transcription": "[nɒd]",
    "translation": "кивать, склонять"
  },
  {
    "index": 1300,
    "word": "inherit",
    "transcription": "[ɪnˈhɛrɪt]",
    "translation": "унаследовать, перенять"
  },
  {
    "index": 1301,
    "word": "inheritance",
    "transcription": "[ɪnˈhɛrɪtəns]",
    "translation": "наследование"
  },
  {
    "index": 1302,
    "word": "inheritor",
    "transcription": "[ɪnˈhɛrɪtə]",
    "translation": "наследник"
  },
  {
    "index": 1303,
    "word": "insert",
    "transcription": "[ˈɪnsət]",
    "translation": "вставить"
  },
  {
    "index": 1304,
    "word": "insertion",
    "transcription": "[ɪnˈsɜːʃən]",
    "translation": "вставка"
  },
  {
    "index": 1305,
    "word": "frequent",
    "transcription": "[ˈfriːkwənt]",
    "translation": "частый"
  },
  {
    "index": 1306,
    "word": "frequency",
    "transcription": "[ˈfriːkwənsi]",
    "translation": "частота"
  },
  {
    "index": 1307,
    "word": "infrequent",
    "transcription": "[ɪnˈfriːkwənt]",
    "translation": "нечастый"
  },
  {
    "index": 1308,
    "word": "affair",
    "transcription": "[əˈfeə]",
    "translation": "роман, любовная история"
  },
  {
    "index": 1309,
    "word": "horrify",
    "transcription": "[ˈhɒrɪfaɪ]",
    "translation": "ужасать"
  },
  {
    "index": 1310,
    "word": "horrific",
    "transcription": "[hɒˈrɪfɪk]",
    "translation": "ужасающий"
  },
  {
    "index": 1311,
    "word": "horror",
    "transcription": "[ˈhɒrə]",
    "translation": "ужас"
  },
  {
    "index": 1312,
    "word": "spirit",
    "transcription": "[ˈspɪrɪt]",
    "translation": "дух"
  },
  {
    "index": 1313,
    "word": "spiritual",
    "transcription": "[ˈspɪrɪtjʊəl]",
    "translation": "духовный"
  },
  {
    "index": 1314,
    "word": "plate",
    "transcription": "[pleɪt]",
    "translation": "плита, пластина"
  },
  {
    "index": 1315,
    "word": "accuse",
    "transcription": "[əˈkjuːz]",
    "translation": "обвинять"
  },
  {
    "index": 1316,
    "word": "accusation",
    "transcription": "[ˌækju(ː)ˈzeɪʃ(ə)n]",
    "translation": "обвинение"
  },
  {
    "index": 1317,
    "word": "rally",
    "transcription": "[ˈræli]",
    "translation": "собраться, созвать (напр. армию)"
  },
  {
    "index": 1318,
    "word": "teenage",
    "transcription": "[ˈtiːnˌeɪʤ]",
    "translation": "возраста 13-19"
  },
  {
    "index": 1319,
    "word": "teenager, teen",
    "transcription": "[ˈtiːnˌeɪʤə,tiːn]",
    "translation": "подросток"
  },
  {
    "index": 1320,
    "word": "abort",
    "transcription": "[əˈbɔːt]",
    "translation": "прерывать"
  },
  {
    "index": 1321,
    "word": "abortion",
    "transcription": "[əˈbɔːʃ(ə)n]",
    "translation": "аборт"
  },
  {
    "index": 1322,
    "word": "ballot",
    "transcription": "[ˈbælət]",
    "translation": "госолование, бюллетень"
  },
  {
    "index": 1323,
    "word": "peaceful",
    "transcription": "[ˈpiːsfʊl]",
    "translation": "мирный"
  },
  {
    "index": 1324,
    "word": "placement",
    "transcription": "[ˈpleɪsmənt]",
    "translation": "размещение"
  },
  {
    "index": 1325,
    "word": "strict",
    "transcription": "[strɪkt]",
    "translation": "строгий, точный"
  },
  {
    "index": 1326,
    "word": "strictness",
    "transcription": "[ˈstrɪktnəs]",
    "translation": "строгость"
  },
  {
    "index": 1327,
    "word": "possible",
    "transcription": "[ˈpɒsəbl]",
    "translation": "возможный"
  },
  {
    "index": 1328,
    "word": "possibility",
    "transcription": "[ˌpɒsəˈbɪlɪti]",
    "translation": "возможность"
  },
  {
    "index": 1329,
    "word": "impossible",
    "transcription": "[ɪmˈpɒsəbl]",
    "translation": "невозможно"
  },
  {
    "index": 1330,
    "word": "impossibility",
    "transcription": "[ɪmˌpɒsəˈbɪlɪti]",
    "translation": "невозможность"
  },
  {
    "index": 1331,
    "word": "knowledge",
    "transcription": "[ˈnɒlɪʤ]",
    "translation": "знания"
  },
  {
    "index": 1332,
    "word": "communicate",
    "transcription": "[kəˈmjuːnɪkeɪt]",
    "translation": "общаться"
  },
  {
    "index": 1333,
    "word": "communication",
    "transcription": "[kəˌmjuːnɪˈkeɪʃən]",
    "translation": "связь, общение"
  },
  {
    "index": 1334,
    "word": "communicative",
    "transcription": "[kəˈmjuːnɪkətɪv]",
    "translation": "общительный"
  },
  {
    "index": 1335,
    "word": "trim",
    "transcription": "[trɪm]",
    "translation": "подстригать, обрезать, ровнять"
  },
  {
    "index": 1336,
    "word": "a good deal",
    "transcription": "[əgʊddiːl]",
    "translation": "много"
  },
  {
    "index": 1337,
    "word": "a great deal",
    "transcription": "[əgreɪtdiːl]",
    "translation": "много"
  },
  {
    "index": 1338,
    "word": "insure",
    "transcription": "[ɪnˈʃʊə]",
    "translation": "страховать, гарантировать"
  },
  {
    "index": 1339,
    "word": "insurance",
    "transcription": "[ɪnˈʃʊərəns]",
    "translation": "страхование"
  },
  {
    "index": 1340,
    "word": "reserve",
    "transcription": "[rɪˈzɜːv]",
    "translation": "запас, запасной, запасать"
  },
  {
    "index": 1341,
    "word": "infect",
    "transcription": "[ɪnˈfɛkt]",
    "translation": "заражать"
  },
  {
    "index": 1342,
    "word": "infection",
    "transcription": "[ɪnˈfɛkʃən]",
    "translation": "инфекционное заболевание"
  },
  {
    "index": 1343,
    "word": "bias",
    "transcription": "[ˈbaɪəs]",
    "translation": "склонность, предвзятость"
  },
  {
    "index": 1344,
    "word": "publish",
    "transcription": "[ˈpʌblɪʃ]",
    "translation": "публиковать, издавать"
  },
  {
    "index": 1345,
    "word": "publisher",
    "transcription": "[ˈpʌblɪʃə]",
    "translation": "издатель, издательство"
  },
  {
    "index": 1346,
    "word": "publicize",
    "transcription": "[ˈpʌblɪsaɪz]",
    "translation": "оповещать, рекламировать"
  },
  {
    "index": 1347,
    "word": "vote",
    "transcription": "[vəʊt]",
    "translation": "голосовать"
  },
  {
    "index": 1348,
    "word": "voter",
    "transcription": "[ˈvəʊtə]",
    "translation": "избиратель"
  },
  {
    "index": 1349,
    "word": "reply",
    "transcription": "[rɪˈplaɪ]",
    "translation": "ответ, отвечать"
  },
  {
    "index": 1350,
    "word": "coal",
    "transcription": "[kəʊl]",
    "translation": "уголь"
  },
  {
    "index": 1351,
    "word": "charcoal",
    "transcription": "[ˈʧɑːkəʊl]",
    "translation": "древесный уголь"
  },
  {
    "index": 1352,
    "word": "tube",
    "transcription": "[tjuːb]",
    "translation": "тюбик"
  },
  {
    "index": 1353,
    "word": "excite",
    "transcription": "[ɪkˈsaɪt]",
    "translation": "волновать, возбуждать"
  },
  {
    "index": 1354,
    "word": "excitement",
    "transcription": "[ɪkˈsaɪtmənt]",
    "translation": "волнение"
  },
  {
    "index": 1355,
    "word": "warrant",
    "transcription": "[ˈwɒrənt]",
    "translation": "гарантировать, ручаться"
  },
  {
    "index": 1356,
    "word": "warranty",
    "transcription": "[ˈwɒrənti]",
    "translation": "гарантия"
  },
  {
    "index": 1357,
    "word": "airline",
    "transcription": "[ˈeəlaɪn]",
    "translation": "авиалиния"
  },
  {
    "index": 1358,
    "word": "airway",
    "transcription": "[ˈeəweɪ]",
    "translation": "авиалиния"
  },
  {
    "index": 1359,
    "word": "train",
    "transcription": "[treɪn]",
    "translation": "поезд"
  },
  {
    "index": 1360,
    "word": "novel",
    "transcription": "[ˈnɒvəl]",
    "translation": "роман"
  },
  {
    "index": 1361,
    "word": "novelist",
    "transcription": "[ˈnɒvəlɪst]",
    "translation": "писатель, романист"
  },
  {
    "index": 1362,
    "word": "make up for",
    "transcription": "[meɪkʌpfɔː]",
    "translation": "компенсировать, наверстать"
  },
  {
    "index": 1363,
    "word": "acknowledge",
    "transcription": "[əkˈnɒlɪʤ]",
    "translation": "признавать, подтверждать"
  },
  {
    "index": 1364,
    "word": "acknowledgement",
    "transcription": "[əkˈnɒlɪʤmənt]",
    "translation": "подтверждение"
  },
  {
    "index": 1365,
    "word": "soccer",
    "transcription": "[ˈsɒkə]",
    "translation": "футбол"
  },
  {
    "index": 1366,
    "word": "solid",
    "transcription": "[ˈsɒlɪd]",
    "translation": "твёрдый, крепкий"
  },
  {
    "index": 1367,
    "word": "solidify",
    "transcription": "[səˈlɪdɪfaɪ]",
    "translation": "затвердевать"
  },
  {
    "index": 1368,
    "word": "solidity",
    "transcription": "[səˈlɪdɪti]",
    "translation": "твёрдость, основательность"
  },
  {
    "index": 1369,
    "word": "species",
    "transcription": "[ˈspiːʃiːz]",
    "translation": "вид (биол.)"
  },
  {
    "index": 1370,
    "word": "subspecies",
    "transcription": "[ˈsʌbˌspiːʃiːz]",
    "translation": "подвид"
  },
  {
    "index": 1371,
    "word": "so-called",
    "transcription": "[ˈsəʊˈkɔːld]",
    "translation": "так называемый"
  },
  {
    "index": 1372,
    "word": "stupid",
    "transcription": "[ˈstjuːpɪd]",
    "translation": "глупый"
  },
  {
    "index": 1373,
    "word": "stupidity",
    "transcription": "[stju(ː)ˈpɪdɪti]",
    "translation": "тупость"
  },
  {
    "index": 1374,
    "word": "charity",
    "transcription": "[ˈʧærɪti]",
    "translation": "благотворительность"
  },
  {
    "index": 1375,
    "word": "charitable",
    "transcription": "[ˈʧærɪtəbl]",
    "translation": "благотворительный"
  },
  {
    "index": 1376,
    "word": "broadcast",
    "transcription": "[ˈbrɔːdkɑːst]",
    "translation": "транслировать, трансляция"
  },
  {
    "index": 1377,
    "word": "broadcaster",
    "transcription": "[ˈbrɔːdkɑːstə]",
    "translation": "диктор"
  },
  {
    "index": 1378,
    "word": "trick",
    "transcription": "[trɪk]",
    "translation": "трюк, фокус, уловка"
  },
  {
    "index": 1379,
    "word": "tricky",
    "transcription": "[ˈtrɪki]",
    "translation": "мудреный"
  },
  {
    "index": 1380,
    "word": "trickery",
    "transcription": "[ˈtrɪkəri]",
    "translation": "обман, надувательство"
  },
  {
    "index": 1381,
    "word": "earn",
    "transcription": "[ɜːn]",
    "translation": "зарабатывать"
  },
  {
    "index": 1382,
    "word": "earnings",
    "transcription": "[ˈɜːnɪŋz]",
    "translation": "заработок"
  },
  {
    "index": 1383,
    "word": "destination",
    "transcription": "[ˌdɛstɪˈneɪʃən]",
    "translation": "место назначения"
  },
  {
    "index": 1384,
    "word": "unite",
    "transcription": "[juːˈnaɪt]",
    "translation": "объединять"
  },
  {
    "index": 1385,
    "word": "unity",
    "transcription": "[ˈjuːnɪti]",
    "translation": "единство"
  },
  {
    "index": 1386,
    "word": "term",
    "transcription": "[tɜːm]",
    "translation": "термин"
  },
  {
    "index": 1387,
    "word": "fashion",
    "transcription": "[ˈfæʃən]",
    "translation": "стиль, образ, манер"
  },
  {
    "index": 1388,
    "word": "give away",
    "transcription": "[gɪvəˈweɪ]",
    "translation": "раздавать, дарить"
  },
  {
    "index": 1389,
    "word": "afraid",
    "transcription": "[əˈfreɪd]",
    "translation": "напуганный"
  },
  {
    "index": 1390,
    "word": "unafraid",
    "transcription": "[ˌʌnəˈfreɪd]",
    "translation": "бесстрашный"
  },
  {
    "index": 1391,
    "word": "miracle",
    "transcription": "[ˈmɪrəkl]",
    "translation": "чудо"
  },
  {
    "index": 1392,
    "word": "miraculous",
    "transcription": "[mɪˈrækjʊləs]",
    "translation": "чудотворный"
  },
  {
    "index": 1393,
    "word": "jail",
    "transcription": "[ʤeɪl]",
    "translation": "тюрьма"
  },
  {
    "index": 1394,
    "word": "jailer",
    "transcription": "[ˈʤeɪlə]",
    "translation": "надзиратель"
  },
  {
    "index": 1395,
    "word": "take up",
    "transcription": "[teɪkʌp]",
    "translation": "заняться чем-либо"
  },
  {
    "index": 1396,
    "word": "pan",
    "transcription": "[pæn]",
    "translation": "скоровода"
  },
  {
    "index": 1397,
    "word": "spokesman",
    "transcription": "[ˈspəʊksmən]",
    "translation": "представитель, прес-секретарь"
  },
  {
    "index": 1398,
    "word": "spokesperson",
    "transcription": "[ˈspəʊksˌpɜːs(ə)n]",
    "translation": "представитель, прес-секретарь"
  },
  {
    "index": 1399,
    "word": "grow (grew, grown)",
    "transcription": "[grəʊ]",
    "translation": "расти или выращивать"
  },
  {
    "index": 1400,
    "word": "growth",
    "transcription": "[grəʊθ]",
    "translation": "рост"
  },
  {
    "index": 1401,
    "word": "dimension",
    "transcription": "[dɪˈmɛnʃən]",
    "translation": "измерение, размер"
  },
  {
    "index": 1402,
    "word": "dimensional",
    "transcription": "[dɪˈmɛnʃənl]",
    "translation": "размерный, n-мерный"
  },
  {
    "index": 1403,
    "word": "multidimensional",
    "transcription": "[ˌmʌltɪdɪˈmɛnʃənl]",
    "translation": "многомерный"
  },
  {
    "index": 1404,
    "word": "verb",
    "transcription": "[vɜːb]",
    "translation": "глагол"
  },
  {
    "index": 1405,
    "word": "prosecute",
    "transcription": "[ˈprɒsɪkjuːt]",
    "translation": "вести, осуществлять"
  },
  {
    "index": 1406,
    "word": "never",
    "transcription": "[ˈnɛvə]",
    "translation": "так и не"
  },
  {
    "index": 1407,
    "word": "shine (shone, shined)",
    "transcription": "[ʃaɪn]",
    "translation": "сиять, блестить, светить"
  },
  {
    "index": 1408,
    "word": "sunshine",
    "transcription": "[ˈsʌnʃaɪn]",
    "translation": "Солнечный свет"
  },
  {
    "index": 1409,
    "word": "kid",
    "transcription": "[kɪd]",
    "translation": "шутить, разыгрывать"
  },
  {
    "index": 1410,
    "word": "late",
    "transcription": "[leɪt]",
    "translation": "покойный"
  },
  {
    "index": 1411,
    "word": "initial",
    "transcription": "[ɪˈnɪʃəl]",
    "translation": "первоначальный"
  },
  {
    "index": 1412,
    "word": "initials",
    "transcription": "[ɪˈnɪʃəlz]",
    "translation": "инициалы"
  },
  {
    "index": 1413,
    "word": "initiate",
    "transcription": "[ɪˈnɪʃɪɪt]",
    "translation": "инициировать"
  },
  {
    "index": 1414,
    "word": "rather",
    "transcription": "[ˈrɑːðə]",
    "translation": "скорее, предпочтительнее"
  },
  {
    "index": 1415,
    "word": "compose",
    "transcription": "[kəmˈpəʊz]",
    "translation": "составлять, сочинять"
  },
  {
    "index": 1416,
    "word": "composition",
    "transcription": "[ˌkɒmpəˈzɪʃən]",
    "translation": "сочинение, композиция"
  },
  {
    "index": 1417,
    "word": "composer",
    "transcription": "[kəmˈpəʊzə]",
    "translation": "сочинитель, композитор"
  },
  {
    "index": 1418,
    "word": "spark",
    "transcription": "[spɑːk]",
    "translation": "искра, вспыхивать"
  },
  {
    "index": 1419,
    "word": "deal with",
    "transcription": "[diːlwɪð]",
    "translation": "иметь дело с"
  },
  {
    "index": 1420,
    "word": "log",
    "transcription": "[lɒg]",
    "translation": "бревно"
  },
  {
    "index": 1421,
    "word": "insight",
    "transcription": "[ˈɪnsaɪt]",
    "translation": "понимание, догадка"
  },
  {
    "index": 1422,
    "word": "insightful",
    "transcription": "[ˈɪnsaɪtf(ə)l]",
    "translation": "проницательный"
  },
  {
    "index": 1423,
    "word": "water down",
    "transcription": "[ˈwɔːtədaʊn]",
    "translation": "разбавить, ослабить"
  },
  {
    "index": 1424,
    "word": "secular",
    "transcription": "[ˈsɛkjʊlə]",
    "translation": "светский"
  },
  {
    "index": 1425,
    "word": "fight off",
    "transcription": "[faɪtɒf]",
    "translation": "отбить"
  },
  {
    "index": 1426,
    "word": "throat",
    "transcription": "[θrəʊt]",
    "translation": "горло"
  },
  {
    "index": 1427,
    "word": "throaty",
    "transcription": "[ˈθrəʊti]",
    "translation": "гортанный, хриплый"
  },
  {
    "index": 1428,
    "word": "tissue",
    "transcription": "[ˈtɪʃuː]",
    "translation": "ткань"
  },
  {
    "index": 1429,
    "word": "prepare",
    "transcription": "[prɪˈpeə]",
    "translation": "приготовить"
  },
  {
    "index": 1430,
    "word": "preparation",
    "transcription": "[ˌprɛpəˈreɪʃən]",
    "translation": "подготовка"
  },
  {
    "index": 1431,
    "word": "unprepared",
    "transcription": "[ˌʌnprɪˈpeəd]",
    "translation": "неподготовленный"
  },
  {
    "index": 1432,
    "word": "elder",
    "transcription": "[ˈɛldə]",
    "translation": "старший"
  },
  {
    "index": 1433,
    "word": "eldest",
    "transcription": "[ˈɛldɪst]",
    "translation": "самый старший"
  },
  {
    "index": 1434,
    "word": "elderly",
    "transcription": "[ˈɛldəli]",
    "translation": "пожилой, престарелый"
  },
  {
    "index": 1435,
    "word": "flood",
    "transcription": "[flʌd]",
    "translation": "потоп, наводнение, наводнять"
  },
  {
    "index": 1436,
    "word": "feel like",
    "transcription": "[fiːllaɪk]",
    "translation": "хотеть"
  },
  {
    "index": 1437,
    "word": "buck",
    "transcription": "[bʌk]",
    "translation": "самец, обычно рогатых"
  },
  {
    "index": 1438,
    "word": "promote",
    "transcription": "[prəˈməʊt]",
    "translation": "поощрять, помогать"
  },
  {
    "index": 1439,
    "word": "promotion",
    "transcription": "[prəˈməʊʃən]",
    "translation": "продвижение"
  },
  {
    "index": 1440,
    "word": "promotional",
    "transcription": "[prəˈməʊʃən(ə)l]",
    "translation": "рекламный"
  },
  {
    "index": 1441,
    "word": "stamp",
    "transcription": "[stæmp]",
    "translation": "печать, штамп, марка"
  },
  {
    "index": 1442,
    "word": "wet",
    "transcription": "[wɛt]",
    "translation": "мокрый, мочить"
  },
  {
    "index": 1443,
    "word": "wetness",
    "transcription": "[ˈwɛtnəs]",
    "translation": "влажность"
  },
  {
    "index": 1444,
    "word": "wetland",
    "transcription": "[ˈwɛtlənd]",
    "translation": "болотистая местность"
  },
  {
    "index": 1445,
    "word": "transition",
    "transcription": "[trænˈsɪʒən]",
    "translation": "переход"
  },
  {
    "index": 1446,
    "word": "transitional",
    "transcription": "[trænˈsɪʒənl]",
    "translation": "переходный"
  },
  {
    "index": 1447,
    "word": "alien",
    "transcription": "[ˈeɪliən]",
    "translation": "чужак, пришелец, иммигрант"
  },
  {
    "index": 1448,
    "word": "aircraft",
    "transcription": "[ˈeəkrɑːft]",
    "translation": "самолёт, авиация"
  },
  {
    "index": 1449,
    "word": "contribute",
    "transcription": "[kənˈtrɪbju(ː)t]",
    "translation": "способствовать, вносить вклад"
  },
  {
    "index": 1450,
    "word": "contributor",
    "transcription": "[kənˈtrɪbjʊtə]",
    "translation": "участник, причастный"
  },
  {
    "index": 1451,
    "word": "contribution",
    "transcription": "[ˌkɒntrɪˈbjuːʃən]",
    "translation": "вклад"
  },
  {
    "index": 1452,
    "word": "grasp",
    "transcription": "[grɑːsp]",
    "translation": "схватывать"
  },
  {
    "index": 1453,
    "word": "grasping",
    "transcription": "[ˈgrɑːspɪŋ]",
    "translation": "алчный"
  },
  {
    "index": 1454,
    "word": "deny",
    "transcription": "[dɪˈnaɪ]",
    "translation": "отрицать"
  },
  {
    "index": 1455,
    "word": "denial",
    "transcription": "[dɪˈnaɪəl]",
    "translation": "отказ"
  },
  {
    "index": 1456,
    "word": "undeniable",
    "transcription": "[ˌʌndɪˈnaɪəbl]",
    "translation": "бесспорный"
  },
  {
    "index": 1457,
    "word": "at last",
    "transcription": "[ætlɑːst]",
    "translation": "наконец"
  },
  {
    "index": 1458,
    "word": "however",
    "transcription": "[haʊˈɛvə]",
    "translation": "однако"
  },
  {
    "index": 1459,
    "word": "upper",
    "transcription": "[ˈʌpə]",
    "translation": "верхний"
  },
  {
    "index": 1460,
    "word": "lower",
    "transcription": "[ˈləʊə]",
    "translation": "нижний"
  },
  {
    "index": 1461,
    "word": "mode",
    "transcription": "[məʊd]",
    "translation": "режим, способ, вид"
  },
  {
    "index": 1462,
    "word": "tight",
    "transcription": "[taɪt]",
    "translation": "тугой, тесный"
  },
  {
    "index": 1463,
    "word": "tighten",
    "transcription": "[ˈtaɪtn]",
    "translation": "затянуть"
  },
  {
    "index": 1464,
    "word": "tightness",
    "transcription": "[ˈtaɪtnɪs]",
    "translation": "теснота"
  },
  {
    "index": 1465,
    "word": "tights",
    "transcription": "[taɪts]",
    "translation": "колготки"
  },
  {
    "index": 1466,
    "word": "ceiling",
    "transcription": "[ˈsiːlɪŋ]",
    "translation": "потолок, перекрытие"
  },
  {
    "index": 1467,
    "word": "grade",
    "transcription": "[greɪd]",
    "translation": "класс, уровень"
  },
  {
    "index": 1468,
    "word": "degrade",
    "transcription": "[dɪˈgreɪd]",
    "translation": "деградировать"
  },
  {
    "index": 1469,
    "word": "participate",
    "transcription": "[pɑːˈtɪsɪpeɪt]",
    "translation": "участвовать"
  },
  {
    "index": 1470,
    "word": "participation",
    "transcription": "[pɑːˌtɪsɪˈpeɪʃən]",
    "translation": "участие"
  },
  {
    "index": 1471,
    "word": "participant",
    "transcription": "[pɑːˈtɪsɪpənt]",
    "translation": "участник"
  },
  {
    "index": 1472,
    "word": "roast",
    "transcription": "[rəʊst]",
    "translation": "жарить, обжигать"
  },
  {
    "index": 1473,
    "word": "step",
    "transcription": "[stɛp]",
    "translation": "шаг, ступать, ступенька"
  },
  {
    "index": 1474,
    "word": "footsteps",
    "transcription": "[ˈfʊtstɛps]",
    "translation": "шаги, поступь"
  },
  {
    "index": 1475,
    "word": "doorstep",
    "transcription": "[ˈdɔːstɛp]",
    "translation": "порог"
  },
  {
    "index": 1476,
    "word": "yield",
    "transcription": "[jiːld]",
    "translation": "уступать"
  },
  {
    "index": 1477,
    "word": "yielding",
    "transcription": "[ˈjiːldɪŋ]",
    "translation": "податливый"
  },
  {
    "index": 1478,
    "word": "unyielding",
    "transcription": "[ʌnˈjiːldɪŋ]",
    "translation": "неподатливый"
  },
  {
    "index": 1479,
    "word": "connect",
    "transcription": "[kəˈnɛkt]",
    "translation": "соединять"
  },
  {
    "index": 1480,
    "word": "connection",
    "transcription": "[kəˈnɛkʃən]",
    "translation": "соединение"
  },
  {
    "index": 1481,
    "word": "interconnected",
    "transcription": "[ˌɪntə(ː)kəˈnɛktɪd]",
    "translation": "взаимосвязаный"
  },
  {
    "index": 1482,
    "word": "disconnect",
    "transcription": "[ˌdɪskəˈnɛkt]",
    "translation": "отключить"
  },
  {
    "index": 1483,
    "word": "slam",
    "transcription": "[slæm]",
    "translation": "хлопать, ударять, захлопывать"
  },
  {
    "index": 1484,
    "word": "pay off",
    "transcription": "[peɪɒf]",
    "translation": "расплатиться (с долгом)"
  },
  {
    "index": 1485,
    "word": "payoff",
    "transcription": "[ˈpeɪˈɒf]",
    "translation": "выплата"
  },
  {
    "index": 1486,
    "word": "complicate",
    "transcription": "[ˈkɒmplɪkeɪt]",
    "translation": "усложнять"
  },
  {
    "index": 1487,
    "word": "complicated",
    "transcription": "[ˈkɒmplɪkeɪtɪd]",
    "translation": "сложный"
  },
  {
    "index": 1488,
    "word": "complication",
    "transcription": "[ˌkɒmplɪˈkeɪʃən]",
    "translation": "усложнение"
  },
  {
    "index": 1489,
    "word": "though (even though)",
    "transcription": "[ðəʊ]",
    "translation": "хотя"
  },
  {
    "index": 1490,
    "word": "luxury",
    "transcription": "[ˈlʌkʃəri]",
    "translation": "роскошь"
  },
  {
    "index": 1491,
    "word": "luxurious",
    "transcription": "[lʌgˈzjʊərɪəs]",
    "translation": "роскошный"
  },
  {
    "index": 1492,
    "word": "endorse",
    "transcription": "[ɪnˈdɔːs]",
    "translation": "одобрять, поддерживать"
  },
  {
    "index": 1493,
    "word": "endorsement",
    "transcription": "[ɪnˈdɔːsmənt]",
    "translation": "поддержка"
  },
  {
    "index": 1494,
    "word": "arrest",
    "transcription": "[əˈrɛst]",
    "translation": "задерживать, тормозить"
  },
  {
    "index": 1495,
    "word": "nominate",
    "transcription": "[ˈnɒmɪneɪt]",
    "translation": "выдвигать, номинировать"
  },
  {
    "index": 1496,
    "word": "nomination",
    "transcription": "[ˌnɒmɪˈneɪʃən]",
    "translation": "выдвижение"
  },
  {
    "index": 1497,
    "word": "nominee",
    "transcription": "[ˌnɒmɪˈniː]",
    "translation": "кандидат"
  },
  {
    "index": 1498,
    "word": "kind",
    "transcription": "[kaɪnd]",
    "translation": "тип, вид"
  },
  {
    "index": 1499,
    "word": "ounce",
    "transcription": "[aʊns]",
    "translation": "унция"
  },
  {
    "index": 1500,
    "word": "oz",
    "transcription": "[ɒz]",
    "translation": "унция (сокр.)"
  },
  {
    "index": 1501,
    "word": "origin",
    "transcription": "[ˈɒrɪʤɪn]",
    "translation": "происхождение, начало"
  },
  {
    "index": 1502,
    "word": "originate",
    "transcription": "[əˈrɪʤɪneɪt]",
    "translation": "происходить"
  },
  {
    "index": 1503,
    "word": "grave",
    "transcription": "[greɪv]",
    "translation": "серьёзный"
  },
  {
    "index": 1504,
    "word": "gravity",
    "transcription": "[ˈgrævɪti]",
    "translation": "серьёзность"
  },
  {
    "index": 1505,
    "word": "south",
    "transcription": "[saʊθ]",
    "translation": "юг, южный"
  },
  {
    "index": 1506,
    "word": "southern",
    "transcription": "[ˈsʌðən]",
    "translation": "южный"
  },
  {
    "index": 1507,
    "word": "southerner",
    "transcription": "[ˈsʌðənə]",
    "translation": "южанин"
  },
  {
    "index": 1508,
    "word": "southward",
    "transcription": "[ˈsaʊθwəd]",
    "translation": "на юг"
  },
  {
    "index": 1509,
    "word": "forth",
    "transcription": "[fɔːθ]",
    "translation": "дальше, вперёд"
  },
  {
    "index": 1510,
    "word": "spell out",
    "transcription": "[spɛlaʊt]",
    "translation": "разъяснить"
  },
  {
    "index": 1511,
    "word": "sight",
    "transcription": "[saɪt]",
    "translation": "вид, поле зрения"
  },
  {
    "index": 1512,
    "word": "alone",
    "transcription": "[əˈləʊn]",
    "translation": "в одиночестве"
  },
  {
    "index": 1513,
    "word": "catch on",
    "transcription": "[kæʧɒn]",
    "translation": "становиться популярным"
  },
  {
    "index": 1514,
    "word": "pain",
    "transcription": "[peɪn]",
    "translation": "боль"
  },
  {
    "index": 1515,
    "word": "painful",
    "transcription": "[ˈpeɪnfʊl]",
    "translation": "болезненный"
  },
  {
    "index": 1516,
    "word": "painless",
    "transcription": "[ˈpeɪnlɪs]",
    "translation": "безболезненный"
  },
  {
    "index": 1517,
    "word": "painkiller",
    "transcription": "[ˈpeɪnˌkɪlə]",
    "translation": "обезболивающие"
  },
  {
    "index": 1518,
    "word": "disappoint",
    "transcription": "[ˌdɪsəˈpɔɪnt]",
    "translation": "разочаровывать"
  },
  {
    "index": 1519,
    "word": "disappointment",
    "transcription": "[ˌdɪsəˈpɔɪntmənt]",
    "translation": "разочарование"
  },
  {
    "index": 1520,
    "word": "funeral",
    "transcription": "[ˈfjuːnərəl]",
    "translation": "похороны, похоронный"
  },
  {
    "index": 1521,
    "word": "suit",
    "transcription": "[sjuːt]",
    "translation": "костюм, комплект"
  },
  {
    "index": 1522,
    "word": "busy",
    "transcription": "[ˈbɪzi]",
    "translation": "занятый"
  },
  {
    "index": 1523,
    "word": "business",
    "transcription": "[ˈbɪznɪs]",
    "translation": "занятие"
  },
  {
    "index": 1524,
    "word": "quote",
    "transcription": "[kwəʊt]",
    "translation": "цитировать"
  },
  {
    "index": 1525,
    "word": "quotation",
    "transcription": "[kwəʊˈteɪʃən]",
    "translation": "цитата"
  },
  {
    "index": 1526,
    "word": "mayor",
    "transcription": "[meə]",
    "translation": "мэр"
  },
  {
    "index": 1527,
    "word": "sympathy",
    "transcription": "[ˈsɪmpəθi]",
    "translation": "сочуствие"
  },
  {
    "index": 1528,
    "word": "sympathise",
    "transcription": "[ˈsɪmpəθaɪz]",
    "translation": "сочувствовать"
  },
  {
    "index": 1529,
    "word": "hill",
    "transcription": "[hɪl]",
    "translation": "холм"
  },
  {
    "index": 1530,
    "word": "hillside",
    "transcription": "[ˈhɪlˌsaɪd]",
    "translation": "склон холма"
  },
  {
    "index": 1531,
    "word": "take on",
    "transcription": "[teɪkɒn]",
    "translation": "соревноваться, столкнуться"
  },
  {
    "index": 1532,
    "word": "realize",
    "transcription": "[ˈrɪəlaɪz]",
    "translation": "понимать"
  },
  {
    "index": 1533,
    "word": "mystery",
    "transcription": "[ˈmɪstəri]",
    "translation": "тайна"
  },
  {
    "index": 1534,
    "word": "mysterious",
    "transcription": "[mɪsˈtɪərɪəs]",
    "translation": "загадочный"
  },
  {
    "index": 1535,
    "word": "desk",
    "transcription": "[dɛsk]",
    "translation": "письменный стол"
  },
  {
    "index": 1536,
    "word": "recover",
    "transcription": "[rɪˈkʌvə]",
    "translation": "восстановиться, выздороветь"
  },
  {
    "index": 1537,
    "word": "recoverable",
    "transcription": "[rɪˈkʌvərəbl]",
    "translation": "воостановимый, обратимый"
  },
  {
    "index": 1538,
    "word": "recovery",
    "transcription": "[rɪˈkʌvəri]",
    "translation": "восстановление"
  },
  {
    "index": 1539,
    "word": "blend",
    "transcription": "[blɛnd]",
    "translation": "смешивать"
  },
  {
    "index": 1540,
    "word": "drift",
    "transcription": "[drɪft]",
    "translation": "дрейфовать или дрифтовать"
  },
  {
    "index": 1541,
    "word": "snowdrift",
    "transcription": "[ˈsnəʊdrɪft]",
    "translation": "сугроб, снежный занос"
  },
  {
    "index": 1542,
    "word": "mountain",
    "transcription": "[ˈmaʊntɪn]",
    "translation": "гора, горный"
  },
  {
    "index": 1543,
    "word": "mountainside",
    "transcription": "[ˈmaʊntɪnsaɪd]",
    "translation": "горный склон"
  },
  {
    "index": 1544,
    "word": "mountainous",
    "transcription": "[ˈmaʊntɪnəs]",
    "translation": "гористый"
  },
  {
    "index": 1545,
    "word": "yield",
    "transcription": "[jiːld]",
    "translation": "приносить (доход)"
  },
  {
    "index": 1546,
    "word": "stop over",
    "transcription": "[stɒpˈəʊvə]",
    "translation": "заехать, остановиться"
  },
  {
    "index": 1547,
    "word": "suppose",
    "transcription": "[səˈpəʊz]",
    "translation": "полагать"
  },
  {
    "index": 1548,
    "word": "supposedly",
    "transcription": "[səˈpəʊzɪdli]",
    "translation": "предположительно"
  },
  {
    "index": 1549,
    "word": "supposition",
    "transcription": "[ˌsʌpəˈzɪʃən]",
    "translation": "предположение"
  },
  {
    "index": 1550,
    "word": "supposed to",
    "transcription": "[səˈpəʊzdtuː]",
    "translation": "должен"
  },
  {
    "index": 1551,
    "word": "fate",
    "transcription": "[feɪt]",
    "translation": "судьба, участь"
  },
  {
    "index": 1552,
    "word": "fated",
    "transcription": "[ˈfeɪtɪd]",
    "translation": "обречённый, предрешённый"
  },
  {
    "index": 1553,
    "word": "stand",
    "transcription": "[stænd]",
    "translation": "терпеть, выносить"
  },
  {
    "index": 1554,
    "word": "drag",
    "transcription": "[dræg]",
    "translation": "тащить, волочить"
  },
  {
    "index": 1555,
    "word": "invite",
    "transcription": "[ɪnˈvaɪt]",
    "translation": "приглашать"
  },
  {
    "index": 1556,
    "word": "uninvited",
    "transcription": "[ˌʌnɪnˈvaɪtɪd]",
    "translation": "незванный"
  },
  {
    "index": 1557,
    "word": "invitation",
    "transcription": "[ˌɪnvɪˈteɪʃən]",
    "translation": "приглашение"
  },
  {
    "index": 1558,
    "word": "confer",
    "transcription": "[kənˈfɜː]",
    "translation": "дать, принести, присудить"
  },
  {
    "index": 1559,
    "word": "crowd",
    "transcription": "[kraʊd]",
    "translation": "толпа"
  },
  {
    "index": 1560,
    "word": "overcrowd",
    "transcription": "[ˌəʊvəˈkraʊd]",
    "translation": "переполнять"
  },
  {
    "index": 1561,
    "word": "crowded",
    "transcription": "[ˈkraʊdɪd]",
    "translation": "переполненный"
  },
  {
    "index": 1562,
    "word": "tell off",
    "transcription": "[tɛlɒf]",
    "translation": "ругать"
  },
  {
    "index": 1563,
    "word": "flee (fled, fled)",
    "transcription": "[fliː]",
    "translation": "спасаться бегством"
  },
  {
    "index": 1564,
    "word": "rally",
    "transcription": "[ˈræli]",
    "translation": "оживать, приходить в себя"
  },
  {
    "index": 1565,
    "word": "get ahead",
    "transcription": "[gɛtəˈhɛd]",
    "translation": "преуспевать, продвигаться"
  },
  {
    "index": 1566,
    "word": "bench",
    "transcription": "[bɛnʧ]",
    "translation": "скамейка"
  },
  {
    "index": 1567,
    "word": "insist",
    "transcription": "[ɪnˈsɪst]",
    "translation": "настаивать"
  },
  {
    "index": 1568,
    "word": "insistent",
    "transcription": "[ɪnˈsɪstənt]",
    "translation": "настойчивый"
  },
  {
    "index": 1569,
    "word": "insistence",
    "transcription": "[ɪnˈsɪstəns]",
    "translation": "настойчивость"
  },
  {
    "index": 1570,
    "word": "aside from",
    "transcription": "[əˈsaɪdfrɒm]",
    "translation": "кроме"
  },
  {
    "index": 1571,
    "word": "shoot (shot, shot)",
    "transcription": "[ʃuːt]",
    "translation": "стрелять"
  },
  {
    "index": 1572,
    "word": "shot",
    "transcription": "[ʃɒt]",
    "translation": "выстрел"
  },
  {
    "index": 1573,
    "word": "update",
    "transcription": "[ʌpˈdeɪt]",
    "translation": "обновлять, обновление"
  },
  {
    "index": 1574,
    "word": "chart",
    "transcription": "[ʧɑːt]",
    "translation": "схема, график, таблица"
  },
  {
    "index": 1575,
    "word": "handle",
    "transcription": "[ˈhændl]",
    "translation": "управляться, обращаться"
  },
  {
    "index": 1576,
    "word": "extent",
    "transcription": "[ɪksˈtɛnt]",
    "translation": "степень, мера"
  },
  {
    "index": 1577,
    "word": "harm",
    "transcription": "[hɑːm]",
    "translation": "вред, вредить"
  },
  {
    "index": 1578,
    "word": "harmless",
    "transcription": "[ˈhɑːmlɪs]",
    "translation": "безвредный"
  },
  {
    "index": 1579,
    "word": "harmful",
    "transcription": "[ˈhɑːmfʊl]",
    "translation": "вредный"
  },
  {
    "index": 1580,
    "word": "objective",
    "transcription": "[əbˈʤɛktɪv]",
    "translation": "цель"
  },
  {
    "index": 1581,
    "word": "kick around",
    "transcription": "[kɪkəˈraʊnd]",
    "translation": "обсудить (разг.)"
  },
  {
    "index": 1582,
    "word": "moreover",
    "transcription": "[mɔːˈrəʊvə]",
    "translation": "более того"
  },
  {
    "index": 1583,
    "word": "even",
    "transcription": "[ˈiːvən]",
    "translation": "ровный"
  },
  {
    "index": 1584,
    "word": "uneven",
    "transcription": "[ʌnˈiːvən]",
    "translation": "неровный"
  },
  {
    "index": 1585,
    "word": "fine",
    "transcription": "[faɪn]",
    "translation": "штраф"
  },
  {
    "index": 1586,
    "word": "perceive",
    "transcription": "[pəˈsiːv]",
    "translation": "воспринимать, ощущать"
  },
  {
    "index": 1587,
    "word": "tentative",
    "transcription": "[ˈtɛntətɪv]",
    "translation": "пробный, экспериментальный"
  },
  {
    "index": 1588,
    "word": "pass away",
    "transcription": "[pɑːsəˈweɪ]",
    "translation": "умереть"
  },
  {
    "index": 1589,
    "word": "total",
    "transcription": "[ˈtəʊtl]",
    "translation": "полный, всеобщий"
  },
  {
    "index": 1590,
    "word": "totality",
    "transcription": "[təʊˈtælɪti]",
    "translation": "совокупность, множество"
  },
  {
    "index": 1591,
    "word": "stream",
    "transcription": "[striːm]",
    "translation": "поток, ручей"
  },
  {
    "index": 1592,
    "word": "downstream",
    "transcription": "[ˌdaʊnˈstriːm]",
    "translation": "вниз по течению"
  },
  {
    "index": 1593,
    "word": "upstream",
    "transcription": "[ˈʌpˈstriːm]",
    "translation": "вверх по течению"
  },
  {
    "index": 1594,
    "word": "incredible",
    "transcription": "[ɪnˈkrɛdəbl]",
    "translation": "невероятный"
  },
  {
    "index": 1595,
    "word": "sin",
    "transcription": "[sɪn]",
    "translation": "грех, грешить"
  },
  {
    "index": 1596,
    "word": "sinner",
    "transcription": "[ˈsɪnə]",
    "translation": "грешник"
  },
  {
    "index": 1597,
    "word": "gaze",
    "transcription": "[geɪz]",
    "translation": "пристально глядеть"
  },
  {
    "index": 1598,
    "word": "prohibit",
    "transcription": "[prəˈhɪbɪt]",
    "translation": "запрещать"
  },
  {
    "index": 1599,
    "word": "prohibition",
    "transcription": "[ˌprəʊɪˈbɪʃən]",
    "translation": "запрет"
  },
  {
    "index": 1600,
    "word": "prohibitive",
    "transcription": "[prəˈhɪbɪtɪv]",
    "translation": "запретительный"
  },
  {
    "index": 1601,
    "word": "perk up",
    "transcription": "[pɜːkʌp]",
    "translation": "воспрянуть, оживиться"
  },
  {
    "index": 1602,
    "word": "arrange",
    "transcription": "[əˈreɪnʤ]",
    "translation": "организовать, уладить и т.д."
  },
  {
    "index": 1603,
    "word": "arrangement",
    "transcription": "[əˈreɪnʤmənt]",
    "translation": "договоренность"
  },
  {
    "index": 1604,
    "word": "rearrange",
    "transcription": "[ˌriːəˈreɪnʤ]",
    "translation": "перестраивать"
  },
  {
    "index": 1605,
    "word": "rearrangement",
    "transcription": "[ˌriːəˈreɪnʤmənt]",
    "translation": "перегруппировка"
  },
  {
    "index": 1606,
    "word": "subtitles",
    "transcription": "[ˈsʌbˌtaɪtlz]",
    "translation": "субтитры"
  },
  {
    "index": 1607,
    "word": "sense",
    "transcription": "[sɛns]",
    "translation": "чувство, осознание"
  },
  {
    "index": 1608,
    "word": "senseless",
    "transcription": "[ˈsɛnslɪs]",
    "translation": "бесчуственный"
  },
  {
    "index": 1609,
    "word": "plenty",
    "transcription": "[ˈplɛnti]",
    "translation": "множество, масса, достаток"
  },
  {
    "index": 1610,
    "word": "plentiful",
    "transcription": "[ˈplɛntɪf(ə)l]",
    "translation": "обильный"
  },
  {
    "index": 1611,
    "word": "train",
    "transcription": "[treɪn]",
    "translation": "тренировать, обучать"
  },
  {
    "index": 1612,
    "word": "trainer",
    "transcription": "[ˈtreɪnə]",
    "translation": "тренер"
  },
  {
    "index": 1613,
    "word": "porch",
    "transcription": "[pɔːʧ]",
    "translation": "крыльцо, терраса, веранда"
  },
  {
    "index": 1614,
    "word": "venture",
    "transcription": "[ˈvɛnʧə]",
    "translation": "авантюра, предприятие, решиться"
  },
  {
    "index": 1615,
    "word": "importance",
    "transcription": "[ɪmˈpɔːtəns]",
    "translation": "важность"
  },
  {
    "index": 1616,
    "word": "important",
    "transcription": "[ɪmˈpɔːtənt]",
    "translation": "важный"
  },
  {
    "index": 1617,
    "word": "employ",
    "transcription": "[ɪmˈplɔɪ]",
    "translation": "использовать"
  },
  {
    "index": 1618,
    "word": "employment",
    "transcription": "[ɪmˈplɔɪmənt]",
    "translation": "использование"
  },
  {
    "index": 1619,
    "word": "margin",
    "transcription": "[ˈmɑːʤɪn]",
    "translation": "край, граница"
  },
  {
    "index": 1620,
    "word": "marginal",
    "transcription": "[ˈmɑːʤɪnəl]",
    "translation": "предельный, пограничный"
  },
  {
    "index": 1621,
    "word": "stun",
    "transcription": "[stʌn]",
    "translation": "ошеломить, оглушить"
  },
  {
    "index": 1622,
    "word": "stunning",
    "transcription": "[ˈstʌnɪŋ]",
    "translation": "сногсшибательный"
  },
  {
    "index": 1623,
    "word": "still",
    "transcription": "[stɪl]",
    "translation": "спокойный, неподвижный"
  },
  {
    "index": 1624,
    "word": "standstill",
    "transcription": "[ˈstændstɪl]",
    "translation": "остановка"
  },
  {
    "index": 1625,
    "word": "tax",
    "transcription": "[tæks]",
    "translation": "налог"
  },
  {
    "index": 1626,
    "word": "taxation",
    "transcription": "[tækˈseɪʃən]",
    "translation": "налогообложение"
  },
  {
    "index": 1627,
    "word": "taxpayer",
    "transcription": "[ˈtæksˌpeɪə]",
    "translation": "налогоплательщик"
  },
  {
    "index": 1628,
    "word": "taxable",
    "transcription": "[ˈtæksəbl]",
    "translation": "облагаемый"
  },
  {
    "index": 1629,
    "word": "take apart",
    "transcription": "[teɪkəˈpɑːt]",
    "translation": "разбирать"
  },
  {
    "index": 1630,
    "word": "impact",
    "transcription": "[ˈɪmpækt]",
    "translation": "воздействие, удар"
  },
  {
    "index": 1631,
    "word": "mount",
    "transcription": "[maʊnt]",
    "translation": "подниматься, забираться"
  },
  {
    "index": 1632,
    "word": "on the contrary",
    "transcription": "[ɒnðəˈkɒntrəri]",
    "translation": "наоборот"
  },
  {
    "index": 1633,
    "word": "probe",
    "transcription": "[prəʊb]",
    "translation": "исследовать, проверить"
  },
  {
    "index": 1634,
    "word": "probation",
    "transcription": "[prəˈbeɪʃən]",
    "translation": "испытание, испыт. срок"
  },
  {
    "index": 1635,
    "word": "deliver",
    "transcription": "[dɪˈlɪvə]",
    "translation": "рожать"
  },
  {
    "index": 1636,
    "word": "delivery",
    "transcription": "[dɪˈlɪvəri]",
    "translation": "роды"
  },
  {
    "index": 1637,
    "word": "supreme",
    "transcription": "[sju(ː)ˈpriːm]",
    "translation": "высший, верховный"
  },
  {
    "index": 1638,
    "word": "supremely",
    "transcription": "[sju(ː)ˈpriːmli]",
    "translation": "в высшей степени"
  },
  {
    "index": 1639,
    "word": "supremacy",
    "transcription": "[sjʊˈprɛməsi]",
    "translation": "превосходство, примат"
  },
  {
    "index": 1640,
    "word": "relative",
    "transcription": "[ˈrɛlətɪv]",
    "translation": "родственник"
  },
  {
    "index": 1641,
    "word": "related",
    "transcription": "[rɪˈleɪtɪd]",
    "translation": "родственный"
  },
  {
    "index": 1642,
    "word": "spare",
    "transcription": "[speə]",
    "translation": "запасной, лишний"
  },
  {
    "index": 1643,
    "word": "route",
    "transcription": "[ruːt]",
    "translation": "маршрут"
  },
  {
    "index": 1644,
    "word": "view",
    "transcription": "[vjuː]",
    "translation": "вид, взгляд"
  },
  {
    "index": 1645,
    "word": "review",
    "transcription": "[rɪˈvjuː]",
    "translation": "обзор, рассмотрение"
  },
  {
    "index": 1646,
    "word": "viewpoint",
    "transcription": "[ˈvjuːpɔɪnt]",
    "translation": "смотровая площадка"
  },
  {
    "index": 1647,
    "word": "preview",
    "transcription": "[ˈpriːvjuː]",
    "translation": "предпросмотр"
  },
  {
    "index": 1648,
    "word": "fierce",
    "transcription": "[fɪəs]",
    "translation": "свирепый"
  },
  {
    "index": 1649,
    "word": "fierceness",
    "transcription": "[ˈfɪəsnəs]",
    "translation": "свирепость"
  },
  {
    "index": 1650,
    "word": "sense",
    "transcription": "[sɛns]",
    "translation": "смысл, значение"
  },
  {
    "index": 1651,
    "word": "senseless",
    "transcription": "[ˈsɛnslɪs]",
    "translation": "бессмысленный"
  },
  {
    "index": 1652,
    "word": "release",
    "transcription": "[rɪˈliːs]",
    "translation": "отпускать, выпускать"
  },
  {
    "index": 1653,
    "word": "rack",
    "transcription": "[ræk]",
    "translation": "стеллаж, вешалка, подставка"
  },
  {
    "index": 1654,
    "word": "reveal",
    "transcription": "[rɪˈviːl]",
    "translation": "раскрыть, выявить"
  },
  {
    "index": 1655,
    "word": "revelation",
    "transcription": "[ˌrɛvɪˈleɪʃən]",
    "translation": "открытие, откровение"
  },
  {
    "index": 1656,
    "word": "fit",
    "transcription": "[fɪt]",
    "translation": "приступ, припадок"
  },
  {
    "index": 1657,
    "word": "attempt",
    "transcription": "[əˈtɛmpt]",
    "translation": "попытка, пытаться"
  },
  {
    "index": 1658,
    "word": "examine",
    "transcription": "[ɪgˈzæmɪn]",
    "translation": "осмотреть, изучить"
  },
  {
    "index": 1659,
    "word": "examination",
    "transcription": "[ɪgˌzæmɪˈneɪʃən]",
    "translation": "осмотр, изучение"
  },
  {
    "index": 1660,
    "word": "necessary",
    "transcription": "[ˈnɛsɪsəri]",
    "translation": "необходимый"
  },
  {
    "index": 1661,
    "word": "unnecessary",
    "transcription": "[ʌnˈnɛsɪsəri]",
    "translation": "ненужный"
  },
  {
    "index": 1662,
    "word": "necessity",
    "transcription": "[nɪˈsɛsɪti]",
    "translation": "необходимость"
  },
  {
    "index": 1663,
    "word": "accustom",
    "transcription": "[əˈkʌstəm]",
    "translation": "приучить"
  },
  {
    "index": 1664,
    "word": "accustomed",
    "transcription": "[əˈkʌstəmd]",
    "translation": "привыкший"
  },
  {
    "index": 1665,
    "word": "unaccustomed",
    "transcription": "[ˌʌnəˈkʌstəmd]",
    "translation": "непривыкший"
  },
  {
    "index": 1666,
    "word": "foundation",
    "transcription": "[faʊnˈdeɪʃən]",
    "translation": "фундамент"
  },
  {
    "index": 1667,
    "word": "halt",
    "transcription": "[hɔːlt]",
    "translation": "останавливаться"
  },
  {
    "index": 1668,
    "word": "bell",
    "transcription": "[bɛl]",
    "translation": "колокол, колокольчик"
  },
  {
    "index": 1669,
    "word": "fall asleep",
    "transcription": "[fɔːləˈsliːp]",
    "translation": "уснуть"
  },
  {
    "index": 1670,
    "word": "advance",
    "transcription": "[ədˈvɑːns]",
    "translation": "продвигаться, продвижение"
  },
  {
    "index": 1671,
    "word": "advanced",
    "transcription": "[ədˈvɑːnst]",
    "translation": "продвинутый"
  },
  {
    "index": 1672,
    "word": "advancement",
    "transcription": "[ədˈvɑːnsmənt]",
    "translation": "продвижение"
  },
  {
    "index": 1673,
    "word": "fiction",
    "transcription": "[ˈfɪkʃən]",
    "translation": "вымысел, худ.литература"
  },
  {
    "index": 1674,
    "word": "fictional",
    "transcription": "[ˈfɪkʃənl]",
    "translation": "вымышленный"
  },
  {
    "index": 1675,
    "word": "nonfiction",
    "transcription": "[ˌnɒnˈfɪkʃən]",
    "translation": "документальная литература"
  },
  {
    "index": 1676,
    "word": "submit to",
    "transcription": "[səbˈmɪttuː]",
    "translation": "подчиниться"
  },
  {
    "index": 1677,
    "word": "submission",
    "transcription": "[səbˈmɪʃən]",
    "translation": "подчинение"
  },
  {
    "index": 1678,
    "word": "by the way",
    "transcription": "[baɪðəweɪ]",
    "translation": "кстати"
  },
  {
    "index": 1679,
    "word": "distribute",
    "transcription": "[dɪsˈtrɪbju(ː)t]",
    "translation": "распределять"
  },
  {
    "index": 1680,
    "word": "distribution",
    "transcription": "[ˌdɪstrɪˈbjuːʃən]",
    "translation": "распределение"
  },
  {
    "index": 1681,
    "word": "redistribute",
    "transcription": "[ˌriːdɪsˈtrɪbju(ː)t]",
    "translation": "перераспределять"
  },
  {
    "index": 1682,
    "word": "celebrity",
    "transcription": "[sɪˈlɛbrɪti]",
    "translation": "знаменитость"
  },
  {
    "index": 1683,
    "word": "goods",
    "transcription": "[gʊdz]",
    "translation": "товары"
  },
  {
    "index": 1684,
    "word": "break",
    "transcription": "[breɪk]",
    "translation": "перерыв, перемена"
  },
  {
    "index": 1685,
    "word": "burden",
    "transcription": "[ˈbɜːdn]",
    "translation": "бремя, нагружать"
  },
  {
    "index": 1686,
    "word": "overburden",
    "transcription": "[ˌəʊvəˈbɜːdn]",
    "translation": "перегружать"
  },
  {
    "index": 1687,
    "word": "accomplish",
    "transcription": "[əˈkɒmplɪʃ]",
    "translation": "выполнить, завершить"
  },
  {
    "index": 1688,
    "word": "accomplishment",
    "transcription": "[əˈkɒmplɪʃmənt]",
    "translation": "достижение"
  },
  {
    "index": 1689,
    "word": "turn on",
    "transcription": "[tɜːnɒn]",
    "translation": "включить"
  },
  {
    "index": 1690,
    "word": "put on",
    "transcription": "[pʊtɒn]",
    "translation": "включить"
  },
  {
    "index": 1691,
    "word": "switch on",
    "transcription": "[swɪʧɒn]",
    "translation": "включить"
  },
  {
    "index": 1692,
    "word": "turn off",
    "transcription": "[tɜːnɒf]",
    "translation": "выключить"
  },
  {
    "index": 1693,
    "word": "put off",
    "transcription": "[pʊtɒf]",
    "translation": "выключить"
  },
  {
    "index": 1694,
    "word": "switch off",
    "transcription": "[swɪʧɒf]",
    "translation": "выключить"
  },
  {
    "index": 1695,
    "word": "serve",
    "transcription": "[sɜːv]",
    "translation": "служить"
  },
  {
    "index": 1696,
    "word": "service",
    "transcription": "[ˈsɜːvɪs]",
    "translation": "служба"
  },
  {
    "index": 1697,
    "word": "go for",
    "transcription": "[gəʊfɔː]",
    "translation": "пытаться достичь, получить"
  },
  {
    "index": 1698,
    "word": "supplement",
    "transcription": "[ˈsʌplɪmənt]",
    "translation": "дополнение, дополнять"
  },
  {
    "index": 1699,
    "word": "supplementation",
    "transcription": "[supplementation]",
    "translation": "дополнение"
  },
  {
    "index": 1700,
    "word": "supplemental",
    "transcription": "[ˌsʌplɪˈmɛntl]",
    "translation": "дополнительный"
  },
  {
    "index": 1701,
    "word": "confident",
    "transcription": "[ˈkɒnfɪdənt]",
    "translation": "уверенный"
  },
  {
    "index": 1702,
    "word": "confidence",
    "transcription": "[ˈkɒnfɪdəns]",
    "translation": "уверенность"
  },
  {
    "index": 1703,
    "word": "bake",
    "transcription": "[beɪk]",
    "translation": "печь (выпекать)"
  },
  {
    "index": 1704,
    "word": "baker",
    "transcription": "[ˈbeɪkə]",
    "translation": "пекарь"
  },
  {
    "index": 1705,
    "word": "capacity",
    "transcription": "[kəˈpæsɪti]",
    "translation": "ёмкость, вместимость"
  },
  {
    "index": 1706,
    "word": "capacious",
    "transcription": "[kəˈpeɪʃəs]",
    "translation": "вместительный"
  },
  {
    "index": 1707,
    "word": "trip",
    "transcription": "[trɪp]",
    "translation": "поездка"
  },
  {
    "index": 1708,
    "word": "abandon",
    "transcription": "[əˈbændən]",
    "translation": "оставить, забросить"
  },
  {
    "index": 1709,
    "word": "abandonment",
    "transcription": "[əˈbændənmənt]",
    "translation": "оставление"
  },
  {
    "index": 1710,
    "word": "ban",
    "transcription": "[bæn]",
    "translation": "запрещать"
  },
  {
    "index": 1711,
    "word": "exceed",
    "transcription": "[ɪkˈsiːd]",
    "translation": "превышать"
  },
  {
    "index": 1712,
    "word": "exceedingly",
    "transcription": "[ɪkˈsiːdɪŋli]",
    "translation": "чрезвычайно"
  },
  {
    "index": 1713,
    "word": "mutual",
    "transcription": "[ˈmjuːtjʊəl]",
    "translation": "взаимный"
  },
  {
    "index": 1714,
    "word": "mutuality",
    "transcription": "[ˌmjuːtjʊˈælɪti]",
    "translation": "взаимность"
  },
  {
    "index": 1715,
    "word": "sneakers",
    "transcription": "[ˈsniːkəz]",
    "translation": "кеды, кроссовки"
  },
  {
    "index": 1716,
    "word": "whisper",
    "transcription": "[ˈwɪspə]",
    "translation": "шептать"
  },
  {
    "index": 1717,
    "word": "restore",
    "transcription": "[rɪsˈtɔː]",
    "translation": "восстанавливать"
  },
  {
    "index": 1718,
    "word": "restoration",
    "transcription": "[ˌrɛstəˈreɪʃən]",
    "translation": "восстановление"
  },
  {
    "index": 1719,
    "word": "brake",
    "transcription": "[breɪk]",
    "translation": "тормоз"
  },
  {
    "index": 1720,
    "word": "tackle",
    "transcription": "[ˈtækl]",
    "translation": "взяться за что-л."
  },
  {
    "index": 1721,
    "word": "rare",
    "transcription": "[reə]",
    "translation": "редкий"
  },
  {
    "index": 1722,
    "word": "rareness",
    "transcription": "[ˈreənɪs]",
    "translation": "редкость, нераспространённость"
  },
  {
    "index": 1723,
    "word": "account",
    "transcription": "[əˈkaʊnt]",
    "translation": "счёт (в банке)"
  },
  {
    "index": 1724,
    "word": "dense",
    "transcription": "[dɛns]",
    "translation": "густой"
  },
  {
    "index": 1725,
    "word": "density",
    "transcription": "[ˈdɛnsɪti]",
    "translation": "плотность, густота"
  },
  {
    "index": 1726,
    "word": "within",
    "transcription": "[wɪˈðɪn]",
    "translation": "в течение"
  },
  {
    "index": 1727,
    "word": "size up",
    "transcription": "[saɪzʌp]",
    "translation": "изучить, оценить"
  },
  {
    "index": 1728,
    "word": "weigh up",
    "transcription": "[weɪʌp]",
    "translation": "взвесить и решить"
  },
  {
    "index": 1729,
    "word": "makeup",
    "transcription": "[ˈmeɪkʌp]",
    "translation": "макияж"
  },
  {
    "index": 1730,
    "word": "manual",
    "transcription": "[ˈmænjʊəl]",
    "translation": "ручной"
  },
  {
    "index": 1731,
    "word": "manually",
    "transcription": "[ˈmænjʊəli]",
    "translation": "вручную"
  },
  {
    "index": 1732,
    "word": "charge",
    "transcription": "[ʧɑːʤ]",
    "translation": "заряжать, нагружать"
  },
  {
    "index": 1733,
    "word": "charger",
    "transcription": "[ˈʧɑːʤə]",
    "translation": "зарядное устройство"
  },
  {
    "index": 1734,
    "word": "discharge",
    "transcription": "[dɪsˈʧɑːʤ]",
    "translation": "разряд"
  },
  {
    "index": 1735,
    "word": "recharge",
    "transcription": "[riːˈʧɑːʤ]",
    "translation": "перезарядить"
  },
  {
    "index": 1736,
    "word": "assure",
    "transcription": "[əˈʃʊə]",
    "translation": "уверять"
  },
  {
    "index": 1737,
    "word": "assurance",
    "transcription": "[əˈʃʊərəns]",
    "translation": "гарантия, заверение"
  },
  {
    "index": 1738,
    "word": "reassure",
    "transcription": "[ˌriːəˈʃʊə]",
    "translation": "успокоить"
  },
  {
    "index": 1739,
    "word": "enforce",
    "transcription": "[ɪnˈfɔːs]",
    "translation": "внедрить, навязать"
  },
  {
    "index": 1740,
    "word": "enforcement",
    "transcription": "[ɪnˈfɔːsmənt]",
    "translation": "правоприменение"
  },
  {
    "index": 1741,
    "word": "carry",
    "transcription": "[ˈkæri]",
    "translation": "носить"
  },
  {
    "index": 1742,
    "word": "carrier",
    "transcription": "[ˈkærɪə]",
    "translation": "перевозчик, носильщик"
  },
  {
    "index": 1743,
    "word": "bullet",
    "transcription": "[ˈbʊlɪt]",
    "translation": "пуля"
  },
  {
    "index": 1744,
    "word": "mention",
    "transcription": "[ˈmɛnʃən]",
    "translation": "упоминать"
  },
  {
    "index": 1745,
    "word": "mentioning",
    "transcription": "[ˈmɛnʃənɪŋ]",
    "translation": "упоминание"
  },
  {
    "index": 1746,
    "word": "shy",
    "transcription": "[ʃaɪ]",
    "translation": "застенчивый"
  },
  {
    "index": 1747,
    "word": "shyness",
    "transcription": "[ˈʃaɪnəs]",
    "translation": "робость"
  },
  {
    "index": 1748,
    "word": "take over",
    "transcription": "[teɪkˈəʊvə]",
    "translation": "принять обязанности"
  },
  {
    "index": 1749,
    "word": "lean over",
    "transcription": "[liːnˈəʊvə]",
    "translation": "наклониться над, через"
  },
  {
    "index": 1750,
    "word": "resort",
    "transcription": "[rɪˈzɔːt]",
    "translation": "курорт"
  },
  {
    "index": 1751,
    "word": "landscape",
    "transcription": "[ˈlænskeɪp]",
    "translation": "пейзаж"
  },
  {
    "index": 1752,
    "word": "opportunity",
    "transcription": "[ˌɒpəˈtjuːnɪti]",
    "translation": "возможность"
  },
  {
    "index": 1753,
    "word": "commission",
    "transcription": "[kəˈmɪʃən]",
    "translation": "поручение, полномочие"
  },
  {
    "index": 1754,
    "word": "smart",
    "transcription": "[smɑːt]",
    "translation": "умный, хитрый"
  },
  {
    "index": 1755,
    "word": "van",
    "transcription": "[væn]",
    "translation": "фургон"
  },
  {
    "index": 1756,
    "word": "mini-van",
    "transcription": "[ˈmɪnɪ-væn]",
    "translation": "мини-вэн"
  },
  {
    "index": 1757,
    "word": "strength",
    "transcription": "[strɛŋθ]",
    "translation": "сила, мощность, прочность"
  },
  {
    "index": 1758,
    "word": "strengthen",
    "transcription": "[ˈstrɛŋθən]",
    "translation": "укреплять"
  },
  {
    "index": 1759,
    "word": "certain",
    "transcription": "[ˈsɜːtn]",
    "translation": "определённый, уверенный"
  },
  {
    "index": 1760,
    "word": "certainly",
    "transcription": "[ˈsɜːtnli]",
    "translation": "безусловно"
  },
  {
    "index": 1761,
    "word": "certainty",
    "transcription": "[ˈsɜːtnti]",
    "translation": "определенность"
  },
  {
    "index": 1762,
    "word": "uncertain",
    "transcription": "[ʌnˈsɜːtn]",
    "translation": "неуверенный"
  },
  {
    "index": 1763,
    "word": "uncertainty",
    "transcription": "[ʌnˈsɜːtnti]",
    "translation": "неопределенность"
  },
  {
    "index": 1764,
    "word": "whether",
    "transcription": "[ˈwɛðə]",
    "translation": "ли"
  },
  {
    "index": 1765,
    "word": "agriculture",
    "transcription": "[ˈægrɪkʌlʧə]",
    "translation": "сельское хозяйство"
  },
  {
    "index": 1766,
    "word": "agricultural",
    "transcription": "[ˌægrɪˈkʌlʧərəl]",
    "translation": "сельскохозяйственный"
  },
  {
    "index": 1767,
    "word": "agriculturist",
    "transcription": "[ˌægrɪˈkʌlʧərɪst]",
    "translation": "агроном"
  },
  {
    "index": 1768,
    "word": "gather",
    "transcription": "[ˈgæðə]",
    "translation": "собирать (ся)"
  },
  {
    "index": 1769,
    "word": "round",
    "transcription": "[raʊnd]",
    "translation": "круг, круглый"
  },
  {
    "index": 1770,
    "word": "rounded",
    "transcription": "[ˈraʊndɪd]",
    "translation": "закругленный"
  },
  {
    "index": 1771,
    "word": "read up on",
    "transcription": "[riːdʌpɒn]",
    "translation": "изучить вопрос"
  },
  {
    "index": 1772,
    "word": "prosecute",
    "transcription": "[ˈprɒsɪkjuːt]",
    "translation": "преследовать (законодательно)"
  },
  {
    "index": 1773,
    "word": "prosecution",
    "transcription": "[ˌprɒsɪˈkjuːʃən]",
    "translation": "судебное преследование"
  },
  {
    "index": 1774,
    "word": "prosecutor",
    "transcription": "[ˈprɒsɪkjuːtə]",
    "translation": "прокурор"
  },
  {
    "index": 1775,
    "word": "give away",
    "transcription": "[gɪvəˈweɪ]",
    "translation": "выдать (раскрыть)"
  },
  {
    "index": 1776,
    "word": "continue",
    "transcription": "[kənˈtɪnju]",
    "translation": "продолжить"
  },
  {
    "index": 1777,
    "word": "continuation",
    "transcription": "[kənˌtɪnjʊˈeɪʃən]",
    "translation": "продолжение"
  },
  {
    "index": 1778,
    "word": "continuous",
    "transcription": "[kənˈtɪnjʊəs]",
    "translation": "непрерывный"
  },
  {
    "index": 1779,
    "word": "line up",
    "transcription": "[laɪnʌp]",
    "translation": "встать в очередь"
  },
  {
    "index": 1780,
    "word": "queue up",
    "transcription": "[kjuːʌp]",
    "translation": "встать в очередь"
  },
  {
    "index": 1781,
    "word": "mistake for",
    "transcription": "[mɪsˈteɪkfɔː]",
    "translation": "принимать за"
  },
  {
    "index": 1782,
    "word": "take for",
    "transcription": "[teɪkfɔː]",
    "translation": "принимать за"
  },
  {
    "index": 1783,
    "word": "suppress",
    "transcription": "[səˈprɛs]",
    "translation": "подавлять, удерживать"
  },
  {
    "index": 1784,
    "word": "suppression",
    "transcription": "[səˈprɛʃən]",
    "translation": "подавление"
  },
  {
    "index": 1785,
    "word": "charge",
    "transcription": "[ʧɑːʤ]",
    "translation": "обвинять"
  },
  {
    "index": 1786,
    "word": "grant",
    "transcription": "[grɑːnt]",
    "translation": "давать, дарить"
  },
  {
    "index": 1787,
    "word": "swear",
    "transcription": "[sweə]",
    "translation": "клясться"
  },
  {
    "index": 1788,
    "word": "profound",
    "transcription": "[prəˈfaʊnd]",
    "translation": "глубокий (перен.)"
  },
  {
    "index": 1789,
    "word": "profoundness",
    "transcription": "[prəˈfaʊndnɪs]",
    "translation": "глубина"
  },
  {
    "index": 1790,
    "word": "fall in love with",
    "transcription": "[fɔːlɪnlʌvwɪð]",
    "translation": "влюбиться"
  },
  {
    "index": 1791,
    "word": "all along",
    "transcription": "[ɔːləˈlɒŋ]",
    "translation": "всё время"
  },
  {
    "index": 1792,
    "word": "reproduce",
    "transcription": "[ˌriːprəˈdjuːs]",
    "translation": "воспроизводить"
  },
  {
    "index": 1793,
    "word": "reproduction",
    "transcription": "[ˌriːprəˈdʌkʃən]",
    "translation": "воспроизведение"
  },
  {
    "index": 1794,
    "word": "reproducible",
    "transcription": "[ˌriːprəˈdjuːsəbl]",
    "translation": "воспроизводимый"
  },
  {
    "index": 1795,
    "word": "article",
    "transcription": "[ˈɑːtɪkl]",
    "translation": "статья"
  },
  {
    "index": 1796,
    "word": "therefore",
    "transcription": "[ˈðeəfɔː]",
    "translation": "следовательно"
  },
  {
    "index": 1797,
    "word": "after all",
    "transcription": "[ˈɑːftərɔːl]",
    "translation": "всё-таки, в конце концов"
  },
  {
    "index": 1798,
    "word": "direct",
    "transcription": "[dɪˈrɛkt]",
    "translation": "прямой, непосредственный"
  },
  {
    "index": 1799,
    "word": "indirect",
    "transcription": "[ˌɪndɪˈrɛkt]",
    "translation": "косвенный"
  },
  {
    "index": 1800,
    "word": "background",
    "transcription": "[ˈbækgraʊnd]",
    "translation": "происхождение, предыстория и т.д."
  },
  {
    "index": 1801,
    "word": "chief",
    "transcription": "[ʧiːf]",
    "translation": "вождь, начальник, главный"
  },
  {
    "index": 1802,
    "word": "chiefly",
    "transcription": "[ˈʧiːfli]",
    "translation": "главным образом"
  },
  {
    "index": 1803,
    "word": "disabled",
    "transcription": "[dɪsˈeɪbld]",
    "translation": "инвалид (прил.)"
  },
  {
    "index": 1804,
    "word": "disability",
    "transcription": "[ˌdɪsəˈbɪlɪti]",
    "translation": "инвалидность"
  },
  {
    "index": 1805,
    "word": "shower",
    "transcription": "[ˈʃaʊə]",
    "translation": "душ"
  },
  {
    "index": 1806,
    "word": "display",
    "transcription": "[dɪsˈpleɪ]",
    "translation": "показ(ывать), демонстрировать"
  },
  {
    "index": 1807,
    "word": "extreme",
    "transcription": "[ɪksˈtriːm]",
    "translation": "крайний"
  },
  {
    "index": 1808,
    "word": "extremity",
    "transcription": "[ɪksˈtrɛmɪti]",
    "translation": "крайность"
  },
  {
    "index": 1809,
    "word": "spell",
    "transcription": "[spɛl]",
    "translation": "произносить (писать) по буквам"
  },
  {
    "index": 1810,
    "word": "oath",
    "transcription": "[əʊθ]",
    "translation": "клятва, присяга"
  },
  {
    "index": 1811,
    "word": "protect",
    "transcription": "[prəˈtɛkt]",
    "translation": "защищать"
  },
  {
    "index": 1812,
    "word": "protection",
    "transcription": "[prəˈtɛkʃən]",
    "translation": "защита"
  },
  {
    "index": 1813,
    "word": "protective",
    "transcription": "[prəˈtɛktɪv]",
    "translation": "защитный"
  },
  {
    "index": 1814,
    "word": "store",
    "transcription": "[stɔː]",
    "translation": "хранить, хранилище"
  },
  {
    "index": 1815,
    "word": "storage",
    "transcription": "[ˈstɔːrɪʤ]",
    "translation": "место хранения"
  },
  {
    "index": 1816,
    "word": "contemporary",
    "transcription": "[kənˈtɛmpərəri]",
    "translation": "современный, современник"
  },
  {
    "index": 1817,
    "word": "personnel",
    "transcription": "[ˌpɜːsəˈnɛl]",
    "translation": "персонал, личный состав"
  },
  {
    "index": 1818,
    "word": "citizen",
    "transcription": "[ˈsɪtɪzn]",
    "translation": "гражданин"
  },
  {
    "index": 1819,
    "word": "citizenship",
    "transcription": "[ˈsɪtɪznʃɪp]",
    "translation": "гражданство"
  },
  {
    "index": 1820,
    "word": "grab",
    "transcription": "[græb]",
    "translation": "схватить, нахапать и т.д."
  },
  {
    "index": 1821,
    "word": "run out of",
    "transcription": "[rʌnaʊtɒv]",
    "translation": "исчерпать запас"
  },
  {
    "index": 1822,
    "word": "be out of",
    "transcription": "[biːaʊtɒv]",
    "translation": "не иметь больше запаса"
  },
  {
    "index": 1823,
    "word": "cave",
    "transcription": "[keɪv]",
    "translation": "пещера"
  },
  {
    "index": 1824,
    "word": "random",
    "transcription": "[ˈrændəm]",
    "translation": "выбранный наугад"
  },
  {
    "index": 1825,
    "word": "randomized",
    "transcription": "[randomized]",
    "translation": "случайный, перемешанный"
  },
  {
    "index": 1826,
    "word": "marry",
    "transcription": "[ˈmæri]",
    "translation": "жениться, выйти замуж"
  },
  {
    "index": 1827,
    "word": "marriage",
    "transcription": "[ˈmærɪʤ]",
    "translation": "брак"
  },
  {
    "index": 1828,
    "word": "married",
    "transcription": "[ˈmærɪd]",
    "translation": "женат или замужем"
  },
  {
    "index": 1829,
    "word": "puzzle",
    "transcription": "[ˈpʌzl]",
    "translation": "озадачить"
  },
  {
    "index": 1830,
    "word": "puzzlement",
    "transcription": "[ˈpʌzlmənt]",
    "translation": "замешательство"
  },
  {
    "index": 1831,
    "word": "remains",
    "transcription": "[rɪˈmeɪnz]",
    "translation": "остатки, останки"
  },
  {
    "index": 1832,
    "word": "belong to",
    "transcription": "[bɪˈlɒŋtuː]",
    "translation": "принадлежать"
  },
  {
    "index": 1833,
    "word": "belongings",
    "transcription": "[bɪˈlɒŋɪŋz]",
    "translation": "пожитки"
  },
  {
    "index": 1834,
    "word": "obstacle",
    "transcription": "[ˈɒbstəkl]",
    "translation": "препятствие"
  },
  {
    "index": 1835,
    "word": "swan",
    "transcription": "[swɒn]",
    "translation": "лебедь"
  },
  {
    "index": 1836,
    "word": "lean",
    "transcription": "[liːn]",
    "translation": "худой"
  },
  {
    "index": 1837,
    "word": "early",
    "transcription": "[ˈɜːli]",
    "translation": "рано, ранний"
  },
  {
    "index": 1838,
    "word": "object",
    "transcription": "[ˈɒbʤɪkt]",
    "translation": "возражать"
  },
  {
    "index": 1839,
    "word": "objection",
    "transcription": "[əbˈʤɛkʃən]",
    "translation": "возражение"
  },
  {
    "index": 1840,
    "word": "memory",
    "transcription": "[ˈmɛməri]",
    "translation": "память"
  },
  {
    "index": 1841,
    "word": "memorize",
    "transcription": "[ˈmɛməraɪz]",
    "translation": "выучить наизусть"
  },
  {
    "index": 1842,
    "word": "memorable",
    "transcription": "[ˈmɛmərəbl]",
    "translation": "памятный"
  },
  {
    "index": 1843,
    "word": "float",
    "transcription": "[fləʊt]",
    "translation": "плыть"
  },
  {
    "index": 1844,
    "word": "crime",
    "transcription": "[kraɪm]",
    "translation": "преступление"
  },
  {
    "index": 1845,
    "word": "feel for",
    "transcription": "[fiːlfɔː]",
    "translation": "сочувствовать"
  },
  {
    "index": 1846,
    "word": "anyway",
    "transcription": "[ˈɛnɪweɪ]",
    "translation": "в любом случае"
  },
  {
    "index": 1847,
    "word": "bitter",
    "transcription": "[ˈbɪtə]",
    "translation": "горький"
  },
  {
    "index": 1848,
    "word": "bitterness",
    "transcription": "[ˈbɪtənɪs]",
    "translation": "горечь"
  },
  {
    "index": 1849,
    "word": "perfect",
    "transcription": "[ˈpɜːfɪkt]",
    "translation": "совершенный"
  },
  {
    "index": 1850,
    "word": "perfection",
    "transcription": "[pəˈfɛkʃən]",
    "translation": "совершенство"
  },
  {
    "index": 1851,
    "word": "imperfection",
    "transcription": "[ˌɪmpəˈfɛkʃən]",
    "translation": "несовершенство"
  },
  {
    "index": 1852,
    "word": "drain",
    "transcription": "[dreɪn]",
    "translation": "слив, водосток"
  },
  {
    "index": 1853,
    "word": "drainage",
    "transcription": "[ˈdreɪnɪʤ]",
    "translation": "дренаж"
  },
  {
    "index": 1854,
    "word": "major",
    "transcription": "[ˈmeɪʤə]",
    "translation": "главный, большой"
  },
  {
    "index": 1855,
    "word": "majority",
    "transcription": "[məˈʤɒrɪti]",
    "translation": "большинство"
  },
  {
    "index": 1856,
    "word": "shell",
    "transcription": "[ʃɛl]",
    "translation": "скорлупа, раковина, гильза"
  },
  {
    "index": 1857,
    "word": "guideline",
    "transcription": "[ˈgaɪdlaɪn]",
    "translation": "общее правило, принцип"
  },
  {
    "index": 1858,
    "word": "asleep",
    "transcription": "[əˈsliːp]",
    "translation": "спящий"
  },
  {
    "index": 1859,
    "word": "sigh",
    "transcription": "[saɪ]",
    "translation": "вздох"
  },
  {
    "index": 1860,
    "word": "different",
    "transcription": "[ˈdɪfrənt]",
    "translation": "разный, отличающийся"
  },
  {
    "index": 1861,
    "word": "difference",
    "transcription": "[ˈdɪfrəns]",
    "translation": "разница"
  },
  {
    "index": 1862,
    "word": "differentiate",
    "transcription": "[ˌdɪfəˈrɛnʃɪeɪt]",
    "translation": "отличать"
  },
  {
    "index": 1863,
    "word": "crack",
    "transcription": "[kræk]",
    "translation": "трескаться, трещина"
  },
  {
    "index": 1864,
    "word": "instead",
    "transcription": "[ɪnˈstɛd]",
    "translation": "вместо"
  },
  {
    "index": 1865,
    "word": "delicate",
    "transcription": "[ˈdɛlɪkɪt]",
    "translation": "тонкий, нежный, хрупкий"
  },
  {
    "index": 1866,
    "word": "delicacy",
    "transcription": "[ˈdɛlɪkəsi]",
    "translation": "тонкость, нежность или деликатес"
  },
  {
    "index": 1867,
    "word": "boom",
    "transcription": "[buːm]",
    "translation": "заграждение, пояс"
  },
  {
    "index": 1868,
    "word": "band",
    "transcription": "[bænd]",
    "translation": "ансамбль"
  },
  {
    "index": 1869,
    "word": "chip",
    "transcription": "[ʧɪp]",
    "translation": "щепка, стружка"
  },
  {
    "index": 1870,
    "word": "stay",
    "transcription": "[steɪ]",
    "translation": "оставаться"
  },
  {
    "index": 1871,
    "word": "dismiss",
    "transcription": "[dɪsˈmɪs]",
    "translation": "прогонять, посылать, увольнять"
  },
  {
    "index": 1872,
    "word": "dismissal",
    "transcription": "[dɪsˈmɪsəl]",
    "translation": "отправка, увольнение"
  },
  {
    "index": 1873,
    "word": "domain",
    "transcription": "[dəʊˈmeɪn]",
    "translation": "область, сфера, владение"
  },
  {
    "index": 1874,
    "word": "agree",
    "transcription": "[əˈgriː]",
    "translation": "соглашаться"
  },
  {
    "index": 1875,
    "word": "agreement",
    "transcription": "[əˈgriːmənt]",
    "translation": "согласие"
  },
  {
    "index": 1876,
    "word": "disagree",
    "transcription": "[ˌdɪsəˈgriː]",
    "translation": "не соглашаться"
  },
  {
    "index": 1877,
    "word": "disagreement",
    "transcription": "[ˌdɪsəˈgriːmənt]",
    "translation": "разногласие"
  },
  {
    "index": 1878,
    "word": "although",
    "transcription": "[ɔːlˈðəʊ]",
    "translation": "хотя и"
  },
  {
    "index": 1879,
    "word": "soon",
    "transcription": "[suːn]",
    "translation": "скоро или рано"
  },
  {
    "index": 1880,
    "word": "slide (slid, slid)",
    "transcription": "[slaɪd]",
    "translation": "скользить"
  },
  {
    "index": 1881,
    "word": "endanger",
    "transcription": "[ɪnˈdeɪnʤə]",
    "translation": "подвергать опасности"
  },
  {
    "index": 1882,
    "word": "possess",
    "transcription": "[pəˈzɛs]",
    "translation": "обладать"
  },
  {
    "index": 1883,
    "word": "possession",
    "transcription": "[pəˈzɛʃən]",
    "translation": "владение"
  },
  {
    "index": 1884,
    "word": "possessor",
    "transcription": "[pəˈzɛsə]",
    "translation": "владелец"
  },
  {
    "index": 1885,
    "word": "truck",
    "transcription": "[trʌk]",
    "translation": "грузовик"
  },
  {
    "index": 1886,
    "word": "similar",
    "transcription": "[ˈsɪmɪlə]",
    "translation": "похожий"
  },
  {
    "index": 1887,
    "word": "similarity",
    "transcription": "[ˌsɪmɪˈlærɪti]",
    "translation": "сходство"
  },
  {
    "index": 1888,
    "word": "piece",
    "transcription": "[piːs]",
    "translation": "предмет, часть, кусок"
  },
  {
    "index": 1889,
    "word": "aware",
    "transcription": "[əˈweə]",
    "translation": "осведомлённый"
  },
  {
    "index": 1890,
    "word": "unaware",
    "transcription": "[ˌʌnəˈweə]",
    "translation": "не знающий"
  },
  {
    "index": 1891,
    "word": "awareness",
    "transcription": "[əˈweənəs]",
    "translation": "осознание"
  },
  {
    "index": 1892,
    "word": "unawares",
    "transcription": "[ˌʌnəˈweəz]",
    "translation": "врасплох"
  },
  {
    "index": 1893,
    "word": "inside out",
    "transcription": "[ɪnˈsaɪdaʊt]",
    "translation": "наизнанку"
  },
  {
    "index": 1894,
    "word": "middle",
    "transcription": "[ˈmɪdl]",
    "translation": "середина, средний"
  },
  {
    "index": 1895,
    "word": "substantial",
    "transcription": "[səbˈstænʃəl]",
    "translation": "существенный, значительный"
  },
  {
    "index": 1896,
    "word": "co-worker",
    "transcription": "[kəʊ-ˈwɜːkə]",
    "translation": "сотрудник"
  },
  {
    "index": 1897,
    "word": "beam",
    "transcription": "[biːm]",
    "translation": "луч"
  },
  {
    "index": 1898,
    "word": "take after",
    "transcription": "[teɪkˈɑːftə]",
    "translation": "быть в (родителей)"
  },
  {
    "index": 1899,
    "word": "scatter",
    "transcription": "[ˈskætə]",
    "translation": "разбрасывать, рассеивать"
  },
  {
    "index": 1900,
    "word": "vegetable",
    "transcription": "[ˈvɛʤɪtəbl]",
    "translation": "овощ"
  },
  {
    "index": 1901,
    "word": "guard",
    "transcription": "[gɑːd]",
    "translation": "сторожить, стража"
  },
  {
    "index": 1902,
    "word": "safeguard",
    "transcription": "[ˈseɪfgɑːd]",
    "translation": "защита"
  },
  {
    "index": 1903,
    "word": "guardian",
    "transcription": "[ˈgɑːdiən]",
    "translation": "хранитель или опекун"
  },
  {
    "index": 1904,
    "word": "military",
    "transcription": "[ˈmɪlɪtəri]",
    "translation": "военный"
  },
  {
    "index": 1905,
    "word": "militant",
    "transcription": "[ˈmɪlɪtənt]",
    "translation": "воинствующий"
  },
  {
    "index": 1906,
    "word": "liberty",
    "transcription": "[ˈlɪbəti]",
    "translation": "свобода"
  },
  {
    "index": 1907,
    "word": "proud",
    "transcription": "[praʊd]",
    "translation": "гордый, гордящийся"
  },
  {
    "index": 1908,
    "word": "recall",
    "transcription": "[rɪˈkɔːl]",
    "translation": "вспоминать"
  },
  {
    "index": 1909,
    "word": "steal (stole, stolen)",
    "transcription": "[stiːl]",
    "translation": "красть"
  },
  {
    "index": 1910,
    "word": "fade",
    "transcription": "[feɪd]",
    "translation": "увядать, блекнуть"
  },
  {
    "index": 1911,
    "word": "unfading",
    "transcription": "[ʌnˈfeɪdɪŋ]",
    "translation": "неувядающий"
  },
  {
    "index": 1912,
    "word": "fade away",
    "transcription": "[feɪdəˈweɪ]",
    "translation": "угаснуть, исчезнуть"
  },
  {
    "index": 1913,
    "word": "pump",
    "transcription": "[pʌmp]",
    "translation": "насос, нагнетать"
  },
  {
    "index": 1914,
    "word": "put in",
    "transcription": "[pʊtɪn]",
    "translation": "вложить"
  },
  {
    "index": 1915,
    "word": "dive",
    "transcription": "[daɪv]",
    "translation": "нырять"
  },
  {
    "index": 1916,
    "word": "dive in",
    "transcription": "[daɪvɪn]",
    "translation": "нырнуть в"
  },
  {
    "index": 1917,
    "word": "lung",
    "transcription": "[lʌŋ]",
    "translation": "легкое"
  },
  {
    "index": 1918,
    "word": "tip",
    "transcription": "[tɪp]",
    "translation": "кончик, верхушка"
  },
  {
    "index": 1919,
    "word": "integrity",
    "transcription": "[ɪnˈtɛgrɪti]",
    "translation": "честность, порядочность"
  },
  {
    "index": 1920,
    "word": "excavate",
    "transcription": "[ˈɛkskəveɪt]",
    "translation": "рыть, выкапывать"
  },
  {
    "index": 1921,
    "word": "excavation",
    "transcription": "[ˌɛkskəˈveɪʃən]",
    "translation": "раскопки, земляные работы"
  },
  {
    "index": 1922,
    "word": "rest",
    "transcription": "[rɛst]",
    "translation": "остаток, остальное"
  },
  {
    "index": 1923,
    "word": "chest",
    "transcription": "[ʧɛst]",
    "translation": "грудь (грудная клетка)"
  },
  {
    "index": 1924,
    "word": "wedding",
    "transcription": "[ˈwɛdɪŋ]",
    "translation": "свадьба"
  },
  {
    "index": 1925,
    "word": "legal",
    "transcription": "[ˈliːgəl]",
    "translation": "законный, правовой"
  },
  {
    "index": 1926,
    "word": "illegal",
    "transcription": "[ɪˈliːgəl]",
    "translation": "нелегальный"
  },
  {
    "index": 1927,
    "word": "legalize",
    "transcription": "[ˈliːgəlaɪz]",
    "translation": "легализовать"
  },
  {
    "index": 1928,
    "word": "legal action",
    "transcription": "[ˈliːgəlˈækʃ(ə)n]",
    "translation": "судебный процесс"
  },
  {
    "index": 1929,
    "word": "consider",
    "transcription": "[kənˈsɪdə]",
    "translation": "рассматривать, учитывать"
  },
  {
    "index": 1930,
    "word": "consideration",
    "transcription": "[kənˌsɪdəˈreɪʃən]",
    "translation": "рассмотрение"
  },
  {
    "index": 1931,
    "word": "reconsider",
    "transcription": "[ˌriːkənˈsɪdə]",
    "translation": "пересматривать"
  },
  {
    "index": 1932,
    "word": "drag on",
    "transcription": "[drægɒn]",
    "translation": "тянуться долго"
  },
  {
    "index": 1933,
    "word": "occupation",
    "transcription": "[ˌɒkjʊˈpeɪʃən]",
    "translation": "профессия, род деятельности"
  },
  {
    "index": 1934,
    "word": "check into",
    "transcription": "[ʧɛkˈɪntuː]",
    "translation": "лечь (в больницу)"
  },
  {
    "index": 1935,
    "word": "courage",
    "transcription": "[ˈkʌrɪʤ]",
    "translation": "мужество"
  },
  {
    "index": 1936,
    "word": "courageous",
    "transcription": "[kəˈreɪʤəs]",
    "translation": "отважный"
  },
  {
    "index": 1937,
    "word": "gates",
    "transcription": "[geɪts]",
    "translation": "ворота"
  },
  {
    "index": 1938,
    "word": "gateway",
    "transcription": "[ˈgeɪtweɪ]",
    "translation": "вход, шлюз"
  },
  {
    "index": 1939,
    "word": "tongue",
    "transcription": "[tʌŋ]",
    "translation": "язык"
  },
  {
    "index": 1940,
    "word": "event",
    "transcription": "[ɪˈvɛnt]",
    "translation": "событие"
  },
  {
    "index": 1941,
    "word": "eventful",
    "transcription": "[ɪˈvɛntfʊl]",
    "translation": "богатый событиями"
  },
  {
    "index": 1942,
    "word": "fault",
    "transcription": "[fɔːlt]",
    "translation": "недостаток, неисправность"
  },
  {
    "index": 1943,
    "word": "faulty",
    "transcription": "[ˈfɔːlti]",
    "translation": "ошибочный, неисправный"
  },
  {
    "index": 1944,
    "word": "faultless",
    "transcription": "[ˈfɔːltlɪs]",
    "translation": "безупречный"
  },
  {
    "index": 1945,
    "word": "give out",
    "transcription": "[gɪvaʊt]",
    "translation": "раздать, выдать"
  },
  {
    "index": 1946,
    "word": "hand out",
    "transcription": "[hændaʊt]",
    "translation": "раздавать"
  },
  {
    "index": 1947,
    "word": "pass out",
    "transcription": "[pɑːsaʊt]",
    "translation": "распространять"
  },
  {
    "index": 1948,
    "word": "civilian",
    "transcription": "[səˈvɪljən]",
    "translation": "гражданский"
  },
  {
    "index": 1949,
    "word": "restrict",
    "transcription": "[rɪsˈtrɪkt]",
    "translation": "ограничивать"
  },
  {
    "index": 1950,
    "word": "restriction",
    "transcription": "[rɪsˈtrɪkʃən]",
    "translation": "ограничение"
  },
  {
    "index": 1951,
    "word": "nut",
    "transcription": "[nʌt]",
    "translation": "орех"
  },
  {
    "index": 1952,
    "word": "embrace",
    "transcription": "[ɪmˈbreɪs]",
    "translation": "обхватить, обнять, обхват"
  },
  {
    "index": 1953,
    "word": "both",
    "transcription": "[bəʊθ]",
    "translation": "оба"
  },
  {
    "index": 1954,
    "word": "hug",
    "transcription": "[hʌg]",
    "translation": "объятие, обнимать"
  },
  {
    "index": 1955,
    "word": "give a hug",
    "transcription": "[gɪvəhʌg]",
    "translation": "обнять"
  },
  {
    "index": 1956,
    "word": "battle",
    "transcription": "[ˈbætl]",
    "translation": "битва"
  },
  {
    "index": 1957,
    "word": "battlefield",
    "transcription": "[ˈbætlfiːld]",
    "translation": "поле боя"
  },
  {
    "index": 1958,
    "word": "go under",
    "transcription": "[gəʊˈʌndə]",
    "translation": "разориться"
  },
  {
    "index": 1959,
    "word": "bridge",
    "transcription": "[brɪʤ]",
    "translation": "мост"
  },
  {
    "index": 1960,
    "word": "drawbridge",
    "transcription": "[ˈdrɔːbrɪʤ]",
    "translation": "подъемный мост"
  },
  {
    "index": 1961,
    "word": "indigenous",
    "transcription": "[ɪnˈdɪʤɪnəs]",
    "translation": "коренной, местный"
  },
  {
    "index": 1962,
    "word": "beef",
    "transcription": "[biːf]",
    "translation": "говядина"
  },
  {
    "index": 1963,
    "word": "beefy",
    "transcription": "[ˈbiːfi]",
    "translation": "мясистый, мускулистый"
  },
  {
    "index": 1964,
    "word": "dish",
    "transcription": "[dɪʃ]",
    "translation": "тарелка или миска"
  },
  {
    "index": 1965,
    "word": "create",
    "transcription": "[kri(ː)ˈeɪt]",
    "translation": "создавать"
  },
  {
    "index": 1966,
    "word": "creation",
    "transcription": "[kri(ː)ˈeɪʃən]",
    "translation": "создание"
  },
  {
    "index": 1967,
    "word": "creator",
    "transcription": "[kri(ː)ˈeɪtə]",
    "translation": "создатель"
  },
  {
    "index": 1968,
    "word": "ever",
    "transcription": "[ˈɛvə]",
    "translation": "когда-либо"
  },
  {
    "index": 1969,
    "word": "in a row",
    "transcription": "[ɪnərəʊ]",
    "translation": "подряд"
  },
  {
    "index": 1970,
    "word": "inch",
    "transcription": "[ɪnʧ]",
    "translation": "дюйм"
  },
  {
    "index": 1971,
    "word": "glory",
    "transcription": "[ˈglɔːri]",
    "translation": "слава, сияние"
  },
  {
    "index": 1972,
    "word": "glorious",
    "transcription": "[ˈglɔːrɪəs]",
    "translation": "славный"
  },
  {
    "index": 1973,
    "word": "glorify",
    "transcription": "[ˈglɔːrɪfaɪ]",
    "translation": "прославлять"
  },
  {
    "index": 1974,
    "word": "glorification",
    "transcription": "[ˌglɔːrɪfɪˈkeɪʃən]",
    "translation": "прославление"
  },
  {
    "index": 1975,
    "word": "loud",
    "transcription": "[laʊd]",
    "translation": "громкий"
  },
  {
    "index": 1976,
    "word": "loudness",
    "transcription": "[ˈlaʊdnəs]",
    "translation": "громкость"
  },
  {
    "index": 1977,
    "word": "utility",
    "transcription": "[ju(ː)ˈtɪlɪti]",
    "translation": "полезность"
  },
  {
    "index": 1978,
    "word": "fund",
    "transcription": "[fʌnd]",
    "translation": "фонд, финансировать"
  },
  {
    "index": 1979,
    "word": "funding",
    "transcription": "[ˈfʌndɪŋ]",
    "translation": "финансирование, субсидирование"
  },
  {
    "index": 1980,
    "word": "sentence",
    "transcription": "[ˈsɛntəns]",
    "translation": "предложение"
  },
  {
    "index": 1981,
    "word": "distant",
    "transcription": "[ˈdɪstənt]",
    "translation": "отдалённый"
  },
  {
    "index": 1982,
    "word": "distance",
    "transcription": "[ˈdɪstəns]",
    "translation": "расстояние"
  },
  {
    "index": 1983,
    "word": "curve",
    "transcription": "[kɜːv]",
    "translation": "изгибать, кривая"
  },
  {
    "index": 1984,
    "word": "curved",
    "transcription": "[kɜːvd]",
    "translation": "изогнутый"
  },
  {
    "index": 1985,
    "word": "evident",
    "transcription": "[ˈɛvɪdənt]",
    "translation": "очевидный"
  },
  {
    "index": 1986,
    "word": "decline",
    "transcription": "[dɪˈklaɪn]",
    "translation": "снижаться, снижение"
  },
  {
    "index": 1987,
    "word": "inside",
    "transcription": "[ɪnˈsaɪd]",
    "translation": "внутри"
  },
  {
    "index": 1988,
    "word": "value",
    "transcription": "[ˈvæljuː]",
    "translation": "ценность, оценивать"
  },
  {
    "index": 1989,
    "word": "valuable",
    "transcription": "[ˈvæljʊəbl]",
    "translation": "ценный"
  },
  {
    "index": 1990,
    "word": "invaluable",
    "transcription": "[ɪnˈvæljʊəbl]",
    "translation": "неоценимый"
  },
  {
    "index": 1991,
    "word": "undervalue",
    "transcription": "[ˌʌndəˈvæljuː]",
    "translation": "недооценивать"
  },
  {
    "index": 1992,
    "word": "devalue",
    "transcription": "[ˌdiːˈvæljuː]",
    "translation": "девальвировать"
  },
  {
    "index": 1993,
    "word": "rate",
    "transcription": "[reɪt]",
    "translation": "показатель, уровень, оценивать"
  },
  {
    "index": 1994,
    "word": "underrate",
    "transcription": "[ˌʌndəˈreɪt]",
    "translation": "недооценивать"
  },
  {
    "index": 1995,
    "word": "community",
    "transcription": "[kəˈmjuːnɪti]",
    "translation": "община, сообщество"
  },
  {
    "index": 1996,
    "word": "advise",
    "transcription": "[ədˈvaɪz]",
    "translation": "советовать"
  },
  {
    "index": 1997,
    "word": "adviser",
    "transcription": "[ədˈvaɪzə]",
    "translation": "консультант"
  },
  {
    "index": 1998,
    "word": "advisable",
    "transcription": "[ədˈvaɪzəbl]",
    "translation": "рекомендуемый"
  },
  {
    "index": 1999,
    "word": "advisory",
    "transcription": "[ədˈvaɪzəri]",
    "translation": "консультативный"
  },
  {
    "index": 2000,
    "word": "consistent",
    "transcription": "[kənˈsɪstənt]",
    "translation": "последовательный"
  },
  {
    "index": 2001,
    "word": "inconsistent",
    "transcription": "[ˌɪnkənˈsɪstənt]",
    "translation": "непоследовательный"
  },
  {
    "index": 2002,
    "word": "consistency",
    "transcription": "[kənˈsɪstənsi]",
    "translation": "согласованность, последовательность"
  },
  {
    "index": 2003,
    "word": "inconsistency",
    "transcription": "[ˌɪnkənˈsɪstənsi]",
    "translation": "несогласованность"
  },
  {
    "index": 2004,
    "word": "apply",
    "transcription": "[əˈplaɪ]",
    "translation": "применять, применяться"
  },
  {
    "index": 2005,
    "word": "application",
    "transcription": "[ˌæplɪˈkeɪʃ(ə)n]",
    "translation": "приложение, применение"
  },
  {
    "index": 2006,
    "word": "applicable",
    "transcription": "[ˈæplɪkəbl]",
    "translation": "применимый"
  },
  {
    "index": 2007,
    "word": "applied",
    "transcription": "[əˈplaɪd]",
    "translation": "прикладной"
  },
  {
    "index": 2008,
    "word": "length",
    "transcription": "[lɛŋθ]",
    "translation": "длина"
  },
  {
    "index": 2009,
    "word": "lengthen",
    "transcription": "[ˈlɛŋθən]",
    "translation": "удлинять"
  },
  {
    "index": 2010,
    "word": "come up to",
    "transcription": "[kʌmʌptuː]",
    "translation": "подойти к кому-л."
  },
  {
    "index": 2011,
    "word": "walk up to",
    "transcription": "[wɔːkʌptuː]",
    "translation": "подойти к"
  },
  {
    "index": 2012,
    "word": "go up to",
    "transcription": "[gəʊʌptuː]",
    "translation": "подойти к"
  },
  {
    "index": 2013,
    "word": "calm",
    "transcription": "[kɑːm]",
    "translation": "спокойный, успокоить"
  },
  {
    "index": 2014,
    "word": "calmness",
    "transcription": "[ˈkɑːmnɪs]",
    "translation": "спокойствие"
  },
  {
    "index": 2015,
    "word": "justice",
    "transcription": "[ˈʤʌstɪs]",
    "translation": "правосудие, справедливость"
  },
  {
    "index": 2016,
    "word": "injustice",
    "transcription": "[ɪnˈʤʌstɪs]",
    "translation": "несправедливость"
  },
  {
    "index": 2017,
    "word": "chapter",
    "transcription": "[ˈʧæptə]",
    "translation": "глава"
  },
  {
    "index": 2018,
    "word": "ratio",
    "transcription": "[ˈreɪʃɪəʊ]",
    "translation": "соотношение, пропорции"
  },
  {
    "index": 2019,
    "word": "block",
    "transcription": "[blɒk]",
    "translation": "кусок, глыба и т. д."
  },
  {
    "index": 2020,
    "word": "leave (left, left)",
    "transcription": "[liːv]",
    "translation": "уйти, покинуть"
  },
  {
    "index": 2021,
    "word": "various",
    "transcription": "[ˈveərɪəs]",
    "translation": "разнообразный"
  },
  {
    "index": 2022,
    "word": "refer",
    "transcription": "[rɪˈfɜː]",
    "translation": "сослаться, отослать"
  },
  {
    "index": 2023,
    "word": "reference",
    "transcription": "[ˈrɛfrəns]",
    "translation": "ссылка, рекомендация"
  },
  {
    "index": 2024,
    "word": "base",
    "transcription": "[beɪs]",
    "translation": "основа, основывать"
  },
  {
    "index": 2025,
    "word": "basic",
    "transcription": "[ˈbeɪsɪk]",
    "translation": "основной"
  },
  {
    "index": 2026,
    "word": "basically",
    "transcription": "[ˈbeɪsɪkəli]",
    "translation": "в основном"
  },
  {
    "index": 2027,
    "word": "baseless",
    "transcription": "[ˈbeɪslɪs]",
    "translation": "необоснованный"
  },
  {
    "index": 2028,
    "word": "basis",
    "transcription": "[ˈbeɪsɪs]",
    "translation": "основа"
  },
  {
    "index": 2029,
    "word": "quality",
    "transcription": "[ˈkwɒlɪti]",
    "translation": "качество, качественный"
  },
  {
    "index": 2030,
    "word": "qualitative",
    "transcription": "[ˈkwɒlɪtətɪv]",
    "translation": "качественный"
  },
  {
    "index": 2031,
    "word": "tops",
    "transcription": "[tɒps]",
    "translation": "самое большое"
  },
  {
    "index": 2032,
    "word": "constant",
    "transcription": "[ˈkɒnstənt]",
    "translation": "постоянный"
  },
  {
    "index": 2033,
    "word": "roll up",
    "transcription": "[rəʊlʌp]",
    "translation": "свернуть, скатать"
  },
  {
    "index": 2034,
    "word": "boat",
    "transcription": "[bəʊt]",
    "translation": "лодка, судно"
  },
  {
    "index": 2035,
    "word": "sailboat",
    "transcription": "[ˈseɪlbəʊt]",
    "translation": "парусная лодка"
  },
  {
    "index": 2036,
    "word": "amuse",
    "transcription": "[əˈmjuːz]",
    "translation": "развлечь, порадовать"
  },
  {
    "index": 2037,
    "word": "amusement",
    "transcription": "[əˈmjuːzmənt]",
    "translation": "забава"
  },
  {
    "index": 2038,
    "word": "health",
    "transcription": "[hɛlθ]",
    "translation": "здоровье"
  },
  {
    "index": 2039,
    "word": "healthy",
    "transcription": "[ˈhɛlθi]",
    "translation": "здоровый"
  },
  {
    "index": 2040,
    "word": "deserve",
    "transcription": "[dɪˈzɜːv]",
    "translation": "заслуживать"
  },
  {
    "index": 2041,
    "word": "deserved",
    "transcription": "[dɪˈzɜːvd]",
    "translation": "заслуженный"
  },
  {
    "index": 2042,
    "word": "undeserved",
    "transcription": "[ˌʌndɪˈzɜːvd]",
    "translation": "незаслуженный"
  },
  {
    "index": 2043,
    "word": "explain",
    "transcription": "[ɪksˈpleɪn]",
    "translation": "объяснять"
  },
  {
    "index": 2044,
    "word": "explanation",
    "transcription": "[ˌɛkspləˈneɪʃən]",
    "translation": "объяснение"
  },
  {
    "index": 2045,
    "word": "pleasure",
    "transcription": "[ˈplɛʒə]",
    "translation": "удовольствие, наслаждение"
  },
  {
    "index": 2046,
    "word": "displeasure",
    "transcription": "[dɪsˈplɛʒə]",
    "translation": "неудовольствие"
  },
  {
    "index": 2047,
    "word": "notion",
    "transcription": "[ˈnəʊʃən]",
    "translation": "понятие, представление"
  },
  {
    "index": 2048,
    "word": "salmon",
    "transcription": "[ˈsæmən]",
    "translation": "лосось"
  },
  {
    "index": 2049,
    "word": "salmon (color)",
    "transcription": "[ˈsæmən]",
    "translation": "цвет лососевого мяса"
  },
  {
    "index": 2050,
    "word": "sweep (swept, swept)",
    "transcription": "[swiːp]",
    "translation": "подметать"
  },
  {
    "index": 2051,
    "word": "exist",
    "transcription": "[ɪgˈzɪst]",
    "translation": "существовать"
  },
  {
    "index": 2052,
    "word": "existence",
    "transcription": "[ɪgˈzɪstəns]",
    "translation": "существование"
  },
  {
    "index": 2053,
    "word": "existent",
    "transcription": "[ɪgˈzɪstənt]",
    "translation": "существующий"
  },
  {
    "index": 2054,
    "word": "nonexistent",
    "transcription": "[nonexistent]",
    "translation": "несуществующий"
  },
  {
    "index": 2055,
    "word": "coexist",
    "transcription": "[ˌkəʊɪgˈzɪst]",
    "translation": "сосуществовать"
  },
  {
    "index": 2056,
    "word": "dump",
    "transcription": "[dʌmp]",
    "translation": "сваливать, сбрасывать свалка"
  },
  {
    "index": 2057,
    "word": "dumpster",
    "transcription": "[dumpster]",
    "translation": "мусорный контейнер"
  },
  {
    "index": 2058,
    "word": "ask around",
    "transcription": "[ɑːskəˈraʊnd]",
    "translation": "поспрашивать"
  },
  {
    "index": 2059,
    "word": "report",
    "transcription": "[rɪˈpɔːt]",
    "translation": "доклад, отчёт"
  },
  {
    "index": 2060,
    "word": "reportedly",
    "transcription": "[rɪˈpɔːtɪdli]",
    "translation": "по сообщениям"
  },
  {
    "index": 2061,
    "word": "angle",
    "transcription": "[ˈæŋgl]",
    "translation": "угол, угловой"
  },
  {
    "index": 2062,
    "word": "angular",
    "transcription": "[ˈæŋgjʊlə]",
    "translation": "угловой"
  },
  {
    "index": 2063,
    "word": "rumor (rumour)",
    "transcription": "[ˈruːmə]",
    "translation": "слух"
  },
  {
    "index": 2064,
    "word": "fall over",
    "transcription": "[fɔːlˈəʊvə]",
    "translation": "упасть, перевернуться"
  },
  {
    "index": 2065,
    "word": "send out",
    "transcription": "[sɛndaʊt]",
    "translation": "рассылать"
  },
  {
    "index": 2066,
    "word": "mail out",
    "transcription": "[meɪlaʊt]",
    "translation": "рассылать"
  },
  {
    "index": 2067,
    "word": "maintain",
    "transcription": "[meɪnˈteɪn]",
    "translation": "поддерживать, сохранять"
  },
  {
    "index": 2068,
    "word": "maintenance",
    "transcription": "[ˈmeɪntənəns]",
    "translation": "поддержание"
  },
  {
    "index": 2069,
    "word": "blame",
    "transcription": "[bleɪm]",
    "translation": "винить"
  },
  {
    "index": 2070,
    "word": "blameless",
    "transcription": "[ˈbleɪmlɪs]",
    "translation": "безупречный"
  },
  {
    "index": 2071,
    "word": "resume",
    "transcription": "[rɪˈzjuːm]",
    "translation": "возобновить"
  },
  {
    "index": 2072,
    "word": "resumption",
    "transcription": "[rɪˈzʌmpʃən]",
    "translation": "возобновление"
  },
  {
    "index": 2073,
    "word": "persuade",
    "transcription": "[pəˈsweɪd]",
    "translation": "убеждать"
  },
  {
    "index": 2074,
    "word": "persuasion",
    "transcription": "[pəˈsweɪʒən]",
    "translation": "убедительность"
  },
  {
    "index": 2075,
    "word": "persuasive",
    "transcription": "[pəˈsweɪsɪv]",
    "translation": "убедительный"
  },
  {
    "index": 2076,
    "word": "whale",
    "transcription": "[weɪl]",
    "translation": "кит"
  },
  {
    "index": 2077,
    "word": "whip",
    "transcription": "[wɪp]",
    "translation": "кнут, хлестать"
  },
  {
    "index": 2078,
    "word": "beneath",
    "transcription": "[bɪˈniːθ]",
    "translation": "ниже, под"
  },
  {
    "index": 2079,
    "word": "measure",
    "transcription": "[ˈmɛʒə]",
    "translation": "измерять, измерение"
  },
  {
    "index": 2080,
    "word": "measurement",
    "transcription": "[ˈmɛʒəmənt]",
    "translation": "измерение, замер"
  },
  {
    "index": 2081,
    "word": "measurable",
    "transcription": "[ˈmɛʒərəbl]",
    "translation": "измеримый, измеряемый"
  },
  {
    "index": 2082,
    "word": "immeasurable",
    "transcription": "[ɪˈmɛʒərəbl]",
    "translation": "неизмеримый, безмерный"
  },
  {
    "index": 2083,
    "word": "century",
    "transcription": "[ˈsɛnʧʊri]",
    "translation": "век"
  },
  {
    "index": 2084,
    "word": "summit",
    "transcription": "[ˈsʌmɪt]",
    "translation": "вершина, верх"
  },
  {
    "index": 2085,
    "word": "let up",
    "transcription": "[lɛtʌp]",
    "translation": "прекратиться, стихнуть"
  },
  {
    "index": 2086,
    "word": "in spite of",
    "transcription": "[ɪnspaɪtɒv]",
    "translation": "несмотря на"
  },
  {
    "index": 2087,
    "word": "palm",
    "transcription": "[pɑːm]",
    "translation": "ладонь"
  },
  {
    "index": 2088,
    "word": "affection",
    "transcription": "[əˈfɛkʃ(ə)n]",
    "translation": "привязанность, влечение"
  },
  {
    "index": 2089,
    "word": "disaffection",
    "transcription": "[disaffection]",
    "translation": "неприязнь"
  },
  {
    "index": 2090,
    "word": "affectionate",
    "transcription": "[əˈfɛkʃnɪt]",
    "translation": "любящий"
  },
  {
    "index": 2091,
    "word": "content with",
    "transcription": "[ˈkɒntɛntwɪð]",
    "translation": "довольный, довольство"
  },
  {
    "index": 2092,
    "word": "discontent",
    "transcription": "[ˌdɪskənˈtɛnt]",
    "translation": "недовольство"
  },
  {
    "index": 2093,
    "word": "sustain",
    "transcription": "[səsˈteɪn]",
    "translation": "поддерживать"
  },
  {
    "index": 2094,
    "word": "sustainable",
    "transcription": "[səsˈteɪnəbl]",
    "translation": "устойчивый, жизнеспособный"
  },
  {
    "index": 2095,
    "word": "unsustainable",
    "transcription": "[ˌʌnsəsˈteɪnəbl]",
    "translation": "неустойчивый"
  },
  {
    "index": 2096,
    "word": "sustainability",
    "transcription": "[səsˌteɪnəˈbɪlɪti]",
    "translation": "устойчивость"
  },
  {
    "index": 2097,
    "word": "pick",
    "transcription": "[pɪk]",
    "translation": "подбирать, собирать"
  },
  {
    "index": 2098,
    "word": "adjust",
    "transcription": "[əˈʤʌst]",
    "translation": "настраивать, поправлять и т.д."
  },
  {
    "index": 2099,
    "word": "adjustment",
    "transcription": "[əˈʤʌstmənt]",
    "translation": "регулировка"
  },
  {
    "index": 2100,
    "word": "readjust",
    "transcription": "[ˌriːəˈʤʌst]",
    "translation": "подрегулировать"
  },
  {
    "index": 2101,
    "word": "face with",
    "transcription": "[feɪswɪð]",
    "translation": "столкнуться (перен)"
  },
  {
    "index": 2102,
    "word": "freeze (froze, frozen)",
    "transcription": "[friːz]",
    "translation": "замораживать"
  },
  {
    "index": 2103,
    "word": "illness",
    "transcription": "[ˈɪlnɪs]",
    "translation": "болезнь"
  },
  {
    "index": 2104,
    "word": "undertake",
    "transcription": "[ˌʌndəˈteɪk]",
    "translation": "предпринимать"
  },
  {
    "index": 2105,
    "word": "undertaking",
    "transcription": "[ˌʌndəˈteɪkɪŋ]",
    "translation": "предприятие"
  },
  {
    "index": 2106,
    "word": "mess",
    "transcription": "[mɛs]",
    "translation": "беспорядок, путаница"
  },
  {
    "index": 2107,
    "word": "sure",
    "transcription": "[ʃʊə]",
    "translation": "уверенный"
  },
  {
    "index": 2108,
    "word": "unsure",
    "transcription": "[ʌnˈʃʊə]",
    "translation": "неуверенный"
  },
  {
    "index": 2109,
    "word": "sureness",
    "transcription": "[ˈʃʊənəs]",
    "translation": "уверенность"
  },
  {
    "index": 2110,
    "word": "spring (sprang, sprung)",
    "transcription": "[sprɪŋ]",
    "translation": "источник, проистекать"
  },
  {
    "index": 2111,
    "word": "hurricane",
    "transcription": "[ˈhʌrɪkən]",
    "translation": "ураган"
  },
  {
    "index": 2112,
    "word": "supervise",
    "transcription": "[ˈsjuːpəvaɪz]",
    "translation": "надзирать, контролировать"
  },
  {
    "index": 2113,
    "word": "supervision",
    "transcription": "[ˌsjuːpəˈvɪʒən]",
    "translation": "надзор"
  },
  {
    "index": 2114,
    "word": "supervisor",
    "transcription": "[ˈsjuːpəvaɪzə]",
    "translation": "руководитель, инспектор"
  },
  {
    "index": 2115,
    "word": "licence",
    "transcription": "[ˈlaɪsəns]",
    "translation": "разрешение"
  },
  {
    "index": 2116,
    "word": "license",
    "transcription": "[ˈlaɪsəns]",
    "translation": "лицензия"
  },
  {
    "index": 2117,
    "word": "withdraw",
    "transcription": "[wɪðˈdrɔː]",
    "translation": "отводить, убирать"
  },
  {
    "index": 2118,
    "word": "withdrawal",
    "transcription": "[wɪðˈdrɔːəl]",
    "translation": "вывод, отвод"
  },
  {
    "index": 2119,
    "word": "relate",
    "transcription": "[rɪˈleɪt]",
    "translation": "рассказывать, передавать"
  },
  {
    "index": 2120,
    "word": "correct",
    "transcription": "[kəˈrɛkt]",
    "translation": "правильный, исправлять"
  },
  {
    "index": 2121,
    "word": "correctness",
    "transcription": "[kəˈrɛktnəs]",
    "translation": "правильность"
  },
  {
    "index": 2122,
    "word": "correction",
    "transcription": "[kəˈrɛkʃən]",
    "translation": "исправление"
  },
  {
    "index": 2123,
    "word": "incorrect",
    "transcription": "[ˌɪnkəˈrɛkt]",
    "translation": "неправильный"
  },
  {
    "index": 2124,
    "word": "eventual",
    "transcription": "[ɪˈvɛnʧʊəl]",
    "translation": "конечный, возможный"
  },
  {
    "index": 2125,
    "word": "eventually",
    "transcription": "[ɪˈvɛnʧəli]",
    "translation": "в итоге"
  },
  {
    "index": 2126,
    "word": "register",
    "transcription": "[ˈrɛʤɪstə]",
    "translation": "касса (магазина)"
  },
  {
    "index": 2127,
    "word": "bright",
    "transcription": "[braɪt]",
    "translation": "яркий"
  },
  {
    "index": 2128,
    "word": "brighten",
    "transcription": "[ˈbraɪtn]",
    "translation": "проясняться, подсвечивать"
  },
  {
    "index": 2129,
    "word": "brightness",
    "transcription": "[ˈbraɪtnɪs]",
    "translation": "яркость, блеск"
  },
  {
    "index": 2130,
    "word": "medium",
    "transcription": "[ˈmiːdiəm]",
    "translation": "средство, способ"
  },
  {
    "index": 2131,
    "word": "prime",
    "transcription": "[praɪm]",
    "translation": "важный, главный, первый"
  },
  {
    "index": 2132,
    "word": "prime-minister",
    "transcription": "[praɪm-ˈmɪnɪstə]",
    "translation": "премьер"
  },
  {
    "index": 2133,
    "word": "knock out",
    "transcription": "[nɒkaʊt]",
    "translation": "вырубить (ударом)"
  },
  {
    "index": 2134,
    "word": "serve",
    "transcription": "[sɜːv]",
    "translation": "сидеть (в тюрьме)"
  },
  {
    "index": 2135,
    "word": "previous",
    "transcription": "[ˈpriːviəs]",
    "translation": "предшествующий"
  },
  {
    "index": 2136,
    "word": "previously",
    "transcription": "[ˈpriːviəsli]",
    "translation": "ранее, предварительно"
  },
  {
    "index": 2137,
    "word": "deputy",
    "transcription": "[ˈdɛpjʊti]",
    "translation": "депутат, представитель"
  },
  {
    "index": 2138,
    "word": "fortnight",
    "transcription": "[ˈfɔːtnaɪt]",
    "translation": "две недели (брит.)"
  },
  {
    "index": 2139,
    "word": "poll",
    "transcription": "[pəʊl]",
    "translation": "опрос или голосование"
  },
  {
    "index": 2140,
    "word": "pollster",
    "transcription": "[pollster]",
    "translation": "тот, кто производит опрос"
  },
  {
    "index": 2141,
    "word": "operate",
    "transcription": "[ˈɒpəreɪt]",
    "translation": "управлять, работать с"
  },
  {
    "index": 2142,
    "word": "operation",
    "transcription": "[ˌɒpəˈreɪʃən]",
    "translation": "управление, работа с"
  },
  {
    "index": 2143,
    "word": "cast (cast, cast)",
    "transcription": "[kɑːst]",
    "translation": "бросать, метать"
  },
  {
    "index": 2144,
    "word": "may",
    "transcription": "[meɪ]",
    "translation": "пусть"
  },
  {
    "index": 2145,
    "word": "temple",
    "transcription": "[ˈtɛmpl]",
    "translation": "храм"
  },
  {
    "index": 2146,
    "word": "beside",
    "transcription": "[bɪˈsaɪd]",
    "translation": "рядом"
  },
  {
    "index": 2147,
    "word": "effort",
    "transcription": "[ˈɛfət]",
    "translation": "усилие, старание"
  },
  {
    "index": 2148,
    "word": "effortlessly",
    "transcription": "[ˈɛfətlɪsli]",
    "translation": "без особых усилий"
  },
  {
    "index": 2149,
    "word": "west",
    "transcription": "[wɛst]",
    "translation": "запад"
  },
  {
    "index": 2150,
    "word": "western",
    "transcription": "[ˈwɛstən]",
    "translation": "западный"
  },
  {
    "index": 2151,
    "word": "westward",
    "transcription": "[ˈwɛstwəd]",
    "translation": "на запад"
  },
  {
    "index": 2152,
    "word": "furniture",
    "transcription": "[ˈfɜːnɪʧə]",
    "translation": "мебель"
  },
  {
    "index": 2153,
    "word": "stroke",
    "transcription": "[strəʊk]",
    "translation": "гладить"
  },
  {
    "index": 2154,
    "word": "facilitate",
    "transcription": "[fəˈsɪlɪteɪt]",
    "translation": "облегчать, способствовать"
  },
  {
    "index": 2155,
    "word": "facilitation",
    "transcription": "[fəˈsɪlɪˈteɪʃən]",
    "translation": "облегчение"
  },
  {
    "index": 2156,
    "word": "elbow",
    "transcription": "[ˈɛlbəʊ]",
    "translation": "локоть"
  },
  {
    "index": 2157,
    "word": "testify",
    "transcription": "[ˈtɛstɪfaɪ]",
    "translation": "свидетельствовать"
  },
  {
    "index": 2158,
    "word": "match",
    "transcription": "[mæʧ]",
    "translation": "спичка"
  },
  {
    "index": 2159,
    "word": "butt in (on)",
    "transcription": "[bʌtɪn]",
    "translation": "встревать, вмешиваться"
  },
  {
    "index": 2160,
    "word": "break in",
    "transcription": "[breɪkɪn]",
    "translation": "взломать"
  },
  {
    "index": 2161,
    "word": "circle",
    "transcription": "[ˈsɜːkl]",
    "translation": "круг, окружность"
  },
  {
    "index": 2162,
    "word": "circular",
    "transcription": "[ˈsɜːkjʊlə]",
    "translation": "круговой"
  },
  {
    "index": 2163,
    "word": "encircle",
    "transcription": "[ɪnˈsɜːkl]",
    "translation": "окружать"
  },
  {
    "index": 2164,
    "word": "occur",
    "transcription": "[əˈkɜː]",
    "translation": "случиться"
  },
  {
    "index": 2165,
    "word": "occurrence",
    "transcription": "[əˈkʌrəns]",
    "translation": "случай, наступление события"
  },
  {
    "index": 2166,
    "word": "assemble",
    "transcription": "[əˈsɛmbl]",
    "translation": "собирать"
  },
  {
    "index": 2167,
    "word": "assembly",
    "transcription": "[əˈsɛmbli]",
    "translation": "сборка"
  },
  {
    "index": 2168,
    "word": "assembler",
    "transcription": "[əˈsɛmblə]",
    "translation": "сборщик"
  },
  {
    "index": 2169,
    "word": "disassemble",
    "transcription": "[ˌdɪsəˈsɛmbl]",
    "translation": "разбирать"
  },
  {
    "index": 2170,
    "word": "dry",
    "transcription": "[draɪ]",
    "translation": "сухой, сушить, засуха"
  },
  {
    "index": 2171,
    "word": "dryness",
    "transcription": "[ˈdraɪnəs]",
    "translation": "сухость"
  },
  {
    "index": 2172,
    "word": "drier",
    "transcription": "[ˈdraɪə]",
    "translation": "сушилка"
  },
  {
    "index": 2173,
    "word": "vacation",
    "transcription": "[vəˈkeɪʃən]",
    "translation": "отпуск, каникулы"
  },
  {
    "index": 2174,
    "word": "vacationer",
    "transcription": "[vəˈkeɪʃənə]",
    "translation": "отпускник"
  },
  {
    "index": 2175,
    "word": "stumble",
    "transcription": "[ˈstʌmbl]",
    "translation": "спотыкаться, запинаться"
  },
  {
    "index": 2176,
    "word": "shore",
    "transcription": "[ʃɔː]",
    "translation": "берег"
  },
  {
    "index": 2177,
    "word": "ashore",
    "transcription": "[əˈʃɔː]",
    "translation": "на берегу"
  },
  {
    "index": 2178,
    "word": "shoreline",
    "transcription": "[ˈʃɔːˌlaɪn]",
    "translation": "береговая линия"
  },
  {
    "index": 2179,
    "word": "apology",
    "transcription": "[əˈpɒləʤi]",
    "translation": "извинение(я)"
  },
  {
    "index": 2180,
    "word": "apologize",
    "transcription": "[əˈpɒləʤaɪz]",
    "translation": "извиниться"
  },
  {
    "index": 2181,
    "word": "plain",
    "transcription": "[pleɪn]",
    "translation": "ясный, очевидный"
  },
  {
    "index": 2182,
    "word": "plainly",
    "transcription": "[ˈpleɪnli]",
    "translation": "понятно, открыто"
  },
  {
    "index": 2183,
    "word": "involve",
    "transcription": "[ɪnˈvɒlv]",
    "translation": "вовлекать, увлекать"
  },
  {
    "index": 2184,
    "word": "involvement",
    "transcription": "[ɪnˈvɒlvmənt]",
    "translation": "вовлечение"
  },
  {
    "index": 2185,
    "word": "flash",
    "transcription": "[flæʃ]",
    "translation": "вспышка, вспыхнуть"
  },
  {
    "index": 2186,
    "word": "flashy",
    "transcription": "[ˈflæʃi]",
    "translation": "кричащий, яркий, показной"
  },
  {
    "index": 2187,
    "word": "assess",
    "transcription": "[əˈsɛs]",
    "translation": "оценить"
  },
  {
    "index": 2188,
    "word": "assessment",
    "transcription": "[əˈsɛsmənt]",
    "translation": "оценка"
  },
  {
    "index": 2189,
    "word": "reassessment",
    "transcription": "[ˌriːəˈsɛsmənt]",
    "translation": "переоценка"
  },
  {
    "index": 2190,
    "word": "patient",
    "transcription": "[ˈpeɪʃənt]",
    "translation": "терпеливый"
  },
  {
    "index": 2191,
    "word": "patience",
    "transcription": "[ˈpeɪʃəns]",
    "translation": "терпение"
  },
  {
    "index": 2192,
    "word": "impatient",
    "transcription": "[ɪmˈpeɪʃənt]",
    "translation": "нетерпеливый"
  },
  {
    "index": 2193,
    "word": "support",
    "transcription": "[səˈpɔːt]",
    "translation": "поддерживать"
  },
  {
    "index": 2194,
    "word": "supporter",
    "transcription": "[səˈpɔːtə]",
    "translation": "сторонник, болельщик"
  },
  {
    "index": 2195,
    "word": "rock",
    "transcription": "[rɒk]",
    "translation": "качать, трясти"
  },
  {
    "index": 2196,
    "word": "toe",
    "transcription": "[təʊ]",
    "translation": "палец (ноги)"
  },
  {
    "index": 2197,
    "word": "tiptoes",
    "transcription": "[ˈtɪptəʊz]",
    "translation": "цыпочки"
  },
  {
    "index": 2198,
    "word": "common",
    "transcription": "[ˈkɒmən]",
    "translation": "общий"
  },
  {
    "index": 2199,
    "word": "engaged",
    "transcription": "[ɪnˈgeɪʤd]",
    "translation": "помолвленный (ая)"
  },
  {
    "index": 2200,
    "word": "engagement",
    "transcription": "[ɪnˈgeɪʤmənt]",
    "translation": "помолвка"
  },
  {
    "index": 2201,
    "word": "famous",
    "transcription": "[ˈfeɪməs]",
    "translation": "знаменитый"
  },
  {
    "index": 2202,
    "word": "gear",
    "transcription": "[gɪə]",
    "translation": "механизм, привод, передача"
  },
  {
    "index": 2203,
    "word": "discriminate",
    "transcription": "[dɪsˈkrɪmɪnɪt]",
    "translation": "различать, разделять"
  },
  {
    "index": 2204,
    "word": "discrimination",
    "transcription": "[dɪsˌkrɪmɪˈneɪʃən]",
    "translation": "различение"
  },
  {
    "index": 2205,
    "word": "mortgage",
    "transcription": "[ˈmɔːgɪʤ]",
    "translation": "ипотека"
  },
  {
    "index": 2206,
    "word": "solar",
    "transcription": "[ˈsəʊlə]",
    "translation": "солнечный"
  },
  {
    "index": 2207,
    "word": "apart",
    "transcription": "[əˈpɑːt]",
    "translation": "отдельно, врозь"
  },
  {
    "index": 2208,
    "word": "opinion",
    "transcription": "[əˈpɪnjən]",
    "translation": "мнение"
  },
  {
    "index": 2209,
    "word": "opinionated",
    "transcription": "[əˈpɪnjəneɪtəd]",
    "translation": "упрямый"
  },
  {
    "index": 2210,
    "word": "accommodate",
    "transcription": "[əˈkɒmədeɪt]",
    "translation": "размещать, вмещать"
  },
  {
    "index": 2211,
    "word": "accommodation",
    "transcription": "[əˌkɒməˈdeɪʃ(ə)n]",
    "translation": "жильё, размещение"
  },
  {
    "index": 2212,
    "word": "satisfy",
    "transcription": "[ˈsætɪsfaɪ]",
    "translation": "удовлетворять"
  },
  {
    "index": 2213,
    "word": "satisfaction",
    "transcription": "[ˌsætɪsˈfækʃən]",
    "translation": "удовлетворение"
  },
  {
    "index": 2214,
    "word": "dissatisfy",
    "transcription": "[ˌdɪsˈsætɪsfaɪ]",
    "translation": "не удовлетворять"
  },
  {
    "index": 2215,
    "word": "mankind",
    "transcription": "[mænˈkaɪnd]",
    "translation": "человечество"
  },
  {
    "index": 2216,
    "word": "midnight",
    "transcription": "[ˈmɪdnaɪt]",
    "translation": "полночь"
  },
  {
    "index": 2217,
    "word": "midday",
    "transcription": "[ˈmɪddeɪ]",
    "translation": "полдень"
  },
  {
    "index": 2218,
    "word": "accompany",
    "transcription": "[əˈkʌmpəni]",
    "translation": "сопровождать"
  },
  {
    "index": 2219,
    "word": "accompaniment",
    "transcription": "[əˈkʌmpənɪmənt]",
    "translation": "сопровождение"
  },
  {
    "index": 2220,
    "word": "refuse",
    "transcription": "[ˌriːˈfjuːz]",
    "translation": "отказаться"
  },
  {
    "index": 2221,
    "word": "refusal",
    "transcription": "[rɪˈfjuːzəl]",
    "translation": "отказ"
  },
  {
    "index": 2222,
    "word": "curriculum vitae (CV)",
    "transcription": "[kəˈrɪkjʊləmˈviːtaɪ]",
    "translation": "резюме, биография"
  },
  {
    "index": 2223,
    "word": "cheerful",
    "transcription": "[ˈʧɪəfʊl]",
    "translation": "весёлый, неунывающий"
  },
  {
    "index": 2224,
    "word": "cheerfulness",
    "transcription": "[ˈʧɪəfʊlnəs]",
    "translation": "бодрость"
  },
  {
    "index": 2225,
    "word": "cheerless",
    "transcription": "[ˈʧɪəlɪs]",
    "translation": "унылый"
  },
  {
    "index": 2226,
    "word": "post",
    "transcription": "[pəʊst]",
    "translation": "почта, почтовый"
  },
  {
    "index": 2227,
    "word": "postcard",
    "transcription": "[ˈpəʊstkɑːd]",
    "translation": "открытка"
  },
  {
    "index": 2228,
    "word": "derive",
    "transcription": "[dɪˈraɪv]",
    "translation": "выводить, извлекать"
  },
  {
    "index": 2229,
    "word": "derivation",
    "transcription": "[ˌdɛrɪˈveɪʃən]",
    "translation": "вывод"
  },
  {
    "index": 2230,
    "word": "derivative",
    "transcription": "[dɪˈrɪvətɪv]",
    "translation": "производный"
  },
  {
    "index": 2231,
    "word": "brute",
    "transcription": "[bruːt]",
    "translation": "животное, зверь, грубый"
  },
  {
    "index": 2232,
    "word": "brutal",
    "transcription": "[ˈbruːtl]",
    "translation": "жестокий, зверский"
  },
  {
    "index": 2233,
    "word": "brutality",
    "transcription": "[bruːˈtælɪti]",
    "translation": "жестокость, зверство"
  },
  {
    "index": 2234,
    "word": "belt",
    "transcription": "[bɛlt]",
    "translation": "пояс, опоясывать"
  },
  {
    "index": 2235,
    "word": "miss",
    "transcription": "[mɪs]",
    "translation": "пропускать, упустить"
  },
  {
    "index": 2236,
    "word": "recent",
    "transcription": "[ˈriːsnt]",
    "translation": "недавний, последний"
  },
  {
    "index": 2237,
    "word": "recently",
    "transcription": "[ˈriːsntli]",
    "translation": "в последнее время"
  },
  {
    "index": 2238,
    "word": "reject",
    "transcription": "[ˈriːʤɛkt]",
    "translation": "отвергать"
  },
  {
    "index": 2239,
    "word": "rejection",
    "transcription": "[rɪˈʤɛkʃən]",
    "translation": "отказ, отторжение"
  },
  {
    "index": 2240,
    "word": "leaf (pl: leaves)",
    "transcription": "[liːf]",
    "translation": "лист"
  },
  {
    "index": 2241,
    "word": "locate",
    "transcription": "[ləʊˈkeɪt]",
    "translation": "определить местоположение"
  },
  {
    "index": 2242,
    "word": "location",
    "transcription": "[ləʊˈkeɪʃən]",
    "translation": "местонахождение"
  },
  {
    "index": 2243,
    "word": "reason",
    "transcription": "[ˈriːzn]",
    "translation": "разум, благоразумие"
  },
  {
    "index": 2244,
    "word": "reasonable",
    "transcription": "[ˈriːznəbl]",
    "translation": "разумный"
  },
  {
    "index": 2245,
    "word": "treasure",
    "transcription": "[ˈtrɛʒə]",
    "translation": "сокровище"
  },
  {
    "index": 2246,
    "word": "treasury",
    "transcription": "[ˈtrɛʒ(ə)ri]",
    "translation": "казначейство"
  },
  {
    "index": 2247,
    "word": "former",
    "transcription": "[ˈfɔːmə]",
    "translation": "бывший"
  },
  {
    "index": 2248,
    "word": "formerly",
    "transcription": "[ˈfɔːməli]",
    "translation": "прежде"
  },
  {
    "index": 2249,
    "word": "sign",
    "transcription": "[saɪn]",
    "translation": "знак"
  },
  {
    "index": 2250,
    "word": "failure",
    "transcription": "[ˈfeɪljə]",
    "translation": "неудача, провал"
  },
  {
    "index": 2251,
    "word": "recycle",
    "transcription": "[ˌriːˈsaɪkl]",
    "translation": "перерабатывать"
  },
  {
    "index": 2252,
    "word": "caution",
    "transcription": "[ˈkɔːʃən]",
    "translation": "предосторожность, предостережение"
  },
  {
    "index": 2253,
    "word": "cautious",
    "transcription": "[ˈkɔːʃəs]",
    "translation": "осторожный"
  },
  {
    "index": 2254,
    "word": "labour",
    "transcription": "[ˈleɪbə]",
    "translation": "труд, трудиться"
  },
  {
    "index": 2255,
    "word": "labourer",
    "transcription": "[ˈleɪbərə]",
    "translation": "чернорабочий"
  },
  {
    "index": 2256,
    "word": "laborious",
    "transcription": "[ləˈbɔːrɪəs]",
    "translation": "трудоемкий"
  },
  {
    "index": 2257,
    "word": "do without",
    "transcription": "[duːwɪˈðaʊt]",
    "translation": "обойтись без"
  },
  {
    "index": 2258,
    "word": "go without",
    "transcription": "[gəʊwɪˈðaʊt]",
    "translation": "обходиться без"
  },
  {
    "index": 2259,
    "word": "spot",
    "transcription": "[spɒt]",
    "translation": "место"
  },
  {
    "index": 2260,
    "word": "offence (offense)",
    "transcription": "[əˈfɛns]",
    "translation": "преступление, нарушение"
  },
  {
    "index": 2261,
    "word": "gang",
    "transcription": "[gæŋ]",
    "translation": "банда, шайка"
  },
  {
    "index": 2262,
    "word": "pursuit",
    "transcription": "[pəˈsjuːt]",
    "translation": "преследование"
  },
  {
    "index": 2263,
    "word": "age",
    "transcription": "[eɪʤ]",
    "translation": "век, эпоха"
  },
  {
    "index": 2264,
    "word": "middle ages",
    "transcription": "[ˈmɪdlˈeɪʤɪz]",
    "translation": "средние века"
  },
  {
    "index": 2265,
    "word": "rise (rose, risen)",
    "transcription": "[raɪz]",
    "translation": "подниматься, повышение"
  },
  {
    "index": 2266,
    "word": "sunrise",
    "transcription": "[ˈsʌnraɪz]",
    "translation": "восход"
  },
  {
    "index": 2267,
    "word": "regret",
    "transcription": "[rɪˈgrɛt]",
    "translation": "сожалеть, сожаление"
  },
  {
    "index": 2268,
    "word": "regrettable",
    "transcription": "[rɪˈgrɛtəbl]",
    "translation": "прискорбный"
  },
  {
    "index": 2269,
    "word": "reserve",
    "transcription": "[rɪˈzɜːv]",
    "translation": "бронировать"
  },
  {
    "index": 2270,
    "word": "reservation",
    "transcription": "[ˌrɛzəˈveɪʃən]",
    "translation": "бронирование"
  },
  {
    "index": 2271,
    "word": "yet",
    "transcription": "[jɛt]",
    "translation": "всё же"
  },
  {
    "index": 2272,
    "word": "youth",
    "transcription": "[juːθ]",
    "translation": "молодёжь, молодость"
  },
  {
    "index": 2273,
    "word": "youthful",
    "transcription": "[ˈjuːθfʊl]",
    "translation": "юный, юношеский"
  },
  {
    "index": 2274,
    "word": "surround",
    "transcription": "[səˈraʊnd]",
    "translation": "окружать"
  },
  {
    "index": 2275,
    "word": "surroundings",
    "transcription": "[səˈraʊndɪŋz]",
    "translation": "окружение"
  },
  {
    "index": 2276,
    "word": "vital",
    "transcription": "[ˈvaɪtl]",
    "translation": "жизненный, жизненно важный"
  },
  {
    "index": 2277,
    "word": "vitality",
    "transcription": "[vaɪˈtælɪti]",
    "translation": "жизнеспособность"
  },
  {
    "index": 2278,
    "word": "wrong",
    "transcription": "[rɒŋ]",
    "translation": "не тот"
  },
  {
    "index": 2279,
    "word": "insect",
    "transcription": "[ˈɪnsɛkt]",
    "translation": "насекомое"
  },
  {
    "index": 2280,
    "word": "construction (site)",
    "transcription": "[kənˈstrʌkʃən]",
    "translation": "стройка"
  },
  {
    "index": 2281,
    "word": "prospect",
    "transcription": "[ˈprɒspɛkt]",
    "translation": "перспектива, вид будущего"
  },
  {
    "index": 2282,
    "word": "prospective",
    "transcription": "[prəsˈpɛktɪv]",
    "translation": "перспективный"
  },
  {
    "index": 2283,
    "word": "success",
    "transcription": "[səkˈsɛs]",
    "translation": "успех"
  },
  {
    "index": 2284,
    "word": "successful",
    "transcription": "[səkˈsɛsfʊl]",
    "translation": "успешный"
  },
  {
    "index": 2285,
    "word": "unsuccessful",
    "transcription": "[ˌʌnsəkˈsɛsfʊl]",
    "translation": "неудачный"
  },
  {
    "index": 2286,
    "word": "liable",
    "transcription": "[ˈlaɪəbl]",
    "translation": "подлежащий"
  },
  {
    "index": 2287,
    "word": "liability",
    "transcription": "[ˌlaɪəˈbɪlɪti]",
    "translation": "ответственность, подверженность"
  },
  {
    "index": 2288,
    "word": "contend",
    "transcription": "[kənˈtɛnd]",
    "translation": "бороться, соперничать"
  },
  {
    "index": 2289,
    "word": "contention",
    "transcription": "[kənˈtɛnʃən]",
    "translation": "раздор"
  },
  {
    "index": 2290,
    "word": "contentious",
    "transcription": "[kənˈtɛnʃəs]",
    "translation": "сварливый"
  },
  {
    "index": 2291,
    "word": "dream",
    "transcription": "[driːm]",
    "translation": "сон (видение)"
  },
  {
    "index": 2292,
    "word": "daydream",
    "transcription": "[ˈdeɪˌdriːm]",
    "translation": "грезы"
  },
  {
    "index": 2293,
    "word": "whereas",
    "transcription": "[weərˈæz]",
    "translation": "тогда как"
  },
  {
    "index": 2294,
    "word": "blow out",
    "transcription": "[bləʊaʊt]",
    "translation": "задуть (свечу)"
  },
  {
    "index": 2295,
    "word": "regard",
    "transcription": "[rɪˈgɑːd]",
    "translation": "считать, рассматривать"
  },
  {
    "index": 2296,
    "word": "disregard",
    "transcription": "[ˌdɪsrɪˈgɑːd]",
    "translation": "пренебрегать"
  },
  {
    "index": 2297,
    "word": "regardless",
    "transcription": "[rɪˈgɑːdlɪs]",
    "translation": "несмотря на"
  },
  {
    "index": 2298,
    "word": "suggest",
    "transcription": "[səˈʤɛst]",
    "translation": "предлагать"
  },
  {
    "index": 2299,
    "word": "suggestion",
    "transcription": "[səˈʤɛsʧən]",
    "translation": "предложение"
  },
  {
    "index": 2300,
    "word": "solve",
    "transcription": "[sɒlv]",
    "translation": "решить"
  },
  {
    "index": 2301,
    "word": "unsolved",
    "transcription": "[ʌnˈsɒlvd]",
    "translation": "нерешенный"
  },
  {
    "index": 2302,
    "word": "confuse",
    "transcription": "[kənˈfjuːz]",
    "translation": "путать"
  },
  {
    "index": 2303,
    "word": "confusion",
    "transcription": "[kənˈfjuːʒən]",
    "translation": "путаница"
  },
  {
    "index": 2304,
    "word": "join",
    "transcription": "[ʤɔɪn]",
    "translation": "присоединить (ся)"
  },
  {
    "index": 2305,
    "word": "horrible",
    "transcription": "[ˈhɒrəbl]",
    "translation": "ужасный, отвратительный"
  },
  {
    "index": 2306,
    "word": "take off",
    "transcription": "[teɪkɒf]",
    "translation": "взлететь"
  },
  {
    "index": 2307,
    "word": "takeoff",
    "transcription": "[takeoff]",
    "translation": "взлёт"
  },
  {
    "index": 2308,
    "word": "grow up",
    "transcription": "[grəʊʌp]",
    "translation": "вырастать"
  },
  {
    "index": 2309,
    "word": "express",
    "transcription": "[ɪksˈprɛs]",
    "translation": "выражать"
  },
  {
    "index": 2310,
    "word": "expression",
    "transcription": "[ɪksˈprɛʃən]",
    "translation": "выражение"
  },
  {
    "index": 2311,
    "word": "expressive",
    "transcription": "[ɪksˈprɛsɪv]",
    "translation": "выразительный"
  },
  {
    "index": 2312,
    "word": "take a look",
    "transcription": "[teɪkəlʊk]",
    "translation": "взглянуть"
  },
  {
    "index": 2313,
    "word": "series",
    "transcription": "[ˈsɪəriːz]",
    "translation": "сериал"
  },
  {
    "index": 2314,
    "word": "conserve",
    "transcription": "[kənˈsɜːv]",
    "translation": "беречь, экономить"
  },
  {
    "index": 2315,
    "word": "conservation",
    "transcription": "[ˌkɒnsə(ː)ˈveɪʃən]",
    "translation": "сохранение"
  },
  {
    "index": 2316,
    "word": "plot",
    "transcription": "[plɒt]",
    "translation": "план, чертёж"
  },
  {
    "index": 2317,
    "word": "tube",
    "transcription": "[tjuːb]",
    "translation": "труба"
  },
  {
    "index": 2318,
    "word": "minor",
    "transcription": "[ˈmaɪnə]",
    "translation": "второстепенный, незначительный"
  },
  {
    "index": 2319,
    "word": "minority",
    "transcription": "[maɪˈnɒrɪti]",
    "translation": "меньшинство"
  },
  {
    "index": 2320,
    "word": "explode",
    "transcription": "[ɪksˈpləʊd]",
    "translation": "взрываться"
  },
  {
    "index": 2321,
    "word": "explosion",
    "transcription": "[ɪksˈpləʊʒən]",
    "translation": "взрыв"
  },
  {
    "index": 2322,
    "word": "explosive",
    "transcription": "[ɪksˈpləʊsɪv]",
    "translation": "взрывной, взрывчатый, взрывчатка"
  },
  {
    "index": 2323,
    "word": "honest",
    "transcription": "[ˈɒnɪst]",
    "translation": "честный"
  },
  {
    "index": 2324,
    "word": "honesty",
    "transcription": "[ˈɒnɪsti]",
    "translation": "честность"
  },
  {
    "index": 2325,
    "word": "honestly",
    "transcription": "[ˈɒnɪstli]",
    "translation": "честно говоря"
  },
  {
    "index": 2326,
    "word": "dishonest",
    "transcription": "[dɪsˈɒnɪst]",
    "translation": "нечестный"
  },
  {
    "index": 2327,
    "word": "track",
    "transcription": "[træk]",
    "translation": "след, выслеживать"
  },
  {
    "index": 2328,
    "word": "odd",
    "transcription": "[ɒd]",
    "translation": "необычный, неправильный"
  },
  {
    "index": 2329,
    "word": "oddity",
    "transcription": "[ˈɒdɪti]",
    "translation": "странность"
  },
  {
    "index": 2330,
    "word": "guide",
    "transcription": "[gaɪd]",
    "translation": "вести, направлять"
  },
  {
    "index": 2331,
    "word": "misguide",
    "transcription": "[ˌmɪsˈgaɪd]",
    "translation": "вводить в заблуждение"
  },
  {
    "index": 2332,
    "word": "bat",
    "transcription": "[bæt]",
    "translation": "летучая мышь"
  },
  {
    "index": 2333,
    "word": "income",
    "transcription": "[ˈɪnkʌm]",
    "translation": "доход"
  },
  {
    "index": 2334,
    "word": "habit",
    "transcription": "[ˈhæbɪt]",
    "translation": "привычка, обычай"
  },
  {
    "index": 2335,
    "word": "habitual",
    "transcription": "[həˈbɪtjʊəl]",
    "translation": "привычный"
  },
  {
    "index": 2336,
    "word": "poison",
    "transcription": "[ˈpɔɪzn]",
    "translation": "яд, травить"
  },
  {
    "index": 2337,
    "word": "poisonous",
    "transcription": "[ˈpɔɪznəs]",
    "translation": "ядовитый"
  },
  {
    "index": 2338,
    "word": "volume",
    "transcription": "[ˈvɒljʊm]",
    "translation": "том, книга"
  },
  {
    "index": 2339,
    "word": "either",
    "transcription": "[ˈaɪðə]",
    "translation": "тоже (не)"
  },
  {
    "index": 2340,
    "word": "fortune",
    "transcription": "[ˈfɔːʧən]",
    "translation": "состояние (деньги)"
  },
  {
    "index": 2341,
    "word": "fist",
    "transcription": "[fɪst]",
    "translation": "кулак"
  },
  {
    "index": 2342,
    "word": "crop",
    "transcription": "[krɒp]",
    "translation": "урожай"
  },
  {
    "index": 2343,
    "word": "improve",
    "transcription": "[ɪmˈpruːv]",
    "translation": "улучшить"
  },
  {
    "index": 2344,
    "word": "improvement",
    "transcription": "[ɪmˈpruːvmənt]",
    "translation": "улучшение"
  },
  {
    "index": 2345,
    "word": "loyal",
    "transcription": "[ˈlɔɪəl]",
    "translation": "верный, преданный"
  },
  {
    "index": 2346,
    "word": "loyalty",
    "transcription": "[ˈlɔɪəlti]",
    "translation": "лояльность"
  },
  {
    "index": 2347,
    "word": "wheel",
    "transcription": "[wiːl]",
    "translation": "колесо"
  },
  {
    "index": 2348,
    "word": "meet (met, met)",
    "transcription": "[miːt]",
    "translation": "встретить или познакомиться"
  },
  {
    "index": 2349,
    "word": "meeting",
    "transcription": "[ˈmiːtɪŋ]",
    "translation": "встреча"
  },
  {
    "index": 2350,
    "word": "horn",
    "transcription": "[hɔːn]",
    "translation": "рог"
  },
  {
    "index": 2351,
    "word": "horned",
    "transcription": "[hɔːnd]",
    "translation": "рогатый"
  },
  {
    "index": 2352,
    "word": "strip",
    "transcription": "[strɪp]",
    "translation": "снимать (обнажать)"
  },
  {
    "index": 2353,
    "word": "sacred",
    "transcription": "[ˈseɪkrɪd]",
    "translation": "священный"
  },
  {
    "index": 2354,
    "word": "sacrament",
    "transcription": "[ˈsækrəmənt]",
    "translation": "таинство"
  },
  {
    "index": 2355,
    "word": "sacramental",
    "transcription": "[ˌsækrəˈmɛntl]",
    "translation": "сакраментальный, священный"
  },
  {
    "index": 2356,
    "word": "dip",
    "transcription": "[dɪp]",
    "translation": "окунать, погружать"
  },
  {
    "index": 2357,
    "word": "dipper",
    "transcription": "[ˈdɪpə]",
    "translation": "ковш"
  },
  {
    "index": 2358,
    "word": "fence",
    "transcription": "[fɛns]",
    "translation": "забор, огораживать"
  },
  {
    "index": 2359,
    "word": "deep",
    "transcription": "[diːp]",
    "translation": "глубокий"
  },
  {
    "index": 2360,
    "word": "depth",
    "transcription": "[dɛpθ]",
    "translation": "глубина"
  },
  {
    "index": 2361,
    "word": "dismiss",
    "transcription": "[dɪsˈmɪs]",
    "translation": "отклонить, отбросить"
  },
  {
    "index": 2362,
    "word": "dismissal",
    "transcription": "[dɪsˈmɪsəl]",
    "translation": "отклонение"
  },
  {
    "index": 2363,
    "word": "otherwise",
    "transcription": "[ˈʌðəwaɪz]",
    "translation": "иначе, иным образом"
  },
  {
    "index": 2364,
    "word": "damn (goddamn)",
    "transcription": "[dæm]",
    "translation": "проклятый, проклинать"
  },
  {
    "index": 2365,
    "word": "damnation",
    "transcription": "[dæmˈneɪʃən]",
    "translation": "проклятие"
  },
  {
    "index": 2366,
    "word": "damned",
    "transcription": "[dæmd]",
    "translation": "проклятый"
  },
  {
    "index": 2367,
    "word": "damn!",
    "transcription": "[dæm!]",
    "translation": "чёрт!"
  },
  {
    "index": 2368,
    "word": "perhaps",
    "transcription": "[pəˈhæps]",
    "translation": "возможно"
  },
  {
    "index": 2369,
    "word": "junior",
    "transcription": "[ˈʤuːnjə]",
    "translation": "младший"
  },
  {
    "index": 2370,
    "word": "jr.",
    "transcription": "[jr.]",
    "translation": "мл."
  },
  {
    "index": 2371,
    "word": "district",
    "transcription": "[ˈdɪstrɪkt]",
    "translation": "район, округ и т. п."
  },
  {
    "index": 2372,
    "word": "take part",
    "transcription": "[teɪkpɑːt]",
    "translation": "принимать участие"
  },
  {
    "index": 2373,
    "word": "eligible",
    "transcription": "[ˈɛlɪʤəbl]",
    "translation": "имеющий право"
  },
  {
    "index": 2374,
    "word": "ineligible",
    "transcription": "[ɪnˈɛlɪʤəbl]",
    "translation": "неподходящий"
  },
  {
    "index": 2375,
    "word": "eligibility",
    "transcription": "[ˌɛlɪʤəˈbɪlɪti]",
    "translation": "приемлемость"
  },
  {
    "index": 2376,
    "word": "hazard",
    "transcription": "[ˈhæzəd]",
    "translation": "опасность, риск, угроза"
  },
  {
    "index": 2377,
    "word": "hazardous",
    "transcription": "[ˈhæzədəs]",
    "translation": "опасный"
  },
  {
    "index": 2378,
    "word": "strike",
    "transcription": "[straɪk]",
    "translation": "забастовка"
  },
  {
    "index": 2379,
    "word": "feed (fed, fed)",
    "transcription": "[fiːd]",
    "translation": "кормить"
  },
  {
    "index": 2380,
    "word": "fed up (with)",
    "transcription": "[fɛdʌp]",
    "translation": "сыт по горло"
  },
  {
    "index": 2381,
    "word": "supply",
    "transcription": "[səˈplaɪ]",
    "translation": "поставлять, поставка"
  },
  {
    "index": 2382,
    "word": "supplier",
    "transcription": "[səˈplaɪə]",
    "translation": "поставщик"
  },
  {
    "index": 2383,
    "word": "poor",
    "transcription": "[pʊə]",
    "translation": "бедный"
  },
  {
    "index": 2384,
    "word": "poorness",
    "transcription": "[ˈpʊənəs]",
    "translation": "бедность"
  },
  {
    "index": 2385,
    "word": "convince",
    "transcription": "[kənˈvɪns]",
    "translation": "убеждать"
  },
  {
    "index": 2386,
    "word": "tie",
    "transcription": "[taɪ]",
    "translation": "галстук, завязка и т.п."
  },
  {
    "index": 2387,
    "word": "escape",
    "transcription": "[ɪsˈkeɪp]",
    "translation": "избежать, спастись"
  },
  {
    "index": 2388,
    "word": "escapee",
    "transcription": "[escapee]",
    "translation": "беглец"
  },
  {
    "index": 2389,
    "word": "mine",
    "transcription": "[maɪn]",
    "translation": "мина"
  },
  {
    "index": 2390,
    "word": "let smb in",
    "transcription": "[lɛtsmbɪn]",
    "translation": "впустить"
  },
  {
    "index": 2391,
    "word": "let smb out",
    "transcription": "[lɛtsmbaʊt]",
    "translation": "выпустить"
  },
  {
    "index": 2392,
    "word": "pour",
    "transcription": "[pɔː]",
    "translation": "лить"
  },
  {
    "index": 2393,
    "word": "downpour",
    "transcription": "[ˈdaʊnpɔː]",
    "translation": "ливень"
  },
  {
    "index": 2394,
    "word": "expect",
    "transcription": "[ɪksˈpɛkt]",
    "translation": "ожидать (события)"
  },
  {
    "index": 2395,
    "word": "unexpected",
    "transcription": "[ˌʌnɪksˈpɛktɪd]",
    "translation": "непредвиденный"
  },
  {
    "index": 2396,
    "word": "expectation",
    "transcription": "[ˌɛkspɛkˈteɪʃən]",
    "translation": "ожидание"
  },
  {
    "index": 2397,
    "word": "within",
    "transcription": "[wɪˈðɪn]",
    "translation": "в пределах, внутри"
  },
  {
    "index": 2398,
    "word": "confer",
    "transcription": "[kənˈfɜː]",
    "translation": "совещаться"
  },
  {
    "index": 2399,
    "word": "conference",
    "transcription": "[ˈkɒnfərəns]",
    "translation": "совещание"
  },
  {
    "index": 2400,
    "word": "nest",
    "transcription": "[nɛst]",
    "translation": "гнездо, гнездиться"
  },
  {
    "index": 2401,
    "word": "board",
    "transcription": "[bɔːd]",
    "translation": "доска"
  },
  {
    "index": 2402,
    "word": "billboard",
    "transcription": "[ˈbɪlbɔːd]",
    "translation": "рекламный щит"
  },
  {
    "index": 2403,
    "word": "keyboard",
    "transcription": "[ˈkiːbɔːd]",
    "translation": "клавиатура"
  },
  {
    "index": 2404,
    "word": "board game",
    "transcription": "[bɔːdgeɪm]",
    "translation": "настольная игра"
  },
  {
    "index": 2405,
    "word": "core",
    "transcription": "[kɔː]",
    "translation": "ядро, сердцевина, сущность"
  },
  {
    "index": 2406,
    "word": "apply",
    "transcription": "[əˈplaɪ]",
    "translation": "обращаться (с заявлением)"
  },
  {
    "index": 2407,
    "word": "application",
    "transcription": "[ˌæplɪˈkeɪʃ(ə)n]",
    "translation": "заявление"
  },
  {
    "index": 2408,
    "word": "applicant",
    "transcription": "[ˈæplɪkənt]",
    "translation": "заявитель"
  },
  {
    "index": 2409,
    "word": "combat",
    "transcription": "[ˈkɒmbæt]",
    "translation": "бой"
  },
  {
    "index": 2410,
    "word": "combative",
    "transcription": "[ˈkɒmbətɪv]",
    "translation": "боевой"
  },
  {
    "index": 2411,
    "word": "loan",
    "transcription": "[ləʊn]",
    "translation": "заём, ссуда"
  },
  {
    "index": 2412,
    "word": "council",
    "transcription": "[ˈkaʊns(ə)l]",
    "translation": "совет (орган)"
  },
  {
    "index": 2413,
    "word": "flaw",
    "transcription": "[flɔː]",
    "translation": "изъян"
  },
  {
    "index": 2414,
    "word": "flawless",
    "transcription": "[ˈflɔːlɪs]",
    "translation": "безупречный"
  },
  {
    "index": 2415,
    "word": "wealth",
    "transcription": "[wɛlθ]",
    "translation": "богатство"
  },
  {
    "index": 2416,
    "word": "wealthy",
    "transcription": "[ˈwɛlθi]",
    "translation": "состоятельный"
  },
  {
    "index": 2417,
    "word": "employ",
    "transcription": "[ɪmˈplɔɪ]",
    "translation": "нанимать на работу"
  },
  {
    "index": 2418,
    "word": "employer",
    "transcription": "[ɪmˈplɔɪə]",
    "translation": "работодатель"
  },
  {
    "index": 2419,
    "word": "employee",
    "transcription": "[ˌɛmplɔɪˈiː]",
    "translation": "работник"
  },
  {
    "index": 2420,
    "word": "employment",
    "transcription": "[ɪmˈplɔɪmənt]",
    "translation": "занятость"
  },
  {
    "index": 2421,
    "word": "unemployment",
    "transcription": "[ˌʌnɪmˈplɔɪmənt]",
    "translation": "безработица"
  },
  {
    "index": 2422,
    "word": "drive (drove, driven)",
    "transcription": "[draɪv]",
    "translation": "двигать, гнать"
  },
  {
    "index": 2423,
    "word": "eat up",
    "transcription": "[iːtʌp]",
    "translation": "съесть полностью"
  },
  {
    "index": 2424,
    "word": "attitude",
    "transcription": "[ˈætɪtjuːd]",
    "translation": "отношение"
  },
  {
    "index": 2425,
    "word": "software",
    "transcription": "[ˈsɒftweə]",
    "translation": "программое обеспечение"
  },
  {
    "index": 2426,
    "word": "chase",
    "transcription": "[ʧeɪs]",
    "translation": "погоня, гнаться"
  },
  {
    "index": 2427,
    "word": "infant",
    "transcription": "[ˈɪnfənt]",
    "translation": "ребёнок"
  },
  {
    "index": 2428,
    "word": "infancy",
    "transcription": "[ˈɪnfənsi]",
    "translation": "младенчество"
  },
  {
    "index": 2429,
    "word": "allege",
    "transcription": "[əˈlɛʤ]",
    "translation": "утверждать, приписывать"
  },
  {
    "index": 2430,
    "word": "alleged",
    "transcription": "[əˈlɛʤd]",
    "translation": "мнимый"
  },
  {
    "index": 2431,
    "word": "allegation",
    "transcription": "[ˌælɪˈgeɪʃ(ə)n]",
    "translation": "утверждение (голословное)"
  },
  {
    "index": 2432,
    "word": "bond",
    "transcription": "[bɒnd]",
    "translation": "обязательство, облигация"
  },
  {
    "index": 2433,
    "word": "trunk",
    "transcription": "[trʌŋk]",
    "translation": "багажник"
  },
  {
    "index": 2434,
    "word": "item",
    "transcription": "[ˈaɪtəm]",
    "translation": "пункт, номер, предмет"
  },
  {
    "index": 2435,
    "word": "garden",
    "transcription": "[ˈgɑːdn]",
    "translation": "сад"
  },
  {
    "index": 2436,
    "word": "gardener",
    "transcription": "[ˈgɑːdnə]",
    "translation": "садовник"
  },
  {
    "index": 2437,
    "word": "gardening",
    "transcription": "[ˈgɑːdnɪŋ]",
    "translation": "садоводство"
  },
  {
    "index": 2438,
    "word": "dust",
    "transcription": "[dʌst]",
    "translation": "пыль"
  },
  {
    "index": 2439,
    "word": "dusty",
    "transcription": "[ˈdʌsti]",
    "translation": "пыльный"
  },
  {
    "index": 2440,
    "word": "attend",
    "transcription": "[əˈtɛnd]",
    "translation": "уделить внимание, посетить"
  },
  {
    "index": 2441,
    "word": "attention",
    "transcription": "[əˈtɛnʃ(ə)n]",
    "translation": "внимание"
  },
  {
    "index": 2442,
    "word": "attendance",
    "transcription": "[əˈtɛndəns]",
    "translation": "посещаемость"
  },
  {
    "index": 2443,
    "word": "attentive",
    "transcription": "[əˈtɛntɪv]",
    "translation": "внимательный"
  },
  {
    "index": 2444,
    "word": "spread (spread, spread)",
    "transcription": "[sprɛd]",
    "translation": "распространять(ся)"
  },
  {
    "index": 2445,
    "word": "bound",
    "transcription": "[baʊnd]",
    "translation": "обязан"
  },
  {
    "index": 2446,
    "word": "acid",
    "transcription": "[ˈæsɪd]",
    "translation": "кислота"
  },
  {
    "index": 2447,
    "word": "acidic",
    "transcription": "[əˈsɪdɪk]",
    "translation": "кислотный"
  },
  {
    "index": 2448,
    "word": "acidity",
    "transcription": "[əˈsɪdɪti]",
    "translation": "кислотность"
  },
  {
    "index": 2449,
    "word": "appear",
    "transcription": "[əˈpɪə]",
    "translation": "появиться"
  },
  {
    "index": 2450,
    "word": "disappear",
    "transcription": "[ˌdɪsəˈpɪə]",
    "translation": "исчезать"
  },
  {
    "index": 2451,
    "word": "appearance",
    "transcription": "[əˈpɪərəns]",
    "translation": "появление"
  },
  {
    "index": 2452,
    "word": "disappearance",
    "transcription": "[ˌdɪsəˈpɪərəns]",
    "translation": "исчезновение"
  },
  {
    "index": 2453,
    "word": "bury",
    "transcription": "[ˈbɛri]",
    "translation": "хоронить"
  },
  {
    "index": 2454,
    "word": "burial",
    "transcription": "[ˈbɛrɪəl]",
    "translation": "захоронение"
  },
  {
    "index": 2455,
    "word": "generation",
    "transcription": "[ˌʤɛnəˈreɪʃən]",
    "translation": "поколение"
  },
  {
    "index": 2456,
    "word": "stare",
    "transcription": "[steə]",
    "translation": "пялиться, пристальный взгляд"
  },
  {
    "index": 2457,
    "word": "judge",
    "transcription": "[ˈʤʌʤ]",
    "translation": "судья, судить (втч. перен)"
  },
  {
    "index": 2458,
    "word": "judgment",
    "transcription": "[ˈʤʌʤmənt]",
    "translation": "суждение"
  },
  {
    "index": 2459,
    "word": "arms",
    "transcription": "[ɑːmz]",
    "translation": "оружие"
  },
  {
    "index": 2460,
    "word": "armament",
    "transcription": "[ˈɑːməmənt]",
    "translation": "вооружение"
  },
  {
    "index": 2461,
    "word": "armed",
    "transcription": "[ɑːmd]",
    "translation": "вооруженный"
  },
  {
    "index": 2462,
    "word": "disarm",
    "transcription": "[dɪsˈɑːm]",
    "translation": "разоружать"
  },
  {
    "index": 2463,
    "word": "firearm",
    "transcription": "[ˈfaɪərɑːm]",
    "translation": "огнестрельное оружие"
  },
  {
    "index": 2464,
    "word": "plain",
    "transcription": "[pleɪn]",
    "translation": "ровный, равнина"
  },
  {
    "index": 2465,
    "word": "slice",
    "transcription": "[slaɪs]",
    "translation": "ломтик, нарезать"
  },
  {
    "index": 2466,
    "word": "feel (felt, felt)",
    "transcription": "[fiːl]",
    "translation": "трогать, щупать"
  },
  {
    "index": 2467,
    "word": "valid",
    "transcription": "[ˈvælɪd]",
    "translation": "действительный"
  },
  {
    "index": 2468,
    "word": "validate",
    "transcription": "[ˈvælɪdeɪt]",
    "translation": "утверждать"
  },
  {
    "index": 2469,
    "word": "invalidate",
    "transcription": "[ɪnˈvælɪdeɪt]",
    "translation": "аннулировать"
  },
  {
    "index": 2470,
    "word": "validation",
    "transcription": "[ˌvælɪˈdeɪʃən]",
    "translation": "проверка, утверждение"
  },
  {
    "index": 2471,
    "word": "validity",
    "transcription": "[vəˈlɪdɪti]",
    "translation": "период действия"
  },
  {
    "index": 2472,
    "word": "inevitable",
    "transcription": "[ɪnˈɛvɪtəbl]",
    "translation": "неизбежный"
  },
  {
    "index": 2473,
    "word": "stress",
    "transcription": "[strɛs]",
    "translation": "подчеркнуть, заострить внимание"
  },
  {
    "index": 2474,
    "word": "fee",
    "transcription": "[fiː]",
    "translation": "плата или гонорар"
  },
  {
    "index": 2475,
    "word": "put through",
    "transcription": "[pʊtθruː]",
    "translation": "подвергнуть"
  },
  {
    "index": 2476,
    "word": "worry",
    "transcription": "[ˈwʌri]",
    "translation": "волновать (ся)"
  },
  {
    "index": 2477,
    "word": "essential",
    "transcription": "[ɪˈsɛnʃəl]",
    "translation": "необходимый, существенный"
  },
  {
    "index": 2478,
    "word": "essentially",
    "transcription": "[ɪˈsɛnʃəli]",
    "translation": "в сущности"
  },
  {
    "index": 2479,
    "word": "wire",
    "transcription": "[ˈwaɪə]",
    "translation": "проволока, провод"
  },
  {
    "index": 2480,
    "word": "wireless",
    "transcription": "[ˈwaɪəlɪs]",
    "translation": "беспроводной"
  },
  {
    "index": 2481,
    "word": "commitment",
    "transcription": "[kəˈmɪtmənt]",
    "translation": "обязательство"
  },
  {
    "index": 2482,
    "word": "remind",
    "transcription": "[ˈrɪmaɪnd]",
    "translation": "напомнить"
  },
  {
    "index": 2483,
    "word": "reminder",
    "transcription": "[rɪˈmaɪndə]",
    "translation": "напоминание"
  },
  {
    "index": 2484,
    "word": "mine",
    "transcription": "[maɪn]",
    "translation": "шахта, рудник"
  },
  {
    "index": 2485,
    "word": "miner",
    "transcription": "[ˈmaɪnə]",
    "translation": "шахтер"
  },
  {
    "index": 2486,
    "word": "sweat",
    "transcription": "[swɛt]",
    "translation": "пот, потеть"
  },
  {
    "index": 2487,
    "word": "sweaty",
    "transcription": "[ˈswɛti]",
    "translation": "потный"
  },
  {
    "index": 2488,
    "word": "ought",
    "transcription": "[ɔːt]",
    "translation": "должен, обязан"
  },
  {
    "index": 2489,
    "word": "edit",
    "transcription": "[ˈɛdɪt]",
    "translation": "редактировать, монтировать"
  },
  {
    "index": 2490,
    "word": "edition",
    "transcription": "[ɪˈdɪʃən]",
    "translation": "издание"
  },
  {
    "index": 2491,
    "word": "editor",
    "transcription": "[ˈɛdɪtə]",
    "translation": "редактор"
  },
  {
    "index": 2492,
    "word": "editorial",
    "transcription": "[ˌɛdɪˈtɔːrɪəl]",
    "translation": "редакционный"
  },
  {
    "index": 2493,
    "word": "single",
    "transcription": "[ˈsɪŋgl]",
    "translation": "один, отдельный, единый"
  },
  {
    "index": 2494,
    "word": "advantage",
    "transcription": "[ədˈvɑːntɪʤ]",
    "translation": "преимущество"
  },
  {
    "index": 2495,
    "word": "disadvantage",
    "transcription": "[ˌdɪsədˈvɑːntɪʤ]",
    "translation": "недостаток"
  },
  {
    "index": 2496,
    "word": "advantageous",
    "transcription": "[ˌædvənˈteɪʤəs]",
    "translation": "выгодный"
  },
  {
    "index": 2497,
    "word": "sink",
    "transcription": "[sɪŋk]",
    "translation": "раковина"
  },
  {
    "index": 2498,
    "word": "transmit",
    "transcription": "[trænzˈmɪt]",
    "translation": "передавать, переносить"
  },
  {
    "index": 2499,
    "word": "transmission",
    "transcription": "[trænzˈmɪʃən]",
    "translation": "передача"
  },
  {
    "index": 2500,
    "word": "helpful",
    "transcription": "[ˈhɛlpfʊl]",
    "translation": "полезный"
  },
  {
    "index": 2501,
    "word": "unhelpful",
    "transcription": "[ʌnˈhɛlpfəl]",
    "translation": "бесполезный"
  },
  {
    "index": 2502,
    "word": "cheek",
    "transcription": "[ʧiːk]",
    "translation": "щека"
  },
  {
    "index": 2503,
    "word": "swell (swelled, swollen)",
    "transcription": "[swɛl]",
    "translation": "раздуваться, распухать"
  },
  {
    "index": 2504,
    "word": "cause",
    "transcription": "[kɔːz]",
    "translation": "причина, быть причиной"
  },
  {
    "index": 2505,
    "word": "caused",
    "transcription": "[kɔːzd]",
    "translation": "вызванный"
  },
  {
    "index": 2506,
    "word": "pad",
    "transcription": "[pæd]",
    "translation": "блокнот"
  },
  {
    "index": 2507,
    "word": "tap",
    "transcription": "[tæp]",
    "translation": "кран"
  },
  {
    "index": 2508,
    "word": "persist",
    "transcription": "[pəˈsɪst]",
    "translation": "упорствовать"
  },
  {
    "index": 2509,
    "word": "persistent",
    "transcription": "[pəˈsɪstənt]",
    "translation": "стойкий"
  },
  {
    "index": 2510,
    "word": "persistence",
    "transcription": "[pəˈsɪstəns]",
    "translation": "упорство"
  },
  {
    "index": 2511,
    "word": "counsel",
    "transcription": "[ˈkaʊns(ə)l]",
    "translation": "совет, консультация"
  },
  {
    "index": 2512,
    "word": "counselor",
    "transcription": "[ˈkaʊns(ə)lə]",
    "translation": "консультант"
  },
  {
    "index": 2513,
    "word": "cell",
    "transcription": "[sɛl]",
    "translation": "ячейка, клетка"
  },
  {
    "index": 2514,
    "word": "cell phone",
    "transcription": "[sɛlfəʊn]",
    "translation": "сотовый телефон"
  },
  {
    "index": 2515,
    "word": "arise (arose, arisen)",
    "transcription": "[əˈraɪz]",
    "translation": "возникать, происходить"
  },
  {
    "index": 2516,
    "word": "bow",
    "transcription": "[baʊ]",
    "translation": "поклон, наклоняться"
  },
  {
    "index": 2517,
    "word": "point",
    "transcription": "[pɔɪnt]",
    "translation": "очко"
  },
  {
    "index": 2518,
    "word": "subject",
    "transcription": "[ˈsʌbʤɪkt]",
    "translation": "подверженный, подвергать"
  },
  {
    "index": 2519,
    "word": "cloth",
    "transcription": "[klɒθ]",
    "translation": "ткань, тряпка"
  },
  {
    "index": 2520,
    "word": "wear out",
    "transcription": "[weəraʊt]",
    "translation": "измотать, истрепать"
  },
  {
    "index": 2521,
    "word": "wear down",
    "transcription": "[weədaʊn]",
    "translation": "изнашиваться"
  },
  {
    "index": 2522,
    "word": "equal",
    "transcription": "[ˈiːkwəl]",
    "translation": "равный, равняться"
  },
  {
    "index": 2523,
    "word": "equality",
    "transcription": "[i(ː)ˈkwɒlɪti]",
    "translation": "равенство"
  },
  {
    "index": 2524,
    "word": "unequal",
    "transcription": "[ʌnˈiːkwəl]",
    "translation": "неравный"
  },
  {
    "index": 2525,
    "word": "unequality",
    "transcription": "[ˌʌni(ː)ˈkwɒlɪti]",
    "translation": "неравенство"
  },
  {
    "index": 2526,
    "word": "equally",
    "transcription": "[ˈiːkwəli]",
    "translation": "в равной степени"
  },
  {
    "index": 2527,
    "word": "equalize",
    "transcription": "[ˈiːkwəlaɪz]",
    "translation": "уравнять"
  },
  {
    "index": 2528,
    "word": "likely",
    "transcription": "[ˈlaɪkli]",
    "translation": "вероятно"
  },
  {
    "index": 2529,
    "word": "unlikely",
    "transcription": "[ʌnˈlaɪkli]",
    "translation": "вряд ли"
  },
  {
    "index": 2530,
    "word": "joint",
    "transcription": "[ʤɔɪnt]",
    "translation": "сустав, шарнир, стык и т. д."
  },
  {
    "index": 2531,
    "word": "floor",
    "transcription": "[flɔː]",
    "translation": "пол"
  },
  {
    "index": 2532,
    "word": "wave",
    "transcription": "[weɪv]",
    "translation": "махать, колебаться"
  },
  {
    "index": 2533,
    "word": "close down",
    "transcription": "[kləʊsdaʊn]",
    "translation": "закрыться (насовсем)"
  },
  {
    "index": 2534,
    "word": "shut down",
    "transcription": "[ʃʌtdaʊn]",
    "translation": "закрыться"
  },
  {
    "index": 2535,
    "word": "shutdown",
    "transcription": "[ˈʃʌtdaʊn]",
    "translation": "закрытие"
  },
  {
    "index": 2536,
    "word": "nail",
    "transcription": "[neɪl]",
    "translation": "гвоздь, прибивать"
  },
  {
    "index": 2537,
    "word": "lovely",
    "transcription": "[ˈlʌvli]",
    "translation": "чудесный, милый"
  },
  {
    "index": 2538,
    "word": "loveliness",
    "transcription": "[ˈlʌvlɪnɪs]",
    "translation": "миловидность"
  },
  {
    "index": 2539,
    "word": "authority",
    "transcription": "[ɔːˈθɒrɪti]",
    "translation": "власть, авторитет"
  },
  {
    "index": 2540,
    "word": "note",
    "transcription": "[nəʊt]",
    "translation": "заметка, запись"
  },
  {
    "index": 2541,
    "word": "notable",
    "transcription": "[ˈnəʊtəbl]",
    "translation": "примечательный"
  },
  {
    "index": 2542,
    "word": "footnote",
    "transcription": "[ˈfʊtnəʊt]",
    "translation": "сноска"
  },
  {
    "index": 2543,
    "word": "native",
    "transcription": "[ˈneɪtɪv]",
    "translation": "родной"
  },
  {
    "index": 2544,
    "word": "carve",
    "transcription": "[kɑːv]",
    "translation": "вырезать (напр. из дерева)"
  },
  {
    "index": 2545,
    "word": "carving",
    "transcription": "[ˈkɑːvɪŋ]",
    "translation": "резьба"
  },
  {
    "index": 2546,
    "word": "designate",
    "transcription": "[ˈdɛzɪgnɪt]",
    "translation": "обозначать, называть"
  },
  {
    "index": 2547,
    "word": "designation",
    "transcription": "[ˌdɛzɪgˈneɪʃən]",
    "translation": "обозначение"
  },
  {
    "index": 2548,
    "word": "mental",
    "transcription": "[ˈmɛntl]",
    "translation": "умственный"
  },
  {
    "index": 2549,
    "word": "mentality",
    "transcription": "[mɛnˈtælɪti]",
    "translation": "склад ума"
  },
  {
    "index": 2550,
    "word": "newspaper",
    "transcription": "[ˈnjuːzˌpeɪpə]",
    "translation": "газета"
  },
  {
    "index": 2551,
    "word": "tune",
    "transcription": "[tjuːn]",
    "translation": "мелодия, мотив"
  },
  {
    "index": 2552,
    "word": "foster",
    "transcription": "[ˈfɒstə]",
    "translation": "приёмный (ребёнок)"
  },
  {
    "index": 2553,
    "word": "gasp",
    "transcription": "[gɑːsp]",
    "translation": "задыхаться, ловить воздух"
  },
  {
    "index": 2554,
    "word": "wildlife",
    "transcription": "[ˈwaɪldlaɪf]",
    "translation": "дикая природа"
  },
  {
    "index": 2555,
    "word": "sharp",
    "transcription": "[ʃɑːp]",
    "translation": "острый"
  },
  {
    "index": 2556,
    "word": "sharpness",
    "transcription": "[ˈʃɑːpnəs]",
    "translation": "острота"
  },
  {
    "index": 2557,
    "word": "sharpen",
    "transcription": "[ˈʃɑːpən]",
    "translation": "точить"
  },
  {
    "index": 2558,
    "word": "corn",
    "transcription": "[kɔːn]",
    "translation": "кукуруза, зерно"
  },
  {
    "index": 2559,
    "word": "comfort",
    "transcription": "[ˈkʌmfət]",
    "translation": "утешать, утешение"
  },
  {
    "index": 2560,
    "word": "obvious",
    "transcription": "[ˈɒbvɪəs]",
    "translation": "очевидный"
  },
  {
    "index": 2561,
    "word": "title",
    "transcription": "[ˈtaɪtl]",
    "translation": "заголовок"
  },
  {
    "index": 2562,
    "word": "subtitle",
    "transcription": "[ˈsʌbˌtaɪtl]",
    "translation": "подзаголовок"
  },
  {
    "index": 2563,
    "word": "pass",
    "transcription": "[pɑːs]",
    "translation": "пройти"
  },
  {
    "index": 2564,
    "word": "passable",
    "transcription": "[ˈpɑːsəbl]",
    "translation": "проходимый"
  },
  {
    "index": 2565,
    "word": "outrage",
    "transcription": "[ˈaʊtreɪʤ]",
    "translation": "произвол, насилие, поругание"
  },
  {
    "index": 2566,
    "word": "outrageous",
    "transcription": "[aʊtˈreɪʤəs]",
    "translation": "возмутительный"
  },
  {
    "index": 2567,
    "word": "since",
    "transcription": "[sɪns]",
    "translation": "поскольку"
  },
  {
    "index": 2568,
    "word": "own",
    "transcription": "[əʊn]",
    "translation": "владеть"
  },
  {
    "index": 2569,
    "word": "owner",
    "transcription": "[ˈəʊnə]",
    "translation": "владелец"
  },
  {
    "index": 2570,
    "word": "ownership",
    "transcription": "[ˈəʊnəʃɪp]",
    "translation": "владение"
  },
  {
    "index": 2571,
    "word": "turn in",
    "transcription": "[tɜːnɪn]",
    "translation": "лечь спать"
  },
  {
    "index": 2572,
    "word": "outcome",
    "transcription": "[ˈaʊtkʌm]",
    "translation": "результат, исход"
  },
  {
    "index": 2573,
    "word": "convert",
    "transcription": "[ˈkɒnvɜːt]",
    "translation": "преобразовывать"
  },
  {
    "index": 2574,
    "word": "conversion",
    "transcription": "[kənˈvɜːʃən]",
    "translation": "преобразование"
  },
  {
    "index": 2575,
    "word": "reside",
    "transcription": "[rɪˈzaɪd]",
    "translation": "проживать (где-то)"
  },
  {
    "index": 2576,
    "word": "residence",
    "transcription": "[ˈrɛzɪdəns]",
    "translation": "резиденция"
  },
  {
    "index": 2577,
    "word": "resident",
    "transcription": "[ˈrɛzɪdənt]",
    "translation": "резидент"
  },
  {
    "index": 2578,
    "word": "betray",
    "transcription": "[bɪˈtreɪ]",
    "translation": "предавать"
  },
  {
    "index": 2579,
    "word": "betrayal",
    "transcription": "[bɪˈtreɪəl]",
    "translation": "предательство"
  },
  {
    "index": 2580,
    "word": "injure",
    "transcription": "[ˈɪnʤə]",
    "translation": "ранить, наносить ущерб"
  },
  {
    "index": 2581,
    "word": "injury",
    "transcription": "[ˈɪnʤəri]",
    "translation": "травма"
  },
  {
    "index": 2582,
    "word": "gradual",
    "transcription": "[ˈgrædjʊəl]",
    "translation": "постепенный"
  },
  {
    "index": 2583,
    "word": "special",
    "transcription": "[ˈspɛʃəl]",
    "translation": "особенный, специальный"
  },
  {
    "index": 2584,
    "word": "especially",
    "transcription": "[ɪsˈpɛʃəli]",
    "translation": "особенно"
  },
  {
    "index": 2585,
    "word": "rotate",
    "transcription": "[rəʊˈteɪt]",
    "translation": "сменять, чередовать"
  },
  {
    "index": 2586,
    "word": "rotation",
    "transcription": "[rəʊˈteɪʃən]",
    "translation": "вращение"
  },
  {
    "index": 2587,
    "word": "implement",
    "transcription": "[ˈɪmplɪmənt]",
    "translation": "осуществлять"
  },
  {
    "index": 2588,
    "word": "implementation",
    "transcription": "[ˌɪmplɪmɛnˈteɪʃən]",
    "translation": "реализация"
  },
  {
    "index": 2589,
    "word": "tip (tips)",
    "transcription": "[tɪp]",
    "translation": "чаевые"
  },
  {
    "index": 2590,
    "word": "settle",
    "transcription": "[ˈsɛtl]",
    "translation": "селиться"
  },
  {
    "index": 2591,
    "word": "settlement",
    "transcription": "[ˈsɛtlmənt]",
    "translation": "поселок"
  },
  {
    "index": 2592,
    "word": "settler",
    "transcription": "[ˈsɛtlə]",
    "translation": "поселенец"
  },
  {
    "index": 2593,
    "word": "pepper",
    "transcription": "[ˈpɛpə]",
    "translation": "перец"
  },
  {
    "index": 2594,
    "word": "thorough",
    "transcription": "[ˈθʌrə]",
    "translation": "тщательный, полный"
  },
  {
    "index": 2595,
    "word": "thoroughness",
    "transcription": "[ˈθʌrənɪs]",
    "translation": "тщательность"
  },
  {
    "index": 2596,
    "word": "sole",
    "transcription": "[səʊl]",
    "translation": "подошва"
  },
  {
    "index": 2597,
    "word": "fend off",
    "transcription": "[fɛndɒf]",
    "translation": "защищаться"
  },
  {
    "index": 2598,
    "word": "Jew",
    "transcription": "[ʤuː]",
    "translation": "еврей"
  },
  {
    "index": 2599,
    "word": "Jewish",
    "transcription": "[ˈʤu(ː)ɪʃ]",
    "translation": "еврейский, иудейский"
  },
  {
    "index": 2600,
    "word": "differ",
    "transcription": "[ˈdɪfə]",
    "translation": "отличаться"
  },
  {
    "index": 2601,
    "word": "cheat",
    "transcription": "[ʧiːt]",
    "translation": "жульничать"
  },
  {
    "index": 2602,
    "word": "cheater",
    "transcription": "[ˈʧiːtə]",
    "translation": "жулик"
  },
  {
    "index": 2603,
    "word": "deliberate",
    "transcription": "[dɪˈlɪbərɪt]",
    "translation": "обдуманный, преднамеренный"
  },
  {
    "index": 2604,
    "word": "deliberation",
    "transcription": "[dɪˌlɪbəˈreɪʃən]",
    "translation": "обдумывание"
  },
  {
    "index": 2605,
    "word": "polish",
    "transcription": "[ˈpɒlɪʃ]",
    "translation": "шлифовать, полировать"
  },
  {
    "index": 2606,
    "word": "external",
    "transcription": "[ɛksˈtɜːnl]",
    "translation": "внешний"
  },
  {
    "index": 2607,
    "word": "internal",
    "transcription": "[ɪnˈtɜːnl]",
    "translation": "внутренний"
  },
  {
    "index": 2608,
    "word": "internalize",
    "transcription": "[ɪnˈtɜːnəˌlaɪz]",
    "translation": "усваивать"
  },
  {
    "index": 2609,
    "word": "show off",
    "transcription": "[ʃəʊɒf]",
    "translation": "показать всем, похвастаться"
  },
  {
    "index": 2610,
    "word": "bunch",
    "transcription": "[bʌnʧ]",
    "translation": "связка, пучок, группа"
  },
  {
    "index": 2611,
    "word": "swing (swung, swung)",
    "transcription": "[swɪŋ]",
    "translation": "качать, махать"
  },
  {
    "index": 2612,
    "word": "scholar",
    "transcription": "[ˈskɒlə]",
    "translation": "учёный"
  },
  {
    "index": 2613,
    "word": "scholarship",
    "transcription": "[ˈskɒləʃɪp]",
    "translation": "учёность"
  },
  {
    "index": 2614,
    "word": "steam",
    "transcription": "[stiːm]",
    "translation": "пар"
  },
  {
    "index": 2615,
    "word": "steamy",
    "transcription": "[ˈstiːmi]",
    "translation": "парообразный, насыщенный паром"
  },
  {
    "index": 2616,
    "word": "steamship",
    "transcription": "[ˈstiːmʃɪp]",
    "translation": "пароход"
  },
  {
    "index": 2617,
    "word": "helpless",
    "transcription": "[ˈhɛlplɪs]",
    "translation": "беспомощный"
  },
  {
    "index": 2618,
    "word": "helplessness",
    "transcription": "[ˈhɛlplɪsnəs]",
    "translation": "беспомощность"
  },
  {
    "index": 2619,
    "word": "universe",
    "transcription": "[ˈjuːnɪvɜːs]",
    "translation": "вселенная"
  },
  {
    "index": 2620,
    "word": "universal",
    "transcription": "[ˌjuːnɪˈvɜːsəl]",
    "translation": "всеобщий"
  },
  {
    "index": 2621,
    "word": "fellow",
    "transcription": "[ˈfɛləʊ]",
    "translation": "парень, человек"
  },
  {
    "index": 2622,
    "word": "stage",
    "transcription": "[steɪʤ]",
    "translation": "сцена"
  },
  {
    "index": 2623,
    "word": "offstage",
    "transcription": "[ˌɒfˈsteɪʤ]",
    "translation": "закулисный"
  },
  {
    "index": 2624,
    "word": "backstage",
    "transcription": "[ˌbækˈsteɪʤ]",
    "translation": "закулисный"
  },
  {
    "index": 2625,
    "word": "correspond",
    "transcription": "[ˌkɒrɪsˈpɒnd]",
    "translation": "соответствовать"
  },
  {
    "index": 2626,
    "word": "correspondence",
    "transcription": "[ˌkɒrɪsˈpɒndəns]",
    "translation": "соответствие"
  },
  {
    "index": 2627,
    "word": "board",
    "transcription": "[bɔːd]",
    "translation": "борт, подниматься на борт"
  },
  {
    "index": 2628,
    "word": "boarding",
    "transcription": "[ˈbɔːdɪŋ]",
    "translation": "посадка"
  },
  {
    "index": 2629,
    "word": "look at",
    "transcription": "[lʊkæt]",
    "translation": "рассмотреть, обдумать"
  },
  {
    "index": 2630,
    "word": "interpret",
    "transcription": "[ɪnˈtɜːprɪt]",
    "translation": "истолковывать"
  },
  {
    "index": 2631,
    "word": "interpretation",
    "transcription": "[ɪnˌtɜːprɪˈteɪʃən]",
    "translation": "толкование"
  },
  {
    "index": 2632,
    "word": "misinterpret",
    "transcription": "[ˌmɪsɪnˈtɜːprɪt]",
    "translation": "ошибочно истолковывать"
  },
  {
    "index": 2633,
    "word": "brush",
    "transcription": "[brʌʃ]",
    "translation": "кисть, щётка, чистить"
  },
  {
    "index": 2634,
    "word": "thrill",
    "transcription": "[θrɪl]",
    "translation": "трепет, дрожь, дрожать"
  },
  {
    "index": 2635,
    "word": "thrilling",
    "transcription": "[ˈθrɪlɪŋ]",
    "translation": "захватывающий"
  },
  {
    "index": 2636,
    "word": "sell out of",
    "transcription": "[sɛlaʊtɒv]",
    "translation": "распродать (весь товар)"
  },
  {
    "index": 2637,
    "word": "intelligence",
    "transcription": "[ɪnˈtɛlɪʤəns]",
    "translation": "разведка"
  },
  {
    "index": 2638,
    "word": "assist",
    "transcription": "[əˈsɪst]",
    "translation": "помогать"
  },
  {
    "index": 2639,
    "word": "assistance",
    "transcription": "[əˈsɪstəns]",
    "translation": "помощь"
  },
  {
    "index": 2640,
    "word": "assistant",
    "transcription": "[əˈsɪstənt]",
    "translation": "помощник"
  },
  {
    "index": 2641,
    "word": "part",
    "transcription": "[pɑːt]",
    "translation": "роль"
  },
  {
    "index": 2642,
    "word": "draft",
    "transcription": "[drɑːft]",
    "translation": "тяга, сквозняк"
  },
  {
    "index": 2643,
    "word": "desire",
    "transcription": "[dɪˈzaɪə]",
    "translation": "желание, желать"
  },
  {
    "index": 2644,
    "word": "desirable",
    "transcription": "[dɪˈzaɪərəbl]",
    "translation": "желательный"
  },
  {
    "index": 2645,
    "word": "undesirable",
    "transcription": "[ˌʌndɪˈzaɪərəbl]",
    "translation": "нежелательный"
  },
  {
    "index": 2646,
    "word": "eliminate",
    "transcription": "[ɪˈlɪmɪneɪt]",
    "translation": "устранять, ликвидировать"
  },
  {
    "index": 2647,
    "word": "elimination",
    "transcription": "[ɪˌlɪmɪˈneɪʃən]",
    "translation": "устранение"
  },
  {
    "index": 2648,
    "word": "fly",
    "transcription": "[flaɪ]",
    "translation": "муха"
  },
  {
    "index": 2649,
    "word": "dragonfly",
    "transcription": "[ˈdrægənflaɪ]",
    "translation": "стрекоза"
  },
  {
    "index": 2650,
    "word": "try out",
    "transcription": "[traɪaʊt]",
    "translation": "испытать"
  },
  {
    "index": 2651,
    "word": "distinguish",
    "transcription": "[dɪsˈtɪŋgwɪʃ]",
    "translation": "выделять, отличать"
  },
  {
    "index": 2652,
    "word": "distinguishable",
    "transcription": "[dɪsˈtɪŋgwɪʃəbl]",
    "translation": "различимый"
  },
  {
    "index": 2653,
    "word": "legislation",
    "transcription": "[ˌlɛʤɪsˈleɪʃən]",
    "translation": "законодательство"
  },
  {
    "index": 2654,
    "word": "legislature",
    "transcription": "[ˈlɛʤɪsleɪʧə]",
    "translation": "законодательная власть"
  },
  {
    "index": 2655,
    "word": "legislate",
    "transcription": "[ˈlɛʤɪsleɪt]",
    "translation": "законодательствовать"
  },
  {
    "index": 2656,
    "word": "legislator",
    "transcription": "[ˈlɛʤɪsleɪtə]",
    "translation": "законодатель"
  },
  {
    "index": 2657,
    "word": "legislative",
    "transcription": "[ˈlɛʤɪslətɪv]",
    "translation": "законодательный"
  },
  {
    "index": 2658,
    "word": "simple",
    "transcription": "[ˈsɪmpl]",
    "translation": "простой, обычный"
  },
  {
    "index": 2659,
    "word": "simplicity",
    "transcription": "[sɪmˈplɪsɪti]",
    "translation": "простота"
  },
  {
    "index": 2660,
    "word": "simplify",
    "transcription": "[ˈsɪmplɪfaɪ]",
    "translation": "упрощать"
  },
  {
    "index": 2661,
    "word": "simplification",
    "transcription": "[ˌsɪmplɪfɪˈkeɪʃən]",
    "translation": "упрощение"
  },
  {
    "index": 2662,
    "word": "exit",
    "transcription": "[ˈɛksɪt]",
    "translation": "выход, выходить"
  },
  {
    "index": 2663,
    "word": "speak out",
    "transcription": "[spiːkaʊt]",
    "translation": "высказать"
  },
  {
    "index": 2664,
    "word": "ski",
    "transcription": "[skiː]",
    "translation": "ездить на лыжах"
  },
  {
    "index": 2665,
    "word": "devastate",
    "transcription": "[ˈdɛvəsteɪt]",
    "translation": "опустошать, разорять"
  },
  {
    "index": 2666,
    "word": "devastation",
    "transcription": "[ˌdɛvəsˈteɪʃən]",
    "translation": "разорение"
  },
  {
    "index": 2667,
    "word": "see to",
    "transcription": "[siːtuː]",
    "translation": "заняться, позаботиться"
  },
  {
    "index": 2668,
    "word": "coat",
    "transcription": "[kəʊt]",
    "translation": "пальто"
  },
  {
    "index": 2669,
    "word": "bump",
    "transcription": "[bʌmp]",
    "translation": "удар, ударять"
  },
  {
    "index": 2670,
    "word": "head for",
    "transcription": "[hɛdfɔː]",
    "translation": "направляться"
  },
  {
    "index": 2671,
    "word": "tank",
    "transcription": "[tæŋk]",
    "translation": "бак"
  },
  {
    "index": 2672,
    "word": "ultimate",
    "transcription": "[ˈʌltɪmɪt]",
    "translation": "окончательный, конечный"
  },
  {
    "index": 2673,
    "word": "ultimately",
    "transcription": "[ˈʌltɪmɪtli]",
    "translation": "в конечном счёте"
  },
  {
    "index": 2674,
    "word": "sensitive",
    "transcription": "[ˈsɛnsɪtɪv]",
    "translation": "чувствительный"
  },
  {
    "index": 2675,
    "word": "sensitivity",
    "transcription": "[ˌsɛnsɪˈtɪvɪti]",
    "translation": "чувствительность"
  },
  {
    "index": 2676,
    "word": "insensitive",
    "transcription": "[ɪnˈsɛnsɪtɪv]",
    "translation": "нечувствительный"
  },
  {
    "index": 2677,
    "word": "insensitivity",
    "transcription": "[insensitivity]",
    "translation": "нечувствительность"
  },
  {
    "index": 2678,
    "word": "give birth to",
    "transcription": "[gɪvbɜːθtuː]",
    "translation": "родить"
  },
  {
    "index": 2679,
    "word": "guess",
    "transcription": "[gɛs]",
    "translation": "угадывать, догадываться"
  },
  {
    "index": 2680,
    "word": "recruit",
    "transcription": "[rɪˈkruːt]",
    "translation": "набирать, вербовать"
  },
  {
    "index": 2681,
    "word": "recruitment",
    "transcription": "[rɪˈkruːtmənt]",
    "translation": "набор персонала"
  },
  {
    "index": 2682,
    "word": "future",
    "transcription": "[ˈfjuːʧə]",
    "translation": "будущий, будущее"
  },
  {
    "index": 2683,
    "word": "harsh",
    "transcription": "[hɑːʃ]",
    "translation": "резкий, суровый, грубый"
  },
  {
    "index": 2684,
    "word": "harshness",
    "transcription": "[ˈhɑːʃnɪs]",
    "translation": "резкость"
  },
  {
    "index": 2685,
    "word": "desperate",
    "transcription": "[ˈdɛspərɪt]",
    "translation": "отчаянный, безвыходный"
  },
  {
    "index": 2686,
    "word": "desperation",
    "transcription": "[ˌdɛspəˈreɪʃən]",
    "translation": "безрассудство"
  },
  {
    "index": 2687,
    "word": "enrol (enroll)",
    "transcription": "[ɪnˈrəʊl]",
    "translation": "записать (в члены), набрать"
  },
  {
    "index": 2688,
    "word": "enrolment",
    "transcription": "[ɪnˈrəʊlmənt]",
    "translation": "регистрация куда-либо"
  },
  {
    "index": 2689,
    "word": "excuse",
    "transcription": "[ɪksˈkjuːs]",
    "translation": "повод, оправдание, извинить"
  },
  {
    "index": 2690,
    "word": "excusable",
    "transcription": "[ɪksˈkjuːzəbl]",
    "translation": "простительный"
  },
  {
    "index": 2691,
    "word": "inexcusable",
    "transcription": "[ˌɪnɪksˈkjuːzəbl]",
    "translation": "непростительный"
  },
  {
    "index": 2692,
    "word": "patrol",
    "transcription": "[pəˈtrəʊl]",
    "translation": "патруль"
  },
  {
    "index": 2693,
    "word": "estimate",
    "transcription": "[ˈɛstɪmɪt]",
    "translation": "примерно оценивать"
  },
  {
    "index": 2694,
    "word": "estimation",
    "transcription": "[ˌɛstɪˈmeɪʃən]",
    "translation": "оценка"
  },
  {
    "index": 2695,
    "word": "underestimate",
    "transcription": "[ˌʌndəˈrɛstɪmɪt]",
    "translation": "недооценивать"
  },
  {
    "index": 2696,
    "word": "overestimate",
    "transcription": "[ˌəʊvəˈrɛstɪmɪt]",
    "translation": "переоценивать"
  },
  {
    "index": 2697,
    "word": "shrug",
    "transcription": "[ʃrʌg]",
    "translation": "пожать плечами"
  },
  {
    "index": 2698,
    "word": "attack",
    "transcription": "[əˈtæk]",
    "translation": "нападать, нападение"
  },
  {
    "index": 2699,
    "word": "interrupt",
    "transcription": "[ˌɪntəˈrʌpt]",
    "translation": "прерывать, перебивать"
  },
  {
    "index": 2700,
    "word": "interruption",
    "transcription": "[ˌɪntəˈrʌpʃən]",
    "translation": "прерывание"
  },
  {
    "index": 2701,
    "word": "uninterrupted",
    "transcription": "[ˌʌnˌɪntəˈrʌptɪd]",
    "translation": "непрерывный"
  },
  {
    "index": 2702,
    "word": "delight",
    "transcription": "[dɪˈlaɪt]",
    "translation": "восторг"
  },
  {
    "index": 2703,
    "word": "delightful",
    "transcription": "[dɪˈlaɪtfʊl]",
    "translation": "восхитительный"
  },
  {
    "index": 2704,
    "word": "creep (crept, crept)",
    "transcription": "[kriːp]",
    "translation": "ползти, красться"
  },
  {
    "index": 2705,
    "word": "discover",
    "transcription": "[dɪsˈkʌvə]",
    "translation": "открыть (новое)"
  },
  {
    "index": 2706,
    "word": "discovery",
    "transcription": "[dɪsˈkʌvəri]",
    "translation": "открытие"
  },
  {
    "index": 2707,
    "word": "height",
    "transcription": "[haɪt]",
    "translation": "высота, рост"
  },
  {
    "index": 2708,
    "word": "heighten",
    "transcription": "[ˈhaɪtn]",
    "translation": "повышать"
  },
  {
    "index": 2709,
    "word": "nutrition",
    "transcription": "[nju(ː)ˈtrɪʃən]",
    "translation": "питание"
  },
  {
    "index": 2710,
    "word": "nutritionist",
    "transcription": "[nju(ː)ˈtrɪʃənɪst]",
    "translation": "диетолог"
  },
  {
    "index": 2711,
    "word": "bring out",
    "transcription": "[brɪŋaʊt]",
    "translation": "выпустить (новинку и т.д.)"
  },
  {
    "index": 2712,
    "word": "roll out",
    "transcription": "[rəʊlaʊt]",
    "translation": "выпустить"
  },
  {
    "index": 2713,
    "word": "drills",
    "transcription": "[drɪlz]",
    "translation": "тренировка, учение"
  },
  {
    "index": 2714,
    "word": "mood",
    "transcription": "[muːd]",
    "translation": "настроение"
  },
  {
    "index": 2715,
    "word": "moody",
    "transcription": "[ˈmuːdi]",
    "translation": "капризный"
  },
  {
    "index": 2716,
    "word": "moody 2",
    "transcription": "[ˈmuːdi2]",
    "translation": "унылый"
  },
  {
    "index": 2717,
    "word": "flesh",
    "transcription": "[flɛʃ]",
    "translation": "плоть, мясо"
  },
  {
    "index": 2718,
    "word": "develop",
    "transcription": "[dɪˈvɛləp]",
    "translation": "развивать, разрабатывать"
  },
  {
    "index": 2719,
    "word": "development",
    "transcription": "[dɪˈvɛləpmənt]",
    "translation": "развитие"
  },
  {
    "index": 2720,
    "word": "lot",
    "transcription": "[lɒt]",
    "translation": "жребий, судьба"
  },
  {
    "index": 2721,
    "word": "lottery",
    "transcription": "[ˈlɒtəri]",
    "translation": "лотерея"
  },
  {
    "index": 2722,
    "word": "buy",
    "transcription": "[baɪ]",
    "translation": "верить, соглашаться (разг.)"
  },
  {
    "index": 2723,
    "word": "prompt",
    "transcription": "[prɒmpt]",
    "translation": "срочный, оперативный"
  },
  {
    "index": 2724,
    "word": "last",
    "transcription": "[lɑːst]",
    "translation": "длиться"
  },
  {
    "index": 2725,
    "word": "lasting",
    "transcription": "[ˈlɑːstɪŋ]",
    "translation": "долговечный"
  },
  {
    "index": 2726,
    "word": "everlasting",
    "transcription": "[ˌɛvəˈlɑːstɪŋ]",
    "translation": "вечный, бесконечный"
  },
  {
    "index": 2727,
    "word": "stand out",
    "transcription": "[stændaʊt]",
    "translation": "выделяться"
  },
  {
    "index": 2728,
    "word": "abuse",
    "transcription": "[əˈbjuːs]",
    "translation": "злоупотреблять"
  },
  {
    "index": 2729,
    "word": "tent",
    "transcription": "[tɛnt]",
    "translation": "палатка, шатёр"
  },
  {
    "index": 2730,
    "word": "ride",
    "transcription": "[raɪd]",
    "translation": "ездить"
  },
  {
    "index": 2731,
    "word": "long for",
    "transcription": "[lɒŋfɔː]",
    "translation": "желать или скучать"
  },
  {
    "index": 2732,
    "word": "yearn for",
    "transcription": "[jɜːnfɔː]",
    "translation": "стремиться к"
  },
  {
    "index": 2733,
    "word": "longing",
    "transcription": "[ˈlɒŋɪŋ]",
    "translation": "желание"
  },
  {
    "index": 2734,
    "word": "fair",
    "transcription": "[feə]",
    "translation": "справедливый, честный"
  },
  {
    "index": 2735,
    "word": "fairness",
    "transcription": "[ˈfeənɪs]",
    "translation": "справедливость"
  },
  {
    "index": 2736,
    "word": "unfair",
    "transcription": "[ʌnˈfeə]",
    "translation": "несправедливый"
  },
  {
    "index": 2737,
    "word": "gender",
    "transcription": "[ˈʤɛndə]",
    "translation": "пол"
  },
  {
    "index": 2738,
    "word": "journey",
    "transcription": "[ˈʤɜːni]",
    "translation": "путешествие"
  },
  {
    "index": 2739,
    "word": "spy (on)",
    "transcription": "[spaɪ]",
    "translation": "шпион, шпионить"
  },
  {
    "index": 2740,
    "word": "espionage",
    "transcription": "[ˌɛspɪəˈnɑːʒ]",
    "translation": "шпионаж"
  },
  {
    "index": 2741,
    "word": "ask out",
    "transcription": "[ɑːskaʊt]",
    "translation": "пригласить сходить"
  },
  {
    "index": 2742,
    "word": "take out",
    "transcription": "[teɪkaʊt]",
    "translation": "взять сходить"
  },
  {
    "index": 2743,
    "word": "go out",
    "transcription": "[gəʊaʊt]",
    "translation": "сходить куда-нибудь"
  },
  {
    "index": 2744,
    "word": "flat",
    "transcription": "[flæt]",
    "translation": "квартира"
  },
  {
    "index": 2745,
    "word": "capacity",
    "transcription": "[kəˈpæsɪti]",
    "translation": "способность, возможность"
  },
  {
    "index": 2746,
    "word": "incapacity",
    "transcription": "[ˌɪnkəˈpæsɪti]",
    "translation": "неспособность"
  },
  {
    "index": 2747,
    "word": "wine",
    "transcription": "[waɪn]",
    "translation": "вино"
  },
  {
    "index": 2748,
    "word": "winery",
    "transcription": "[ˈwaɪnəri]",
    "translation": "винный завод"
  },
  {
    "index": 2749,
    "word": "put together",
    "transcription": "[pʊttəˈgɛðə]",
    "translation": "собирать, соединять"
  },
  {
    "index": 2750,
    "word": "piece together",
    "transcription": "[piːstəˈgɛðə]",
    "translation": "собрать (по кускам)"
  },
  {
    "index": 2751,
    "word": "fit together",
    "transcription": "[fɪttəˈgɛðə]",
    "translation": "подходить друг другу"
  },
  {
    "index": 2752,
    "word": "figure out",
    "transcription": "[ˈfɪgəraʊt]",
    "translation": "понять, придумать"
  },
  {
    "index": 2753,
    "word": "sort out",
    "transcription": "[sɔːtaʊt]",
    "translation": "разобраться"
  },
  {
    "index": 2754,
    "word": "work out",
    "transcription": "[wɜːkaʊt]",
    "translation": "выработать"
  },
  {
    "index": 2755,
    "word": "responsible",
    "transcription": "[rɪsˈpɒnsəbl]",
    "translation": "ответственный"
  },
  {
    "index": 2756,
    "word": "irresponsible",
    "transcription": "[ˌɪrɪsˈpɒnsəbl]",
    "translation": "безответственный"
  },
  {
    "index": 2757,
    "word": "responsibility",
    "transcription": "[rɪsˌpɒnsəˈbɪlɪti]",
    "translation": "обязанность"
  },
  {
    "index": 2758,
    "word": "sentence",
    "transcription": "[ˈsɛntəns]",
    "translation": "приговор"
  },
  {
    "index": 2759,
    "word": "switch",
    "transcription": "[swɪʧ]",
    "translation": "переключать, переключатель"
  },
  {
    "index": 2760,
    "word": "cancel",
    "transcription": "[ˈkænsəl]",
    "translation": "отменять"
  },
  {
    "index": 2761,
    "word": "cancellation",
    "transcription": "[ˌkænsəˈleɪʃən]",
    "translation": "отмена"
  },
  {
    "index": 2762,
    "word": "cancelled",
    "transcription": "[ˈkænsəld]",
    "translation": "отменен"
  },
  {
    "index": 2763,
    "word": "scratch",
    "transcription": "[skræʧ]",
    "translation": "царапать, царапина"
  },
  {
    "index": 2764,
    "word": "source",
    "transcription": "[sɔːs]",
    "translation": "источник"
  },
  {
    "index": 2765,
    "word": "sheet",
    "transcription": "[ʃiːt]",
    "translation": "лист"
  },
  {
    "index": 2766,
    "word": "manage",
    "transcription": "[ˈmænɪʤ]",
    "translation": "справляться, управлять"
  },
  {
    "index": 2767,
    "word": "management",
    "transcription": "[ˈmænɪʤmənt]",
    "translation": "управление"
  },
  {
    "index": 2768,
    "word": "manage to",
    "transcription": "[ˈmænɪʤtuː]",
    "translation": "справиться с (задачей)"
  },
  {
    "index": 2769,
    "word": "manage without",
    "transcription": "[ˈmænɪʤwɪˈðaʊt]",
    "translation": "обойтись без"
  },
  {
    "index": 2770,
    "word": "corner",
    "transcription": "[ˈkɔːnə]",
    "translation": "угол"
  },
  {
    "index": 2771,
    "word": "cornered",
    "transcription": "[ˈkɔːnəd]",
    "translation": "загнанный в угол"
  },
  {
    "index": 2772,
    "word": "fright",
    "transcription": "[fraɪt]",
    "translation": "испуг"
  },
  {
    "index": 2773,
    "word": "frighten",
    "transcription": "[ˈfraɪtn]",
    "translation": "пугать"
  },
  {
    "index": 2774,
    "word": "frightful",
    "transcription": "[ˈfraɪtfʊl]",
    "translation": "ужасный"
  },
  {
    "index": 2775,
    "word": "stable",
    "transcription": "[ˈsteɪbl]",
    "translation": "устойчивый"
  },
  {
    "index": 2776,
    "word": "unstable",
    "transcription": "[ʌnˈsteɪbl]",
    "translation": "неустойчивый"
  },
  {
    "index": 2777,
    "word": "stability",
    "transcription": "[stəˈbɪlɪti]",
    "translation": "устойчивость"
  },
  {
    "index": 2778,
    "word": "instability",
    "transcription": "[ˌɪnstəˈbɪlɪti]",
    "translation": "неустойчивость"
  },
  {
    "index": 2779,
    "word": "stabilise",
    "transcription": "[ˈsteɪbɪlaɪz]",
    "translation": "стабилизировать"
  },
  {
    "index": 2780,
    "word": "occur to",
    "transcription": "[əˈkɜːtuː]",
    "translation": "прийти в голову"
  },
  {
    "index": 2781,
    "word": "associate",
    "transcription": "[əˈsəʊʃɪɪt]",
    "translation": "общаться, связываться"
  },
  {
    "index": 2782,
    "word": "apparent",
    "transcription": "[əˈpærənt]",
    "translation": "явный, видимый"
  },
  {
    "index": 2783,
    "word": "apparently",
    "transcription": "[əˈpærəntli]",
    "translation": "по всей видимости"
  },
  {
    "index": 2784,
    "word": "east",
    "transcription": "[iːst]",
    "translation": "восток"
  },
  {
    "index": 2785,
    "word": "eastern",
    "transcription": "[ˈiːstən]",
    "translation": "восточный"
  },
  {
    "index": 2786,
    "word": "survey",
    "transcription": "[ˈsɜːveɪ]",
    "translation": "обзор, исследование"
  },
  {
    "index": 2787,
    "word": "store",
    "transcription": "[stɔː]",
    "translation": "магазин"
  },
  {
    "index": 2788,
    "word": "bookstore",
    "transcription": "[ˈbʊkstɔː]",
    "translation": "книжный магазин"
  },
  {
    "index": 2789,
    "word": "drugstore",
    "transcription": "[ˈdrʌgstɔː]",
    "translation": "аптека"
  },
  {
    "index": 2790,
    "word": "rid",
    "transcription": "[rɪd]",
    "translation": "освобождать, избавлять"
  },
  {
    "index": 2791,
    "word": "reception",
    "transcription": "[rɪˈsɛpʃən]",
    "translation": "прием, приёмная"
  },
  {
    "index": 2792,
    "word": "receptionist",
    "transcription": "[rɪˈsɛpʃənɪst]",
    "translation": "администратор"
  },
  {
    "index": 2793,
    "word": "at all",
    "transcription": "[ætɔːl]",
    "translation": "совсем"
  },
  {
    "index": 2794,
    "word": "suit",
    "transcription": "[sjuːt]",
    "translation": "подходить, соответствовать"
  },
  {
    "index": 2795,
    "word": "suitable",
    "transcription": "[ˈsjuːtəbl]",
    "translation": "подходящий"
  },
  {
    "index": 2796,
    "word": "unsuitable",
    "transcription": "[ʌnˈsjuːtəbl]",
    "translation": "неподходящий"
  },
  {
    "index": 2797,
    "word": "constitute",
    "transcription": "[ˈkɒnstɪtjuːt]",
    "translation": "составлять, образовывать"
  },
  {
    "index": 2798,
    "word": "constituent",
    "transcription": "[kənˈstɪtjʊənt]",
    "translation": "составная часть"
  },
  {
    "index": 2799,
    "word": "go ahead",
    "transcription": "[gəʊəˈhɛd]",
    "translation": "взять (и сделать)"
  },
  {
    "index": 2800,
    "word": "village",
    "transcription": "[ˈvɪlɪʤ]",
    "translation": "деревня"
  },
  {
    "index": 2801,
    "word": "villager",
    "transcription": "[ˈvɪlɪʤə]",
    "translation": "селянин"
  },
  {
    "index": 2802,
    "word": "scale",
    "transcription": "[skeɪl]",
    "translation": "взбираться"
  },
  {
    "index": 2803,
    "word": "accord",
    "transcription": "[əˈkɔːd]",
    "translation": "согласие"
  },
  {
    "index": 2804,
    "word": "accordance",
    "transcription": "[əˈkɔːdəns]",
    "translation": "соответствие"
  },
  {
    "index": 2805,
    "word": "latter",
    "transcription": "[ˈlætə]",
    "translation": "последний (из названных)"
  },
  {
    "index": 2806,
    "word": "former",
    "transcription": "[ˈfɔːmə]",
    "translation": "первый (из названных)"
  },
  {
    "index": 2807,
    "word": "pine",
    "transcription": "[paɪn]",
    "translation": "сосна"
  },
  {
    "index": 2808,
    "word": "wipe",
    "transcription": "[waɪp]",
    "translation": "вытирать, салфетка"
  },
  {
    "index": 2809,
    "word": "clue",
    "transcription": "[kluː]",
    "translation": "ключ, нить, улика"
  },
  {
    "index": 2810,
    "word": "clueless",
    "transcription": "[ˈkluːləs]",
    "translation": "невежественный"
  },
  {
    "index": 2811,
    "word": "visit",
    "transcription": "[ˈvɪzɪt]",
    "translation": "посетить, посещение"
  },
  {
    "index": 2812,
    "word": "visitor",
    "transcription": "[ˈvɪzɪtə]",
    "translation": "посетитель"
  },
  {
    "index": 2813,
    "word": "sensation",
    "transcription": "[sɛnˈseɪʃən]",
    "translation": "ощущение"
  },
  {
    "index": 2814,
    "word": "discount",
    "transcription": "[ˈdɪskaʊnt]",
    "translation": "скидка"
  },
  {
    "index": 2815,
    "word": "torture",
    "transcription": "[ˈtɔːʧə]",
    "translation": "пытка, мучить"
  },
  {
    "index": 2816,
    "word": "guest",
    "transcription": "[gɛst]",
    "translation": "гость"
  },
  {
    "index": 2817,
    "word": "rear",
    "transcription": "[rɪə]",
    "translation": "задний"
  },
  {
    "index": 2818,
    "word": "degree",
    "transcription": "[dɪˈgriː]",
    "translation": "степень (во всех значениях)"
  },
  {
    "index": 2819,
    "word": "treat",
    "transcription": "[triːt]",
    "translation": "обращаться, иметь дело"
  },
  {
    "index": 2820,
    "word": "treatment",
    "transcription": "[ˈtriːtmənt]",
    "translation": "обращение"
  },
  {
    "index": 2821,
    "word": "mistreat",
    "transcription": "[mɪsˈtriːt]",
    "translation": "дурно обращаться"
  },
  {
    "index": 2822,
    "word": "mistreatment",
    "transcription": "[mɪsˈtriːtmənt]",
    "translation": "плохое обращение"
  },
  {
    "index": 2823,
    "word": "assert",
    "transcription": "[əˈsɜːt]",
    "translation": "утверждать, отстаивать"
  },
  {
    "index": 2824,
    "word": "assertion",
    "transcription": "[əˈsɜːʃ(ə)n]",
    "translation": "утверждение"
  },
  {
    "index": 2825,
    "word": "snake",
    "transcription": "[sneɪk]",
    "translation": "змея"
  },
  {
    "index": 2826,
    "word": "bone",
    "transcription": "[bəʊn]",
    "translation": "кость"
  },
  {
    "index": 2827,
    "word": "bony",
    "transcription": "[ˈbəʊni]",
    "translation": "костлявый"
  },
  {
    "index": 2828,
    "word": "peer",
    "transcription": "[pɪə]",
    "translation": "ровня, ровесник"
  },
  {
    "index": 2829,
    "word": "obtain",
    "transcription": "[əbˈteɪn]",
    "translation": "получить, обрести"
  },
  {
    "index": 2830,
    "word": "entertain",
    "transcription": "[ˌɛntəˈteɪn]",
    "translation": "развлекать"
  },
  {
    "index": 2831,
    "word": "entertainment",
    "transcription": "[ˌɛntəˈteɪnmənt]",
    "translation": "развлечение"
  },
  {
    "index": 2832,
    "word": "lobby",
    "transcription": "[ˈlɒbi]",
    "translation": "вестибюль, фойе, прихожая"
  },
  {
    "index": 2833,
    "word": "gamble",
    "transcription": "[ˈgæmbl]",
    "translation": "азартная игра, играть"
  },
  {
    "index": 2834,
    "word": "gambler",
    "transcription": "[ˈgæmblə]",
    "translation": "игрок"
  },
  {
    "index": 2835,
    "word": "via",
    "transcription": "[ˈvaɪə]",
    "translation": "через"
  },
  {
    "index": 2836,
    "word": "put out",
    "transcription": "[pʊtaʊt]",
    "translation": "потушить"
  },
  {
    "index": 2837,
    "word": "pretend",
    "transcription": "[prɪˈtɛnd]",
    "translation": "притворяться"
  },
  {
    "index": 2838,
    "word": "pretense",
    "transcription": "[prɪˈtɛns]",
    "translation": "притворство"
  },
  {
    "index": 2839,
    "word": "past",
    "transcription": "[pɑːst]",
    "translation": "прошлый, прошедший"
  },
  {
    "index": 2840,
    "word": "date",
    "transcription": "[deɪt]",
    "translation": "свидание, встречаться"
  },
  {
    "index": 2841,
    "word": "local",
    "transcription": "[ˈləʊkəl]",
    "translation": "местный"
  },
  {
    "index": 2842,
    "word": "locality",
    "transcription": "[ləʊˈkælɪti]",
    "translation": "место, местность"
  },
  {
    "index": 2843,
    "word": "breath",
    "transcription": "[brɛθ]",
    "translation": "дыхание, вздох"
  },
  {
    "index": 2844,
    "word": "breathtaking",
    "transcription": "[ˈbrɛθˌteɪkɪŋ]",
    "translation": "захватывающий"
  },
  {
    "index": 2845,
    "word": "struggle",
    "transcription": "[ˈstrʌgl]",
    "translation": "бороться, борьба"
  },
  {
    "index": 2846,
    "word": "outline",
    "transcription": "[ˈaʊtlaɪn]",
    "translation": "контур, очертание, очертить"
  },
  {
    "index": 2847,
    "word": "interfere",
    "transcription": "[ˌɪntəˈfɪə]",
    "translation": "вмешиваться, мешать"
  },
  {
    "index": 2848,
    "word": "interference",
    "transcription": "[ˌɪntəˈfɪərəns]",
    "translation": "вмешательство"
  },
  {
    "index": 2849,
    "word": "decade",
    "transcription": "[ˈdɛkeɪd]",
    "translation": "десятилетие или десяток"
  },
  {
    "index": 2850,
    "word": "plain",
    "transcription": "[pleɪn]",
    "translation": "простой, незамысловатый"
  },
  {
    "index": 2851,
    "word": "set smb back",
    "transcription": "[sɛtsmbbæk]",
    "translation": "задержать"
  },
  {
    "index": 2852,
    "word": "setback",
    "transcription": "[ˈsɛtbæk]",
    "translation": "регресс"
  },
  {
    "index": 2853,
    "word": "weapon",
    "transcription": "[ˈwɛpən]",
    "translation": "оружие"
  },
  {
    "index": 2854,
    "word": "weaponry",
    "transcription": "[ˈwɛpənri]",
    "translation": "вооружения"
  },
  {
    "index": 2855,
    "word": "member",
    "transcription": "[ˈmɛmbə]",
    "translation": "член"
  },
  {
    "index": 2856,
    "word": "membership",
    "transcription": "[ˈmɛmbəʃɪp]",
    "translation": "членство"
  },
  {
    "index": 2857,
    "word": "customer",
    "transcription": "[ˈkʌstəmə]",
    "translation": "клиент"
  },
  {
    "index": 2858,
    "word": "punch",
    "transcription": "[pʌnʧ]",
    "translation": "нажать (кнопку)"
  },
  {
    "index": 2859,
    "word": "case",
    "transcription": "[keɪs]",
    "translation": "ящик, футляр, чехол"
  },
  {
    "index": 2860,
    "word": "melt",
    "transcription": "[mɛlt]",
    "translation": "таять, плавить(ся)"
  },
  {
    "index": 2861,
    "word": "meltdown",
    "transcription": "[ˈmɛltdaʊn]",
    "translation": "расплавление"
  },
  {
    "index": 2862,
    "word": "surgery",
    "transcription": "[ˈsɜːʤəri]",
    "translation": "хирургия, операция"
  },
  {
    "index": 2863,
    "word": "surgical",
    "transcription": "[ˈsɜːʤɪkəl]",
    "translation": "хирургический"
  },
  {
    "index": 2864,
    "word": "surgeon",
    "transcription": "[ˈsɜːʤən]",
    "translation": "врач хирург"
  },
  {
    "index": 2865,
    "word": "fame",
    "transcription": "[feɪm]",
    "translation": "известность, слава"
  },
  {
    "index": 2866,
    "word": "defamation",
    "transcription": "[ˌdɛfəˈmeɪʃən]",
    "translation": "клевета, поношение"
  },
  {
    "index": 2867,
    "word": "mean (meant, meant)",
    "transcription": "[miːn]",
    "translation": "иметь в виду"
  },
  {
    "index": 2868,
    "word": "factory",
    "transcription": "[ˈfæktəri]",
    "translation": "фабрика, завод"
  },
  {
    "index": 2869,
    "word": "ahead",
    "transcription": "[əˈhɛd]",
    "translation": "вперёд, впереди"
  },
  {
    "index": 2870,
    "word": "tame",
    "transcription": "[teɪm]",
    "translation": "ручной, приручать"
  },
  {
    "index": 2871,
    "word": "collect",
    "transcription": "[kəˈlɛkt]",
    "translation": "собирать"
  },
  {
    "index": 2872,
    "word": "collection",
    "transcription": "[kəˈlɛkʃən]",
    "translation": "собрание, коллекция"
  },
  {
    "index": 2873,
    "word": "joint",
    "transcription": "[ʤɔɪnt]",
    "translation": "совместный, объединённый"
  },
  {
    "index": 2874,
    "word": "domestic",
    "transcription": "[dəʊˈmɛstɪk]",
    "translation": "внутренний (о политике)"
  },
  {
    "index": 2875,
    "word": "boot",
    "transcription": "[buːt]",
    "translation": "сапог, ботинок"
  },
  {
    "index": 2876,
    "word": "divorce",
    "transcription": "[dɪˈvɔːs]",
    "translation": "развод, разводиться"
  },
  {
    "index": 2877,
    "word": "shortage",
    "transcription": "[ˈʃɔːtɪʤ]",
    "translation": "нехватка"
  },
  {
    "index": 2878,
    "word": "purpose",
    "transcription": "[ˈpɜːpəs]",
    "translation": "цель, причина"
  },
  {
    "index": 2879,
    "word": "purposely",
    "transcription": "[ˈpɜːpəsli]",
    "translation": "намеренно"
  },
  {
    "index": 2880,
    "word": "purposeful",
    "transcription": "[ˈpɜːpəsfʊl]",
    "translation": "целенаправленный"
  },
  {
    "index": 2881,
    "word": "purposeless",
    "transcription": "[ˈpɜːpəslɪs]",
    "translation": "бесцельный"
  },
  {
    "index": 2882,
    "word": "noon",
    "transcription": "[nuːn]",
    "translation": "полдень"
  },
  {
    "index": 2883,
    "word": "forenoon",
    "transcription": "[ˈfɔːnuːn]",
    "translation": "утро"
  },
  {
    "index": 2884,
    "word": "afternoon",
    "transcription": "[ˈɑːftəˈnuːn]",
    "translation": "после полудня"
  },
  {
    "index": 2885,
    "word": "immediate",
    "transcription": "[ɪˈmiːdiət]",
    "translation": "немедленный, непосредственный"
  },
  {
    "index": 2886,
    "word": "billion",
    "transcription": "[ˈbɪljən]",
    "translation": "миллиард"
  },
  {
    "index": 2887,
    "word": "billionaire",
    "transcription": "[ˌbɪljəˈneə]",
    "translation": "миллиардер"
  },
  {
    "index": 2888,
    "word": "succeed",
    "transcription": "[səkˈsiːd]",
    "translation": "достичь цели"
  },
  {
    "index": 2889,
    "word": "staff",
    "transcription": "[stɑːf]",
    "translation": "персонал"
  },
  {
    "index": 2890,
    "word": "utilize",
    "transcription": "[ˈjuːtɪˌlaɪz]",
    "translation": "использовать"
  },
  {
    "index": 2891,
    "word": "utilization",
    "transcription": "[ˌjuːtɪlaɪˈzeɪʃən]",
    "translation": "использование"
  },
  {
    "index": 2892,
    "word": "portray",
    "transcription": "[pɔːˈtreɪ]",
    "translation": "изображать, показывать"
  },
  {
    "index": 2893,
    "word": "portrayal",
    "transcription": "[pɔːˈtreɪəl]",
    "translation": "изображение"
  },
  {
    "index": 2894,
    "word": "revise",
    "transcription": "[rɪˈvaɪz]",
    "translation": "пересматривать, проверять"
  },
  {
    "index": 2895,
    "word": "revision",
    "transcription": "[rɪˈvɪʒən]",
    "translation": "перемотр"
  },
  {
    "index": 2896,
    "word": "replace",
    "transcription": "[rɪˈpleɪs]",
    "translation": "заменить"
  },
  {
    "index": 2897,
    "word": "replacement",
    "transcription": "[rɪˈpleɪsmənt]",
    "translation": "замена"
  },
  {
    "index": 2898,
    "word": "replaceable",
    "transcription": "[rɪˈpleɪsəbl]",
    "translation": "заменяемый"
  },
  {
    "index": 2899,
    "word": "irreplaceable",
    "transcription": "[ˌɪrɪˈpleɪsəbl]",
    "translation": "незаменимый"
  },
  {
    "index": 2900,
    "word": "clip",
    "transcription": "[klɪp]",
    "translation": "отсекать, обрезать"
  },
  {
    "index": 2901,
    "word": "care",
    "transcription": "[keə]",
    "translation": "забота, уход"
  },
  {
    "index": 2902,
    "word": "specific",
    "transcription": "[spɪˈsɪfɪk]",
    "translation": "конкретный"
  },
  {
    "index": 2903,
    "word": "specificity",
    "transcription": "[ˌspɛsəˈfɪsɪti]",
    "translation": "специфика"
  },
  {
    "index": 2904,
    "word": "hang (hung, hung)",
    "transcription": "[hæŋ]",
    "translation": "висеть, вешать"
  },
  {
    "index": 2905,
    "word": "hangman",
    "transcription": "[ˈhæŋmən]",
    "translation": "палач"
  },
  {
    "index": 2906,
    "word": "overhang",
    "transcription": "[ˈəʊvəhæŋ]",
    "translation": "нависать"
  },
  {
    "index": 2907,
    "word": "gross",
    "transcription": "[grəʊs]",
    "translation": "валовой, грязный"
  },
  {
    "index": 2908,
    "word": "contradict",
    "transcription": "[ˌkɒntrəˈdɪkt]",
    "translation": "противоречить"
  },
  {
    "index": 2909,
    "word": "contradiction",
    "transcription": "[ˌkɒntrəˈdɪkʃən]",
    "translation": "противоречие"
  },
  {
    "index": 2910,
    "word": "contradictory",
    "transcription": "[ˌkɒntrəˈdɪktəri]",
    "translation": "противоречивый"
  },
  {
    "index": 2911,
    "word": "odds",
    "transcription": "[ɒdz]",
    "translation": "шансы"
  },
  {
    "index": 2912,
    "word": "rob",
    "transcription": "[rɒb]",
    "translation": "грабить, отнимать"
  },
  {
    "index": 2913,
    "word": "robber",
    "transcription": "[ˈrɒbə]",
    "translation": "грабитель"
  },
  {
    "index": 2914,
    "word": "robbery",
    "transcription": "[ˈrɒbəri]",
    "translation": "грабеж"
  },
  {
    "index": 2915,
    "word": "original",
    "transcription": "[əˈrɪʤənl]",
    "translation": "первоначальный, первоисточник"
  },
  {
    "index": 2916,
    "word": "originally",
    "transcription": "[əˈrɪʤɪnəli]",
    "translation": "изначально"
  },
  {
    "index": 2917,
    "word": "take on",
    "transcription": "[teɪkɒn]",
    "translation": "набрать (напр. рабочих)"
  },
  {
    "index": 2918,
    "word": "pitch",
    "transcription": "[pɪʧ]",
    "translation": "подавать (мяч)"
  },
  {
    "index": 2919,
    "word": "pitcher",
    "transcription": "[ˈpɪʧə]",
    "translation": "подающий игрок"
  },
  {
    "index": 2920,
    "word": "simultaneous",
    "transcription": "[ˌsɪməlˈteɪniəs]",
    "translation": "одновременный"
  },
  {
    "index": 2921,
    "word": "adopt",
    "transcription": "[əˈdɒpt]",
    "translation": "принимать, перенимать"
  },
  {
    "index": 2922,
    "word": "adoption",
    "transcription": "[əˈdɒpʃ(ə)n]",
    "translation": "принятие"
  },
  {
    "index": 2923,
    "word": "scales",
    "transcription": "[skeɪlz]",
    "translation": "весы"
  },
  {
    "index": 2924,
    "word": "principal",
    "transcription": "[ˈprɪnsəpəl]",
    "translation": "главный, основной"
  },
  {
    "index": 2925,
    "word": "church",
    "transcription": "[ʧɜːʧ]",
    "translation": "церковь"
  },
  {
    "index": 2926,
    "word": "clothe",
    "transcription": "[kləʊð]",
    "translation": "одевать, покрывать"
  },
  {
    "index": 2927,
    "word": "clothes",
    "transcription": "[kləʊðz]",
    "translation": "одежда"
  },
  {
    "index": 2928,
    "word": "clothing",
    "transcription": "[ˈkləʊðɪŋ]",
    "translation": "одежда"
  },
  {
    "index": 2929,
    "word": "let off",
    "transcription": "[lɛtɒf]",
    "translation": "отпустить, дать отделаться"
  },
  {
    "index": 2930,
    "word": "compete",
    "transcription": "[kəmˈpiːt]",
    "translation": "соперничать"
  },
  {
    "index": 2931,
    "word": "competitive",
    "transcription": "[kəmˈpɛtɪtɪv]",
    "translation": "конкурентоспособный"
  },
  {
    "index": 2932,
    "word": "competitor",
    "transcription": "[kəmˈpɛtɪtə]",
    "translation": "конкурент"
  },
  {
    "index": 2933,
    "word": "competition",
    "transcription": "[ˌkɒmpɪˈtɪʃən]",
    "translation": "соревнование"
  },
  {
    "index": 2934,
    "word": "tear",
    "transcription": "[teə]",
    "translation": "слеза"
  },
  {
    "index": 2935,
    "word": "somewhat",
    "transcription": "[ˈsʌmwɒt]",
    "translation": "слегка"
  },
  {
    "index": 2936,
    "word": "click",
    "transcription": "[klɪk]",
    "translation": "щёлкать, щелчок"
  },
  {
    "index": 2937,
    "word": "lock",
    "transcription": "[lɒk]",
    "translation": "замок, запирать"
  },
  {
    "index": 2938,
    "word": "unlock",
    "transcription": "[ʌnˈlɒk]",
    "translation": "отпирать"
  },
  {
    "index": 2939,
    "word": "brave",
    "transcription": "[breɪv]",
    "translation": "храбрый"
  },
  {
    "index": 2940,
    "word": "bravery",
    "transcription": "[ˈbreɪvəri]",
    "translation": "храбрость"
  },
  {
    "index": 2941,
    "word": "stomach",
    "transcription": "[ˈstʌmək]",
    "translation": "желудок, живот"
  },
  {
    "index": 2942,
    "word": "due",
    "transcription": "[djuː]",
    "translation": "должный, положенный"
  },
  {
    "index": 2943,
    "word": "undue",
    "transcription": "[ʌnˈdjuː]",
    "translation": "неподобающий"
  },
  {
    "index": 2944,
    "word": "overdue",
    "transcription": "[ˌəʊvəˈdjuː]",
    "translation": "просроченный"
  },
  {
    "index": 2945,
    "word": "make up",
    "transcription": "[meɪkʌp]",
    "translation": "помириться"
  },
  {
    "index": 2946,
    "word": "patch up",
    "transcription": "[pæʧʌp]",
    "translation": "уладить"
  },
  {
    "index": 2947,
    "word": "at least",
    "transcription": "[ætliːst]",
    "translation": "по крайней мере"
  },
  {
    "index": 2948,
    "word": "fork",
    "transcription": "[fɔːk]",
    "translation": "развилка, раздваиваться"
  },
  {
    "index": 2949,
    "word": "over",
    "transcription": "[ˈəʊvə]",
    "translation": "заново"
  },
  {
    "index": 2950,
    "word": "steer",
    "transcription": "[stɪə]",
    "translation": "управлять, направлять"
  },
  {
    "index": 2951,
    "word": "steering wheel",
    "transcription": "[ˈstɪərɪŋwiːl]",
    "translation": "руль"
  },
  {
    "index": 2952,
    "word": "casual",
    "transcription": "[ˈkæʒjʊəl]",
    "translation": "случайный"
  },
  {
    "index": 2953,
    "word": "tooth (pl: teeth)",
    "transcription": "[tuːθ]",
    "translation": "зуб"
  },
  {
    "index": 2954,
    "word": "toothpaste",
    "transcription": "[ˈtuːθpeɪst]",
    "translation": "зубная паста"
  },
  {
    "index": 2955,
    "word": "toothbrush",
    "transcription": "[ˈtuːθbrʌʃ]",
    "translation": "зубная щетка"
  },
  {
    "index": 2956,
    "word": "toothache",
    "transcription": "[ˈtuːθeɪk]",
    "translation": "зубная боль"
  },
  {
    "index": 2957,
    "word": "toothpick",
    "transcription": "[ˈtuːθpɪk]",
    "translation": "зубочистка"
  },
  {
    "index": 2958,
    "word": "слабый, неуловимый",
    "transcription": "[слабый,неуловимый]",
    "translation": "faint2"
  },
  {
    "index": 2959,
    "word": "obsess",
    "transcription": "[əbˈsɛs]",
    "translation": "овладеть (разумом)"
  },
  {
    "index": 2960,
    "word": "obsession",
    "transcription": "[əbˈsɛʃən]",
    "translation": "одержимость"
  },
  {
    "index": 2961,
    "word": "obsessive",
    "transcription": "[əbˈsɛsɪv]",
    "translation": "навязчивый"
  },
  {
    "index": 2962,
    "word": "wood",
    "transcription": "[wʊd]",
    "translation": "древесина, лес"
  },
  {
    "index": 2963,
    "word": "wooden",
    "transcription": "[ˈwʊdn]",
    "translation": "деревянный"
  },
  {
    "index": 2964,
    "word": "woody",
    "transcription": "[ˈwʊdi]",
    "translation": "древесный"
  },
  {
    "index": 2965,
    "word": "firewood",
    "transcription": "[ˈfaɪəwʊd]",
    "translation": "дрова"
  },
  {
    "index": 2966,
    "word": "woodwork",
    "transcription": "[ˈwʊdwɜːk]",
    "translation": "изделия из дерева"
  },
  {
    "index": 2967,
    "word": "sit out",
    "transcription": "[sɪtaʊt]",
    "translation": "высидеть"
  },
  {
    "index": 2968,
    "word": "sit through",
    "transcription": "[sɪtθruː]",
    "translation": "высидеть до конца"
  },
  {
    "index": 2969,
    "word": "cookie",
    "transcription": "[ˈkʊki]",
    "translation": "печенье"
  },
  {
    "index": 2970,
    "word": "mold (mould)",
    "transcription": "[məʊld]",
    "translation": "плесень"
  },
  {
    "index": 2971,
    "word": "exhibit",
    "transcription": "[ɪgˈzɪbɪt]",
    "translation": "выставлять, показывать"
  },
  {
    "index": 2972,
    "word": "exhibition",
    "transcription": "[ˌɛksɪˈbɪʃən]",
    "translation": "выставка"
  },
  {
    "index": 2973,
    "word": "character",
    "transcription": "[ˈkærɪktə]",
    "translation": "персонаж"
  },
  {
    "index": 2974,
    "word": "yell",
    "transcription": "[jɛl]",
    "translation": "кричать, вопить"
  },
  {
    "index": 2975,
    "word": "master",
    "transcription": "[ˈmɑːstə]",
    "translation": "хозяин"
  },
  {
    "index": 2976,
    "word": "incentive",
    "transcription": "[ɪnˈsɛntɪv]",
    "translation": "стимул, мотив"
  },
  {
    "index": 2977,
    "word": "probable",
    "transcription": "[ˈprɒbəbl]",
    "translation": "вероятный, возможный"
  },
  {
    "index": 2978,
    "word": "probably",
    "transcription": "[ˈprɒbəbli]",
    "translation": "возможно"
  },
  {
    "index": 2979,
    "word": "flight",
    "transcription": "[flaɪt]",
    "translation": "полёт, рейс"
  },
  {
    "index": 2980,
    "word": "onion",
    "transcription": "[ˈʌnjən]",
    "translation": "лук, луковица"
  },
  {
    "index": 2981,
    "word": "consequence",
    "transcription": "[ˈkɒnsɪkwəns]",
    "translation": "последствие"
  },
  {
    "index": 2982,
    "word": "mount",
    "transcription": "[maʊnt]",
    "translation": "гора"
  },
  {
    "index": 2983,
    "word": "ill",
    "transcription": "[ɪl]",
    "translation": "больной"
  },
  {
    "index": 2984,
    "word": "illness",
    "transcription": "[ˈɪlnɪs]",
    "translation": "болезнь"
  },
  {
    "index": 2985,
    "word": "summary",
    "transcription": "[ˈsʌməri]",
    "translation": "сводка, конспект"
  },
  {
    "index": 2986,
    "word": "capital",
    "transcription": "[ˈkæpɪtl]",
    "translation": "главный, большой, высший"
  },
  {
    "index": 2987,
    "word": "offend",
    "transcription": "[əˈfɛnd]",
    "translation": "обидеть, оскорбить"
  },
  {
    "index": 2988,
    "word": "towel",
    "transcription": "[ˈtaʊəl]",
    "translation": "полотенце"
  },
  {
    "index": 2989,
    "word": "grateful",
    "transcription": "[ˈgreɪtfʊl]",
    "translation": "благодарный"
  },
  {
    "index": 2990,
    "word": "ungrateful",
    "transcription": "[ʌnˈgreɪtfʊl]",
    "translation": "неблагодарный"
  },
  {
    "index": 2991,
    "word": "shoulder",
    "transcription": "[ˈʃəʊldə]",
    "translation": "плечо"
  },
  {
    "index": 2992,
    "word": "sample",
    "transcription": "[ˈsɑːmpl]",
    "translation": "образец, часть"
  },
  {
    "index": 2993,
    "word": "deck",
    "transcription": "[dɛk]",
    "translation": "палуба, крышка, настил"
  },
  {
    "index": 2994,
    "word": "talk smb out",
    "transcription": "[tɔːksmbaʊt]",
    "translation": "отговорить"
  },
  {
    "index": 2995,
    "word": "evolve",
    "transcription": "[ɪˈvɒlv]",
    "translation": "развиваться, эволюционировать"
  },
  {
    "index": 2996,
    "word": "divide",
    "transcription": "[dɪˈvaɪd]",
    "translation": "делить"
  },
  {
    "index": 2997,
    "word": "division",
    "transcription": "[dɪˈvɪʒən]",
    "translation": "деление"
  },
  {
    "index": 2998,
    "word": "subdivide",
    "transcription": "[ˌsʌbdɪˈvaɪd]",
    "translation": "подразделять"
  },
  {
    "index": 2999,
    "word": "divisive",
    "transcription": "[dɪˈvaɪsɪv]",
    "translation": "разделяющий"
  },
  {
    "index": 3000,
    "word": "line",
    "transcription": "[laɪn]",
    "translation": "линия, ряд"
  },
  {
    "index": 3001,
    "word": "shape",
    "transcription": "[ʃeɪp]",
    "translation": "форма, формировать"
  },
  {
    "index": 3002,
    "word": "shapeless",
    "transcription": "[ˈʃeɪplɪs]",
    "translation": "бесформенный"
  },
  {
    "index": 3003,
    "word": "reshape",
    "transcription": "[ˌriːˈʃeɪp]",
    "translation": "перекроить"
  },
  {
    "index": 3004,
    "word": "come to",
    "transcription": "[kʌmtuː]",
    "translation": "очнуться"
  },
  {
    "index": 3005,
    "word": "flame",
    "transcription": "[fleɪm]",
    "translation": "пламя, пылать"
  },
  {
    "index": 3006,
    "word": "briefs",
    "transcription": "[briːfs]",
    "translation": "трусы"
  },
  {
    "index": 3007,
    "word": "foreign",
    "transcription": "[ˈfɒrɪn]",
    "translation": "иностранный"
  },
  {
    "index": 3008,
    "word": "foreigner",
    "transcription": "[ˈfɒrɪnə]",
    "translation": "иностранец"
  },
  {
    "index": 3009,
    "word": "resign",
    "transcription": "[rɪˈzaɪn]",
    "translation": "отказываться, сдавать, уходить"
  },
  {
    "index": 3010,
    "word": "resignation",
    "transcription": "[ˌrɛzɪgˈneɪʃən]",
    "translation": "отставка"
  },
  {
    "index": 3011,
    "word": "resignation",
    "transcription": "[ˌrɛzɪgˈneɪʃən]",
    "translation": "смирение"
  },
  {
    "index": 3012,
    "word": "spice",
    "transcription": "[spaɪs]",
    "translation": "пряность, специя"
  },
  {
    "index": 3013,
    "word": "spicy",
    "transcription": "[ˈspaɪsi]",
    "translation": "острый"
  },
  {
    "index": 3014,
    "word": "make into",
    "transcription": "[meɪkˈɪntuː]",
    "translation": "переделать в"
  },
  {
    "index": 3015,
    "word": "tie",
    "transcription": "[taɪ]",
    "translation": "связывать, завязывать"
  },
  {
    "index": 3016,
    "word": "untie",
    "transcription": "[ʌnˈtaɪ]",
    "translation": "развязывать"
  },
  {
    "index": 3017,
    "word": "tie up",
    "transcription": "[taɪʌp]",
    "translation": "завязать"
  },
  {
    "index": 3018,
    "word": "mark",
    "transcription": "[mɑːk]",
    "translation": "метка, отмечать"
  },
  {
    "index": 3019,
    "word": "birthmark",
    "transcription": "[ˈbɜːθmɑːk]",
    "translation": "родинка"
  },
  {
    "index": 3020,
    "word": "keep up",
    "transcription": "[kiːpʌp]",
    "translation": "успевать за чем-л."
  },
  {
    "index": 3021,
    "word": "tiny",
    "transcription": "[ˈtaɪni]",
    "translation": "крошечный"
  },
  {
    "index": 3022,
    "word": "mean (meant, meant)",
    "transcription": "[miːn]",
    "translation": "означать"
  },
  {
    "index": 3023,
    "word": "meaning",
    "transcription": "[ˈmiːnɪŋ]",
    "translation": "значение"
  },
  {
    "index": 3024,
    "word": "meaningful",
    "transcription": "[ˈmiːnɪŋfʊl]",
    "translation": "значимый"
  },
  {
    "index": 3025,
    "word": "meaningless",
    "transcription": "[ˈmiːnɪŋlɪs]",
    "translation": "бессмысленный"
  },
  {
    "index": 3026,
    "word": "reason",
    "transcription": "[ˈriːzn]",
    "translation": "причина, мотив"
  },
  {
    "index": 3027,
    "word": "carpet",
    "transcription": "[ˈkɑːpɪt]",
    "translation": "ковер"
  },
  {
    "index": 3028,
    "word": "embarrass",
    "transcription": "[ɪmˈbærəs]",
    "translation": "смущать, стеснять"
  },
  {
    "index": 3029,
    "word": "embarrassment",
    "transcription": "[ɪmˈbærəsmənt]",
    "translation": "конфуз"
  },
  {
    "index": 3030,
    "word": "recognize",
    "transcription": "[ˈrɛkəgnaɪz]",
    "translation": "узнавать"
  },
  {
    "index": 3031,
    "word": "recognizable",
    "transcription": "[ˈrɛkəgnaɪzəbl]",
    "translation": "узнаваемый"
  },
  {
    "index": 3032,
    "word": "recognition",
    "transcription": "[ˌrɛkəgˈnɪʃən]",
    "translation": "узнавание или признание"
  },
  {
    "index": 3033,
    "word": "able",
    "transcription": "[ˈeɪbl]",
    "translation": "способный, могущий"
  },
  {
    "index": 3034,
    "word": "abiliity",
    "transcription": "[abiliity]",
    "translation": "способность"
  },
  {
    "index": 3035,
    "word": "unable",
    "transcription": "[ʌnˈeɪbl]",
    "translation": "неспособный"
  },
  {
    "index": 3036,
    "word": "unability",
    "transcription": "[ʌnˌeɪˈbɪlɪti]",
    "translation": "неспособность"
  },
  {
    "index": 3037,
    "word": "fine",
    "transcription": "[faɪn]",
    "translation": "тонкий"
  },
  {
    "index": 3038,
    "word": "remote",
    "transcription": "[rɪˈməʊt]",
    "translation": "отдалённый, захолустный"
  },
  {
    "index": 3039,
    "word": "remoteness",
    "transcription": "[rɪˈməʊtnəs]",
    "translation": "удаленность"
  },
  {
    "index": 3040,
    "word": "TV remote",
    "transcription": "[ˌtiːˈviːrɪˈməʊt]",
    "translation": "пульт от телевизора"
  },
  {
    "index": 3041,
    "word": "creature",
    "transcription": "[ˈkriːʧə]",
    "translation": "существо"
  },
  {
    "index": 3042,
    "word": "fix",
    "transcription": "[fɪks]",
    "translation": "исправить, наладить"
  },
  {
    "index": 3043,
    "word": "mindful",
    "transcription": "[ˈmaɪndfʊl]",
    "translation": "внимательный, помнящий"
  },
  {
    "index": 3044,
    "word": "mindless",
    "transcription": "[ˈmaɪndlɪs]",
    "translation": "бессмысленный"
  },
  {
    "index": 3045,
    "word": "natural",
    "transcription": "[ˈnæʧrəl]",
    "translation": "естественный"
  },
  {
    "index": 3046,
    "word": "unnatural",
    "transcription": "[ʌnˈnæʧrəl]",
    "translation": "неестественный"
  },
  {
    "index": 3047,
    "word": "supernatural",
    "transcription": "[ˌsjuːpəˈnæʧrəl]",
    "translation": "сверхъестественное"
  },
  {
    "index": 3048,
    "word": "payment",
    "transcription": "[ˈpeɪmənt]",
    "translation": "оплата"
  },
  {
    "index": 3049,
    "word": "descend",
    "transcription": "[dɪˈsɛnd]",
    "translation": "спускаться"
  },
  {
    "index": 3050,
    "word": "descent",
    "transcription": "[dɪˈsɛnt]",
    "translation": "спуск"
  },
  {
    "index": 3051,
    "word": "ascend",
    "transcription": "[əˈsɛnd]",
    "translation": "восходить"
  },
  {
    "index": 3052,
    "word": "ascent",
    "transcription": "[əˈsɛnt]",
    "translation": "восхождение"
  },
  {
    "index": 3053,
    "word": "gesture",
    "transcription": "[ˈʤɛsʧə]",
    "translation": "жест, жестикулировать"
  },
  {
    "index": 3054,
    "word": "liberate",
    "transcription": "[ˈlɪbəreɪt]",
    "translation": "освобождать"
  },
  {
    "index": 3055,
    "word": "liberation",
    "transcription": "[ˌlɪbəˈreɪʃən]",
    "translation": "освобождение"
  },
  {
    "index": 3056,
    "word": "liberator",
    "transcription": "[ˈlɪbəreɪtə]",
    "translation": "освободитель"
  },
  {
    "index": 3057,
    "word": "bug",
    "transcription": "[bʌg]",
    "translation": "жук"
  },
  {
    "index": 3058,
    "word": "bottom",
    "transcription": "[ˈbɒtəm]",
    "translation": "дно"
  },
  {
    "index": 3059,
    "word": "bottomless",
    "transcription": "[ˈbɒtəmlɪs]",
    "translation": "бездонный"
  },
  {
    "index": 3060,
    "word": "sit back",
    "transcription": "[sɪtbæk]",
    "translation": "отсидеться"
  },
  {
    "index": 3061,
    "word": "pause",
    "transcription": "[pɔːz]",
    "translation": "приостанавливать"
  },
  {
    "index": 3062,
    "word": "commit",
    "transcription": "[kəˈmɪt]",
    "translation": "совершить (напр. ошибку)"
  },
  {
    "index": 3063,
    "word": "fishing",
    "transcription": "[ˈfɪʃɪŋ]",
    "translation": "рыбалка"
  },
  {
    "index": 3064,
    "word": "criminal",
    "transcription": "[ˈkrɪmɪnl]",
    "translation": "преступник"
  },
  {
    "index": 3065,
    "word": "criminality",
    "transcription": "[ˌkrɪmɪˈnælɪti]",
    "translation": "преступность"
  },
  {
    "index": 3066,
    "word": "square",
    "transcription": "[skweə]",
    "translation": "квадрат, квадратный"
  },
  {
    "index": 3067,
    "word": "squared",
    "transcription": "[skweəd]",
    "translation": "в квадрате"
  },
  {
    "index": 3068,
    "word": "medicine",
    "transcription": "[ˈmɛdsɪn]",
    "translation": "лекарство"
  },
  {
    "index": 3069,
    "word": "medicate",
    "transcription": "[ˈmɛdɪkeɪt]",
    "translation": "лечить лекарствами"
  },
  {
    "index": 3070,
    "word": "medication",
    "transcription": "[ˌmɛdɪˈkeɪʃən]",
    "translation": "лечение"
  },
  {
    "index": 3071,
    "word": "custom",
    "transcription": "[ˈkʌstəm]",
    "translation": "заказной, индивидуальный"
  },
  {
    "index": 3072,
    "word": "customize",
    "transcription": "[ˈkʌstəˌmaɪz]",
    "translation": "настроить под себя"
  },
  {
    "index": 3073,
    "word": "write out",
    "transcription": "[raɪtaʊt]",
    "translation": "выписать (документ)"
  },
  {
    "index": 3074,
    "word": "destroy",
    "transcription": "[dɪsˈtrɔɪ]",
    "translation": "разрушать"
  },
  {
    "index": 3075,
    "word": "destruction",
    "transcription": "[dɪsˈtrʌkʃən]",
    "translation": "разрушение"
  },
  {
    "index": 3076,
    "word": "destroyer",
    "transcription": "[dɪsˈtrɔɪə]",
    "translation": "разрушитель"
  },
  {
    "index": 3077,
    "word": "engine",
    "transcription": "[ˈɛnʤɪn]",
    "translation": "двигатель или машина"
  },
  {
    "index": 3078,
    "word": "modest",
    "transcription": "[ˈmɒdɪst]",
    "translation": "скромный, умеренный"
  },
  {
    "index": 3079,
    "word": "immodest",
    "transcription": "[ɪˈmɒdɪst]",
    "translation": "нескромный"
  },
  {
    "index": 3080,
    "word": "modesty",
    "transcription": "[ˈmɒdɪsti]",
    "translation": "скромность"
  },
  {
    "index": 3081,
    "word": "immodesty",
    "transcription": "[ɪˈmɒdɪsti]",
    "translation": "нескромность"
  },
  {
    "index": 3082,
    "word": "spot",
    "transcription": "[spɒt]",
    "translation": "пятно"
  },
  {
    "index": 3083,
    "word": "spotted",
    "transcription": "[ˈspɒtɪd]",
    "translation": "пятнистый"
  },
  {
    "index": 3084,
    "word": "spotless",
    "transcription": "[ˈspɒtlɪs]",
    "translation": "незапятнанный"
  },
  {
    "index": 3085,
    "word": "breathe",
    "transcription": "[briːð]",
    "translation": "дышать"
  },
  {
    "index": 3086,
    "word": "spare",
    "transcription": "[speə]",
    "translation": "выделить, уделить"
  },
  {
    "index": 3087,
    "word": "sparing",
    "transcription": "[ˈspeərɪŋ]",
    "translation": "скудный, бережливый"
  },
  {
    "index": 3088,
    "word": "trait",
    "transcription": "[treɪt]",
    "translation": "черта, характеристика"
  },
  {
    "index": 3089,
    "word": "passenger",
    "transcription": "[ˈpæsɪnʤə]",
    "translation": "пассажир"
  },
  {
    "index": 3090,
    "word": "used to",
    "transcription": "[juːzdtuː]",
    "translation": "когда-то бывало"
  },
  {
    "index": 3091,
    "word": "intimate",
    "transcription": "[ˈɪntɪmɪt]",
    "translation": "близкий"
  },
  {
    "index": 3092,
    "word": "intimacy",
    "transcription": "[ˈɪntɪməsi]",
    "translation": "близость"
  },
  {
    "index": 3093,
    "word": "safe",
    "transcription": "[seɪf]",
    "translation": "надёжный, защищённый"
  },
  {
    "index": 3094,
    "word": "safety",
    "transcription": "[ˈseɪfti]",
    "translation": "безопасность"
  },
  {
    "index": 3095,
    "word": "leg",
    "transcription": "[lɛg]",
    "translation": "нога"
  },
  {
    "index": 3096,
    "word": "neither",
    "transcription": "[ˈnaɪðə]",
    "translation": "тоже не"
  },
  {
    "index": 3097,
    "word": "confront",
    "transcription": "[kənˈfrʌnt]",
    "translation": "противостоять, сталкиваться"
  },
  {
    "index": 3098,
    "word": "confrontation",
    "transcription": "[ˌkɒnfrʌnˈteɪʃən]",
    "translation": "противостояние"
  },
  {
    "index": 3099,
    "word": "distinct",
    "transcription": "[dɪsˈtɪŋkt]",
    "translation": "чёткий, различимый"
  },
  {
    "index": 3100,
    "word": "distinction",
    "transcription": "[dɪsˈtɪŋkʃən]",
    "translation": "различие"
  },
  {
    "index": 3101,
    "word": "distinctive",
    "transcription": "[dɪsˈtɪŋktɪv]",
    "translation": "отличительный"
  },
  {
    "index": 3102,
    "word": "indistinct",
    "transcription": "[ˌɪndɪsˈtɪŋkt]",
    "translation": "невнятный"
  },
  {
    "index": 3103,
    "word": "impose",
    "transcription": "[ɪmˈpəʊz]",
    "translation": "навязывать, налагать"
  },
  {
    "index": 3104,
    "word": "imposition",
    "transcription": "[ˌɪmpəˈzɪʃən]",
    "translation": "навязывание"
  },
  {
    "index": 3105,
    "word": "descend from",
    "transcription": "[dɪˈsɛndfrɒm]",
    "translation": "происходить от"
  },
  {
    "index": 3106,
    "word": "descendant",
    "transcription": "[dɪˈsɛndənt]",
    "translation": "потомок"
  },
  {
    "index": 3107,
    "word": "court",
    "transcription": "[kɔːt]",
    "translation": "двор (королевский)"
  },
  {
    "index": 3108,
    "word": "courtier",
    "transcription": "[ˈkɔːtɪə]",
    "translation": "придворный"
  },
  {
    "index": 3109,
    "word": "slip",
    "transcription": "[slɪp]",
    "translation": "скользнуть"
  },
  {
    "index": 3110,
    "word": "as well as",
    "transcription": "[æzwɛlæz]",
    "translation": "так же как и"
  },
  {
    "index": 3111,
    "word": "look forward",
    "transcription": "[lʊkˈfɔːwəd]",
    "translation": "ожидать, предвкушать"
  },
  {
    "index": 3112,
    "word": "look back",
    "transcription": "[lʊkbæk]",
    "translation": "вспоминать"
  },
  {
    "index": 3113,
    "word": "rule",
    "transcription": "[ruːl]",
    "translation": "правило"
  },
  {
    "index": 3114,
    "word": "ruler",
    "transcription": "[ˈruːlə]",
    "translation": "правитель"
  },
  {
    "index": 3115,
    "word": "unique",
    "transcription": "[juːˈniːk]",
    "translation": "уникальный"
  },
  {
    "index": 3116,
    "word": "uniqueness",
    "transcription": "[juːˈniːknəs]",
    "translation": "уникальность"
  },
  {
    "index": 3117,
    "word": "valley",
    "transcription": "[ˈvæli]",
    "translation": "долина"
  },
  {
    "index": 3118,
    "word": "court",
    "transcription": "[kɔːt]",
    "translation": "игровая площадка"
  },
  {
    "index": 3119,
    "word": "fibre (fiber)",
    "transcription": "[ˈfaɪbə]",
    "translation": "волокно"
  },
  {
    "index": 3120,
    "word": "fibrous",
    "transcription": "[ˈfaɪbrəs]",
    "translation": "волокнистый"
  },
  {
    "index": 3121,
    "word": "probe",
    "transcription": "[prəʊb]",
    "translation": "датчик, зонд"
  },
  {
    "index": 3122,
    "word": "prison",
    "transcription": "[ˈprɪzn]",
    "translation": "тюрьма"
  },
  {
    "index": 3123,
    "word": "prisoner",
    "transcription": "[ˈprɪznə]",
    "translation": "заключенный"
  },
  {
    "index": 3124,
    "word": "imprison",
    "transcription": "[ɪmˈprɪzn]",
    "translation": "сажать в тюрьму"
  },
  {
    "index": 3125,
    "word": "imprisonment",
    "transcription": "[ɪmˈprɪznmənt]",
    "translation": "лишение свободы"
  },
  {
    "index": 3126,
    "word": "except",
    "transcription": "[ɪkˈsɛpt]",
    "translation": "кроме, исключая"
  },
  {
    "index": 3127,
    "word": "exception",
    "transcription": "[ɪkˈsɛpʃən]",
    "translation": "исключение"
  },
  {
    "index": 3128,
    "word": "exceptional",
    "transcription": "[ɪkˈsɛpʃənl]",
    "translation": "исключительный"
  },
  {
    "index": 3129,
    "word": "cap",
    "transcription": "[ˈkæp]",
    "translation": "кепка, шляпа, колпачок"
  },
  {
    "index": 3130,
    "word": "evil",
    "transcription": "[ˈiːvl]",
    "translation": "злой, зло"
  },
  {
    "index": 3131,
    "word": "rest",
    "transcription": "[rɛst]",
    "translation": "отдых, отдыхать"
  },
  {
    "index": 3132,
    "word": "unrest",
    "transcription": "[ʌnˈrɛst]",
    "translation": "беспокойство, брожение, беспорядки"
  },
  {
    "index": 3133,
    "word": "firm",
    "transcription": "[fɜːm]",
    "translation": "твёрдый"
  },
  {
    "index": 3134,
    "word": "firmness",
    "transcription": "[ˈfɜːmnəs]",
    "translation": "твердость"
  },
  {
    "index": 3135,
    "word": "subsequent",
    "transcription": "[ˈsʌbsɪkwənt]",
    "translation": "последующий"
  },
  {
    "index": 3136,
    "word": "subsequently",
    "transcription": "[ˈsʌbsɪkwəntli]",
    "translation": "впоследствии"
  },
  {
    "index": 3137,
    "word": "weird",
    "transcription": "[wɪəd]",
    "translation": "нереальный, странный"
  },
  {
    "index": 3138,
    "word": "weirdo",
    "transcription": "[ˈwɪədəʊ]",
    "translation": "чудак"
  },
  {
    "index": 3139,
    "word": "frustrate",
    "transcription": "[frʌsˈtreɪt]",
    "translation": "расстраивать (план, схему)"
  },
  {
    "index": 3140,
    "word": "resolve",
    "transcription": "[rɪˈzɒlv]",
    "translation": "решиться, решимость"
  },
  {
    "index": 3141,
    "word": "rough up",
    "transcription": "[rʌfʌp]",
    "translation": "грубо обращаться, нападать"
  },
  {
    "index": 3142,
    "word": "afford",
    "transcription": "[əˈfɔːd]",
    "translation": "позволить себе"
  },
  {
    "index": 3143,
    "word": "affordable",
    "transcription": "[əˈfɔːdəbl]",
    "translation": "доступный"
  },
  {
    "index": 3144,
    "word": "take a walk",
    "transcription": "[teɪkəwɔːk]",
    "translation": "прогуляться"
  },
  {
    "index": 3145,
    "word": "pure",
    "transcription": "[pjʊə]",
    "translation": "чистый, незагрязнённый"
  },
  {
    "index": 3146,
    "word": "purely",
    "transcription": "[ˈpjʊəli]",
    "translation": "чисто, вполне"
  },
  {
    "index": 3147,
    "word": "purity",
    "transcription": "[ˈpjʊərɪti]",
    "translation": "чистота"
  },
  {
    "index": 3148,
    "word": "impure",
    "transcription": "[ɪmˈpjʊə]",
    "translation": "нечистый"
  },
  {
    "index": 3149,
    "word": "impurity",
    "transcription": "[ɪmˈpjʊərɪti]",
    "translation": "примесь"
  },
  {
    "index": 3150,
    "word": "purify",
    "transcription": "[ˈpjʊərɪfaɪ]",
    "translation": "очищаться"
  },
  {
    "index": 3151,
    "word": "definite",
    "transcription": "[ˈdɛfɪnɪt]",
    "translation": "определённый"
  },
  {
    "index": 3152,
    "word": "definitely",
    "transcription": "[ˈdɛfɪnɪtli]",
    "translation": "определенно (вводн. слово)"
  },
  {
    "index": 3153,
    "word": "indefinite",
    "transcription": "[ɪnˈdɛfɪnɪt]",
    "translation": "неопределенный"
  },
  {
    "index": 3154,
    "word": "toward (towards)",
    "transcription": "[təˈwɔːd]",
    "translation": "по направлению к"
  },
  {
    "index": 3155,
    "word": "excellent",
    "transcription": "[ˈɛksələnt]",
    "translation": "превосходный"
  },
  {
    "index": 3156,
    "word": "excellence",
    "transcription": "[ˈɛksələns]",
    "translation": "превосходство"
  },
  {
    "index": 3157,
    "word": "flip",
    "transcription": "[flɪp]",
    "translation": "переворачивать, перевёрнутый"
  },
  {
    "index": 3158,
    "word": "thick",
    "transcription": "[θɪk]",
    "translation": "толстый"
  },
  {
    "index": 3159,
    "word": "thickness",
    "transcription": "[ˈθɪknɪs]",
    "translation": "толщина"
  },
  {
    "index": 3160,
    "word": "severe",
    "transcription": "[sɪˈvɪə]",
    "translation": "серьёзный, суровый, жёсткий"
  },
  {
    "index": 3161,
    "word": "severeness",
    "transcription": "[sɪˈvɪənəs]",
    "translation": "тщательность"
  },
  {
    "index": 3162,
    "word": "breed (bred, bred)",
    "transcription": "[briːd]",
    "translation": "разводить, выращивать"
  },
  {
    "index": 3163,
    "word": "dump",
    "transcription": "[dʌmp]",
    "translation": "бросать (парня/девушку)"
  },
  {
    "index": 3164,
    "word": "thus",
    "transcription": "[ðʌs]",
    "translation": "таким образом, поэтому"
  },
  {
    "index": 3165,
    "word": "set about",
    "transcription": "[sɛtəˈbaʊt]",
    "translation": "приступить, начать"
  },
  {
    "index": 3166,
    "word": "capture",
    "transcription": "[ˈkæpʧə]",
    "translation": "захватить"
  },
  {
    "index": 3167,
    "word": "recapture",
    "transcription": "[ˌriːˈkæpʧə]",
    "translation": "вернуть себе"
  },
  {
    "index": 3168,
    "word": "on behalf of",
    "transcription": "[ɒnbɪˈhɑːfɒv]",
    "translation": "от имени"
  },
  {
    "index": 3169,
    "word": "permit",
    "transcription": "[pəˈmɪt]",
    "translation": "разрешать"
  },
  {
    "index": 3170,
    "word": "permit",
    "transcription": "[ˈpɜːmɪt]",
    "translation": "разрешение"
  },
  {
    "index": 3171,
    "word": "permission",
    "transcription": "[pəˈmɪʃən]",
    "translation": "разрешение"
  },
  {
    "index": 3172,
    "word": "widespread",
    "transcription": "[ˈwaɪdsprɛd]",
    "translation": "распространенный"
  },
  {
    "index": 3173,
    "word": "huge",
    "transcription": "[hjuːʤ]",
    "translation": "огромный"
  },
  {
    "index": 3174,
    "word": "check",
    "transcription": "[ʧɛk]",
    "translation": "проверить"
  },
  {
    "index": 3175,
    "word": "hint",
    "transcription": "[hɪnt]",
    "translation": "намёк, намекать"
  },
  {
    "index": 3176,
    "word": "genuine",
    "transcription": "[ˈʤɛnjʊɪn]",
    "translation": "подлинный, настоящий"
  },
  {
    "index": 3177,
    "word": "surge",
    "transcription": "[sɜːʤ]",
    "translation": "волна, всплеск, вздыматься"
  },
  {
    "index": 3178,
    "word": "on purpose",
    "transcription": "[ɒnˈpɜːpəs]",
    "translation": "нарочно"
  },
  {
    "index": 3179,
    "word": "boobs",
    "transcription": "[buːbz]",
    "translation": "титьки"
  },
  {
    "index": 3180,
    "word": "grip",
    "transcription": "[grɪp]",
    "translation": "хватать, захват, хватка"
  },
  {
    "index": 3181,
    "word": "establish",
    "transcription": "[ɪsˈtæblɪʃ]",
    "translation": "установить, учредить"
  },
  {
    "index": 3182,
    "word": "reestablish",
    "transcription": "[ˌriːɪsˈtæblɪʃ]",
    "translation": "восстановить"
  },
  {
    "index": 3183,
    "word": "establishment",
    "transcription": "[ɪsˈtæblɪʃmənt]",
    "translation": "учреждение"
  },
  {
    "index": 3184,
    "word": "tribe",
    "transcription": "[traɪb]",
    "translation": "племя"
  },
  {
    "index": 3185,
    "word": "tribal",
    "transcription": "[ˈtraɪbəl]",
    "translation": "племенной"
  },
  {
    "index": 3186,
    "word": "ally",
    "transcription": "[ˈælaɪ]",
    "translation": "союзник"
  },
  {
    "index": 3187,
    "word": "rent",
    "transcription": "[rɛnt]",
    "translation": "аренда, арендовать, сдавать"
  },
  {
    "index": 3188,
    "word": "rental",
    "transcription": "[ˈrɛntl]",
    "translation": "аренда"
  },
  {
    "index": 3189,
    "word": "beat (beat, beaten)",
    "transcription": "[biːt]",
    "translation": "бить"
  },
  {
    "index": 3190,
    "word": "bid",
    "transcription": "[bɪd]",
    "translation": "заявка, предложение цены"
  },
  {
    "index": 3191,
    "word": "defeat",
    "transcription": "[dɪˈfiːt]",
    "translation": "поражение, наносить поражение"
  },
  {
    "index": 3192,
    "word": "undefeated",
    "transcription": "[ˌʌndɪˈfiːtɪd]",
    "translation": "непобедимый"
  },
  {
    "index": 3193,
    "word": "grace",
    "transcription": "[greɪs]",
    "translation": "благодать, милость"
  },
  {
    "index": 3194,
    "word": "gracious",
    "transcription": "[ˈgreɪʃəs]",
    "translation": "милостивый"
  },
  {
    "index": 3195,
    "word": "graceful",
    "transcription": "[ˈgreɪsfʊl]",
    "translation": "изящный"
  },
  {
    "index": 3196,
    "word": "dine",
    "transcription": "[daɪn]",
    "translation": "обедать"
  },
  {
    "index": 3197,
    "word": "hero",
    "transcription": "[ˈhɪərəʊ]",
    "translation": "герой"
  },
  {
    "index": 3198,
    "word": "heroic",
    "transcription": "[hɪˈrəʊɪk]",
    "translation": "героический"
  },
  {
    "index": 3199,
    "word": "royal",
    "transcription": "[ˈrɔɪəl]",
    "translation": "королевский"
  },
  {
    "index": 3200,
    "word": "bill",
    "transcription": "[bɪl]",
    "translation": "счёт (к оплате)"
  },
  {
    "index": 3201,
    "word": "cattle",
    "transcription": "[ˈkætl]",
    "translation": "крупный рогатый скот"
  },
  {
    "index": 3202,
    "word": "counter",
    "transcription": "[ˈkaʊntə]",
    "translation": "противостоять, противоположный"
  },
  {
    "index": 3203,
    "word": "suck",
    "transcription": "[sʌk]",
    "translation": "сосать"
  },
  {
    "index": 3204,
    "word": "resort to",
    "transcription": "[rɪˈzɔːttuː]",
    "translation": "прибегать к"
  },
  {
    "index": 3205,
    "word": "sequence",
    "transcription": "[ˈsiːkwəns]",
    "translation": "последовательность"
  },
  {
    "index": 3206,
    "word": "sum",
    "transcription": "[sʌm]",
    "translation": "сумма, суммировать"
  },
  {
    "index": 3207,
    "word": "summation",
    "transcription": "[sʌˈmeɪʃən]",
    "translation": "подведение итога"
  },
  {
    "index": 3208,
    "word": "hurry",
    "transcription": "[ˈhʌri]",
    "translation": "спешить, торопиться"
  },
  {
    "index": 3209,
    "word": "hurried",
    "transcription": "[ˈhʌrɪd]",
    "translation": "поспешный"
  },
  {
    "index": 3210,
    "word": "unhurried",
    "transcription": "[ʌnˈhʌrɪd]",
    "translation": "неторопливый"
  },
  {
    "index": 3211,
    "word": "justify",
    "transcription": "[ˈʤʌstɪfaɪ]",
    "translation": "оправдывать, обосновывать"
  },
  {
    "index": 3212,
    "word": "justification",
    "transcription": "[ˌʤʌstɪfɪˈkeɪʃən]",
    "translation": "обоснование"
  },
  {
    "index": 3213,
    "word": "unjustified",
    "transcription": "[ˌʌnˈʤʌstɪfaɪd]",
    "translation": "необоснованный"
  },
  {
    "index": 3214,
    "word": "justifiable",
    "transcription": "[ˈʤʌstɪfaɪəbl]",
    "translation": "допустимый"
  },
  {
    "index": 3215,
    "word": "unjustifiable",
    "transcription": "[ʌnˈʤʌstɪfaɪəbl]",
    "translation": "недопустимый"
  },
  {
    "index": 3216,
    "word": "by oneself",
    "transcription": "[baɪwʌnˈsɛlf]",
    "translation": "один, сам"
  },
  {
    "index": 3217,
    "word": "gut",
    "transcription": "[gʌt]",
    "translation": "кишка"
  },
  {
    "index": 3218,
    "word": "plane",
    "transcription": "[pleɪn]",
    "translation": "самолёт"
  },
  {
    "index": 3219,
    "word": "airplane",
    "transcription": "[ˈeəpleɪn]",
    "translation": "самолет"
  },
  {
    "index": 3220,
    "word": "brilliant",
    "transcription": "[ˈbrɪljənt]",
    "translation": "блестящий"
  },
  {
    "index": 3221,
    "word": "brilliance",
    "transcription": "[ˈbrɪljəns]",
    "translation": "блеск"
  },
  {
    "index": 3222,
    "word": "review",
    "transcription": "[rɪˈvjuː]",
    "translation": "обзор, сделать обзор"
  },
  {
    "index": 3223,
    "word": "sit around",
    "transcription": "[sɪtəˈraʊnd]",
    "translation": "просто сидеть"
  },
  {
    "index": 3224,
    "word": "thick",
    "transcription": "[θɪk]",
    "translation": "густой"
  },
  {
    "index": 3225,
    "word": "thickness",
    "transcription": "[ˈθɪknɪs]",
    "translation": "толщина"
  },
  {
    "index": 3226,
    "word": "law",
    "transcription": "[lɔː]",
    "translation": "закон"
  },
  {
    "index": 3227,
    "word": "lawyer",
    "transcription": "[ˈlɔːjə]",
    "translation": "адвокат"
  },
  {
    "index": 3228,
    "word": "lawmaker",
    "transcription": "[ˈlɔːˌmeɪkə]",
    "translation": "законодатель"
  },
  {
    "index": 3229,
    "word": "lawful",
    "transcription": "[ˈlɔːfʊl]",
    "translation": "законный"
  },
  {
    "index": 3230,
    "word": "site",
    "transcription": "[saɪt]",
    "translation": "местоположение"
  },
  {
    "index": 3231,
    "word": "nonetheless",
    "transcription": "[ˌnʌnðəˈlɛs]",
    "translation": "тем не менее"
  },
  {
    "index": 3232,
    "word": "borrow",
    "transcription": "[ˈbɒrəʊ]",
    "translation": "брать взаймы"
  },
  {
    "index": 3233,
    "word": "borrower",
    "transcription": "[ˈbɒrəʊə]",
    "translation": "заёмщик"
  },
  {
    "index": 3234,
    "word": "come down",
    "transcription": "[kʌmdaʊn]",
    "translation": "сводиться"
  },
  {
    "index": 3235,
    "word": "article",
    "transcription": "[ˈɑːtɪkl]",
    "translation": "вещь, изделие"
  },
  {
    "index": 3236,
    "word": "puddle",
    "transcription": "[ˈpʌdl]",
    "translation": "лужа"
  },
  {
    "index": 3237,
    "word": "claim",
    "transcription": "[kleɪm]",
    "translation": "требовать, претендовать"
  },
  {
    "index": 3238,
    "word": "reclaim",
    "transcription": "[rɪˈkleɪm]",
    "translation": "вернуть, востребовать"
  },
  {
    "index": 3239,
    "word": "govern",
    "transcription": "[ˈgʌvən]",
    "translation": "управлять"
  },
  {
    "index": 3240,
    "word": "government",
    "transcription": "[ˈgʌvnmənt]",
    "translation": "правительство"
  },
  {
    "index": 3241,
    "word": "governor",
    "transcription": "[ˈgʌvənə]",
    "translation": "губернатор"
  },
  {
    "index": 3242,
    "word": "governance",
    "transcription": "[ˈgʌvənəns]",
    "translation": "управление"
  },
  {
    "index": 3243,
    "word": "overseas",
    "transcription": "[ˌəʊvəˈsiːz]",
    "translation": "за рубежом, особ. за морем"
  },
  {
    "index": 3244,
    "word": "ugly",
    "transcription": "[ˈʌgli]",
    "translation": "безобразный, уродливый"
  },
  {
    "index": 3245,
    "word": "ugliness",
    "transcription": "[ˈʌglɪnɪs]",
    "translation": "уродство"
  },
  {
    "index": 3246,
    "word": "free",
    "transcription": "[friː]",
    "translation": "свободный или бесплатный"
  },
  {
    "index": 3247,
    "word": "for free",
    "transcription": "[fɔːfriː]",
    "translation": "бесплатно"
  },
  {
    "index": 3248,
    "word": "fool",
    "transcription": "[fuːl]",
    "translation": "дурак, дурачить"
  },
  {
    "index": 3249,
    "word": "foolish",
    "transcription": "[ˈfuːlɪʃ]",
    "translation": "глупый, дурашливый"
  },
  {
    "index": 3250,
    "word": "margin",
    "transcription": "[ˈmɑːʤɪn]",
    "translation": "маржа, накрутка"
  },
  {
    "index": 3251,
    "word": "streak",
    "transcription": "[striːk]",
    "translation": "полоса, след, струя"
  },
  {
    "index": 3252,
    "word": "by chance",
    "transcription": "[baɪʧɑːns]",
    "translation": "случайно"
  },
  {
    "index": 3253,
    "word": "moderate",
    "transcription": "[ˈmɒdərɪt]",
    "translation": "умеренный, средний"
  },
  {
    "index": 3254,
    "word": "immoderate",
    "transcription": "[ɪˈmɒdərɪt]",
    "translation": "неумеренный"
  },
  {
    "index": 3255,
    "word": "moderation",
    "transcription": "[ˌmɒdəˈreɪʃən]",
    "translation": "умеренность"
  },
  {
    "index": 3256,
    "word": "satellite",
    "transcription": "[ˈsætəlaɪt]",
    "translation": "спутник"
  },
  {
    "index": 3257,
    "word": "impair",
    "transcription": "[ɪmˈpeə]",
    "translation": "ухудшать, ослаблять и т.д."
  },
  {
    "index": 3258,
    "word": "impairment",
    "transcription": "[ɪmˈpeəmənt]",
    "translation": "нарушение"
  },
  {
    "index": 3259,
    "word": "damage",
    "transcription": "[ˈdæmɪʤ]",
    "translation": "вред, повреждать"
  },
  {
    "index": 3260,
    "word": "damaged",
    "transcription": "[ˈdæmɪʤd]",
    "translation": "повреждённость"
  },
  {
    "index": 3261,
    "word": "fellow",
    "transcription": "[ˈfɛləʊ]",
    "translation": "товарищ по чему-либо"
  },
  {
    "index": 3262,
    "word": "fellowship",
    "transcription": "[ˈfɛləʊʃɪp]",
    "translation": "товарищество, братство"
  },
  {
    "index": 3263,
    "word": "workshop",
    "transcription": "[ˈwɜːkʃɒp]",
    "translation": "мастерская, студия"
  },
  {
    "index": 3264,
    "word": "master",
    "transcription": "[ˈmɑːstə]",
    "translation": "овладеть (напр. искусством)"
  },
  {
    "index": 3265,
    "word": "mastery",
    "transcription": "[ˈmɑːstəri]",
    "translation": "мастерство"
  },
  {
    "index": 3266,
    "word": "currency",
    "transcription": "[ˈkʌrənsi]",
    "translation": "валюта"
  },
  {
    "index": 3267,
    "word": "cryptocurrency",
    "transcription": "[cryptocurrency]",
    "translation": "криптовалюта"
  },
  {
    "index": 3268,
    "word": "taste",
    "transcription": "[teɪst]",
    "translation": "вкус, иметь вкус"
  },
  {
    "index": 3269,
    "word": "tasty",
    "transcription": "[ˈteɪsti]",
    "translation": "вкусный"
  },
  {
    "index": 3270,
    "word": "tasteful",
    "transcription": "[ˈteɪstfʊl]",
    "translation": "со вкусом"
  },
  {
    "index": 3271,
    "word": "tasteless",
    "transcription": "[ˈteɪstlɪs]",
    "translation": "безвкусный"
  },
  {
    "index": 3272,
    "word": "distaste",
    "transcription": "[ˌdɪsˈteɪst]",
    "translation": "отвращение"
  },
  {
    "index": 3273,
    "word": "hatred",
    "transcription": "[ˈheɪtrɪd]",
    "translation": "ненависть"
  },
  {
    "index": 3274,
    "word": "dress",
    "transcription": "[drɛs]",
    "translation": "одеваться"
  },
  {
    "index": 3275,
    "word": "pregnant",
    "transcription": "[ˈprɛgnənt]",
    "translation": "беременная"
  },
  {
    "index": 3276,
    "word": "pregnancy",
    "transcription": "[ˈprɛgnənsi]",
    "translation": "беременность"
  },
  {
    "index": 3277,
    "word": "private",
    "transcription": "[ˈpraɪvɪt]",
    "translation": "частный, личный"
  },
  {
    "index": 3278,
    "word": "privately",
    "transcription": "[ˈpraɪvɪtli]",
    "translation": "про себя, частным образом и др."
  },
  {
    "index": 3279,
    "word": "collaborate",
    "transcription": "[kəˈlæbəreɪt]",
    "translation": "сотрудничать"
  },
  {
    "index": 3280,
    "word": "collaboration",
    "transcription": "[kəˌlæbəˈreɪʃən]",
    "translation": "сотрудничество"
  },
  {
    "index": 3281,
    "word": "hostage",
    "transcription": "[ˈhɒstɪʤ]",
    "translation": "заложник"
  },
  {
    "index": 3282,
    "word": "county",
    "transcription": "[ˈkaʊnti]",
    "translation": "графство, округ"
  },
  {
    "index": 3283,
    "word": "count",
    "transcription": "[kaʊnt]",
    "translation": "граф"
  },
  {
    "index": 3284,
    "word": "roll",
    "transcription": "[rəʊl]",
    "translation": "катиться"
  },
  {
    "index": 3285,
    "word": "roller",
    "transcription": "[ˈrəʊlə]",
    "translation": "ролик, валик, каток и т. п."
  },
  {
    "index": 3286,
    "word": "rest",
    "transcription": "[rɛst]",
    "translation": "покоиться"
  },
  {
    "index": 3287,
    "word": "trust",
    "transcription": "[trʌst]",
    "translation": "доверять"
  },
  {
    "index": 3288,
    "word": "entrust",
    "transcription": "[ɪnˈtrʌst]",
    "translation": "вверять"
  },
  {
    "index": 3289,
    "word": "trusty",
    "transcription": "[ˈtrʌsti]",
    "translation": "надежный"
  },
  {
    "index": 3290,
    "word": "mistrust",
    "transcription": "[ˌmɪsˈtrʌst]",
    "translation": "недоверие"
  },
  {
    "index": 3291,
    "word": "distrust",
    "transcription": "[dɪsˈtrʌst]",
    "translation": "недоверие"
  },
  {
    "index": 3292,
    "word": "trustee",
    "transcription": "[trʌsˈtiː]",
    "translation": "доверенное лицо"
  },
  {
    "index": 3293,
    "word": "get stuck",
    "transcription": "[gɛtstʌk]",
    "translation": "застрять"
  },
  {
    "index": 3294,
    "word": "adolescent",
    "transcription": "[ˌædəʊˈlɛsnt]",
    "translation": "подросток, подростковый"
  },
  {
    "index": 3295,
    "word": "adolescence",
    "transcription": "[ˌædəʊˈlɛsns]",
    "translation": "подростковый возраст"
  },
  {
    "index": 3296,
    "word": "despite",
    "transcription": "[dɪsˈpaɪt]",
    "translation": "несмотря на"
  },
  {
    "index": 3297,
    "word": "range",
    "transcription": "[reɪnʤ]",
    "translation": "диапазон, пределы"
  },
  {
    "index": 3298,
    "word": "expense",
    "transcription": "[ɪksˈpɛns]",
    "translation": "расходы"
  },
  {
    "index": 3299,
    "word": "expensive",
    "transcription": "[ɪksˈpɛnsɪv]",
    "translation": "дорогой"
  },
  {
    "index": 3300,
    "word": "expend",
    "transcription": "[ɪksˈpɛnd]",
    "translation": "расходовать"
  },
  {
    "index": 3301,
    "word": "addict",
    "transcription": "[ˈædɪkt]",
    "translation": "наркоман, привыкать"
  },
  {
    "index": 3302,
    "word": "addiction",
    "transcription": "[əˈdɪkʃ(ə)n]",
    "translation": "зависимость"
  },
  {
    "index": 3303,
    "word": "murder",
    "transcription": "[ˈmɜːdə]",
    "translation": "убийство, убивать"
  },
  {
    "index": 3304,
    "word": "murderer",
    "transcription": "[ˈmɜːdərə]",
    "translation": "убийца"
  },
  {
    "index": 3305,
    "word": "murderous",
    "transcription": "[ˈmɜːdərəs]",
    "translation": "убийственный"
  },
  {
    "index": 3306,
    "word": "literate",
    "transcription": "[ˈlɪtərɪt]",
    "translation": "грамотность"
  },
  {
    "index": 3307,
    "word": "literacy",
    "transcription": "[ˈlɪtərəsi]",
    "translation": "грамотность"
  },
  {
    "index": 3308,
    "word": "illiteracy",
    "transcription": "[ɪˈlɪtərəsi]",
    "translation": "неграмотность"
  },
  {
    "index": 3309,
    "word": "illiterate",
    "transcription": "[ɪˈlɪtərɪt]",
    "translation": "неграмотный"
  },
  {
    "index": 3310,
    "word": "merge",
    "transcription": "[mɜːʤ]",
    "translation": "соединять, сливать"
  },
  {
    "index": 3311,
    "word": "merger",
    "transcription": "[ˈmɜːʤə]",
    "translation": "объединение (напр. компаний)"
  },
  {
    "index": 3312,
    "word": "content",
    "transcription": "[ˈkɒntɛnt]",
    "translation": "содержимое"
  },
  {
    "index": 3313,
    "word": "aspire",
    "transcription": "[əsˈpaɪə]",
    "translation": "стремиться"
  },
  {
    "index": 3314,
    "word": "aspiration",
    "transcription": "[ˌæspəˈreɪʃ(ə)n]",
    "translation": "стремление"
  },
  {
    "index": 3315,
    "word": "go on",
    "transcription": "[gəʊɒn]",
    "translation": "происходить"
  },
  {
    "index": 3316,
    "word": "research",
    "transcription": "[rɪˈsɜːʧ]",
    "translation": "исследование, исследовать"
  },
  {
    "index": 3317,
    "word": "researcher",
    "transcription": "[rɪˈsɜːʧə]",
    "translation": "исследователь"
  },
  {
    "index": 3318,
    "word": "appear",
    "transcription": "[əˈpɪə]",
    "translation": "казаться"
  },
  {
    "index": 3319,
    "word": "appearance",
    "transcription": "[əˈpɪərəns]",
    "translation": "внешний вид"
  },
  {
    "index": 3320,
    "word": "dawn",
    "transcription": "[dɔːn]",
    "translation": "рассвет"
  },
  {
    "index": 3321,
    "word": "attract",
    "transcription": "[əˈtrækt]",
    "translation": "привлекать, притягивать"
  },
  {
    "index": 3322,
    "word": "attractive",
    "transcription": "[əˈtræktɪv]",
    "translation": "привлекательный"
  },
  {
    "index": 3323,
    "word": "attraction",
    "transcription": "[əˈtrækʃ(ə)n]",
    "translation": "привлечение"
  },
  {
    "index": 3324,
    "word": "undermine",
    "transcription": "[ˌʌndəˈmaɪn]",
    "translation": "подрывать"
  },
  {
    "index": 3325,
    "word": "dispose of",
    "transcription": "[dɪsˈpəʊzɒv]",
    "translation": "располагать, распоряжаться"
  },
  {
    "index": 3326,
    "word": "disposal",
    "transcription": "[dɪsˈpəʊzəl]",
    "translation": "распоряжение"
  },
  {
    "index": 3327,
    "word": "dot",
    "transcription": "[dɒt]",
    "translation": "точка"
  },
  {
    "index": 3328,
    "word": "rub",
    "transcription": "[rʌb]",
    "translation": "тереть"
  },
  {
    "index": 3329,
    "word": "look into",
    "transcription": "[lʊkˈɪntuː]",
    "translation": "посмотреть, разобраться"
  },
  {
    "index": 3330,
    "word": "fabric",
    "transcription": "[ˈfæbrɪk]",
    "translation": "ткань, материал"
  },
  {
    "index": 3331,
    "word": "beauty",
    "transcription": "[ˈbjuːti]",
    "translation": "красота или красавица"
  },
  {
    "index": 3332,
    "word": "pretty",
    "transcription": "[ˈprɪti]",
    "translation": "приятный"
  },
  {
    "index": 3333,
    "word": "call off",
    "transcription": "[kɔːlɒf]",
    "translation": "отменить"
  },
  {
    "index": 3334,
    "word": "manifest",
    "transcription": "[ˈmænɪfɛst]",
    "translation": "проявить, явный"
  },
  {
    "index": 3335,
    "word": "manifestation",
    "transcription": "[ˌmænɪfɛsˈteɪʃən]",
    "translation": "проявление"
  },
  {
    "index": 3336,
    "word": "list",
    "transcription": "[lɪst]",
    "translation": "список, перечислять"
  },
  {
    "index": 3337,
    "word": "listed",
    "transcription": "[ˈlɪstɪd]",
    "translation": "включённый в список"
  },
  {
    "index": 3338,
    "word": "unlisted",
    "transcription": "[ˌʌnˈlɪstɪd]",
    "translation": "не включённый в список"
  },
  {
    "index": 3339,
    "word": "Muslim",
    "transcription": "[ˈmʊslɪm]",
    "translation": "мусульманин, мусульманский"
  },
  {
    "index": 3340,
    "word": "savage",
    "transcription": "[ˈsævɪʤ]",
    "translation": "дикарь, дикий (в т. ч. перен.)"
  },
  {
    "index": 3341,
    "word": "savagery",
    "transcription": "[ˈsævɪʤəri]",
    "translation": "дикость"
  },
  {
    "index": 3342,
    "word": "treaty",
    "transcription": "[ˈtriːti]",
    "translation": "договор (между гос-вами)"
  },
  {
    "index": 3343,
    "word": "seed",
    "transcription": "[siːd]",
    "translation": "семя, сеять"
  },
  {
    "index": 3344,
    "word": "seeding",
    "transcription": "[ˈsiːdɪŋ]",
    "translation": "посев"
  },
  {
    "index": 3345,
    "word": "recreation",
    "transcription": "[ˌriːkrɪˈeɪʃən]",
    "translation": "отдых и развлечения"
  },
  {
    "index": 3346,
    "word": "recreational",
    "transcription": "[ˌrɛkrɪˈeɪʃənl]",
    "translation": "развлекательный"
  },
  {
    "index": 3347,
    "word": "collapse",
    "transcription": "[kəˈlæps]",
    "translation": "обрушиться, сложиться"
  },
  {
    "index": 3348,
    "word": "collapsible",
    "transcription": "[kəˈlæpsəbl]",
    "translation": "разборный"
  },
  {
    "index": 3349,
    "word": "ill",
    "transcription": "[ɪl]",
    "translation": "дурной, нехороший"
  },
  {
    "index": 3350,
    "word": "crew",
    "transcription": "[kruː]",
    "translation": "команда, экипаж"
  },
  {
    "index": 3351,
    "word": "wise",
    "transcription": "[waɪz]",
    "translation": "мудрый"
  },
  {
    "index": 3352,
    "word": "wisdom",
    "transcription": "[ˈwɪzdəm]",
    "translation": "мудрость"
  },
  {
    "index": 3353,
    "word": "like that",
    "transcription": "[laɪkðæt]",
    "translation": "вот так"
  },
  {
    "index": 3354,
    "word": "like this",
    "transcription": "[laɪkðɪs]",
    "translation": "вот так"
  },
  {
    "index": 3355,
    "word": "camp",
    "transcription": "[kæmp]",
    "translation": "лагерь"
  },
  {
    "index": 3356,
    "word": "camper",
    "transcription": "[ˈkæmpə]",
    "translation": "турист (в кемпинге)"
  },
  {
    "index": 3357,
    "word": "confirm",
    "transcription": "[kənˈfɜːm]",
    "translation": "подтвердить"
  },
  {
    "index": 3358,
    "word": "confirmed",
    "transcription": "[kənˈfɜːmd]",
    "translation": "убеждённый, закоренелый"
  },
  {
    "index": 3359,
    "word": "headquarters",
    "transcription": "[ˈhɛdˈkwɔːtəz]",
    "translation": "штаб-квартира"
  },
  {
    "index": 3360,
    "word": "burst",
    "transcription": "[bɜːst]",
    "translation": "взрыв, всплеск и т. д."
  },
  {
    "index": 3361,
    "word": "earth",
    "transcription": "[ɜːθ]",
    "translation": "Земля"
  },
  {
    "index": 3362,
    "word": "earthly",
    "transcription": "[ˈɜːθli]",
    "translation": "земной"
  },
  {
    "index": 3363,
    "word": "fulfil",
    "transcription": "[fʊlˈfɪl]",
    "translation": "исполнить"
  },
  {
    "index": 3364,
    "word": "fulfilment",
    "transcription": "[fʊlˈfɪlmənt]",
    "translation": "выполнение"
  },
  {
    "index": 3365,
    "word": "cash",
    "transcription": "[kæʃ]",
    "translation": "наличка, обналичить"
  },
  {
    "index": 3366,
    "word": "cashier",
    "transcription": "[kæˈʃɪə]",
    "translation": "кассир"
  },
  {
    "index": 3367,
    "word": "dedicate",
    "transcription": "[ˈdɛdɪkeɪt]",
    "translation": "посвящать"
  },
  {
    "index": 3368,
    "word": "dedication",
    "transcription": "[ˌdɛdɪˈkeɪʃən]",
    "translation": "посвящение"
  },
  {
    "index": 3369,
    "word": "sick",
    "transcription": "[sɪk]",
    "translation": "больной, плохо чувствующий"
  },
  {
    "index": 3370,
    "word": "alarm",
    "transcription": "[əˈlɑːm]",
    "translation": "тревога, сигнализация"
  },
  {
    "index": 3371,
    "word": "alarming",
    "transcription": "[əˈlɑːmɪŋ]",
    "translation": "тревожный"
  },
  {
    "index": 3372,
    "word": "alarm clock",
    "transcription": "[əˈlɑːmklɒk]",
    "translation": "будильник"
  },
  {
    "index": 3373,
    "word": "kid",
    "transcription": "[kɪd]",
    "translation": "ребёнок"
  },
  {
    "index": 3374,
    "word": "tall",
    "transcription": "[tɔːl]",
    "translation": "высокий (чел)"
  },
  {
    "index": 3375,
    "word": "border",
    "transcription": "[ˈbɔːdə]",
    "translation": "граница, край"
  },
  {
    "index": 3376,
    "word": "peer",
    "transcription": "[pɪə]",
    "translation": "вглядываться"
  },
  {
    "index": 3377,
    "word": "bishop",
    "transcription": "[ˈbɪʃəp]",
    "translation": "епископ"
  },
  {
    "index": 3378,
    "word": "archbishop",
    "transcription": "[ˌɑːʧˈbɪʃəp]",
    "translation": "архиепископ"
  },
  {
    "index": 3379,
    "word": "string",
    "transcription": "[strɪŋ]",
    "translation": "струна, тетива, бечева"
  },
  {
    "index": 3380,
    "word": "stringy",
    "transcription": "[ˈstrɪŋi]",
    "translation": "жилистый, волокнистый"
  },
  {
    "index": 3381,
    "word": "allowance",
    "transcription": "[əˈlaʊəns]",
    "translation": "выплата, пособие"
  },
  {
    "index": 3382,
    "word": "enterprise",
    "transcription": "[ˈɛntəpraɪz]",
    "translation": "предприятие, предпринимательство"
  },
  {
    "index": 3383,
    "word": "dusk",
    "transcription": "[dʌsk]",
    "translation": "смеркаться"
  },
  {
    "index": 3384,
    "word": "dusky",
    "transcription": "[ˈdʌski]",
    "translation": "сумеречный"
  },
  {
    "index": 3385,
    "word": "circumstance",
    "transcription": "[ˈsɜːkəmstəns]",
    "translation": "обстоятельство"
  },
  {
    "index": 3386,
    "word": "bite (bit, bitten)",
    "transcription": "[baɪt]",
    "translation": "кусать, укус"
  },
  {
    "index": 3387,
    "word": "lie",
    "transcription": "[laɪ]",
    "translation": "лгать, ложь"
  },
  {
    "index": 3388,
    "word": "tell lies",
    "transcription": "[tɛllaɪz]",
    "translation": "врать"
  },
  {
    "index": 3389,
    "word": "condemn",
    "transcription": "[kənˈdɛm]",
    "translation": "осуждать"
  },
  {
    "index": 3390,
    "word": "condemnation",
    "transcription": "[ˌkɒndɛmˈneɪʃən]",
    "translation": "осуждение"
  },
  {
    "index": 3391,
    "word": "get back at",
    "transcription": "[gɛtbækæt]",
    "translation": "отомстить"
  },
  {
    "index": 3392,
    "word": "extract",
    "transcription": "[ˈɛkstrækt]",
    "translation": "извлекать"
  },
  {
    "index": 3393,
    "word": "extraction",
    "transcription": "[ɪksˈtrækʃən]",
    "translation": "добыча, извлечение"
  },
  {
    "index": 3394,
    "word": "rule out",
    "transcription": "[ruːlaʊt]",
    "translation": "исключать, не рассматривать"
  },
  {
    "index": 3395,
    "word": "count out",
    "transcription": "[kaʊntaʊt]",
    "translation": "не учитывать"
  },
  {
    "index": 3396,
    "word": "welcome",
    "transcription": "[ˈwɛlkəm]",
    "translation": "желанный, приятный"
  },
  {
    "index": 3397,
    "word": "present",
    "transcription": "[ˈprɛznt]",
    "translation": "настоящее (время)"
  },
  {
    "index": 3398,
    "word": "presently",
    "transcription": "[ˈprɛzntli]",
    "translation": "в настоящее время"
  },
  {
    "index": 3399,
    "word": "deal in",
    "transcription": "[diːlɪn]",
    "translation": "заниматься (напр. торговать)"
  },
  {
    "index": 3400,
    "word": "stand for",
    "transcription": "[stændfɔː]",
    "translation": "выступать за"
  },
  {
    "index": 3401,
    "word": "stand against",
    "transcription": "[stændəˈgɛnst]",
    "translation": "выступать против"
  },
  {
    "index": 3402,
    "word": "neat",
    "transcription": "[niːt]",
    "translation": "аккуратный, опрятный"
  },
  {
    "index": 3403,
    "word": "do away with",
    "transcription": "[duːəˈweɪwɪð]",
    "translation": "покончить, избавиться"
  },
  {
    "index": 3404,
    "word": "mortal",
    "transcription": "[ˈmɔːtl]",
    "translation": "смертельный, смертный"
  },
  {
    "index": 3405,
    "word": "mortality",
    "transcription": "[mɔːˈtælɪti]",
    "translation": "смертность"
  },
  {
    "index": 3406,
    "word": "immortal",
    "transcription": "[ɪˈmɔːtl]",
    "translation": "бессмертный"
  },
  {
    "index": 3407,
    "word": "immortality",
    "transcription": "[ˌɪmɔːˈtælɪti]",
    "translation": "бессмертие"
  },
  {
    "index": 3408,
    "word": "kick back",
    "transcription": "[kɪkbæk]",
    "translation": "расслабиться"
  },
  {
    "index": 3409,
    "word": "hip",
    "transcription": "[hɪp]",
    "translation": "таз, поясница"
  },
  {
    "index": 3410,
    "word": "vessel",
    "transcription": "[ˈvɛsl]",
    "translation": "сосуд"
  },
  {
    "index": 3411,
    "word": "execute",
    "transcription": "[ˈɛksɪkjuːt]",
    "translation": "исполнить"
  },
  {
    "index": 3412,
    "word": "execution",
    "transcription": "[ˌɛksɪˈkjuːʃən]",
    "translation": "выполнение"
  },
  {
    "index": 3413,
    "word": "executive",
    "transcription": "[ɪgˈzɛkjʊtɪv]",
    "translation": "исполнитель, должностное лицо"
  },
  {
    "index": 3414,
    "word": "deer",
    "transcription": "[dɪə]",
    "translation": "олень"
  },
  {
    "index": 3415,
    "word": "reindeer",
    "transcription": "[ˈreɪndɪə]",
    "translation": "северный олень"
  },
  {
    "index": 3416,
    "word": "tune",
    "transcription": "[tjuːn]",
    "translation": "настраивать"
  },
  {
    "index": 3417,
    "word": "tuning",
    "transcription": "[ˈtjuːnɪŋ]",
    "translation": "настройка"
  },
  {
    "index": 3418,
    "word": "bank",
    "transcription": "[bæŋk]",
    "translation": "берег (реки, озера)"
  },
  {
    "index": 3419,
    "word": "appropriate",
    "transcription": "[əˈprəʊprɪɪt]",
    "translation": "подходящий"
  },
  {
    "index": 3420,
    "word": "propriety",
    "transcription": "[prəˈpraɪəti]",
    "translation": "правильность, уместность"
  },
  {
    "index": 3421,
    "word": "free up",
    "transcription": "[friːʌp]",
    "translation": "высвободить"
  },
  {
    "index": 3422,
    "word": "integrity",
    "transcription": "[ɪnˈtɛgrɪti]",
    "translation": "целостность"
  },
  {
    "index": 3423,
    "word": "integral",
    "transcription": "[ˈɪntɪgrəl]",
    "translation": "целостный"
  },
  {
    "index": 3424,
    "word": "peel",
    "transcription": "[piːl]",
    "translation": "кожура, очищать"
  },
  {
    "index": 3425,
    "word": "passion",
    "transcription": "[ˈpæʃən]",
    "translation": "страсть"
  },
  {
    "index": 3426,
    "word": "passionate",
    "transcription": "[ˈpæʃənɪt]",
    "translation": "страстный"
  },
  {
    "index": 3427,
    "word": "cover",
    "transcription": "[ˈkʌvə]",
    "translation": "накрывать, покрывать"
  },
  {
    "index": 3428,
    "word": "coverage",
    "transcription": "[ˈkʌvərɪʤ]",
    "translation": "покрытие"
  },
  {
    "index": 3429,
    "word": "uncover",
    "transcription": "[ʌnˈkʌvə]",
    "translation": "раскрывать"
  },
  {
    "index": 3430,
    "word": "undercover",
    "transcription": "[ˈʌndəˌkʌvə]",
    "translation": "тайный"
  },
  {
    "index": 3431,
    "word": "decorate",
    "transcription": "[ˈdɛkəreɪt]",
    "translation": "украшать"
  },
  {
    "index": 3432,
    "word": "decoration",
    "transcription": "[ˌdɛkəˈreɪʃən]",
    "translation": "украшение"
  },
  {
    "index": 3433,
    "word": "relate",
    "transcription": "[rɪˈleɪt]",
    "translation": "относиться, быть связанным"
  },
  {
    "index": 3434,
    "word": "relation",
    "transcription": "[rɪˈleɪʃən]",
    "translation": "связь"
  },
  {
    "index": 3435,
    "word": "relationship",
    "transcription": "[rɪˈleɪʃənʃɪp]",
    "translation": "отношения"
  },
  {
    "index": 3436,
    "word": "choice",
    "transcription": "[ʧɔɪs]",
    "translation": "выбор"
  },
  {
    "index": 3437,
    "word": "simulate",
    "transcription": "[ˈsɪmjʊleɪt]",
    "translation": "моделировать, имитировать"
  },
  {
    "index": 3438,
    "word": "simulation",
    "transcription": "[ˌsɪmjʊˈleɪʃən]",
    "translation": "моделирование"
  },
  {
    "index": 3439,
    "word": "see through",
    "transcription": "[siːθruː]",
    "translation": "довести до конца"
  },
  {
    "index": 3440,
    "word": "look",
    "transcription": "[lʊk]",
    "translation": "выглядеть"
  },
  {
    "index": 3441,
    "word": "put off",
    "transcription": "[pʊtɒf]",
    "translation": "отвратить, отвлечь и т. д."
  },
  {
    "index": 3442,
    "word": "pray",
    "transcription": "[preɪ]",
    "translation": "молиться"
  },
  {
    "index": 3443,
    "word": "prayer",
    "transcription": "[preə]",
    "translation": "молитва"
  },
  {
    "index": 3444,
    "word": "particle",
    "transcription": "[ˈpɑːtɪkl]",
    "translation": "частица"
  },
  {
    "index": 3445,
    "word": "questionnaire",
    "transcription": "[ˌkwɛstɪəˈneə]",
    "translation": "анкета"
  },
  {
    "index": 3446,
    "word": "population",
    "transcription": "[ˌpɒpjʊˈleɪʃən]",
    "translation": "население"
  },
  {
    "index": 3447,
    "word": "populate",
    "transcription": "[ˈpɒpjʊleɪt]",
    "translation": "населять"
  },
  {
    "index": 3448,
    "word": "chest",
    "transcription": "[ʧɛst]",
    "translation": "сундук"
  },
  {
    "index": 3449,
    "word": "pie",
    "transcription": "[paɪ]",
    "translation": "пирог"
  },
  {
    "index": 3450,
    "word": "artificial",
    "transcription": "[ˌɑːtɪˈfɪʃ(ə)l]",
    "translation": "искусственный"
  },
  {
    "index": 3451,
    "word": "ordinary",
    "transcription": "[ˈɔːdnri]",
    "translation": "обычный"
  },
  {
    "index": 3452,
    "word": "mistake",
    "transcription": "[mɪsˈteɪk]",
    "translation": "ошибка"
  },
  {
    "index": 3453,
    "word": "mistaken",
    "transcription": "[mɪsˈteɪkən]",
    "translation": "ошибочный, ошибающийся"
  },
  {
    "index": 3454,
    "word": "mistakenly",
    "transcription": "[mɪsˈteɪkənli]",
    "translation": "ошибочно"
  },
  {
    "index": 3455,
    "word": "hall",
    "transcription": "[hɔːl]",
    "translation": "зал, вестибюль"
  },
  {
    "index": 3456,
    "word": "hallway",
    "transcription": "[ˈhɔːlweɪ]",
    "translation": "прихожая"
  },
  {
    "index": 3457,
    "word": "stock",
    "transcription": "[stɒk]",
    "translation": "банальный, шаблонный"
  },
  {
    "index": 3458,
    "word": "experience",
    "transcription": "[ɪksˈpɪərɪəns]",
    "translation": "опыт"
  },
  {
    "index": 3459,
    "word": "experienced",
    "transcription": "[ɪksˈpɪərɪənst]",
    "translation": "опытный"
  },
  {
    "index": 3460,
    "word": "hire",
    "transcription": "[ˈhaɪə]",
    "translation": "нанимать"
  },
  {
    "index": 3461,
    "word": "available",
    "transcription": "[əˈveɪləbl]",
    "translation": "доступный, в наличии"
  },
  {
    "index": 3462,
    "word": "availability",
    "transcription": "[əˌveɪləˈbɪlɪti]",
    "translation": "доступность"
  },
  {
    "index": 3463,
    "word": "unavailable",
    "transcription": "[ˌʌnəˈveɪləbl]",
    "translation": "недоступный"
  },
  {
    "index": 3464,
    "word": "schedule",
    "transcription": "[ˈʃɛdjuːl]",
    "translation": "график, расписание"
  },
  {
    "index": 3465,
    "word": "scheduled",
    "transcription": "[ˈʃɛdjuːld]",
    "translation": "запланированный, расписанный"
  },
  {
    "index": 3466,
    "word": "survive",
    "transcription": "[səˈvaɪv]",
    "translation": "выжить"
  },
  {
    "index": 3467,
    "word": "survival",
    "transcription": "[səˈvaɪvəl]",
    "translation": "выживание"
  },
  {
    "index": 3468,
    "word": "survivor",
    "transcription": "[səˈvaɪvə]",
    "translation": "уцелевший"
  },
  {
    "index": 3469,
    "word": "whole",
    "transcription": "[həʊl]",
    "translation": "весь, целый"
  },
  {
    "index": 3470,
    "word": "wholly",
    "transcription": "[ˈhəʊli]",
    "translation": "целиком"
  },
  {
    "index": 3471,
    "word": "name after",
    "transcription": "[neɪmˈɑːftə]",
    "translation": "назвать в честь"
  },
  {
    "index": 3472,
    "word": "framework",
    "transcription": "[ˈfreɪmwɜːk]",
    "translation": "каркас, основа, рамки"
  },
  {
    "index": 3473,
    "word": "rich",
    "transcription": "[rɪʧ]",
    "translation": "богатый"
  },
  {
    "index": 3474,
    "word": "richness",
    "transcription": "[ˈrɪʧnɪs]",
    "translation": "богатство"
  },
  {
    "index": 3475,
    "word": "riches",
    "transcription": "[ˈrɪʧɪz]",
    "translation": "богатства"
  },
  {
    "index": 3476,
    "word": "debate",
    "transcription": "[dɪˈbeɪt]",
    "translation": "обсуждать, спорить"
  },
  {
    "index": 3477,
    "word": "debatable",
    "transcription": "[dɪˈbeɪtəbl]",
    "translation": "спорный, дискуссионный"
  },
  {
    "index": 3478,
    "word": "layer",
    "transcription": "[ˈleɪə]",
    "translation": "слой"
  },
  {
    "index": 3479,
    "word": "layer",
    "transcription": "[ˈleɪə]",
    "translation": "слоёный"
  },
  {
    "index": 3480,
    "word": "cheer",
    "transcription": "[ʧɪə]",
    "translation": "аплодировать, радостно встречать"
  },
  {
    "index": 3481,
    "word": "affect",
    "transcription": "[əˈfɛkt]",
    "translation": "воздействовать"
  },
  {
    "index": 3482,
    "word": "swear",
    "transcription": "[sweə]",
    "translation": "ругаться"
  },
  {
    "index": 3483,
    "word": "propose",
    "transcription": "[prəˈpəʊz]",
    "translation": "предлагать"
  },
  {
    "index": 3484,
    "word": "proposal",
    "transcription": "[prəˈpəʊzəl]",
    "translation": "предложение"
  },
  {
    "index": 3485,
    "word": "proposition",
    "transcription": "[ˌprɒpəˈzɪʃən]",
    "translation": "предложение"
  },
  {
    "index": 3486,
    "word": "literary",
    "transcription": "[ˈlɪtərəri]",
    "translation": "литературный, книжный"
  },
  {
    "index": 3487,
    "word": "proceed",
    "transcription": "[prəˈsiːd]",
    "translation": "следовать, продолжать"
  },
  {
    "index": 3488,
    "word": "salt",
    "transcription": "[sɔːlt]",
    "translation": "соль"
  },
  {
    "index": 3489,
    "word": "prevent",
    "transcription": "[prɪˈvɛnt]",
    "translation": "предотвращать"
  },
  {
    "index": 3490,
    "word": "prevention",
    "transcription": "[prɪˈvɛnʃən]",
    "translation": "предотвращение, профилактика"
  },
  {
    "index": 3491,
    "word": "preventive",
    "transcription": "[prɪˈvɛntɪv]",
    "translation": "превентивный"
  },
  {
    "index": 3492,
    "word": "entire",
    "transcription": "[ɪnˈtaɪə]",
    "translation": "весь, целый"
  },
  {
    "index": 3493,
    "word": "entirely",
    "transcription": "[ɪnˈtaɪəli]",
    "translation": "полностью"
  },
  {
    "index": 3494,
    "word": "cross out",
    "transcription": "[krɒsaʊt]",
    "translation": "вычеркнуть"
  },
  {
    "index": 3495,
    "word": "manufacture",
    "transcription": "[ˌmænjʊˈfækʧə]",
    "translation": "производить, производство"
  },
  {
    "index": 3496,
    "word": "manufacturer",
    "transcription": "[ˌmænjʊˈfækʧərə]",
    "translation": "производитель"
  },
  {
    "index": 3497,
    "word": "by heart",
    "transcription": "[baɪhɑːt]",
    "translation": "наизусть"
  },
  {
    "index": 3498,
    "word": "underlie",
    "transcription": "[ˌʌndəˈlaɪ]",
    "translation": "лежать в основе"
  },
  {
    "index": 3499,
    "word": "pill",
    "transcription": "[pɪl]",
    "translation": "пилюля"
  },
  {
    "index": 3500,
    "word": "turn",
    "transcription": "[tɜːn]",
    "translation": "очередь, смена"
  },
  {
    "index": 3501,
    "word": "in turn",
    "transcription": "[ɪntɜːn]",
    "translation": "вперемежку"
  },
  {
    "index": 3502,
    "word": "by turns",
    "transcription": "[baɪtɜːnz]",
    "translation": "по очереди"
  },
  {
    "index": 3503,
    "word": "voluntary",
    "transcription": "[ˈvɒləntəri]",
    "translation": "добровольный"
  },
  {
    "index": 3504,
    "word": "volunteer",
    "transcription": "[ˌvɒlənˈtɪə]",
    "translation": "доброволец"
  },
  {
    "index": 3505,
    "word": "involuntary",
    "transcription": "[ɪnˈvɒləntəri]",
    "translation": "непроизвольный"
  },
  {
    "index": 3506,
    "word": "be into",
    "transcription": "[biːˈɪntuː]",
    "translation": "заниматься, увлекаться"
  },
  {
    "index": 3507,
    "word": "back then",
    "transcription": "[bækðɛn]",
    "translation": "тогда"
  },
  {
    "index": 3508,
    "word": "lie (lay, lain)",
    "transcription": "[laɪ]",
    "translation": "лежать"
  },
  {
    "index": 3509,
    "word": "screw",
    "transcription": "[skruː]",
    "translation": "винт, ввинчивать"
  },
  {
    "index": 3510,
    "word": "unscrew",
    "transcription": "[ʌnˈskruː]",
    "translation": "отвинчивать"
  },
  {
    "index": 3511,
    "word": "screwdriver",
    "transcription": "[ˈskruːˌdraɪvə]",
    "translation": "отвертка"
  },
  {
    "index": 3512,
    "word": "jacket",
    "transcription": "[ˈʤækɪt]",
    "translation": "куртка, пиджак"
  },
  {
    "index": 3513,
    "word": "commercial",
    "transcription": "[kəˈmɜːʃəl]",
    "translation": "реклама (на ТВ)"
  },
  {
    "index": 3514,
    "word": "diverse",
    "transcription": "[daɪˈvɜːs]",
    "translation": "разнообразный"
  },
  {
    "index": 3515,
    "word": "diversify",
    "transcription": "[daɪˈvɜːsɪfaɪ]",
    "translation": "разнообразить"
  },
  {
    "index": 3516,
    "word": "diversity",
    "transcription": "[daɪˈvɜːsɪti]",
    "translation": "разнообразие"
  },
  {
    "index": 3517,
    "word": "imply",
    "transcription": "[ɪmˈplaɪ]",
    "translation": "подразумевать"
  },
  {
    "index": 3518,
    "word": "wonder",
    "transcription": "[ˈwʌndə]",
    "translation": "хотеть знать"
  },
  {
    "index": 3519,
    "word": "account",
    "transcription": "[əˈkaʊnt]",
    "translation": "отчёт"
  },
  {
    "index": 3520,
    "word": "accountant",
    "transcription": "[əˈkaʊntənt]",
    "translation": "бухгалтер"
  },
  {
    "index": 3521,
    "word": "accountable",
    "transcription": "[əˈkaʊntəbl]",
    "translation": "подотчетный"
  },
  {
    "index": 3522,
    "word": "accountability",
    "transcription": "[əˌkaʊntəˈbɪlɪti]",
    "translation": "подотчетность"
  },
  {
    "index": 3523,
    "word": "muscle",
    "transcription": "[ˈmʌsl]",
    "translation": "мышца"
  },
  {
    "index": 3524,
    "word": "muscular",
    "transcription": "[ˈmʌskjʊlə]",
    "translation": "мускулистый"
  },
  {
    "index": 3525,
    "word": "revive",
    "transcription": "[rɪˈvaɪv]",
    "translation": "возрождать, оживлять"
  },
  {
    "index": 3526,
    "word": "revival",
    "transcription": "[rɪˈvaɪvəl]",
    "translation": "возрождение"
  },
  {
    "index": 3527,
    "word": "overlook",
    "transcription": "[ˌəʊvəˈlʊk]",
    "translation": "не заметить"
  },
  {
    "index": 3528,
    "word": "evaluate",
    "transcription": "[ɪˈvæljʊeɪt]",
    "translation": "дать оценку"
  },
  {
    "index": 3529,
    "word": "evaluation",
    "transcription": "[ɪˌvæljʊˈeɪʃən]",
    "translation": "оценка"
  },
  {
    "index": 3530,
    "word": "evaluative",
    "transcription": "[ɪˈvæljʊətɪv]",
    "translation": "оценочный"
  },
  {
    "index": 3531,
    "word": "wrist",
    "transcription": "[rɪst]",
    "translation": "запястье"
  },
  {
    "index": 3532,
    "word": "complete",
    "transcription": "[kəmˈpliːt]",
    "translation": "завершить, выполнить"
  },
  {
    "index": 3533,
    "word": "completion",
    "transcription": "[kəmˈpliːʃən]",
    "translation": "завершение"
  },
  {
    "index": 3534,
    "word": "complete",
    "transcription": "[kəmˈpliːt]",
    "translation": "полный, завершённый"
  },
  {
    "index": 3535,
    "word": "incomplete",
    "transcription": "[ˌɪnkəmˈpliːt]",
    "translation": "неполный"
  },
  {
    "index": 3536,
    "word": "aim",
    "transcription": "[eɪm]",
    "translation": "цель"
  },
  {
    "index": 3537,
    "word": "take aim",
    "transcription": "[teɪkeɪm]",
    "translation": "прицелиться"
  },
  {
    "index": 3538,
    "word": "aimless",
    "transcription": "[ˈeɪmlɪs]",
    "translation": "бесцельный"
  },
  {
    "index": 3539,
    "word": "correlate",
    "transcription": "[ˈkɒrɪleɪt]",
    "translation": "соотносить"
  },
  {
    "index": 3540,
    "word": "correlation",
    "transcription": "[ˌkɒrɪˈleɪʃən]",
    "translation": "соотнесение"
  },
  {
    "index": 3541,
    "word": "since",
    "transcription": "[sɪns]",
    "translation": "с (какого-то времени)"
  },
  {
    "index": 3542,
    "word": "civil",
    "transcription": "[ˈsɪvl]",
    "translation": "гражданский, невоенный"
  },
  {
    "index": 3543,
    "word": "gift",
    "transcription": "[gɪft]",
    "translation": "подарок"
  },
  {
    "index": 3544,
    "word": "gifted",
    "transcription": "[ˈgɪftɪd]",
    "translation": "одаренный"
  },
  {
    "index": 3545,
    "word": "attribute",
    "transcription": "[ˈætrɪbjuːt]",
    "translation": "приписывать, относить"
  },
  {
    "index": 3546,
    "word": "attribution",
    "transcription": "[ˌætrɪˈbjuːʃ(ə)n]",
    "translation": "приписывание"
  },
  {
    "index": 3547,
    "word": "recipe",
    "transcription": "[ˈrɛsɪpi]",
    "translation": "рецепт"
  },
  {
    "index": 3548,
    "word": "rebel",
    "transcription": "[rɪˈbɛl]",
    "translation": "восставать"
  },
  {
    "index": 3549,
    "word": "rebel",
    "transcription": "[ˈrɛbl]",
    "translation": "повстанец"
  },
  {
    "index": 3550,
    "word": "rebellious",
    "transcription": "[rɪˈbɛljəs]",
    "translation": "мятежный"
  },
  {
    "index": 3551,
    "word": "rebellion",
    "transcription": "[rɪˈbɛljən]",
    "translation": "бунт"
  },
  {
    "index": 3552,
    "word": "bear (bore, born)",
    "transcription": "[beə]",
    "translation": "рожать"
  },
  {
    "index": 3553,
    "word": "newborn",
    "transcription": "[ˈnjuːbɔːn]",
    "translation": "новорожденный"
  },
  {
    "index": 3554,
    "word": "advice",
    "transcription": "[ədˈvaɪs]",
    "translation": "совет (неисчисл!)"
  },
  {
    "index": 3555,
    "word": "admire",
    "transcription": "[ədˈmaɪə]",
    "translation": "восхищаться"
  },
  {
    "index": 3556,
    "word": "admirable",
    "transcription": "[ˈædmərəbl]",
    "translation": "замечательный"
  },
  {
    "index": 3557,
    "word": "admiration",
    "transcription": "[ˌædməˈreɪʃ(ə)n]",
    "translation": "восхищение"
  },
  {
    "index": 3558,
    "word": "admirer",
    "transcription": "[ədˈmaɪərə]",
    "translation": "обожатель"
  },
  {
    "index": 3559,
    "word": "render",
    "transcription": "[ˈrɛndə]",
    "translation": "воздавать, оказывать"
  },
  {
    "index": 3560,
    "word": "select",
    "transcription": "[sɪˈlɛkt]",
    "translation": "выбирать, отбирать"
  },
  {
    "index": 3561,
    "word": "selection",
    "transcription": "[sɪˈlɛkʃən]",
    "translation": "выбор, подбор"
  },
  {
    "index": 3562,
    "word": "selective",
    "transcription": "[sɪˈlɛktɪv]",
    "translation": "избирательный"
  },
  {
    "index": 3563,
    "word": "stock",
    "transcription": "[stɒk]",
    "translation": "запас"
  },
  {
    "index": 3564,
    "word": "amount",
    "transcription": "[əˈmaʊnt]",
    "translation": "количество (неисчисл.)"
  },
  {
    "index": 3565,
    "word": "nail",
    "transcription": "[neɪl]",
    "translation": "ноготь"
  },
  {
    "index": 3566,
    "word": "either",
    "transcription": "[ˈaɪðə]",
    "translation": "любой из двух"
  },
  {
    "index": 3567,
    "word": "harvest",
    "transcription": "[ˈhɑːvɪst]",
    "translation": "урожай"
  },
  {
    "index": 3568,
    "word": "harvesting",
    "transcription": "[ˈhɑːvɪstɪŋ]",
    "translation": "сбор урожая"
  },
  {
    "index": 3569,
    "word": "access",
    "transcription": "[ˈæksɛs]",
    "translation": "доступ"
  },
  {
    "index": 3570,
    "word": "accessible",
    "transcription": "[əkˈsɛsəbl]",
    "translation": "доступной"
  },
  {
    "index": 3571,
    "word": "accessibility",
    "transcription": "[əkˌsɛsɪˈbɪlɪti]",
    "translation": "доступность"
  },
  {
    "index": 3572,
    "word": "inaccessible",
    "transcription": "[ˌɪnækˈsɛsəbl]",
    "translation": "недоступный"
  },
  {
    "index": 3573,
    "word": "inaccessibility",
    "transcription": "[ɪnækˌsɛsəˈbɪlɪti]",
    "translation": "недоступность"
  },
  {
    "index": 3574,
    "word": "frame",
    "transcription": "[freɪm]",
    "translation": "рамка, каркас и т.п."
  },
  {
    "index": 3575,
    "word": "priest",
    "transcription": "[priːst]",
    "translation": "жрец, священник"
  },
  {
    "index": 3576,
    "word": "fuel",
    "transcription": "[fjʊəl]",
    "translation": "топливо, заправлять"
  },
  {
    "index": 3577,
    "word": "refuel",
    "transcription": "[ˌriːˈfjʊəl]",
    "translation": "дозаправить"
  },
  {
    "index": 3578,
    "word": "temporary",
    "transcription": "[ˈtɛmpərəri]",
    "translation": "временный"
  },
  {
    "index": 3579,
    "word": "custom",
    "transcription": "[ˈkʌstəm]",
    "translation": "обычай, привычка"
  },
  {
    "index": 3580,
    "word": "customary",
    "transcription": "[ˈkʌstəməri]",
    "translation": "обычный"
  },
  {
    "index": 3581,
    "word": "relative",
    "transcription": "[ˈrɛlətɪv]",
    "translation": "относительный"
  },
  {
    "index": 3582,
    "word": "relativity",
    "transcription": "[ˌrɛləˈtɪvɪti]",
    "translation": "относительность"
  },
  {
    "index": 3583,
    "word": "skill",
    "transcription": "[skɪl]",
    "translation": "умение, искусство и т. д."
  },
  {
    "index": 3584,
    "word": "skilled",
    "transcription": "[skɪld]",
    "translation": "умелый"
  },
  {
    "index": 3585,
    "word": "skilful",
    "transcription": "[ˈskɪlfʊl]",
    "translation": "искусный"
  },
  {
    "index": 3586,
    "word": "knee",
    "transcription": "[niː]",
    "translation": "колено"
  },
  {
    "index": 3587,
    "word": "welfare",
    "transcription": "[ˈwɛlfeə]",
    "translation": "благополучие"
  },
  {
    "index": 3588,
    "word": "promise",
    "transcription": "[ˈprɒmɪs]",
    "translation": "обещать, обещание"
  },
  {
    "index": 3589,
    "word": "promising",
    "transcription": "[ˈprɒmɪsɪŋ]",
    "translation": "многообещающий"
  },
  {
    "index": 3590,
    "word": "disable",
    "transcription": "[dɪsˈeɪbl]",
    "translation": "отключить, нейтрализовать"
  },
  {
    "index": 3591,
    "word": "tide",
    "transcription": "[taɪd]",
    "translation": "волна, поток, прилив"
  },
  {
    "index": 3592,
    "word": "rifle",
    "transcription": "[ˈraɪfl]",
    "translation": "винтовка"
  },
  {
    "index": 3593,
    "word": "rifleman",
    "transcription": "[ˈraɪflmən]",
    "translation": "стрелок"
  },
  {
    "index": 3594,
    "word": "narrow",
    "transcription": "[ˈnærəʊ]",
    "translation": "узкий"
  },
  {
    "index": 3595,
    "word": "narrowness",
    "transcription": "[ˈnærəʊnɪs]",
    "translation": "узость"
  },
  {
    "index": 3596,
    "word": "repair",
    "transcription": "[rɪˈpeə]",
    "translation": "ремонт, ремонтировать"
  },
  {
    "index": 3597,
    "word": "achieve",
    "transcription": "[əˈʧiːv]",
    "translation": "достигать"
  },
  {
    "index": 3598,
    "word": "achievement",
    "transcription": "[əˈʧiːvmənt]",
    "translation": "достижение"
  },
  {
    "index": 3599,
    "word": "achievable",
    "transcription": "[əˈʧiːvəbl]",
    "translation": "достижимый"
  },
  {
    "index": 3600,
    "word": "unachievable",
    "transcription": "[ˌʌnəˈʧiːvəbl]",
    "translation": "недостижимый"
  },
  {
    "index": 3601,
    "word": "dish",
    "transcription": "[dɪʃ]",
    "translation": "блюдо"
  },
  {
    "index": 3602,
    "word": "pitch",
    "transcription": "[pɪʧ]",
    "translation": "ставить (напр. палатку)"
  },
  {
    "index": 3603,
    "word": "numerous",
    "transcription": "[ˈnjuːmərəs]",
    "translation": "многочисленные"
  },
  {
    "index": 3604,
    "word": "load",
    "transcription": "[ləʊd]",
    "translation": "грузить, груз"
  },
  {
    "index": 3605,
    "word": "reload",
    "transcription": "[ˌriːˈləʊd]",
    "translation": "перезагружать"
  },
  {
    "index": 3606,
    "word": "overload",
    "transcription": "[ˈəʊvələʊd]",
    "translation": "перегрузка"
  },
  {
    "index": 3607,
    "word": "download",
    "transcription": "[ˌdaʊnˈləʊd]",
    "translation": "скачать"
  },
  {
    "index": 3608,
    "word": "poke out",
    "transcription": "[pəʊkaʊt]",
    "translation": "высовывать"
  },
  {
    "index": 3609,
    "word": "glance",
    "transcription": "[glɑːns]",
    "translation": "взгляд"
  },
  {
    "index": 3610,
    "word": "vessel",
    "transcription": "[ˈvɛsl]",
    "translation": "судно"
  },
  {
    "index": 3611,
    "word": "presume",
    "transcription": "[prɪˈzjuːm]",
    "translation": "предполагать"
  },
  {
    "index": 3612,
    "word": "presumably",
    "transcription": "[prɪˈzjuːməbli]",
    "translation": "предположительно"
  },
  {
    "index": 3613,
    "word": "presumption",
    "transcription": "[prɪˈzʌmpʃən]",
    "translation": "презумпция"
  },
  {
    "index": 3614,
    "word": "ancient",
    "transcription": "[ˈeɪnʃ(ə)nt]",
    "translation": "древний"
  },
  {
    "index": 3615,
    "word": "warn",
    "transcription": "[wɔːn]",
    "translation": "предостерегать"
  },
  {
    "index": 3616,
    "word": "warning",
    "transcription": "[ˈwɔːnɪŋ]",
    "translation": "предупреждение"
  },
  {
    "index": 3617,
    "word": "tissue",
    "transcription": "[ˈtɪʃuː]",
    "translation": "бумажная салфетка"
  },
  {
    "index": 3618,
    "word": "sue",
    "transcription": "[sjuː]",
    "translation": "предъявить иск"
  },
  {
    "index": 3619,
    "word": "come about",
    "transcription": "[kʌməˈbaʊt]",
    "translation": "произойти"
  },
  {
    "index": 3620,
    "word": "cooperate",
    "transcription": "[kəʊˈɒpəˌreɪt]",
    "translation": "сотрудничать"
  },
  {
    "index": 3621,
    "word": "cooperation",
    "transcription": "[kəʊˌɒpəˈreɪʃən]",
    "translation": "сотрудничество"
  },
  {
    "index": 3622,
    "word": "cooperative",
    "transcription": "[kəʊˈɒpərətɪv]",
    "translation": "совместный"
  },
  {
    "index": 3623,
    "word": "impress",
    "transcription": "[ˈɪmprɛs]",
    "translation": "впечатлить"
  },
  {
    "index": 3624,
    "word": "impressive",
    "transcription": "[ɪmˈprɛsɪv]",
    "translation": "впечатляющий"
  },
  {
    "index": 3625,
    "word": "impression",
    "transcription": "[ɪmˈprɛʃən]",
    "translation": "впечатление"
  },
  {
    "index": 3626,
    "word": "purchase",
    "transcription": "[ˈpɜːʧəs]",
    "translation": "покупка, покупать"
  },
  {
    "index": 3627,
    "word": "trunk",
    "transcription": "[trʌŋk]",
    "translation": "ствол дерева"
  },
  {
    "index": 3628,
    "word": "implicate",
    "transcription": "[ˈɪmplɪkeɪt]",
    "translation": "указать на причастность"
  },
  {
    "index": 3629,
    "word": "implication",
    "transcription": "[ˌɪmplɪˈkeɪʃən]",
    "translation": "смысл, подтекст"
  },
  {
    "index": 3630,
    "word": "implicated",
    "transcription": "[ˈɪmplɪkeɪtɪd]",
    "translation": "замешан"
  },
  {
    "index": 3631,
    "word": "shed",
    "transcription": "[ʃɛd]",
    "translation": "сарай, ангар и т.п."
  },
  {
    "index": 3632,
    "word": "age",
    "transcription": "[eɪʤ]",
    "translation": "возраст"
  },
  {
    "index": 3633,
    "word": "middle age",
    "transcription": "[ˈmɪdleɪʤ]",
    "translation": "средний возраст"
  },
  {
    "index": 3634,
    "word": "old age",
    "transcription": "[əʊldeɪʤ]",
    "translation": "старость"
  },
  {
    "index": 3635,
    "word": "install",
    "transcription": "[ɪnˈstɔːl]",
    "translation": "устанавливать"
  },
  {
    "index": 3636,
    "word": "installation",
    "transcription": "[ˌɪnstəˈleɪʃən]",
    "translation": "монтаж"
  },
  {
    "index": 3637,
    "word": "involve",
    "transcription": "[ɪnˈvɒlv]",
    "translation": "содержать в себе (процесс)"
  },
  {
    "index": 3638,
    "word": "rapid",
    "transcription": "[ˈræpɪd]",
    "translation": "быстрый"
  },
  {
    "index": 3639,
    "word": "rapidity",
    "transcription": "[rəˈpɪdɪti]",
    "translation": "быстрота"
  },
  {
    "index": 3640,
    "word": "please",
    "transcription": "[pliːz]",
    "translation": "радовать"
  },
  {
    "index": 3641,
    "word": "press",
    "transcription": "[prɛs]",
    "translation": "нажимать"
  },
  {
    "index": 3642,
    "word": "pressure",
    "transcription": "[ˈprɛʃə]",
    "translation": "давление"
  },
  {
    "index": 3643,
    "word": "scream",
    "transcription": "[skriːm]",
    "translation": "кричать, крик, вопль"
  },
  {
    "index": 3644,
    "word": "forehead",
    "transcription": "[ˈfɒrɪd]",
    "translation": "лоб"
  },
  {
    "index": 3645,
    "word": "share",
    "transcription": "[ʃeə]",
    "translation": "делить, доля"
  },
  {
    "index": 3646,
    "word": "raw",
    "transcription": "[rɔː]",
    "translation": "сырой, необработанный"
  },
  {
    "index": 3647,
    "word": "native",
    "transcription": "[ˈneɪtɪv]",
    "translation": "местный, туземный"
  },
  {
    "index": 3648,
    "word": "essence",
    "transcription": "[ˈɛsns]",
    "translation": "сущность"
  },
  {
    "index": 3649,
    "word": "essential",
    "transcription": "[ɪˈsɛnʃəl]",
    "translation": "основной"
  },
  {
    "index": 3650,
    "word": "square",
    "transcription": "[skweə]",
    "translation": "площадь"
  },
  {
    "index": 3651,
    "word": "marine",
    "transcription": "[məˈriːn]",
    "translation": "морской"
  },
  {
    "index": 3652,
    "word": "marine",
    "transcription": "[məˈriːn]",
    "translation": "морпех"
  },
  {
    "index": 3653,
    "word": "consume",
    "transcription": "[kənˈsjuːm]",
    "translation": "потреблять"
  },
  {
    "index": 3654,
    "word": "consumer",
    "transcription": "[kənˈsjuːmə]",
    "translation": "потребитель"
  },
  {
    "index": 3655,
    "word": "consumption",
    "transcription": "[kənˈsʌm(p)ʃən]",
    "translation": "потребление"
  },
  {
    "index": 3656,
    "word": "consumables",
    "transcription": "[kənˈsjuːməblz]",
    "translation": "расходные материалы"
  },
  {
    "index": 3657,
    "word": "count",
    "transcription": "[kaʊnt]",
    "translation": "считать"
  },
  {
    "index": 3658,
    "word": "counter",
    "transcription": "[ˈkaʊntə]",
    "translation": "счётчик"
  },
  {
    "index": 3659,
    "word": "recount",
    "transcription": "[ˌriːˈkaʊnt]",
    "translation": "пересчитывать"
  },
  {
    "index": 3660,
    "word": "roar",
    "transcription": "[rɔː]",
    "translation": "рёв, реветь"
  },
  {
    "index": 3661,
    "word": "rice",
    "transcription": "[raɪs]",
    "translation": "рис"
  },
  {
    "index": 3662,
    "word": "branch",
    "transcription": "[brɑːnʧ]",
    "translation": "ветвь"
  },
  {
    "index": 3663,
    "word": "legacy",
    "transcription": "[ˈlɛgəsi]",
    "translation": "наследие, наследство"
  },
  {
    "index": 3664,
    "word": "ongoing",
    "transcription": "[ˈɒŋˌgəʊɪŋ]",
    "translation": "происходящий, продолжающий"
  },
  {
    "index": 3665,
    "word": "hole",
    "transcription": "[həʊl]",
    "translation": "дыра"
  },
  {
    "index": 3666,
    "word": "keyhole",
    "transcription": "[ˈkiːhəʊl]",
    "translation": "замочная скважина"
  },
  {
    "index": 3667,
    "word": "pothole",
    "transcription": "[ˈpɒthəʊl]",
    "translation": "выбоина"
  },
  {
    "index": 3668,
    "word": "stock up on",
    "transcription": "[stɒkʌpɒn]",
    "translation": "запастись"
  },
  {
    "index": 3669,
    "word": "store up on",
    "transcription": "[stɔːrʌpɒn]",
    "translation": "запастись"
  },
  {
    "index": 3670,
    "word": "kick",
    "transcription": "[kɪk]",
    "translation": "пинать"
  },
  {
    "index": 3671,
    "word": "precise",
    "transcription": "[prɪˈsaɪz]",
    "translation": "точный"
  },
  {
    "index": 3672,
    "word": "precision",
    "transcription": "[prɪˈsɪʒən]",
    "translation": "точность"
  },
  {
    "index": 3673,
    "word": "imprecise",
    "transcription": "[ˌɪmprɪˈsaɪs]",
    "translation": "неточный"
  },
  {
    "index": 3674,
    "word": "imprecision",
    "transcription": "[imprecision]",
    "translation": "неточность"
  },
  {
    "index": 3675,
    "word": "disorder",
    "transcription": "[dɪsˈɔːdə]",
    "translation": "беспорядок"
  },
  {
    "index": 3676,
    "word": "disordered",
    "transcription": "[dɪsˈɔːdəd]",
    "translation": "беспорядочный"
  },
  {
    "index": 3677,
    "word": "blow over",
    "transcription": "[bləʊˈəʊvə]",
    "translation": "пройти, утихнуть"
  },
  {
    "index": 3678,
    "word": "adult",
    "transcription": "[ˈædʌlt]",
    "translation": "взрослый"
  },
  {
    "index": 3679,
    "word": "adulthood",
    "transcription": "[əˈdʌlthʊd]",
    "translation": "взрослый возраст, совершеннолетие"
  },
  {
    "index": 3680,
    "word": "heel",
    "transcription": "[hiːl]",
    "translation": "каблук, пятка"
  },
  {
    "index": 3681,
    "word": "close in on",
    "transcription": "[kləʊsɪnɒn]",
    "translation": "приближаться"
  },
  {
    "index": 3682,
    "word": "counter",
    "transcription": "[ˈkaʊntə]",
    "translation": "стойка, прилавок"
  },
  {
    "index": 3683,
    "word": "countertop",
    "transcription": "[countertop]",
    "translation": "кухонный рабочий стол"
  },
  {
    "index": 3684,
    "word": "jet",
    "transcription": "[ʤɛt]",
    "translation": "струя"
  },
  {
    "index": 3685,
    "word": "cost (cost, cost)",
    "transcription": "[kɒst]",
    "translation": "стоить, стоимость"
  },
  {
    "index": 3686,
    "word": "costly",
    "transcription": "[ˈkɒstli]",
    "translation": "дорогостоящий"
  },
  {
    "index": 3687,
    "word": "order",
    "transcription": "[ˈɔːdə]",
    "translation": "порядок, упорядочивать"
  },
  {
    "index": 3688,
    "word": "reorder",
    "transcription": "[ˌriːˈɔːdə]",
    "translation": "переупорядочить"
  },
  {
    "index": 3689,
    "word": "disorder",
    "transcription": "[dɪsˈɔːdə]",
    "translation": "расстройство"
  },
  {
    "index": 3690,
    "word": "background",
    "transcription": "[ˈbækgraʊnd]",
    "translation": "фон"
  },
  {
    "index": 3691,
    "word": "sink (sank, sunk)",
    "transcription": "[sɪŋk]",
    "translation": "тонуть, топить"
  },
  {
    "index": 3692,
    "word": "pad",
    "transcription": "[pæd]",
    "translation": "панель, клавиатура"
  },
  {
    "index": 3693,
    "word": "clip",
    "transcription": "[klɪp]",
    "translation": "зажим, зажимать"
  },
  {
    "index": 3694,
    "word": "row",
    "transcription": "[rəʊ]",
    "translation": "грести"
  },
  {
    "index": 3695,
    "word": "expand",
    "transcription": "[ɪksˈpænd]",
    "translation": "расширять, распространять"
  },
  {
    "index": 3696,
    "word": "expansion",
    "transcription": "[ɪksˈpænʃən]",
    "translation": "расширение"
  },
  {
    "index": 3697,
    "word": "chain",
    "transcription": "[ʧeɪn]",
    "translation": "цепь"
  },
  {
    "index": 3698,
    "word": "unchained",
    "transcription": "[ʌnˈʧeɪnd]",
    "translation": "раскованный, освобождённый"
  },
  {
    "index": 3699,
    "word": "ambassador",
    "transcription": "[æmˈbæsədə]",
    "translation": "посол"
  },
  {
    "index": 3700,
    "word": "go for",
    "transcription": "[gəʊfɔː]",
    "translation": "быть проданным за"
  },
  {
    "index": 3701,
    "word": "imagine",
    "transcription": "[ɪˈmæʤɪn]",
    "translation": "вообразить"
  },
  {
    "index": 3702,
    "word": "imagination",
    "transcription": "[ɪˌmæʤɪˈneɪʃən]",
    "translation": "воображение"
  },
  {
    "index": 3703,
    "word": "imaginary",
    "transcription": "[ɪˈmæʤɪnəri]",
    "translation": "воображаемый"
  },
  {
    "index": 3704,
    "word": "ghost",
    "transcription": "[gəʊst]",
    "translation": "привидение"
  },
  {
    "index": 3705,
    "word": "ghostly",
    "transcription": "[ˈgəʊstli]",
    "translation": "призрачный"
  },
  {
    "index": 3706,
    "word": "mild",
    "transcription": "[maɪld]",
    "translation": "мягкий"
  },
  {
    "index": 3707,
    "word": "hunger",
    "transcription": "[ˈhʌŋgə]",
    "translation": "голод"
  },
  {
    "index": 3708,
    "word": "hungry",
    "transcription": "[ˈhʌŋgri]",
    "translation": "голодный"
  },
  {
    "index": 3709,
    "word": "check on",
    "transcription": "[ʧɛkɒn]",
    "translation": "проверить, что всё норм"
  },
  {
    "index": 3710,
    "word": "headline",
    "transcription": "[ˈhɛdlaɪn]",
    "translation": "заголовок"
  },
  {
    "index": 3711,
    "word": "heading",
    "transcription": "[ˈhɛdɪŋ]",
    "translation": "заголовок"
  },
  {
    "index": 3712,
    "word": "folk",
    "transcription": "[fəʊk]",
    "translation": "люди, народ"
  },
  {
    "index": 3713,
    "word": "agreement",
    "transcription": "[əˈgriːmənt]",
    "translation": "соглашение, договор"
  },
  {
    "index": 3714,
    "word": "team",
    "transcription": "[tiːm]",
    "translation": "команда, бригада"
  },
  {
    "index": 3715,
    "word": "slave",
    "transcription": "[sleɪv]",
    "translation": "раб"
  },
  {
    "index": 3716,
    "word": "slaver",
    "transcription": "[ˈsleɪvə]",
    "translation": "работорговец"
  },
  {
    "index": 3717,
    "word": "slavery",
    "transcription": "[ˈsleɪvəri]",
    "translation": "рабство"
  },
  {
    "index": 3718,
    "word": "enslave",
    "transcription": "[ɪnˈsleɪv]",
    "translation": "порабощать"
  },
  {
    "index": 3719,
    "word": "giant",
    "transcription": "[ˈʤaɪənt]",
    "translation": "гигантский"
  },
  {
    "index": 3720,
    "word": "motion",
    "transcription": "[ˈməʊʃən]",
    "translation": "движение"
  },
  {
    "index": 3721,
    "word": "motionless",
    "transcription": "[ˈməʊʃənlɪs]",
    "translation": "неподвижный"
  },
  {
    "index": 3722,
    "word": "offence",
    "transcription": "[əˈfɛns]",
    "translation": "обида"
  },
  {
    "index": 3723,
    "word": "offensive",
    "transcription": "[əˈfɛnsɪv]",
    "translation": "обидный"
  },
  {
    "index": 3724,
    "word": "take offence",
    "transcription": "[teɪkəˈfɛns]",
    "translation": "обижаться"
  },
  {
    "index": 3725,
    "word": "bin",
    "transcription": "[bɪn]",
    "translation": "ящик, ведро, ларь"
  },
  {
    "index": 3726,
    "word": "bother",
    "transcription": "[ˈbɒðə]",
    "translation": "беспокоить"
  },
  {
    "index": 3727,
    "word": "seal",
    "transcription": "[siːl]",
    "translation": "печать, запечатывать"
  },
  {
    "index": 3728,
    "word": "seal off",
    "transcription": "[siːlɒf]",
    "translation": "опечатать (здание)"
  },
  {
    "index": 3729,
    "word": "no matter",
    "transcription": "[nəʊˈmætə]",
    "translation": "неважно"
  },
  {
    "index": 3730,
    "word": "downtown",
    "transcription": "[ˈdaʊntaʊn]",
    "translation": "центр города"
  },
  {
    "index": 3731,
    "word": "seem",
    "transcription": "[siːm]",
    "translation": "казаться"
  },
  {
    "index": 3732,
    "word": "seemingly",
    "transcription": "[ˈsiːmɪŋli]",
    "translation": "по-видимому"
  },
  {
    "index": 3733,
    "word": "shout",
    "transcription": "[ʃaʊt]",
    "translation": "кричать"
  },
  {
    "index": 3734,
    "word": "emergency",
    "transcription": "[ɪˈmɜːʤənsi]",
    "translation": "чрезвычайное положение"
  },
  {
    "index": 3735,
    "word": "mall",
    "transcription": "[mɔːl]",
    "translation": "торговый центр"
  },
  {
    "index": 3736,
    "word": "lean against",
    "transcription": "[liːnəˈgɛnst]",
    "translation": "опереться, прислонить"
  },
  {
    "index": 3737,
    "word": "carbon",
    "transcription": "[ˈkɑːbən]",
    "translation": "углерод, уголь, графит"
  },
  {
    "index": 3738,
    "word": "adopt",
    "transcription": "[əˈdɒpt]",
    "translation": "усыновить или взять (животное)"
  },
  {
    "index": 3739,
    "word": "faith",
    "transcription": "[feɪθ]",
    "translation": "вера"
  },
  {
    "index": 3740,
    "word": "vary",
    "transcription": "[ˈveəri]",
    "translation": "меняться, разниться"
  },
  {
    "index": 3741,
    "word": "variable",
    "transcription": "[ˈveərɪəbl]",
    "translation": "переменная"
  },
  {
    "index": 3742,
    "word": "invariable",
    "transcription": "[ɪnˈveərɪəbl]",
    "translation": "неизменный"
  },
  {
    "index": 3743,
    "word": "variation",
    "transcription": "[ˌveərɪˈeɪʃən]",
    "translation": "изменение"
  },
  {
    "index": 3744,
    "word": "plug",
    "transcription": "[plʌg]",
    "translation": "штепсель, включать"
  },
  {
    "index": 3745,
    "word": "gross",
    "transcription": "[grəʊs]",
    "translation": "грубый (во всех смыслах)"
  },
  {
    "index": 3746,
    "word": "disease",
    "transcription": "[dɪˈziːz]",
    "translation": "болезнь"
  },
  {
    "index": 3747,
    "word": "chair",
    "transcription": "[ʧeə]",
    "translation": "стул"
  },
  {
    "index": 3748,
    "word": "wheelchair",
    "transcription": "[ˈwiːlʧeə]",
    "translation": "инвалидная коляска"
  },
  {
    "index": 3749,
    "word": "armchair",
    "transcription": "[ˈɑːmˈʧeə]",
    "translation": "кресло"
  },
  {
    "index": 3750,
    "word": "extra",
    "transcription": "[ˈɛkstrə]",
    "translation": "дополнительный"
  },
  {
    "index": 3751,
    "word": "belief",
    "transcription": "[bɪˈliːf]",
    "translation": "убеждение, вера"
  },
  {
    "index": 3752,
    "word": "disbelief",
    "transcription": "[ˌdɪsbɪˈliːf]",
    "translation": "неверие"
  },
  {
    "index": 3753,
    "word": "desert",
    "transcription": "[ˈdɛzət]",
    "translation": "пустыня"
  },
  {
    "index": 3754,
    "word": "audience",
    "transcription": "[ˈɔːdiəns]",
    "translation": "аудитория (люди)"
  },
  {
    "index": 3755,
    "word": "bear (bore, born)",
    "transcription": "[beə]",
    "translation": "нести, втч перен."
  },
  {
    "index": 3756,
    "word": "unbearable",
    "transcription": "[ʌnˈbeərəbl]",
    "translation": "невыносимый"
  },
  {
    "index": 3757,
    "word": "come into",
    "transcription": "[kʌmˈɪntuː]",
    "translation": "унаследовать"
  },
  {
    "index": 3758,
    "word": "request",
    "transcription": "[rɪˈkwɛst]",
    "translation": "запрос, запрашивать"
  },
  {
    "index": 3759,
    "word": "present",
    "transcription": "[ˈprɛznt]",
    "translation": "присутствующий, в наличии"
  },
  {
    "index": 3760,
    "word": "presence",
    "transcription": "[ˈprɛzns]",
    "translation": "присутствие"
  },
  {
    "index": 3761,
    "word": "absent",
    "transcription": "[ˈæbsənt]",
    "translation": "отсутствующий"
  },
  {
    "index": 3762,
    "word": "absence",
    "transcription": "[ˈæbsəns]",
    "translation": "отсутствие"
  },
  {
    "index": 3763,
    "word": "stand for",
    "transcription": "[stændfɔː]",
    "translation": "обозначать (в сокращении)"
  },
  {
    "index": 3764,
    "word": "steep",
    "transcription": "[stiːp]",
    "translation": "крутой"
  },
  {
    "index": 3765,
    "word": "lip",
    "transcription": "[lɪp]",
    "translation": "губа"
  },
  {
    "index": 3766,
    "word": "fall out",
    "transcription": "[fɔːlaʊt]",
    "translation": "ссориться"
  },
  {
    "index": 3767,
    "word": "hangover",
    "transcription": "[ˈhæŋˌəʊvə]",
    "translation": "похмелье"
  },
  {
    "index": 3768,
    "word": "permanent",
    "transcription": "[ˈpɜːmənənt]",
    "translation": "постоянный"
  },
  {
    "index": 3769,
    "word": "permanence",
    "transcription": "[ˈpɜːmənəns]",
    "translation": "неизменность"
  },
  {
    "index": 3770,
    "word": "letter",
    "transcription": "[ˈlɛtə]",
    "translation": "письмо"
  },
  {
    "index": 3771,
    "word": "stay",
    "transcription": "[steɪ]",
    "translation": "остановиться пожить"
  },
  {
    "index": 3772,
    "word": "quit (quit, quit)",
    "transcription": "[kwɪt]",
    "translation": "бросить, покинуть, перестать"
  },
  {
    "index": 3773,
    "word": "savings",
    "transcription": "[ˈseɪvɪŋz]",
    "translation": "сбережения"
  },
  {
    "index": 3774,
    "word": "set smb up",
    "transcription": "[sɛtsmbʌp]",
    "translation": "подставить"
  },
  {
    "index": 3775,
    "word": "negotiate",
    "transcription": "[nɪˈgəʊʃɪeɪt]",
    "translation": "вести переговоры"
  },
  {
    "index": 3776,
    "word": "negotiation",
    "transcription": "[nɪˌgəʊʃɪˈeɪʃən]",
    "translation": "переговоры"
  },
  {
    "index": 3777,
    "word": "corrupt",
    "transcription": "[kəˈrʌpt]",
    "translation": "развращать, разлагать"
  },
  {
    "index": 3778,
    "word": "corruption",
    "transcription": "[kəˈrʌpʃən]",
    "translation": "коррупция"
  },
  {
    "index": 3779,
    "word": "corruptness",
    "transcription": "[kəˈrʌptnəs]",
    "translation": "коррумпированность"
  },
  {
    "index": 3780,
    "word": "reward",
    "transcription": "[rɪˈwɔːd]",
    "translation": "награда, награждать"
  },
  {
    "index": 3781,
    "word": "sane",
    "transcription": "[seɪn]",
    "translation": "здравый, вменяемый"
  },
  {
    "index": 3782,
    "word": "sanity",
    "transcription": "[ˈsænɪti]",
    "translation": "вменяемость"
  },
  {
    "index": 3783,
    "word": "insane",
    "transcription": "[ɪnˈseɪn]",
    "translation": "ненормальный"
  },
  {
    "index": 3784,
    "word": "insanity",
    "transcription": "[ɪnˈsænɪti]",
    "translation": "невменяемость"
  },
  {
    "index": 3785,
    "word": "die down",
    "transcription": "[daɪdaʊn]",
    "translation": "утихнуть"
  },
  {
    "index": 3786,
    "word": "make of",
    "transcription": "[meɪkɒv]",
    "translation": "извлечь, получить"
  },
  {
    "index": 3787,
    "word": "haul",
    "transcription": "[hɔːl]",
    "translation": "тащить, тянуть, буксировать"
  },
  {
    "index": 3788,
    "word": "stairs",
    "transcription": "[steəz]",
    "translation": "ступеньки, лестница"
  },
  {
    "index": 3789,
    "word": "staircase",
    "transcription": "[ˈsteəkeɪs]",
    "translation": "лестница"
  },
  {
    "index": 3790,
    "word": "stairway",
    "transcription": "[ˈsteəweɪ]",
    "translation": "лестница"
  },
  {
    "index": 3791,
    "word": "virtue",
    "transcription": "[ˈvɜːtjuː]",
    "translation": "достоинство, добродетель"
  },
  {
    "index": 3792,
    "word": "virtuous",
    "transcription": "[ˈvɜːtjʊəs]",
    "translation": "добродетельный"
  },
  {
    "index": 3793,
    "word": "bore",
    "transcription": "[bɔː]",
    "translation": "надоедать"
  },
  {
    "index": 3794,
    "word": "boring",
    "transcription": "[ˈbɔːrɪŋ]",
    "translation": "скучный"
  },
  {
    "index": 3795,
    "word": "boredom",
    "transcription": "[ˈbɔːdəm]",
    "translation": "скука"
  },
  {
    "index": 3796,
    "word": "bore",
    "transcription": "[bɔː]",
    "translation": "зануда"
  },
  {
    "index": 3797,
    "word": "nuts",
    "transcription": "[nʌts]",
    "translation": "чокнутый"
  },
  {
    "index": 3798,
    "word": "go nuts",
    "transcription": "[gəʊnʌts]",
    "translation": "сходить с ума"
  },
  {
    "index": 3799,
    "word": "host",
    "transcription": "[həʊst]",
    "translation": "хозяин, быть хозяином"
  },
  {
    "index": 3800,
    "word": "cast (cast, cast)",
    "transcription": "[kɑːst]",
    "translation": "отливать"
  },
  {
    "index": 3801,
    "word": "try on",
    "transcription": "[traɪɒn]",
    "translation": "примерить"
  },
  {
    "index": 3802,
    "word": "concept",
    "transcription": "[ˈkɒnsɛpt]",
    "translation": "понятие, идея"
  },
  {
    "index": 3803,
    "word": "conception",
    "transcription": "[kənˈsɛpʃən]",
    "translation": "концепция"
  },
  {
    "index": 3804,
    "word": "misconception",
    "transcription": "[ˌmɪskənˈsɛpʃən]",
    "translation": "неправильное представление"
  },
  {
    "index": 3805,
    "word": "conceptual",
    "transcription": "[kənˈsɛptjʊəl]",
    "translation": "концептуальный"
  },
  {
    "index": 3806,
    "word": "abuse",
    "transcription": "[əˈbjuːs]",
    "translation": "насилие, домогательство"
  },
  {
    "index": 3807,
    "word": "reduce",
    "transcription": "[rɪˈdjuːs]",
    "translation": "снижать"
  },
  {
    "index": 3808,
    "word": "reduction",
    "transcription": "[rɪˈdʌkʃən]",
    "translation": "сокращение"
  },
  {
    "index": 3809,
    "word": "tend",
    "transcription": "[tɛnd]",
    "translation": "иметь склонность"
  },
  {
    "index": 3810,
    "word": "smell",
    "transcription": "[smɛl]",
    "translation": "запах, пахнуть, нюхать"
  },
  {
    "index": 3811,
    "word": "smelling",
    "transcription": "[ˈsmɛlɪŋ]",
    "translation": ""
  },
  {
    "index": 3812,
    "word": "pet",
    "transcription": "[pɛt]",
    "translation": "домашний питомец"
  },
  {
    "index": 3813,
    "word": "terror",
    "transcription": "[ˈtɛrə]",
    "translation": "ужас"
  },
  {
    "index": 3814,
    "word": "terrorize",
    "transcription": "[ˈtɛrəraɪz]",
    "translation": "держать в ужасе"
  },
  {
    "index": 3815,
    "word": "habitat",
    "transcription": "[ˈhæbɪtæt]",
    "translation": "среда, место обитания"
  },
  {
    "index": 3816,
    "word": "receive",
    "transcription": "[rɪˈsiːv]",
    "translation": "получить"
  },
  {
    "index": 3817,
    "word": "prove",
    "transcription": "[pruːv]",
    "translation": "доказывать"
  },
  {
    "index": 3818,
    "word": "introduce",
    "transcription": "[ˌɪntrəˈdjuːs]",
    "translation": "представить, познакомить"
  },
  {
    "index": 3819,
    "word": "introduce oneself",
    "transcription": "[ˌɪntrəˈdjuːswʌnˈsɛlf]",
    "translation": "представиться"
  },
  {
    "index": 3820,
    "word": "introduction",
    "transcription": "[ˌɪntrəˈdʌkʃən]",
    "translation": "введение"
  },
  {
    "index": 3821,
    "word": "introductory",
    "transcription": "[ˌɪntrəˈdʌktəri]",
    "translation": "вводный"
  },
  {
    "index": 3822,
    "word": "defend",
    "transcription": "[dɪˈfɛnd]",
    "translation": "защитить"
  },
  {
    "index": 3823,
    "word": "defender",
    "transcription": "[dɪˈfɛndə]",
    "translation": "защитник"
  },
  {
    "index": 3824,
    "word": "defendant",
    "transcription": "[dɪˈfɛndənt]",
    "translation": "ответчик"
  },
  {
    "index": 3825,
    "word": "stretch",
    "transcription": "[strɛʧ]",
    "translation": "тянуть, вытягивать"
  },
  {
    "index": 3826,
    "word": "stretchy",
    "transcription": "[stretchy]",
    "translation": "тянущийся"
  },
  {
    "index": 3827,
    "word": "back up",
    "transcription": "[bækʌp]",
    "translation": "поддержать, прикрыть"
  },
  {
    "index": 3828,
    "word": "tough",
    "transcription": "[tʌf]",
    "translation": "жёсткий, крепкий, тяжёлый"
  },
  {
    "index": 3829,
    "word": "toughness",
    "transcription": "[ˈtʌfnəs]",
    "translation": "прочность"
  },
  {
    "index": 3830,
    "word": "doorway",
    "transcription": "[ˈdɔːweɪ]",
    "translation": "дверной проем"
  },
  {
    "index": 3831,
    "word": "thin",
    "transcription": "[θɪn]",
    "translation": "тонкий, худой"
  },
  {
    "index": 3832,
    "word": "order",
    "transcription": "[ˈɔːdə]",
    "translation": "заказ, заказывать"
  },
  {
    "index": 3833,
    "word": "on foot",
    "transcription": "[ɒnfʊt]",
    "translation": "пешком"
  },
  {
    "index": 3834,
    "word": "abroad",
    "transcription": "[əˈbrɔːd]",
    "translation": "за границу"
  },
  {
    "index": 3835,
    "word": "secure",
    "transcription": "[sɪˈkjʊə]",
    "translation": "безопасный, надёжный"
  },
  {
    "index": 3836,
    "word": "insecure",
    "transcription": "[ˌɪnsɪˈkjʊə]",
    "translation": "небезопасный"
  },
  {
    "index": 3837,
    "word": "security",
    "transcription": "[sɪˈkjʊərɪti]",
    "translation": "безопасность"
  },
  {
    "index": 3838,
    "word": "entitle",
    "transcription": "[ɪnˈtaɪtl]",
    "translation": "давать право (по заслугам)"
  },
  {
    "index": 3839,
    "word": "floor",
    "transcription": "[flɔː]",
    "translation": "этаж"
  },
  {
    "index": 3840,
    "word": "surprise",
    "transcription": "[səˈpraɪz]",
    "translation": "удивлять, удивление"
  },
  {
    "index": 3841,
    "word": "surprisingly",
    "transcription": "[səˈpraɪzɪŋli]",
    "translation": "удивительно"
  },
  {
    "index": 3842,
    "word": "sex",
    "transcription": "[sɛks]",
    "translation": "пол"
  },
  {
    "index": 3843,
    "word": "sexual",
    "transcription": "[ˈsɛksjʊəl]",
    "translation": "половой"
  },
  {
    "index": 3844,
    "word": "get about",
    "transcription": "[gɛtəˈbaʊt]",
    "translation": "передвигаться (на чём-то)"
  },
  {
    "index": 3845,
    "word": "get around",
    "transcription": "[gɛtəˈraʊnd]",
    "translation": "передвигаться"
  },
  {
    "index": 3846,
    "word": "exchange",
    "transcription": "[ɪksˈʧeɪnʤ]",
    "translation": "обмен"
  },
  {
    "index": 3847,
    "word": "interchange",
    "transcription": "[ˌɪntə(ː)ˈʧeɪnʤ]",
    "translation": "взаимообмен"
  },
  {
    "index": 3848,
    "word": "leather",
    "transcription": "[ˈlɛðə]",
    "translation": "кожаный, кожа"
  },
  {
    "index": 3849,
    "word": "basement",
    "transcription": "[ˈbeɪsmənt]",
    "translation": "подвал"
  },
  {
    "index": 3850,
    "word": "instance",
    "transcription": "[ˈɪnstəns]",
    "translation": "пример, экземпляр"
  },
  {
    "index": 3851,
    "word": "for instance",
    "transcription": "[fɔːrˈɪnstəns]",
    "translation": "например"
  },
  {
    "index": 3852,
    "word": "sheep (pl:sheep)",
    "transcription": "[ʃiːp]",
    "translation": "овца"
  },
  {
    "index": 3853,
    "word": "sufficient",
    "transcription": "[səˈfɪʃənt]",
    "translation": "достаточный"
  },
  {
    "index": 3854,
    "word": "insufficient",
    "transcription": "[ˌɪnsəˈfɪʃənt]",
    "translation": "недостаточный"
  },
  {
    "index": 3855,
    "word": "sufficiency",
    "transcription": "[səˈfɪʃənsi]",
    "translation": "достаточность"
  },
  {
    "index": 3856,
    "word": "insufficiency",
    "transcription": "[ˌɪnsəˈfɪʃənsi]",
    "translation": "недостаточность"
  },
  {
    "index": 3857,
    "word": "vulnerable",
    "transcription": "[ˈvʌlnərəbl]",
    "translation": "уязвимый, чувствительный"
  },
  {
    "index": 3858,
    "word": "invulnerable",
    "transcription": "[ɪnˈvʌlnərəbl]",
    "translation": "неуязвимый"
  },
  {
    "index": 3859,
    "word": "vulnerability",
    "transcription": "[ˌvʌlnərəˈbɪlɪti]",
    "translation": "уязвимость"
  },
  {
    "index": 3860,
    "word": "invulnerability",
    "transcription": "[ɪnˌvʌlnərəˈbɪlɪti]",
    "translation": "неуязвимость"
  },
  {
    "index": 3861,
    "word": "solution",
    "transcription": "[səˈluːʃən]",
    "translation": "решение, ответ"
  },
  {
    "index": 3862,
    "word": "sail",
    "transcription": "[seɪl]",
    "translation": "парус, плыть (о судне)"
  },
  {
    "index": 3863,
    "word": "sailor",
    "transcription": "[ˈseɪlə]",
    "translation": "моряк"
  },
  {
    "index": 3864,
    "word": "change",
    "transcription": "[ʧeɪnʤ]",
    "translation": "сдача, мелочь"
  },
  {
    "index": 3865,
    "word": "stick (stuck, stuck)",
    "transcription": "[stɪk]",
    "translation": "приклеить"
  },
  {
    "index": 3866,
    "word": "sticky",
    "transcription": "[ˈstɪki]",
    "translation": "липкий"
  },
  {
    "index": 3867,
    "word": "sticker",
    "transcription": "[ˈstɪkə]",
    "translation": "наклейка"
  },
  {
    "index": 3868,
    "word": "stickiness",
    "transcription": "[ˈstɪkɪnəs]",
    "translation": "липкость"
  },
  {
    "index": 3869,
    "word": "keep off",
    "transcription": "[kiːpɒf]",
    "translation": "избегать, не трогать"
  },
  {
    "index": 3870,
    "word": "stay off",
    "transcription": "[steɪɒf]",
    "translation": "держаться подальше"
  },
  {
    "index": 3871,
    "word": "require",
    "transcription": "[rɪˈkwaɪə]",
    "translation": "требовать"
  },
  {
    "index": 3872,
    "word": "requirement",
    "transcription": "[rɪˈkwaɪəmənt]",
    "translation": "требование"
  },
  {
    "index": 3873,
    "word": "invent",
    "transcription": "[ɪnˈvɛnt]",
    "translation": "изобретать"
  },
  {
    "index": 3874,
    "word": "invention",
    "transcription": "[ɪnˈvɛnʃən]",
    "translation": "изобретение"
  },
  {
    "index": 3875,
    "word": "inventive",
    "transcription": "[ɪnˈvɛntɪv]",
    "translation": "изобретательный"
  },
  {
    "index": 3876,
    "word": "inventiveness",
    "transcription": "[ɪnˈvɛntɪvnəs]",
    "translation": "изобретательность"
  },
  {
    "index": 3877,
    "word": "happen",
    "transcription": "[ˈhæpən]",
    "translation": "случиться, происходить"
  },
  {
    "index": 3878,
    "word": "mishap",
    "transcription": "[ˈmɪshæp]",
    "translation": "несчастье"
  },
  {
    "index": 3879,
    "word": "primary",
    "transcription": "[ˈpraɪməri]",
    "translation": "первичный, главный"
  },
  {
    "index": 3880,
    "word": "yard",
    "transcription": "[jɑːd]",
    "translation": "двор"
  },
  {
    "index": 3881,
    "word": "backyard",
    "transcription": "[ˌbækˈjɑːd]",
    "translation": "задний двор"
  },
  {
    "index": 3882,
    "word": "direct",
    "transcription": "[dɪˈrɛkt]",
    "translation": "направлять"
  },
  {
    "index": 3883,
    "word": "direction",
    "transcription": "[dɪˈrɛkʃən]",
    "translation": "направление"
  },
  {
    "index": 3884,
    "word": "misdirect",
    "transcription": "[ˌmɪsdɪˈrɛkt]",
    "translation": "неправильно направлять"
  },
  {
    "index": 3885,
    "word": "inflate",
    "transcription": "[ɪnˈfleɪt]",
    "translation": "надувать"
  },
  {
    "index": 3886,
    "word": "inflation",
    "transcription": "[ɪnˈfleɪʃən]",
    "translation": "надувание"
  },
  {
    "index": 3887,
    "word": "inflatable",
    "transcription": "[ɪnˈfleɪtəbl]",
    "translation": "надувной"
  },
  {
    "index": 3888,
    "word": "deflate",
    "transcription": "[dɪˈfleɪt]",
    "translation": "выкачивать"
  },
  {
    "index": 3889,
    "word": "moron",
    "transcription": "[ˈmɔːrɒn]",
    "translation": "дебил"
  },
  {
    "index": 3890,
    "word": "fare",
    "transcription": "[feə]",
    "translation": "плата за проезд"
  },
  {
    "index": 3891,
    "word": "virtual",
    "transcription": "[ˈvɜːtjʊəl]",
    "translation": "действительный, фактический"
  },
  {
    "index": 3892,
    "word": "virtually",
    "transcription": "[ˈvɜːtjʊəli]",
    "translation": "фактически"
  },
  {
    "index": 3893,
    "word": "erect",
    "transcription": "[ɪˈrɛkt]",
    "translation": "воздвигнуть, соорудить"
  },
  {
    "index": 3894,
    "word": "erection",
    "transcription": "[ɪˈrɛkʃən]",
    "translation": "сооружение, монтаж"
  },
  {
    "index": 3895,
    "word": "about",
    "transcription": "[əˈbaʊt]",
    "translation": "примерно"
  },
  {
    "index": 3896,
    "word": "farm",
    "transcription": "[fɑːm]",
    "translation": "ферма"
  },
  {
    "index": 3897,
    "word": "farmer",
    "transcription": "[ˈfɑːmə]",
    "translation": "фермер"
  },
  {
    "index": 3898,
    "word": "farmhouse",
    "transcription": "[ˈfɑːmhaʊs]",
    "translation": "дом на ферме"
  },
  {
    "index": 3899,
    "word": "situate",
    "transcription": "[ˈsɪtjʊˌeɪt]",
    "translation": "располагать"
  },
  {
    "index": 3900,
    "word": "situation",
    "transcription": "[ˌsɪtjʊˈeɪʃən]",
    "translation": "положение"
  },
  {
    "index": 3901,
    "word": "sentiment",
    "transcription": "[ˈsɛntɪmənt]",
    "translation": "настроение, чувство"
  },
  {
    "index": 3902,
    "word": "sentimental",
    "transcription": "[ˌsɛntɪˈmɛntl]",
    "translation": "сентиментальный"
  },
  {
    "index": 3903,
    "word": "prevail",
    "transcription": "[prɪˈveɪl]",
    "translation": "преобладать, возобладать"
  },
  {
    "index": 3904,
    "word": "prevalent",
    "transcription": "[ˈprɛvələnt]",
    "translation": "преобладающий"
  },
  {
    "index": 3905,
    "word": "glow",
    "transcription": "[gləʊ]",
    "translation": "сияние, свечение"
  },
  {
    "index": 3906,
    "word": "stage",
    "transcription": "[steɪʤ]",
    "translation": "стадия, ступень"
  },
  {
    "index": 3907,
    "word": "accurate",
    "transcription": "[ˈækjʊrɪt]",
    "translation": "точный"
  },
  {
    "index": 3908,
    "word": "accuracy",
    "transcription": "[ˈækjʊrəsi]",
    "translation": "точность"
  },
  {
    "index": 3909,
    "word": "inaccurate",
    "transcription": "[ɪnˈækjʊrɪt]",
    "translation": "неточный"
  },
  {
    "index": 3910,
    "word": "inaccuracy",
    "transcription": "[ɪnˈækjʊrəsi]",
    "translation": "неточность"
  },
  {
    "index": 3911,
    "word": "drop",
    "transcription": "[drɒp]",
    "translation": "падать, ронять"
  },
  {
    "index": 3912,
    "word": "fertile",
    "transcription": "[ˈfɜːtaɪl]",
    "translation": "плодородный"
  },
  {
    "index": 3913,
    "word": "infertile",
    "transcription": "[ɪnˈfɜːtaɪl]",
    "translation": "бесплодный"
  },
  {
    "index": 3914,
    "word": "fertility",
    "transcription": "[fə(ː)ˈtɪlɪti]",
    "translation": "плодородность, плодовитость"
  },
  {
    "index": 3915,
    "word": "infertility",
    "transcription": "[ˌɪnfɜːˈtɪlɪti]",
    "translation": "бесплодие"
  },
  {
    "index": 3916,
    "word": "fertilize",
    "transcription": "[ˈfɜːtɪlaɪz]",
    "translation": "удобрять"
  },
  {
    "index": 3917,
    "word": "fertilizer",
    "transcription": "[ˈfɜːtɪlaɪzə]",
    "translation": "удобрение"
  },
  {
    "index": 3918,
    "word": "indicate",
    "transcription": "[ˈɪndɪkeɪt]",
    "translation": "указывать, означать"
  },
  {
    "index": 3919,
    "word": "indication",
    "transcription": "[ˌɪndɪˈkeɪʃən]",
    "translation": "признак"
  },
  {
    "index": 3920,
    "word": "elect",
    "transcription": "[ɪˈlɛkt]",
    "translation": "избирать"
  },
  {
    "index": 3921,
    "word": "elections",
    "transcription": "[ɪˈlɛkʃənz]",
    "translation": "выборы"
  },
  {
    "index": 3922,
    "word": "evidence",
    "transcription": "[ˈɛvɪdəns]",
    "translation": "доказательство (неисчисл.)"
  },
  {
    "index": 3923,
    "word": "evidential",
    "transcription": "[ˌɛvɪˈdɛnʃəl]",
    "translation": "доказательный"
  },
  {
    "index": 3924,
    "word": "be over",
    "transcription": "[biːˈəʊvə]",
    "translation": "закончиться"
  },
  {
    "index": 3925,
    "word": "legitimate",
    "transcription": "[lɪˈʤɪtɪmɪt]",
    "translation": "законный, обоснованный"
  },
  {
    "index": 3926,
    "word": "illegitimate",
    "transcription": "[ˌɪlɪˈʤɪtɪmɪt]",
    "translation": "незаконный"
  },
  {
    "index": 3927,
    "word": "legitimacy",
    "transcription": "[lɪˈʤɪtɪməsi]",
    "translation": "законность"
  },
  {
    "index": 3928,
    "word": "regular",
    "transcription": "[ˈrɛgjʊlə]",
    "translation": "обычный"
  },
  {
    "index": 3929,
    "word": "at once",
    "transcription": "[ætwʌns]",
    "translation": "сразу"
  },
  {
    "index": 3930,
    "word": "cheat on",
    "transcription": "[ʧiːtɒn]",
    "translation": "изменять"
  },
  {
    "index": 3931,
    "word": "excess",
    "transcription": "[ɪkˈsɛs]",
    "translation": "избыток, чрезмерный"
  },
  {
    "index": 3932,
    "word": "excessive",
    "transcription": "[ɪkˈsɛsɪv]",
    "translation": "чрезмерный"
  },
  {
    "index": 3933,
    "word": "define",
    "transcription": "[dɪˈfaɪn]",
    "translation": "определять"
  },
  {
    "index": 3934,
    "word": "definition",
    "transcription": "[ˌdɛfɪˈnɪʃən]",
    "translation": "определение"
  },
  {
    "index": 3935,
    "word": "mud",
    "transcription": "[mʌd]",
    "translation": "грязь"
  },
  {
    "index": 3936,
    "word": "muddy",
    "transcription": "[ˈmʌdi]",
    "translation": "мутный"
  },
  {
    "index": 3937,
    "word": "separate",
    "transcription": "[ˈsɛprɪt]",
    "translation": "отдельный, отделять"
  },
  {
    "index": 3938,
    "word": "separation",
    "transcription": "[ˌsɛpəˈreɪʃən]",
    "translation": "отделение"
  },
  {
    "index": 3939,
    "word": "inseparable",
    "transcription": "[ɪnˈsɛpərəbl]",
    "translation": "неотделимый"
  },
  {
    "index": 3940,
    "word": "loose",
    "transcription": "[luːs]",
    "translation": "свободный, болтающийся"
  },
  {
    "index": 3941,
    "word": "loosen",
    "transcription": "[ˈluːsn]",
    "translation": "ослаблять, распускать, рыхлить"
  },
  {
    "index": 3942,
    "word": "resist",
    "transcription": "[rɪˈzɪst]",
    "translation": "сопротивляться"
  },
  {
    "index": 3943,
    "word": "irresistible",
    "transcription": "[ˌɪrɪˈzɪstəbl]",
    "translation": "непреодолимый"
  },
  {
    "index": 3944,
    "word": "pot",
    "transcription": "[pɒt]",
    "translation": "горшок, кастрюля"
  },
  {
    "index": 3945,
    "word": "potter",
    "transcription": "[ˈpɒtə]",
    "translation": "гончар"
  },
  {
    "index": 3946,
    "word": "pottery",
    "transcription": "[ˈpɒtəri]",
    "translation": "керамика"
  },
  {
    "index": 3947,
    "word": "teapot",
    "transcription": "[ˈtiːˌpɒt]",
    "translation": "заварочный чайник"
  },
  {
    "index": 3948,
    "word": "cancer",
    "transcription": "[ˈkænsə]",
    "translation": "рак (болезнь)"
  },
  {
    "index": 3949,
    "word": "empty",
    "transcription": "[ˈɛmpti]",
    "translation": "пустой, опустошать"
  },
  {
    "index": 3950,
    "word": "emptiness",
    "transcription": "[ˈɛmptɪnɪs]",
    "translation": "пустота"
  },
  {
    "index": 3951,
    "word": "sleep around",
    "transcription": "[sliːpəˈraʊnd]",
    "translation": "трахаться, блудить"
  },
  {
    "index": 3952,
    "word": "fuck around",
    "transcription": "[fʌkəˈraʊnd]",
    "translation": "блядовать"
  },
  {
    "index": 3953,
    "word": "apartment",
    "transcription": "[əˈpɑːtmənt]",
    "translation": "квартира"
  },
  {
    "index": 3954,
    "word": "trunk",
    "transcription": "[trʌŋk]",
    "translation": "чемодан, сундук"
  },
  {
    "index": 3955,
    "word": "confess",
    "transcription": "[kənˈfɛs]",
    "translation": "признаваться"
  },
  {
    "index": 3956,
    "word": "confession",
    "transcription": "[kənˈfɛʃən]",
    "translation": "признание"
  },
  {
    "index": 3957,
    "word": "hat",
    "transcription": "[hæt]",
    "translation": "шляпа"
  },
  {
    "index": 3958,
    "word": "pole",
    "transcription": "[pəʊl]",
    "translation": "шест, столб"
  },
  {
    "index": 3959,
    "word": "look for",
    "transcription": "[lʊkfɔː]",
    "translation": "искать"
  },
  {
    "index": 3960,
    "word": "physician",
    "transcription": "[fɪˈzɪʃən]",
    "translation": "врач"
  },
  {
    "index": 3961,
    "word": "influence",
    "transcription": "[ˈɪnflʊəns]",
    "translation": "влиять, влияние"
  },
  {
    "index": 3962,
    "word": "influential",
    "transcription": "[ˌɪnflʊˈɛnʃəl]",
    "translation": "влиятельный"
  },
  {
    "index": 3963,
    "word": "punch",
    "transcription": "[pʌnʧ]",
    "translation": "удар (кулаком), бить"
  },
  {
    "index": 3964,
    "word": "praise",
    "transcription": "[preɪz]",
    "translation": "хвалить, похвала"
  },
  {
    "index": 3965,
    "word": "introduce",
    "transcription": "[ˌɪntrəˈdjuːs]",
    "translation": "ввести (в употребление)"
  },
  {
    "index": 3966,
    "word": "blank",
    "transcription": "[blæŋk]",
    "translation": "пустой, чистый"
  },
  {
    "index": 3967,
    "word": "heritage",
    "transcription": "[ˈhɛrɪtɪʤ]",
    "translation": "наследие"
  },
  {
    "index": 3968,
    "word": "get over",
    "transcription": "[gɛtˈəʊvə]",
    "translation": "выздороветь, отойти"
  },
  {
    "index": 3969,
    "word": "light up",
    "transcription": "[laɪtʌp]",
    "translation": "осветить или загореться"
  },
  {
    "index": 3970,
    "word": "lighten",
    "transcription": "[ˈlaɪtn]",
    "translation": "светлеть, освещать"
  },
  {
    "index": 3971,
    "word": "serve",
    "transcription": "[sɜːv]",
    "translation": "подавать (блюдо)"
  },
  {
    "index": 3972,
    "word": "data",
    "transcription": "[ˈdeɪtə]",
    "translation": "данные"
  },
  {
    "index": 3973,
    "word": "reluctant",
    "transcription": "[rɪˈlʌktənt]",
    "translation": "неохотный, нежелающий"
  },
  {
    "index": 3974,
    "word": "reluctance",
    "transcription": "[rɪˈlʌktəns]",
    "translation": "нежелание"
  },
  {
    "index": 3975,
    "word": "pin",
    "transcription": "[pɪn]",
    "translation": "булавка, штырь, прикалывать"
  },
  {
    "index": 3976,
    "word": "claim",
    "transcription": "[kleɪm]",
    "translation": "утверждать, претендовать"
  },
  {
    "index": 3977,
    "word": "for the sake of",
    "transcription": "[fɔːðəseɪkɒv]",
    "translation": "ради"
  },
  {
    "index": 3978,
    "word": "prosper",
    "transcription": "[ˈprɒspə]",
    "translation": "процветать, преуспевать"
  },
  {
    "index": 3979,
    "word": "prosperous",
    "transcription": "[ˈprɒspərəs]",
    "translation": "процветающий"
  },
  {
    "index": 3980,
    "word": "prosperity",
    "transcription": "[prɒsˈpɛrɪti]",
    "translation": "процветание"
  },
  {
    "index": 3981,
    "word": "come up",
    "transcription": "[kʌmʌp]",
    "translation": "произойти или появиться"
  },
  {
    "index": 3982,
    "word": "draft",
    "transcription": "[drɑːft]",
    "translation": "проект, черновик, набросок"
  },
  {
    "index": 3983,
    "word": "reinforce",
    "transcription": "[ˌriːɪnˈfɔːs]",
    "translation": "усилить, укрепить"
  },
  {
    "index": 3984,
    "word": "reinforcement",
    "transcription": "[ˌriːɪnˈfɔːsmənt]",
    "translation": "укрепление"
  },
  {
    "index": 3985,
    "word": "exhaust",
    "transcription": "[ɪgˈzɔːst]",
    "translation": "выхлопные газы"
  },
  {
    "index": 3986,
    "word": "precede",
    "transcription": "[pri(ː)ˈsiːd]",
    "translation": "предшествовать"
  },
  {
    "index": 3987,
    "word": "precedent",
    "transcription": "[ˈprɛsɪdənt]",
    "translation": "предшествующий"
  },
  {
    "index": 3988,
    "word": "trap",
    "transcription": "[træp]",
    "translation": "ловушка, ловить"
  },
  {
    "index": 3989,
    "word": "sophisticated",
    "transcription": "[səˈfɪstɪkeɪtɪd]",
    "translation": "сложный, изощрённый"
  },
  {
    "index": 3990,
    "word": "sophistication",
    "transcription": "[səˌfɪstɪˈkeɪʃən]",
    "translation": "сложность, утонченность"
  },
  {
    "index": 3991,
    "word": "retain",
    "transcription": "[rɪˈteɪn]",
    "translation": "сохранять, удерживать"
  },
  {
    "index": 3992,
    "word": "convenient",
    "transcription": "[kənˈviːniənt]",
    "translation": "удобный"
  },
  {
    "index": 3993,
    "word": "inconvenient",
    "transcription": "[ˌɪnkənˈviːniənt]",
    "translation": "неудобный"
  },
  {
    "index": 3994,
    "word": "convenience",
    "transcription": "[kənˈviːniəns]",
    "translation": "удобство"
  },
  {
    "index": 3995,
    "word": "inconvenience",
    "transcription": "[ˌɪnkənˈviːniəns]",
    "translation": "неудобство"
  },
  {
    "index": 3996,
    "word": "attach",
    "transcription": "[əˈtæʧ]",
    "translation": "прикрепить, привязать"
  },
  {
    "index": 3997,
    "word": "attachment",
    "transcription": "[əˈtæʧmənt]",
    "translation": "прикрепление, вложение (в письмо)"
  },
  {
    "index": 3998,
    "word": "rotate",
    "transcription": "[rəʊˈteɪt]",
    "translation": "вращать"
  },
  {
    "index": 3999,
    "word": "rotation",
    "transcription": "[rəʊˈteɪʃən]",
    "translation": "вращение"
  },
  {
    "index": 4000,
    "word": "tape",
    "transcription": "[teɪp]",
    "translation": "лента, записывать на ленту"
  },
  {
    "index": 4001,
    "word": "shirt",
    "transcription": "[ʃɜːt]",
    "translation": "рубашка"
  },
  {
    "index": 4002,
    "word": "t-shirt (tee)",
    "transcription": "[ˈtiːʃɜːt]",
    "translation": "футболка"
  },
  {
    "index": 4003,
    "word": "sweatshirt",
    "transcription": "[ˈswɛtʃɜːt]",
    "translation": "свитшот"
  },
  {
    "index": 4004,
    "word": "shirtless",
    "transcription": "[ˈʃɜːtləs]",
    "translation": "без майки"
  },
  {
    "index": 4005,
    "word": "turkey",
    "transcription": "[ˈtɜːki]",
    "translation": "индейка, индюк"
  },
  {
    "index": 4006,
    "word": "leak",
    "transcription": "[liːk]",
    "translation": "утечка, просачиваться, протекать"
  },
  {
    "index": 4007,
    "word": "leakage",
    "transcription": "[ˈliːkɪʤ]",
    "translation": "утечка"
  },
  {
    "index": 4008,
    "word": "leaky",
    "transcription": "[ˈliːki]",
    "translation": "протекающий, неплотный"
  },
  {
    "index": 4009,
    "word": "butter",
    "transcription": "[ˈbʌtə]",
    "translation": "масло сливочное"
  },
  {
    "index": 4010,
    "word": "horizon",
    "transcription": "[həˈraɪzn]",
    "translation": "горизонт, кругозор"
  },
  {
    "index": 4011,
    "word": "level",
    "transcription": "[ˈlɛvl]",
    "translation": "уровень"
  },
  {
    "index": 4012,
    "word": "roof",
    "transcription": "[ruːf]",
    "translation": "крыша"
  },
  {
    "index": 4013,
    "word": "rooftop",
    "transcription": "[ˈruːfˌtɒp]",
    "translation": "кровля"
  },
  {
    "index": 4014,
    "word": "found",
    "transcription": "[faʊnd]",
    "translation": "основать, учредить"
  },
  {
    "index": 4015,
    "word": "foundation",
    "transcription": "[faʊnˈdeɪʃən]",
    "translation": "основание"
  },
  {
    "index": 4016,
    "word": "at odds with",
    "transcription": "[ætɒdzwɪð]",
    "translation": "в противоречии, в конфликте"
  },
  {
    "index": 4017,
    "word": "distract",
    "transcription": "[dɪsˈtrækt]",
    "translation": "отвлекать"
  },
  {
    "index": 4018,
    "word": "distraction",
    "transcription": "[dɪsˈtrækʃən]",
    "translation": "отвлечение"
  },
  {
    "index": 4019,
    "word": "determined",
    "transcription": "[dɪˈtɜːmɪnd]",
    "translation": "решительный"
  },
  {
    "index": 4020,
    "word": "undetermined",
    "transcription": "[ˌʌndɪˈtɜːmɪnd]",
    "translation": "нерешительный"
  },
  {
    "index": 4021,
    "word": "determination",
    "transcription": "[dɪˌtɜːmɪˈneɪʃən]",
    "translation": "решимость"
  },
  {
    "index": 4022,
    "word": "iron",
    "transcription": "[ˈaɪən]",
    "translation": "утюг, гладить"
  },
  {
    "index": 4023,
    "word": "bowl",
    "transcription": "[bəʊl]",
    "translation": "миска"
  },
  {
    "index": 4024,
    "word": "accident",
    "transcription": "[ˈæksɪdənt]",
    "translation": "происшествие, напр. ДТП"
  },
  {
    "index": 4025,
    "word": "department",
    "transcription": "[dɪˈpɑːtmənt]",
    "translation": "отдел"
  },
  {
    "index": 4026,
    "word": "desert",
    "transcription": "[ˈdɛzət]",
    "translation": "бросать, оставлять"
  },
  {
    "index": 4027,
    "word": "deserter",
    "transcription": "[dɪˈzɜːtə]",
    "translation": "дезертир"
  },
  {
    "index": 4028,
    "word": "search",
    "transcription": "[sɜːʧ]",
    "translation": "поиски, искать"
  },
  {
    "index": 4029,
    "word": "pants",
    "transcription": "[pænts]",
    "translation": "штаны"
  },
  {
    "index": 4030,
    "word": "network",
    "transcription": "[ˈnɛtwɜːk]",
    "translation": "сеть"
  },
  {
    "index": 4031,
    "word": "tip",
    "transcription": "[tɪp]",
    "translation": "совет, рекомендация"
  },
  {
    "index": 4032,
    "word": "pit",
    "transcription": "[pɪt]",
    "translation": "яма"
  },
  {
    "index": 4033,
    "word": "armpit",
    "transcription": "[ˈɑːmpɪt]",
    "translation": "подмышка"
  },
  {
    "index": 4034,
    "word": "pitfall",
    "transcription": "[ˈpɪtfɔːl]",
    "translation": "западня"
  },
  {
    "index": 4035,
    "word": "run away",
    "transcription": "[rʌnəˈweɪ]",
    "translation": "убежать"
  },
  {
    "index": 4036,
    "word": "pair",
    "transcription": "[peə]",
    "translation": "пара"
  },
  {
    "index": 4037,
    "word": "paired",
    "transcription": "[peəd]",
    "translation": "парный"
  },
  {
    "index": 4038,
    "word": "ignorant",
    "transcription": "[ˈɪgnərənt]",
    "translation": "невежественный"
  },
  {
    "index": 4039,
    "word": "ignorance",
    "transcription": "[ˈɪgnərəns]",
    "translation": "невежество"
  },
  {
    "index": 4040,
    "word": "scholarship (money)",
    "transcription": "[ˈskɒləʃɪp]",
    "translation": "стипендия"
  },
  {
    "index": 4041,
    "word": "plot",
    "transcription": "[plɒt]",
    "translation": "сюжет"
  },
  {
    "index": 4042,
    "word": "foster",
    "transcription": "[ˈfɒstə]",
    "translation": "способствовать, питать и т.д."
  },
  {
    "index": 4043,
    "word": "leap",
    "transcription": "[liːp]",
    "translation": "прыгать, прыжок"
  },
  {
    "index": 4044,
    "word": "silent",
    "transcription": "[ˈsaɪlənt]",
    "translation": "тихий, молчаливый"
  },
  {
    "index": 4045,
    "word": "silence",
    "transcription": "[ˈsaɪləns]",
    "translation": "тишина"
  },
  {
    "index": 4046,
    "word": "tower",
    "transcription": "[ˈtaʊə]",
    "translation": "башня, возвышаться"
  },
  {
    "index": 4047,
    "word": "bush",
    "transcription": "[bʊʃ]",
    "translation": "куст"
  },
  {
    "index": 4048,
    "word": "bushy",
    "transcription": "[ˈbʊʃi]",
    "translation": "лохматый"
  },
  {
    "index": 4049,
    "word": "snap",
    "transcription": "[snæp]",
    "translation": "щёлкать, щелчок"
  },
  {
    "index": 4050,
    "word": "race",
    "transcription": "[reɪs]",
    "translation": "гонка"
  },
  {
    "index": 4051,
    "word": "quite",
    "transcription": "[kwaɪt]",
    "translation": "вполне, более-менее"
  },
  {
    "index": 4052,
    "word": "part",
    "transcription": "[pɑːt]",
    "translation": "часть, разделять(ся)"
  },
  {
    "index": 4053,
    "word": "partial",
    "transcription": "[ˈpɑːʃəl]",
    "translation": "частичный"
  },
  {
    "index": 4054,
    "word": "partly",
    "transcription": "[ˈpɑːtli]",
    "translation": "частично"
  },
  {
    "index": 4055,
    "word": "slope",
    "transcription": "[sləʊp]",
    "translation": "склон, наклон"
  },
  {
    "index": 4056,
    "word": "threat",
    "transcription": "[θrɛt]",
    "translation": "угроза"
  },
  {
    "index": 4057,
    "word": "threaten",
    "transcription": "[ˈθrɛtn]",
    "translation": "угрожать"
  },
  {
    "index": 4058,
    "word": "threatening",
    "transcription": "[ˈθrɛtnɪŋ]",
    "translation": "угрожающий"
  },
  {
    "index": 4059,
    "word": "laughter",
    "transcription": "[ˈlɑːftə]",
    "translation": "смех"
  },
  {
    "index": 4060,
    "word": "asset",
    "transcription": "[ˈæsɛt]",
    "translation": "актив, имущество"
  },
  {
    "index": 4061,
    "word": "pour in (into)",
    "transcription": "[pɔːrɪn]",
    "translation": "хлынуть, заполонить"
  },
  {
    "index": 4062,
    "word": "pour out",
    "transcription": "[pɔːraʊt]",
    "translation": "схлынуть"
  },
  {
    "index": 4063,
    "word": "heaven",
    "transcription": "[ˈhɛvn]",
    "translation": "небеса"
  },
  {
    "index": 4064,
    "word": "heavenly",
    "transcription": "[ˈhɛvnli]",
    "translation": "небесный, неземной"
  },
  {
    "index": 4065,
    "word": "rival",
    "transcription": "[ˈraɪvəl]",
    "translation": "соперничающий, враждебный"
  },
  {
    "index": 4066,
    "word": "rivalry",
    "transcription": "[ˈraɪvəlri]",
    "translation": "соперничество"
  },
  {
    "index": 4067,
    "word": "unrivalled",
    "transcription": "[ʌnˈraɪvəld]",
    "translation": "непревзойденный"
  },
  {
    "index": 4068,
    "word": "refuge",
    "transcription": "[ˈrɛfjuːʤ]",
    "translation": "убежище, пристанище"
  },
  {
    "index": 4069,
    "word": "refugee",
    "transcription": "[ˌrɛfju(ː)ˈʤiː]",
    "translation": "беженец"
  },
  {
    "index": 4070,
    "word": "neglect",
    "transcription": "[nɪˈglɛkt]",
    "translation": "пренебрегать, не следить"
  },
  {
    "index": 4071,
    "word": "negligence",
    "transcription": "[ˈnɛglɪʤəns]",
    "translation": "небрежность"
  },
  {
    "index": 4072,
    "word": "right away",
    "transcription": "[raɪtəˈweɪ]",
    "translation": "немедленно"
  },
  {
    "index": 4073,
    "word": "plant",
    "transcription": "[plɑːnt]",
    "translation": "завод, производство"
  },
  {
    "index": 4074,
    "word": "burn",
    "transcription": "[bɜːn]",
    "translation": "жечь"
  },
  {
    "index": 4075,
    "word": "salary",
    "transcription": "[ˈsæləri]",
    "translation": "зарплата"
  },
  {
    "index": 4076,
    "word": "be on fire",
    "transcription": "[biːɒnˈfaɪə]",
    "translation": "гореть"
  },
  {
    "index": 4077,
    "word": "point",
    "transcription": "[pɔɪnt]",
    "translation": "острие, кончик"
  },
  {
    "index": 4078,
    "word": "chill",
    "transcription": "[ʧɪl]",
    "translation": "холод, охлаждать"
  },
  {
    "index": 4079,
    "word": "chilly",
    "transcription": "[ˈʧɪli]",
    "translation": "холодный, зябкий"
  },
  {
    "index": 4080,
    "word": "jet",
    "transcription": "[ʤɛt]",
    "translation": "реактивный двигатель/самолёт"
  },
  {
    "index": 4081,
    "word": "convey",
    "transcription": "[kənˈveɪ]",
    "translation": "перевозить, передавать"
  },
  {
    "index": 4082,
    "word": "conveyance",
    "transcription": "[kənˈveɪəns]",
    "translation": "передача"
  },
  {
    "index": 4083,
    "word": "conveyer",
    "transcription": "[kənˈveɪə]",
    "translation": "конвейер"
  },
  {
    "index": 4084,
    "word": "basket",
    "transcription": "[ˈbɑːskɪt]",
    "translation": "корзина"
  },
  {
    "index": 4085,
    "word": "sign",
    "transcription": "[saɪn]",
    "translation": "подпись, подписывать"
  },
  {
    "index": 4086,
    "word": "rage",
    "transcription": "[reɪʤ]",
    "translation": "ярость"
  },
  {
    "index": 4087,
    "word": "enrage",
    "transcription": "[ɪnˈreɪʤ]",
    "translation": "бесить"
  },
  {
    "index": 4088,
    "word": "gas",
    "transcription": "[gæs]",
    "translation": "бензин"
  },
  {
    "index": 4089,
    "word": "gasoline",
    "transcription": "[ˈgæsəʊliːn]",
    "translation": "бензин"
  },
  {
    "index": 4090,
    "word": "gas station",
    "transcription": "[gæsˈsteɪʃən]",
    "translation": "бензоколонка"
  },
  {
    "index": 4091,
    "word": "come up against",
    "transcription": "[kʌmʌpəˈgɛnst]",
    "translation": "сталкиваться (с проблемами)"
  },
  {
    "index": 4092,
    "word": "run up against",
    "transcription": "[rʌnʌpəˈgɛnst]",
    "translation": "нарываться на"
  },
  {
    "index": 4093,
    "word": "attorney",
    "transcription": "[əˈtɜːni]",
    "translation": "адвокат, прокурор, поверенный"
  },
  {
    "index": 4094,
    "word": "exact",
    "transcription": "[ɪgˈzækt]",
    "translation": "точный"
  },
  {
    "index": 4095,
    "word": "exactness",
    "transcription": "[ɪgˈzæktnɪs]",
    "translation": "точность"
  },
  {
    "index": 4096,
    "word": "overall",
    "transcription": "[ˈəʊvərɔːl]",
    "translation": "общий, целый"
  },
  {
    "index": 4097,
    "word": "powerful",
    "transcription": "[ˈpaʊəfʊl]",
    "translation": "мощный, действенный"
  },
  {
    "index": 4098,
    "word": "powerless",
    "transcription": "[ˈpaʊəlɪs]",
    "translation": "бессильный"
  },
  {
    "index": 4099,
    "word": "question",
    "transcription": "[ˈkwɛsʧən]",
    "translation": "подвергать сомнению"
  },
  {
    "index": 4100,
    "word": "questionable",
    "transcription": "[ˈkwɛsʧənəbl]",
    "translation": "сомнительный"
  },
  {
    "index": 4101,
    "word": "row",
    "transcription": "[rəʊ]",
    "translation": "ряд"
  },
  {
    "index": 4102,
    "word": "chat",
    "transcription": "[ʧæt]",
    "translation": "болтать"
  },
  {
    "index": 4103,
    "word": "chatty",
    "transcription": "[ˈʧæti]",
    "translation": "болтливый"
  },
  {
    "index": 4104,
    "word": "assault",
    "transcription": "[əˈsɔːlt]",
    "translation": "нападение, нападать"
  },
  {
    "index": 4105,
    "word": "blade",
    "transcription": "[bleɪd]",
    "translation": "лезвие"
  },
  {
    "index": 4106,
    "word": "blade of grass",
    "transcription": "[bleɪdɒvgrɑːs]",
    "translation": "травинка"
  },
  {
    "index": 4107,
    "word": "mold (mould)",
    "transcription": "[məʊld]",
    "translation": "форма, формировать"
  },
  {
    "index": 4108,
    "word": "common",
    "transcription": "[ˈkɒmən]",
    "translation": "обычный, распространённый"
  },
  {
    "index": 4109,
    "word": "commonly",
    "transcription": "[ˈkɒmənli]",
    "translation": "обычно"
  },
  {
    "index": 4110,
    "word": "creepy",
    "transcription": "[ˈkriːpi]",
    "translation": "жуткий"
  },
  {
    "index": 4111,
    "word": "oblige",
    "transcription": "[əˈblaɪʤ]",
    "translation": "обязывать"
  },
  {
    "index": 4112,
    "word": "obligatory",
    "transcription": "[ɒˈblɪgətəri]",
    "translation": "обязательный, обязывающий"
  },
  {
    "index": 4113,
    "word": "degree",
    "transcription": "[dɪˈgriː]",
    "translation": "градус"
  },
  {
    "index": 4114,
    "word": "potato",
    "transcription": "[pəˈteɪtəʊ]",
    "translation": "картофель"
  },
  {
    "index": 4115,
    "word": "pocket",
    "transcription": "[ˈpɒkɪt]",
    "translation": "карман, карманный"
  },
  {
    "index": 4116,
    "word": "touch",
    "transcription": "[tʌʧ]",
    "translation": "касаться, прикосновение"
  },
  {
    "index": 4117,
    "word": "touching",
    "transcription": "[ˈtʌʧɪŋ]",
    "translation": "трогательный"
  },
  {
    "index": 4118,
    "word": "untouched",
    "transcription": "[ʌnˈtʌʧt]",
    "translation": "нетронутый"
  },
  {
    "index": 4119,
    "word": "untouchable",
    "transcription": "[ʌnˈtʌʧəbl]",
    "translation": "неприкасаемый"
  },
  {
    "index": 4120,
    "word": "go out",
    "transcription": "[gəʊaʊt]",
    "translation": "погаснуть"
  },
  {
    "index": 4121,
    "word": "bar",
    "transcription": "[bɑː]",
    "translation": "загораживать"
  },
  {
    "index": 4122,
    "word": "barrage",
    "transcription": "[ˈbærɑːʒ]",
    "translation": "заграждение"
  },
  {
    "index": 4123,
    "word": "put on",
    "transcription": "[pʊtɒn]",
    "translation": "провести (мероприятие)"
  },
  {
    "index": 4124,
    "word": "allow",
    "transcription": "[əˈlaʊ]",
    "translation": "разрешать"
  },
  {
    "index": 4125,
    "word": "allowance",
    "transcription": "[əˈlaʊəns]",
    "translation": "разрешение"
  },
  {
    "index": 4126,
    "word": "deploy",
    "transcription": "[dɪˈplɔɪ]",
    "translation": "развёртывать"
  },
  {
    "index": 4127,
    "word": "deployment",
    "transcription": "[dɪˈplɔɪmənt]",
    "translation": "развертывание"
  },
  {
    "index": 4128,
    "word": "vast",
    "transcription": "[vɑːst]",
    "translation": "просторный, простор"
  },
  {
    "index": 4129,
    "word": "throw (threw, thrown)",
    "transcription": "[θrəʊ]",
    "translation": "бросать"
  },
  {
    "index": 4130,
    "word": "get together",
    "transcription": "[gɛttəˈgɛðə]",
    "translation": "собираться"
  },
  {
    "index": 4131,
    "word": "awful",
    "transcription": "[ˈɔːfʊl]",
    "translation": "ужасный"
  },
  {
    "index": 4132,
    "word": "testimony",
    "transcription": "[ˈtɛstɪməni]",
    "translation": "показание, свидетельство"
  },
  {
    "index": 4133,
    "word": "bubble",
    "transcription": "[ˈbʌbl]",
    "translation": "пузырь"
  },
  {
    "index": 4134,
    "word": "skate",
    "transcription": "[skeɪt]",
    "translation": "конёк, кататься на коньках"
  },
  {
    "index": 4135,
    "word": "skater",
    "transcription": "[ˈskeɪtə]",
    "translation": "конькобежец"
  },
  {
    "index": 4136,
    "word": "limb",
    "transcription": "[lɪm]",
    "translation": "конечность"
  },
  {
    "index": 4137,
    "word": "fault",
    "transcription": "[fɔːlt]",
    "translation": "вина, ошибка"
  },
  {
    "index": 4138,
    "word": "predict",
    "transcription": "[prɪˈdɪkt]",
    "translation": "предсказывать"
  },
  {
    "index": 4139,
    "word": "prediction",
    "transcription": "[prɪˈdɪkʃən]",
    "translation": "прогнозирование"
  },
  {
    "index": 4140,
    "word": "predictable",
    "transcription": "[prɪˈdɪktəbl]",
    "translation": "предсказуемый"
  },
  {
    "index": 4141,
    "word": "unpredictable",
    "transcription": "[ˌʌnprɪˈdɪktəbl]",
    "translation": "непредсказуемый"
  },
  {
    "index": 4142,
    "word": "predictor",
    "transcription": "[prɪˈdɪktə]",
    "translation": "предсказатель"
  },
  {
    "index": 4143,
    "word": "exercise",
    "transcription": "[ˈɛksəsaɪz]",
    "translation": "упражнение, тренироваться"
  },
  {
    "index": 4144,
    "word": "fine",
    "transcription": "[faɪn]",
    "translation": "хороший"
  },
  {
    "index": 4145,
    "word": "confine",
    "transcription": "[kənˈfaɪn]",
    "translation": "ограничить (ся)"
  },
  {
    "index": 4146,
    "word": "confinement",
    "transcription": "[kənˈfaɪnmənt]",
    "translation": "ограничение, заточение"
  },
  {
    "index": 4147,
    "word": "shelf (pl: shelves)",
    "transcription": "[ʃɛlf]",
    "translation": "полка, уступ"
  },
  {
    "index": 4148,
    "word": "forgive (forgave, forgiven)",
    "transcription": "[fəˈgɪv]",
    "translation": "простить"
  },
  {
    "index": 4149,
    "word": "forgiveness",
    "transcription": "[fəˈgɪvnɪs]",
    "translation": "прощение"
  },
  {
    "index": 4150,
    "word": "literal",
    "transcription": "[ˈlɪtərəl]",
    "translation": "буквальный"
  },
  {
    "index": 4151,
    "word": "block",
    "transcription": "[blɒk]",
    "translation": "квартал"
  },
  {
    "index": 4152,
    "word": "send (sent, sent)",
    "transcription": "[sɛnd]",
    "translation": "отправить"
  },
  {
    "index": 4153,
    "word": "shield",
    "transcription": "[ʃiːld]",
    "translation": "щит, прикрывать"
  },
  {
    "index": 4154,
    "word": "windshield",
    "transcription": "[ˈwɪndʃiːld]",
    "translation": "ветровое стекло"
  },
  {
    "index": 4155,
    "word": "advertise",
    "transcription": "[ˈædvətaɪz]",
    "translation": "рекламировать"
  },
  {
    "index": 4156,
    "word": "advertisement",
    "transcription": "[ədˈvɜːtɪsmənt]",
    "translation": "реклама"
  },
  {
    "index": 4157,
    "word": "come along",
    "transcription": "[kʌməˈlɒŋ]",
    "translation": "идти вместе"
  },
  {
    "index": 4158,
    "word": "encounter",
    "transcription": "[ɪnˈkaʊntə]",
    "translation": "встретиться, столкнуться"
  },
  {
    "index": 4159,
    "word": "volume",
    "transcription": "[ˈvɒljʊm]",
    "translation": "объём"
  },
  {
    "index": 4160,
    "word": "shrink (shrank, shrunk)",
    "transcription": "[ʃrɪŋk]",
    "translation": "сжаться, съёжиться"
  },
  {
    "index": 4161,
    "word": "shrinkage",
    "transcription": "[ˈʃrɪŋkɪʤ]",
    "translation": "усадка"
  },
  {
    "index": 4162,
    "word": "opposite",
    "transcription": "[ˈɒpəzɪt]",
    "translation": "противоположный"
  },
  {
    "index": 4163,
    "word": "property",
    "transcription": "[ˈprɒpəti]",
    "translation": "собственность"
  },
  {
    "index": 4164,
    "word": "proprietor",
    "transcription": "[prəˈpraɪətə]",
    "translation": "собственник"
  },
  {
    "index": 4165,
    "word": "wind (wound, wound)",
    "transcription": "[wɪnd]",
    "translation": "наматывать, виться, петлять"
  },
  {
    "index": 4166,
    "word": "winding",
    "transcription": "[ˈwɪndɪŋ]",
    "translation": "обмотка"
  },
  {
    "index": 4167,
    "word": "charge",
    "transcription": "[ʧɑːʤ]",
    "translation": "плата"
  },
  {
    "index": 4168,
    "word": "charges",
    "transcription": "[ˈʧɑːʤɪz]",
    "translation": "расходы, издержки"
  },
  {
    "index": 4169,
    "word": "award",
    "transcription": "[əˈwɔːd]",
    "translation": "награда, премия, присуждать"
  },
  {
    "index": 4170,
    "word": "holy",
    "transcription": "[ˈhəʊli]",
    "translation": "святой, священный"
  },
  {
    "index": 4171,
    "word": "unholy",
    "transcription": "[ʌnˈhəʊli]",
    "translation": "нечестивый"
  },
  {
    "index": 4172,
    "word": "end up",
    "transcription": "[ɛndʌp]",
    "translation": "заканчивать чем-либо"
  },
  {
    "index": 4173,
    "word": "blow (blew blown)",
    "transcription": "[bləʊ]",
    "translation": "удар"
  },
  {
    "index": 4174,
    "word": "drill",
    "transcription": "[drɪl]",
    "translation": "сверло, сверлить"
  },
  {
    "index": 4175,
    "word": "skirt",
    "transcription": "[skɜːt]",
    "translation": "юбка"
  },
  {
    "index": 4176,
    "word": "stock",
    "transcription": "[stɒk]",
    "translation": "акции"
  },
  {
    "index": 4177,
    "word": "stock exchange",
    "transcription": "[stɒkɪksˈʧeɪnʤ]",
    "translation": "фондовая биржа"
  },
  {
    "index": 4178,
    "word": "goal",
    "transcription": "[gəʊl]",
    "translation": "цель"
  },
  {
    "index": 4179,
    "word": "hit (hit, hit)",
    "transcription": "[hɪt]",
    "translation": "попасть, достичь"
  },
  {
    "index": 4180,
    "word": "rely",
    "transcription": "[rɪˈlaɪ]",
    "translation": "полагаться"
  },
  {
    "index": 4181,
    "word": "reliable",
    "transcription": "[rɪˈlaɪəbl]",
    "translation": "надежный"
  },
  {
    "index": 4182,
    "word": "unreliable",
    "transcription": "[ˌʌnrɪˈlaɪəbl]",
    "translation": "ненадежный"
  },
  {
    "index": 4183,
    "word": "reliability",
    "transcription": "[rɪˌlaɪəˈbɪlɪti]",
    "translation": "надежность"
  },
  {
    "index": 4184,
    "word": "come from",
    "transcription": "[kʌmfrɒm]",
    "translation": "быть из"
  },
  {
    "index": 4185,
    "word": "cut off",
    "transcription": "[kʌtɒf]",
    "translation": "отрезать, отключить"
  },
  {
    "index": 4186,
    "word": "cutoff",
    "transcription": "[ˈkʌtɒf]",
    "translation": "отключение"
  },
  {
    "index": 4187,
    "word": "toss",
    "transcription": "[tɒs]",
    "translation": "бросать"
  },
  {
    "index": 4188,
    "word": "inn",
    "transcription": "[ɪn]",
    "translation": "гостиница"
  },
  {
    "index": 4189,
    "word": "assume",
    "transcription": "[əˈsjuːm]",
    "translation": "предпогалать"
  },
  {
    "index": 4190,
    "word": "assumption",
    "transcription": "[əˈsʌmpʃ(ə)n]",
    "translation": "предположение"
  },
  {
    "index": 4191,
    "word": "divine",
    "transcription": "[dɪˈvaɪn]",
    "translation": "божественный"
  },
  {
    "index": 4192,
    "word": "divinity",
    "transcription": "[dɪˈvɪnɪti]",
    "translation": "божественность"
  },
  {
    "index": 4193,
    "word": "reflect",
    "transcription": "[rɪˈflɛkt]",
    "translation": "отражать(ся)"
  },
  {
    "index": 4194,
    "word": "reflection",
    "transcription": "[rɪˈflɛkʃən]",
    "translation": "отражение"
  },
  {
    "index": 4195,
    "word": "pay out",
    "transcription": "[peɪaʊt]",
    "translation": "выплатить (крупную сумму)"
  },
  {
    "index": 4196,
    "word": "cry out",
    "transcription": "[kraɪaʊt]",
    "translation": "закричать (от страха, боли)"
  },
  {
    "index": 4197,
    "word": "yell out",
    "transcription": "[jɛlaʊt]",
    "translation": "прокричать"
  },
  {
    "index": 4198,
    "word": "lay (laid, laid)",
    "transcription": "[leɪ]",
    "translation": "класть, укладывать"
  },
  {
    "index": 4199,
    "word": "get laid",
    "transcription": "[gɛtleɪd]",
    "translation": "трахнуться, переспать"
  },
  {
    "index": 4200,
    "word": "check through",
    "transcription": "[ʧɛkθruː]",
    "translation": "обыскать, просмотреть"
  },
  {
    "index": 4201,
    "word": "look through",
    "transcription": "[lʊkθruː]",
    "translation": "просмотреть"
  },
  {
    "index": 4202,
    "word": "go through",
    "transcription": "[gəʊθruː]",
    "translation": "просмотреть"
  },
  {
    "index": 4203,
    "word": "run through",
    "transcription": "[rʌnθruː]",
    "translation": "просмотреть"
  },
  {
    "index": 4204,
    "word": "mind",
    "transcription": "[maɪnd]",
    "translation": "возражать"
  },
  {
    "index": 4205,
    "word": "substance",
    "transcription": "[ˈsʌbstəns]",
    "translation": "вещество, материя"
  },
  {
    "index": 4206,
    "word": "drop",
    "transcription": "[drɒp]",
    "translation": "капля"
  },
  {
    "index": 4207,
    "word": "turn out",
    "transcription": "[tɜːnaʊt]",
    "translation": "оказаться"
  },
  {
    "index": 4208,
    "word": "feedback",
    "transcription": "[ˈfiːdbæk]",
    "translation": "обратная связь"
  },
  {
    "index": 4209,
    "word": "consider",
    "transcription": "[kənˈsɪdə]",
    "translation": "считать чем-либо"
  },
  {
    "index": 4210,
    "word": "shake (shook, shaken)",
    "transcription": "[ʃeɪk]",
    "translation": "трясти"
  },
  {
    "index": 4211,
    "word": "neither...nor",
    "transcription": "[ˈnaɪðə...nɔː]",
    "translation": "ни"
  },
  {
    "index": 4212,
    "word": "come around",
    "transcription": "[kʌməˈraʊnd]",
    "translation": "прийти в себя"
  },
  {
    "index": 4213,
    "word": "scale",
    "transcription": "[skeɪl]",
    "translation": "масштаб, шкала"
  },
  {
    "index": 4214,
    "word": "care",
    "transcription": "[keə]",
    "translation": "переживать, интересоваться"
  },
  {
    "index": 4215,
    "word": "careful",
    "transcription": "[ˈkeəfʊl]",
    "translation": "осторожный"
  },
  {
    "index": 4216,
    "word": "careless",
    "transcription": "[ˈkeəlɪs]",
    "translation": "неосторожный"
  },
  {
    "index": 4217,
    "word": "carefree",
    "transcription": "[ˈkeəfriː]",
    "translation": "беззаботный"
  },
  {
    "index": 4218,
    "word": "faint",
    "transcription": "[feɪnt]",
    "translation": "обморок, падать в обморок"
  },
  {
    "index": 4219,
    "word": "almost",
    "transcription": "[ˈɔːlməʊst]",
    "translation": "почти"
  },
  {
    "index": 4220,
    "word": "battlefield",
    "transcription": "[ˈbætlfiːld]",
    "translation": "поле битвы"
  },
  {
    "index": 4221,
    "word": "donate",
    "transcription": "[dəʊˈneɪt]",
    "translation": "жертвовать, скидываться"
  },
  {
    "index": 4222,
    "word": "donation",
    "transcription": "[dəʊˈneɪʃən]",
    "translation": "пожертвование"
  },
  {
    "index": 4223,
    "word": "approximate",
    "transcription": "[əˈprɒksɪmɪt]",
    "translation": "приблизительный"
  },
  {
    "index": 4224,
    "word": "approximation",
    "transcription": "[əˌprɒksɪˈmeɪʃ(ə)n]",
    "translation": "приближение"
  },
  {
    "index": 4225,
    "word": "step down",
    "transcription": "[stɛpdaʊn]",
    "translation": "уйти в отставку"
  },
  {
    "index": 4226,
    "word": "come true",
    "transcription": "[kʌmtruː]",
    "translation": "сбываться"
  },
  {
    "index": 4227,
    "word": "comparison",
    "transcription": "[kəmˈpærɪsn]",
    "translation": "сравнение"
  },
  {
    "index": 4228,
    "word": "anchor",
    "transcription": "[ˈæŋkə]",
    "translation": "якорь, закреплять"
  },
  {
    "index": 4229,
    "word": "anchorage",
    "transcription": "[ˈæŋkərɪʤ]",
    "translation": "стоянка"
  },
  {
    "index": 4230,
    "word": "powder",
    "transcription": "[ˈpaʊdə]",
    "translation": "порошок"
  },
  {
    "index": 4231,
    "word": "gunpowder",
    "transcription": "[ˈgʌnˌpaʊdə]",
    "translation": "порох"
  },
  {
    "index": 4232,
    "word": "advocate",
    "transcription": "[ˈædvəkɪt]",
    "translation": "защищать, отстаивать"
  },
  {
    "index": 4233,
    "word": "advocacy",
    "transcription": "[ˈædvəkəsi]",
    "translation": "защита"
  },
  {
    "index": 4234,
    "word": "iron",
    "transcription": "[ˈaɪən]",
    "translation": "железо, железный"
  },
  {
    "index": 4235,
    "word": "conventional",
    "transcription": "[kənˈvɛnʃənl]",
    "translation": "стандартный, общепринятый"
  },
  {
    "index": 4236,
    "word": "sneak",
    "transcription": "[sniːk]",
    "translation": "красться"
  },
  {
    "index": 4237,
    "word": "sneaky",
    "transcription": "[ˈsniːki]",
    "translation": "подлый"
  },
  {
    "index": 4238,
    "word": "sneak away",
    "transcription": "[sniːkəˈweɪ]",
    "translation": "выскользнуть"
  },
  {
    "index": 4239,
    "word": "faculty",
    "transcription": "[ˈfækəlti]",
    "translation": "дар, способность"
  },
  {
    "index": 4240,
    "word": "set (set, set)",
    "transcription": "[sɛt]",
    "translation": "установить, наладить"
  },
  {
    "index": 4241,
    "word": "setup",
    "transcription": "[ˈsɛtʌp]",
    "translation": "установка"
  },
  {
    "index": 4242,
    "word": "settings",
    "transcription": "[ˈsɛtɪŋz]",
    "translation": "настройки"
  },
  {
    "index": 4243,
    "word": "setting",
    "transcription": "[ˈsɛtɪŋ]",
    "translation": "оправа, обрамление"
  },
  {
    "index": 4244,
    "word": "elevate",
    "transcription": "[ˈɛlɪveɪt]",
    "translation": "поднимать, повышать"
  },
  {
    "index": 4245,
    "word": "elevation",
    "transcription": "[ˌɛlɪˈveɪʃən]",
    "translation": "подъём, высота"
  },
  {
    "index": 4246,
    "word": "elevator",
    "transcription": "[ˈɛlɪveɪtə]",
    "translation": "лифт"
  },
  {
    "index": 4247,
    "word": "terrible",
    "transcription": "[ˈtɛrəbl]",
    "translation": "ужасный"
  },
  {
    "index": 4248,
    "word": "refugee",
    "transcription": "[ˌrɛfju(ː)ˈʤiː]",
    "translation": "беженец"
  },
  {
    "index": 4249,
    "word": "infantry",
    "transcription": "[ˈɪnfəntri]",
    "translation": "пехота"
  },
  {
    "index": 4250,
    "word": "kitten",
    "transcription": "[ˈkɪtn]",
    "translation": "котенок"
  },
  {
    "index": 4251,
    "word": "hassle",
    "transcription": "[ˈhæs(ə)l]",
    "translation": "трудность, неудобство"
  },
  {
    "index": 4252,
    "word": "petroleum",
    "transcription": "[pɪˈtrəʊlɪəm]",
    "translation": "нефть"
  },
  {
    "index": 4253,
    "word": "petrol",
    "transcription": "[ˈpɛtrəl]",
    "translation": "бензин"
  },
  {
    "index": 4254,
    "word": "curb",
    "transcription": "[kɜːb]",
    "translation": "узда, обуздать, сдержать"
  },
  {
    "index": 4255,
    "word": "bullshit",
    "transcription": "[ˈbʊlʃɪt]",
    "translation": "ерунда, чушь"
  },
  {
    "index": 4256,
    "word": "recite",
    "transcription": "[rɪˈsaɪt]",
    "translation": "декламировать, рассказывать"
  },
  {
    "index": 4257,
    "word": "recital",
    "transcription": "[rɪˈsaɪtl]",
    "translation": "декламация, чтение вслух"
  },
  {
    "index": 4258,
    "word": "wane",
    "transcription": "[weɪn]",
    "translation": "убывать"
  },
  {
    "index": 4259,
    "word": "gala",
    "transcription": "[ˈgɑːlə]",
    "translation": "праздничный, торжественный"
  },
  {
    "index": 4260,
    "word": "boast",
    "transcription": "[bəʊst]",
    "translation": "хвастать, хвастовство"
  },
  {
    "index": 4261,
    "word": "boastful",
    "transcription": "[ˈbəʊstfʊl]",
    "translation": "хвастливый"
  },
  {
    "index": 4262,
    "word": "interior",
    "transcription": "[ɪnˈtɪərɪə]",
    "translation": "внутренность, внутренний"
  },
  {
    "index": 4263,
    "word": "exterior",
    "transcription": "[ɛksˈtɪərɪə]",
    "translation": "внешний, внешняя сторона"
  },
  {
    "index": 4264,
    "word": "footage",
    "transcription": "[ˈfʊtɪʤ]",
    "translation": "запись, кадры видео"
  },
  {
    "index": 4265,
    "word": "fumble",
    "transcription": "[ˈfʌmbl]",
    "translation": "щупать, лапать, мять и т. д."
  },
  {
    "index": 4266,
    "word": "tomb",
    "transcription": "[tuːm]",
    "translation": "надгробие, склеп"
  },
  {
    "index": 4267,
    "word": "tombstone",
    "transcription": "[ˈtuːmstəʊn]",
    "translation": "надгробная плита"
  },
  {
    "index": 4268,
    "word": "oxygen",
    "transcription": "[ˈɒksɪʤən]",
    "translation": "кислород"
  },
  {
    "index": 4269,
    "word": "dwell on",
    "transcription": "[dwɛlɒn]",
    "translation": "остановиться (подробно)"
  },
  {
    "index": 4270,
    "word": "newcomer",
    "transcription": "[ˈnjuːˌkʌmə]",
    "translation": "новичок"
  },
  {
    "index": 4271,
    "word": "outfit",
    "transcription": "[ˈaʊtfɪt]",
    "translation": "наряд, комплект, набор"
  },
  {
    "index": 4272,
    "word": "mosquito",
    "transcription": "[məsˈkiːtəʊ]",
    "translation": "комар"
  },
  {
    "index": 4273,
    "word": "junction",
    "transcription": "[ˈʤʌŋkʃən]",
    "translation": "стык, узел, пересечение"
  },
  {
    "index": 4274,
    "word": "come with",
    "transcription": "[kʌmwɪð]",
    "translation": "прилагаться"
  },
  {
    "index": 4275,
    "word": "porcelain",
    "transcription": "[ˈpɔːsəlɪn]",
    "translation": "фарфор"
  },
  {
    "index": 4276,
    "word": "feasible",
    "transcription": "[ˈfiːzəbl]",
    "translation": "выполнимый, осуществимый"
  },
  {
    "index": 4277,
    "word": "feasibility",
    "transcription": "[ˌfiːzəˈbɪlɪti]",
    "translation": "осуществимость"
  },
  {
    "index": 4278,
    "word": "unfeasible",
    "transcription": "[ˌʌnˈfiːzəbl]",
    "translation": "неосуществимым"
  },
  {
    "index": 4279,
    "word": "merchant",
    "transcription": "[ˈmɜːʧənt]",
    "translation": "торговец, купец"
  },
  {
    "index": 4280,
    "word": "shack",
    "transcription": "[ʃæk]",
    "translation": "лачуга, хибара, будка"
  },
  {
    "index": 4281,
    "word": "murky",
    "transcription": "[ˈmɜːki]",
    "translation": "мутный, тёмный"
  },
  {
    "index": 4282,
    "word": "sour",
    "transcription": "[ˈsaʊə]",
    "translation": "кислый"
  },
  {
    "index": 4283,
    "word": "soak",
    "transcription": "[səʊk]",
    "translation": "мочить, пропитывать"
  },
  {
    "index": 4284,
    "word": "illicit",
    "transcription": "[ɪˈlɪsɪt]",
    "translation": "незаконный, запрещённый"
  },
  {
    "index": 4285,
    "word": "discrepancy",
    "transcription": "[dɪsˈkrɛpənsi]",
    "translation": "несоответствие, расхождение"
  },
  {
    "index": 4286,
    "word": "humid",
    "transcription": "[ˈhjuːmɪd]",
    "translation": "влажный"
  },
  {
    "index": 4287,
    "word": "humidity",
    "transcription": "[hju(ː)ˈmɪdɪti]",
    "translation": "влажность"
  },
  {
    "index": 4288,
    "word": "grief",
    "transcription": "[griːf]",
    "translation": "горе"
  },
  {
    "index": 4289,
    "word": "likewise",
    "transcription": "[ˈlaɪkwaɪz]",
    "translation": "также"
  },
  {
    "index": 4290,
    "word": "vicious",
    "transcription": "[ˈvɪʃəs]",
    "translation": "злобный, жестокий"
  },
  {
    "index": 4291,
    "word": "flop",
    "transcription": "[flɒp]",
    "translation": "провал, неудача"
  },
  {
    "index": 4292,
    "word": "recollection",
    "transcription": "[ˌrɛkəˈlɛkʃən]",
    "translation": "воспоминание"
  },
  {
    "index": 4293,
    "word": "cling (clung, clung)",
    "transcription": "[klɪŋ]",
    "translation": "цепляться"
  },
  {
    "index": 4294,
    "word": "intricate",
    "transcription": "[ˈɪntrɪkɪt]",
    "translation": "сложный, запутанный"
  },
  {
    "index": 4295,
    "word": "jumble",
    "transcription": "[ˈʤʌmbl]",
    "translation": "перемешивать"
  },
  {
    "index": 4296,
    "word": "turn down",
    "transcription": "[tɜːndaʊn]",
    "translation": "отказаться от предложения"
  },
  {
    "index": 4297,
    "word": "turndown",
    "transcription": "[ˈtɜːndaʊn]",
    "translation": "отказать"
  },
  {
    "index": 4298,
    "word": "edible",
    "transcription": "[ˈɛdɪbl]",
    "translation": "съедобный"
  },
  {
    "index": 4299,
    "word": "slit",
    "transcription": "[slɪt]",
    "translation": "щель"
  },
  {
    "index": 4300,
    "word": "conjunction",
    "transcription": "[kənˈʤʌŋkʃən]",
    "translation": "соединение, связь"
  },
  {
    "index": 4301,
    "word": "disjunction",
    "transcription": "[dɪsˈʤʌŋkʃən]",
    "translation": "разделение"
  },
  {
    "index": 4302,
    "word": "film",
    "transcription": "[fɪlm]",
    "translation": "снимать (кино)"
  },
  {
    "index": 4303,
    "word": "gossip",
    "transcription": "[ˈgɒsɪp]",
    "translation": "слухи"
  },
  {
    "index": 4304,
    "word": "delusion",
    "transcription": "[dɪˈluːʒən]",
    "translation": "наваждение, заблуждение"
  },
  {
    "index": 4305,
    "word": "delusional",
    "transcription": "[delusional]",
    "translation": "бредовый"
  },
  {
    "index": 4306,
    "word": "destiny",
    "transcription": "[ˈdɛstɪni]",
    "translation": "судьба, предназначение"
  },
  {
    "index": 4307,
    "word": "destined",
    "transcription": "[ˈdɛstɪnd]",
    "translation": "предназначен судьбой, обречён"
  },
  {
    "index": 4308,
    "word": "inventory",
    "transcription": "[ˈɪnvəntri]",
    "translation": "опись, учёт"
  },
  {
    "index": 4309,
    "word": "liver",
    "transcription": "[ˈlɪvə]",
    "translation": "печень"
  },
  {
    "index": 4310,
    "word": "set smb back",
    "transcription": "[sɛtsmbbæk]",
    "translation": "обойтись в (сумму)"
  },
  {
    "index": 4311,
    "word": "prevent smb from",
    "transcription": "[prɪˈvɛntsmbfrɒm]",
    "translation": "мешать"
  },
  {
    "index": 4312,
    "word": "keep smb from",
    "transcription": "[kiːpsmbfrɒm]",
    "translation": "мешать"
  },
  {
    "index": 4313,
    "word": "hover",
    "transcription": "[ˈhɒvə]",
    "translation": "зависнуть, парить"
  },
  {
    "index": 4314,
    "word": "cereal",
    "transcription": "[ˈsɪərɪəl]",
    "translation": "злак, каша, хлопья"
  },
  {
    "index": 4315,
    "word": "meager",
    "transcription": "[ˈmiːgə]",
    "translation": "скудный, недостаточный"
  },
  {
    "index": 4316,
    "word": "squeal",
    "transcription": "[skwiːl]",
    "translation": "визг, визжать"
  },
  {
    "index": 4317,
    "word": "distort",
    "transcription": "[dɪsˈtɔːt]",
    "translation": "искажать"
  },
  {
    "index": 4318,
    "word": "distortion",
    "transcription": "[dɪsˈtɔːʃən]",
    "translation": "искажение"
  },
  {
    "index": 4319,
    "word": "foresee",
    "transcription": "[fɔːˈsiː]",
    "translation": "предвидеть"
  },
  {
    "index": 4320,
    "word": "unforeseen",
    "transcription": "[ˌʌnfɔːˈsiːn]",
    "translation": "непредвиденный"
  },
  {
    "index": 4321,
    "word": "firefighter",
    "transcription": "[ˈfaɪəˌfaɪtə]",
    "translation": "пожарник"
  },
  {
    "index": 4322,
    "word": "fireman",
    "transcription": "[ˈfaɪəmən]",
    "translation": "пожарник"
  },
  {
    "index": 4323,
    "word": "scorn",
    "transcription": "[skɔːn]",
    "translation": "презирать, презрение"
  },
  {
    "index": 4324,
    "word": "scornful",
    "transcription": "[ˈskɔːnfʊl]",
    "translation": "презрительный"
  },
  {
    "index": 4325,
    "word": "be keen to",
    "transcription": "[biːkiːntuː]",
    "translation": "желать, стремиться"
  },
  {
    "index": 4326,
    "word": "deceased",
    "transcription": "[dɪˈsiːst]",
    "translation": "покойный, усопший"
  },
  {
    "index": 4327,
    "word": "wax",
    "transcription": "[wæks]",
    "translation": "воск"
  },
  {
    "index": 4328,
    "word": "diffuse",
    "transcription": "[dɪˈfjuːs]",
    "translation": "рассеивать, распылять"
  },
  {
    "index": 4329,
    "word": "diffusion",
    "transcription": "[dɪˈfjuːʒən]",
    "translation": "рассеивание"
  },
  {
    "index": 4330,
    "word": "wag",
    "transcription": "[wæg]",
    "translation": "махать, вилять"
  },
  {
    "index": 4331,
    "word": "offspring",
    "transcription": "[ˈɒfsprɪŋ]",
    "translation": "отпрыск, потомство"
  },
  {
    "index": 4332,
    "word": "pearl",
    "transcription": "[pɜːl]",
    "translation": "жемчуг, жемчужина"
  },
  {
    "index": 4333,
    "word": "stink (stank, stunk)",
    "transcription": "[stɪŋk]",
    "translation": "вонять"
  },
  {
    "index": 4334,
    "word": "desolate",
    "transcription": "[ˈdɛsəlɪt]",
    "translation": "пустынный, безлюдный"
  },
  {
    "index": 4335,
    "word": "desolation",
    "transcription": "[ˌdɛsəˈleɪʃən]",
    "translation": "опустошение"
  },
  {
    "index": 4336,
    "word": "civic",
    "transcription": "[ˈsɪvɪk]",
    "translation": "гражданский"
  },
  {
    "index": 4337,
    "word": "scrape",
    "transcription": "[skreɪp]",
    "translation": "скрести"
  },
  {
    "index": 4338,
    "word": "skyscraper",
    "transcription": "[ˈskaɪˌskreɪpə]",
    "translation": "небоскреб"
  },
  {
    "index": 4339,
    "word": "oversee",
    "transcription": "[ˌəʊvəˈsiː]",
    "translation": "контролировать, надзирать"
  },
  {
    "index": 4340,
    "word": "overseer",
    "transcription": "[ˈəʊvəsɪə]",
    "translation": "надсмотрщик"
  },
  {
    "index": 4341,
    "word": "come along",
    "transcription": "[kʌməˈlɒŋ]",
    "translation": "появиться, прийти"
  },
  {
    "index": 4342,
    "word": "negligent",
    "transcription": "[ˈnɛglɪʤənt]",
    "translation": "небрежный, халатный"
  },
  {
    "index": 4343,
    "word": "negligence",
    "transcription": "[ˈnɛglɪʤəns]",
    "translation": "небрежность"
  },
  {
    "index": 4344,
    "word": "bleak",
    "transcription": "[bliːk]",
    "translation": "мрачный"
  },
  {
    "index": 4345,
    "word": "bleakness",
    "transcription": "[ˈbliːknɪs]",
    "translation": "оголенность"
  },
  {
    "index": 4346,
    "word": "lord",
    "transcription": "[lɔːd]",
    "translation": "господин, господь (бог)"
  },
  {
    "index": 4347,
    "word": "hull",
    "transcription": "[hʌl]",
    "translation": "корпус, оболочка"
  },
  {
    "index": 4348,
    "word": "scarf",
    "transcription": "[skɑːf]",
    "translation": "шарф"
  },
  {
    "index": 4349,
    "word": "demise",
    "transcription": "[dɪˈmaɪz]",
    "translation": "кончина, конец"
  },
  {
    "index": 4350,
    "word": "stringent",
    "transcription": "[ˈstrɪnʤənt]",
    "translation": "строгий"
  },
  {
    "index": 4351,
    "word": "stringency",
    "transcription": "[ˈstrɪnʤənsi]",
    "translation": "строгость"
  },
  {
    "index": 4352,
    "word": "breadth",
    "transcription": "[brɛdθ]",
    "translation": "ширина, широта"
  },
  {
    "index": 4353,
    "word": "mock",
    "transcription": "[mɒk]",
    "translation": "издеваться, насмехаться"
  },
  {
    "index": 4354,
    "word": "mockery",
    "transcription": "[ˈmɒkəri]",
    "translation": "издевательство"
  },
  {
    "index": 4355,
    "word": "pledge",
    "transcription": "[plɛʤ]",
    "translation": "залог, оставлять в залог"
  },
  {
    "index": 4356,
    "word": "disciple",
    "transcription": "[dɪˈsaɪpl]",
    "translation": "ученик, последователь"
  },
  {
    "index": 4357,
    "word": "coherent",
    "transcription": "[kəʊˈhɪərənt]",
    "translation": "согласованный, связный"
  },
  {
    "index": 4358,
    "word": "incoherent",
    "transcription": "[ˌɪnkəʊˈhɪərənt]",
    "translation": "бессвязный"
  },
  {
    "index": 4359,
    "word": "coherence",
    "transcription": "[kəʊˈhɪərəns]",
    "translation": "согласованность"
  },
  {
    "index": 4360,
    "word": "ravage",
    "transcription": "[ˈrævɪʤ]",
    "translation": "разорить, опустошить"
  },
  {
    "index": 4361,
    "word": "come on",
    "transcription": "[kʌmɒn]",
    "translation": "включаться"
  },
  {
    "index": 4362,
    "word": "squirm",
    "transcription": "[skwɜːm]",
    "translation": "извиваться, ёрзать"
  },
  {
    "index": 4363,
    "word": "specify",
    "transcription": "[ˈspɛsɪfaɪ]",
    "translation": "указать, установить, уточнить"
  },
  {
    "index": 4364,
    "word": "cherish",
    "transcription": "[ˈʧɛrɪʃ]",
    "translation": "лелеять, хранить"
  },
  {
    "index": 4365,
    "word": "cherished",
    "transcription": "[ˈʧɛrɪʃt]",
    "translation": "заветный"
  },
  {
    "index": 4366,
    "word": "velocity",
    "transcription": "[vɪˈlɒsɪti]",
    "translation": "быстрота перемещения"
  },
  {
    "index": 4367,
    "word": "vegetation",
    "transcription": "[ˌvɛʤɪˈteɪʃən]",
    "translation": "растительность"
  },
  {
    "index": 4368,
    "word": "thump",
    "transcription": "[θʌmp]",
    "translation": "колотить"
  },
  {
    "index": 4369,
    "word": "retrieve",
    "transcription": "[rɪˈtriːv]",
    "translation": "извлечь, вернуть"
  },
  {
    "index": 4370,
    "word": "retrieval",
    "transcription": "[rɪˈtriːvəl]",
    "translation": "поиск, извлечение"
  },
  {
    "index": 4371,
    "word": "beep",
    "transcription": "[biːp]",
    "translation": "гудок, гудеть, пищать"
  },
  {
    "index": 4372,
    "word": "point",
    "transcription": "[pɔɪnt]",
    "translation": "пункт"
  },
  {
    "index": 4373,
    "word": "overt",
    "transcription": "[ˈəʊvɜːt]",
    "translation": "явный, открытый"
  },
  {
    "index": 4374,
    "word": "lick",
    "transcription": "[lɪk]",
    "translation": "лизать"
  },
  {
    "index": 4375,
    "word": "wrongdoing",
    "transcription": "[ˈrɒŋˈdu(ː)ɪŋ]",
    "translation": "проступок, правонарушение"
  },
  {
    "index": 4376,
    "word": "mob",
    "transcription": "[mɒb]",
    "translation": "толпа (неуправляемая)"
  },
  {
    "index": 4377,
    "word": "formidable",
    "transcription": "[ˈfɔːmɪdəbl]",
    "translation": "внушительный, грозный"
  },
  {
    "index": 4378,
    "word": "cape",
    "transcription": "[keɪp]",
    "translation": "мыс"
  },
  {
    "index": 4379,
    "word": "wallpaper",
    "transcription": "[ˈwɔːlˌpeɪpə]",
    "translation": "обои"
  },
  {
    "index": 4380,
    "word": "plug in",
    "transcription": "[plʌgɪn]",
    "translation": "включать"
  },
  {
    "index": 4381,
    "word": "incoming",
    "transcription": "[ˈɪnˌkʌmɪŋ]",
    "translation": "входящий"
  },
  {
    "index": 4382,
    "word": "sermon",
    "transcription": "[ˈsɜːmən]",
    "translation": "проповедь"
  },
  {
    "index": 4383,
    "word": "thud",
    "transcription": "[θʌd]",
    "translation": "глухой удар"
  },
  {
    "index": 4384,
    "word": "pick on",
    "transcription": "[pɪkɒn]",
    "translation": "дразнить, докучать"
  },
  {
    "index": 4385,
    "word": "denounce",
    "transcription": "[dɪˈnaʊns]",
    "translation": "осуждать, разоблачать"
  },
  {
    "index": 4386,
    "word": "sewage",
    "transcription": "[ˈsju(ː)ɪʤ]",
    "translation": "канализация, сточные воды"
  },
  {
    "index": 4387,
    "word": "sewer",
    "transcription": "[ˈsəʊə]",
    "translation": "сточная труба"
  },
  {
    "index": 4388,
    "word": "sublime",
    "transcription": "[səˈblaɪm]",
    "translation": "возвышенный, величественный"
  },
  {
    "index": 4389,
    "word": "sublimity",
    "transcription": "[səˈblɪmɪti]",
    "translation": "возвышенность"
  },
  {
    "index": 4390,
    "word": "shrewd",
    "transcription": "[ʃruːd]",
    "translation": "проницательный"
  },
  {
    "index": 4391,
    "word": "shrewdness",
    "transcription": "[ˈʃruːdnəs]",
    "translation": "проницательность"
  },
  {
    "index": 4392,
    "word": "devoid",
    "transcription": "[dɪˈvɔɪd]",
    "translation": "лишенный"
  },
  {
    "index": 4393,
    "word": "grope",
    "transcription": "[grəʊp]",
    "translation": "щупать, искать вслепую"
  },
  {
    "index": 4394,
    "word": "immerse",
    "transcription": "[ɪˈmɜːs]",
    "translation": "погружаться (в т. ч. перен)"
  },
  {
    "index": 4395,
    "word": "immersion",
    "transcription": "[ɪˈmɜːʃən]",
    "translation": "погружение"
  },
  {
    "index": 4396,
    "word": "chemistry",
    "transcription": "[ˈkɛmɪstri]",
    "translation": "химия"
  },
  {
    "index": 4397,
    "word": "chemical",
    "transcription": "[ˈkɛmɪkəl]",
    "translation": "химическая"
  },
  {
    "index": 4398,
    "word": "chemist",
    "transcription": "[ˈkɛmɪst]",
    "translation": "химик"
  },
  {
    "index": 4399,
    "word": "piss about",
    "transcription": "[pɪsəˈbaʊt]",
    "translation": "страдать хернёй"
  },
  {
    "index": 4400,
    "word": "break (broke, broken)",
    "transcription": "[breɪk]",
    "translation": "нарушать"
  },
  {
    "index": 4401,
    "word": "bring down",
    "transcription": "[brɪŋdaʊn]",
    "translation": "сбрасывать, свергать"
  },
  {
    "index": 4402,
    "word": "culprit",
    "transcription": "[ˈkʌlprɪt]",
    "translation": "виновник"
  },
  {
    "index": 4403,
    "word": "cage",
    "transcription": "[keɪʤ]",
    "translation": "клетка, запирать в клетку"
  },
  {
    "index": 4404,
    "word": "fortune",
    "transcription": "[ˈfɔːʧən]",
    "translation": "счастье, удача, судьба"
  },
  {
    "index": 4405,
    "word": "misfortune",
    "transcription": "[mɪsˈfɔːʧən]",
    "translation": "несчастье"
  },
  {
    "index": 4406,
    "word": "apt",
    "transcription": "[æpt]",
    "translation": "склонный, способный"
  },
  {
    "index": 4407,
    "word": "aptitude",
    "transcription": "[ˈæptɪtjuːd]",
    "translation": "способность, пригодность"
  },
  {
    "index": 4408,
    "word": "compulsory",
    "transcription": "[kəmˈpʌlsəri]",
    "translation": "принудительный, обязательный"
  },
  {
    "index": 4409,
    "word": "dress up",
    "transcription": "[drɛsʌp]",
    "translation": "нарядиться"
  },
  {
    "index": 4410,
    "word": "baffled",
    "transcription": "[ˈbæfld]",
    "translation": "в неодумении, в тупике"
  },
  {
    "index": 4411,
    "word": "mop",
    "transcription": "[mɒp]",
    "translation": "швабра, мыть пол"
  },
  {
    "index": 4412,
    "word": "chestnut",
    "transcription": "[ˈʧɛsnʌt]",
    "translation": "каштан"
  },
  {
    "index": 4413,
    "word": "succession",
    "transcription": "[səkˈsɛʃən]",
    "translation": "последовательность, преемственность"
  },
  {
    "index": 4414,
    "word": "successive",
    "transcription": "[səkˈsɛsɪv]",
    "translation": "последующий"
  },
  {
    "index": 4415,
    "word": "repeal",
    "transcription": "[rɪˈpiːl]",
    "translation": "отменить (закон)"
  },
  {
    "index": 4416,
    "word": "appraise",
    "transcription": "[əˈpreɪz]",
    "translation": "оценивать"
  },
  {
    "index": 4417,
    "word": "appraisal",
    "transcription": "[əˈpreɪzəl]",
    "translation": "оценка"
  },
  {
    "index": 4418,
    "word": "gulf",
    "transcription": "[gʌlf]",
    "translation": "разрыв, пропасть"
  },
  {
    "index": 4419,
    "word": "engulf",
    "transcription": "[ɪnˈgʌlf]",
    "translation": "поглотить, засосать"
  },
  {
    "index": 4420,
    "word": "vain",
    "transcription": "[veɪn]",
    "translation": "тщеславный, самолюбивый"
  },
  {
    "index": 4421,
    "word": "vanity",
    "transcription": "[ˈvænɪti]",
    "translation": "суета сует"
  },
  {
    "index": 4422,
    "word": "subscribe",
    "transcription": "[səbˈskraɪb]",
    "translation": "подписываться"
  },
  {
    "index": 4423,
    "word": "unsubscribe",
    "transcription": "[ˌʌnsəbˈskraɪb]",
    "translation": "отписаться"
  },
  {
    "index": 4424,
    "word": "subscriber",
    "transcription": "[səbˈskraɪbə]",
    "translation": "подписчик"
  },
  {
    "index": 4425,
    "word": "subscription",
    "transcription": "[səbˈskrɪpʃən]",
    "translation": "подписка"
  },
  {
    "index": 4426,
    "word": "proclaim",
    "transcription": "[prəˈkleɪm]",
    "translation": "провозглашать"
  },
  {
    "index": 4427,
    "word": "proclamation",
    "transcription": "[ˌprɒkləˈmeɪʃən]",
    "translation": "провозглашение, воззвание"
  },
  {
    "index": 4428,
    "word": "let smb down",
    "transcription": "[lɛtsmbdaʊn]",
    "translation": "подвести"
  },
  {
    "index": 4429,
    "word": "bonfire",
    "transcription": "[ˈbɒnˌfaɪə]",
    "translation": "костер"
  },
  {
    "index": 4430,
    "word": "wad",
    "transcription": "[wɒd]",
    "translation": "комок или пачка (денег)"
  },
  {
    "index": 4431,
    "word": "bring up",
    "transcription": "[brɪŋʌp]",
    "translation": "поднять тему"
  },
  {
    "index": 4432,
    "word": "invert",
    "transcription": "[ˈɪnvɜːt]",
    "translation": "переворачивать, опрокидывать"
  },
  {
    "index": 4433,
    "word": "compartment",
    "transcription": "[kəmˈpɑːtmənt]",
    "translation": "отсек, отделение, купе"
  },
  {
    "index": 4434,
    "word": "officer",
    "transcription": "[ˈɒfɪsə]",
    "translation": "служащий, должностное лицо"
  },
  {
    "index": 4435,
    "word": "clasp",
    "transcription": "[klɑːsp]",
    "translation": "застёжка, застёгивать"
  },
  {
    "index": 4436,
    "word": "annoy",
    "transcription": "[əˈnɔɪ]",
    "translation": "раздражать, надоедать"
  },
  {
    "index": 4437,
    "word": "annoyance",
    "transcription": "[əˈnɔɪəns]",
    "translation": "раздражение, досада"
  },
  {
    "index": 4438,
    "word": "intermediate",
    "transcription": "[ˌɪntəˈmiːdiət]",
    "translation": "промежуточный"
  },
  {
    "index": 4439,
    "word": "kit",
    "transcription": "[kɪt]",
    "translation": "комплект, набор"
  },
  {
    "index": 4440,
    "word": "stout",
    "transcription": "[staʊt]",
    "translation": "толстый, плотный, крепкий"
  },
  {
    "index": 4441,
    "word": "soap",
    "transcription": "[səʊp]",
    "translation": "мыло"
  },
  {
    "index": 4442,
    "word": "soapy",
    "transcription": "[ˈsəʊpi]",
    "translation": "мыльный"
  },
  {
    "index": 4443,
    "word": "foliage",
    "transcription": "[ˈfəʊlɪɪʤ]",
    "translation": "листва"
  },
  {
    "index": 4444,
    "word": "fugitive",
    "transcription": "[ˈfjuːʤɪtɪv]",
    "translation": "беглец"
  },
  {
    "index": 4445,
    "word": "undo",
    "transcription": "[ʌnˈduː]",
    "translation": "расстёгнуть, развязать, открыть"
  },
  {
    "index": 4446,
    "word": "skip",
    "transcription": "[skɪp]",
    "translation": "прыгать, перепрыгивать"
  },
  {
    "index": 4447,
    "word": "talk into",
    "transcription": "[tɔːkˈɪntuː]",
    "translation": "уговорить"
  },
  {
    "index": 4448,
    "word": "talk out",
    "transcription": "[tɔːkaʊt]",
    "translation": "отговорить"
  },
  {
    "index": 4449,
    "word": "congratulate",
    "transcription": "[kənˈgrætjʊleɪt]",
    "translation": "поздравлять"
  },
  {
    "index": 4450,
    "word": "congratulation",
    "transcription": "[kənˌgrætjʊˈleɪʃən]",
    "translation": "поздравление"
  },
  {
    "index": 4451,
    "word": "faraway",
    "transcription": "[ˈfɑːrəˌweɪ]",
    "translation": "далёкий"
  },
  {
    "index": 4452,
    "word": "bow out",
    "transcription": "[baʊaʊt]",
    "translation": "откланяться, уйти"
  },
  {
    "index": 4453,
    "word": "subtract",
    "transcription": "[səbˈtrækt]",
    "translation": "вычитать"
  },
  {
    "index": 4454,
    "word": "subtraction",
    "transcription": "[səbˈtrækʃən]",
    "translation": "вычитание"
  },
  {
    "index": 4455,
    "word": "clap",
    "transcription": "[klæp]",
    "translation": "хлопать в ладоши"
  },
  {
    "index": 4456,
    "word": "distress",
    "transcription": "[dɪsˈtrɛs]",
    "translation": "несчастье, страдание"
  },
  {
    "index": 4457,
    "word": "distressed",
    "transcription": "[dɪsˈtrɛst]",
    "translation": "бедствующий"
  },
  {
    "index": 4458,
    "word": "headlight",
    "transcription": "[ˈhɛdlaɪt]",
    "translation": "передняя фара"
  },
  {
    "index": 4459,
    "word": "subvert",
    "transcription": "[sʌbˈvɜːt]",
    "translation": "подорвать"
  },
  {
    "index": 4460,
    "word": "subversion",
    "transcription": "[səbˈvɜːʃən]",
    "translation": "подрывная деятельность"
  },
  {
    "index": 4461,
    "word": "scant",
    "transcription": "[skænt]",
    "translation": "скудный"
  },
  {
    "index": 4462,
    "word": "thief (pl: thieves)",
    "transcription": "[θiːf]",
    "translation": "вор"
  },
  {
    "index": 4463,
    "word": "yank",
    "transcription": "[jæŋk]",
    "translation": "дергать"
  },
  {
    "index": 4464,
    "word": "fond of",
    "transcription": "[fɒndɒv]",
    "translation": "любящий"
  },
  {
    "index": 4465,
    "word": "flinch",
    "transcription": "[flɪnʧ]",
    "translation": "дёрнуться, дрогнуть"
  },
  {
    "index": 4466,
    "word": "unflinching",
    "transcription": "[ˌʌnˈflɪnʧɪŋ]",
    "translation": "решительный, твёрдый"
  },
  {
    "index": 4467,
    "word": "bald",
    "transcription": "[bɔːld]",
    "translation": "лысый, плешивый"
  },
  {
    "index": 4468,
    "word": "baldness",
    "transcription": "[ˈbɔːldnɪs]",
    "translation": "облысение"
  },
  {
    "index": 4469,
    "word": "fountain",
    "transcription": "[ˈfaʊntɪn]",
    "translation": "фонтан"
  },
  {
    "index": 4470,
    "word": "vomit",
    "transcription": "[ˈvɒmɪt]",
    "translation": "рвота, страдать рвотой"
  },
  {
    "index": 4471,
    "word": "salesperson",
    "transcription": "[ˈseɪlzˌpɜːsən]",
    "translation": "продавец (в магазине)"
  },
  {
    "index": 4472,
    "word": "salesman",
    "transcription": "[ˈseɪlzmən]",
    "translation": "продавец"
  },
  {
    "index": 4473,
    "word": "saleswoman",
    "transcription": "[ˈseɪlzˌwʊmən]",
    "translation": "продавщица"
  },
  {
    "index": 4474,
    "word": "salesgirl",
    "transcription": "[salesgirl]",
    "translation": "продавщица"
  },
  {
    "index": 4475,
    "word": "salespeople",
    "transcription": "[ˈseɪlzˌpiːpl]",
    "translation": "продавцы"
  },
  {
    "index": 4476,
    "word": "swap",
    "transcription": "[swɒp]",
    "translation": "менять, обмен"
  },
  {
    "index": 4477,
    "word": "dissolve",
    "transcription": "[dɪˈzɒlv]",
    "translation": "растворять, растворяться"
  },
  {
    "index": 4478,
    "word": "bluff",
    "transcription": "[blʌf]",
    "translation": "блеф"
  },
  {
    "index": 4479,
    "word": "petty",
    "transcription": "[ˈpɛti]",
    "translation": "мелкий, мелочный"
  },
  {
    "index": 4480,
    "word": "snail",
    "transcription": "[sneɪl]",
    "translation": "улитка"
  },
  {
    "index": 4481,
    "word": "gutter",
    "transcription": "[ˈgʌtə]",
    "translation": "желоб, сток"
  },
  {
    "index": 4482,
    "word": "slim",
    "transcription": "[slɪm]",
    "translation": "стройный"
  },
  {
    "index": 4483,
    "word": "berth",
    "transcription": "[bɜːθ]",
    "translation": "койка, место, полка в поезде"
  },
  {
    "index": 4484,
    "word": "prey",
    "transcription": "[preɪ]",
    "translation": "добыча"
  },
  {
    "index": 4485,
    "word": "raisin",
    "transcription": "[ˈreɪzn]",
    "translation": "изюм"
  },
  {
    "index": 4486,
    "word": "revel",
    "transcription": "[ˈrɛvl]",
    "translation": "наслаждаться, развлекаться"
  },
  {
    "index": 4487,
    "word": "casualty",
    "transcription": "[ˈkæʒjʊəlti]",
    "translation": "жертва, потери"
  },
  {
    "index": 4488,
    "word": "cemetery",
    "transcription": "[ˈsɛmɪtri]",
    "translation": "кладбище"
  },
  {
    "index": 4489,
    "word": "bachelor",
    "transcription": "[ˈbæʧələ]",
    "translation": "бакалавр"
  },
  {
    "index": 4490,
    "word": "rude",
    "transcription": "[ruːd]",
    "translation": "грубый, неприличный"
  },
  {
    "index": 4491,
    "word": "rudeness",
    "transcription": "[ˈruːdnɪs]",
    "translation": "грубость"
  },
  {
    "index": 4492,
    "word": "hatch",
    "transcription": "[hæʧ]",
    "translation": "люк"
  },
  {
    "index": 4493,
    "word": "dumb",
    "transcription": "[dʌm]",
    "translation": "немой"
  },
  {
    "index": 4494,
    "word": "dumbness",
    "transcription": "[ˈdʌmnɪs]",
    "translation": "немота"
  },
  {
    "index": 4495,
    "word": "boulder",
    "transcription": "[ˈbəʊldə]",
    "translation": "валун"
  },
  {
    "index": 4496,
    "word": "massacre",
    "transcription": "[ˈmæsəkə]",
    "translation": "резня"
  },
  {
    "index": 4497,
    "word": "akin",
    "transcription": "[əˈkɪn]",
    "translation": "похожий"
  },
  {
    "index": 4498,
    "word": "grape",
    "transcription": "[greɪp]",
    "translation": "виноград (ягода)"
  },
  {
    "index": 4499,
    "word": "vine",
    "transcription": "[vaɪn]",
    "translation": "виноград (растение)"
  },
  {
    "index": 4500,
    "word": "vineyard",
    "transcription": "[ˈvɪnjəd]",
    "translation": "виноградник"
  },
  {
    "index": 4501,
    "word": "frenzy",
    "transcription": "[ˈfrɛnzi]",
    "translation": "неистовство, безумие"
  },
  {
    "index": 4502,
    "word": "rumble",
    "transcription": "[ˈrʌmbl]",
    "translation": "грохот, рокот"
  },
  {
    "index": 4503,
    "word": "eat out",
    "transcription": "[iːtaʊt]",
    "translation": "есть не дома"
  },
  {
    "index": 4504,
    "word": "eat in",
    "transcription": "[iːtɪn]",
    "translation": "есть дома"
  },
  {
    "index": 4505,
    "word": "scar",
    "transcription": "[skɑː]",
    "translation": "шрам"
  },
  {
    "index": 4506,
    "word": "rubble",
    "transcription": "[ˈrʌbl]",
    "translation": "щебень, обломки"
  },
  {
    "index": 4507,
    "word": "jolly",
    "transcription": "[ˈʤɒli]",
    "translation": "веселый"
  },
  {
    "index": 4508,
    "word": "pervert",
    "transcription": "[ˈpɜːvɜːt]",
    "translation": "извращать, извращенец"
  },
  {
    "index": 4509,
    "word": "perverse",
    "transcription": "[pəˈvɜːs]",
    "translation": "извращенный"
  },
  {
    "index": 4510,
    "word": "perversion",
    "transcription": "[pəˈvɜːʃən]",
    "translation": "извращение"
  },
  {
    "index": 4511,
    "word": "dam",
    "transcription": "[dæm]",
    "translation": "плотина"
  },
  {
    "index": 4512,
    "word": "flush",
    "transcription": "[flʌʃ]",
    "translation": "промывать, смывать"
  },
  {
    "index": 4513,
    "word": "assimilate",
    "transcription": "[əˈsɪmɪleɪt]",
    "translation": "усваивать"
  },
  {
    "index": 4514,
    "word": "assimilation",
    "transcription": "[əˌsɪmɪˈleɪʃ(ə)n]",
    "translation": "усвоение"
  },
  {
    "index": 4515,
    "word": "convene",
    "transcription": "[kənˈviːn]",
    "translation": "созывать, собирать"
  },
  {
    "index": 4516,
    "word": "turn up",
    "transcription": "[tɜːnʌp]",
    "translation": "сделать погромче"
  },
  {
    "index": 4517,
    "word": "turn down",
    "transcription": "[tɜːndaʊn]",
    "translation": "сделать потише"
  },
  {
    "index": 4518,
    "word": "apart from",
    "transcription": "[əˈpɑːtfrɒm]",
    "translation": "помимо"
  },
  {
    "index": 4519,
    "word": "spectacle",
    "transcription": "[ˈspɛktəkl]",
    "translation": "зрелище"
  },
  {
    "index": 4520,
    "word": "spectacular",
    "transcription": "[spɛkˈtækjʊlə]",
    "translation": "зрелищный, эффектный"
  },
  {
    "index": 4521,
    "word": "ray",
    "transcription": "[reɪ]",
    "translation": "луч"
  },
  {
    "index": 4522,
    "word": "sock",
    "transcription": "[sɒk]",
    "translation": "носок"
  },
  {
    "index": 4523,
    "word": "sox",
    "transcription": "[sox]",
    "translation": "носки"
  },
  {
    "index": 4524,
    "word": "backpack",
    "transcription": "[ˈbækˌpæk]",
    "translation": "рюкзак"
  },
  {
    "index": 4525,
    "word": "backpacker",
    "transcription": "[ˈbækˌpækə]",
    "translation": "турист"
  },
  {
    "index": 4526,
    "word": "shark",
    "transcription": "[ʃɑːk]",
    "translation": "акула"
  },
  {
    "index": 4527,
    "word": "stealth",
    "transcription": "[stɛlθ]",
    "translation": "скрытность, хитрость"
  },
  {
    "index": 4528,
    "word": "stealthy",
    "transcription": "[ˈstɛlθi]",
    "translation": "скрытый"
  },
  {
    "index": 4529,
    "word": "stealthily",
    "transcription": "[ˈstɛlθɪli]",
    "translation": "украдкой"
  },
  {
    "index": 4530,
    "word": "gravel",
    "transcription": "[ˈgrævəl]",
    "translation": "гравий"
  },
  {
    "index": 4531,
    "word": "broth",
    "transcription": "[brɒθ]",
    "translation": "бульон, отвар"
  },
  {
    "index": 4532,
    "word": "clear up",
    "transcription": "[klɪərʌp]",
    "translation": "прояснить(ся)"
  },
  {
    "index": 4533,
    "word": "lodge",
    "transcription": "[lɒʤ]",
    "translation": "домик, поселиться, остановиться"
  },
  {
    "index": 4534,
    "word": "lodging",
    "transcription": "[ˈlɒʤɪŋ]",
    "translation": "жилье"
  },
  {
    "index": 4535,
    "word": "puff",
    "transcription": "[pʌf]",
    "translation": "дуновение, пых, клубы (дыма)"
  },
  {
    "index": 4536,
    "word": "redeem",
    "transcription": "[rɪˈdiːm]",
    "translation": "выкупить, искупить"
  },
  {
    "index": 4537,
    "word": "shrub",
    "transcription": "[ʃrʌb]",
    "translation": "куст"
  },
  {
    "index": 4538,
    "word": "hail",
    "transcription": "[heɪl]",
    "translation": "град"
  },
  {
    "index": 4539,
    "word": "drizzle",
    "transcription": "[ˈdrɪzl]",
    "translation": "моросить, морось"
  },
  {
    "index": 4540,
    "word": "drizzly",
    "transcription": "[ˈdrɪzli]",
    "translation": "моросящий"
  },
  {
    "index": 4541,
    "word": "caress",
    "transcription": "[kəˈrɛs]",
    "translation": "ласкать, гладить"
  },
  {
    "index": 4542,
    "word": "dizzy",
    "transcription": "[ˈdɪzi]",
    "translation": "головокружительный"
  },
  {
    "index": 4543,
    "word": "dizziness",
    "transcription": "[ˈdɪzɪnɪs]",
    "translation": "головокружение"
  },
  {
    "index": 4544,
    "word": "filth",
    "transcription": "[fɪlθ]",
    "translation": "грязь, гадость"
  },
  {
    "index": 4545,
    "word": "filthy",
    "transcription": "[ˈfɪlθi]",
    "translation": "грязный, гадкий"
  },
  {
    "index": 4546,
    "word": "buy up",
    "transcription": "[baɪʌp]",
    "translation": "скупить"
  },
  {
    "index": 4547,
    "word": "stoop",
    "transcription": "[stuːp]",
    "translation": "крыльцо со ступеньками (амер.)"
  },
  {
    "index": 4548,
    "word": "forge",
    "transcription": "[fɔːʤ]",
    "translation": "ковать"
  },
  {
    "index": 4549,
    "word": "prescribe",
    "transcription": "[prɪsˈkraɪb]",
    "translation": "предписывать"
  },
  {
    "index": 4550,
    "word": "prescription",
    "transcription": "[prɪsˈkrɪpʃən]",
    "translation": "рецепт"
  },
  {
    "index": 4551,
    "word": "attain",
    "transcription": "[əˈteɪn]",
    "translation": "достигать"
  },
  {
    "index": 4552,
    "word": "attainment",
    "transcription": "[əˈteɪnmənt]",
    "translation": "достижение"
  },
  {
    "index": 4553,
    "word": "attainable",
    "transcription": "[əˈteɪnəbl]",
    "translation": "достижимый"
  },
  {
    "index": 4554,
    "word": "unattainable",
    "transcription": "[ˌʌnəˈteɪnəbl]",
    "translation": "недостижимый"
  },
  {
    "index": 4555,
    "word": "quarry",
    "transcription": "[ˈkwɒri]",
    "translation": "карьер"
  },
  {
    "index": 4556,
    "word": "look around",
    "transcription": "[lʊkəˈraʊnd]",
    "translation": "посмотреть, оглядеть"
  },
  {
    "index": 4557,
    "word": "shop around",
    "transcription": "[ʃɒpəˈraʊnd]",
    "translation": "походить по магазинам"
  },
  {
    "index": 4558,
    "word": "hurl",
    "transcription": "[hɜːl]",
    "translation": "метать, бросать с силой"
  },
  {
    "index": 4559,
    "word": "resent",
    "transcription": "[rɪˈzɛnt]",
    "translation": "огорчаться, возмущаться"
  },
  {
    "index": 4560,
    "word": "resentment",
    "transcription": "[rɪˈzɛntmənt]",
    "translation": "чувство обиды"
  },
  {
    "index": 4561,
    "word": "resentful",
    "transcription": "[rɪˈzɛntfʊl]",
    "translation": "обиженный"
  },
  {
    "index": 4562,
    "word": "drop off",
    "transcription": "[drɒpɒf]",
    "translation": "завезти, высадить"
  },
  {
    "index": 4563,
    "word": "wince",
    "transcription": "[wɪns]",
    "translation": "поморщиться, поёжиться"
  },
  {
    "index": 4564,
    "word": "node",
    "transcription": "[nəʊd]",
    "translation": "узел, вершина, центр"
  },
  {
    "index": 4565,
    "word": "nodal",
    "transcription": "[ˈnəʊdl]",
    "translation": "узловой"
  },
  {
    "index": 4566,
    "word": "rift",
    "transcription": "[rɪft]",
    "translation": "разрыв, трещина"
  },
  {
    "index": 4567,
    "word": "rejoice",
    "transcription": "[rɪˈʤɔɪs]",
    "translation": "радоваться"
  },
  {
    "index": 4568,
    "word": "polite",
    "transcription": "[pəˈlaɪt]",
    "translation": "вежливый"
  },
  {
    "index": 4569,
    "word": "politeness",
    "transcription": "[pəˈlaɪtnɪs]",
    "translation": "вежливость"
  },
  {
    "index": 4570,
    "word": "impolite",
    "transcription": "[ˌɪmpəˈlaɪt]",
    "translation": "невежливый"
  },
  {
    "index": 4571,
    "word": "starve",
    "transcription": "[stɑːv]",
    "translation": "голодать"
  },
  {
    "index": 4572,
    "word": "starvation",
    "transcription": "[stɑːˈveɪʃən]",
    "translation": "голодание"
  },
  {
    "index": 4573,
    "word": "ash",
    "transcription": "[æʃ]",
    "translation": "пепел, зола"
  },
  {
    "index": 4574,
    "word": "cellar",
    "transcription": "[ˈsɛlə]",
    "translation": "подвал"
  },
  {
    "index": 4575,
    "word": "duplicate",
    "transcription": "[ˈdjuːplɪkɪt]",
    "translation": "дублировать, дубликат"
  },
  {
    "index": 4576,
    "word": "duplication",
    "transcription": "[ˌdjuːplɪˈkeɪʃən]",
    "translation": "дублирование"
  },
  {
    "index": 4577,
    "word": "stool",
    "transcription": "[stuːl]",
    "translation": "табурет"
  },
  {
    "index": 4578,
    "word": "misery",
    "transcription": "[ˈmɪzəri]",
    "translation": "нищета"
  },
  {
    "index": 4579,
    "word": "intrude on",
    "transcription": "[ɪnˈtruːdɒn]",
    "translation": "вторгаться, вмешиваться"
  },
  {
    "index": 4580,
    "word": "intrusion",
    "transcription": "[ɪnˈtruːʒən]",
    "translation": "вторжение"
  },
  {
    "index": 4581,
    "word": "intruder",
    "transcription": "[ɪnˈtruːdə]",
    "translation": "нарушитель"
  },
  {
    "index": 4582,
    "word": "martyr",
    "transcription": "[ˈmɑːtə]",
    "translation": "мученик"
  },
  {
    "index": 4583,
    "word": "martyrdom",
    "transcription": "[ˈmɑːtədəm]",
    "translation": "мученичество"
  },
  {
    "index": 4584,
    "word": "pillow",
    "transcription": "[ˈpɪləʊ]",
    "translation": "подушка"
  },
  {
    "index": 4585,
    "word": "flap",
    "transcription": "[flæp]",
    "translation": "створка, клапан, хлопать"
  },
  {
    "index": 4586,
    "word": "flute",
    "transcription": "[fluːt]",
    "translation": "флейта"
  },
  {
    "index": 4587,
    "word": "scissors",
    "transcription": "[ˈsɪzəz]",
    "translation": "ножницы"
  },
  {
    "index": 4588,
    "word": "hog",
    "transcription": "[hɒg]",
    "translation": "большой свин, боров"
  },
  {
    "index": 4589,
    "word": "ward",
    "transcription": "[wɔːd]",
    "translation": "палата, отделение, камера"
  },
  {
    "index": 4590,
    "word": "order",
    "transcription": "[ˈɔːdə]",
    "translation": "приказ"
  },
  {
    "index": 4591,
    "word": "cut across",
    "transcription": "[kʌtəˈkrɒs]",
    "translation": "пересечь, срезать путь"
  },
  {
    "index": 4592,
    "word": "interrogate",
    "transcription": "[ɪnˈtɛrəʊgeɪt]",
    "translation": "допрашивать"
  },
  {
    "index": 4593,
    "word": "interrogation",
    "transcription": "[ɪnˌtɛrəʊˈgeɪʃən]",
    "translation": "опрос"
  },
  {
    "index": 4594,
    "word": "foil",
    "transcription": "[fɔɪl]",
    "translation": "расстаривать, разрушать"
  },
  {
    "index": 4595,
    "word": "soot",
    "transcription": "[sʊt]",
    "translation": "сажа"
  },
  {
    "index": 4596,
    "word": "sooty",
    "transcription": "[ˈsʊti]",
    "translation": "закопченный"
  },
  {
    "index": 4597,
    "word": "snapshot",
    "transcription": "[ˈsnæpˌʃɒt]",
    "translation": "снимок"
  },
  {
    "index": 4598,
    "word": "aggregate",
    "transcription": "[ˈægrɪgɪt]",
    "translation": "совокупный"
  },
  {
    "index": 4599,
    "word": "aggregation",
    "transcription": "[ˌægrɪˈgeɪʃ(ə)n]",
    "translation": "объединение, группировка"
  },
  {
    "index": 4600,
    "word": "loop",
    "transcription": "[luːp]",
    "translation": "петля"
  },
  {
    "index": 4601,
    "word": "paw",
    "transcription": "[pɔː]",
    "translation": "лапа"
  },
  {
    "index": 4602,
    "word": "fit in with",
    "transcription": "[fɪtɪnwɪð]",
    "translation": "вписаться (в коллектив)"
  },
  {
    "index": 4603,
    "word": "hand in",
    "transcription": "[hændɪn]",
    "translation": "сдать"
  },
  {
    "index": 4604,
    "word": "give in",
    "transcription": "[gɪvɪn]",
    "translation": "сдать"
  },
  {
    "index": 4605,
    "word": "chord",
    "transcription": "[kɔːd]",
    "translation": "аккорд"
  },
  {
    "index": 4606,
    "word": "zoo",
    "transcription": "[zuː]",
    "translation": "зоопарк"
  },
  {
    "index": 4607,
    "word": "be after",
    "transcription": "[biːˈɑːftə]",
    "translation": "иметь целью"
  },
  {
    "index": 4608,
    "word": "coincidence",
    "transcription": "[kəʊˈɪnsɪdəns]",
    "translation": "совпадение"
  },
  {
    "index": 4609,
    "word": "youngster",
    "transcription": "[ˈjʌŋstə]",
    "translation": "юноша, ребёнок"
  },
  {
    "index": 4610,
    "word": "come to life",
    "transcription": "[kʌmtuːlaɪf]",
    "translation": "оживать, приходить в себя"
  },
  {
    "index": 4611,
    "word": "bring to life",
    "transcription": "[brɪŋtuːlaɪf]",
    "translation": "приводить в чувство"
  },
  {
    "index": 4612,
    "word": "serene",
    "transcription": "[sɪˈriːn]",
    "translation": "безмятежный, безоблачный"
  },
  {
    "index": 4613,
    "word": "serenity",
    "transcription": "[sɪˈrɛnɪti]",
    "translation": "безмятежность"
  },
  {
    "index": 4614,
    "word": "crib",
    "transcription": "[krɪb]",
    "translation": "раскладушка или дет. кроватка"
  },
  {
    "index": 4615,
    "word": "mammoth",
    "transcription": "[ˈmæməθ]",
    "translation": "мамонт"
  },
  {
    "index": 4616,
    "word": "suitcase",
    "transcription": "[ˈsjuːtkeɪs]",
    "translation": "чемодан"
  },
  {
    "index": 4617,
    "word": "pass up",
    "transcription": "[pɑːsʌp]",
    "translation": "не воспользоваться шансом"
  },
  {
    "index": 4618,
    "word": "thug",
    "transcription": "[θʌg]",
    "translation": "бандит, головорез"
  },
  {
    "index": 4619,
    "word": "coffin",
    "transcription": "[ˈkɒfɪn]",
    "translation": "гроб"
  },
  {
    "index": 4620,
    "word": "dread",
    "transcription": "[drɛd]",
    "translation": "страх, бояться"
  },
  {
    "index": 4621,
    "word": "dreadful",
    "transcription": "[ˈdrɛdfʊl]",
    "translation": "ужасный"
  },
  {
    "index": 4622,
    "word": "pity",
    "transcription": "[ˈpɪti]",
    "translation": "жалость"
  },
  {
    "index": 4623,
    "word": "pitiful",
    "transcription": "[ˈpɪtɪfʊl]",
    "translation": "жалкий"
  },
  {
    "index": 4624,
    "word": "pitiless",
    "transcription": "[ˈpɪtɪlɪs]",
    "translation": "безжалостный"
  },
  {
    "index": 4625,
    "word": "drown",
    "transcription": "[draʊn]",
    "translation": "тонуть"
  },
  {
    "index": 4626,
    "word": "break into (break in)",
    "transcription": "[breɪkˈɪntuː]",
    "translation": "проникнуть, вломиться"
  },
  {
    "index": 4627,
    "word": "break-in",
    "transcription": "[breɪk-ɪn]",
    "translation": "взлом, ограбление"
  },
  {
    "index": 4628,
    "word": "census",
    "transcription": "[ˈsɛnsəs]",
    "translation": "перепись"
  },
  {
    "index": 4629,
    "word": "balloon",
    "transcription": "[bəˈluːn]",
    "translation": "воздушный шар"
  },
  {
    "index": 4630,
    "word": "exile",
    "transcription": "[ˈɛksaɪl]",
    "translation": "ссылка, изгнание"
  },
  {
    "index": 4631,
    "word": "meantime",
    "transcription": "[ˈmiːnˈtaɪm]",
    "translation": "тем временем"
  },
  {
    "index": 4632,
    "word": "numb",
    "transcription": "[nʌm]",
    "translation": "онемелый, окоченевший"
  },
  {
    "index": 4633,
    "word": "numbness",
    "transcription": "[ˈnʌmnɪs]",
    "translation": "онемение"
  },
  {
    "index": 4634,
    "word": "fin",
    "transcription": "[fɪn]",
    "translation": "плавник"
  },
  {
    "index": 4635,
    "word": "bout",
    "transcription": "[baʊt]",
    "translation": "всплеск, приступ"
  },
  {
    "index": 4636,
    "word": "trousers",
    "transcription": "[ˈtraʊzəz]",
    "translation": "брюки"
  },
  {
    "index": 4637,
    "word": "resilient",
    "transcription": "[rɪˈzɪlɪənt]",
    "translation": "стойкий, упругий"
  },
  {
    "index": 4638,
    "word": "resilience",
    "transcription": "[rɪˈzɪlɪəns]",
    "translation": "упругость"
  },
  {
    "index": 4639,
    "word": "mess up",
    "transcription": "[mɛsʌp]",
    "translation": "испортить, накосячить"
  },
  {
    "index": 4640,
    "word": "receipt",
    "transcription": "[rɪˈsiːt]",
    "translation": "квитанция"
  },
  {
    "index": 4641,
    "word": "pile up",
    "transcription": "[paɪlʌp]",
    "translation": "сложить, навалить"
  },
  {
    "index": 4642,
    "word": "detach",
    "transcription": "[dɪˈtæʧ]",
    "translation": "отделить, оторвать"
  },
  {
    "index": 4643,
    "word": "detachment",
    "transcription": "[dɪˈtæʧmənt]",
    "translation": "отделение, отслоение"
  },
  {
    "index": 4644,
    "word": "rabbit",
    "transcription": "[ˈræbɪt]",
    "translation": "кролик"
  },
  {
    "index": 4645,
    "word": "knob",
    "transcription": "[nɒb]",
    "translation": "ручка (круглая)"
  },
  {
    "index": 4646,
    "word": "ulcer",
    "transcription": "[ˈʌlsə]",
    "translation": "язва"
  },
  {
    "index": 4647,
    "word": "irritate",
    "transcription": "[ˈɪrɪteɪt]",
    "translation": "раздражать"
  },
  {
    "index": 4648,
    "word": "irritation",
    "transcription": "[ˌɪrɪˈteɪʃən]",
    "translation": "раздражение"
  },
  {
    "index": 4649,
    "word": "irritant",
    "transcription": "[ˈɪrɪtənt]",
    "translation": "раздражитель"
  },
  {
    "index": 4650,
    "word": "irritable",
    "transcription": "[ˈɪrɪtəbl]",
    "translation": "раздражительный"
  },
  {
    "index": 4651,
    "word": "inherent",
    "transcription": "[ɪnˈhɪərənt]",
    "translation": "свойственный, присущий"
  },
  {
    "index": 4652,
    "word": "commodity",
    "transcription": "[kəˈmɒdɪti]",
    "translation": "товар, сырьё"
  },
  {
    "index": 4653,
    "word": "whiz",
    "transcription": "[wɪz]",
    "translation": "ловкач, умелец (в области)"
  },
  {
    "index": 4654,
    "word": "delicious",
    "transcription": "[dɪˈlɪʃəs]",
    "translation": "восхитительный (о еде)"
  },
  {
    "index": 4655,
    "word": "invade",
    "transcription": "[ɪnˈveɪd]",
    "translation": "вторгаться"
  },
  {
    "index": 4656,
    "word": "invasion",
    "transcription": "[ɪnˈveɪʒən]",
    "translation": "вторжение"
  },
  {
    "index": 4657,
    "word": "invader",
    "transcription": "[ɪnˈveɪdə]",
    "translation": "захватчик"
  },
  {
    "index": 4658,
    "word": "invasive",
    "transcription": "[ɪnˈveɪsɪv]",
    "translation": "агрессивный, захватнический"
  },
  {
    "index": 4659,
    "word": "whack",
    "transcription": "[wæk]",
    "translation": "удар, сильно бить"
  },
  {
    "index": 4660,
    "word": "harness",
    "transcription": "[ˈhɑːnɪs]",
    "translation": "запрягать, обуздывать"
  },
  {
    "index": 4661,
    "word": "eyebrow",
    "transcription": "[ˈaɪbraʊ]",
    "translation": "бровь"
  },
  {
    "index": 4662,
    "word": "brow",
    "transcription": "[braʊ]",
    "translation": "бровь"
  },
  {
    "index": 4663,
    "word": "perennial",
    "transcription": "[pəˈrɛniəl]",
    "translation": "многолетний, вечный"
  },
  {
    "index": 4664,
    "word": "skim",
    "transcription": "[skɪm]",
    "translation": "скользить (легко)"
  },
  {
    "index": 4665,
    "word": "dope",
    "transcription": "[dəʊp]",
    "translation": "наркотик, дурман"
  },
  {
    "index": 4666,
    "word": "herd",
    "transcription": "[hɜːd]",
    "translation": "стадо, пасти"
  },
  {
    "index": 4667,
    "word": "herder",
    "transcription": "[ˈhɜːdə]",
    "translation": "пастух"
  },
  {
    "index": 4668,
    "word": "piss",
    "transcription": "[pɪs]",
    "translation": "писать, моча"
  },
  {
    "index": 4669,
    "word": "kneel",
    "transcription": "[niːl]",
    "translation": "стать на колени (колено)"
  },
  {
    "index": 4670,
    "word": "residue",
    "transcription": "[ˈrɛzɪdjuː]",
    "translation": "остаток"
  },
  {
    "index": 4671,
    "word": "residual",
    "transcription": "[rɪˈzɪdjʊəl]",
    "translation": "остаточный"
  },
  {
    "index": 4672,
    "word": "queer",
    "transcription": "[kwɪə]",
    "translation": "странный, чудной"
  },
  {
    "index": 4673,
    "word": "queer",
    "transcription": "[kwɪə]",
    "translation": "педик"
  },
  {
    "index": 4674,
    "word": "blaze",
    "transcription": "[bleɪz]",
    "translation": "полыхать, пламя"
  },
  {
    "index": 4675,
    "word": "ablaze",
    "transcription": "[əˈbleɪz]",
    "translation": "пылать"
  },
  {
    "index": 4676,
    "word": "come through",
    "transcription": "[kʌmθruː]",
    "translation": "пережить, перенести"
  },
  {
    "index": 4677,
    "word": "go through",
    "transcription": "[gəʊθruː]",
    "translation": "пережить"
  },
  {
    "index": 4678,
    "word": "live through",
    "transcription": "[lɪvθruː]",
    "translation": "пережить"
  },
  {
    "index": 4679,
    "word": "worm",
    "transcription": "[wɜːm]",
    "translation": "червь"
  },
  {
    "index": 4680,
    "word": "wormy",
    "transcription": "[ˈwɜːmi]",
    "translation": "червивый"
  },
  {
    "index": 4681,
    "word": "vest",
    "transcription": "[vɛst]",
    "translation": "жилет"
  },
  {
    "index": 4682,
    "word": "arc",
    "transcription": "[ɑːk]",
    "translation": "дуга"
  },
  {
    "index": 4683,
    "word": "bathe",
    "transcription": "[beɪð]",
    "translation": "купаться, купать"
  },
  {
    "index": 4684,
    "word": "fetus",
    "transcription": "[ˈfiːtəs]",
    "translation": "плод, эмбрион"
  },
  {
    "index": 4685,
    "word": "fetal",
    "transcription": "[ˈfiːtl]",
    "translation": "эмбриональный"
  },
  {
    "index": 4686,
    "word": "flutter",
    "transcription": "[ˈflʌtə]",
    "translation": "трепетать, развеваться, порхать"
  },
  {
    "index": 4687,
    "word": "lousy",
    "transcription": "[ˈlaʊzi]",
    "translation": "паршивый"
  },
  {
    "index": 4688,
    "word": "haze",
    "transcription": "[heɪz]",
    "translation": "дымка, туман"
  },
  {
    "index": 4689,
    "word": "dumb",
    "transcription": "[dʌm]",
    "translation": "тупой"
  },
  {
    "index": 4690,
    "word": "temper",
    "transcription": "[ˈtɛmpə]",
    "translation": "характер"
  },
  {
    "index": 4691,
    "word": "hump",
    "transcription": "[hʌmp]",
    "translation": "горб"
  },
  {
    "index": 4692,
    "word": "humped",
    "transcription": "[hʌmpt]",
    "translation": "горбатый"
  },
  {
    "index": 4693,
    "word": "contract",
    "transcription": "[ˈkɒntrækt]",
    "translation": "сокращаться"
  },
  {
    "index": 4694,
    "word": "contraction",
    "transcription": "[kənˈtrækʃən]",
    "translation": "сокращение"
  },
  {
    "index": 4695,
    "word": "integral",
    "transcription": "[ˈɪntɪgrəl]",
    "translation": "составной, неотъемлемый"
  },
  {
    "index": 4696,
    "word": "volatile",
    "transcription": "[ˈvɒlətaɪl]",
    "translation": "изменчивый, нестабильный"
  },
  {
    "index": 4697,
    "word": "volatility",
    "transcription": "[ˌvɒləˈtɪlɪti]",
    "translation": "изменчивость"
  },
  {
    "index": 4698,
    "word": "conspicuous",
    "transcription": "[kənˈspɪkjʊəs]",
    "translation": "заметный"
  },
  {
    "index": 4699,
    "word": "inconspicuous",
    "transcription": "[ˌɪnkənˈspɪkjʊəs]",
    "translation": "незаметный"
  },
  {
    "index": 4700,
    "word": "whirl",
    "transcription": "[wɜːl]",
    "translation": "вихрь, кружиться"
  },
  {
    "index": 4701,
    "word": "stuffy",
    "transcription": "[ˈstʌfi]",
    "translation": "душный"
  },
  {
    "index": 4702,
    "word": "refund",
    "transcription": "[ˈriːfʌnd]",
    "translation": "возврат, возмещение"
  },
  {
    "index": 4703,
    "word": "preside",
    "transcription": "[prɪˈzaɪd]",
    "translation": "председательствовать"
  },
  {
    "index": 4704,
    "word": "disperse",
    "transcription": "[dɪsˈpɜːs]",
    "translation": "рассеиваться"
  },
  {
    "index": 4705,
    "word": "dispersion",
    "transcription": "[dɪsˈpɜːʃən]",
    "translation": "рассеивание"
  },
  {
    "index": 4706,
    "word": "crane",
    "transcription": "[kreɪn]",
    "translation": "подъёмный кран"
  },
  {
    "index": 4707,
    "word": "forcible",
    "transcription": "[ˈfɔːsəbl]",
    "translation": "насильственный"
  },
  {
    "index": 4708,
    "word": "decisive",
    "transcription": "[dɪˈsaɪsɪv]",
    "translation": "решающий, решительный"
  },
  {
    "index": 4709,
    "word": "indecisive",
    "transcription": "[ˌɪndɪˈsaɪsɪv]",
    "translation": "нерешительный"
  },
  {
    "index": 4710,
    "word": "infinite",
    "transcription": "[ˈɪnfɪnɪt]",
    "translation": "бесконечный"
  },
  {
    "index": 4711,
    "word": "finite",
    "transcription": "[ˈfaɪnaɪt]",
    "translation": "конечный"
  },
  {
    "index": 4712,
    "word": "infinity",
    "transcription": "[ɪnˈfɪnɪti]",
    "translation": "бесконечность"
  },
  {
    "index": 4713,
    "word": "wind up",
    "transcription": "[wɪndʌp]",
    "translation": "заканчивать"
  },
  {
    "index": 4714,
    "word": "wrap up",
    "transcription": "[ræpʌp]",
    "translation": "заканчивать"
  },
  {
    "index": 4715,
    "word": "mole",
    "transcription": "[məʊl]",
    "translation": "крот"
  },
  {
    "index": 4716,
    "word": "hold back",
    "transcription": "[həʊldbæk]",
    "translation": "сдерживать"
  },
  {
    "index": 4717,
    "word": "keep back",
    "transcription": "[kiːpbæk]",
    "translation": "сдерживать"
  },
  {
    "index": 4718,
    "word": "take down",
    "transcription": "[teɪkdaʊn]",
    "translation": "записать"
  },
  {
    "index": 4719,
    "word": "write down",
    "transcription": "[raɪtdaʊn]",
    "translation": "записывать"
  },
  {
    "index": 4720,
    "word": "shimmer",
    "transcription": "[ˈʃɪmə]",
    "translation": "мерцать, переливаться"
  },
  {
    "index": 4721,
    "word": "wash up",
    "transcription": "[wɒʃʌp]",
    "translation": "умыться"
  },
  {
    "index": 4722,
    "word": "hang around",
    "transcription": "[hæŋəˈraʊnd]",
    "translation": "зависать, слоняться"
  },
  {
    "index": 4723,
    "word": "hang about",
    "transcription": "[hæŋəˈbaʊt]",
    "translation": "болтаться"
  },
  {
    "index": 4724,
    "word": "hang out",
    "transcription": "[hæŋaʊt]",
    "translation": "тусоваться"
  },
  {
    "index": 4725,
    "word": "skinny",
    "transcription": "[ˈskɪni]",
    "translation": "тощий"
  },
  {
    "index": 4726,
    "word": "stomp",
    "transcription": "[stɒmp]",
    "translation": "топать"
  },
  {
    "index": 4727,
    "word": "magician",
    "transcription": "[məˈʤɪʃən]",
    "translation": "волшебник, фокусник"
  },
  {
    "index": 4728,
    "word": "mushroom",
    "transcription": "[ˈmʌʃrʊm]",
    "translation": "гриб"
  },
  {
    "index": 4729,
    "word": "comprehend",
    "transcription": "[ˌkɒmprɪˈhɛnd]",
    "translation": "понять, вникнуть"
  },
  {
    "index": 4730,
    "word": "comprehension",
    "transcription": "[ˌkɒmprɪˈhɛnʃən]",
    "translation": "понимание"
  },
  {
    "index": 4731,
    "word": "comprehensible",
    "transcription": "[ˌkɒmprɪˈhɛnsəbl]",
    "translation": "понятный"
  },
  {
    "index": 4732,
    "word": "incomprehensible",
    "transcription": "[ɪnkɒmprɪˈhɛnsəbl]",
    "translation": "непостижимый"
  },
  {
    "index": 4733,
    "word": "mistress",
    "transcription": "[ˈmɪstrɪs]",
    "translation": "госпожа, хозяйка"
  },
  {
    "index": 4734,
    "word": "salient",
    "transcription": "[ˈseɪliənt]",
    "translation": "выступающий, заметный"
  },
  {
    "index": 4735,
    "word": "salience",
    "transcription": "[ˈseɪljəns]",
    "translation": "выпуклость, выступ"
  },
  {
    "index": 4736,
    "word": "stellar",
    "transcription": "[ˈstɛlə]",
    "translation": "звездный"
  },
  {
    "index": 4737,
    "word": "interstellar",
    "transcription": "[ˌɪntə(ː)ˈstɛlə]",
    "translation": "межзвездный"
  },
  {
    "index": 4738,
    "word": "excel",
    "transcription": "[ɪkˈsɛl]",
    "translation": "преуспеть"
  },
  {
    "index": 4739,
    "word": "blossom",
    "transcription": "[ˈblɒsəm]",
    "translation": "цвести, цвет"
  },
  {
    "index": 4740,
    "word": "gulp",
    "transcription": "[gʌlp]",
    "translation": "большой глоток, заглатывать"
  },
  {
    "index": 4741,
    "word": "ruler",
    "transcription": "[ˈruːlə]",
    "translation": "линейка"
  },
  {
    "index": 4742,
    "word": "berry",
    "transcription": "[ˈbɛri]",
    "translation": "ягода"
  },
  {
    "index": 4743,
    "word": "blackberry",
    "transcription": "[ˈblækbəri]",
    "translation": "ежевика"
  },
  {
    "index": 4744,
    "word": "blueberry",
    "transcription": "[ˈbluːbəri]",
    "translation": "черника"
  },
  {
    "index": 4745,
    "word": "exclaim",
    "transcription": "[ɪksˈkleɪm]",
    "translation": "восклицать"
  },
  {
    "index": 4746,
    "word": "exclamation",
    "transcription": "[ˌɛkskləˈmeɪʃən]",
    "translation": "восклицание"
  },
  {
    "index": 4747,
    "word": "exclamation point",
    "transcription": "[ˌɛkskləˈmeɪʃənpɔɪnt]",
    "translation": "восклицательный знак"
  },
  {
    "index": 4748,
    "word": "exclamation mark",
    "transcription": "[ˌɛkskləˈmeɪʃənmɑːk]",
    "translation": "восклицательный знак"
  },
  {
    "index": 4749,
    "word": "ruffle",
    "transcription": "[ˈrʌfl]",
    "translation": "рябить, взъерошить"
  },
  {
    "index": 4750,
    "word": "assassin",
    "transcription": "[əˈsæsɪn]",
    "translation": "убийца"
  },
  {
    "index": 4751,
    "word": "assassinate",
    "transcription": "[əˈsæsɪneɪt]",
    "translation": "убивать"
  },
  {
    "index": 4752,
    "word": "assassination",
    "transcription": "[əˌsæsɪˈneɪʃ(ə)n]",
    "translation": "убийство"
  },
  {
    "index": 4753,
    "word": "jerk",
    "transcription": "[ʤɜːk]",
    "translation": "дёргать, резкое движение"
  },
  {
    "index": 4754,
    "word": "saucer",
    "transcription": "[ˈsɔːsə]",
    "translation": "блюдце"
  },
  {
    "index": 4755,
    "word": "turnover",
    "transcription": "[ˈtɜːnˌəʊvə]",
    "translation": "оборот (экон.)"
  },
  {
    "index": 4756,
    "word": "provided",
    "transcription": "[prəˈvaɪdɪd]",
    "translation": "при условии"
  },
  {
    "index": 4757,
    "word": "disrupt",
    "transcription": "[dɪsˈrʌpt]",
    "translation": "нарушить, сорвать"
  },
  {
    "index": 4758,
    "word": "disruption",
    "transcription": "[dɪsˈrʌpʃən]",
    "translation": "нарушение"
  },
  {
    "index": 4759,
    "word": "deviate",
    "transcription": "[ˈdiːvɪeɪt]",
    "translation": "отклоняться"
  },
  {
    "index": 4760,
    "word": "deviant",
    "transcription": "[ˈdiːvɪənt]",
    "translation": "отклоняющееся"
  },
  {
    "index": 4761,
    "word": "deviation",
    "transcription": "[ˌdiːvɪˈeɪʃən]",
    "translation": "отклонение"
  },
  {
    "index": 4762,
    "word": "solitary",
    "transcription": "[ˈsɒlɪtəri]",
    "translation": "уединенный"
  },
  {
    "index": 4763,
    "word": "blunt",
    "transcription": "[blʌnt]",
    "translation": "тупой, притуплять"
  },
  {
    "index": 4764,
    "word": "bluntly",
    "transcription": "[ˈblʌntli]",
    "translation": "тупо, прямо, резко"
  },
  {
    "index": 4765,
    "word": "compassion",
    "transcription": "[kəmˈpæʃən]",
    "translation": "сочуствие, сострадание"
  },
  {
    "index": 4766,
    "word": "compassionate",
    "transcription": "[kəmˈpæʃənɪt]",
    "translation": "сострадательный"
  },
  {
    "index": 4767,
    "word": "cloak",
    "transcription": "[kləʊk]",
    "translation": "плащ, мантия, покров"
  },
  {
    "index": 4768,
    "word": "cloakroom",
    "transcription": "[ˈkləʊkrʊm]",
    "translation": "раздевалка"
  },
  {
    "index": 4769,
    "word": "prone",
    "transcription": "[prəʊn]",
    "translation": "склонный"
  },
  {
    "index": 4770,
    "word": "proneness",
    "transcription": "[ˈprəʊnəs]",
    "translation": "склонность"
  },
  {
    "index": 4771,
    "word": "bribe",
    "transcription": "[braɪb]",
    "translation": "взятка"
  },
  {
    "index": 4772,
    "word": "bribery",
    "transcription": "[ˈbraɪbəri]",
    "translation": "взяточничество"
  },
  {
    "index": 4773,
    "word": "verify",
    "transcription": "[ˈvɛrɪfaɪ]",
    "translation": "проверить"
  },
  {
    "index": 4774,
    "word": "verification",
    "transcription": "[ˌvɛrɪfɪˈkeɪʃən]",
    "translation": "проверка"
  },
  {
    "index": 4775,
    "word": "repress",
    "transcription": "[rɪˈprɛs]",
    "translation": "подавлять"
  },
  {
    "index": 4776,
    "word": "drop by",
    "transcription": "[drɒpbaɪ]",
    "translation": "зайти (по пути)"
  },
  {
    "index": 4777,
    "word": "drop in",
    "transcription": "[drɒpɪn]",
    "translation": "завезти, занести"
  },
  {
    "index": 4778,
    "word": "dummy",
    "transcription": "[ˈdʌmi]",
    "translation": "манекен, чучело"
  },
  {
    "index": 4779,
    "word": "slum",
    "transcription": "[slʌm]",
    "translation": "трущобы"
  },
  {
    "index": 4780,
    "word": "knight",
    "transcription": "[naɪt]",
    "translation": "рыцарь"
  },
  {
    "index": 4781,
    "word": "knighthood",
    "transcription": "[ˈnaɪthʊd]",
    "translation": "рыцарство"
  },
  {
    "index": 4782,
    "word": "aloud",
    "transcription": "[əˈlaʊd]",
    "translation": "вслух"
  },
  {
    "index": 4783,
    "word": "underline",
    "transcription": "[ˈʌndəlaɪn]",
    "translation": "подчеркивнуть"
  },
  {
    "index": 4784,
    "word": "pack in",
    "transcription": "[pækɪn]",
    "translation": "собирать (аудиторию)"
  },
  {
    "index": 4785,
    "word": "pull in",
    "transcription": "[pʊlɪn]",
    "translation": "собирать (аудиторию)"
  },
  {
    "index": 4786,
    "word": "locker",
    "transcription": "[ˈlɒkə]",
    "translation": "ящик, шкаф (закрывающийся)"
  },
  {
    "index": 4787,
    "word": "stagger",
    "transcription": "[ˈstægə]",
    "translation": "шататься, колебаться"
  },
  {
    "index": 4788,
    "word": "staggering",
    "transcription": "[ˈstægərɪŋ]",
    "translation": "ошеломляющий"
  },
  {
    "index": 4789,
    "word": "sob",
    "transcription": "[sɒb]",
    "translation": "рыдать, всхлипывать"
  },
  {
    "index": 4790,
    "word": "idle",
    "transcription": "[ˈaɪdl]",
    "translation": "праздный, бездействующий"
  },
  {
    "index": 4791,
    "word": "idleness",
    "transcription": "[ˈaɪdlnɪs]",
    "translation": "праздность"
  },
  {
    "index": 4792,
    "word": "idling",
    "transcription": "[ˈaɪdlɪŋ]",
    "translation": "на холостом ходу"
  },
  {
    "index": 4793,
    "word": "cedar",
    "transcription": "[ˈsiːdə]",
    "translation": "кедр"
  },
  {
    "index": 4794,
    "word": "mow",
    "transcription": "[maʊ]",
    "translation": "косить"
  },
  {
    "index": 4795,
    "word": "mower",
    "transcription": "[ˈməʊə]",
    "translation": "косилка"
  },
  {
    "index": 4796,
    "word": "subsist",
    "transcription": "[səbˈsɪst]",
    "translation": "существовать, прокормиться"
  },
  {
    "index": 4797,
    "word": "subsistence",
    "transcription": "[səbˈsɪstəns]",
    "translation": "существование, пропитание"
  },
  {
    "index": 4798,
    "word": "dual",
    "transcription": "[ˈdju(ː)əl]",
    "translation": "парный, двоякий"
  },
  {
    "index": 4799,
    "word": "duality",
    "transcription": "[dju(ː)ˈælɪti]",
    "translation": "двойственность"
  },
  {
    "index": 4800,
    "word": "paperwork",
    "transcription": "[ˈpeɪpəˌwɜːk]",
    "translation": "оформление бумаг"
  },
  {
    "index": 4801,
    "word": "counterfeit",
    "transcription": "[ˈkaʊntəfɪt]",
    "translation": "подделка, фальшивый"
  },
  {
    "index": 4802,
    "word": "counterfeiter",
    "transcription": "[ˈkaʊntəfɪtə]",
    "translation": "фальшивомонетчик"
  },
  {
    "index": 4803,
    "word": "eyelid",
    "transcription": "[ˈaɪlɪd]",
    "translation": "веко"
  },
  {
    "index": 4804,
    "word": "scout",
    "transcription": "[skaʊt]",
    "translation": "разведчик"
  },
  {
    "index": 4805,
    "word": "lavish",
    "transcription": "[ˈlævɪʃ]",
    "translation": "щедрый, роскошный"
  },
  {
    "index": 4806,
    "word": "lavishness",
    "transcription": "[ˈlævɪʃnəs]",
    "translation": "расточительность"
  },
  {
    "index": 4807,
    "word": "faction",
    "transcription": "[ˈfækʃən]",
    "translation": "группировка, фракция"
  },
  {
    "index": 4808,
    "word": "factional",
    "transcription": "[ˈfækʃən(ə)l]",
    "translation": "групповой, фракционный"
  },
  {
    "index": 4809,
    "word": "stoop",
    "transcription": "[stuːp]",
    "translation": "наклоняться или сутулиться"
  },
  {
    "index": 4810,
    "word": "stoopy",
    "transcription": "[stoopy]",
    "translation": "сутулый"
  },
  {
    "index": 4811,
    "word": "flourish",
    "transcription": "[ˈflʌrɪʃ]",
    "translation": "процветать"
  },
  {
    "index": 4812,
    "word": "peg",
    "transcription": "[pɛg]",
    "translation": "колышек, фиксатор"
  },
  {
    "index": 4813,
    "word": "keen",
    "transcription": "[kiːn]",
    "translation": "острый (часто перен.)"
  },
  {
    "index": 4814,
    "word": "lounge",
    "transcription": "[laʊnʤ]",
    "translation": "гостиная, холл, комната отдыха"
  },
  {
    "index": 4815,
    "word": "lounge car",
    "transcription": "[laʊnʤkɑː]",
    "translation": "вагон-ресторан"
  },
  {
    "index": 4816,
    "word": "rustle",
    "transcription": "[ˈrʌsl]",
    "translation": "шелест"
  },
  {
    "index": 4817,
    "word": "slick",
    "transcription": "[slɪk]",
    "translation": "скользкий"
  },
  {
    "index": 4818,
    "word": "feast",
    "transcription": "[fiːst]",
    "translation": "праздник, пир"
  },
  {
    "index": 4819,
    "word": "festive",
    "transcription": "[ˈfɛstɪv]",
    "translation": "праздничный"
  },
  {
    "index": 4820,
    "word": "festivity",
    "transcription": "[fɛsˈtɪvɪti]",
    "translation": "торжества"
  },
  {
    "index": 4821,
    "word": "patio",
    "transcription": "[ˈpætɪəʊ]",
    "translation": "внутренний дворик"
  },
  {
    "index": 4822,
    "word": "sleeve",
    "transcription": "[sliːv]",
    "translation": "рукав"
  },
  {
    "index": 4823,
    "word": "crimson",
    "transcription": "[ˈkrɪmzn]",
    "translation": "малиновый, багряный"
  },
  {
    "index": 4824,
    "word": "gloom",
    "transcription": "[gluːm]",
    "translation": "сумрак, уныние"
  },
  {
    "index": 4825,
    "word": "gloomy",
    "transcription": "[ˈgluːmi]",
    "translation": "мрачный"
  },
  {
    "index": 4826,
    "word": "detain",
    "transcription": "[dɪˈteɪn]",
    "translation": "задерживать"
  },
  {
    "index": 4827,
    "word": "detainee",
    "transcription": "[ˌdiːteɪˈniː]",
    "translation": "задержанное лицо"
  },
  {
    "index": 4828,
    "word": "expire",
    "transcription": "[ɪksˈpaɪə]",
    "translation": "истекать"
  },
  {
    "index": 4829,
    "word": "expiration",
    "transcription": "[ˌɛkspaɪəˈreɪʃən]",
    "translation": "истечение"
  },
  {
    "index": 4830,
    "word": "withstand",
    "transcription": "[wɪðˈstænd]",
    "translation": "выдерживать"
  },
  {
    "index": 4831,
    "word": "stick to",
    "transcription": "[stɪktuː]",
    "translation": "придерживаться, соблюдать"
  },
  {
    "index": 4832,
    "word": "keep to",
    "transcription": "[kiːptuː]",
    "translation": "придерживаться"
  },
  {
    "index": 4833,
    "word": "bigot",
    "transcription": "[ˈbɪgət]",
    "translation": "фанатик"
  },
  {
    "index": 4834,
    "word": "bigotry",
    "transcription": "[ˈbɪgətri]",
    "translation": "фанатизм"
  },
  {
    "index": 4835,
    "word": "badge",
    "transcription": "[bæʤ]",
    "translation": "значок"
  },
  {
    "index": 4836,
    "word": "dilute",
    "transcription": "[daɪˈljuːt]",
    "translation": "разбавлять, разводить"
  },
  {
    "index": 4837,
    "word": "dilution",
    "transcription": "[daɪˈluːʃən]",
    "translation": "разбавление"
  },
  {
    "index": 4838,
    "word": "reed",
    "transcription": "[riːd]",
    "translation": "тростник, камыш"
  },
  {
    "index": 4839,
    "word": "take in",
    "transcription": "[teɪkɪn]",
    "translation": "понять, вникнуть"
  },
  {
    "index": 4840,
    "word": "terrain",
    "transcription": "[ˈtɛreɪn]",
    "translation": "местность"
  },
  {
    "index": 4841,
    "word": "behave",
    "transcription": "[bɪˈheɪv]",
    "translation": "вести себя"
  },
  {
    "index": 4842,
    "word": "misbehave",
    "transcription": "[ˌmɪsbɪˈheɪv]",
    "translation": "дурно вести себя"
  },
  {
    "index": 4843,
    "word": "spear",
    "transcription": "[spɪə]",
    "translation": "копье"
  },
  {
    "index": 4844,
    "word": "doughnut",
    "transcription": "[ˈdəʊnʌt]",
    "translation": "пончик"
  },
  {
    "index": 4845,
    "word": "sparkle",
    "transcription": "[ˈspɑːkl]",
    "translation": "сверкать, блистать, искриться"
  },
  {
    "index": 4846,
    "word": "choke",
    "transcription": "[ʧəʊk]",
    "translation": "задыхаться, давиться"
  },
  {
    "index": 4847,
    "word": "type",
    "transcription": "[taɪp]",
    "translation": "печатать, набирать текст"
  },
  {
    "index": 4848,
    "word": "typewriter",
    "transcription": "[ˈtaɪpˌraɪtə]",
    "translation": "печатная машинка"
  },
  {
    "index": 4849,
    "word": "refute",
    "transcription": "[rɪˈfjuːt]",
    "translation": "опровергать"
  },
  {
    "index": 4850,
    "word": "refutation",
    "transcription": "[ˌrɛfju(ː)ˈteɪʃən]",
    "translation": "опровержение"
  },
  {
    "index": 4851,
    "word": "adore",
    "transcription": "[əˈdɔː]",
    "translation": "обожать"
  },
  {
    "index": 4852,
    "word": "adorable",
    "transcription": "[əˈdɔːrəbl]",
    "translation": "восхитительный"
  },
  {
    "index": 4853,
    "word": "break away",
    "transcription": "[breɪkəˈweɪ]",
    "translation": "отделяться"
  },
  {
    "index": 4854,
    "word": "pear",
    "transcription": "[peə]",
    "translation": "груша"
  },
  {
    "index": 4855,
    "word": "beige",
    "transcription": "[beɪʒ]",
    "translation": "бежевый"
  },
  {
    "index": 4856,
    "word": "elk",
    "transcription": "[ɛlk]",
    "translation": "лось"
  },
  {
    "index": 4857,
    "word": "multiply",
    "transcription": "[ˈmʌltɪplaɪ]",
    "translation": "умножать, размножаться"
  },
  {
    "index": 4858,
    "word": "multiplication",
    "transcription": "[ˌmʌltɪplɪˈkeɪʃən]",
    "translation": "умножение"
  },
  {
    "index": 4859,
    "word": "commence",
    "transcription": "[kəˈmɛns]",
    "translation": "начинать"
  },
  {
    "index": 4860,
    "word": "commencement",
    "transcription": "[kəˈmɛnsmənt]",
    "translation": "начало"
  },
  {
    "index": 4861,
    "word": "fleeting",
    "transcription": "[ˈfliːtɪŋ]",
    "translation": "мимолётный, скоротечный"
  },
  {
    "index": 4862,
    "word": "get off with",
    "transcription": "[gɛtɒfwɪð]",
    "translation": "отделаться чем-либо"
  },
  {
    "index": 4863,
    "word": "chuck",
    "transcription": "[ʧʌk]",
    "translation": "бросать (небрежно)"
  },
  {
    "index": 4864,
    "word": "pickle",
    "transcription": "[ˈpɪkl]",
    "translation": "мариновать, солить"
  },
  {
    "index": 4865,
    "word": "bounty",
    "transcription": "[ˈbaʊnti]",
    "translation": "вознаграждение"
  },
  {
    "index": 4866,
    "word": "bountiful",
    "transcription": "[ˈbaʊntɪfʊl]",
    "translation": "щедрый, обильный"
  },
  {
    "index": 4867,
    "word": "sleek",
    "transcription": "[sliːk]",
    "translation": "гладкий, лоснящийся"
  },
  {
    "index": 4868,
    "word": "dismay",
    "transcription": "[dɪsˈmeɪ]",
    "translation": "испуг, тревога, потрясение"
  },
  {
    "index": 4869,
    "word": "dismal",
    "transcription": "[ˈdɪzməl]",
    "translation": "гнетущий, мрачный"
  },
  {
    "index": 4870,
    "word": "pat",
    "transcription": "[pæt]",
    "translation": "похлопать, потрепать"
  },
  {
    "index": 4871,
    "word": "go along",
    "transcription": "[gəʊəˈlɒŋ]",
    "translation": "поддерживать, соглашаться"
  },
  {
    "index": 4872,
    "word": "whatsoever",
    "transcription": "[ˌwɒtsəʊˈɛvə]",
    "translation": "совсем (не)"
  },
  {
    "index": 4873,
    "word": "enlist",
    "transcription": "[ɪnˈlɪst]",
    "translation": "привлечь (к делу)"
  },
  {
    "index": 4874,
    "word": "enlistment",
    "transcription": "[ɪnˈlɪstmənt]",
    "translation": "зачисление на военную службу"
  },
  {
    "index": 4875,
    "word": "built-in",
    "transcription": "[ˈbɪltˈɪn]",
    "translation": "встроенный"
  },
  {
    "index": 4876,
    "word": "get in",
    "transcription": "[gɛtɪn]",
    "translation": "прибывать (о транспорте)"
  },
  {
    "index": 4877,
    "word": "come in",
    "transcription": "[kʌmɪn]",
    "translation": "прибывать (о транспорте)"
  },
  {
    "index": 4878,
    "word": "chore",
    "transcription": "[ʧɔː]",
    "translation": "скучная неприятная работа"
  },
  {
    "index": 4879,
    "word": "surveillance",
    "transcription": "[sɜːˈveɪləns]",
    "translation": "наблюдение"
  },
  {
    "index": 4880,
    "word": "concur",
    "transcription": "[kənˈkɜː]",
    "translation": "соглашаться"
  },
  {
    "index": 4881,
    "word": "concurrence",
    "transcription": "[kənˈkʌrəns]",
    "translation": "согласие"
  },
  {
    "index": 4882,
    "word": "drawer",
    "transcription": "[ˈdrɔːə]",
    "translation": "выдвижной ящик"
  },
  {
    "index": 4883,
    "word": "deflect",
    "transcription": "[dɪˈflɛkt]",
    "translation": "отклонять, преломлять"
  },
  {
    "index": 4884,
    "word": "deflection",
    "transcription": "[dɪˈflɛkʃən]",
    "translation": "отклонение"
  },
  {
    "index": 4885,
    "word": "trek",
    "transcription": "[trɛk]",
    "translation": "поход, переход"
  },
  {
    "index": 4886,
    "word": "saint",
    "transcription": "[seɪnt]",
    "translation": "святой"
  },
  {
    "index": 4887,
    "word": "mash",
    "transcription": "[mæʃ]",
    "translation": "разминать, месиво"
  },
  {
    "index": 4888,
    "word": "masher",
    "transcription": "[ˈmæʃə]",
    "translation": "толкушка"
  },
  {
    "index": 4889,
    "word": "noble",
    "transcription": "[ˈnəʊbl]",
    "translation": "благородный"
  },
  {
    "index": 4890,
    "word": "nobility",
    "transcription": "[nəʊˈbɪlɪti]",
    "translation": "знать"
  },
  {
    "index": 4891,
    "word": "nobleness",
    "transcription": "[ˈnəʊblnɪs]",
    "translation": "благородство"
  },
  {
    "index": 4892,
    "word": "nobleman",
    "transcription": "[ˈnəʊblmən]",
    "translation": "дворянин"
  },
  {
    "index": 4893,
    "word": "batch",
    "transcription": "[bæʧ]",
    "translation": "партия, серия, группа"
  },
  {
    "index": 4894,
    "word": "earring",
    "transcription": "[ˈɪəˌrɪŋ]",
    "translation": "серьга"
  },
  {
    "index": 4895,
    "word": "procedure",
    "transcription": "[prəˈsiːʤə]",
    "translation": "процедура"
  },
  {
    "index": 4896,
    "word": "candid",
    "transcription": "[ˈkændɪd]",
    "translation": "честный, беспристрастный"
  },
  {
    "index": 4897,
    "word": "straw",
    "transcription": "[strɔː]",
    "translation": "солома"
  },
  {
    "index": 4898,
    "word": "parlor",
    "transcription": "[ˈpɑːlə]",
    "translation": "приёмная, салон"
  },
  {
    "index": 4899,
    "word": "frail",
    "transcription": "[freɪl]",
    "translation": "хилый"
  },
  {
    "index": 4900,
    "word": "rouse",
    "transcription": "[raʊz]",
    "translation": "будить"
  },
  {
    "index": 4901,
    "word": "glide",
    "transcription": "[glaɪd]",
    "translation": "скользить, планировать"
  },
  {
    "index": 4902,
    "word": "reckless",
    "transcription": "[ˈrɛklɪs]",
    "translation": "опрометчивый, безрассудный"
  },
  {
    "index": 4903,
    "word": "recklessness",
    "transcription": "[ˈrɛklɪsnəs]",
    "translation": "безрассудство"
  },
  {
    "index": 4904,
    "word": "pope",
    "transcription": "[pəʊp]",
    "translation": "папа римский"
  },
  {
    "index": 4905,
    "word": "papal",
    "transcription": "[ˈpeɪpəl]",
    "translation": "папский"
  },
  {
    "index": 4906,
    "word": "incline",
    "transcription": "[ɪnˈklaɪn]",
    "translation": "наклонять, склонять (втч. перен)"
  },
  {
    "index": 4907,
    "word": "inclined",
    "transcription": "[ɪnˈklaɪnd]",
    "translation": "наклонный"
  },
  {
    "index": 4908,
    "word": "inclination",
    "transcription": "[ˌɪnklɪˈneɪʃən]",
    "translation": "наклонение"
  },
  {
    "index": 4909,
    "word": "disinclined",
    "transcription": "[ˌdɪsɪnˈklaɪnd]",
    "translation": "несклонный, нерасположенный"
  },
  {
    "index": 4910,
    "word": "checkup",
    "transcription": "[ˈʧɛkˈʌp]",
    "translation": "медосмотр"
  },
  {
    "index": 4911,
    "word": "crust",
    "transcription": "[krʌst]",
    "translation": "кора, корка"
  },
  {
    "index": 4912,
    "word": "crusty",
    "transcription": "[ˈkrʌsti]",
    "translation": "покрытый коркой"
  },
  {
    "index": 4913,
    "word": "pee",
    "transcription": "[piː]",
    "translation": "писать"
  },
  {
    "index": 4914,
    "word": "insulate",
    "transcription": "[ˈɪnsjʊleɪt]",
    "translation": "изолировать, оградить"
  },
  {
    "index": 4915,
    "word": "insulation",
    "transcription": "[ˌɪnsjʊˈleɪʃən]",
    "translation": "изоляция"
  },
  {
    "index": 4916,
    "word": "lurch",
    "transcription": "[lɜːʧ]",
    "translation": "крениться, шататься"
  },
  {
    "index": 4917,
    "word": "jump in",
    "transcription": "[ʤʌmpɪn]",
    "translation": "вмешаться"
  },
  {
    "index": 4918,
    "word": "bring up",
    "transcription": "[brɪŋʌp]",
    "translation": "воспитывать"
  },
  {
    "index": 4919,
    "word": "lamb",
    "transcription": "[læm]",
    "translation": "ягненок"
  },
  {
    "index": 4920,
    "word": "laden",
    "transcription": "[ˈleɪdn]",
    "translation": "груженный"
  },
  {
    "index": 4921,
    "word": "tick",
    "transcription": "[tɪk]",
    "translation": "галочка, поставить галочку"
  },
  {
    "index": 4922,
    "word": "airborne",
    "transcription": "[ˈeəbɔːn]",
    "translation": "находящийся в воздухе"
  },
  {
    "index": 4923,
    "word": "beard",
    "transcription": "[bɪəd]",
    "translation": "борода"
  },
  {
    "index": 4924,
    "word": "beardless",
    "transcription": "[ˈbɪədlɪs]",
    "translation": "безбородый"
  },
  {
    "index": 4925,
    "word": "huddle",
    "transcription": "[ˈhʌdl]",
    "translation": "столпиться, скучиться"
  },
  {
    "index": 4926,
    "word": "equation",
    "transcription": "[ɪˈkweɪʃən]",
    "translation": "уравнение"
  },
  {
    "index": 4927,
    "word": "fancy",
    "transcription": "[ˈfænsi]",
    "translation": "необычный, причудливый, модный"
  },
  {
    "index": 4928,
    "word": "strangle",
    "transcription": "[ˈstræŋgl]",
    "translation": "придушить"
  },
  {
    "index": 4929,
    "word": "strangulation",
    "transcription": "[ˌstræŋgjʊˈleɪʃən]",
    "translation": "удушение"
  },
  {
    "index": 4930,
    "word": "stranglehold",
    "transcription": "[ˈstræŋglhəʊld]",
    "translation": "удушение, мёртвая хватка"
  },
  {
    "index": 4931,
    "word": "blur",
    "transcription": "[blɜː]",
    "translation": "размывать, смазывать"
  },
  {
    "index": 4932,
    "word": "blurry",
    "transcription": "[ˈblɜːri]",
    "translation": "размытый"
  },
  {
    "index": 4933,
    "word": "mostly",
    "transcription": "[ˈməʊstli]",
    "translation": "в основном"
  },
  {
    "index": 4934,
    "word": "ache",
    "transcription": "[eɪk]",
    "translation": "боль, болеть"
  },
  {
    "index": 4935,
    "word": "headache",
    "transcription": "[ˈhɛdeɪk]",
    "translation": "головная боль"
  },
  {
    "index": 4936,
    "word": "toothache",
    "transcription": "[ˈtuːθeɪk]",
    "translation": "зубная боль"
  },
  {
    "index": 4937,
    "word": "raspberry",
    "transcription": "[ˈrɑːzbəri]",
    "translation": "малина"
  },
  {
    "index": 4938,
    "word": "squeak",
    "transcription": "[skwiːk]",
    "translation": "пищать, скрипеть"
  },
  {
    "index": 4939,
    "word": "squeaky",
    "transcription": "[ˈskwiːki]",
    "translation": "скрипучий"
  },
  {
    "index": 4940,
    "word": "grate",
    "transcription": "[greɪt]",
    "translation": "решётка"
  },
  {
    "index": 4941,
    "word": "grating",
    "transcription": "[ˈgreɪtɪŋ]",
    "translation": "решётка"
  },
  {
    "index": 4942,
    "word": "suite",
    "transcription": "[swiːt]",
    "translation": "апартаменты, номер люкс"
  },
  {
    "index": 4943,
    "word": "niece",
    "transcription": "[niːs]",
    "translation": "племянница"
  },
  {
    "index": 4944,
    "word": "intimidate",
    "transcription": "[ɪnˈtɪmɪdeɪt]",
    "translation": "запугивать"
  },
  {
    "index": 4945,
    "word": "intimidation",
    "transcription": "[ɪnˌtɪmɪˈdeɪʃən]",
    "translation": "устрашение"
  },
  {
    "index": 4946,
    "word": "call on",
    "transcription": "[kɔːlɒn]",
    "translation": "обратиться, попросить"
  },
  {
    "index": 4947,
    "word": "weep",
    "transcription": "[wiːp]",
    "translation": "рыдать"
  },
  {
    "index": 4948,
    "word": "creak",
    "transcription": "[kriːk]",
    "translation": "скрипеть"
  },
  {
    "index": 4949,
    "word": "creaky",
    "transcription": "[ˈkriːki]",
    "translation": "скрипучий"
  },
  {
    "index": 4950,
    "word": "tuck",
    "transcription": "[tʌk]",
    "translation": "подоткнуть, заправить и т. д."
  },
  {
    "index": 4951,
    "word": "get down",
    "transcription": "[gɛtdaʊn]",
    "translation": "приступить"
  },
  {
    "index": 4952,
    "word": "check out",
    "transcription": "[ʧɛkaʊt]",
    "translation": "посмотреть, заценить"
  },
  {
    "index": 4953,
    "word": "daze",
    "transcription": "[deɪz]",
    "translation": "ошеломить"
  },
  {
    "index": 4954,
    "word": "witch",
    "transcription": "[wɪʧ]",
    "translation": "ведьма"
  },
  {
    "index": 4955,
    "word": "witchcraft",
    "transcription": "[ˈwɪʧkrɑːft]",
    "translation": "колдовство"
  },
  {
    "index": 4956,
    "word": "scent",
    "transcription": "[sɛnt]",
    "translation": "аромат или нюх"
  },
  {
    "index": 4957,
    "word": "scented",
    "transcription": "[ˈsɛntɪd]",
    "translation": "душистый, ароматический"
  },
  {
    "index": 4958,
    "word": "extinguish",
    "transcription": "[ɪksˈtɪŋgwɪʃ]",
    "translation": "погасить"
  },
  {
    "index": 4959,
    "word": "cab",
    "transcription": "[kæb]",
    "translation": "такси"
  },
  {
    "index": 4960,
    "word": "bump into",
    "transcription": "[bʌmpˈɪntuː]",
    "translation": "случайно встретить"
  },
  {
    "index": 4961,
    "word": "run into",
    "transcription": "[rʌnˈɪntuː]",
    "translation": "случайно встретить, столкнуться"
  },
  {
    "index": 4962,
    "word": "ramp",
    "transcription": "[ræmp]",
    "translation": "скат, съезд"
  },
  {
    "index": 4963,
    "word": "rodent",
    "transcription": "[ˈrəʊdənt]",
    "translation": "грызун"
  },
  {
    "index": 4964,
    "word": "cripple",
    "transcription": "[ˈkrɪpl]",
    "translation": "калека, калечить"
  },
  {
    "index": 4965,
    "word": "scramble",
    "transcription": "[ˈskræmbl]",
    "translation": "драка, схватка"
  },
  {
    "index": 4966,
    "word": "go off",
    "transcription": "[gəʊɒf]",
    "translation": "сработать"
  },
  {
    "index": 4967,
    "word": "cane",
    "transcription": "[keɪn]",
    "translation": "трость"
  },
  {
    "index": 4968,
    "word": "nudge",
    "transcription": "[nʌʤ]",
    "translation": "подталкивать"
  },
  {
    "index": 4969,
    "word": "trumpet",
    "transcription": "[ˈtrʌmpɪt]",
    "translation": "труба"
  },
  {
    "index": 4970,
    "word": "deter",
    "transcription": "[dɪˈtɜː]",
    "translation": "удерживать (от действия)"
  },
  {
    "index": 4971,
    "word": "deterrent",
    "transcription": "[dɪˈtɛrənt]",
    "translation": "сдерживающий (фактор)"
  },
  {
    "index": 4972,
    "word": "deterrence",
    "transcription": "[dɪˈtɛrəns]",
    "translation": "устрашение"
  },
  {
    "index": 4973,
    "word": "midwife",
    "transcription": "[ˈmɪdwaɪf]",
    "translation": "акушерка"
  },
  {
    "index": 4974,
    "word": "alike",
    "transcription": "[əˈlaɪk]",
    "translation": "подобно"
  },
  {
    "index": 4975,
    "word": "transcend",
    "transcription": "[trænˈsɛnd]",
    "translation": "преодолеть (пределы)"
  },
  {
    "index": 4976,
    "word": "transcendent",
    "transcription": "[trænˈsɛndənt]",
    "translation": "превосходящий, невероятный"
  },
  {
    "index": 4977,
    "word": "bun",
    "transcription": "[bʌn]",
    "translation": "булочка"
  },
  {
    "index": 4978,
    "word": "arbitrary",
    "transcription": "[ˈɑːbɪtrəri]",
    "translation": "произвольный"
  },
  {
    "index": 4979,
    "word": "arbitrariness",
    "transcription": "[ˈɑːbɪtrərɪnəs]",
    "translation": "произвольность"
  },
  {
    "index": 4980,
    "word": "digit",
    "transcription": "[ˈdɪʤɪt]",
    "translation": "цифра"
  },
  {
    "index": 4981,
    "word": "digital",
    "transcription": "[ˈdɪʤɪtl]",
    "translation": "цифровой"
  },
  {
    "index": 4982,
    "word": "wallet",
    "transcription": "[ˈwɒlɪt]",
    "translation": "бумажник"
  },
  {
    "index": 4983,
    "word": "chaos",
    "transcription": "[ˈkeɪɒs]",
    "translation": "хаос"
  },
  {
    "index": 4984,
    "word": "chaotic",
    "transcription": "[keɪˈɒtɪk]",
    "translation": "хаотичный"
  },
  {
    "index": 4985,
    "word": "exuberant",
    "transcription": "[ɪgˈzjuːbərənt]",
    "translation": "буйный, энергичный"
  },
  {
    "index": 4986,
    "word": "exuberance",
    "transcription": "[ɪgˈzjuːbərəns]",
    "translation": "изобилие"
  },
  {
    "index": 4987,
    "word": "process",
    "transcription": "[ˈprəʊsɛs]",
    "translation": "обработать"
  },
  {
    "index": 4988,
    "word": "shatter",
    "transcription": "[ˈʃætə]",
    "translation": "разрушить, раздробить"
  },
  {
    "index": 4989,
    "word": "on account of",
    "transcription": "[ɒnəˈkaʊntɒv]",
    "translation": "в связи"
  },
  {
    "index": 4990,
    "word": "crown",
    "transcription": "[kraʊn]",
    "translation": "корона, короновать"
  },
  {
    "index": 4991,
    "word": "crowned",
    "transcription": "[kraʊnd]",
    "translation": "увенчанный"
  },
  {
    "index": 4992,
    "word": "whim",
    "transcription": "[wɪm]",
    "translation": "каприз, прихоть"
  },
  {
    "index": 4993,
    "word": "spouse",
    "transcription": "[spaʊz]",
    "translation": "супруг, супруга"
  },
  {
    "index": 4994,
    "word": "handcuffs",
    "transcription": "[ˈhændkʌfs]",
    "translation": "наручники"
  },
  {
    "index": 4995,
    "word": "scrub",
    "transcription": "[skrʌb]",
    "translation": "чистить, драить"
  },
  {
    "index": 4996,
    "word": "mutter",
    "transcription": "[ˈmʌtə]",
    "translation": "бормотать, бурчать"
  },
  {
    "index": 4997,
    "word": "be back",
    "transcription": "[biːbæk]",
    "translation": "возвращаться"
  },
  {
    "index": 4998,
    "word": "attic",
    "transcription": "[ˈætɪk]",
    "translation": "чердак"
  },
  {
    "index": 4999,
    "word": "diligent",
    "transcription": "[ˈdɪlɪʤənt]",
    "translation": "усердный, старательный"
  },
  {
    "index": 5000,
    "word": "diligence",
    "transcription": "[ˈdɪlɪʤəns]",
    "translation": "усердие"
  },
  {
    "index": 5001,
    "word": "wield",
    "transcription": "[wiːld]",
    "translation": "владеть, управляться"
  },
  {
    "index": 5002,
    "word": "bastard",
    "transcription": "[ˈbæstəd]",
    "translation": "ублюдок"
  },
  {
    "index": 5003,
    "word": "inward",
    "transcription": "[ˈɪnwəd]",
    "translation": "внутрь"
  },
  {
    "index": 5004,
    "word": "outward",
    "transcription": "[ˈaʊtwəd]",
    "translation": "наружу"
  },
  {
    "index": 5005,
    "word": "fairy",
    "transcription": "[ˈfeəri]",
    "translation": "фея"
  },
  {
    "index": 5006,
    "word": "industry",
    "transcription": "[ˈɪndəstri]",
    "translation": "отрасль"
  },
  {
    "index": 5007,
    "word": "mute",
    "transcription": "[mjuːt]",
    "translation": "беззвучный, не говорящий"
  },
  {
    "index": 5008,
    "word": "muteness",
    "transcription": "[ˈmjuːtnɪs]",
    "translation": "немота"
  },
  {
    "index": 5009,
    "word": "fall behind",
    "transcription": "[fɔːlbɪˈhaɪnd]",
    "translation": "отставать"
  },
  {
    "index": 5010,
    "word": "pivot",
    "transcription": "[ˈpɪvət]",
    "translation": "стержень, ось, точка опоры"
  },
  {
    "index": 5011,
    "word": "pivotal",
    "transcription": "[ˈpɪvətl]",
    "translation": "основной, опорный"
  },
  {
    "index": 5012,
    "word": "sore",
    "transcription": "[sɔː]",
    "translation": "больной, рана"
  },
  {
    "index": 5013,
    "word": "extinct",
    "transcription": "[ɪksˈtɪŋkt]",
    "translation": "вымерший"
  },
  {
    "index": 5014,
    "word": "extinction",
    "transcription": "[ɪksˈtɪŋkʃən]",
    "translation": "вымирание"
  },
  {
    "index": 5015,
    "word": "pupil",
    "transcription": "[ˈpjuːpl]",
    "translation": "зрачок"
  },
  {
    "index": 5016,
    "word": "maze",
    "transcription": "[meɪz]",
    "translation": "лабиринт"
  },
  {
    "index": 5017,
    "word": "rattle",
    "transcription": "[ˈrætl]",
    "translation": "греметь, погремушка"
  },
  {
    "index": 5018,
    "word": "tremble",
    "transcription": "[ˈtrɛmbl]",
    "translation": "дрожать"
  },
  {
    "index": 5019,
    "word": "contingency",
    "transcription": "[kənˈtɪnʤənsi]",
    "translation": "непредвиденные обстоятельства"
  },
  {
    "index": 5020,
    "word": "strap",
    "transcription": "[stræp]",
    "translation": "ремень"
  },
  {
    "index": 5021,
    "word": "subsidiary",
    "transcription": "[səbˈsɪdiəri]",
    "translation": "вспомогательный, дополнительный"
  },
  {
    "index": 5022,
    "word": "point out",
    "transcription": "[pɔɪntaʊt]",
    "translation": "указать"
  },
  {
    "index": 5023,
    "word": "phony",
    "transcription": "[ˈfəʊni]",
    "translation": "фальшивый"
  },
  {
    "index": 5024,
    "word": "account for",
    "transcription": "[əˈkaʊntfɔː]",
    "translation": "объяснить (произошедшее)"
  },
  {
    "index": 5025,
    "word": "fraction",
    "transcription": "[ˈfrækʃən]",
    "translation": "доля, часть, дробь"
  },
  {
    "index": 5026,
    "word": "fractional",
    "transcription": "[ˈfrækʃənl]",
    "translation": "дробный, частичный"
  },
  {
    "index": 5027,
    "word": "jerk",
    "transcription": "[ʤɜːk]",
    "translation": "придурок"
  },
  {
    "index": 5028,
    "word": "back down",
    "transcription": "[bækdaʊn]",
    "translation": "отступить, отказаться"
  },
  {
    "index": 5029,
    "word": "relentless",
    "transcription": "[rɪˈlɛntlɪs]",
    "translation": "настойчивый, непрекращающийся"
  },
  {
    "index": 5030,
    "word": "unrelenting",
    "transcription": "[ˌʌnrɪˈlɛntɪŋ]",
    "translation": "неослабевающий"
  },
  {
    "index": 5031,
    "word": "sword",
    "transcription": "[sɔːd]",
    "translation": "меч"
  },
  {
    "index": 5032,
    "word": "fuzzy",
    "transcription": "[ˈfʌzi]",
    "translation": "пушистый, ворсистый"
  },
  {
    "index": 5033,
    "word": "commonplace",
    "transcription": "[ˈkɒmənpleɪs]",
    "translation": "обычное дело, банальность"
  },
  {
    "index": 5034,
    "word": "foremost",
    "transcription": "[ˈfɔːməʊst]",
    "translation": "передовой, первоочередной"
  },
  {
    "index": 5035,
    "word": "fore",
    "transcription": "[fɔː]",
    "translation": "передний, носовой"
  },
  {
    "index": 5036,
    "word": "surrender",
    "transcription": "[səˈrɛndə]",
    "translation": "сдаваться, капитулировать"
  },
  {
    "index": 5037,
    "word": "paragraph",
    "transcription": "[ˈpærəgrɑːf]",
    "translation": "абзац, пункт"
  },
  {
    "index": 5038,
    "word": "tailor",
    "transcription": "[ˈteɪlə]",
    "translation": "портной, кроить"
  },
  {
    "index": 5039,
    "word": "break out",
    "transcription": "[breɪkaʊt]",
    "translation": "сбежать, вырваться"
  },
  {
    "index": 5040,
    "word": "break free",
    "transcription": "[breɪkfriː]",
    "translation": "освободиться"
  },
  {
    "index": 5041,
    "word": "break loose",
    "transcription": "[breɪkluːs]",
    "translation": "освободиться"
  },
  {
    "index": 5042,
    "word": "incumbent",
    "transcription": "[ɪnˈkʌmbənt]",
    "translation": "возложенный"
  },
  {
    "index": 5043,
    "word": "glaze",
    "transcription": "[gleɪz]",
    "translation": "глазурь, глянец"
  },
  {
    "index": 5044,
    "word": "immense",
    "transcription": "[ɪˈmɛns]",
    "translation": "огромный"
  },
  {
    "index": 5045,
    "word": "strait",
    "transcription": "[streɪt]",
    "translation": "пролив"
  },
  {
    "index": 5046,
    "word": "rot",
    "transcription": "[rɒt]",
    "translation": "гнить"
  },
  {
    "index": 5047,
    "word": "screenplay",
    "transcription": "[ˈskriːnpleɪ]",
    "translation": "сценарий"
  },
  {
    "index": 5048,
    "word": "noodles",
    "transcription": "[ˈnuːdlz]",
    "translation": "лапша"
  },
  {
    "index": 5049,
    "word": "slack",
    "transcription": "[slæk]",
    "translation": "расслабление, поблажка"
  },
  {
    "index": 5050,
    "word": "slacker",
    "transcription": "[ˈslækə]",
    "translation": "бездельник"
  },
  {
    "index": 5051,
    "word": "slacken",
    "transcription": "[ˈslækən]",
    "translation": "ослабевать"
  },
  {
    "index": 5052,
    "word": "embark on",
    "transcription": "[ɪmˈbɑːkɒn]",
    "translation": "начать (что-то серьёзное)"
  },
  {
    "index": 5053,
    "word": "soften",
    "transcription": "[ˈsɒfn]",
    "translation": "смягчать"
  },
  {
    "index": 5054,
    "word": "harden",
    "transcription": "[ˈhɑːdn]",
    "translation": "затвердеть"
  },
  {
    "index": 5055,
    "word": "stark",
    "transcription": "[stɑːk]",
    "translation": "чёткий, жёсткий, острый"
  },
  {
    "index": 5056,
    "word": "lace",
    "transcription": "[leɪs]",
    "translation": "шнурок, шнуровать"
  },
  {
    "index": 5057,
    "word": "interlace",
    "transcription": "[ˌɪntə(ː)ˈleɪs]",
    "translation": "переплетать"
  },
  {
    "index": 5058,
    "word": "obstruct",
    "transcription": "[əbˈstrʌkt]",
    "translation": "препятствовать, загромождать"
  },
  {
    "index": 5059,
    "word": "obstruction",
    "transcription": "[əbˈstrʌkʃən]",
    "translation": "препятствие, непроходимость"
  },
  {
    "index": 5060,
    "word": "damp",
    "transcription": "[dæmp]",
    "translation": "сырой, сырость"
  },
  {
    "index": 5061,
    "word": "dampen",
    "transcription": "[ˈdæmpən]",
    "translation": "отсыреть"
  },
  {
    "index": 5062,
    "word": "dampness",
    "transcription": "[ˈdæmpnəs]",
    "translation": "сырость"
  },
  {
    "index": 5063,
    "word": "come out",
    "transcription": "[kʌmaʊt]",
    "translation": "выступить, заявить"
  },
  {
    "index": 5064,
    "word": "pork",
    "transcription": "[pɔːk]",
    "translation": "свинина"
  },
  {
    "index": 5065,
    "word": "brassiere (bra)",
    "transcription": "[ˈbræsɪə]",
    "translation": "бюстгальтер"
  },
  {
    "index": 5066,
    "word": "frighten off",
    "transcription": "[ˈfraɪtnɒf]",
    "translation": "отпугивать"
  },
  {
    "index": 5067,
    "word": "bellow",
    "transcription": "[ˈbɛləʊ]",
    "translation": "реветь, рёв"
  },
  {
    "index": 5068,
    "word": "torment",
    "transcription": "[ˈtɔːmənt]",
    "translation": "мучение"
  },
  {
    "index": 5069,
    "word": "lightning",
    "transcription": "[ˈlaɪtnɪŋ]",
    "translation": "молния"
  },
  {
    "index": 5070,
    "word": "fidelity",
    "transcription": "[fɪˈdɛlɪti]",
    "translation": "верность"
  },
  {
    "index": 5071,
    "word": "infidelity",
    "transcription": "[ˌɪnfɪˈdɛlɪti]",
    "translation": "неверность"
  },
  {
    "index": 5072,
    "word": "infidel",
    "transcription": "[ˈɪnfɪdəl]",
    "translation": "неверующий"
  },
  {
    "index": 5073,
    "word": "bloom",
    "transcription": "[bluːm]",
    "translation": "расцвет, расцветать"
  },
  {
    "index": 5074,
    "word": "propel",
    "transcription": "[prəˈpɛl]",
    "translation": "двигать, толкать"
  },
  {
    "index": 5075,
    "word": "propeller",
    "transcription": "[prəˈpɛlə]",
    "translation": "пропеллер, гребной винт"
  },
  {
    "index": 5076,
    "word": "sulfur (sulphur)",
    "transcription": "[ˈsʌlfə]",
    "translation": "сера"
  },
  {
    "index": 5077,
    "word": "sulfuric",
    "transcription": "[sʌlˈfjʊərɪk]",
    "translation": "серный"
  },
  {
    "index": 5078,
    "word": "surf",
    "transcription": "[sɜːf]",
    "translation": "прибой"
  },
  {
    "index": 5079,
    "word": "impending",
    "transcription": "[ɪmˈpɛndɪŋ]",
    "translation": "предстоящий, грозящий"
  },
  {
    "index": 5080,
    "word": "playground",
    "transcription": "[ˈpleɪgraʊnd]",
    "translation": "детская площадка"
  },
  {
    "index": 5081,
    "word": "rig",
    "transcription": "[rɪg]",
    "translation": "установка, сооружение"
  },
  {
    "index": 5082,
    "word": "hunk",
    "transcription": "[hʌŋk]",
    "translation": "ломоть, лакомый кусок"
  },
  {
    "index": 5083,
    "word": "hunky",
    "transcription": "[hunky]",
    "translation": "цельный"
  },
  {
    "index": 5084,
    "word": "laptop",
    "transcription": "[ˈlæpˌtɒp]",
    "translation": "портативный компьютер"
  },
  {
    "index": 5085,
    "word": "heave",
    "transcription": "[hiːv]",
    "translation": "вздыматься"
  },
  {
    "index": 5086,
    "word": "itch",
    "transcription": "[ɪʧ]",
    "translation": "зуд, чесаться"
  },
  {
    "index": 5087,
    "word": "itchy",
    "transcription": "[ˈɪʧi]",
    "translation": "зудящий"
  },
  {
    "index": 5088,
    "word": "sober",
    "transcription": "[ˈsəʊbə]",
    "translation": "трезвый"
  },
  {
    "index": 5089,
    "word": "tramp",
    "transcription": "[træmp]",
    "translation": "бродяга"
  },
  {
    "index": 5090,
    "word": "shake",
    "transcription": "[ʃeɪk]",
    "translation": "пожать (руки)"
  },
  {
    "index": 5091,
    "word": "handshake",
    "transcription": "[ˈhændʃeɪk]",
    "translation": "рукопожатие"
  },
  {
    "index": 5092,
    "word": "pass off as",
    "transcription": "[pɑːsɒfæz]",
    "translation": "сойти, прокатить за"
  },
  {
    "index": 5093,
    "word": "brisk",
    "transcription": "[brɪsk]",
    "translation": "энергичный, оживлённый"
  },
  {
    "index": 5094,
    "word": "crossroads",
    "transcription": "[ˈkrɒsˌrəʊdz]",
    "translation": "перекрёсток, перепутье"
  },
  {
    "index": 5095,
    "word": "flea",
    "transcription": "[fliː]",
    "translation": "блоха"
  },
  {
    "index": 5096,
    "word": "agile",
    "transcription": "[ˈæʤaɪl]",
    "translation": "проворный, гибкий"
  },
  {
    "index": 5097,
    "word": "agility",
    "transcription": "[əˈʤɪlɪti]",
    "translation": "проворство"
  },
  {
    "index": 5098,
    "word": "bring around",
    "transcription": "[brɪŋəˈraʊnd]",
    "translation": "убедить"
  },
  {
    "index": 5099,
    "word": "talk around",
    "transcription": "[tɔːkəˈraʊnd]",
    "translation": "убедить"
  },
  {
    "index": 5100,
    "word": "laundry",
    "transcription": "[ˈlɔːndri]",
    "translation": "прачечная"
  },
  {
    "index": 5101,
    "word": "launder",
    "transcription": "[ˈlɔːndə]",
    "translation": "стирать, отмывать"
  },
  {
    "index": 5102,
    "word": "state",
    "transcription": "[steɪt]",
    "translation": "заявить, отметить"
  },
  {
    "index": 5103,
    "word": "statement",
    "transcription": "[ˈsteɪtmənt]",
    "translation": "заявление"
  },
  {
    "index": 5104,
    "word": "make sure",
    "transcription": "[meɪkʃʊə]",
    "translation": "убедиться"
  },
  {
    "index": 5105,
    "word": "pending",
    "transcription": "[ˈpɛndɪŋ]",
    "translation": "в ожидании, на рассмотрении"
  },
  {
    "index": 5106,
    "word": "alternate",
    "transcription": "[ɔːlˈtɜːnɪt]",
    "translation": "чередовать, чередующийся"
  },
  {
    "index": 5107,
    "word": "alternation",
    "transcription": "[ˌɔːltəˈneɪʃ(ə)n]",
    "translation": "чередование"
  },
  {
    "index": 5108,
    "word": "alongside",
    "transcription": "[əˈlɒŋˈsaɪd]",
    "translation": "рядом"
  },
  {
    "index": 5109,
    "word": "sweetheart",
    "transcription": "[ˈswiːthɑːt]",
    "translation": "возлюбленный (ая), милый"
  },
  {
    "index": 5110,
    "word": "face up to",
    "transcription": "[feɪsʌptuː]",
    "translation": "принять (обстоятельства)"
  },
  {
    "index": 5111,
    "word": "owl",
    "transcription": "[aʊl]",
    "translation": "сова"
  },
  {
    "index": 5112,
    "word": "embody",
    "transcription": "[ɪmˈbɒdi]",
    "translation": "олицетворять"
  },
  {
    "index": 5113,
    "word": "embodiment",
    "transcription": "[ɪmˈbɒdɪmənt]",
    "translation": "воплощение"
  },
  {
    "index": 5114,
    "word": "riddle",
    "transcription": "[ˈrɪdl]",
    "translation": "загадка"
  },
  {
    "index": 5115,
    "word": "predominant",
    "transcription": "[prɪˈdɒmɪnənt]",
    "translation": "преобладающий"
  },
  {
    "index": 5116,
    "word": "predominance",
    "transcription": "[prɪˈdɒmɪnəns]",
    "translation": "преобладание"
  },
  {
    "index": 5117,
    "word": "hustle",
    "transcription": "[ˈhʌsl]",
    "translation": "толкаться, торопиться"
  },
  {
    "index": 5118,
    "word": "hound",
    "transcription": "[haʊnd]",
    "translation": "охотничья собака, об. гончая"
  },
  {
    "index": 5119,
    "word": "superficial",
    "transcription": "[ˌsjuːpəˈfɪʃəl]",
    "translation": "поверхностный"
  },
  {
    "index": 5120,
    "word": "socket",
    "transcription": "[ˈsɒkɪt]",
    "translation": "разъем, розетка"
  },
  {
    "index": 5121,
    "word": "chapel",
    "transcription": "[ˈʃæpəl]",
    "translation": "часовня"
  },
  {
    "index": 5122,
    "word": "chaplain",
    "transcription": "[ˈʧæplɪn]",
    "translation": "капеллан"
  },
  {
    "index": 5123,
    "word": "whistle",
    "transcription": "[ˈwɪsl]",
    "translation": "свист, свистеть, свисток"
  },
  {
    "index": 5124,
    "word": "union",
    "transcription": "[ˈjuːnjən]",
    "translation": "союз"
  },
  {
    "index": 5125,
    "word": "menace",
    "transcription": "[ˈmɛnəs]",
    "translation": "угроза, угрожать"
  },
  {
    "index": 5126,
    "word": "illuminate",
    "transcription": "[ɪˈljuːmɪneɪt]",
    "translation": "освещать"
  },
  {
    "index": 5127,
    "word": "illumination",
    "transcription": "[ɪˌljuːmɪˈneɪʃən]",
    "translation": "освещение"
  },
  {
    "index": 5128,
    "word": "helm",
    "transcription": "[hɛlm]",
    "translation": "руль, штурвал"
  },
  {
    "index": 5129,
    "word": "humiliate",
    "transcription": "[hju(ː)ˈmɪlɪeɪt]",
    "translation": "унижать"
  },
  {
    "index": 5130,
    "word": "humility",
    "transcription": "[hju(ː)ˈmɪlɪti]",
    "translation": "смирение"
  },
  {
    "index": 5131,
    "word": "comprise",
    "transcription": "[kəmˈpraɪz]",
    "translation": "состоять из, охватывать"
  },
  {
    "index": 5132,
    "word": "whisk",
    "transcription": "[wɪsk]",
    "translation": "сделать быстрое движение"
  },
  {
    "index": 5133,
    "word": "pack",
    "transcription": "[pæk]",
    "translation": "упаковывать, собирать"
  },
  {
    "index": 5134,
    "word": "unpack",
    "transcription": "[ʌnˈpæk]",
    "translation": "распаковывать"
  },
  {
    "index": 5135,
    "word": "Easter",
    "transcription": "[ˈiːstə]",
    "translation": "Пасха"
  },
  {
    "index": 5136,
    "word": "lateral",
    "transcription": "[ˈlætərəl]",
    "translation": "боковой"
  },
  {
    "index": 5137,
    "word": "multilateral",
    "transcription": "[ˌmʌltɪˈlætərəl]",
    "translation": "многосторонний"
  },
  {
    "index": 5138,
    "word": "bilateral",
    "transcription": "[baɪˈlætərəl]",
    "translation": "двусторонний"
  },
  {
    "index": 5139,
    "word": "glitter",
    "transcription": "[ˈglɪtə]",
    "translation": "блеск, блестеть, сверкать"
  },
  {
    "index": 5140,
    "word": "chant",
    "transcription": "[ʧɑːnt]",
    "translation": "петь, скандировать, песнопение"
  },
  {
    "index": 5141,
    "word": "reel",
    "transcription": "[riːl]",
    "translation": "катушка, наматывать"
  },
  {
    "index": 5142,
    "word": "tease",
    "transcription": "[tiːz]",
    "translation": "дразнить"
  },
  {
    "index": 5143,
    "word": "settle on",
    "transcription": "[ˈsɛtlɒn]",
    "translation": "определиться, договориться"
  },
  {
    "index": 5144,
    "word": "mileage",
    "transcription": "[ˈmaɪlɪʤ]",
    "translation": "пробег"
  },
  {
    "index": 5145,
    "word": "credential",
    "transcription": "[krɪˈdɛnʃəl]",
    "translation": "удостоверение, аккредитация"
  },
  {
    "index": 5146,
    "word": "share",
    "transcription": "[ʃeə]",
    "translation": "разделять (напр. мнение)"
  },
  {
    "index": 5147,
    "word": "sideways",
    "transcription": "[ˈsaɪdweɪz]",
    "translation": "вбок"
  },
  {
    "index": 5148,
    "word": "fable",
    "transcription": "[ˈfeɪbl]",
    "translation": "басня"
  },
  {
    "index": 5149,
    "word": "knack",
    "transcription": "[næk]",
    "translation": "умение, сноровка"
  },
  {
    "index": 5150,
    "word": "hawk",
    "transcription": "[hɔːk]",
    "translation": "ястреб"
  },
  {
    "index": 5151,
    "word": "recede",
    "transcription": "[ri(ː)ˈsiːd]",
    "translation": "убывать"
  },
  {
    "index": 5152,
    "word": "scour",
    "transcription": "[ˈskaʊə]",
    "translation": "обыскать, прочесать"
  },
  {
    "index": 5153,
    "word": "earnest",
    "transcription": "[ˈɜːnɪst]",
    "translation": "серьёзный, ревностный"
  },
  {
    "index": 5154,
    "word": "in earnest",
    "transcription": "[ɪnˈɜːnɪst]",
    "translation": "всерьез"
  },
  {
    "index": 5155,
    "word": "transparent",
    "transcription": "[trænsˈpeərənt]",
    "translation": "прозрачный"
  },
  {
    "index": 5156,
    "word": "transparency",
    "transcription": "[trænsˈpeərənsi]",
    "translation": "прозрачность"
  },
  {
    "index": 5157,
    "word": "heir",
    "transcription": "[eə]",
    "translation": "наследник"
  },
  {
    "index": 5158,
    "word": "heiress",
    "transcription": "[ˈeərɪs]",
    "translation": "наследница"
  },
  {
    "index": 5159,
    "word": "intern",
    "transcription": "[ˈɪntɜːn]",
    "translation": "стажёр"
  },
  {
    "index": 5160,
    "word": "internship",
    "transcription": "[ˈɪntɜːnʃɪp]",
    "translation": "стажировка"
  },
  {
    "index": 5161,
    "word": "rake",
    "transcription": "[reɪk]",
    "translation": "грабли"
  },
  {
    "index": 5162,
    "word": "rake in",
    "transcription": "[reɪkɪn]",
    "translation": "загребать"
  },
  {
    "index": 5163,
    "word": "empire",
    "transcription": "[ˈɛmpaɪə]",
    "translation": "империя"
  },
  {
    "index": 5164,
    "word": "flurry",
    "transcription": "[ˈflʌri]",
    "translation": "поток, шквал"
  },
  {
    "index": 5165,
    "word": "broom",
    "transcription": "[brʊm]",
    "translation": "метла, веник"
  },
  {
    "index": 5166,
    "word": "scramble",
    "transcription": "[ˈskræmbl]",
    "translation": "карабкаться, продираться"
  },
  {
    "index": 5167,
    "word": "altitude",
    "transcription": "[ˈæltɪtjuːd]",
    "translation": "высота"
  },
  {
    "index": 5168,
    "word": "numeric (numerical)",
    "transcription": "[nju]",
    "translation": "числовой, цифровой"
  },
  {
    "index": 5169,
    "word": "bring along",
    "transcription": "[brɪŋəˈlɒŋ]",
    "translation": "взять с собой"
  },
  {
    "index": 5170,
    "word": "chew",
    "transcription": "[ʧuː]",
    "translation": "жевать"
  },
  {
    "index": 5171,
    "word": "tar",
    "transcription": "[tɑː]",
    "translation": "смола"
  },
  {
    "index": 5172,
    "word": "homicide",
    "transcription": "[ˈhɒmɪsaɪd]",
    "translation": "убийство"
  },
  {
    "index": 5173,
    "word": "homicidal",
    "transcription": "[ˌhɒmɪˈsaɪdl]",
    "translation": "смертоносный"
  },
  {
    "index": 5174,
    "word": "mentor",
    "transcription": "[ˈmɛntɔː]",
    "translation": "наставник"
  },
  {
    "index": 5175,
    "word": "turn off",
    "transcription": "[tɜːnɒf]",
    "translation": "свернуть (с дороги)"
  },
  {
    "index": 5176,
    "word": "mammal",
    "transcription": "[ˈmæməl]",
    "translation": "млекопитающее"
  },
  {
    "index": 5177,
    "word": "sting (stung, stung)",
    "transcription": "[stɪŋ]",
    "translation": "жалить, жало"
  },
  {
    "index": 5178,
    "word": "vocabulary",
    "transcription": "[vəʊˈkæbjʊləri]",
    "translation": "словарный запас"
  },
  {
    "index": 5179,
    "word": "beast",
    "transcription": "[biːst]",
    "translation": "зверь, животное, скот"
  },
  {
    "index": 5180,
    "word": "beastly",
    "transcription": "[ˈbiːstli]",
    "translation": "зверский"
  },
  {
    "index": 5181,
    "word": "foil",
    "transcription": "[fɔɪl]",
    "translation": "фольга"
  },
  {
    "index": 5182,
    "word": "jump at",
    "transcription": "[ʤʌmpæt]",
    "translation": "ухватиться (за возможность)"
  },
  {
    "index": 5183,
    "word": "cardboard",
    "transcription": "[ˈkɑːdbɔːd]",
    "translation": "картон"
  },
  {
    "index": 5184,
    "word": "ivory",
    "transcription": "[ˈaɪvəri]",
    "translation": "слоновая кость"
  },
  {
    "index": 5185,
    "word": "lever",
    "transcription": "[ˈliːvə]",
    "translation": "рычаг, ручка"
  },
  {
    "index": 5186,
    "word": "leverage",
    "transcription": "[ˈliːvərɪʤ]",
    "translation": "действие рычага"
  },
  {
    "index": 5187,
    "word": "tuition",
    "transcription": "[tju(ː)ˈɪʃən]",
    "translation": "обучение, плата за обучение"
  },
  {
    "index": 5188,
    "word": "syringe",
    "transcription": "[ˈsɪrɪnʤ]",
    "translation": "шприц"
  },
  {
    "index": 5189,
    "word": "whore",
    "transcription": "[hɔː]",
    "translation": "шлюха"
  },
  {
    "index": 5190,
    "word": "someday",
    "transcription": "[ˈsʌmˌdeɪ]",
    "translation": "когда-нибудь"
  },
  {
    "index": 5191,
    "word": "rehearse",
    "transcription": "[rɪˈhɜːs]",
    "translation": "репетировать"
  },
  {
    "index": 5192,
    "word": "rehearsal",
    "transcription": "[rɪˈhɜːsəl]",
    "translation": "репетиция"
  },
  {
    "index": 5193,
    "word": "terrify",
    "transcription": "[ˈtɛrɪfaɪ]",
    "translation": "устрашать"
  },
  {
    "index": 5194,
    "word": "terrific",
    "transcription": "[təˈrɪfɪk]",
    "translation": "ужасающий, потрясающий"
  },
  {
    "index": 5195,
    "word": "clash",
    "transcription": "[klæʃ]",
    "translation": "столкновение"
  },
  {
    "index": 5196,
    "word": "tack",
    "transcription": "[tæk]",
    "translation": "канцелярская кнопка, гвоздик"
  },
  {
    "index": 5197,
    "word": "maritime",
    "transcription": "[ˈmærɪtaɪm]",
    "translation": "морской"
  },
  {
    "index": 5198,
    "word": "dwindle",
    "transcription": "[ˈdwɪndl]",
    "translation": "постепенно уменьшаться"
  },
  {
    "index": 5199,
    "word": "nasty",
    "transcription": "[ˈnɑːsti]",
    "translation": "противный"
  },
  {
    "index": 5200,
    "word": "poultry",
    "transcription": "[ˈpəʊltri]",
    "translation": "домашняя птица"
  },
  {
    "index": 5201,
    "word": "deduct",
    "transcription": "[dɪˈdʌkt]",
    "translation": "вычитать (об. про деньги)"
  },
  {
    "index": 5202,
    "word": "deduction",
    "transcription": "[dɪˈdʌkʃən]",
    "translation": "вычет"
  },
  {
    "index": 5203,
    "word": "tend",
    "transcription": "[tɛnd]",
    "translation": "ухаживать"
  },
  {
    "index": 5204,
    "word": "wise up",
    "transcription": "[waɪzʌp]",
    "translation": "поумнеть, стать мудрее"
  },
  {
    "index": 5205,
    "word": "preclude",
    "transcription": "[prɪˈkluːd]",
    "translation": "исключить, помешать"
  },
  {
    "index": 5206,
    "word": "coward",
    "transcription": "[ˈkaʊəd]",
    "translation": "трус"
  },
  {
    "index": 5207,
    "word": "cowardice",
    "transcription": "[ˈkaʊədɪs]",
    "translation": "трусость"
  },
  {
    "index": 5208,
    "word": "tow",
    "transcription": "[təʊ]",
    "translation": "буксир или эвакуатор, буксировать"
  },
  {
    "index": 5209,
    "word": "perpetual",
    "transcription": "[pəˈpɛʧʊəl]",
    "translation": "вечный, постоянный"
  },
  {
    "index": 5210,
    "word": "resolve",
    "transcription": "[rɪˈzɒlv]",
    "translation": "разрешить (ситуацию)"
  },
  {
    "index": 5211,
    "word": "unresolved",
    "transcription": "[ˌʌnrɪˈzɒlvd]",
    "translation": "неразрешенный"
  },
  {
    "index": 5212,
    "word": "bait",
    "transcription": "[beɪt]",
    "translation": "приманка"
  },
  {
    "index": 5213,
    "word": "spoon-bait",
    "transcription": "[ˈspuːnbeɪt]",
    "translation": "блесна"
  },
  {
    "index": 5214,
    "word": "calm down",
    "transcription": "[kɑːmdaʊn]",
    "translation": "успокоиться"
  },
  {
    "index": 5215,
    "word": "quiet down",
    "transcription": "[ˈkwaɪətdaʊn]",
    "translation": "успокоиться"
  },
  {
    "index": 5216,
    "word": "settle down",
    "transcription": "[ˈsɛtldaʊn]",
    "translation": "успокоится"
  },
  {
    "index": 5217,
    "word": "bark",
    "transcription": "[bɑːk]",
    "translation": "кора"
  },
  {
    "index": 5218,
    "word": "clump",
    "transcription": "[klʌmp]",
    "translation": "комок, кучка, клок"
  },
  {
    "index": 5219,
    "word": "knock together",
    "transcription": "[nɒktəˈgɛðə]",
    "translation": "слепить, соорудить"
  },
  {
    "index": 5220,
    "word": "aggravate",
    "transcription": "[ˈægrəveɪt]",
    "translation": "обострять"
  },
  {
    "index": 5221,
    "word": "aggravation",
    "transcription": "[ˌægrəˈveɪʃ(ə)n]",
    "translation": "усугубление"
  },
  {
    "index": 5222,
    "word": "splinter",
    "transcription": "[ˈsplɪntə]",
    "translation": "шепка, осколок, заноза"
  },
  {
    "index": 5223,
    "word": "fuss",
    "transcription": "[fʌs]",
    "translation": "суетиться"
  },
  {
    "index": 5224,
    "word": "fussy",
    "transcription": "[ˈfʌsi]",
    "translation": "суетливый"
  },
  {
    "index": 5225,
    "word": "sway",
    "transcription": "[sweɪ]",
    "translation": "раскачивать"
  },
  {
    "index": 5226,
    "word": "sloppy",
    "transcription": "[ˈslɒpi]",
    "translation": "небрежный, неряшливый"
  },
  {
    "index": 5227,
    "word": "cinnamon",
    "transcription": "[ˈsɪnəmən]",
    "translation": "корица"
  },
  {
    "index": 5228,
    "word": "uphold",
    "transcription": "[ʌpˈhəʊld]",
    "translation": "соблюдать, поддерживать"
  },
  {
    "index": 5229,
    "word": "scarce",
    "transcription": "[skeəs]",
    "translation": "редкий, скудный"
  },
  {
    "index": 5230,
    "word": "scarcely",
    "transcription": "[ˈskeəsli]",
    "translation": "едва"
  },
  {
    "index": 5231,
    "word": "scarcity",
    "transcription": "[ˈskeəsɪti]",
    "translation": "дефицит"
  },
  {
    "index": 5232,
    "word": "abundant",
    "transcription": "[əˈbʌndənt]",
    "translation": "обильный"
  },
  {
    "index": 5233,
    "word": "abundance",
    "transcription": "[əˈbʌndəns]",
    "translation": "изобилие"
  },
  {
    "index": 5234,
    "word": "subdue",
    "transcription": "[səbˈdjuː]",
    "translation": "подавить, укротить"
  },
  {
    "index": 5235,
    "word": "fur",
    "transcription": "[fɜː]",
    "translation": "мех"
  },
  {
    "index": 5236,
    "word": "furry",
    "transcription": "[ˈfɜːri]",
    "translation": "пушистый"
  },
  {
    "index": 5237,
    "word": "freshen up",
    "transcription": "[ˈfrɛʃnʌp]",
    "translation": "освежить(ся)"
  },
  {
    "index": 5238,
    "word": "peculiar",
    "transcription": "[pɪˈkjuːliə]",
    "translation": "своеобразный, особый"
  },
  {
    "index": 5239,
    "word": "peculiarity",
    "transcription": "[pɪˌkjuːlɪˈærɪti]",
    "translation": "особенность"
  },
  {
    "index": 5240,
    "word": "duke",
    "transcription": "[djuːk]",
    "translation": "герцог"
  },
  {
    "index": 5241,
    "word": "duchess",
    "transcription": "[ˈdʌʧɪs]",
    "translation": "герцогиня"
  },
  {
    "index": 5242,
    "word": "dukedom",
    "transcription": "[ˈdjuːkdəm]",
    "translation": "герцогство"
  },
  {
    "index": 5243,
    "word": "saliva",
    "transcription": "[səˈlaɪvə]",
    "translation": "слюна"
  },
  {
    "index": 5244,
    "word": "refrigerator",
    "transcription": "[rɪˈfrɪʤəreɪtə]",
    "translation": "холодильник"
  },
  {
    "index": 5245,
    "word": "fridge",
    "transcription": "[frɪʤ]",
    "translation": "холодильник"
  },
  {
    "index": 5246,
    "word": "straightforward",
    "transcription": "[streɪtˈfɔːwəd]",
    "translation": "простой, прямой, откровенный"
  },
  {
    "index": 5247,
    "word": "clay",
    "transcription": "[kleɪ]",
    "translation": "глина"
  },
  {
    "index": 5248,
    "word": "stocking",
    "transcription": "[ˈstɒkɪŋ]",
    "translation": "чулок"
  },
  {
    "index": 5249,
    "word": "go together",
    "transcription": "[gəʊtəˈgɛðə]",
    "translation": "сочетаться"
  },
  {
    "index": 5250,
    "word": "loft",
    "transcription": "[lɒft]",
    "translation": "чердак, верхний нежилой этаж"
  },
  {
    "index": 5251,
    "word": "lofty",
    "transcription": "[ˈlɒfti]",
    "translation": "возвышенный"
  },
  {
    "index": 5252,
    "word": "liven up",
    "transcription": "[ˈlaɪvnʌp]",
    "translation": "оживить, взбодрить"
  },
  {
    "index": 5253,
    "word": "siege",
    "transcription": "[siːʤ]",
    "translation": "осада"
  },
  {
    "index": 5254,
    "word": "besieged",
    "transcription": "[bɪˈsiːʤd]",
    "translation": "осажденный"
  },
  {
    "index": 5255,
    "word": "bud",
    "transcription": "[bʌd]",
    "translation": "бутон или почка растения"
  },
  {
    "index": 5256,
    "word": "rectangle",
    "transcription": "[ˈrɛkˌtæŋgl]",
    "translation": "прямоугольник"
  },
  {
    "index": 5257,
    "word": "rectangular",
    "transcription": "[rɛkˈtæŋgjʊlə]",
    "translation": "прямоугольный"
  },
  {
    "index": 5258,
    "word": "fabulous",
    "transcription": "[ˈfæbjʊləs]",
    "translation": "невероятный, легендарный"
  },
  {
    "index": 5259,
    "word": "kite",
    "transcription": "[kaɪt]",
    "translation": "коршун или воздушный змей"
  },
  {
    "index": 5260,
    "word": "fetch",
    "transcription": "[fɛʧ]",
    "translation": "сходить принести"
  },
  {
    "index": 5261,
    "word": "tray",
    "transcription": "[treɪ]",
    "translation": "лоток, поднос, поддон"
  },
  {
    "index": 5262,
    "word": "quiz",
    "transcription": "[kwɪz]",
    "translation": "викторина, тест, опрос"
  },
  {
    "index": 5263,
    "word": "donkey",
    "transcription": "[ˈdɒŋki]",
    "translation": "осел"
  },
  {
    "index": 5264,
    "word": "mansion",
    "transcription": "[ˈmænʃən]",
    "translation": "особняк, здание"
  },
  {
    "index": 5265,
    "word": "plural",
    "transcription": "[ˈplʊərəl]",
    "translation": "множественное число"
  },
  {
    "index": 5266,
    "word": "plurality",
    "transcription": "[plʊəˈrælɪti]",
    "translation": "множественность"
  },
  {
    "index": 5267,
    "word": "sovereign",
    "transcription": "[ˈsɒvrɪn]",
    "translation": "суверенный"
  },
  {
    "index": 5268,
    "word": "sovereignty",
    "transcription": "[ˈsɒvrənti]",
    "translation": "суверенитет"
  },
  {
    "index": 5269,
    "word": "seam",
    "transcription": "[siːm]",
    "translation": "шов"
  },
  {
    "index": 5270,
    "word": "seamless",
    "transcription": "[ˈsiːmlɪs]",
    "translation": "бесшовный"
  },
  {
    "index": 5271,
    "word": "recipient",
    "transcription": "[rɪˈsɪpɪənt]",
    "translation": "получатель"
  },
  {
    "index": 5272,
    "word": "hustle",
    "transcription": "[ˈhʌsl]",
    "translation": "нечестно добыть (амер.)"
  },
  {
    "index": 5273,
    "word": "canopy",
    "transcription": "[ˈkænəpi]",
    "translation": "навес, тент, полог"
  },
  {
    "index": 5274,
    "word": "barn",
    "transcription": "[bɑːn]",
    "translation": "сарай"
  },
  {
    "index": 5275,
    "word": "recess",
    "transcription": "[rɪˈsɛs]",
    "translation": "перерыв"
  },
  {
    "index": 5276,
    "word": "rod",
    "transcription": "[rɒd]",
    "translation": "стержень, прут"
  },
  {
    "index": 5277,
    "word": "fishing rod",
    "transcription": "[ˈfɪʃɪŋrɒd]",
    "translation": "удочка"
  },
  {
    "index": 5278,
    "word": "bale",
    "transcription": "[beɪl]",
    "translation": "тюк"
  },
  {
    "index": 5279,
    "word": "sew",
    "transcription": "[səʊ]",
    "translation": "шить"
  },
  {
    "index": 5280,
    "word": "sew up",
    "transcription": "[səʊʌp]",
    "translation": "зашить"
  },
  {
    "index": 5281,
    "word": "sew on",
    "transcription": "[səʊɒn]",
    "translation": "пришить"
  },
  {
    "index": 5282,
    "word": "speak up",
    "transcription": "[spiːkʌp]",
    "translation": "говорить громче"
  },
  {
    "index": 5283,
    "word": "commute",
    "transcription": "[kəˈmjuːt]",
    "translation": "ходить, курсировать"
  },
  {
    "index": 5284,
    "word": "commuter",
    "transcription": "[kəˈmjuːtə]",
    "translation": "пассажир"
  },
  {
    "index": 5285,
    "word": "purse",
    "transcription": "[pɜːs]",
    "translation": "кошелек, сумочка"
  },
  {
    "index": 5286,
    "word": "sum up",
    "transcription": "[sʌmʌp]",
    "translation": "подытожить"
  },
  {
    "index": 5287,
    "word": "censorship",
    "transcription": "[ˈsɛnsəʃɪp]",
    "translation": "цензура"
  },
  {
    "index": 5288,
    "word": "censor",
    "transcription": "[ˈsɛnsə]",
    "translation": "цензор"
  },
  {
    "index": 5289,
    "word": "potent",
    "transcription": "[ˈpəʊtənt]",
    "translation": "мощный, могущественный"
  },
  {
    "index": 5290,
    "word": "impotent",
    "transcription": "[ˈɪmpətənt]",
    "translation": "бессильный"
  },
  {
    "index": 5291,
    "word": "dash",
    "transcription": "[dæʃ]",
    "translation": "тире, чёрточка"
  },
  {
    "index": 5292,
    "word": "dashed",
    "transcription": "[dæʃt]",
    "translation": "пунктирная"
  },
  {
    "index": 5293,
    "word": "timetable",
    "transcription": "[ˈtaɪmˌteɪb(ə)l]",
    "translation": "расписание"
  },
  {
    "index": 5294,
    "word": "snarl",
    "transcription": "[snɑːl]",
    "translation": "рычать, огрызаться"
  },
  {
    "index": 5295,
    "word": "graze",
    "transcription": "[greɪz]",
    "translation": "пасти(сь)"
  },
  {
    "index": 5296,
    "word": "chimney",
    "transcription": "[ˈʧɪmni]",
    "translation": "дымовая труба"
  },
  {
    "index": 5297,
    "word": "manure",
    "transcription": "[məˈnjʊə]",
    "translation": "навоз"
  },
  {
    "index": 5298,
    "word": "ledge",
    "transcription": "[lɛʤ]",
    "translation": "уступ"
  },
  {
    "index": 5299,
    "word": "squat",
    "transcription": "[skwɒt]",
    "translation": "приседать, приземистый"
  },
  {
    "index": 5300,
    "word": "stalk",
    "transcription": "[stɔːk]",
    "translation": "красться, преследовать"
  },
  {
    "index": 5301,
    "word": "stalker",
    "transcription": "[ˈstɔːkə]",
    "translation": "преследователь"
  },
  {
    "index": 5302,
    "word": "ditch",
    "transcription": "[dɪʧ]",
    "translation": "ров"
  },
  {
    "index": 5303,
    "word": "prophet",
    "transcription": "[ˈprɒfɪt]",
    "translation": "пророк"
  },
  {
    "index": 5304,
    "word": "prophetic",
    "transcription": "[prəˈfɛtɪk]",
    "translation": "пророческий"
  },
  {
    "index": 5305,
    "word": "prophecy",
    "transcription": "[ˈprɒfɪsi]",
    "translation": "пророчество"
  },
  {
    "index": 5306,
    "word": "cellular",
    "transcription": "[ˈsɛljʊlə]",
    "translation": "сотовый"
  },
  {
    "index": 5307,
    "word": "cell phone",
    "transcription": "[sɛlfəʊn]",
    "translation": "мобильник"
  },
  {
    "index": 5308,
    "word": "dawn on",
    "transcription": "[dɔːnɒn]",
    "translation": "осенить"
  },
  {
    "index": 5309,
    "word": "inflame",
    "transcription": "[ɪnˈfleɪm]",
    "translation": "разжигать (в осн. перен.)"
  },
  {
    "index": 5310,
    "word": "inflammation",
    "transcription": "[ˌɪnfləˈmeɪʃən]",
    "translation": "воспаление, воспламенение"
  },
  {
    "index": 5311,
    "word": "dude",
    "transcription": "[djuːd]",
    "translation": "чувак"
  },
  {
    "index": 5312,
    "word": "get used to",
    "transcription": "[gɛtjuːzdtuː]",
    "translation": "привыкнуть"
  },
  {
    "index": 5313,
    "word": "be used to",
    "transcription": "[biːjuːzdtuː]",
    "translation": "быть привычным к"
  },
  {
    "index": 5314,
    "word": "thereafter",
    "transcription": "[ðeərˈɑːftə]",
    "translation": "впоследствии"
  },
  {
    "index": 5315,
    "word": "stick out",
    "transcription": "[stɪkaʊt]",
    "translation": "торчать, выделяться"
  },
  {
    "index": 5316,
    "word": "oak",
    "transcription": "[əʊk]",
    "translation": "дуб"
  },
  {
    "index": 5317,
    "word": "flight",
    "transcription": "[flaɪt]",
    "translation": "бегство"
  },
  {
    "index": 5318,
    "word": "memoirs",
    "transcription": "[ˈmɛmwɑːz]",
    "translation": "мемуары"
  },
  {
    "index": 5319,
    "word": "porter",
    "transcription": "[ˈpɔːtə]",
    "translation": "носильщик или порьте"
  },
  {
    "index": 5320,
    "word": "smack",
    "transcription": "[smæk]",
    "translation": "шлёпнуть, хлопнуть"
  },
  {
    "index": 5321,
    "word": "dismantle",
    "transcription": "[dɪsˈmæntl]",
    "translation": "разобрать, демонтировать"
  },
  {
    "index": 5322,
    "word": "frontier",
    "transcription": "[ˈfrʌntɪə]",
    "translation": "граница"
  },
  {
    "index": 5323,
    "word": "collide",
    "transcription": "[kəˈlaɪd]",
    "translation": "сталкиваться"
  },
  {
    "index": 5324,
    "word": "collision",
    "transcription": "[kəˈlɪʒən]",
    "translation": "столкновение"
  },
  {
    "index": 5325,
    "word": "dent",
    "transcription": "[dɛnt]",
    "translation": "вмятина"
  },
  {
    "index": 5326,
    "word": "indentation",
    "transcription": "[ˌɪndɛnˈteɪʃən]",
    "translation": "углубление"
  },
  {
    "index": 5327,
    "word": "exempt",
    "transcription": "[ɪgˈzɛmpt]",
    "translation": "освободить (от), освобождение"
  },
  {
    "index": 5328,
    "word": "exemption",
    "transcription": "[ɪgˈzɛmpʃən]",
    "translation": "освобождение"
  },
  {
    "index": 5329,
    "word": "dazzle",
    "transcription": "[ˈdæzl]",
    "translation": "ослепить"
  },
  {
    "index": 5330,
    "word": "moist",
    "transcription": "[mɔɪst]",
    "translation": "влажный"
  },
  {
    "index": 5331,
    "word": "moisten",
    "transcription": "[ˈmɔɪsn]",
    "translation": "увлажнить"
  },
  {
    "index": 5332,
    "word": "moisture",
    "transcription": "[ˈmɔɪsʧə]",
    "translation": "влажность"
  },
  {
    "index": 5333,
    "word": "merit",
    "transcription": "[ˈmɛrɪt]",
    "translation": "заслуга, заслуживать"
  },
  {
    "index": 5334,
    "word": "closure",
    "transcription": "[ˈkləʊʒə]",
    "translation": "закрытие, завершение"
  },
  {
    "index": 5335,
    "word": "act on",
    "transcription": "[æktɒn]",
    "translation": "действовать в соответствии"
  },
  {
    "index": 5336,
    "word": "astound",
    "transcription": "[əsˈtaʊnd]",
    "translation": "изумлять"
  },
  {
    "index": 5337,
    "word": "plaster",
    "transcription": "[ˈplɑːstə]",
    "translation": "штукатурка или гипс"
  },
  {
    "index": 5338,
    "word": "plasterwork",
    "transcription": "[plasterwork]",
    "translation": "штукатурка"
  },
  {
    "index": 5339,
    "word": "put off",
    "transcription": "[pʊtɒf]",
    "translation": "откладывать"
  },
  {
    "index": 5340,
    "word": "hold off",
    "transcription": "[həʊldɒf]",
    "translation": "откладывать"
  },
  {
    "index": 5341,
    "word": "robust",
    "transcription": "[rəʊˈbʌst]",
    "translation": "крепкий, надёжный, здоровый"
  },
  {
    "index": 5342,
    "word": "robustness",
    "transcription": "[rəʊˈbʌstnəs]",
    "translation": "прочность"
  },
  {
    "index": 5343,
    "word": "shuffle",
    "transcription": "[ˈʃʌfl]",
    "translation": "перемешивать, тасовать"
  },
  {
    "index": 5344,
    "word": "reshuffle",
    "transcription": "[ˌriːˈʃʌfl]",
    "translation": "перетасовать"
  },
  {
    "index": 5345,
    "word": "comedian",
    "transcription": "[kəˈmiːdiən]",
    "translation": "комик"
  },
  {
    "index": 5346,
    "word": "nuisance",
    "transcription": "[ˈnjuːsns]",
    "translation": "неприятность, неудобство"
  },
  {
    "index": 5347,
    "word": "lead up to",
    "transcription": "[liːdʌptuː]",
    "translation": "предшествовать"
  },
  {
    "index": 5348,
    "word": "inflict",
    "transcription": "[ɪnˈflɪkt]",
    "translation": "причинять, наносить"
  },
  {
    "index": 5349,
    "word": "infliction",
    "transcription": "[ɪnˈflɪkʃən]",
    "translation": "причинение"
  },
  {
    "index": 5350,
    "word": "ramble",
    "transcription": "[ˈræmbl]",
    "translation": "бродить, блуждать"
  },
  {
    "index": 5351,
    "word": "rambler",
    "transcription": "[ˈræmblə]",
    "translation": "праздно шатающийся, бродяга"
  },
  {
    "index": 5352,
    "word": "beetle",
    "transcription": "[ˈbiːtl]",
    "translation": "жук"
  },
  {
    "index": 5353,
    "word": "leftover",
    "transcription": "[ˈlɛftˈəʊvə]",
    "translation": "остаток"
  },
  {
    "index": 5354,
    "word": "hunch",
    "transcription": "[hʌnʧ]",
    "translation": "горб, горбиться"
  },
  {
    "index": 5355,
    "word": "tumble",
    "transcription": "[ˈtʌmbl]",
    "translation": "перевернуться, кувыркнуться"
  },
  {
    "index": 5356,
    "word": "handwriting",
    "transcription": "[ˈhændˌraɪtɪŋ]",
    "translation": "почерк"
  },
  {
    "index": 5357,
    "word": "handwritten",
    "transcription": "[ˌhændˈrɪt(ə)n]",
    "translation": "рукописный"
  },
  {
    "index": 5358,
    "word": "geared to",
    "transcription": "[gɪədtuː]",
    "translation": "направлен на"
  },
  {
    "index": 5359,
    "word": "twirl",
    "transcription": "[twɜːl]",
    "translation": "вертеть"
  },
  {
    "index": 5360,
    "word": "hinder",
    "transcription": "[ˈhaɪndə]",
    "translation": "мешать, затруднять"
  },
  {
    "index": 5361,
    "word": "unhindered",
    "transcription": "[ˌʌnˈhɪndəd]",
    "translation": "беспрепятственный"
  },
  {
    "index": 5362,
    "word": "hindrance",
    "transcription": "[ˈhɪndrəns]",
    "translation": "помеха"
  },
  {
    "index": 5363,
    "word": "strawberry",
    "transcription": "[ˈstrɔːbəri]",
    "translation": "клубника"
  },
  {
    "index": 5364,
    "word": "livestock",
    "transcription": "[ˈlaɪvstɒk]",
    "translation": "скот"
  },
  {
    "index": 5365,
    "word": "snug",
    "transcription": "[snʌg]",
    "translation": "уютный, тесный"
  },
  {
    "index": 5366,
    "word": "snuggle",
    "transcription": "[ˈsnʌgl]",
    "translation": "уютно расположиться"
  },
  {
    "index": 5367,
    "word": "hoof",
    "transcription": "[huːf]",
    "translation": "копыто"
  },
  {
    "index": 5368,
    "word": "handicap",
    "transcription": "[ˈhændɪkæp]",
    "translation": "помеха, недостаток"
  },
  {
    "index": 5369,
    "word": "handicapped",
    "transcription": "[ˈhændɪkæpt]",
    "translation": "инвалид (устар.)"
  },
  {
    "index": 5370,
    "word": "vent",
    "transcription": "[vɛnt]",
    "translation": "выход, отдушина"
  },
  {
    "index": 5371,
    "word": "venting",
    "transcription": "[ˈvɛntɪŋ]",
    "translation": "вентиляция"
  },
  {
    "index": 5372,
    "word": "pick up",
    "transcription": "[pɪkʌp]",
    "translation": "прибрать"
  },
  {
    "index": 5373,
    "word": "mediocre",
    "transcription": "[ˈmiːdɪəʊkə]",
    "translation": "посредственный"
  },
  {
    "index": 5374,
    "word": "mediocrity",
    "transcription": "[ˌmiːdɪˈɒkrɪti]",
    "translation": "посредственность"
  },
  {
    "index": 5375,
    "word": "stir up",
    "transcription": "[stɜːrʌp]",
    "translation": "вызвать, возбудить"
  },
  {
    "index": 5376,
    "word": "monetary",
    "transcription": "[ˈmʌnɪtəri]",
    "translation": "валютный, денежный"
  },
  {
    "index": 5377,
    "word": "seduce",
    "transcription": "[sɪˈdjuːs]",
    "translation": "соблазнять"
  },
  {
    "index": 5378,
    "word": "seduction",
    "transcription": "[sɪˈdʌkʃən]",
    "translation": "соблазнение"
  },
  {
    "index": 5379,
    "word": "seductive",
    "transcription": "[sɪˈdʌktɪv]",
    "translation": "соблазнительный"
  },
  {
    "index": 5380,
    "word": "drip",
    "transcription": "[drɪp]",
    "translation": "капля, капать"
  },
  {
    "index": 5381,
    "word": "carbohydrate",
    "transcription": "[ˈkɑːbəʊˈhaɪdreɪt]",
    "translation": "углевод"
  },
  {
    "index": 5382,
    "word": "aerial",
    "transcription": "[ˈeərɪəl]",
    "translation": "воздушный"
  },
  {
    "index": 5383,
    "word": "missing",
    "transcription": "[ˈmɪsɪŋ]",
    "translation": "пропавший, отсутствующий"
  },
  {
    "index": 5384,
    "word": "outlet",
    "transcription": "[ˈaʊtlɛt]",
    "translation": "выход (отверстие)"
  },
  {
    "index": 5385,
    "word": "outdoor (outdoors)",
    "transcription": "[ˈaʊtdɔː]",
    "translation": "на улице"
  },
  {
    "index": 5386,
    "word": "indoor (indoors)",
    "transcription": "[ˈɪndɔː]",
    "translation": "в помещении"
  },
  {
    "index": 5387,
    "word": "axe (ax)",
    "transcription": "[æks]",
    "translation": "топор"
  },
  {
    "index": 5388,
    "word": "recess",
    "transcription": "[rɪˈsɛs]",
    "translation": "выемка, впадина"
  },
  {
    "index": 5389,
    "word": "curse",
    "transcription": "[kɜːs]",
    "translation": "проклятие"
  },
  {
    "index": 5390,
    "word": "divert",
    "transcription": "[daɪˈvɜːt]",
    "translation": "отвлечь, развлечь"
  },
  {
    "index": 5391,
    "word": "diversion",
    "transcription": "[daɪˈvɜːʃən]",
    "translation": "отвлечение"
  },
  {
    "index": 5392,
    "word": "masterpiece",
    "transcription": "[ˈmɑːstəpiːs]",
    "translation": "шедевр"
  },
  {
    "index": 5393,
    "word": "masterwork",
    "transcription": "[masterwork]",
    "translation": "шедевр"
  },
  {
    "index": 5394,
    "word": "kidney",
    "transcription": "[ˈkɪdni]",
    "translation": "почка"
  },
  {
    "index": 5395,
    "word": "torch",
    "transcription": "[tɔːʧ]",
    "translation": "факел, горелка"
  },
  {
    "index": 5396,
    "word": "vice versa",
    "transcription": "[vaɪsˈvɜːsə]",
    "translation": "(и) наоборот"
  },
  {
    "index": 5397,
    "word": "rationale",
    "transcription": "[ˌræʃəˈnɑːl]",
    "translation": "основание, обоснование"
  },
  {
    "index": 5398,
    "word": "parsley",
    "transcription": "[ˈpɑːsli]",
    "translation": "петрушка"
  },
  {
    "index": 5399,
    "word": "lash (eyelash)",
    "transcription": "[læʃ]",
    "translation": "ресница"
  },
  {
    "index": 5400,
    "word": "gust",
    "transcription": "[gʌst]",
    "translation": "порыв"
  },
  {
    "index": 5401,
    "word": "gusty",
    "transcription": "[ˈgʌsti]",
    "translation": "порывистый"
  },
  {
    "index": 5402,
    "word": "twig",
    "transcription": "[twɪg]",
    "translation": "прут, веточка"
  },
  {
    "index": 5403,
    "word": "lay out",
    "transcription": "[leɪaʊt]",
    "translation": "выложить, разложить"
  },
  {
    "index": 5404,
    "word": "obedience",
    "transcription": "[əˈbiːdiəns]",
    "translation": "покорность"
  },
  {
    "index": 5405,
    "word": "obedient",
    "transcription": "[əˈbiːdiənt]",
    "translation": "послушный"
  },
  {
    "index": 5406,
    "word": "disobedience",
    "transcription": "[ˌdɪsəˈbiːdjəns]",
    "translation": "непослушание"
  },
  {
    "index": 5407,
    "word": "disobedient",
    "transcription": "[ˌdɪsəˈbiːdiənt]",
    "translation": "непослушный"
  },
  {
    "index": 5408,
    "word": "caviar",
    "transcription": "[ˈkævɪɑː]",
    "translation": "икра"
  },
  {
    "index": 5409,
    "word": "tile",
    "transcription": "[taɪl]",
    "translation": "плитка, черепица"
  },
  {
    "index": 5410,
    "word": "folder",
    "transcription": "[ˈfəʊldə]",
    "translation": "папка"
  },
  {
    "index": 5411,
    "word": "maiden",
    "transcription": "[ˈmeɪdn]",
    "translation": "дева, девственница"
  },
  {
    "index": 5412,
    "word": "hold on",
    "transcription": "[həʊldɒn]",
    "translation": "оставаться на линии"
  },
  {
    "index": 5413,
    "word": "chin",
    "transcription": "[ʧɪn]",
    "translation": "подбородок"
  },
  {
    "index": 5414,
    "word": "afflict",
    "transcription": "[əˈflɪkt]",
    "translation": "поражать, вредить"
  },
  {
    "index": 5415,
    "word": "affliction",
    "transcription": "[əˈflɪkʃ(ə)n]",
    "translation": "недуг или скорбь"
  },
  {
    "index": 5416,
    "word": "sediment",
    "transcription": "[ˈsɛdɪmənt]",
    "translation": "осадок"
  },
  {
    "index": 5417,
    "word": "scoop",
    "transcription": "[skuːp]",
    "translation": "совок, ковш, черпать"
  },
  {
    "index": 5418,
    "word": "pedestrian",
    "transcription": "[pɪˈdɛstrɪən]",
    "translation": "пешеход"
  },
  {
    "index": 5419,
    "word": "provisional",
    "transcription": "[prəˈvɪʒənl]",
    "translation": "предварительный, временный"
  },
  {
    "index": 5420,
    "word": "gown",
    "transcription": "[gaʊn]",
    "translation": "платье"
  },
  {
    "index": 5421,
    "word": "buckle",
    "transcription": "[ˈbʌkl]",
    "translation": "пряжка"
  },
  {
    "index": 5422,
    "word": "zip",
    "transcription": "[zɪp]",
    "translation": "застёгивать"
  },
  {
    "index": 5423,
    "word": "zipper",
    "transcription": "[ˈzɪpə]",
    "translation": "молния (застёжка)"
  },
  {
    "index": 5424,
    "word": "riot",
    "transcription": "[ˈraɪət]",
    "translation": "бунт"
  },
  {
    "index": 5425,
    "word": "riotous",
    "transcription": "[ˈraɪətəs]",
    "translation": "буйный, шумный"
  },
  {
    "index": 5426,
    "word": "ambiguous",
    "transcription": "[æmˈbɪgjʊəs]",
    "translation": "двусмысленный, неоднозначный"
  },
  {
    "index": 5427,
    "word": "unambiguous",
    "transcription": "[ˌʌnæmˈbɪgjʊəs]",
    "translation": "недвусмысленный"
  },
  {
    "index": 5428,
    "word": "ambiguity",
    "transcription": "[ˌæmbɪˈgju(ː)ɪti]",
    "translation": "неоднозначность"
  },
  {
    "index": 5429,
    "word": "vigil",
    "transcription": "[ˈvɪʤɪl]",
    "translation": "дежурство, бдение"
  },
  {
    "index": 5430,
    "word": "vigilant",
    "transcription": "[ˈvɪʤɪlənt]",
    "translation": "бдительный"
  },
  {
    "index": 5431,
    "word": "vigilance",
    "transcription": "[ˈvɪʤɪləns]",
    "translation": "зоркость"
  },
  {
    "index": 5432,
    "word": "toll",
    "transcription": "[təʊl]",
    "translation": "плата, пошлина, тариф"
  },
  {
    "index": 5433,
    "word": "courtyard",
    "transcription": "[ˈkɔːtˌjɑːd]",
    "translation": "внутренний двор"
  },
  {
    "index": 5434,
    "word": "haste",
    "transcription": "[heɪst]",
    "translation": "спешка"
  },
  {
    "index": 5435,
    "word": "make haste",
    "transcription": "[meɪkheɪst]",
    "translation": "спешить"
  },
  {
    "index": 5436,
    "word": "hasten",
    "transcription": "[ˈheɪsn]",
    "translation": "спешить"
  },
  {
    "index": 5437,
    "word": "hasty",
    "transcription": "[ˈheɪsti]",
    "translation": "поспешный"
  },
  {
    "index": 5438,
    "word": "atop",
    "transcription": "[əˈtɒp]",
    "translation": "наверху"
  },
  {
    "index": 5439,
    "word": "mesh",
    "transcription": "[mɛʃ]",
    "translation": "сетка"
  },
  {
    "index": 5440,
    "word": "martial",
    "transcription": "[ˈmɑːʃəl]",
    "translation": "боевой, военный"
  },
  {
    "index": 5441,
    "word": "pastry",
    "transcription": "[ˈpeɪstri]",
    "translation": "выпечка, тесто"
  },
  {
    "index": 5442,
    "word": "fluctuate",
    "transcription": "[ˈflʌktjʊeɪt]",
    "translation": "колебаться"
  },
  {
    "index": 5443,
    "word": "fluctuation",
    "transcription": "[ˌflʌktjʊˈeɪʃən]",
    "translation": "колебания"
  },
  {
    "index": 5444,
    "word": "overhead",
    "transcription": "[ˈəʊvɛhɛd]",
    "translation": "над головой"
  },
  {
    "index": 5445,
    "word": "smear",
    "transcription": "[smɪə]",
    "translation": "мазать"
  },
  {
    "index": 5446,
    "word": "endeavor (endeavour)",
    "transcription": "[ɪnˈdɛvə]",
    "translation": "стремиться, стараться, попытка"
  },
  {
    "index": 5447,
    "word": "infamous",
    "transcription": "[ˈɪnfəməs]",
    "translation": "печально известный, постыдный"
  },
  {
    "index": 5448,
    "word": "nibble on",
    "transcription": "[ˈnɪblɒn]",
    "translation": "покусывать, обгрызать"
  },
  {
    "index": 5449,
    "word": "brittle",
    "transcription": "[ˈbrɪtl]",
    "translation": "ломкий"
  },
  {
    "index": 5450,
    "word": "brittleness",
    "transcription": "[ˈbrɪtlnəs]",
    "translation": "хрупкость"
  },
  {
    "index": 5451,
    "word": "ridicule",
    "transcription": "[ˈrɪdɪkjuːl]",
    "translation": "высмеивать, осмеяние"
  },
  {
    "index": 5452,
    "word": "demolish",
    "transcription": "[dɪˈmɒlɪʃ]",
    "translation": "сносить"
  },
  {
    "index": 5453,
    "word": "demolition",
    "transcription": "[ˌdɛməˈlɪʃən]",
    "translation": "снос"
  },
  {
    "index": 5454,
    "word": "opaque",
    "transcription": "[əʊˈpeɪk]",
    "translation": "непрозрачный"
  },
  {
    "index": 5455,
    "word": "opacity",
    "transcription": "[əʊˈpæsɪti]",
    "translation": "непрозрачность"
  },
  {
    "index": 5456,
    "word": "foam",
    "transcription": "[fəʊm]",
    "translation": "пена"
  },
  {
    "index": 5457,
    "word": "foamy",
    "transcription": "[ˈfəʊmi]",
    "translation": "пенистый"
  },
  {
    "index": 5458,
    "word": "blush",
    "transcription": "[blʌʃ]",
    "translation": "румянец, краснеть"
  },
  {
    "index": 5459,
    "word": "blushing",
    "transcription": "[ˈblʌʃɪŋ]",
    "translation": "застенчивый"
  },
  {
    "index": 5460,
    "word": "prod",
    "transcription": "[prɒd]",
    "translation": "ткнуть (чтобы сдвинуть)"
  },
  {
    "index": 5461,
    "word": "tolerate",
    "transcription": "[ˈtɒləreɪt]",
    "translation": "терпеть"
  },
  {
    "index": 5462,
    "word": "tolerant",
    "transcription": "[ˈtɒlərənt]",
    "translation": "терпимый"
  },
  {
    "index": 5463,
    "word": "tolerance",
    "transcription": "[ˈtɒlərəns]",
    "translation": "толерантность"
  },
  {
    "index": 5464,
    "word": "hunch",
    "transcription": "[hʌnʧ]",
    "translation": "догадка, предчуствие"
  },
  {
    "index": 5465,
    "word": "smash",
    "transcription": "[smæʃ]",
    "translation": "громить, разбивать"
  },
  {
    "index": 5466,
    "word": "smashed",
    "transcription": "[smæʃt]",
    "translation": "пьяный в жопу"
  },
  {
    "index": 5467,
    "word": "maple",
    "transcription": "[ˈmeɪpl]",
    "translation": "клён"
  },
  {
    "index": 5468,
    "word": "batter",
    "transcription": "[ˈbætə]",
    "translation": "паста, тесто, взбивать"
  },
  {
    "index": 5469,
    "word": "addition",
    "transcription": "[əˈdɪʃ(ə)n]",
    "translation": "добавление, сложение"
  },
  {
    "index": 5470,
    "word": "additional",
    "transcription": "[əˈdɪʃənl]",
    "translation": "дополнительный"
  },
  {
    "index": 5471,
    "word": "in addition",
    "transcription": "[ɪnəˈdɪʃ(ə)n]",
    "translation": "вдобавок"
  },
  {
    "index": 5472,
    "word": "stitch",
    "transcription": "[stɪʧ]",
    "translation": "стежок, сшить, зашить"
  },
  {
    "index": 5473,
    "word": "stitched",
    "transcription": "[stɪʧt]",
    "translation": "сшитые"
  },
  {
    "index": 5474,
    "word": "relish",
    "transcription": "[ˈrɛlɪʃ]",
    "translation": "наслаждаться"
  },
  {
    "index": 5475,
    "word": "modify",
    "transcription": "[ˈmɒdɪfaɪ]",
    "translation": "видоизменять"
  },
  {
    "index": 5476,
    "word": "modification",
    "transcription": "[ˌmɒdɪfɪˈkeɪʃən]",
    "translation": "видоизменение"
  },
  {
    "index": 5477,
    "word": "cleave",
    "transcription": "[kliːv]",
    "translation": "раскалывать"
  },
  {
    "index": 5478,
    "word": "cleft",
    "transcription": "[klɛft]",
    "translation": "расщелина"
  },
  {
    "index": 5479,
    "word": "farewell",
    "transcription": "[ˈfeəˈwɛl]",
    "translation": "прощальный, прощание"
  },
  {
    "index": 5480,
    "word": "lapse",
    "transcription": "[læps]",
    "translation": "упущение, оплошность"
  },
  {
    "index": 5481,
    "word": "take away",
    "transcription": "[teɪkəˈweɪ]",
    "translation": "отнять"
  },
  {
    "index": 5482,
    "word": "ponder",
    "transcription": "[ˈpɒndə]",
    "translation": "обдумывать"
  },
  {
    "index": 5483,
    "word": "wear off",
    "transcription": "[weərɒf]",
    "translation": "сойти на нет, выветриться"
  },
  {
    "index": 5484,
    "word": "plump",
    "transcription": "[plʌmp]",
    "translation": "пухлый"
  },
  {
    "index": 5485,
    "word": "plumpness",
    "transcription": "[ˈplʌmpnəs]",
    "translation": "округлость"
  },
  {
    "index": 5486,
    "word": "efficacy",
    "transcription": "[ˈɛfɪkəsi]",
    "translation": "результативность"
  },
  {
    "index": 5487,
    "word": "own up to",
    "transcription": "[əʊnʌptuː]",
    "translation": "признаться, согласиться"
  },
  {
    "index": 5488,
    "word": "glare",
    "transcription": "[gleə]",
    "translation": "яркий свет, ослеплять"
  },
  {
    "index": 5489,
    "word": "glaring",
    "transcription": "[ˈgleərɪŋ]",
    "translation": "яркий, вопиющий"
  },
  {
    "index": 5490,
    "word": "prop",
    "transcription": "[prɒp]",
    "translation": "подпирать, подпорка"
  },
  {
    "index": 5491,
    "word": "crusade",
    "transcription": "[kruːˈseɪd]",
    "translation": "крестовый поход"
  },
  {
    "index": 5492,
    "word": "crusader",
    "transcription": "[ˈkruːˈseɪdə]",
    "translation": "крестоносец"
  },
  {
    "index": 5493,
    "word": "mercy",
    "transcription": "[ˈmɜːsi]",
    "translation": "милость, милосердие"
  },
  {
    "index": 5494,
    "word": "merciful",
    "transcription": "[ˈmɜːsɪfʊl]",
    "translation": "милостивый"
  },
  {
    "index": 5495,
    "word": "merciless",
    "transcription": "[ˈmɜːsɪlɪs]",
    "translation": "беспощадный"
  },
  {
    "index": 5496,
    "word": "call back",
    "transcription": "[kɔːlbæk]",
    "translation": "перезвонить"
  },
  {
    "index": 5497,
    "word": "wreath",
    "transcription": "[riːθ]",
    "translation": "венок"
  },
  {
    "index": 5498,
    "word": "verge",
    "transcription": "[vɜːʤ]",
    "translation": "обочина"
  },
  {
    "index": 5499,
    "word": "prolong",
    "transcription": "[prəʊˈlɒŋ]",
    "translation": "продлить"
  },
  {
    "index": 5500,
    "word": "prolongation",
    "transcription": "[ˌprəʊlɒŋˈgeɪʃən]",
    "translation": "продление"
  },
  {
    "index": 5501,
    "word": "monastery",
    "transcription": "[ˈmɒnəstəri]",
    "translation": "монастырь"
  },
  {
    "index": 5502,
    "word": "muzzle",
    "transcription": "[ˈmʌzl]",
    "translation": "морда или намордник"
  },
  {
    "index": 5503,
    "word": "monk",
    "transcription": "[mʌŋk]",
    "translation": "монах"
  },
  {
    "index": 5504,
    "word": "slant",
    "transcription": "[slɑːnt]",
    "translation": "наклон, скос, наклонять"
  },
  {
    "index": 5505,
    "word": "partition",
    "transcription": "[pɑːˈtɪʃən]",
    "translation": "раздел"
  },
  {
    "index": 5506,
    "word": "go down",
    "transcription": "[gəʊdaʊn]",
    "translation": "быть принятым"
  },
  {
    "index": 5507,
    "word": "dictionary",
    "transcription": "[ˈdɪkʃ(ə)n(ə)ri]",
    "translation": "словарь"
  },
  {
    "index": 5508,
    "word": "notorious",
    "transcription": "[nəʊˈtɔːrɪəs]",
    "translation": "известный, пресловутый"
  },
  {
    "index": 5509,
    "word": "notoriety",
    "transcription": "[ˌnəʊtəˈraɪəti]",
    "translation": "дурная слава"
  },
  {
    "index": 5510,
    "word": "incidence",
    "transcription": "[ˈɪnsɪdəns]",
    "translation": "частотность, распространённость"
  },
  {
    "index": 5511,
    "word": "discern",
    "transcription": "[dɪˈsɜːn]",
    "translation": "различить, распознать"
  },
  {
    "index": 5512,
    "word": "discernible",
    "transcription": "[dɪˈsɜːnəbl]",
    "translation": "различимый"
  },
  {
    "index": 5513,
    "word": "discernment",
    "transcription": "[dɪˈsɜːnmənt]",
    "translation": "проницательность"
  },
  {
    "index": 5514,
    "word": "well-being",
    "transcription": "[wɛl-ˈbiːɪŋ]",
    "translation": "благополучие"
  },
  {
    "index": 5515,
    "word": "gym",
    "transcription": "[ʤɪm]",
    "translation": "спортзал"
  },
  {
    "index": 5516,
    "word": "gym teacher",
    "transcription": "[ʤɪmˈtiːʧə]",
    "translation": "тренер, физрук"
  },
  {
    "index": 5517,
    "word": "crease",
    "transcription": "[kriːs]",
    "translation": "складка, сминать"
  },
  {
    "index": 5518,
    "word": "vendor",
    "transcription": "[ˈvɛndɔː]",
    "translation": "продавец, торговец"
  },
  {
    "index": 5519,
    "word": "sack",
    "transcription": "[sæk]",
    "translation": "мешок"
  },
  {
    "index": 5520,
    "word": "hush",
    "transcription": "[hʌʃ]",
    "translation": "молчать"
  },
  {
    "index": 5521,
    "word": "cucumber",
    "transcription": "[ˈkjuːkʌmbə]",
    "translation": "огурец"
  },
  {
    "index": 5522,
    "word": "suffocate",
    "transcription": "[ˈsʌfəkeɪt]",
    "translation": "задыхаться"
  },
  {
    "index": 5523,
    "word": "suffocation",
    "transcription": "[ˌsʌfəˈkeɪʃən]",
    "translation": "удушение"
  },
  {
    "index": 5524,
    "word": "standpoint",
    "transcription": "[ˈstændpɔɪnt]",
    "translation": "точка зрения"
  },
  {
    "index": 5525,
    "word": "barren",
    "transcription": "[ˈbærən]",
    "translation": "бесплодный"
  },
  {
    "index": 5526,
    "word": "barrenness",
    "transcription": "[ˈbærənnɪs]",
    "translation": "бесплодие"
  },
  {
    "index": 5527,
    "word": "jeopardy",
    "transcription": "[ˈʤɛpədi]",
    "translation": "опасность (серьёзная)"
  },
  {
    "index": 5528,
    "word": "jeopardize",
    "transcription": "[ˈʤɛpədaɪz]",
    "translation": "подвергать опасности"
  },
  {
    "index": 5529,
    "word": "grind (ground, groud)",
    "transcription": "[graɪnd]",
    "translation": "молоть, измельчать"
  },
  {
    "index": 5530,
    "word": "highway",
    "transcription": "[ˈhaɪweɪ]",
    "translation": "шоссе"
  },
  {
    "index": 5531,
    "word": "freeway",
    "transcription": "[ˈfriːweɪ]",
    "translation": "автострада"
  },
  {
    "index": 5532,
    "word": "sober up",
    "transcription": "[ˈsəʊbərʌp]",
    "translation": "протрезветь"
  },
  {
    "index": 5533,
    "word": "apiece",
    "transcription": "[əˈpiːs]",
    "translation": "каждый, за штуку"
  },
  {
    "index": 5534,
    "word": "muck",
    "transcription": "[mʌk]",
    "translation": "грязь, мусор, навоз"
  },
  {
    "index": 5535,
    "word": "butt",
    "transcription": "[bʌt]",
    "translation": "торец, зад"
  },
  {
    "index": 5536,
    "word": "grit",
    "transcription": "[grɪt]",
    "translation": "крошка, песок, гравий"
  },
  {
    "index": 5537,
    "word": "gritty",
    "transcription": "[ˈgrɪti]",
    "translation": "песчаный"
  },
  {
    "index": 5538,
    "word": "gospel",
    "transcription": "[ˈgɒspəl]",
    "translation": "евангелие"
  },
  {
    "index": 5539,
    "word": "deaf",
    "transcription": "[dɛf]",
    "translation": "глухой"
  },
  {
    "index": 5540,
    "word": "butterfly",
    "transcription": "[ˈbʌtəflaɪ]",
    "translation": "бабочка"
  },
  {
    "index": 5541,
    "word": "bliss",
    "transcription": "[blɪs]",
    "translation": "блаженство"
  },
  {
    "index": 5542,
    "word": "blissful",
    "transcription": "[ˈblɪsfʊl]",
    "translation": "блаженный"
  },
  {
    "index": 5543,
    "word": "obsolete",
    "transcription": "[ˈɒbsəliːt]",
    "translation": "устарелый"
  },
  {
    "index": 5544,
    "word": "jolt",
    "transcription": "[ʤəʊlt]",
    "translation": "толчок, встряска"
  },
  {
    "index": 5545,
    "word": "rupture",
    "transcription": "[ˈrʌpʧə]",
    "translation": "разрыв"
  },
  {
    "index": 5546,
    "word": "cuisine",
    "transcription": "[kwi(ː)ˈziːn]",
    "translation": "кухня"
  },
  {
    "index": 5547,
    "word": "be late",
    "transcription": "[biːleɪt]",
    "translation": "опоздать"
  },
  {
    "index": 5548,
    "word": "feeble",
    "transcription": "[ˈfiːbl]",
    "translation": "слабый, немощный"
  },
  {
    "index": 5549,
    "word": "budge",
    "transcription": "[bʌʤ]",
    "translation": "сдвинуть"
  },
  {
    "index": 5550,
    "word": "adultery",
    "transcription": "[əˈdʌltəri]",
    "translation": "прелюбодеяние, неверность"
  },
  {
    "index": 5551,
    "word": "zeal",
    "transcription": "[ziːl]",
    "translation": "рвение, усердие"
  },
  {
    "index": 5552,
    "word": "zealous",
    "transcription": "[ˈzɛləs]",
    "translation": "усердный"
  },
  {
    "index": 5553,
    "word": "overzealous",
    "transcription": "[ˌəʊvəˈzɛləs]",
    "translation": "чрезмерно усердный"
  },
  {
    "index": 5554,
    "word": "blow up",
    "transcription": "[bləʊʌp]",
    "translation": "взорвать"
  },
  {
    "index": 5555,
    "word": "cub",
    "transcription": "[kʌb]",
    "translation": "детеныш"
  },
  {
    "index": 5556,
    "word": "binge",
    "transcription": "[bɪnʤ]",
    "translation": "кутёж, загул, пьянка"
  },
  {
    "index": 5557,
    "word": "crouch",
    "transcription": "[kraʊʧ]",
    "translation": "присесть, припасть к земле"
  },
  {
    "index": 5558,
    "word": "dwarf",
    "transcription": "[dwɔːf]",
    "translation": "карлик, гном"
  },
  {
    "index": 5559,
    "word": "inexplicable",
    "transcription": "[ɪnˈɛksplɪkəbl]",
    "translation": "необъяснимый"
  },
  {
    "index": 5560,
    "word": "explicable",
    "transcription": "[ˈɛksplɪkəbl]",
    "translation": "объяснимый"
  },
  {
    "index": 5561,
    "word": "ample",
    "transcription": "[ˈæmpl]",
    "translation": "обильный, широкий"
  },
  {
    "index": 5562,
    "word": "scaffold",
    "transcription": "[ˈskæfəld]",
    "translation": "помост"
  },
  {
    "index": 5563,
    "word": "scaffolding",
    "transcription": "[ˈskæfəldɪŋ]",
    "translation": "строительные леса"
  },
  {
    "index": 5564,
    "word": "colonel",
    "transcription": "[ˈkɜːnl]",
    "translation": "полковник"
  },
  {
    "index": 5565,
    "word": "vault",
    "transcription": "[vɔːlt]",
    "translation": "свод, небосвод"
  },
  {
    "index": 5566,
    "word": "snag",
    "transcription": "[snæg]",
    "translation": "коряга или загвоздка"
  },
  {
    "index": 5567,
    "word": "prick",
    "transcription": "[prɪk]",
    "translation": "колоть"
  },
  {
    "index": 5568,
    "word": "mandatory",
    "transcription": "[ˈmændətəri]",
    "translation": "обязательный"
  },
  {
    "index": 5569,
    "word": "deplete",
    "transcription": "[dɪˈpliːt]",
    "translation": "истощать"
  },
  {
    "index": 5570,
    "word": "depletion",
    "transcription": "[dɪˈpliːʃən]",
    "translation": "истощение"
  },
  {
    "index": 5571,
    "word": "ribbon",
    "transcription": "[ˈrɪbən]",
    "translation": "лента"
  },
  {
    "index": 5572,
    "word": "fume",
    "transcription": "[fjuːm]",
    "translation": "дым, испарение"
  },
  {
    "index": 5573,
    "word": "retract",
    "transcription": "[rɪˈtrækt]",
    "translation": "втягивать, брать обратно и т.д."
  },
  {
    "index": 5574,
    "word": "oats",
    "transcription": "[əʊts]",
    "translation": "овес, овсянка"
  },
  {
    "index": 5575,
    "word": "oatmeal",
    "transcription": "[ˈəʊtmiːl]",
    "translation": "овсяная каша"
  },
  {
    "index": 5576,
    "word": "wrath",
    "transcription": "[rɒθ]",
    "translation": "ярость"
  },
  {
    "index": 5577,
    "word": "wrathful",
    "transcription": "[ˈrɒθfʊl]",
    "translation": "гневный"
  },
  {
    "index": 5578,
    "word": "crate",
    "transcription": "[kreɪt]",
    "translation": "ящик"
  },
  {
    "index": 5579,
    "word": "longevity",
    "transcription": "[lɒnˈʤɛvɪti]",
    "translation": "долговечность, долголетие"
  },
  {
    "index": 5580,
    "word": "suffice",
    "transcription": "[səˈfaɪs]",
    "translation": "хватать, быть достаточным"
  },
  {
    "index": 5581,
    "word": "dull",
    "transcription": "[dʌl]",
    "translation": "скучный, унылый"
  },
  {
    "index": 5582,
    "word": "weld",
    "transcription": "[wɛld]",
    "translation": "сварка, сваривать"
  },
  {
    "index": 5583,
    "word": "fall",
    "transcription": "[fɔːl]",
    "translation": "осень (амер.)"
  },
  {
    "index": 5584,
    "word": "globe",
    "transcription": "[ˈgləʊb]",
    "translation": "мир, земной шар"
  },
  {
    "index": 5585,
    "word": "mark down",
    "transcription": "[mɑːkdaʊn]",
    "translation": "снижать ценник"
  },
  {
    "index": 5586,
    "word": "mark up",
    "transcription": "[mɑːkʌp]",
    "translation": "поднять цену"
  },
  {
    "index": 5587,
    "word": "moose",
    "transcription": "[muːs]",
    "translation": "лось"
  },
  {
    "index": 5588,
    "word": "grid",
    "transcription": "[grɪd]",
    "translation": "сетка, решётка"
  },
  {
    "index": 5589,
    "word": "parrot",
    "transcription": "[ˈpærət]",
    "translation": "попугай"
  },
  {
    "index": 5590,
    "word": "woe",
    "transcription": "[wəʊ]",
    "translation": "горе"
  },
  {
    "index": 5591,
    "word": "woeful",
    "transcription": "[ˈwəʊfʊl]",
    "translation": "горестный"
  },
  {
    "index": 5592,
    "word": "cathedral",
    "transcription": "[kəˈθiːdrəl]",
    "translation": "собор"
  },
  {
    "index": 5593,
    "word": "swift",
    "transcription": "[swɪft]",
    "translation": "быстрый, скорый"
  },
  {
    "index": 5594,
    "word": "swiftness",
    "transcription": "[ˈswɪftnəs]",
    "translation": "быстрота"
  },
  {
    "index": 5595,
    "word": "exaggerate",
    "transcription": "[ɪgˈzæʤəreɪt]",
    "translation": "преувеличивать"
  },
  {
    "index": 5596,
    "word": "exaggeration",
    "transcription": "[ɪgˌzæʤəˈreɪʃən]",
    "translation": "преувеличение"
  },
  {
    "index": 5597,
    "word": "collar",
    "transcription": "[ˈkɒlə]",
    "translation": "воротник или ошейник"
  },
  {
    "index": 5598,
    "word": "lizard",
    "transcription": "[ˈlɪzəd]",
    "translation": "ящерица"
  },
  {
    "index": 5599,
    "word": "crap",
    "transcription": "[kræp]",
    "translation": "дерьмо"
  },
  {
    "index": 5600,
    "word": "obey",
    "transcription": "[əˈbeɪ]",
    "translation": "подчиняться, слушаться"
  },
  {
    "index": 5601,
    "word": "disobey",
    "transcription": "[ˌdɪsəˈbeɪ]",
    "translation": "не слушаться"
  },
  {
    "index": 5602,
    "word": "come up with",
    "transcription": "[kʌmʌpwɪð]",
    "translation": "придумать"
  },
  {
    "index": 5603,
    "word": "squash",
    "transcription": "[skwɒʃ]",
    "translation": "раздавливать, расплющивать"
  },
  {
    "index": 5604,
    "word": "walnut",
    "transcription": "[ˈwɔːlnʌt]",
    "translation": "грецкий орех"
  },
  {
    "index": 5605,
    "word": "commend",
    "transcription": "[kəˈmɛnd]",
    "translation": "высоко оценивать"
  },
  {
    "index": 5606,
    "word": "commendable",
    "transcription": "[kəˈmɛndəbl]",
    "translation": "похвальный"
  },
  {
    "index": 5607,
    "word": "commendation",
    "transcription": "[ˌkɒmɛnˈdeɪʃən]",
    "translation": "похвала"
  },
  {
    "index": 5608,
    "word": "retarded",
    "transcription": "[rɪˈtɑːdɪd]",
    "translation": "умственно отсталый"
  },
  {
    "index": 5609,
    "word": "lush",
    "transcription": "[lʌʃ]",
    "translation": "пышный"
  },
  {
    "index": 5610,
    "word": "indulge",
    "transcription": "[ɪnˈdʌlʤ]",
    "translation": "баловать, потворствовать"
  },
  {
    "index": 5611,
    "word": "indulgent",
    "transcription": "[ɪnˈdʌlʤənt]",
    "translation": "снисходительный, терпимый"
  },
  {
    "index": 5612,
    "word": "indulgence",
    "transcription": "[ɪnˈdʌlʤəns]",
    "translation": "снисходительность, потакание"
  },
  {
    "index": 5613,
    "word": "ivy",
    "transcription": "[ˈaɪvi]",
    "translation": "плющ"
  },
  {
    "index": 5614,
    "word": "dubious",
    "transcription": "[ˈdjuːbiəs]",
    "translation": "сомнительный"
  },
  {
    "index": 5615,
    "word": "black out",
    "transcription": "[blækaʊt]",
    "translation": "вырубиться"
  },
  {
    "index": 5616,
    "word": "pass out",
    "transcription": "[pɑːsaʊt]",
    "translation": "вырубиться"
  },
  {
    "index": 5617,
    "word": "conquer",
    "transcription": "[ˈkɒŋkə]",
    "translation": "завоевать"
  },
  {
    "index": 5618,
    "word": "conqueror",
    "transcription": "[ˈkɒŋkərə]",
    "translation": "завоеватель"
  },
  {
    "index": 5619,
    "word": "plea",
    "transcription": "[pliː]",
    "translation": "просьба, требование, иск"
  },
  {
    "index": 5620,
    "word": "moth",
    "transcription": "[mɒθ]",
    "translation": "мотылёк или моль"
  },
  {
    "index": 5621,
    "word": "sponge",
    "transcription": "[spʌnʤ]",
    "translation": "губка"
  },
  {
    "index": 5622,
    "word": "spongy",
    "transcription": "[ˈspʌnʤi]",
    "translation": "губчатый"
  },
  {
    "index": 5623,
    "word": "move out",
    "transcription": "[muːvaʊt]",
    "translation": "съехать, выселиться"
  },
  {
    "index": 5624,
    "word": "move in",
    "transcription": "[muːvɪn]",
    "translation": "въехать, вселиться"
  },
  {
    "index": 5625,
    "word": "leash",
    "transcription": "[liːʃ]",
    "translation": "привязь, поводок"
  },
  {
    "index": 5626,
    "word": "unleash",
    "transcription": "[ʌnˈliːʃ]",
    "translation": "развязать"
  },
  {
    "index": 5627,
    "word": "aftermath",
    "transcription": "[ˈɑːftəmæθ]",
    "translation": "последствие, результат"
  },
  {
    "index": 5628,
    "word": "halve",
    "transcription": "[hɑːv]",
    "translation": "делить пополам"
  },
  {
    "index": 5629,
    "word": "deceive",
    "transcription": "[dɪˈsiːv]",
    "translation": "обманывать"
  },
  {
    "index": 5630,
    "word": "comrade",
    "transcription": "[ˈkɒmrɪd]",
    "translation": "товарищ"
  },
  {
    "index": 5631,
    "word": "comradeship",
    "transcription": "[ˈkɒmrɪdʃɪp]",
    "translation": "товарищество"
  },
  {
    "index": 5632,
    "word": "scold",
    "transcription": "[skəʊld]",
    "translation": "бранить, ругать"
  },
  {
    "index": 5633,
    "word": "scolding",
    "transcription": "[ˈskəʊldɪŋ]",
    "translation": "выговор"
  },
  {
    "index": 5634,
    "word": "get by",
    "transcription": "[gɛtbaɪ]",
    "translation": "обойтись, протянуть"
  },
  {
    "index": 5635,
    "word": "bout",
    "transcription": "[baʊt]",
    "translation": "бой, поединок"
  },
  {
    "index": 5636,
    "word": "premises",
    "transcription": "[ˈprɛmɪsɪz]",
    "translation": "помещение (-я)"
  },
  {
    "index": 5637,
    "word": "sprout",
    "transcription": "[spraʊt]",
    "translation": "росток, прорастать"
  },
  {
    "index": 5638,
    "word": "willow",
    "transcription": "[ˈwɪləʊ]",
    "translation": "ива"
  },
  {
    "index": 5639,
    "word": "retrospect",
    "transcription": "[ˈrɛtrəʊspɛkt]",
    "translation": "взгляд в прошлое"
  },
  {
    "index": 5640,
    "word": "retrospective",
    "transcription": "[ˌrɛtrəʊˈspɛktɪv]",
    "translation": "ретроспективный"
  },
  {
    "index": 5641,
    "word": "proverb",
    "transcription": "[ˈprɒvəb]",
    "translation": "пословица"
  },
  {
    "index": 5642,
    "word": "proverbial",
    "transcription": "[prəˈvɜːbiəl]",
    "translation": "вошедший в поговорку"
  },
  {
    "index": 5643,
    "word": "flu",
    "transcription": "[fluː]",
    "translation": "грипп"
  },
  {
    "index": 5644,
    "word": "discreet",
    "transcription": "[dɪsˈkriːt]",
    "translation": "сдержанный"
  },
  {
    "index": 5645,
    "word": "indiscreet",
    "transcription": "[ˌɪndɪsˈkriːt]",
    "translation": "нескромный"
  },
  {
    "index": 5646,
    "word": "needle",
    "transcription": "[ˈniːdl]",
    "translation": "игла"
  },
  {
    "index": 5647,
    "word": "look smb up",
    "transcription": "[lʊksmbʌp]",
    "translation": "найти (в списке и т. п.)"
  },
  {
    "index": 5648,
    "word": "interpreter",
    "transcription": "[ɪnˈtɜːprɪtə]",
    "translation": "переводчик"
  },
  {
    "index": 5649,
    "word": "squid",
    "transcription": "[skwɪd]",
    "translation": "кальмар"
  },
  {
    "index": 5650,
    "word": "abate",
    "transcription": "[əˈbeɪt]",
    "translation": "уменьшаться, ослабевать"
  },
  {
    "index": 5651,
    "word": "unabated",
    "transcription": "[ˌʌnəˈbeɪtɪd]",
    "translation": "неустанный"
  },
  {
    "index": 5652,
    "word": "get on",
    "transcription": "[gɛtɒn]",
    "translation": "быть, делать"
  },
  {
    "index": 5653,
    "word": "quaint",
    "transcription": "[kweɪnt]",
    "translation": "причудливый"
  },
  {
    "index": 5654,
    "word": "troublesome",
    "transcription": "[ˈtrʌblsəm]",
    "translation": "хлопотный, беспокойный"
  },
  {
    "index": 5655,
    "word": "candle",
    "transcription": "[ˈkændl]",
    "translation": "свеча"
  },
  {
    "index": 5656,
    "word": "candlestick",
    "transcription": "[ˈkændlstɪk]",
    "translation": "подсвечник"
  },
  {
    "index": 5657,
    "word": "testament",
    "transcription": "[ˈtɛstəmənt]",
    "translation": "завет, завещание"
  },
  {
    "index": 5658,
    "word": "stall",
    "transcription": "[stɔːl]",
    "translation": "застопориться, замедлиться"
  },
  {
    "index": 5659,
    "word": "tip smb off",
    "transcription": "[tɪpsmbɒf]",
    "translation": "предупредить, секретно сообщить"
  },
  {
    "index": 5660,
    "word": "proponent",
    "transcription": "[prəˈpəʊnənt]",
    "translation": "сторонник, поборник"
  },
  {
    "index": 5661,
    "word": "beverage",
    "transcription": "[ˈbɛvərɪʤ]",
    "translation": "напиток"
  },
  {
    "index": 5662,
    "word": "screech",
    "transcription": "[skriːʧ]",
    "translation": "визг, скрип, хрип и т. д."
  },
  {
    "index": 5663,
    "word": "hypocrite",
    "transcription": "[ˈhɪpəkrɪt]",
    "translation": "лицемер"
  },
  {
    "index": 5664,
    "word": "hypocritical",
    "transcription": "[ˌhɪpəˈkrɪtɪkəl]",
    "translation": "лицемерный"
  },
  {
    "index": 5665,
    "word": "hypocrisy",
    "transcription": "[hɪˈpɒkrəsi]",
    "translation": "лицемерие"
  },
  {
    "index": 5666,
    "word": "courtesy",
    "transcription": "[ˈkɜːtɪsi]",
    "translation": "учтивость, этикет"
  },
  {
    "index": 5667,
    "word": "courteous",
    "transcription": "[ˈkɜːtiəs]",
    "translation": "учтивый"
  },
  {
    "index": 5668,
    "word": "junk",
    "transcription": "[ʤʌŋk]",
    "translation": "барахло, хлам"
  },
  {
    "index": 5669,
    "word": "shake up",
    "transcription": "[ʃeɪkʌp]",
    "translation": "встряхнуть, взбудоражить"
  },
  {
    "index": 5670,
    "word": "get lost",
    "transcription": "[gɛtlɒst]",
    "translation": "пропасть, исчезнуть"
  },
  {
    "index": 5671,
    "word": "friendly",
    "transcription": "[ˈfrɛndli]",
    "translation": "дружелюбный"
  },
  {
    "index": 5672,
    "word": "unfriendly",
    "transcription": "[ʌnˈfrɛndli]",
    "translation": "недружественный"
  },
  {
    "index": 5673,
    "word": "forecast",
    "transcription": "[ˈfɔːkɑːst]",
    "translation": "прогноз"
  },
  {
    "index": 5674,
    "word": "check in",
    "transcription": "[ʧɛkɪn]",
    "translation": "вселиться (в отель)"
  },
  {
    "index": 5675,
    "word": "check out",
    "transcription": "[ʧɛkaʊt]",
    "translation": "освободить номер"
  },
  {
    "index": 5676,
    "word": "pull over",
    "transcription": "[pʊlˈəʊvə]",
    "translation": "притормозить ненадолго"
  },
  {
    "index": 5677,
    "word": "pull up",
    "transcription": "[pʊlʌp]",
    "translation": "подтягивать"
  },
  {
    "index": 5678,
    "word": "tidy",
    "transcription": "[ˈtaɪdi]",
    "translation": "опрятный, аккуратный"
  },
  {
    "index": 5679,
    "word": "untidy",
    "transcription": "[ʌnˈtaɪdi]",
    "translation": "неопрятный"
  },
  {
    "index": 5680,
    "word": "spotlight",
    "transcription": "[ˈspɒtlaɪt]",
    "translation": "прожектор, центр внимания"
  },
  {
    "index": 5681,
    "word": "gait",
    "transcription": "[geɪt]",
    "translation": "походка"
  },
  {
    "index": 5682,
    "word": "graph",
    "transcription": "[grɑːf]",
    "translation": "график"
  },
  {
    "index": 5683,
    "word": "bestow",
    "transcription": "[bɪˈstəʊ]",
    "translation": "даровать"
  },
  {
    "index": 5684,
    "word": "entail",
    "transcription": "[ɪnˈteɪl]",
    "translation": "влечь за собой, подразумевать"
  },
  {
    "index": 5685,
    "word": "interim",
    "transcription": "[ˈɪntərɪm]",
    "translation": "промежуточный, временный"
  },
  {
    "index": 5686,
    "word": "sketch",
    "transcription": "[skɛʧ]",
    "translation": "набросок, эскиз"
  },
  {
    "index": 5687,
    "word": "sketchy",
    "transcription": "[ˈskɛʧi]",
    "translation": "схематичный"
  },
  {
    "index": 5688,
    "word": "sketchbook",
    "transcription": "[ˈskɛʧbʊk]",
    "translation": "альбом для рисования"
  },
  {
    "index": 5689,
    "word": "bicycle",
    "transcription": "[ˈbaɪsɪkl]",
    "translation": "велосипед"
  },
  {
    "index": 5690,
    "word": "clumsy",
    "transcription": "[ˈklʌmzi]",
    "translation": "неловкий, неуклюжий"
  },
  {
    "index": 5691,
    "word": "clumsiness",
    "transcription": "[ˈklʌmzɪnəs]",
    "translation": "неуклюжесть"
  },
  {
    "index": 5692,
    "word": "perplex",
    "transcription": "[pəˈplɛks]",
    "translation": "смутить, озадачить"
  },
  {
    "index": 5693,
    "word": "perplexity",
    "transcription": "[pəˈplɛksɪti]",
    "translation": "растерянность"
  },
  {
    "index": 5694,
    "word": "scrambled eggs",
    "transcription": "[ˈskræmbldɛgz]",
    "translation": "яичница"
  },
  {
    "index": 5695,
    "word": "disparity",
    "transcription": "[dɪsˈpærɪti]",
    "translation": "неравенство"
  },
  {
    "index": 5696,
    "word": "parity",
    "transcription": "[ˈpærɪti]",
    "translation": "равенство, паритет"
  },
  {
    "index": 5697,
    "word": "footing",
    "transcription": "[ˈfʊtɪŋ]",
    "translation": "опора, основа"
  },
  {
    "index": 5698,
    "word": "stray",
    "transcription": "[streɪ]",
    "translation": "бродить, бродячий"
  },
  {
    "index": 5699,
    "word": "erase",
    "transcription": "[ɪˈreɪz]",
    "translation": "стирать"
  },
  {
    "index": 5700,
    "word": "eraser",
    "transcription": "[ɪˈreɪzə]",
    "translation": "ластик"
  },
  {
    "index": 5701,
    "word": "varnish",
    "transcription": "[ˈvɑːnɪʃ]",
    "translation": "лак, лакировать"
  },
  {
    "index": 5702,
    "word": "peddle",
    "transcription": "[ˈpɛdl]",
    "translation": "торговать вразнос"
  },
  {
    "index": 5703,
    "word": "peddler",
    "transcription": "[ˈpɛdlə]",
    "translation": "уличный торговец"
  },
  {
    "index": 5704,
    "word": "slash",
    "transcription": "[slæʃ]",
    "translation": "рубить, хлестать, кромсать"
  },
  {
    "index": 5705,
    "word": "pound",
    "transcription": "[paʊnd]",
    "translation": "долбить, толочь"
  },
  {
    "index": 5706,
    "word": "magnificent",
    "transcription": "[mægˈnɪfɪsnt]",
    "translation": "великолепный, величественный"
  },
  {
    "index": 5707,
    "word": "magnificence",
    "transcription": "[mægˈnɪfɪsns]",
    "translation": "великолепие, пышность"
  },
  {
    "index": 5708,
    "word": "disillusion",
    "transcription": "[ˌdɪsɪˈluːʒən]",
    "translation": "разочаровывать"
  },
  {
    "index": 5709,
    "word": "disillusionment",
    "transcription": "[ˌdɪsɪˈluːʒənmənt]",
    "translation": "разочарованность"
  },
  {
    "index": 5710,
    "word": "mischief",
    "transcription": "[ˈmɪsʧɪf]",
    "translation": "вред, безобразие"
  },
  {
    "index": 5711,
    "word": "choir",
    "transcription": "[ˈkwaɪə]",
    "translation": "хор"
  },
  {
    "index": 5712,
    "word": "chorus",
    "transcription": "[ˈkɔːrəs]",
    "translation": "хор"
  },
  {
    "index": 5713,
    "word": "dislocate",
    "transcription": "[ˈdɪsləʊkeɪt]",
    "translation": "вывихнуть, сместить"
  },
  {
    "index": 5714,
    "word": "dislocation",
    "transcription": "[ˌdɪsləʊˈkeɪʃən]",
    "translation": "вывих"
  },
  {
    "index": 5715,
    "word": "lifelong",
    "transcription": "[ˈlaɪflɒŋ]",
    "translation": "пожизненный"
  },
  {
    "index": 5716,
    "word": "lifetime",
    "transcription": "[ˈlaɪftaɪm]",
    "translation": "вся жизнь"
  },
  {
    "index": 5717,
    "word": "crumple",
    "transcription": "[ˈkrʌmpl]",
    "translation": "смять"
  },
  {
    "index": 5718,
    "word": "precaution",
    "transcription": "[prɪˈkɔːʃən]",
    "translation": "предосторожность"
  },
  {
    "index": 5719,
    "word": "precautionary",
    "transcription": "[prɪˈkɔːʃnəri]",
    "translation": "предупредительный"
  },
  {
    "index": 5720,
    "word": "input",
    "transcription": "[ˈɪnpʊt]",
    "translation": "вход, ввод"
  },
  {
    "index": 5721,
    "word": "clove",
    "transcription": "[kləʊv]",
    "translation": "гвоздика"
  },
  {
    "index": 5722,
    "word": "whereby",
    "transcription": "[weəˈbaɪ]",
    "translation": "посредством чего"
  },
  {
    "index": 5723,
    "word": "fatigue",
    "transcription": "[fəˈtiːg]",
    "translation": "усталость, утомление"
  },
  {
    "index": 5724,
    "word": "notify",
    "transcription": "[ˈnəʊtɪfaɪ]",
    "translation": "известить"
  },
  {
    "index": 5725,
    "word": "notification",
    "transcription": "[ˌnəʊtɪfɪˈkeɪʃən]",
    "translation": "уведомление"
  },
  {
    "index": 5726,
    "word": "shun",
    "transcription": "[ʃʌn]",
    "translation": "избегать"
  },
  {
    "index": 5727,
    "word": "cease",
    "transcription": "[siːs]",
    "translation": "прекращать"
  },
  {
    "index": 5728,
    "word": "ceaseless",
    "transcription": "[ˈsiːslɪs]",
    "translation": "непрестанный"
  },
  {
    "index": 5729,
    "word": "spooky",
    "transcription": "[ˈspuːki]",
    "translation": "жуткий"
  },
  {
    "index": 5730,
    "word": "spook",
    "transcription": "[spuːk]",
    "translation": "призрак"
  },
  {
    "index": 5731,
    "word": "fragrant",
    "transcription": "[ˈfreɪgrənt]",
    "translation": "душистый, ароматный"
  },
  {
    "index": 5732,
    "word": "fragrance",
    "transcription": "[ˈfreɪgrəns]",
    "translation": "аромат"
  },
  {
    "index": 5733,
    "word": "circus",
    "transcription": "[ˈsɜːkəs]",
    "translation": "цирк"
  },
  {
    "index": 5734,
    "word": "nude",
    "transcription": "[njuːd]",
    "translation": "обнаженный"
  },
  {
    "index": 5735,
    "word": "nudity",
    "transcription": "[ˈnjuːdɪti]",
    "translation": "нагота"
  },
  {
    "index": 5736,
    "word": "yawn",
    "transcription": "[jɔːn]",
    "translation": "зевать"
  },
  {
    "index": 5737,
    "word": "thrust",
    "transcription": "[θrʌst]",
    "translation": "сунуть, пихнуть (быстро)"
  },
  {
    "index": 5738,
    "word": "suspicious",
    "transcription": "[səsˈpɪʃəs]",
    "translation": "подозрительный"
  },
  {
    "index": 5739,
    "word": "suspicion",
    "transcription": "[səsˈpɪʃən]",
    "translation": "подозрение"
  },
  {
    "index": 5740,
    "word": "reckon",
    "transcription": "[ˈrɛkən]",
    "translation": "считать, рассчитывать"
  },
  {
    "index": 5741,
    "word": "obscure",
    "transcription": "[əbˈskjʊə]",
    "translation": "неясный, тёмный"
  },
  {
    "index": 5742,
    "word": "obscurity",
    "transcription": "[əbˈskjʊərɪti]",
    "translation": "неясность"
  },
  {
    "index": 5743,
    "word": "allure",
    "transcription": "[əˈljʊə]",
    "translation": "очарование, очаровывать"
  },
  {
    "index": 5744,
    "word": "enrich",
    "transcription": "[ɪnˈrɪʧ]",
    "translation": "обогащать"
  },
  {
    "index": 5745,
    "word": "enrichment",
    "transcription": "[ɪnˈrɪʧmənt]",
    "translation": "обогащение"
  },
  {
    "index": 5746,
    "word": "cool down",
    "transcription": "[kuːldaʊn]",
    "translation": "остыть"
  },
  {
    "index": 5747,
    "word": "peanut",
    "transcription": "[ˈpiːnʌt]",
    "translation": "арахис"
  },
  {
    "index": 5748,
    "word": "furnish",
    "transcription": "[ˈfɜːnɪʃ]",
    "translation": "предоставлять"
  },
  {
    "index": 5749,
    "word": "siblings",
    "transcription": "[ˈsɪblɪŋz]",
    "translation": "братья и сестры"
  },
  {
    "index": 5750,
    "word": "pathetic",
    "transcription": "[pəˈθɛtɪk]",
    "translation": "жалкий"
  },
  {
    "index": 5751,
    "word": "astonish",
    "transcription": "[əsˈtɒnɪʃ]",
    "translation": "изумлять"
  },
  {
    "index": 5752,
    "word": "astonishment",
    "transcription": "[əsˈtɒnɪʃmənt]",
    "translation": "изумление"
  },
  {
    "index": 5753,
    "word": "tin",
    "transcription": "[tɪn]",
    "translation": "олово или жесть"
  },
  {
    "index": 5754,
    "word": "weary",
    "transcription": "[ˈwɪəri]",
    "translation": "утомленный"
  },
  {
    "index": 5755,
    "word": "weariness",
    "transcription": "[ˈwɪərɪnɪs]",
    "translation": "усталость"
  },
  {
    "index": 5756,
    "word": "vapor",
    "transcription": "[ˈveɪpə]",
    "translation": "пар"
  },
  {
    "index": 5757,
    "word": "stubborn",
    "transcription": "[ˈstʌbən]",
    "translation": "упрямый"
  },
  {
    "index": 5758,
    "word": "stubbornness",
    "transcription": "[ˈstʌbənnɪs]",
    "translation": "упрямство"
  },
  {
    "index": 5759,
    "word": "detriment",
    "transcription": "[ˈdɛtrɪmənt]",
    "translation": "ущерб, вред"
  },
  {
    "index": 5760,
    "word": "detrimental",
    "transcription": "[ˌdɛtrɪˈmɛntl]",
    "translation": "вредный"
  },
  {
    "index": 5761,
    "word": "subordinate",
    "transcription": "[səˈbɔːdnɪt]",
    "translation": "подчиненный, подчинять"
  },
  {
    "index": 5762,
    "word": "subordination",
    "transcription": "[səˌbɔːdɪˈneɪʃən]",
    "translation": "подчинённость"
  },
  {
    "index": 5763,
    "word": "tram",
    "transcription": "[træm]",
    "translation": "трамвай"
  },
  {
    "index": 5764,
    "word": "hoard",
    "transcription": "[hɔːd]",
    "translation": "копить, накопление, клад"
  },
  {
    "index": 5765,
    "word": "denote",
    "transcription": "[dɪˈnəʊt]",
    "translation": "обозначать"
  },
  {
    "index": 5766,
    "word": "shriek",
    "transcription": "[ʃriːk]",
    "translation": "пронзительный крик, вскрикнуть"
  },
  {
    "index": 5767,
    "word": "crumble",
    "transcription": "[ˈkrʌmbl]",
    "translation": "крошить, рушиться"
  },
  {
    "index": 5768,
    "word": "chancellor",
    "transcription": "[ˈʧɑːnsələ]",
    "translation": "канцлер"
  },
  {
    "index": 5769,
    "word": "shepherd",
    "transcription": "[ˈʃɛpəd]",
    "translation": "пастух"
  },
  {
    "index": 5770,
    "word": "shepherdess",
    "transcription": "[ˈʃɛpədɪs]",
    "translation": "пастушка"
  },
  {
    "index": 5771,
    "word": "pinch",
    "transcription": "[pɪnʧ]",
    "translation": "зажать, ущипнуть"
  },
  {
    "index": 5772,
    "word": "stash",
    "transcription": "[stæʃ]",
    "translation": "тайник, заначка, прятать"
  },
  {
    "index": 5773,
    "word": "stunt",
    "transcription": "[stʌnt]",
    "translation": "трюк, выходка"
  },
  {
    "index": 5774,
    "word": "freak",
    "transcription": "[friːk]",
    "translation": "урод"
  },
  {
    "index": 5775,
    "word": "take aback",
    "transcription": "[teɪkəˈbæk]",
    "translation": "ошеломить"
  },
  {
    "index": 5776,
    "word": "chorus",
    "transcription": "[ˈkɔːrəs]",
    "translation": "припев"
  },
  {
    "index": 5777,
    "word": "repel",
    "transcription": "[rɪˈpɛl]",
    "translation": "отталкивать, отражать"
  },
  {
    "index": 5778,
    "word": "repellent",
    "transcription": "[rɪˈpɛlənt]",
    "translation": "отталкивающий"
  },
  {
    "index": 5779,
    "word": "jewel",
    "transcription": "[ˈʤuːəl]",
    "translation": "драгоценности"
  },
  {
    "index": 5780,
    "word": "jewelry (jewellery)",
    "transcription": "[ˈʤuːəlri]",
    "translation": "ювелирные изделия"
  },
  {
    "index": 5781,
    "word": "keep on",
    "transcription": "[kiːpɒn]",
    "translation": "продолжать делать"
  },
  {
    "index": 5782,
    "word": "carry on",
    "transcription": "[ˈkæriɒn]",
    "translation": "продолжать"
  },
  {
    "index": 5783,
    "word": "folly",
    "transcription": "[ˈfɒli]",
    "translation": "глупость, безумие"
  },
  {
    "index": 5784,
    "word": "feat",
    "transcription": "[fiːt]",
    "translation": "подвиг, свершение"
  },
  {
    "index": 5785,
    "word": "bulk",
    "transcription": "[bʌlk]",
    "translation": "основная масса"
  },
  {
    "index": 5786,
    "word": "spectator",
    "transcription": "[spɛkˈteɪtə]",
    "translation": "зритель, наблюдатель"
  },
  {
    "index": 5787,
    "word": "rubbish",
    "transcription": "[ˈrʌbɪʃ]",
    "translation": "мусор (в осн. брит.)"
  },
  {
    "index": 5788,
    "word": "affirm",
    "transcription": "[əˈfɜːm]",
    "translation": "утверждать, подтверждать"
  },
  {
    "index": 5789,
    "word": "affirmation",
    "transcription": "[ˌæfɜːˈmeɪʃ(ə)n]",
    "translation": "утверждение"
  },
  {
    "index": 5790,
    "word": "affirmative",
    "transcription": "[əˈfɜːmətɪv]",
    "translation": "утвердительный"
  },
  {
    "index": 5791,
    "word": "reaffirm",
    "transcription": "[ˌriːəˈfɜːm]",
    "translation": "подтверждать"
  },
  {
    "index": 5792,
    "word": "come to",
    "transcription": "[kʌmtuː]",
    "translation": "доходить до"
  },
  {
    "index": 5793,
    "word": "lust",
    "transcription": "[lʌst]",
    "translation": "вожделение, страсть"
  },
  {
    "index": 5794,
    "word": "pest",
    "transcription": "[pɛst]",
    "translation": "паразит, вредитель"
  },
  {
    "index": 5795,
    "word": "ingenious",
    "transcription": "[ɪnˈʤiːniəs]",
    "translation": "изобретательный"
  },
  {
    "index": 5796,
    "word": "rip off",
    "transcription": "[rɪpɒf]",
    "translation": "обмануть, ободрать"
  },
  {
    "index": 5797,
    "word": "marble",
    "transcription": "[ˈmɑːbl]",
    "translation": "мрамор"
  },
  {
    "index": 5798,
    "word": "tuna",
    "transcription": "[ˈtuːnə]",
    "translation": "тунец"
  },
  {
    "index": 5799,
    "word": "stab",
    "transcription": "[stæb]",
    "translation": "ударить ножом, зарезать"
  },
  {
    "index": 5800,
    "word": "feather",
    "transcription": "[ˈfɛðə]",
    "translation": "перо"
  },
  {
    "index": 5801,
    "word": "feathering",
    "transcription": "[ˈfɛðərɪŋ]",
    "translation": "оперение"
  },
  {
    "index": 5802,
    "word": "speed up",
    "transcription": "[spiːdʌp]",
    "translation": "ускориться"
  },
  {
    "index": 5803,
    "word": "succumb",
    "transcription": "[səˈkʌm]",
    "translation": "поддаться, не устоять"
  },
  {
    "index": 5804,
    "word": "nurture",
    "transcription": "[ˈnɜːʧə]",
    "translation": "растить, питать"
  },
  {
    "index": 5805,
    "word": "enlarge",
    "transcription": "[ɪnˈlɑːʤ]",
    "translation": "увеличить, расширить"
  },
  {
    "index": 5806,
    "word": "enlargement",
    "transcription": "[ɪnˈlɑːʤmənt]",
    "translation": "укрупнение"
  },
  {
    "index": 5807,
    "word": "split up",
    "transcription": "[splɪtʌp]",
    "translation": "разделиться"
  },
  {
    "index": 5808,
    "word": "harp",
    "transcription": "[hɑːp]",
    "translation": "арфа"
  },
  {
    "index": 5809,
    "word": "omit",
    "transcription": "[əˈmɪt]",
    "translation": "пропускать"
  },
  {
    "index": 5810,
    "word": "omission",
    "transcription": "[əˈmɪʃən]",
    "translation": "упущение"
  },
  {
    "index": 5811,
    "word": "thereby",
    "transcription": "[ˈðeəˈbaɪ]",
    "translation": "тем самым"
  },
  {
    "index": 5812,
    "word": "hereby",
    "transcription": "[ˈhɪəˈbaɪ]",
    "translation": "этим самым"
  },
  {
    "index": 5813,
    "word": "catch",
    "transcription": "[kæʧ]",
    "translation": "расслышать, уловить"
  },
  {
    "index": 5814,
    "word": "notwithstanding",
    "transcription": "[ˌnɒtwɪθˈstændɪŋ]",
    "translation": "несмотря на"
  },
  {
    "index": 5815,
    "word": "induce",
    "transcription": "[ɪnˈdjuːs]",
    "translation": "вызывать, побуждать"
  },
  {
    "index": 5816,
    "word": "inducement",
    "transcription": "[ɪnˈdjuːsmənt]",
    "translation": "побуждение"
  },
  {
    "index": 5817,
    "word": "lounge",
    "transcription": "[laʊnʤ]",
    "translation": "расслабляться, бездельничать"
  },
  {
    "index": 5818,
    "word": "lounger",
    "transcription": "[ˈlaʊnʤə]",
    "translation": "бездельник"
  },
  {
    "index": 5819,
    "word": "fever",
    "transcription": "[ˈfiːvə]",
    "translation": "лихорадка, жар"
  },
  {
    "index": 5820,
    "word": "feverish",
    "transcription": "[ˈfiːvərɪʃ]",
    "translation": "лихорадочный"
  },
  {
    "index": 5821,
    "word": "mug",
    "transcription": "[mʌg]",
    "translation": "кружка"
  },
  {
    "index": 5822,
    "word": "fall apart",
    "transcription": "[fɔːləˈpɑːt]",
    "translation": "развалиться"
  },
  {
    "index": 5823,
    "word": "come apart",
    "transcription": "[kʌməˈpɑːt]",
    "translation": "развалиться"
  },
  {
    "index": 5824,
    "word": "spit (spat, spat)",
    "transcription": "[spɪt]",
    "translation": "плевать"
  },
  {
    "index": 5825,
    "word": "persecute",
    "transcription": "[ˈpɜːsɪkjuːt]",
    "translation": "преследовать, травить"
  },
  {
    "index": 5826,
    "word": "persecution",
    "transcription": "[ˌpɜːsɪˈkjuːʃən]",
    "translation": "гонения"
  },
  {
    "index": 5827,
    "word": "queue",
    "transcription": "[kjuː]",
    "translation": "очередь"
  },
  {
    "index": 5828,
    "word": "get ahead of",
    "transcription": "[gɛtəˈhɛdɒv]",
    "translation": "обогнать"
  },
  {
    "index": 5829,
    "word": "crisp",
    "transcription": "[krɪsp]",
    "translation": "хрустящий"
  },
  {
    "index": 5830,
    "word": "acute",
    "transcription": "[əˈkjuːt]",
    "translation": "острый"
  },
  {
    "index": 5831,
    "word": "recount",
    "transcription": "[ˌriːˈkaʊnt]",
    "translation": "пересказать"
  },
  {
    "index": 5832,
    "word": "sensible",
    "transcription": "[ˈsɛnsəbl]",
    "translation": "разумный, имеющий смысл"
  },
  {
    "index": 5833,
    "word": "Gypsy",
    "transcription": "[ˈʤɪpsi]",
    "translation": "цыган, цыганский"
  },
  {
    "index": 5834,
    "word": "go into",
    "transcription": "[gəʊˈɪntuː]",
    "translation": "вдаваться"
  },
  {
    "index": 5835,
    "word": "bolster",
    "transcription": "[ˈbəʊlstə]",
    "translation": "укреплять, поддерживать"
  },
  {
    "index": 5836,
    "word": "sidewalk",
    "transcription": "[ˈsaɪdwɔːk]",
    "translation": "тротуар"
  },
  {
    "index": 5837,
    "word": "underscore",
    "transcription": "[ˌʌndəˈskɔː]",
    "translation": "нижнее подчеркивание"
  },
  {
    "index": 5838,
    "word": "freak out",
    "transcription": "[friːkaʊt]",
    "translation": "пугать"
  },
  {
    "index": 5839,
    "word": "wrinkle",
    "transcription": "[ˈrɪŋkl]",
    "translation": "морщина, сморщиваться"
  },
  {
    "index": 5840,
    "word": "carcass",
    "transcription": "[ˈkɑːkəs]",
    "translation": "туша"
  },
  {
    "index": 5841,
    "word": "mustache (moustache)",
    "transcription": "[məsˈtɑːʃ]",
    "translation": "усы"
  },
  {
    "index": 5842,
    "word": "step in",
    "transcription": "[stɛpɪn]",
    "translation": "вмешаться"
  },
  {
    "index": 5843,
    "word": "chill out",
    "transcription": "[ʧɪlaʊt]",
    "translation": "расслабиться"
  },
  {
    "index": 5844,
    "word": "predator",
    "transcription": "[ˈprɛdətə]",
    "translation": "хищник"
  },
  {
    "index": 5845,
    "word": "predatory",
    "transcription": "[ˈprɛdətəri]",
    "translation": "хищный, хищнический"
  },
  {
    "index": 5846,
    "word": "muster",
    "transcription": "[ˈmʌstə]",
    "translation": "собрать, согнать, мобилизовать"
  },
  {
    "index": 5847,
    "word": "pumpkin",
    "transcription": "[ˈpʌmpkɪn]",
    "translation": "тыква"
  },
  {
    "index": 5848,
    "word": "tilt",
    "transcription": "[tɪlt]",
    "translation": "наклонять, наклон"
  },
  {
    "index": 5849,
    "word": "hedge",
    "transcription": "[hɛʤ]",
    "translation": "живая изгородь"
  },
  {
    "index": 5850,
    "word": "syllable",
    "transcription": "[ˈsɪləbl]",
    "translation": "слог"
  },
  {
    "index": 5851,
    "word": "conceal",
    "transcription": "[kənˈsiːl]",
    "translation": "скрывать"
  },
  {
    "index": 5852,
    "word": "concealment",
    "transcription": "[kənˈsiːlmənt]",
    "translation": "сокрытие, маскировка"
  },
  {
    "index": 5853,
    "word": "pea",
    "transcription": "[piː]",
    "translation": "горошина"
  },
  {
    "index": 5854,
    "word": "hijack",
    "transcription": "[ˈhaɪʤæk]",
    "translation": "угонять"
  },
  {
    "index": 5855,
    "word": "strand",
    "transcription": "[strænd]",
    "translation": "застрять, сесть на мель"
  },
  {
    "index": 5856,
    "word": "look up",
    "transcription": "[lʊkʌp]",
    "translation": "улучшаться, налаживаться"
  },
  {
    "index": 5857,
    "word": "forge",
    "transcription": "[fɔːʤ]",
    "translation": "подделывать"
  },
  {
    "index": 5858,
    "word": "forgery",
    "transcription": "[ˈfɔːʤəri]",
    "translation": "подлог"
  },
  {
    "index": 5859,
    "word": "compatible",
    "transcription": "[kəmˈpætəbl]",
    "translation": "совместимый"
  },
  {
    "index": 5860,
    "word": "incompatible",
    "transcription": "[ˌɪnkəmˈpætəbl]",
    "translation": "несовместимый"
  },
  {
    "index": 5861,
    "word": "compatibility",
    "transcription": "[kəmˌpætəˈbɪlɪti]",
    "translation": "совместимость"
  },
  {
    "index": 5862,
    "word": "incompatibility",
    "transcription": "[ˌɪnkəmˌpætəˈbɪlɪti]",
    "translation": "несовместимость"
  },
  {
    "index": 5863,
    "word": "wail",
    "transcription": "[weɪl]",
    "translation": "вопить, вопль"
  },
  {
    "index": 5864,
    "word": "gravy",
    "transcription": "[ˈgreɪvi]",
    "translation": "подливка, соус"
  },
  {
    "index": 5865,
    "word": "skull",
    "transcription": "[skʌl]",
    "translation": "череп"
  },
  {
    "index": 5866,
    "word": "renovate",
    "transcription": "[ˈrɛnəʊveɪt]",
    "translation": "ремонтировать, обновлять"
  },
  {
    "index": 5867,
    "word": "renovation",
    "transcription": "[ˌrɛnəʊˈveɪʃən]",
    "translation": "ремонт, обновление"
  },
  {
    "index": 5868,
    "word": "flight attendant",
    "transcription": "[flaɪtəˈtɛndənt]",
    "translation": "бортпроводник"
  },
  {
    "index": 5869,
    "word": "decree",
    "transcription": "[dɪˈkriː]",
    "translation": "постановление, декрет, указ"
  },
  {
    "index": 5870,
    "word": "will",
    "transcription": "[wɪl]",
    "translation": "воля, желание"
  },
  {
    "index": 5871,
    "word": "willpower",
    "transcription": "[ˈwɪlˌpaʊə]",
    "translation": "сила воли"
  },
  {
    "index": 5872,
    "word": "at will",
    "transcription": "[ætwɪl]",
    "translation": "по желанию"
  },
  {
    "index": 5873,
    "word": "goodwill",
    "transcription": "[ˈgʊdˈwɪl]",
    "translation": "добрая воля, доброжелательность"
  },
  {
    "index": 5874,
    "word": "willful",
    "transcription": "[ˈwɪlf(ə)l]",
    "translation": "преднамеренный"
  },
  {
    "index": 5875,
    "word": "sparse",
    "transcription": "[spɑːs]",
    "translation": "редкий, разреженный"
  },
  {
    "index": 5876,
    "word": "burglar",
    "transcription": "[ˈbɜːglə]",
    "translation": "вор взломщик"
  },
  {
    "index": 5877,
    "word": "burglary",
    "transcription": "[ˈbɜːgləri]",
    "translation": "кража со взломом"
  },
  {
    "index": 5878,
    "word": "evade",
    "transcription": "[ɪˈveɪd]",
    "translation": "уклоняться"
  },
  {
    "index": 5879,
    "word": "evasive",
    "transcription": "[ɪˈveɪsɪv]",
    "translation": "уклончивый"
  },
  {
    "index": 5880,
    "word": "evasion",
    "transcription": "[ɪˈveɪʒən]",
    "translation": "уклонение"
  },
  {
    "index": 5881,
    "word": "clergy",
    "transcription": "[ˈklɜːʤi]",
    "translation": "духовенство"
  },
  {
    "index": 5882,
    "word": "clergyman",
    "transcription": "[ˈklɜːʤɪmən]",
    "translation": "священник"
  },
  {
    "index": 5883,
    "word": "colon",
    "transcription": "[ˈkəʊlən]",
    "translation": "двоеточие"
  },
  {
    "index": 5884,
    "word": "semicolon",
    "transcription": "[ˌsɛmɪˈkəʊlən]",
    "translation": "точка с запятой"
  },
  {
    "index": 5885,
    "word": "selfish",
    "transcription": "[ˈsɛlfɪʃ]",
    "translation": "эгоистичный"
  },
  {
    "index": 5886,
    "word": "selfishness",
    "transcription": "[ˈsɛlfɪʃnɪs]",
    "translation": "эгоизм"
  },
  {
    "index": 5887,
    "word": "unselfish",
    "transcription": "[ʌnˈsɛlfɪʃ]",
    "translation": "бескорыстный"
  },
  {
    "index": 5888,
    "word": "unselfishness",
    "transcription": "[ʌnˈsɛlfɪʃnəs]",
    "translation": "бескорыстие"
  },
  {
    "index": 5889,
    "word": "intestine",
    "transcription": "[ɪnˈtɛstɪn]",
    "translation": "кишечник"
  },
  {
    "index": 5890,
    "word": "intestinal",
    "transcription": "[ɪnˈtɛstɪnl]",
    "translation": "кишечный"
  },
  {
    "index": 5891,
    "word": "stifle",
    "transcription": "[ˈstaɪfl]",
    "translation": "удушать"
  },
  {
    "index": 5892,
    "word": "stifling",
    "transcription": "[ˈstaɪflɪŋ]",
    "translation": "душный, удушающий"
  },
  {
    "index": 5893,
    "word": "stern",
    "transcription": "[stɜːn]",
    "translation": "суровый, строгий"
  },
  {
    "index": 5894,
    "word": "sternness",
    "transcription": "[ˈstɜːnəs]",
    "translation": "суровость, строгость"
  },
  {
    "index": 5895,
    "word": "lad",
    "transcription": "[læd]",
    "translation": "парень"
  },
  {
    "index": 5896,
    "word": "abide",
    "transcription": "[əˈbaɪd]",
    "translation": "смириться, выносить"
  },
  {
    "index": 5897,
    "word": "threshold",
    "transcription": "[ˈθrɛʃˌhəʊld]",
    "translation": "порог"
  },
  {
    "index": 5898,
    "word": "goof",
    "transcription": "[guːf]",
    "translation": "балбес, придурок (амер.)"
  },
  {
    "index": 5899,
    "word": "goofy",
    "transcription": "[ˈguːfi]",
    "translation": "бестолковый"
  },
  {
    "index": 5900,
    "word": "goof off",
    "transcription": "[guːfɒf]",
    "translation": "отключаться"
  },
  {
    "index": 5901,
    "word": "wool",
    "transcription": "[wʊl]",
    "translation": "шерсть, шерстяной"
  },
  {
    "index": 5902,
    "word": "woolen",
    "transcription": "[ˈwʊlən]",
    "translation": "шерстяной"
  },
  {
    "index": 5903,
    "word": "lid",
    "transcription": "[lɪd]",
    "translation": "крышка"
  },
  {
    "index": 5904,
    "word": "quest",
    "transcription": "[kwɛst]",
    "translation": "поиск"
  },
  {
    "index": 5905,
    "word": "plow (plough)",
    "transcription": "[plaʊ]",
    "translation": "пахать, плуг"
  },
  {
    "index": 5906,
    "word": "rug",
    "transcription": "[rʌg]",
    "translation": "коврик"
  },
  {
    "index": 5907,
    "word": "cut down",
    "transcription": "[kʌtdaʊn]",
    "translation": "урезать, уменьшить"
  },
  {
    "index": 5908,
    "word": "cut back",
    "transcription": "[kʌtbæk]",
    "translation": "сокращать"
  },
  {
    "index": 5909,
    "word": "adverse",
    "transcription": "[ˈædvɜːs]",
    "translation": "неблагоприятный"
  },
  {
    "index": 5910,
    "word": "adversity",
    "transcription": "[ədˈvɜːsɪti]",
    "translation": "бедствия"
  },
  {
    "index": 5911,
    "word": "loathe",
    "transcription": "[ləʊð]",
    "translation": "ненавидеть, питать отвращение"
  },
  {
    "index": 5912,
    "word": "rebound",
    "transcription": "[rɪˈbaʊnd]",
    "translation": "отскочить, рикошет"
  },
  {
    "index": 5913,
    "word": "devour",
    "transcription": "[dɪˈvaʊə]",
    "translation": "пожирать"
  },
  {
    "index": 5914,
    "word": "penetrate",
    "transcription": "[ˈpɛnɪtreɪt]",
    "translation": "проникать"
  },
  {
    "index": 5915,
    "word": "penetration",
    "transcription": "[ˌpɛnɪˈtreɪʃən]",
    "translation": "проникновение"
  },
  {
    "index": 5916,
    "word": "shoot (shot, shot)",
    "transcription": "[ʃuːt]",
    "translation": "снимать, фотографировать"
  },
  {
    "index": 5917,
    "word": "comb",
    "transcription": "[kəʊm]",
    "translation": "расческа, причёсывать"
  },
  {
    "index": 5918,
    "word": "pasture",
    "transcription": "[ˈpɑːsʧə]",
    "translation": "пастбище"
  },
  {
    "index": 5919,
    "word": "merry",
    "transcription": "[ˈmɛri]",
    "translation": "веселый"
  },
  {
    "index": 5920,
    "word": "merriment",
    "transcription": "[ˈmɛrɪmənt]",
    "translation": "веселье"
  },
  {
    "index": 5921,
    "word": "funnel",
    "transcription": "[ˈfʌnl]",
    "translation": "воронка"
  },
  {
    "index": 5922,
    "word": "precarious",
    "transcription": "[prɪˈkeərɪəs]",
    "translation": "ненадёжный, шаткий"
  },
  {
    "index": 5923,
    "word": "precariousness",
    "transcription": "[prɪˈkeərɪəsnəs]",
    "translation": "ненадежность"
  },
  {
    "index": 5924,
    "word": "bulge",
    "transcription": "[bʌlʤ]",
    "translation": "бугор, выпуклость"
  },
  {
    "index": 5925,
    "word": "mitigate",
    "transcription": "[ˈmɪtɪgeɪt]",
    "translation": "смягчить, сгладить"
  },
  {
    "index": 5926,
    "word": "mitigation",
    "transcription": "[ˌmɪtɪˈgeɪʃən]",
    "translation": "смягчение"
  },
  {
    "index": 5927,
    "word": "twinkle",
    "transcription": "[ˈtwɪŋkl]",
    "translation": "блеск, мерцание"
  },
  {
    "index": 5928,
    "word": "thorn",
    "transcription": "[θɔːn]",
    "translation": "шип, колючка"
  },
  {
    "index": 5929,
    "word": "thorny",
    "transcription": "[ˈθɔːni]",
    "translation": "колючий"
  },
  {
    "index": 5930,
    "word": "countryside",
    "transcription": "[ˈkʌntrɪˌsaɪd]",
    "translation": "сельская местность"
  },
  {
    "index": 5931,
    "word": "country",
    "transcription": "[ˈkʌntri]",
    "translation": "сельская местность"
  },
  {
    "index": 5932,
    "word": "country man",
    "transcription": "[ˈkʌntrimæn]",
    "translation": "сельский житель"
  },
  {
    "index": 5933,
    "word": "thaw",
    "transcription": "[θɔː]",
    "translation": "оттепель, оттаивать"
  },
  {
    "index": 5934,
    "word": "evaporate",
    "transcription": "[ɪˈvæpəreɪt]",
    "translation": "испаряться"
  },
  {
    "index": 5935,
    "word": "evaporation",
    "transcription": "[ɪˌvæpəˈreɪʃən]",
    "translation": "испарение"
  },
  {
    "index": 5936,
    "word": "flank",
    "transcription": "[flæŋk]",
    "translation": "бок, фланг"
  },
  {
    "index": 5937,
    "word": "curb",
    "transcription": "[kɜːb]",
    "translation": "бордюр или обочина"
  },
  {
    "index": 5938,
    "word": "bum",
    "transcription": "[bʌm]",
    "translation": "бомж или бездельник"
  },
  {
    "index": 5939,
    "word": "exert",
    "transcription": "[ɪgˈzɜːt]",
    "translation": "приложить, оказать"
  },
  {
    "index": 5940,
    "word": "exertion",
    "transcription": "[ɪgˈzɜːʃən]",
    "translation": "усилие, напряжение"
  },
  {
    "index": 5941,
    "word": "facet",
    "transcription": "[ˈfæsɪt]",
    "translation": "грань, в т. ч. перен. (аспект)"
  },
  {
    "index": 5942,
    "word": "agitate",
    "transcription": "[ˈæʤɪteɪt]",
    "translation": "волновать"
  },
  {
    "index": 5943,
    "word": "agitation",
    "transcription": "[ˌæʤɪˈteɪʃ(ə)n]",
    "translation": "агитация"
  },
  {
    "index": 5944,
    "word": "magnify",
    "transcription": "[ˈmægnɪfaɪ]",
    "translation": "увеличивать"
  },
  {
    "index": 5945,
    "word": "magnification",
    "transcription": "[ˌmægnɪfɪˈkeɪʃən]",
    "translation": "увеличение"
  },
  {
    "index": 5946,
    "word": "magnifier",
    "transcription": "[ˈmægnɪfaɪə]",
    "translation": "увеличительное стекло"
  },
  {
    "index": 5947,
    "word": "amplify",
    "transcription": "[ˈæmplɪfaɪ]",
    "translation": "усиливать"
  },
  {
    "index": 5948,
    "word": "amplification",
    "transcription": "[ˌæmplɪfɪˈkeɪʃ(ə)n]",
    "translation": "усиление"
  },
  {
    "index": 5949,
    "word": "amplifier",
    "transcription": "[ˈæmplɪfaɪə]",
    "translation": "усилитель"
  },
  {
    "index": 5950,
    "word": "diamond",
    "transcription": "[ˈdaɪəmənd]",
    "translation": "бриллиант обычно алмаз"
  },
  {
    "index": 5951,
    "word": "ludicrous",
    "transcription": "[ˈluːdɪkrəs]",
    "translation": "нелепый, смехотворный"
  },
  {
    "index": 5952,
    "word": "horseback",
    "transcription": "[ˈhɔːsbæk]",
    "translation": "верхом"
  },
  {
    "index": 5953,
    "word": "altogether",
    "transcription": "[ˌɔːltəˈgɛðə]",
    "translation": "в целом"
  },
  {
    "index": 5954,
    "word": "tart",
    "transcription": "[tɑːt]",
    "translation": "пирог, обычно фруктовый"
  },
  {
    "index": 5955,
    "word": "miserable",
    "transcription": "[ˈmɪzərəbl]",
    "translation": "несчастный, жалкий"
  },
  {
    "index": 5956,
    "word": "abnormal",
    "transcription": "[æbˈnɔːməl]",
    "translation": "ненормальный, аномальный"
  },
  {
    "index": 5957,
    "word": "abnormality",
    "transcription": "[ˌæbnɔːˈmælɪti]",
    "translation": "ненормальность"
  },
  {
    "index": 5958,
    "word": "upright",
    "transcription": "[ˈʌpraɪt]",
    "translation": "вертикальный, стоячий"
  },
  {
    "index": 5959,
    "word": "corpse",
    "transcription": "[kɔːps]",
    "translation": "труп"
  },
  {
    "index": 5960,
    "word": "luncheon",
    "transcription": "[ˈlʌnʧən]",
    "translation": "завтрак"
  },
  {
    "index": 5961,
    "word": "billboard",
    "transcription": "[ˈbɪlbɔːd]",
    "translation": "рекламный щит"
  },
  {
    "index": 5962,
    "word": "corps",
    "transcription": "[kɔː]",
    "translation": "корпус"
  },
  {
    "index": 5963,
    "word": "upcoming",
    "transcription": "[ˌʌpˈkʌmɪŋ]",
    "translation": "предстоящий, наступающий"
  },
  {
    "index": 5964,
    "word": "oncoming",
    "transcription": "[ˈɒnˌkʌmɪŋ]",
    "translation": "приближающийся"
  },
  {
    "index": 5965,
    "word": "crank",
    "transcription": "[kræŋk]",
    "translation": "чудак, фрик"
  },
  {
    "index": 5966,
    "word": "linger",
    "transcription": "[ˈlɪŋgə]",
    "translation": "задерживаться, медлить"
  },
  {
    "index": 5967,
    "word": "lingering",
    "transcription": "[ˈlɪŋgərɪŋ]",
    "translation": "затяжной"
  },
  {
    "index": 5968,
    "word": "deed",
    "transcription": "[diːd]",
    "translation": "дело, поступок"
  },
  {
    "index": 5969,
    "word": "fracture",
    "transcription": "[ˈfrækʧə]",
    "translation": "перелом, разрушение"
  },
  {
    "index": 5970,
    "word": "hook up",
    "transcription": "[hʊkʌp]",
    "translation": "подключить, смонтировать"
  },
  {
    "index": 5971,
    "word": "crumb",
    "transcription": "[krʌm]",
    "translation": "крошка, крупица"
  },
  {
    "index": 5972,
    "word": "obscene",
    "transcription": "[ɒbˈsiːn]",
    "translation": "непристойный"
  },
  {
    "index": 5973,
    "word": "obscenity",
    "transcription": "[ɒbˈsiːnɪti]",
    "translation": "непристойность"
  },
  {
    "index": 5974,
    "word": "be off",
    "transcription": "[biːɒf]",
    "translation": "отсутствовать"
  },
  {
    "index": 5975,
    "word": "go off",
    "transcription": "[gəʊɒf]",
    "translation": "уходить"
  },
  {
    "index": 5976,
    "word": "run off",
    "transcription": "[rʌnɒf]",
    "translation": "убегать"
  },
  {
    "index": 5977,
    "word": "clench",
    "transcription": "[klɛnʧ]",
    "translation": "стиснуть, сжать"
  },
  {
    "index": 5978,
    "word": "dissent",
    "transcription": "[dɪˈsɛnt]",
    "translation": "несогласие, не соглашаться"
  },
  {
    "index": 5979,
    "word": "dissenter",
    "transcription": "[dɪˈsɛntə]",
    "translation": "несогласный, дисидент"
  },
  {
    "index": 5980,
    "word": "preliminary",
    "transcription": "[prɪˈlɪmɪnəri]",
    "translation": "предварительный"
  },
  {
    "index": 5981,
    "word": "cannon",
    "transcription": "[ˈkænən]",
    "translation": "пушка"
  },
  {
    "index": 5982,
    "word": "glue",
    "transcription": "[gluː]",
    "translation": "клей, клеить"
  },
  {
    "index": 5983,
    "word": "hoist",
    "transcription": "[hɔɪst]",
    "translation": "поднимать"
  },
  {
    "index": 5984,
    "word": "delinquent",
    "transcription": "[dɪˈlɪŋkwənt]",
    "translation": "правонарушитель"
  },
  {
    "index": 5985,
    "word": "delinquency",
    "transcription": "[dɪˈlɪŋkwənsi]",
    "translation": "преступность, правонарушение"
  },
  {
    "index": 5986,
    "word": "intake",
    "transcription": "[ˈɪnteɪk]",
    "translation": "потребление, приём"
  },
  {
    "index": 5987,
    "word": "fruitless",
    "transcription": "[ˈfruːtlɪs]",
    "translation": "бесплодный"
  },
  {
    "index": 5988,
    "word": "fruitful",
    "transcription": "[ˈfruːtfʊl]",
    "translation": "плодотворный"
  },
  {
    "index": 5989,
    "word": "invoke",
    "transcription": "[ɪnˈvəʊk]",
    "translation": "взывать, призывать"
  },
  {
    "index": 5990,
    "word": "invocation",
    "transcription": "[ˌɪnvəʊˈkeɪʃən]",
    "translation": "заклинание"
  },
  {
    "index": 5991,
    "word": "snatch",
    "transcription": "[snæʧ]",
    "translation": "схватить, утащить"
  },
  {
    "index": 5992,
    "word": "plague",
    "transcription": "[pleɪg]",
    "translation": "чума"
  },
  {
    "index": 5993,
    "word": "leisure",
    "transcription": "[ˈlɛʒə]",
    "translation": "досуг, отдых"
  },
  {
    "index": 5994,
    "word": "gratify",
    "transcription": "[ˈgrætɪfaɪ]",
    "translation": "удовлетворять, радовать"
  },
  {
    "index": 5995,
    "word": "gratification",
    "transcription": "[ˌgrætɪfɪˈkeɪʃən]",
    "translation": "удовлетворение"
  },
  {
    "index": 5996,
    "word": "foe",
    "transcription": "[fəʊ]",
    "translation": "недруг"
  },
  {
    "index": 5997,
    "word": "despise",
    "transcription": "[dɪsˈpaɪz]",
    "translation": "презирать"
  },
  {
    "index": 5998,
    "word": "clam",
    "transcription": "[klæm]",
    "translation": "моллюск"
  },
  {
    "index": 5999,
    "word": "breach",
    "transcription": "[briːʧ]",
    "translation": "брешь, прорывать, пробивать"
  },
  {
    "index": 6000,
    "word": "query",
    "transcription": "[ˈkwɪəri]",
    "translation": "запрос"
  },
  {
    "index": 6001,
    "word": "clockwise",
    "transcription": "[ˈklɒkwaɪz]",
    "translation": "по часовой стрелке"
  },
  {
    "index": 6002,
    "word": "counter clockwise",
    "transcription": "[ˈkaʊntəˈklɒkwaɪz]",
    "translation": "против часовой стрелки"
  },
  {
    "index": 6003,
    "word": "dagger",
    "transcription": "[ˈdægə]",
    "translation": "кинжал"
  },
  {
    "index": 6004,
    "word": "hose",
    "transcription": "[həʊz]",
    "translation": "шланг"
  },
  {
    "index": 6005,
    "word": "rope in (into)",
    "transcription": "[rəʊpɪn]",
    "translation": "втянуть в занятие"
  },
  {
    "index": 6006,
    "word": "bleach",
    "transcription": "[bliːʧ]",
    "translation": "отбелить, обесцветить"
  },
  {
    "index": 6007,
    "word": "engender",
    "transcription": "[ɪnˈʤɛndə]",
    "translation": "зарождать, порождать"
  },
  {
    "index": 6008,
    "word": "worship",
    "transcription": "[ˈwɜːʃɪp]",
    "translation": "почитать, поклоняться"
  },
  {
    "index": 6009,
    "word": "expanse",
    "transcription": "[ɪksˈpæns]",
    "translation": "пространство, простор"
  },
  {
    "index": 6010,
    "word": "expansive",
    "transcription": "[ɪksˈpænsɪv]",
    "translation": "обширный"
  },
  {
    "index": 6011,
    "word": "allot",
    "transcription": "[əˈlɒt]",
    "translation": "выделять, отводить"
  },
  {
    "index": 6012,
    "word": "remedy",
    "transcription": "[ˈrɛmɪdi]",
    "translation": "средство"
  },
  {
    "index": 6013,
    "word": "covet",
    "transcription": "[ˈkʌvɪt]",
    "translation": "желать, вожделеть"
  },
  {
    "index": 6014,
    "word": "sight",
    "transcription": "[saɪt]",
    "translation": "достопримечаетльность"
  },
  {
    "index": 6015,
    "word": "sightseeing",
    "transcription": "[ˈsaɪtˌsiːɪŋ]",
    "translation": "осмотр достопримечательностей"
  },
  {
    "index": 6016,
    "word": "become of",
    "transcription": "[bɪˈkʌmɒv]",
    "translation": "случиться с к-л впоследствии"
  },
  {
    "index": 6017,
    "word": "lipstick",
    "transcription": "[ˈlɪpstɪk]",
    "translation": "губная помада"
  },
  {
    "index": 6018,
    "word": "infuse",
    "transcription": "[ɪnˈfjuːz]",
    "translation": "вливать, настаивать"
  },
  {
    "index": 6019,
    "word": "infusion",
    "transcription": "[ɪnˈfjuːʒən]",
    "translation": "вливание"
  },
  {
    "index": 6020,
    "word": "patron",
    "transcription": "[ˈpeɪtrən]",
    "translation": "покровитель"
  },
  {
    "index": 6021,
    "word": "patronize",
    "transcription": "[ˈpætrənaɪz]",
    "translation": "покровительствовать"
  },
  {
    "index": 6022,
    "word": "dub",
    "transcription": "[dʌb]",
    "translation": "дублировать"
  },
  {
    "index": 6023,
    "word": "brag",
    "transcription": "[bræg]",
    "translation": "хвастаться, кичиться"
  },
  {
    "index": 6024,
    "word": "braggart",
    "transcription": "[ˈbrægət]",
    "translation": "хвастун"
  },
  {
    "index": 6025,
    "word": "tattered",
    "transcription": "[ˈtætəd]",
    "translation": "оборванный"
  },
  {
    "index": 6026,
    "word": "imprint",
    "transcription": "[ˈɪmprɪnt]",
    "translation": "отпечаток, отпечатывать"
  },
  {
    "index": 6027,
    "word": "circuit",
    "transcription": "[ˈsɜːkɪt]",
    "translation": "схема, цепь, контур"
  },
  {
    "index": 6028,
    "word": "bowel",
    "transcription": "[ˈbaʊəl]",
    "translation": "кишка"
  },
  {
    "index": 6029,
    "word": "borough",
    "transcription": "[ˈbʌrə]",
    "translation": "район, место"
  },
  {
    "index": 6030,
    "word": "plumbing",
    "transcription": "[ˈplʌmɪŋ]",
    "translation": "водопровод"
  },
  {
    "index": 6031,
    "word": "plumber",
    "transcription": "[ˈplʌmə]",
    "translation": "водопроводчик"
  },
  {
    "index": 6032,
    "word": "overtime",
    "transcription": "[ˈəʊvətaɪm]",
    "translation": "сверхурочная работа"
  },
  {
    "index": 6033,
    "word": "predecessor",
    "transcription": "[ˈpriːdɪsɛsə]",
    "translation": "предшественник"
  },
  {
    "index": 6034,
    "word": "successor",
    "transcription": "[səkˈsɛsə]",
    "translation": "преемник"
  },
  {
    "index": 6035,
    "word": "abrupt",
    "transcription": "[əˈbrʌpt]",
    "translation": "крутой, резкий"
  },
  {
    "index": 6036,
    "word": "layout",
    "transcription": "[ˈleɪaʊt]",
    "translation": "макет, расположение"
  },
  {
    "index": 6037,
    "word": "sweep",
    "transcription": "[swiːp]",
    "translation": "размах, охват"
  },
  {
    "index": 6038,
    "word": "deteriorate",
    "transcription": "[dɪˈtɪərɪəreɪt]",
    "translation": "ухудшать"
  },
  {
    "index": 6039,
    "word": "deterioration",
    "transcription": "[dɪˌtɪərɪəˈreɪʃən]",
    "translation": "ухудшение"
  },
  {
    "index": 6040,
    "word": "weed",
    "transcription": "[wiːd]",
    "translation": "сорняк, пропалывать"
  },
  {
    "index": 6041,
    "word": "weed",
    "transcription": "[wiːd]",
    "translation": "шмаль"
  },
  {
    "index": 6042,
    "word": "weedy",
    "transcription": "[ˈwiːdi]",
    "translation": "заросший"
  },
  {
    "index": 6043,
    "word": "seaweed",
    "transcription": "[ˈsiːwiːd]",
    "translation": "водоросли"
  },
  {
    "index": 6044,
    "word": "bucket",
    "transcription": "[ˈbʌkɪt]",
    "translation": "ведро, бадья"
  },
  {
    "index": 6045,
    "word": "lodge",
    "transcription": "[lɒʤ]",
    "translation": "подавать (документ)"
  },
  {
    "index": 6046,
    "word": "eternal",
    "transcription": "[i(ː)ˈtɜːnl]",
    "translation": "вечный"
  },
  {
    "index": 6047,
    "word": "eternity",
    "transcription": "[i(ː)ˈtɜːnɪti]",
    "translation": "вечность"
  },
  {
    "index": 6048,
    "word": "cheer on",
    "transcription": "[ʧɪərɒn]",
    "translation": "болеть (за спорт)"
  },
  {
    "index": 6049,
    "word": "comply",
    "transcription": "[kəmˈplaɪ]",
    "translation": "соблюдать, соответствовать"
  },
  {
    "index": 6050,
    "word": "compliant",
    "transcription": "[kəmˈplaɪənt]",
    "translation": "уступчивый, податливый"
  },
  {
    "index": 6051,
    "word": "compliance",
    "transcription": "[kəmˈplaɪəns]",
    "translation": "соблюдение, согласованность"
  },
  {
    "index": 6052,
    "word": "noncompliance",
    "transcription": "[ˈnɒnkəmˈplaɪəns]",
    "translation": "несоблюдение, несогласованность"
  },
  {
    "index": 6053,
    "word": "crook",
    "transcription": "[krʊk]",
    "translation": "сгибать, искривлять"
  },
  {
    "index": 6054,
    "word": "vicinity",
    "transcription": "[vɪˈsɪnɪti]",
    "translation": "окрестность, близость"
  },
  {
    "index": 6055,
    "word": "sausage",
    "transcription": "[ˈsɒsɪʤ]",
    "translation": "колбаса"
  },
  {
    "index": 6056,
    "word": "let in on",
    "transcription": "[lɛtɪnɒn]",
    "translation": "посвящать (в секрет, план)"
  },
  {
    "index": 6057,
    "word": "jealous",
    "transcription": "[ˈʤɛləs]",
    "translation": "ревнивый"
  },
  {
    "index": 6058,
    "word": "jealousy",
    "transcription": "[ˈʤɛləsi]",
    "translation": "ревность"
  },
  {
    "index": 6059,
    "word": "imposing",
    "transcription": "[ɪmˈpəʊzɪŋ]",
    "translation": "внушительный, импозантный"
  },
  {
    "index": 6060,
    "word": "haircut",
    "transcription": "[ˈheəkʌt]",
    "translation": "стрижка, причёска"
  },
  {
    "index": 6061,
    "word": "mound",
    "transcription": "[maʊnd]",
    "translation": "насыпь, бугор"
  },
  {
    "index": 6062,
    "word": "slump",
    "transcription": "[slʌmp]",
    "translation": "спад, сваливаться"
  },
  {
    "index": 6063,
    "word": "explicit",
    "transcription": "[ɪksˈplɪsɪt]",
    "translation": "явный, откровенный"
  },
  {
    "index": 6064,
    "word": "implicit",
    "transcription": "[ɪmˈplɪsɪt]",
    "translation": "подразумеваемый, неявный"
  },
  {
    "index": 6065,
    "word": "ward",
    "transcription": "[wɔːd]",
    "translation": "округ, район"
  },
  {
    "index": 6066,
    "word": "reminiscent",
    "transcription": "[ˌrɛmɪˈnɪsnt]",
    "translation": "напоминающий"
  },
  {
    "index": 6067,
    "word": "reminiscence",
    "transcription": "[ˌrɛmɪˈnɪsns]",
    "translation": "воспоминание"
  },
  {
    "index": 6068,
    "word": "put up with",
    "transcription": "[pʊtʌpwɪð]",
    "translation": "принимать, мириться"
  },
  {
    "index": 6069,
    "word": "save up",
    "transcription": "[seɪvʌp]",
    "translation": "накопить"
  },
  {
    "index": 6070,
    "word": "naughty",
    "transcription": "[ˈnɔːti]",
    "translation": "непослушный"
  },
  {
    "index": 6071,
    "word": "grit",
    "transcription": "[grɪt]",
    "translation": "твёрдость, стойкость"
  },
  {
    "index": 6072,
    "word": "prairie",
    "transcription": "[ˈpreəri]",
    "translation": "степь, прерия"
  },
  {
    "index": 6073,
    "word": "stroll",
    "transcription": "[strəʊl]",
    "translation": "прогулка, прогуливаться"
  },
  {
    "index": 6074,
    "word": "mess with",
    "transcription": "[mɛswɪð]",
    "translation": "возиться, связываться и т.д."
  },
  {
    "index": 6075,
    "word": "shrine",
    "transcription": "[ʃraɪn]",
    "translation": "святыня"
  },
  {
    "index": 6076,
    "word": "esteem",
    "transcription": "[ɪsˈtiːm]",
    "translation": "уважать, почитать, почтение"
  },
  {
    "index": 6077,
    "word": "self-esteem",
    "transcription": "[sɛlf-ɪsˈtiːm]",
    "translation": "самооценка"
  },
  {
    "index": 6078,
    "word": "leek",
    "transcription": "[liːk]",
    "translation": "лук-порей"
  },
  {
    "index": 6079,
    "word": "retention",
    "transcription": "[rɪˈtɛnʃən]",
    "translation": "удержание, сохранение"
  },
  {
    "index": 6080,
    "word": "premature",
    "transcription": "[ˌprɛməˈtjʊə]",
    "translation": "преждевременный"
  },
  {
    "index": 6081,
    "word": "mural",
    "transcription": "[ˈmjʊərəl]",
    "translation": "стенная роспись, фреска"
  },
  {
    "index": 6082,
    "word": "tickle",
    "transcription": "[ˈtɪkl]",
    "translation": "щекотать"
  },
  {
    "index": 6083,
    "word": "foul",
    "transcription": "[faʊl]",
    "translation": "гадкий, скверный, грязный"
  },
  {
    "index": 6084,
    "word": "clutch",
    "transcription": "[klʌʧ]",
    "translation": "сцеплять, сцепление"
  },
  {
    "index": 6085,
    "word": "awhile",
    "transcription": "[əˈwaɪl]",
    "translation": "какое-то время"
  },
  {
    "index": 6086,
    "word": "knot",
    "transcription": "[nɒt]",
    "translation": "узел"
  },
  {
    "index": 6087,
    "word": "overhear",
    "transcription": "[ˌəʊvəˈhɪə]",
    "translation": "подслушать, нечаянно услышать"
  },
  {
    "index": 6088,
    "word": "ridge",
    "transcription": "[rɪʤ]",
    "translation": "хребет, ребро"
  },
  {
    "index": 6089,
    "word": "ridged",
    "transcription": "[rɪʤd]",
    "translation": "заострённый"
  },
  {
    "index": 6090,
    "word": "flicker",
    "transcription": "[ˈflɪkə]",
    "translation": "мерцать"
  },
  {
    "index": 6091,
    "word": "fret",
    "transcription": "[frɛt]",
    "translation": "волновать (ся)"
  },
  {
    "index": 6092,
    "word": "fretful",
    "transcription": "[ˈfrɛtfʊl]",
    "translation": "капризный"
  },
  {
    "index": 6093,
    "word": "amber",
    "transcription": "[ˈæmbə]",
    "translation": "янтарь"
  },
  {
    "index": 6094,
    "word": "screw up",
    "transcription": "[skruːʌp]",
    "translation": "завалить, просрать"
  },
  {
    "index": 6095,
    "word": "fringe",
    "transcription": "[frɪnʤ]",
    "translation": "край, крайний"
  },
  {
    "index": 6096,
    "word": "vocation",
    "transcription": "[vəʊˈkeɪʃən]",
    "translation": "призвание или профессия"
  },
  {
    "index": 6097,
    "word": "vocational",
    "transcription": "[vəʊˈkeɪʃənl]",
    "translation": "профессиональный"
  },
  {
    "index": 6098,
    "word": "cheer up",
    "transcription": "[ʧɪərʌp]",
    "translation": "взбодриться"
  },
  {
    "index": 6099,
    "word": "jog",
    "transcription": "[ʤɒg]",
    "translation": "бегать трусцой"
  },
  {
    "index": 6100,
    "word": "snowball",
    "transcription": "[ˈsnəʊbɔːl]",
    "translation": "снежок"
  },
  {
    "index": 6101,
    "word": "fiddle",
    "transcription": "[ˈfɪdl]",
    "translation": "скрипка"
  },
  {
    "index": 6102,
    "word": "fiddler",
    "transcription": "[ˈfɪdlə]",
    "translation": "скрипач"
  },
  {
    "index": 6103,
    "word": "skid",
    "transcription": "[skɪd]",
    "translation": "заносить, скользить, буксовать"
  },
  {
    "index": 6104,
    "word": "sip",
    "transcription": "[sɪp]",
    "translation": "глоток"
  },
  {
    "index": 6105,
    "word": "peacekeeper",
    "transcription": "[peacekeeper]",
    "translation": "миротворец"
  },
  {
    "index": 6106,
    "word": "peacemaker",
    "transcription": "[ˈpiːsˌmeɪkə]",
    "translation": "миротворец"
  },
  {
    "index": 6107,
    "word": "watercolor",
    "transcription": "[watercolor]",
    "translation": "акварель"
  },
  {
    "index": 6108,
    "word": "braid",
    "transcription": "[breɪd]",
    "translation": "коса"
  },
  {
    "index": 6109,
    "word": "underwear",
    "transcription": "[ˈʌndəweə]",
    "translation": "нижнее белье"
  },
  {
    "index": 6110,
    "word": "crayon",
    "transcription": "[ˈkreɪən]",
    "translation": "цветной карандаш, мелок"
  },
  {
    "index": 6111,
    "word": "flare",
    "transcription": "[fleə]",
    "translation": "вспышка, вспыхивать"
  },
  {
    "index": 6112,
    "word": "salvage",
    "transcription": "[ˈsælvɪʤ]",
    "translation": "спасти, уберечь от потери"
  },
  {
    "index": 6113,
    "word": "salvation",
    "transcription": "[sælˈveɪʃən]",
    "translation": "спасение"
  },
  {
    "index": 6114,
    "word": "toy with",
    "transcription": "[tɔɪwɪð]",
    "translation": "подумывать о ч-л"
  },
  {
    "index": 6115,
    "word": "catch on",
    "transcription": "[kæʧɒn]",
    "translation": "внезапно понять"
  },
  {
    "index": 6116,
    "word": "counterpart",
    "transcription": "[ˈkaʊntəpɑːt]",
    "translation": "аналог, коллега, и т. д."
  },
  {
    "index": 6117,
    "word": "millennium",
    "transcription": "[mɪˈlɛnɪəm]",
    "translation": "тысячелетие"
  },
  {
    "index": 6118,
    "word": "well-off",
    "transcription": "[wɛl-ɒf]",
    "translation": "обеспеченный"
  },
  {
    "index": 6119,
    "word": "intact",
    "transcription": "[ɪnˈtækt]",
    "translation": "неповрежденный"
  },
  {
    "index": 6120,
    "word": "sift",
    "transcription": "[sɪft]",
    "translation": "просеять"
  },
  {
    "index": 6121,
    "word": "sifter",
    "transcription": "[ˈsɪftə]",
    "translation": "сито"
  },
  {
    "index": 6122,
    "word": "onward (onwards)",
    "transcription": "[ˈɒnwəd]",
    "translation": "далее"
  },
  {
    "index": 6123,
    "word": "eve",
    "transcription": "[iːv]",
    "translation": "канун"
  },
  {
    "index": 6124,
    "word": "staple",
    "transcription": "[ˈsteɪpl]",
    "translation": "скоба, скрепка"
  },
  {
    "index": 6125,
    "word": "stride (strode, stridden)",
    "transcription": "[straɪd]",
    "translation": "шагать, шаг"
  },
  {
    "index": 6126,
    "word": "plum",
    "transcription": "[plʌm]",
    "translation": "слива"
  },
  {
    "index": 6127,
    "word": "host",
    "transcription": "[həʊst]",
    "translation": "множество"
  },
  {
    "index": 6128,
    "word": "judicial",
    "transcription": "[ʤu(ː)ˈdɪʃəl]",
    "translation": "судебная"
  },
  {
    "index": 6129,
    "word": "show up",
    "transcription": "[ʃəʊʌp]",
    "translation": "прийти (на тусовку)"
  },
  {
    "index": 6130,
    "word": "lash out",
    "transcription": "[læʃaʊt]",
    "translation": "нападать, ругаться"
  },
  {
    "index": 6131,
    "word": "embed",
    "transcription": "[ɪmˈbɛd]",
    "translation": "встроить, вставить"
  },
  {
    "index": 6132,
    "word": "majesty",
    "transcription": "[ˈmæʤɪsti]",
    "translation": "величие, величество"
  },
  {
    "index": 6133,
    "word": "majestic",
    "transcription": "[məˈʤɛstɪk]",
    "translation": "величавый"
  },
  {
    "index": 6134,
    "word": "bundle",
    "transcription": "[ˈbʌndl]",
    "translation": "связка, пучок, пачка"
  },
  {
    "index": 6135,
    "word": "pagan",
    "transcription": "[ˈpeɪgən]",
    "translation": "язычник"
  },
  {
    "index": 6136,
    "word": "paganism",
    "transcription": "[ˈpeɪgənɪzm]",
    "translation": "язычество"
  },
  {
    "index": 6137,
    "word": "treachery",
    "transcription": "[ˈtrɛʧəri]",
    "translation": "предательство, вероломство"
  },
  {
    "index": 6138,
    "word": "treacherous",
    "transcription": "[ˈtrɛʧərəs]",
    "translation": "вероломный"
  },
  {
    "index": 6139,
    "word": "onset",
    "transcription": "[ˈɒnsɛt]",
    "translation": "начало, наступление"
  },
  {
    "index": 6140,
    "word": "darn",
    "transcription": "[dɑːn]",
    "translation": "штопать"
  },
  {
    "index": 6141,
    "word": "look after",
    "transcription": "[lʊkˈɑːftə]",
    "translation": "присматривать"
  },
  {
    "index": 6142,
    "word": "pal",
    "transcription": "[pæl]",
    "translation": "приятель"
  },
  {
    "index": 6143,
    "word": "fixture",
    "transcription": "[ˈfɪkstʧə]",
    "translation": "крепление, стойка и т.д."
  },
  {
    "index": 6144,
    "word": "carrot",
    "transcription": "[ˈkærət]",
    "translation": "морковь"
  },
  {
    "index": 6145,
    "word": "forbid (forbade, forbidden)",
    "transcription": "[fəˈbɪd]",
    "translation": "запрещать"
  },
  {
    "index": 6146,
    "word": "novelty",
    "transcription": "[ˈnɒvəlti]",
    "translation": "новинка"
  },
  {
    "index": 6147,
    "word": "pass smth on",
    "transcription": "[pɑːssmthɒn]",
    "translation": "отдать (другому)"
  },
  {
    "index": 6148,
    "word": "hand on",
    "transcription": "[hændɒn]",
    "translation": "передавать"
  },
  {
    "index": 6149,
    "word": "adjacent",
    "transcription": "[əˈʤeɪsənt]",
    "translation": "смежный, прилегающий"
  },
  {
    "index": 6150,
    "word": "wheat",
    "transcription": "[wiːt]",
    "translation": "пшеница"
  },
  {
    "index": 6151,
    "word": "coax",
    "transcription": "[kəʊks]",
    "translation": "убедить, соблазнить сделать"
  },
  {
    "index": 6152,
    "word": "handy",
    "transcription": "[ˈhændi]",
    "translation": "удобный"
  },
  {
    "index": 6153,
    "word": "dwell",
    "transcription": "[dwɛl]",
    "translation": "обитать, проживать"
  },
  {
    "index": 6154,
    "word": "dwelling",
    "transcription": "[ˈdwɛlɪŋ]",
    "translation": "жилье"
  },
  {
    "index": 6155,
    "word": "part-time",
    "transcription": "[pɑːt-taɪm]",
    "translation": "неполная занятость"
  },
  {
    "index": 6156,
    "word": "full-time",
    "transcription": "[fʊl-taɪm]",
    "translation": "полная занятость"
  },
  {
    "index": 6157,
    "word": "catering",
    "transcription": "[ˈkeɪtərɪŋ]",
    "translation": "общественное питание"
  },
  {
    "index": 6158,
    "word": "mince",
    "transcription": "[mɪns]",
    "translation": "фарш, крошить, рубить"
  },
  {
    "index": 6159,
    "word": "mincer",
    "transcription": "[ˈmɪnsə]",
    "translation": "мясорубка"
  },
  {
    "index": 6160,
    "word": "buffalo",
    "transcription": "[ˈbʌfələʊ]",
    "translation": "буйвол или бизон"
  },
  {
    "index": 6161,
    "word": "mistress",
    "transcription": "[ˈmɪstrɪs]",
    "translation": "любовница"
  },
  {
    "index": 6162,
    "word": "spot",
    "transcription": "[spɒt]",
    "translation": "заметить, увидеть"
  },
  {
    "index": 6163,
    "word": "superintendent",
    "transcription": "[ˌsjuːpərɪnˈtɛndənt]",
    "translation": "управляющий, начальник"
  },
  {
    "index": 6164,
    "word": "trophy",
    "transcription": "[ˈtrəʊfi]",
    "translation": "трофей, приз"
  },
  {
    "index": 6165,
    "word": "tan",
    "transcription": "[tæn]",
    "translation": "загар, загорать"
  },
  {
    "index": 6166,
    "word": "ruthless",
    "transcription": "[ˈruːθlɪs]",
    "translation": "беспощадный"
  },
  {
    "index": 6167,
    "word": "ruthlessness",
    "transcription": "[ˈruːθlɪsnəs]",
    "translation": "беспощадность"
  },
  {
    "index": 6168,
    "word": "slab",
    "transcription": "[slæb]",
    "translation": "плита, блок"
  },
  {
    "index": 6169,
    "word": "viable",
    "transcription": "[ˈvaɪəbl]",
    "translation": "жизнеспособный"
  },
  {
    "index": 6170,
    "word": "viability",
    "transcription": "[ˌvaɪəˈbɪlɪti]",
    "translation": "жизнеспособность"
  },
  {
    "index": 6171,
    "word": "amid (amidst)",
    "transcription": "[əˈmɪd]",
    "translation": "среди"
  },
  {
    "index": 6172,
    "word": "erupt",
    "transcription": "[ɪˈrʌpt]",
    "translation": "извергаться"
  },
  {
    "index": 6173,
    "word": "eruption",
    "transcription": "[ɪˈrʌpʃən]",
    "translation": "извержение"
  },
  {
    "index": 6174,
    "word": "root out",
    "transcription": "[ruːtaʊt]",
    "translation": "искоренить"
  },
  {
    "index": 6175,
    "word": "weed out",
    "transcription": "[wiːdaʊt]",
    "translation": "искоренить"
  },
  {
    "index": 6176,
    "word": "appal",
    "transcription": "[əˈpɔːl]",
    "translation": "потрясать, ужасать"
  },
  {
    "index": 6177,
    "word": "outstanding",
    "transcription": "[aʊtˈstændɪŋ]",
    "translation": "выдающийся"
  },
  {
    "index": 6178,
    "word": "quarrel",
    "transcription": "[ˈkwɒrəl]",
    "translation": "ссора"
  },
  {
    "index": 6179,
    "word": "eclipse",
    "transcription": "[ɪˈklɪps]",
    "translation": "затмение"
  },
  {
    "index": 6180,
    "word": "orchard",
    "transcription": "[ˈɔːʧəd]",
    "translation": "фруктовый сад"
  },
  {
    "index": 6181,
    "word": "haunt",
    "transcription": "[hɔːnt]",
    "translation": "являться, преследовать (перен.)"
  },
  {
    "index": 6182,
    "word": "dispose of",
    "transcription": "[dɪsˈpəʊzɒv]",
    "translation": "избавиться"
  },
  {
    "index": 6183,
    "word": "disposal",
    "transcription": "[dɪsˈpəʊzəl]",
    "translation": "удаление"
  },
  {
    "index": 6184,
    "word": "disposable",
    "transcription": "[dɪsˈpəʊzəbl]",
    "translation": "одноразовый"
  },
  {
    "index": 6185,
    "word": "set out for",
    "transcription": "[sɛtaʊtfɔː]",
    "translation": "отправиться"
  },
  {
    "index": 6186,
    "word": "set off",
    "transcription": "[sɛtɒf]",
    "translation": "отправляться"
  },
  {
    "index": 6187,
    "word": "tweak",
    "transcription": "[twiːk]",
    "translation": "доделать, настроить (разг.)"
  },
  {
    "index": 6188,
    "word": "disclose",
    "transcription": "[dɪsˈkləʊz]",
    "translation": "раскрывать, обнаруживать"
  },
  {
    "index": 6189,
    "word": "disclosure",
    "transcription": "[dɪsˈkləʊʒə]",
    "translation": "раскрытие"
  },
  {
    "index": 6190,
    "word": "throng",
    "transcription": "[θrɒŋ]",
    "translation": "толпа, толчея, толпиться"
  },
  {
    "index": 6191,
    "word": "swoop",
    "transcription": "[swuːp]",
    "translation": "кинуться, напасть"
  },
  {
    "index": 6192,
    "word": "coup",
    "transcription": "[kuː]",
    "translation": "переворот"
  },
  {
    "index": 6193,
    "word": "theft",
    "transcription": "[θɛft]",
    "translation": "кража"
  },
  {
    "index": 6194,
    "word": "wipe out",
    "transcription": "[waɪpaʊt]",
    "translation": "уничтожить"
  },
  {
    "index": 6195,
    "word": "pebble",
    "transcription": "[ˈpɛbl]",
    "translation": "морской камень"
  },
  {
    "index": 6196,
    "word": "ashamed",
    "transcription": "[əˈʃeɪmd]",
    "translation": "пристыженный"
  },
  {
    "index": 6197,
    "word": "tally",
    "transcription": "[ˈtæli]",
    "translation": "подсчитывать, подсчёт, итог"
  },
  {
    "index": 6198,
    "word": "sage",
    "transcription": "[seɪʤ]",
    "translation": "мудрец"
  },
  {
    "index": 6199,
    "word": "primitive",
    "transcription": "[ˈprɪmɪtɪv]",
    "translation": "первобытный"
  },
  {
    "index": 6200,
    "word": "sorrow",
    "transcription": "[ˈsɒrəʊ]",
    "translation": "горе, скорбь"
  },
  {
    "index": 6201,
    "word": "sorrowful",
    "transcription": "[ˈsɒrəfʊl]",
    "translation": "скорбный"
  },
  {
    "index": 6202,
    "word": "sorry",
    "transcription": "[ˈsɒri]",
    "translation": "сожалеющий"
  },
  {
    "index": 6203,
    "word": "savior",
    "transcription": "[ˈseɪvjə]",
    "translation": "спаситель"
  },
  {
    "index": 6204,
    "word": "come over",
    "transcription": "[kʌmˈəʊvə]",
    "translation": "заходить (в гости)"
  },
  {
    "index": 6205,
    "word": "come around",
    "transcription": "[kʌməˈraʊnd]",
    "translation": "заходить (в гости)"
  },
  {
    "index": 6206,
    "word": "burn out",
    "transcription": "[bɜːnaʊt]",
    "translation": "выгореть, перегореть"
  },
  {
    "index": 6207,
    "word": "rinse",
    "transcription": "[rɪns]",
    "translation": "полоскать, полоскание"
  },
  {
    "index": 6208,
    "word": "cinema",
    "transcription": "[ˈsɪnəmə]",
    "translation": "кино, кинотеатр"
  },
  {
    "index": 6209,
    "word": "cinematic",
    "transcription": "[sɪnəˈmætɪk]",
    "translation": "кинематографический"
  },
  {
    "index": 6210,
    "word": "prudent",
    "transcription": "[ˈpruːdənt]",
    "translation": "разумный, осторожный"
  },
  {
    "index": 6211,
    "word": "prudential",
    "transcription": "[pru(ː)ˈdɛnʃəl]",
    "translation": "благоразумный"
  },
  {
    "index": 6212,
    "word": "prudence",
    "transcription": "[ˈpruːdəns]",
    "translation": "предусмотрительность"
  },
  {
    "index": 6213,
    "word": "imprudent",
    "transcription": "[ɪmˈpruːdənt]",
    "translation": "неосторожный"
  },
  {
    "index": 6214,
    "word": "black out",
    "transcription": "[blækaʊt]",
    "translation": "быть обесточенным"
  },
  {
    "index": 6215,
    "word": "banner",
    "transcription": "[ˈbænə]",
    "translation": "знамя, транспарант"
  },
  {
    "index": 6216,
    "word": "complement",
    "transcription": "[ˈkɒmplɪmənt]",
    "translation": "допонять, дополнение"
  },
  {
    "index": 6217,
    "word": "complementary",
    "transcription": "[ˌkɒmplɪˈmɛntəri]",
    "translation": "дополнительный"
  },
  {
    "index": 6218,
    "word": "mat",
    "transcription": "[mæt]",
    "translation": "коврик, циновка"
  },
  {
    "index": 6219,
    "word": "tangible",
    "transcription": "[ˈtænʤəbl]",
    "translation": "осязаемый"
  },
  {
    "index": 6220,
    "word": "intangible",
    "transcription": "[ɪnˈtænʤəbl]",
    "translation": "нематериальный"
  },
  {
    "index": 6221,
    "word": "clear off",
    "transcription": "[klɪərɒf]",
    "translation": "убраться вон"
  },
  {
    "index": 6222,
    "word": "glamour",
    "transcription": "[ˈglæmə]",
    "translation": "очарование, привлекательность"
  },
  {
    "index": 6223,
    "word": "glamorous",
    "transcription": "[ˈglæmərəs]",
    "translation": "обаятельный"
  },
  {
    "index": 6224,
    "word": "razor",
    "transcription": "[ˈreɪzə]",
    "translation": "бритва"
  },
  {
    "index": 6225,
    "word": "worsen",
    "transcription": "[ˈwɜːsn]",
    "translation": "ухудшать"
  },
  {
    "index": 6226,
    "word": "wreck",
    "transcription": "[rɛk]",
    "translation": "разрушать"
  },
  {
    "index": 6227,
    "word": "shipwreck",
    "transcription": "[ˈʃɪprɛk]",
    "translation": "кораблекрушение"
  },
  {
    "index": 6228,
    "word": "wreckage",
    "transcription": "[ˈrɛkɪʤ]",
    "translation": "крушение"
  },
  {
    "index": 6229,
    "word": "fall back on",
    "transcription": "[fɔːlbækɒn]",
    "translation": "опереться, прибегнуть"
  },
  {
    "index": 6230,
    "word": "behold",
    "transcription": "[bɪˈhəʊld]",
    "translation": "созерцать, видеть"
  },
  {
    "index": 6231,
    "word": "yacht",
    "transcription": "[jɒt]",
    "translation": "яхта"
  },
  {
    "index": 6232,
    "word": "wrench",
    "transcription": "[rɛnʧ]",
    "translation": "гаечный ключ"
  },
  {
    "index": 6233,
    "word": "nose around",
    "transcription": "[nəʊzəˈraʊnd]",
    "translation": "рыскать, вынюхивать"
  },
  {
    "index": 6234,
    "word": "hut",
    "transcription": "[hʌt]",
    "translation": "хижина, лачуга, барак"
  },
  {
    "index": 6235,
    "word": "blizzard",
    "transcription": "[ˈblɪzəd]",
    "translation": "метель, буран"
  },
  {
    "index": 6236,
    "word": "pronounce",
    "transcription": "[prəˈnaʊns]",
    "translation": "произносить"
  },
  {
    "index": 6237,
    "word": "pronunciation",
    "transcription": "[prəˌnʌnsɪˈeɪʃən]",
    "translation": "произношение"
  },
  {
    "index": 6238,
    "word": "locus",
    "transcription": "[ˈləʊkəs]",
    "translation": "местоположение"
  },
  {
    "index": 6239,
    "word": "mumble",
    "transcription": "[ˈmʌmbl]",
    "translation": "бормотать, бубнить"
  },
  {
    "index": 6240,
    "word": "hamper",
    "transcription": "[ˈhæmpə]",
    "translation": "затруднять, ограничивать"
  },
  {
    "index": 6241,
    "word": "kernel",
    "transcription": "[ˈkɜːnl]",
    "translation": "ядро"
  },
  {
    "index": 6242,
    "word": "stand by",
    "transcription": "[stændbaɪ]",
    "translation": "поддерживать, быть наготове"
  },
  {
    "index": 6243,
    "word": "loaf",
    "transcription": "[ləʊf]",
    "translation": "буханка, булка"
  },
  {
    "index": 6244,
    "word": "barber",
    "transcription": "[ˈbɑːbə]",
    "translation": "парикмахер"
  },
  {
    "index": 6245,
    "word": "medieval",
    "transcription": "[ˌmɛdɪˈiːvəl]",
    "translation": "средневековый"
  },
  {
    "index": 6246,
    "word": "empower",
    "transcription": "[ɪmˈpaʊə]",
    "translation": "давать возможность, право"
  },
  {
    "index": 6247,
    "word": "empowerment",
    "transcription": "[ɪmˈpaʊəmənt]",
    "translation": "доверенность, полномочие"
  },
  {
    "index": 6248,
    "word": "famine",
    "transcription": "[ˈfæmɪn]",
    "translation": "голод"
  },
  {
    "index": 6249,
    "word": "detention",
    "transcription": "[dɪˈtɛnʃən]",
    "translation": "задержание, арест"
  },
  {
    "index": 6250,
    "word": "figure",
    "transcription": "[ˈfɪgə]",
    "translation": "полагать, думать"
  },
  {
    "index": 6251,
    "word": "sniff",
    "transcription": "[snɪf]",
    "translation": "нюхать, сопеть, фы и т. д."
  },
  {
    "index": 6252,
    "word": "sincere",
    "transcription": "[sɪnˈsɪə]",
    "translation": "искренний"
  },
  {
    "index": 6253,
    "word": "sincerity",
    "transcription": "[sɪnˈsɛrɪti]",
    "translation": "искренность"
  },
  {
    "index": 6254,
    "word": "insincere",
    "transcription": "[ˌɪnsɪnˈsɪə]",
    "translation": "неискренний"
  },
  {
    "index": 6255,
    "word": "insincerity",
    "transcription": "[ˌɪnsɪnˈsɛrɪti]",
    "translation": "неискренность"
  },
  {
    "index": 6256,
    "word": "overthrow",
    "transcription": "[ˈəʊvəθrəʊ]",
    "translation": "свергнуть"
  },
  {
    "index": 6257,
    "word": "fling (flung, flung)",
    "transcription": "[flɪŋ]",
    "translation": "швырнуть"
  },
  {
    "index": 6258,
    "word": "fungus",
    "transcription": "[ˈfʌŋgəs]",
    "translation": "гриб, грибок"
  },
  {
    "index": 6259,
    "word": "fungal",
    "transcription": "[ˈfʌŋg(ə)l]",
    "translation": "грибковый"
  },
  {
    "index": 6260,
    "word": "enact",
    "transcription": "[ɪˈnækt]",
    "translation": "вводить (напр. закон)"
  },
  {
    "index": 6261,
    "word": "booze",
    "transcription": "[buːz]",
    "translation": "выпивка"
  },
  {
    "index": 6262,
    "word": "boozer",
    "transcription": "[ˈbuːzə]",
    "translation": "пивная или пьяница"
  },
  {
    "index": 6263,
    "word": "tug",
    "transcription": "[tʌg]",
    "translation": "тянуть, рывок"
  },
  {
    "index": 6264,
    "word": "tugging",
    "transcription": "[ˈtʌgɪŋ]",
    "translation": "буксировка"
  },
  {
    "index": 6265,
    "word": "foreman",
    "transcription": "[ˈfɔːmən]",
    "translation": "мастер, бригадир"
  },
  {
    "index": 6266,
    "word": "anguish",
    "transcription": "[ˈæŋgwɪʃ]",
    "translation": "мука, страдание"
  },
  {
    "index": 6267,
    "word": "fill up",
    "transcription": "[fɪlʌp]",
    "translation": "наполнить целиком"
  },
  {
    "index": 6268,
    "word": "top up",
    "transcription": "[tɒpʌp]",
    "translation": "наполнить целиком"
  },
  {
    "index": 6269,
    "word": "virgin",
    "transcription": "[ˈvɜːʤɪn]",
    "translation": "девственница, дева"
  },
  {
    "index": 6270,
    "word": "virginity",
    "transcription": "[vɜːˈʤɪnɪti]",
    "translation": "девственность"
  },
  {
    "index": 6271,
    "word": "equity",
    "transcription": "[ˈɛkwɪti]",
    "translation": "равноправие, справедливость"
  },
  {
    "index": 6272,
    "word": "inequity",
    "transcription": "[ɪnˈɛkwɪti]",
    "translation": "несправедливость"
  },
  {
    "index": 6273,
    "word": "equitable",
    "transcription": "[ˈɛkwɪtəbl]",
    "translation": "справедливый, равноправный"
  },
  {
    "index": 6274,
    "word": "inequitable",
    "transcription": "[ɪnˈɛkwɪtəbl]",
    "translation": "несправедливый"
  },
  {
    "index": 6275,
    "word": "copper",
    "transcription": "[ˈkɒpə]",
    "translation": "медь"
  },
  {
    "index": 6276,
    "word": "replicate",
    "transcription": "[ˈrɛplɪkeɪt]",
    "translation": "воспроизвести"
  },
  {
    "index": 6277,
    "word": "replication",
    "transcription": "[ˌrɛplɪˈkeɪʃən]",
    "translation": "копирование"
  },
  {
    "index": 6278,
    "word": "unanimous",
    "transcription": "[ju(ː)ˈnænɪməs]",
    "translation": "единогласный"
  },
  {
    "index": 6279,
    "word": "doll",
    "transcription": "[dɒl]",
    "translation": "кукла"
  },
  {
    "index": 6280,
    "word": "spade",
    "transcription": "[speɪd]",
    "translation": "лопата"
  },
  {
    "index": 6281,
    "word": "chatter",
    "transcription": "[ˈʧætə]",
    "translation": "болтать, болтовня"
  },
  {
    "index": 6282,
    "word": "dough",
    "transcription": "[dəʊ]",
    "translation": "тесто"
  },
  {
    "index": 6283,
    "word": "doughy",
    "transcription": "[ˈdəʊi]",
    "translation": "тестообразный"
  },
  {
    "index": 6284,
    "word": "tier",
    "transcription": "[ˈtaɪə]",
    "translation": "ярус"
  },
  {
    "index": 6285,
    "word": "wade",
    "transcription": "[weɪd]",
    "translation": "брод, переходить вброд"
  },
  {
    "index": 6286,
    "word": "moss",
    "transcription": "[mɒs]",
    "translation": "мох"
  },
  {
    "index": 6287,
    "word": "construct",
    "transcription": "[kənˈstrʌkt]",
    "translation": "соорудить"
  },
  {
    "index": 6288,
    "word": "construction",
    "transcription": "[kənˈstrʌkʃən]",
    "translation": "сооружение"
  },
  {
    "index": 6289,
    "word": "reconstruct",
    "transcription": "[ˌriːkənsˈtrʌkt]",
    "translation": "восстановить"
  },
  {
    "index": 6290,
    "word": "thunder",
    "transcription": "[ˈθʌndə]",
    "translation": "гром"
  },
  {
    "index": 6291,
    "word": "thunderous",
    "transcription": "[ˈθʌndərəs]",
    "translation": "громовой"
  },
  {
    "index": 6292,
    "word": "chalk",
    "transcription": "[ʧɔːk]",
    "translation": "мел"
  },
  {
    "index": 6293,
    "word": "chalky",
    "transcription": "[ˈʧɔːki]",
    "translation": "меловой, известковый"
  },
  {
    "index": 6294,
    "word": "marsh",
    "transcription": "[mɑːʃ]",
    "translation": "болото"
  },
  {
    "index": 6295,
    "word": "marshy",
    "transcription": "[ˈmɑːʃi]",
    "translation": "болотный"
  },
  {
    "index": 6296,
    "word": "slot",
    "transcription": "[slɒt]",
    "translation": "разъём, паз, гнездо"
  },
  {
    "index": 6297,
    "word": "slot machine",
    "transcription": "[slɒtməˈʃiːn]",
    "translation": "игровой автомат"
  },
  {
    "index": 6298,
    "word": "fool around",
    "transcription": "[fuːləˈraʊnd]",
    "translation": "придуриваться"
  },
  {
    "index": 6299,
    "word": "kid around",
    "transcription": "[kɪdəˈraʊnd]",
    "translation": "ребенок вокруг"
  },
  {
    "index": 6300,
    "word": "bitch",
    "transcription": "[bɪʧ]",
    "translation": "сука"
  },
  {
    "index": 6301,
    "word": "valve",
    "transcription": "[vælv]",
    "translation": "задвижка, вентиль"
  },
  {
    "index": 6302,
    "word": "mist",
    "transcription": "[mɪst]",
    "translation": "туман"
  },
  {
    "index": 6303,
    "word": "misty",
    "transcription": "[ˈmɪsti]",
    "translation": "туманный"
  },
  {
    "index": 6304,
    "word": "intrinsic",
    "transcription": "[ɪnˈtrɪnsɪk]",
    "translation": "присущий, внутренний"
  },
  {
    "index": 6305,
    "word": "intrinsically",
    "transcription": "[ɪnˈtrɪnsɪk(ə)li]",
    "translation": "в сущности"
  },
  {
    "index": 6306,
    "word": "topple",
    "transcription": "[ˈtɒpl]",
    "translation": "опрокинуть(ся)"
  },
  {
    "index": 6307,
    "word": "elicit",
    "transcription": "[ɪˈlɪsɪt]",
    "translation": "добиться, извлечь"
  },
  {
    "index": 6308,
    "word": "elicitation",
    "transcription": "[elicitation]",
    "translation": "извлечение"
  },
  {
    "index": 6309,
    "word": "vain",
    "transcription": "[veɪn]",
    "translation": "напрасный, безрезультатный"
  },
  {
    "index": 6310,
    "word": "in vain",
    "transcription": "[ɪnveɪn]",
    "translation": "напрасно"
  },
  {
    "index": 6311,
    "word": "vanity",
    "transcription": "[ˈvænɪti]",
    "translation": "суетность, тщетность"
  },
  {
    "index": 6312,
    "word": "thirst",
    "transcription": "[θɜːst]",
    "translation": "жажда"
  },
  {
    "index": 6313,
    "word": "thirsty",
    "transcription": "[ˈθɜːsti]",
    "translation": "хотящий пить, жаждущий"
  },
  {
    "index": 6314,
    "word": "adhere",
    "transcription": "[ədˈhɪə]",
    "translation": "придерживаться"
  },
  {
    "index": 6315,
    "word": "adherent",
    "transcription": "[ədˈhɪərənt]",
    "translation": "приверженец"
  },
  {
    "index": 6316,
    "word": "adherence",
    "transcription": "[ədˈhɪərəns]",
    "translation": "соблюдение"
  },
  {
    "index": 6317,
    "word": "cavity",
    "transcription": "[ˈkævɪti]",
    "translation": "полость, впадина"
  },
  {
    "index": 6318,
    "word": "keep out of",
    "transcription": "[kiːpaʊtɒv]",
    "translation": "не влезать"
  },
  {
    "index": 6319,
    "word": "stay out of",
    "transcription": "[steɪaʊtɒv]",
    "translation": "избегать"
  },
  {
    "index": 6320,
    "word": "debris",
    "transcription": "[ˈdeɪbriː]",
    "translation": "мусор, обломки, завалы"
  },
  {
    "index": 6321,
    "word": "lobster",
    "transcription": "[ˈlɒbstə]",
    "translation": "омар"
  },
  {
    "index": 6322,
    "word": "bustle",
    "transcription": "[ˈbʌsl]",
    "translation": "суета, суматоха"
  },
  {
    "index": 6323,
    "word": "chuckle",
    "transcription": "[ˈʧʌkl]",
    "translation": "посмеиваться"
  },
  {
    "index": 6324,
    "word": "forthcoming",
    "transcription": "[fɔːθˈkʌmɪŋ]",
    "translation": "предстоящий"
  },
  {
    "index": 6325,
    "word": "gulf",
    "transcription": "[gʌlf]",
    "translation": "залив"
  },
  {
    "index": 6326,
    "word": "go over",
    "transcription": "[gəʊˈəʊvə]",
    "translation": "просмотреть, изучить"
  },
  {
    "index": 6327,
    "word": "look over",
    "transcription": "[lʊkˈəʊvə]",
    "translation": "просмотреть, изучить"
  },
  {
    "index": 6328,
    "word": "eminent",
    "transcription": "[ˈɛmɪnənt]",
    "translation": "видный, уважаемый"
  },
  {
    "index": 6329,
    "word": "eminence",
    "transcription": "[ˈɛmɪnəns]",
    "translation": "высокое положение"
  },
  {
    "index": 6330,
    "word": "trump",
    "transcription": "[trʌmp]",
    "translation": "козырь"
  },
  {
    "index": 6331,
    "word": "thought",
    "transcription": "[θɔːt]",
    "translation": "мысль"
  },
  {
    "index": 6332,
    "word": "thoughtful",
    "transcription": "[θɔːtfʊl]",
    "translation": "вдумчивый"
  },
  {
    "index": 6333,
    "word": "thoughtless",
    "transcription": "[ˈθɔːtlɪs]",
    "translation": "беспечный, необдуманный"
  },
  {
    "index": 6334,
    "word": "slime",
    "transcription": "[slaɪm]",
    "translation": "слизь"
  },
  {
    "index": 6335,
    "word": "armor (armour)",
    "transcription": "[ˈɑːmə]",
    "translation": "броня, доспехи"
  },
  {
    "index": 6336,
    "word": "plunge",
    "transcription": "[plʌnʤ]",
    "translation": "окунуться, нырнуть"
  },
  {
    "index": 6337,
    "word": "buddy",
    "transcription": "[ˈbʌdi]",
    "translation": "дружище, парень"
  },
  {
    "index": 6338,
    "word": "hop",
    "transcription": "[hɒp]",
    "translation": "прыгать, скакать"
  },
  {
    "index": 6339,
    "word": "grasshopper",
    "transcription": "[ˈgrɑːsˌhɒpə]",
    "translation": "кузнечик"
  },
  {
    "index": 6340,
    "word": "pier",
    "transcription": "[pɪə]",
    "translation": "пристань, пирс"
  },
  {
    "index": 6341,
    "word": "hardy",
    "transcription": "[ˈhɑːdi]",
    "translation": "выносливый"
  },
  {
    "index": 6342,
    "word": "dim",
    "transcription": "[dɪm]",
    "translation": "тусклый"
  },
  {
    "index": 6343,
    "word": "dimness",
    "transcription": "[ˈdɪmnɪs]",
    "translation": "тусклость"
  },
  {
    "index": 6344,
    "word": "tub",
    "transcription": "[tʌb]",
    "translation": "ванна, бадья"
  },
  {
    "index": 6345,
    "word": "bathtub",
    "transcription": "[ˈbɑːθtʌb]",
    "translation": "ванна"
  },
  {
    "index": 6346,
    "word": "avalanche",
    "transcription": "[ˈævəlɑːnʃ]",
    "translation": "лавина"
  },
  {
    "index": 6347,
    "word": "add to",
    "transcription": "[ædtuː]",
    "translation": "увеличивать"
  },
  {
    "index": 6348,
    "word": "subside",
    "transcription": "[səbˈsaɪd]",
    "translation": "утихать, спадать"
  },
  {
    "index": 6349,
    "word": "subsidence",
    "transcription": "[səbˈsaɪdəns]",
    "translation": "оседание, осадка"
  },
  {
    "index": 6350,
    "word": "handbook",
    "transcription": "[ˈhændbʊk]",
    "translation": "руководство, справочник"
  },
  {
    "index": 6351,
    "word": "console",
    "transcription": "[kənˈsəʊl]",
    "translation": "утешать"
  },
  {
    "index": 6352,
    "word": "consolation",
    "transcription": "[ˌkɒnsəˈleɪʃən]",
    "translation": "утешение"
  },
  {
    "index": 6353,
    "word": "wedge",
    "transcription": "[wɛʤ]",
    "translation": "клин, клиновидный"
  },
  {
    "index": 6354,
    "word": "abound",
    "transcription": "[əˈbaʊnd]",
    "translation": "изобиловать"
  },
  {
    "index": 6355,
    "word": "expel",
    "transcription": "[ɪksˈpɛl]",
    "translation": "высылать, изгонять"
  },
  {
    "index": 6356,
    "word": "warmth",
    "transcription": "[wɔːmθ]",
    "translation": "тепло"
  },
  {
    "index": 6357,
    "word": "sign up",
    "transcription": "[saɪnʌp]",
    "translation": "записаться, зарегистрироваться"
  },
  {
    "index": 6358,
    "word": "sign in",
    "transcription": "[saɪnɪn]",
    "translation": "войти в систему"
  },
  {
    "index": 6359,
    "word": "conform",
    "transcription": "[kənˈfɔːm]",
    "translation": "соответствовать"
  },
  {
    "index": 6360,
    "word": "conformity",
    "transcription": "[kənˈfɔːmɪti]",
    "translation": "соответствие"
  },
  {
    "index": 6361,
    "word": "diary",
    "transcription": "[ˈdaɪəri]",
    "translation": "дневник"
  },
  {
    "index": 6362,
    "word": "inhabit",
    "transcription": "[ɪnˈhæbɪt]",
    "translation": "населять, обитать в"
  },
  {
    "index": 6363,
    "word": "uninhabited",
    "transcription": "[ˌʌnɪnˈhæbɪtɪd]",
    "translation": "необитаемый"
  },
  {
    "index": 6364,
    "word": "inhabitant",
    "transcription": "[ɪnˈhæbɪtənt]",
    "translation": "житель"
  },
  {
    "index": 6365,
    "word": "skillet",
    "transcription": "[ˈskɪlɪt]",
    "translation": "сковорода (глубокая)"
  },
  {
    "index": 6366,
    "word": "settle for",
    "transcription": "[ˈsɛtlfɔː]",
    "translation": "согласиться на"
  },
  {
    "index": 6367,
    "word": "slipper",
    "transcription": "[ˈslɪpə]",
    "translation": "тапок"
  },
  {
    "index": 6368,
    "word": "clause",
    "transcription": "[klɔːz]",
    "translation": "пункт, статья документа"
  },
  {
    "index": 6369,
    "word": "useful",
    "transcription": "[ˈjuːsfʊl]",
    "translation": "полезный"
  },
  {
    "index": 6370,
    "word": "useless",
    "transcription": "[ˈjuːslɪs]",
    "translation": "бесполезный"
  },
  {
    "index": 6371,
    "word": "usable",
    "transcription": "[ˈjuːzəbl]",
    "translation": "годный к употреблению"
  },
  {
    "index": 6372,
    "word": "handkerchief",
    "transcription": "[ˈhæŋkəʧɪf]",
    "translation": "носовой платок"
  },
  {
    "index": 6373,
    "word": "up-to-date",
    "transcription": "[ˈʌptəˈdeɪt]",
    "translation": "современный, актуальный"
  },
  {
    "index": 6374,
    "word": "count on",
    "transcription": "[kaʊntɒn]",
    "translation": "рассчитывать на"
  },
  {
    "index": 6375,
    "word": "arch",
    "transcription": "[ɑːʧ]",
    "translation": "арка, изгибать"
  },
  {
    "index": 6376,
    "word": "stay up",
    "transcription": "[steɪʌp]",
    "translation": "не ложиться"
  },
  {
    "index": 6377,
    "word": "shut up",
    "transcription": "[ʃʌtʌp]",
    "translation": "заткнуться"
  },
  {
    "index": 6378,
    "word": "firework",
    "transcription": "[ˈfaɪəwɜːk]",
    "translation": "фейерверк, петарда"
  },
  {
    "index": 6379,
    "word": "grieve",
    "transcription": "[griːv]",
    "translation": "горевать"
  },
  {
    "index": 6380,
    "word": "groan",
    "transcription": "[grəʊn]",
    "translation": "стон, стонать"
  },
  {
    "index": 6381,
    "word": "plausible",
    "transcription": "[ˈplɔːzəbl]",
    "translation": "правдоподобный"
  },
  {
    "index": 6382,
    "word": "implausible",
    "transcription": "[implausible]",
    "translation": "неправдоподобно"
  },
  {
    "index": 6383,
    "word": "plausibility",
    "transcription": "[ˌplɔːzəˈbɪlɪti]",
    "translation": "правдоподобие"
  },
  {
    "index": 6384,
    "word": "drawback",
    "transcription": "[ˈdrɔːbæk]",
    "translation": "недостаток"
  },
  {
    "index": 6385,
    "word": "latch",
    "transcription": "[læʧ]",
    "translation": "защёлка, засов"
  },
  {
    "index": 6386,
    "word": "fir",
    "transcription": "[fɜː]",
    "translation": "ель"
  },
  {
    "index": 6387,
    "word": "pry",
    "transcription": "[praɪ]",
    "translation": "любопытствовать, совать нос"
  },
  {
    "index": 6388,
    "word": "sheer",
    "transcription": "[ʃɪə]",
    "translation": "явный, полный, чистый"
  },
  {
    "index": 6389,
    "word": "whiz",
    "transcription": "[wɪz]",
    "translation": "просвистеть, пронестись"
  },
  {
    "index": 6390,
    "word": "overturn",
    "transcription": "[ˈəʊvətɜːn]",
    "translation": "опрокинуть (ся)"
  },
  {
    "index": 6391,
    "word": "bark",
    "transcription": "[bɑːk]",
    "translation": "лаять"
  },
  {
    "index": 6392,
    "word": "reconcile",
    "transcription": "[ˈrɛkənsaɪl]",
    "translation": "примириться"
  },
  {
    "index": 6393,
    "word": "reconciliation",
    "transcription": "[ˌrɛkənsɪlɪˈeɪʃən]",
    "translation": "примирение, улаживание"
  },
  {
    "index": 6394,
    "word": "statutory",
    "transcription": "[ˈstætjʊtəri]",
    "translation": "установленный законом"
  },
  {
    "index": 6395,
    "word": "insult",
    "transcription": "[ɪnˈsʌlt]",
    "translation": "оскорблять"
  },
  {
    "index": 6396,
    "word": "insult",
    "transcription": "[ˈɪnsʌlt]",
    "translation": "оскорбление"
  },
  {
    "index": 6397,
    "word": "lay off",
    "transcription": "[leɪɒf]",
    "translation": "уволить, сократить"
  },
  {
    "index": 6398,
    "word": "spike",
    "transcription": "[spaɪk]",
    "translation": "шип, штырь, острие, клин"
  },
  {
    "index": 6399,
    "word": "spiky",
    "transcription": "[ˈspaɪki]",
    "translation": "остроконечный"
  },
  {
    "index": 6400,
    "word": "bang",
    "transcription": "[bæŋ]",
    "translation": "удар, взрыв"
  },
  {
    "index": 6401,
    "word": "memories",
    "transcription": "[ˈmɛməriz]",
    "translation": "воспоминания"
  },
  {
    "index": 6402,
    "word": "swirl",
    "transcription": "[swɜːl]",
    "translation": "кружить, вихрь, водоворот"
  },
  {
    "index": 6403,
    "word": "hum",
    "transcription": "[hʌm]",
    "translation": "гудеть, жужжать"
  },
  {
    "index": 6404,
    "word": "lurk",
    "transcription": "[lɜːk]",
    "translation": "таиться"
  },
  {
    "index": 6405,
    "word": "mainland",
    "transcription": "[ˈmeɪnlənd]",
    "translation": "материк или большой остров"
  },
  {
    "index": 6406,
    "word": "cart",
    "transcription": "[kɑːt]",
    "translation": "телега"
  },
  {
    "index": 6407,
    "word": "substantive",
    "transcription": "[ˈsʌbstəntɪv]",
    "translation": "существенный, основной"
  },
  {
    "index": 6408,
    "word": "dire",
    "transcription": "[ˈdaɪə]",
    "translation": "страшный, тяжёлый"
  },
  {
    "index": 6409,
    "word": "rite",
    "transcription": "[raɪt]",
    "translation": "церемония, ритуал"
  },
  {
    "index": 6410,
    "word": "bead",
    "transcription": "[biːd]",
    "translation": "шарик, бусинка"
  },
  {
    "index": 6411,
    "word": "beads",
    "transcription": "[biːdz]",
    "translation": "бисер"
  },
  {
    "index": 6412,
    "word": "lineup",
    "transcription": "[ˈlaɪnʌp]",
    "translation": "расстановка, расположение"
  },
  {
    "index": 6413,
    "word": "symbol",
    "transcription": "[ˈsɪmbəl]",
    "translation": "символ"
  },
  {
    "index": 6414,
    "word": "symbolic",
    "transcription": "[sɪmˈbɒlɪk]",
    "translation": "символический"
  },
  {
    "index": 6415,
    "word": "symbolize",
    "transcription": "[ˈsɪmbəlaɪz]",
    "translation": "символизировать"
  },
  {
    "index": 6416,
    "word": "warfare",
    "transcription": "[ˈwɔːfeə]",
    "translation": "военные действия"
  },
  {
    "index": 6417,
    "word": "stalk",
    "transcription": "[stɔːk]",
    "translation": "стебель"
  },
  {
    "index": 6418,
    "word": "tout",
    "transcription": "[taʊt]",
    "translation": "рекламировать, нявязывать"
  },
  {
    "index": 6419,
    "word": "dairy",
    "transcription": "[ˈdeəri]",
    "translation": "молочные продукты"
  },
  {
    "index": 6420,
    "word": "oppress",
    "transcription": "[əˈprɛs]",
    "translation": "угнетать, притеснять"
  },
  {
    "index": 6421,
    "word": "oppression",
    "transcription": "[əˈprɛʃən]",
    "translation": "угнетение"
  },
  {
    "index": 6422,
    "word": "oppressor",
    "transcription": "[əˈprɛsə]",
    "translation": "угнетатель"
  },
  {
    "index": 6423,
    "word": "emperor",
    "transcription": "[ˈɛmpərə]",
    "translation": "император"
  },
  {
    "index": 6424,
    "word": "empress",
    "transcription": "[ˈɛmprɪs]",
    "translation": "императрица"
  },
  {
    "index": 6425,
    "word": "nutrient",
    "transcription": "[ˈnjuːtrɪənt]",
    "translation": "питательный, пит. вещество"
  },
  {
    "index": 6426,
    "word": "sly",
    "transcription": "[slaɪ]",
    "translation": "лукавый, коварный"
  },
  {
    "index": 6427,
    "word": "outweigh",
    "transcription": "[aʊtˈweɪ]",
    "translation": "перевешивать"
  },
  {
    "index": 6428,
    "word": "flashlight",
    "transcription": "[ˈflæʃˌlaɪt]",
    "translation": "фонарик"
  },
  {
    "index": 6429,
    "word": "discretion",
    "transcription": "[dɪsˈkrɛʃən]",
    "translation": "благоразумие, усмотрение"
  },
  {
    "index": 6430,
    "word": "feed on",
    "transcription": "[fiːdɒn]",
    "translation": "питаться"
  },
  {
    "index": 6431,
    "word": "rhyme",
    "transcription": "[raɪm]",
    "translation": "рифма, рифмовать"
  },
  {
    "index": 6432,
    "word": "revenge",
    "transcription": "[rɪˈvɛnʤ]",
    "translation": "месть"
  },
  {
    "index": 6433,
    "word": "dead end",
    "transcription": "[dɛdɛnd]",
    "translation": "тупик"
  },
  {
    "index": 6434,
    "word": "envy",
    "transcription": "[ˈɛnvi]",
    "translation": "зависть"
  },
  {
    "index": 6435,
    "word": "envious",
    "transcription": "[ˈɛnvɪəs]",
    "translation": "завистливый"
  },
  {
    "index": 6436,
    "word": "unenviable",
    "transcription": "[ˌʌnˈɛnvɪəbl]",
    "translation": "незавидный"
  },
  {
    "index": 6437,
    "word": "gem",
    "transcription": "[ʤɛm]",
    "translation": "(полу)драгоценный камень"
  },
  {
    "index": 6438,
    "word": "duration",
    "transcription": "[djʊəˈreɪʃən]",
    "translation": "продолжительность"
  },
  {
    "index": 6439,
    "word": "spur",
    "transcription": "[spɜː]",
    "translation": "шпора, побуждать"
  },
  {
    "index": 6440,
    "word": "heap",
    "transcription": "[hiːp]",
    "translation": "куча"
  },
  {
    "index": 6441,
    "word": "guise",
    "transcription": "[gaɪz]",
    "translation": "облик, личина"
  },
  {
    "index": 6442,
    "word": "break up",
    "transcription": "[breɪkʌp]",
    "translation": "разнимать"
  },
  {
    "index": 6443,
    "word": "axis",
    "transcription": "[ˈæksɪs]",
    "translation": "ось"
  },
  {
    "index": 6444,
    "word": "nap",
    "transcription": "[næp]",
    "translation": "вздремнуть, дремота"
  },
  {
    "index": 6445,
    "word": "take a nap",
    "transcription": "[teɪkənæp]",
    "translation": "вздремнуть"
  },
  {
    "index": 6446,
    "word": "loom",
    "transcription": "[luːm]",
    "translation": "маячить, виднеться"
  },
  {
    "index": 6447,
    "word": "enchant",
    "transcription": "[ɪnˈʧɑːnt]",
    "translation": "околдовать, очаровать"
  },
  {
    "index": 6448,
    "word": "enchantment",
    "transcription": "[ɪnˈʧɑːntmənt]",
    "translation": "очарование"
  },
  {
    "index": 6449,
    "word": "disenchantment",
    "transcription": "[ˌdɪsɪnˈʧɑːntmənt]",
    "translation": "разочарование"
  },
  {
    "index": 6450,
    "word": "squirt",
    "transcription": "[skwɜːt]",
    "translation": "тонкая струя"
  },
  {
    "index": 6451,
    "word": "jingle",
    "transcription": "[ˈʤɪŋgl]",
    "translation": "звенеть, звон"
  },
  {
    "index": 6452,
    "word": "creed",
    "transcription": "[kriːd]",
    "translation": "вероисповедание, убеждение"
  },
  {
    "index": 6453,
    "word": "sill",
    "transcription": "[sɪl]",
    "translation": "подоконник, порог"
  },
  {
    "index": 6454,
    "word": "windowsill",
    "transcription": "[ˈwɪndəʊsɪl]",
    "translation": "подоконник"
  },
  {
    "index": 6455,
    "word": "notch",
    "transcription": "[nɒʧ]",
    "translation": "выемка"
  },
  {
    "index": 6456,
    "word": "notched",
    "transcription": "[nɒʧt]",
    "translation": "зазубренный"
  },
  {
    "index": 6457,
    "word": "hierarchy",
    "transcription": "[ˈhaɪərɑːki]",
    "translation": "иерархия"
  },
  {
    "index": 6458,
    "word": "hierarchical",
    "transcription": "[ˌhaɪərˈɑːkɪkəl]",
    "translation": "иерархическая"
  },
  {
    "index": 6459,
    "word": "puppy",
    "transcription": "[ˈpʌpi]",
    "translation": "щенок"
  },
  {
    "index": 6460,
    "word": "pup",
    "transcription": "[pʌp]",
    "translation": "щенок"
  },
  {
    "index": 6461,
    "word": "booth",
    "transcription": "[buːð]",
    "translation": "будка, кабина"
  },
  {
    "index": 6462,
    "word": "waver",
    "transcription": "[ˈweɪvə]",
    "translation": "дрогнуть"
  },
  {
    "index": 6463,
    "word": "unwavering",
    "transcription": "[ʌnˈweɪvərɪŋ]",
    "translation": "недрогнувший"
  },
  {
    "index": 6464,
    "word": "archive",
    "transcription": "[ˈɑːkaɪv]",
    "translation": "архив"
  },
  {
    "index": 6465,
    "word": "archival",
    "transcription": "[ɑːˈkaɪvəl]",
    "translation": "архивный"
  },
  {
    "index": 6466,
    "word": "cleanse",
    "transcription": "[klɛnz]",
    "translation": "очищать"
  },
  {
    "index": 6467,
    "word": "cleanser",
    "transcription": "[ˈklɛnzə]",
    "translation": "моющее средство"
  },
  {
    "index": 6468,
    "word": "apron",
    "transcription": "[ˈeɪprən]",
    "translation": "фартук, передник"
  },
  {
    "index": 6469,
    "word": "custody",
    "transcription": "[ˈkʌstədi]",
    "translation": "охрана, стража или опека"
  },
  {
    "index": 6470,
    "word": "dome",
    "transcription": "[dəʊm]",
    "translation": "купол, свод"
  },
  {
    "index": 6471,
    "word": "fill in on",
    "transcription": "[fɪlɪnɒn]",
    "translation": "посвятить (в подробности)"
  },
  {
    "index": 6472,
    "word": "outdated",
    "transcription": "[aʊtˈdeɪtɪd]",
    "translation": "устаревший"
  },
  {
    "index": 6473,
    "word": "dated",
    "transcription": "[ˈdeɪtɪd]",
    "translation": "устаревший"
  },
  {
    "index": 6474,
    "word": "out of date",
    "transcription": "[aʊtɒvdeɪt]",
    "translation": "устаревший"
  },
  {
    "index": 6475,
    "word": "abolish",
    "transcription": "[əˈbɒlɪʃ]",
    "translation": "упразднять"
  },
  {
    "index": 6476,
    "word": "abolition",
    "transcription": "[ˌæbəʊˈlɪʃ(ə)n]",
    "translation": "отмена"
  },
  {
    "index": 6477,
    "word": "downturn",
    "transcription": "[ˈdaʊntɜːn]",
    "translation": "спад"
  },
  {
    "index": 6478,
    "word": "dental",
    "transcription": "[ˈdɛntl]",
    "translation": "зубной, стоматологический"
  },
  {
    "index": 6479,
    "word": "dentist",
    "transcription": "[ˈdɛntɪst]",
    "translation": "зубной врач"
  },
  {
    "index": 6480,
    "word": "dentistry",
    "transcription": "[ˈdɛntɪstri]",
    "translation": "лечение зубов"
  },
  {
    "index": 6481,
    "word": "errand",
    "transcription": "[ˈɛrənd]",
    "translation": "поручение"
  },
  {
    "index": 6482,
    "word": "overflow",
    "transcription": "[ˈəʊvəfləʊ]",
    "translation": "переполняться, разлиться"
  },
  {
    "index": 6483,
    "word": "span",
    "transcription": "[spæn]",
    "translation": "пролёт, интервал"
  },
  {
    "index": 6484,
    "word": "robe",
    "transcription": "[rəʊb]",
    "translation": "халат, мантия, одеяние"
  },
  {
    "index": 6485,
    "word": "tint",
    "transcription": "[tɪnt]",
    "translation": "оттенок"
  },
  {
    "index": 6486,
    "word": "fingertip",
    "transcription": "[ˈfɪŋgətɪp]",
    "translation": "кончик пальца"
  },
  {
    "index": 6487,
    "word": "garbage",
    "transcription": "[ˈgɑːbɪʤ]",
    "translation": "мусор (особ. пищевой)"
  },
  {
    "index": 6488,
    "word": "howl",
    "transcription": "[haʊl]",
    "translation": "выть"
  },
  {
    "index": 6489,
    "word": "peach",
    "transcription": "[piːʧ]",
    "translation": "персик"
  },
  {
    "index": 6490,
    "word": "constellation",
    "transcription": "[ˌkɒnstəˈleɪʃən]",
    "translation": "созвездие"
  },
  {
    "index": 6491,
    "word": "bounds",
    "transcription": "[baʊndz]",
    "translation": "границы, рамки (перен.)"
  },
  {
    "index": 6492,
    "word": "beloved",
    "transcription": "[bɪˈlʌvd]",
    "translation": "любимый"
  },
  {
    "index": 6493,
    "word": "hobble",
    "transcription": "[ˈhɒbl]",
    "translation": "прихрамывать"
  },
  {
    "index": 6494,
    "word": "grunt",
    "transcription": "[grʌnt]",
    "translation": "хрюкать"
  },
  {
    "index": 6495,
    "word": "roadway",
    "transcription": "[ˈrəʊdweɪ]",
    "translation": "проезжая часть"
  },
  {
    "index": 6496,
    "word": "crackle",
    "transcription": "[ˈkrækl]",
    "translation": "потрескивание"
  },
  {
    "index": 6497,
    "word": "ammunition",
    "transcription": "[ˌæmjʊˈnɪʃ(ə)n]",
    "translation": "боеприпасы"
  },
  {
    "index": 6498,
    "word": "saucepan",
    "transcription": "[ˈsɔːspən]",
    "translation": "кастрюля или сковорода"
  },
  {
    "index": 6499,
    "word": "bandage",
    "transcription": "[ˈbændɪʤ]",
    "translation": "повязка"
  },
  {
    "index": 6500,
    "word": "mantle",
    "transcription": "[ˈmæntl]",
    "translation": "мантия"
  },
  {
    "index": 6501,
    "word": "commonwealth",
    "transcription": "[ˈkɒmənwɛlθ]",
    "translation": "содружество"
  },
  {
    "index": 6502,
    "word": "stall",
    "transcription": "[stɔːl]",
    "translation": "палатка, ларёк"
  },
  {
    "index": 6503,
    "word": "scribble",
    "transcription": "[ˈskrɪbl]",
    "translation": "криво написать, нацарапать"
  },
  {
    "index": 6504,
    "word": "frayed",
    "transcription": "[freɪd]",
    "translation": "потрёпанный"
  },
  {
    "index": 6505,
    "word": "bank on",
    "transcription": "[bæŋkɒn]",
    "translation": "надеяться, полагаться"
  },
  {
    "index": 6506,
    "word": "glimpse",
    "transcription": "[glɪmps]",
    "translation": "вид (мельком или уголком)"
  },
  {
    "index": 6507,
    "word": "deft",
    "transcription": "[dɛft]",
    "translation": "ловкий, проворный"
  },
  {
    "index": 6508,
    "word": "deftness",
    "transcription": "[ˈdɛftnəs]",
    "translation": "ловкость"
  },
  {
    "index": 6509,
    "word": "outright",
    "transcription": "[ˈaʊtraɪt]",
    "translation": "прямой, откровенный"
  },
  {
    "index": 6510,
    "word": "imperative",
    "transcription": "[ɪmˈpɛrətɪv]",
    "translation": "обязательный, необходимый"
  },
  {
    "index": 6511,
    "word": "breakthrough",
    "transcription": "[ˈbreɪkˌθruː]",
    "translation": "прорыв, достижение"
  },
  {
    "index": 6512,
    "word": "navy",
    "transcription": "[ˈneɪvi]",
    "translation": "военно-морской флот"
  },
  {
    "index": 6513,
    "word": "naval",
    "transcription": "[ˈneɪvəl]",
    "translation": "военно-морской"
  },
  {
    "index": 6514,
    "word": "flick",
    "transcription": "[flɪk]",
    "translation": "короткое резкое движение"
  },
  {
    "index": 6515,
    "word": "book",
    "transcription": "[bʊk]",
    "translation": "купить, забронировать"
  },
  {
    "index": 6516,
    "word": "indifferent",
    "transcription": "[ɪnˈdɪfrənt]",
    "translation": "безразличный"
  },
  {
    "index": 6517,
    "word": "indifference",
    "transcription": "[ɪnˈdɪfrəns]",
    "translation": "равнодушие"
  },
  {
    "index": 6518,
    "word": "thermal",
    "transcription": "[ˈθɜːməl]",
    "translation": "тепловой"
  },
  {
    "index": 6519,
    "word": "clout",
    "transcription": "[klaʊt]",
    "translation": "влияние, влиятельность"
  },
  {
    "index": 6520,
    "word": "gauge",
    "transcription": "[geɪʤ]",
    "translation": "измерить, изм. прибор"
  },
  {
    "index": 6521,
    "word": "peasant",
    "transcription": "[ˈpɛzənt]",
    "translation": "крестьянин"
  },
  {
    "index": 6522,
    "word": "jut",
    "transcription": "[ʤʌt]",
    "translation": "выступать, выдаваться"
  },
  {
    "index": 6523,
    "word": "spoil",
    "transcription": "[spɔːɪl]",
    "translation": "портить"
  },
  {
    "index": 6524,
    "word": "tumor (tumour)",
    "transcription": "[ˈtjuːmə]",
    "translation": "опухоль"
  },
  {
    "index": 6525,
    "word": "nostril",
    "transcription": "[ˈnɒstrɪl]",
    "translation": "ноздря"
  },
  {
    "index": 6526,
    "word": "singular",
    "transcription": "[ˈsɪŋgjʊlə]",
    "translation": "единственный, особый"
  },
  {
    "index": 6527,
    "word": "high-end",
    "transcription": "[haɪ-ɛnd]",
    "translation": "высококлассный, лидирующий"
  },
  {
    "index": 6528,
    "word": "aboard",
    "transcription": "[əˈbɔːd]",
    "translation": "на борту"
  },
  {
    "index": 6529,
    "word": "overboard",
    "transcription": "[ˈəʊvəbɔːd]",
    "translation": "за борт, за бортом"
  },
  {
    "index": 6530,
    "word": "onboard",
    "transcription": "[ˈɒnbɔːd]",
    "translation": "на борту"
  },
  {
    "index": 6531,
    "word": "air",
    "transcription": "[eə]",
    "translation": "вид, впечатление"
  },
  {
    "index": 6532,
    "word": "rim",
    "transcription": "[rɪm]",
    "translation": "край, обод"
  },
  {
    "index": 6533,
    "word": "facial",
    "transcription": "[ˈfeɪʃəl]",
    "translation": "лицевой"
  },
  {
    "index": 6534,
    "word": "adversary",
    "transcription": "[ˈædvəsəri]",
    "translation": "противник, соперник"
  },
  {
    "index": 6535,
    "word": "adversarial",
    "transcription": "[adversarial]",
    "translation": "состязательный"
  },
  {
    "index": 6536,
    "word": "lure",
    "transcription": "[ljʊə]",
    "translation": "приманка, манить"
  },
  {
    "index": 6537,
    "word": "wary",
    "transcription": "[ˈweəri]",
    "translation": "осторожный, настороженный"
  },
  {
    "index": 6538,
    "word": "wariness",
    "transcription": "[ˈweərɪnɪs]",
    "translation": "осмотрительность"
  },
  {
    "index": 6539,
    "word": "cuddle",
    "transcription": "[ˈkʌdl]",
    "translation": "обнимать, прижимать"
  },
  {
    "index": 6540,
    "word": "outnumber",
    "transcription": "[aʊtˈnʌmbə]",
    "translation": "превосходить численно"
  },
  {
    "index": 6541,
    "word": "tied up",
    "transcription": "[taɪdʌp]",
    "translation": "занятый"
  },
  {
    "index": 6542,
    "word": "necklace",
    "transcription": "[ˈnɛklɪs]",
    "translation": "ожерелье"
  },
  {
    "index": 6543,
    "word": "snore",
    "transcription": "[snɔː]",
    "translation": "храп, храпеть"
  },
  {
    "index": 6544,
    "word": "taunt",
    "transcription": "[tɔːnt]",
    "translation": "насмехаться, насмешка"
  },
  {
    "index": 6545,
    "word": "waive",
    "transcription": "[weɪv]",
    "translation": "отказаться, воздержаться от"
  },
  {
    "index": 6546,
    "word": "waiver",
    "transcription": "[ˈweɪvə]",
    "translation": "отказ"
  },
  {
    "index": 6547,
    "word": "come across",
    "transcription": "[kʌməˈkrɒs]",
    "translation": "встретить (случайно)"
  },
  {
    "index": 6548,
    "word": "run across",
    "transcription": "[rʌnəˈkrɒs]",
    "translation": "натолкнуться"
  },
  {
    "index": 6549,
    "word": "solution",
    "transcription": "[səˈluːʃən]",
    "translation": "раствор"
  },
  {
    "index": 6550,
    "word": "for real",
    "transcription": "[fɔːrɪəl]",
    "translation": "правда, серьёзно"
  },
  {
    "index": 6551,
    "word": "map out",
    "transcription": "[mæpaʊt]",
    "translation": "запланировать, расписать"
  },
  {
    "index": 6552,
    "word": "fluffy",
    "transcription": "[ˈflʌfi]",
    "translation": "пушистый"
  },
  {
    "index": 6553,
    "word": "nitrogen",
    "transcription": "[ˈnaɪtrəʤən]",
    "translation": "азот"
  },
  {
    "index": 6554,
    "word": "triple",
    "transcription": "[ˈtrɪpl]",
    "translation": "тройной"
  },
  {
    "index": 6555,
    "word": "aerial",
    "transcription": "[ˈeərɪəl]",
    "translation": "антенна"
  },
  {
    "index": 6556,
    "word": "bowl smb over",
    "transcription": "[bəʊlsmbˈəʊvə]",
    "translation": "сбить с ног, сразить"
  },
  {
    "index": 6557,
    "word": "adorn",
    "transcription": "[əˈdɔːn]",
    "translation": "украшать"
  },
  {
    "index": 6558,
    "word": "adornment",
    "transcription": "[əˈdɔːnmənt]",
    "translation": "украшение"
  },
  {
    "index": 6559,
    "word": "mean (meant, meant)",
    "transcription": "[miːn]",
    "translation": "предназначать"
  },
  {
    "index": 6560,
    "word": "hebrew",
    "transcription": "[ˈhiːbruː]",
    "translation": "еврейский"
  },
  {
    "index": 6561,
    "word": "jab",
    "transcription": "[ʤæb]",
    "translation": "ударять, пихать"
  },
  {
    "index": 6562,
    "word": "navigate",
    "transcription": "[ˈnævɪgeɪt]",
    "translation": "ориентироваться, ходить по курсу"
  },
  {
    "index": 6563,
    "word": "clear out",
    "transcription": "[klɪəraʊt]",
    "translation": "убирать, забирать"
  },
  {
    "index": 6564,
    "word": "redundant",
    "transcription": "[rɪˈdʌndənt]",
    "translation": "избыточный"
  },
  {
    "index": 6565,
    "word": "redundancy",
    "transcription": "[rɪˈdʌndənsi]",
    "translation": "избыточность"
  },
  {
    "index": 6566,
    "word": "commemorate",
    "transcription": "[kəˈmɛməreɪt]",
    "translation": "отметить, почтить"
  },
  {
    "index": 6567,
    "word": "commemoration",
    "transcription": "[kəˌmɛməˈreɪʃən]",
    "translation": "поминовение"
  },
  {
    "index": 6568,
    "word": "commemorative",
    "transcription": "[kəˈmɛmərətɪv]",
    "translation": "памятный"
  },
  {
    "index": 6569,
    "word": "scrape together",
    "transcription": "[skreɪptəˈgɛðə]",
    "translation": "наскрести (денег)"
  },
  {
    "index": 6570,
    "word": "jug",
    "transcription": "[ʤʌg]",
    "translation": "кувшин"
  },
  {
    "index": 6571,
    "word": "furnace",
    "transcription": "[ˈfɜːnɪs]",
    "translation": "печь"
  },
  {
    "index": 6572,
    "word": "furnish",
    "transcription": "[ˈfɜːnɪʃ]",
    "translation": "обставлять, меблировать"
  },
  {
    "index": 6573,
    "word": "roam",
    "transcription": "[rəʊm]",
    "translation": "бродить, блуждать"
  },
  {
    "index": 6574,
    "word": "mid",
    "transcription": "[mɪd]",
    "translation": "середина, полу-"
  },
  {
    "index": 6575,
    "word": "pardon",
    "transcription": "[ˈpɑːdn]",
    "translation": "извинять, извинение"
  },
  {
    "index": 6576,
    "word": "unpardonable",
    "transcription": "[ʌnˈpɑːdnəbl]",
    "translation": "непростительный"
  },
  {
    "index": 6577,
    "word": "niche",
    "transcription": "[nɪʧ]",
    "translation": "ниша"
  },
  {
    "index": 6578,
    "word": "lease",
    "transcription": "[liːs]",
    "translation": "сдавать в аренду"
  },
  {
    "index": 6579,
    "word": "ladder",
    "transcription": "[ˈlædə]",
    "translation": "лестница"
  },
  {
    "index": 6580,
    "word": "compress",
    "transcription": "[ˈkɒmprɛs]",
    "translation": "сжимать, прессовать"
  },
  {
    "index": 6581,
    "word": "compression",
    "transcription": "[kəmˈprɛʃən]",
    "translation": "сжатие"
  },
  {
    "index": 6582,
    "word": "dash",
    "transcription": "[dæʃ]",
    "translation": "бросать, бросаться"
  },
  {
    "index": 6583,
    "word": "stick together",
    "transcription": "[stɪktəˈgɛðə]",
    "translation": "держаться вместе"
  },
  {
    "index": 6584,
    "word": "utter",
    "transcription": "[ˈʌtə]",
    "translation": "полный, абсолютный"
  },
  {
    "index": 6585,
    "word": "bride",
    "transcription": "[braɪd]",
    "translation": "невеста"
  },
  {
    "index": 6586,
    "word": "bridal",
    "transcription": "[ˈbraɪdl]",
    "translation": "свадебный"
  },
  {
    "index": 6587,
    "word": "inmate",
    "transcription": "[ˈɪnmeɪt]",
    "translation": "обитатель"
  },
  {
    "index": 6588,
    "word": "sneeze",
    "transcription": "[sniːz]",
    "translation": "чихать"
  },
  {
    "index": 6589,
    "word": "listen in on",
    "transcription": "[ˈlɪsnɪnɒn]",
    "translation": "подслушивать"
  },
  {
    "index": 6590,
    "word": "renown",
    "transcription": "[rɪˈnaʊn]",
    "translation": "известность, слава"
  },
  {
    "index": 6591,
    "word": "renowned",
    "transcription": "[rɪˈnaʊnd]",
    "translation": "прославленный"
  },
  {
    "index": 6592,
    "word": "shroud",
    "transcription": "[ʃraʊd]",
    "translation": "пелена, окутывать"
  },
  {
    "index": 6593,
    "word": "come off",
    "transcription": "[kʌmɒf]",
    "translation": "отвалиться"
  },
  {
    "index": 6594,
    "word": "slaughter",
    "transcription": "[ˈslɔːtə]",
    "translation": "бойня (в т. ч. перен.), забивать"
  },
  {
    "index": 6595,
    "word": "slaughterhouse",
    "transcription": "[ˈslɔːtəhaʊs]",
    "translation": "скотобойня"
  },
  {
    "index": 6596,
    "word": "tenant",
    "transcription": "[ˈtɛnənt]",
    "translation": "арендатор"
  },
  {
    "index": 6597,
    "word": "tenancy",
    "transcription": "[ˈtɛnənsi]",
    "translation": "аренда"
  },
  {
    "index": 6598,
    "word": "apprentice",
    "transcription": "[əˈprɛntɪs]",
    "translation": "ученик, стажёр"
  },
  {
    "index": 6599,
    "word": "apprenticeship",
    "transcription": "[əˈprɛntɪʃɪp]",
    "translation": "ученичество"
  },
  {
    "index": 6600,
    "word": "hail",
    "transcription": "[heɪl]",
    "translation": "окликнуть, привлечь внимание"
  },
  {
    "index": 6601,
    "word": "ram",
    "transcription": "[ræm]",
    "translation": "баран"
  },
  {
    "index": 6602,
    "word": "get out of",
    "transcription": "[gɛtaʊtɒv]",
    "translation": "избежать, отмазаться"
  },
  {
    "index": 6603,
    "word": "cradle",
    "transcription": "[ˈkreɪdl]",
    "translation": "колыбель"
  },
  {
    "index": 6604,
    "word": "awesome",
    "transcription": "[ˈɔːsəm]",
    "translation": "здорово, классно"
  },
  {
    "index": 6605,
    "word": "lest",
    "transcription": "[lɛst]",
    "translation": "чтобы не, иначе"
  },
  {
    "index": 6606,
    "word": "sever",
    "transcription": "[ˈsɛvə]",
    "translation": "разрывать, разъединять"
  },
  {
    "index": 6607,
    "word": "severance",
    "transcription": "[ˈsɛvərəns]",
    "translation": "разрыв"
  },
  {
    "index": 6608,
    "word": "upwards (upward)",
    "transcription": "[ˈʌpwədz]",
    "translation": "вверх"
  },
  {
    "index": 6609,
    "word": "downwards (downward)",
    "transcription": "[ˈdaʊnwədz]",
    "translation": "вниз (вниз)"
  },
  {
    "index": 6610,
    "word": "backwards (backward)",
    "transcription": "[ˈbækwədz]",
    "translation": "назад (назад)"
  },
  {
    "index": 6611,
    "word": "nephew",
    "transcription": "[ˈnɛvju]",
    "translation": "племянник"
  },
  {
    "index": 6612,
    "word": "fend for (oneself)",
    "transcription": "[fɛndfɔː]",
    "translation": "позаботиться о (себе)"
  },
  {
    "index": 6613,
    "word": "fray",
    "transcription": "[freɪ]",
    "translation": "драка, бой, соревнование"
  },
  {
    "index": 6614,
    "word": "toddler",
    "transcription": "[ˈtɒdlə]",
    "translation": "малыш (1-2 года)"
  },
  {
    "index": 6615,
    "word": "ankle",
    "transcription": "[ˈæŋkl]",
    "translation": "лодыжка, щиколотка"
  },
  {
    "index": 6616,
    "word": "cushion",
    "transcription": "[ˈkʊʃən]",
    "translation": "подушка (маленькая)"
  },
  {
    "index": 6617,
    "word": "wardrobe",
    "transcription": "[ˈwɔːdrəʊb]",
    "translation": "шкаф, гардероб"
  },
  {
    "index": 6618,
    "word": "nun",
    "transcription": "[nʌn]",
    "translation": "монахиня"
  },
  {
    "index": 6619,
    "word": "palace",
    "transcription": "[ˈpælɪs]",
    "translation": "дворец"
  },
  {
    "index": 6620,
    "word": "sprinkle",
    "transcription": "[ˈsprɪŋkl]",
    "translation": "побрызгать, посыпать"
  },
  {
    "index": 6621,
    "word": "sprinkler",
    "transcription": "[ˈsprɪŋklə]",
    "translation": "ороситель"
  },
  {
    "index": 6622,
    "word": "terminate",
    "transcription": "[ˈtɜːmɪneɪt]",
    "translation": "прекратить, завершить (офиц.)"
  },
  {
    "index": 6623,
    "word": "termination",
    "transcription": "[ˌtɜːmɪˈneɪʃən]",
    "translation": "прекращение"
  },
  {
    "index": 6624,
    "word": "swamp",
    "transcription": "[swɒmp]",
    "translation": "болото, топь"
  },
  {
    "index": 6625,
    "word": "swampy",
    "transcription": "[ˈswɒmpi]",
    "translation": "болотистый"
  },
  {
    "index": 6626,
    "word": "lapse",
    "transcription": "[læps]",
    "translation": "промежуток времени"
  },
  {
    "index": 6627,
    "word": "anew",
    "transcription": "[əˈnjuː]",
    "translation": "заново"
  },
  {
    "index": 6628,
    "word": "afresh",
    "transcription": "[əˈfrɛʃ]",
    "translation": "заново"
  },
  {
    "index": 6629,
    "word": "entice",
    "transcription": "[ɪnˈtaɪs]",
    "translation": "соблазнять"
  },
  {
    "index": 6630,
    "word": "enticement",
    "transcription": "[ɪnˈtaɪsmənt]",
    "translation": "приманка, заманивание"
  },
  {
    "index": 6631,
    "word": "dock",
    "transcription": "[dɒk]",
    "translation": "причал, док"
  },
  {
    "index": 6632,
    "word": "limp",
    "transcription": "[lɪmp]",
    "translation": "хромать"
  },
  {
    "index": 6633,
    "word": "limping",
    "transcription": "[ˈlɪmpɪŋ]",
    "translation": "хромота"
  },
  {
    "index": 6634,
    "word": "placid",
    "transcription": "[ˈplæsɪd]",
    "translation": "тихий, спокойный"
  },
  {
    "index": 6635,
    "word": "placidity",
    "transcription": "[plæˈsɪdɪti]",
    "translation": "безмятежность"
  },
  {
    "index": 6636,
    "word": "baptize",
    "transcription": "[bæpˈtaɪz]",
    "translation": "крестить"
  },
  {
    "index": 6637,
    "word": "baptism",
    "transcription": "[ˈbæptɪzm]",
    "translation": "крещение"
  },
  {
    "index": 6638,
    "word": "baptismal",
    "transcription": "[bæpˈtɪzməl]",
    "translation": "крестильный"
  },
  {
    "index": 6639,
    "word": "brawl",
    "transcription": "[brɔːl]",
    "translation": "шумная драка, скандал"
  },
  {
    "index": 6640,
    "word": "disdain",
    "transcription": "[dɪsˈdeɪn]",
    "translation": "пренебрегать, презирать"
  },
  {
    "index": 6641,
    "word": "disdainful",
    "transcription": "[dɪsˈdeɪnfʊl]",
    "translation": "презрительный"
  },
  {
    "index": 6642,
    "word": "shiver",
    "transcription": "[ˈʃɪvə]",
    "translation": "дрожь, дрожать"
  },
  {
    "index": 6643,
    "word": "nipple",
    "transcription": "[ˈnɪpl]",
    "translation": "сосок"
  },
  {
    "index": 6644,
    "word": "lump",
    "transcription": "[lʌmp]",
    "translation": "кусок, глыба, ком"
  },
  {
    "index": 6645,
    "word": "daunt",
    "transcription": "[dɔːnt]",
    "translation": "пугать, обескураживать"
  },
  {
    "index": 6646,
    "word": "undaunted",
    "transcription": "[ʌnˈdɔːntɪd]",
    "translation": "неустрашимый"
  },
  {
    "index": 6647,
    "word": "swarm",
    "transcription": "[swɔːm]",
    "translation": "рой, роиться, толпиться"
  },
  {
    "index": 6648,
    "word": "throw up",
    "transcription": "[θrəʊʌp]",
    "translation": "блевануть"
  },
  {
    "index": 6649,
    "word": "warden",
    "transcription": "[ˈwɔːdn]",
    "translation": "смотритель, надзиратель"
  },
  {
    "index": 6650,
    "word": "renew",
    "transcription": "[rɪˈnjuː]",
    "translation": "возобновлять"
  },
  {
    "index": 6651,
    "word": "renewal",
    "transcription": "[rɪˈnju(ː)əl]",
    "translation": "обновление"
  },
  {
    "index": 6652,
    "word": "renewable",
    "transcription": "[rɪˈnjuːəbl]",
    "translation": "возобновляемый"
  },
  {
    "index": 6653,
    "word": "put out",
    "transcription": "[pʊtaʊt]",
    "translation": "обременять, стеснять"
  },
  {
    "index": 6654,
    "word": "hydrogen",
    "transcription": "[ˈhaɪdrɪʤən]",
    "translation": "водород"
  },
  {
    "index": 6655,
    "word": "grim",
    "transcription": "[grɪm]",
    "translation": "мрачный, зловещий"
  },
  {
    "index": 6656,
    "word": "deem",
    "transcription": "[diːm]",
    "translation": "считать (чем-либо)"
  },
  {
    "index": 6657,
    "word": "consequent",
    "transcription": "[ˈkɒnsɪkwənt]",
    "translation": "последующий, вытекающий"
  },
  {
    "index": 6658,
    "word": "consequently",
    "transcription": "[ˈkɒnsɪkwəntli]",
    "translation": "вследствие этого"
  },
  {
    "index": 6659,
    "word": "dodge",
    "transcription": "[dɒʤ]",
    "translation": "уворачиваться, уклоняться, уловка"
  },
  {
    "index": 6660,
    "word": "dodger",
    "transcription": "[ˈdɒʤə]",
    "translation": "хитрец"
  },
  {
    "index": 6661,
    "word": "nourish",
    "transcription": "[ˈnʌrɪʃ]",
    "translation": "питать, кормить, удобрять"
  },
  {
    "index": 6662,
    "word": "nourishment",
    "transcription": "[ˈnʌrɪʃmənt]",
    "translation": "питание"
  },
  {
    "index": 6663,
    "word": "ailment",
    "transcription": "[ˈeɪlmənt]",
    "translation": "недомогание, болезнь"
  },
  {
    "index": 6664,
    "word": "gleam",
    "transcription": "[gliːm]",
    "translation": "блеск, отблеск"
  },
  {
    "index": 6665,
    "word": "signature",
    "transcription": "[ˈsɪgnɪʧə]",
    "translation": "подпись"
  },
  {
    "index": 6666,
    "word": "awe",
    "transcription": "[ɔː]",
    "translation": "трепет, благоговение"
  },
  {
    "index": 6667,
    "word": "seldom",
    "transcription": "[ˈsɛldəm]",
    "translation": "редко"
  },
  {
    "index": 6668,
    "word": "flair",
    "transcription": "[fleə]",
    "translation": "чутьё, талант"
  },
  {
    "index": 6669,
    "word": "gnaw on",
    "transcription": "[nɔːɒn]",
    "translation": "грызть, обгладывать"
  },
  {
    "index": 6670,
    "word": "oblique",
    "transcription": "[əˈbliːk]",
    "translation": "косой, наклонный"
  },
  {
    "index": 6671,
    "word": "obliquity",
    "transcription": "[əˈblɪkwɪti]",
    "translation": "скос, наклон"
  },
  {
    "index": 6672,
    "word": "arson",
    "transcription": "[ˈɑːsn]",
    "translation": "поджог"
  },
  {
    "index": 6673,
    "word": "arsonist",
    "transcription": "[ˈɑːsnɪst]",
    "translation": "поджигатель"
  },
  {
    "index": 6674,
    "word": "stripe",
    "transcription": "[straɪp]",
    "translation": "полоса"
  },
  {
    "index": 6675,
    "word": "striped",
    "transcription": "[straɪpt]",
    "translation": "полосатый"
  },
  {
    "index": 6676,
    "word": "outlaw",
    "transcription": "[ˈaʊtlɔː]",
    "translation": "преступник (особ. на свободе)"
  },
  {
    "index": 6677,
    "word": "obese",
    "transcription": "[əʊˈbiːs]",
    "translation": "страдающий ожирением"
  },
  {
    "index": 6678,
    "word": "obesity",
    "transcription": "[əʊˈbiːsɪti]",
    "translation": "ожирение"
  },
  {
    "index": 6679,
    "word": "stature",
    "transcription": "[ˈstæʧə]",
    "translation": "рост"
  },
  {
    "index": 6680,
    "word": "fragile",
    "transcription": "[ˈfræʤaɪl]",
    "translation": "хрупкий"
  },
  {
    "index": 6681,
    "word": "fragility",
    "transcription": "[frəˈʤɪlɪti]",
    "translation": "хрупкость"
  },
  {
    "index": 6682,
    "word": "oral",
    "transcription": "[ˈɔːrəl]",
    "translation": "устный, ротовой"
  },
  {
    "index": 6683,
    "word": "wizard",
    "transcription": "[ˈwɪzəd]",
    "translation": "волшебник"
  },
  {
    "index": 6684,
    "word": "wizardry",
    "transcription": "[ˈwɪzədri]",
    "translation": "колдовство, умение"
  },
  {
    "index": 6685,
    "word": "revolt",
    "transcription": "[rɪˈvəʊlt]",
    "translation": "восстание, бунт"
  },
  {
    "index": 6686,
    "word": "compact",
    "transcription": "[ˈkɒmpækt]",
    "translation": "договор"
  },
  {
    "index": 6687,
    "word": "barefoot",
    "transcription": "[ˈbeəfʊt]",
    "translation": "босиком"
  },
  {
    "index": 6688,
    "word": "bog",
    "transcription": "[bɒg]",
    "translation": "болото, трясина"
  },
  {
    "index": 6689,
    "word": "boggy",
    "transcription": "[ˈbɒgi]",
    "translation": "болотистый, топкий"
  },
  {
    "index": 6690,
    "word": "waiter",
    "transcription": "[ˈweɪtə]",
    "translation": "официант"
  },
  {
    "index": 6691,
    "word": "waitress",
    "transcription": "[ˈweɪtrɪs]",
    "translation": "официантка"
  },
  {
    "index": 6692,
    "word": "nanny",
    "transcription": "[ˈnæni]",
    "translation": "няня"
  },
  {
    "index": 6693,
    "word": "multitude",
    "transcription": "[ˈmʌltɪtjuːd]",
    "translation": "множество"
  },
  {
    "index": 6694,
    "word": "flock",
    "transcription": "[flɒk]",
    "translation": "стадо, стая"
  },
  {
    "index": 6695,
    "word": "rein",
    "transcription": "[reɪn]",
    "translation": "сдерживать, держать в узде"
  },
  {
    "index": 6696,
    "word": "shrimp",
    "transcription": "[ʃrɪmp]",
    "translation": "креветка"
  },
  {
    "index": 6697,
    "word": "confide",
    "transcription": "[kənˈfaɪd]",
    "translation": "доверить, вверить"
  },
  {
    "index": 6698,
    "word": "confidant",
    "transcription": "[ˌkɒnfɪˈdænt]",
    "translation": "доверенное лицо, близкий друг"
  },
  {
    "index": 6699,
    "word": "hollow",
    "transcription": "[ˈhɒləʊ]",
    "translation": "полый"
  },
  {
    "index": 6700,
    "word": "hollowness",
    "transcription": "[ˈhɒləʊnəs]",
    "translation": "пустота, бессодержательность"
  },
  {
    "index": 6701,
    "word": "livelihood",
    "transcription": "[ˈlaɪvlɪhʊd]",
    "translation": "средства к существованию"
  },
  {
    "index": 6702,
    "word": "cabbage",
    "transcription": "[ˈkæbɪʤ]",
    "translation": "капуста"
  },
  {
    "index": 6703,
    "word": "hoop",
    "transcription": "[huːp]",
    "translation": "обруч, обод"
  },
  {
    "index": 6704,
    "word": "swallow",
    "transcription": "[ˈswɒləʊ]",
    "translation": "проглатывать, глоток"
  },
  {
    "index": 6705,
    "word": "elude",
    "transcription": "[ɪˈluːd]",
    "translation": "ускользнуть, увернуться"
  },
  {
    "index": 6706,
    "word": "elusive",
    "transcription": "[ɪˈluːsɪv]",
    "translation": "неуловимый"
  },
  {
    "index": 6707,
    "word": "lumber",
    "transcription": "[ˈlʌmbə]",
    "translation": "пиломатериалы"
  },
  {
    "index": 6708,
    "word": "lumbering",
    "transcription": "[ˈlʌmbərɪŋ]",
    "translation": "неуклюжий, громыхающий"
  },
  {
    "index": 6709,
    "word": "specimen",
    "transcription": "[ˈspɛsɪmɪn]",
    "translation": "образец, экземпляр"
  },
  {
    "index": 6710,
    "word": "veer",
    "transcription": "[vɪə]",
    "translation": "резко свернуть"
  },
  {
    "index": 6711,
    "word": "knit",
    "transcription": "[nɪt]",
    "translation": "вязать"
  },
  {
    "index": 6712,
    "word": "at the moment",
    "transcription": "[ætðəˈməʊmənt]",
    "translation": "сейчас"
  },
  {
    "index": 6713,
    "word": "doom",
    "transcription": "[duːm]",
    "translation": "гибель, рок, обречённость и т. д."
  },
  {
    "index": 6714,
    "word": "peek",
    "transcription": "[piːk]",
    "translation": "вгзлянуть, подсмотреть"
  },
  {
    "index": 6715,
    "word": "embassy",
    "transcription": "[ˈɛmbəsi]",
    "translation": "посольство"
  },
  {
    "index": 6716,
    "word": "luggage",
    "transcription": "[ˈlʌgɪʤ]",
    "translation": "багаж"
  },
  {
    "index": 6717,
    "word": "encompass",
    "transcription": "[ɪnˈkʌmpəs]",
    "translation": "охватывать, заключать"
  },
  {
    "index": 6718,
    "word": "strew (strewn, strewn)",
    "transcription": "[struː]",
    "translation": "разбрасывать"
  },
  {
    "index": 6719,
    "word": "applause",
    "transcription": "[əˈplɔːz]",
    "translation": "аплодисменты"
  },
  {
    "index": 6720,
    "word": "applaud",
    "transcription": "[əˈplɔːd]",
    "translation": "рукоплескать"
  },
  {
    "index": 6721,
    "word": "ferocious",
    "transcription": "[fəˈrəʊʃəs]",
    "translation": "свирепый"
  },
  {
    "index": 6722,
    "word": "ferociousness",
    "transcription": "[fəˈrəʊʃəsnəs]",
    "translation": "свирепость"
  },
  {
    "index": 6723,
    "word": "rogue",
    "transcription": "[rəʊg]",
    "translation": "жулик, проходимец"
  },
  {
    "index": 6724,
    "word": "lane",
    "transcription": "[leɪn]",
    "translation": "полоса дороги"
  },
  {
    "index": 6725,
    "word": "keep down",
    "transcription": "[kiːpdaʊn]",
    "translation": "удержать, подавить"
  },
  {
    "index": 6726,
    "word": "hold down",
    "transcription": "[həʊlddaʊn]",
    "translation": "удерживать"
  },
  {
    "index": 6727,
    "word": "remainder",
    "transcription": "[rɪˈmeɪndə]",
    "translation": "оставшаяся часть"
  },
  {
    "index": 6728,
    "word": "wretched",
    "transcription": "[ˈrɛʧɪd]",
    "translation": "жалкий, несчастный"
  },
  {
    "index": 6729,
    "word": "twilight",
    "transcription": "[ˈtwaɪlaɪt]",
    "translation": "сумерки"
  },
  {
    "index": 6730,
    "word": "vein",
    "transcription": "[veɪn]",
    "translation": "вена"
  },
  {
    "index": 6731,
    "word": "hood",
    "transcription": "[hʊd]",
    "translation": "капюшон"
  },
  {
    "index": 6732,
    "word": "buckle up",
    "transcription": "[ˈbʌklʌp]",
    "translation": "пристегнуться"
  },
  {
    "index": 6733,
    "word": "accessory",
    "transcription": "[əkˈsɛsəri]",
    "translation": "принадлежность, аксессуар"
  },
  {
    "index": 6734,
    "word": "maternal",
    "transcription": "[məˈtɜːnl]",
    "translation": "материнский"
  },
  {
    "index": 6735,
    "word": "maternity",
    "transcription": "[məˈtɜːnɪti]",
    "translation": "материнство"
  },
  {
    "index": 6736,
    "word": "clog",
    "transcription": "[klɒg]",
    "translation": "загромождать"
  },
  {
    "index": 6737,
    "word": "strand",
    "transcription": "[strænd]",
    "translation": "прядь, нить (об. скрученная)"
  },
  {
    "index": 6738,
    "word": "blouse",
    "transcription": "[blaʊz]",
    "translation": "блузка"
  },
  {
    "index": 6739,
    "word": "earthquake (quake)",
    "transcription": "[ˈɜːθkweɪk]",
    "translation": "землетрясение"
  },
  {
    "index": 6740,
    "word": "turn into",
    "transcription": "[tɜːnˈɪntuː]",
    "translation": "превращать (ся)"
  },
  {
    "index": 6741,
    "word": "change into",
    "transcription": "[ʧeɪnʤˈɪntuː]",
    "translation": "превращаться в"
  },
  {
    "index": 6742,
    "word": "jumper",
    "transcription": "[ˈʤʌmpə]",
    "translation": "джемпер"
  },
  {
    "index": 6743,
    "word": "shove",
    "transcription": "[ʃʌv]",
    "translation": "резко толкнуть, пихнуть"
  },
  {
    "index": 6744,
    "word": "hideous",
    "transcription": "[ˈhɪdɪəs]",
    "translation": "отвратительный, ужасный"
  },
  {
    "index": 6745,
    "word": "catch up with",
    "transcription": "[kæʧʌpwɪð]",
    "translation": "догнать"
  },
  {
    "index": 6746,
    "word": "get at",
    "transcription": "[gɛtæt]",
    "translation": "клонить, намекать"
  },
  {
    "index": 6747,
    "word": "ambulance",
    "transcription": "[ˈæmbjʊləns]",
    "translation": "скорая помощь"
  },
  {
    "index": 6748,
    "word": "kindergarten",
    "transcription": "[ˈkɪndəˌgɑːtn]",
    "translation": "детский сад"
  },
  {
    "index": 6749,
    "word": "hue",
    "transcription": "[hjuː]",
    "translation": "цвет, оттенок"
  },
  {
    "index": 6750,
    "word": "enlighten",
    "transcription": "[ɪnˈlaɪtn]",
    "translation": "просветить"
  },
  {
    "index": 6751,
    "word": "enlightenment",
    "transcription": "[ɪnˈlaɪtnmənt]",
    "translation": "просветление"
  },
  {
    "index": 6752,
    "word": "glasses",
    "transcription": "[ˈglɑːsɪz]",
    "translation": "очки"
  },
  {
    "index": 6753,
    "word": "saturated",
    "transcription": "[ˈsæʧəreɪtɪd]",
    "translation": "насыщенный"
  },
  {
    "index": 6754,
    "word": "saturation",
    "transcription": "[ˌsæʧəˈreɪʃən]",
    "translation": "насыщенность"
  },
  {
    "index": 6755,
    "word": "cork",
    "transcription": "[kɔːk]",
    "translation": "пробка"
  },
  {
    "index": 6756,
    "word": "corkscrew",
    "transcription": "[ˈkɔːkskruː]",
    "translation": "штопор"
  },
  {
    "index": 6757,
    "word": "recur",
    "transcription": "[rɪˈkɜː]",
    "translation": "повторяться, возвращаться"
  },
  {
    "index": 6758,
    "word": "recurrent",
    "transcription": "[rɪˈkʌrənt]",
    "translation": "возвратный"
  },
  {
    "index": 6759,
    "word": "recurrence",
    "transcription": "[rɪˈkʌrəns]",
    "translation": "повторение"
  },
  {
    "index": 6760,
    "word": "recursion",
    "transcription": "[recursion]",
    "translation": "рекурсия"
  },
  {
    "index": 6761,
    "word": "alienate",
    "transcription": "[ˈeɪliəneɪt]",
    "translation": "отчуждать, отдалять, отвергать"
  },
  {
    "index": 6762,
    "word": "alienation",
    "transcription": "[ˌeɪliəˈneɪʃ(ə)n]",
    "translation": "отчуждение"
  },
  {
    "index": 6763,
    "word": "twitch",
    "transcription": "[twɪʧ]",
    "translation": "дёргаться"
  },
  {
    "index": 6764,
    "word": "celestial",
    "transcription": "[səˈlɛstiəl]",
    "translation": "астрономический, небесный"
  },
  {
    "index": 6765,
    "word": "timely",
    "transcription": "[ˈtaɪmli]",
    "translation": "своевременный"
  },
  {
    "index": 6766,
    "word": "untimely",
    "transcription": "[ʌnˈtaɪmli]",
    "translation": "безвременно"
  },
  {
    "index": 6767,
    "word": "posture",
    "transcription": "[ˈpɒsʧə]",
    "translation": "поза"
  },
  {
    "index": 6768,
    "word": "hopeful",
    "transcription": "[ˈhəʊpfʊl]",
    "translation": "внушающий надежды"
  },
  {
    "index": 6769,
    "word": "hopeless",
    "transcription": "[ˈhəʊplɪs]",
    "translation": "безнадежный"
  },
  {
    "index": 6770,
    "word": "procure",
    "transcription": "[prəˈkjʊə]",
    "translation": "достать, добыть, обеспечить"
  },
  {
    "index": 6771,
    "word": "procurement",
    "transcription": "[prəˈkjʊəmənt]",
    "translation": "закупка, поставка"
  },
  {
    "index": 6772,
    "word": "go for",
    "transcription": "[gəʊfɔː]",
    "translation": "выбирать, предпочитать"
  },
  {
    "index": 6773,
    "word": "contaminate",
    "transcription": "[kənˈtæmɪneɪt]",
    "translation": "загрязнять"
  },
  {
    "index": 6774,
    "word": "contamination",
    "transcription": "[kənˌtæmɪˈneɪʃən]",
    "translation": "загрязнение"
  },
  {
    "index": 6775,
    "word": "contaminant",
    "transcription": "[kənˈtæmɪnənt]",
    "translation": "загрязнитель"
  },
  {
    "index": 6776,
    "word": "sprawl",
    "transcription": "[sprɔːl]",
    "translation": "растягиваться, расползаться"
  },
  {
    "index": 6777,
    "word": "wiggle",
    "transcription": "[ˈwɪgl]",
    "translation": "шевелить"
  },
  {
    "index": 6778,
    "word": "orphan",
    "transcription": "[ˈɔːfən]",
    "translation": "сирота"
  },
  {
    "index": 6779,
    "word": "orphanage",
    "transcription": "[ˈɔːfənɪʤ]",
    "translation": "сиротство или детдом"
  },
  {
    "index": 6780,
    "word": "meadow",
    "transcription": "[ˈmɛdəʊ]",
    "translation": "луг"
  },
  {
    "index": 6781,
    "word": "regain",
    "transcription": "[rɪˈgeɪn]",
    "translation": "восстановить, вернуть себе"
  },
  {
    "index": 6782,
    "word": "career",
    "transcription": "[kəˈrɪə]",
    "translation": "карьера"
  },
  {
    "index": 6783,
    "word": "rotten",
    "transcription": "[ˈrɒtn]",
    "translation": "гнилой"
  },
  {
    "index": 6784,
    "word": "voyage",
    "transcription": "[ˈvɔɪɪʤ]",
    "translation": "путешествие, рейс"
  },
  {
    "index": 6785,
    "word": "voyager",
    "transcription": "[ˈvɔɪəʤə]",
    "translation": "мореплаватель"
  },
  {
    "index": 6786,
    "word": "policy",
    "transcription": "[ˈpɒlɪsi]",
    "translation": "политика, курс"
  },
  {
    "index": 6787,
    "word": "dice (pl: dice)",
    "transcription": "[daɪs]",
    "translation": "кубик (игральный)"
  },
  {
    "index": 6788,
    "word": "block up",
    "transcription": "[blɒkʌp]",
    "translation": "забиться (о канале)"
  },
  {
    "index": 6789,
    "word": "refresh",
    "transcription": "[rɪˈfrɛʃ]",
    "translation": "обновлять, освежить"
  },
  {
    "index": 6790,
    "word": "pick out",
    "transcription": "[pɪkaʊt]",
    "translation": "выбрать или выделить из"
  },
  {
    "index": 6791,
    "word": "brink",
    "transcription": "[brɪŋk]",
    "translation": "грань, край"
  },
  {
    "index": 6792,
    "word": "deficient",
    "transcription": "[dɪˈfɪʃənt]",
    "translation": "недостаточный, неполный"
  },
  {
    "index": 6793,
    "word": "deficiency",
    "transcription": "[dɪˈfɪʃənsi]",
    "translation": "неполноценность, нехватка"
  },
  {
    "index": 6794,
    "word": "tutor",
    "transcription": "[ˈtjuːtə]",
    "translation": "репетитор, преподаватель"
  },
  {
    "index": 6795,
    "word": "tutorial",
    "transcription": "[tju(ː)ˈtɜːrɪəl]",
    "translation": "руководство"
  },
  {
    "index": 6796,
    "word": "align",
    "transcription": "[əˈlaɪn]",
    "translation": "выравнивать, выстраивать"
  },
  {
    "index": 6797,
    "word": "alignment",
    "transcription": "[əˈlaɪnmənt]",
    "translation": "выравнивание"
  },
  {
    "index": 6798,
    "word": "mourn",
    "transcription": "[mɔːn]",
    "translation": "скорбеть, носить траур"
  },
  {
    "index": 6799,
    "word": "carriage",
    "transcription": "[ˈkærɪʤ]",
    "translation": "каретка"
  },
  {
    "index": 6800,
    "word": "bulb",
    "transcription": "[bʌlb]",
    "translation": "лампа, колба"
  },
  {
    "index": 6801,
    "word": "pull off",
    "transcription": "[pʊlɒf]",
    "translation": "справиться, вытянуть"
  },
  {
    "index": 6802,
    "word": "asylum",
    "transcription": "[əˈsaɪləm]",
    "translation": "убежище"
  },
  {
    "index": 6803,
    "word": "lunatic asylum",
    "transcription": "[ˈluːnətɪkəˈsaɪləm]",
    "translation": "психбольница"
  },
  {
    "index": 6804,
    "word": "deity",
    "transcription": "[ˈdiːɪti]",
    "translation": "божество"
  },
  {
    "index": 6805,
    "word": "greenhouse",
    "transcription": "[ˈgriːnhaʊs]",
    "translation": "теплица, оранжерея"
  },
  {
    "index": 6806,
    "word": "inhale",
    "transcription": "[ɪnˈheɪl]",
    "translation": "вдыхать"
  },
  {
    "index": 6807,
    "word": "inhalation",
    "transcription": "[ˌɪnhəˈleɪʃən]",
    "translation": "ингаляция"
  },
  {
    "index": 6808,
    "word": "exhale",
    "transcription": "[ɛksˈheɪl]",
    "translation": "выдыхать"
  },
  {
    "index": 6809,
    "word": "exhalation",
    "transcription": "[ˌɛkshəˈleɪʃən]",
    "translation": "выдыхание"
  },
  {
    "index": 6810,
    "word": "groom",
    "transcription": "[grʊm]",
    "translation": "жених"
  },
  {
    "index": 6811,
    "word": "bridegroom",
    "transcription": "[ˈbraɪdgrʊm]",
    "translation": "жених"
  },
  {
    "index": 6812,
    "word": "set down",
    "transcription": "[sɛtdaʊn]",
    "translation": "написать, установить"
  },
  {
    "index": 6813,
    "word": "den",
    "transcription": "[dɛn]",
    "translation": "логово, берлога"
  },
  {
    "index": 6814,
    "word": "turmoil",
    "transcription": "[ˈtɜːmɔɪl]",
    "translation": "смятение, беспорядок"
  },
  {
    "index": 6815,
    "word": "thwart",
    "transcription": "[θwɔːt]",
    "translation": "помешать, сорвать"
  },
  {
    "index": 6816,
    "word": "concede",
    "transcription": "[kənˈsiːd]",
    "translation": "уступить"
  },
  {
    "index": 6817,
    "word": "concession",
    "transcription": "[kənˈsɛʃən]",
    "translation": "уступка, концессия"
  },
  {
    "index": 6818,
    "word": "run counter",
    "transcription": "[rʌnˈkaʊntə]",
    "translation": "противоречить"
  },
  {
    "index": 6819,
    "word": "rugged",
    "transcription": "[ˈrʌgɪd]",
    "translation": "неровный, грубый"
  },
  {
    "index": 6820,
    "word": "fury",
    "transcription": "[ˈfjʊəri]",
    "translation": "ярость, бешенство"
  },
  {
    "index": 6821,
    "word": "furious",
    "transcription": "[ˈfjʊərɪəs]",
    "translation": "яростный"
  },
  {
    "index": 6822,
    "word": "stew",
    "transcription": "[stjuː]",
    "translation": "тушить, рагу"
  },
  {
    "index": 6823,
    "word": "chess",
    "transcription": "[ʧɛs]",
    "translation": "шахматы"
  },
  {
    "index": 6824,
    "word": "chessboard",
    "transcription": "[ˈʧɛsbɔːd]",
    "translation": "шахматная доска"
  },
  {
    "index": 6825,
    "word": "stump",
    "transcription": "[stʌmp]",
    "translation": "пень"
  },
  {
    "index": 6826,
    "word": "vase",
    "transcription": "[vɑːz]",
    "translation": "ваза"
  },
  {
    "index": 6827,
    "word": "traitor",
    "transcription": "[ˈtreɪtə]",
    "translation": "изменник"
  },
  {
    "index": 6828,
    "word": "traitorous",
    "transcription": "[ˈtreɪtərəs]",
    "translation": "предательский"
  },
  {
    "index": 6829,
    "word": "desktop",
    "transcription": "[ˈdɛsktɒp]",
    "translation": "настольный"
  },
  {
    "index": 6830,
    "word": "ID",
    "transcription": "[aɪ-diː]",
    "translation": "удостоверение личности"
  },
  {
    "index": 6831,
    "word": "hurdle",
    "transcription": "[ˈhɜːdl]",
    "translation": "препятствие"
  },
  {
    "index": 6832,
    "word": "grove",
    "transcription": "[grəʊv]",
    "translation": "лесок"
  },
  {
    "index": 6833,
    "word": "allegiance",
    "transcription": "[əˈliːʤəns]",
    "translation": "верность"
  },
  {
    "index": 6834,
    "word": "overlap",
    "transcription": "[ˌəʊvəˈlæp]",
    "translation": "перекрываться"
  },
  {
    "index": 6835,
    "word": "summon",
    "transcription": "[ˈsʌmən]",
    "translation": "вызывать"
  },
  {
    "index": 6836,
    "word": "awkward",
    "transcription": "[ˈɔːkwəd]",
    "translation": "неуклюжий"
  },
  {
    "index": 6837,
    "word": "awkwardness",
    "transcription": "[ˈɔːkwədnɪs]",
    "translation": "неуклюжесть"
  },
  {
    "index": 6838,
    "word": "felon",
    "transcription": "[ˈfɛlən]",
    "translation": "преступник, уголовник"
  },
  {
    "index": 6839,
    "word": "felony",
    "transcription": "[ˈfɛləni]",
    "translation": "преступление"
  },
  {
    "index": 6840,
    "word": "ship",
    "transcription": "[ʃɪp]",
    "translation": "доставлять"
  },
  {
    "index": 6841,
    "word": "wash up",
    "transcription": "[wɒʃʌp]",
    "translation": "помыть посуду"
  },
  {
    "index": 6842,
    "word": "revolve",
    "transcription": "[rɪˈvɒlv]",
    "translation": "вращаться"
  },
  {
    "index": 6843,
    "word": "revolver",
    "transcription": "[rɪˈvɒlvə]",
    "translation": "револьвер"
  },
  {
    "index": 6844,
    "word": "mix up",
    "transcription": "[mɪksʌp]",
    "translation": "перепутать"
  },
  {
    "index": 6845,
    "word": "token",
    "transcription": "[ˈtəʊkən]",
    "translation": "знак, признак, маркер"
  },
  {
    "index": 6846,
    "word": "midst",
    "transcription": "[mɪdst]",
    "translation": "середина, среда"
  },
  {
    "index": 6847,
    "word": "childhood",
    "transcription": "[ˈʧaɪldhʊd]",
    "translation": "детство"
  },
  {
    "index": 6848,
    "word": "manhood",
    "transcription": "[ˈmænhʊd]",
    "translation": "взрослый возраст"
  },
  {
    "index": 6849,
    "word": "motherhood",
    "transcription": "[ˈmʌðəhʊd]",
    "translation": "материнство"
  },
  {
    "index": 6850,
    "word": "fatherhood",
    "transcription": "[ˈfɑːðəhʊd]",
    "translation": "отцовство"
  },
  {
    "index": 6851,
    "word": "boyhood",
    "transcription": "[ˈbɔɪhʊd]",
    "translation": "отрочество"
  },
  {
    "index": 6852,
    "word": "extort",
    "transcription": "[ɪksˈtɔːt]",
    "translation": "вымогать"
  },
  {
    "index": 6853,
    "word": "extortion",
    "transcription": "[ɪksˈtɔːʃən]",
    "translation": "вымогательство"
  },
  {
    "index": 6854,
    "word": "extortionist",
    "transcription": "[ɪksˈtɔːʃənɪst]",
    "translation": "вымогатель"
  },
  {
    "index": 6855,
    "word": "proficient",
    "transcription": "[prəˈfɪʃənt]",
    "translation": "опытный, умелый"
  },
  {
    "index": 6856,
    "word": "proficiency",
    "transcription": "[prəˈfɪʃənsi]",
    "translation": "умение"
  },
  {
    "index": 6857,
    "word": "burn down",
    "transcription": "[bɜːndaʊn]",
    "translation": "сгореть, сжечь (полностью)"
  },
  {
    "index": 6858,
    "word": "villain",
    "transcription": "[ˈvɪlən]",
    "translation": "негодяй"
  },
  {
    "index": 6859,
    "word": "villainy",
    "transcription": "[ˈvɪləni]",
    "translation": "злодейство"
  },
  {
    "index": 6860,
    "word": "villainous",
    "transcription": "[ˈvɪlənəs]",
    "translation": "злодейский"
  },
  {
    "index": 6861,
    "word": "oriental",
    "transcription": "[ˌɔːrɪˈɛnt(ə)l]",
    "translation": "восточный, азиатский"
  },
  {
    "index": 6862,
    "word": "orientalist",
    "transcription": "[ˌɔːrɪˈɛntəlɪst]",
    "translation": "востоковед"
  },
  {
    "index": 6863,
    "word": "cargo",
    "transcription": "[ˈkɑːgəʊ]",
    "translation": "груз, грузовой"
  },
  {
    "index": 6864,
    "word": "lament",
    "transcription": "[ləˈmɛnt]",
    "translation": "оплакивать, сожалеть"
  },
  {
    "index": 6865,
    "word": "lamentable",
    "transcription": "[ˈlæməntəbl]",
    "translation": "плачевный"
  },
  {
    "index": 6866,
    "word": "lamentation",
    "transcription": "[ˌlæmɛnˈteɪʃən]",
    "translation": "причитание"
  },
  {
    "index": 6867,
    "word": "gloss",
    "transcription": "[glɒs]",
    "translation": "глянец, лоск"
  },
  {
    "index": 6868,
    "word": "glossy",
    "transcription": "[ˈglɒsi]",
    "translation": "глянцевый"
  },
  {
    "index": 6869,
    "word": "soothe",
    "transcription": "[suːð]",
    "translation": "успокаивать"
  },
  {
    "index": 6870,
    "word": "trash",
    "transcription": "[træʃ]",
    "translation": "мусор"
  },
  {
    "index": 6871,
    "word": "solemn",
    "transcription": "[ˈsɒləm]",
    "translation": "торжественный, серьёзный"
  },
  {
    "index": 6872,
    "word": "solemnity",
    "transcription": "[səˈlɛmnɪti]",
    "translation": "торжественность"
  },
  {
    "index": 6873,
    "word": "sanctuary",
    "transcription": "[ˈsæŋktjʊəri]",
    "translation": "убежище или заповедник"
  },
  {
    "index": 6874,
    "word": "paddle",
    "transcription": "[ˈpædl]",
    "translation": "грести, весло"
  },
  {
    "index": 6875,
    "word": "branch",
    "transcription": "[brɑːnʧ]",
    "translation": "филиал, ответвление"
  },
  {
    "index": 6876,
    "word": "anytime",
    "transcription": "[ˈɛniˌtaɪm]",
    "translation": "в любой момент"
  },
  {
    "index": 6877,
    "word": "ambush",
    "transcription": "[ˈæmbʊʃ]",
    "translation": "засада"
  },
  {
    "index": 6878,
    "word": "ominous",
    "transcription": "[ˈɒmɪnəs]",
    "translation": "зловещий"
  },
  {
    "index": 6879,
    "word": "pay back",
    "transcription": "[peɪbæk]",
    "translation": "вернуть деньги"
  },
  {
    "index": 6880,
    "word": "smother",
    "transcription": "[ˈsmʌðə]",
    "translation": "задушить"
  },
  {
    "index": 6881,
    "word": "clever",
    "transcription": "[ˈklɛvə]",
    "translation": "умный"
  },
  {
    "index": 6882,
    "word": "cleverness",
    "transcription": "[ˈklɛvənɪs]",
    "translation": "ум"
  },
  {
    "index": 6883,
    "word": "silly",
    "transcription": "[ˈsɪli]",
    "translation": "глупый"
  },
  {
    "index": 6884,
    "word": "come along",
    "transcription": "[kʌməˈlɒŋ]",
    "translation": "продвигаться (о работе)"
  },
  {
    "index": 6885,
    "word": "come on",
    "transcription": "[kʌmɒn]",
    "translation": "продвигаться"
  },
  {
    "index": 6886,
    "word": "ant",
    "transcription": "[ænt]",
    "translation": "муравей"
  },
  {
    "index": 6887,
    "word": "yearn",
    "transcription": "[jɜːn]",
    "translation": "тосковать, жаждать"
  },
  {
    "index": 6888,
    "word": "yearning",
    "transcription": "[ˈjɜːnɪŋ]",
    "translation": "стремление, острая тоска"
  },
  {
    "index": 6889,
    "word": "ignite",
    "transcription": "[ɪgˈnaɪt]",
    "translation": "воспламеняться"
  },
  {
    "index": 6890,
    "word": "ignition",
    "transcription": "[ɪgˈnɪʃən]",
    "translation": "зажигание"
  },
  {
    "index": 6891,
    "word": "intercourse",
    "transcription": "[ˈɪntə(ː)kɔːs]",
    "translation": "отношения или пол. сношение"
  },
  {
    "index": 6892,
    "word": "atrocity",
    "transcription": "[əˈtrɒsɪti]",
    "translation": "зверство, злодеяние"
  },
  {
    "index": 6893,
    "word": "atrocious",
    "transcription": "[əˈtrəʊʃəs]",
    "translation": "отвратительный"
  },
  {
    "index": 6894,
    "word": "fasten",
    "transcription": "[ˈfɑːsn]",
    "translation": "закрепить"
  },
  {
    "index": 6895,
    "word": "unfasten",
    "transcription": "[ʌnˈfɑːsn]",
    "translation": "открепить"
  },
  {
    "index": 6896,
    "word": "stale",
    "transcription": "[steɪl]",
    "translation": "несвежий"
  },
  {
    "index": 6897,
    "word": "glacier",
    "transcription": "[ˈglæsiə]",
    "translation": "ледник"
  },
  {
    "index": 6898,
    "word": "friction",
    "transcription": "[ˈfrɪkʃən]",
    "translation": "трение"
  },
  {
    "index": 6899,
    "word": "animate",
    "transcription": "[ˈænɪmɪt]",
    "translation": "живой, одушевлённый, оживлять"
  },
  {
    "index": 6900,
    "word": "animated",
    "transcription": "[ˈænɪmeɪtɪd]",
    "translation": "оживлённый"
  },
  {
    "index": 6901,
    "word": "animation",
    "transcription": "[ˌænɪˈmeɪʃ(ə)n]",
    "translation": "оживление"
  },
  {
    "index": 6902,
    "word": "inanimate",
    "transcription": "[ɪnˈænɪmɪt]",
    "translation": "неодушевленный"
  },
  {
    "index": 6903,
    "word": "lyrics",
    "transcription": "[ˈlɪrɪks]",
    "translation": "текст песни"
  },
  {
    "index": 6904,
    "word": "usage",
    "transcription": "[ˈjuːzɪʤ]",
    "translation": "применение"
  },
  {
    "index": 6905,
    "word": "come by",
    "transcription": "[kʌmbaɪ]",
    "translation": "найти, заполучить"
  },
  {
    "index": 6906,
    "word": "wink",
    "transcription": "[wɪŋk]",
    "translation": "подмигивать"
  },
  {
    "index": 6907,
    "word": "hail",
    "transcription": "[heɪl]",
    "translation": "приветствовать"
  },
  {
    "index": 6908,
    "word": "pledge",
    "transcription": "[plɛʤ]",
    "translation": "обещание, обязательство"
  },
  {
    "index": 6909,
    "word": "surplus",
    "transcription": "[ˈsɜːpləs]",
    "translation": "избыток, излишек (экон.)"
  },
  {
    "index": 6910,
    "word": "antique",
    "transcription": "[ænˈtiːk]",
    "translation": "старинный"
  },
  {
    "index": 6911,
    "word": "antiquity",
    "transcription": "[ænˈtɪkwɪti]",
    "translation": "древность"
  },
  {
    "index": 6912,
    "word": "ripple",
    "transcription": "[ˈrɪpl]",
    "translation": "рябь или пульсация"
  },
  {
    "index": 6913,
    "word": "bewilder",
    "transcription": "[bɪˈwɪldə]",
    "translation": "смущать, сбивать с толку"
  },
  {
    "index": 6914,
    "word": "piss off",
    "transcription": "[pɪsɒf]",
    "translation": "бесить"
  },
  {
    "index": 6915,
    "word": "consecutive",
    "transcription": "[kənˈsɛkjʊtɪv]",
    "translation": "последующий по времени"
  },
  {
    "index": 6916,
    "word": "rag",
    "transcription": "[ræg]",
    "translation": "тряпка"
  },
  {
    "index": 6917,
    "word": "ragged",
    "transcription": "[ˈrægɪd]",
    "translation": "оборванный"
  },
  {
    "index": 6918,
    "word": "cruel",
    "transcription": "[krʊəl]",
    "translation": "жестокий"
  },
  {
    "index": 6919,
    "word": "cruelty",
    "transcription": "[ˈkru(ː)əlti]",
    "translation": "жестокость"
  },
  {
    "index": 6920,
    "word": "growl",
    "transcription": "[graʊl]",
    "translation": "рычать"
  },
  {
    "index": 6921,
    "word": "tread",
    "transcription": "[trɛd]",
    "translation": "ступать, шагать"
  },
  {
    "index": 6922,
    "word": "trout",
    "transcription": "[traʊt]",
    "translation": "форель"
  },
  {
    "index": 6923,
    "word": "rust",
    "transcription": "[rʌst]",
    "translation": "ржавчина"
  },
  {
    "index": 6924,
    "word": "rusty",
    "transcription": "[ˈrʌsti]",
    "translation": "ржавый"
  },
  {
    "index": 6925,
    "word": "utter",
    "transcription": "[ˈʌtə]",
    "translation": "издать, произнести"
  },
  {
    "index": 6926,
    "word": "exquisite",
    "transcription": "[ˈɛkskwɪzɪt]",
    "translation": "утончённый, изысканный"
  },
  {
    "index": 6927,
    "word": "wicked",
    "transcription": "[ˈwɪkɪd]",
    "translation": "злобный, безнравственный"
  },
  {
    "index": 6928,
    "word": "wickedness",
    "transcription": "[ˈwɪkɪdnɪs]",
    "translation": "злобность"
  },
  {
    "index": 6929,
    "word": "settle in",
    "transcription": "[ˈsɛtlɪn]",
    "translation": "освоиться"
  },
  {
    "index": 6930,
    "word": "violin",
    "transcription": "[ˌvaɪəˈlɪn]",
    "translation": "скрипка"
  },
  {
    "index": 6931,
    "word": "minor",
    "transcription": "[ˈmaɪnə]",
    "translation": "несовершеннолетний"
  },
  {
    "index": 6932,
    "word": "deception",
    "transcription": "[dɪˈsɛpʃən]",
    "translation": "обман"
  },
  {
    "index": 6933,
    "word": "deceptive",
    "transcription": "[dɪˈsɛptɪv]",
    "translation": "обманчивый"
  },
  {
    "index": 6934,
    "word": "hay",
    "transcription": "[heɪ]",
    "translation": "сено"
  },
  {
    "index": 6935,
    "word": "runaway",
    "transcription": "[ˈrʌnəweɪ]",
    "translation": "беглый, беглец"
  },
  {
    "index": 6936,
    "word": "lay into",
    "transcription": "[leɪˈɪntuː]",
    "translation": "нападать (разг.)"
  },
  {
    "index": 6937,
    "word": "maid",
    "transcription": "[meɪd]",
    "translation": "служанка, горничная"
  },
  {
    "index": 6938,
    "word": "hitch",
    "transcription": "[hɪʧ]",
    "translation": "заминка, помеха"
  },
  {
    "index": 6939,
    "word": "hitched",
    "transcription": "[hɪʧt]",
    "translation": "женатый, замужняя (разг.)"
  },
  {
    "index": 6940,
    "word": "adamant",
    "transcription": "[ˈædəmənt]",
    "translation": "непреклонный"
  },
  {
    "index": 6941,
    "word": "sinister",
    "transcription": "[ˈsɪnɪstə]",
    "translation": "зловещий"
  },
  {
    "index": 6942,
    "word": "ostensibly",
    "transcription": "[ɒsˈtɛnsəbli]",
    "translation": "по видимости, якобы"
  },
  {
    "index": 6943,
    "word": "seasoning",
    "transcription": "[ˈsiːznɪŋ]",
    "translation": "приправа"
  },
  {
    "index": 6944,
    "word": "vigor",
    "transcription": "[ˈvɪgə]",
    "translation": "сила, энергия, здоровье"
  },
  {
    "index": 6945,
    "word": "vigorous",
    "transcription": "[ˈvɪgərəs]",
    "translation": "бодрый"
  },
  {
    "index": 6946,
    "word": "hand down",
    "transcription": "[hænddaʊn]",
    "translation": "передать (по наследству)"
  },
  {
    "index": 6947,
    "word": "mimic",
    "transcription": "[ˈmɪmɪk]",
    "translation": "передразнивать, копировать"
  },
  {
    "index": 6948,
    "word": "live up to",
    "transcription": "[lɪvʌptuː]",
    "translation": "соответствовать, дотягивать"
  },
  {
    "index": 6949,
    "word": "measure up to",
    "transcription": "[ˈmɛʒərʌptuː]",
    "translation": "соответствовать, дотягивать"
  },
  {
    "index": 6950,
    "word": "come up to",
    "transcription": "[kʌmʌptuː]",
    "translation": "соответствовать, дотягивать"
  },
  {
    "index": 6951,
    "word": "benevolent",
    "transcription": "[bɪˈnɛvələnt]",
    "translation": "благожелательный"
  },
  {
    "index": 6952,
    "word": "benevolence",
    "transcription": "[bɪˈnɛvələns]",
    "translation": "благожелательность"
  },
  {
    "index": 6953,
    "word": "brazen",
    "transcription": "[ˈbreɪzn]",
    "translation": "наглый"
  },
  {
    "index": 6954,
    "word": "brazenness",
    "transcription": "[ˈbreɪznəs]",
    "translation": "наглость, бесстыдство"
  },
  {
    "index": 6955,
    "word": "brace",
    "transcription": "[breɪs]",
    "translation": "скоба, распорка, скрепа"
  },
  {
    "index": 6956,
    "word": "squad",
    "transcription": "[skwɒd]",
    "translation": "команда, отряд"
  },
  {
    "index": 6957,
    "word": "dole",
    "transcription": "[dəʊl]",
    "translation": "пособие по безработице"
  },
  {
    "index": 6958,
    "word": "junkie",
    "transcription": "[ˈʤʌŋki]",
    "translation": "наркоман"
  },
  {
    "index": 6959,
    "word": "clamp",
    "transcription": "[klæmp]",
    "translation": "зажимать, зажим"
  },
  {
    "index": 6960,
    "word": "murmur",
    "transcription": "[ˈmɜːmə]",
    "translation": "шум, ропот, журчание"
  },
  {
    "index": 6961,
    "word": "fight back",
    "transcription": "[faɪtbæk]",
    "translation": "отбиваться"
  },
  {
    "index": 6962,
    "word": "pick up",
    "transcription": "[pɪkʌp]",
    "translation": "подобрать"
  },
  {
    "index": 6963,
    "word": "fleet",
    "transcription": "[fliːt]",
    "translation": "флот"
  },
  {
    "index": 6964,
    "word": "ascertain",
    "transcription": "[ˌæsəˈteɪn]",
    "translation": "выяснить, установить"
  },
  {
    "index": 6965,
    "word": "tinker with",
    "transcription": "[ˈtɪŋkəwɪð]",
    "translation": "возиться, пытаться сделать"
  },
  {
    "index": 6966,
    "word": "block out",
    "transcription": "[blɒkaʊt]",
    "translation": "блокировать, не пускать"
  },
  {
    "index": 6967,
    "word": "violet",
    "transcription": "[ˈvaɪəlɪt]",
    "translation": "фиолетовый"
  },
  {
    "index": 6968,
    "word": "ultraviolet (UV)",
    "transcription": "[ˈʌltrəˈvaɪəlɪt]",
    "translation": "ультрафиолетовый (УФ)"
  },
  {
    "index": 6969,
    "word": "brim",
    "transcription": "[ˈbrɪm]",
    "translation": "край сосуда"
  },
  {
    "index": 6970,
    "word": "brim",
    "transcription": "[ˈbrɪm]",
    "translation": "поля шляпы"
  },
  {
    "index": 6971,
    "word": "premise",
    "transcription": "[ˈprɛmɪs]",
    "translation": "предпосылка"
  },
  {
    "index": 6972,
    "word": "marvel",
    "transcription": "[ˈmɑːvəl]",
    "translation": "диво, удивляться"
  },
  {
    "index": 6973,
    "word": "marvelous",
    "transcription": "[ˈmɑːvələs]",
    "translation": "дивный"
  },
  {
    "index": 6974,
    "word": "poise",
    "transcription": "[pɔɪz]",
    "translation": "равновесие, самообладание"
  },
  {
    "index": 6975,
    "word": "amenity",
    "transcription": "[əˈmiːnɪti]",
    "translation": "удобство, обустройство"
  },
  {
    "index": 6976,
    "word": "mediate",
    "transcription": "[ˈmiːdɪɪt]",
    "translation": "посредничать"
  },
  {
    "index": 6977,
    "word": "mediation",
    "transcription": "[ˌmiːdɪˈeɪʃən]",
    "translation": "посредничество"
  },
  {
    "index": 6978,
    "word": "mediator",
    "transcription": "[ˈmiːdɪeɪtə]",
    "translation": "посредник"
  },
  {
    "index": 6979,
    "word": "moan",
    "transcription": "[məʊn]",
    "translation": "стонать"
  },
  {
    "index": 6980,
    "word": "mustard",
    "transcription": "[ˈmʌstəd]",
    "translation": "горчица"
  },
  {
    "index": 6981,
    "word": "humble",
    "transcription": "[ˈhʌmbl]",
    "translation": "скромный, смиренный"
  },
  {
    "index": 6982,
    "word": "remorse",
    "transcription": "[rɪˈmɔːs]",
    "translation": "раскаяние"
  },
  {
    "index": 6983,
    "word": "marital",
    "transcription": "[ˈmærɪtl]",
    "translation": "супружеский"
  },
  {
    "index": 6984,
    "word": "garnish",
    "transcription": "[ˈgɑːnɪʃ]",
    "translation": "гарнир, украшение"
  },
  {
    "index": 6985,
    "word": "hack",
    "transcription": "[hæk]",
    "translation": "рубить, кромсать"
  },
  {
    "index": 6986,
    "word": "revere",
    "transcription": "[rɪˈvɪə]",
    "translation": "почитать"
  },
  {
    "index": 6987,
    "word": "reverence",
    "transcription": "[ˈrəvərəns]",
    "translation": "почитание, благоговение"
  },
  {
    "index": 6988,
    "word": "reverent",
    "transcription": "[ˈrɛvərənt]",
    "translation": "благоговейный"
  },
  {
    "index": 6989,
    "word": "reap",
    "transcription": "[riːp]",
    "translation": "пожинать"
  },
  {
    "index": 6990,
    "word": "thrive",
    "transcription": "[θraɪv]",
    "translation": "процветать, преуспевать"
  },
  {
    "index": 6991,
    "word": "eloquent",
    "transcription": "[ˈɛləʊkwənt]",
    "translation": "красноречивый, выразительный"
  },
  {
    "index": 6992,
    "word": "eloquence",
    "transcription": "[ˈɛləʊkwəns]",
    "translation": "красноречие"
  },
  {
    "index": 6993,
    "word": "crude",
    "transcription": "[kruːd]",
    "translation": "сырой, грубый, необработанный"
  },
  {
    "index": 6994,
    "word": "crudeness",
    "transcription": "[ˈkruːdnəs]",
    "translation": "грубость"
  },
  {
    "index": 6995,
    "word": "puppet",
    "transcription": "[ˈpʌpɪt]",
    "translation": "кукла, марионетка"
  },
  {
    "index": 6996,
    "word": "prejudice",
    "transcription": "[ˈprɛʤʊdɪs]",
    "translation": "предубеждение, предрассудок"
  },
  {
    "index": 6997,
    "word": "prejudiced",
    "transcription": "[ˈprɛʤʊdɪst]",
    "translation": "предвзятый"
  },
  {
    "index": 6998,
    "word": "unprejudiced",
    "transcription": "[ʌnˈprɛʤʊdɪst]",
    "translation": "беспристрастный"
  },
  {
    "index": 6999,
    "word": "grumble",
    "transcription": "[ˈgrʌmbl]",
    "translation": "ворчать, жаловаться"
  },
  {
    "index": 7000,
    "word": "herald",
    "transcription": "[ˈhɛrəld]",
    "translation": "возвестить, вестник"
  },
  {
    "index": 7001,
    "word": "unheralded",
    "transcription": "[ˌʌnˈhɛrəldɪd]",
    "translation": "необъявленный"
  },
  {
    "index": 7002,
    "word": "acquit",
    "transcription": "[əˈkwɪt]",
    "translation": "оправдать (в суде)"
  },
  {
    "index": 7003,
    "word": "acquittal",
    "transcription": "[əˈkwɪtl]",
    "translation": "оправдание"
  },
  {
    "index": 7004,
    "word": "tribute",
    "transcription": "[ˈtrɪbjuːt]",
    "translation": "дань"
  },
  {
    "index": 7005,
    "word": "stick at",
    "transcription": "[stɪkæt]",
    "translation": "упорно продолжать"
  },
  {
    "index": 7006,
    "word": "claw",
    "transcription": "[klɔː]",
    "translation": "коготь, клешня"
  },
  {
    "index": 7007,
    "word": "come out",
    "transcription": "[kʌmaʊt]",
    "translation": "выходить (напр. об альбоме)"
  },
  {
    "index": 7008,
    "word": "stance",
    "transcription": "[stɑːns]",
    "translation": "поза, положение"
  },
  {
    "index": 7009,
    "word": "snort",
    "transcription": "[snɔːt]",
    "translation": "фыркнуть, хмыкнуть"
  },
  {
    "index": 7010,
    "word": "digest",
    "transcription": "[ˈdaɪʤɛst]",
    "translation": "переваривать"
  },
  {
    "index": 7011,
    "word": "digestion",
    "transcription": "[dɪˈʤɛsʧən]",
    "translation": "пищеварение"
  },
  {
    "index": 7012,
    "word": "indigestion",
    "transcription": "[ˌɪndɪˈʤɛsʧən]",
    "translation": "расстройство желудка"
  },
  {
    "index": 7013,
    "word": "digestive",
    "transcription": "[dɪˈʤɛstɪv]",
    "translation": "пищеварительный"
  },
  {
    "index": 7014,
    "word": "beckon",
    "transcription": "[ˈbɛkən]",
    "translation": "манить"
  },
  {
    "index": 7015,
    "word": "surpass",
    "transcription": "[sɜːˈpɑːs]",
    "translation": "превзойти"
  },
  {
    "index": 7016,
    "word": "unsurpassed",
    "transcription": "[ˌʌnsə(ː)ˈpɑːst]",
    "translation": "непревзойденный"
  },
  {
    "index": 7017,
    "word": "lucrative",
    "transcription": "[ˈluːkrətɪv]",
    "translation": "прибыльный, выгодный"
  },
  {
    "index": 7018,
    "word": "dye",
    "transcription": "[daɪ]",
    "translation": "краска, краситель"
  },
  {
    "index": 7019,
    "word": "dial",
    "transcription": "[ˈdaɪəl]",
    "translation": "набирать номер"
  },
  {
    "index": 7020,
    "word": "deprive",
    "transcription": "[dɪˈpraɪv]",
    "translation": "лишать"
  },
  {
    "index": 7021,
    "word": "deprivation",
    "transcription": "[ˌdɛprɪˈveɪʃən]",
    "translation": "лишение"
  },
  {
    "index": 7022,
    "word": "frantic",
    "transcription": "[ˈfræntɪk]",
    "translation": "неистовый, бешеный"
  },
  {
    "index": 7023,
    "word": "discrete",
    "transcription": "[dɪsˈkriːt]",
    "translation": "отдельный, разрозненный"
  },
  {
    "index": 7024,
    "word": "blow up",
    "transcription": "[bləʊʌp]",
    "translation": "накачивать, надувать"
  },
  {
    "index": 7025,
    "word": "timber",
    "transcription": "[ˈtɪmbə]",
    "translation": "древесина, лесоматериалы"
  },
  {
    "index": 7026,
    "word": "vow",
    "transcription": "[vaʊ]",
    "translation": "клятва, торжественное обещание"
  },
  {
    "index": 7027,
    "word": "feminine",
    "transcription": "[ˈfɛmɪnɪn]",
    "translation": "женский"
  },
  {
    "index": 7028,
    "word": "femininity",
    "transcription": "[ˌfɛmɪˈnɪnɪti]",
    "translation": "женственность"
  },
  {
    "index": 7029,
    "word": "break up",
    "transcription": "[breɪkʌp]",
    "translation": "разорвать отношения"
  },
  {
    "index": 7030,
    "word": "breakup",
    "transcription": "[ˈbreɪkˈʌp]",
    "translation": "расставание"
  },
  {
    "index": 7031,
    "word": "cough",
    "transcription": "[kɒf]",
    "translation": "кашель"
  },
  {
    "index": 7032,
    "word": "chunk",
    "transcription": "[ʧʌŋk]",
    "translation": "кусок"
  },
  {
    "index": 7033,
    "word": "pillar",
    "transcription": "[ˈpɪlə]",
    "translation": "столб, опора, колонна"
  },
  {
    "index": 7034,
    "word": "cohesion",
    "transcription": "[kəʊˈhiːʒən]",
    "translation": "единство, согласие"
  },
  {
    "index": 7035,
    "word": "cohesive",
    "transcription": "[kəʊˈhiːsɪv]",
    "translation": "связный, связующий"
  },
  {
    "index": 7036,
    "word": "envision",
    "transcription": "[ɪnˈvɪʒən]",
    "translation": "воображать"
  },
  {
    "index": 7037,
    "word": "cute",
    "transcription": "[kjuːt]",
    "translation": "привлекательный, милый"
  },
  {
    "index": 7038,
    "word": "frost",
    "transcription": "[frɒst]",
    "translation": "мороз"
  },
  {
    "index": 7039,
    "word": "cue",
    "transcription": "[kjuː]",
    "translation": "сигнал, намёк"
  },
  {
    "index": 7040,
    "word": "stove",
    "transcription": "[stəʊv]",
    "translation": "плита"
  },
  {
    "index": 7041,
    "word": "scrape through",
    "transcription": "[skreɪpθruː]",
    "translation": "с трудом пройти"
  },
  {
    "index": 7042,
    "word": "verse",
    "transcription": "[vɜːs]",
    "translation": "стих"
  },
  {
    "index": 7043,
    "word": "rigorous",
    "transcription": "[ˈrɪgərəs]",
    "translation": "строгий, тщательный"
  },
  {
    "index": 7044,
    "word": "footprint",
    "transcription": "[ˈfʊtprɪnt]",
    "translation": "след"
  },
  {
    "index": 7045,
    "word": "squirrel",
    "transcription": "[ˈskwɪrəl]",
    "translation": "белка"
  },
  {
    "index": 7046,
    "word": "pupil",
    "transcription": "[ˈpjuːpl]",
    "translation": "ученик"
  },
  {
    "index": 7047,
    "word": "portable",
    "transcription": "[ˈpɔːtəbl]",
    "translation": "портативный, переносной"
  },
  {
    "index": 7048,
    "word": "ripe",
    "transcription": "[raɪp]",
    "translation": "созревший"
  },
  {
    "index": 7049,
    "word": "ripen",
    "transcription": "[ˈraɪpən]",
    "translation": "созревать"
  },
  {
    "index": 7050,
    "word": "wobble",
    "transcription": "[ˈwɒbl]",
    "translation": "качаться, шататься"
  },
  {
    "index": 7051,
    "word": "diverge",
    "transcription": "[daɪˈvɜːʤ]",
    "translation": "расходиться"
  },
  {
    "index": 7052,
    "word": "divergence",
    "transcription": "[daɪˈvɜːʤəns]",
    "translation": "расхождение"
  },
  {
    "index": 7053,
    "word": "converge",
    "transcription": "[kənˈvɜːʤ]",
    "translation": "сходиться, сближаться"
  },
  {
    "index": 7054,
    "word": "convergence",
    "transcription": "[kənˈvɜːʤəns]",
    "translation": "сближение"
  },
  {
    "index": 7055,
    "word": "odor (odour)",
    "transcription": "[ˈəʊdə]",
    "translation": "запах"
  },
  {
    "index": 7056,
    "word": "deodorant",
    "transcription": "[diːˈəʊdərənt]",
    "translation": "дезодорант"
  },
  {
    "index": 7057,
    "word": "sideline",
    "transcription": "[ˈsaɪdlaɪn]",
    "translation": "что-то вторичное"
  },
  {
    "index": 7058,
    "word": "versatile",
    "transcription": "[ˈvɜːsətaɪl]",
    "translation": "универсальный, разносторонний"
  },
  {
    "index": 7059,
    "word": "versatility",
    "transcription": "[ˌvɜːsəˈtɪlɪti]",
    "translation": "многосторонность"
  },
  {
    "index": 7060,
    "word": "amateur",
    "transcription": "[ˈæmətə]",
    "translation": "любитель, любительский"
  },
  {
    "index": 7061,
    "word": "rut",
    "transcription": "[rʌt]",
    "translation": "борозда, колея, рутина"
  },
  {
    "index": 7062,
    "word": "hinge",
    "transcription": "[hɪnʤ]",
    "translation": "петля, шарнир"
  },
  {
    "index": 7063,
    "word": "glee",
    "transcription": "[gliː]",
    "translation": "ликование"
  },
  {
    "index": 7064,
    "word": "gleeful",
    "transcription": "[ˈgliːfʊl]",
    "translation": "ликующий"
  },
  {
    "index": 7065,
    "word": "grudge",
    "transcription": "[grʌʤ]",
    "translation": "обида, злоба"
  },
  {
    "index": 7066,
    "word": "grudgingly",
    "transcription": "[ˈgrʌʤɪŋli]",
    "translation": "нехотя"
  },
  {
    "index": 7067,
    "word": "acclaim",
    "transcription": "[əˈkleɪm]",
    "translation": "приветствовать, аплодировать"
  },
  {
    "index": 7068,
    "word": "acclamation",
    "transcription": "[ˌækləˈmeɪʃ(ə)n]",
    "translation": "приветствие, шумное одобрение"
  },
  {
    "index": 7069,
    "word": "shaft",
    "transcription": "[ʃɑːft]",
    "translation": "вал, ось, стержень"
  },
  {
    "index": 7070,
    "word": "inland",
    "transcription": "[ˈɪnlənd]",
    "translation": "внутренний, вглубь страны"
  },
  {
    "index": 7071,
    "word": "flood in",
    "transcription": "[flʌdɪn]",
    "translation": "наплыть, валить потоком"
  },
  {
    "index": 7072,
    "word": "garment",
    "transcription": "[ˈgɑːmənt]",
    "translation": "предмет одежды"
  },
  {
    "index": 7073,
    "word": "shudder",
    "transcription": "[ˈʃʌdə]",
    "translation": "содрогаться, дрожь"
  },
  {
    "index": 7074,
    "word": "slender",
    "transcription": "[ˈslɛndə]",
    "translation": "тонкий, стройный, изящный"
  },
  {
    "index": 7075,
    "word": "ink",
    "transcription": "[ɪŋk]",
    "translation": "чернила"
  },
  {
    "index": 7076,
    "word": "rainbow",
    "transcription": "[ˈreɪnbəʊ]",
    "translation": "радуга"
  },
  {
    "index": 7077,
    "word": "bachelor",
    "transcription": "[ˈbæʧələ]",
    "translation": "холостяк"
  },
  {
    "index": 7078,
    "word": "reciprocal",
    "transcription": "[rɪˈsɪprəkəl]",
    "translation": "взаимный, ответный"
  },
  {
    "index": 7079,
    "word": "reciprocate",
    "transcription": "[rɪˈsɪprəkeɪt]",
    "translation": "отвечать взаимностью"
  },
  {
    "index": 7080,
    "word": "clamour",
    "transcription": "[ˈklæmə]",
    "translation": "шум, ропот, протесты"
  },
  {
    "index": 7081,
    "word": "pristine",
    "transcription": "[ˈprɪstaɪn]",
    "translation": "нетронутый, первозданный"
  },
  {
    "index": 7082,
    "word": "fall through",
    "transcription": "[fɔːlθruː]",
    "translation": "провалиться"
  },
  {
    "index": 7083,
    "word": "bunny",
    "transcription": "[ˈbʌni]",
    "translation": "кролик (разг, детск.)"
  },
  {
    "index": 7084,
    "word": "remnant",
    "transcription": "[ˈrɛmnənt]",
    "translation": "остаток"
  },
  {
    "index": 7085,
    "word": "dissipate",
    "transcription": "[ˈdɪsɪpeɪt]",
    "translation": "рассеивать"
  },
  {
    "index": 7086,
    "word": "dissipation",
    "transcription": "[ˌdɪsɪˈpeɪʃən]",
    "translation": "рассеивание"
  },
  {
    "index": 7087,
    "word": "flick through",
    "transcription": "[flɪkθruː]",
    "translation": "просмотреть, пролистать"
  },
  {
    "index": 7088,
    "word": "go through",
    "transcription": "[gəʊθruː]",
    "translation": "просмотреть, пролистать"
  },
  {
    "index": 7089,
    "word": "solitude",
    "transcription": "[ˈsɒlɪtjuːd]",
    "translation": "одиночество"
  },
  {
    "index": 7090,
    "word": "smuggle",
    "transcription": "[ˈsmʌgl]",
    "translation": "провозить тайно"
  },
  {
    "index": 7091,
    "word": "smuggler",
    "transcription": "[ˈsmʌglə]",
    "translation": "контрабандист"
  },
  {
    "index": 7092,
    "word": "gorgeous",
    "transcription": "[ˈgɔːʤəs]",
    "translation": "шикарный"
  },
  {
    "index": 7093,
    "word": "misery",
    "transcription": "[ˈmɪzəri]",
    "translation": "несчастье, страдание"
  },
  {
    "index": 7094,
    "word": "intercept",
    "transcription": "[ˈɪntə(ː)sɛpt]",
    "translation": "перехватить"
  },
  {
    "index": 7095,
    "word": "interception",
    "transcription": "[ˌɪntə(ː)ˈsɛpʃən]",
    "translation": "перехват или подслушивание"
  },
  {
    "index": 7096,
    "word": "motto",
    "transcription": "[ˈmɒtəʊ]",
    "translation": "девиз"
  },
  {
    "index": 7097,
    "word": "dispel",
    "transcription": "[dɪsˈpɛl]",
    "translation": "развеяться, исчезнуть"
  },
  {
    "index": 7098,
    "word": "petal",
    "transcription": "[ˈpɛtl]",
    "translation": "лепесток"
  },
  {
    "index": 7099,
    "word": "terminal",
    "transcription": "[ˈtɜːmɪnl]",
    "translation": "конечный, заключительный"
  },
  {
    "index": 7100,
    "word": "trench",
    "transcription": "[trɛnʧ]",
    "translation": "траншея"
  },
  {
    "index": 7101,
    "word": "hefty",
    "transcription": "[ˈhɛfti]",
    "translation": "большой и тяжёлый"
  },
  {
    "index": 7102,
    "word": "mosque",
    "transcription": "[mɒsk]",
    "translation": "мечеть"
  },
  {
    "index": 7103,
    "word": "abduct",
    "transcription": "[æbˈdʌkt]",
    "translation": "похищать"
  },
  {
    "index": 7104,
    "word": "abduction",
    "transcription": "[æbˈdʌkʃ(ə)n]",
    "translation": "похищение"
  },
  {
    "index": 7105,
    "word": "appliance",
    "transcription": "[əˈplaɪəns]",
    "translation": "прибор, приспособление"
  },
  {
    "index": 7106,
    "word": "avid",
    "transcription": "[ˈævɪd]",
    "translation": "заядлый, рьяный, алчный"
  },
  {
    "index": 7107,
    "word": "avidity",
    "transcription": "[əˈvɪdɪti]",
    "translation": "алчность"
  },
  {
    "index": 7108,
    "word": "clutter",
    "transcription": "[ˈklʌtə]",
    "translation": "беспорядок, куча всего"
  },
  {
    "index": 7109,
    "word": "shake off",
    "transcription": "[ʃeɪkɒf]",
    "translation": "отделаться"
  },
  {
    "index": 7110,
    "word": "uphill",
    "transcription": "[ˌʌpˈhɪl]",
    "translation": "в гору"
  },
  {
    "index": 7111,
    "word": "downhill",
    "transcription": "[ˌdaʊnˈhɪl]",
    "translation": "с горы"
  },
  {
    "index": 7112,
    "word": "keep away",
    "transcription": "[kiːpəˈweɪ]",
    "translation": "держать (ся) подальше"
  },
  {
    "index": 7113,
    "word": "stay away",
    "transcription": "[steɪəˈweɪ]",
    "translation": "держаться подальше"
  },
  {
    "index": 7114,
    "word": "demand",
    "transcription": "[dɪˈmɑːnd]",
    "translation": "спрос"
  },
  {
    "index": 7115,
    "word": "supply",
    "transcription": "[səˈplaɪ]",
    "translation": "предложение"
  },
  {
    "index": 7116,
    "word": "allocate",
    "transcription": "[ˈæləʊkeɪt]",
    "translation": "распределять (ресурсы)"
  },
  {
    "index": 7117,
    "word": "allocation",
    "transcription": "[ˌæləʊˈkeɪʃ(ə)n]",
    "translation": "распределение"
  },
  {
    "index": 7118,
    "word": "anthem",
    "transcription": "[ˈænθəm]",
    "translation": "гимн"
  },
  {
    "index": 7119,
    "word": "scrap",
    "transcription": "[skræp]",
    "translation": "обломок, обрывок"
  },
  {
    "index": 7120,
    "word": "splendid",
    "transcription": "[ˈsplɛndɪd]",
    "translation": "великолепный, блестящий"
  },
  {
    "index": 7121,
    "word": "warehouse",
    "transcription": "[ˈweəhaʊs]",
    "translation": "склад"
  },
  {
    "index": 7122,
    "word": "underneath",
    "transcription": "[ˌʌndəˈniːθ]",
    "translation": "под"
  },
  {
    "index": 7123,
    "word": "parcel",
    "transcription": "[ˈpɑːsl]",
    "translation": "посылка"
  },
  {
    "index": 7124,
    "word": "fancy",
    "transcription": "[ˈfænsi]",
    "translation": "представлять, полагать"
  },
  {
    "index": 7125,
    "word": "flatter",
    "transcription": "[ˈflætə]",
    "translation": "льстить"
  },
  {
    "index": 7126,
    "word": "flattery",
    "transcription": "[ˈflætəri]",
    "translation": "лесть"
  },
  {
    "index": 7127,
    "word": "call for",
    "transcription": "[kɔːlfɔː]",
    "translation": "требовать, взывать"
  },
  {
    "index": 7128,
    "word": "nausea",
    "transcription": "[ˈnɔːziə]",
    "translation": "тошнота"
  },
  {
    "index": 7129,
    "word": "nauseous",
    "transcription": "[ˈnɔːziəs]",
    "translation": "тошнотворный"
  },
  {
    "index": 7130,
    "word": "nauseating",
    "transcription": "[ˈnɔːsɪeɪtɪŋ]",
    "translation": "тошнотворный"
  },
  {
    "index": 7131,
    "word": "fuse",
    "transcription": "[fjuːz]",
    "translation": "плавиться, сливаться"
  },
  {
    "index": 7132,
    "word": "fusion",
    "transcription": "[ˈfjuːʒən]",
    "translation": "слияние"
  },
  {
    "index": 7133,
    "word": "lay down",
    "transcription": "[leɪdaʊn]",
    "translation": "установить (правило, норму)"
  },
  {
    "index": 7134,
    "word": "superb",
    "transcription": "[sju(ː)ˈpɜːb]",
    "translation": "превосходный"
  },
  {
    "index": 7135,
    "word": "hiss",
    "transcription": "[hɪs]",
    "translation": "шипеть"
  },
  {
    "index": 7136,
    "word": "perch",
    "transcription": "[pɜːʧ]",
    "translation": "взгромоздиться, усесться"
  },
  {
    "index": 7137,
    "word": "cupboard",
    "transcription": "[ˈkʌpəd]",
    "translation": "шкаф, буфет"
  },
  {
    "index": 7138,
    "word": "run",
    "transcription": "[rʌn]",
    "translation": "управлять"
  },
  {
    "index": 7139,
    "word": "congestion",
    "transcription": "[kənˈʤɛsʧən]",
    "translation": "загруженность, запор"
  },
  {
    "index": 7140,
    "word": "grievance",
    "transcription": "[ˈgriːvəns]",
    "translation": "обида"
  },
  {
    "index": 7141,
    "word": "unravel",
    "transcription": "[ʌnˈrævəl]",
    "translation": "распутать"
  },
  {
    "index": 7142,
    "word": "help out",
    "transcription": "[hɛlpaʊt]",
    "translation": "выручить"
  },
  {
    "index": 7143,
    "word": "platter",
    "transcription": "[ˈplætə]",
    "translation": "большое блюдо"
  },
  {
    "index": 7144,
    "word": "peninsula",
    "transcription": "[pɪˈnɪnsjʊlə]",
    "translation": "полуостров"
  },
  {
    "index": 7145,
    "word": "mercury",
    "transcription": "[ˈmɜːkjʊri]",
    "translation": "ртуть"
  },
  {
    "index": 7146,
    "word": "act up",
    "transcription": "[æktʌp]",
    "translation": "не работать как надо"
  },
  {
    "index": 7147,
    "word": "play up",
    "transcription": "[pleɪʌp]",
    "translation": "не работать"
  },
  {
    "index": 7148,
    "word": "build on",
    "transcription": "[bɪldɒn]",
    "translation": "нарастить, развить"
  },
  {
    "index": 7149,
    "word": "acquaint",
    "transcription": "[əˈkweɪnt]",
    "translation": "знакомить"
  },
  {
    "index": 7150,
    "word": "acquaintance",
    "transcription": "[əˈkweɪntəns]",
    "translation": "знакомство"
  },
  {
    "index": 7151,
    "word": "ransom",
    "transcription": "[ˈrænsəm]",
    "translation": "выкуп"
  },
  {
    "index": 7152,
    "word": "retaliate",
    "transcription": "[rɪˈtælɪeɪt]",
    "translation": "отплатить, отомстить"
  },
  {
    "index": 7153,
    "word": "retaliation",
    "transcription": "[rɪˌtælɪˈeɪʃən]",
    "translation": "воздаяние"
  },
  {
    "index": 7154,
    "word": "bracket",
    "transcription": "[ˈbrækɪt]",
    "translation": "скобка"
  },
  {
    "index": 7155,
    "word": "melon",
    "transcription": "[ˈmɛlən]",
    "translation": "дыня"
  },
  {
    "index": 7156,
    "word": "watermelon",
    "transcription": "[ˈwɔːtəˌmɛlən]",
    "translation": "арбуз"
  },
  {
    "index": 7157,
    "word": "groove",
    "transcription": "[gruːv]",
    "translation": "канавка, желоб"
  },
  {
    "index": 7158,
    "word": "opt for",
    "transcription": "[ɒptfɔː]",
    "translation": "выбирать из вариантов"
  },
  {
    "index": 7159,
    "word": "opt in",
    "transcription": "[ɒptɪn]",
    "translation": "согласиться"
  },
  {
    "index": 7160,
    "word": "opt out",
    "transcription": "[ɒptaʊt]",
    "translation": "отказаться"
  },
  {
    "index": 7161,
    "word": "option",
    "transcription": "[ˈɒpʃən]",
    "translation": "вариант"
  },
  {
    "index": 7162,
    "word": "fog",
    "transcription": "[fɒg]",
    "translation": "туман"
  },
  {
    "index": 7163,
    "word": "foggy",
    "transcription": "[ˈfɒgi]",
    "translation": "туманный"
  },
  {
    "index": 7164,
    "word": "sheer",
    "transcription": "[ʃɪə]",
    "translation": "отвесный"
  },
  {
    "index": 7165,
    "word": "throw away",
    "transcription": "[θrəʊəˈweɪ]",
    "translation": "выбрасывать"
  },
  {
    "index": 7166,
    "word": "mingle",
    "transcription": "[ˈmɪŋgl]",
    "translation": "смешиваться"
  },
  {
    "index": 7167,
    "word": "fossil",
    "transcription": "[ˈfɒsl]",
    "translation": "ископаемое"
  },
  {
    "index": 7168,
    "word": "fossilized",
    "transcription": "[ˈfɒsɪlaɪzd]",
    "translation": "окаменелый"
  },
  {
    "index": 7169,
    "word": "bypass",
    "transcription": "[ˈbaɪpɑːs]",
    "translation": "обходить, обход"
  },
  {
    "index": 7170,
    "word": "mend",
    "transcription": "[mɛnd]",
    "translation": "чинить, поправлять"
  },
  {
    "index": 7171,
    "word": "watchful",
    "transcription": "[ˈwɒʧfʊl]",
    "translation": "бдительный"
  },
  {
    "index": 7172,
    "word": "devise",
    "transcription": "[dɪˈvaɪz]",
    "translation": "придумывать, изобретать"
  },
  {
    "index": 7173,
    "word": "triangle",
    "transcription": "[ˈtraɪæŋgl]",
    "translation": "треугольник"
  },
  {
    "index": 7174,
    "word": "triangular",
    "transcription": "[traɪˈæŋgjʊlə]",
    "translation": "треугольный"
  },
  {
    "index": 7175,
    "word": "durable",
    "transcription": "[ˈdjʊərəbl]",
    "translation": "прочный, долговечный"
  },
  {
    "index": 7176,
    "word": "durability",
    "transcription": "[ˌdjʊərəˈbɪlɪti]",
    "translation": "долговечность"
  },
  {
    "index": 7177,
    "word": "drastic",
    "transcription": "[ˈdræstɪk]",
    "translation": "радикальный, резкий"
  },
  {
    "index": 7178,
    "word": "faucet",
    "transcription": "[ˈfɔːsɪt]",
    "translation": "кран"
  },
  {
    "index": 7179,
    "word": "look up to",
    "transcription": "[lʊkʌptuː]",
    "translation": "уважать, восхищаться"
  },
  {
    "index": 7180,
    "word": "look down to",
    "transcription": "[lʊkdaʊntuː]",
    "translation": "смотреть вниз"
  },
  {
    "index": 7181,
    "word": "arrogant",
    "transcription": "[ˈærəʊgənt]",
    "translation": "высокомерный"
  },
  {
    "index": 7182,
    "word": "arrogance",
    "transcription": "[ˈærəgəns]",
    "translation": "высокомерие"
  },
  {
    "index": 7183,
    "word": "beforehand",
    "transcription": "[bɪˈfɔːhænd]",
    "translation": "заранее"
  },
  {
    "index": 7184,
    "word": "dignity",
    "transcription": "[ˈdɪgnɪti]",
    "translation": "достоинство"
  },
  {
    "index": 7185,
    "word": "crave",
    "transcription": "[kreɪv]",
    "translation": "жаждать, требовать"
  },
  {
    "index": 7186,
    "word": "vivid",
    "transcription": "[ˈvɪvɪd]",
    "translation": "яркий"
  },
  {
    "index": 7187,
    "word": "disguise",
    "transcription": "[dɪsˈgaɪz]",
    "translation": "маскировать, маскировка"
  },
  {
    "index": 7188,
    "word": "undisguised",
    "transcription": "[ˌʌndɪsˈgaɪzd]",
    "translation": "нескрываемый"
  },
  {
    "index": 7189,
    "word": "theater (theatre)",
    "transcription": "[ˈθɪətə]",
    "translation": "театр"
  },
  {
    "index": 7190,
    "word": "grease",
    "transcription": "[griːs]",
    "translation": "смазка, жир"
  },
  {
    "index": 7191,
    "word": "greasy",
    "transcription": "[ˈgriːzi]",
    "translation": "жирный"
  },
  {
    "index": 7192,
    "word": "lag",
    "transcription": "[læg]",
    "translation": "запаздывание"
  },
  {
    "index": 7193,
    "word": "disgrace",
    "transcription": "[dɪsˈgreɪs]",
    "translation": "бесчестие, позор"
  },
  {
    "index": 7194,
    "word": "disgraceful",
    "transcription": "[dɪsˈgreɪsfʊl]",
    "translation": "позорный"
  },
  {
    "index": 7195,
    "word": "sludge",
    "transcription": "[slʌʤ]",
    "translation": "осадок, отстой, ил"
  },
  {
    "index": 7196,
    "word": "audible",
    "transcription": "[ˈɔːdəbl]",
    "translation": "слышимый"
  },
  {
    "index": 7197,
    "word": "inaudible",
    "transcription": "[ɪnˈɔːdəbl]",
    "translation": "неслышный"
  },
  {
    "index": 7198,
    "word": "pouch",
    "transcription": "[paʊʧ]",
    "translation": "сумочка, кошелёк"
  },
  {
    "index": 7199,
    "word": "clean up",
    "transcription": "[kliːnʌp]",
    "translation": "убрать (мусор)"
  },
  {
    "index": 7200,
    "word": "tidy up",
    "transcription": "[ˈtaɪdiʌp]",
    "translation": "убирать"
  },
  {
    "index": 7201,
    "word": "cleanup",
    "transcription": "[ˈkliːnʌp]",
    "translation": "уборка"
  },
  {
    "index": 7202,
    "word": "albeit",
    "transcription": "[ɔːlˈbiːɪt]",
    "translation": "хотя"
  },
  {
    "index": 7203,
    "word": "disgust",
    "transcription": "[dɪsˈgʌst]",
    "translation": "отвращение"
  },
  {
    "index": 7204,
    "word": "disgusting",
    "transcription": "[dɪsˈgʌstɪŋ]",
    "translation": "отвратительный"
  },
  {
    "index": 7205,
    "word": "reach out",
    "transcription": "[riːʧaʊt]",
    "translation": "потянуться (рукой)"
  },
  {
    "index": 7206,
    "word": "subway",
    "transcription": "[ˈsʌbweɪ]",
    "translation": "метро (амер.)"
  },
  {
    "index": 7207,
    "word": "tube",
    "transcription": "[tjuːb]",
    "translation": "метро (в Лондоне)"
  },
  {
    "index": 7208,
    "word": "uprising (rising)",
    "transcription": "[ʌpˈraɪzɪŋ]",
    "translation": "восстание"
  },
  {
    "index": 7209,
    "word": "break down",
    "transcription": "[breɪkdaʊn]",
    "translation": "ломаться"
  },
  {
    "index": 7210,
    "word": "breakdown",
    "transcription": "[ˈbreɪkˌdaʊn]",
    "translation": "разрушение"
  },
  {
    "index": 7211,
    "word": "fairly",
    "transcription": "[ˈfeəli]",
    "translation": "довольно, вполне"
  },
  {
    "index": 7212,
    "word": "outing",
    "transcription": "[ˈaʊtɪŋ]",
    "translation": "прогулка, пикник и т. д."
  },
  {
    "index": 7213,
    "word": "inhibit",
    "transcription": "[ɪnˈhɪbɪt]",
    "translation": "препятствовать, затруднять"
  },
  {
    "index": 7214,
    "word": "inhibition",
    "transcription": "[ˌɪnhɪˈbɪʃən]",
    "translation": "торможение, задержка"
  },
  {
    "index": 7215,
    "word": "blackmail",
    "transcription": "[ˈblækmeɪl]",
    "translation": "шантажировать"
  },
  {
    "index": 7216,
    "word": "holler",
    "transcription": "[ˈhɒlə]",
    "translation": "крикнуть, окликнуть"
  },
  {
    "index": 7217,
    "word": "crow",
    "transcription": "[krəʊ]",
    "translation": "ворона"
  },
  {
    "index": 7218,
    "word": "shabby",
    "transcription": "[ˈʃæbi]",
    "translation": "потрёпанный, облезлый"
  },
  {
    "index": 7219,
    "word": "avert",
    "transcription": "[əˈvɜːt]",
    "translation": "предотвращать, отводить"
  },
  {
    "index": 7220,
    "word": "dormitory",
    "transcription": "[ˈdɔːmɪtri]",
    "translation": "общежитие"
  },
  {
    "index": 7221,
    "word": "brass",
    "transcription": "[brɑːs]",
    "translation": "латунь"
  },
  {
    "index": 7222,
    "word": "jelly",
    "transcription": "[ˈʤɛli]",
    "translation": "желе"
  },
  {
    "index": 7223,
    "word": "jellyfish",
    "transcription": "[ˈʤɛlɪfɪʃ]",
    "translation": "медуза"
  },
  {
    "index": 7224,
    "word": "beak",
    "transcription": "[biːk]",
    "translation": "клюв"
  },
  {
    "index": 7225,
    "word": "waist",
    "transcription": "[weɪst]",
    "translation": "талия"
  },
  {
    "index": 7226,
    "word": "pave",
    "transcription": "[peɪv]",
    "translation": "вымостить"
  },
  {
    "index": 7227,
    "word": "pavement",
    "transcription": "[ˈpeɪvmənt]",
    "translation": "мостовая"
  },
  {
    "index": 7228,
    "word": "jaw",
    "transcription": "[ʤɔː]",
    "translation": "челюсть"
  },
  {
    "index": 7229,
    "word": "augment",
    "transcription": "[ˈɔːgmənt]",
    "translation": "увеличить, нарастить"
  },
  {
    "index": 7230,
    "word": "augmentation",
    "transcription": "[ˌɔːgmɛnˈteɪʃ(ə)n]",
    "translation": "увеличение"
  },
  {
    "index": 7231,
    "word": "lineage",
    "transcription": "[ˈlɪnɪɪʤ]",
    "translation": "родословная"
  },
  {
    "index": 7232,
    "word": "scrutiny",
    "transcription": "[ˈskruːtɪni]",
    "translation": "внимательный осмотр, изучение"
  },
  {
    "index": 7233,
    "word": "scrutinize",
    "transcription": "[ˈskruːtɪnaɪz]",
    "translation": "тщательно исследовать"
  },
  {
    "index": 7234,
    "word": "wit",
    "transcription": "[wɪt]",
    "translation": "ум, остроумие"
  },
  {
    "index": 7235,
    "word": "witty",
    "transcription": "[ˈwɪti]",
    "translation": "остроумный"
  },
  {
    "index": 7236,
    "word": "shave",
    "transcription": "[ʃeɪv]",
    "translation": "брить"
  },
  {
    "index": 7237,
    "word": "shave off",
    "transcription": "[ʃeɪvɒf]",
    "translation": "сбривать"
  },
  {
    "index": 7238,
    "word": "lettuce",
    "transcription": "[ˈlɛtɪs]",
    "translation": "салат (латук)"
  },
  {
    "index": 7239,
    "word": "go against",
    "transcription": "[gəʊəˈgɛnst]",
    "translation": "противоречить"
  },
  {
    "index": 7240,
    "word": "wrestle",
    "transcription": "[ˈrɛsl]",
    "translation": "бороться"
  },
  {
    "index": 7241,
    "word": "wrestler",
    "transcription": "[ˈrɛslə]",
    "translation": "борец"
  },
  {
    "index": 7242,
    "word": "thigh",
    "transcription": "[θaɪ]",
    "translation": "бедро"
  },
  {
    "index": 7243,
    "word": "gratitude",
    "transcription": "[ˈgrætɪtjuːd]",
    "translation": "благодарность"
  },
  {
    "index": 7244,
    "word": "beaver",
    "transcription": "[ˈbiːvə]",
    "translation": "бобр"
  },
  {
    "index": 7245,
    "word": "flake",
    "transcription": "[fleɪk]",
    "translation": "слоиться, крошиться"
  },
  {
    "index": 7246,
    "word": "splash",
    "transcription": "[splæʃ]",
    "translation": "брызги, всплеск"
  },
  {
    "index": 7247,
    "word": "toil",
    "transcription": "[tɔɪl]",
    "translation": "тяжело трудиться"
  },
  {
    "index": 7248,
    "word": "goat",
    "transcription": "[gəʊt]",
    "translation": "козел, коза"
  },
  {
    "index": 7249,
    "word": "perish",
    "transcription": "[ˈpɛrɪʃ]",
    "translation": "погибать"
  },
  {
    "index": 7250,
    "word": "imminent",
    "transcription": "[ˈɪmɪnənt]",
    "translation": "неизбежный"
  },
  {
    "index": 7251,
    "word": "purge",
    "transcription": "[pɜːʤ]",
    "translation": "чистка, очищать"
  },
  {
    "index": 7252,
    "word": "purgatory",
    "transcription": "[ˈpɜːgətəri]",
    "translation": "чистилище"
  },
  {
    "index": 7253,
    "word": "bankrupt",
    "transcription": "[ˈbæŋkrʌpt]",
    "translation": "банкрот, неплатежеспособный"
  },
  {
    "index": 7254,
    "word": "bankruptcy",
    "transcription": "[ˈbæŋkrəptsi]",
    "translation": "банкротство"
  },
  {
    "index": 7255,
    "word": "heed",
    "transcription": "[hiːd]",
    "translation": "прислушиваться, учитывать"
  },
  {
    "index": 7256,
    "word": "heedless",
    "transcription": "[ˈhiːdlɪs]",
    "translation": "беспечный"
  },
  {
    "index": 7257,
    "word": "seal",
    "transcription": "[siːl]",
    "translation": "тюлень"
  },
  {
    "index": 7258,
    "word": "barb",
    "transcription": "[bɑːb]",
    "translation": "шип, зазубрина"
  },
  {
    "index": 7259,
    "word": "barbed",
    "transcription": "[bɑːbd]",
    "translation": "колючий"
  },
  {
    "index": 7260,
    "word": "pant",
    "transcription": "[pænt]",
    "translation": "пыхтеть, задыхаться"
  },
  {
    "index": 7261,
    "word": "coconut",
    "transcription": "[ˈkəʊkənʌt]",
    "translation": "кокос"
  },
  {
    "index": 7262,
    "word": "cram",
    "transcription": "[kræm]",
    "translation": "втискивать, впихивать"
  },
  {
    "index": 7263,
    "word": "kidnap",
    "transcription": "[ˈkɪdnæp]",
    "translation": "похищать"
  },
  {
    "index": 7264,
    "word": "ensue",
    "transcription": "[ɪnˈsjuː]",
    "translation": "следовать, вытекать"
  },
  {
    "index": 7265,
    "word": "enclose",
    "transcription": "[ɪnˈkləʊz]",
    "translation": "окружать, заключать"
  },
  {
    "index": 7266,
    "word": "enclosure",
    "transcription": "[ɪnˈkləʊʒə]",
    "translation": "ограждение, ограда"
  },
  {
    "index": 7267,
    "word": "tangle",
    "transcription": "[ˈtæŋgl]",
    "translation": "запутывать"
  },
  {
    "index": 7268,
    "word": "entangled",
    "transcription": "[ɪnˈtæŋgld]",
    "translation": "запутанный"
  },
  {
    "index": 7269,
    "word": "untangle",
    "transcription": "[ʌnˈtæŋgl]",
    "translation": "распутывать"
  },
  {
    "index": 7270,
    "word": "ridiculous",
    "transcription": "[rɪˈdɪkjʊləs]",
    "translation": "смешной, нелепый"
  },
  {
    "index": 7271,
    "word": "duo",
    "transcription": "[ˈdjuːəʊ]",
    "translation": "дуэт"
  },
  {
    "index": 7272,
    "word": "entrepreneur",
    "transcription": "[ˌɒntrəprəˈnɜː]",
    "translation": "предприниматель"
  },
  {
    "index": 7273,
    "word": "entrepreneurial",
    "transcription": "[ɒntrəprəˈnɜːrɪəl]",
    "translation": "предпринимательский"
  },
  {
    "index": 7274,
    "word": "entrepreneurship",
    "transcription": "[ˌɒntrəprəˈnɜːʃɪp]",
    "translation": "предпринимательство"
  },
  {
    "index": 7275,
    "word": "waterfall",
    "transcription": "[ˈwɔːtəfɔːl]",
    "translation": "водопад"
  },
  {
    "index": 7276,
    "word": "taint",
    "transcription": "[teɪnt]",
    "translation": "загрязнить, испортить"
  },
  {
    "index": 7277,
    "word": "untainted",
    "transcription": "[ˌʌnˈteɪntɪd]",
    "translation": "незапятнанный"
  },
  {
    "index": 7278,
    "word": "wash down",
    "transcription": "[wɒʃdaʊn]",
    "translation": "запивать"
  },
  {
    "index": 7279,
    "word": "dispatch",
    "transcription": "[dɪsˈpæʧ]",
    "translation": "отправлять, отправка"
  },
  {
    "index": 7280,
    "word": "sow (sowed, sown)",
    "transcription": "[səʊ]",
    "translation": "сеять"
  },
  {
    "index": 7281,
    "word": "shovel",
    "transcription": "[ˈʃʌvl]",
    "translation": "лопата или совок"
  },
  {
    "index": 7282,
    "word": "banish",
    "transcription": "[ˈbænɪʃ]",
    "translation": "отгонять"
  },
  {
    "index": 7283,
    "word": "banishment",
    "transcription": "[ˈbænɪʃmənt]",
    "translation": "изгнание, высылка"
  },
  {
    "index": 7284,
    "word": "get along",
    "transcription": "[gɛtəˈlɒŋ]",
    "translation": "ладить"
  },
  {
    "index": 7285,
    "word": "get on",
    "transcription": "[gɛtɒn]",
    "translation": "ладить"
  },
  {
    "index": 7286,
    "word": "depart",
    "transcription": "[dɪˈpɑːt]",
    "translation": "отправляться, отходить"
  },
  {
    "index": 7287,
    "word": "departure",
    "transcription": "[dɪˈpɑːʧə]",
    "translation": "отправка"
  },
  {
    "index": 7288,
    "word": "contempt",
    "transcription": "[kənˈtɛmpt]",
    "translation": "презрение, презирать"
  },
  {
    "index": 7289,
    "word": "contemptuous",
    "transcription": "[kənˈtɛmptjʊəs]",
    "translation": "презрительный"
  },
  {
    "index": 7290,
    "word": "cold",
    "transcription": "[kəʊld]",
    "translation": "простуда"
  },
  {
    "index": 7291,
    "word": "fortify",
    "transcription": "[ˈfɔːtɪfaɪ]",
    "translation": "укреплять, поддерживать"
  },
  {
    "index": 7292,
    "word": "fortification",
    "transcription": "[ˌfɔːtɪfɪˈkeɪʃən]",
    "translation": "укрепление"
  },
  {
    "index": 7293,
    "word": "override",
    "transcription": "[ˌəʊvəˈraɪd]",
    "translation": "перекрывать, отменять"
  },
  {
    "index": 7294,
    "word": "repay",
    "transcription": "[rɪˈpeɪ]",
    "translation": "отплатить"
  },
  {
    "index": 7295,
    "word": "repayment",
    "transcription": "[riːˈpeɪmənt]",
    "translation": "погашение"
  },
  {
    "index": 7296,
    "word": "incur",
    "transcription": "[ɪnˈkɜː]",
    "translation": "навлечь, повлечь"
  },
  {
    "index": 7297,
    "word": "lunar",
    "transcription": "[ˈluːnə]",
    "translation": "лунный"
  },
  {
    "index": 7298,
    "word": "bloat",
    "transcription": "[bləʊt]",
    "translation": "раздуваться"
  },
  {
    "index": 7299,
    "word": "scowl",
    "transcription": "[skaʊl]",
    "translation": "насупиться, рассердиться"
  },
  {
    "index": 7300,
    "word": "crunch",
    "transcription": "[krʌnʧ]",
    "translation": "хрустеть"
  },
  {
    "index": 7301,
    "word": "crunchy",
    "transcription": "[ˈkrʌnʧi]",
    "translation": "хрустящий"
  },
  {
    "index": 7302,
    "word": "thrift",
    "transcription": "[θrɪft]",
    "translation": "бережливость"
  },
  {
    "index": 7303,
    "word": "thrifty",
    "transcription": "[ˈθrɪfti]",
    "translation": "экономный"
  },
  {
    "index": 7304,
    "word": "thrift shop",
    "transcription": "[θrɪftʃɒp]",
    "translation": "комиссионный магазин"
  },
  {
    "index": 7305,
    "word": "ass",
    "transcription": "[æs]",
    "translation": "жопа"
  },
  {
    "index": 7306,
    "word": "arse",
    "transcription": "[ɑːs]",
    "translation": "жопа (брит.)"
  },
  {
    "index": 7307,
    "word": "asshole",
    "transcription": "[ˈæsˌhəʊl]",
    "translation": "мудак"
  },
  {
    "index": 7308,
    "word": "outstanding",
    "transcription": "[aʊtˈstændɪŋ]",
    "translation": "неоплаченный"
  },
  {
    "index": 7309,
    "word": "slate",
    "transcription": "[sleɪt]",
    "translation": "шифер или сланец"
  },
  {
    "index": 7310,
    "word": "vinegar",
    "transcription": "[ˈvɪnɪgə]",
    "translation": "уксус"
  },
  {
    "index": 7311,
    "word": "intersect",
    "transcription": "[ˌɪntə(ː)ˈsɛkt]",
    "translation": "пересекаться"
  },
  {
    "index": 7312,
    "word": "intersection",
    "transcription": "[ˌɪntə(ː)ˈsɛkʃən]",
    "translation": "пересечение"
  },
  {
    "index": 7313,
    "word": "beware",
    "transcription": "[bɪˈweə]",
    "translation": "остерегаться"
  },
  {
    "index": 7314,
    "word": "discard",
    "transcription": "[ˈdɪskɑːd]",
    "translation": "отбросить, отказаться"
  },
  {
    "index": 7315,
    "word": "expertise",
    "transcription": "[ˌɛkspɜːˈtiːz]",
    "translation": "опыт, компетенция"
  },
  {
    "index": 7316,
    "word": "preoccupy",
    "transcription": "[pri(ː)ˈɒkjʊpaɪ]",
    "translation": "занимать внимание"
  },
  {
    "index": 7317,
    "word": "warp",
    "transcription": "[wɔːp]",
    "translation": "деформироваться"
  },
  {
    "index": 7318,
    "word": "soar",
    "transcription": "[sɔː]",
    "translation": "парить, взмывать (втч. о ценах)"
  },
  {
    "index": 7319,
    "word": "vengeance",
    "transcription": "[ˈvɛnʤəns]",
    "translation": "отмщение"
  },
  {
    "index": 7320,
    "word": "screw",
    "transcription": "[skruː]",
    "translation": "к чёрту"
  },
  {
    "index": 7321,
    "word": "displace",
    "transcription": "[dɪsˈpleɪs]",
    "translation": "вытеснять, смещать"
  },
  {
    "index": 7322,
    "word": "displacement",
    "transcription": "[dɪsˈpleɪsmənt]",
    "translation": "смещение"
  },
  {
    "index": 7323,
    "word": "reign",
    "transcription": "[reɪn]",
    "translation": "царствовать"
  },
  {
    "index": 7324,
    "word": "rib",
    "transcription": "[rɪb]",
    "translation": "ребро"
  },
  {
    "index": 7325,
    "word": "ribbed",
    "transcription": "[rɪbd]",
    "translation": "ребристый"
  },
  {
    "index": 7326,
    "word": "ribcage",
    "transcription": "[ribcage]",
    "translation": "грудная клетка"
  },
  {
    "index": 7327,
    "word": "trickle",
    "transcription": "[ˈtrɪkl]",
    "translation": "струйка, капать, сочиться"
  },
  {
    "index": 7328,
    "word": "excerpt",
    "transcription": "[ˈɛksɜːpt]",
    "translation": "выдержка, отрывок"
  },
  {
    "index": 7329,
    "word": "savor",
    "transcription": "[ˈseɪvə]",
    "translation": "вкус, смаковать"
  },
  {
    "index": 7330,
    "word": "savory",
    "transcription": "[ˈseɪvəri]",
    "translation": "вкусный, привлекательный"
  },
  {
    "index": 7331,
    "word": "unsavory",
    "transcription": "[ˌʌnˈseɪvəri]",
    "translation": "невкусный, непривлекательный"
  },
  {
    "index": 7332,
    "word": "impede",
    "transcription": "[ɪmˈpiːd]",
    "translation": "затруднять"
  },
  {
    "index": 7333,
    "word": "unimpeded",
    "transcription": "[ˌʌnɪmˈpiːdɪd]",
    "translation": "беспрепятственный"
  },
  {
    "index": 7334,
    "word": "canvas",
    "transcription": "[ˈkænvəs]",
    "translation": "холст"
  },
  {
    "index": 7335,
    "word": "scurry",
    "transcription": "[ˈskʌri]",
    "translation": "бежать, сновать, суетиться"
  },
  {
    "index": 7336,
    "word": "litter",
    "transcription": "[ˈlɪtə]",
    "translation": "мусор (на улице)"
  },
  {
    "index": 7337,
    "word": "tranquil",
    "transcription": "[ˈtræŋkwɪl]",
    "translation": "спокойный"
  },
  {
    "index": 7338,
    "word": "tranquility",
    "transcription": "[træŋˈkwɪlɪti]",
    "translation": "спокойствие"
  },
  {
    "index": 7339,
    "word": "butcher",
    "transcription": "[ˈbʊʧə]",
    "translation": "мясник"
  },
  {
    "index": 7340,
    "word": "mole",
    "transcription": "[məʊl]",
    "translation": "родинка"
  },
  {
    "index": 7341,
    "word": "decay",
    "transcription": "[dɪˈkeɪ]",
    "translation": "распад, упадок, разлагаться"
  },
  {
    "index": 7342,
    "word": "erode",
    "transcription": "[ɪˈrəʊd]",
    "translation": "размывать, выветривать"
  },
  {
    "index": 7343,
    "word": "erosion",
    "transcription": "[ɪˈrəʊʒən]",
    "translation": "размывание"
  },
  {
    "index": 7344,
    "word": "outskirts",
    "transcription": "[ˈaʊtskɜːts]",
    "translation": "окраина, окрестности"
  },
  {
    "index": 7345,
    "word": "briefcase",
    "transcription": "[ˈbriːfˌkeɪs]",
    "translation": "портфель"
  },
  {
    "index": 7346,
    "word": "timid",
    "transcription": "[ˈtɪmɪd]",
    "translation": "робкий, пугливый"
  },
  {
    "index": 7347,
    "word": "timidity",
    "transcription": "[tɪˈmɪdɪti]",
    "translation": "робость"
  },
  {
    "index": 7348,
    "word": "evoke",
    "transcription": "[ɪˈvəʊk]",
    "translation": "вызывать"
  },
  {
    "index": 7349,
    "word": "evocation",
    "transcription": "[evocation]",
    "translation": "воскрешение в памяти"
  },
  {
    "index": 7350,
    "word": "susceptible",
    "transcription": "[səˈsɛptəbl]",
    "translation": "восприимчивый, подверженный"
  },
  {
    "index": 7351,
    "word": "susceptibility",
    "transcription": "[səˌsɛptəˈbɪlɪti]",
    "translation": "восприимчивость"
  },
  {
    "index": 7352,
    "word": "coarse",
    "transcription": "[kɔːs]",
    "translation": "грубый, крупный, шероховатый"
  },
  {
    "index": 7353,
    "word": "ham",
    "transcription": "[hæm]",
    "translation": "ветчина"
  },
  {
    "index": 7354,
    "word": "entity",
    "transcription": "[ˈɛntɪti]",
    "translation": "сущность"
  },
  {
    "index": 7355,
    "word": "show around",
    "transcription": "[ʃəʊəˈraʊnd]",
    "translation": "показать места"
  },
  {
    "index": 7356,
    "word": "bash in",
    "transcription": "[bæʃɪn]",
    "translation": "разбить, расколотить"
  },
  {
    "index": 7357,
    "word": "withhold",
    "transcription": "[wɪðˈhəʊld]",
    "translation": "утаивать, удерживать"
  },
  {
    "index": 7358,
    "word": "void",
    "transcription": "[vɔɪd]",
    "translation": "недействительный, пустой"
  },
  {
    "index": 7359,
    "word": "infer",
    "transcription": "[ɪnˈfɜː]",
    "translation": "делать вывод"
  },
  {
    "index": 7360,
    "word": "inference",
    "transcription": "[ˈɪnfərəns]",
    "translation": "вывод"
  },
  {
    "index": 7361,
    "word": "rash",
    "transcription": "[ræʃ]",
    "translation": "опрометчивый, необдуманный"
  },
  {
    "index": 7362,
    "word": "landlord",
    "transcription": "[ˈlænlɔːd]",
    "translation": "арендодатель, домовладелец"
  },
  {
    "index": 7363,
    "word": "landlady",
    "transcription": "[ˈlændˌleɪdi]",
    "translation": "хозяйка, домовладелица"
  },
  {
    "index": 7364,
    "word": "aisle",
    "transcription": "[aɪl]",
    "translation": "проход"
  },
  {
    "index": 7365,
    "word": "wither",
    "transcription": "[ˈwɪðə]",
    "translation": "увянуть, засохнуть"
  },
  {
    "index": 7366,
    "word": "hallmark",
    "transcription": "[ˈhɔːlmɑːk]",
    "translation": "характерная черта"
  },
  {
    "index": 7367,
    "word": "aquatic",
    "transcription": "[əˈkwætɪk]",
    "translation": "водный"
  },
  {
    "index": 7368,
    "word": "conspire",
    "transcription": "[kənˈspaɪə]",
    "translation": "сговариваться"
  },
  {
    "index": 7369,
    "word": "conspirator",
    "transcription": "[kənˈspɪrətə]",
    "translation": "заговорщик"
  },
  {
    "index": 7370,
    "word": "conspiracy",
    "transcription": "[kənˈspɪrəsi]",
    "translation": "заговор"
  },
  {
    "index": 7371,
    "word": "mint",
    "transcription": "[mɪnt]",
    "translation": "мята"
  },
  {
    "index": 7372,
    "word": "adjective",
    "transcription": "[ˈæʤɪktɪv]",
    "translation": "прилагательное"
  },
  {
    "index": 7373,
    "word": "cartoon",
    "transcription": "[kɑːˈtuːn]",
    "translation": "мультфильм"
  },
  {
    "index": 7374,
    "word": "overview",
    "transcription": "[ˈəʊvəvjuː]",
    "translation": "обзор"
  },
  {
    "index": 7375,
    "word": "calf (pl:calves)",
    "transcription": "[kɑːf]",
    "translation": "теленок"
  },
  {
    "index": 7376,
    "word": "flick",
    "transcription": "[flɪk]",
    "translation": "фильм (разг.)"
  },
  {
    "index": 7377,
    "word": "temple",
    "transcription": "[ˈtɛmpl]",
    "translation": "висок"
  },
  {
    "index": 7378,
    "word": "pervasive",
    "transcription": "[pɜːˈveɪsɪv]",
    "translation": "расширяющийся, всепроникающий"
  },
  {
    "index": 7379,
    "word": "roadside",
    "transcription": "[ˈrəʊdsaɪd]",
    "translation": "обочина, придорожный"
  },
  {
    "index": 7380,
    "word": "veil",
    "transcription": "[veɪl]",
    "translation": "вуаль, закрывать"
  },
  {
    "index": 7381,
    "word": "unveil",
    "transcription": "[ʌnˈveɪl]",
    "translation": "открывать"
  },
  {
    "index": 7382,
    "word": "fuck with",
    "transcription": "[fʌkwɪð]",
    "translation": "дразнить, шутить, злить"
  },
  {
    "index": 7383,
    "word": "directory",
    "transcription": "[dɪˈrɛktəri]",
    "translation": "справочник"
  },
  {
    "index": 7384,
    "word": "flex",
    "transcription": "[flɛks]",
    "translation": "сгибать"
  },
  {
    "index": 7385,
    "word": "flexible",
    "transcription": "[ˈflɛksəbl]",
    "translation": "гибкий"
  },
  {
    "index": 7386,
    "word": "flexibility",
    "transcription": "[ˌflɛksɪˈbɪlɪti]",
    "translation": "гибкость"
  },
  {
    "index": 7387,
    "word": "darling",
    "transcription": "[ˈdɑːlɪŋ]",
    "translation": "дорогой/ая (устар.)"
  },
  {
    "index": 7388,
    "word": "dispense with",
    "transcription": "[dɪsˈpɛnswɪð]",
    "translation": "обойтись без, избавиться"
  },
  {
    "index": 7389,
    "word": "pluck",
    "transcription": "[plʌk]",
    "translation": "сорвать, выдернуть"
  },
  {
    "index": 7390,
    "word": "make out",
    "transcription": "[meɪkaʊt]",
    "translation": "целоваться"
  },
  {
    "index": 7391,
    "word": "insurgent",
    "transcription": "[ɪnˈsɜːʤənt]",
    "translation": "повстанец, мятежник"
  },
  {
    "index": 7392,
    "word": "insurgency",
    "transcription": "[insurgency]",
    "translation": "мятеж"
  },
  {
    "index": 7393,
    "word": "woo",
    "transcription": "[wuː]",
    "translation": "ухаживать, добиваться"
  },
  {
    "index": 7394,
    "word": "oyster",
    "transcription": "[ˈɔɪstə]",
    "translation": "устрица"
  },
  {
    "index": 7395,
    "word": "righteous",
    "transcription": "[ˈraɪʧəs]",
    "translation": "праведный"
  },
  {
    "index": 7396,
    "word": "righteousness",
    "transcription": "[ˈraɪʧəsnɪs]",
    "translation": "праведность"
  },
  {
    "index": 7397,
    "word": "come under",
    "transcription": "[kʌmˈʌndə]",
    "translation": "подвегрнуться"
  },
  {
    "index": 7398,
    "word": "outset",
    "transcription": "[ˈaʊtsɛt]",
    "translation": "начало"
  },
  {
    "index": 7399,
    "word": "tack",
    "transcription": "[tæk]",
    "translation": "курс, линия поведения"
  },
  {
    "index": 7400,
    "word": "foyer",
    "transcription": "[ˈfɔɪeɪ]",
    "translation": "фойе"
  },
  {
    "index": 7401,
    "word": "liken",
    "transcription": "[ˈlaɪkən]",
    "translation": "уподоблять, сравнивать"
  },
  {
    "index": 7402,
    "word": "plaque",
    "transcription": "[plɑːk]",
    "translation": "бляшка, металлический знак"
  },
  {
    "index": 7403,
    "word": "chap",
    "transcription": "[ʧæp]",
    "translation": "парень"
  },
  {
    "index": 7404,
    "word": "ensemble",
    "transcription": "[ɑːnˈsɑːmbl]",
    "translation": "ансамбль"
  },
  {
    "index": 7405,
    "word": "consent",
    "transcription": "[kənˈsɛnt]",
    "translation": "согласие, разрешение"
  },
  {
    "index": 7406,
    "word": "coil",
    "transcription": "[kɔɪl]",
    "translation": "катушка, моток, наматывать"
  },
  {
    "index": 7407,
    "word": "frog",
    "transcription": "[frɒg]",
    "translation": "лягушка"
  },
  {
    "index": 7408,
    "word": "lame",
    "transcription": "[leɪm]",
    "translation": "хромой"
  },
  {
    "index": 7409,
    "word": "lameness",
    "transcription": "[ˈleɪmnɪs]",
    "translation": "хромота"
  },
  {
    "index": 7410,
    "word": "smirk",
    "transcription": "[smɜːk]",
    "translation": "ухмылка"
  },
  {
    "index": 7411,
    "word": "homeland",
    "transcription": "[ˈhəʊmlænd]",
    "translation": "родина"
  },
  {
    "index": 7412,
    "word": "hometown",
    "transcription": "[ˈhəʊmˈtaʊn]",
    "translation": "родной город"
  },
  {
    "index": 7413,
    "word": "go on",
    "transcription": "[gəʊɒn]",
    "translation": "продолжаться"
  },
  {
    "index": 7414,
    "word": "run on",
    "transcription": "[rʌnɒn]",
    "translation": "продолжаться"
  },
  {
    "index": 7415,
    "word": "endow",
    "transcription": "[ɪnˈdaʊ]",
    "translation": "наделять, даровать"
  },
  {
    "index": 7416,
    "word": "endowment",
    "transcription": "[ɪnˈdaʊmənt]",
    "translation": "дарование"
  },
  {
    "index": 7417,
    "word": "track down",
    "transcription": "[trækdaʊn]",
    "translation": "разыскать, отследить"
  },
  {
    "index": 7418,
    "word": "slippery",
    "transcription": "[ˈslɪpəri]",
    "translation": "скользкий"
  },
  {
    "index": 7419,
    "word": "gum",
    "transcription": "[gʌm]",
    "translation": "жвачка"
  },
  {
    "index": 7420,
    "word": "unbelievable",
    "transcription": "[ˌʌnbɪˈliːvəbl]",
    "translation": "невероятный"
  },
  {
    "index": 7421,
    "word": "believable",
    "transcription": "[bɪˈliːvəbl]",
    "translation": "правдоподобный"
  },
  {
    "index": 7422,
    "word": "bully",
    "transcription": "[ˈbʊli]",
    "translation": "задира, задирать"
  },
  {
    "index": 7423,
    "word": "giggle",
    "transcription": "[ˈgɪgl]",
    "translation": "хихикать, хихиканье"
  },
  {
    "index": 7424,
    "word": "despair",
    "transcription": "[dɪsˈpeə]",
    "translation": "отчаяние, безнадёжность"
  },
  {
    "index": 7425,
    "word": "transcript",
    "transcription": "[ˈtrænskrɪpt]",
    "translation": "расшифровка, текст"
  },
  {
    "index": 7426,
    "word": "cliff",
    "transcription": "[klɪf]",
    "translation": "утес"
  },
  {
    "index": 7427,
    "word": "meditate",
    "transcription": "[ˈmɛdɪteɪt]",
    "translation": "обдумывать или созерцать"
  },
  {
    "index": 7428,
    "word": "meditation",
    "transcription": "[ˌmɛdɪˈteɪʃən]",
    "translation": "медитация"
  },
  {
    "index": 7429,
    "word": "bland",
    "transcription": "[blænd]",
    "translation": "пресный, мягкий"
  },
  {
    "index": 7430,
    "word": "blandness",
    "transcription": "[ˈblændnəs]",
    "translation": "вялость, мягкость и т. д."
  },
  {
    "index": 7431,
    "word": "metropolitan",
    "transcription": "[ˌmɛtrəˈpɒlɪtən]",
    "translation": "столичный"
  },
  {
    "index": 7432,
    "word": "dangle",
    "transcription": "[ˈdæŋgl]",
    "translation": "мотаться"
  },
  {
    "index": 7433,
    "word": "offset",
    "transcription": "[ˈɒfsɛt]",
    "translation": "смещение"
  },
  {
    "index": 7434,
    "word": "stud",
    "transcription": "[stʌd]",
    "translation": "шпилька"
  },
  {
    "index": 7435,
    "word": "plank",
    "transcription": "[plæŋk]",
    "translation": "доска, планка"
  },
  {
    "index": 7436,
    "word": "upright",
    "transcription": "[ˈʌpraɪt]",
    "translation": "честный"
  },
  {
    "index": 7437,
    "word": "coverage",
    "transcription": "[ˈkʌvərɪʤ]",
    "translation": "освещение"
  },
  {
    "index": 7438,
    "word": "jar",
    "transcription": "[ʤɑː]",
    "translation": "банка, кувшин и т. д."
  },
  {
    "index": 7439,
    "word": "rivet",
    "transcription": "[ˈrɪvɪt]",
    "translation": "заклёпка, приковывать, клепать"
  },
  {
    "index": 7440,
    "word": "umbrella",
    "transcription": "[ʌmˈbrɛlə]",
    "translation": "зонтик"
  },
  {
    "index": 7441,
    "word": "grapple",
    "transcription": "[ˈgræpl]",
    "translation": "сцепиться, бороться"
  },
  {
    "index": 7442,
    "word": "sturdy",
    "transcription": "[ˈstɜːdi]",
    "translation": "крепкий"
  },
  {
    "index": 7443,
    "word": "conscience",
    "transcription": "[ˈkɒnʃəns]",
    "translation": "совесть, сознательность"
  },
  {
    "index": 7444,
    "word": "conscientious",
    "transcription": "[ˌkɒnʃɪˈɛnʃəs]",
    "translation": "добросовестный"
  },
  {
    "index": 7445,
    "word": "molest",
    "transcription": "[məʊˈlɛst]",
    "translation": "приставать, досаждать"
  },
  {
    "index": 7446,
    "word": "molestation",
    "transcription": "[ˌməʊlɛsˈteɪʃən]",
    "translation": "назойливость"
  },
  {
    "index": 7447,
    "word": "tempt",
    "transcription": "[tɛmpt]",
    "translation": "искушать"
  },
  {
    "index": 7448,
    "word": "temptation",
    "transcription": "[tɛmpˈteɪʃən]",
    "translation": "искушение"
  },
  {
    "index": 7449,
    "word": "casket",
    "transcription": "[ˈkɑːskɪt]",
    "translation": "шкатулка или гроб (амер.)"
  },
  {
    "index": 7450,
    "word": "adverb",
    "transcription": "[ˈædvɜːb]",
    "translation": "наречие"
  },
  {
    "index": 7451,
    "word": "hold on",
    "transcription": "[həʊldɒn]",
    "translation": "держаться"
  },
  {
    "index": 7452,
    "word": "hang on",
    "transcription": "[hæŋɒn]",
    "translation": "держаться"
  },
  {
    "index": 7453,
    "word": "vault",
    "transcription": "[vɔːlt]",
    "translation": "хранилище, об. в подвале"
  },
  {
    "index": 7454,
    "word": "expenditure",
    "transcription": "[ɪksˈpɛndɪʧə]",
    "translation": "расходы"
  },
  {
    "index": 7455,
    "word": "flakes",
    "transcription": "[fleɪks]",
    "translation": "хлопья"
  },
  {
    "index": 7456,
    "word": "snowflake",
    "transcription": "[ˈsnəʊfleɪk]",
    "translation": "снежинка"
  },
  {
    "index": 7457,
    "word": "conquest",
    "transcription": "[ˈkɒŋkwɛst]",
    "translation": "завоевание"
  },
  {
    "index": 7458,
    "word": "ashtray",
    "transcription": "[ˈæʃtreɪ]",
    "translation": "пепельница"
  },
  {
    "index": 7459,
    "word": "realm",
    "transcription": "[rɛlm]",
    "translation": "царство или область (перен.)"
  },
  {
    "index": 7460,
    "word": "rubber",
    "transcription": "[ˈrʌbə]",
    "translation": "резина, резиновый"
  },
  {
    "index": 7461,
    "word": "rubber",
    "transcription": "[ˈrʌbə]",
    "translation": "ластик (брит.)"
  },
  {
    "index": 7462,
    "word": "falter",
    "transcription": "[ˈfɔːltə]",
    "translation": "колебаться, дрогнуть"
  },
  {
    "index": 7463,
    "word": "lazy",
    "transcription": "[ˈleɪzi]",
    "translation": "ленивый"
  },
  {
    "index": 7464,
    "word": "laziness",
    "transcription": "[ˈleɪzɪnɪs]",
    "translation": "лень"
  },
  {
    "index": 7465,
    "word": "cloud",
    "transcription": "[klaʊd]",
    "translation": "облако"
  },
  {
    "index": 7466,
    "word": "cloudy",
    "transcription": "[ˈklaʊdi]",
    "translation": "облачный"
  },
  {
    "index": 7467,
    "word": "cloudless",
    "transcription": "[ˈklaʊdlɪs]",
    "translation": "безоблачный"
  },
  {
    "index": 7468,
    "word": "daily",
    "transcription": "[ˈdeɪli]",
    "translation": "ежедневно"
  },
  {
    "index": 7469,
    "word": "weekly",
    "transcription": "[ˈwiːkli]",
    "translation": "еженедельно"
  },
  {
    "index": 7470,
    "word": "monthly",
    "transcription": "[ˈmʌnθli]",
    "translation": "ежемесячно"
  },
  {
    "index": 7471,
    "word": "yearly",
    "transcription": "[ˈjɪəli]",
    "translation": "ежегодно"
  },
  {
    "index": 7472,
    "word": "sunset",
    "transcription": "[ˈsʌnsɛt]",
    "translation": "закат солнца"
  },
  {
    "index": 7473,
    "word": "shred",
    "transcription": "[ʃrɛd]",
    "translation": "мелко порубить"
  },
  {
    "index": 7474,
    "word": "hit back",
    "transcription": "[hɪtbæk]",
    "translation": "отыграться, отбиться"
  },
  {
    "index": 7475,
    "word": "alas",
    "transcription": "[əˈlæs]",
    "translation": "увы"
  },
  {
    "index": 7476,
    "word": "pass by",
    "transcription": "[pɑːsbaɪ]",
    "translation": "проходить мимо"
  },
  {
    "index": 7477,
    "word": "passerby",
    "transcription": "[ˈpɑːsəˈbaɪ]",
    "translation": "прохожий"
  },
  {
    "index": 7478,
    "word": "thread",
    "transcription": "[θrɛd]",
    "translation": "нить"
  },
  {
    "index": 7479,
    "word": "journalism",
    "transcription": "[ˈʤɜːnəlɪzm]",
    "translation": "журналистика"
  },
  {
    "index": 7480,
    "word": "intended",
    "transcription": "[ɪnˈtɛndɪd]",
    "translation": "предназначенный"
  },
  {
    "index": 7481,
    "word": "helmet (helm)",
    "transcription": "[ˈhɛlmɪt]",
    "translation": "шлем"
  },
  {
    "index": 7482,
    "word": "pineapple",
    "transcription": "[ˈpaɪnˌæpl]",
    "translation": "ананас"
  },
  {
    "index": 7483,
    "word": "go off",
    "transcription": "[gəʊɒf]",
    "translation": "отключиться"
  },
  {
    "index": 7484,
    "word": "go on",
    "transcription": "[gəʊɒn]",
    "translation": "включиться"
  },
  {
    "index": 7485,
    "word": "magnitude",
    "transcription": "[ˈmægnɪtjuːd]",
    "translation": "величина, сила"
  },
  {
    "index": 7486,
    "word": "resurrect",
    "transcription": "[ˌrɛzəˈrɛkt]",
    "translation": "воскрешать"
  },
  {
    "index": 7487,
    "word": "resurrection",
    "transcription": "[ˌrɛzəˈrɛkʃən]",
    "translation": "воскрешение"
  },
  {
    "index": 7488,
    "word": "depot",
    "transcription": "[ˈdɛpəʊ]",
    "translation": "хранилище, база, склад"
  },
  {
    "index": 7489,
    "word": "shallow",
    "transcription": "[ˈʃæləʊ]",
    "translation": "мелкий"
  },
  {
    "index": 7490,
    "word": "signify",
    "transcription": "[ˈsɪgnɪfaɪ]",
    "translation": "означать"
  },
  {
    "index": 7491,
    "word": "signification",
    "transcription": "[ˌsɪgnɪfɪˈkeɪʃən]",
    "translation": "значение"
  },
  {
    "index": 7492,
    "word": "squint",
    "transcription": "[skwɪnt]",
    "translation": "щуриться или коситься"
  },
  {
    "index": 7493,
    "word": "propagate",
    "transcription": "[ˈprɒpəgeɪt]",
    "translation": "размножать, распространять"
  },
  {
    "index": 7494,
    "word": "propagation",
    "transcription": "[ˌprɒpəˈgeɪʃən]",
    "translation": "распространение"
  },
  {
    "index": 7495,
    "word": "bruise",
    "transcription": "[bruːz]",
    "translation": "синяк, ушиб"
  },
  {
    "index": 7496,
    "word": "oversight",
    "transcription": "[ˈəʊvəsaɪt]",
    "translation": "надзор"
  },
  {
    "index": 7497,
    "word": "inject",
    "transcription": "[ɪnˈʤɛkt]",
    "translation": "впрыскивать, вкачивать"
  },
  {
    "index": 7498,
    "word": "injection",
    "transcription": "[ɪnˈʤɛkʃən]",
    "translation": "впрыскивание"
  },
  {
    "index": 7499,
    "word": "eject",
    "transcription": "[i(ː)ˈʤɛkt]",
    "translation": "выталкивать"
  },
  {
    "index": 7500,
    "word": "ejection",
    "transcription": "[i(ː)ˈʤɛkʃən]",
    "translation": "выбрасывание"
  },
  {
    "index": 7501,
    "word": "worthwhile",
    "transcription": "[ˈwɜːθˈwaɪl]",
    "translation": "стоящий"
  },
  {
    "index": 7502,
    "word": "submerge",
    "transcription": "[səbˈmɜːʤ]",
    "translation": "погружаться под воду"
  },
  {
    "index": 7503,
    "word": "submersion",
    "transcription": "[səbˈmɜːʃən]",
    "translation": "погружение в воду"
  },
  {
    "index": 7504,
    "word": "precious",
    "transcription": "[ˈprɛʃəs]",
    "translation": "драгоценный"
  },
  {
    "index": 7505,
    "word": "peril",
    "transcription": "[ˈpɛrɪl]",
    "translation": "опасность, угроза"
  },
  {
    "index": 7506,
    "word": "perilous",
    "transcription": "[ˈpɛrɪləs]",
    "translation": "рискованный"
  },
  {
    "index": 7507,
    "word": "ape",
    "transcription": "[eɪp]",
    "translation": "обезьяна (крупная)"
  },
  {
    "index": 7508,
    "word": "kettle",
    "transcription": "[ˈkɛtl]",
    "translation": "чайник"
  },
  {
    "index": 7509,
    "word": "spawn",
    "transcription": "[spɔːn]",
    "translation": "порождать, порождение и т. д."
  },
  {
    "index": 7510,
    "word": "liaison",
    "transcription": "[li(ː)ˈeɪzɒn]",
    "translation": "связь"
  },
  {
    "index": 7511,
    "word": "proximity",
    "transcription": "[prɒkˈsɪmɪti]",
    "translation": "близость"
  },
  {
    "index": 7512,
    "word": "hospitality",
    "transcription": "[ˌhɒspɪˈtælɪti]",
    "translation": "гостеприимство"
  },
  {
    "index": 7513,
    "word": "hospitable",
    "transcription": "[ˈhɒspɪtəbl]",
    "translation": "гостеприимный"
  },
  {
    "index": 7514,
    "word": "inhospitable",
    "transcription": "[ɪnˈhɒspɪtəbl]",
    "translation": "негостеприимный"
  },
  {
    "index": 7515,
    "word": "intelligible",
    "transcription": "[ɪnˈtɛlɪʤəbl]",
    "translation": "вразумительный, понятный"
  },
  {
    "index": 7516,
    "word": "unintelligible",
    "transcription": "[ˌʌnɪnˈtɛlɪʤɪbl]",
    "translation": "невразумительный"
  },
  {
    "index": 7517,
    "word": "shaft",
    "transcription": "[ʃɑːft]",
    "translation": "шахта (напр. лифта)"
  },
  {
    "index": 7518,
    "word": "hardware",
    "transcription": "[ˈhɑːdweə]",
    "translation": "аппаратные средства"
  },
  {
    "index": 7519,
    "word": "noun",
    "transcription": "[naʊn]",
    "translation": "существительное"
  },
  {
    "index": 7520,
    "word": "traffic light",
    "transcription": "[ˈtræfɪklaɪt]",
    "translation": "светофор"
  },
  {
    "index": 7521,
    "word": "raid",
    "transcription": "[reɪd]",
    "translation": "набег"
  },
  {
    "index": 7522,
    "word": "brew",
    "transcription": "[bruː]",
    "translation": "заваривать, варить напиток"
  },
  {
    "index": 7523,
    "word": "brewery",
    "transcription": "[ˈbrʊəri]",
    "translation": "пивзавод"
  },
  {
    "index": 7524,
    "word": "bizarre",
    "transcription": "[bɪˈzɑː]",
    "translation": "странный, причудливый"
  },
  {
    "index": 7525,
    "word": "verge",
    "transcription": "[vɜːʤ]",
    "translation": "грань, предел"
  },
  {
    "index": 7526,
    "word": "buzz",
    "transcription": "[bʌz]",
    "translation": "жужжать"
  },
  {
    "index": 7527,
    "word": "bristle",
    "transcription": "[ˈbrɪsl]",
    "translation": "щетина"
  },
  {
    "index": 7528,
    "word": "output",
    "transcription": "[ˈaʊtpʊt]",
    "translation": "выпуск, выход"
  },
  {
    "index": 7529,
    "word": "slow down",
    "transcription": "[sləʊdaʊn]",
    "translation": "замедлиться"
  },
  {
    "index": 7530,
    "word": "slowdown",
    "transcription": "[ˈsləʊdaʊn]",
    "translation": "замедление, спад"
  },
  {
    "index": 7531,
    "word": "fluent",
    "transcription": "[ˈflu(ː)ənt]",
    "translation": "беглый"
  },
  {
    "index": 7532,
    "word": "fluency",
    "transcription": "[ˈflu(ː)ənsi]",
    "translation": "беглость"
  },
  {
    "index": 7533,
    "word": "cramp",
    "transcription": "[kræmp]",
    "translation": "судорога"
  },
  {
    "index": 7534,
    "word": "healthcare",
    "transcription": "[ˈhɛlθkeə]",
    "translation": "здравоохранение"
  },
  {
    "index": 7535,
    "word": "eradicate",
    "transcription": "[ɪˈrædɪkeɪt]",
    "translation": "уничтожить, искоренить"
  },
  {
    "index": 7536,
    "word": "eradication",
    "transcription": "[ɪˌrædɪˈkeɪʃən]",
    "translation": "искоренение"
  },
  {
    "index": 7537,
    "word": "smudge",
    "transcription": "[smʌʤ]",
    "translation": "смазать"
  },
  {
    "index": 7538,
    "word": "widow",
    "transcription": "[ˈwɪdəʊ]",
    "translation": "вдова"
  },
  {
    "index": 7539,
    "word": "widower",
    "transcription": "[ˈwɪdəʊə]",
    "translation": "вдовец"
  },
  {
    "index": 7540,
    "word": "overtake",
    "transcription": "[ˌəʊvəˈteɪk]",
    "translation": "обгонять"
  },
  {
    "index": 7541,
    "word": "speck",
    "transcription": "[spɛk]",
    "translation": "пятнышко, крупинка"
  },
  {
    "index": 7542,
    "word": "rustic",
    "transcription": "[ˈrʌstɪk]",
    "translation": "деревенский, простой, грубый"
  },
  {
    "index": 7543,
    "word": "freight",
    "transcription": "[freɪt]",
    "translation": "грузовой"
  },
  {
    "index": 7544,
    "word": "pancake",
    "transcription": "[ˈpænkeɪk]",
    "translation": "блин, оладья"
  },
  {
    "index": 7545,
    "word": "peck",
    "transcription": "[pɛk]",
    "translation": "клевать"
  },
  {
    "index": 7546,
    "word": "woodpecker",
    "transcription": "[ˈwʊdˌpɛkə]",
    "translation": "дятел"
  },
  {
    "index": 7547,
    "word": "bunk",
    "transcription": "[bʌŋk]",
    "translation": "койка, спальное место"
  },
  {
    "index": 7548,
    "word": "outlook",
    "transcription": "[ˈaʊtlʊk]",
    "translation": "вид, взгляд, кругозор"
  },
  {
    "index": 7549,
    "word": "crest",
    "transcription": "[krɛst]",
    "translation": "гребень"
  },
  {
    "index": 7550,
    "word": "flush",
    "transcription": "[flʌʃ]",
    "translation": "румянец, порозоветь"
  },
  {
    "index": 7551,
    "word": "burrow",
    "transcription": "[ˈbɜːrəʊ]",
    "translation": "нора, зарываться"
  },
  {
    "index": 7552,
    "word": "housewife",
    "transcription": "[ˈhaʊswaɪf]",
    "translation": "домохозяйка"
  },
  {
    "index": 7553,
    "word": "bleed (bled, bled)",
    "transcription": "[bliːd]",
    "translation": "кровоточить"
  },
  {
    "index": 7554,
    "word": "carpenter",
    "transcription": "[ˈkɑːpɪntə]",
    "translation": "плотник"
  },
  {
    "index": 7555,
    "word": "carpentry",
    "transcription": "[ˈkɑːpɪntri]",
    "translation": "плотничье дело"
  },
  {
    "index": 7556,
    "word": "backbone",
    "transcription": "[ˈbækbəʊn]",
    "translation": "хребет"
  },
  {
    "index": 7557,
    "word": "bill",
    "transcription": "[bɪl]",
    "translation": "банкнота"
  },
  {
    "index": 7558,
    "word": "contemplate",
    "transcription": "[ˈkɒntɛmpleɪt]",
    "translation": "созерцать или размышлять"
  },
  {
    "index": 7559,
    "word": "contemplation",
    "transcription": "[ˌkɒntɛmˈpleɪʃən]",
    "translation": "созерцание"
  },
  {
    "index": 7560,
    "word": "velvet",
    "transcription": "[ˈvɛlvɪt]",
    "translation": "бархат"
  },
  {
    "index": 7561,
    "word": "velvety",
    "transcription": "[ˈvɛlvɪti]",
    "translation": "бархатистый"
  },
  {
    "index": 7562,
    "word": "futile",
    "transcription": "[ˈfjuːtaɪl]",
    "translation": "тщетный, напрасный"
  },
  {
    "index": 7563,
    "word": "futility",
    "transcription": "[fju(ː)ˈtɪlɪti]",
    "translation": "бесполезность"
  },
  {
    "index": 7564,
    "word": "go about",
    "transcription": "[gəʊəˈbaʊt]",
    "translation": "заниматься (делами)"
  },
  {
    "index": 7565,
    "word": "look out",
    "transcription": "[lʊkaʊt]",
    "translation": "смотреть (опасность!)"
  },
  {
    "index": 7566,
    "word": "watch out",
    "transcription": "[wɒʧaʊt]",
    "translation": "смотреть (опасность!)"
  },
  {
    "index": 7567,
    "word": "segregate",
    "transcription": "[ˈsɛgrɪgeɪt]",
    "translation": "разделять"
  },
  {
    "index": 7568,
    "word": "segregation",
    "transcription": "[ˌsɛgrɪˈgeɪʃən]",
    "translation": "разделение"
  },
  {
    "index": 7569,
    "word": "blatant",
    "transcription": "[ˈbleɪtənt]",
    "translation": "явный, вопиющий"
  },
  {
    "index": 7570,
    "word": "wholesale",
    "transcription": "[ˈhəʊlseɪl]",
    "translation": "опт"
  },
  {
    "index": 7571,
    "word": "hilarious",
    "transcription": "[hɪˈleərɪəs]",
    "translation": "веселый, забавный, смешной"
  },
  {
    "index": 7572,
    "word": "clerical",
    "transcription": "[ˈklɛrɪkəl]",
    "translation": "канцелярский, административный"
  },
  {
    "index": 7573,
    "word": "pierce",
    "transcription": "[pɪəs]",
    "translation": "проколоть"
  },
  {
    "index": 7574,
    "word": "piercing",
    "transcription": "[ˈpɪəsɪŋ]",
    "translation": "пронзительный"
  },
  {
    "index": 7575,
    "word": "whine",
    "transcription": "[waɪn]",
    "translation": "ныть, скулить"
  },
  {
    "index": 7576,
    "word": "prominent",
    "transcription": "[ˈprɒmɪnənt]",
    "translation": "выдающийся, видный"
  },
  {
    "index": 7577,
    "word": "frown",
    "transcription": "[fraʊn]",
    "translation": "хмуриться"
  },
  {
    "index": 7578,
    "word": "plight",
    "transcription": "[plaɪt]",
    "translation": "тяжёлое положение, участь"
  },
  {
    "index": 7579,
    "word": "goddess",
    "transcription": "[ˈgɒdɪs]",
    "translation": "богиня"
  },
  {
    "index": 7580,
    "word": "underground",
    "transcription": "[ˈʌndəgraʊnd]",
    "translation": "подземный"
  },
  {
    "index": 7581,
    "word": "refrain",
    "transcription": "[rɪˈfreɪn]",
    "translation": "воздерживаться"
  },
  {
    "index": 7582,
    "word": "captive",
    "transcription": "[ˈkæptɪv]",
    "translation": "пленник"
  },
  {
    "index": 7583,
    "word": "captivate",
    "transcription": "[ˈkæptɪveɪt]",
    "translation": "пленять"
  },
  {
    "index": 7584,
    "word": "captivity",
    "transcription": "[kæpˈtɪvɪti]",
    "translation": "неволя"
  },
  {
    "index": 7585,
    "word": "heat up",
    "transcription": "[hiːtʌp]",
    "translation": "разогреть"
  },
  {
    "index": 7586,
    "word": "warm up",
    "transcription": "[wɔːmʌp]",
    "translation": "разогреть"
  },
  {
    "index": 7587,
    "word": "lantern",
    "transcription": "[ˈlæntən]",
    "translation": "фонарь"
  },
  {
    "index": 7588,
    "word": "harbor (harbour)",
    "transcription": "[ˈhɑːbə]",
    "translation": "гавань, порт"
  },
  {
    "index": 7589,
    "word": "allude",
    "transcription": "[əˈluːd]",
    "translation": "намекать, указывать"
  },
  {
    "index": 7590,
    "word": "allusion",
    "transcription": "[əˈluːʒən]",
    "translation": "намёк, ссылка"
  },
  {
    "index": 7591,
    "word": "cater",
    "transcription": "[ˈkeɪtə]",
    "translation": "обслуживать, угождать"
  },
  {
    "index": 7592,
    "word": "bash",
    "transcription": "[bæʃ]",
    "translation": "колотить"
  },
  {
    "index": 7593,
    "word": "drought",
    "transcription": "[draʊt]",
    "translation": "засуха"
  },
  {
    "index": 7594,
    "word": "receipt",
    "transcription": "[rɪˈsiːt]",
    "translation": "получение"
  },
  {
    "index": 7595,
    "word": "quilt",
    "transcription": "[kwɪlt]",
    "translation": "одеяло (стёганное)"
  },
  {
    "index": 7596,
    "word": "whereabouts",
    "transcription": "[ˈweərəbaʊts]",
    "translation": "местонахождение"
  },
  {
    "index": 7597,
    "word": "beat up",
    "transcription": "[biːtʌp]",
    "translation": "побить"
  },
  {
    "index": 7598,
    "word": "ferry",
    "transcription": "[ˈfɛri]",
    "translation": "переправа, паром"
  },
  {
    "index": 7599,
    "word": "bartender",
    "transcription": "[ˈbɑːˌtɛndə]",
    "translation": "бармен"
  },
  {
    "index": 7600,
    "word": "germ",
    "transcription": "[ʤɜːm]",
    "translation": "микроб или зародыш"
  },
  {
    "index": 7601,
    "word": "linen",
    "transcription": "[ˈlɪnɪn]",
    "translation": "бельё"
  },
  {
    "index": 7602,
    "word": "bed linen",
    "transcription": "[bɛdˈlɪnɪn]",
    "translation": "постельное белье"
  },
  {
    "index": 7603,
    "word": "showcase",
    "transcription": "[ˈʃəʊkeɪs]",
    "translation": "витрина, демонстрировать"
  },
  {
    "index": 7604,
    "word": "tablet",
    "transcription": "[ˈtæblɪt]",
    "translation": "плитка, пластина"
  },
  {
    "index": 7605,
    "word": "tab",
    "transcription": "[tæb]",
    "translation": "вкладка (в программе, на сайте)"
  },
  {
    "index": 7606,
    "word": "hold up",
    "transcription": "[həʊldʌp]",
    "translation": "задержать, затормозить"
  },
  {
    "index": 7607,
    "word": "perk",
    "transcription": "[pɜːk]",
    "translation": "привилегия, преимущество"
  },
  {
    "index": 7608,
    "word": "napkin",
    "transcription": "[ˈnæpkɪn]",
    "translation": "салфетка"
  },
  {
    "index": 7609,
    "word": "merchandise",
    "transcription": "[ˈmɜːʧəndaɪz]",
    "translation": "товар"
  },
  {
    "index": 7610,
    "word": "turtle",
    "transcription": "[ˈtɜːtl]",
    "translation": "черепаха"
  },
  {
    "index": 7611,
    "word": "climax",
    "transcription": "[ˈklaɪmæks]",
    "translation": "кульминация, разгар"
  },
  {
    "index": 7612,
    "word": "regiment",
    "transcription": "[ˈrɛʤɪmənt]",
    "translation": "полк"
  },
  {
    "index": 7613,
    "word": "snack",
    "transcription": "[snæk]",
    "translation": "лёгкая закуска"
  },
  {
    "index": 7614,
    "word": "waffle",
    "transcription": "[ˈwɒfl]",
    "translation": "вафля, вафельный"
  },
  {
    "index": 7615,
    "word": "backdrop",
    "transcription": "[ˈbækdrɒp]",
    "translation": "фон"
  },
  {
    "index": 7616,
    "word": "dispense",
    "transcription": "[dɪsˈpɛns]",
    "translation": "распределять, раздавать"
  },
  {
    "index": 7617,
    "word": "dispensation",
    "transcription": "[ˌdɪspɛnˈseɪʃən]",
    "translation": "распределение"
  },
  {
    "index": 7618,
    "word": "outgoing",
    "transcription": "[aʊtˈgəʊɪŋ]",
    "translation": "уходящий"
  },
  {
    "index": 7619,
    "word": "saddle",
    "transcription": "[ˈsædl]",
    "translation": "седло"
  },
  {
    "index": 7620,
    "word": "tedious",
    "transcription": "[ˈtiːdiəs]",
    "translation": "утомительный, нудный"
  },
  {
    "index": 7621,
    "word": "tick",
    "transcription": "[tɪk]",
    "translation": "клещ"
  },
  {
    "index": 7622,
    "word": "loot",
    "transcription": "[luːt]",
    "translation": "грабить, добыча"
  },
  {
    "index": 7623,
    "word": "looting",
    "transcription": "[ˈluːtɪŋ]",
    "translation": "мародерство"
  },
  {
    "index": 7624,
    "word": "shareholder",
    "transcription": "[ˈʃeəˌhəʊldə]",
    "translation": "акционер"
  },
  {
    "index": 7625,
    "word": "curtail",
    "transcription": "[kɜːˈteɪl]",
    "translation": "сократить, урезать"
  },
  {
    "index": 7626,
    "word": "conjure",
    "transcription": "[ˈkʌnʤə]",
    "translation": "вызывать, заклинать"
  },
  {
    "index": 7627,
    "word": "sneer",
    "transcription": "[snɪə]",
    "translation": "усмешка, насмехаться"
  },
  {
    "index": 7628,
    "word": "arrow",
    "transcription": "[ˈærəʊ]",
    "translation": "стрела, стрелка"
  },
  {
    "index": 7629,
    "word": "windowpane",
    "transcription": "[ˈwɪndəʊpeɪn]",
    "translation": "оконное стекло"
  },
  {
    "index": 7630,
    "word": "hen",
    "transcription": "[hɛn]",
    "translation": "курица"
  },
  {
    "index": 7631,
    "word": "seep",
    "transcription": "[siːp]",
    "translation": "просачиваться, проникать"
  },
  {
    "index": 7632,
    "word": "await",
    "transcription": "[əˈweɪt]",
    "translation": "ожидать"
  },
  {
    "index": 7633,
    "word": "coerce",
    "transcription": "[kəʊˈɜːs]",
    "translation": "принуждать"
  },
  {
    "index": 7634,
    "word": "coercion",
    "transcription": "[kəʊˈɜːʃən]",
    "translation": "принуждение"
  },
  {
    "index": 7635,
    "word": "complement",
    "transcription": "[ˈkɒmplɪmənt]",
    "translation": "набор, состав, комплект"
  },
  {
    "index": 7636,
    "word": "strive (strove, striven)",
    "transcription": "[straɪv]",
    "translation": "стремиться, добиваться"
  },
  {
    "index": 7637,
    "word": "strife",
    "transcription": "[straɪf]",
    "translation": "борьба"
  },
  {
    "index": 7638,
    "word": "affluent",
    "transcription": "[ˈæflʊənt]",
    "translation": "обеспеченный, состоятельный"
  },
  {
    "index": 7639,
    "word": "affluence",
    "transcription": "[ˈæflʊəns]",
    "translation": "наплыв"
  },
  {
    "index": 7640,
    "word": "raft",
    "transcription": "[rɑːft]",
    "translation": "плот"
  },
  {
    "index": 7641,
    "word": "runway",
    "transcription": "[ˈrʌnweɪ]",
    "translation": "взлётная полоса"
  },
  {
    "index": 7642,
    "word": "greed",
    "transcription": "[griːd]",
    "translation": "жадность"
  },
  {
    "index": 7643,
    "word": "greedy",
    "transcription": "[ˈgriːdi]",
    "translation": "жадный"
  },
  {
    "index": 7644,
    "word": "round down",
    "transcription": "[raʊnddaʊn]",
    "translation": "округлить (вниз)"
  },
  {
    "index": 7645,
    "word": "round up",
    "transcription": "[raʊndʌp]",
    "translation": "округлять (вверх)"
  },
  {
    "index": 7646,
    "word": "execute",
    "transcription": "[ˈɛksɪkjuːt]",
    "translation": "казнить"
  },
  {
    "index": 7647,
    "word": "execution",
    "transcription": "[ˌɛksɪˈkjuːʃən]",
    "translation": "казнь"
  },
  {
    "index": 7648,
    "word": "executioner",
    "transcription": "[ˌɛksɪˈkjuːʃnə]",
    "translation": "палач"
  },
  {
    "index": 7649,
    "word": "bath",
    "transcription": "[bɑːθ]",
    "translation": "ванна"
  },
  {
    "index": 7650,
    "word": "cone",
    "transcription": "[kəʊn]",
    "translation": "конус"
  },
  {
    "index": 7651,
    "word": "conical",
    "transcription": "[ˈkɒnɪkəl]",
    "translation": "конический"
  },
  {
    "index": 7652,
    "word": "defy",
    "transcription": "[dɪˈfaɪ]",
    "translation": "пренебрегать, отрицать"
  },
  {
    "index": 7653,
    "word": "defiant",
    "transcription": "[dɪˈfaɪənt]",
    "translation": "дерзкий"
  },
  {
    "index": 7654,
    "word": "defiance",
    "transcription": "[dɪˈfaɪəns]",
    "translation": "неповиновение"
  },
  {
    "index": 7655,
    "word": "linen",
    "transcription": "[ˈlɪnɪn]",
    "translation": "льняная ткань"
  },
  {
    "index": 7656,
    "word": "kin (pl:kin)",
    "transcription": "[kɪn]",
    "translation": "родственник"
  },
  {
    "index": 7657,
    "word": "kinship",
    "transcription": "[ˈkɪnʃɪp]",
    "translation": "родство"
  },
  {
    "index": 7658,
    "word": "hammer",
    "transcription": "[ˈhæmə]",
    "translation": "молоток"
  },
  {
    "index": 7659,
    "word": "glint",
    "transcription": "[glɪnt]",
    "translation": "вспыхнуть, сверкнуть (слегка)"
  },
  {
    "index": 7660,
    "word": "creek",
    "transcription": "[kriːk]",
    "translation": "ручей"
  },
  {
    "index": 7661,
    "word": "aunt",
    "transcription": "[ɑːnt]",
    "translation": "тётя"
  },
  {
    "index": 7662,
    "word": "ward off",
    "transcription": "[wɔːdɒf]",
    "translation": "предотвратить, отогнать"
  },
  {
    "index": 7663,
    "word": "fall for",
    "transcription": "[fɔːlfɔː]",
    "translation": "влюбляться"
  },
  {
    "index": 7664,
    "word": "shade",
    "transcription": "[ʃeɪd]",
    "translation": "оттенок (яркости)"
  },
  {
    "index": 7665,
    "word": "creep",
    "transcription": "[kriːp]",
    "translation": "гад, урод (разг)"
  },
  {
    "index": 7666,
    "word": "hemisphere",
    "transcription": "[ˈhɛmɪsfɪə]",
    "translation": "полушарие"
  },
  {
    "index": 7667,
    "word": "rule",
    "transcription": "[ruːl]",
    "translation": "править"
  },
  {
    "index": 7668,
    "word": "dash",
    "transcription": "[dæʃ]",
    "translation": "разрушить (перен.)"
  },
  {
    "index": 7669,
    "word": "pastime",
    "transcription": "[ˈpɑːstaɪm]",
    "translation": "времяпрепровождение"
  },
  {
    "index": 7670,
    "word": "scarlet",
    "transcription": "[ˈskɑːlɪt]",
    "translation": "алый"
  }
]

export default allWords