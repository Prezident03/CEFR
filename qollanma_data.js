/* CEFR Companion — har bir part uchun "qanday ishlanadi" qo'llanmalari.
   Kitoblardagi (Multilevel Master Reading/Listening/Writing, Multi-Level Record Speaking) tushuntirishlar asosida,
   qisqa va amaliy shaklda qayta yozilgan. Namuna mashqlar — original. */
window.CEFR_GUIDES = {
  sections: [
    { id: "reading", name: "Reading", c: "r", note: "60 daqiqa · 5 qism · 35 savol", parts: ["p1", "p2", "p3", "p4", "p5"] },
    { id: "listening", name: "Listening", c: "l", note: "≈35 daqiqa · 6 qism · 35 savol", parts: ["l1", "l2", "l3", "l4", "l5", "l6"] },
    { id: "writing", name: "Writing", c: "w", note: "60 daqiqa · 2 topshiriq", parts: ["w1", "w2"] },
    { id: "speaking", name: "Speaking", c: "s", note: "≈15 daqiqa · 4 qism", parts: ["s1", "s2", "s3", "s4"] }
  ],
  g: {
    /* ======================= READING ======================= */
    p1: {
      sec: "reading", no: "Part 1", title: "Bo'shliqqa bitta so'z", go: "#/reading/p1/1", list: "#/reading/p1",
      chips: ["6 ta savol", "B1 daraja", "150–200 so'zli matn", "≈8 daqiqa"],
      what: "Gazeta yoki internet maqolasiga o'xshash qisqa matnda 6 ta bo'shliq bo'ladi. Har bir bo'shliqqa <b>bitta so'z</b> yozasiz. Eng muhimi: kerakli so'z <b>matnning boshqa joyida allaqachon bor</b> — uni o'ylab topmaysiz, matndan qidirib topasiz.",
      steps: [
        { t: "Matnni tez o'qib chiqing (skimming)", d: "Avval bo'shliqlarga qaramay, 30–40 soniyada butun matnni o'qing: mavzu nima, qaysi so'zlar ko'p takrorlanyapti? Ko'pincha 1-bo'shliqning javobi matn oxirida turadi — umumiy tasavvur vaqtni tejaydi." },
        { t: "Bo'shliqni \"bashorat\" qiling (prediction)", d: "Har bir bo'shliq uchun 3 savol bering: <b>1)</b> qaysi so'z turkumi kerak — ot, fe'l, sifat? <b>2)</b> ma'nosi qanday — shaxsmi, harakatmi, narsami? <b>3)</b> grammatik shakli — ko'plikmi (<i>these ___, many ___</i>), -ing, o'tgan zamon, yoki undan keyingi predlogga mosmi (<i>___ for → look</i>)?" },
        { t: "Javobni yaqindan qidiring", d: "Bo'shliqdan <b>2 gap oldin va 2 gap keyin</b> o'qing — javob ko'pincha shu oraliqda. Topilmasa, butun matn bo'ylab qidiring." },
        { t: "Gapga qo'yib tekshiring", d: "Topgan so'zingizni bo'shliqqa qo'yib, gapni to'liq o'qing: ma'no ham, grammatika ham to'g'ri bo'lishi kerak. So'zni matndagidek <b>aynan</b> ko'chiring — imlo xatosi javobni xato qiladi." }
      ],
      traps: ["Ikki so'z yozish — faqat <b>bitta</b> so'z!", "Grammatikaga mos, lekin ma'noga mos bo'lmagan so'zni tanlash", "Birlik/ko'plikni e'tiborsiz qoldirish (<i>planet</i> o'rniga <i>planets</i> kerak bo'lishi mumkin)", "Faqat bo'shliqdan keyingi gaplardan qidirish — javob oldinda ham bo'lishi mumkin"],
      example: {
        title: "Namuna: o'zingiz sinab ko'ring",
        text: "My grandmother keeps bees in her garden. Every summer, the (1) ___ make about twenty jars of honey. She gives most of the honey to her neighbours, and they bring her fresh eggs and vegetables in return. Last year, one of the (2) ___ taught her how to make candles from beeswax.",
        items: [
          { k: "gap", q: "(1) bo'shliq", a: ["bees"], why: "Kerak: ko'plikdagi ot (<i>the ___ make</i> — fe'l ko'plikda). Asal kim yasaydi? Birinchi gapda <b>bees</b> bor." },
          { k: "gap", q: "(2) bo'shliq", a: ["neighbours", "neighbors"], why: "<i>one of the ___</i> — har doim ko'plikdagi ot. Kimdir unga sham yasashni o'rgatgan: oldingi gapdagi <b>neighbours</b> mos keladi." }
        ]
      },
      tip: "Har bir bo'shliqqa ~1 daqiqa. Qiyin bo'shliqni o'tkazib yuboring va oxirida qayting."
    },
    p2: {
      sec: "reading", no: "Part 2", title: "E'lonlarni vaziyatlarga moslash", go: "#/reading/p2/1", list: "#/reading/p2",
      chips: ["8 ta e'lon", "10 ta vaziyat (A–J)", "2 tasi ortiqcha", "≈10 daqiqa"],
      what: "8 ta qisqa e'lon (reklama, kurs, mehmonxona, park va h.k.) va A–J harflari bilan 10 ta gap beriladi. Har bir e'longa <b>bitta</b> gap mos keladi, <b>ikkita gap ortiqcha</b> — ular hech bir e'longa to'g'ri kelmaydi. Odatda barcha e'lonlar bir mavzuda bo'ladi.",
      steps: [
        { t: "Avval A–J gaplarni o'qing", d: "10 ta gapni tez o'qib, har biridagi <b>kalit so'zlarning tagiga chizing</b>: nima kerak? (<i>job, free place to stay, exam, next summer, London</i>)." },
        { t: "E'lonni o'qib, asosiy ma'lumotni ajrating", d: "Har bir e'londa: nima taklif qilinyapti, kimga, qayerda, qachon, bepulmi? Bu ma'lumotlar kalit so'zlarning <b>sinonimi</b> bo'lib keladi: <i>free accommodation = free place to stay</i>, <i>business executives = for your job</i>." },
        { t: "Moslang va chizib boring", d: "Ishonchli juftlarni darhol belgilang va ishlatilgan harfni o'chirib qo'ying. Qolganlar orasida tanlash osonlashadi." },
        { t: "Shubhalilarni oxirida hal qiling", d: "Bitta e'longa ikki gap mos tuyulsa — har bir detalni solishtiring (sana, narx, joy, daraja). Ikkita gap ortiqcha ekanini unutmang." }
      ],
      traps: ["Bir xil so'z ko'rindi — demak javob shu, deb shoshilish (ko'pincha bu tuzoq)", "Gapning bir qismi mos, ikkinchi qismi mos emas (masalan, <i>London</i> to'g'ri, lekin <i>next summer</i> yo'q)", "Ortiqcha 2 ta gapni majburan biror e'longa joylash"],
      example: {
        title: "Namuna: qaysi gap mos?",
        text: "<b>E'lon 1:</b> ROYAL CITY HOTEL — Business centre with free Wi-Fi · Meeting rooms for up to 40 people · Airport transfer included.<br><br><b>E'lon 2:</b> GREEN VALLEY CAMPSITE — Bring your own tent! · Children under 12 stay free · Bikes for hire.",
        items: [
          { k: "choice", q: "E'lon 1 qaysi gapga mos?", o: ["A) You want to stay somewhere cheap with your kids.", "B) You need a place to organise a work meeting.", "C) You want to go cycling during your holiday."], a: 1, why: "<i>Meeting rooms for up to 40 people</i> = <b>a place to organise a work meeting</b>. Sinonim orqali berilgan." },
          { k: "choice", q: "E'lon 2 qaysi gapga mos?", o: ["A) You want to stay somewhere cheap with your kids.", "B) You need a place to organise a work meeting.", "C) You need transport from the airport."], a: 0, why: "<i>Children under 12 stay free</i> = arzon + bolalar bilan. C gapdagi transport E'lon 1 da bor edi — tuzoq." }
        ]
      },
      tip: "Har bir e'longa ~1 daqiqa. Kalit so'zni emas, ma'noni moslang."
    },
    p3: {
      sec: "reading", no: "Part 3", title: "Paragraflarga sarlavha tanlash", go: "#/reading/p3/1", list: "#/reading/p3",
      chips: ["6 ta paragraf", "8 ta sarlavha", "2 tasi ortiqcha", "≈12 daqiqa"],
      what: "Matn 6 ta paragrafdan iborat. 8 ta sarlavhadan har bir paragrafning <b>asosiy g'oyasiga</b> mos keladiganini tanlaysiz. Ikkita sarlavha ortiqcha.",
      steps: [
        { t: "Sarlavhalarni o'qing", d: "8 ta sarlavhaning kalit so'zlarini belgilang va har biri nimani nazarda tutayotganini qisqa tushunib oling." },
        { t: "Paragrafning asosiy fikrini toping", d: "Ayniqsa <b>birinchi, ikkinchi va oxirgi gaplarga</b> e'tibor bering — asosiy mavzu ko'pincha shu yerda. Lekin paragrafni to'liq o'qing: ba'zan asosiy fikr o'rtada bo'ladi." },
        { t: "Kalit so'zlardan xulosa chiqaring", d: "Paragrafdagi kalit so'zlarni yig'ib, \"bu paragraf aslida nima haqida?\" degan savolga bitta jumla bilan javob bering. So'ng shu jumlaga eng yaqin sarlavhani tanlang." },
        { t: "Ikkilansangiz — ikkalasini yodda tuting", d: "Bir paragrafga ikki sarlavha mos tuyulsa, ikkalasini belgilab keyingilariga o'ting. Keyinroq ulardan biri boshqa paragrafga aniq mos kelib, savol o'zi hal bo'ladi." }
      ],
      traps: ["Paragrafdagi bitta detalga mos sarlavhani tanlash — sarlavha <b>butun</b> paragrafni ifodalashi kerak", "Sarlavhadagi so'z matnda takrorlangani uchun tanlash", "Bitta sarlavhani ikki marta ishlatish (mumkin emas)"],
      example: {
        title: "Namuna paragraf",
        text: "Many people believe that working from home makes us lazy. However, a two-year study of 16,000 employees found the opposite. Those who worked from home completed 13% more tasks, took shorter breaks and were less likely to leave the company.",
        items: [
          { k: "choice", q: "Qaysi sarlavha eng mos?", o: ["A) Why people prefer offices", "B) A surprising result", "C) How to take better breaks"], a: 1, why: "Birinchi gapda keng tarqalgan fikr, keyin <i>However ... found the opposite</i> — kutilmagan natija. C variant faqat bitta detalni (breaks) ushlaydi." }
        ]
      },
      tip: "Avval eng oson paragraflarni hal qiling — qolgan sarlavhalar kamayadi."
    },
    p4: {
      sec: "reading", no: "Part 4", title: "Test + True / False / Not given", go: "#/reading/p4/1", list: "#/reading/p4",
      chips: ["B2 daraja", "4 ta test savoli", "5 ta T/F/NG", "≈13 daqiqa"],
      what: "B2 darajadagi uzunroq matn asosida ikki xil savol: <b>1)</b> 4 variantli test (bitta to'g'ri), <b>2)</b> gaplar matnga mosmi: <b>True / False / Not given</b>.",
      steps: [
        { t: "Test: savolni tushunib, matndan joyini toping", d: "Avval savolni yaxshilab tushuning, so'ng matndan shu savol olingan qismni tez toping va <b>diqqat bilan</b> o'qing." },
        { t: "Variantlarni birma-bir tekshiring", d: "Har bir variant nega to'g'ri yoki nega xatoligini tushuning. Qoida: <b>xato variantlar ko'pincha matndagi so'zlarning o'zi</b> bilan, to'g'ri javob esa <b>sinonimlar</b> bilan beriladi. Matndagi so'zni variantda ko'rsangiz — shoshilmang!" },
        { t: "True: ma'no bir xil", d: "Gap va matn bir xil narsani aytsa. Masalan, gap: <i>\"Kitob qimmat\"</i>; matn: <i>\"uni faqat boylar sotib ola oladi\"</i> → <b>True</b>." },
        { t: "False: ma'no qarama-qarshi", d: "Matn aksini aytsa. Gap: <i>\"Kitob qimmat\"</i>; matn: <i>\"kitob hamyonbop\"</i> → <b>False</b>." },
        { t: "Not given: matndan bilib bo'lmaydi", d: "Matn bu haqda hech narsa demasa. Gap: <i>\"Kitob qimmat\"</i>; matn: <i>\"kitob juda sifatli\"</i> — narxi haqida ma'lumot yo'q → <b>Not given</b>." }
      ],
      traps: ["O'z bilimingiz bilan javob berish — faqat matnga tayaning", "False va Not given ni chalkashtirish: matn <b>aksini aytdimi</b> (False) yoki <b>umuman aytmadimi</b> (NG)?", "<i>always, only, all, never</i> kabi so'zlar ma'noni butunlay o'zgartiradi"],
      example: {
        title: "Namuna",
        text: "The museum opened in 1998 and attracts around 200,000 visitors a year. Entry is free on Sundays, although special exhibitions still require a ticket.",
        items: [
          { k: "choice", q: "\"Visitors never have to pay on Sundays.\"", o: ["True", "False", "Not given"], a: 1, why: "Yakshanba kuni kirish bepul, <b>lekin</b> maxsus ko'rgazmalar uchun baribir chipta kerak. <i>never</i> so'zi matnga zid → False." },
          { k: "choice", q: "\"The museum is the most popular one in the city.\"", o: ["True", "False", "Not given"], a: 2, why: "Tashrif buyuruvchilar soni bor, lekin boshqa muzeylar bilan solishtirish yo'q → Not given." }
        ]
      },
      tip: "Savollar odatda matn tartibida keladi — javobni oldingi savol javobidan keyin qidiring."
    },
    p5: {
      sec: "reading", no: "Part 5", title: "C1 matn: bo'shliq + test", go: "#/reading/p5/1", list: "#/reading/p5",
      chips: ["C1 daraja", "500–650 so'z", "4 bo'shliq + 2 test", "≈15 daqiqa"],
      what: "Eng qiyin qism. Uzun matn asosida <b>4 ta bo'shliq</b> (matndan so'z, son yoki so'z+son) va <b>2 ta test</b> savoli beriladi.",
      steps: [
        { t: "Javoblar matnda ketma-ket", d: "Bo'shliqli gaplarning javoblari matnda <b>tartib bilan</b> joylashgan: 2-savol javobi albatta 1-savol javobidan keyin keladi. Bu qidirishni ancha tezlashtiradi." },
        { t: "Bashorat qiling (prediction)", d: "Bo'shliqqa nima kerak: ot, fe'l, sifat yoki <b>son</b>? Masalan <i>\"... about ___ people\"</i> — son kerak." },
        { t: "So'z + son ham mumkin", d: "Ko'pchilik \"yoki so'z, yoki son\" deb o'ylaydi. Aslida <b>\"25 students\"</b> kabi so'z va son birgalikda ham to'g'ri javob bo'lishi mumkin — savol shartini o'qing." },
        { t: "Grammatik va ma'no mosligi", d: "Matndan olgan so'zingiz gapni <b>grammatik</b> jihatdan ham, <b>ma'no</b> jihatidan ham to'liq to'ldirishi kerak. Matndagi shaklni aynan ko'chiring." },
        { t: "Test savollari — Part 4 usulida", d: "Savol → matndagi joy → variantlarni solishtirish. Sinonimlarga e'tibor, matndagi so'zni takrorlagan variantdan ehtiyot bo'ling." }
      ],
      traps: ["Savol shartidagi so'z cheklovini buzish (ONE WORD AND/OR A NUMBER)", "Javobni oldingi savol javobidan oldinroqdan qidirish", "Matnni to'liq tushunishga urinib vaqt yo'qotish — kerakli joyni toping"],
      example: {
        title: "Namuna",
        text: "Until the 1950s, most commercial flights carried fewer than 60 passengers. The arrival of jet engines changed everything: by 1970, the Boeing 747 could carry over 400 people across the Atlantic in a single trip.",
        items: [
          { k: "gap", q: "Early planes usually took fewer than ___ passengers.", a: ["60"], why: "Kerak: son (<i>fewer than ___</i>). Matnda: <i>fewer than <b>60</b> passengers</i>." },
          { k: "gap", q: "Long flights became possible thanks to ___ engines.", a: ["jet"], why: "Bitta so'z, sifat vazifasida: <i><b>jet</b> engines changed everything</i>." }
        ]
      },
      tip: "Vaqt tanqis: avval bo'shliqlarni, keyin testni ishlang."
    },

    /* ======================= LISTENING ======================= */
    l1: {
      sec: "listening", no: "Part 1", title: "Qisqa gaplar: mos javobni tanlash", go: "#/listening/l1/1", list: "#/listening/l1",
      chips: ["8 ta savol", "A / B / C", "har biri 2 marta"],
      what: "Kimdir sizga qisqa savol yoki gap aytadi (<i>Did you do your homework?</i>). Uchta javobdan <b>eng tabiiy va to'g'ri</b> javobni tanlaysiz.",
      steps: [
        { t: "Variantlarni oldindan o'qing", d: "Audio boshlanishidan oldin uchala javobni ko'zdan kechiring — ular sizga qanday savol kelishini taxmin qilishga yordam beradi." },
        { t: "Gapning vazifasini aniqlang", d: "Bu nima: <b>savol</b>, <b>iltimos</b>, <b>taklif</b>, <b>minnatdorchilik</b>, <b>uzr</b>? Har biriga odatiy javob bor: <i>Thank you → You're welcome</i>, <i>Would you like...? → Yes, please / No, thanks</i>." },
        { t: "Zamon va yordamchi fe'lni moslang", d: "<i>Did you...? → Yes, I did</i>; <i>Have you...? → Yes, I have</i>; <i>Can you...? → Sure / Sorry, I can't</i>. Yordamchi fe'l mos kelmasa — javob xato." },
        { t: "Wh-savollarga e'tibor", d: "<i>How long → For two weeks</i>; <i>How often → Twice a week</i>; <i>Where → At the station</i>. Wh-savolga <i>Yes/No</i> bilan javob berilmaydi." }
      ],
      traps: ["Savoldagi so'z takrorlangan javobni tanlash (ko'pincha tuzoq)", "Grammatik to'g'ri, lekin vaziyatga mos bo'lmagan javob", "Wh-savolga \"Yes\" bilan boshlangan javob"],
      example: {
        title: "Namuna (matn ko'rinishida)",
        text: "Siz eshitasiz: <b>\"How long did you stay in Samarkand?\"</b>",
        items: [
          { k: "choice", q: "Eng mos javob:", o: ["A) Yes, I stayed there.", "B) For about a week.", "C) At a small hotel."], a: 1, why: "<i>How long</i> — davomiylik so'raladi → <b>For about a week</b>. A — Wh-savolga Yes; C — <i>Where</i> savoliga javob." }
        ]
      },
      tip: "Ikkinchi eshitishda tanlovingizni tekshiring."
    },
    l2: {
      sec: "listening", no: "Part 2", title: "Monolog: bo'shliqlarni to'ldirish", go: "#/listening/l2/1", list: "#/listening/l2",
      chips: ["6 ta bo'shliq", "so'z yoki son", "eslatmalar shaklida"],
      what: "Bir kishi biror tadbir, joy yoki narsa haqida gapiradi. Siz qisqa eslatmalardagi 6 ta bo'shliqqa eshitgan <b>so'z yoki sonni</b> yozasiz.",
      steps: [
        { t: "Audiodan oldin bashorat qiling", d: "Har bir bo'shliqqa nima kerak: <b>son, sana, narx, ism, joy, ot</b>? Masalan <i>Maximum number of players: ___</i> → son; <i>www.___.com</i> → so'z (harfma-harf aytilishi mumkin)." },
        { t: "Tartib bilan tinglang", d: "Javoblar eslatmalar tartibida keladi. Bitta bo'shliqni o'tkazib yuborsangiz, keyingisiga o'ting — ikkinchi eshitishda qaytasiz." },
        { t: "\"Tuzatishlarga\" quloq soling", d: "Gapiruvchi ko'pincha avval bir narsani aytib, keyin tuzatadi: <i>\"It's on Tuesday... sorry, Wednesday\"</i>. To'g'ri javob — <b>oxirgisi</b>." },
        { t: "Imlo va shaklni tekshiring", d: "Eshitilgan so'zni to'g'ri yozing, ko'plik -s ni unutmang. Harfma-harf aytilgan so'zlarda (spelling) har bir harfni yozib boring." }
      ],
      traps: ["Birinchi eshitilgan raqamni yozish (keyin tuzatilishi mumkin)", "Ko'plik/birlikni e'tiborsiz qoldirish", "<i>fifteen / fifty</i>, <i>thirteen / thirty</i> kabi sonlarni adashtirish"],
      example: {
        title: "Namuna",
        text: "Siz eshitasiz: <i>\"The trip costs forty pounds... oh, sorry, that was last year's price. This year it's forty-five.\"</i><br><br>Eslatma: <b>Price of the trip: £ ___</b>",
        items: [{ k: "gap", q: "Narx", a: ["45", "forty-five", "forty five"], why: "Gapiruvchi avval 40 dedi, keyin <b>tuzatdi</b>: bu yil — <b>45</b>." }]
      },
      tip: "Raqamlarni so'z emas, son bilan yozing — tezroq va xatosiz."
    },
    l3: {
      sec: "listening", no: "Part 3", title: "Gapiruvchilarni fikrlarga moslash", go: "#/listening/l3/1", list: "#/listening/l3",
      chips: ["4–5 gapiruvchi", "6 ta variant (A–F)", "ortiqchalari bor"],
      what: "Bir mavzuda bir necha kishi qisqa gapiradi. Har bir gapiruvchiga A–F variantlaridan mosini tanlaysiz. Ba'zi variantlar ortiqcha qoladi.",
      steps: [
        { t: "Variantlarni o'qib, ma'nosini tushuning", d: "Har bir variantni o'z so'zingiz bilan qisqa ifodalang: <i>\"It is overrated\"</i> = <i>uni haddan tashqari maqtashadi</i>. Gapiruvchi aynan shu so'zlarni ishlatmaydi." },
        { t: "Umumiy fikrni tinglang", d: "Bitta so'zga emas, gapiruvchining <b>asosiy fikri yoki munosabatiga</b> e'tibor bering. U nimani his qilyapti, nima qildi, nimadan norozi?" },
        { t: "Tuzoq so'zlarga ehtiyot bo'ling", d: "Gapiruvchi bir nechta variantdagi narsalarni tilga oladi, lekin faqat bittasi uning <b>haqiqiy fikri</b>: <i>\"I thought it would be crowded, but actually...\"</i>" },
        { t: "Ikkinchi eshitishda tekshiring", d: "Birinchi eshitishda taxminiy javob, ikkinchisida tasdiqlang. Ishlatilgan variantni chizib boring." }
      ],
      traps: ["Variantdagi so'zni eshitib, darhol tanlash", "\"but\", \"actually\", \"in the end\" dan keyingi asosiy fikrni o'tkazib yuborish"],
      example: {
        title: "Namuna",
        text: "Gapiruvchi: <i>\"Everyone told me Venice would be magical. And it was pretty, I suppose, but honestly, with all the crowds and the prices, I didn't see what the fuss was about.\"</i>",
        items: [{ k: "choice", q: "Gapiruvchining fikri:", o: ["A) It was exactly as I had imagined.", "B) It is overrated.", "C) It is hard to find your way around."], a: 1, why: "<i>I didn't see what the fuss was about</i> = shahar <b>ortiqcha maqtalgan</b> (overrated). <i>pretty</i> so'zi A ga yetaklashi mumkin — tuzoq." }]
      },
      tip: "Har bir gapiruvchidan keyin 2–3 soniya ichida javobni belgilang."
    },
    l4: {
      sec: "listening", no: "Part 4", title: "Xaritada joylarni belgilash", go: "#/listening/l4/1", list: "#/listening/l4",
      chips: ["xarita / reja", "harflar bilan belgilangan joylar", "yo'nalish so'zlari"],
      what: "Kimdir bino, park yoki shaharcha bo'ylab yo'l tushuntiradi. Siz xaritadagi joylarga (kutubxona, kafe va h.k.) to'g'ri <b>harfni</b> tanlaysiz.",
      steps: [
        { t: "Xaritani o'rganing", d: "Audiodan oldin: kirish qayerda, \"Siz shu yerdasiz\" belgisi, asosiy yo'llar, tepa-past (shimol-janub). Belgilangan joylar ro'yxatini o'qing." },
        { t: "Yo'nalish so'zlarini biling", d: "<i>opposite</i> — qarshisida, <i>next to</i> — yonida, <i>between</i> — orasida, <i>on your left/right</i>, <i>at the end of</i>, <i>go past</i> — yonidan o'tib, <i>turn left</i>, <i>in the corner</i>, <i>behind</i>, <i>in front of</i>." },
        { t: "Barmog'ingiz bilan kuzatib boring", d: "Gapiruvchi bilan birga xaritada \"yuring\". Har bir yangi joy oldingisiga nisbatan tushuntiriladi." },
        { t: "Tartib bilan belgilang", d: "Savollar odatda gapirilish tartibida. Bitta joy topilmasa — keyingisiga o'ting." }
      ],
      traps: ["\"Your left\" va xaritadagi chap tomonni adashtirish (qaysi tomonga qarab turganingizga bog'liq)", "Tilga olingan, lekin javob bo'lmagan joyni belgilash (<i>go past the café</i> — kafe yo'nalish uchun aytildi)"],
      example: {
        title: "Namuna",
        text: "Xarita: kirishdan to'g'ri yo'lak. Yo'lakning chap tomonida A va B xonalar, o'ng tomonida C va D. Yo'lak oxirida E.<br><br>Eshitasiz: <i>\"Walk straight down the corridor. The library is the second room on your right, just before the end.\"</i>",
        items: [{ k: "choice", q: "Kutubxona qaysi harf?", o: ["B", "D", "E"], a: 1, why: "O'ng tomonda C va D. Ikkinchi xona — <b>D</b>. E — yo'lak oxiri (<i>just before the end</i> — undan oldin)." }]
      },
      tip: "Xaritadagi \"Siz shu yerdasiz\" nuqtasidan boshlang."
    },
    l5: {
      sec: "listening", no: "Part 5", title: "Parchalar bo'yicha test", go: "#/listening/l5/1", list: "#/listening/l5",
      chips: ["3 ta parcha", "har biriga 2 savol", "A / B / C"],
      what: "Uchta alohida suhbat yoki intervyu eshitasiz. Har biri bo'yicha 2 ta savol: ko'pincha gapiruvchining <b>fikri, his-tuyg'usi, sababi yoki maqsadi</b> haqida.",
      steps: [
        { t: "Savol va variantlarni o'qing", d: "Har bir parchadan oldin uning kirish jumlasini (<i>You hear part of an interview...</i>) va 2 savolni o'qing. Savolda kim haqida so'ralayotganini belgilang — erkakmi, ayolmi?" },
        { t: "Fikr va munosabatni tinglang", d: "Savollar <i>How does she feel...? What is his reaction...? Why did he decide...?</i> shaklida. Javob kamdan-kam to'g'ridan-to'g'ri aytiladi — ohang va izohdan xulosa chiqarasiz." },
        { t: "Variantlarni rad etib boring", d: "Har bir variant uchun \"bu aytildimi va aynan shu ma'nodami?\" deb so'rang. Ko'pincha 3 variantning barchasi tilga olinadi, lekin faqat bittasi savolga javob beradi." }
      ],
      traps: ["Variantdagi so'zlar eshitilgani uchun tanlash", "Boshqa gapiruvchining fikrini tanlash (savol erkak haqida, javob ayolniki)", "Gapiruvchining o'tmishdagi fikri va hozirgi fikrini adashtirish"],
      example: {
        title: "Namuna",
        text: "Ayol: <i>\"When I started, I made loads of mistakes with the staff, honestly. But looking back, that job taught me everything — I wouldn't be where I am now without it.\"</i>",
        items: [{ k: "choice", q: "How does the woman feel now about her first job?", o: ["A) Pleased with how she managed staff.", "B) Sure it gave her a good start.", "C) Upset about her mistakes."], a: 1, why: "<i>that job taught me everything... I wouldn't be where I am now</i> = yaxshi boshlanish bergan. A — aksincha, xodimlar bilan xato qilgan. C — xatolarni tan oladi, lekin xafa emas." }]
      },
      tip: "Savoldagi \"now\", \"at first\", \"in the end\" so'zlariga e'tibor bering."
    },
    l6: {
      sec: "listening", no: "Part 6", title: "Ma'ruza: bo'shliqlarni to'ldirish", go: "#/listening/l6/1", list: "#/listening/l6",
      chips: ["6 ta bo'shliq", "akademik ma'ruza", "gaplar parafraz qilingan"],
      what: "Ilmiy yoki akademik mavzuda ma'ruza/nutq eshitasiz. Gaplardagi 6 ta bo'shliqqa ma'ruzada aytilgan so'zni yozasiz.",
      steps: [
        { t: "Gaplarni oldindan o'qing", d: "Har bir gapni tushunib, bo'shliqqa qanday so'z kerakligini bashorat qiling (ot? sifat? ko'plik?). Bo'shliq atrofidagi so'zlar — sizning \"signal\"ingiz." },
        { t: "Parafrazga tayyor turing", d: "Gaplar ma'ruzadagi jumlalarning <b>boshqacha aytilgan</b> shaklidir. <i>\"has frequently been used in ___\"</i> → ma'ruzada <i>\"people often used them for meditation\"</i>. Bo'shliqqa tushadigan so'z esa odatda <b>aynan eshitiladi</b>." },
        { t: "Tartib bilan kuzating", d: "Javoblar gaplar tartibida. Bo'shliqsiz gaplar ham bor — ular sizga ma'ruzaning qayerida ekaningizni ko'rsatadi." },
        { t: "Imloni tekshiring", d: "Ilmiy so'zlar uzun bo'lishi mumkin — eshitganingizcha yozib, oxirida imloni tuzating." }
      ],
      traps: ["Gapdagi so'zni ma'ruzadan aynan kutish (parafraz qilingan)", "Bo'shliq grammatikasiga mos kelmaydigan shakl (birlik/ko'plik)", "Bitta bo'shliqqa ko'p vaqt ketkazib, keyingilarini o'tkazib yuborish"],
      example: {
        title: "Namuna",
        text: "Gap: <b>Early bicycles were mainly bought by wealthy ___ .</b><br><br>Eshitasiz: <i>\"At first, only rich young men could afford them — they were really a toy for gentlemen.\"</i>",
        items: [{ k: "gap", q: "Bo'shliq", a: ["gentlemen", "men"], why: "<i>wealthy</i> = <i>rich</i> (parafraz). Kim sotib olgan? <b>gentlemen</b> (yoki <b>men</b>). Ko'plik kerak." }]
      },
      tip: "Ma'ruza tez — har bir bo'shliqqa qisqa yozib, oxirida tozalang."
    },

    /* ======================= WRITING ======================= */
    w1: {
      sec: "writing", no: "Task 1", title: "Xat yozish", go: "#/writing/wt", list: "#/writing/w1",
      chips: ["kamida 150 so'z", "≈20 daqiqa", "rasmiy / norasmiy"],
      what: "Berilgan vaziyat bo'yicha xat yozasiz: shikoyat, so'rov, uzr, minnatdorchilik, ma'lumot, ishga ariza va h.k. Topshiriqda odatda <b>3 ta band (bullet)</b> bo'ladi — xatda <b>uchalasini ham</b> yoritish shart.",
      steps: [
        { t: "Kimga yozyapsiz? — uslubni tanlang", d: "Do'st, qarindosh → <b>norasmiy</b> (<i>Dear Tom, ... Best wishes,</i>). Kompaniya, rahbar, notanish odam → <b>rasmiy</b> (<i>Dear Sir or Madam, ... Yours faithfully,</i> / ismi ma'lum bo'lsa <i>Dear Mr Smith, ... Yours sincerely,</i>)." },
        { t: "Maqsadni birinchi gapda ayting", d: "<i>I am writing to complain about...</i> / <i>I'm writing to tell you about...</i>. O'quvchi xatning nima uchun yozilganini darhol tushunishi kerak." },
        { t: "Har bir bandga alohida paragraf", d: "3 ta band = 3 ta asosiy paragraf. Har birida bandni to'liq bajaring va 1–2 detal qo'shing (sana, narx, sabab, misol)." },
        { t: "Xulosa va xayrlashuv", d: "Nima kutayotganingizni ayting (<i>I look forward to hearing from you</i>) va uslubga mos yakun bilan imzolang." },
        { t: "2 daqiqa — tekshirish", d: "So'zlar soni (150+), 3 band bajarilganmi, uslub aralashmaganmi (<i>Hi</i> + <i>Yours faithfully</i> — xato), imlo." }
      ],
      traps: ["Bandlardan birini unutish — ball keskin tushadi", "Rasmiy xatda qisqartmalar (<i>I'm, can't</i>) va so'zlashuv iboralari", "Xatni yodlangan shablon bilan to'ldirib, vaziyatga javob bermaslik"],
      example: {
        title: "Tez test: uslubni aniqlang",
        items: [
          { k: "choice", q: "Siz yangi olgan kir yuvish mashinasi buzildi. Do'kon menejeriga yozasiz. Qaysi boshlanish to'g'ri?", o: ["A) Hi there!", "B) Dear Sir or Madam,", "C) Dear friend,"], a: 1, why: "Ismi noma'lum rasmiy shaxs → <b>Dear Sir or Madam,</b> va oxirida <b>Yours faithfully,</b>." },
          { k: "choice", q: "Qaysi gap norasmiy xatga mos?", o: ["A) I would be grateful if you could reply at your earliest convenience.", "B) Can't wait to hear from you!", "C) I am writing to formally request a refund."], a: 1, why: "Qisqartma va his-tuyg'u — norasmiy uslub. A va C — rasmiy." }
        ]
      },
      more: "Batafsil: Writing → Task 1 bo'limidagi 16 ta mavzu (xat turlari, tuzilishi, tone, iboralar).",
      tip: "Rejaga 3 daqiqa: har bir bandga 1 qatorlik g'oya yozib oling."
    },
    w2: {
      sec: "writing", no: "Task 2", title: "Insho yozish", go: "#/writing/wt", list: "#/writing/w2",
      chips: ["kamida 250 so'z", "≈40 daqiqa", "4–5 paragraf"],
      what: "Ijtimoiy mavzuda (ta'lim, texnologiya, atrof-muhit, shahar hayoti) insho yozasiz. Avval <b>insho turini</b> aniqlash muhim — tuzilish shunga bog'liq.",
      steps: [
        { t: "Insho turini aniqlang", d: "<b>Agree/disagree</b> — fikringizni bildirasiz; <b>Discuss both views</b> — ikkala tomon + o'z fikringiz; <b>Advantages/disadvantages</b>; <b>Problem/solution</b>; <b>Two-part question</b> — ikki savolga alohida javob." },
        { t: "5 daqiqa reja", d: "Har bir asosiy paragraf uchun bitta g'oya + tushuntirish + misol yozib oling. Rejasiz insho ko'pincha takrorlanadi va mavzudan chetga chiqadi." },
        { t: "Kirish: parafraz + pozitsiya", d: "Mavzuni o'z so'zlaringiz bilan qayta ayting (savoldagi gapni ko'chirmang) va inshoda nima qilishingizni yoki fikringizni bildiring." },
        { t: "Asosiy paragraflar: TEE", d: "<b>T</b>opic sentence (asosiy fikr) → <b>E</b>xplanation (nega?) → <b>E</b>xample (misol). Har bir paragraf bitta g'oyaga bag'ishlanadi." },
        { t: "Xulosa", d: "Asosiy fikrlarni qisqa takrorlang va pozitsiyangizni yana bir bor tasdiqlang. Yangi g'oya qo'shmang." },
        { t: "Bog'lovchilar", d: "<i>Firstly, Moreover, However, On the other hand, For instance, As a result, In conclusion</i> — fikrlarni ulaydi, lekin har gapda ishlatmang." }
      ],
      traps: ["Savolning bir qismiga javob bermaslik (ayniqsa two-part)", "Kirishda savolni so'zma-so'z ko'chirish", "Fikr bildirish so'ralganda pozitsiyasiz yozish", "250 so'zdan kam"],
      example: {
        title: "Tez test: insho turi",
        items: [
          { k: "choice", q: "\"Some people think children should start school at 4, others believe at 7 is better. Discuss both views and give your opinion.\"", o: ["A) Agree/disagree", "B) Discuss both views", "C) Problem/solution"], a: 1, why: "Ikkala fikrni yoritib, keyin o'z fikringizni berasiz: Kirish → 1-fikr → 2-fikr → xulosa (sizning pozitsiya)." },
          { k: "choice", q: "Qaysi kirish gapi yaxshi parafraz?", o: ["A) Some people think children should start school at 4.", "B) The ideal age for beginning formal education is a matter of debate.", "C) In this essay I will write about school."], a: 1, why: "B — mavzu o'z so'zlar bilan qayta aytilgan. A — ko'chirma, C — juda umumiy." }
        ]
      },
      more: "Batafsil: Writing → Task 2 bo'limidagi mavzular (har bir insho turi, bog'lovchilar, g'oyalarni rivojlantirish).",
      tip: "Vaqt: 5 daqiqa reja, 30 daqiqa yozish, 5 daqiqa tekshirish."
    },

    /* ======================= SPEAKING ======================= */
    s1: {
      sec: "speaking", no: "Part 1.1", title: "Shaxsiy savollar", go: "#/speaking/s1", list: "#/speaking/s1",
      chips: ["3 ta savol", "har biriga 30 soniya", "tayyorgarliksiz"],
      what: "O'zingiz, kundalik hayotingiz, odatlaringiz haqida 3 ta qisqa savol: <i>Do you like cooking? What do you usually do at weekends?</i> Har biriga <b>30 soniya</b> gapirasiz.",
      steps: [
        { t: "To'g'ridan-to'g'ri javob", d: "Birinchi gapda savolga aniq javob bering: <i>Yes, I really enjoy cooking.</i>" },
        { t: "Sabab qo'shing", d: "<i>because...</i> bilan nega shunday ekanini ayting: <i>...because it helps me relax after work.</i>" },
        { t: "Misol yoki detal", d: "<i>For example, last Sunday I made plov for my whole family.</i>" },
        { t: "Kerak bo'lsa — qo'shimcha", d: "Vaqt qolsa, solishtirish yoki kelajak rejasini qo'shing: <i>I'd like to learn Italian dishes next.</i>" }
      ],
      traps: ["Faqat \"Yes\" yoki \"No\" bilan to'xtash", "Yodlangan uzun matnni aytish — imtihonchi buni sezadi", "Savoldagi zamonni e'tiborsiz qoldirish (<i>Did you...?</i> → o'tgan zamonda javob bering)"],
      phrases: ["To be honest, ...", "I'd say that ...", "It depends on ...", "The main reason is that ...", "For instance, ..."],
      example: {
        title: "Tez test",
        items: [{ k: "choice", q: "\"Do you prefer mornings or evenings?\" — qaysi javob 30 soniyaga eng mos?", o: ["A) Evenings.", "B) Definitely evenings, because I'm much more productive after sunset. For example, I usually study English from 8 to 10 pm when it's quiet at home.", "C) I like mornings and evenings and also afternoons, all times are good."], a: 1, why: "Javob + sabab + misol. A — juda qisqa, C — aniq javob yo'q va mazmunsiz." }]
      },
      tip: "Formulani eslang: Javob → Sabab → Misol."
    },
    s2: {
      sec: "speaking", no: "Part 1.2", title: "Ikki rasmni solishtirish", go: "#/speaking/s2", list: "#/speaking/s2",
      chips: ["2 ta rasm", "3 ta savol", "har biriga 30 soniya"],
      what: "Sizga ikkita rasm ko'rsatiladi. Birinchi savol odatda <i>\"What do you see in these pictures?\"</i> — rasmlarni tasvirlab, solishtirasiz. Keyingi savollar shu mavzuda fikringizni so'raydi.",
      steps: [
        { t: "Umumiy mavzuni ayting", d: "<i>Both pictures show people eating, but in very different situations.</i>" },
        { t: "Farq va o'xshashlikni ko'rsating", d: "<i>In the first picture..., whereas in the second one...</i> / <i>Both of them...</i> / <i>Unlike the first picture, ...</i>" },
        { t: "Taxmin qiling", d: "Rasmda aniq ko'rinmagan narsani taxmin bilan ayting: <i>They seem to be..., It looks like..., They might be...</i>" },
        { t: "Fikr savollariga — sabab bilan", d: "Keyingi savollarda Part 1.1 formulasi: javob → sabab → misol." }
      ],
      traps: ["Har bir rasmni alohida, solishtirmasdan tasvirlash", "Mayda detallar ro'yxati (stol, stul, gul...) — asosiy farqni ayting", "\"I don't know\" deb to'xtash — taxmin qiling"],
      phrases: ["whereas / while", "Both pictures show ...", "In contrast, ...", "They seem to be ...", "It looks like ...", "I'd rather ... because ..."],
      example: {
        title: "Tez test",
        items: [{ k: "choice", q: "Rasm 1: oila uyda ovqatlanyapti. Rasm 2: do'stlar restoranda. Eng yaxshi boshlanish:", o: ["A) In picture one there is a table, a chair, a lamp and a plate.", "B) Both pictures show people having a meal, but the first one is at home with family, whereas the second is in a restaurant with friends.", "C) I like restaurants."], a: 1, why: "Umumiy mavzu + asosiy farq + <i>whereas</i>. A — ro'yxat, C — rasmni tasvirlamaydi." }]
      },
      tip: "Avval umumiy o'xshashlik, keyin asosiy farq."
    },
    s3: {
      sec: "speaking", no: "Part 2", title: "Rasm va savollar bo'yicha hikoya", go: "#/speaking/s3", list: "#/speaking/s3",
      chips: ["1 daqiqa tayyorgarlik", "2 daqiqa gapirish", "3 ta savol"],
      what: "Bitta rasm va unga bog'liq 3 ta savol beriladi (ko'pincha shaxsiy tajriba: <i>Tell me about a time when...</i>). 1 daqiqa tayyorlanib, <b>2 daqiqa uzluksiz</b> gapirasiz.",
      steps: [
        { t: "Tayyorgarlik: kalit so'zlar", d: "1 daqiqada har bir savolga 2–3 ta kalit so'z yozing — to'liq gaplar emas. Masalan: <i>Q1: grandfather, village, 2019 · Q2: taught fishing, patient · Q3: proud, still remember</i>." },
        { t: "Savollar tartibida gapiring", d: "Uchala savolga ham javob bering — har biriga taxminan 40 soniya. Bu hikoyangizni tartibli qiladi." },
        { t: "Hikoya qiling — detallar bilan", d: "Qachon, qayerda, kim bilan, nima bo'ldi, nima his qildingiz. O'tgan zamon shakllarini to'g'ri ishlating: <i>went, saw, was doing, had never...</i>" },
        { t: "Bog'lovchilar bilan ulang", d: "<i>First of all, After that, The reason why..., What I remember most is..., Looking back, ...</i>" }
      ],
      traps: ["1 daqiqada to'xtab qolish — 2 daqiqa to'ldirish kerak", "Bir savolga ko'p gapirib, boshqasiga vaqt qolmasligi", "Hamma narsani hozirgi zamonda hikoya qilish"],
      phrases: ["I'd like to talk about ...", "It happened when I was ...", "What made it special was ...", "I'll never forget ...", "Looking back, I think ..."],
      example: {
        title: "Tez test",
        items: [{ k: "choice", q: "Tayyorgarlik daqiqasida eng to'g'ri ish:", o: ["A) Butun javobni to'liq gaplar bilan yozish", "B) Har bir savolga 2–3 kalit so'z yozish", "C) Hech narsa yozmasdan kutish"], a: 1, why: "Kalit so'zlar tez yoziladi va gapirayotganda yo'l ko'rsatadi. To'liq gaplarga vaqt yetmaydi." }]
      },
      tip: "Har bir savolga ≈40 soniya — uchalasi ham yoritilsin."
    },
    s4: {
      sec: "speaking", no: "Part 3", title: "Munozara (FOR / AGAINST)", go: "#/speaking/s4", list: "#/speaking/s4",
      chips: ["1 daqiqa tayyorgarlik", "2 daqiqa gapirish", "jadval: tarafdor/qarshi"],
      what: "Bahsli mavzu va <b>FOR</b> (tarafdor) hamda <b>AGAINST</b> (qarshi) dalillar jadvali beriladi. Mavzuni muhokama qilib, ikkala tomonni yoritasiz va o'z fikringizni bildirasiz.",
      steps: [
        { t: "Kirish: mavzuni tanishtiring", d: "<i>Today I'd like to discuss whether... This is a controversial issue, and there are strong arguments on both sides.</i>" },
        { t: "FOR tomonini yoriting", d: "Jadvaldan 1–2 dalilni oling va <b>kengaytiring</b>: sabab + misol. Jadvaldagi gapni o'qib berish yetarli emas." },
        { t: "AGAINST tomonini yoriting", d: "<i>On the other hand, critics argue that...</i> — yana 1–2 dalil, tushuntirish bilan." },
        { t: "O'z fikringiz bilan yakunlang", d: "<i>Personally, I believe..., because...</i> — qaysi tomon kuchliroq va nega. Muvozanatli xulosa ham mumkin." }
      ],
      traps: ["Faqat bitta tomonni gapirish", "Jadvaldagi dalillarni so'zma-so'z o'qib chiqish", "O'z pozitsiyasini aytmasdan tugatish"],
      phrases: ["On the one hand, ... On the other hand, ...", "Supporters argue that ...", "Critics claim that ...", "This is because ...", "A good example of this is ...", "Weighing up both sides, I believe ..."],
      example: {
        title: "Tez test",
        items: [{ k: "choice", q: "Jadvalda: FOR — \"reduces traffic\". Buni qanday kengaytirasiz?", o: ["A) It reduces traffic.", "B) Firstly, it would reduce traffic, because fewer people would drive to work. In Tashkent, for example, rush-hour jams can take an hour.", "C) Traffic is bad."], a: 1, why: "Dalil + sabab (<i>because</i>) + mahalliy misol. A — jadvalni o'qish, C — fikr rivojlanmagan." }]
      },
      tip: "Tuzilish: kirish → FOR → AGAINST → sizning fikringiz."
    }
  }
};
