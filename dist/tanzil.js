var Notice = "Copyright (C) 2007-2021 Hamid Zarrabi-Zadeh, Source: tanzil.net";
var locale = "en_US";
var language = locale.split("_")[0];
var isRTL = false;
var quranTypes = {
    simple: "Simple",
    "simple-plain": "Simple (Plain)",
    "simple-min": "Simple (Minimal)",
    "simple-clean": "Simple (Clean)",
    uthmani: "Uthmani",
    "uthmani-min": "Uthmani (Minimal)"
};
var defQuranType = "simple";
var defSura = 19;
var defSuraText = "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ كهيعص\nذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا\nإِذْ نَادَىٰ رَبَّهُ نِدَاءً خَفِيًّا\nقَالَ رَبِّ إِنِّي وَهَنَ الْعَظْمُ مِنِّي وَاشْتَعَلَ الرَّأْسُ شَيْبًا وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا\nوَإِنِّي خِفْتُ الْمَوَالِيَ مِن وَرَائِي وَكَانَتِ امْرَأَتِي عَاقِرًا فَهَبْ لِي مِن لَّدُنكَ وَلِيًّا\nيَرِثُنِي وَيَرِثُ مِنْ آلِ يَعْقُوبَ ۖ وَاجْعَلْهُ رَبِّ رَضِيًّا\nيَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ بِغُلَامٍ اسْمُهُ يَحْيَىٰ لَمْ نَجْعَل لَّهُ مِن قَبْلُ سَمِيًّا\nقَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَكَانَتِ امْرَأَتِي عَاقِرًا وَقَدْ بَلَغْتُ مِنَ الْكِبَرِ عِتِيًّا\nقَالَ كَذَٰلِكَ قَالَ رَبُّكَ هُوَ عَلَيَّ هَيِّنٌ وَقَدْ خَلَقْتُكَ مِن قَبْلُ وَلَمْ تَكُ شَيْئًا\nقَالَ رَبِّ اجْعَل لِّي آيَةً ۚ قَالَ آيَتُكَ أَلَّا تُكَلِّمَ النَّاسَ ثَلَاثَ لَيَالٍ سَوِيًّا\nفَخَرَجَ عَلَىٰ قَوْمِهِ مِنَ الْمِحْرَابِ فَأَوْحَىٰ إِلَيْهِمْ أَن سَبِّحُوا بُكْرَةً وَعَشِيًّا";
var reciteList = {
    abdulbasit: "AbdulBasit",
    "abdulbasit-mjwd": "AbdulBasit (Mujawwad)",
    basfar: "Basfar",
    basfar2: "Basfar II",
    ajamy: "Al-Ajamy",
    ghamadi: "Al-Ghamadi",
    hudhaify: "Al-Hudhaify",
    husary: "Al-Husary",
    "husary-mjwd": "Al-Husary (Mujawwad)",
    minshawi: "Al-Minshawi",
    "minshawi-mjwd": "Al-Minshawi (Mujawwad)",
    shateri: "Ash-Shateri",
    shuraim: "Ash-Shuraim",
    sudais: "As-Sudais",
    tablawi: "At-Tablawi",
    hani: "Ar-Rafai",
    akhdar: "Al-Akhdar",
    muaiqly: "Al-Muaiqly",
    afasy: "Al-Afasy",
    ayyub: "Muhammad Ayyub",
    jibreel: "Muhammad Jibreel",
    parhizgar: "Parhizgar",
    bukhatir: "Bukhatir",
    qasim: "Al-Qasim",
    juhany: "Al-Juhany",
    matrood: "Al-Matrood"
};
var transAudioList = ["az.musayev", "bs.korkut", "en.itani", "en.sahih", "fa.fooladvand", "fa.makarem", "ur.jalandhry"];
var defRecite = "afasy";
var defTransAudio = "ibrahim";
var bismIncluded = ["ajamy", "parhizgar", "fa.fooladvand", "fa.makarem"];
var transList = {
    "am.sadiq": "ሳዲቅ & ሳኒ ሐቢብ",
    "ar.jalalayn": "تفسير الجلالين",
    "ar.muyassar": "تفسير المیسر",
    "sq.nahi": "Efendi Nahi",
    "sq.mehdiu": "Feti Mehdiu",
    "sq.ahmeti": "Sherif Ahmeti",
    "ber.mensur": "At Mensur",
    "az.mammadaliyev": "Məmmədəliyev & Bünyadov",
    "az.musayev": "Musayev",
    "bn.hoque": "জহুরুল হক",
    "bn.bengali": "মুহিউদ্দীন খান",
    "bs.korkut": "Korkut",
    "bs.mlivo": "Mlivo",
    "bg.theophanov": "Теофанов",
    "zh.jian": "Ma Jian",
    "zh.majian": "Ma Jian - Traditional",
    "cs.hrbek": "Hrbek",
    "cs.nykl": "Nykl",
    "dv.divehi": "ދިވެހި",
    "nl.keyzer": "Keyzer",
    "nl.leemhuis": "Leemhuis",
    "nl.siregar": "Siregar",
    "en.ahmedali": "Ahmed Ali",
    "en.ahmedraza": "Ahmed Raza Khan",
    "en.arberry": "Arberry",
    "en.asad": "Asad",
    "en.daryabadi": "Daryabadi",
    "en.hilali": "Hilali & Khan",
    "en.itani": "Itani",
    "en.maududi": "Maududi",
    "en.mubarakpuri": "Mubarakpuri",
    "en.pickthall": "Pickthall",
    "en.qarai": "Qarai",
    "en.qaribullah": "Qaribullah & Darwish",
    "en.sahih": "Sahih International",
    "en.sarwar": "Sarwar",
    "en.shakir": "Shakir",
    "en.wahiduddin": "Wahiduddin Khan",
    "en.yusufali": "Yusuf Ali",
    "en.transliteration": "Transliteration",
    "fr.hamidullah": "Hamidullah",
    "de.aburida": "Abu Rida",
    "de.bubenheim": "Bubenheim & Elyas",
    "de.khoury": "Khoury",
    "de.zaidan": "Zaidan",
    "ha.gumi": "Gumi",
    "hi.farooq": "फ़ारूक़ ख़ान & अहमद",
    "hi.hindi": "फ़ारूक़ ख़ान & नदवी",
    "id.indonesian": "Bahasa Indonesia",
    "id.jalalayn": "Tafsir Jalalayn",
    "id.muntakhab": "Quraish Shihab",
    "it.piccardo": "Piccardo",
    "ja.japanese": "Japanese",
    "ku.asan": "ته‌فسیری ئاسان",
    "ko.korean": "Korean",
    "ms.basmeih": "Basmeih",
    "ml.abdulhameed": "അബ്ദുല്‍ ഹമീദ് & പറപ്പൂര്‍",
    "ml.karakunnu": "കാരകുന്ന് & എളയാവൂര്",
    "no.berg": "Einar Berg",
    "ps.abdulwali": "عبدالولي",
    "fa.ansarian": "انصاریان",
    "fa.ayati": "آیتی",
    "fa.bahrampour": "بهرام پور",
    "fa.gharaati": "قرائتی",
    "fa.ghomshei": "الهی قمشه‌ای",
    "fa.khorramdel": "خرمدل",
    "fa.khorramshahi": "خرمشاهی",
    "fa.sadeqi": "صادقی تهرانی",
    "fa.safavi": "صفوی",
    "fa.fooladvand": "فولادوند",
    "fa.mojtabavi": "مجتبوی",
    "fa.moezzi": "معزی",
    "fa.makarem": "مکارم شیرازی",
    "pl.bielawskiego": "Bielawskiego",
    "pt.elhayek": "El-Hayek",
    "ro.grigore": "Grigore",
    "ru.abuadel": "Абу Адель",
    "ru.muntahab": "Аль-Мунтахаб",
    'ru.kalam': 'Калям Шариф',
    "ru.krachkovsky": "Крачковский",
    "ru.kuliev": "Кулиев",
    "ru.osmanov": "Османов",
    "ru.porokhova": "Порохова",
    "ru.sablukov": "Саблуков",
    "sd.amroti": "امروٽي",
    "so.abduh": "Abduh",
    "es.asad": "Asad",
    "es.bornez": "Bornez",
    "es.cortes": "Cortes",
    "es.garcia": "Garcia",
    "sw.barwani": "Al-Barwani",
    "sv.bernstrom": "Bernström",
    "tg.ayati": "Оятӣ",
    "ta.tamil": "தமிழ்",
    "tt.nugman": "Yakub Ibn Nugman",
    "th.thai": "ภาษาไทย",
    "tr.golpinarli": "Abdulbakî Gölpınarlı",
    "tr.bulac": "Alİ Bulaç",
    "tr.transliteration": "Çeviriyazı",
    "tr.diyanet": "Diyanet İşleri",
    "tr.vakfi": "Diyanet Vakfı",
    "tr.yuksel": "Edip Yüksel",
    "tr.yazir": "Elmalılı Hamdi Yazır",
    "tr.ozturk": "Öztürk",
    "tr.yildirim": "Suat Yıldırım",
    "tr.ates": "Süleyman Ateş",
    "ur.maududi": "ابوالاعلی مودودی",
    "ur.kanzuliman": "احمد رضا خان",
    "ur.ahmedali": "احمد علی",
    "ur.jalandhry": "جالندہری",
    "ur.qadri": "طاہر القادری",
    "ur.jawadi": "علامہ جوادی",
    "ur.junagarhi": "محمد جوناگڑھی",
    "ur.najafi": "محمد حسین نجفی",
    "ug.saleh": "محمد صالح",
    "uz.sodik": "Мухаммад Содик"
};
var defTrans = "def";
var popularTransList = ["en.sahih", "ar.muyassar", "az.musayev", "bn.bengali", "bs.korkut", "cs.hrbek", "de.bubenheim", "es.bornez", "fa.fooladvand", "hi.farooq", "id.indonesian", "ml.abdulhameed", "nl.leemhuis", "ru.osmanov", "sq.ahmeti", "tr.diyanet", "ur.maududi", "zh.jian"];
var langList = {
    ber: "Amazigh",
    sq: "Albanian",
    am: "Amharic",
    ar: "Arabic",
    az: "Azerbaijani",
    bn: "Bengali",
    bs: "Bosnian",
    bg: "Bulgarian",
    cs: "Czech",
    dv: "Divehi",
    nl: "Dutch",
    en: "English",
    fr: "French",
    de: "German",
    ha: "Hausa",
    hi: "Hindi",
    id: "Indonesian",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    ku: "Kurdish",
    ms: "Malay",
    ml: "Malayalam",
    no: "Norwegian",
    ps: "Pashto",
    fa: "Persian",
    pl: "Polish",
    pt: "Portuguese",
    ro: "Romanian",
    ru: "Russian",
    sd: "Sindhi",
    so: "Somali",
    es: "Spanish",
    sw: "Swahili",
    sv: "Swedish",
    tg: "Tajik",
    ta: "Tamil",
    tt: "Tatar",
    th: "Thai",
    tr: "Turkish",
    ur: "Urdu",
    ug: "Uyghur",
    uz: "Uzbek",
    zh: "Chinese"
};
var rtlLangs = ["ar", "fa", "ur", "ps", "ug", "sd", "ku", "dv"];
var noJustifyLangs = ["ml", "ta", "th"];
var langData = {
    def: {
        font: "SF Pro Text, Tahoma, Arial",
        sample: "In the name of Allah, the Entirely Merciful, the Especially Merciful"
    },
    ug: {
        font: "Microsoft Uighur, UKIJ Nasq, Scheherazade, Lateef, UKIJ Tuz, UKIJ Basma, Arial",
        sample: "ناھايىتى شەپقەتلىك ۋە مېھرىبان اﷲ نىڭ ئىسمى بىلەن باشلايمەن"
    },
    ur: {
        font: "Microsoft Uighur, Scheherazade, Lateef, Tahoma",
        sample: "شروع الله کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے"
    },
    ps: {
        font: "Microsoft Uighur, Scheherazade, Lateef, Tahoma",
        sample: "شروع الله کا نام لے کر جو بڑا مہربان نہایت رحم والا ہے"
    },
    ber: {
        font: "Amazigh Arial, Amazigh Times New Roman",
        sample: "Abrid n wid i T$atev; ur n wid i K isserfayen"
    },
    dv: {
        font: "A_Ilham, A_Randhoo, A_Faruma, A_Waheed, Mv Faseyha",
        sample: "رحمن ވަންތަ رحيم ވަންތަ اللَّه ގެ اسم ފުޅުން ފަށައިގަންނަމެވެ"
    },
    ku: {
        font: "Unikurd Web, Tahoma, Arial",
        sample: "Bismi Allah Arrahman الرحيم"
    }
};
var Consts = {
    Juz: "Juz",
    Aya: "Aya",
    Translation: "Translation",
    Recitation: "Recitation",
    Close: "Close",
    Cancel: "Cancel",
    Submit: "Submit",
    Remove: "Remove",
    "Next Page": "Next Page",
    "Previous Page": "Previous Page",
    Loading: "Loading",
    Default: "Default",
    Custom: "Custom",
    "Duration of Aya": "Duration of Aya",
    "{0} sec": "{0} sec",
    "{0} results in {1} ayas": "{0} results in {1} ayas",
    "Search string is empty.": "Search string is empty."
};
var QuranData = {
    Sura: [
        [],
        [0, 7, 5, 1, 'الفاتحة', "Al-Fatiha", 'The Opening', 'Meccan'],
        [7, 286, 87, 40, 'البقرة', "Al-Baqara", 'The Heifer', 'Medinan'],
        [293, 200, 89, 20, 'آل عمران', "Aal-i-Imran", 'The Family of Imran', 'Medinan'],
        [493, 176, 92, 24, 'النساء', "An-Nisa", 'The Women', 'Medinan'],
        [669, 120, 112, 16, 'المائدة', "Al-Ma'ida", 'The Table', 'Medinan'],
        [789, 165, 55, 20, 'الأنعام', "Al-An'am", 'The Cattle', 'Meccan'],
        [954, 206, 39, 24, 'الأعراف', "Al-A'raf", 'The Heights', 'Meccan'],
        [1160, 75, 88, 10, 'الأنفال', "Al-Anfal", 'The Spoils of War', 'Medinan'],
        [1235, 129, 113, 16, 'التوبة', "At-Tawba", 'The Repentance', 'Medinan'],
        [1364, 109, 51, 11, 'يونس', "Yunus", 'Jonah', 'Meccan'],
        [1473, 123, 52, 10, 'هود', "Hud", 'Hud', 'Meccan'],
        [1596, 111, 53, 12, 'يوسف', "Yusuf", 'Joseph', 'Meccan'],
        [1707, 43, 96, 6, 'الرعد', "Ar-Ra'd", 'The Thunder', 'Medinan'],
        [1750, 52, 72, 7, 'ابراهيم', "Ibrahim", 'Abraham', 'Meccan'],
        [1802, 99, 54, 6, 'الحجر', "Al-Hijr", 'The Stoneland', 'Meccan'],
        [1901, 128, 70, 16, 'النحل', "An-Nahl", 'The Honey Bees', 'Meccan'],
        [2029, 111, 50, 12, 'الإسراء', "Al-Isra", 'The Night Journey', 'Meccan'],
        [2140, 110, 69, 12, 'الكهف', "Al-Kahf", 'The Cave', 'Meccan'],
        [2250, 98, 44, 6, 'مريم', "Maryam", 'Mary', 'Meccan'],
        [2348, 135, 45, 8, 'طه', "Ta-Ha", 'Ta-Ha', 'Meccan'],
        [2483, 112, 73, 7, 'الأنبياء', "Al-Anbiya", 'The Prophets', 'Meccan'],
        [2595, 78, 103, 10, 'الحج', "Al-Hajj", 'The Pilgrimage', 'Medinan'],
        [2673, 118, 74, 6, 'المؤمنون', "Al-Mu'minun", 'The Believers', 'Meccan'],
        [2791, 64, 102, 9, 'النور', "An-Nur", 'The Light', 'Medinan'],
        [2855, 77, 42, 6, 'الفرقان', "Al-Furqan", 'The Criterion', 'Meccan'],
        [2932, 227, 47, 11, 'الشعراء', "Ash-Shu'ara", 'The Poets', 'Meccan'],
        [3159, 93, 48, 7, 'النمل', "An-Naml", 'The Ant', 'Meccan'],
        [3252, 88, 49, 9, 'القصص', "Al-Qasas", 'The Stories', 'Meccan'],
        [3340, 69, 85, 7, 'العنكبوت', "Al-Ankabut", 'The Spider', 'Meccan'],
        [3409, 60, 84, 6, 'الروم', "Ar-Rum", 'The Romans', 'Meccan'],
        [3469, 34, 57, 4, 'لقمان', "Luqman", 'Luqman', 'Meccan'],
        [3503, 30, 75, 3, 'السجدة', "As-Sajda", 'The Prostration', 'Meccan'],
        [3533, 73, 90, 9, 'الأحزاب', "Al-Ahzab", 'The Clans', 'Medinan'],
        [3606, 54, 58, 6, 'سبإ', "Saba", 'Sheba', 'Meccan'],
        [3660, 45, 43, 5, 'فاطر', "Fatir", 'The Originator', 'Meccan'],
        [3705, 83, 41, 5, 'يس', "Ya-Sin", 'Yaseen', 'Meccan'],
        [3788, 182, 56, 5, 'الصافات', "As-Saffat", 'Drawn up in Ranks', 'Meccan'],
        [3970, 88, 38, 5, 'ص', "Sad", 'The Letter Sad', 'Meccan'],
        [4058, 75, 59, 8, 'الزمر', "Az-Zumar", 'The Troops', 'Meccan'],
        [4133, 85, 60, 9, 'غافر', "Ghafir", 'The Forgiver', 'Meccan'],
        [4218, 54, 61, 6, 'فصلت', "Fussilat", 'Explained in Detail', 'Meccan'],
        [4272, 53, 62, 5, 'الشورى', "Ash-Shura", 'The Consultation', 'Meccan'],
        [4325, 89, 63, 7, 'الزخرف', "Az-Zukhruf", 'The Ornaments of Gold', 'Meccan'],
        [4414, 59, 64, 3, 'الدخان', "Ad-Dukhan", 'The Smoke', 'Meccan'],
        [4473, 37, 65, 4, 'الجاثية', "Al-Jathiya", 'Crouching', 'Meccan'],
        [4510, 35, 66, 4, 'الأحقاف', "Al-Ahqaf", 'The Dunes', 'Meccan'],
        [4545, 38, 95, 4, 'محمد', "Muhammad", 'Muhammad', 'Medinan'],
        [4583, 29, 111, 4, 'الفتح', "Al-Fath", 'The Victory', 'Medinan'],
        [4612, 18, 106, 2, 'الحجرات', "Al-Hujurat", 'The Inner Apartments', 'Medinan'],
        [4630, 45, 34, 3, 'ق', "Qaf", 'The Letter Qaf', 'Meccan'],
        [4675, 60, 67, 3, 'الذاريات', "Adh-Dhariyat", 'The Winnowing Winds', 'Meccan'],
        [4735, 49, 76, 2, 'الطور', "At-Tur", 'The Mount', 'Meccan'],
        [4784, 62, 23, 3, 'النجم', "An-Najm", 'The Star', 'Meccan'],
        [4846, 55, 37, 3, 'القمر', "Al-Qamar", 'The Moon', 'Meccan'],
        [4901, 78, 97, 3, 'الرحمن', "Ar-Rahman", 'The Beneficent', 'Medinan'],
        [4979, 96, 46, 3, 'الواقعة', "Al-Waqi'a", 'The Inevitable', 'Meccan'],
        [5075, 29, 94, 4, 'الحديد', "Al-Hadid", 'The Iron', 'Medinan'],
        [5104, 22, 105, 3, 'المجادلة', "Al-Mujadila", 'The Pleading', 'Medinan'],
        [5126, 24, 101, 3, 'الحشر', "Al-Hashr", 'The Exile', 'Medinan'],
        [5150, 13, 91, 2, 'الممتحنة', "Al-Mumtahina", 'Examining Her', 'Medinan'],
        [5163, 14, 109, 2, 'الصف', "As-Saff", 'The Ranks', 'Medinan'],
        [5177, 11, 110, 2, 'الجمعة', "Al-Jumu'a", 'Friday', 'Medinan'],
        [5188, 11, 104, 2, 'المنافقون', "Al-Munafiqun", 'The Hypocrites', 'Medinan'],
        [5199, 18, 108, 2, 'التغابن', "At-Taghabun", 'Mutual Disillusion', 'Medinan'],
        [5217, 12, 99, 2, 'الطلاق', "At-Talaq", 'Divorce', 'Medinan'],
        [5229, 12, 107, 2, 'التحريم', "At-Tahrim", 'The Prohibition', 'Medinan'],
        [5241, 30, 77, 2, 'الملك', "Al-Mulk", 'The Sovereignty', 'Meccan'],
        [5271, 52, 2, 2, 'القلم', "Al-Qalam", 'The Pen', 'Meccan'],
        [5323, 52, 78, 2, 'الحاقة', "Al-Haqqa", 'The Reality', 'Meccan'],
        [5375, 44, 79, 2, 'المعارج', "Al-Ma'arij", 'The Ascending Stairways', 'Meccan'],
        [5419, 28, 71, 2, 'نوح', "Nuh", 'Noah', 'Meccan'],
        [5447, 28, 40, 2, 'الجن', "Al-Jinn", 'The Jinn', 'Meccan'],
        [5475, 20, 3, 2, 'المزمل', "Al-Muzzammil", 'The Enshrouded One', 'Meccan'],
        [5495, 56, 4, 2, 'المدثر', "Al-Muddathir", 'The Cloaked One', 'Meccan'],
        [5551, 40, 31, 2, 'القيامة', "Al-Qiyama", 'The Resurrection', 'Meccan'],
        [5591, 31, 98, 2, 'الانسان', "Al-Insan", 'Human', 'Medinan'],
        [5622, 50, 33, 2, 'المرسلات', "Al-Mursalat", 'The Emissaries', 'Meccan'],
        [5672, 40, 80, 2, 'النبإ', "An-Naba'", 'The Announcement', 'Meccan'],
        [5712, 46, 81, 2, 'النازعات', "An-Nazi'at", 'Those Who Drag Forth', 'Meccan'],
        [5758, 42, 24, 1, 'عبس', "Abasa", 'He Frowned', 'Meccan'],
        [5800, 29, 7, 1, 'التكوير', "At-Takwir", 'The Folding Up', 'Meccan'],
        [5829, 19, 82, 1, 'الإنفطار', "Al-Infitar", 'The Cleaving', 'Meccan'],
        [5848, 36, 86, 1, 'المطففين', "Al-Mutaffifin", 'Defrauding', 'Meccan'],
        [5884, 25, 83, 1, 'الإنشقاق', "Al-Inshiqaq", 'The Splitting Open', 'Meccan'],
        [5909, 22, 27, 1, 'البروج', "Al-Buruj", 'The Constellations', 'Meccan'],
        [5931, 17, 36, 1, 'الطارق', "At-Tariq", 'The Morning Star', 'Meccan'],
        [5948, 19, 8, 1, 'الأعلى', "Al-A'la", 'The Most High', 'Meccan'],
        [5967, 26, 68, 1, 'الغاشية', "Al-Ghashiya", 'The Overwhelming', 'Meccan'],
        [5993, 30, 10, 1, 'الفجر', "Al-Fajr", 'The Dawn', 'Meccan'],
        [6023, 20, 35, 1, 'البلد', "Al-Balad", 'The City', 'Meccan'],
        [6043, 15, 26, 1, 'الشمس', "Ash-Shams", 'The Sun', 'Meccan'],
        [6058, 21, 9, 1, 'الليل', "Al-Lail", 'The Night', 'Meccan'],
        [6079, 11, 11, 1, 'الضحى', "Ad-Dhuha", 'The Morning Hours', 'Meccan'],
        [6090, 8, 12, 1, 'الشرح', "Ash-Sharh", 'The Consolation', 'Meccan'],
        [6098, 8, 28, 1, 'التين', "At-Tin", 'The Fig', 'Meccan'],
        [6106, 19, 1, 1, 'العلق', "Al-Alaq", 'The Clot', 'Meccan'],
        [6125, 5, 25, 1, 'القدر', "Al-Qadr", 'The Power, Fate', 'Meccan'],
        [6130, 8, 100, 1, 'البينة', "Al-Bayyina", 'The Evidence', 'Medinan'],
        [6138, 8, 93, 1, 'الزلزلة', "Az-Zalzala", 'The Earthquake', 'Medinan'],
        [6146, 11, 14, 1, 'العاديات', "Al-Adiyat", 'The Chargers', 'Meccan'],
        [6157, 11, 30, 1, 'القارعة', "Al-Qari'a", 'The Calamity', 'Meccan'],
        [6168, 8, 16, 1, 'التكاثر', "At-Takathur", 'Competition', 'Meccan'],
        [6176, 3, 13, 1, 'العصر', "Al-Asr", 'The Time', 'Meccan'],
        [6179, 9, 32, 1, 'الهمزة', "Al-Humaza", 'The Traducer', 'Meccan'],
        [6188, 5, 19, 1, 'الفيل', "Al-Fil", 'The Elephant', 'Meccan'],
        [6193, 4, 29, 1, 'قريش', "Quraysh", 'Quraysh', 'Meccan'],
        [6197, 7, 17, 1, 'الماعون', "Al-Ma'un", 'Almsgiving', 'Meccan'],
        [6204, 3, 15, 1, 'الكوثر', "Al-Kawthar", 'Abundance', 'Meccan'],
        [6207, 6, 18, 1, 'الكافرون', "Al-Kafirun", 'The Disbelievers', 'Meccan'],
        [6213, 3, 114, 1, 'النصر', "An-Nasr", 'Divine Support', 'Medinan'],
        [6216, 5, 6, 1, 'المسد', "Al-Masad", 'The Palm Fibre', 'Meccan'],
        [6221, 4, 22, 1, 'الإخلاص', "Al-Ikhlas", 'Purity of Faith', 'Meccan'],
        [6225, 5, 20, 1, 'الفلق', "Al-Falaq", 'The Dawn', 'Meccan'],
        [6230, 6, 21, 1, 'الناس', "An-Nas", 'Mankind', 'Meccan'],
        [6236, 1]
    ],
    Juz: [
        [],
        [1, 1],
        [2, 142],
        [2, 253],
        [3, 93],
        [4, 24],
        [4, 148],
        [5, 82],
        [6, 111],
        [7, 88],
        [8, 41],
        [9, 93],
        [11, 6],
        [12, 53],
        [15, 1],
        [17, 1],
        [18, 75],
        [21, 1],
        [23, 1],
        [25, 21],
        [27, 56],
        [29, 46],
        [33, 31],
        [36, 28],
        [39, 32],
        [41, 47],
        [46, 1],
        [51, 31],
        [58, 1],
        [67, 1],
        [78, 1],
        [115, 1]
    ],
    Page: [
        [],
        [1, 1],
        [2, 1],
        [2, 6],
        [2, 17],
        [2, 25],
        [2, 30],
        [2, 38],
        [2, 49],
        [2, 58],
        [2, 62],
        [2, 70],
        [2, 77],
        [2, 84],
        [2, 89],
        [2, 94],
        [2, 102],
        [2, 106],
        [2, 113],
        [2, 120],
        [2, 127],
        [2, 135],
        [2, 142],
        [2, 146],
        [2, 154],
        [2, 164],
        [2, 170],
        [2, 177],
        [2, 182],
        [2, 187],
        [2, 191],
        [2, 197],
        [2, 203],
        [2, 211],
        [2, 216],
        [2, 220],
        [2, 225],
        [2, 231],
        [2, 234],
        [2, 238],
        [2, 246],
        [2, 249],
        [2, 253],
        [2, 257],
        [2, 260],
        [2, 265],
        [2, 270],
        [2, 275],
        [2, 282],
        [2, 283],
        [3, 1],
        [3, 10],
        [3, 16],
        [3, 23],
        [3, 30],
        [3, 38],
        [3, 46],
        [3, 53],
        [3, 62],
        [3, 71],
        [3, 78],
        [3, 84],
        [3, 92],
        [3, 101],
        [3, 109],
        [3, 116],
        [3, 122],
        [3, 133],
        [3, 141],
        [3, 149],
        [3, 154],
        [3, 158],
        [3, 166],
        [3, 174],
        [3, 181],
        [3, 187],
        [3, 195],
        [4, 1],
        [4, 7],
        [4, 12],
        [4, 15],
        [4, 20],
        [4, 24],
        [4, 27],
        [4, 34],
        [4, 38],
        [4, 45],
        [4, 52],
        [4, 60],
        [4, 66],
        [4, 75],
        [4, 80],
        [4, 87],
        [4, 92],
        [4, 95],
        [4, 102],
        [4, 106],
        [4, 114],
        [4, 122],
        [4, 128],
        [4, 135],
        [4, 141],
        [4, 148],
        [4, 155],
        [4, 163],
        [4, 171],
        [4, 176],
        [5, 3],
        [5, 6],
        [5, 10],
        [5, 14],
        [5, 18],
        [5, 24],
        [5, 32],
        [5, 37],
        [5, 42],
        [5, 46],
        [5, 51],
        [5, 58],
        [5, 65],
        [5, 71],
        [5, 77],
        [5, 83],
        [5, 90],
        [5, 96],
        [5, 104],
        [5, 109],
        [5, 114],
        [6, 1],
        [6, 9],
        [6, 19],
        [6, 28],
        [6, 36],
        [6, 45],
        [6, 53],
        [6, 60],
        [6, 69],
        [6, 74],
        [6, 82],
        [6, 91],
        [6, 95],
        [6, 102],
        [6, 111],
        [6, 119],
        [6, 125],
        [6, 132],
        [6, 138],
        [6, 143],
        [6, 147],
        [6, 152],
        [6, 158],
        [7, 1],
        [7, 12],
        [7, 23],
        [7, 31],
        [7, 38],
        [7, 44],
        [7, 52],
        [7, 58],
        [7, 68],
        [7, 74],
        [7, 82],
        [7, 88],
        [7, 96],
        [7, 105],
        [7, 121],
        [7, 131],
        [7, 138],
        [7, 144],
        [7, 150],
        [7, 156],
        [7, 160],
        [7, 164],
        [7, 171],
        [7, 179],
        [7, 188],
        [7, 196],
        [8, 1],
        [8, 9],
        [8, 17],
        [8, 26],
        [8, 34],
        [8, 41],
        [8, 46],
        [8, 53],
        [8, 62],
        [8, 70],
        [9, 1],
        [9, 7],
        [9, 14],
        [9, 21],
        [9, 27],
        [9, 32],
        [9, 37],
        [9, 41],
        [9, 48],
        [9, 55],
        [9, 62],
        [9, 69],
        [9, 73],
        [9, 80],
        [9, 87],
        [9, 94],
        [9, 100],
        [9, 107],
        [9, 112],
        [9, 118],
        [9, 123],
        [10, 1],
        [10, 7],
        [10, 15],
        [10, 21],
        [10, 26],
        [10, 34],
        [10, 43],
        [10, 54],
        [10, 62],
        [10, 71],
        [10, 79],
        [10, 89],
        [10, 98],
        [10, 107],
        [11, 6],
        [11, 13],
        [11, 20],
        [11, 29],
        [11, 38],
        [11, 46],
        [11, 54],
        [11, 63],
        [11, 72],
        [11, 82],
        [11, 89],
        [11, 98],
        [11, 109],
        [11, 118],
        [12, 5],
        [12, 15],
        [12, 23],
        [12, 31],
        [12, 38],
        [12, 44],
        [12, 53],
        [12, 64],
        [12, 70],
        [12, 79],
        [12, 87],
        [12, 96],
        [12, 104],
        [13, 1],
        [13, 6],
        [13, 14],
        [13, 19],
        [13, 29],
        [13, 35],
        [13, 43],
        [14, 6],
        [14, 11],
        [14, 19],
        [14, 25],
        [14, 34],
        [14, 43],
        [15, 1],
        [15, 16],
        [15, 32],
        [15, 52],
        [15, 71],
        [15, 91],
        [16, 7],
        [16, 15],
        [16, 27],
        [16, 35],
        [16, 43],
        [16, 55],
        [16, 65],
        [16, 73],
        [16, 80],
        [16, 88],
        [16, 94],
        [16, 103],
        [16, 111],
        [16, 119],
        [17, 1],
        [17, 8],
        [17, 18],
        [17, 28],
        [17, 39],
        [17, 50],
        [17, 59],
        [17, 67],
        [17, 76],
        [17, 87],
        [17, 97],
        [17, 105],
        [18, 5],
        [18, 16],
        [18, 21],
        [18, 28],
        [18, 35],
        [18, 46],
        [18, 54],
        [18, 62],
        [18, 75],
        [18, 84],
        [18, 98],
        [19, 1],
        [19, 12],
        [19, 26],
        [19, 39],
        [19, 52],
        [19, 65],
        [19, 77],
        [19, 96],
        [20, 13],
        [20, 38],
        [20, 52],
        [20, 65],
        [20, 77],
        [20, 88],
        [20, 99],
        [20, 114],
        [20, 126],
        [21, 1],
        [21, 11],
        [21, 25],
        [21, 36],
        [21, 45],
        [21, 58],
        [21, 73],
        [21, 82],
        [21, 91],
        [21, 102],
        [22, 1],
        [22, 6],
        [22, 16],
        [22, 24],
        [22, 31],
        [22, 39],
        [22, 47],
        [22, 56],
        [22, 65],
        [22, 73],
        [23, 1],
        [23, 18],
        [23, 28],
        [23, 43],
        [23, 60],
        [23, 75],
        [23, 90],
        [23, 105],
        [24, 1],
        [24, 11],
        [24, 21],
        [24, 28],
        [24, 32],
        [24, 37],
        [24, 44],
        [24, 54],
        [24, 59],
        [24, 62],
        [25, 3],
        [25, 12],
        [25, 21],
        [25, 33],
        [25, 44],
        [25, 56],
        [25, 68],
        [26, 1],
        [26, 20],
        [26, 40],
        [26, 61],
        [26, 84],
        [26, 112],
        [26, 137],
        [26, 160],
        [26, 184],
        [26, 207],
        [27, 1],
        [27, 14],
        [27, 23],
        [27, 36],
        [27, 45],
        [27, 56],
        [27, 64],
        [27, 77],
        [27, 89],
        [28, 6],
        [28, 14],
        [28, 22],
        [28, 29],
        [28, 36],
        [28, 44],
        [28, 51],
        [28, 60],
        [28, 71],
        [28, 78],
        [28, 85],
        [29, 7],
        [29, 15],
        [29, 24],
        [29, 31],
        [29, 39],
        [29, 46],
        [29, 53],
        [29, 64],
        [30, 6],
        [30, 16],
        [30, 25],
        [30, 33],
        [30, 42],
        [30, 51],
        [31, 1],
        [31, 12],
        [31, 20],
        [31, 29],
        [32, 1],
        [32, 12],
        [32, 21],
        [33, 1],
        [33, 7],
        [33, 16],
        [33, 23],
        [33, 31],
        [33, 36],
        [33, 44],
        [33, 51],
        [33, 55],
        [33, 63],
        [34, 1],
        [34, 8],
        [34, 15],
        [34, 23],
        [34, 32],
        [34, 40],
        [34, 49],
        [35, 4],
        [35, 12],
        [35, 19],
        [35, 31],
        [35, 39],
        [35, 45],
        [36, 13],
        [36, 28],
        [36, 41],
        [36, 55],
        [36, 71],
        [37, 1],
        [37, 25],
        [37, 52],
        [37, 77],
        [37, 103],
        [37, 127],
        [37, 154],
        [38, 1],
        [38, 17],
        [38, 27],
        [38, 43],
        [38, 62],
        [38, 84],
        [39, 6],
        [39, 11],
        [39, 22],
        [39, 32],
        [39, 41],
        [39, 48],
        [39, 57],
        [39, 68],
        [39, 75],
        [40, 8],
        [40, 17],
        [40, 26],
        [40, 34],
        [40, 41],
        [40, 50],
        [40, 59],
        [40, 67],
        [40, 78],
        [41, 1],
        [41, 12],
        [41, 21],
        [41, 30],
        [41, 39],
        [41, 47],
        [42, 1],
        [42, 11],
        [42, 16],
        [42, 23],
        [42, 32],
        [42, 45],
        [42, 52],
        [43, 11],
        [43, 23],
        [43, 34],
        [43, 48],
        [43, 61],
        [43, 74],
        [44, 1],
        [44, 19],
        [44, 40],
        [45, 1],
        [45, 14],
        [45, 23],
        [45, 33],
        [46, 6],
        [46, 15],
        [46, 21],
        [46, 29],
        [47, 1],
        [47, 12],
        [47, 20],
        [47, 30],
        [48, 1],
        [48, 10],
        [48, 16],
        [48, 24],
        [48, 29],
        [49, 5],
        [49, 12],
        [50, 1],
        [50, 16],
        [50, 36],
        [51, 7],
        [51, 31],
        [51, 52],
        [52, 15],
        [52, 32],
        [53, 1],
        [53, 27],
        [53, 45],
        [54, 7],
        [54, 28],
        [54, 50],
        [55, 17],
        [55, 41],
        [55, 68],
        [56, 17],
        [56, 51],
        [56, 77],
        [57, 4],
        [57, 12],
        [57, 19],
        [57, 25],
        [58, 1],
        [58, 7],
        [58, 12],
        [58, 22],
        [59, 4],
        [59, 10],
        [59, 17],
        [60, 1],
        [60, 6],
        [60, 12],
        [61, 6],
        [62, 1],
        [62, 9],
        [63, 5],
        [64, 1],
        [64, 10],
        [65, 1],
        [65, 6],
        [66, 1],
        [66, 8],
        [67, 1],
        [67, 13],
        [67, 27],
        [68, 16],
        [68, 43],
        [69, 9],
        [69, 35],
        [70, 11],
        [70, 40],
        [71, 11],
        [72, 1],
        [72, 14],
        [73, 1],
        [73, 20],
        [74, 18],
        [74, 48],
        [75, 20],
        [76, 6],
        [76, 26],
        [77, 20],
        [78, 1],
        [78, 31],
        [79, 16],
        [80, 1],
        [81, 1],
        [82, 1],
        [83, 7],
        [83, 35],
        [85, 1],
        [86, 1],
        [87, 16],
        [89, 1],
        [89, 24],
        [91, 1],
        [92, 15],
        [95, 1],
        [97, 1],
        [98, 8],
        [100, 10],
        [103, 1],
        [106, 1],
        [109, 1],
        [112, 1],
        [115, 1]
    ]
};
var RootList = 'آدم آزر ا أبابيل ابب ابد ابراهيم ابريق ابق ابل إبليس ابو ابى اتى اثث اثر اثل اثم اجج اجر اجل احد احزاب احقاف احمد اخذ اخر اخو ادد ادريس ادى اذ اذا اذن اذى ارب ارث ارض ارك ارم ازر ازز ازف اسباط استبرق اسحاق اسر اسرائيل اسس اسف اسلام اسماعيل اسن اسو اسى اشر اصر اصل أعراف افف افق افك افل اقصو اكل الا التى الذان الذى الذين الف الك اللاتى اللائى الل الله الم اله الو الى الياس ال‌ياسين اليسع ام اما أما امت امد امر امس امل امم امن امو ان انا انت انتم انتما انث انجيل انس انف انم انن اننى انى اهل او اوب اود اولاء اول اولى اون اوه اوى اى اياك اياكم ايان ايانا اياه اياهم اياى ايد ايكه ايم اين ايوب ائى ايى ب بابل بتر بتك بتل بثث بجس بحث بحر بخس بخع بخل بدء بدر بدع بدل بدن بدو بذر برء برج برح برد برر برز برزخ برص برق برك برم بره برهن بزغ بسر بسس بسط بسق بسل بسم بشر بصر بصل بضع بطء بطر بطش بطل بطن بعث بعثر بعد بعر بعض بعل بغت بغض بغل بغى بقر بقع بقل بقى بكر بكم بكة بكى بل بلد بلس بلع بلغ بلو بلى بنن بنو بنى بهت بهج بهل بهم بوء بوب بور بول بيت بيد بئر بئس بيض بيع بين ت تابوت تبب تبت تبر تبع تجر تحت ترب ترف ترق ترقوه ترك تسع تعس تفث تقن تلك تلكم تلكما تلل تلو تمم تنور توب تور توراة تين تيه ثبت ثبر ثبط ثبى ثجج ثخن ثرب ثرى ثعب ثقب ثقف ثقل ثلث ثلل ثم ثمر ثمم ثمن ثمود ثنى ثوب ثور ثوى ثيب جالوت جبب جبت جبر جبريل جبل جبن جبه جبى جثث جثم جثو جحد جحم جدث جدد جدر جدل جذذ جذع جذو جرح جرد جرر جرز جرع جرف جرم جرى جزء جزع جزى جسد جسس جسم جعل جفء جفن جفو جلب جلد جلس جلل جلو جمح جمد جمع جمعة جمل جمم جناح جنب جنح جند جنف جنن جنى جهد جهر جهز جهل جهنم جوب جود جودى جور جوز جوس جوع جوف جوو جىء جيب جيد جئر ح حبب حبر حبس حبط حبك حبل حتم حتى حثث حجب حجج حجر حجز حدب حدث حدد حدق حذر حرب حرث حرج حرد حرر حرس حرص حرض حرف حرق حرك حرم حرى حرير حزب حزن حسب حسد حسر حسس حسم حسن حشر حصب حصحص حصد حصر حصل حصن حصى حضر حضض حطب حطط حطم حظر حظظ حفد حفر حفظ حفف حفو حقب حقق حكم حلف حلق حلقم حلل حلم حلى حمء حمد حمر حمل حمم حمى حنث حنجر حنذ حنف حنك حنن حنين حواريون حوب حوت حوج حوذ حور حوش حوط حول حوى حيث حيد حير حيز حيص حيض حيف حيق حين حيى خبء خبت خبث خبر خبز خبط خبل خبو ختر ختم خدد خدع خدن خذل خرب خرج خردل خرر خرص خرطم خرق خزن خزى خسء خسر خسف خشب خشع خشى خصص خصف خصم خضد خضر خضع خطء خطب خطط خطف خطو خفت خفض خفف خفى خلد خلص خلط خلع خلف خلق خلل خلو خمد خمر خمس خمص خمط خنزر خنس خنق خور خوض خوف خول خون خوى خيب خير خيط خيل خيم داود دبب دبر دثر دحر دحض دحو دحى دخر دخل دخن درء درج درر درس درك درهم درى دسر دسس دسو دعع دعو دفء دفع دفق دكك دلك دلل دلو دمدم دمر دمع دمغ دمم دمو دمى دنر دنو دهر دهق دهم دهن دهى دور دول دوم دون دئب دين ذا ذات ذانك ذبب ذبح ذبذب ذخر ذرء ذرر ذرع ذرو ذعن ذقن ذكر ذكو ذلك ذلكم ذلكما ذلكن ذلل ذمم ذنب ذهب ذهل ذو ذوا ذود ذوق ذوى ذى ذئب ذيع ذئم ر رب ربب ربح ربص ربط ربع ربو رتع رتق رتل رجج رجز رجس رجع رجف رجل رجم رجو رحب رحق رحل رحم رحمان رخو ردء ردد ردف ردم ردى رذل رزق رس رسخ رسل رسو رشد رصد رصص رضع رضو رطب رعب رعد رعى رغب رغد رغم رفت رفث رفد رفرف رفع رفق رقب رقد رقق رقم رقى ركب ركد ركز ركس ركض ركع ركم ركن رمح رمد رمز رمضان رمم رمن رمى رهب رهط رهق رهن رهو روح رود روض روع روغ روم رويد ريب رئس ريش ريع رئف رين رئى زبد زبر زبن زبور زجج زجر زجو زحزح زحف زخرف زربيه زرع زرق زرى زعم زفر زفف زقم زكريا زكو زلزل زلف زلق زلل زلم زمر زمل زمهر زنجبيل زنم زنى زهد زهر زهق زوج زود زور زول زيت زيتون زيد زيغ زيل زين س سال سامرى سبإ سبب سبت سبح سبط سبع سبغ سبق سبل ستت ستر سجد سجر سجل سجن سجو سجيل سحب سحت سحر سحق سحل سخر سخط سدد سدر سدس سدى سراب سرادق سرب سربال سرج سرح سرد سرر سرع سرف سرق سرمد سرى سطح سطر سطو سعد سعر سعى سغب سفح سفر سفع سفك سفل سفن سفه سقر سقط سقف سقم سقى سكب سكت سكر سكن سلب سلح سلخ سلسبيل سلسل سلط سلف سلق سلك سلل سلم سلو سليمان سمد سمر سمع سمك سمم سمن سمو سنبل سند سندس سنم سنن سنه سنو سهر سهل سهم سهو سواع سوء سوح سود سور سوط سوع سوغ سوف سوق سوم سوى سيب سيح سير سئل سيل سئم سيناء سينين شبه شتت شتو شجر شحح شحم شحن شخص شدد شرب شرح شرد شرذم شرر شرط شرع شرق شرك شرى شطء شطر شطط شطن شعب شعر شعرى شعل شعيب شغف شغل شفع شفق شفه شفو شفى شقق شقو شقى شكر شكس شكك شكل شكو شمت شمخ شمس شمل شمئز شنء شهب شهد شهر شهق شهو شوب شور شوظ شوك شوى شىء شيب شيخ شيد شيع شئم شئن ص صابئون صالح صبب صبح صبر صبع صبغ صبو صحب صحف صخخ صخر صدد صدر صدع صدف صدق صدى صرح صرخ صرر صرصر صرط صرع صرف صرم صعد صعر صعق صغر صغو صفا صفح صفد صفر صفصف صفف صفن صفو صكك صلب صلح صلد صلصل صلو صلى صمت صمد صمع صمم صنع صنم صنو صهر صوب صوت صور صوع صوف صوم صيح صيد صير صيص صيف ضبح ضجع ضحك ضحو ضحى ضدد ضرب ضرر ضرع ضعف ضغث ضغن ضفدع ضلل ضمر ضمم ضنك ضنن ضهء ضوء ضير ضيز ضيع ضيف ضيق ضئن ط طاغوت طالوت طبع طبق طحو طحى طرح طرد طرف طرق طرو طعم طعن طغو طغى طفء طفف طفق طفل طلب طلح طلع طلق طلل طمث طمس طمع طمم طمن طمئن طهر طود طور طوع طوف طوفان طوق طول طوى طيب طير طين ظعن ظفر ظلل ظلم ظما ظمء ظنن ظهر ع عاد عبء عبث عبد عبر عبس عبقر عتب عتد عتق عتل عتو عثر عثو عجب عجز عجف عجل عجم عدد عدس عدل عدن عدو عذب عذر عرب عرج عرجن عرجون عرر عرش عرض عرف عرفات عرم عرو عرى عزب عزر عزز عزل عزم عزو عزى عزير عسر عسعس عسل عسى عشر عشو عصب عصر عصف عصم عصو عصى عضد عضض عضل عضو عطف عطل عطو عظم عفر عفف عفو عقب عقد عقر عقل عقم عكف علق علم علن علو على عمد عمر عمران عمق عمل عمم عمه عمى عن عنب عنت عند عنق عنكب عنكبوت عنو عنى عهد عهن عوج عود عوذ عور عوق عول عوم عون عيب عير عيسى عيش عيل عين عيى غبر غبن غثو غدر غدق غدو غرب غرر غرف غرق غرم غرو غزل غزو غسق غسل غشو غشى غصب غصص غضب غضض غطش غطو غفر غفل غلب غلظ غلف غلق غلل غلم غلو غلى غمر غمز غمض غمم غنم غنى غوث غور غوص غوط غول غوى غيب غيث غير غيض غيظ ف فتء فتح فتر فتق فتل فتن فتو فتى فجج فجر فجو فحش فخر فدى فرت فرث فرج فرح فرد فردوس فرر فرش فرض فرط فرع فرعون فرغ فرق فره فرى فزز فزع فسح فسد فسر فسق فشل فصح فصل فصم فضح فضض فضل فضو فطر فظظ فعل فقد فقر فقع فقه فكر فكك فكه فلح فلق فلك فلن فند فنن فنى فهم فوت فوج فور فوز فوض فوق فوم فوه فى فىء فئد فيض فيل فئى ق قارون قبح قبر قبس قبض قبل قتر قتل قثء قحم قد قدح قدد قدر قدس قدم قدو قذف قرآن قرء قرب قرح قرد قرر قرض قرطس قرع قرف قرن قرنين قرى قريش قسر قسط قسطس قسم قسو قسور قسيسين قشعر قصد قصر قصص قصف قصم قصو قضب قضض قضى قطر قطط قطع قطف قطمر قعد قعر قفل قفو قلب قلد قلع قلل قلم قلى قمح قمر قمص قمطر قمع قمل قنت قنط قنطر قنع قنو قنى قهر قوب قوت قوس قوع قول قوم قوى قيض قيل ك كافور كان كاين كبب كبت كبد كبر كبكب كتب كتم كثب كثر كدح كدر كدى كذب كرب كرر كرس كرم كره كسب كسد كسف كسل كسو كشط كشف كظم كعب كعبة كفت كفر كفف كفل كفو كفى كلا كلء كلب كلتا كلح كلف كلل كلم كلو كم كما كمل كمم كمه كن كند كنز كنس كنن كهف كهل كهن كوب كود كور كوكب كون كوى كى كيد كئس كيف كيل كين لا لات ل لبب لبث لبد لبس لبن لجء لجج لحد لحف لحق لحم لحن لحى لدد لدن لدى لذذ لزب لزم لسن لطف لظى لعب لعل لعن لغب لغو لفت لفح لفظ لفف لفو لقب لقح لقط لقف لقم لقمان لقى لكن لم لما لمح لمز لمس لمم لن لهب لهث لهم لهو لو لوت لوح لوذ لوط لولا لولو لوم لون لوى ليت ليس لئك ليل لين م ما ماجوج ماروت مالك متع متن متى مثل مجد مجوس محص محق محل محمد محن محو مخر مخض مدد مدن مدين مدينه مرء مرج مرح مرد مرر مرض مروه مرى مريم مزج مزق مزن مسح مسخ مسد مسس مسك مسو مسيح مشج مشعر مشى مصر مضغ مضى مطر مطو مع معز معن معى مقت مكث مكر مكن مكة مكو ملء ملح ملق ملك ملل ملو من مناة منع منن منى مهد مهل مهما مهن موت مؤتفكة موج مور موسى مول موه ميد مير ميز ميكال ميل مئى ن نا نبء نبت نبذ نبز نبط نبع نبو نتق نثر نجد نجس نجم نجو نحب نحت نحر نحس نحل نحن نخر نخل ندد ندم ندو ندى نذر نزع نزغ نزف نزل نسء نسب نسخ نسر نسف نسك نسل نسو نسى نشء نشر نشز نشط نصارى نصب نصت نصح نصر نصرانى نصف نصو نصى نضج نضخ نضد نضر نطح نطف نطق نظر نعج نعس نعق نعل نعم نغض نفث نفح نفخ نفد نفذ نفر نفس نفش نفع نفق نفل نفى نقب نقذ نقر نقص نقض نقع نقم نكب نكث نكح نكد نكر نكس نكص نكف نكل نمرق نمل نمم نن نهج نهر نهى نوء نوب نوح نور نوش نوص نوق نوم نون نوى نيل نئى ه ها هاء هات هاتوا هاتين هاروت هارون هامان هاؤم هبط هبو هتى هجد هجر هجع هدد هدم هدهد هدى هذا هذان هذه هرب هرع هزء هزز هزل هزم هشش هشم هضم هطع هكذا هل هلع هلك هلل هلم هم هما همد همر همز همس همم همن هن هنا هنالك هنء هو هود هور هؤلاء هون هوى هى هىء هيت هيج هيل هيم هيهات و وبر وبق وبل وتد وتر وتن وثق وثن وجب وجد وجس وجف وجل وجه وحد وحش وحى ودد ودع ودق ودى وذر ورث ورد ورق ورى وزر وزع وزن وسط وسع وسق وسل وسم وسن وسوس وشى وصب وصد وصف وصل وصى وضع وضن وطء وطر وطن وعد وعظ وعلن وعى وفد وفر وفض وفق وفى وقب وقت وقد وقذ وقر وقع وقف وقى وكء وكد وكز وكل ولج ولد وله ولى ونى وهب وهج وهن وهى وى وئد وئل ويل ى يا ياجوج ياقوت يبس يتم يثرب يحيى يدى يسر يعقوب يعوق يغوث يقطن يقطين يقظ يقن يمم يمن ينع يهود يوسف يوم يونس يى يئس ';
var UChars = {
    HAMZA: "\u0621",
    ALEF_WITH_MADDA_ABOVE: "\u0622",
    ALEF_WITH_HAMZA_ABOVE: "\u0623",
    WAW_WITH_HAMZA_ABOVE: "\u0624",
    ALEF_WITH_HAMZA_BELOW: "\u0625",
    YEH_WITH_HAMZA: "\u0626",
    ALEF: "\u0627",
    BEH: "\u0628",
    MARBUTA: "\u0629",
    TEH: "\u062A",
    THEH: "\u062B",
    JEMM: "\u062C",
    HAH: "\u062D",
    KHAH: "\u062E",
    DAL: "\u062F",
    THAL: "\u0630",
    REH: "\u0631",
    ZAIN: "\u0632",
    SEEN: "\u0633",
    SHEEN: "\u0634",
    SAD: "\u0635",
    DAD: "\u0636",
    TAH: "\u0637",
    ZAH: "\u0638",
    AIN: "\u0639",
    GHAIN: "\u063A",
    TATWEEL: "\u0640",
    FEH: "\u0641",
    QAF: "\u0642",
    KAF: "\u0643",
    LAM: "\u0644",
    MEEM: "\u0645",
    NOON: "\u0646",
    HEH: "\u0647",
    WAW: "\u0648",
    ALEF_MAKSURA: "\u0649",
    YEH: "\u064A",
    FATHATAN: "\u064B",
    DAMMATAN: "\u064C",
    KASRATAN: "\u064D",
    FATHA: "\u064E",
    DAMMA: "\u064F",
    KASRA: "\u0650",
    SHADDA: "\u0651",
    SUKUN: "\u0652",
    MADDA: "\u0653",
    HAMZA_ABOVE: "\u0654",
    HAMZA_BELOW: "\u0655",
    SMALL_ALEF: "\u065F",
    SUPERSCRIPT_ALEF: "\u0670",
    ALEF_WASLA: "\u0671",
    HIGH_SALA: "\u06D6",
    HIGH_GHALA: "\u06D7",
    HIGH_MEEM_INITIAL_FORM: "\u06D8",
    HIGH_LA: "\u06D9",
    HIGH_JEMM: "\u06DA",
    HIGH_THREE_DOT: "\u06DB",
    HIGH_SEEN: "\u06DC",
    RUB_EL_HIZB: "\u06DE",
    HIGH_ROUNDED_ZERO: "\u06DF",
    HIGH_UPRIGHT_ZERO: "\u06E0",
    HIGH_DOTLESS_KHAH: "\u06E1",
    HIGH_MEEM: "\u06E2",
    LOW_SEEN: "\u06E3",
    SMALL_WAW: "\u06E5",
    SMALL_YEH: "\u06E6",
    HIGH_YEH: "\u06E7",
    HIGH_NOON: "\u06E8",
    SAJDAH: "\u06E9",
    LOW_STOP: "\u06EA",
    HIGH_STOP: "\u06EB",
    HIGH_STOP_FILLED: "\u06EC",
    LOW_MEEM: "\u06ED",
    HAMZA_ABOVE_ALEF: "\u0675",
    DOTLESS_BEH: "\u066E",
    ZWNJ: "\u200C",
    NBSP: "\u00A0",
    NNBSP: "\u202F",
    FARSI_YEH: "\u06CC",
    FARSI_KEHEH: "\u06A9",
    HEH_DOACHASHMEE: "\u06BE",
    SWASH_KAF: "\u06AA",
    YEH_BARREE: "\u06D2"
};
var UGroups = {
    LETTER: "[$HAMZA-$YEH]",
    HARAKA: "[$FATHATAN-$MADDA$SUPERSCRIPT_ALEF]",
    HARAKAT: "[$FATHATAN-$MADDA$SUPERSCRIPT_ALEF$TATWEEL]",
    SPACE: "[\\s$HIGH_SALA-$LOW_MEEM]*\\s",
    HAMZA_SHAPE: "[$HAMZA_ABOVE$HAMZA$ALEF_WITH_HAMZA_ABOVE-$YEH_WITH_HAMZA]",
    LETTER_HARAKA: "[$HAMZA-$ALEF_WASLA]"
};
jQuery.cookie = function(e, b, a) {
    if (arguments.length > 1 && (b === null || typeof b !== "object")) {
        a = jQuery.extend({}, a);
        if (b === null) {
            a.expires = -1;
        }
        if (typeof a.expires === 'number') {
            var g = a.expires,
                c = a.expires = new Date();
            c.setDate(c.getDate() + g);
        }
        return (document.cookie = [encodeURIComponent(e), '=', a.raw ? String(b) : encodeURIComponent(String(b)), a.expires ? '; expires=' + a.expires.toUTCString() : '', a.path ? '; path=' + a.path : '', a.domain ? '; domain=' + a.domain : '', a.secure ? '; secure' : ''].join(''));
    }
    a = b || {};
    var d, f = a.raw ? function(a) {
        return a;
    } : decodeURIComponent;
    return (d = new RegExp('(?:^|; )' + encodeURIComponent(e) + '=([^;]*)').exec(document.cookie)) ? f(d[1]) : null;
};
(function(a) {
    a.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": "\"",
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    };

    function b(c) {
        if (typeof c.data !== "string") {
            return;
        }
        var e = c.handler,
            d = c.data.toLowerCase().split(" ");
        c.handler = function(b) {
            if (this !== b.target && (/textarea|select/i.test(b.target.nodeName) || b.target.type === "text")) {
                return;
            }
            var f = b.type !== "keypress" && a.hotkeys.specialKeys[b.which],
                i = String.fromCharCode(b.which).toLowerCase(),
                k, c = "",
                g = {};
            if (b.altKey && f !== "alt") {
                c += "alt+";
            }
            if (b.ctrlKey && f !== "ctrl") {
                c += "ctrl+";
            }
            if (b.metaKey && !b.ctrlKey && f !== "meta") {
                c += "meta+";
            }
            if (b.shiftKey && f !== "shift") {
                c += "shift+";
            }
            if (f) {
                g[c + f] = true;
            } else {
                g[c + i] = true;
                g[c + a.hotkeys.shiftNums[i]] = true;
                if (c === "shift+") {
                    g[a.hotkeys.shiftNums[i]] = true;
                }
            }
            for (var h = 0, j = d.length; h < j; h++) {
                if (g[d[h]]) {
                    return e.apply(this, arguments);
                }
            }
        };
    }
    a.each(["keydown", "keyup", "keypress"], function() {
        a.event.special[this] = {
            add: b
        };
    });
})(jQuery);
(function(a) {
    function b(a) {
        if (a.attr('title') || typeof(a.attr('original-title')) != 'string') {
            a.attr('original-title', a.attr('title') || '').removeAttr('title');
        }
    }

    function c(e, d) {
        this.$element = a(e);
        this.options = d;
        this.enabled = true;
        b(this.$element);
    }
    c.prototype = {
        show: function() {
            var h = this.getTitle();
            if (h && this.enabled) {
                var c = this.tip();
                c.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](h);
                a('.tipsy').remove();
                c[0].className = 'tipsy';
                c.addClass(this.options.cls).css(this.options.css);
                c.remove().css({
                    top: 0,
                    left: 0,
                    visibility: 'hidden',
                    display: 'block'
                }).appendTo(document.body);
                var b = a.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                var f = c[0].offsetWidth,
                    g = c[0].offsetHeight;
                var e = (typeof this.options.gravity == 'function') ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                var d;
                switch (e.charAt(0)) {
                    case 'n':
                        d = {
                            top: b.top + b.height + this.options.offset,
                            left: b.left + b.width / 2 - f / 2
                        };
                        break;
                    case 's':
                        d = {
                            top: b.top - g - this.options.offset,
                            left: b.left + b.width / 2 - f / 2
                        };
                        break;
                    case 'e':
                        d = {
                            top: b.top + b.height / 2 - g / 2,
                            left: b.left - f - this.options.offset
                        };
                        break;
                    case 'w':
                        d = {
                            top: b.top + b.height / 2 - g / 2,
                            left: b.left + b.width + this.options.offset
                        };
                        break;
                }
                if (e.length == 2) {
                    if (e.charAt(1) == 'w') {
                        d.left = b.left + b.width / 2 - 15;
                    } else if (e.charAt(1) == 'q') {
                        d.left = b.left - 10;
                    } else {
                        d.left = b.left + b.width / 2 - f + 15;
                    }
                }
                c.css(d).addClass('tipsy-' + e);
                if (this.options.fade) {
                    c.stop().css({
                        opacity: 0,
                        display: 'block',
                        visibility: 'visible'
                    }).animate({
                        opacity: this.options.opacity
                    });
                } else {
                    c.css({
                        visibility: 'visible',
                        opacity: this.options.opacity
                    });
                }
            }
        },
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() {
                    a(this).remove();
                });
            } else {
                this.tip().remove();
            }
        },
        getTitle: function() {
            var c, d = this.$element,
                a = this.options;
            b(d);
            var c, a = this.options;
            if (typeof a.title == 'string') {
                c = d.attr(a.title == 'title' ? 'original-title' : a.title);
            } else if (typeof a.title == 'function') {
                c = a.title.call(d[0]);
            }
            c = ('' + c).replace(/(^\s*|\s*$)/, "");
            return c || a.fallback;
        },
        tip: function() {
            if (!this.$tip) {
                this.$tip = a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            }
            return this.$tip;
        },
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        enable: function() {
            this.enabled = true;
        },
        disable: function() {
            this.enabled = false;
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled;
        }
    };
    a.fn.tipsy = function(b) {
        if (b === true) {
            return this.data('tipsy');
        } else if (typeof b == 'string') {
            var e = this.data('tipsy');
            if (e) e[b]();
            return this;
        }
        b = a.extend({}, a.fn.tipsy.defaults, b);

        function d(f) {
            var e = a.data(f, 'tipsy');
            if (!e) {
                e = new c(f, a.fn.tipsy.elementOptions(f, b));
                a.data(f, 'tipsy', e);
            }
            return e;
        }

        function g() {
            var a = d(this);
            a.hoverState = 'in';
            if (b.delayIn == 0) {
                a.show();
            } else {
                setTimeout(function() {
                    if (a.hoverState == 'in') a.show();
                }, b.delayIn);
            }
        };

        function f() {
            var a = d(this);
            a.hoverState = 'out';
            if (b.delayOut == 0) {
                a.hide();
            } else {
                setTimeout(function() {
                    if (a.hoverState == 'out') a.hide();
                }, b.delayOut);
            }
        };
        if (!b.live) this.each(function() {
            d(this);
        });
        if (b.trigger != 'manual') {
            var h = b.live ? 'live' : 'bind',
                j = b.trigger == 'hover' ? 'mouseenter' : 'focus',
                i = b.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[h](j, g)[h](i, f);
        }
        return this;
    };
    a.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 1,
        title: 'title',
        cls: '',
        css: {},
        trigger: 'hover'
    };
    a.fn.tipsy.elementOptions = function(c, b) {
        return a.metadata ? a.extend({}, b, a(c).metadata()) : b;
    };
    a.fn.tipsy.autoNS = function() {
        return a(this).offset().top > (a(document).scrollTop() + a(window).height() / 2) ? 's' : 'n';
    };
    a.fn.tipsy.autoWE = function() {
        return a(this).offset().left > (a(document).scrollLeft() + a(window).width() / 2) ? 'e' : 'w';
    };
})(jQuery);
(function(a, b) {
    a = a || {};
    if (typeof define === "function" && define.amd) {
        define([], function() {
            a.Swipe = b();
            return a.Swipe;
        });
    } else if (typeof module === "object" && module.exports) {
        module.exports = b();
    } else {
        a.Swipe = b();
    }
})(this, function() {
    var a = (typeof self == "object" && self.self === self && self) || (typeof global == "object" && global.global === global && global) || this;
    var c = a.document;

    function b(C, e) {
        "use strict";
        e = e || {};
        var z = {};
        var l = {};
        var u;
        var w = e.auto || 0;
        var O;
        var y = false;
        var V = function() {};
        var U = function(a) {
            setTimeout(a || V, 0);
        };
        var T = function(e, c) {
            c = c || 100;
            var a = null;

            function d() {
                if (a) clearTimeout(a);
            }

            function b() {
                var f = this;
                var g = arguments;
                d();
                a = setTimeout(function() {
                    a = null;
                    e.apply(f, g);
                }, c);
            }
            b.cancel = d;
            return b;
        };
        var N = function(a) {
            if (!a) return false;
            return typeof a.cancelable !== "boolean" || a.cancelable;
        };
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(c) {
                var b = (this.document || this.ownerDocument).querySelectorAll(c),
                    a = b.length;
                while (--a >= 0 && b.item(a) !== this);
                return a > -1;
            };
        }
        var o = {
            addEventListener: !!a.addEventListener,
            passiveEvents: (function() {
                var b = false;
                try {
                    var c = Object.defineProperty({}, "passive", {
                        get: function() {
                            b = true;
                        }
                    });
                    a.addEventListener("testEvent", null, c);
                    a.removeEventListener("testEvent", null, c);
                } catch (d) {
                    b = false;
                }
                return b;
            })(),
            touch: "ontouchstart" in a || (a.DocumentTouch && c instanceof DocumentTouch),
            transitions: (function(b) {
                var a = ["transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition"];
                for (var c in a) {
                    if (b.style[a[c]] !== undefined) {
                        return true;
                    }
                }
                return false;
            })(c.createElement("swipe"))
        };
        if (!C) return;
        var f = C.children[0];
        var j, n, g, B;
        var d = parseInt(e.startSlide, 10) || 0;
        var m = e.speed || 300;
        e.continuous = e.continuous !== undefined ? e.continuous : true;
        var s = "left";
        e.autoRestart = false;
        var D = T(A);
        var k = {
            handleEvent: function(a) {
                if (y && a.type !== "resize") return;
                switch (a.type) {
                    case "mousedown":
                    case "touchstart":
                        this.start(a);
                        break;
                    case "mousemove":
                    case "touchmove":
                        this.move(a);
                        break;
                    case "mouseup":
                    case "mouseleave":
                    case "touchend":
                        this.end(a);
                        break;
                    case "webkitTransitionEnd":
                    case "msTransitionEnd":
                    case "oTransitionEnd":
                    case "otransitionend":
                    case "transitionend":
                        this.transitionEnd(a);
                        break;
                    case "resize":
                        D();
                        break;
                }
                if (e.stopPropagation) {
                    a.stopPropagation();
                }
            },
            start: function(a) {
                var b;
                if (v(a)) {
                    b = a;
                } else {
                    b = a.touches[0];
                }
                if (e.ignore && b.target.matches(e.ignore)) {
                    return;
                }
                if (v(a)) a.preventDefault();
                z = {
                    x: b.pageX,
                    y: b.pageY,
                    time: +new Date()
                };
                u = undefined;
                l = {};
                if (v(a)) {
                    f.addEventListener("mousemove", this, false);
                    f.addEventListener("mouseup", this, false);
                    f.addEventListener("mouseleave", this, false);
                } else {
                    f.addEventListener("touchmove", this, o.passiveEvents ? {
                        passive: false
                    } : false);
                    f.addEventListener("touchend", this, false);
                }
                J(r(), j[d]);
            },
            move: function(a) {
                var b;
                if (v(a)) {
                    b = a;
                } else {
                    if (a.touches.length > 1 || (a.scale && a.scale !== 1)) {
                        return;
                    }
                    if (e.disableScroll && N(a)) {
                        a.preventDefault();
                    }
                    b = a.touches[0];
                }
                l = {
                    x: b.pageX - z.x,
                    y: b.pageY - z.y
                };
                if (typeof u === "undefined") {
                    u = !!(u || Math.abs(l.x) < Math.abs(l.y));
                }
                if (!u) {
                    if (N(a)) {
                        a.preventDefault();
                    }
                    q();
                    if (e.continuous) {
                        p(i(d - 1), l.x + n[i(d - 1)], 0);
                        p(d, l.x + n[d], 0);
                        p(i(d + 1), l.x + n[i(d + 1)], 0);
                    } else {
                        l.x = l.x / ((!d && l.x > 0) || (d === j.length - 1 && l.x < 0) ? Math.abs(l.x) / g + 1 : 1);
                        p(d - 1, l.x + n[d - 1], 0);
                        p(d, l.x + n[d], 0);
                        p(d + 1, l.x + n[d + 1], 0);
                    }
                }
            },
            end: function(p) {
                var q = +new Date() - z.time;
                var c = (Number(q) < 250 && Math.abs(l.x) > 20) || Math.abs(l.x) > g / 2;
                var a = (!d && l.x > 0) || (d === j.length - 1 && l.x < 0);
                if (e.continuous) {
                    a = false;
                }
                var b = Math.abs(l.x) / l.x;
                if (!u) {
                    if (c && !a) {
                        if (b < 0) {
                            if (e.continuous) {
                                h(i(d - 1), -g, 0);
                                h(i(d + 2), g, 0);
                            } else {
                                h(d - 1, -g, 0);
                            }
                            h(d, n[d] - g, m);
                            h(i(d + 1), n[i(d + 1)] - g, m);
                            d = i(d + 1);
                        } else {
                            if (e.continuous) {
                                h(i(d + 1), g, 0);
                                h(i(d - 2), -g, 0);
                            } else {
                                h(d + 1, g, 0);
                            }
                            h(d, n[d] + g, m);
                            h(i(d - 1), n[i(d - 1)] + g, m);
                            d = i(d - 1);
                        }
                        F(r(), j[d], b);
                    } else {
                        if (e.continuous) {
                            h(i(d - 1), -g, m);
                            h(d, 0, m);
                            h(i(d + 1), g, m);
                        } else {
                            h(d - 1, -g, m);
                            h(d, 0, m);
                            h(d + 1, g, m);
                        }
                    }
                }
                if (v(p)) {
                    f.removeEventListener("mousemove", k, false);
                    f.removeEventListener("mouseup", k, false);
                    f.removeEventListener("mouseleave", k, false);
                } else {
                    f.removeEventListener("touchmove", k, o.passiveEvents ? {
                        passive: false
                    } : false);
                    f.removeEventListener("touchend", k, false);
                }
                K(r(), j[d]);
            },
            transitionEnd: function(a) {
                var b = parseInt(a.target.getAttribute("data-index"), 10);
                if (b === d) {
                    if (w || e.autoRestart) x();
                    E(r(), j[d]);
                }
            }
        };
        A();
        I();
        return {
            setup: A,
            slide: function(a, b) {
                q();
                t(a, b);
            },
            prev: function() {
                q();
                L();
            },
            next: function() {
                q();
                G();
            },
            restart: x,
            stop: q,
            getPos: r,
            disable: Q,
            enable: P,
            getNumSlides: function() {
                return B;
            },
            kill: M
        };

        function H() {
            if (o.addEventListener) {
                f.removeEventListener("touchstart", k, o.passiveEvents ? {
                    passive: true
                } : false);
                f.removeEventListener("mousedown", k, false);
                f.removeEventListener("webkitTransitionEnd", k, false);
                f.removeEventListener("msTransitionEnd", k, false);
                f.removeEventListener("oTransitionEnd", k, false);
                f.removeEventListener("otransitionend", k, false);
                f.removeEventListener("transitionend", k, false);
                a.removeEventListener("resize", k, false);
            } else {
                a.onresize = null;
            }
        }

        function R() {
            if (o.addEventListener) {
                if (o.touch) {
                    f.addEventListener("touchstart", k, o.passiveEvents ? {
                        passive: true
                    } : false);
                }
                if (e.draggable) {
                    f.addEventListener("mousedown", k, false);
                }
                if (o.transitions) {
                    f.addEventListener("webkitTransitionEnd", k, false);
                    f.addEventListener("msTransitionEnd", k, false);
                    f.addEventListener("oTransitionEnd", k, false);
                    f.addEventListener("otransitionend", k, false);
                    f.addEventListener("transitionend", k, false);
                }
                a.addEventListener("resize", k, false);
            } else {
                a.onresize = D;
            }
        }

        function A(c) {
            if (c != null) {
                for (var k in c) {
                    e[k] = c[k];
                }
            }
            j = f.children;
            B = j.length;
            n = new Array(j.length);
            g = $(window).width() + e.gutter;
            f.style.width = j.length * g * 2 + "px";
            var a = j.length;
            while (a--) {
                var b = j[a];
                b.style.width = g + "px";
                b.setAttribute("data-index", a);
                if (o.transitions) {
                    b.style[s] = a * -g + "px";
                    h(a, d > a ? -g : d < a ? g : 0, 0);
                }
            }
            if (e.continuous && o.transitions) {
                h(i(d - 1), -g, 0);
                h(i(d + 1), g, 0);
            }
            if (!o.transitions) {
                f.style[s] = d * -g + "px";
            }
            C.style.visibility = "visible";
            H();
            R();
        }

        function L() {
            if (y) return;
            if (e.continuous) {
                t(d - 1);
            } else if (d) {
                t(d - 1);
            }
        }

        function G() {
            if (y) return;
            if (e.continuous) {
                t(d + 1);
            } else if (d < j.length - 1) {
                t(d + 1);
            }
        }

        function F(a, b, c) {
            if (e.callback) {
                e.callback(a, b, c);
            }
        }

        function E(a, b) {
            if (e.transitionEnd) {
                e.transitionEnd(a, b);
            }
        }

        function J(a, b) {
            if (e.dragStart) {
                e.dragStart(a, b);
            }
        }

        function K(a, b) {
            if (e.dragEnd) {
                e.dragEnd(a, b);
            }
        }

        function i(a) {
            return (j.length + (a % j.length)) % j.length;
        }

        function r() {
            var a = d;
            if (a >= B) {
                a = a - B;
            }
            return a;
        }

        function t(a, c) {
            a = typeof a !== "number" ? parseInt(a, 10) : a;
            if (d === a) return;
            if (o.transitions) {
                var b = Math.abs(d - a) / (d - a);
                if (e.continuous) {
                    var k = b;
                    b = -n[i(a)] / g;
                    if (b !== k) {
                        a = -b * j.length + a;
                    }
                }
                var f = Math.abs(d - a) - 1;
                while (f--) {
                    h(i((a > d ? a : d) - f - 1), g * b, 0);
                }
                a = i(a);
                h(d, g * b, c || m);
                h(a, 0, c || m);
                if (e.continuous) {
                    h(i(a - b), -(g * b), 0);
                }
            } else {
                a = i(a);
                S(d * -g, a * -g, c || m);
            }
            d = a;
            U(function() {
                F(r(), j[d], b);
            });
        }

        function h(a, b, c) {
            p(a, b, c);
            n[a] = b;
        }

        function p(d, e, c) {
            var b = j[d];
            var a = b && b.style;
            if (!a) return;
            a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = c + "ms";
            a.webkitTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = "translateX(" + e + "px)";
        }

        function S(c, a, b) {
            if (!b) {
                f.style[s] = a + "px";
                return;
            }
            var h = +new Date();
            var g = setInterval(function() {
                var i = +new Date() - h;
                if (i > b) {
                    f.style[s] = a + "px";
                    if (w || e.autoRestart) x();
                    E(r(), j[d]);
                    clearInterval(g);
                    return;
                }
                f.style[s] = (a - c) * (Math.floor((i / b) * 100) / 100) + c + "px";
            }, 4);
        }

        function I() {
            w = e.auto || 0;
            if (w) O = setTimeout(G, w);
        }

        function q() {
            w = 0;
            clearTimeout(O);
        }

        function x() {
            q();
            I();
        }

        function Q() {
            q();
            y = true;
        }

        function P() {
            y = false;
            x();
        }

        function v(a) {
            return /^mouse/.test(a.type);
        }

        function M() {
            q();
            C.style.visibility = "";
            f.style.width = "";
            f.style[s] = "";
            var b = j.length;
            while (b--) {
                if (o.transitions) {
                    p(b, 0, 0);
                }
                var a = j[b];
                if (a.getAttribute("data-cloned")) {
                    var c = a.parentElement;
                    c.removeChild(a);
                }
                a.style.width = "";
                a.style[s] = "";
                a.style.webkitTransitionDuration = a.style.MozTransitionDuration = a.style.msTransitionDuration = a.style.OTransitionDuration = a.style.transitionDuration = "";
                a.style.webkitTransform = a.style.msTransform = a.style.MozTransform = a.style.OTransform = "";
            }
            H();
            D.cancel();
        }
    }
    if (a.jQuery || a.Zepto) {
        (function(a) {
            a.fn.Swipe = function(c) {
                return this.each(function() {
                    a(this).data("Swipe", new b(a(this)[0], c));
                });
            };
        })(a.jQuery || a.Zepto);
    }
    return b;
});
var Quran = {
    numAyas: 6236,
    numSuras: 114,
    numPages: 604,
    numJuzs: 30,
    suraStarts: [],
    pageStarts: [],
    juzStarts: [],
    init: function() {
        for (var a = 1; a < QuranData.Sura.length; a++) this.suraStarts[a] = this.getSuraStart(a);
        for (var a = 1; a < QuranData.Page.length; a++) this.pageStarts[a] = this.getPageStart(a);
        for (var a = 1; a < QuranData.Juz.length; a++) this.juzStarts[a] = this.getJuzStart(a);
    },
    getIndex: function(b) {
        var a = b;
        if (Object.prototype.toString.call(a) === "[object Array]") a = {
            sura: a[0],
            aya: a[1]
        };
        if (typeof a == "object") a = this.getAyaStart(a.sura, a.aya);
        return this.fixLineNum(a);
    },
    getAya: function(b) {
        var a = this.binarySearch(this.suraStarts, b);
        var c = b - this.suraProps(a).start + 1;
        return {
            sura: a,
            aya: c
        };
    },
    getAyaStart: function(b, a) {
        a = a || 1;
        return this.suraProps(b).start + (a - 1);
    },
    getSuraStart: function(a) {
        return this.getAyaStart(a);
    },
    getPageStart: function(a) {
        return this.getAyaStart(this.pageProps(a).sura, this.pageProps(a).aya);
    },
    getJuzStart: function(a) {
        return this.getAyaStart(this.juzProps(a).sura, this.juzProps(a).aya);
    },
    suraProps: function(d) {
        var e = QuranData.Sura[d] || [0, 7];
        var c = {};
        var b = ["start", "ayas", "order", "rukus", "name", "tname", "ename", "type"];
        for (var a = 0; a < b.length; a++) c[b[a]] = e[a];
        return c;
    },
    pageProps: function(a) {
        var a = QuranData.Page[a] || [1, 1];
        return {
            sura: a[0],
            aya: a[1]
        };
    },
    juzProps: function(a) {
        var a = QuranData.Juz[a] || [1, 1];
        return {
            sura: a[0],
            aya: a[1]
        };
    },
    getPrevAya: function(b, a) {
        if (--a == 0) a = this.suraProps(--b).ayas;
        return {
            sura: b,
            aya: a
        };
    },
    getNextAya: function(a, b) {
        if (++b > this.suraProps(a).ayas) {
            b = 1;
            a = (a % 114) + 1;
        }
        return {
            sura: a,
            aya: b
        };
    },
    addOffset: function(b, e, c, d) {
        var a = this.getAyaStart(b, e) + c;
        a = this.fixLineNum(a, d);
        return this.getAya(a);
    },
    isOutOfRange: function(b, c) {
        var a = this.getAyaStart(b, c);
        return a < 0 || a >= this.numAyas;
    },
    fixLineNum: function(a, b) {
        if (b && a >= this.numAyas) return 0;
        return Math.min(Math.max(a, 0), this.numAyas - 1);
    },
    fixAyaNum: function(a, b) {
        return Math.min(Math.max(b, 1), this.suraProps(a).ayas);
    },
    fixSuraNum: function(a) {
        return Math.min(Math.max(a, 1), this.numSuras);
    },
    fixPageNum: function(a) {
        return Math.min(Math.max(a, 1), this.numPages);
    },
    fixJuzNum: function(a) {
        return Math.min(Math.max(a, 1), this.numJuzs);
    },
    getSuraName: function(b, a) {
        a = a || "name";
        return this.suraProps(b)[a];
    },
    getSuraNum: function(b, a) {
        a = a || "name";
        for (i = 1; i <= this.numSuras; i++)
            if (this.suraProps(i)[a] == b) return i;
        return 0;
    },
    getPage: function(a, b) {
        return this.binarySearch(this.pageStarts, this.getAyaStart(a, b));
    },
    getJuz: function(a, b) {
        return this.binarySearch(this.juzStarts, this.getAyaStart(a, b));
    },
    binarySearch: function(c, e) {
        var d = 0,
            b;
        var a = c.length;
        while (a - d > 1) {
            b = (d + a) >> 1;
            if (c[b] < e) d = b;
            else a = b;
        }
        if (c[a] != e) return a - 1;
        return a;
    },
    getPageItems: function(e) {
        var a = [];
        var c = this.pageProps(e);
        var b = this.pageProps(e + 1);
        b = this.getPrevAya(b.sura, b.aya);
        if (c.sura == b.sura) a = a.concat(this.getAyaRange(c.sura, c.aya, b.aya));
        else {
            a = a.concat(this.getAyaRange(c.sura, c.aya, this.suraProps(c.sura).ayas));
            for (var d = c.sura + 1; d < b.sura; d++) a = a.concat(this.getAyaRange(d, 1, this.suraProps(d).ayas));
            a = a.concat(this.getAyaRange(b.sura, 1, b.aya));
        }
        return a;
    },
    getAyaRange: function(c, d, b) {
        var a = [];
        for (i = d; i <= b; i++) a.push({
            sura: c,
            aya: i
        });
        return a;
    }
};
Quran.init();
var TextDB = {
    text: {},
    init: function() {
        if (localStorageAvailable) {
            var a = localStorage.getItem("text");
            if (a) {
                this.text = JSON.parse(a);
            }
            if (!this.text) this.text = {};
        }
        var b = defSuraText.split("\n");
        for (i in b) this.set(defQuranType, [defSura, +i + 1], b[i]);
    },
    set: function(b, a, c) {
        if (!(b in this.text)) this.text[b] = {};
        if (Object.prototype.toString.call(a) === "[object Array]") a = Quran.getIndex(a);
        this.text[b][a] = $.trim(c);
    },
    get: function(b, e) {
        if (!(b in this.text)) return {
            text: ""
        };
        var a = Quran.getIndex(e);
        while (this.text[b][a] == "=") a--;
        for (var c = a + 1; this.text[b][c] == "="; c++);
        var d = Quran.getAya(a);
        return {
            text: this.text[b][a] || "",
            sura: d.sura,
            aya: d.aya,
            ayaTo: d.aya + c - a - 1
        };
    },
    load: function(b, a, c) {
        var d = Quran.getPageStart(a);
        var e = Quran.getPageStart(a + 1);
        if (this.available(b, d, e)) {
            c("available");
        } else {
            this.preload(b, a, c);
        }
    },
    preload: function(i, a, j) {
        var c = 2,
            d = a - c,
            e = a + c;
        var h = this.pageAvailable(curr.trans, a);
        for (var b = d; b <= e; b++) h = h && this.pageAvailable(i, b);
        var f = [];
        var g = [curr.quran, curr.trans];
        if (a == 1 || a == 604) {
            missing = a == 1 ? 604 : 1;
            for (var b in g)
                if ((text = this.missingRange(g[b], missing, missing))) f.push(text);
            h = false;
        }
        if (!h) {
            if (!this.pageAvailable(i, a + c)) e += c;
            if (!this.pageAvailable(i, a - c)) d -= c;
            d = Math.max(1, d);
            e = Math.min(604, e);
            for (var b in g)
                if ((text = this.missingRange(g[b], d, e))) f.push(text);
            if (f.length > 0) {
                this.retrieve(f, j);
                return;
            }
        }
        j("inCache");
    },
    retrieve: function(a, b) {
        $.ajax({
            type: "POST",
            url: "/php/get-aya.php",
            dataType: "json",
            data: {
                texts: JSON.stringify(a),
                version: version
            },
            success: function(c) {
                for (var a in c) {
                    var d = c[a];
                    for (var e in d) TextDB.set(a, e, d[e]);
                }
                b("retrieved");
            }
        });
    },
    pageAvailable: function(b, a) {
        if (a < 1 || a > 604) return true;
        var c = Quran.getPageStart(a);
        var d = Quran.getPageStart(a + 1);
        return this.available(b, c, d);
    },
    available: function(b, c, d) {
        if (!(b in this.text)) return false;
        for (var a = c; a < d; a++)
            if (!this.text[b][a]) return false;
        return true;
    },
    missingRange: function(c, d, e) {
        var a = Quran.getPageStart(d);
        var b = Quran.getPageStart(e + 1) - 1;
        if (c in this.text) {
            while (this.text[c][a] && a < b) a++;
            while (this.text[c][b] && a < b) b--;
            if (a >= b) return null;
        }
        return {
            textID: c,
            start: a,
            end: b + 1
        };
    },
    save: function() {
        if (localStorageAvailable) {
            localStorage.setItem("text", JSON.stringify(this.text));
            this.text = null;
        }
    }
};
var domain = document.location.href.split("#")[0];
var server = domain.split("/")[2];
var DebugMode = localhost;
var log = DebugMode ? console.log.bind(console) : $.noop;

function getBrowser() {
    var c = navigator.userAgent,
        b, a = c.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(a[1])) {
        b = /\brv[ :]+(\d+)/g.exec(c) || [];
        return {
            name: "ie",
            version: b[1] || ""
        };
    }
    if (a[1] === "Chrome") {
        b = c.match(/\bOPR|Edge\/(\d+)/);
        if (b != null) {
            return {
                name: "opera",
                version: b[1]
            };
        }
    }
    a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"];
    if ((b = c.match(/version\/(\d+)/i)) != null) {
        a.splice(1, 1, b[1]);
    }
    return {
        name: a[0].toLowerCase(),
        version: a[1]
    };
}

function checkLocalStorage() {
    var a = "checkLocalStorage";
    try {
        localStorage.setItem(a, a);
        localStorage.removeItem(a);
        return true;
    } catch (b) {
        return false;
    }
}

function isTouchDevice() {
    return ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
}
var browser = getBrowser();
var isIE = browser.name == "msie";
var isOpera = browser.name == "opera";
var isOldSafari = browser.name == "safari" && browser.version <= 10;
var isSafari = browser.name == "safari";
var isTouch = isTouchDevice();
var isIOS = /(iPad|iPhone|iPod)/i.test(navigator.userAgent);
var localStorageAvailable = checkLocalStorage();
(function(a) {
    a.fn.isChecked = function() {
        return a(this).is(":checked");
    };
    a.fn.toggleCheck = function(b) {
        return a(this).prop("checked", b);
    };
    a.isInArray = function(c, b) {
        return a.inArray(c, b) >= 0;
    };
    a.isEqual = function(b, a) {
        return JSON.stringify(b) == JSON.stringify(a);
    };
    a.pad = function(b, c) {
        var a = "" + b;
        while (a.length < c) a = "0" + a;
        return a;
    };
    a.clone = function(b) {
        return a.extend(true, {}, b);
    };
    a.Radio = {
        val: function(b, c) {
            if (isSet(c)) {
                a("input[name=" + b + "]").removeAttr("checked");
                return a("input[name=" + b + "][value=" + c + "]").attr("checked", true);
            } else return a("input[name=" + b + "]:checked").val();
        }
    };
    var b = [];
    a.preloadImages = function() {
        for (var a = arguments.length; a--;) {
            var c = document.createElement("img");
            c.src = arguments[a];
            b.push(c);
        }
    };
    a.loadScript = function(c, b) {
        b = typeof b != "undefined" ? b : {};
        a.ajax({
            type: "GET",
            url: c,
            success: b,
            dataType: "script",
            cache: true
        });
    };
    a.extend((a.fn.disableTextSelect = function() {
        return this.each(function() {
            a(this).bind("selectstart dragstart", function(a) {
                a.preventDefault();
                return false;
            });
        });
    }));
})(jQuery);
jQuery.curCSS = function(c, b, a) {
    return jQuery(c).css(b, a);
};

function unselect() {
    if (document.selection) {
        try {
            document.selection.empty();
        } catch (a) {}
    } else window.getSelection().removeAllRanges();
}

function _(a) {
    return Consts[a] ? Consts[a] : a;
}

function _num(e, a, f) {
    a = a || language;
    var b = {
        def: 0x0030,
        fa: 0x06f0,
        ar: 0x0660
    };
    var d = new RegExp(f ? "([0-9])" : "(.)", "g");
    var g = b[a] || b["def"];
    var c = String(e).replace(d, function(b, a, c, d) {
        return String.fromCharCode(g + (a.charCodeAt(0) & 0x0f));
    });
    return c;
}

function _enum(b, a) {
    a = a || language;
    return _num(b, a, true);
}

function getDefaultTrans() {
    if (defTrans != "def") return defTrans;
    var a = popularTransList;
    if (Object.keys) a = a.concat(Object.keys(transList));
    for (var b in a) {
        if (a[b].split(".")[0] == userLang) return a[b];
    }
    return "en.sahih";
}
String.prototype.format = function() {
    var b = this;
    for (var a = 0; a < arguments.length; a++) b = b.replace("{" + a + "}", arguments[a]);
    return b;
};

function val(a) {
    return 1 * _num(a, "en");
}

function arabicNumberName(a) {
    var b = Array("الاول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر");
    var f = Array("عشر", "العشرون", "الثلاثون");
    if (a < 1 || a >= 40) return "";
    if (a <= 10) return b[a - 1];
    var c = a % 10;
    var d = parseInt(a / 10);
    b[0] = "الحادي";
    var e = (c > 0 ? b[c - 1] + (d > 1 ? " و" : " ") : "") + f[d - 1];
    return e;
}

function getCurrDir(a) {
    a = a || curr.tab;
    return ({
        quran: "rtl",
        search: isRTL ? "rtl" : "ltr"
    }[a] || getTransDir());
}

function getCurrText(a) {
    a = a || curr.tab;
    return a == "trans" ? curr.trans : curr.quran;
}

function getTransDir() {
    var a = getTextLang(curr.trans);
    return $.isInArray(a, rtlLangs) ? "rtl" : "ltr";
}

function getTextLang(a) {
    return getTextType(a) == "trans" ? a.split(".")[0] : "ar";
}

function getTextType(a) {
    return a.indexOf(".") > -1 ? "trans" : "quran";
}

function isUthmani(a) {
    a = a || curr.quran;
    return /uthmani/.test(a);
}

function isTextTab(a) {
    a = a || curr.tab;
    return $.isInArray(a, ["quran", "trans"]);
}

function initMenuCollapse() {
    $(".sub-menu").each(function() {
        if (!$(this).hasClass("collapsed")) toggleCollapse(this, true);
    });
    $(".menu-top").click(function() {
        toggleCollapse($(this).parent());
    }).each(function() {
        $(this).html('<span class="icon"></span>' + $.trim($(this).html()));
    });
}

function toggleCollapse(c, b) {
    var a = typeof b != "undefined" ? b : $(c).hasClass("collapsed");
    $(c).toggleClass("collapsed", !a);
    var d = $(c).find(".menu-content, .menu-body");
    if (b) d.toggle(a);
    else d[a ? "slideDown" : "slideUp"](300);
}

function isSet(a) {
    return typeof a != "undefined";
}

function showLoadingImage() {
    $("#loadingImage").show();
}

function hideLoadingImage() {
    $("#loadingImage").hide();
}

function showError() {}

function loadGoogleAnalytics() {
    var a = "https://www.googletagmanager.com/gtag/js?id=G-ZLDW3XWX8W";
    $.loadScript(a, function() {
        window.dataLayer = window.dataLayer || [];

        function a() {
            dataLayer.push(arguments);
        }
        a('js', new Date());
        a('config', 'G-ZLDW3XWX8W');
    });
}

function runAsync(a, b) {
    if (a) setTimeout(a, b || 5);
}
var Scroller = {
    duration: 600,
    marginTop: 1 / 8,
    marginBottom: 1 / 20,
    scrollTo: function(d) {
        var b = Math.round($(window).height() * this.marginTop);
        if (!isMobile) b = Math.min(b, 125);
        var c = d.offset().top - b;
        var a = isOpera ? $("html") : $("html, body");
        if (isMobile) {
            a = $("#page-" + currentIndex);
            c += a.scrollTop();
        }
        a.stop().animate({
            scrollTop: c
        }, this.duration);
    },
    scrollToAya: function() {
        var g = isMobile ? "#page-" + currentIndex : "#quran-tab";
        var a = $("#" + curr.sura + "-" + curr.aya, g);
        if (curr.tab == "trans") a = $("#t-" + curr.sura + "-" + curr.aya);
        if (a.length == 0) return;
        if (curr.aya == 1) a = a.prevUntil("span").last();
        var e = a.offset().top;
        var b = e + a.height();
        if (curr.aya == 1) b += 2 * a.height();
        if (curr.tab == "quran" && opt.showTrans == "fixed" && !isMobile) b = Math.max(b, $(".tbox").offset().top + $(".tbox").height());
        var d = $(document).scrollTop();
        var c = $(window).height();
        var f = c - (isMobile ? 65 : c * this.marginBottom);
        if (e - d < c * this.marginTop || b > d + f) this.scrollTo(a);
    }
};

function bindHotKeys() {
    bindKey("left", function(a) {
        changePage("left");
    });
    bindKey("right", function(a) {
        changePage("right");
    });
    if (!isOpera) {
        bindKey("up", function(a) {
            changeAya(-1);
        });
        bindKey("down", function(a) {
            changeAya(+1);
        });
        bindKey("ctrl+left", function(a) {
            changeSura("left");
        });
        bindKey("ctrl+right", function(a) {
            changeSura("right");
        });
        bindKey("space", function(a) {
            Player.togglePlay();
        });
    }
}

function bindKey(a, b) {
    $(document).bind("keydown", a, function(a) {
        if (curr.tab != "search") {
            b.apply(this, arguments);
            return false;
        }
    });
}
var History = {
    enabled: true,
    firstLoad: true,
    init: function() {
        if (isMobile) this.enabled = false;
        else $(window).on("hashchange", this.showTabFromHash.bind(History));
    },
    pushState: function(a) {
        if (history && history.pushState) {
            var c = window.location.pathname + window.location.search;
            var b = this.enabled ? "#" + this.getHash(a) : "";
            if (b != decodeURIComponent(window.location.hash)) history.pushState(null, null, c + b);
        }
        this.setTitle(a);
    },
    getHash: function(a) {
        var b = a == "quran" ? "" : a;
        if (a == "trans") b += "/" + curr.trans + "/";
        if (isTextTab(a)) b += curr.sura + ":" + curr.aya;
        if (a == "search") {
            b += "/" + Search.type + "/" + Search.query;
            if (!isMobile) b += Search.page == 1 ? "" : "/p" + Search.page;
        }
        return b;
    },
    showTabFromHash: function() {
        var g = window.location.hash.split("#")[1] || "";
        var b = g.split("/");
        var a = b[0];
        var e = ["quran", "trans", "search"];
        if (isMobile) e.push("settings");
        if (a == "") a = curr.tab;
        if (!$.isInArray(a, e)) a = "quran";
        update("curr.tab", a);
        var d = this;
        try {
            if (a == "settings") {
                drawSettings();
            } else if (a == "search") {
                $.extend(Search, {
                    type: b[1] || "quran",
                    query: b[2] ? decodeURI(b[2]) : opt.searchText,
                    page: Math.max((b[3] || "p1").replace(/p-?/, "") * 1, 1)
                });
                if (Search.type == "quran") {
                    update("opt.searchText", Search.query);
                    $(".searchText").val(Search.query);
                }
                if (d.firstLoad || !isMobile) Search.display();
            } else if (isTextTab(a)) {
                var c = b[1];
                if (c && transList[c] && curr.trans != c) {
                    $("#transMenu").val(c);
                    updateTrans();
                }
                var h = b.length <= 1 ? b[0] : b[2];
                var f = d.locate(h);
                displayAya(f.sura, f.aya, a);
            }
            switchTab(a);
            d.setTitle(a);
            d.firstLoad = false;
        } catch (i) {
            log(i);
        }
    },
    locate: function(d) {
        var b = {};
        var c = d.split("-")[0];
        if (c == "page" || c == "juz") b = Quran[c + "Props"](+d.split("-")[1]);
        else {
            var a = d.split(":");
            if (a[0] && !a[1]) a[1] = 1;
            b = {
                sura: +a[0] || curr.sura,
                aya: +a[1] || curr.aya
            };
        }
        return b;
    },
    setTitle: function(b) {
        var a = "";
        var c = Quran.getSuraName(curr.sura, "tname");
        var d = c + " [" + curr.sura + ":" + curr.aya + "]";
        if (isTextTab(b)) a = d;
        if (b == "trans") a += " - " + transList[curr.trans];
        if (b == "search") {
            a = Search.query + " - ";
            a += Search.type == "root" ? "Root Search" : "Quran Search";
        }
        if (b == "settings") a = "Settings";
        document.title = a + " - Tanzil Quran Navigator";
    }
};
var currPage = "";

function initApp() {
    Settings.init(inputArguments);
    initPageByDevice();
    TextDB.init();
    TextTools.init();
    Player.init();
    TransBox.init();
    History.init();
    initTabs();
    initMenus();
    initFonts();
    loadFont(History.showTabFromHash.bind(History));
    runAsync(initCommonUI);
    if (isMobile) runAsync(initMobileUI);
    else runAsync(initWebUI);
    if (!localhost) {
        runAsync(loadGoogleAnalytics, 5);
    }
    $(window).on("unload", unload);
    Player.update();
}

function initPageByDevice() {
    if (isMobile) {
        $(".swipe .page").each(function() {
            $('<div class="quranText"></div>').appendTo($(this));
        });
        resultsPerPage = 20;
        Search.type = "quran";
        Search.query = opt.searchText;
        if ($(window).width() < 360) {
            transList["en.sahih"] = "Sahih Int'l";
        }
    } else {
        $("meta[name=viewport]").attr("content", "width=768");
    }
}

function initCommonUI() {
    var a = isMobile ? "mobile" : "desktop";
    $(".displayMode").val(opt.displayMode == "auto" ? a : opt.displayMode);
    $(".searchText").val(opt.searchText);
    $(window).resize(handlePageResize);
    $(".noSelect, label, .button, .ui-tab, .top-menu, .menu-top").disableTextSelect();
    if (isOldSafari) {
        $("html > head").append($("<style>.aya { transition: none; }</style>"));
    }
    initAudioUI();
    bindHotKeys();
    toggleTransAudio();
}

function initWebUI() {
    Dialog.init();
    Modal.init();
    adjustPageHeight();
    showMenuTab($("#search-quran-selector"));
    initMenuCollapse();
    initTextInputs();
    runAsync(initSearchMenu);
    $("#gotoText").val(_num(curr.sura) + ":" + _num(curr.aya));
    $("#customFont").val(opt.customFont);
    $("#showSigns").toggleCheck(opt.showSigns);
    $.Radio.val("showTrans", opt.showTrans);
    $("#quran-selector a").focus().blur();
    initTooltips();
}

function initTextInputs() {
    $("input:text").keypress(function(a) {
        if (a.which == 13) {
            $(this).closest("form").submit();
            a.preventDefault();
        }
    }).focus(function() {
        this.select();
    }).blur(function() {
        unselect();
    });
}

function unload() {
    Settings.save();
    TextDB.save();
}

function initTabs() {
    $("#menu-tab .ui-tab li").on("click", function(a) {
        a.preventDefault();
        showMenuTab($(this));
        return false;
    });
    $(".page-icons a, #page-tab .ui-tab a").on("click", function(b) {
        b.preventDefault();
        var a = this.href.split("#")[1];
        update("curr.tab", a);
        drawTab(a);
        switchTab(a);
        return false;
    });
}

function switchTab(a) {
    var c = $('.nav a[href="#' + a + '"]');
    select(c.parent());
    update("curr.tab", a);
    $(".tip").hide();
    var b = $("." + a + "-tab");
    b.show().siblings().hide();
    TransBox.toggle();
    if (isTextTab(a)) Scroller.scrollToAya();
    History.pushState(a);
}

function drawTab(a) {
    if (isTextTab(a)) {
        display();
    }
}

function showMenuTab(a) {
    select(a);
    var b = "#" + a.attr("id").replace("-selector", "-tab");
    $(b).show().siblings().hide();
}

function select(a) {
    a.addClass("selected").siblings().removeClass("selected");
}

function showAya(a, b) {
    a = a || $("#suraMenu").val() * 1;
    b = b || $("#ayaMenu").val() * 1;
    a = Quran.fixSuraNum(a);
    b = Quran.fixAyaNum(a, b);
    displayAya(a, b);
}

function showSura(a) {
    a = a || $("#suraMenu").val() * 1;
    a = Quran.fixSuraNum(a);
    displayAya(a, 1);
}

function showPage(a) {
    a = a || val($("#pageNum").val());
    a = Quran.fixPageNum(a);
    displayAya(Quran.pageProps(a));
}

function showJuz(a) {
    a = a || $("#juzMenu").val() * 1;
    a = Quran.fixJuzNum(a);
    displayAya(Quran.juzProps(a));
}

function changeAya(a, c) {
    var b = Quran.addOffset(curr.sura, curr.aya, a, c);
    displayAya(b);
}

function changeSura(a) {
    a = getArrowOffset(a) || a;
    if (a < 0 && curr.aya > 1) a = 0;
    showSura(curr.sura + a);
}

function changePage(a) {
    a = getArrowOffset(a) || a;
    var b = curr.page + a;
    showPage(b);
}

function refresh() {
    currPage = "";
    curr.tab == "search" ? Search.display() : display();
}

function display() {
    displayAya(curr.sura, curr.aya || 1);
}

function displayAya(a, c, b, e) {
    if (typeof a == "object") {
        b = c;
        c = a.aya;
        a = a.sura;
    }
    b = b || (isTextTab(curr.tab) ? curr.tab : "quran");
    $.extend(curr, {
        sura: +a,
        aya: +c,
        page: Quran.getPage(a, c),
        juz: Quran.getJuz(a, c)
    });
    if (!isMobile) updateMenus();
    Settings.save("curr");
    var d = curr.page;
    if (d + ":" + curr.quran + ":" + curr.trans + ":" + curr.tab == currPage) updatePage(d, b, e);
    else loadPage(d, b, e);
    runAsync(Player.update());
    History.pushState(b);
}

function updatePage(d, b, a) {
    var c = (b == "trans" ? "t-" : "") + (curr.sura + "-" + curr.aya);
    select($("#" + c));
    if (a) a();
    if (curr.tab == "quran") TransBox.update();
    Scroller.scrollToAya();
}

function loadPage(a, d, c) {
    var b = d == "trans" ? curr.trans : curr.quran;
    showLoadingImage();
    $(".mobile .quranText").css({
        opacity: 0.5
    });
    TextDB.load(b, a, function(d) {
        var e = isMobile ? "#page-" + currentIndex : "#quran-tab";
        showPageText(a, e);
        hideLoadingImage();
        if (c) c();
        $(".mobile .quranText").css({
            opacity: "inherit"
        });
        if (d == "available") {
            runAsync(function() {
                TextDB.preload(b, a, postPrcocess);
            }, 50);
        } else runAsync(postPrcocess, 50);
    });
}

function postPrcocess(c) {
    if (isMobile) {
        var b = isTextTab(curr.tab) ? curr.tab : "quran";
        var a = getCurrDir(b) == "ltr" ? 1 : -1;
        showPageText(getNextPage(+1), "#page-" + getNextIndex(a), true);
        showPageText(getNextPage(-1), "#page-" + getNextIndex(-a), true);
    } else if (curr.tab == "quran") {
        if (opt.showTrans == "hover") initTransTip();
        TransBox.update();
    }
}

function showPageText(b, d, f) {
    var a = isTextTab(curr.tab) ? curr.tab : "quran";
    var c = getCurrDir(a) == "rtl";
    var e = getCurrText(a) + "." + b;
    if ($(d).attr("data") != e || !isMobile) {
        var h = getPageText(b, a, f);
        $(d + " .quranText").html(h).toggleClass("transText", a == "trans");
        setTextFont(a);
        initPageActions(d, a);
        $(d).attr("data", e);
    }
    if (f) return;
    var g = isMobile ? _num(curr.juz, "ar") : arabicNumberName(curr.juz);
    $(".pageNumber").text(c ? _num(b, "ar") : b);
    $(".dir").toggleClass("rtl", c).toggleClass("ltr", !c);
    $(".suraName").text(c ? "سورة " + Quran.getSuraName(curr.sura) : Quran.getSuraName(curr.sura, "tname"));
    $(".juzName").text(c ? "الجزء " + g : "Juz " + curr.juz);
    currPage = b + ":" + curr.quran + ":" + curr.trans + ":" + a;
    updatePage(b, a);
}

function getPageText(o, d, p) {
    var h = Quran.getPageItems(o);
    var f = "";
    for (var c = 0; c < h.length; c++) {
        var e = h[c].sura;
        var g = h[c].aya;
        var j = getCurrText(d);
        var a = TextDB.get(j, [e, g]);
        var b = a.text;
        b = TextTools.fixText(b, {
            showSigns: opt.showSigns,
            font: currFontID,
            type: curr.quran
        });
        if (d == "trans") b = TextTools.fixTransText(b);
        if (g == 1) {
            var k = getSuraHeader(e, b, d);
            f += k.html;
            b = k.ayaText;
        }
        var i = "aya";
        if (curr.sura == e)
            if (curr.aya >= a.aya && curr.aya <= a.ayaTo) {
                i += " selected";
                g = curr.aya;
            }
        if (p && c == 0) i += " selected";
        var m = a.aya;
        m += a.aya != a.ayaTo ? "&ndash;" + a.ayaTo : "";
        var l = d == "trans" ? "()" : ["&lrm;﴿", "﴾&rlm;"];
        var n = b + ' <span class="ayaNumber">{0}{1}{2}</span>'.format(l[0], _enum(m, getTextLang(j)), l[1]);
        f += '<span id="' + (d == "trans" ? "t-" : "") + e + "-" + g;
        f += '" class="' + i + '">' + n + "</span>\n";
        c += a.ayaTo - a.aya;
    }
    return f;
}

function getSuraHeader(b, a, c) {
    var d = '<div class="suraHeaderFrame ' + getCurrDir(c) + '">';
    d += (getCurrDir(c) == "rtl" ? "سورة " + Quran.getSuraName(b) : Quran.getSuraName(b, "tname")) + "</div>";
    if (b != 1 && b != 9) {
        var e = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
        if (c == "quran") {
            a = a.replace(/^(([^ ]+ ){4})/, "$1|").split("|");
            e = a[0];
            a = a[1];
        }
        d += '<div class="ayaText bism">' + e + "</div>\n";
    }
    return {
        html: d,
        ayaText: a
    };
}

function updateQuranSettings() {
    update("curr.quran", $("#typeMenu").val());
    update("opt.showSigns", $("#showSigns").isChecked());
    refresh();
}

function updateTransSettings() {
    update("opt.showTrans", $.Radio.val("showTrans"));
    TransBox.toggle();
    refresh();
}

function updateTrans() {
    update("curr.trans", $("#transMenu").val());
    toggleTransAudio();
    Player.reset();
    Search.dirty();
    setFontDefs();
    refresh();
}

function setTrans() {
    updateTrans();
}

function handlePageResize() {
    adjustPageHeight();
    if (isMobile) adjustMobileHeights();
}

function updateDisplayMode() {
    update("opt.displayMode", $(".displayMode").val());
    update("curr.tab", "quran");
    window.location.reload();
}

function adjustPageHeight() {
    if (isMobile) return;
    var a = $("#side-content").position();
    var b = $(window).height() - a.top;
    $("#main-content").css({
        height: b
    });
}

function initPageActions(a, b) {
    $(a + " .aya").click(function() {
        if (!$(this).hasClass("selected")) {
            var a = $(this).attr("id").replace("t-", "").split("-");
            displayAya(a[0], a[1]);
        }
    });
}

function arrowTitle(a) {
    var c = $(a).hasClass("arrow-left") ? "left" : "right";
    var b = getArrowOffset(c);
    return b == 1 ? _("Next Page") : _("Previous Page");
}

function getArrowOffset(a) {
    return {
        rtl: {
            left: +1,
            right: -1
        },
        ltr: {
            left: -1,
            right: +1
        }
    }[getCurrDir()][a];
}

function initMenus() {
    initJuzMenu();
    initTransMenu();
    initQuranTypesMenu();
    initFontMenu();
    initFontSizeMenu();
    updateMenus();
}

function initSearchMenu() {
    initRootList();
    initRootMenu();
}

function updateMenus() {
    $("#juzMenu").val(curr.juz);
    $("#pageNum").val(_num(curr.page));
    initSuraMenu(curr.sura);
    initAyaMenu(curr.sura, curr.aya);
}

function initSuraMenu(c) {
    var b = getCurrDir() == "ltr" ? "tname" : "name";
    if ($("#suraMenu").data("nameType") == b) {
        $("#suraMenu").val(c);
        return;
    }
    var d = [];
    for (var a = 1; a <= Quran.numSuras; a++) d.push({
        text: _num(a) + ". " + Quran.getSuraName(a, b),
        value: a
    });
    initMenu("suraMenu", d, c);
    $("#suraMenu").data("nameType", b);
}

function initAyaMenu(e, d) {
    var b = Quran.suraProps(e).ayas;
    if ($("#ayaMenu option").length == b) {
        $("#ayaMenu").val(d);
        return;
    }
    var c = [];
    for (var a = 1; a <= b; a++) c.push({
        text: _num(a),
        value: a
    });
    initMenu("ayaMenu", c, d);
}

function initJuzMenu() {
    var b = [];
    for (var a = 1; a <= Quran.numJuzs; a++) b.push({
        text: _("Juz") + " " + _num(a),
        value: a
    });
    initMenu("juzMenu", b);
}

function initTransMenu() {
    var b = [];
    for (var a in transList) {
        var c = a.split(".")[0];
        var d = langList[c];
        var e = hasAudio(a) ? " &#x1F50A;" : "";
        b.push({
            text: d + ":  " + transList[a] + e,
            value: a
        });
    }
    b.sort(sortItems);
    initMenu("transMenu", b, curr.trans);
}

function initFontMenu() {
    var a = [];
    fontList["def"].name = _("Default");
    for (var b in fontList) {
        font = fontList[b];
        a.push({
            text: font.name,
            value: b
        });
    }
    initMenu("fontName", a, opt.fontID);
}

function initFontSizeMenu() {
    var a = [];
    for (var b in fontSizeList) {
        size = fontSizeList[b];
        a.push({
            text: size + "%",
            value: size
        });
    }
    initMenu("fontSize", a, opt.fontSize);
}

function initQuranTypesMenu() {
    initMenuFromHash("typeMenu", quranTypes, curr.quran);
}

function sortItems(b, a) {
    return b.text.localeCompare(a.text);
}

function getItems(b, e, d) {
    var c = [];
    for (var a = 0; a < b.length; a++) c[a] = {
        text: b[a][e],
        value: b[a][d] || a
    };
    return c;
}

function initMenu(c, a, f) {
    if (typeof c == "string") c = $("#" + c);
    var e = "";
    for (var b = 0; b < a.length; b++) {
        var d = "";
        if (a[b].title) d = ' title="{0}"'.format(a[b].title);
        if (/^sep-/.test(a[b].value)) d += ' disabled="disabled"';
        e += '<option value="' + a[b].value + '"' + d + ">";
        e += a[b].text + "</option>";
    }
    if (!isSet(f)) f = a[0].value;
    c.html(e).val(f);
}

function initMenuFromHash(d, a, e) {
    var c = "";
    for (var b in a) c += '<option value="' + b + '">' + a[b] + "</option>";
    $("#" + d).html(c).val(e);
}

function initAudioUI() {
    initReciteMenu();
    initRepeatMenu();
    initPlaySpeed();
    initDelayMenu();
    $("#playScope").val(opt.playScope);
    $("#playTrans").toggleCheck(opt.playTrans);
    $("#soundOptions").click(function() {
        $(".sound-options").slideToggle(200);
    });
}

function initRepeatMenu() {
    var a = [{
        text: _("Once"),
        value: 1
    }, {
        text: _("Twice"),
        value: 2
    }, {
        text: _("Three times"),
        value: 3
    }, {
        text: _("Four times"),
        value: 4
    }, {
        text: _("Five times"),
        value: 5
    }, {
        text: _("Always"),
        value: 100
    }];
    initMenu($("#playRepeat"), a, opt.playRepeat);
}

function initPlaySpeed() {
    var a = "0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0 2.5 3.0";
    a = a.split(" ").reverse();
    var b = {};
    for (var c in a) b[a[c] + "x"] = +a[c] * 100;
    $("#playSpeed").html(getOptions(b)).val(opt.playSpeed);
    $(".web #playSpeed").tipsy({
        gravity: isRTL ? "se" : "sw",
        delayIn: 600
    });
}

function initDelayMenu() {
    var b = [];
    for (var a = 0; a <= 9; a++) b.push({
        text: _("{0} sec").format(_num(a)),
        value: a
    });
    b.push({
        text: _("Duration of Aya"),
        value: "len"
    });
    initMenu($("#playDelay"), b, opt.playDelay);
}

function initReciteMenu() {
    var a = [];
    for (var b in reciteList) a.push({
        text: reciteList[b],
        value: b
    });
    a.sort(sortItems).unshift({
        text: _("Off"),
        value: "none"
    });
    initMenu($(".reciteMenu"), a, opt.reciter);
    var a = [];
    for (var b in transAudioList) {
        var c = langList[b.split(".")[0]];
        a.push({
            text: c + ": " + transList[b],
            value: b
        });
    }
    a.sort(sortItems).unshift({
        text: _("Off"),
        value: "none"
    });
    initMenu($(".transAudio"), a, opt.transAudio);
}

function setRecitation(a) {
    update("opt.reciter", a);
    Player.reset();
}

function setPlayTrans(a) {
    update("opt.playTrans", a);
    Player.reset();
    toggleTransAudio();
}

function toggleTransAudio() {
    $(".trans-audio-row").toggle(hasAudio(curr.trans));
}

function hasAudio(a) {
    a = a || curr.trans;
    return $.isInArray(a, transAudioList);
}

function getOptions(a) {
    var c = "";
    for (var b in a) {
        var d = a.constructor === Array ? a[b] : b;
        c += '<option value="' + a[b] + '">' + d + "</option>";
    }
    return c;
}
var resultsPerPage = 10;
var searchTextType = defQuranType;
var Search = {
    query: "",
    type: "",
    page: 1,
    totalPages: 0,
    pattern: "",
    highlight: "",
    current: "",
    go: function() {
        var a = $(".searchText").first().val();
        if ($.trim(a) == "") {
            return;
        }
        update("opt.searchText", a);
        this.display({
            type: "quran",
            query: a,
            page: 1
        });
    },
    goRoot: function() {
        var a = $("#rootMenu").val();
        this.display({
            type: "root",
            query: a,
            page: 1
        });
    },
    goTo: function() {
        var a = $("#gotoText").val();
        a = a.split(":");
        displayAya(val(a[0]), val(a[1]) || 1);
    },
    showPage: function(b, a) {
        a = val(a || this.page) + b;
        a = Math.min(Math.max(a, 1), this.totalPages);
        $("#pageOffset").val(_num(a));
        this.page = a;
        this.display({
            type: this.type,
            query: this.query,
            page: a
        });
    },
    display: function(a) {
        a = a || {
            type: this.type,
            query: this.query,
            page: this.page
        };
        if (this.current != JSON.stringify(a) || History.firstLoad) {
            this.update(a);
            this.retrieve(a);
        } else {
            switchTab("search");
        }
    },
    dirty: function() {
        this.current = "";
    },
    update: function(a) {
        $.extend(this, a);
        this.pattern = TextTools.enrichPattern(this.query);
        this.highlight = this.pattern.replace(/[+!:]/g, "|").replace(/^[|]+/g, "");
        this.highlight = a.type == "root" ? "ROOT" : this.highlight;
        if (!TextTools.isValidReg(this.highlight));
    },
    retrieve: function(a) {
        this.current = JSON.stringify(a);
        var b = a.type == "root" ? "Root " + this.query : this.pattern;
        var a = {
            type: searchTextType,
            searchText: this.query,
            pattern: b,
            transType: isMobile ? "" : curr.trans,
            pageOffset: this.page,
            resultsPerPage: resultsPerPage
        };
        $.ajax({
            type: "POST",
            url: "/php/search.php",
            data: a,
            dataType: "text",
            success: function(a) {
                Search.procQuery(a);
            },
            error: showError
        });
        showLoadingImage();
        $(".search .footer").html("Loading...").show();
    },
    procQuery: function(i) {
        hideLoadingImage();
        var e = i.split("|");
        var g = e[0].split(":");
        var j = g[0];
        var h = g[1];
        var d = e[1].split("\n");
        var f = [];
        for (var b = 0; b < d.length - 1; b++) {
            var a = d[b];
            a = a.split(":");
            var c = a[2].replace(/↕/g, ":");
            if (!isMobile) TextDB.set(curr.trans, a[0], c);
            f.push({
                index: a[0],
                text: a[1],
                trans: c
            });
        }
        this.draw(f, j, h);
    },
    draw: function(a, b, c) {
        if (a.length == 0) this.page = 0;
        this.totalPages = Math.ceil(b / resultsPerPage);
        $("#pageOffset").val(_num(this.page));
        $("#searchPattern").text(this.query);
        var d = this.compose(a, this.page);
        if (!isMobile || this.page == 1) $(".searchResults").empty();
        $(".searchResults").first().show().append(d.children());
        $(".searchFrame, .search .frame").scrollTop(0);
        this.initPageActions();
        $("#totalPages").text(_num(this.totalPages));
        $(".searchStat").show().text(_("{0} results in {1} ayas").format(_num(c), _num(b)));
        $("#search-selector").show();
        switchTab("search");
        if (this.page < this.totalPages) $(".search .footer").html('<div class="link" onclick="Search.showPage(1)">Show more results</div>');
        else $(".search .footer").hide();
    },
    compose: function(d, g) {
        var e = $("<div />");
        var k = {
            showSigns: false,
            ignoreInternalSigns: true,
            font: "default",
            type: searchTextType
        };
        for (var b = 0; b < d.length; b++) {
            var a = " " + d[b].text + " ";
            a = TextTools.highlight(this.highlight, a);
            a = TextTools.fixText(a, k);
            var c = Quran.getAya(d[b].index);
            var f = Quran.getSuraName(c.sura) + ": " + _num(c.aya, "ar");
            var h = "s-" + c.sura + "-" + c.aya;
            var j = a + ' <span class="spec">‎﴿' + f + "﴾‏</span>";
            var i = $("<div />").attr("id", h).addClass("result").html('<span class="number">' + _num((g - 1) * resultsPerPage + b + 1) + ". </span>" + j);
            e.append(i);
        }
        return e;
    },
    setResultsFont: function() {
        var a = 0.92;
        $(".searchResults").css({
            "font-family": "hafs",
            "font-size": a + "em"
        });
    },
    initPageActions: function() {
        $(".result").off("click").click(function() {
            var a = $(this).attr("id").replace("s-", "").split("-");
            displayAya(a[0], a[1], "quran", function() {
                switchTab("quran");
            });
        });
        initTransTip($(".result"));
    }
};

function initRootList() {
    Roots = [];
    var b = RootList.split(" ");
    for (var a = 0; a < b.length; a++) Roots.push(b[a]);
}

function initCharList(e) {
    var a = "آ ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";
    a = a.split(" ");
    var c = "";
    for (var b = 0; b < a.length; b++) {
        var d = a[b] == e ? "current-char" : "";
        c += '<a class="' + d + '" href="javascript:initRootMenu(\'' + a[b] + "')\">" + a[b] + "</a> ";
    }
    $("#charList").html(c);
}

function initRootMenu(a) {
    a = a || "ش";
    initCharList(a);
    var c = [];
    if (a == "ا") a = "[اإأ]";
    if (a == "ك") a = "[كک]";
    reg = new RegExp("^" + a, "");
    for (var b = 0; b < Roots.length; b++)
        if (reg.test(Roots[b])) c.push({
            value: Roots[b],
            text: Roots[b]
        });
    initMenu("rootMenu", c);
}
Settings = {
    data: {
        curr: {
            sura: defSura,
            aya: 1,
            quran: defQuranType,
            trans: defTrans,
            tab: "quran"
        },
        opt: {
            version: "",
            ad: 0,
            showSigns: true,
            showTrans: "hover",
            fontID: "def",
            fontSize: 100,
            displayMode: "auto",
            playSpeed: 100,
            playRepeat: 1,
            playScope: "cont",
            playDelay: 0,
            playTrans: false,
            reciter: defRecite,
            searchText: "كتاب"
        }
    },
    storage: null,
    cookiesExpire: 120,
    cookiesPath: "/",
    init: function(a) {
        this.storage = localStorageAvailable ? "localStorage" : "cookie";
        this.adjustDefaults(a);
        this.load();
        this.upgrade();
        this.adjustVariables();
    },
    load: function() {
        for (var a in this.data) window[a] = $.extend(true, $.clone(this.data[a]), this.read(a));
    },
    save: function(b) {
        for (var a in this.data)
            if (!b || a == b) this.write(a, window[a]);
    },
    reset: function(b) {
        for (var a in this.data)
            if (!b || a == b) window[a] = $.clone(this.data[a]);
        this.save();
    },
    upgrade: function() {
        if (opt.version && opt.version < "1.4.3") curr.quran = {
            "simple-modified": "simple",
            simple: "simple-plain"
        }[curr.quran] || curr.quran;
        if (opt.version <= "1.7" && opt.fontSize < 25) opt.fontSize = 100;
        if (opt.version < "1.7.2" && userLang == "fa") {
            for (var a = 1; a <= 11; a++) TextDB.set(defQuranType, [21, a], "");
            TextDB.save();
        }
        if (opt.version < "1.7.3" && opt.reciters) {
            opt.reciter = opt.reciters[0].id;
            opt.playRepeat = opt.reciters[0].num;
        }
        opt.version = version;
    },
    adjustDefaults: function(a) {
        Settings.data.curr.trans = a.defTrans ? a.defTrans : getDefaultTrans();
        if (isTouch) Settings.data.opt.showTrans = "none";
    },
    adjustVariables: function() {
        opt.fontSize = opt.fontSize || 100;
        opt.fontID = fontList[opt.fontID] ? opt.fontID : "def";
        curr.quran = quranTypes[curr.quran] ? curr.quran : defQuranType;
        curr.trans = transList[curr.trans] ? curr.trans : getDefaultTrans();
    },
    read: function(b) {
        var a = {};
        var c = this.storage == "localStorage" ? localStorage[b] : $.cookie(b);
        try {
            a = c ? JSON.parse(c) : a;
        } catch (d) {}
        return a;
    },
    write: function(b, c) {
        var a = JSON.stringify(c);
        if (this.storage == "localStorage") localStorage[b] = a;
        else $.cookie(b, a, {
            expires: this.cookiesExpire,
            path: this.cookiesPath
        });
    }
};

function update(c, b) {
    var a = c.split(".");
    window[a[0]][a[1]] = b;
    Settings.save(a[0]);
}
var fontList = {
    def: {
        name: _("Default"),
        scale: 1
    },
    hafs: {
        name: "KFGQPC Hafs",
        scale: 1
    },
    naskh: {
        name: "KFGQPC Naskh",
        scale: 1
    },
    me_quran: {
        name: "Me-Quran",
        scale: 0.85
    },
    saleem: {
        name: "PDMS Saleem",
        scale: 1.2
    },
    scheherazade: {
        name: "Scheherazade",
        scale: 1.22
    }
};
var currFontID = "hafs";
var baseFont = "Times New Roman";
var transFont, transFontSize;
var fontSizeList = [200, 175, 150, 140, 130, 120, 110, 105, 100, 95, 90, 80, 70];

function initFonts() {
    setFontDefs();
    setFontSize();
}

function setFontSize() {
    $(".quran-tab, .swipe .page, .searchFrame, .search .results").css({
        "font-size": parseFloat(opt.fontSize * 0.19).toFixed(2) + "px"
    });
    $(".tbox-wrapper, .tip-wrapper").css({
        "font-size": parseFloat((50 + opt.fontSize / 2) * 0.19).toFixed(2) + "px"
    });
}

function loadFont(a) {
    fontID = getFontID();
    if (fontID != "hafs") {
        embedFont(fontID);
    }
    onFontLoaded(fontID, a);
}

function onFontLoaded(a, b) {
    showLoadingImage();
    if (fontExists(a)) {
        b();
        hideLoadingImage();
    } else {
        runAsync(function() {
            onFontLoaded(a, b);
        }, 50);
    }
}

function getFontID() {
    var a = opt.fontID || "hafs";
    if (a == "def") a = isOldSafari ? "scheherazade" : "hafs";
    return a;
}

function fontWidth(d, a) {
    a = a || "In the name of Allah, بسم الله الرحمن الرحيم";
    if (a == 2) a || "ربنا إنك جامع الناس ليوم لا ريب فيه إن الله لا يخلف الميعاد";
    var b = $(".font-tester");
    b.css({
        "font-family": d
    }).text(a).show();
    var c = b.width();
    b.hide();
    return c;
}

function fontExists(b) {
    var a = b + ", " + baseFont;
    return (fontWidth(baseFont) * fontWidth(baseFont, 2) != fontWidth(a) * fontWidth(a, 2));
}

function embedFont(b) {
    var a = "font-family: '*'; " + "src: url('/fonts/*/*.woff2') format('woff2'), " + "url('/fonts/*/*.woff') format('woff'), " + "url('/fonts/*/*.otf') format('opentype');";
    a = a.replace(/\*/g, b);
    $("<style> @font-face { " + a + " } </style>").appendTo("head");
}

function setTextFont(b) {
    var a = b == "quran";
    var f = fontList[currFontID] || fontList["hafs"];
    var d = currFontID == "custom" ? opt.customFont : currFontID;
    var e = getTextLang(curr.trans);
    var c = a ? f.scale * 1.15 : transFontSize / 10.5;
    $(".quranText").css({
        "font-family": a ? d : transFont,
        "font-size": c + "em",
        "text-align": !a && $.isInArray(e, noJustifyLangs) ? "center" : "justify",
        direction: getCurrDir(b)
    });
    if (a) {
        $(".quranText .ayaNumber").css({
            "font-size": parseFloat(1.05 / c).toFixed(2) + "em"
        });
    }
}

function setFontDefs() {
    var c = getTextLang(curr.trans);
    var b = langData[c] || langData["def"];
    var a = b.sample || "In the name of Allah, بسم الله الرحمن الرحيم";
    transFont = b.font + "," + langData["def"].font;
    transFontSize = (fontWidth(baseFont, a) / fontWidth(transFont, a)) * 10;
    currFontID = getFontID();
}

function updateFont() {
    update("opt.fontID", $("#fontName").val());
    currFontID = getFontID();
    loadFont(function() {
        refresh();
        setTextFont('quran');
    });
}

function updateFontSize() {
    update("opt.fontSize", $("#fontSize").val());
    setFontSize();
}

function changeFontSize(c) {
    var b = $("#fontSize option:selected").index() - c;
    if (b < 0 || b > fontSizeList.length - 1) return;
    var a = $("#fontSize option").eq(b).val();
    if (a) {
        $("#fontSize").val(a);
        updateFontSize(a);
    }
}
var TextTools = {
    matchingRules: [
        ["$HAMZA_SHAPE", "$HAMZA_SHAPE"],
        ["$ALEF_MAKSURA", "YY"],
        ["$ALEF", "[$ALEF$ALEF_MAKSURA$ALEF_WITH_MADDA_ABOVE$ALEF_WITH_HAMZA_ABOVE" + "$ALEF_WITH_HAMZA_BELOW$ALEF_WASLA]"],
        ["[$TEH$MARBUTA]", "[$TEH$MARBUTA]"],
        ["$HEH", "[$HEH$MARBUTA]"],
        ["$WAW", "[$WAW$WAW_WITH_HAMZA_ABOVE$SMALL_WAW]"],
        ["$YEH", "[$YEH$ALEF_MAKSURA$YEH_WITH_HAMZA$SMALL_YEH]"],
        ["YY", "[$ALEF_MAKSURA$YEH$ALEF]"],
        [" ", "$SPACE"]
    ],
    wildcardRegs: [
        ["\\.", "P"],
        ["\\*", "S"],
        ["[?؟]", "Q"],
        ["S+", "S"]
    ],
    wildcards: [
        ["S", "$LETTER_HARAKA*"],
        ["Q", "$LETTER"],
        ["P", "$LETTER"]
    ],
    preProcess: [
        ["[$FARSI_YEH$YEH_BARREE]", "$YEH"],
        ["[$FARSI_KEHEH$SWASH_KAF]", "$KAF"],
        ["$HEH_DOACHASHMEE", "$HEH"],
        ["$NOON$SUKUN", "$NOON"],
        ["([$KASRA$KASRATAN])($SHADDA)", "$2$1"]
    ],
    init: function() {
        for (var a in UGroups) UGroups[a] = this.regTrans(UGroups[a]);
    },
    fixText: function(a, b) {
        b = b || {};
        if (b.showSigns) {
            a = this.pregReplace(" ([$HIGH_SALA-$HIGH_SEEN])", '<span class="sign">&nbsp;$1</span>', a);
            a = this.pregReplace("($SAJDAH)", b.ignoreInternalSigns ? "" : '<span class="internal-sign">$1</span>', a);
            a = this.pregReplace("($RUB_EL_HIZB)", b.ignoreInternalSigns ? "" : '<span class="juz-sign">$1</span> ', a);
        } else {
            a = this.pregReplace("[$HIGH_SALA-$RUB_EL_HIZB$SAJDAH]", "", a);
        }
        if (b.font == "hafs") {
            a = this.pregReplace("$KASRATAN($LOW_MEEM)", "$KASRA$1", a);
            a = this.pregReplace("$FATHATAN($HIGH_MEEM)", "$FATHA$1", a);
            a = this.pregReplace("$DAMMATAN($HIGH_MEEM)", "$DAMMA$1", a);
            a = this.pregReplace("$HIGH_STOP", "$HIGH_STOP_FILLED", a);
            a = this.pregReplace("$TATWEEL($HARAKA)", "$1", a);
        }
        if (b.font == "hafs" || b.font == "naskh") {
            a = this.pregReplace("$KAF($HARAKA*$LAM$HARAKA*$ALEF$MADDA)", "$KAF$TATWEEL$1", a);
        }
        if (b.font == "naskh") {
            a = this.pregReplace("[$LOW_MEEM$HIGH_MEEM]", "", a);
        }
        a = this.removeExtraMeems(a);
        return a;
    },
    fixTransText: function(a, b) {
        a = a.replace(/\]\]/g, "$").replace(/ *\[\[[^$]*\$/g, "");
        return a;
    },
    removeExtraMeems: function(a) {
        a = this.pregReplace("([$FATHATAN$DAMMATAN])$LOW_MEEM", "$1", a);
        a = this.pregReplace("($KASRATAN$SHADDA?)$HIGH_MEEM", "$1", a);
        return a;
    },
    highlight: function(b, a) {
        b = new RegExp("(" + b + ")", "g");
        a = a.replace(b, "◄$1►");
        a = a.replace(/◄\s/g, " ◄").replace(/\s►/g, "► ");
        a = a.replace(/([^\s]*)◄/g, "◄$1").replace(/►([^\s]*)/g, "$1►");
        while (/◄[^\s]*◄/.test(a)) a = a.replace(/(◄[^\s]*)◄/g, "$1").replace(/►([^\s]*►)/g, "$1");
        a = a.replace(/◄/g, '<span class="highlight">').replace(/►/g, "</span>");
        return a;
    },
    enrichPattern: function(a, b) {
        if (b) a = this.pregReplace("$HARAKA", "", a);
        a = this.pregReplace("$TATWEEL", "", a);
        a = a.replace(/\-/g, "!");
        a = this.regTrans(a);
        a = this.handleSpaces(a);
        a = this.applyRules(this.preProcess, a);
        a = this.applyRules(this.wildcardRegs, a);
        a = this.pregReplace("(.)", "$1$HARAKAT*", a);
        a = this.applyRules(this.matchingRules, a);
        a = this.applyRules(this.wildcards, a);
        return a;
    },
    handleSpaces: function(a) {
        var b = "";
        if (a == "") return a;
        a = a.replace(/\s+/g, " ");
        while (a != b) {
            b = a;
            a = a.replace(/^(([^"]*"[^"]*")*)([^"\s]*) /g, "$1$3+");
        }
        a = a.replace(/_/g, " ");
        a = a.replace(/"/g, " ");
        a = a.replace(/^[+|]+/g, "").replace(/[+|!]+$/g, "");
        a = a.replace(/\+*([+|!])\+*/g, "$1");
        return a;
    },
    isValidReg: function(a) {
        try {
            new RegExp(a, "g");
        } catch (b) {
            return false;
        }
        return true;
    },
    regTrans: function(a) {
        return a.replace(/\$([A-Z_]+)/g, function(b, a, c, d) {
            return UGroups[a] || UChars[a] || "";
        });
    },
    pregReplace: function(b, a, c) {
        b = new RegExp(this.regTrans(b), "g");
        a = this.regTrans(a);
        return c.replace(b, a);
    },
    applyRules: function(b, a) {
        for (var c in b) a = this.pregReplace(b[c][0], b[c][1], a);
        return a;
    }
};
var Dialog = {
    defaults: {
        width: 400,
        height: "auto",
        title: "Dialog",
        buttons: {
            Close: function() {
                Dialog.close();
            }
        },
        modal: -1,
        zIndex: 1000,
        onload: function() {}
    },
    options: {},
    init: function(a) {
        $(".dbox-close").click(function() {
            Dialog.close();
            return false;
        });
    },
    open: function(a) {
        this.options = $.extend({}, this.defaults, a);
        Modal.show(0, this.options.modal);
        this.showLoading();
        this.loadContent();
    },
    close: function() {
        $(".dbox-wrapper").fadeOut(200);
        Modal.hide(200);
    },
    set: function(a) {
        $.extend(this.options, a);
    },
    showLoading: function() {
        this.width(400);
        $(".dbox").hide();
        $(".dbox-loading").show();
        $(".dbox-wrapper").css({
            zIndex: this.options.zIndex
        }).show();
        this.updatePosition();
    },
    loadContent: function() {
        var a = this.options;
        var b = $(".dbox-content").children()[0];
        $("#dialogs").append(b);
        if (a.id.indexOf("/") == -1 && $("#" + a.id).length) this.display(a);
        else {
            $("#ex-dialog").load(a.id, function() {
                a.id = "ex-dialog";
                Dialog.display();
            });
        }
    },
    display: function(a) {
        var a = this.options;
        $(".dbox-content").append($("#" + a.id));
        $(".dbox-title span").text(a.title);
        $(".dbox-content").height(a.height);
        this.width(a.width);
        this.setButtons();
        $(".dbox-loading").hide();
        $(".dbox").show();
        $(".dbox-content").scrollTop(0);
        a.onload.apply(this);
        this.updatePosition();
    },
    setButtons: function() {
        var b = this.options.buttons;
        $(".dbox-footer").empty();
        for (var a in b) {
            var c = "dialog-button-" + a.toLowerCase().replace(" ", "-");
            $("<span/>").addClass("button").attr("id", c).text(_(a)).click(b[a]).disableTextSelect().appendTo($(".dbox-footer"));
        }
    },
    width: function(a) {
        a += 42;
        var b = $(document).width();
        $(".dbox-wrapper").width(a).css({
            left: (b - a) / 2
        });
    },
    updatePosition: function() {
        var a = $(window).height();
        var c = $(".dbox-wrapper").height() + 20;
        var b = Math.min(125, (a - c) / 2);
        $(".dbox-wrapper").css({
            top: Math.max(0, b) + $(window).scrollTop()
        });
    },
    refresh: function() {
        $(".dbox-wrapper").hide().show();
    }
};

function openDialog(a, c, b, d) {
    if (/\.php/.test(a)) a = "/php/content/" + a + "?locale=" + locale;
    Dialog.open({
        id: a,
        title: c,
        modal: -1,
        width: b || 400,
        height: d || "auto"
    });
    return false;
}
var Modal = {
    duration: 200,
    opacity: 0.1,
    zIndex: 900,
    blanket: null,
    init: function() {
        this.blanket = $("<div />").attr("id", "modal-blanket").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "#000",
            opacity: this.opacity,
            zIndex: this.zIndex
        }).appendTo(document.body).hide();
        $(window).bind("resize", function() {
            Modal.update();
        });
    },
    show: function(a, b) {
        if (isSet(b)) this.blanket.css({
            opacity: (this.opacity = b)
        });
        if (!isSet(a)) a = this.duration;
        this.update();
        if (this.opacity >= 0) this.blanket.fadeIn(a);
        this.toggleObjects(false);
    },
    hide: function(a) {
        if (!isSet(a)) a = this.duration;
        this.blanket.fadeOut(a);
        setTimeout("Modal.toggleObjects(true)", a);
    },
    update: function() {
        this.blanket.css({
            height: $(document).height()
        });
    },
    toggleObjects: function(a) {
        $("body")[a ? "removeClass" : "addClass"]("modal");
    }
};
var TransBox = {
    box: null,
    init: function() {
        if (isMobile) return;
        this.box = $(".tbox");
        this.toggle();
        this.box.find(".tbox-close").click(function() {
            $.Radio.val("showTrans", "hover").click();
            updateTransSettings();
            return false;
        });
    },
    toggle: function() {
        if (isMobile) return;
        show = opt.showTrans == "fixed";
        if (isPageEmbedded || curr.tab != "quran") show = false;
        this.box[show ? "show" : "hide"](isRTL ? null : 200);
        this.update();
    },
    position: function(b) {
        if (!b.is(":visible")) return;
        var c = b.offset().top;
        var a = $("#main-content").offset().left + $("#main-content").width() - 65;
        if (isRTL) a = $("#main-content").offset().left + 65 - 256;
        this.box.css("left", a).css({
            top: c
        }, 200, "swing");
    },
    update: function(b) {
        if (isMobile) return;
        b = b || $("#" + curr.sura + "-" + curr.aya);
        if (b.length < 1) return;
        var a = getObjTrans(b);
        if (!a.text || !this.box) return;
        var d = a.sura + ":" + a.aya + (a.aya != a.ayaTo ? "&ndash;" + a.ayaTo : "");
        var c = "[" + d + "] <span>" + transList[curr.trans] + "</span>";
        this.box.find(".tbox-title").toggleClass("rtl", getTransDir() == "rtl");
        this.box.find(".tbox-title>span").html(c);
        this.box.find(".tbox-content").html(a.text).css({
            direction: getTransDir(),
            fontFamily: transFont,
            fontSize: (transFontSize / 19) * 1.5 + "em"
        });
        this.position(b);
    }
};
(function(a) {
    a.fn.tip = function(b, c) {
        if (b == "update") return a.Tip.update(this, c);
        return a(this).each(function() {
            a.Tip.init(this, b);
        });
    };
    a.Tip = {
        defaults: {
            delayIn: 400,
            delayOut: 0,
            fadeIn: 200,
            fadeOut: 0,
            opacity: 1,
            offsetX: 0,
            offsetY: 10,
            trigger: "mouseover",
            triggerOut: "mouseout",
            above: true,
            align: "left",
            shadow: 1,
            width: "auto",
            track: false,
            sticky: false,
            text: "",
            title: "",
            cls: "",
            style: {},
            textStyle: {},
            titleStyle: {},
            api: {}
        },
        tooltip: null,
        target: null,
        options: {},
        pos: {
            x: 0,
            y: 0
        },
        showTimer: 0,
        hideTimer: 0,
        init: function(d, e) {
            var c = (this.options = a.extend({}, this.defaults, e));
            this.setOptions(d, c);
            var b = a.Tip;
            a(d).bind(c.trigger, function(d) {
                b.buildTip(c.sticky);
                b.tooltip.hide();
                b.target = a(d.currentTarget);
                b.options = b.getOptions();
                b.updateTip();
                b.position(d);
                b.show();
                if (c.track) a(d.currentTarget).mousemove(function(b) {
                    a.Tip.position(b);
                });
            }).bind(c.triggerOut, function(d) {
                var c = b.options;
                if (!c.sticky) b.hide();
                if (c.track) a(d.currentTarget).unbind("mousemove");
            });
        },
        show: function() {
            var b = this.options;
            this.showTimer = this.run(function() {
                if (isIE) a.Tip.tooltip.show();
                else a.Tip.tooltip.stop().fadeIn(b.fadeIn, function() {
                    a(this).css({
                        opacity: 1
                    });
                });
            }, b.delayIn, [this.hideTimer]);
        },
        hide: function() {
            var b = this.options;
            this.hideTimer = this.run(function() {
                if (isIE) a.Tip.tooltip.hide();
                else a.Tip.tooltip.stop().fadeOut(b.fadeOut);
            }, b.delayOut, [this.showTimer]);
        },
        update: function(c, b) {
            b = b || {};
            this.options = this.getOptions(c);
            a.extend(this.options, b);
            if (this.target && this.target[0] == a(c)[0] && this.tooltip.is(":visible")) {
                this.updateTip();
                this.position();
            }
        },
        run: function(d, c, b) {
            b = isSet(b) ? b : [];
            a.each(b, function() {
                if (this) clearTimeout(this);
            });
            return setTimeout(d, c);
        },
        updateTip: function() {
            var b = this.options;
            var c = this.tooltip;
            var e = a.isFunction(b.text) ? b.text.apply(this) : b.text;
            var d = a.isFunction(b.title) ? b.title.apply(this) : b.title;
            c.attr("class", "tip tip-shadow").addClass(b.cls);
            c.find(".tip-wrapper").css({
                top: -b.shadow,
                left: -b.shadow
            }).css(b.style);
            c.find(".tip-content").html(e).css(b.textStyle);
            c.find(".tip-title").css(b.titleStyle).toggle(d != "");
            c.find(".tip-title>span").html(d);
            this.updateWidth();
        },
        updateWidth: function() {
            var a = this.options;
            this.tooltip.width(a.width);
            a.height = this.tooltip.height();
        },
        position: function(h) {
            if (h) this.pos = {
                x: h.pageX,
                y: h.pageY
            };
            var b = this.options;
            var s = this.tooltip;
            var f = b.shadow,
                e = this.pos.x,
                g = this.pos.y,
                d = b.width + f,
                m = b.height + f,
                i = g - m - b.offsetY,
                o = g + m + b.offsetY,
                p = e - d - b.offsetX,
                r = e + d + b.offsetX,
                l = a(window).scrollLeft(),
                k = l + a(window).width(),
                j = a(window).scrollTop(),
                q = j + a(window).height();
            var n = i >= j && (b.above || o > q) ? i : g + b.offsetY;
            var c = {
                left: e + b.offsetX,
                right: p,
                center: e - d / 2
            }[b.align];
            if (c + d > k) c = k - d;
            c = Math.max(c, l);
            this.tooltip.stop().css({
                left: c + f,
                top: n + f
            });
        },
        getOptions: function(b) {
            b = b || this.target;
            return a(b).data("tip-options");
        },
        setOptions: function(c, b) {
            a(c).data("tip-options", b);
        },
        buildTip: function(b) {
            if (!this.tooltip) {
                this.tooltip = a("<div/>").addClass("tip tip-shadow").css({
                    position: "absolute"
                }).appendTo(document.body).hide();
            }
            this.tooltip.empty().append(a("<div/>").addClass("tip-wrapper").css({
                position: "relative"
            }).append(a("<div/>").addClass("tip-title").addClass(getTransDir() == "rtl" ? "rtl" : "").append(a((b ? '<a class="tip-close" title="' + _("Close") + '" href="#">X</a>' : "") + "<span>Title</span>"))).append(a("<div/>").addClass("tip-content")));
            a(".tip-close").click(function(b) {
                a.Tip.hide();
                return false;
            });
        }
    };
})(jQuery);

function initTransTip(a) {
    if (isMobile) return;
    a = a || $(".aya");
    $(a).each(function() {
        var a = getObjTrans(this);
        var b = a.sura + ":" + a.aya + (a.aya != a.ayaTo ? "&ndash;" + a.ayaTo : "");
        $(this).tip({
            text: a.text,
            title: "[" + b + "] <span>" + transList[curr.trans] + "</span>",
            cls: "transTip",
            delayIn: 800,
            delayOut: 50,
            fadeIn: 60,
            fadeOut: 90,
            offsetX: -10,
            offsetY: 16,
            shadow: 3,
            width: 270,
            above: true,
            align: isRTL ? "center" : "left",
            track: true,
            textStyle: {
                direction: getTransDir(),
                fontFamily: transFont,
                fontSize: ((opt.fontSize * transFontSize) / 1000) * 15 + "px"
            },
            sticky: isTouch
        });
    });
}

function initTooltips() {
    if (isMobile || isTouch) return;
    $.extend($.fn.tipsy.defaults, {
        opacity: 0.9,
        delayIn: 400
    });
    $(".arrow-link").each(function() {
        var a = $(this);
        a.tipsy({
            fallback: function() {
                return arrowTitle(a);
            },
            gravity: $(this).hasClass("arrow-left") ? "se" : "sw"
        });
    });
    $(".tipsyd").tipsy({
        gravity: "sw"
    });
}

function getObjTrans(b) {
    var c = $(b).attr("id").replace(/[st]-/, "").split("-");
    var a = TextDB.get(curr.trans, c);
    a.text = TextTools.fixTransText(a.text);
    return a;
}
var Player = {
    audio: [null, null],
    index: 0,
    playGap: isSafari || isMobile ? 350 : 200,
    circ: 2 * 24 * Math.PI,
    currItem: null,
    nextItem: null,
    isPlaying: false,
    isFirstPlay: true,
    delayTimer: null,
    root: "https://" + (localhost ? "tanzil.co" : window.location.host),
    init: function() {
        this.audio[0] = new Audio();
        this.audio[1] = new Audio();
        this.resetSpeed();
        var b = window.AudioContext || window.webkitAudioContext;
        if (b) var c = new b();
        this.initPlayer();
        this.toggleIcon("play");
        var a = this;
        for (i in this.audio) {
            $(this.audio[i]).on("play", function(b) {
                a.isPlaying = true;
                a.animate();
            }).on("pause", function(b) {
                if (!a.isDuringPlay()) a.isPlaying = false;
            }).on("playing", function(b) {
                a.isPlaying = true;
            }).on("ended", function(a) {});
        }
    },
    initPlayer: function() {
        var a = this;
        $("#circle #bar").css({
            "stroke-dasharray": this.circ + " " + this.circ,
            "stroke-dashoffset": this.circ
        }).show();
        this.progress(1);
        $(".play-icon").click(function() {
            a.togglePlay();
        });
        $(".player-seek-bar").click(function(c) {
            if (a.getURL(a.currItem) == a.player().src) {
                var b = c.offsetX / $(this).width();
                a.player().currentTime = a.player().duration * b;
                a.progress(b);
            }
        });
    },
    play: function() {
        if (!this.currItem) this.reset();
        else if (!this.isDuringPlay()) {
            var a = this.getURL(this.currItem);
            if (this.player().src != a) this.player().src = a;
            this.player().play();
            runAsync(Player.postProcess.bind(this), this.playGap + 20);
        }
        return this;
    },
    pause: function() {
        if (this.isDuringPlay()) this.player().pause();
        return this;
    },
    togglePlay: function() {
        if (this.isDuringPlay()) this.pause().toggleIcon("play");
        else this.play().toggleIcon("pause");
        if (this.isFirstPlay && isOldSafari) {
            this.buffer().play();
        }
        this.isFirstPlay = false;
        clearTimeout(this.delayTimer);
    },
    isDuringPlay: function() {
        return this.isPlaying && !this.player().paused;
    },
    animate: function() {
        this.progress();
        if (this.isPlaying) runAsync(this.animate.bind(this), 15);
    },
    progress: function(a) {
        var b = this.player().currentTime;
        var c = this.player().duration - this.playGap / 1000;
        if (c - b <= 0) {
            this.isPlaying = false;
            a = 1;
            runAsync(this.proceed.bind(this));
        }
        a = a || b / c;
        a = a == 1 ? 0 : a;
        if (isMobile) $("#circle #bar").css({
            strokeDashoffset: this.circ * (1 - a)
        });
        else $(".player-play-bar").css({
            width: a * 100 + "%"
        });
    },
    update: function() {
        if (this.currItem && this.currItem.sura == curr.sura && (this.currItem.aya == curr.aya || (this.currItem.aya == 0 && curr.aya == 1))) return;
        clearTimeout(this.delayTimer);
        this.currItem = this.getList(curr)[0];
        if (this.isDuringPlay()) this.pause().play();
        else this.resetPlayer();
    },
    resetSpeed: function() {
        var a = opt.playSpeed / 100;
        this.audio[0].defaultPlaybackRate = a;
        this.audio[1].defaultPlaybackRate = a;
        this.player().playbackRate = this.buffer().playbackRate = a;
    },
    resetPlayer: function() {
        this.progress(1);
        this.toggleIcon("play");
        clearTimeout(this.delayTimer);
    },
    reset: function() {
        this.currItem = null;
        this.update();
    },
    switchPlayers: function() {
        this.index = (this.index + 1) % 2;
        this.currItem = this.nextItem;
        return this;
    },
    proceed: function() {
        if (!this.currItem) return;
        if (this.currItem.repeat > 1) {
            runAsync(function() {
                this.currItem.repeat--;
                this.player().currentTime = 0;
                this.play();
                this.isPlaying = true;
                this.animate();
            }.bind(this));
            return;
        }
        var a = opt.playDelay;
        if (opt.playDelay == "len") a = (this.player().duration / opt.playSpeed) * 100;
        clearTimeout(this.delayTimer);
        this.delayTimer = setTimeout("Player.switchPlayers().play()", a * 1000);
    },
    postProcess: function() {
        var a = this.currItem.aya;
        if (a != curr.aya) displayAya(this.currItem.sura, Math.max(1, a));
        runAsync(this.preload.bind(this), 200);
    },
    preload: function() {
        var a = this.getList(this.currItem);
        for (var b in a) {
            if (this.isEqual(this.currItem, a[b])) break;
        }
        if (b == a.length - 1) {
            if (this.mustProceed()) {
                var c = Quran.getNextAya(this.currItem.sura, this.currItem.aya);
                this.nextItem = this.getList(c)[0];
            } else this.nextItem = null;
        } else this.nextItem = a[+b + 1];
        this.loadBuffer();
    },
    player: function() {
        return this.audio[this.index];
    },
    buffer: function() {
        return this.audio[(this.index + 1) % 2];
    },
    getURL: function(a) {
        var b = $.pad(a.sura, 3) + $.pad(a.aya, 3) + ".mp3";
        var c = this.root + "/res/audio/" + a.reciter + "/";
        return c + b;
    },
    isEqual: function(b, a) {
        return b.reciter == a.reciter && b.sura == a.sura && b.aya == a.aya;
    },
    toggleIcon: function(b) {
        var a = b == "play";
        $(".play-icon.play").toggle(a);
        $(".play-icon.pause").toggle(!a);
    },
    loadBuffer: function() {
        if (!this.nextItem) return;
        var a = this.getURL(this.nextItem);
        if (this.buffer().src != a) {
            this.buffer().src = a;
            this.buffer().load();
        }
    },
    getList: function(b) {
        var a = [];
        if (opt.reciter != "none") this.pushReciter(a, b, opt.reciter, opt.playRepeat);
        if (opt.playTrans && hasAudio(curr.trans)) this.pushReciter(a, b, curr.trans, 1);
        return a;
    },
    pushReciter: function(c, a, b, e) {
        var d = {
            sura: a.sura,
            reciter: b
        };
        if (a.aya <= 1 && a.sura != 1 && a.sura != 9)
            if (!$.isInArray(b, bismIncluded)) c.push($.extend($.clone(d), {
                aya: 0,
                repeat: 1
            }));
        c.push($.extend(d, {
            aya: Math.max(1, a.aya),
            repeat: e
        }));
    },
    mustProceed: function() {
        var a = Quran.getNextAya(curr.sura, curr.aya);
        var b = opt.playScope == "aya" || (opt.playScope == "sura" && a.sura != curr.sura) || (opt.playScope == "page" && Quran.getPage(a.sura, a.aya) != Quran.getPage(curr.sura, curr.aya)) || (opt.playScope == "juz" && Quran.getJuz(a.sura, a.aya) != Quran.getJuz(curr.sura, curr.aya)) || a.sura < curr.sura;
        return !b;
    }
};
var Swiper = null;
var currentIndex = 0;
var swipeDirection = 0;
var firstPageLoaded = false;

function initMobileUI() {
    $("body").css({
        direction: "ltr"
    });
    $(".page-header > div").click(function() {
        var a = ["sura", "page", "juz"][$(this).index()];
        showBrowseMenu(a, "toplevel");
    });
    $(".arrow > span").click(function() {
        var a = $(this).hasClass("left") ? 1 : -1;
        Swiper.slide(currentIndex - a, 450 + $(window).width() / 4);
    });
    initSettingsTab();
    initSwiper();
    adjustMobileHeights();
}

function adjustMobileHeights() {
    var a = $(window).height();
    $(".swipe, .page, .settings .body").css({
        height: a - 44 - 50
    });
    $(".search .body").css({
        height: a - 44 - 70 - 50
    });
    $(".settings").css({
        height: a - 50
    });
    $(".settings.browse .body").css({
        height: a - 44 - 44 - 50
    });
    $(".swipe .page, .swipe .page .quranText").css({
        "min-height": a - 44 - 50
    });
    $(".swipe .page .quranText").css({
        width: $(window).width() + 1
    });
    $(".swipe .page").css({
        width: $(window).width() + 25
    });
}

function initSwiper() {
    Swiper = new Swipe($(".swipe")[0], {
        gutter: 25,
        startSlide: currentIndex,
        draggable: false,
        autoRestart: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(b, c, a) {
            swipe(a);
        },
        transitionEnd: function(b, a) {
            $(a).siblings().children().scrollTop(0);
        }
    });
}

function swipe(b) {
    var c = b > 0 ? "left" : "right";
    var a = Swiper.getPos();
    if (currentIndex != a) {
        currentIndex = a;
        runAsync(function() {
            var a = getNextPage(getArrowOffset(c));
            showPage(a);
        }, 50);
    }
}

function changePage(a) {
    a = getArrowOffset(a) || a;
    var b = curr.page + a;
    showPage(b);
}

function getNextIndex(a) {
    return (currentIndex + a + 3) % 3;
}

function getNextPage(a) {
    return ((curr.page + a + 604 - 1) % 604) + 1;
}

function showBrowseMenu(a, c) {
    if ($(".browse").is(":visible") && $(".browse").data("type") == a && c) {
        hideBrowseMenu();
        return;
    }
    var b = {
        sura: {
            en: "Sura",
            ar: "السورة",
            fa: "سوره"
        },
        aya: {
            en: "Aya",
            ar: "الآية",
            fa: "آيه"
        },
        page: {
            en: "Page",
            ar: "الصفحة",
            fa: "صفحه"
        },
        juz: {
            en: "Juz",
            ar: "الجزء",
            fa: "جزء"
        }
    };
    var e = getCurrDir() == "ltr";
    var d = e ? "en" : language == "fa" ? "fa" : "ar";
    var f = b[a];
    headers = ["sura", "aya", "page", "juz"];
    $(".browse .header").empty();
    $.each(headers, function(e, c) {
        $(".browse .header").append($("<span>").text(b[c][d]).toggleClass("selected", c == a).click(function() {
            showBrowseMenu(c);
        }));
    });
    list = getBrowseMenuList(a, b, d);
    appendMenuItems(".browse .body .content", list, curr[a] - 1);
    $(".browse").show();
    scrollToSelected(".browse .body");
    if (c) $(".browse").data("type", a);
    $(".browse .content > div").click(function() {
        var b = $(this).index() + 1;
        browseAction(a, b);
        hideBrowseMenu();
    });
    catchOutsideClick(".browse, .page-header", function() {
        hideBrowseMenu();
    });
}

function hideBrowseMenu() {
    $(".browse").hide();
    $(".browse .content").empty();
    $(document).off(".outclick");
}

function getBrowseMenuList(a, h, d) {
    var f = {
        sura: {
            tpl: "{0}.&nbsp; {1}",
            num: 114
        },
        aya: {
            num: Quran.suraProps(curr.sura).ayas
        },
        page: {
            num: 604
        },
        juz: {
            num: 30
        }
    };
    var g = f[a].tpl || h[a][d] + " {0}";
    var e = [];
    var c = "";
    for (var b = 1; b <= f[a].num; b++) {
        if (a == "sura") c = Quran.getSuraName(b, d == "en" ? "tname" : "name");
        if (a == "juz") c = arabicNumberName(b);
        e.push(g.format(_num(b, d == "en" ? "en" : "ar"), c));
    }
    return e;
}

function appendMenuItems(a, b, e) {
    var c = "";
    for (var d in b) c += "<div>" + b[d] + "</div>";
    $(a).html(c);
    $(a + " > div").eq(e).addClass("selected");
}

function scrollToSelected() {
    var b = 44;
    var d = $(".browse .content > div");
    var c = $(".browse .body");
    var g = $(".browse .body .title");
    var h = $(window).height() - 90;
    var a = d.filter(".selected");
    if (a.length > 0) {
        var e = a.index();
        var f = a.position().top;
        c.scrollTop((e - 3) * b);
    }
    c.scrollTop(Math.floor(c.scrollTop() / b) * b);
}

function browseAction(c, b) {
    var a = {};
    if (c == "sura") a = {
        sura: b,
        aya: 1
    };
    else if (c == "aya") a = {
        sura: curr.sura,
        aya: b
    };
    else if (c == "juz") a = Quran.juzProps(b);
    else if (c == "page") a = Quran.pageProps(b);
    displayAya(a);
}

function catchOutsideClick(a, b) {
    $(document).on("mouseup.outclick", function(c) {
        a = $(a);
        if (!a.is(c.target) && a.has(c.target).length === 0) {
            b();
        }
    });
}

function initSettingsTab() {
    $(".setting-tab select").each(function() {
        var b = $(this);
        var a = $("<label>").attr("for", b.attr("id")).addClass("select");
        b.after(a).detach().appendTo(a);
    });
    $("#contact").attr("href", "mailto:support" + String.fromCharCode(64) + "tanzil.net");
}

function drawSettings() {}