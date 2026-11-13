// CEFR Companion — Reading ma'lumotlari (Part 1–5).
// Manba: MULTILEVEL MASTER READING (Mirjonov & Qutimov, 2023).

/* ===== data.js ===== */
﻿// CEFR Companion - Reading Part 1 content
// Source: MULTILEVEL MASTER READING - Yusuf Mirjonov, Jaloliddin Qutimov (Factor Books, 2023)
// Each item: [exerciseNo, "pages", "answer1,answer2,..."]
const BOOK = { name: "MULTILEVEL MASTER READING", authors: "Yusuf Mirjonov, Jaloliddin Qutimov", publisher: "Factor Books", year: 2023 };
const READING_P1 = [
  [1, "7,8", "summer,visit,holiday,surf,but,instructor"],
  [2, "8,9", "people,food,pancake,races,church,pan"],
  [3, "9", "school,friends,old,started,day,gate"],
  [4, "9,10", "get,ship,spend,places,disadvantages,cabin"],
  [5, "10", "minutes,spends,breakfast,goes,healthy,hour"],
  [6, "10,11", "neighborhood,walk,houses,flowers,road,called"],
  [7, "11", "student,money,free,gym,read,documentaries"],
  [8, "11,12", "phone,shopping,buy,furniture,present,need"],
  [9, "12,13", "happens,if,time,alone,speak,tips"],
  [10, "13", "giant,festival,people,dishes,restaurants,family"],
  [11, "13,14", "famous,ice-cream,hard,worked,job,work"],
  [12, "14,15", "entertainment,mall,teens,shopping,families,decades"],
  [13, "15", "first,dinner,celebrated,thanksgiving,turkey,game"],
  [14, "15,16", "dog,cold,vet,every,animal,go"],
  [15, "16", "ink,north,bottle,museum,found,letter"],
  [16, "16,17", "life,inventions,letters,attractive,television,food"],
  [17, "17", "games,prices,pubs,serve,alcoholic,friends"],
  [18, "17,18", "started,university,happened,look,sister,twin"],
  [19, "18,19", "painter,famous,school,teacher,galleries,metres"],
  [20, "19", "island,mountain,climate,species,world,crater"],
  [21, "19,20", "difference,teenagers,staff,making,hotel,visitors"],
  [22, "20", "protect,streets,thieves,officers,paid,horses"],
  [23, "20,21", "dinosaur,nobody,kinds,giant,earth,died"],
  [24, "21", "friend,dog,elephants,rested,back,together"],
  [25, "21,22", "learn,violin,lessons,music,hard,playing"],
  [26, "22,23", "partner,join,because,people,different,club"],
  [27, "23", "children,new,first,primary,different,subjects"],
  [28, "23,24", "school,trip,see,tourists,island,environment"],
  [29, "24", "school,decided,enjoyed,made,business,jam"],
  [30, "24,25", "hotel,asked,beach,water,time,staying"],
  [31, "25", "island,turtles,field,scientists,earth's,lost"],
  [32, "25,26", "fire,fight,burning,restaurant,put,water"],
  [33, "26,27", "cars,gas,pessimists,air,optimists,colors"],
  [34, "27", "held,games,winners,sports,wars,rules"],
  [35, "27,28", "louder,women,voices,men,reason,scientists"],
  [36, "28", "preserve,wild,ago,spend,animals,country"],
  [37, "28,29", "earth,lived,dinosaurs,changed,fossils,animals"],
  [38, "29", "gestures,means,show,phrase,Chinese,English"],
  [39, "29,30", "environment,humans,provide,trees,animals,fire"],
  [40, "30", "speak,first,language,learns,mother,local"],
  [41, "30,31", "school,work,o'clock,bus,day,weekend"],
  [42, "31", "live,big,aunts,sister,emails"],
  [43, "31,32", "records,book,breaking,impossible,world"],
  [44, "32", "birthday,babies,common,national,doctors"],
  [45, "32,33", "museum,frogs,scientists,find,male"],
  [46, "33", "machines,people,statues,ancient,built"],
  [47, "33,34", "policemen,city,thieves,paid,horses"],
  [48, "34,35", "city,streets,artists,festival,performances"],
  [49, "35", "burglaries,people,houses,police,happen"],
  [50, "35,36", "wool,sheep,sweaters,socks,customers"],
  [51, "36", "birds,plane,weather,flew,way"],
  [52, "36,37", "school,jam,making,friends,business"],
  [53, "37,38", "books,read,animals,film,change"],
  [54, "38", "sing,radio,songs,park,famous"],
  [55, "38,39", "years,children,lived,written,books"],
  [56, "39", "sport,snowboarding,mountains,competitions,important"],
  [57, "39,40", "lake,fish,ice,bread,caught"],
  [58, "40,41", "job,television/tv,music,show,band/bands"],
  [59, "41", "player,country,basketball,parents,want"],
  [60, "41,42", "shoes,basketball,friends,buy,sports"],
  [61, "42,43", "go,football,tickets,club,cost"],
  [62, "43", "song,voice,record,album,stop"],
  [63, "43,44", "dogs,human,smell,hearing,blind"],
  [64, "44", "manager,job,supermarkets,day,week"],
  [65, "44,45", "television,students,cars,park,school"],
  [66, "45", "shops,open,hours,morning,supermarket"],
  [67, "45,46", "treasures,feathers,held,shelf,beach"],
  [68, "46,47", "magazine,videos,skateboarding,street,skate"],
  [69, "47", "years,lessons,teachers,known,film"],
  [70, "47,48", "news,home,running,office,children"],
  [71, "48,49", "pools,friends,competitions,swimmers,swimming"],
  [72, "49", "sing,internet,break,record,album"],
  [73, "49,50", "statue,owner,station,dog,professor"],
  [74, "50", "customers,feet,shoes,pairs,size"],
  [75, "50,51", "friends,game,reading,computer,hat"],
  [76, "51,52", "girl,team,football,parents,club"],
  [77, "52", "circus,clown,jobs,brothers,house"],
  [78, "52,53", "course,food,cooking,adults,children"],
  [79, "53,54", "mammals,underwater,whales,sleep,surface"],
  [80, "54", "animals,transmitted,symptoms,scientists,children"],
  [81, "54,55", "pieces,player,king,mind,clock"],
  [82, "55,56", "boxes,cups,birthdays,market,flowers"],
  [83, "56", "breakfast,school,morning,homework,dinner"],
  [84, "56,57", "bear,run,kinds,pandas,food"],
  [85, "57", "safe,tea,people,caffeine,drink,sleeplessness"],
  [86, "57,58", "common,dolphins,discover,people,kill,creatures"],
  [87, "58", "president,children,political,letters,family,life"],
  [88, "58,59", "safe,tests,blindfold,perceive,ability"],
  [89, "59", "jeans,pants,been,sold,demand/demands,designed"],
  [90, "59,60", "built,builders,stones,brought,stonehenge,observatory"],
  [91, "60,61", "century,laboratory,lichens,world,half,chemical"],
  [92, "61", "moon,place,earth,atmosphere,air/atmosphere,live"],
  [93, "61,62", "islands,crust,water,layer,ocean,volcano"],
  [94, "62", "park,people,school,place,students,called"],
  [95, "62,63", "diet,nutrients,meat,found,eat,vegetarians"],
  [96, "63", "time,Zuckerberg,student,US,Facebook,users"],
  [97, "63,64", "animals,pod,dolphins,relation,swimmers,sharks"],
  [98, "64", "april,food,jokes,spaghetti,BBC,penguins"],
  [99, "64,65", "countries,job,training,astronauts,Japanese,space"],
  [100, "65,66", "sad,hotel,music,building,pool,swimming"],
];


/* ===== passages_p1.js ===== */
// Auto-generated reading passages (MULTILEVEL MASTER READING - Part 1)
const READING_P1_TEXT = {
  1: { title: "", body: "I usually teach English at a language school in the summer. I often can't\n\nenjoy the {{1}} because I am so busy. So next summer, I'm not planning to work. Instead, I'm going to have a proper summer holiday. I'm going\n\nto buy a campervan and drive around Ireland. I'm going to {{2}}\n\nlots of beautiful beaches and learn to surf! I'm mostly going to travel alone,\n\nbut I will visit friends. One friend, Cathy, is a school teacher, so she has a\n\nlong summer {{3}}, so hopefully, we will spend a week or two together. Another Irish friend, Joe, has a new house there, so I'll stay with him for a few days and help him paint the rooms.\n\nLast year, I did a surfing instructor course, and I spent the summer teaching people to {{4}} It was great! I was in the sea and sun all day, and every evening, my friends and I had a barbecue on the beach. The surf school asked me to return this summer, {{5}} I'm not going to do that. Last autumn, I learned to scuba dive, and I'm going to do diving {{6}} course soon." },
  2: { title: "Pancake Day", body: "In the UK, {{1}} celebrate Pancake Day. This festival takes place in February, on Shrove Tuesday. This is the day before Lent. Lent is an important time in the Christian calendar. It lasts 47 days. During Lent, people traditionally stop eating delicious {{2}}, like cakes and chocolate. So on Shrove Tuesday, they must eat up all the nice food in their cupboards. So they make pancakes, and they often eat them with lemon and sugar.\n\nMany British towns hold pancake races on Shrove Tuesday. People wear fancy dresses and run down the street with a pancake in a pan. They must throw the {{3}} in the air and catch it in the pan as they run. It must not fall on the ground.\n\nThe tradition of pancake {{4}} started in Olney, Buckinghamshire. According to a story, a housewife made pancakes on Easter Sunday in 1445. Then she heard the church bells. She was worried because she was late for {{5}}, so she ran to church with her {{6}} and pancake in her hand! Now, Olney's pancake races are famous." },
  3: { title: "Memories of my first day at school", body: "I remember my first day at school very well. I knew the {{1}} quite well because my older sister, Sandy, went there and every day, dad and I met her at the school gate after school. Every day, she ran out of the school with her {{2}} She often carried a painting. I felt jealous. I wanted to paint too!\n\nI was five years {{3}} when I started school. Most of my friends in my class {{4}} school in September, but I started school in January, when I was five years old, because my birthday is in December. Three other kids started school on the same {{5}} as me. I was excited about my first day. I had my new uniform: a black skirt, a white t-shirt and green jumper, and a new red bag. When we arrived that day, a teacher met the new children at the school {{6}} Dad hugged me and said goodbye. I stood with the other children. I didn't talk to them because I was too nervous. Then, Mrs Wilson took us to our classroom." },
  4: { title: "", body: "I used to work on cruise ships as a musician. I traveled to many places!\n\nI spent the month before the first lockdown in four continents! I used to {{1}} up really early, drive to the airport and fly to a port across\n\nthe world and get on a {{2}} just to get to work! Then I used to\n\n{{3}} between three and fourteen days on the ship. The ships\n\nwere great. The food was excellent, and the staff were brilliant. The ship\n\nstopped at fantastic {{4}} and I often used to spend the afternoon at the beach drinking cocktails or sightseeing. But there were disadvantages too. One of these {{5}} is that I often didn't know\n\nanyone on the ship. But the passengers all knew me, and they used to talk\n\nto me every time I left my cabin. I didn't have any privacy. Of course, I had to chat with them politely even when I wasn't in the mood. So I prefer to stay in my {{6}} most of the day." },
  5: { title: "The daily routines of a sportswoman", body: "Janet is an athlete, and she wakes up at 4:30 am every weekday morning. She spends the first 30 minutes reading and then 15 {{1}} meditating. At 5:15 am Janet checks her email and she {{2}} only 30 minutes on it and then goes for her first run of the day. She runs for an hour and a half along the lake near her house. After running, Janet has a shower and then prepares {{3}}, which is usually cereal and fruit. However, she occasionally has a less healthy breakfast.\n\nShe usually finishes breakfast at around 8 am. If it is a weekday, she always leaves the house at 8:20 and {{4}} to training. Her training starts at 9 am, and she needs 30 minutes to drive to the gym. She trains for 3 hours with her team and then goes home for lunch. She always eats a very big and {{5}} lunch. As soon as she finishes lunch, she has a nap for one {{6}}" },
  6: { title: "My neighborhood", body: "My neighborhood is very peaceful and quiet. It is a new {{1}} and there are a lot of big houses and some apartment buildings. The streets are very clean, and there aren't many cars. My school is near my house. I can {{2}} there in 10 minutes on foot.\n\nThere's also a park, which has a small playground for children and a large field. I like to walk there with my friends after school. All of the houses have a small front yard but big back yards. Most of the houses have a swimming pool, and some {{3}} even have a trampoline!\n\nEveryone has a garden with flowers, and in the spring, these {{4}} are very beautiful. My road is called Maple Road. It is not\n\nin the city. It's in the suburbs. There aren't any restaurants, bars or cinemas\n\non my {{5}} But, if you go to Main street, you can find a lot of\n\nthings to do. My favorite store is there. It's {{6}} Knick-Knack,\n\nand they sell everything you can imagine." },
  7: { title: "What do you do with your free time?", body: "I'm almost 19 years old and I am a {{1}} I finished my first year of university. I'm currently on holiday, and I have a lot of free time. Having free time is nice, but the problem is that when you are a student, you never have {{2}} And when you have a lot of {{3}} time, but you don't have much money, it can get boring.\n\nEvery morning I go to the gym, and I read in the afternoons. But I still have a lot of free time. The first activity is going to the {{4}} which takes me about two hours, including the road time and the post-gym shower. And I usually {{5}} for one hour. Another activity I do is watching documentaries. I study history, and I love historical documentaries. I learn a lot from them. I watch {{6}} for one and a half hours four or five times a week." },
  8: { title: "Online shopping", body: "My name is Sara, and I love shopping online. I use mobile {{1}}\n\napps, but sometimes I use my computer. The phone is more convenient for\n\nme, and I can even do my {{2}} from bed!\n\nI love shopping so much that I can {{3}} everything I need\n\nat home. I get food, electronics, books, and large pieces of {{4}} like my sofa and bookshelves all online! But apart from furniture I still prefer getting clothes from a store so I can try them on to be sure they fit me fine.\n\nYesterday, I bought a birthday {{5}} for my mother, and the present arrived today! That saves me a lot of time. I am a very busy person, and I am a little forgetful too. If I think of something I {{6}}, then it is wonderful that I can buy it at that moment. My friends aren't as comfortable with buying things online as I am because they think that it can be dangerous." },
  9: { title: "Travelling alone", body: "Travelling alone seems scary if it's the first time you are going to leave the comfort of home. You will probably think about the potential risks or difficult situations. What {{1}} if I get ill, or have an accident? Isn't it dangerous to go out alone at night? What happens {{2}} I get attacked? Isn't it strange to eat at restaurants alone all the time?\n\nMost travelers have these worries, but all these fears disappear when they see all the benefits of new things. Here I'm going to give you 3 tips on how to travel alone and have a good {{3}}\n\nSpeak the language\n\nHumans are sociable creatures. We all need to talk to other people. If you are travelling {{4}}, it's a good idea to go somewhere you {{5}} the language.\n\nSleep with the locals\n\nHotels are comfortable but very lonely, and hostels are perfect for people who travel alone, but you will only speak with other tourists. Try to rent a room in an apartment. This will give you a connection with local residents and they can give you a lot of {{6}} on what you can do." },
  10: { title: "Two American Festivals", body: "Burning Man\n\nBurning Man is an event that started in 1986 in Black Rock City, Nevada. People go to the desert and build a giant community for nine days. At the end of the festival, they burn a {{1}} wooden statue of a man. That's where the name comes from. The {{2}} celebrates inclusion, community, and responsibility. Everyone should share their talents so others can enjoy them for free. It is now also very popular with young influencers on social media and other famous {{3}}\n\nThe Taste of Buffalo\n\nThe Taste of Buffalo in Buffalo, New York, is the largest 2-day food festival in the country every year. Nearly half a million people visit the festival to eat special dishes from over 50 restaurants. There are over 200 different {{4}} to try! Most of the food is from regional {{5}}, and it is a great family event. It is a good place if you want to visit here as a {{6}}" },
  11: { title: "Famous people's first jobs", body: "Not all famous people were born into famous families. A lot of them had\n\nnormal lives before becoming {{1}} They also had jobs like the\n\nrest of us. Here are just a few:\n\nFormer President Obama worked at an ice-cream parlour selling\n\n{{2}} cones. He was in high school in Honolulu, Hawaii and said\n\nit was quite hard. He also said that the job taught him about responsibility, {{3}} work and how to spend time with work, friends and family.\n\nBrad Pitt had a weird job when he was younger. He worked as a chicken! That's right. He {{4}} at a restaurant called El Pollo Loco in Hollywood, and his {{5}} was to dress up like a chicken and wave at the cars on the road. In fact, if you go on a \"See the Stars\" tour in Hollywood, many of them will take you past the same restaurant where Brad used to {{6}}" },
  12: { title: "Going to the Mall", body: "Every city in the USA has a mall or four. There are about 1,100 malls in the US. These giant store-filled buildings are one of America's greatest {{1}} options for teens and families.\n\nMall of America in Minnesota is the largest {{2}} It is so big that it has a park in it, Nickelodeon Universe, with several roller coasters! There are more than 500 stores in it, about 400,000m2 and about 12,000 people work there.\n\nBut malls nowadays aren't the same as they used to be in the 80s and 90s. During those decades, {{3}} would go to the mall and spend hours shopping, playing video games at the arcade, or just hanging out with friends. It was cool in the summer and warm in the winter. In those days, malls provided the perfect source of {{4}} and entertainment for entire {{5}}\n\nBut some experts believe in upcoming {{6}} malls will be replaced by online shopping." },
  13: { title: "Thanksgiving", body: "Thanksgiving is celebrated in the USA on the 4th Thursday of November. The tradition comes from the {{1}} people to arrive from England to North America. The Native Americans taught them to grow food and hunt, and the pilgrims invited the Native Americans for a {{2}} to eat after the harvest. This was the first Thanksgiving that people {{3}}\n\nNowadays, {{4}} is the country's largest secular holiday and represents a time when friends and family get together for a large turkey dinner. Traditionally people make stuffing, mashed potatoes, cranberry sauce, sweet potatoes, and pumpkin pie to go with the huge roast {{5}}\n\nIn the morning, there is a massive parade in NYC called the Macy's Thanksgiving Day parade, which has a lot of giant balloons, famous people, and marching bands. In the afternoon, people watch an American football game. There is usually one {{6}} in the afternoon and one in the evening." },
  14: { title: "", body: "Daisy is a dog. She has her hair combed twice a day, and she goes to\n\nthe hairdresser of a {{1}} every month. Daisy wears ribbons and\n\na woollen sweater on {{2}} days and gets the best quality fillet\n\nsteak and a bowl of milk twice a day. If she shows any sign of cold or fever,\n\nshe is immediately taken to a vet. She is given medicines at {{3}}\n\nShe always attends all family celebrations: she sits in her mistress' lap and\n\nis fed with a spoon. She is loved, adored and pampered. An average of {300\n\nis spent on her {{4}} month.\n\nSome animal lovers go as far as burying their pets in {{5}}\n\ncemeteries. They buy them jewellery and treat them as their children, if not higher. At the same time, there are thousands of animals that have nothing to eat and nowhere to {{6}} Very often, these animals have once also had their own homes and masters, so they threw away." },
  15: { title: "Message in the Bottle", body: "More than 110 years ago a young woman named Sofia Nielsen was walking on the seaside of the North Sea. During the trip, she got a crazy idea. She wrote a message with the {{1}} put it in a green bottle and threw the bottle into the {{2}} Sea. What she didn't know is that the {{3}} would survive so long. Last week, a Danish fisherman found Nielsen's bottle when he was on his everyday fishing trip. He carried it to a museum.\n\nThe historians in the {{4}} discovered that it's the historic message in the bottle in the world! They also {{5}} Nielsen's grandson, Malthe who is now 72 years old. He lives in Copenhagen and never met his grandmother who died in 1940. What did the bottle contain? Well, there was a letter inside. Nielsen asked the finder to return it to his home address in Copenhagen. They couldn't read the rest of the {{6}} because some water got inside and damaged the ink. But it didn't stop the specialists. They're trying to figure out the entire letter and hope it'll be possible to read it soon." },
  16: { title: "The Old Days", body: "{{1}} was much better in the old days as there were no so-called useful inventions which mainly seem to cause us so many problems. One of such {{2}} is the telephone. Can you imagine life without the telephone? Life will be attractive! You could have a bath without\n\nbeing interrupted by its demanding tones! We might even start writing\n\nletters to each other again! I've almost forgotten what it's like to get\n\n{{3}} from friends.\n\nEven more {{4}} still is the thought of having no television.\n\nWe might start talking to each other again! I wouldn't be sorry to say goodbye to modern food preserving methods. Dried, frozen, tinned food certainly\n\nsave the housewife's time, but for what - to watch more {{5}}\n\nBring back the good old days of fresh {{6}}! I can do without the\n\nvariety in the modern supermarket. Last but not least how much better it\n\nwas to travel in the old days." },
  17: { title: "The Great English Pub", body: "Whenever you find yourself in England, there will be a pub nearby. Some will be old-style, with cheaper prices and indoor games of darts and dark wooden beams. You can play these {{1}} while drinking beer. Other pubs are more modern and offer great British food at reasonable {{2}}\n\n{{3}} are usually open every day from 11.00 a.m. Most pubs serve coffee or tea, but they also {{4}} alcoholic or soft drinks. To enter a pub, you must be over fourteen, but if you want to buy an {{5}} beverage, you must be eighteen or older. Pubs are good places for socializing with your {{6}} Some people can spend hours over their ginger ale or beer, talking to friends or strangers." },
  18: { title: "", body: "Something very strange happened to Tamara. She never knew she had\n\na twin sister until she started university! Tamara was born in Mexico. Her\n\nparents could not look after her so she went to live with a family in Manhattan, USA.\n\nWhen Tamara was twenty years old, she {{1}} university in Long Island. She enjoyed her {{2}} life as a student. But one day she was walking home from class, and a student smiled at her. \"Hello Adriana!\" said the student. \"I'm not Adriana,\" said Tamara. This {{3}} to Tamara again and again. People Tamara didn't know kept calling her Adriana. It was very strange.\n\nOne day, when a woman called her Adriana, Tamara asked \"Why do you keep calling me Adriana?\"\n\nThe woman replied, \"You {{4}} like my friend Adriana. You have the same face and the same hair. Is Adriana your {{5}} Tamara said that she did not have a sister called Adriana. But she was interested in this girl Adriana. Finally, she knew that Adriana is her {{6}} sister." },
  19: { title: "The Artist Rosa Bonheur", body: "Rosa Bonheur was a French {{1}} who was possibly the most famous female painter of the 19th Century. She was born in 1822 •in Bordeaux, France and was the oldest child in a family of artists. Her father was a {{2}} painter and her mother, who died when Rosa was eleven, was a piano teacher. When she was 6, Rosa moved to Paris with her brothers and mother.\n\nShe was very unhappy at school and her father took her out of {{3}} and gave her to an art {{4}} who loved her job. Rosa showed some of the great paintings in the Parisian art galleries and became a very famous painter of animals. People could also see her work in French art {{5}} One painting, 'The Horse Fair' which is a very large work that measures nearly three {{6}} high by five metres wide, is in the Metropolitan Museum of Art in New York." },
  20: { title: "Jeju", body: "Jeju Island is the largest island in South Korea, with an area of 1846 square km. It is also one of the nine provinces of the country, and the smallest of all of them. It was formed as a result of a volcanic eruption.\n\nJeju is the capital of Jeju Island, and Halla Mountain is the key landmark of this {{1}} It is also the tallest {{2}} in South Korea, with a height of 6,400 feet. This island has a temperate climate and it rarely falls below freezing, not even in winter. So this is favorable {{3}} for tourists to come to the island. It is home to variety of animal species including almost 950 {{4}} of insects.\n\nJeju Island is one of the new seven natural wonders of the world, and it has the finest lava tube system of caves in the {{5}} The peak of the Halla Mountain looks like a giant crater, and is actually a dormant volcano, which means it has been inactive for years. There is a lake inside the {{6}} on the mountain, which is called Baengnokdam." },
  21: { title: "Wivenhoe hotel", body: "Wivenhoe is a beautiful hotel in the countryside, with many rooms and\n\nan excellent restaurant. However, there is a big {{1}} between\n\nWivenhoe and other hotels. The first difference is that Wivenhoe is part Of\n\na university, and secondly, its staff are all teenagers.\n\nIn fact, Wivenhoe is a hotel school for {{2}} who are hoping\n\nto get jobs in the hotel or restaurant business. The teenagers learn serving visitors by helping {{3}} in a real hotel, while their teachers\n\nwatch them carefully. They do everything, from {{4}} beds and\n\ncleaning bathrooms to preparing menus and answering the telephone.\n\n.1\n\nSome British people may think that a {{5}} run by teenagers is a rather strange idea, but many {{6}} say that staff made them happy by making them all conveniences." },
  22: { title: "", body: "Today there are police officers everywhere, but in 1700 London had none at all. A few old men used to {{1}} the city streets at night, and they were not paid very much.\n\nAbout 300 years ago, London was starting to get bigger. The city was very dirty, and many people were poor. There were so many thieves who stole money in the {{2}} that people stayed at home as much as possible.\n\nIn 1750, Henry Fielding started to pay a group of people to stop {{3}} and protect people. They were like police officers and were called 'Bow Street Runners' because they worked near Bow Street.\n\nFifty years later, there were 120 Bow Street Runners, but London had become very big and needed more police {{4}} so, in 1829, the first Metropolitan (or London) Police Force was started with 3000 officers. Most of them worked on foot, but a few rode horses. Until 1920 all the police in London were men.\n\nToday, London police are quite well {{5}} and for the few police officers who still ride {{6}} the pay is even better than for the others." },
  23: { title: "Dinosaurs", body: "Nobody has ever seen a dinosaur. The last {{1}} died about 60 million years ago, a long time before there were any people on the earth. {{2}} knows for sure why they all died. The nearest living relatives of dinosaurs are birds.\n\nDinosaurs didn't all look the same. There were more than 5000\n\n{{3}} Some were very small, but others were {{4}}\n\nThe largest ones were bigger than any other kinds of animals ever lived on\n\nthe {{5}}\n\nThe Brontosaurus, for example, was twenty metres long, and it ate\n\nplants. The Tyrannosaurus Rex was not as giant, but it was stronger. It had\n\nsharp teeth for eating meat, and it could also run fast because it had long\n\nback legs. Unfortunately, they all {{6}} long before." },
  24: { title: "", body: "There is a place in Tennessee where old elephants go to live. Each elephant has a best friend there. Most of these friends are other elephants. But an elephant named Tarra chose a dog for her best {{1}}! Tarra and the {{2}}, Bella, go everywhere together. The two friends eat together. They sleep together, too.\n\nOne day, Tarra hurt her back. She needed to rest. She rested inside the office of the people who care for the {{3}}. She rested for three weeks. She rested until her back was better. While Tarra {{4}} Bella stood by a gate outside the office. She stood and stood. The nice people carried Bella out to see Tarra. Bella's tail wagged. The two friends visited every day until Tarra's {{5}} get well again. Tarra and Bella are {{6}} again. To show her love, the elephant pets Bella's head with her great big foot!" },
  25: { title: "Jack Calder", body: "Violin player Jack Calder plays in the Australian band, Ocean Blue.\n\nJack Calder started playing the violin when he was ten. \"My music\n\nteacher played and one day he asked if anyone wanted to learn. Some girls put up their hands and I wished to {{1}} I didn't have a {{2}} but my uncle said I could use his. The lessons were really hard at first, but playing the violin soon became important to me. So I got used to the {{3}}\n\nAfter leaving school, Jack moved to Melbourne. For a time, he preferred listening to music to playing it. The rock music he listened to sounded very different from violin {{4}}, so he bought an electric violin, and started putting the things he liked about rock music into the music he played on his violin. Doing this is not {{5}} anymore.\n\nA year later, Jack met a small group of Melbourne musicians. \"We all thought about music in the same way and started Ocean Blue together. A year later, we were {{6}} in lots of concerts, and our music was selling well. But we didn't want this to make us different people. We didn't want to stop being friends.\"" },
  26: { title: "Joining in a ballroom dancing club", body: "When I started college, I wanted to find a club to join. One of the first ones I looked at was ballroom dancing - a type of dance you do with a {{1}}. The people there seemed to be having a great time, so it was not for me to find a partner. It didn't cost much, so I decided to {{2}} the club.\n\nThe first week I went, I was really worried {{3}} the teacher told us that there were nineteen different dances we had to learn. But it's been fine. When there's a new thing to learn, he shows it to us lots of times and makes sure we're all good at it before we do the next thing.\n\nWhen I joined, I didn't know any of the other {{4}} in the club because we all study {{5}} subjects. But it's been a great way to meet people, and I've made some of my best friends in the {{6}}" },
  27: { title: "Starting at a new school — by Anna Gray, age 11", body: "I've just finished my first week at a new school and I'd like to tell you about it. Like other children in my country, I went to primary school until I was eleven and then I had to go to a different school for older {{1}}. I loved my primary school but I was excited to move to a different {{2}} school.\n\nIt was very strange on our {{3}} day. There were some kids from my {{4}} school there, but most of the children in my year group were from {{5}} schools. But I soon started talking to the girl who was sitting beside me in maths. She lives near me so we walked home together. We're best friends now.\n\nWhen I saw our timetable there were lots of subjects, some were quite new to me! Lessons are harder now. They're longer and the {{6}} are more difficult, but the teachers help us a lot." },
  28: { title: "The island of Kiobo", body: "My name's Lisa Scott and I'm fifteen. Last year, I traveled from my home\n\nin New York to the island of Kiobo in the Pacific Ocean with a group of high\n\n{{1}} students. I was surprised that it took us more than two days\n\nto get there. First, we flew to Australia and then we had to make a trip all\n\nnight by boat to Kiobo. We were lucky because our high school paid for the\n\n{{2}} We were really tired when we arrived, but it was good to see\n\nthe sun shining and beautiful environment because it had been really cold\n\nin New York.\n\nAs we walked up the beach, I was amazed to {{3}} that there were lots of {{4}} singing and playing guitars. They were very welcoming and keen to find out about us. They said they wanted to share their {{5}} with tourists and use the money from tourism to protect their {{6}} and their way of life." },
  29: { title: "Robbie's first business", body: "Robbie enjoyed art most at school. He liked maths and music too, but because it was hard for Robbie to spell words correctly or to understand texts, he didn't enjoy being at {{1}} In English, he had lots of problems. So, when Robbie was 12, his parents {{2}} he should leave school and be taught differently at home. There, he learnt about business and working on computers and spent more time happily studying art, exercising and practicing on his violin.\n\nRobbie's grandmother started teaching him to cook too, which, like his mother and aunt, he really {{3}} doing. One day, she told him her secret way of making jam. Robbie made too much for the family to eat so he took it to other people in his street. He {{4}} more and more jam. It tasted so good that his parents' friends started buying it from him. Robbie added all his costs together then decided on a price. Then he made a {{5}} plan on the computer with help from his dad. His {{6}} is now sold at a weekly market. It tastes wonderful and it's healthy because Robbie uses grape juice instead of sugar to make it." },
  30: { title: "Katie Melua: My holidays", body: "My best holiday ever was staying in the Maldives Islands, at the Anantara Dhigu hotel. We rested for a few days when we first got there. We had brilliant time doing water sports and eating in restaurants near the {{1}}. And the most exciting thing happened: my boyfriend asked\n\nme to marry him! We were walking along the beach one evening and he\n\nsuddenly {{2}} me! After the walk, we had a special dinner of fantastic fish and fruit dishes on the {{3}} but we were so excited that\n\nwe couldn't eat much of it. We went and say by the sea and watched some\n\nbaby sharks in the {{4}}\n\nLast September we went to Cornwall, England after our wedding. I've\n\nbeen to Cornwall's because in the rain before, but we were lucky with the\n\nweather this {{5}} While we were {{6}} there, i decided to start surfing, so booked a lesson and loved it." },
  31: { title: "", body: "Scientists may have solved one of nature's most intriguing mysteries: how turtles navigate thousands of miles across the Atlantic Ocean when there are no landmarks in open sea to guide them. Every year, hundreds of green sea turtles set off from Brazil to Ascension island, 2.300 km away. The {{1}} is just 5 km wide, yet the majority hit their target. Paoli Litchi and his colleagues at the University of Pisa concluded that the {{2}} must be using the Earth's magnetic {{3}} to plot their route, so they released 18 turtles up to 450 km from the island and tracked them using radio transmitters. At first, all the turtles, seemed lost and swam as if carrying out a search. But eventually, most got home, approaching the island in a straight line from the north-west. {{4}} concluded that the turtles do indeed use the {{5}} magnetic field as a guide when they get {{6}}. Then the turtles rely instead on smells and sounds carried from the island on the wind blowing off shore towards the north-west." },
  32: { title: "", body: "This morning at five o'clock, the Green Mountain Restaurant caught\n\non fire. Nobody noticed the {{1}} until 6 0'clock, when the house\n\nnext door started to burn. Fire fighters came from all area. They began to {{2}} the fire at seven o'clock. Now it is eight o'clock, and the fire is still going strong. The fire fighters are working hard, but they haven't brought the blaze under control yet. Every few minutes they call for more help.\n\nFire Chief Brown says that another hour they'll have put out the fire in the house. All that time, the house will have been {{3}} for three hours. Half the house will began. Chief Brown is afraid that fire in {{4}} may go until ten o'clock. Before its out, restaurant will have been blazing for five hours. Every few minute, part of the building falls. Fire fighters will fight the fire in the restaurant for three hours. They will have been pumping water out of Green Mountain Lake to {{5}} out the fire. They will have been spraying {{6}} on the fire the whole time. However, the fire has been burning too long." },
  33: { title: "", body: "A pessimist is a person who always expects bad thing to happen. Pessimists think that today's cars are in trouble because they use too much gas. They say the {{1}} of the future will be much, much smaller. They will have no heater and no air conditioner, it will have no radio and no lights. Tomorrow's car will be an open air car with no door and windows. It won't need a pollution control system because it won't use {{2}}. In fact, drivers will push this new cars with their fit. Very few people will be killed in accidents because the top speed will be five miles per hour. However, {{3}} warn us not to ask for pretty colors, because the car will came in grey only.\n\nOptimists are sure that the future will be happy. They think that car companies will soon solve all our problems by producing the super car. Tomorrow's car will be bigger, faster and more comfortable than before. The super car will have four rooms, colour TV, running water, heat, {{4}} conditioner and swimming pool. Large families will travel on long trips in complete comfort. If gas is in short supply, the supercar will run on water. Finally, {{5}} promise that the car of the future will come in any {{6}}, not only gray." },
  34: { title: "", body: "The first Olympic Games were {{1}} in Greece in776 B. C. They were to honor the Greek's God, Zeus and other gods. The warm climate for outdoor {{2}}, the need for preparedness for wars and their lifestyle made the Greeks create competitive sports. At first only the elite and military could take part in the Olympic Games. But later they were open to all Greeks. Competition is running, jumping, boxing and horse racing were held in cities and the winners competed in the Olympic Games every 4 years. {{3}} were honored by placing olive wreaths on their heads and singing songs about their strengths. Originally these {{4}} competitions were the games of friendship and any {{5}} stopped to allow the games to take place. They coincided with religious holidays and were a part of actions to please the gods. Those who broke the rules were seriously punished. So everybody followed Olympic {{6}}" },
  35: { title: "", body: "Women's voices are getting {{1}}. Scientists in South Africa discovered this when they tested a wide variety of {{2}} who were between the ages of twenty and sixty years old. Though scientists say that they are not exactly sure of the reason for this change in women's {{3}}, they have several theories.\n\nOne theory is that women don't smoke as much as the {{4}} used to do so they don't damage their voices. Another reason is that women in cities need to speak louder because cities are getting noisier with more cars and aero planes.\n\nAnother possible {{5}} is that these days, more and more women are becoming lawyers and doctors, so they need to use their voices more for their jobs. Though women's voices have changed, {{6}} say that there is no difference in those of men." },
  36: { title: "", body: "Many years ago South African government took steps to {{1}} their wild life. And today there are 40 nature reserves in South Africa. Bird, flower reservations and vast area of land where enormous herds of antelope and other {{2}} life survive and grow as they did hundreds year {{3}}. And here you can shoot these animals. But only with a camera. It is important to preserve animals there.You could {{4}} several days alone in Kruger National park and see lions, leopards, cheetahs, elephants, giraffes and other {{5}} just a window glass away. If you are strict for birds, then the Mkusi Came Reservation is for you.\n\nOf course, South Africa is more than its wild life. You'll find just about anything you want in this {{6}} A warm, friendly country. You will never regret the time that you spend there.And everybody will go out of their way to make you feel at home." },
  37: { title: "", body: "Dinosaurs lived on the earth for 135 millions years. They appeared 200 millions years ago, and they disappeared 65 million years ago. They were the largest animals ever lived on the {{1}}, and they ruled the earth for a very long period of time. Dinosaurs {{2}} in North America, in Africa and in Europe. During that time, the land in North America was under a large, shallow sea.\n\nWhy did {{3}} die out? Nobody knows for sure. The weather changed and this made serious problems for them. About 700 million years ago, the Rocky Mountains formed in North America. As a result,the plant life {{4}} and some even disappeared. Perhaps the dinosaurs couldn't change fast enough.\n\nPeople who like dinosaurs can see fossils in Dinosaurs National Park. This park is in Utah and Colorado. {{5}} are bones which have become stones.Fossils taught us a lot about these great {{6}} of the past." },
  38: { title: "We use both words and gestures to express our feelings, but the", body: "lem is that words and {{1}} can be interpreted in different ways.A smile means the same thing in any language. Laughter also {{2}} the same.Animals show the same feelings too. For example, dogs, tigers and humans {{3}} their teeth when they are angry. Fear is another emotion shown in the same way all over the world. In Chinese and in English a phrase like \"he went pale\" suggests that the man is greatly afraid. However, a {{4}} \"he opened his eyes wide\" suggests anger in {{5}}, whereas in English surprise. In Chinese surprise is described in the phrase like \"they scratched out their tongues\", which in its turn is very insulting in {{6}} Disgust, contempt and suffering are the most different emotions for people everywhere either to recognize or to express." },
  39: { title: "", body: "When early humans hunted and gathered food, they were not in control of their {{1}} They could only interact with their environment as lower organisms did. When {{2}} learned to make fire, however, they became capable of altering their environment. To {{3}} themselves with fuel they stripped bark from trees, causing these {{4}} to die. Clearings were burned in forests to increase the growth of grass and to provide a greater grazing area for the wild animals that humans fed upon. This development led to farming and the domestication of {{5}}.{{6}} also provided the means for cooking plants which had previously been inedible. Only when the process of meeting the basic need for food reached a certain level Of sophistication was it possible for humans to follow other pursuits such as the founding of cities." },
  40: { title: "", body: "We {{1}} in one or more languages. First language, also known as mother tongue, is generally the language a person learns {{2}}. However, one can have two or more native languages thus being a native bilingual or indeed multilingual. The order in which these languages are learned is not necessarily the order of proficiency. Incomplete first {{3}} skills often make learning other languages difficult. Often a child {{4}} the basics of his or her first language or languages from his or her family. The term mother tongue, however, should not be interpreted to mean that it is the language of one's {{5}}. For instance, in some paternal societies, the wife moves in with the husband and thus may have a different first language or dialect than the local language of the husband. Yet their children usually only speak their {{6}} language." },
  41: { title: "", body: "My name's Ligaya Ragas and I live in Davao in the Philippines. I'm a teacher. I teach English in an elementary school. I don't live near {{1}} It's in the city center and the houses there are expensive. I travel to my {{2}}\n\nat school every day by bus. It takes a long time because the traffic is always very bad, and in summer it's very hot. At the weekend, I usually stay at home or do my hobbies.\n\nSchool starts at half past seven in the morning. I get up at quarter to five and I normally leave home at six {{3}}. I walk to the main road and wait for the {{4}} I finish work at five o'clock and then I usually go home. I sometimes go shopping first.\n\nI like my job, but I don't earn a lot of money, and I don't like the long journey to work every {{5}} I don't normally go to work at the {{6}} On Saturday, I go shopping. On Sunday mornings, I always go to church with my husband and my children. In the afternoon, we often go to the beach." },
  42: { title: "", body: "My name's Luis. I live with my wife, Mariluz, and our two children in Madrid, but I was born in Ronda in the south of Spain. My parents still {{1}} there. They don't visit us very often because they don't like {{2}} cities. We visit them two or three times a year - at New Year and in the summer - and when there's a big family celebration like a wedding or a special birthday. They sometimes send emails and write letters to us.\n\nI've got a lot of {{3}} and uncles and cousins there, too, so it's good fun. My grandfather - that's my mother's father - is still alive. He's eighty-two and he lives with one of my aunts. My other grandparents are dead now. I've got a brother and a {{4}} My sister lives in Canada with her husband. I don't see her very often, but we send {{5}} and she phones me, too. They've got one child - a little girl." },
  43: { title: "The man with the most world records", body: "Ashrita Furman is famous for breaking records: He has set more records\n\nthan anyone else in the world! In the last 40 years, he has established more\n\nthan 600 {{1}}! As a child, Ashrita loved reading the Guinness Book of\n\nWorld Records. He wanted to be in it too. But he thought people had to be\n\ngood at sports to be in the {{2}} He wasn't a good athlete. He felt\n\nhis dream would never come true.\n\nBut later in life, Ashrita learned meditation, and with this, he learned\n\nthat nothing is impossible. He tested this idea in 1978 by entering a 24-hour bike race in New York. Without any training, Ashrita came third!\n\nAfter that, he started thinking about {{3}} records again. First, he\n\ntried to break the record for the most jumping jacks. He failed at first,\n\nbut, remembering that 'nothing is {{4}},' he trained, meditated and\n\ntried again. This time, he did 27,000 jumping jacks in 6 hours 45 minutes and became the new record holder. His achievement appeared in the 1980 Guinness Book of {{5}} Records." },
  44: { title: "", body: "Why aren't babies born on certain days?\n\nDo you know anyone whose birthday is Christmas Day? You may know a few, but actually, having a {{1}} on that day is quite rare. December 25th is the least common birthday in the USA, Australia and New Zealand. Between 30% and 40% fewer {{2}} are born on this day than on the peak days. In England, Wales and Ireland, Christmas Day is the second rarest day for a birthday. There, the fewest birthdays are on December 26th, the national holiday called Boxing Day. Other festival dates are also uncommon. In the USA, the four least {{3}} birthdays are Christmas, New Year, Thanksgiving and Independence Day.\n\nSo why does this happen? Actually, there is a very logical reason. A third of babies in the USA are born by cesarean. Obviously, doctors can plan the date for these operations. They don't schedule them for the {{4}} holidays because they want to be celebrating, not working. Also, if babies don't arrive on time, {{5}} give the mothers drugs to make them give birth. However, they probably won't do this during the holidays." },
  45: { title: "Frogs in love: Romeo and Juliet", body: "Romeo the frog spent ten years alone in a {{1}} in Bolivia. He is a Sehuencas frog, and for a long time, scientists at the museum thought that Romeo was the only Sehuencas frog in the world. A lot of these {{2}} have died because of deforestation, and a deadly disease has taken the lives of many others. The scientists wanted to find a mate for Romeo. They even set up a profile for him on Match.com!\n\nIn 2018, some {{3}} went to the Bolivian forests to look\n\nfor a partner for Romeo They looked in many streams, but they couldn't\n\n{{4}} any frogs. They grew tired, wet and disappointed. They decided to check one more stream before going home. And then, they found a\n\nSehuencas frog beside a waterfall. This frog was male, but they returned the\n\nnext day and found four more frogs, two {{5}} and two female. One of\n\nthe females was the right age to mate. The conservationists called her Juliet." },
  46: { title: "Ancient robots", body: "What do you think of when you read the word 'robot'? Many people think about big {{1}} in car factories or futuristic monsters in films. Few of us think about the past. But {{2}} were building incredible machines with human abilities hundreds of years ago!\n\nFor example, Egyptian texts from 1100 BC mention moving statues which 'chose' the next king. None of these {{3}} exists, but probably they were built using the ancient Egyptians' mechanical technology.\n\nAnother {{4}} robot was a big robotic arm called \"The Claw\". The ancient Greek writer Polybius wrote about it in 213 BC. It was built during a war with the Romans, and it hung over the city wall towards the sea. When a Roman ship came close, the arm picked up the front of the ship and lifted it into the air. Then the boat fell backwards into the sea and sank. Again, we don't know if the machine was really {{5}}, but it was possible with Ancient Greek technology." },
  47: { title: "The history of the London police", body: "Today there are policemen everywhere, but in 1700 London had no {{1}}\n\nat all. A few old men used to protect the city streets at night, and they were not paid very much. About 300 years ago, London was starting to get bigger. The {{2}} was very dirty, and many people were poor. There were so many thieves who stole money in the streets that people stayed at home as much as possible.\n\nIn 1750, Henry Fielding started to pay a group of people to stop {{3}} They were like policemen and were called 'Bow Street Runners' because they worked near Bow Street. Fifty years later, there were 120 Bow Street Runners, but London had become very big and needed more police officers. So, in 1829, the first Metropolitan (or London) Police Force was started with 3000 officers. Most of them worked on foot, but a few rode horses. Until 1920 all the police in London were men. Today, London police are quite well {{4}}, and for the few police officers who still ride {{5}} the pay is even better than for the others." },
  48: { title: "Edinburgh Festival", body: "Every year, thousands of tourists come to Edinburgh, the capital {{1}}\n\nof Scotland to be part of the Edinburgh Festival. For three weeks every August the city is filled with actors and artists from all over the world. They come to Edinburgh for the biggest arts festival in the I-JK. During this time the {{2}} of the city are filled with music and dance from early morning until late at night. You can even see {{3}} painting pictures on the streets. One of the best parts of the {{4}} is the 'Fringe', where students do comedy shows in small halls and cafes.\n\nTens of thousands of tourists come to the Festival to see new films, plays and hear music played by famous musicians. This year, you can see over eight hundred performances with actors from more than sixty countries. The tickets for these {{5}} are quite cheap, and it is usually easier to see your favourite star in Edinburgh than it is in London. So come to Edinburgh next summer, but remember it can be hard to find a room, so why not book your hotel now." },
  49: { title: "Burglars love the afternoon", body: "Most house burglaries happen between 2 p.m. and 6 p.m., say the police.\n\nInspector Ian Saunders told our newspaper that the number of house burglaries has gone up by more than 30% compared with last year. He also said that 67% of {{1}} happen when people have gone out and forgotten to close a door or a window. He went on to report that night-time burglaries are unusual because {{2}} are usually at home at that time. But he said that winter afternoons are the best time for burglars because it is dark and they can't be seen easily. Also many houses are empty at that time, because people are often still at work.\n\nInspector Saunders said that it is a good idea to leave lights on in living rooms and bedrooms when you go on holiday. This will help to keep burglars away. He also asked neighbours to watch the other {{3}} in the street when people are not at home. They should call the {{4}} if they see anything strange. 'We will also tell you how to make your house safe.' Inspector Saunders said. \"This kind of help costs nothing. No burglaries must {{5}} in our lovely city.\"" },
  50: { title: "Corryvale Farm", body: "Corryvale Farm is in the west of England. Stephen and Jenny Blackler\n\nkeep cows and chickens and sell milk and eggs. But most of their money\n\ncomes from Jenny's sheep. She has 50 sheep and each one has enough {{1}} for six sweaters. Every six months, Stephen cuts this wool off\n\nthe {{2}} so they won't get too warm. Five years ago, Jenny made\n\nsome sweaters with the wool and tried to sell them at country markets.\n\nBut it was summer and the weather was hot so people didn't want to buy\n\n{{3}} She then made some socks. Everybody loved them because\n\nthey were cheap, strong and easy to wash.\n\nThat's how Jenny's business started. At first she made the socks at home, but soon she had thousands of customers so she had to send the wool to a factory, where all the {{4}} are now made on machines. There are six colours, five sizes for all ages, and different socks for walkers, sportsmen and skiers. Jenny is busiest at Christmas because Corryvale socks are a favourite present. On the walls of Jenny's office, there are lots of letters from happy {{5}} all over the world." },
  51: { title: "", body: "Canada Geese are large blue and white birds. When autumn arrives, they have to fly south where the weather is warmer. The winters are so cold in Canada that all species of {{1}} may die if they stay there. Last spring, Bill Lishman found sixteen young Canada Geese on his farm. They had lost their parents. Bill thought, \"These young birds won't know what to do in the autumn.\" Bill had a small plane and he decided to teach the birds to follow him. All though the summer, he went on short trips in his {{2}} and the young geese flew after him.\n\nWhen the cold {{3}} arrived in autumn, Bill flew to Virginia in the United States, 600 miles south of his home in Canada. The geese followed him all the way. Bill left the geese in Virginia and he returned home. This spring, Bill was waiting for the birds to come back. They didn't arrive, so Bill {{4}} by plane to Virginia to get them. He looked for them for two weeks but he couldn't find them. When he arrived back home, Bill found the geese waiting for him. They had found their {{5}} home without him!" },
  52: { title: "Esther's Story", body: "When Esther left {{1}} at the age of sixteen, her aunt Flory gave her $500 for her birthday. Most of Esther's friends decided to go to college, but Esther used her aunt's money to start her own business. She bought fruit, sugar and some glass jars and began making her own jam. She sold the {{2}} for $1 a jar to her friends and she soon doubled her aunt's $500.\n\nAt first, her parents didn't want Esther to spend her time making jam and they thought that she should study instead. They hoped that one day she would be a teacher or a doctor. But Esther didn't listen to them. She just kept on {{3}} jam. After a few month's, she started selling it to the local market. Then she started making orange juice. She sold this to a school where one of her {{4}} worked.\n\nAfter two years, her {{5}} was very large and her parents were very pleased with her. She made all kinds of food which she sold to shops and supermarkets. She was so busy that she had to get some people to work for her." },
  53: { title: "Bill Prince - Smith", body: "Bill Prince-Smith was a farmer and a teacher and a dentist before he\n\nbecame a writer of children's books at the age of 60. Now, thirteen years\n\nlater, he has written more than 80 {{1}} Every day, he goes into his\n\noffice and writes. In the evening, he gives the work to his wife to read. \"She\n\ntells me when she doesn't like something,\" says Bill. \"My ten grandchildren\n\ndon't live near here but they also {{2}} my stories and say if they are\n\ngood or bad.\" And so Bill has learned what young children want to read.\n\nBill writes about the life in his village and on the farms near it. His fifth\n\nbook is his favourite: The Sheepdog is about a farmer and the dog that\n\nhelps him. \"I have always liked animals,\" says Bill, \"and dogs are so clever,\n\nthey learn very quickly.\" Last year, the book was made into a film with real\n\nanimals and actors. The film-makers used the latest computer technology to make people think that the {{3}} are speaking. Bill was very\n\npleased with the {{4}} \"Sometimes film-makers change books, but\n\nthey didn't {{5}} mine and I love the film.\"" },
  54: { title: "John Pickering", body: "In a park in a small town in central England, John Pickering cuts the grass and waters the flowers. But all last week he was in Tokyo and millions of Japanese people watched the thirty-five-year-old gardener on television because John is the most famous singer in Japan at the moment. John visited Japan a few months ago to {{1}} in dance clubs in Osaka and Nagoya. A disc jockey heard his songs and played them on his radio show. Hudreds of young people phoned the {{2}} and asked the disc jockey to play the {{3}} once more.\n\nJohn, who uses the name Jon Otis when he sings in Japan, is not going to stop working in the park in England. He does not know yet how much he will earn from his music. \"I must keep my job in the {{4}} \" he says. \"I still have to pay my bills!\" The other gardeners do not know that he is {{5}} in Japan. They've never heard him sing. John's wife, Denise, a hospital worker, says, \"This will not change the way we live. I only know John Pickering, not Jon Otis!\"" },
  55: { title: "Bill Bryson", body: "I was born in the United States but I have written several travel books about England. I lived there with my wife and four children for 20 years, but for the last three {{1}} we have lived in the United States. Our {{2}} are now learning about life in the United States. I'm sure they will be happier because they have {{3}} in two countries. I like Britain and I want to return, but my daughter, Felicity, is going to start college here soon, so it won't be for another four years.\n\nI have just been to England for six weeks to work on a radio programme about the English language and also to talk about the book I've just {{4}}\n\nMost writers don't like doing this; they don't like travelling around the country, selling their {{5}} I don't mind it. I like visiting new places and meeting lots of people. It's very different from the life I have in the United States when I'm writing. In England, people drove me around in big cars and I stayed in expensive hotels. It was good because I didn't have to pay any bills. Everyone was kind to me and it was fun." },
  56: { title: "Snowboarding", body: "Victoria Jamieson from Britain started snowboarding at 20. She is now 23 and has won many competitions in this {{1}} We spoke to her when she was at a {{2}} competition last week in Switzerland and asked her why she started the sport.\n\n\"I've always liked all kinds of sports, especially skiing, and it seemed natural to start snowboarding. It doesn't take long to learn and you can become really good in a few months.\" We asked her if she had to do a lot of practice. \"Well, in winter I snowboard in the {{3}} every day from 8.30 a.m until 4 p.m I also run and go biking. But I just love doing it all! I like the competitions and being in the mountains. It's so beautiful. But free-riding, that's doing what you want when you're not in {{4}} is the best thing in the world for me.\" We asked her what is important when you're learning. \"You can learn quickly but you need lessons. It's also {{5}} to have the right clothes so you don't get wet because, to begin with, you spend a lot of time falling down!\"" },
  57: { title: "Ice-Fishing", body: "If you drive north from Toronto for three hours, you come to lake Nipissing. In winter, the {{1}} becomes ice, and thousands of Canadian fishermen travel there each weekend. They build little houses of wood on the ice and paint them in bright colours. Then they sit inside to catch the {{2}} that swim under the ice.\n\nBob Marvisch has come here at this time of year for twenty-five years. \"You need clothes that are light but warm: two pairs of socks and gloves, several thin sweaters and a snow suit on top. Catching the fish is easy,\" he says. \"First you break the {{3}} and make a small round hole in it. Next you take a fishing line and put some bread on it. Then you put the line through the hole and into the water. You pull the line up when the fish eat the {{4}} They are between ten and twenty centimetres long. Some people like to eat them, but when I have caught three or four fish, I prefer to have some chocolate or other snack! Today I have {{5}} twenty-five! It's a great sport and you can meet some nice people here!\"" },
  58: { title: "Ravi Patra", body: "In 2006, Ravi Patra started working for a music company and three years later, in 2009, got a {{1}} offer on the music television channel Rock TV. Ravi enjoys working on {{2}}, but when he was younger he wanted to fly planes. Later, he became more interested in football. But Ravi has always loved {{3}}, so he tried to get work with Rock TV. His boss says he gave him the job because he wanted it more than anybody else!\n\nWhen he started at Rock TV, Ravi arrived first at the office and was the last to leave at 10 in the evening. Now, he starts a bit later, but he is still busy until 10 pm. Before lunch, he usually writes his words for the {{4}} and in the afternoon he has meetings or makes Rock TV advertisements. Ravi has many popular bands on his show and the stars are often interesting people. But Ravi knows that everyone watches the show to hear great music. Getting that right is more important than anything else. Ravi knows what questions to ask the {{5}} members. He tries to make them laugh and this is easy for him. Sometimes he cannot remember their names but he always has information about the band to help him." },
  59: { title: "Susanna Brightman", body: "Susanna Brightman is a young Australian basketball player. She is 195 cm tall, and very fast and strong. Some people say she may become the best {{1}} in the world one day. As well as playing for her own {{2}}, she plays for a team called Boston Hawks in America. Susanna was born on 15th June 1992. Her mother and father were both basketball players and when she was just 2 weeks old she was already travelling around the country with them while they played {{3}} When she was still very young, Susanna told her parents she wanted to play for Australia. At the age of 16, she played for her country for the first time.\n\nBut things have not always been easy. When Susanna was 12, she toured Australia for the first time. One day, the team she was playing for lost an important match because Susanna didn't want to play. Susanna's {{4}} were angry with her but told her that she didn't have to play basketball if she didn't {{5}} to. She needed to think hard about her future. Luckily, Susanna decided she wanted to be a basketball player after all, and since then she has worked very hard to become an even better player." },
  60: { title: "Ben Charles: a young businessman with a heart", body: "Ben Charles is an American teenager and like many other sixteen-year-olds, he loves doing sports. He's probably playing basketball right now.\n\nHe's also very interested in clothes and fashion. He enjoys collecting sports {{1}} or \"sneakers\" as he calls them. His collection includes shoes\n\nfor playing tennis and {{2}} and trainers for meeting his friends.\n\nThere's a difference between Ben and his {{3}} He's got a small\n\nbusiness which makes and sells sports shoes. Ben doesn't sell his shoes because he would like to be rich; he sells them to help others. All Ben's trainers look the same and they all cost $50. When you buy Ben's trainers, he gives a free pair to someone who hasn't got the money to {{4}} them.\n\nIt all started two years ago when Ben found a photo of a young child without shoes. At that moment Ben understood that he's very lucky. There are a lot of young people around the world who can't buy trainers. Unlike Ben, they have to play {{5}} like basketball without shoes." },
  61: { title: "The Price of Football", body: "My name is Ashley Parkers. Nine months ago, I started playing football for my school. The team coach told us to go and see as many football matches as possible to help us play better. I decided to {{1}} and see one of the big, famous {{2}} clubs play a match. My mum and dad wanted to come with me, and they agreed to pay for the tickets. When Mum asked me how much football {{3}} were, I couldn't answer, so I went online to find out. What a nasty surprise! The cheapest tickets for the next match were $65 - $95 for the three of us. There weren't any discounts for children or students. And a ticket for the whole football year cost $999 per person.\n\nI told Mum the match ticket price, and she said it was too much. Then Dad said, \"Why don't we go and watch our town club on Saturday? It's a small {{4}} but they're playing well at the moment and I don't think it'll cost $65 each to see them!\" On their website, I found some tickets for the match. They {{5}} $23 for adults with a seat, or $20 standing up, but under-16s only pay $9 with or without a seat. What a difference! We went to the match and enjoyed it so much that we joined the club and now we go to every game." },
  62: { title: "Macy Gray", body: "Things have changed for the 30-year-old American, whom today has sold millions of records around the world. I asked Macy how this change happened. \"I wrote some {{1}} lyrics for friends of mine who were musicians. One day, when they wanted to record a song, their singer didn't arrive. I sang for them and weeks later I was asked to sing for a jazz band.\" Macy couldn't believe that people liked her {{2}} but then Atlantic Records invited her to join them. She was 24. In 1997 she was asked to {{3}} an album.\n\n\"I still wasn't sure that I was doing the right thing, but I thought I'd try music just one more time.\" Her first {{4}} sold three million copies. She also won an award for Best Female Singer. Macy has become the new voice of soul music but she plans to stop singing after she has made her fourth album. \"Nothing lasts forever,\" she says. \"I want to {{5}} when I'm on top and write books all day.\"" },
  63: { title: "It's a Dog's Life!", body: "For over 1200 years, dogs have lived with people and helped us in our\n\ndaily lives. In ancient Egypt, the Pharaohs built statues of {{1}} and\n\nthought they were like gods. Today there are about 400 types of dog Of\n\ndifferent sizes and shapes. Dogs have the same five senses as {{2}}\n\n-being, but their sense of smell and hearing is much stronger. People train\n\ndogs to help and work for us. A dog's sense of {{3}} is very helpful to\n\nthe police. Dogs can find people, bombs and dangerous gases. When a dog\n\nstarts barking, it's often because they've heard something. A dog's sense Of\n\n{{4}} is very good and they can hear things that human being can't.\n\nDogs can also help blind people and become their \"eyes\". They can lead a\n\n{{5}} person to the shops, onto buses, or just help them live a normal life. For many people, dogs are just good company and make perfect family pets. They can be friendly animals, but are usually expensive to keep and you must have the time to take them for walks. If you look after your dog, it can be a really good friend!" },
  64: { title: "The life of a supermarket manager", body: "Jonathan Matthews left school at seventeen, went to college and then worked in his father's mini-market. After two years, he went to work for Bargain Foods and then joined Saver Mall as a trainee manager. Three years later he got his present job as a supermarket {{1}} with Saver Mall. This is what he told us about his {{2}}\n\n\"The supermarket where I am manager is in west London but I spend most of my time travelling by road to Saver Mall {{3}} all over Britain. I need to see things in our other supermarkets. I also go lots of meetings. My work hours change every week because Saver Mall is open 24 hours a {{4}} Last week I worked from 3 p.m to 11 p.m but this {{5}} I need to be at work from 7 a.m. to 3 p.m. The first thing I do each day is check my emails.\"" },
  65: { title: "Beverly Hills High", body: "This is the school from the television show Beverly Hills 90210. Most of the students come from rich families and some of them have famous parents. People from Hollywood sometimes go to Beverly Hills to look for future actors. There are lots of good things about going to this school: There are two theatres, a {{1}} studio to watch films and a radio station. The {{2}} make TV programmes and films in their drama classes. The biggest event of the school year is the school dance, or \"prom\". Everyone at Beverly Hills High travels to the prom in a limousine!\n\nIn California, children can learn to drive three months before their sixteenth birthday. Lots of students at Beverly Hills High have their own {{3}} but they have to pay a lot of money to park their cars in the school car {{4}}. Most kids enjoy going to Beverly Hills High because it is fun and there is lots to do. But some kids do not like the {{5}} if their parents don't have enough money to buy them a fast car and expensive clothes." },
  66: { title: "", body: "Shopping hours in Britain are changing. Until a few years ago, shops opened at nine o'clock in the morning and closed at half past five or six o'clock in the evening. Some also closed for an hour for lunch. In many towns, {{1}} were closed on Wednesday afternoons. On Sundays, nothing was open. But now some shops are {{2}} longer hours. Some big shops and many supermarkets never close! If you need a liter of milk or some bread at midnight you can easily buy it.\n\nFor people who work long hours or people who often work at night or early in the morning like doctors, the new shopping {{3}} are good. If someone finishes work at five o'clock in the {{4}}, they can go to the supermarket on their way home and buy some breakfast or a newspaper or anything else they may need. But not everyone thinks the new shopping hours are a good thing. Some people say that Sunday is a holiday - who wants to work in a {{5}} on a Sunday? But shops are very busy at the weekend and longer shopping hours are here to stay." },
  67: { title: "Carla's Treasures", body: "Carla didn't walk fast on the beach. She kept her eyes looking at the\n\nground. Carla was always on the lookout for treasures. Her dad had built a bookcase to hold what Carla found. She had carefully organized things. Thc top shelf held bird treasures. Most items in the {{1}} were feathers that Carla had found. Some were wing feathers and some were tail {{2}} A nest of grass, string, and twigs lay at the end of the shelf. It had fallen from a tree in the park. Rocks and stones sat on the middle shelf. A few rocks were black and were made by volcanoes. Some of the pebbles were shiny. The bottom shelf {{3}} a variety of things. There were a few bones that were probably from a chicken. And there was a long piece of skin a lizard had shed. Carla cleared a space on the bottom {{4}} Today she was going to the {{5}}" },
  68: { title: "", body: "Tom Barry - international skateboarder!\n\nTom Barry is 17, and started skateboarding when he was nine. He grew up in New York where he practised hard and won his first competition when he was 14. He was lucky. A writer from SKATE IT! {{1}} watched him that day, then wrote an article about him. \"They even made some videos of me!\" Tom said. \"I left school last year and now the magazine is paying me to skate and to skateboard in international competitions. But I'm not doing this for the money. I'm doing this because it's so much fun! The writer is planning to collect my {{2}} and make a short film about me.\"\n\nTom has just returned from Japan. {{3}} is the third most popular sport for boys aged 12-16 in the USA, but in Japan it is less well-known. \"I took my skateboard out onto the city street and the traffic stopped as people watched me!\" Tom said. \"A problem for skateboarders in Japan is that there aren't many places where they can skate outside. Skate parks are usually inside big buildings in large cities, so {{4}} skating is difficult there. But things are changing. I loved the trip and hope to go back to Japan to {{5}} there again very soon.\"" },
  69: { title: "Ashley Trent", body: "Ashley Trent, one of our most popular young actors, is now filming College Rap. He began having acting lessons six years ago and was in his first play at ten {{1}} old. At fourteen, he immediately became well known, not for acting in the theatre, but on TV. \"That was fun!\" he says. \"I was in a fast-food advert with a cartoon clown, but filming College Rap is much harder work. I have to play baseball and sing in the film, which is fine, but I need to have dancing {{2}} too. When we finish filming each day, I don't go out with friends. I usually sit in the bath for an hour because my legs and arms hurt! But I'm enjoying myself because the three adult actors who are the teachers in College Rap are really good. They've filmed all over the world. My {{3}} have taught me to remember my lines more quickly too. I needed half a day to learn five pages before, but now I only need a quarter of an hour.\"\n\nBeing well {{4}} is great but Ashley isn't interested in buying lots of expensive things or going out. \"But I'm asked to do really interesting work now and that's wonderful,\" he says. \"I don't get excited when I watch myself in the {{5}}. I know I'm getting better, but I still need to improve!\"" },
  70: { title: "Sean Murphy", body: "Sean Murphy reads the late news on British television at 11 0'clock each\n\nevening. \"This is a good time for a news programme because we can report\n\nthe early {{1}} from America and the late news from Europe. I still arrive home before midnight because the journey from the office, Television\n\nCentre, to my {{2}} in north London only takes six minutes. My family\n\nare all asleep when I get in, but I usually make a drink of hot milk and read\n\na book for about an hour.\n\nI always get up to have breakfast with my three children before they catch the school bus. Then I take the newspapers and go back to bed for a short time. Later on, I go for a swim - newsreaders spend too much time sitting down! I sometimes go running. I've done the London Marathon twice. That's a {{3}} race of 40 kilometres. I finished each time, but I wasn't among the first! \"I start work after lunch at two o'clock, when I go to my {{4}} The rest of the day is spent planning the programme, but I always try to go home for an hour to see my {{5}} before they go to bed.\"" },
  71: { title: "Ana Johnson", body: "Ana Johnson is a 13-year-old swimmer who lives in Melbourne in Australia. Her dream is to swim for Australia in the next Olympics. She swims in both long and short races in pools and she has already come first in many swimming competitions. As well as spending many hours in the {{1}} Ana also makes time for studying and for friends. \"I have lots of {{2}} who swim and we're very close. It's much easier to have friends who are swimmers because they also have to get up early to practice like me and they understand this kind of life. But I'm not so different from other people my age. In my free time I also enjoy going to the movies and parties. There are also some good things about swimming for a club. I travel a lot for {{3}} and I've made friends with {{4}} from other Australian cities and from other parts of the world.\"\n\nAna is becoming well known in Australia and she believes it is important to get more young people interested in {{5}}. \"I don't mind talking to journalists and having my photograph taken. But last year I was on TV and that was much more fun.\"" },
  72: { title: "Conor Maynard", body: "Conor Maynard comes from Brighton, a town on the English coast. Thanks to the internet, he became an international pop star when he was just 19. The story started when Conor was 15. One day he was walking home, singing to himself, when a girl from the year above him at school heard him and said, \"Wow, you can {{1}}! \" After that, sher and her friends asked him to sing every day during lunch break. Finally, Conor decided to record some songs and put them on the {{2}} He wanted to be able to eat his lunch during {{3}} instead of singing. He saved his money and bought some cheap recording software. He chose songs by his favourite stars, but sang them in his own special way.\n\nThousands of people watched him online and in the end one song was downloaded 10 million times! After seeing this, several music companies wanted to {{4}} an album with Conor. At the time, he was studying for his exams and wasn't sure what to do. He spoke to his mum and his teachers and they all agreed he should record the {{5}} Two years later, the record was finished. Conor hopes he will record many more." },
  73: { title: "Japan's most famous dog", body: "In front of the enormous Shibuya train station in Tokyo, there is a life-size bronze statue of a dog. Even though the {{1}} is very small when\n\ncompared to the huge neon signs flashing, it isn't difficult to find. It has\n\nbeen used as a meeting point since 1934 and today you will find hundreds\n\nof people waiting there for their friends to arrive just look for the crowds.\n\nHachiko, an Akita dog, was born in 1923 and brought to Tokyo in 1924.\n\nHis {{2}} Professor Eisaburo Uyeno and he were inseparable friends\n\nright from the start. Each day Hachiko would accompany his owner, a professor at the Imperial University, to Shibuya train {{3}} when he left for work. When he came back, the professor would always find the {{4}} patiently waiting for him. Sadly, the {{5}} died suddenly at work in 1925 before he could return home." },
  74: { title: "The shoemaker", body: "Bill Bird is a shoemaker who cannot make shoes fast enough for his growing number of customers - and he charges more than $300 for a pair!\n\n{{1}} travel hundreds of kilometres to his London shoe clinic or to his workshop in the countryside to have their feet measured. He makes shoes for people with {{2}} of unusual size: very large, very small, very broad or very narrow. The {{3}} are at least as fashionable as those found in ordinary shops. Mr Bird says: \"My problem is that I cannot find skilled workers. Young people all seem to prefer to work with computers these days. We will lose the necessary skills soon because there are fewer and fewer shoemakers nowadays. I am 45, and now I want to teach young people everything I know about making shoes. It's a good job, and a lot of people want to buy beautiful shoes specially made for them.\"\n\nHe started in the business 19 years ago and now he employs three other people. His customers pay about $500 for their {{4}} of shoes. He says: \"Our customers come because they want comfortable shoes which are exactly the right {{5}}. \" Extra pairs of shoes cost between $320 and $450, as it takes one employee a whole week to make just one shoe." },
  75: { title: "A Great Idea!", body: "Frazer and Peter are two 14-year-old boys who grew up in the same small Canadian town. They have always been {{1}} and classmates. Like all their other friends, they enjoy going fishing or swimming at weekends. But for the last few months, they've spent every weekend in Peter's room working on his laptop. This isn't because they have a lot of homework. They have made a new computer word game.\n\nThe idea for the {{2}} came from Frazer's little brother, Kevin, who had problems with his reading. Kevin learns words more easily by seeing pictures and hearing information than he does by {{3}}. His brother wanted to help. Frazer and Peter worked together for over 200 hours to make a {{4}} game and now it's ready to use. It's a speaking and picture game. For example, if you look at the word \"hat\", there's a drawing of a {{5}} next to it and you can hear Peter saying \"Hat! Hat!\" at the same time. The two boys have won a lot of prizes for their computer game and it will soon be on sale around the world. Many schools are interested in buying it." },
  76: { title: "Maria Mutola", body: "In 1988, Maria Mutola was playing football as the only girl in an all-boys\n\nteam in a local competition in Mozambique. \"We won,\" she said. \"At first\n\nno one thought it was a problem that I was a {{1}} But then the\n\n{{2}} we beat complained.\" The story appeared in a local newspaper\n\nand Jose Craveirinha, who had encouraged other African athletes, learnt\n\nabout Maria. He went to meet her and found her kicking a ball around\n\noutside the {{3}} club. He realised immediately that she was fast.\n\n\"He talked to me about athletics. I had no idea what he meant. The only\n\nsport I knew about was football. Then he bought me running shoes and\n\ntook me training. It was such hard work and my legs really ached.\" But\n\nJose visited her parents and persuaded them she could be successful and\n\nthis would help end their poverty. Her {{4}} agreed to let him take\n\nher away to train. In 1991, she finally accepted an invitation to train in the\n\nUnited States football {{5}}" },
  77: { title: "Gareth Ellis", body: "Gareth Ellis, 13, is the youngest son of Alan, an engineer, and Kath, a nursery teacher. His older brothers work in banking and computers, but Gareth's dream was always to become a clown. Three years ago, Alan, Kath and Gareth joined the {{1}} \"People laugh when we tell them,\" says Kath. \"But it's true. Gareth has wanted to be a {{2}} since we took him to the circus when he was three.\" When Alan lost his job, he and Kath decided to see if they could find full-time circus jobs. They both got {{3}} with a famous circus and Gareth began training to become a clown. He calls himself Bippo. They travel with the circus during the summer and return home for the winter. Gareth's {{4}} are old enough to look after the house while they are away.\n\n\"I can't say it was easy,\" says Kath. \"There was a lot to think about and organize. We only had a car and a very small caravan to sleep in, and we were leaving behind our lovely {{5}} The only thing Gareth missed was his long, hot baths.\"" },
  78: { title: "Little Chefs", body: "For one group of children aged between ten and fifteen, Saturdays are spent learning the art of serious cooking. Their weekly lessons in small classes are so popular that there is a waiting list of 30 children who want to do the course. Parents pay $280 for this {{1}} where their children can have fun and learn how to make good food. Class member Bill, aged ten, says \"I love my mum's cooking and now I can do it better than her. The teachers make us laugh, especially when we sit down with them to share the {{2}} we've made.\"\n\nFlora is twelve, and she's having problems preparing onions. \"I love {{3}}\n\nI did a meal for ten friends which they really enjoyed. Then my mum\n\nsuggested I take up a hobby, instead of doing nothing at weekends. I was\n\nhappy staying at home, so I wasn't too keen at first. I'm really glad I decided\n\nto come, though.\" Their teacher, Phillippe, says, \"It's great fun. Children\n\npay attention and remember things better than {{4}} although the\n\nkitchen isn't always as tidy when they're cooking! As adults, we're always\n\nlearning more about food. If parents interest their {{5}} in cooking\n\nwhile they are young, they'll have enough skill to make food for themselves\n\nwhen they leave home.\"" },
  79: { title: "Do Whales Sleep?", body: "Whales are {{1}} which means they feed their young with milk. So\n\nin many ways, they are just like human beings. The most important difference is that humans and whales live in different environments and whales\n\nhave a special respiratory system that enables them to stay {{2}} for\n\nseveral minutes without breathing oxygen. For this reason, they are said\n\nto be voluntary breathers. That is, because of whales underwater environment, they must be conscious breathers. They think about every breath\n\nthey take and come up to the surface of the water to breathe through blowholes on top of their heads.\n\nWhat is outstanding about whales is the way they can sleep. While all\n\nmammals sleep, {{3}} cannot afford to become unconscious for\n\nlong because they may drown. The only way they can {{4}} is by\n\nremaining partially conscious. It is believed that only one hemisphere of the\n\nwhale's brain sleeps at a time, so they rest but are never completely asleep and can come up for air easily. They can do so most probably near the {{5}} of the water " },
  80: { title: "The New Coronavirus", body: "At the end of 2019, a new type of coronavirus started spreading in China. This type of coronavirus is often called 2019-nCoV, novel coronavirus, or COVID-19. It is believed that the virus was transmitted from {{1}} to humans. Some of the first cases were diagnosed in people who had visited a market selling live seafood and animals. Unfortunately, when viruses are {{2}} from animals to people, it can take scientists a lot of time before they can develop a vaccine or medicines to cure it.\n\nThe symptoms of the new coronavirus\n\nSome of the {{3}} of the coronavirus are fever, cough, runny nose, sore throat, headache, and trouble breathing. These symptoms are very much like those people have with a cold or the flu. The virus can be more serious in some people, especially if they are sick or have health problems.\n\nWhile it is early to have a definite picture of the disease because {{4}} are still collecting the data, some patterns have already emerged among children. Some early reports reveal that {{5}} seem to be getting coronavirus at much lower rates than adults. Even if they get infected, the symptoms are milder. However, most people who get severely infected are those with a weak immune system, like the elderly." },
  81: { title: "Chess", body: "Chess is a two-player game. One player uses the white pieces. The other uses the black {{1}} Each piece moves in a special way. One piece is called the king. Each {{2}} has one. The players take turns moving their pieces. If a player lands on a piece, he or she takes it. The game ends when a player loses his or her {{3}} There are a few more rules, but those are the basics.\n\nSome people think that chess is more than a game. They think that it\n\nmakes the mind stronger. They take their time. They think about what will\n\nhappen next. These skills are useful in life and in chess. Chess is kind of\n\nlike a work out for the {{4}} You don't always have lots of time to\n\nthink when playing chess. There is a type of chess with short time limits.\n\nIt's called blitz chess. In blitz chess, each player gets ten minutes to use for\n\nthe whole game. Your clock runs during your turn. You hit the time clock\n\nafter your move. This stops your clock. It also starts the other player's\n\n{{5}} If you run out of time, you lose. Games of blitz chess are fast-paced." },
  82: { title: "The missing cups", body: "When I was young, my parents moved from California to Illinois with\n\nme and my two sisters. We all helped my mother pack everything from our\n\nold house into boxes. Inside three of {{1}} were my grandmother's\n\nspecial cups, bowls and plates. They were special because my grandmother,\n\na clever artist, painted them herself with a lovely pattern of blue flowers.\n\nSadly, one of those three boxes was lost. We never got the {{2}}, but\n\nthe plates and bowls arrived safely. We used them on special days in the\n\nyear, like birthdays. We remembered those cups and were sad that we did\n\nnot have them any more during {{3}}\n\nTen years later, I decided to go to university in California. In my first\n\nsummer there, a friend asked me to spend the day at an antique market\n\nwith her. At first, I didn't want to go to the {{4}}, but I finally agreed\n\nand we had a great day there looking around. There were many old and\n\ninteresting things for sale. We were just leaving when I saw a woman selling\n\ntwelve beautiful cups with a pattern of blue {{5}}. I looked closely and\n\nsaw they were my grandmother's cups!" },
  83: { title: "My daily routine", body: "My name is Sean O'Brien. I'm fifteen years old, and I'm Irish. I live in Cork. From Monday to Saturday, my daily routine is always the same. My mum always starts at seven o'clock in the morning when I get up and wash my face. After that, I do some exercises, put my clothes on, and prepare my school bag. Then I go downstairs and have {{1}} with my mum and dad. I usually have a sandwich and a cup of tea for the breakfast, but I never have sausages and eggs. After breakfast, I always make my bed, and then I go to {{2}} I stay at school from eight o'clock in the {{3}} till half past two in the afternoon. On Mondays and Wednesdays, I stay later because I have drum lessons. On the other days, I often play football with my friends. When I get home, I sometimes help my mother in the house. I usually do my homework from five to seven o'clock in the evening. My mother helps me to do my {{4}}. At around seven o'clock we all have dinner together. After {{5}}, I usually watch some TV and chat with my family. At 10 0'clock I read a book and go to bed. After such a busy day, I always feel sleepy and ready for my comfortable bed!" },
  84: { title: "Bears", body: "The bear can be a dangerous animal. The adult {{1}} is very strong and it can kill a person. Bears are good at climbing trees and they can run very fast. Bears can {{2}} as fast as people. But they cannot see well and, like most animals, they find food by using their noses. There are seven kinds of bear. The largest is the white polar bear, which is almost three metres tall. There are two {{3}} of black bear. One lives in the forests of North America, and the other lives in South-East Asia. But not all black bears are black. They may be dark brown or a reddish brown.\n\nEveryone loves the black and white panda bear, which comes from China. Not all {{4}} live in the forest today because it is difficult to find\n\nfood. Zoos provide enough {{5}} for pandas to grow fast and attract\n\nvisitors." },
  85: { title: "", body: "Tea had a reputation for being both {{1}} and almost always beneficial. However, scientists are now suggesting that tea may not be as safe as we had previously believed. {{2}} contains caffeine, and caffeine has been linked to sleeplessness and to the unpleasant jumpy feeling some people get when stressed. More seriously, there is a link between miscarriages, and pregnant a woman is advised to reduce her intake of tea until after her baby is born. Due its dangerous side-effects, many {{3}} who drink a lot of tea solve the problem by drinking a beverage from which the {{4}} has been removed, decaffeinated tea, but others claim that it simply doesn't taste right. The sensible course is probably one of moderation: continue to enjoy your cup of tea, but don't {{5}} too many cups! Otherwise, you may suffer from {{6}} at night." },
  86: { title: "", body: "Dolphins are regarded as the friendliest creatures in the sea and stories\n\nof them helping drowning sailors have been {{1}} since Roman\n\ntimes. The more we learn about {{2}} the more we realize\n\nthat their society is more complex than people previously imagined. They\n\nlook after other dolphins when they are ill, care for pregnant mothers and\n\nprotect the weakest in the community, as we do. They are even used in\n\nmilitary to {{3}} bombs in the sea.Some scientists have suggested that dolphins have a language but it is much more probable that\n\nthey communicate with each other without needing words. Could any Of\n\nthese creatures be more intelligent than {{4}}? Certainly the most common argument in favor of man's superiority over them that we can kill them more easily than they can {{5}} us is the least satisfactory. On the contrary, the more we discover about these remarkable {{6}}, the less we appear superior when we destroy them." },
  87: { title: "", body: "Abigail Adams was born on November 22, 1744. Adams was both the wife and mother of two American presidents. She married John Adams, the second {{1}} of the United States on October 25, 1764. John and Abigail Adams had six children together. One of their {{2}} John Quincy Adams, would later become the sixth president of the United States.\n\nAbigail Adams is most remembered for the letters that she wrote back and forth to her husband, while he was working with the Continental Congress in Philadelphia, Pennsylvania. John Adams would frequently write to her and ask for her advice on both social and {{3}} issues of the time. The {{4}} of Abigail Adams to her husband John Adams are now part of American Revolutionary War period history because they serve as a firsthand eye-witness account of political life during this time.\n\nAbigail Adams is also known as the first \"First Lady\" to live in the White House, which became the official residence of the presidentiall {{5}} after the nation's capital was relocated to Washington, D.C. in 1800. The \"First Lady\" enjoyed {{6}} at the newly built White House mansion even though it was still under construction when the \"First Family\" moved in." },
  88: { title: "", body: "Fictional stories about people who have extraordinary abilities have always attracted people's attention. One of them is the story of Vera Petrova, who is able to perceive things with different parts of her skin, and through solid walls. One day she comes into her father's office and puts her hands on the door of a locked {{1}} Suddenly she asks her father why he keeps so many old newspapers locked away in the safe. Vera's curious talent is brought to the notice of a scientific research institute and she is given a series of tests by a special commission. During these {{2}} she manages to read a newspaper through an opaque screen and then she describes the figures and colors of a picture hidden under a carpet. During all these tests Vera is blindfold; and, but, except when she is {{3}} she lacks the ability to perceive things with her skin. It was also found that although she could {{4}} things with her fingers and this {{5}} stopped the moment her hands were wet." },
  89: { title: "", body: "Blue jeans are casual pants noted for their strength and comfort. Blue {{1}} in the form we know them today didn't come about until the middle of the nineteenth century. Levi Strauss, an enterprising immigrant who happened to have a few bolts of blue denim cloth on hand. recognized a need for strong work {{2}} in the mining communities of California. He first designed and marketed \"Levi's\" in 1850 and there have {{3}} only minor alterations to the original design since then. The number of Blue jeans what were sold started increasing among young people in the 1950s. In the year 1957, 150 million pairs were {{4}} worldwide. The {{5}} for jeans continued to grow until 1981. Although blue jeans have remained basically the same since they were first {{6}} they have always been versatile enough to meet market demand." },
  90: { title: "", body: "Stonehenge is an ancient monument situated about ten miles north of\n\nSalisbury in England. It was {{1}} about 4500 years ago, but by whom and for what purpose remains a mystery. The {{2}} must have known of geometry. They may have been influenced by the Mycenaean, whose architecture was similar. The builders must have brought stones from West Wales, over 135 miles away. These {{3}} weigh more than fifty tons. They may have been {{4}} on rafts and rollers. Experts say that it must have taken 1500 men more than five years to transport them. {{5}} was probably built in three stages. First, settlers from continental Europe built a temple for sun worship. Later the \"Beaker\" people added the stone circles. Finally, people of the Wesse Culture transformed Stonehenge into an observatory. They could calculate the exact time of Midsummer and Midwinter in the {{6}}" },
  91: { title: "", body: "Finnish-born botanist William Nylander taught at the University of Helsinki for a number of years and later moved to Paris, where he lived until his death at the end of the nineteenth century. During the second half of the last {{1}} he became a prominent figure in the field of lichenology.\n\nBotanists form all over the world sent samples to his {{2}} to be analyzed and classified. It can be said that four out of five lichens bear his name.\n\nHe was the first to realize the importance of using chemical reagents in the classification of {{3}} He selected the most common reagents used by the chemists of his time. Lichenologists all over the {{4}} still use these reagents, including tincture of iodine and hypochlorite, in a laboratory. During the first {{5}} of the twentieth century, a Japanese named Arahina added only one {{6}} products- P-Phenol diamines.\n\nNylander was also responsible for discovering that the atmosphere of big cities hindered the lichens' development and caused them to disappear. Now they are used to detect atmospheric pollution." },
  92: { title: "A Nice Place to Visit", body: "I would like to explore the {{1}} as an astronaut. It would be fun to wear a spacesuit and stomp on moon dust. The moon's gravity has a weaker pull than on Earth. I would be super strong! I could jump 12 feet high and lift a 30-pound\n\nrock! But I don't think the moon is a good {{2}} to live. {{3}} has an atmosphere, or a layer of gases. People, animals, and plants need these gases to live. The top layer of the {{4}} is our sky. The moon has no atmosphere, so it has no sky. It would be strange to see only stars and blackness. Without {{5}} nothing lives on the moon. I would miss trees and plants. And without air, there are no sounds on the moon. Silence all the time would be creepy. I like the moon, but I'm not ready to {{6}} there." },
  93: { title: "How an Island Is Formed?", body: "Most islands are located in oceans. Many of these {{1}} are the\n\ntops of huge volcanoes. The volcanoes go all the way down to the bottom\n\nof the sea. But they began under the ocean floor. The ocean floor is part of\n\na layer of Earth called\n\nthe crust. It is very hot underneath the crust, so the rocks there are\n\nsoft. Those hot, soft rocks rise through cracks in Earth's {{2}}\n\nThat action is the beginning of an underwater volcano. When hot rocks\n\nrise through the crust, they hit the water. The {{3}} cools the\n\nrocks and hardens them. As more hot rocks spill out of the cracks, layers\n\nof rocks build up. Over a long period of time, the {{4}} can get\n\nhigher and higher. As a result, the underwater volcano might rise out of the\n\n{{5}}. The top of that {{6}} then becomes an island." },
  94: { title: "A Small School", body: "Would you want to go to school in a national park? What if the {{1}} was the hottest and driest place in the country? What if it was called Death Valley? Death Valley National Park is a beautiful but harsh desert. For five months a year, temperatures rise over 100°F. About 500 {{2}} live in Death Valley, and some work in the park. Many of the people are families with young children.\n\nDeath Valley Elementary School is down the road from the visitors' center. The Elementary {{3}} is located on Old Ghost Road. In spite of the scary name, the school is a happy {{4}}. The building has two rooms, and it had 11 students in 2009. Most\n\nof the students are kindergartners, and the oldest student is in 4th grade. One teacher and one aide work with all of the {{5}} Going to school in a place {{6}} Death Valley can be a good thing. In such a small school, each student gets a lot of attention." },
  95: { title: "", body: "The vegetarian diet is becoming increasingly popular all the time. Is the vegetarian or meat {{1}} better? A decade ago and earlier, the impression was that a vegetarian diet was lacking in the {{2}} found in meat products. Today though, through research and nutritional science, many nutrients can be found in {{3}} But it has been proven that all these nutrients are {{4}} in correct vegetarian diet. Some may argue that by only consuming meat that is low in fat, meat and vegetarian diets have the same benefits. This is true only if people {{5}} only very low fat meat. The lack of meat is not necessarily the main benefit of to the vegetarian. Vegetarians tend to eat more fruits, vegetables and grains than the meat eater. They also tend not to use tobacco and excessive alcohol. Moreover, {{6}} tend to get more exercise." },
  96: { title: "", body: "TIME magazine has chosen 26-year old Facebook founder Mark Zuckerberg as its Person of the Year for 2010. Since 1920 {{1}}\n\nmagazine has chosen a person, or a group of people, who have changed\n\nthe world for the better, or sometimes for worse. Mark Zuckerberg won the\n\naward because he has created a new style of communication and a new way of\n\nexchanging information. In 2010 a film called \"The Social Network\" portrayed Zuckerberg's life at Harvard and what happened later on. After winning the prize {{2}} stated that he is happy that Facebook has succeeded in being something that millions want to use. Everything began in February 2004, when Zuckerberg was still a {{3}} at Harvard. Being a student at Harvard he started an online platform that connected college students. It was a way of keeping in touch when you left college and the university. By the end of 2004 Facebook had grown and was accessible on hundreds of campuses across the {{4}} and later much more over the world. By 2006 13 million people used the social network; today {{5}} is used by 600 million users around the word. Although 50% of all Americans have a Facebook account, three out of four {{6}} come from outside the US." },
  97: { title: "", body: "Dolphins are often regarded as one of Earth's most intelligent {{1}}. They are social animals, living in pods of up to twelve\n\nindividuals. In places with a high abundance of food, pods can join temporarily, forming one big {{2}}, such groupings may exceed 1,000\n\ndolphins. They communicate using a variety of clicks, whistle-like sounds\n\nand other vocalizations. Membership in pods is not rigid; interchange is\n\ncommon. {{3}} can, however, establish strong social relations;\n\nthey will stay with injured or ill individuals, even helping them to breathe\n\nby bringing them to the surface if needed. This friendly {{4}}\n\nis not limited to their own species. The dolphin Moko in New Zealand has\n\nbeen observed guiding a female Pygmy Sperm Whale together with her calf out of shallow water where they had stranded several times. They have also been seen protecting {{5}} from sharks. Dolphins swim circles around the swimmers or making {{6}} go away." },
  98: { title: "April Fool's Day", body: "April Fool's Day, sometimes called All Fool's Day, is on the first of {{1}} every year. People can play practical jokes. That's why you shouldn't believe what is said to you and you should be doubtful of the people around you on this day. Someone might change the time on another person's alarm to make him wake up very early or very late. Or she/he may put a lot of pepper in another's food and see until the {{2}} is eaten. Of course, all this is done just for fun. When the trick is played people say \"April Fool\" to make the poor person realize that it was just one of the {{3}}\n\nSome of the well-known and most successful pranks or practical jokes were on the media - television, radio stations, newspapers... For instance, a BBC television program ran a famous trick in 1957, showing Italians harvesting spaghetti from trees. A large number of people contacted the BBC wanting to know how to cultivate {{4}} trees. In 2008, the {{5}} again reported on a newly discovered colony of flying penguins showing people walking with the {{6}} in Antarctica, and following their flight to the Amazon rainforest." },
  99: { title: "Would you like to be an astronaut?", body: "You don't have to be Superman to fly in space. Many men and women from many different countries have done it. For example, the European Space Agency (ESA) now has 14 astronauts from 8 different {{1}}\n\nThe first thing is this - you need to be sure it's the {{2}}\n\nthat you really want to do. It requires several years of study at university\n\nbefore astronaut training even begins. Most people start this job between\n\n27 and 37 years of age. Many astronauts also get a {{3}}\n\nbecome pilots first.\n\n{{4}} come from all over Europe and the world, and it's\n\nimportant that they can speak the same languages. They have to speak English, and they are given Russian lessons. Some also learn another language,\n\nfor example Japanese, as a number of astronauts are {{5}}\n\nspeakers.\n\nIf you are still at school and you'd like to be an astronaut when you're\n\nolder, it's not too early to start developing the skills you will need. Playing\n\nvideo games is a great thing to do, as it helps you to think quickly and clearly. This is what you will need to do when you travel in {{6}}" },
  100: { title: "An amazing stay at the Ocean View Hotel", body: "I'm usually sad to say goodbye to my cousins after visiting them in Australia. But last June I didn't feel {{1}}. We had to change planes in the Middle East on the way back and had to stay overnight. I just couldn't wait to get to our hotel.\n\nThe first thing I noticed in the {{2}} was all the glass. It was really bright, so I don't know why all the lights were on in the building! There was also loud rock music playing, which I loved (but my parents didn't such {{3}})! There weren't many people waiting at the reception, so we were soon in our rooms.\n\nThe garden wasn't what I expected. 'Dad', I said, 'you told me there was a pool. You know I love swimming!' He took me back into the reception area and then up in the lift to the 39th floor and out onto the top of the {{4}}. 'Here the {{5}} is,' he said. It was amazing! {{6}} under the clouds was awesome." },
};

/* ===== data_p2.js ===== */
// CEFR Companion - Reading Part 2 sample
// Source: MULTILEVEL MASTER READING, Part 2 introductory example.
const READING_P2 = [
  {
    n: 0,
    label: "Namuna",
    title: "Language courses",
    source: "Kitobdagi namunaviy topshiriq",
    statements: [
      ["A", "You need to learn the language for your job."],
      ["B", "You would like to continue your studies in another country."],
      ["C", "You want to learn the language and do interesting things in your free time."],
      ["D", "You want to learn the language in London."],
      ["E", "You want to have a higher education in England."],
      ["F", "You want to learn the language next summer."],
      ["G", "You need a free place to stay while studying."],
      ["H", "You would like to learn more than one language."],
      ["I", "You need to take an exam, finishing the course."],
      ["J", "You want to meet people from local companies during the course."]
    ],
    texts: [
      {
        title: "Spanish Courses in Barcelona",
        body: "General Spanish classes for all levels. One- or two-month courses. Free accommodation. Registration starts 1 July.",
        answer: "G",
        explanation: "E'londa “Free accommodation” (bepul turar joy) berilishi aytilgan. G variantida o'qish paytida bepul yashash joyi kerakligi yozilgan."
      },
      {
        title: "English Immersion in Canada",
        body: "Intensive ESL instruction, a homestay program and leisure activities. Vancouver English Centre.",
        answer: "C",
        explanation: "Kurs ingliz tilini o'rgatadi va bo'sh vaqtda mashg'ulotlarni ham taklif qiladi. Bu C variantidagi til o'rganish va qiziqarli faoliyatga mos."
      },
      {
        title: "Centre for English Language and British Studies",
        body: "University of East Anglia. Language and culture courses, with summer English courses at all levels from July to September.",
        answer: "F",
        explanation: "E'londa yozgi ingliz tili kurslari (July-September) ko'rsatilgan. F variantida tilni kelasi yozda o'rganish istagi bor."
      },
      {
        title: "St John's Language School",
        body: "Fun English courses for all levels. Examination preparation courses. Trendy central London location.",
        answer: "D",
        explanation: "Til maktabi London markazida joylashgan. D variantidagi asosiy ishora aynan Londonda til o'rganish."
      },
      {
        title: "French in France",
        body: "Open all year round. Courses from one week up to nine months, all levels. Certified exams if required.",
        answer: "I",
        explanation: "“Certified exams if required” iborasi kurs yakunida imtihon topshirish imkonini bildiradi. Bu I variantiga mos."
      },
      {
        title: "Scholarships to study in Italy",
        body: "One semester abroad. The scholarship covers air travel, tuition fees and a monthly allowance. For IT and Engineering students.",
        answer: "B",
        explanation: "Grant Italiyada bir semestr o'qishni qo'llab-quvvatlaydi. B variantida o'qishni boshqa mamlakatda davom ettirish aytilgan."
      },
      {
        title: "ILS France",
        body: "Courses for business executives and students: French for international relations, commercial French, literature, music, film, hotel and tourism industries.",
        answer: "A",
        explanation: "Kurslar tijorat, xalqaro munosabatlar, mehmonxona va turizm kabi ish sohalariga moslashtirilgan. Bu kasb uchun til o'rganishga mos."
      },
      {
        title: "Intensive Spanish Language Courses",
        body: "Stay with carefully chosen families and socialize with guests from the local business community while learning Spanish language and culture.",
        answer: "J",
        explanation: "E'londa mahalliy biznes hamjamiyati vakillari bilan muloqot qilish aytilgan. Bu J variantidagi mahalliy kompaniyalardan odamlar bilan uchrashishga mos."
      }
    ]
  }
];

// Part 2 catalog: Uzbek topic labels for the 55 book exercises.
const READING_P2_CATALOG = [
 {
  "n": 1,
  "title": "Kafelar"
 },
 {
  "n": 2,
  "title": "Bog' va tabiat belgilari"
 },
 {
  "n": 3,
  "title": "Suzish va suv sporti"
 },
 {
  "n": 4,
  "title": "Temiryo'l"
 },
 {
  "n": 5,
  "title": "Ogohlantiruvchi belgilar"
 },
 {
  "n": 6,
  "title": "Klublar va tadbirlar"
 },
 {
  "n": 7,
  "title": "Ish e'lonlari"
 },
 {
  "n": 8,
  "title": "Kurslar va darslar"
 },
 {
  "n": 9,
  "title": "Til kurslari"
 },
 {
  "n": 10,
  "title": "Uy-joy e'lonlari"
 },
 {
  "n": 11,
  "title": "Mehmonxonalar"
 },
 {
  "n": 12,
  "title": "Mehmonxona va ovqatlanish sohasi"
 },
 {
  "n": 13,
  "title": "Dam olish mehmonxonalari"
 },
 {
  "n": 14,
  "title": "Mebel va uy jihozlari"
 },
 {
  "n": 15,
  "title": "Ko'chirish xizmatlari"
 },
 {
  "n": 16,
  "title": "Muzeylar"
 },
 {
  "n": 17,
  "title": "Shoular va tomoshalar"
 },
 {
  "n": 18,
  "title": "Kafe va ovqatlanish joylari"
 },
 {
  "n": 19,
  "title": "Maktablar va ta'lim"
 },
 {
  "n": 20,
  "title": "Mahalliy xizmatlar"
 },
 {
  "n": 21,
  "title": "Do'konlar va xarid"
 },
 {
  "n": 22,
  "title": "Sayohat va paromlar"
 },
 {
  "n": 23,
  "title": "Restoranlar"
 },
 {
  "n": 24,
  "title": "Mehmonxonada dam olish"
 },
 {
  "n": 25,
  "title": "Sayohat paketlari"
 },
 {
  "n": 26,
  "title": "Uy-ro'zg'or xizmatlari"
 },
 {
  "n": 27,
  "title": "Konsertlar"
 },
 {
  "n": 28,
  "title": "Restoranlar va taomlar"
 },
 {
  "n": 29,
  "title": "Ish va kasblar"
 },
 {
  "n": 30,
  "title": "Dam olish va ko'ngilochar markazlar"
 },
 {
  "n": 31,
  "title": "Tabiat bo'ylab sayrlar"
 },
 {
  "n": 32,
  "title": "Qisqa biznes kurslari"
 },
 {
  "n": 33,
  "title": "Festivallar"
 },
 {
  "n": 34,
  "title": "Ish e'lonlari"
 },
 {
  "n": 35,
  "title": "Poyezd chiptalari"
 },
 {
  "n": 36,
  "title": "Fitnes ilovalari"
 },
 {
  "n": 37,
  "title": "Ijaraga dam olish kvartiralari"
 },
 {
  "n": 38,
  "title": "Xizmat ko'rsatuvchi bizneslar"
 },
 {
  "n": 39,
  "title": "Shahardagi tadbirlar"
 },
 {
  "n": 40,
  "title": "Restoran e'lonlari"
 },
 {
  "n": 41,
  "title": "Onlayn repetitorlar"
 },
 {
  "n": 42,
  "title": "Suzish darslari"
 },
 {
  "n": 43,
  "title": "Bir kunlik kurslar"
 },
 {
  "n": 44,
  "title": "Yozgi tadbirlar"
 },
 {
  "n": 45,
  "title": "Ish takliflari"
 },
 {
  "n": 46,
  "title": "Ijaraga uy-joy"
 },
 {
  "n": 47,
  "title": "Yarim stavkali ishlar"
 },
 {
  "n": 48,
  "title": "Ish e'lonlari"
 },
 {
  "n": 49,
  "title": "Dam olish va sayohat"
 },
 {
  "n": 50,
  "title": "Mahalliy xizmatlar"
 },
 {
  "n": 51,
  "title": "Barlar va restoranlar"
 },
 {
  "n": 52,
  "title": "Shahar bog'lari"
 },
 {
  "n": 53,
  "title": "Festival tomoshalari"
 },
 {
  "n": 54,
  "title": "Kafe va restoran tanlash"
 },
 {
  "n": 55,
  "title": "Sidneydagi diqqatga sazovor joylar"
 }
];

// Notices and statements transcribed from the book pages; keys checked against the book answer key.
const READING_P2_EXERCISES = [
 {
  "n": 1,
  "label": "Exercise 1",
  "title": "Kafelar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "The café can update you about the latest news on its website."
   ],
   [
    "B",
    "You can pay for meals a full price but for drinks a half price here."
   ],
   [
    "C",
    "The restaurant has given up serving its burgers in plastic boxes."
   ],
   [
    "D",
    "You can order this meal at any time."
   ],
   [
    "E",
    "You have to order your seat at least two days in advance."
   ],
   [
    "F",
    "You can collect your hot drinks after you have paid for them."
   ],
   [
    "G",
    "You can have your order delivered your home with some payment."
   ],
   [
    "H",
    "You should find a table before deciding what to have and placing your order."
   ],
   [
    "I",
    "You can eat vegetarian dishes in this café."
   ],
   [
    "J",
    "You can buy items in this café as usual on Tuesday."
   ]
  ],
  "texts": [
   {
    "title": "Rainbow Café",
    "body": "Our popular breakfasts are served all day at excellent prices!\nHealthy breakfasts also available",
    "answer": "D",
    "explanation": "“Served all day” – nonushta kun bo'yi beriladi, ya'ni uni istalgan vaqtda buyurtma qilish mumkin (D). “Healthy” so'zi vegetarian degani emas, shuning uchun I to'g'ri kelmaydi."
   },
   {
    "title": "Ken's Cakeshop",
    "body": "We're closed early today for cleaning.\nOpen again normal times (9 a.m. – 6 p.m.) tomorrow (Tuesday)",
    "answer": "J",
    "explanation": "Ertaga, seshanba kuni do'kon odatdagi vaqtda ochiladi (“normal times … Tuesday”). Demak seshanba kuni odatdagidek xarid qilish mumkin (J)."
   },
   {
    "title": "Motorway Café",
    "body": "Please pay for hot drinks at cash desk, collect receipt and give it to serving staff, who will prepare your drink immediately",
    "answer": "F",
    "explanation": "Avval kassada to'lanadi, keyin chek beriladi va ichimlik olinadi: “pay … collect receipt … prepare your drink”. Bu F ga mos."
   },
   {
    "title": "Park Café",
    "body": "For news about the café email pete@cafe.com or go to our new website www.cafe.com",
    "answer": "A",
    "explanation": "Kafe yangiliklarini yangi veb-saytdan bilish mumkin (“for news … go to our new website”). A."
   },
   {
    "title": "Riverside Café",
    "body": "Take a seat and choose what you'd like from our menu. A waiter will come to your table shortly.",
    "answer": "H",
    "explanation": "Avval o'tirasiz (“take a seat”), keyin menyudan tanlaysiz, ofitsiant buyurtmani oladi. H: avval stol topib, keyin nima yeyishni hal qilish."
   },
   {
    "title": "",
    "body": "We have stopped using plastic for our burger boxes – these are now made of recycled cardboard instead.",
    "answer": "C",
    "explanation": "“Stopped using plastic for our burger boxes” = “given up serving its burgers in plastic boxes”. C."
   },
   {
    "title": "FAST CAFÉ",
    "body": "SOUP AND HOT PIES ONLY\nPAID DELIVERY AVAILABLE\nCALL 9964722",
    "answer": "G",
    "explanation": "“Paid delivery” – pullik yetkazib berish, ya'ni buyurtmani uyga haq evaziga yetkazishadi (G)."
   },
   {
    "title": "Moon café",
    "body": "Half-priced drinks with 3-course meal!\nAddress: 3, Adam Avenue",
    "answer": "B",
    "explanation": "3 xil taomli ovqat to'liq narxda, ichimliklar esa yarim narxda (“half-priced drinks”). B."
   }
  ]
 },
 {
  "n": 2,
  "label": "Exercise 2",
  "title": "Bog' va tabiat belgilari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "People should not ride their bikes on the green areas here."
   ],
   [
    "B",
    "It is unsafe for people to sleep in tents here."
   ],
   [
    "C",
    "Do not go into the water here."
   ],
   [
    "D",
    "You should not play these if you are older than ten years old."
   ],
   [
    "E",
    "You must not collect wood to cook food in this place."
   ],
   [
    "F",
    "You must not feed animals."
   ],
   [
    "G",
    "You should be careful of dangerous wild animals in the park."
   ],
   [
    "H",
    "You can organize a picnic here."
   ],
   [
    "I",
    "You can swim anywhere in the river."
   ],
   [
    "J",
    "You can see around the river in a small group of no more than 10 children."
   ]
  ],
  "texts": [
   {
    "title": "DANGER",
    "body": "Falling rocks!\nNo camping near the castle ruins",
    "answer": "B",
    "explanation": "Qoyadan tosh tushishi mumkin, shuning uchun bu yerda chodir tikib tunash xavfli (“no camping”). B."
   },
   {
    "title": "DO NOT GIVE ANY FOOD TO WILD ANIMALS",
    "body": "New Wood",
    "answer": "F",
    "explanation": "Yovvoyi hayvonlarga ovqat berish taqiqlangan (“do not give any food”). F."
   },
   {
    "title": "Shilfock Forest",
    "body": "No barbecues or fires please!",
    "answer": "E",
    "explanation": "Gulxan yoqish va barbekyu taqiqlangan, demak ovqat pishirish uchun o'tin yig'ib bo'lmaydi. E."
   },
   {
    "title": "Guided river walks for young people",
    "body": "Maximum 10 in group – ask inside",
    "answer": "J",
    "explanation": "Yoshlar uchun gid bilan daryo bo'ylab sayr, guruhda ko'pi bilan 10 kishi (“maximum 10 in group”). J."
   },
   {
    "title": "Orville Playground",
    "body": "Swings are for children under 10 only",
    "answer": "D",
    "explanation": "Arg'imchoqlar faqat 10 yoshdan kichiklar uchun. 10 yoshdan katta bo'lsangiz, ularda o'ynamaysiz (D)."
   },
   {
    "title": "Visitors to Park Walk!",
    "body": "Please use this area for picnics",
    "answer": "H",
    "explanation": "Bu joy piknik uchun ajratilgan (“use this area for picnics”). H."
   },
   {
    "title": "",
    "body": "NO SWIMMING IN THIS PART OF THE RIVER!",
    "answer": "C",
    "explanation": "Daryoning bu qismida suzish mumkin emas, ya'ni suvga tushmang (C). I esa “daryoning istalgan joyida” deydi, bu belgiga zid."
   },
   {
    "title": "Horseshoe Park",
    "body": "No cycling on grass\nPlease stay on paths",
    "answer": "A",
    "explanation": "Maysada velosiped haydash taqiqlangan (“no cycling on grass”). A."
   }
  ]
 },
 {
  "n": 3,
  "label": "Exercise 3",
  "title": "Suzish va suv sporti",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You will pay less for a pair of swimming shorts here this weekend."
   ],
   [
    "B",
    "Make sure you arrive at the pool on time for this."
   ],
   [
    "C",
    "If you enjoy sports competitions, watch this television program."
   ],
   [
    "D",
    "People who read this can learn more about doing this sport."
   ],
   [
    "E",
    "Call this number if you would like to learn to sail here."
   ],
   [
    "F",
    "If you go here this Saturday afternoon, you don't have to pay."
   ],
   [
    "G",
    "Buy the magazine and get a bottled water for free."
   ],
   [
    "H",
    "You can learn swimming with dolphins."
   ],
   [
    "I",
    "Parents are welcome to see kid's sailing activities."
   ],
   [
    "J",
    "If you are at least 10 years-old and like to learn to swim in open air, you are welcome."
   ]
  ],
  "texts": [
   {
    "title": "Bridge Swimming Pool",
    "body": "This weekend only\nfree entrance\n2-6 p.m.!",
    "answer": "F",
    "explanation": "Shu dam olish kunlari soat 14–18 da kirish bepul. Shanba kuni tushdan keyin borsangiz pul to'lamaysiz (F)."
   },
   {
    "title": "Watersports Clothes Shop",
    "body": "Sailing • Swimming • Windsurfing\nSummer sale begins on Saturday!",
    "answer": "A",
    "explanation": "Shanbadan yozgi chegirmali savdo boshlanadi. Suzish shortisi shu hafta oxiri arzonroq bo'ladi (A)."
   },
   {
    "title": "Year 10s swimming practice",
    "body": "4 p.m. today\nDon't be late!",
    "answer": "B",
    "explanation": "“Don't be late!” – mashg'ulotga o'z vaqtida keling. B."
   },
   {
    "title": "'Windsurfing' by Hugh Carter",
    "body": "Lots of useful ideas and photos – $10",
    "answer": "D",
    "explanation": "Bu kitob: foydali g'oyalar va rasmlar bor. Uni o'qigan odam vindserfing haqida ko'proq o'rganadi (D)."
   },
   {
    "title": "IMPROVE YOUR SWIMMING",
    "body": "• classes for 10-14 year-olds\n• outdoor pool\n• call Jennie (099766)",
    "answer": "J",
    "explanation": "10–14 yoshlilar uchun ochiq havodagi hovuzda suzish darslari. J: kamida 10 yosh va ochiq havoda suzishni o'rganish."
   },
   {
    "title": "",
    "body": "Don't miss Sailing Racing Extra tonight on channel 4\n7.30 – 8.00 p.m.",
    "answer": "C",
    "explanation": "Bu televizion dastur: yelkanli qayiq poygalari (“racing”). Sport musobaqalarini yoqtirsangiz, tomosha qiling (C)."
   },
   {
    "title": "",
    "body": "Free water bottle with this week's TV – Teen Sports magazine\n£2.95",
    "answer": "G",
    "explanation": "Jurnal sotib olsangiz, suv shishasi tekin beriladi. G."
   },
   {
    "title": "Blue Lake Sports (889933)",
    "body": "Beginners' sailing lessons\nSaturdays 2.30 – 3.30 p.m.",
    "answer": "E",
    "explanation": "Yangi boshlovchilar uchun yelkanli qayiq darslari va telefon raqami bor. E: yelkanli qayiqni o'rganish uchun shu raqamga qo'ng'iroq qiling."
   }
  ]
 },
 {
  "n": 4,
  "label": "Exercise 4",
  "title": "Temiryo'l",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You cannot travel by railway until tomorrow."
   ],
   [
    "B",
    "Children and parents travel for less with this card."
   ],
   [
    "C",
    "A ticket must be bought before you get on the train."
   ],
   [
    "D",
    "Only adults pay to go in here."
   ],
   [
    "E",
    "This is late because of bad weather."
   ],
   [
    "F",
    "It is not certain but the train may come later than the scheduled time."
   ],
   [
    "G",
    "You buy a ticket after you get on the train."
   ],
   [
    "H",
    "If you don't buy a ticket by the new year, you will pay more for it."
   ],
   [
    "I",
    "If you prove that you're a student, you can buy a cheaper ticket."
   ],
   [
    "J",
    "There is no restaurant on the train."
   ]
  ],
  "texts": [
   {
    "title": "Weekend rail tickets",
    "body": "discounts for student card holders",
    "answer": "I",
    "explanation": "Talaba guvohnomasi borlarga chegirma. Talaba ekaningizni isbotlasangiz, arzonroq chipta olasiz (I)."
   },
   {
    "title": "",
    "body": "DELAYS POSSIBLE",
    "answer": "F",
    "explanation": "Kechikish bo'lishi mumkin, lekin aniq emas (“possible”). F."
   },
   {
    "title": "",
    "body": "GET CHEAPER TICKETS WITH A FAMILY RAILCARD",
    "answer": "B",
    "explanation": "Oilaviy kartochka bilan chiptalar arzonroq: ota-ona va bolalar kamroq to'laydi (B)."
   },
   {
    "title": "",
    "body": "NO TRAINS TODAY BECAUSE OF VERY HIGH WINDS",
    "answer": "A",
    "explanation": "Bugun poyezdlar yo'q, ya'ni ertagacha poyezdda yurib bo'lmaydi (A). Sabab shamol bo'lsa ham, E ga emas, A ga mos: E bitta kechikayotgan poyezd haqida."
   },
   {
    "title": "",
    "body": "TRAIN TICKETS WILL COST MORE FROM 1ST JANUARY",
    "answer": "H",
    "explanation": "1-yanvardan chiptalar qimmatlashadi. Yangi yilgacha olmasangiz, ko'proq to'laysiz (H)."
   },
   {
    "title": "8.30 LONDON TRAIN",
    "body": "DELAYED BECAUSE OF FOG",
    "answer": "E",
    "explanation": "Poyezd tuman (ob-havo) sababli kechikmoqda. Bu aniq fakt, shuning uchun E (F emas)."
   },
   {
    "title": "",
    "body": "DO NOT GET ON THE TRAIN WITHOUT A TICKET",
    "answer": "C",
    "explanation": "Chiptasiz poyezdga chiqmang, ya'ni chipta chiqishdan oldin olinadi (C)."
   },
   {
    "title": "",
    "body": "TICKET OFFICE CLOSED\nBUY YOUR TICKET ON THE TRAIN",
    "answer": "G",
    "explanation": "Kassa yopiq, chiptani poyezd ichida olasiz (G)."
   }
  ]
 },
 {
  "n": 5,
  "label": "Exercise 5",
  "title": "Ogohlantiruvchi belgilar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Your items may be stolen or lost in any moment."
   ],
   [
    "B",
    "You cannot use this computer for any purpose."
   ],
   [
    "C",
    "You should hide this from kids."
   ],
   [
    "D",
    "You should use a different road. This street has been closed now because of a car crash."
   ],
   [
    "E",
    "You may have difficulty seeing the road clearly because of weather."
   ],
   [
    "F",
    "You should go somewhere because it may rain."
   ],
   [
    "G",
    "You should turn off the PC before leaving the room."
   ],
   [
    "H",
    "You must not have your snacks in this place."
   ],
   [
    "I",
    "Computers are not working in this room."
   ],
   [
    "J",
    "You may miss seeing another vehicle if you drive fast here."
   ]
  ],
  "texts": [
   {
    "title": "SLOW! DANGER!",
    "body": "FOG AHEAD!",
    "answer": "E",
    "explanation": "Oldinda tuman bor, yo'lni yaxshi ko'rish qiyin bo'ladi. Sabab ob-havo (E)."
   },
   {
    "title": "",
    "body": "Do not leave computers on after lesson has finished",
    "answer": "G",
    "explanation": "Dars tugagach kompyuterni yoqiq qoldirmang, ya'ni xonadan chiqishdan oldin o'chiring (G)."
   },
   {
    "title": "STUDENTS!",
    "body": "These computers are not for Internet or email use",
    "answer": "B",
    "explanation": "Bu kompyuterlardan internet va email uchun foydalanib bo'lmaydi. Kitob kaliti: B. I esa kompyuterlar ishlamayapti deydi, belgida bu aytilmagan."
   },
   {
    "title": "",
    "body": "No mobile phones, food or drinks in Computer classroom",
    "answer": "H",
    "explanation": "Kompyuter xonasida ovqat-ichimlik mumkin emas (“no … food or drinks”). H."
   },
   {
    "title": "Drive Slowly",
    "body": "Lorries Turning",
    "answer": "J",
    "explanation": "Yuk mashinalari burilyapti. Tez haydasangiz, boshqa transportni payqamay qolishingiz mumkin (J)."
   },
   {
    "title": "",
    "body": "KEEP THIS MEDICINE AWAY FROM CHILDREN",
    "answer": "C",
    "explanation": "Dorini bolalardan uzoqroq saqlang, ya'ni bolalardan yashiring (C)."
   },
   {
    "title": "ROAD CLOSED",
    "body": "BECAUSE OF TRAFFIC ACCIDENT",
    "answer": "D",
    "explanation": "Yo'l avariya sababli yopilgan, boshqa yo'ldan yuring (D)."
   },
   {
    "title": "CITY AIRPORT",
    "body": "DON'T LEAVE YOUR LUGGAGE UNATTENDED",
    "answer": "A",
    "explanation": "Yukingizni qarovsiz qoldirmang, aks holda u o'g'irlanishi yoki yo'qolishi mumkin (A)."
   }
  ]
 },
 {
  "n": 6,
  "label": "Exercise 6",
  "title": "Klublar va tadbirlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "This club is for only elderly people."
   ],
   [
    "B",
    "Younger children can participate one week earlier than older children."
   ],
   [
    "C",
    "If you are studying at university, you can pay a half of the ticket price."
   ],
   [
    "D",
    "You can win a footwear if you are successful."
   ],
   [
    "E",
    "Ad suggests you which bus to take to come to the event."
   ],
   [
    "F",
    "If you are keen on a trip in woodland, this club suits you."
   ],
   [
    "G",
    "There is age limit of 12 -18 years to join this club."
   ],
   [
    "H",
    "You can have a meal in a cafe at the end of the activity."
   ],
   [
    "I",
    "There is a dress code to enter this place."
   ],
   [
    "J",
    "Join the club and earn money."
   ]
  ],
  "texts": [
   {
    "title": "Happy Days Club",
    "body": "For young people from 12-18 years\nEvery Friday 7.30-10.30 pm\n29 Milton Street\nJust £1 per week\nGames – music – dancing and lots more",
    "answer": "G",
    "explanation": "Klub 12–18 yoshdagi yoshlar uchun (“from 12-18 years”). G."
   },
   {
    "title": "The White House",
    "body": "Disco – Rock music from the U.S.A\nOver 18s only\nDoors open: 9pm Tuesday – Saturday\nTicket £6 (Students £5)\nNo jeans or T-shirts",
    "answer": "I",
    "explanation": "“No jeans or T-shirts” – kiyinish qoidasi bor (I). Talabalarga chegirma yarim narx emas (£6 → £5), shuning uchun C emas."
   },
   {
    "title": "City University Film Club",
    "body": "Every Monday 6-9.30 p.m.\nFilms from America, Australia and Britain\nGet your tickets from the Student Office\nAdults £3, Students £1.50\nCafé open for drinks and snacks",
    "answer": "C",
    "explanation": "Talabalar £1.50 to'laydi, bu kattalar narxi £3 ning yarmi (C)."
   },
   {
    "title": "TOWN RUNNING RACE",
    "body": "Saturday 14th June\nFrom Clifton Bridge to Market Square\nFor adults and children over 12 years old\nGreat prizes – new sports clothes and trainers\nCall 848244",
    "answer": "D",
    "explanation": "Sovrinlar orasida krossovkalar bor (“trainers” – sport poyabzali). Yutsangiz, poyabzal olasiz (D)."
   },
   {
    "title": "City walk",
    "body": "Friendly guides\nSee the old market and castle\nStarts: train station at 11 am\nFinishes with lunch at Park Café\nOn Saturdays – all for only £15",
    "answer": "H",
    "explanation": "Sayohat Park Café'da tushlik bilan tugaydi (“finishes with lunch”). H."
   },
   {
    "title": "Hobby Club Bike Ride",
    "body": "15 kilometres through Danwod Forest\nCall Mary (075542) for more information\nJuly 21st\nBring picnic lunch – meet in Forest Car Park",
    "answer": "F",
    "explanation": "O'rmon orqali 15 km velosiped sayri. O'rmonda sayohat qilishni yoqtirsangiz, mos (F)."
   },
   {
    "title": "FOOTBALL GAME",
    "body": "Bridge End School and Howard's School\nFREE ADMISSION!\nOxford Football Field (Get bus number 47)\nFor more information: Tel 86781543",
    "answer": "E",
    "explanation": "E'lon qaysi avtobusga chiqishni aytadi (“get bus number 47”). E."
   },
   {
    "title": "CCC Cross-country club",
    "body": "15-kilometre races\nOctober 7th under 14s\nOctober 14th 14+\nRaces begin at 9.45 from Forge Farm. Runners arrive by 9.15\nCall club secretary by Sept 30th (094577) to enter the race.\nBarbecue at 12.30. Bring own food (meat, bread, salad, etc.)\nAll welcome.",
    "answer": "B",
    "explanation": "14 yoshgacha bo'lganlar 7-oktyabrda, kattalar bir hafta keyin, 14-oktyabrda yuguradi. B."
   }
  ]
 },
 {
  "n": 7,
  "label": "Exercise 7",
  "title": "Ish e'lonlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You do not have to work on Mondays."
   ],
   [
    "B",
    "You are not allowed to work overtime in the evenings."
   ],
   [
    "C",
    "You must have an ability to attract audiences' attention on screen."
   ],
   [
    "D",
    "If you have never driven a bus before, you cannot apply for this job."
   ],
   [
    "E",
    "This job includes three working days and offers extra money if you work well."
   ],
   [
    "F",
    "If you have an ability to work with graphics on computer and have less time to work, this job is suitable for you."
   ],
   [
    "G",
    "There is a requirement on minimum working period in this company."
   ],
   [
    "H",
    "You must have a good sense to choose fresh products at this job."
   ],
   [
    "I",
    "Since you have good computer skills, you may start this work without experience."
   ],
   [
    "J",
    "This company requires applicants to be able to speak more than one international language."
   ]
  ],
  "texts": [
   {
    "title": "Shoe Zone",
    "body": "is looking for a: SHOP ASSISTANT\nWe're looking for an expert shop assistant for our shop in Leeds.\n- Minimum 3 years of experience\n- Working days: Fridays, Saturdays, Sundays\n- $8 per hour + extra benefits\nPlease send your CV by email on shoezone.jobs@highheels.com",
    "answer": "E",
    "explanation": "Uch ish kuni (juma, shanba, yakshanba) va qo'shimcha imtiyozlar (“extra benefits”). E."
   },
   {
    "title": "BUS DRIVER",
    "body": "Urgently Required!\n- bus driving license\n- minimum of 3 years experience\n- available to work at weekends\n- an attractive salary and benefits will be offered to the appropriate candidates\nPlease call during office hours: 01642 / 7854324\nOr send CV to: Arriva Buses 87 Parliament Road, Middlesbrough",
    "answer": "D",
    "explanation": "Kamida 3 yillik tajriba talab qilinadi. Avtobus haydamagan odam ariza bera olmaydi (D)."
   },
   {
    "title": "SECRETARY",
    "body": "A law firm is looking for a full-time secretary:\n- Degree in economics or computer services\n- Excellent computer skills\n- Problem solving abilities\n- Good communication skills\n- No experience required\n- $1200 per month\nPlease send your CV by email on staff.employment@hotmail.com",
    "answer": "I",
    "explanation": "Kompyuterni a'lo bilish kerak, lekin tajriba talab qilinmaydi (“no experience required”). I."
   },
   {
    "title": "WANTED! SHOP ASSISTANT",
    "body": "Top Shop\nWe're looking for a shop assistant for our clothes shop in Middlesbrough.\n- Age: 25-30\n- Working days: from Tuesday to Sunday\n- Flexible part-time\n- $6.50 per hour\nPlease send your CV by email on topshop@mystore.com",
    "answer": "A",
    "explanation": "Ish kunlari seshanbadan yakshanbagacha, ya'ni dushanba dam olish kuni (A)."
   },
   {
    "title": "Graphic Designer Required",
    "body": "A position is available for a part time graphic designer to join Drawtivity advertising agency.\nYou must be expert in using various computer programs.\nSalary: $3500 per month.",
    "answer": "F",
    "explanation": "Yarim stavkali (part time) grafik dizayner. Kompyuterda grafika bilan ishlay olsangiz va vaqtingiz kam bo'lsa, mos (F)."
   },
   {
    "title": "Tour Guide needed",
    "body": "SeeWorld travel centre is looking for professional tour guides to accompany tourists from all corners of the world. Applicants must have relevant travel experience and be able to communicate in at least two languages.\n$100 per day plus all travel expenses included!",
    "answer": "J",
    "explanation": "Kamida ikki tilda muloqot qilish kerak (“at least two languages”). J."
   },
   {
    "title": "Receptionist",
    "body": "HKL company seeks part-time front desk receptionist. You must be:\n- excellent communication skills;\n- competent in basic computer skills\n- versatile\n- polite and approachable!\nStarting salary: $2800\nWorking contract: at least 1 year",
    "answer": "G",
    "explanation": "Shartnoma kamida 1 yillik (“at least 1 year”), ya'ni minimal ishlash muddati bor (G)."
   },
   {
    "title": "Television Host",
    "body": "GBSC T.V. channel is looking for a new host of its new primetime talk show. You should have...\n- a confident & vibrant personality\n- Minimum 2 years experience of working in the entertainment industry\n- excellent communication skills\nBe popular!!!",
    "answer": "C",
    "explanation": "Teleboshlovchi ekranda tomoshabinni o'ziga jalb qila olishi kerak (“confident & vibrant personality”, “be popular”). C."
   }
  ]
 },
 {
  "n": 8,
  "label": "Exercise 8",
  "title": "Kurslar va darslar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You must have a special clothing on your head to attend this course."
   ],
   [
    "B",
    "You want to be a web developer and need a course for that."
   ],
   [
    "C",
    "You are interested in golf and want to learn to play it."
   ],
   [
    "D",
    "You want to take a music lesson without going out of your home."
   ],
   [
    "E",
    "You are planning to go climbing in the mountain in April."
   ],
   [
    "F",
    "You can play drum at a beginner level and now you want to learn it better."
   ],
   [
    "G",
    "You would like to learn Spanish language. You have free time after 18.00."
   ],
   [
    "H",
    "You want to learn biology to apply for university."
   ],
   [
    "I",
    "You want to go to a prep school in England."
   ],
   [
    "J",
    "You need take your suitable footwear to the lesson."
   ]
  ],
  "texts": [
   {
    "title": "Language Courses",
    "body": "French: Monday evening\nGerman: Thursday evening\nPortuguese: Tuesday afternoon\nSpanish: Wednesday evening\nAfternoon Classes: 2.30-4.30 p.m.\nEvening Classes: 6.30-8.30 p.m.",
    "answer": "G",
    "explanation": "Ispan tili chorshanba kechqurun, soat 18.30–20.30 da. Bu 18.00 dan keyin bo'sh bo'lgan odamga mos (G)."
   },
   {
    "title": "GUITAR LESSONS",
    "body": "Learn in your home\n7 days a week – morning, afternoon or evening\nAll kinds of music\n€90 for 10 lessons\nChildren from 8 years old",
    "answer": "D",
    "explanation": "“Learn in your home” – darsga uydan chiqmasdan qatnashasiz (D)."
   },
   {
    "title": "HORSE – RIDING LESSONS",
    "body": "Bell Riding School, West Road\n€15 per hour\nFriendly, quiet horses\nClasses every day\nEveryone must wear a riding hat",
    "answer": "A",
    "explanation": "Har kim maxsus bosh kiyim kiyishi shart (“must wear a riding hat”). A."
   },
   {
    "title": "CAMP BELLAMY",
    "body": "SPRING ACTIVITIES\nClimbing (Ages 13-16) £60\nSailing (Ages 17-19) £80\nTimes: 8.30 am or 2.30 pm\nCourses begin: 14 April and 21 April",
    "answer": "E",
    "explanation": "Bahorgi tog'ga chiqish (climbing) kurslari aprelda boshlanadi. E."
   },
   {
    "title": "S.Anselm's",
    "body": "One of the very best prep schools in England\n• Happy Family Atmosphere\n• 40 extracurricular activities\n• 2/3 Full Boarding\n• Outstanding academic record\n• Beautiful Peak District setting\n• Excellent Sport, Music, Drama, Art\nS.ANSELM'S PREP SCHOOL, Bakewell, Derbyshire, DE451DP\n01629812734 – headmaster@anselms.co.uk",
    "answer": "I",
    "explanation": "Angliyadagi eng yaxshi tayyorlov maktablaridan biri (“prep schools in England”). I."
   },
   {
    "title": "FOOTBALL LESSONS",
    "body": "Tuesdays and Fridays\nFor players 12 – 16 years old\n6 – 8 p.m.\n€3 per person\nMust wear football boots.\nNorth Road",
    "answer": "J",
    "explanation": "Futbol butsasi kiyish shart (“must wear football boots”), ya'ni mos poyabzal olib kelish kerak (J)."
   },
   {
    "title": "Want to learn an instrument?",
    "body": "Guitar / drums / keyboard\nLessons – all levels\n1-hour lessons on Thursdays and Fridays 5 to 9 p.m.\nStudent £7.50 – Adults £10 per class\nCassie (teacher) 599077",
    "answer": "F",
    "explanation": "Barabanni ham o'rgatishadi va darslar barcha darajalar uchun (“all levels”). Boshlang'ich darajadan yuqoriroqqa o'tmoqchi bo'lganga mos (F)."
   },
   {
    "title": "Computer Classes",
    "body": "Come and learn to make websites!\n12 – 16 year olds\nRoundhouse College [Building 7]\n6 classes £29\nSaturdays 9.30 – 11 a.m.",
    "answer": "B",
    "explanation": "Veb-sayt yasashni o'rgatishadi (“learn to make websites”). Bu veb-dasturchi bo'lmoqchi bo'lganga kerak (B)."
   }
  ]
 },
 {
  "n": 9,
  "label": "Exercise 9",
  "title": "Til kurslari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "A friend wants to learn French and take an examination at the end of the course."
   ],
   [
    "B",
    "Someone you know wants to learn English next summer at a university in England."
   ],
   [
    "C",
    "Your friend wants to learn English in a language school in or near London."
   ],
   [
    "D",
    "You want to have a technical report translated into your language."
   ],
   [
    "E",
    "You want to learn English for your job and meet people from British companies during the course."
   ],
   [
    "F",
    "You want to learn English in order to be able to work in the travel business and would like to take a course in Canada."
   ],
   [
    "G",
    "A colleague would like to stay with a family in Italy."
   ],
   [
    "H",
    "You would like to learn Italian but you don't have money to pay for the course."
   ],
   [
    "I",
    "You want to learn French and enjoy winter sports at the same time."
   ],
   [
    "J",
    "You want to learn Italian but don't have much time."
   ]
  ],
  "texts": [
   {
    "title": "INSTITUT FRANCAIS DES ALPES",
    "body": "FRENCH COURSES & SKIING MEGEVE\n• Morning: French, all levels\n• Afternoon: Skiing, all levels\n• 1 to 12 week courses\n• For adults from Dec 29th\n• All in one place and all included:\nFull board – Small classes – Ski-pass Mont-Blanc (680 km of ski-runs) + Ski insurance\nI.F.A. – B.P.15 – F.34660 COURNONTERRAL\nTel: +33(4)67783642\n(London Language Show Stand 62)",
    "answer": "I",
    "explanation": "Ertalab fransuz tili, tushdan keyin chang'i (“Morning: French … Afternoon: Skiing”). Fransuz tili va qishki sport birga (I)."
   },
   {
    "title": "CAVILAM – French in France!",
    "body": "• Open all year round\n• From 1 week up to 9 months\n• All levels\n• 110 nationalities\n• Intensive and mini-group courses\n• Examination center\nCAVILAM, Bp 2678/EU, 03206 Vichy – France\nTel: +3347056992",
    "answer": "A",
    "explanation": "Fransuz tili kursi va imtihon markazi bor (“examination center”). Kurs oxirida imtihon topshirish mumkin (A)."
   },
   {
    "title": "EDWARDS LANGUAGE SCHOOL",
    "body": "• English classes at all levels all year round\n• Centre for recognized exams\n• Convenient for Heathrow & central London\n• Tailor-made programmes for groups and individuals\nRecognized by the British Council",
    "answer": "C",
    "explanation": "Til maktabi Heathrow va London markaziga yaqin (“convenient for … central London”). C."
   },
   {
    "title": "Study Abroad! Vancouver, Canada",
    "body": "English as a Second Language\nTravel & Tourism – Hospitality – Flight Attendant – Tour Guide/Local & International – Event & Meeting Management\nwww.sita.com/education\nINTERNATIONAL TRAVEL ACADEMY\nTel: +16042663120",
    "answer": "F",
    "explanation": "Kanadada ingliz tili va turizm (“Travel & Tourism”, “Tour Guide”) yo'nalishlari. F."
   },
   {
    "title": "INTENSIVE ENGLISH LANGUAGE COURSES",
    "body": "Aldon House Executive Language Centre, Dorchester Road, England\n• Effective ONE-to-ONE teaching\n• Individual designed study programme\n• Over 20 years' experience\n• 14 study bedrooms\n• Socialise with guests from the local business community\nExperience living in a 19th century country home with an English family. Your learning will be non-stop as you are immersed in English culture.",
    "answer": "E",
    "explanation": "Executive kurs va mahalliy biznes vakillari bilan muloqot (“socialise with guests from the local business community”). Ish uchun ingliz tili (E)."
   },
   {
    "title": "EUROTERM",
    "body": "Euroterm Translations LTD. is an internationally operating translation organization which is capable of handling over 250 translation combinations, and specialized in legal, financial, medical, technical and commercial texts.\nWe are offering you the possibility of becoming an agent and freelance translator in our network.\nIf you are interested, please call 33221158 for further information or write to the following address: Euroterm Translations, Herenstraat, Utrecht, the Netherlands",
    "answer": "D",
    "explanation": "Tarjima kompaniyasi texnik matnlarni ham tarjima qiladi (“technical … texts”). D."
   },
   {
    "title": "THE BRITISH INSTITUTE OF FLORENCE",
    "body": "ITALIAN and ART HISTORY\n• Regular short courses • Pre-university courses • Easter revision courses\n• One year 'A' Levels • Gap year packages • Summer with opera\nTel: +3955284031\nLungarno Guicciardini 9, 50125 Italy",
    "answer": "J",
    "explanation": "Italyan tili bo'yicha qisqa kurslar bor (“regular short courses”). Vaqti kam odamga mos (J)."
   },
   {
    "title": "the Centre G.LEOPARDI offers",
    "body": "300 SCHOLARSHIPS\nFOR ITALIAN LANGUAGE AND CULTURE COURSE IN ITALY\n(Accommodation in a marvelous castle)\nFor information: Dr. Carmelo, Via E.Mettei, 75 – 62022 Italy\ne-mail: centreleopardi@wnt.it",
    "answer": "H",
    "explanation": "Italyan tili kursi uchun 300 ta grant (“scholarships”). Pulingiz bo'lmasa ham o'qishingiz mumkin (H). G emas: bu yerda qal'ada yashash aytilgan, oilada emas."
   }
  ]
 },
 {
  "n": 10,
  "label": "Exercise 10",
  "title": "Uy-joy e'lonlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Looking for a beach home? - this is it."
   ],
   [
    "B",
    "This home will be an Eastern love affair."
   ],
   [
    "C",
    "A Victorian beauty - close to the tube."
   ],
   [
    "D",
    "From this villa, a good view of the boats."
   ],
   [
    "E",
    "The buyer becomes a member on this site."
   ],
   [
    "F",
    "Set in fields - an old cottage home."
   ],
   [
    "G",
    "Houses near water and trees."
   ],
   [
    "H",
    "Luxury Spanish beach villa."
   ],
   [
    "I",
    "A fully serviced retirement home."
   ],
   [
    "J",
    "Escape to Lincolnshire."
   ]
  ],
  "texts": [
   {
    "title": "SHEPHERD'S BUSH – NO CHAIN £699",
    "body": "Recently refurbished 5 bedroom Victorian 3 storey, bay fronted house finished to an exceptional standard. 5 mins to underground.\nViewing highly recommended.\nContact: 0750223577",
    "answer": "C",
    "explanation": "Viktoriya davri uyi va metroga 5 daqiqa (“5 mins to underground”; “tube” = London metrosi). C."
   },
   {
    "title": "desert springs",
    "body": "SPAIN'S ONLY DESERT GOLF RESORT – WHERE OWNERSHIP MEANS MEMBERSHIP.\nApartments: £137000\nTownhouses: £198000\nVillas: £200000\nCONTACT: 01242680116",
    "answer": "E",
    "explanation": "“Ownership means membership” – uy sotib olgan odam kurort a'zosiga aylanadi (E)."
   },
   {
    "title": "Assisted Living offers more than just a new home!",
    "body": "Enjoy a lifestyle suitable to both your current and future needs. Care, Catering and Housekeeping services incl.\nTwo-bedroom apartments and houses from £250 000\nBROAD OAK MANOR CARE CENTRE\n01992558669",
    "answer": "I",
    "explanation": "Parvarish, ovqatlanish va uy xizmatlari kiritilgan (“Care, Catering and Housekeeping services incl.”), bu keksalar uchun parvarish markazi. I."
   },
   {
    "title": "BEACHSIDE HOLIDAY HOMES CARLYON BAY SOUTH CORNWALL",
    "body": "Luxury Holiday Homes at “The beach”\nSea view apartments on this South-facing beach a few miles from Fowey and the Eden Project. Available off-plan on 999 year leases. Live & Let scheme available.\nCall our Sales Team today: 08708505858",
    "answer": "A",
    "explanation": "Plyajdagi dam olish uylari (“beachside holiday homes”). Bu Angliyada, Ispaniyada emas, shuning uchun H emas, A."
   },
   {
    "title": "HOMES TO LOVE ALL OVER LINCOLNSHIRE",
    "body": "Wide open spaces, beautiful countryside and charming villages\n2-6 bedroom houses available\n£108 000 to £225 000\nIsn't it time you escaped to Lincolnshire\nSales Office: 01775710600",
    "answer": "J",
    "explanation": "“Isn't it time you escaped to Lincolnshire” = “Escape to Lincolnshire”. J."
   },
   {
    "title": "River Oaks Homes – simply stunning",
    "body": "belvederecreek.com\nThese stunning new homes are available at our riverside development, Belvedere Creek, in the heart of Faversham, Kent or the tranquil woodland setting of Beauport Park.\nFrom: £149 000\nFor more details: 01424 855078\nwww.riveroakshome.co.uk",
    "answer": "G",
    "explanation": "Daryo bo'yi (“riverside”) va o'rmon (“woodland”): suv va daraxtlar yonidagi uylar. G."
   },
   {
    "title": "Playa marques",
    "body": "luxury villas on the Almanzora coast of south east Spain\nDriest and sunniest area of Spain.\nRelaxing tranquil environment.\nHigh quality specification.\nTownhouse from: £203 000\nVillas from: £340 000\nContact: 01242680116\nwww.almanzora.com",
    "answer": "H",
    "explanation": "Ispaniya qirg'og'idagi hashamatli villalar (“luxury villas on the … coast of … Spain”). H."
   },
   {
    "title": "Williams Parry Richards – SOUTH HEREFORDSHIRE",
    "body": "Character old cottage with 4 bedrooms, study/TV room, utility in idyllic setting surrounded by fields. 2 detached stone barns. Superb landscaped gardens, orchard and duck pond.\nOffers around £650000\nROSS-in-WYE 01989768484\nwww.wpr-property.co.uk",
    "answer": "F",
    "explanation": "Dalalar bilan o'ralgan eski kottej (“old cottage … surrounded by fields”). F."
   }
  ]
 },
 {
  "n": 11,
  "label": "Exercise 11",
  "title": "Mehmonxonalar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You cannot make an advanced reservation for this hotel."
   ],
   [
    "B",
    "You must pay a bit more but can stay in a luxury room."
   ],
   [
    "C",
    "You don't have to pay for food and beverages if you stay in this hotel."
   ],
   [
    "D",
    "You can go on safari trips there."
   ],
   [
    "E",
    "You can stay in only one type of bedroom there."
   ],
   [
    "F",
    "Which advertisement is NOT for a hotel?"
   ],
   [
    "G",
    "You don't pay for recreation facilities in this hotel."
   ],
   [
    "H",
    "This hotel takes you to many cities."
   ],
   [
    "I",
    "Hotel managers are all multilingual."
   ],
   [
    "J",
    "You can rent swimming equipment in this hotel."
   ]
  ],
  "texts": [
   {
    "title": "THE HARBOUR VIEW HOTEL",
    "body": "Tourist Board***\n$100 PER PERSON PER NIGHT\n• Tours arranged\n• Private car park\n• Restaurant\n• All bedrooms en suite.\n• Short bus ride from Sydney City Centre\n• Parties catered for\nFor reservations call: Tel: 0264125883",
    "answer": "E",
    "explanation": "“All bedrooms en suite” – barcha xonalar bir xil turda, hammasida alohida hammom bor. Kalit: E."
   },
   {
    "title": "SUNRISE GUEST HOUSE",
    "body": "1 STAR HOTEL\n$49.99 Double room (shared bathroom)\n• 15 mins from beach\n• on bus route to City Centre\n• surf equipment hire available\n• modestly priced restaurant\nTel: 0241136386",
    "answer": "J",
    "explanation": "Serfing anjomlarini ijaraga olish mumkin (“surf equipment hire”). J."
   },
   {
    "title": "STAY HERE",
    "body": "SYDNEY'S BEST ACCOMMODATION AGENCY\nWe can arrange all your needs for accommodation from budget to five star.\nCall: 0241523116\nOr check our website at: www.stayinoz.com",
    "answer": "F",
    "explanation": "Bu mehmonxona emas, turar joy agentligi (“accommodation agency”). F."
   },
   {
    "title": "THE ROYALE HOTEL",
    "body": "*****\nSydney's most famous hotel – high class luxury rooms from $250 a night\n• All airport transfers arranged\n• 4 different restaurants\n• Private beach\n• 2 swimming pools\n• Functions arranged\nFor the luxury stay of a lifetime, call: Tel: 0241730938\nwww.theroyalehotel.co.au",
    "answer": "B",
    "explanation": "Hashamatli xonalar, narxi boshqalardan qimmatroq ($250 dan). B."
   },
   {
    "title": "SYDNEY YOUTH HOSTEL",
    "body": "ONLY $25 PER NIGHT!\n• Dormitory sleeping\n• Shared bathrooms\n• Cheap restaurant\n• Television room\n• Travel advice\nNo Booking – 35 Gold Street Sydney\nJust turn up – Tel: 0286141738\nRated 1* hotel",
    "answer": "A",
    "explanation": "“No Booking … Just turn up” – oldindan joy band qilib bo'lmaydi (A)."
   },
   {
    "title": "Golden Sands Beach Club",
    "body": "For only $150 a night\nGolden beaches in Mallorca\n• Enjoy swimming activities in the Mediterranean\n• Take trips near villages\n• Enjoy shows and make friends\n• All meals and drinks are included in the price",
    "answer": "C",
    "explanation": "Barcha ovqat va ichimliklar narxga kiritilgan (“all meals and drinks are included”). C."
   },
   {
    "title": "Seaview Hotel",
    "body": "Enjoy your time at wonderful, small luxury hotel in Spain.\nPrices include facilities: a swimming pool, tennis court and a gym.\nWe organize trips to plays and concerts in the evenings.\nBeach is close to sit quietly and relax or read.\nTel: 854932555",
    "answer": "G",
    "explanation": "Hovuz, tennis korti va sport zali narxga kiritilgan (“prices include facilities”). Ular uchun alohida to'lamaysiz (G)."
   },
   {
    "title": "Hotel on the sea",
    "body": "Enjoy two weeks of luxury on this cruise around the Mediterranean visiting seven popular destinations. Relax in the sunshine by the ship's swimming pool. You won't get bored, as there are cinemas, tennis courts and a theatre on board, plus plenty of social activities in the evening.\nTel: 665923258",
    "answer": "H",
    "explanation": "Kruiz kemasi yettita mashhur manzilga boradi (“visiting seven popular destinations”). H."
   }
  ]
 },
 {
  "n": 12,
  "label": "Exercise 12",
  "title": "Mehmonxona va ovqatlanish sohasi",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Your parents want to spend a holiday in the countryside not far from London."
   ],
   [
    "B",
    "You are a cook and are looking for a job with accommodation in a small hotel."
   ],
   [
    "C",
    "You want to do catering training in England."
   ],
   [
    "D",
    "You must reserve the room 1 week in advance."
   ],
   [
    "E",
    "You and your partner are looking for catering jobs where you can live together in one place."
   ],
   [
    "F",
    "You may drink special alcoholic beverages there."
   ],
   [
    "G",
    "You will provide a feedback letter from your previous jobs to apply in the fish food restaurant."
   ],
   [
    "H",
    "You have been asked to find a hotel with facilities for large meetings and dinners."
   ],
   [
    "I",
    "You want to buy a hotel in city center."
   ],
   [
    "J",
    "A friend wants to spend a holiday learning to handle a small boat."
   ]
  ],
  "texts": [
   {
    "title": "WHITE HOUSE HOTEL",
    "body": "Watford's most central and luxurious hotel, 87 en-suite bedrooms and excellent conference and banquet rooms. Convenient to M1, M25, M4 and Watford Junction Station.\nFor further details and special weekend rates please call: 01923237316\nwww.whitehousehotel.co.uk",
    "answer": "H",
    "explanation": "Konferensiya va ziyofat zallari bor (“conference and banquet rooms”) = katta yig'ilish va kechki ovqatlar (H)."
   },
   {
    "title": "PORTOFINO",
    "body": "Award-winning 30-seater restaurant specializing in fine seafood requires:\nRESTAURANT MANAGER\nRelevant experience and references essential. Excellent salary.\nForward electronic CV to Mr. Orlando Peracca\ne-mail: o.peracca@portofino.com",
    "answer": "G",
    "explanation": "Dengiz mahsulotlari restorani tavsiyanoma talab qiladi (“references essential”). G."
   },
   {
    "title": "THE WILMSLOW GOLF CLUB",
    "body": "In Maidenhead, west of London\nBAR MANAGER AND ASSISTANT BAR MANAGER\nIdeally suited to a couple, although individual applicants can apply. Drive and initiative necessary to deliver service within a private member's club.\nFREE on-site accommodation\nSend CV to: Marjory Padfield wilmslowgolfclub@uk.net",
    "answer": "E",
    "explanation": "Er-xotin uchun mos ish (“ideally suited to a couple”) va shu yerda bepul turar joy. E."
   },
   {
    "title": "THE CHEQUERS INN",
    "body": "in Wooburn Common\nLovely 17th century country inn with 17 pretty en-suite bedrooms. Close to Marlowe, Henley and Windsor and ideal for exploring the Thames Valley or visiting London. Weekend Breaks, Horse Riding Weekends and much more\ninfo@thechequersinn",
    "answer": "A",
    "explanation": "Qishloqdagi mehmonxona va Londonga yaqin (“country inn … visiting London”). A."
   },
   {
    "title": "Are you considering a career in food and beverage management?",
    "body": "We offer a management training programme for hardworking individuals with relevant tertiary qualification, strong organizational and excellent personal skills as well as ability to work long hours under pressure. Placements in London hotels.\nPlease send CV to: h.karisson",
    "answer": "C",
    "explanation": "Ovqatlanish sohasida o'quv dasturi va London mehmonxonalarida amaliyot (“training programme … placements in London”). C."
   },
   {
    "title": "The Highland Hotel",
    "body": "Period hotel in 2 acres of lovely grounds near Edinburgh. Outdoor swimming pool (summer only) and boat hire possible. Ideal for touring in beautiful countryside, whisky tasting. Seminar arrangements for small groups on offer during the week.\nwww.highlandhotel.com",
    "answer": "F",
    "explanation": "Viski tatib ko'rish (“whisky tasting”) – maxsus spirtli ichimlik. F. Bu yerda faqat kichik guruhlar uchun seminar bor, shuning uchun H emas."
   },
   {
    "title": "Wallford Hotel",
    "body": "• Well-maintained Victorian hotel centrally situated close to the sea\n• Picturesque private harbor with sailing school in walking distance\n• Guided walks along the coast\n• Entertainment in season\ninfo@wallfordhotel.com",
    "answer": "J",
    "explanation": "Yelkanli qayiq maktabi yaqin (“sailing school”). Kichik qayiqni boshqarishni o'rganish (J)."
   },
   {
    "title": "Pendower Beach House Hotel",
    "body": "Family-run hotel near St. Awes, Cornwall seeks responsible self-motivated Chef for restaurant seating 40. Experience of working in a small team and producing high quality food advantageous. Hotel flat available.\nAn exciting opportunity for the right candidate.\nFor more information call Carol on 0187250141\nwww.pendowerbeach",
    "answer": "B",
    "explanation": "Kichik oilaviy mehmonxonaga oshpaz kerak, kvartira ham beriladi (“Chef … hotel flat available”). B."
   }
  ]
 },
 {
  "n": 13,
  "label": "Exercise 13",
  "title": "Dam olish mehmonxonalari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Friendly Hotel - lots of sheep perhaps!"
   ],
   [
    "B",
    "The National Trust owns the surrounding land."
   ],
   [
    "C",
    "Overlooking the river."
   ],
   [
    "D",
    "Situated close to a port."
   ],
   [
    "E",
    "Lakes and mountains."
   ],
   [
    "F",
    "Fitness center and golf hotel."
   ],
   [
    "G",
    "Family-owned and run - good sea views."
   ],
   [
    "H",
    "A special discount is available if you quote this newspaper advertisement."
   ],
   [
    "I",
    "Special offer and free car parking."
   ],
   [
    "J",
    "Good personal service on the seafront."
   ]
  ],
  "texts": [
   {
    "title": "HIGHBULLEN HOTEL – GOLF AND COUNTRY CLUB",
    "body": "Spectacular scenery with sporting, golf and leisure facilities. State of the art “Life Fitness” Gym, Health and Beauty suite with Sauna. Offering excellent cuisine and all within easy reach of the M5.\n01769540561 www.highbullen.co.uk",
    "answer": "F",
    "explanation": "Golf klubi va “Life Fitness” sport zali bor = fitness markazi va golf mehmonxonasi (F)."
   },
   {
    "title": "The Berry Head Hotel – Brixham South Devon",
    "body": "Steeped in history, nestling on the water edge – near picturesque fishing port. Suburb location of walking, sailing and fishing.\nBrochure tel: 018038532225\nwww.berryheadhotel.com",
    "answer": "D",
    "explanation": "Baliqchilar portiga yaqin (“near picturesque fishing port”). D."
   },
   {
    "title": "THE FAT LAMB COUNTRY INN – RAVENSDALE CUMBRIA",
    "body": "Award winning hotel situated in magnificent scenery between lakes and valleys. Informal, warm and comfortable.\nSPECIAL TELEGRAPH SUMMER BREAKS AVAILABLE\nBROCHURE - 01539623242",
    "answer": "A",
    "explanation": "“Warm and comfortable”, nomida esa “Lamb” (qo'zichoq) bor: samimiy mehmonxona, atrofda qo'ylar ko'p bo'lsa kerak (A). Matnda tog'lar emas, vodiylar (“valleys”) aytilgan, shuning uchun E emas."
   },
   {
    "title": "ROYAL YORK FAULKNER HOTEL – SIDMOUTH",
    "body": "Charming, well-run promenade beach hotel. All amenities, excellent leisure facilities and renowned personal service.\nFREEPHONE: 0800220714\nwww.royalyorkhotel.net",
    "answer": "J",
    "explanation": "Dengiz sohilidagi mehmonxona va mashhur shaxsiy xizmat (“promenade beach hotel … renowned personal service”). J."
   },
   {
    "title": "BLAKENEY HOTEL – BLAKENEY, NORFOLK",
    "body": "Traditional privately owned friendly hotel overlooking the estuary. Ideal to explore Norfolk coast and countryside.\nTel: 01263740797\nwww.blakeney-hotel.co.uk",
    "answer": "C",
    "explanation": "“Overlooking the estuary” – daryo quyiladigan joyga qaraydi, ya'ni daryoga (C)."
   },
   {
    "title": "The Cottage Hotel – Hope Cove, Salcombe, Devon",
    "body": "AUGUST AND SEPTEMBER AVAILABILITY\nFamily run for 30 successful years. First class service.\nwww.hopecove.com\nTel: 01548561555",
    "answer": "G",
    "explanation": "30 yildan beri oila boshqaradi (“family run”), joyi esa dengiz ko'rfazida (Hope Cove). G."
   },
   {
    "title": "BATH – OLD MILL HOTEL AND LODGE",
    "body": "SPECIAL OFFER SHORT BREAKS – 2 NIGHTS 82 DBB\nETC***** and silver award for quality. FREE car parking\nwww.oldmillbath.com.uk\nTel: 01225858476",
    "answer": "I",
    "explanation": "Maxsus taklif va bepul avtoturargoh (“special offer … FREE car parking”). I."
   },
   {
    "title": "POLURRIAN HOTEL – MULLION, LIZARD PENINSULA",
    "body": "Overlooking sandy cove and surrounded by National Trust Coastline. Sea and Fresh Cornish air.\nExceptional leisure facilities.\nTel: 01326240421 www.polurreanhotel.com",
    "answer": "B",
    "explanation": "Atrofdagi qirg'oq Milliy Trastga tegishli (“surrounded by National Trust Coastline”). B."
   }
  ]
 },
 {
  "n": 14,
  "label": "Exercise 14",
  "title": "Mebel va uy jihozlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Extra space when you need it -easy to store."
   ],
   [
    "B",
    "Designer lighting."
   ],
   [
    "C",
    "You need a wall unit."
   ],
   [
    "D",
    "Previously used in-store, end of range oak furniture."
   ],
   [
    "E",
    "Big or small - just for your books."
   ],
   [
    "F",
    "Solid walnut replica dining room furniture."
   ],
   [
    "G",
    "This is a bright idea - a cherry wood dining room suite."
   ],
   [
    "H",
    "You set the table with these."
   ],
   [
    "I",
    "Cell phone to speak."
   ],
   [
    "J",
    "They will set-up your entertainment systems."
   ]
  ],
  "texts": [
   {
    "title": "",
    "body": "Looking for the best Hi-Fi, Home Cinema or Custom Installation Dealers?\nVisit: www.top20uk.info",
    "answer": "J",
    "explanation": "Hi-Fi va uy kinoteatrini o'rnatuvchi dilerlar (“custom installation”). Ko'ngilochar tizimlarni o'rnatib berishadi (J)."
   },
   {
    "title": "BRITISH ANTIQUE REPLICAS",
    "body": "Fine Classical English furniture in Solid Mahogany, Walnut and Yew – we have a full range of Dining Room suites on display in our showroom at Burgess Hill.\nFine English Replica Furniture\nQueen Elizabeth Ave., Burgess Hill, West Sussex.\n08444245572",
    "answer": "F",
    "explanation": "Qattiq yong'oq daraxtidan (“solid … walnut”) yasalgan, ovqat xonasi mebellarining nusxalari (“replica”). F."
   },
   {
    "title": "Jim Lawrence",
    "body": "Traditional Ironwork\nSpecialists in traditional wall lighting in a variety of finishes.\nCall for brochures: 01206 or visit our web-site: www.jim-lawrence.com.uk",
    "answer": "B",
    "explanation": "Devorga o'rnatiladigan maxsus chiroqlar (“wall lighting in a variety of finishes”) – dizaynerlik yoritish (B)."
   },
   {
    "title": "Bookcases",
    "body": "Little and Large\nMade to measure bookcases at a price you can afford. Available in mahogany, Yew, Cherry, Teak and oak.\nCall for brochure and price list.\nTel. 01491410408",
    "answer": "E",
    "explanation": "Kichik va katta (“little and large”) kitob javonlari, faqat kitoblar uchun (E)."
   },
   {
    "title": "BRIGHTS",
    "body": "UNREPEATABLE STOCK OFFER\nChippendale style dining room furniture in solid cherry.\nA complete set for only £1950\nNettlebed of Oxon\nTel. 01491641115\nwww.brightsofnettlebed",
    "answer": "G",
    "explanation": "Gilos daraxtidan ovqat xonasi to'plami (“dining room furniture in solid cherry”). “Bright idea” do'kon nomi Brights'ga ishora. G."
   },
   {
    "title": "GLAZEBROOK AND CO",
    "body": "Finest British Stainless Steel Cutlery at Exceptional Value\nMail order catalogue and free sample service.\nTel: 02077317135\nwww.glazebrook.com",
    "answer": "H",
    "explanation": "Oshxona anjomlari: pichoq, vilka, qoshiq (“cutlery”). Ular bilan dasturxon tuzaladi (H)."
   },
   {
    "title": "THE HUNGERFORD BOOKCASE COMPANY",
    "body": "Made to measure or free standing bookcases, wall units, TV and video units and much more. Craftsman made in the finest solid woods.\nTelephone for our brochure and price list: 014861262 or www.hungerford.co.uk",
    "answer": "C",
    "explanation": "Devor shkaflari ham yasashadi (“wall units”). C. Bu yerda kitob javonidan boshqa narsalar ham bor, shuning uchun E emas."
   },
   {
    "title": "NEED AN EXTRA ROOM?",
    "body": "THE LONDON WALL BED COMPANY – A UNIQUE IDEA\nBEDS FOLD AWAY IN TO THE WARDROBE.\nCALL FOR FULL DETAILS: 02087428200\nwww.wallbed.co.uk",
    "answer": "A",
    "explanation": "Karavot shkafga yig'iladi: kerak bo'lsa qo'shimcha joy bor, saqlash ham oson (A)."
   }
  ]
 },
 {
  "n": 15,
  "label": "Exercise 15",
  "title": "Ko'chirish xizmatlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You have just bought a piano and need delivery to your second floor apartment."
   ],
   [
    "B",
    "You are immigrating to England, with all your household goods plus a car."
   ],
   [
    "C",
    "You have bought a house on an island and you want to move your things there from the mainland."
   ],
   [
    "D",
    "You need fast service to deliver to your house a sofa you just bought."
   ],
   [
    "E",
    "You want an inexpensive service to help you move and store apartment furniture."
   ],
   [
    "F",
    "You are moving house and need a truck for a few hours which you will load and drive."
   ],
   [
    "G",
    "You need to remove some old unnecessary things."
   ],
   [
    "H",
    "You need someone experienced to advise you on how to move."
   ],
   [
    "I",
    "You want a moving company owned by the Chinese."
   ],
   [
    "J",
    "You got a job in another city. You want to rent a truck to move your household goods by yourself, one way only."
   ]
  ],
  "texts": [
   {
    "title": "Affordable Moving",
    "body": "The best move you can make\nLocal – Long distance – Packing – Overseas shipping – Storage\nFamily owned and operated\nCall for your free estimate.\nProfessional moving at an affordable rate\n24 hours, 7 days a week. Call 277 4086",
    "answer": "E",
    "explanation": "Arzon narxda (“affordable rate”) ko'chirish va saqlash (“storage”). E."
   },
   {
    "title": "U Drive – One way Truck Rental",
    "body": "GUARANTEED NEW MODEL VEHICLES\nFREE ROADSIDE ASSISTANCE\nGUARANTEED RESERVATIONS\nAll trucks include: Diesel engine, Air conditioning, Automatic transmission, Walk up ramps, Am/Fm cassette\nMove yourself and save\nLow rate by the day, week or longer\nFurniture pads and dollies\nMini storage available",
    "answer": "J",
    "explanation": "Bir tomonlama yuk mashinasi ijarasi (“one way truck rental”) va o'zingiz ko'chasiz (“move yourself”). J."
   },
   {
    "title": "PROFESSIONAL RELOCATION SERVICES",
    "body": "WORLD WIDE MOVING FROM A SINGLE ITEM TO A FULL HOUSE\n• Free, no obligation consultation\n• Free written estimate to or from anywhere in the world\nSpecial service for cars\nShared rates to and from Australia, Hong Kong, Japan, North America, UK\nPacking crates, storage, customs bonded carrier\nTOLL FREE 18999601847",
    "answer": "B",
    "explanation": "Butun dunyo bo'ylab ko'chirish, Buyuk Britaniya ham bor, mashinalar uchun alohida xizmat (“special service for cars”). B. Hong Kong tilga olingani kompaniya xitoyliklarga tegishli degani emas (I emas)."
   },
   {
    "title": "Al's Junk and Moving Express",
    "body": "Pick up furniture or small household items\nNeed a small truck to move? Cleaning up a yard?\nGet rid of that junk!\nServing the local area 7341-8345",
    "answer": "G",
    "explanation": "“Get rid of that junk!” – keraksiz eski narsalardan qutulish (G)."
   },
   {
    "title": "GET MOVING",
    "body": "Car and Truck Rental\nMove yourself and save\n7 days a week, commercial rates\n2 and 4-hour specialists\n• Low rates by the day, week or longer\n• Furniture pads and dollies\n• Heavy duty specs, for commercial use\n• Cube vans, flat decks, moving vans, pick ups and panels\n• Mini-storage available\nFor reservation call 641-8193",
    "answer": "F",
    "explanation": "2–4 soatlik ijara (“2 and 4-hour specialists”) va o'zingiz ko'chasiz. Bir necha soatga mashina kerak bo'lsa, mos (F)."
   },
   {
    "title": "Blue Star",
    "body": "TAXI TRUCKS, REMOVALS, STORAGE FOR ALL YOUR MOVING NEEDS\n• On time, On budget, On location\n• Full range of taxi truck services – 2 tons to 12 van or tray\n• Guaranteed pick up within 2-3 hours, all suburbs 24 hours a day, 7 days a week\nWe take responsibility for, and insure, your goods\nModern fully equipped vehicles complete with safety handling equipment. Vehicles have furniture-pads, tailgate loaders.\nBilliard table? Piano? Freezer? Large pieces of furniture? Awkward locations? No problem – our drivers and assistants are specialists.\nBooking is easy and fast Tel 9807012",
    "answer": "A",
    "explanation": "Pianino va noqulay joylarga olib chiqish ham mumkin (“Piano? … Awkward locations? No problem”). A."
   },
   {
    "title": "Vanline Moving",
    "body": "Do you need to move urgently or the same day due to work or having a short note to move?\nLast-minute moving service is inclusive of services: packing, loading, unloading.\nExperts will handle your last distance move from start to end, which means packing to unloading. Customized moving plans by the experts will make your move smooth.\nWe have moving companies specialized in long-distance, local, and commercial last-minute moves.\nCall 98211663 and book our service.",
    "answer": "H",
    "explanation": "Mutaxassislar sizga mos ko'chish rejasini tuzib beradi (“customized moving plans by the experts”). H."
   },
   {
    "title": "AIR MOVING",
    "body": "Helicopter and small planes\nMove your items by air\n• fast and safe moving\n• affordable prices\n• move to the locations out of reach for cars\n• packing service not available\nReserve at least 1 week in advance, call 5589446",
    "answer": "C",
    "explanation": "Mashina bora olmaydigan joylarga havo orqali (“out of reach for cars”), masalan orolga. C. Bir hafta oldin band qilish kerak, shuning uchun “tez” (D) emas."
   }
  ]
 },
 {
  "n": 16,
  "label": "Exercise 16",
  "title": "Muzeylar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You would like to sing and dance and see the way of famous singers' dancing."
   ],
   [
    "B",
    "You want to see planes and helicopters."
   ],
   [
    "C",
    "If you buy the ticket to this museum, you will be provided a free meal."
   ],
   [
    "D",
    "This museum is situated in the tower near the sea."
   ],
   [
    "E",
    "You can learn about the history of your famous computer games in this museum."
   ],
   [
    "F",
    "You are planning to take your children to the museum where they can see a wide range of toys."
   ],
   [
    "G",
    "If you are interested in numbers, this museum is fun for you."
   ],
   [
    "H",
    "You want to see the process of making famous sweets."
   ],
   [
    "I",
    "This museum is free for everybody."
   ],
   [
    "J",
    "This museum is a good place to learn about tea."
   ]
  ],
  "texts": [
   {
    "title": "Chocolate Museum",
    "body": "In the Chocolate Factory\nLearn how to make chocolate!\nFamily ticket (2 adults and 3 children): £30\nTuesday – Sunday 10 a.m. – 5 p.m.\nVisit: www.chocmuseum.com",
    "answer": "H",
    "explanation": "Shokolad fabrikasida shokolad tayyorlashni ko'rasiz (“learn how to make chocolate”). H."
   },
   {
    "title": "SANDON AIR MUSEUM",
    "body": "More than 70 aero planes to look at\nOPEN DAILY 10 am – 6 pm\nShop with books and postcards\nLarge free car park\nTickets: Adults £8.00, Student £5.00",
    "answer": "B",
    "explanation": "70 dan ortiq samolyotni ko'rish mumkin (“aero planes to look at”). B. Bepul faqat avtoturargoh, muzey emas (I emas)."
   },
   {
    "title": "School trip to Science Museum",
    "body": "Wednesday 12th October\nLeave school 7.30 a.m. – Return school 5.30 p.m.\n£15 (with lunch in a restaurant)\nPay School Secretary by 30th September",
    "answer": "C",
    "explanation": "£15 narxga restoranda tushlik kiradi (“with lunch in a restaurant”). C."
   },
   {
    "title": "CHILDREN'S MUSEUM",
    "body": "Over 5,000 toys to look at!\nOpen every day 9.00 a.m. – 4.30 p.m.\nCafé park - £5\nEntrance: adults £2.5, children free\nWednesday only – special price for student £1",
    "answer": "F",
    "explanation": "5000 dan ortiq o'yinchoq (“over 5,000 toys”). F. Kattalar pul to'laydi, shuning uchun I emas."
   },
   {
    "title": "Grammy Museum",
    "body": "Have you ever wanted to record yourself? Now you can at the fascinating Grammy Museum.\nYou can also learn how to dance like Michael Jackson, and find out about the links between blues and rap.\nAdults: $18",
    "answer": "A",
    "explanation": "Ovozingizni yozib olish va Maykl Jeksondek raqs tushishni o'rganish (A)."
   },
   {
    "title": "Santa Cruz Surfing Museum",
    "body": "Go to the Santa Cruz Surfing Museum, which is in a lighthouse, and see classic boards including one eaten by a shark – the surfer survived!\nAdmission $10",
    "answer": "D",
    "explanation": "Muzey dengiz bo'yidagi mayoqda joylashgan (“in a lighthouse”), ya'ni minorada (D)."
   },
   {
    "title": "8 Videogame Museum",
    "body": "History of famous video games\nA place that is FUN and on any given day we can play the games of yesterday, today AND tomorrow. It's HAPPENING in Frisco, Texas!\nCost for one adult: $12\nAges 3 and under are free.",
    "answer": "E",
    "explanation": "Mashhur video o'yinlar tarixi (“history of famous video games”). E."
   },
   {
    "title": "National Museum of Mathematics",
    "body": "Are you interested in mathematics, brainteasers + puzzles + interactive exhibits = a pretty cool museum. Who knew maths could actually be fun?\nCost for one adult: $18 (if purchased online)",
    "answer": "G",
    "explanation": "Matematikaga qiziqsangiz, bu muzey qiziqarli (“maths could actually be fun”). G."
   }
  ]
 },
 {
  "n": 17,
  "label": "Exercise 17",
  "title": "Shoular va tomoshalar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You would like to go to a show on the 22nd July."
   ],
   [
    "B",
    "You would like to see the water gardens."
   ],
   [
    "C",
    "You decide to take your friend to this show - they will be given a present."
   ],
   [
    "D",
    "You want to visit an Air Show."
   ],
   [
    "E",
    "A concert in a park."
   ],
   [
    "F",
    "You would like to see the display of royal clothing."
   ],
   [
    "G",
    "You decide to book a romantic opera."
   ],
   [
    "H",
    "You would like to see a famous comedy."
   ],
   [
    "I",
    "The main stars are foreign children."
   ],
   [
    "J",
    "You book to see the play featuring a flying car."
   ]
  ],
  "texts": [
   {
    "title": "Simon and Garfunkel's 'Concert in the Park'",
    "body": "London Hyde Park 15th July\nTwo day package £149\nCost includes: 1 night 4* B&B, pre-concert drinks, concert tickets\nTo book call: 08700771000\nbook on-line: www.eventtravel.com",
    "answer": "E",
    "explanation": "Hyde Parkdagi konsert (“Concert in the Park”). E."
   },
   {
    "title": "Valentine's day love classics",
    "body": "Treat your love one to a feast of superb classics on the most romantic day of the year\nBarbican Box Office 02076388891\n14th February at 7.30pm\nA Valentine rose for every lady in the audience",
    "answer": "C",
    "explanation": "Har bir ayol tomoshabinga atirgul sovg'a qilinadi (“a Valentine rose for every lady”). C. Bu opera emas, klassik musiqa konserti, shuning uchun G emas."
   },
   {
    "title": "GARY WILMOT – Flying High",
    "body": "from 21st July\nChitty Chitty Bang Bang\n(fantasy play about flying cars)\nLondon Palladium 08708901108",
    "answer": "J",
    "explanation": "Uchar mashinalar haqidagi spektakl (“play about flying cars”). J."
   },
   {
    "title": "BUCKINGHAM PALACE – SUMMER OPENING OF THE STATE ROOMS",
    "body": "1 AUGUST – 28 SEPTEMBER 2005\nVisit the magnificent State Rooms and see Her Majesty the Queen's Coronation Dress and Robe at the special exhibition\nCEREMONY AND CELEBRATION – CORONATION DAY 1953",
    "answer": "F",
    "explanation": "Qirolichaning toj kiyish libosi ko'rgazmasi (“Coronation Dress and Robe”), ya'ni qirollik kiyimlari. F."
   },
   {
    "title": "FLY to the PAST",
    "body": "100 years of music and flight\nBlenheim Palace, Woodstock, Oxfordshire\n1940s Revival/Air Show/Concert\nSaturday 2nd August 2005\nAdult £30 in advance, £37.50 on day.\nChildren under 12 go FREE.\nTickets: 08701277332",
    "answer": "D",
    "explanation": "Aviashou (“Air Show”) bor. D."
   },
   {
    "title": "Mickfield Watergarden Centre",
    "body": "Searching for Aquatic plants?\nvast variety of moisture loving plants\nWildlife Specialists – Planting Schemes\nOpen 7 days a week (9.30 am-5 pm)\nDebenham Road, Mickfield, Suffolk\nTel: 01449711336\nwww.watergardenshop.co.uk",
    "answer": "B",
    "explanation": "Suv bog'lari markazi (“Watergarden Centre”). B."
   },
   {
    "title": "'COMIC JOY'",
    "body": "“One of the best and most exciting productions of this great play I have seen, EVER”\nA MIDSUMMER NIGHT'S DREAM by William Shakespeare\nComedy Theatre\nFrom 7th August\n08700606622",
    "answer": "H",
    "explanation": "Shekspirning mashhur komediyasi “Yozgi tun tushi” (“Comic joy”, “Comedy Theatre”). H."
   },
   {
    "title": "The Chinese State Circus",
    "body": "2-week season\nBOURNEMOUTH KING'S PARK\nTUE 22 JULY\ncredit card hot-line 07030190190",
    "answer": "A",
    "explanation": "Tomosha 22-iyulda (“TUE 22 JULY”). A. Sirk xitoylik bo'lsa ham, bolalar haqida gap yo'q (I emas)."
   }
  ]
 },
 {
  "n": 18,
  "label": "Exercise 18",
  "title": "Kafe va ovqatlanish joylari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "This café works only on Mondays."
   ],
   [
    "B",
    "You can order international cuisines in this restaurant."
   ],
   [
    "C",
    "You can buy snacks and rent a computer here."
   ],
   [
    "D",
    "You can buy pizzas here every day except Monday."
   ],
   [
    "E",
    "You are not allowed to smoke in this cafe."
   ],
   [
    "F",
    "On a certain day a food is cheaper for only special customers."
   ],
   [
    "G",
    "The café offers a good selection of sandwiches to you."
   ],
   [
    "H",
    "The café is for only tourists."
   ],
   [
    "I",
    "The shop sells you food when your lesson is over."
   ],
   [
    "J",
    "You can order a food that is prepared for only kids."
   ]
  ],
  "texts": [
   {
    "title": "Dave's Pizzas on Grey Street",
    "body": "Phone 876451 to book a table\nPizzas from $6 each\nStudent Thursdays! Pizzas only $4.75!\nEvery day until 9.00 p.m.",
    "answer": "F",
    "explanation": "Payshanba kunlari faqat talabalar uchun pitsa arzonroq (“Student Thursdays”). F."
   },
   {
    "title": "World Food Café",
    "body": "Dishes from all over the world\nNext to the museum\nMain courses – only £10!\nMonday – Saturday 11 a.m.-3 p.m.\nVisit: www.worldcafe.com",
    "answer": "B",
    "explanation": "Butun dunyo taomlari (“dishes from all over the world”) = xalqaro oshxona. B."
   },
   {
    "title": "School Snack Shop",
    "body": "Opposite the library\nCheap snacks\nSoups 75p\nAll cans 50p\nEvery break time\nEmail: jenny@snackshop.com",
    "answer": "I",
    "explanation": "Har tanaffusda ochiq (“every break time”), ya'ni dars tugaganda ovqat sotadi (I)."
   },
   {
    "title": "SUMMER PALACE RESTAURANT",
    "body": "The best Chinese food in town!\n**Special meals for children**\nAlso 10 tables in our pretty garden\nTo book a table – call 813729",
    "answer": "J",
    "explanation": "Bolalar uchun maxsus taomlar (“special meals for children”). J."
   },
   {
    "title": "Fast Food Café",
    "body": "– opposite Star Cinema –\nOpen 5p.m. – 11 p.m.\nBurgers! Chips! Pizzas!\nspecial takeaway lunch £5.50\nclosed Mondays",
    "answer": "D",
    "explanation": "Pitsa bor va dushanbadan boshqa kunlari ochiq (“closed Mondays”). D."
   },
   {
    "title": "DINO'S SNACKS",
    "body": "TAKE AWAY OR EAT IN\nMONDAY – SATURDAY 6.00 a.m. – midnight\nNO SMOKING\nSandwiches from £1.50 Pizzas from £5.30 Juices 90p",
    "answer": "E",
    "explanation": "“NO SMOKING” – chekish taqiqlangan. E."
   },
   {
    "title": "SMALL WORLD COMPUTER CAFÉ",
    "body": "£1 for 30 minutes on computer\nTuesday – Sunday 8 am – 8 pm\nCake, cold drinks, coffee\n23 GEORGE STREET",
    "answer": "C",
    "explanation": "Kompyuterdan pullik foydalanish va yengil ovqatlar (cake, cold drinks). C."
   },
   {
    "title": "GLORIA'S SANDWICH SHOP",
    "body": "We make 100 different sandwiches!\nHot soup, Orange juice, Coffee\n£2.80 each sandwich\nCar park behind shop\nClosed on Mondays",
    "answer": "G",
    "explanation": "100 xil sendvich (“100 different sandwiches”) – katta tanlov. G."
   }
  ]
 },
 {
  "n": 19,
  "label": "Exercise 19",
  "title": "Maktablar va ta'lim",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Children can stay at the single sex school before they join."
   ],
   [
    "B",
    "Language study in France for young children."
   ],
   [
    "C",
    "A lot of children join this school after the age of 11."
   ],
   [
    "D",
    "You would like to send your son to a mixed sex school."
   ],
   [
    "E",
    "This company will help you to choose an independent school."
   ],
   [
    "F",
    "This school says “you will get results here”."
   ],
   [
    "G",
    "This school is suitable for those good at sports."
   ],
   [
    "H",
    "This is a good guide to schools and colleges."
   ],
   [
    "I",
    "Students have priority at this school."
   ],
   [
    "J",
    "Learn a language in your 'year out'."
   ]
  ],
  "texts": [
   {
    "title": "STUDY LANGUAGES IN EUROPE",
    "body": "Language courses abroad for business or pleasure, all ages\nIncluding FRENCH FOR JUNIOR IN MONTPELLIER\nWe can help you find the course to meet your personal requirements\nSIBS Ltd.\ntrish@sibs.co.uk – www.sibs.co",
    "answer": "B",
    "explanation": "Montpelyedа kichik yoshdagilar uchun fransuz tili (“French for junior in Montpellier”). B."
   },
   {
    "title": "COTTESMORE SCHOOL",
    "body": "The only full co-educational boarding prep school in England\n• Supportive, caring, happy environment\n• Small classes, big opportunities\n• Easy access to London and its airports\n• Superb facilities in parkland setting\n• Excellent extracurricular provision\n• Impressive record at Scholarship and Common Entrance\n“Cottesmore is not a school where children live, it's a home where they learn”\nwww.cottesmoreschool.com",
    "answer": "D",
    "explanation": "“Co-educational” – o'g'il va qiz bolalar birga o'qiydi, ya'ni aralash maktab (D)."
   },
   {
    "title": "Choosing an independent school?",
    "body": "Contact Gabbitas for independent personal advice on the right school for your child or buy the Gabbitas guide.\nCall: 02077340161\nwww.gabbitas.co.uk",
    "answer": "E",
    "explanation": "Xususiy maktab tanlashda maslahat beradigan kompaniya (“advice on the right school”). E."
   },
   {
    "title": "Prior's Field School",
    "body": "Godalming Surrey GU7 2RH\nIndependent Boarding School and Day School for girls aged 11 – 18 years\nOPEN MORNING AND TASTER BOARDING WEEKEND ON 9TH OCTOBER 2004\n10.00 AM – 1.00 PM\nTel: 01483810551\nregistrar@priorsfieldsurrey.sch.uk",
    "answer": "A",
    "explanation": "Faqat qizlar maktabi (single sex), o'qishga kirishdan oldin sinov uchun dam olish kunlari yotoqxonada qolish mumkin (“taster boarding weekend”). A."
   },
   {
    "title": "Haberdasher's Monmouth Schools",
    "body": "Getting Results\nWith a dedicated professional staff and superb facilities, the Schools are confident they can develop your child's talents.\nHighly competitive fees, with full boarding fees around £5000 per term.\nTo find out more or to arrange a visit call: 0160071104\nwww.habs-monmouth.org",
    "answer": "F",
    "explanation": "Maktab shiori “Getting Results” – natijaga erishasiz. F."
   },
   {
    "title": "CRANLEIGH PREPARATORY SCHOOL",
    "body": "A boarding and day school for 7 – 13 year olds\n11+ a popular entry point\nPlease call Fiona Bundock on 01483542051 for further details or to arrange a visit",
    "answer": "C",
    "explanation": "“11+ a popular entry point” – ko'p bolalar 11 yoshdan keyin qabul qilinadi. C."
   },
   {
    "title": "Guide to Boarding Schools & Colleges 2004",
    "body": "The authoritative guide to boarding education.\nonly £14.95 + £3\nJohn Catt Educational Ltd.\nTel: +441728663666\nwww.schoolsearch.co.uk",
    "answer": "H",
    "explanation": "Maktab va kollejlar bo'yicha qo'llanma (“guide to boarding schools & colleges”). H."
   },
   {
    "title": "CIFE colleges",
    "body": "Where students come first\nStudents come to CIFE colleges because:\n• They want to be taught in small groups\n• They want to receive more individual attention\n• They want a wider choice of subjects\n• They want to study in a mature, supportive and focused environment\n02087878699\nwww.cife.org.uk",
    "answer": "I",
    "explanation": "“Where students come first” – o'quvchilar birinchi o'rinda. I."
   }
  ]
 },
 {
  "n": 20,
  "label": "Exercise 20",
  "title": "Mahalliy xizmatlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "I have had an accident in my car. One of the rear lights is broken. I need to have it replaced."
   ],
   [
    "B",
    "I am helping to organize a wedding. The party will be at the bride's family's house but we are looking for someone to provide the food."
   ],
   [
    "C",
    "I have just found a house that I want to buy and I need a lawyer to help me with all the paperwork."
   ],
   [
    "D",
    "I have just returned from a holiday in Thailand, where I bought a Thai recipe book. I want to use the recipes in my restaurant, but I need someone to help me understand them."
   ],
   [
    "E",
    "I have just got a new job. I need to find somewhere to live locally."
   ],
   [
    "F",
    "Some friends are coming to visit me for the weekend, but my house is too small to put them all up. I want to find somewhere for them to stay."
   ],
   [
    "G",
    "I have special guests and I am going to take them to a luxury restaurant."
   ],
   [
    "H",
    "I am going to take my children to the circus today."
   ],
   [
    "I",
    "I work in a local firm of solicitors. It's nearly the end of the tax year and I am trying to find someone to help us organize our finances."
   ],
   [
    "J",
    "I have received a visa to the USA and now I must book my flight ticket to New York."
   ]
  ],
  "texts": [
   {
    "title": "FINE LINE TRANSLATIONS LTD",
    "body": "LEADING LANGUAGE EXPERTS SINCE 1984\nTRANSLATION & INTERPRETING\nOVER 3000 PROFESSIONAL TRANSLATORS\nTranslation – Interpreting – Voice-overs – Editorial Services – Desktop Publishing – Localization – Media Analysis\nTel: 44123359985\n5, Castle Count, Cambridge CB1",
    "answer": "D",
    "explanation": "Tarjima xizmati: tayca retsept kitobini tushunishga yordam beradi (D)."
   },
   {
    "title": "Barton Hill & Knight",
    "body": "ESTATE AND PROPERTY AGENTS. CHARTERED SURVEYORS, COMMERCIAL PROPERTY, HOUSEHOLD CONTENTS AND FINE ART SALES\nAN INDEPENDENT PROPERTY SERVICE, PROVIDING EXPERT KNOWLEDGE\nBURY ST EDMUNDS 01284 800717\n15, DISS ROAD, BURY ST EDMUNDS SUFFOLK",
    "answer": "E",
    "explanation": "Ko'chmas mulk agentligi (“estate and property agents”) yashash uchun joy topishga yordam beradi. E."
   },
   {
    "title": "STEADMAN & CO – CHARTERED ACCOUNTANTS",
    "body": "All professional services, including Auditing, Accountancy and Taxation from small businesses to large corporations.\nPersonal attention given at all times.\n12, Church Street, Ely\nTelephone: 01353562547",
    "answer": "I",
    "explanation": "Buxgalteriya va soliq xizmatlari (“accountancy and taxation”). Soliq yili oxirida moliyani tartibga solish (I)."
   },
   {
    "title": "AIR TICKETS EXPRESS",
    "body": "Your hotline to the world\nIf you are serious about booking a flight anywhere in the world and a reliable service is as important as a cheap price.\nCALL US NOW 0990320321\n25, Union Road, Bishops Stanford, Herts",
    "answer": "J",
    "explanation": "Dunyoning istalgan joyiga aviachipta band qilish (“booking a flight anywhere in the world”). J."
   },
   {
    "title": "St Paul's Garage (Ely)",
    "body": "Full Mechanical and Body Repair Service\nInsurance Company Approved\nResprays and Restorations\nBreakdown Service\n6, River Lane, Ely, Cambs\nTel: Ely 552247",
    "answer": "A",
    "explanation": "Avtomobil kuzovini ta'mirlash (“body repair service”), sug'urta kompaniyasi tasdiqlagan. Avariyadan keyin chiroqni almashtirish (A)."
   },
   {
    "title": "BAKER, STEWART & YOUNG",
    "body": "Solicitors\nOffer a wide range of legal service\n2, High Street, Ely, Cambridgeshire\nTel: 01353552918",
    "answer": "C",
    "explanation": "Advokatlar (“solicitors … legal service”) uy sotib olishdagi hujjatlarga yordam beradi. C."
   },
   {
    "title": "THE PARKLANDS",
    "body": "ENSUITE FACILITIES WITH GOOD-SIZED FAMILY ROOMS ALL WITH COLOUR TV, TEA/COFFEE-MAKING FACILITIES\nLICENSED CHEAP RESTAURANT & BAR\nCONFERENCE ROOM AVAILABLE FOR MEETINGS, WEDDINGS, PARTIES & ALL OTHER SPECIAL OCCASIONS.\nTEL: 01440862581\nMount Pleasant, Haverhill",
    "answer": "F",
    "explanation": "Oilaviy xonalari bor mehmonxona: dam olish kunlari do'stlar shu yerda qolishi mumkin (F). Restorani arzon (“cheap”), hashamatli emas, shuning uchun G emas."
   },
   {
    "title": "MELROSE BUFFET CATERING",
    "body": "Professional Caterers with 15 years' experience\nBefore you book a function let us give you a quote. We will supply the best within your stated budget. We can cater for small or large functions, in your home, office, garden, town hall, church hall, in fact anywhere you wish.\nYOU SUPPLY THE VENUE, WE WILL SUPPLY THE MENU",
    "answer": "B",
    "explanation": "Ovqatni istalgan joyga, jumladan uyingizga ham yetkazishadi (“you supply the venue, we will supply the menu”). Kelinning uyidagi to'y uchun (B)."
   }
  ]
 },
 {
  "n": 21,
  "label": "Exercise 21",
  "title": "Do'konlar va xarid",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You can find a language teacher and books by this advertisement."
   ],
   [
    "B",
    "You can speak to the writers and purchase their books."
   ],
   [
    "C",
    "You must go to the shop by ship."
   ],
   [
    "D",
    "People can do shopping there after a month."
   ],
   [
    "E",
    "You can buy not only CDs but also books and magazines."
   ],
   [
    "F",
    "You want to buy famous brand items."
   ],
   [
    "G",
    "You cannot find a bigger shop than this in this type throughout the country."
   ],
   [
    "H",
    "If you have sweet tooth, this ad is for you."
   ],
   [
    "I",
    "You can buy laptops at a discount price in certain days."
   ],
   [
    "J",
    "You can buy animals in this shop."
   ]
  ],
  "texts": [
   {
    "title": "Travellers Bookshop",
    "body": "(Closed Mondays)\nNew guidebooks for £12.99: 'Explore Europe' & 'My Africa'\nMeet the authors on Tuesday and buy their books for €10\nPhone 445912 10.00 a.m. – 6.00 p.m. for more information",
    "answer": "B",
    "explanation": "Seshanba kuni mualliflar bilan uchrashib, kitoblarini sotib olish mumkin (“meet the authors … buy their books”). B."
   },
   {
    "title": "Pete's Sports Shop",
    "body": "55 Park Road\nTel: 658 224\nWe sell balls, rackets, clothes by global companies Adidas, Puma, Nike\nMonday – Saturdays 9.30 a.m. – 5.00 p.m.",
    "answer": "F",
    "explanation": "Mashhur brendlar: Adidas, Puma, Nike. F."
   },
   {
    "title": "Parker's Sweet Shop",
    "body": "14 Barrett Road\n5 minutes from town centre\nTRY OUR FAMOUS CHOCOLATE EGGS AND SUGAR HEARTS\nPrices lower than in other shops\nOpen MONDAY – SATURDAYS 9AM-5PM",
    "answer": "H",
    "explanation": "Shokolad tuxumlar va qandli yuraklar: shirinlikni yaxshi ko'radiganlar uchun (H)."
   },
   {
    "title": "WESTWOOD SHOPPING CENTRE",
    "body": "Opens next month!\n10 kilometers from city centre (free car park for 800 cars)\nMore than 100 shops, Restaurants, 4 cafes and a cinema",
    "answer": "D",
    "explanation": "Kelasi oy ochiladi (“opens next month”), ya'ni bir oydan keyin xarid qilish mumkin (D)."
   },
   {
    "title": "WORLD BOOKS",
    "body": "212 Main Street\nLargest bookshop in the country\nGet your travel books here\nMonday – Saturday 10.00 a.m – 8.00 p.m.\nSunday 12.30 p.m – 8.00 p.m.\nTel: 724 399",
    "answer": "G",
    "explanation": "“Largest bookshop in the country” – mamlakatdagi eng katta kitob do'koni. G."
   },
   {
    "title": "NEW WORLD MUSIC SHOP",
    "body": "ALL CDs €8\nBuy the latest dance music here!\nMonday to Saturday 9 am – 8 pm\nBooks and magazines\n– 58 Walton Street –",
    "answer": "E",
    "explanation": "CD'lardan tashqari kitob va jurnallar ham sotiladi (“books and magazines”). E."
   },
   {
    "title": "Smith's Bookshop",
    "body": "Book & DVD Language Courses\nCourses: Talking Time (Spanish, French), Speaking Plus (Japanese, Spanish)\nPrices: Level 1: £28.00 / £30.00; Level 2: £32.00 / £35.00",
    "answer": "A",
    "explanation": "Kitob va DVD ko'rinishidagi til kurslari (“Book & DVD Language Courses”). A."
   },
   {
    "title": "CRESSWELL'S DEPARTMENT STORE",
    "body": "London, Manchester, Edinburgh\nSALE 5 – 10 January\nComputers £550 were £850",
    "answer": "I",
    "explanation": "5–10-yanvar kunlari kompyuterlar chegirmada (“SALE … computers £550 were £850”). I."
   }
  ]
 },
 {
  "n": 22,
  "label": "Exercise 22",
  "title": "Sayohat va paromlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You would like to book a cruise for 2005 - to enjoy big savings you must book early."
   ],
   [
    "B",
    "You would like to spend a week on an island holiday."
   ],
   [
    "C",
    "You would like to travel to France and return 10 days later."
   ],
   [
    "D",
    "You want to travel to China on ferry."
   ],
   [
    "E",
    "You would like to go to Italy for a long-weekend."
   ],
   [
    "F",
    "You are travelling to Spain by car and decide it would be best to be across the Channel by early morning."
   ],
   [
    "G",
    "You would like to take your partner to Paris for a weekend city break."
   ],
   [
    "H",
    "You would like to go on holiday to Germany taking your car."
   ],
   [
    "I",
    "You are planning to travel to Sahara Desert."
   ],
   [
    "J",
    "You would like to have a holiday in Ireland this summer."
   ]
  ],
  "texts": [
   {
    "title": "Borgo di Colleoli",
    "body": "Try it for three days. Treasure it for a lifetime.\n£399 for two for three nights inc. flights\nVisit our fully restored 13th Century Italian holiday village and see it for yourself\nCall 08702430314 for full details of these holiday homes.",
    "answer": "E",
    "explanation": "Italiyadagi qishloqda uch kecha (“three days … three nights”) – uzaytirilgan dam olish kunlari. E."
   },
   {
    "title": "SLEEP ACROSS TO FRANCE",
    "body": "FROM PORTSMOUTH TO CAEN OR BARCELONA\nBRITTANY FERRIES\n(START AT 6 A.M.)",
    "answer": "F",
    "explanation": "Kechasi uxlab ketasiz va ertalab Barselonaga (Ispaniya) yetasiz. Mashinada Ispaniyaga borib, erta tongda La-Mansh bo'g'ozidan o'tish (F)."
   },
   {
    "title": "FREE FIRST CLASS UPGRADES – SAVE UP TO £90",
    "body": "BRUSSELS | LILLE | PARIS\n2 NIGHTS IN PARIS FROM £125\nCALL Eurostar today 07809089587",
    "answer": "G",
    "explanation": "Parijda 2 kecha – dam olish kunlari shaharga sayohat (G)."
   },
   {
    "title": "SAIL AWAY TO HOLLAND and GERMANY",
    "body": "WITH YOUR CAR FROM £60\nDFDS SEAWAYS",
    "answer": "H",
    "explanation": "Mashinangiz bilan Germaniyaga (“with your car”). H."
   },
   {
    "title": "",
    "body": "Ireland by car this summer from £58. Book online to Ireland before 30th June and the kids go for £1! With an unrivalled choice of routes and fast ferries it's time to take your car hassle free to Ireland with Stena Line.\nBook now on stenaline.co.uk\nCall 08705707070\nOr see your travel agent",
    "answer": "J",
    "explanation": "Shu yozda Irlandiyaga (“Ireland … this summer”). J."
   },
   {
    "title": "",
    "body": "You'll get more for your money with Lunn Poly – save up to 50%\nOn hundreds of P&O cruises – Holidays in 2005\n7 night cruises from 599 | 14 night cruises from 1139\nHURRY, OFFER MUST END 31ST AUGUST 2004",
    "answer": "A",
    "explanation": "2005-yilgi kruizlar, 50% gacha tejash, taklif 2004-yil avgustda tugaydi: erta band qilish kerak (A)."
   },
   {
    "title": "Megadeals for island vacations",
    "body": "Barbados £479 7 nights 14-23 June 2004 – 3* Silver Sands\nGrenada £749 7 nights 21-28 June 2004 – 4* Rex Generation\nSt Lucia £779 7 nights 15-29 June 2004\nBOOK ON-LINE VIRGIN.COM/HOLIDAYS",
    "answer": "B",
    "explanation": "Orolda 7 kecha (“island vacations … 7 nights”), ya'ni bir hafta. B."
   },
   {
    "title": "Best Ferry Prices – Widest Choice",
    "body": "Calais 5 day return from £99\nHolland 5 day return from £129\nDieppe 5 day return from £119\nParis 10 day return £240\nBook by 18th June 2004\nFerrysavers.com",
    "answer": "C",
    "explanation": "Parijga borib, 10 kundan keyin qaytish (“Paris 10 day return”). C."
   }
  ]
 },
 {
  "n": 23,
  "label": "Exercise 23",
  "title": "Restoranlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "This restaurant can serve its clients in any part of the day."
   ],
   [
    "B",
    "You may not have lunch at weekends in this restaurant."
   ],
   [
    "C",
    "There is an additional payment if you use the delivery service in the evening."
   ],
   [
    "D",
    "This restaurant doesn't have a delivery service."
   ],
   [
    "E",
    "You may have fast food and pay with a card there."
   ],
   [
    "F",
    "You can enjoy live music at this restaurant in the evenings."
   ],
   [
    "G",
    "The restaurant offers special ice cream for certain clients at no charge."
   ],
   [
    "H",
    "If you want free delivery, there is a requirement for minimum payment."
   ],
   [
    "I",
    "It is impossible to have breakfast during weekdays at this restaurant."
   ],
   [
    "J",
    "There is a dress code for clients at this restaurant."
   ]
  ],
  "texts": [
   {
    "title": "CHAN'S RESTAURANT",
    "body": "2nd floor, Green Shopping Center\nOpen 11 a.m. to 10 p.m. 7 days a week\n***Excellent Chinese cuisine***\nDine in or take out!\nSorry, no delivery",
    "answer": "D",
    "explanation": "“Sorry, no delivery” – yetkazib berish xizmati yo'q. D."
   },
   {
    "title": "SMACHER'S RESTAURANT",
    "body": "Come to the SMACHER'S RESTAURANT\nBreakfast, lunch, dinner\nOpen 24 hours\nFamily Restaurant\nMeals start at $4.\nVISA and MasterCard welcome\n987-5412",
    "answer": "A",
    "explanation": "24 soat ochiq, nonushta, tushlik va kechki ovqat bor: kunning istalgan vaqtida xizmat qiladi (A)."
   },
   {
    "title": "CAFÉ ATHENS",
    "body": "Delicious coffee and espresso\nBeer, wine and soft drinks in the Greek Bar\nLive music every night!\n$8 covers charge\nLocated opposite Imperial's School\nTuesday-Saturday 7pm till 2am\nSorry, no personal checks or credit cards",
    "answer": "F",
    "explanation": "Har kecha jonli musiqa (“live music every night”). F. Karta qabul qilinmaydi, shuning uchun E emas."
   },
   {
    "title": "BOCCI'S RESTAURANT",
    "body": "415 Winston Ave 64 78982\nLunch & Dinner Service\nMonday – Saturday 11:30 am – 11:30 pm\nLasagna, spaghetti, pizza – the best in town!\nMost major credit cards accepted\nAll meals cooked to order by our famous chef, Bocci",
    "answer": "E",
    "explanation": "Pitsa kabi tez tayyorlanadigan taomlar bor va kredit kartalar qabul qilinadi (“credit cards accepted”). E."
   },
   {
    "title": "Aboyne – The original Luigi's Italian Restaurant",
    "body": "is now back in Aboyne\n231 Beach Road, Aboyne (ample parking available)\nOpen: Lunch 12 to 3 pm, Dinner 6 to 10 pm\nTUESDAY TO SUNDAY\nEntrees $5.50 Mains $8.00\nFree ice cream for the kids\nSpecial functions up to 120 people\nReservations: Phone 9763 3501",
    "answer": "G",
    "explanation": "Bolalar uchun bepul muzqaymoq (“free ice cream for the kids”) – ma'lum mijozlarga tekin (G). Kitob kalitida J berilgan, lekin hech bir e'londa kiyinish qoidasi yo'q, shuning uchun mazmunan to'g'ri javob G."
   },
   {
    "title": "Mermaids",
    "body": "Italian & Seafood Cuisine\nLunch: Tuesday-Friday 12 noon – 2.30 pm\nDinner: 7 nights 6.00 pm – 11.30 pm\nTel & Fax: 9784 1234\n54 Shore Street Kempton",
    "answer": "B",
    "explanation": "Tushlik faqat seshanba–juma kunlari, ya'ni dam olish kunlari tushlik yo'q (B)."
   },
   {
    "title": "RIVIERA CRUISING BOAT CLUB",
    "body": "Breakfast by the water $5.00\nSaturday & Sunday 8.00 am to 11.00 am\n• Australian • Continental • American\nAt Riviera Cruising Boat Club 9753 5544\nThe Quay, Gateside",
    "answer": "I",
    "explanation": "Nonushta faqat shanba va yakshanba (“Saturday & Sunday”). Ish kunlari nonushta qilib bo'lmaydi (I)."
   },
   {
    "title": "Jack's Restaurant",
    "body": "Menu\n• Open seven days a week from 7 a.m. to 11 p.m.\n• Free home delivery on orders over $12!\n• Kids under 6 eat free on Thursdays!\nFor home deliveries, call 800-555-2959\nSince 1992",
    "answer": "H",
    "explanation": "Bepul yetkazish faqat $12 dan ortiq buyurtmaga (“free home delivery on orders over $12”). H."
   }
  ]
 },
 {
  "n": 24,
  "label": "Exercise 24",
  "title": "Mehmonxonada dam olish",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You want to stay in a hotel with ping pong and billiard facilities."
   ],
   [
    "B",
    "You need a hotel near the bay with the facility to watch the latest news."
   ],
   [
    "C",
    "You want to stay in a hotel rooms with cooling systems and be able to practise golf."
   ],
   [
    "D",
    "You want to stay in a historical hotel with the facility to have home-made meals."
   ],
   [
    "E",
    "You want to cook yourself in a hotel and play different games."
   ],
   [
    "F",
    "You want to stay in a hotel with mountain views and do swimming activities."
   ],
   [
    "G",
    "You want to stay in a historical hotel with free breakfast."
   ]
  ],
  "texts": [
   {
    "title": "The Ship Hotel",
    "body": "Douglas Bay's 15th Century Hotel\nAll rooms en-suite\nAll rooms with sea view\nRestaurant – Bar\nBuffet every Sunday\nTraditional home-cooked food\nReal local ales\nHarbour Street, Douglas 01779 413562",
    "answer": "D",
    "explanation": "XV asrga oid tarixiy mehmonxona va uyda pishirilgan an'anaviy taom (“15th Century … home-cooked food”). D."
   },
   {
    "title": "BAY VIEW HOUSE – Bed and Breakfast",
    "body": "• Located on the sea front\n• 10 rooms all en-suite\n• All rooms with TV\n• Comfortable modern house\nThe Esplanade, Dawes Bay 01893367267",
    "answer": "B",
    "explanation": "Ko'rfazda joylashgan va xonalarda televizor bor, yangiliklarni ko'rish mumkin (B)."
   },
   {
    "title": "GARRET FOREST HOTEL COUNTRYSIDE RESORT",
    "body": "86 Bedrooms\nSelf-catering available\n3 bars – 4 Restaurants\nIndoor swimming pool\nTennis courts\nGames room\nSituated in a beautiful forest\n15 minutes drive to the coast\nGarret Forest, Nr Felton\nPhone: 01788 412412",
    "answer": "E",
    "explanation": "“Self-catering” – ovqatni o'zingiz tayyorlaysiz, o'yinlar xonasi ham bor (“games room”). E. Hovuz bor, lekin tog' manzarasi aytilmagan, shuning uchun F emas."
   },
   {
    "title": "The Dawes Valley Inn",
    "body": "Elegant and comfortable rooms in a historic inn overlooking the Dawes Valley\n• Traditional hospitality\n• Renovated en-suite rooms\n• Breakfast and lunch included\n• Beautiful views\nTel: 01891 502688",
    "answer": "G",
    "explanation": "Tarixiy mehmonxona, nonushta narxga kiritilgan (“historic inn … breakfast and lunch included”). G."
   },
   {
    "title": "The Clifton Hotel",
    "body": "Hotel and Conference Centre\n• 75 Rooms with bathroom and air conditioning • 4 Function Rooms\n• Fine dining restaurant open to the public • Fitness Centre • 18-Hole Golf Course\nTel: 01744 337799",
    "answer": "C",
    "explanation": "Konditsioner (“air conditioning”) va golf maydoni bor. C."
   }
  ]
 },
 {
  "n": 25,
  "label": "Exercise 25",
  "title": "Sayohat paketlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You need a tour with the shortest time period and the least price."
   ],
   [
    "B",
    "You need a tour for more than 20 days and want to pay less than $7500."
   ],
   [
    "C",
    "You want to travel full month and be able to buy two tours for the price of one."
   ],
   [
    "D",
    "You want to travel with a guide in some parts of tour and river cruise."
   ],
   [
    "E",
    "You want to explore at least 20 cities and visit Buckingham Palace."
   ],
   [
    "F",
    "You want to pay at most $9000 and visit Big Ben during tour and river cruise."
   ]
  ],
  "texts": [
   {
    "title": "PRAGUE TO LONDON",
    "body": "21-DAY TOUR AND RIVER CRUISE\n15-day exclusive luxury charter with over 85% French balcony staterooms.\n• Buckingham Palace • Westminster Abbey\n• Hradcany Castle • 49 meals\n• Big Ben\nPeak season departures across ALL cabins\nFrom $8645 per person twin share\nFly free return airfare to Europe",
    "answer": "F",
    "explanation": "$8645 – $9000 dan kam, Big Ben ham bor. F. Bukingem saroyi bor, lekin shaharlar soni aytilmagan, shuning uchun E emas."
   },
   {
    "title": "PARIS ESCAPE",
    "body": "18-DAY TOUR AND RIVER CRUISE\n15-day exclusive luxury charter with 85% all-weather French balcony staterooms.\n• Explore 18 cities • Canal boat cruise\n• Eiffel Tower • Notre Dame Cathedral\n• Opera House • 45 meals\nFrom $7645 per person twin share\nPlus buy one airfare and get one free",
    "answer": "A",
    "explanation": "Eng qisqa (18 kun) va eng arzon ($7645) tur. A. 20 kundan kam bo'lgani uchun B emas."
   },
   {
    "title": "BRITAIN, IRELAND AND CRUISE",
    "body": "30-DAY TOUR AND RIVER CRUISE\n30-day exclusive luxury charter with over 85% all-weather French balcony staterooms.\n• Stonehenge • Blarney Castle\n• Edinburgh Military Tattoo • Guinness tasting\n• 63 meals\nFrom $11 195 per person twin share\nPlus buy one airfare and get one free",
    "answer": "C",
    "explanation": "To'liq bir oy (30 kun), bitta aviachipta narxiga ikkita (“buy one airfare and get one free”). C."
   },
   {
    "title": "GRAND ALPINE TOUR AND CRUISE",
    "body": "28-DAY TOUR & RIVER CRUISE\n15-day exclusive luxury charter with over 85% all-weather French balcony staterooms.\n• Guided tours of Munich and Salzburg\n• Horse-and-carriage ride to Neuschwanstein Castle\n• 58 meals\nFrom $10 495 per person twin share\nFly free return to Europe",
    "answer": "D",
    "explanation": "Myunxen va Zalsburgda gid bilan ekskursiya (“guided tours”) va daryo kruizi. D."
   }
  ]
 },
 {
  "n": 26,
  "label": "Exercise 26",
  "title": "Uy-ro'zg'or xizmatlari",
  "intro": "Community Business Cards",
  "instr": "",
  "statements": [
   [
    "A",
    "You visit there if you want to have special clothes or some house furnishings cleaned."
   ],
   [
    "B",
    "You visit there if you want to repair your broken car."
   ],
   [
    "C",
    "You visit there if you want to take care of your dog with the specialists."
   ],
   [
    "D",
    "You visit there if you want to install or repair cooling system at home or office."
   ],
   [
    "E",
    "You visit there if you want to have your carpets cleaned by highly experienced professionals."
   ],
   [
    "F",
    "You visit there if you want to buy doors and windows for your house or office."
   ],
   [
    "G",
    "You can visit there only two days in a week for having your hair cut."
   ],
   [
    "H",
    "You visit there if you want to build a new house or reconstruct the old one."
   ]
  ],
  "texts": [
   {
    "title": "HAIRDRESSING",
    "body": "Ginger's Unisex Hair Studio\nSPECIAL Wed & Thurs only\nColour/Foils & Blow-wave and Receive a FREE Haircut\nEnquiries to 9489 8888\nShop 5 Smith Arcade, 104 Old Northern Hwy, Northland",
    "answer": "G",
    "explanation": "Maxsus taklif faqat chorshanba va payshanba (“Wed & Thurs only”) – haftada ikki kun soch oldirish. G."
   },
   {
    "title": "DRY CLEANERS",
    "body": "For quality & friendly service\n• Wedding & evening dresses\n• Duvets & blankets\n• Curtains\n• Woolens/silks etc.\n• Alterations and mending\nPhone 9244 0000\nShop 1, Mundaring Shopping centre, 700 Great Eastern Highway, Mundaring",
    "answer": "A",
    "explanation": "To'y va kechki ko'ylaklar (maxsus kiyimlar), ko'rpa va pardalar (uy jihozlari) tozalanadi. A."
   },
   {
    "title": "GOOD MANNERS DOG TRAINING",
    "body": "Dog daycare & training centre\n• Small classes for all ages\n• Positive methods\n• Qualified trainer\n• Classes in Wetland & hills\nEnquiries: 9244 4056 or 5419 924 133\nWeb: www.goodmanners.net.au\nShop 1, Mundaring Shopping centre, 700 Great Eastern Highway, Mundaring",
    "answer": "C",
    "explanation": "Itlarni parvarish qilish va o'rgatish markazi, malakali murabbiy bilan (“dog daycare … qualified trainer”). C."
   },
   {
    "title": "CLEANING – A-TOP CLEANING",
    "body": "Carpet steam cleaning\nWindow cleaning\n28 yrs\nOwner operator\nPhone 4419 924 575",
    "answer": "E",
    "explanation": "Gilamlarni bug' bilan tozalash, 28 yillik tajriba (“carpet steam cleaning … 28 yrs”). E."
   },
   {
    "title": "BUILDING SERVICES – GCH CONSTRUCTION",
    "body": "Greg, qualified tradesman\n• Bricklaying & limestone\n• Paving & concrete\n• Building maintenance\n• Renovations & new homes\n6423 233 058\ngchconstruction@bigpond.com",
    "answer": "H",
    "explanation": "Yangi uy qurish va eskisini ta'mirlash (“renovations & new homes”). H."
   },
   {
    "title": "AIR CONDITIONING & GAS",
    "body": "Markham Air & Appliances Pty Ltd\nSplit system installations\nAir-conditioning service & repairs\nAppliance service & repair (gas & electric)\nPhone: 4468 118 491\nEftpos available",
    "answer": "D",
    "explanation": "Konditsioner o'rnatish va ta'mirlash (“split system installations … air-conditioning service & repairs”). D."
   }
  ]
 },
 {
  "n": 27,
  "label": "Exercise 27",
  "title": "Konsertlar",
  "intro": "SYDNEY CONSERVATORIUM OF MUSIC CONCERTS FOR JANUARY 2001",
  "instr": "",
  "statements": [
   [
    "A",
    "You want to see a television character during the concert."
   ],
   [
    "B",
    "You can go there with a partner to listen to the most romantic songs."
   ],
   [
    "C",
    "You want to listen to Indian music with some Japanese songs during the concert."
   ],
   [
    "D",
    "This concert is held twice during January and the ticket price is less than $11."
   ],
   [
    "E",
    "You can go there if you're a rock music lover to listen to the best rock music of last decade."
   ],
   [
    "F",
    "You can visit to this concert if you want to listen to the music played with a guitar."
   ],
   [
    "G",
    "You can meet American film stars during the concert."
   ]
  ],
  "texts": [
   {
    "title": "Sydney Youth Orchestra",
    "body": "Conservatorium High School students play a section of Mozart concertos.\nDate: Sat. 4th and 11th January, 8.00 pm. $10 and $5",
    "answer": "D",
    "explanation": "Konsert yanvarda ikki marta (4 va 11-yanvar), chipta $10 va $5, ya'ni $11 dan arzon. D."
   },
   {
    "title": "Let's Sing Together",
    "body": "An afternoon for the young and the young-at-heart. Led by the Giggles Band, sing children's songs from your childhood and from all over the world. There will be a special appearance by Willy Wallaby, from the popular children's programme, Hoppy!\nDate: Sun. 5th January, 3.00 pm. $5",
    "answer": "A",
    "explanation": "Mashhur bolalar teledasturi qahramoni Villi Vallabi chiqadi (“special appearance by Willy Wallaby, from the popular children's programme”). A."
   },
   {
    "title": "One Romantic Evening",
    "body": "Bring someone special with you and listen to some of the greatest love songs as you gaze at the stars together!\nDate: Sat. 25th January, 8.00 pm. $20 and $12\nNote: This concert will be held in the Conservatorium Rose Garden, not in the Concert Hall",
    "answer": "B",
    "explanation": "Yaqin insoningiz bilan eng zo'r sevgi qo'shiqlarini tinglash (“bring someone special … greatest love songs”). B."
   },
   {
    "title": "Rock n' Roll",
    "body": "Bop along till late to the rock hits of the last 10 years. Bands playing include The Hippies, The Hypers, and The Heroes. If you have a special request, write it down at the ticket counter when you come in.\nDate: Sat. 18th January, 8.00 pm. $10 and $5",
    "answer": "E",
    "explanation": "So'nggi 10 yilning rok xitlari (“rock hits of the last 10 years”) = last decade. E."
   },
   {
    "title": "Flamenco!",
    "body": "World-famous classical guitarist Rodrigo Paras will play a selection of traditional Spanish Flamenco pieces.\nDate: Sun. 19th and 26th January, 7.30 pm. $20 and $12",
    "answer": "F",
    "explanation": "Gitarachi chaladi (“classical guitarist”). F. Bu ham ikki marta bo'ladi, lekin narxi $20, shuning uchun D emas."
   }
  ]
 },
 {
  "n": 28,
  "label": "Exercise 28",
  "title": "Restoranlar va taomlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You visit there not for eating delicious meals but for learning how to cook them."
   ],
   [
    "B",
    "This restaurant tends to change the menu three times a year."
   ],
   [
    "C",
    "This restaurant offers fine Turkish food with the view of the sea."
   ],
   [
    "D",
    "This restaurant is the best choice if you want to celebrate your birthday party with Italian food."
   ],
   [
    "E",
    "It is cheaper to take your food away than eating at the restaurant."
   ],
   [
    "F",
    "This restaurant offers paid delivery in only local areas and has banquet hall for up to 90 people."
   ],
   [
    "G",
    "It is possible to eat two burgers for the price of one."
   ]
  ],
  "texts": [
   {
    "title": "IT'S YOUR CHOICE",
    "body": "Buy a Burger – Get the same one FREE!\nYou are invited to enjoy a special treat at Jaspar's Macquarie Plaza. Simply present this coupon with your next order and when you purchase the burger of your choice it will be our pleasure to give you another burger of the same variety absolutely FREE! Valid only at Macquarie and ONE voucher per customer per day.\nJaspar's Macquarie Plaza, North Richmond\nExpires 9th May, 1997. Cannot be used with any other Jaspar's offer.\nEat in or Takeaway. Level 3, next to the cinema complex",
    "answer": "G",
    "explanation": "Bitta burger olsangiz, ikkinchisi tekin (“buy a burger, get the same one free”). G."
   },
   {
    "title": "TRELLINIS RESTAURANT",
    "body": "Fine Italian Food\nB.Y.O Eat in – Takeaway\nOPEN lunch – Dinner\nNow: Better Menu – Food – Service Superb\nWinter Dishes and Dessert\nPerfect for parties\nSeparate party rooms and choice of set menu available for 10-80 people and value for $$$.\nPhone: 271 8600 – 12 Oxford St. EPPING Opp. PO. Ample parking",
    "answer": "D",
    "explanation": "Italyan taomlari va bazmlar uchun ideal (“fine Italian food … perfect for parties”). Tug'ilgan kun uchun D."
   },
   {
    "title": "Indian Flavour",
    "body": "BYO – No Corkage and licensed\n693 2258 / 693 2260\nDINNER 7 NIGHTS\n• 10% discount on takeaways\n• Free home delivery (local areas only)\n• Banquet – only $16.50 per person\n• Separate party room (up to 90 people)\n63 – 65 John Street, RYDE",
    "answer": "E",
    "explanation": "Olib ketishga 10% chegirma (“10% discount on takeaways”). E. Yetkazib berish bepul, shuning uchun F (“paid delivery”) to'g'ri emas."
   },
   {
    "title": "Writers café",
    "body": "Dante Trattoria, Shop 4, Spring Centre, Soldier's Road, Neutral Bay. Ph: 953 1212\nOPEN: 8 am – midnight\nCuisine: Italian influence, menu changes every four months. Breakfast includes toast, pancakes, smoked salmon, scrambled eggs, gourmet sausages and fruit; light meals and lunch menu includes pasta, salad, crepes, seafood, soups, focaccia, burgers, desserts.\nPRICES: Breakfast $4.50 - $8.90, Lunch: $6.90 - $13.90\nAtmosphere: Relaxed and quiet. Patrons can dine inside or out.\nCredit Cards: Yes",
    "answer": "B",
    "explanation": "Menyu har to'rt oyda o'zgaradi (“menu changes every four months”), ya'ni yiliga uch marta. B."
   },
   {
    "title": "VEGETARIAN COOKING CLASSES",
    "body": "Are you looking for some healthy alternatives to your menu? Join our creative and nutritious three week program conducted by qualified professionals, including delicious tastings and demonstrations.\nStarting Wednesday May 10 at 7.15 pm.\nCentre for Health Management\nSYDNEY DAY HOSPITAL\nBOOK NOW 748 9696",
    "answer": "A",
    "explanation": "Bu restoran emas, pazandachilik darsi (“cooking classes”): ovqat tayyorlashni o'rganasiz. A."
   }
  ]
 },
 {
  "n": 29,
  "label": "Exercise 29",
  "title": "Ish va kasblar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You have to work at the salon only at weekends."
   ],
   [
    "B",
    "Your salary depends on the number of people who read your articles."
   ],
   [
    "C",
    "This work requires a minimum height for all applicants who want to apply for a job."
   ],
   [
    "D",
    "This work is suitable for all good looking men and women."
   ],
   [
    "E",
    "You are provided with free uniform and you have to look after older people."
   ],
   [
    "F",
    "It is possible to choose the suitable time for you to work."
   ],
   [
    "G",
    "It is not important to have previous experience to work there."
   ]
  ],
  "texts": [
   {
    "title": "Support Worker",
    "body": "Do you have the ability to care for others? Can you understand how older people feel? Are you a good communicator? Do you have good listening skills? Can you work weekends?\nIf you have answered YES to the above, we would like to hear from you:\n- Starting rate of $8.56 per hour\n- Free uniform\n- Excellent training",
    "answer": "E",
    "explanation": "Bepul forma beriladi va keksalarga g'amxo'rlik qilasiz (“older people … free uniform”). E."
   },
   {
    "title": "Trainee hairdresser",
    "body": "Full time – 40 hours per week\nPermanent\nBrighton City Centre\nLearn from some of the best hairdressers in the world!\nYou will work 40 hours a week Monday to Saturday. Your responsibilities will include: welcoming clients, washing hair, bringing coffee and tea to customers, and keeping the salon clean and tidy at all times.\nNo previous experience is necessary. Please apply NOW!\ncathy@cut-above.brighton.com",
    "answer": "G",
    "explanation": "“No previous experience is necessary” – oldingi tajriba shart emas. G. Ish dushanbadan shanbagacha, shuning uchun A emas."
   },
   {
    "title": "WOWEE MAGAZINE – Writers wanted!",
    "body": "Wowee Magazine is looking for writers for its website. Pay is based on the number of people who read your articles. You may also receive free tickets to events and free products to test. This is a great opportunity to get valuable work experience.\nWe want people who are: chatty, passionate, interesting, skilled\nContact us at info@wowee.com",
    "answer": "B",
    "explanation": "Maosh maqolangizni o'qiganlar soniga bog'liq (“pay is based on the number of people who read your articles”). B."
   },
   {
    "title": "CALLING ALL MODELS",
    "body": "Think you could be a model? If so, we'd like to meet you!\nWorking as a successful fashion model isn't easy but it is very exciting and could be a great opportunity.\nGirls should be over 16 with a minimum height of 172 cm and boys should have a minimum height of 182 cm. If you are under 16 and do not yet have the required height, we would still be interested in meeting you, but you must bring a parent.\ninfo@top-model-agency.uk",
    "answer": "C",
    "explanation": "Qizlar uchun kamida 172 sm, yigitlar uchun 182 sm bo'y talab qilinadi (“minimum height”). C."
   },
   {
    "title": "WORK FOR COFFEE BEANS",
    "body": "Join Britain's number one café at COFFEE BEANS, where every café has the same aims: to create family-like teams and to give excellent customer service.\nMany different kinds of people come and work with us, so start your career at COFFEE BEANS today:\n- choose the hours you work\n- get management experience\n- share your love of coffee\nJoin us as a Team Member, Assistant Manager or Café Manager, depending on your skills and experience.\nEmail us at jobs@coffeebeans.co.uk",
    "answer": "F",
    "explanation": "Ish soatlarini o'zingiz tanlaysiz (“choose the hours you work”). F."
   }
  ]
 },
 {
  "n": 30,
  "label": "Exercise 30",
  "title": "Dam olish va ko'ngilochar markazlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "Payment at this venue is optional."
   ],
   [
    "B",
    "They will open at unscheduled times if you make an arrangement."
   ],
   [
    "C",
    "You can either buy or rent a car here at the lowest price in the city."
   ],
   [
    "D",
    "There is a restriction on what you can wear."
   ],
   [
    "E",
    "Expert instructors are available to teach how to play."
   ],
   [
    "F",
    "There are special events for very young children in this leisure center."
   ],
   [
    "G",
    "It is possible to practice surfing in the ocean and travel by boat."
   ]
  ],
  "texts": [
   {
    "title": "TRAX INDOOR KARTING CENTRE",
    "body": "Experience the fun and thrills of indoor racing driving in our mini open-topped karts. No experience necessary. Individuals and groups welcome. All drivers must meet the minimum height requirement of 5 feet (1.52 m), and participate at their own risk.\nOpen: all year daily 10 am to 6 pm (later times by appointment) except Christmas Day.\nCharges: from £11 per person.",
    "answer": "B",
    "explanation": "Kelishuv asosida kechroq vaqtda ham ochiladi (“later times by appointment”). B."
   },
   {
    "title": "WESTHAVEN LIFEBOAT MUSEUM",
    "body": "The Westhaven Lifeboat Museum is an exciting display illustrating over 150 years of courage — photos with texts of epic rescues, models of lifeboats and video displays. Ideal for school groups! A must for all ages. Souvenir shop. No charge for admission but donations welcome.\nOpen: 25th March to 26th October, 10 am to 5 pm. 27th October to 2nd January, 10 am to 4 pm.",
    "answer": "A",
    "explanation": "Kirish bepul, xayriya esa ixtiyoriy (“no charge for admission but donations welcome”). A."
   },
   {
    "title": "STAR LEISURE CENTRE",
    "body": "Exciting leisure complex with four pools, wave machine, two thrilling flumes, bubble pool, fitness suite, special programme for under-fives, organised holiday activities and much, much more.\nOpen: all year daily.\nCharges: Check our website at www.starleisure.ca.uk for current rates.",
    "answer": "F",
    "explanation": "5 yoshgacha bolalar uchun maxsus dastur (“special programme for under-fives”). F. To'lqin mashinasi bor, lekin okean va qayiq yo'q, shuning uchun G emas."
   },
   {
    "title": "LLOYD'S LANES",
    "body": "20 fully computerized ten-pin bowling lanes, amusement area, fast food area, large-screen Sky TV — Lloyd's Lanes is ideal for a whole fun day out!\nOpen: ten-pin bowling daily, 10 am till late — 7 days a week.\nCharges: Monday to Friday 10 am to 6 pm: non-members £3.50; members £2.50.\nother times: non-members £4.50; members £3.75.\nappropriate footgear essential to protect bowling surfaces – shoe hire £1.00 at all times.",
    "answer": "D",
    "explanation": "Maxsus poyabzal kiyish shart (“appropriate footgear essential”) – kiyimda cheklov bor (D)."
   },
   {
    "title": "WESTHAVEN GOLF CLUB",
    "body": "Beautiful lakeside course; a pleasant, manageable walk through nine challenging holes.\n24-bay driving range, suitable in rain, wind or sun; three golf professionals can give affordable coaching.\nRestaurant: good food served all day. Visitors welcome.\nOpen: all year from 7.30 am to 10 pm.\nCharges: 9 holes £10; 18 holes £15.",
    "answer": "E",
    "explanation": "Uchta professional golfchi o'yinni o'rgatadi (“three golf professionals can give affordable coaching”). E."
   }
  ]
 },
 {
  "n": 31,
  "label": "Exercise 31",
  "title": "Tabiat bo'ylab sayrlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "This trip starts at the second half of the day and you have to wear special shoes for not getting injured."
   ],
   [
    "B",
    "This trip is suitable for all ages and includes exploring ancient sites."
   ],
   [
    "C",
    "This trip does not provide any food and is suitable for people who regularly exercise."
   ],
   [
    "D",
    "It is recommended to wear warm clothes for not getting cold around fire."
   ],
   [
    "E",
    "It is the longest trip and coffee and biscuits supplied for visitors."
   ],
   [
    "F",
    "This trip is suitable for people who are keen to hear the voice of birds."
   ],
   [
    "G",
    "It is recommended to bring a special instrument to watch the birds."
   ]
  ],
  "texts": [
   {
    "title": "Sunday May 7: suitable for ALL fitness levels",
    "body": "Early Morning Stroll in Upper Lane Cove Valley\nMeet at 7.30 am at the end of Day Rd, Cheltenham while the bush is alive with birdsong.\nRound trip: 4 hours",
    "answer": "F",
    "explanation": "Ertalab butazor qushlarning sayrashi bilan to'la bo'ladi (“alive with birdsong”). Qushlar ovozini eshitmoqchi bo'lganlar uchun (F)."
   },
   {
    "title": "Friday May 12: for those who PERIODICALLY exercise",
    "body": "Possum Prowl.\nMeet 7.30 pm at Seaforth Oval carpark. Enjoy the peace of the bush at night. Lovely water views. Bring a torch and wear non-slip shoes as some rock clambering involved. Coffee and biscuits supplied.\nDuration: 2 hours",
    "answer": "A",
    "explanation": "Kechqurun (19.30) boshlanadi va sirpanmaydigan poyabzal kiyish kerak (“wear non-slip shoes”). A. Qahva va pechenye berilsa ham, bu eng uzun sayr emas (2 soat), shuning uchun E emas."
   },
   {
    "title": "Sunday June 4: only if you REGULARLY exercise",
    "body": "Bairne/Basin Track.\nMeet 9.30 am Track #8, West Head Road. Magnificent Pittwater views. Visit Beechwood cottage. Bring lunch and drink. Some steep sections. Reasonable fitness required.\nDuration: approx. 6 hours.",
    "answer": "C",
    "explanation": "Ovqatni o'zingiz olib kelasiz (“bring lunch and drink”) va muntazam sport bilan shug'ullanadiganlar uchun. C."
   },
   {
    "title": "Friday June 16: suitable for ALL fitness levels",
    "body": "Poetry around a mid-winter campfire.\nMeet 7.00 pm Kalkaari Visitor Centre. Share your favorite poem or one of your own with a group around a gently crackling fire. Billy tea and damper to follow. Dress up warmly. Bring a mug and a rug (or a chair).\nCost $4.00 per person.\nDuration: 2.5 hours",
    "answer": "D",
    "explanation": "Gulxan atrofida, issiq kiyinish tavsiya qilinadi (“dress up warmly”). D."
   },
   {
    "title": "Sunday June 25: suitable for ALL fitness levels",
    "body": "Meet 8.30 am, entrance to Mitchell Park, Mitchell Park Rd, Cattai for a pleasant walk wandering through the rainforest, river flats and dry forest to swampland. Binoculars are a must to bring as many birds live here. Finish with morning tea.\nDuration: 3 hours.",
    "answer": "G",
    "explanation": "Qushlarni kuzatish uchun durbin olib kelish shart (“binoculars are a must”). G."
   }
  ]
 },
 {
  "n": 32,
  "label": "Exercise 32",
  "title": "Qisqa biznes kurslari",
  "intro": "SHORT COURSES: BUSINESS",
  "instr": "",
  "statements": [
   [
    "A",
    "This course is suitable for people who struggle to speak in front of many people."
   ],
   [
    "B",
    "This course is suitable for people who are planning to run big supermarkets or malls."
   ],
   [
    "C",
    "This course does not require any previous experience in an accounts position."
   ],
   [
    "D",
    "This course is held in June and suitable for people who want to learn tax system deeply."
   ],
   [
    "E",
    "It is important to book your place at course in advance."
   ],
   [
    "F",
    "This course gives detailed information about the benefits of internet technologies in a company."
   ],
   [
    "G",
    "This course develops people's company-related documentation overview such as tax."
   ]
  ],
  "texts": [
   {
    "title": "Business Basics",
    "body": "Gain foundation knowledge for employment in an accounts position with bookkeeping and business basics through to intermediate level; suitable for anyone requiring knowledge from the ground up.\n16th or 24th April 9am–4pm\nCost $420",
    "answer": "C",
    "explanation": "Noldan boshlaydiganlar uchun mos (“from the ground up”): buxgalteriyada oldingi tajriba shart emas. C."
   },
   {
    "title": "Bookkeeping",
    "body": "This course will provide students with a comprehensive understanding of bookkeeping and a great deal of hands-on experience.\n19th April 9am–2.30pm (one session only so advance bookings essential)\nCost $250",
    "answer": "E",
    "explanation": "Faqat bitta mashg'ulot, shuning uchun oldindan joy band qilish shart (“advance bookings essential”). E."
   },
   {
    "title": "New Enterprise Module",
    "body": "Understand company structures, tax rates, deductions, employer obligations, profit and loss statements, GST and budgeting for tax.\n15th or 27th May 6pm–9pm\nCost $105",
    "answer": "G",
    "explanation": "Kompaniya tuzilmasi, soliq stavkalari, foyda-zarar hisobotlari kabi hujjatlar (G). Kurs mayda, iyunda emas, shuning uchun D emas."
   },
   {
    "title": "Social Networking – the Latest Marketing Tool",
    "body": "This broad overview gives you the opportunity to analyse what web technologies are available and how they can benefit your organisation.\n1st or 8th or 15th June 6pm–9pm\nCost $95",
    "answer": "F",
    "explanation": "Veb-texnologiyalar tashkilotga qanday foyda berishi (“how they can benefit your organisation”). F. Iyunda o'tsa ham, soliq haqida emas, shuning uchun D emas."
   },
   {
    "title": "Communication",
    "body": "Take the fear out of talking to large gatherings of people. Gain the public-speaking experience that will empower you with better communication skills and confidence.\n12th or 13th or 14th July 6pm–9pm\nCost $90",
    "answer": "A",
    "explanation": "Ko'pchilik oldida gapirish qo'rquvini yo'qotish (“take the fear out of talking to large gatherings”). A."
   }
  ]
 },
 {
  "n": 33,
  "label": "Exercise 33",
  "title": "Festivallar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "At this festival, people can listen to music in lots of different places."
   ],
   [
    "B",
    "Visitors can sing the songs of Asian and Indian artists on karaoke."
   ],
   [
    "C",
    "It is not necessary to pay for one of the events there."
   ],
   [
    "D",
    "Visitors can learn how to cook by festival organizers."
   ],
   [
    "E",
    "People can watch craftspeople at work here."
   ],
   [
    "F",
    "This festival helps people to learn how to dance and sing."
   ],
   [
    "G",
    "Visitors can stay overnight at this festival."
   ],
   [
    "H",
    "People can listen to local musicians here."
   ]
  ],
  "texts": [
   {
    "title": "Bath International Music Festival",
    "body": "From electronic to folk, jazz and classical, this festival is renowned for bringing world-class musicians to this historical city. Starting with a great night of free music, “Party in the City” this year is going to be no exception.\nPhone: 2158 15256",
    "answer": "C",
    "explanation": "Festival bepul musiqa kechasi bilan boshlanadi (“a great night of free music”), ya'ni bitta tadbir uchun pul to'lanmaydi (C)."
   },
   {
    "title": "The Great Escape",
    "body": "Often referred to as Europe's leading festival for new music, more than 300 bands will perform to around 10 000 people in 30-plus venues, meaning you're sure to see the next big thing in music.\nPhone: 2147 58623",
    "answer": "A",
    "explanation": "30 dan ortiq joyda (“in 30-plus venues”) musiqa tinglash mumkin. A."
   },
   {
    "title": "Wychwood Music Festival",
    "body": "Rightly nominated for the best family festival award every year since it began in 2005, this festival offers a combination of different music genres – many featuring artists from around the Wychwood area – and comedy, alongside a selection of outdoor cafes serving amazing world foods.\nPhone: 5281 69525",
    "answer": "H",
    "explanation": "Ijrochilarning ko'pi Wychwood atrofidan (“artists from around the Wychwood area”), ya'ni mahalliy musiqachilar (H). Kitob kalitida 3 va 4 o'rin almashib qolgan (3.E, 4.H)."
   },
   {
    "title": "Springwatch Festival",
    "body": "The much loved television series Springwatch celebrates the countryside as it does every year, with sheep herding, wood carving demonstrations, insect hunts and more activities, accompanied by live music and a great farmers' market, offering all sorts of mouth-watering produce.\nPhone: 5121 36585",
    "answer": "E",
    "explanation": "Yog'och o'ymakorligi namoyishi (“wood carving demonstrations”): hunarmandlarni ish ustida ko'rasiz (E). Kitob kalitida bu yerda H berilgan, lekin mahalliy musiqachilar 3-matnda tilga olingan."
   },
   {
    "title": "Love Food Festival",
    "body": "Bringing together a selection of the finest produce, this festival aims to educate visitors about how food should be produced and where it should come from, through sampling a range of tasty treats, cooked on site.\nPhone: 5874 36985",
    "answer": "D",
    "explanation": "Festival mehmonlarga ovqat haqida o'rgatadi, taomlar shu yerning o'zida pishiriladi (“educate visitors … cooked on site”). D."
   },
   {
    "title": "The 3 Wishes Faery Festival",
    "body": "The UK's most magical event, this is a three-day festival of folk art, live music and fashion shows set in the beautiful wild surroundings of Bodmin Moor. If you don't fancy taking a tent, some local residents usually offer to put visitors up.\nPhone: 7458 96584",
    "answer": "G",
    "explanation": "Uch kunlik festival: chodirda yoki mahalliy aholi uyida tunash mumkin (“put visitors up”). G."
   }
  ]
 },
 {
  "n": 34,
  "label": "Exercise 34",
  "title": "Ish e'lonlari",
  "intro": "Which is the most suitable job for each person?",
  "instr": "",
  "statements": [
   [
    "A",
    "You can apply for this job if you want to work a few hours a week of unskilled work in the early mornings."
   ],
   [
    "B",
    "You can apply for this job if you have a diploma and experience in accounting and finances."
   ],
   [
    "C",
    "This job is suitable for people with no experience or qualifications who are looking for a short-term full-time job, Monday to Friday."
   ],
   [
    "D",
    "This job is suitable for students who do not have experience and cannot work on weekdays."
   ],
   [
    "E",
    "This job is suitable for people who want to work only three days a week in the afternoons."
   ],
   [
    "F",
    "This job is suitable for a catering college graduate who is now looking for his first full-time job."
   ],
   [
    "G",
    "This job is suitable for people who want to work part-time with experience in working at restaurants and want to get a high salary."
   ],
   [
    "H",
    "You can apply for this job if you have working experience in a hotel industry and want to work only in the afternoons."
   ]
  ],
  "texts": [
   {
    "title": "HELP – snack bar serving person",
    "body": "Bright, friendly, experience not essential\nEnergy and enthusiasm an absolute must\nSat & Sun only\nCall or drop in at Kingsway Centre, Melbourn / Royston\nTel: 01763 24272 and ask for the Manager",
    "answer": "D",
    "explanation": "Tajriba shart emas, ish faqat shanba-yakshanba (“Sat & Sun only”). Ish kunlari ishlay olmaydigan talabalar uchun (D)."
   },
   {
    "title": "Granta Hotel",
    "body": "requires a part-time silver service waiter/waitress.\nOnly applicants with experience and good references need apply.\nExcellent wages, meals on duty.\nTel: 01223 51468 (office hours)",
    "answer": "G",
    "explanation": "Yarim stavka, restoranda ishlash tajribasi kerak, maosh yuqori (“part-time … experience … excellent wages”). G."
   },
   {
    "title": "WANTED",
    "body": "from January till July, a nanny/carer for Toby, 2 yrs. Formal qualifications not as important as a sensible, warm and imaginative approach.\nHours: 8.30 – 5.00 Mon-Fri\nCar driver essential, non smoker\nReferences required\nFor further details phone: 01480 88056 after 6 pm.",
    "answer": "C",
    "explanation": "Yanvardan iyulgacha (qisqa muddat), to'liq kun dushanba–juma, malaka muhim emas. C."
   },
   {
    "title": "",
    "body": "Cleaner required for 12-floor modern office block in the Station Road area, St Ives.\n2 hours per day, Mondays to Fridays – to finish work before the offices open\nWages: $80 per week\nTel: 01223 93292",
    "answer": "A",
    "explanation": "Kuniga 2 soat, ofislar ochilishidan oldin, ya'ni erta tongda malaka talab qilmaydigan ish (A)."
   },
   {
    "title": "Mature, experienced Administrator/Secretary",
    "body": "for soft furnishing company, working within the hotel industry\nHours: 1pm – 5pm, Mon – Fri\nPhone: Mr S Quinn 01353 71251",
    "answer": "H",
    "explanation": "Mehmonxona sohasida tajriba kerak, ish faqat tushdan keyin (“1pm – 5pm”). H."
   },
   {
    "title": "FULL-TIME COOK",
    "body": "for a new and exciting café venture. Good conditions. Pay and hours can be negotiated.\nApply Red Café (01863) 72052",
    "answer": "F",
    "explanation": "To'liq kunlik oshpaz ishi (“full-time cook”). Oshpazlik kollejini bitirib, birinchi ishini izlayotgan odamga mos (F)."
   }
  ]
 },
 {
  "n": 35,
  "label": "Exercise 35",
  "title": "Poyezd chiptalari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "There are advantages if you book a journey with a friend."
   ],
   [
    "B",
    "This ticket can only be booked up to 7 days before departure."
   ],
   [
    "C",
    "This ticket can only be bought online at least 14 days before departure."
   ],
   [
    "D",
    "It's the cheapest ticket available but there is a restriction on departure time."
   ],
   [
    "E",
    "This is not available if you're travelling out on a Monday and back the next day."
   ],
   [
    "F",
    "You must book this ticket a week in advance and cannot get your money back if you cancel the travel."
   ],
   [
    "G",
    "You cannot use this ticket for departures between midnight and 10 am."
   ],
   [
    "H",
    "You have to leave the fixed portion of your ticket price if you decide to return the ticket."
   ]
  ],
  "texts": [
   {
    "title": "SuperApex",
    "body": "Only available for travel after 9 am. Book at least 2 weeks ahead and travel between Edinburgh or Glasgow and London for the unbeatable price of $59 return. This ticket is non-refundable unless the service is cancelled.\nPhone: 1425 8255 www.superapex.com",
    "answer": "D",
    "explanation": "Eng arzon ($59) va faqat soat 9 dan keyin jo'nash mumkin (“only available for travel after 9 am”). D. 2 hafta oldin band qilinadi, lekin faqat onlayn deyilmagan, shuning uchun C emas."
   },
   {
    "title": "Apex",
    "body": "A real bargain fare. Only $69 return between Edinburgh or Glasgow and London. Great value Sleeper travel available by booking at least a week before outward travel. Ticket refundable on payment of a 25% administrative charge.\nPhone: 2536 4558 www.apex.com",
    "answer": "H",
    "explanation": "Chiptani qaytarsangiz, 25% ma'muriy to'lov ushlab qolinadi (“refundable on payment of a 25% administrative charge”). H. Pul qaytariladi, shuning uchun F emas."
   },
   {
    "title": "SuperSaver",
    "body": "Available only a week before the departure and valid any day except these peak days: all Fridays, also 18-30 December, 31 March and 28 May. Departures between midnight and 2 am count as previous day's departures. London to Glasgow or Edinburgh $82.\nPhone: 7485 9632 www.supersaver.com",
    "answer": "B",
    "explanation": "Chiptani jo'nashdan bir hafta oldingina olish mumkin (“available only a week before the departure”). B."
   },
   {
    "title": "Saver",
    "body": "This flexible ticket is valid every day and can be bought on the day of travel. Your ticket allows standard class travel on any train between 10 am and midnight. No seat reservations available. London to Glasgow or Edinburgh $95.\nPhone: 1452 8755 www.saver.com",
    "answer": "G",
    "explanation": "Chipta faqat 10:00 dan yarim tungacha amal qiladi, ya'ni yarim tundan soat 10 gacha jo'nab bo'lmaydi (G)."
   },
   {
    "title": "Solo",
    "body": "Solo is an inclusive return travel ticket with Sleeper reservations for one or both directions. Outward and return reservations should be made at the time of booking. The journey must include a Saturday night away. $140 - $160 London to Edinburgh/Glasgow return.\nPhone: 7458 6933 www.solo.com",
    "answer": "E",
    "explanation": "Safar shanba kechasini o'z ichiga olishi shart. Dushanba ketib, seshanba qaytsangiz, bu chipta to'g'ri kelmaydi (E)."
   },
   {
    "title": "Special",
    "body": "Special is an inclusive return travel package for two people including sleeper reservations for one or two directions. It can mean savings for both of you. Outward and return reservations should be made at the time of booking. From $120.\nPhone: 4758 9632 www.special.com",
    "answer": "A",
    "explanation": "Ikki kishi uchun paket, ikkalangiz ham tejaysiz (“for two people … savings for both of you”). A."
   }
  ]
 },
 {
  "n": 36,
  "label": "Exercise 36",
  "title": "Fitnes ilovalari",
  "intro": "Smartphone fitness apps",
  "instr": "",
  "statements": [
   [
    "A",
    "This app can be used for more than one sport."
   ],
   [
    "B",
    "You have to pay if you want this app to suggest where you can go."
   ],
   [
    "C",
    "You have to pay if you want to turn on your GPS for tracking your jogging routes."
   ],
   [
    "D",
    "You do not have to pay any of the features on this app."
   ],
   [
    "E",
    "This app provides information about calories burned if you buy a premium version."
   ],
   [
    "F",
    "You can pay to download true stories on this app."
   ]
  ],
  "texts": [
   {
    "title": "Pacer",
    "body": "Users can spend no money, yet use their smartphone's GPS capabilities to track their jogging routes, and examine details of their pace and calories burned.\nDownload from: www.pacer.com",
    "answer": "D",
    "explanation": "Hech qanday pul sarflamasdan GPS, tezlik va kaloriyalarni kuzatish mumkin (“spend no money”). D. Kaloriya ma'lumoti bepul, shuning uchun E va C emas."
   },
   {
    "title": "Beat2",
    "body": "This free app monitors your heart beats per minute – and offers up its specially curated playlists to give you the perfect music for the pace you're running at, adding a whole new dimension to your run. The app has In-App Purchases which allows you to buy the tales of past sporting heroes for listening while you run.\nDownload from: www.beat2.com",
    "answer": "F",
    "explanation": "O'tmishdagi sport qahramonlari haqidagi hikoyalarni sotib olish mumkin (“buy the tales of past sporting heroes”). F."
   },
   {
    "title": "Impel",
    "body": "This app helps you to set goals and see daily progress updates. If you're not sure where to run or cycle you can find user-created routes on the app, or share your own. All of that comes free of charge, while a premium version adds even more tools.\nDownload from: www.impel.com",
    "answer": "A",
    "explanation": "Yugurish yoki velosiped haqida (“run or cycle”): bir nechta sport turi uchun. A."
   },
   {
    "title": "Fast Track",
    "body": "Although you naturally get more features if you pay for the 'pro' version, the free release gets you GPS tracking, a nicely designed map view, your training history, music, and cheering. If you can afford the “pro” version, you can add possible routes, voice coaches, smartwatch connectivity.\nDownload from: www.beat2.com",
    "answer": "B",
    "explanation": "Pullik “pro” versiyada yo'nalishlar taklif qilinadi (“possible routes”), ya'ni qayerga borishni ilova aytadi. B. GPS bepul versiyada bor, shuning uchun C emas."
   }
  ]
 },
 {
  "n": 37,
  "label": "Exercise 37",
  "title": "Ijaraga dam olish kvartiralari",
  "intro": "HOLIDAY APARTMENTS TO LET",
  "instr": "",
  "statements": [
   [
    "A",
    "It has a private outdoor area where you can sit."
   ],
   [
    "B",
    "It is part of an apartment complex with its own supermarket."
   ],
   [
    "C",
    "The owners provide cooking facilities on request."
   ],
   [
    "D",
    "There is a swimming pool for residents of the apartment complex."
   ],
   [
    "E",
    "There is a special parking area for only the residents of the apartment complex."
   ],
   [
    "F",
    "There is a special garage available if you make arrangement with the owners."
   ],
   [
    "G",
    "The owners of the apartment live together with residents in the same building."
   ]
  ],
  "texts": [
   {
    "title": "Sleeps 2-3",
    "body": "One-bedroom apartment with uninterrupted sea views. There is a supermarket for residents only. On the edge of the town but close to cafes and restaurants. On-street parking is generally available.\nBook now: www.rayalhotel.com\nPhone: 1252 36325",
    "answer": "B",
    "explanation": "Faqat yashovchilar uchun supermarket bor (“a supermarket for residents only”). B. Mashina ko'chada qo'yiladi, maxsus joy emas (E emas)."
   },
   {
    "title": "Sleeps 2-4",
    "body": "Spacious one-bedroom apartment in a complex and just five minutes' walk from the sea. Private parking in front of the building. There are some fabulous championship golf courses within easy walking distance.\nBooknow: www.golfhotel.com\nPhone: 1458 98585",
    "answer": "E",
    "explanation": "Bino oldida shaxsiy avtoturargoh (“private parking in front of the building”). E."
   },
   {
    "title": "Sleeps 2+child",
    "body": "One-bedroom cottage (child's bed can also be provided), large terrace with uninterrupted views of the river and mountains. Owners live nearby and are happy to help in any way they can.\nBook now: www.greenhotel.com\nPhone: 1458 98585",
    "answer": "A",
    "explanation": "Katta terrasa – o'tirish uchun shaxsiy ochiq joy (A). Egalari yaqin atrofda yashaydi, lekin shu binoda emas, shuning uchun G emas."
   },
   {
    "title": "Sleeps 2-5",
    "body": "Two-bedroom apartment in a complex with its own pool and beautiful views of the national park. A peaceful location just 3 km from the town centre, where there are plenty of shops and excellent sports facilities. Superb local golf courses within easy reach.\nBook now: www.cityhotel.com\nPhone: 9658 54858",
    "answer": "D",
    "explanation": "Kompleksning o'z hovuzi bor (“a complex with its own pool”). D."
   },
   {
    "title": "Sleeps 2-6",
    "body": "Modern one-bedroom first-floor apartment in the house, owners resident on the ground floor. The ferry to the island beach leaves from 100 m away. Ten minutes walk from the new shopping centre, which has many shops, food hall, cinema and multi-storey car park.\nBooknow: www.townhotel.com\nPhone: 5896 65896",
    "answer": "G",
    "explanation": "Egalari shu uyning birinchi qavatida yashaydi (“owners resident on the ground floor”). G."
   }
  ]
 },
 {
  "n": 38,
  "label": "Exercise 38",
  "title": "Xizmat ko'rsatuvchi bizneslar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "This business helps you to choose a special present for wedding anniversaries or birthdays."
   ],
   [
    "B",
    "This business helps you to exchange your money with low commission fee if you are in a different country."
   ],
   [
    "C",
    "This business helps you to make your special days unforgettable through recording them on a video."
   ],
   [
    "D",
    "If you are planning to go overseas for leisure, this business is right for you."
   ],
   [
    "E",
    "If you are working abroad and planning to send money home, you can approach to this business."
   ],
   [
    "F",
    "If you would like to buy a camera and other equipment you can approach to this business."
   ],
   [
    "G",
    "If you have an accident, this company helps you to protect your rights and even make them pay for you."
   ]
  ],
  "texts": [
   {
    "title": "Special Moments – Professional Family Video",
    "body": "We do professional video of any and all family occasions – birthdays, weddings, get-togethers or any other memorable events.\nProfessional editing with music tracks as required. Delivery in CD or DVD format.\nWe tailor our service to meet clients' unique needs.\n94, West Church Street.\nTel: 541 2548 7121",
    "answer": "C",
    "explanation": "Oilaviy tadbirlarni videoga yozib berishadi (“professional video of … family occasions”). C. Sovg'a tanlash haqida gap yo'q, shuning uchun A emas."
   },
   {
    "title": "HAD AN ACCIDENT?",
    "body": "It is important to exercise your legal rights if you are injured and/or your vehicle is damaged in a road accident that was someone else's fault.\nLet us explain your rights and help you claim compensation!\nAll our lawyers and solicitors are experts in the field.\nFree-phone 1900 356 214",
    "answer": "G",
    "explanation": "Avariyada huquqlaringizni himoya qilib, tovon undirib berishadi (“help you claim compensation”). G."
   },
   {
    "title": "Attn: Overseas Visitors! – Money Matters",
    "body": "Reliable Foreign Exchange.\nRegistered and listed company, operating for 30 years.\nHighest rates, lowest commission.\n35/261 Parade Sq. YKS.\n021 457 845",
    "answer": "B",
    "explanation": "Chet ellik mehmonlar uchun valyuta ayirboshlash, komissiyasi eng past (“lowest commission”). B."
   },
   {
    "title": "Dream Holiday",
    "body": "Your Holiday Experts!\nAny part of the world – Asia, Europe or the USA.\nFrom the flight to the hotel booking – we are here for you!\nGive us a call!\n066 302 125\n99 West Bank Rd, LM23 CWB",
    "answer": "D",
    "explanation": "Chet elda dam olish uchun turistik agentlik (“your holiday experts … any part of the world”). D."
   },
   {
    "title": "Fund Transfers – Worldwide Ltd.",
    "body": "A name you can trust – since 1994\nWe legally transfer funds to any country around the world in minutes.\nVisit one of our many offices and pay the amount you want to transfer with the name and address details of the recipient. It's that simple! We will supply you with a secret number, just let the recipient know the number and ask to collect the funds from our representative.\nCall for more information: 010 122 510",
    "answer": "E",
    "explanation": "Dunyoning istalgan davlatiga pul o'tkazish (“transfer funds to any country”): chet elda ishlab, uyga pul yuboradiganlar uchun (E)."
   }
  ]
 },
 {
  "n": 39,
  "label": "Exercise 39",
  "title": "Shahardagi tadbirlar",
  "intro": "This Week's Attractions in Westley",
  "instr": "",
  "statements": [
   [
    "A",
    "This attraction is closed this week so you cannot visit there."
   ],
   [
    "B",
    "People can no longer buy tickets for this attraction."
   ],
   [
    "C",
    "People don't have to pay for an event at this attraction."
   ],
   [
    "D",
    "This attraction should make people laugh."
   ],
   [
    "E",
    "This attraction is open every day except Sunday."
   ],
   [
    "F",
    "This attraction is not working fully due to ongoing renovations."
   ],
   [
    "G",
    "Only young people will be taking part in this attraction."
   ]
  ],
  "texts": [
   {
    "title": "The Westley Theatre",
    "body": "This week only, come and see The Wild Witches of Wirral, a comedy for all the family. Performances every afternoon (14.00) this week and both afternoons (14.00) and evenings (18.30) this weekend.\nFor more: www.westleytheatre.com or call to 1458 25698",
    "answer": "D",
    "explanation": "Butun oila uchun komediya (“a comedy for all the family”) odamlarni kuldiradi. D."
   },
   {
    "title": "Cinema",
    "body": "Due to the refurbishment of all the theatres except one, the only film to be screened this week is The Avenger, the classic thriller from the 1950's filmed in black and white; showing three times daily (14.30; 17.30; 20.30).\nFor more: www.citycinema.com or call to 2568 25625",
    "answer": "F",
    "explanation": "Bittadan boshqa barcha zallar ta'mirda (“refurbishment of all the theatres except one”), ya'ni kinoteatr to'liq ishlamayapti (F)."
   },
   {
    "title": "Music Festival",
    "body": "With bands from all over the world, the farm will be rocking and rolling all day from 09.00 on Saturday and Sunday. Tickets have all been sold in advance, so don't turn up on spec as you will be disappointed.\nFor more: www.farmfestival.com or call to 1525 87596",
    "answer": "B",
    "explanation": "Chiptalar oldindan sotilib tugagan (“tickets have all been sold”). B."
   },
   {
    "title": "Library",
    "body": "Because of the annual vacation period, the library will be shut this week and the next. Any books due to be returned will have a 2-week extension or borrowers can drop them off through the special book hole in the front door.\nFor more: www.westleylibrary.com or call to 5869 58668",
    "answer": "A",
    "explanation": "Kutubxona shu hafta va keyingi hafta yopiq (“shut this week and the next”). A."
   },
   {
    "title": "Football",
    "body": "On Tuesday, Wednesday and Thursday afternoons and evening, the sports centre summer youth 6-a-side football knockout takes place. Teams from around the area will compete in this popular event. Age groups from: under 10's, under 12's and under 14's. There is a small charge for entry to cover pitch rental and admin.\nFor more: www.westleyfootball.com or call to 2585 41758",
    "answer": "G",
    "explanation": "Faqat 14 yoshgacha bo'lgan yoshlar qatnashadi (“summer youth … under 14's”). G. Kirish pullik, shuning uchun C emas."
   }
  ]
 },
 {
  "n": 40,
  "label": "Exercise 40",
  "title": "Restoran e'lonlari",
  "intro": "Restaurant Advertisements",
  "instr": "",
  "statements": [
   [
    "A",
    "This restaurant is suitable if you are planning an Asian dinner on a Sunday night."
   ],
   [
    "B",
    "This restaurant is suitable if you want to drink overseas wines with your meal."
   ],
   [
    "C",
    "There is not an additional cost if your order is delivered to any area."
   ],
   [
    "D",
    "If you don't eat meat, this restaurant is the best choice for you."
   ],
   [
    "E",
    "You may pay extra to have your order delivered even if your home is very close."
   ],
   [
    "F",
    "This restaurant does not offer alcohol so you have to buy it from nearby."
   ],
   [
    "G",
    "This restaurant may not serve you if you visit there at 4.00 pm."
   ]
  ],
  "texts": [
   {
    "title": "TOM – GONG",
    "body": "Malaysian Restaurant & Hotel\n12.00 noon – 3.00 pm, 6.00 pm – midnight (except Sundays)\n• Recipes from fresh produce\n• Authentic Malaysian chefs\n• fully licensed bar\n• 30 acres of beautiful woodland\n• Open space dining area, children's playground\n• Luxury accommodation with easy parking",
    "answer": "G",
    "explanation": "Soat 15:00 dan 18:00 gacha yopiq, ya'ni 16:00 da xizmat ko'rsatilmaydi (G). Yakshanba kunlari yopiq, shuning uchun A emas."
   },
   {
    "title": "Hill View Restaurant",
    "body": "Top-of-the-hill restaurant. Internationally renowned chefs. Affordable menus. Variety of cuisines. Local and homemade produce used.\nSeparate areas for business lunches.\nSpecial occasions welcome – birthday, anniversary, get-together.\n• LUNCH, DINNER, SNACKS AND LIGHT MEALS.\n• BAR AND DRINK LOUNGE. EXTENSIVE WINE LIST.\n• LOCAL & IMPORTED LIQUOR.\n• MULTIPLE LARGE TV SCREENS – SPORTS, NEWS, MOVIES\n• LARGE CAR PARK.\n• Monday - Saturday",
    "answer": "B",
    "explanation": "Keng vino ro'yxati va import ichimliklar (“extensive wine list … imported liquor”) – chet el vinolari. B."
   },
   {
    "title": "Mexican Lunch",
    "body": "Open weekdays, weekends and public holidays.\nFine foods – enjoy in comfort, at your own Mexican dining table!\nExcellent parking facilities. Liquor shop next door.\nFree home delivery if you live within a 4-mile radius from us – otherwise nominal charge.\nCALL YOUR FRIENDLY HOST: John 01306 748300",
    "answer": "F",
    "explanation": "Spirtli ichimlik do'koni yonida (“liquor shop next door”), ya'ni restoranning o'zida yo'q. F. 4 mil ichida yetkazish bepul, shuning uchun E emas."
   },
   {
    "title": "Ping – King Palace",
    "body": "RESTAURANT & TAKEAWAY\nAPPETISING 'SUPER CLASS' CHINESE DISHES COOKED BY OUR EXPERT CHEF.\nBRAND NEW KITCHEN SET-UP WITH ORIGINAL CLAY OVENS.\nDELIVERY TO ALL AREAS AT NO ADDITIONAL COST.\nPLENTY OF PARKING WITH ONSITE SECURITY GUARD.\nTELEPHONE OR SMS YOUR ORDER TO 021 3625 2351",
    "answer": "C",
    "explanation": "Barcha hududlarga qo'shimcha to'lovsiz yetkazish (“delivery to all areas at no additional cost”). C."
   },
   {
    "title": "ARNOLD'S OWN AMERICAN SPECIALTY",
    "body": "Choice for the Whole Family!\nBirthdays, weddings and other occasions\nModel of traditional Texas restaurants. Texas furniture.\nPizzas, burgers & steaks.\nFish & chips, vegetarian and kids menus.\nOutstanding choice of American beers.\nAmerican movies on large screen.\nEat it here or take it away!\nFor lunch come on in Tuesday - Saturday.\nOpen for dinner, Sunday to Wednesday.",
    "answer": "D",
    "explanation": "Vegetarian menyu bor (“vegetarian … menus”): go'sht yemaydiganlar uchun (D)."
   }
  ]
 },
 {
  "n": 41,
  "label": "Exercise 41",
  "title": "Onlayn repetitorlar",
  "intro": "Online tutors",
  "instr": "",
  "statements": [
   [
    "A",
    "This tutor is suitable for people who always travel and want to learn during travels."
   ],
   [
    "B",
    "This tutor is suitable for people who want to learn Chinese and English at the same time."
   ],
   [
    "C",
    "This tutor can teach English based on your interested areas and prepare for different examinations."
   ],
   [
    "D",
    "This tutor is suitable for people who want to learn two international languages at the same time."
   ],
   [
    "E",
    "This tutor is suitable for people who don't want to follow traditional methods of teaching."
   ],
   [
    "F",
    "People can choose a suitable lesson timetable for themselves."
   ],
   [
    "G",
    "People don't have to pay for learning English if they choose this tutor."
   ]
  ],
  "texts": [
   {
    "title": "Astrid Manyana (Female 46) Chile",
    "body": "Special offer for Spanish speakers: bilingual teaching of English grammar and explanations in Spanish. Basics, oral, written, specific interests [eg: tourism] and preparation for Cambridge and IELTS exams.\nEmail: amanyana@gmail.com\nPhone: 1225 98568",
    "answer": "C",
    "explanation": "Qiziqish sohangizga qarab (“specific interests [eg: tourism]”) ingliz tili va turli imtihonlarga tayyorlash. C. Ispan tili faqat tushuntirish uchun, ikki tilni o'rgatish emas (D emas)."
   },
   {
    "title": "John-Bennett-Smith (Male 27) Canada",
    "body": "I use social networking websites to teach English grammar and conversation over the Internet to about 20 or so students. I am willing to teach (free of charge), privately or to groups.\nEmail: jsmith@gmail.com\nPhone: 5458 69828",
    "answer": "G",
    "explanation": "Bepul o'qitadi (“free of charge”). G."
   },
   {
    "title": "Pamela Arrowsmith (Female 56) Australia",
    "body": "I have taught English for over 30 years, and have developed a range of classroom materials. I offer tutoring assistance in all areas of English. I can arrange trips to Australia for business and professional adults and these can include English classes if desired.\nEmail: parrowsmith@gmail.com\nPhone: 8965 47588",
    "answer": "A",
    "explanation": "Avstraliyaga sayohat uyushtiradi, safar davomida ingliz tili darslari ham bo'ladi (“trips … can include English classes”). A."
   },
   {
    "title": "Jean-Pierre Joya (Male 22) France",
    "body": "I really like to create new kinds of teaching materials and I usually create my own activities instead of using ready materials. I have a BA and a Certificate in Teaching English as a Second Language and I have been teaching for more than 3 years.\nEmail: jjoya@gmail.com\nPhone: 2458 68298",
    "answer": "E",
    "explanation": "Tayyor materiallar o'rniga o'z mashqlarini yaratadi (“create my own activities instead of using ready materials”) – an'anaviy bo'lmagan usul. E."
   },
   {
    "title": "Naoe Nagayo (Female 36) Japan",
    "body": "I have taught English as a Foreign Language for 6 years. I have a TOEFL certificate from the USA and an MA in Applied Linguistics from the University of Birmingham. I can teach English and Japanese simultaneously if desired.\nEmail: nnagayo@gmail.com\nPhone: 5752 69558",
    "answer": "D",
    "explanation": "Ingliz va yapon tilini bir vaqtda o'rgata oladi (“English and Japanese simultaneously”) – ikki xalqaro til. D. Xitoy tili emas, shuning uchun B emas."
   }
  ]
 },
 {
  "n": 42,
  "label": "Exercise 42",
  "title": "Suzish darslari",
  "intro": "Camberwell College Swimming Classes",
  "instr": "",
  "statements": [
   [
    "A",
    "You may join in this class even if you have zero experience in swimming."
   ],
   [
    "B",
    "If you want to lose weight and an older person, this class is suitable for you."
   ],
   [
    "C",
    "You can hire an individual swimming trainer in this class."
   ],
   [
    "D",
    "You are not allowed to join in this class if you are over 5 years old."
   ],
   [
    "E",
    "This class is suitable for people who work during daytime and have a free time in the evenings."
   ],
   [
    "F",
    "You can learn different swimming skills during longer periods of time."
   ],
   [
    "G",
    "You cannot join in this class if you are young or even a teenager."
   ]
  ],
  "texts": [
   {
    "title": "Swim-A-Long",
    "body": "This class is suitable for children aged up to the age of 5 years. This class allows very young children to gain confidence in the water, by way of songs and music.\nWebsite: www.swimalong.com\nPhone: 1252 36565",
    "answer": "D",
    "explanation": "Faqat 5 yoshgacha bolalar uchun (“up to the age of 5 years”). 5 yoshdan katta bo'lsangiz qatnasha olmaysiz (D)."
   },
   {
    "title": "Tadpole to Frog Classes",
    "body": "This series of classes is suitable for children aged 5 upwards. There are six levels in the series. The first level is suitable for non-swimmers and teaches basic techniques and safety, using aids and floats.\nWebsite: www.tadpoleclasses.com\nPhone: 4587 65825",
    "answer": "A",
    "explanation": "Birinchi daraja umuman suza olmaydiganlar uchun (“suitable for non-swimmers”). A."
   },
   {
    "title": "Swim Star",
    "body": "An opportunity for able swimmers to earn the Bronze, Silver and Gold swimming awards. These classes teach children the ability to swim for prolonged periods of time, and teach skills such as diving, turning and different strokes.\nWebsite: www.swimstar.com\nPhone: 5485 98568",
    "answer": "F",
    "explanation": "Uzoq vaqt suzish va turli usullar (“swim for prolonged periods … different strokes”). F."
   },
   {
    "title": "Swim School",
    "body": "The swim school offers classes for adults. There are three levels, beginner, intermediate and advanced. The advanced level offers in-depth advice on stamina, breathing and technique.\nWebsite: www.swimschools.com\nPhone: 2421 65825",
    "answer": "G",
    "explanation": "Faqat kattalar uchun (“classes for adults”): yosh bola yoki o'smir bo'lsangiz qatnasha olmaysiz (G). Kechqurunlik vaqt aytilmagan, shuning uchun E emas."
   },
   {
    "title": "Aqua Health",
    "body": "We offer a range of levels of fitness classes for able swimmers who wish to keep fit, socialize and have fun with music. Aqua-Light offers gentle exercise and is suitable for the elderly.\nWebsite: www.aquahealth.com\nPhone: 2542 58151",
    "answer": "B",
    "explanation": "Fitnes mashg'ulotlari, Aqua-Light esa keksalar uchun (“suitable for the elderly”). B."
   }
  ]
 },
 {
  "n": 43,
  "label": "Exercise 43",
  "title": "Bir kunlik kurslar",
  "intro": "Interesting Day Courses in your Area",
  "instr": "",
  "statements": [
   [
    "A",
    "Participants can decide where the course is held."
   ],
   [
    "B",
    "All the necessary materials are supplied."
   ],
   [
    "C",
    "You pay less for the course if you pay in advance."
   ],
   [
    "D",
    "You may not be allowed to participate in this course if you are under 18."
   ],
   [
    "E",
    "Participants will be able to go where the public are not normally allowed."
   ],
   [
    "F",
    "Participants will master skills on how to take photos on people's happy days."
   ],
   [
    "G",
    "Participants will be supported by the course tutor for up to 6 months after finishing the course."
   ]
  ],
  "texts": [
   {
    "title": "Photographing Wildlife",
    "body": "This workshop includes an introduction in the classroom, two photography sessions with specially arranged access to the zoo enclosures so that you can take natural-looking close-ups of the most exotic species, and the opportunity to review and discuss your images as a group.\nBook now: www.photolessons.com or call to 2525 36585\nPrice: $12 per person",
    "answer": "E",
    "explanation": "Hayvonot bog'i qafaslariga maxsus ruxsat bilan kiriladi (“specially arranged access to the zoo enclosures”), odatda u yerga oddiy tomoshabin kira olmaydi. E."
   },
   {
    "title": "Drawing For Fun",
    "body": "You will learn some basic techniques using soft pencils and charcoal. These and different types of paper are provided. This is a start-up day so people who have already attended courses should not apply.\nBook now: www.drawingforfun.com or call to 1452 65558\nPrice: $15 (get the second ticket for free)",
    "answer": "B",
    "explanation": "Qalam, ko'mir va qog'oz beriladi (“these and different types of paper are provided”). B."
   },
   {
    "title": "Find Your Voice",
    "body": "You may feel you can't sing or you may be an established singer who wants to improve or gain confidence. You will be shown how to sing in tune, how to breathe correctly and how to project your voice.\nBook now: www.findvoice.com or call to 5258 52255\nPrice: $25 (10% discount for early payment)",
    "answer": "C",
    "explanation": "Oldindan to'lasangiz 10% chegirma (“10% discount for early payment”). C."
   },
   {
    "title": "Taking Happy Pictures",
    "body": "The main objective is to introduce you to the skills required to take good photographs of people at special events, such as parties or weddings.\nBook now: www.happypictures.com or call to 5225 65335\nPrice: $8 per lesson (online payment is available)",
    "answer": "F",
    "explanation": "Bayram va to'ylarda odamlarni suratga olishni o'rganasiz (“photographs of people at special events … weddings”). F."
   },
   {
    "title": "The Music Takeaway",
    "body": "Get some friends, family or colleagues together for your own music course in a venue of your choice, which could be your front room, basement or workplace. We send two guitar tutors to lead a one-day session for you in the style of music you prefer, such as rock, country, funk or blues.\nBook now: www.takeawaymusic.com or call to 2515 54582\nPrice: $25 per tutorial (more tutors are available on request)",
    "answer": "A",
    "explanation": "Kurs o'zingiz tanlagan joyda o'tadi (“in a venue of your choice”). A."
   }
  ]
 },
 {
  "n": 44,
  "label": "Exercise 44",
  "title": "Yozgi tadbirlar",
  "intro": "Summer activities in the south-west area",
  "instr": "",
  "statements": [
   [
    "A",
    "This activity may be cancelled if it rains heavily."
   ],
   [
    "B",
    "Musicians will provide the entertainment."
   ],
   [
    "C",
    "Refreshments are included in the price."
   ],
   [
    "D",
    "You are not allowed to leave the activity once it starts."
   ],
   [
    "E",
    "You need to reserve a place to do this activity."
   ],
   [
    "F",
    "This activity is non-refundable once you buy the tickets."
   ],
   [
    "G",
    "This activity will take place on the site of a former business."
   ],
   [
    "H",
    "You may do activities and make conversation around the fire along with singing."
   ]
  ],
  "texts": [
   {
    "title": "",
    "body": "Guided walk in the Poltesco Valley, now a wooded haven for wildlife, but once the centre of a successful stone-polishing industry. Comfortable footwear is recommended. Meet at Poltesco car park.\n£2 per person.",
    "answer": "G",
    "explanation": "Vodiy bir paytlar tosh sayqallash sanoati markazi bo'lgan (“once the centre of a successful stone-polishing industry”), ya'ni sobiq korxona o'rnida. G."
   },
   {
    "title": "",
    "body": "Enjoy a film at the floating cinema, surrounded by the beauty of the Helford River, and from the comfort of your own rowing boat as you tie up at the quay. Weather-dependent.\n£6.50 per adult.",
    "answer": "A",
    "explanation": "“Weather-dependent” – ob-havoga bog'liq, kuchli yomg'irda bekor qilinishi mumkin (A)."
   },
   {
    "title": "",
    "body": "Rare chance to visit the only Cold War early warning bunker in the area, equipped as it was when it was operational. Tours led by ex-members of the military unit which once manned the bunker. Park at Kilbrick Cove and walk to Nare Head. Restricted access via a vertical ladder is unsuitable for some.\nBooking essential.\nDonations welcome.",
    "answer": "E",
    "explanation": "“Booking essential” – joyni oldindan band qilish shart. E."
   },
   {
    "title": "",
    "body": "The chance to camp in a wooded creek on the Fowey River.\nActivities and talks, e.g. trekking preparation, search and rescue, and camping skills.\nSinging around the campfire after dark.\n£15 per person",
    "answer": "H",
    "explanation": "Mashg'ulotlar, suhbatlar va gulxan atrofida qo'shiq (“singing around the campfire”). H."
   },
   {
    "title": "",
    "body": "Jazz picnic in the grounds of Buckland Abbey featuring the Roger Mark jazz band. Bring your own picnic (and umbrella).\n£10 per person",
    "answer": "B",
    "explanation": "Jaz guruhi chiqish qiladi (“featuring the Roger Mark jazz band”): ko'ngil ochishni musiqachilar ta'minlaydi (B). Soyabon olib kelish so'ralgan, ya'ni yomg'irda ham o'tadi (A emas)."
   },
   {
    "title": "",
    "body": "Have a go at 'putting on the style' and come dancing in the large Drawing Room of historic Knightshayes Court.\n£12.50 includes tea and cakes.\nNo high heels, please!",
    "answer": "C",
    "explanation": "Narxga choy va pirojnoe kiradi (“includes tea and cakes”). C."
   }
  ]
 },
 {
  "n": 45,
  "label": "Exercise 45",
  "title": "Ish takliflari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You want to teach your own language to international students."
   ],
   [
    "B",
    "You want to explore the universe and look at the earth from the space."
   ],
   [
    "C",
    "You want to look after older people without paying for a rent."
   ],
   [
    "D",
    "You can apply for this job if you can solve water problems at home or office."
   ],
   [
    "E",
    "You want to become a famous actor or actress."
   ],
   [
    "F",
    "It is possible to work and get paid without leaving home."
   ],
   [
    "G",
    "You have to arrange an interview if you are planning to work at the restaurant."
   ],
   [
    "H",
    "It may not be possible to leave the working area until the work is finished."
   ],
   [
    "I",
    "Drivers may listen to your voice once you start working there."
   ],
   [
    "J",
    "You will be provided with free language courses to improve your language skills."
   ]
  ],
  "texts": [
   {
    "title": "Call Now! – Speedy Plumbers",
    "body": "Do you like to fix sinks? If your answer is “YES”, then we have a job for you! Call 457-9082 and ask for BOB",
    "answer": "D",
    "explanation": "Santexnik ishi: rakovina tuzatish (“fix sinks”) – uy yoki ofisdagi suv muammolari. D."
   },
   {
    "title": "Time is Money",
    "body": "Would you like to work at home, and still make a lot of money in your free time? We can show you how! Just send us a check for $5,504 and we will help you become rich! Hurry!\nP.O Box 1234 Sometown, USA",
    "answer": "F",
    "explanation": "Uydan chiqmasdan ishlab, pul topish (“work at home, and still make a lot of money”). F."
   },
   {
    "title": "Actors & Actress",
    "body": "A Hollywood movie company is now in town filming a new movie. We are looking for anyone who likes to act. Are you interested?\nCall us at this number: 0967638974",
    "answer": "E",
    "explanation": "Gollivud kino kompaniyasiga aktyorlar kerak: mashhur aktyor bo'lish imkoniyati (E)."
   },
   {
    "title": "“Mars Attacks” Space Agency",
    "body": "The Mars Attacks Space Agency (MASA) is looking for two monkeys and one person to become ASTRONAUTS!\nPhone us for an interview.\n807-5192",
    "answer": "B",
    "explanation": "Astronavt bo'lib koinotni o'rganish (B)."
   },
   {
    "title": "WANTED WAITERS & WAITRESSES – ALI'S RESTAURANT",
    "body": "Ali's restaurant is looking for waiters and waitresses to work in its new downtown restaurant on Main St. Call Mr. Ali for an interview.\n378 – 8710",
    "answer": "G",
    "explanation": "Restoranda ishlash uchun suhbatga yozilish kerak (“call Mr. Ali for an interview”). G."
   },
   {
    "title": "ABC language School",
    "body": "We are now hiring language teachers. Teach your own language to foreign students and businessmen. Phone now:\n667-9976 (after 7:30 am)",
    "answer": "A",
    "explanation": "O'z ona tilingizni chet elliklarga o'rgatish (“teach your own language to foreign students”). A."
   },
   {
    "title": "Ring – A – Ding Telephone Company",
    "body": "International telephone operators are needed to work for our Telephone Co. Applicants must be able to speak English and one other language. If your English is poor, we will provide free English lessons. Other benefits include end-of-contract bonus (one month salary), sick-leave, and medical insurance. If you are interested, please send your resume of work experience to the following address within the next two weeks.\nMaple Leaf Rd., No. 9876, 15 F., Toronto Canada",
    "answer": "J",
    "explanation": "Ingliz tilingiz zaif bo'lsa, bepul darslar beriladi (“we will provide free English lessons”). J."
   },
   {
    "title": "IERT International English Radio Talk",
    "body": "is looking for someone who can speak basic English to read city traffic reports for our morning program (4.00-6.00 A.M). Come work with us and learn about the world of radio!\n555 - 7698",
    "answer": "I",
    "explanation": "Radioda tirbandlik xabarlarini o'qiysiz, haydovchilar ovozingizni eshitadi (“read city traffic reports”). I."
   }
  ]
 },
 {
  "n": 46,
  "label": "Exercise 46",
  "title": "Ijaraga uy-joy",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You will not have problems with public transport there."
   ],
   [
    "B",
    "There is a minimum period for renting a house."
   ],
   [
    "C",
    "You do not have to pay for the internet there."
   ],
   [
    "D",
    "You may not be allowed to organize parties or invite friends there."
   ],
   [
    "E",
    "It is not near the city center so it may take longer time to get to the city center."
   ],
   [
    "F",
    "You will not be permitted to live with your lovely animal there."
   ],
   [
    "G",
    "You will be allowed to live with your lovely animal there."
   ],
   [
    "H",
    "You will have to pay monthly payment for parking a car there."
   ],
   [
    "I",
    "The house is provided with a cooling system."
   ],
   [
    "J",
    "You have to pay for rental for several months in advance."
   ]
  ],
  "texts": [
   {
    "title": "Apartment For Rent",
    "body": "1 bed, 1 bath, 1 kitchen. New building, fully furnished. Near 22nd Avenue and Pine St.\n$1000 month (3 months deposit).\n555-4949",
    "answer": "J",
    "explanation": "Uch oylik depozit (“3 months deposit”) – bir necha oylik ijara haqi oldindan to'lanadi. J."
   },
   {
    "title": "RENT IT NOW!",
    "body": "Apartment with small kitchen area, furnished. 15 minutes from college area. Great for students. Free Wi-Fi available. $650 month.\n555-9037",
    "answer": "C",
    "explanation": "Bepul Wi-Fi (“free Wi-Fi”) – internet uchun to'lamaysiz. C."
   },
   {
    "title": "SPACIOUS",
    "body": "4-bedroom apartment, fully furnished with new carpets. Very bright and quiet, conveniently located. Pets OK. $1500 month.\nCall 555-2806",
    "answer": "G",
    "explanation": "“Pets OK” – uy hayvoni bilan yashash mumkin. G."
   },
   {
    "title": "NICE LAKE-VIEW APARTMENT",
    "body": "10 miles from downtown. Fully furnished, 2 bedrooms, 1 kitchen, dining room, with beautiful view. $1100 month.\nFax: 555-9656",
    "answer": "E",
    "explanation": "Shahar markazidan 10 mil uzoqda (“10 miles from downtown”). E."
   },
   {
    "title": "2 BEDROOM APARTMENT",
    "body": "on Northlake Drive. Large living room, air-conditioning, free parking space. Close to shopping, schools. $1250 month.\nTel: 555-7840",
    "answer": "I",
    "explanation": "Konditsioner bor (“air-conditioning”). I. Avtoturargoh bepul, shuning uchun H emas."
   },
   {
    "title": "FURNISHED",
    "body": "new 3-bedroom shared apartment. $950 month. Friendly neighbors, bright, located on Riverdale Rd., near bus routes.\nCall 555-8721 and ask for Larry.",
    "answer": "A",
    "explanation": "Avtobus yo'nalishlariga yaqin (“near bus routes”) – jamoat transporti bilan muammo bo'lmaydi. A."
   },
   {
    "title": "Apartment for Rent",
    "body": "Available June 1st, 2018\nGreat Valley, Rt. 219 – 4 miles south of Ellicottville\nFurnished, great 2 bedroom/2 bath upper (1500 sq.ft.)\nample parking\n$1200 month\nNon-Smokers / No Pets.\nCall for Appointment: 716-432-4943",
    "answer": "F",
    "explanation": "“No Pets” – uy hayvoni bilan yashashga ruxsat yo'q. F."
   },
   {
    "title": "HOUSE for RENT",
    "body": "• 3 bedroom, 2 bathrooms, Heaters\n• $650 a month\n• close to Ramsey Park and schools\n• References required\n• Rental agreement (at least 1 year)\nContact Eager Town Hall: 928-333-4128",
    "answer": "B",
    "explanation": "Ijara shartnomasi kamida 1 yillik (“at least 1 year”). B."
   }
  ]
 },
 {
  "n": 47,
  "label": "Exercise 47",
  "title": "Yarim stavkali ishlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You have to have a special computer skill to work there."
   ],
   [
    "B",
    "You must have both computer and phone communication skills for applying for this job."
   ],
   [
    "C",
    "Clients will pay extra money if you work well."
   ],
   [
    "D",
    "Applicants must have a clear voice and possess a special license."
   ],
   [
    "E",
    "Even if you are young, you may earn much money if you like dogs and walking with them."
   ],
   [
    "F",
    "Working hours are different on weekdays and at weekends."
   ],
   [
    "G",
    "You will be provided with free meals at this job."
   ],
   [
    "H",
    "Applicants are expected to download different songs from the internet."
   ],
   [
    "I",
    "You are expected to work three days a week only at nights."
   ],
   [
    "J",
    "It is the highest paid job and applicants are expected to drive different buses."
   ]
  ],
  "texts": [
   {
    "title": "DJ",
    "body": "18 year old required\nP/T\nHave a Driver's licence\n(Sat&Sun FM 5-8 a.m.)\nWage: 7$ p/h\nMust love music and have a good clear voice\nPlease telephone 020 3456 6651",
    "answer": "D",
    "explanation": "Ovozi aniq bo'lishi va haydovchilik guvohnomasi kerak (“good clear voice … Driver's licence”). D."
   },
   {
    "title": "DOG WALKER",
    "body": "Min 15 years old required\nMale-Female\n6 days a week\nWage: $100/week\nMust like dogs and like exercise\nPlease call 0305678 8879",
    "answer": "E",
    "explanation": "15 yoshdan qabul qilinadi, itlarni yaxshi ko'rish va yurish kerak (“must like dogs and like exercise”). E."
   },
   {
    "title": "SECRETARY",
    "body": "18 years old and over\n20 hours a week (Every day except Wed)\nExp/pref\nWage: 15$ per/hour\nMust know computers (excel, pwpt and word)\nBe able to type 60 words a minute\nHave good phone skills\nApply as soon as possible",
    "answer": "B",
    "explanation": "Kompyuter va telefonda muloqot ko'nikmasi kerak (“must know computers … have good phone skills”). B."
   },
   {
    "title": "Delivery Man",
    "body": "18-year-old required\nMale-Female\n20 hours per week\nWage: 8$ per/hour + tips\nNo experience required, available immediately\nHave your own car/motorbike\nLike to meet people\nPlease phone 020 6689 0973",
    "answer": "C",
    "explanation": "“+ tips” – mijozlar yaxshi ishlasangiz qo'shimcha choychaqa beradi. C."
   },
   {
    "title": "Babysitter",
    "body": "16-18-year-old girl required\nThree nights weekly (Friday, Saturday + other day) (6 – 12 p.m.)\nWage: $9 per hour\nExperience with children necessary\nPlease phone 020 8874 7114",
    "answer": "I",
    "explanation": "Haftada uch kecha, faqat kechqurun (“three nights weekly … 6 – 12 p.m.”). I."
   },
   {
    "title": "Wanted – Pizzeria Vesuvio",
    "body": "Delivery boy\nWeekdays: 7 to 10 p.m.\nSat&Sun: 9 to 12 p.m.\nWage: $8 per hour\nMust have a motorcycle licence\nPlease telephone 01865 512 876",
    "answer": "F",
    "explanation": "Ish kunlari va dam olish kunlari ish soatlari har xil. F."
   },
   {
    "title": "School Bus Driver",
    "body": "St Mary's requires an experienced person to drive and maintain our 12 and 29 seater school buses.\nThis position is a casual, term time.\nWage: $30 per hour.\nAll applicants should possess a current driver's license and must like children.\nPhone: 1252 65254",
    "answer": "J",
    "explanation": "Eng yuqori maosh ($30) va ikki xil (12 va 29 o'rinli) avtobus haydash. J."
   },
   {
    "title": "Chef needed!",
    "body": "Busy restaurant requires reliable chef for daytime service. Simple menu. Start immediately. Some cooking experience is needed for this position.\nWednesday to Sunday 8 a.m to 4 p.m\n$10 per hour plus free meals.\nCall to 1252 58658",
    "answer": "G",
    "explanation": "Bepul ovqat beriladi (“plus free meals”). G."
   }
  ]
 },
 {
  "n": 48,
  "label": "Exercise 48",
  "title": "Ish e'lonlari",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "It is possible to earn even more by working in the evenings."
   ],
   [
    "B",
    "You are expected to work with clients in the evenings."
   ],
   [
    "C",
    "Applicants with a special certificate are hired for looking after young children."
   ],
   [
    "D",
    "Applicants should be able to speak fluently in at least 2 languages."
   ],
   [
    "E",
    "This job is suitable for older people with good communication skills."
   ],
   [
    "F",
    "A famous fast food company is inviting young males and females to work with them."
   ],
   [
    "G",
    "A degree in particular areas is required to apply for this job."
   ],
   [
    "H",
    "You are not allowed to use a mobile phone during working hours."
   ],
   [
    "I",
    "There is a requirement on minimum words typed per minute on a computer."
   ],
   [
    "J",
    "You must have a very good computer skill to work there."
   ]
  ],
  "texts": [
   {
    "title": "Part Time work available",
    "body": "We are looking for retired adults who would like to work part time at the weekend.\nResponsibilities include answering the telephone and giving customers information.",
    "answer": "E",
    "explanation": "Nafaqaga chiqqan kattalar uchun, telefonga javob berish va ma'lumot berish (“retired adults … answering the telephone”). E."
   },
   {
    "title": "TEACHER NEEDED",
    "body": "Tommy's Kindergarten needs 2 teachers/trainers to help with classes 9 a.m. to 3 p.m.\nApplicants should have appropriate licenses.\nFor more information visit Tommy's Kindergarten at 56 Leicester Square",
    "answer": "C",
    "explanation": "Bolalar bog'chasi, tegishli litsenziya kerak (“appropriate licenses”). C."
   },
   {
    "title": "Computer trained secretaries",
    "body": "Do you have experience working with computers?\nWould you like a full time position working in an exciting new company?\nIf your answer is yes, give us a call at 366-7656",
    "answer": "J",
    "explanation": "Kompyuterda ishlash tajribasi kerak. J."
   },
   {
    "title": "Are you looking for a part time job?",
    "body": "We require 3 part time shop assistants to work during the evening.\nNo experience required.\nApplicants should be between 18 and 26.\nCall 366-9421 for more information.",
    "answer": "B",
    "explanation": "Kechqurun do'konda xaridorlar bilan ishlash (“shop assistants to work during the evening”). B."
   },
   {
    "title": "UNIVERSITY POSITIONS OPEN",
    "body": "The University of Cumberland is looking for 4 teaching assistants to help with homework correction.\nApplicants should have a degree in one of the following: Political Science, Religion, Economics or History.\nPlease contact the University of Cumberland for more information.",
    "answer": "G",
    "explanation": "Ma'lum sohalarda diplom talab qilinadi (“a degree in one of the following”). G."
   },
   {
    "title": "NEEDED",
    "body": "Full time a secretary position available.\nApplicants should have at least 2 years experience and be able to type 60 words a minute.\nNo computer skills required.\nApply in person at United Business Ltd, 17 Browning Street",
    "answer": "I",
    "explanation": "Daqiqasiga 60 so'z yozish talab qilinadi (“type 60 words a minute”). I. Kompyuter ko'nikmasi kerak emas, shuning uchun J emas."
   },
   {
    "title": "McDonald's restaurant",
    "body": "We need young boys and girls to work with us as\n• Counterpersons\n• Cooks\n• Waiters or waitresses\nPlease write to Mr Green\nMcDonald's, Bank Street, Liverpool",
    "answer": "F",
    "explanation": "Mashhur fast-food kompaniyasi yigit-qizlarni ishga taklif qiladi. F."
   },
   {
    "title": "VACANCY FOR BABYSITTERS",
    "body": "We are looking for students who can babysit on Friday and Saturday evenings\nYou must be caring, responsible and mature\n$5 an hour, $8 after midnight\nWrite to Mrs Wilson, Nurses@work, Willow Street, London",
    "answer": "A",
    "explanation": "Yarim tundan keyin soatiga $8 (“$8 after midnight”) – kechqurun ko'proq ishlasangiz, ko'proq topasiz (A)."
   }
  ]
 },
 {
  "n": 49,
  "label": "Exercise 49",
  "title": "Dam olish va sayohat",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "A driving holiday in the USA would be cheaper with this company."
   ],
   [
    "B",
    "You would like to rent a holiday home in France."
   ],
   [
    "C",
    "A good holiday for your children."
   ],
   [
    "D",
    "Take the children on your next business trip - there is no charge."
   ],
   [
    "E",
    "Cheap flights from Bristol for holidays in France."
   ],
   [
    "F",
    "You can get two flight tickets for the price of one."
   ],
   [
    "G",
    "These holidays have a travel guide to show you places of interest."
   ],
   [
    "H",
    "You are flying on holiday from London - a good way to get to the airport."
   ],
   [
    "I",
    "Touring by car in Ireland."
   ],
   [
    "J",
    "This company offers cheap car rental in Europe."
   ]
  ],
  "texts": [
   {
    "title": "Escorted Holidays 2005",
    "body": "Escorted holidays throughout Europe and the World – plus special interest breaks and river cruises.\nCall: Page&Moy 08700 106 434\nwww.pagemoy.com/dtel",
    "answer": "G",
    "explanation": "“Escorted holidays” – sizni gid kuzatib boradi va qiziqarli joylarni ko'rsatadi (G)."
   },
   {
    "title": "Wickedly",
    "body": "WONDERFUL kids summer camping\nTreat your child to camp this summer ...\nBeach, Sailing, Camping, Horse Riding, Making new Friends, Boosting Self Confidence, Many more exciting activities – Children aged 8 to 13\nHave the time of their lives on the South Coast\nwww.WickedlyWonderful.com",
    "answer": "C",
    "explanation": "Bolalar uchun yozgi lager (“kids summer camping”). C."
   },
   {
    "title": "Plane obvious",
    "body": "Need to get to the airport\nUse a coach – Direct to Heathrow, Gatwick, Stansted\nBook on line at: www.nxairport.com\nNational Express Airport",
    "answer": "H",
    "explanation": "London aeroportlariga (Heathrow, Gatwick, Stansted) avtobusda yetib borish. H."
   },
   {
    "title": "DUBAI from $439 and children stay free",
    "body": "5* Beach Resort 3nts $439 per person – 2 children stay free\n5* Beach Hotel $519 per person – 3 children stay free\nValid only 12 June – 31 August 2005\nTo Book Call: 0870 128 6000\nEmirates Tours UK",
    "answer": "D",
    "explanation": "Bolalar bepul yashaydi (“children stay free”). Safarga bolalarni olib ketsangiz, ular uchun to'lov yo'q (D)."
   },
   {
    "title": "JUNE BOOKING SPECIAL",
    "body": "Free fuel in the USA & CANADA\nBook an Alamo car in June – and we'll give you a tank of fuel to send you on your way!\nAlamo.co.uk/fuel\nOr call us on: 0870 400 4593",
    "answer": "A",
    "explanation": "AQShda mashina ijarasi bilan bepul yoqilg'i: mashinadagi sayohat arzonroq tushadi (A)."
   },
   {
    "title": "IRELAND DIRECT",
    "body": "Save over 400 miles driving\nFrom $25 per person each way\nBased on: car plus 4 adults\nSWANSEA CORK FERRIES 01792 456116\nwww.swanseacorkferries.com",
    "answer": "I",
    "explanation": "Mashina bilan Irlandiyaga parom (“car plus 4 adults … Cork”). I."
   },
   {
    "title": "FRANCE",
    "body": "book your holiday home DIRECT\nMake big savings by booking your holiday home in France direct with the owner\nOVER 800 PROPERTIES\nPlus savings on cross channel travel\nFor your free brochure Call: 0870 908 1273\nOwners in France\nwww.ownersinfrance.",
    "answer": "B",
    "explanation": "Fransiyada dam olish uyini ijaraga olish (“holiday home in France”). B."
   },
   {
    "title": "Flybe.com",
    "body": "British European – The backbone of UK travel\nBelfast City-Edinburgh from $12\nBristol – Paris, Bordeaux from $55\nAll in Prices for period: 1/7 – 30/9/2004\nBudget tickets from $12 one way\nBook before 17th June\nFLY BRITISH EUROPEAN",
    "answer": "E",
    "explanation": "Bristoldan Fransiyaga (Parij, Bordo) arzon reyslar. E."
   }
  ]
 },
 {
  "n": 50,
  "label": "Exercise 50",
  "title": "Mahalliy xizmatlar",
  "intro": "",
  "instr": "",
  "statements": [
   [
    "A",
    "You are travelling abroad and looking for somewhere to leave your pets for a week."
   ],
   [
    "B",
    "You want to learn how to sing properly around family and friends."
   ],
   [
    "C",
    "You want to learn a foreign language to be able to speak with locals while travelling."
   ],
   [
    "D",
    "The air-conditioner at your home is not working properly and you want to fix it."
   ],
   [
    "E",
    "You want to upgrade the operational system on your computer."
   ],
   [
    "F",
    "You are planning to enlarge the living room by removing a wall of a small bedroom."
   ],
   [
    "G",
    "Applicants may find another job for working on weekdays."
   ],
   [
    "H",
    "Applicants are provided with a free lunch."
   ],
   [
    "I",
    "You have got no enough time for looking after your pets and thinking about hiring a person to work at home."
   ],
   [
    "J",
    "You don't have to make an arrangement in advance for using this service."
   ]
  ],
  "texts": [
   {
    "title": "All Computer Services",
    "body": "“No Challenge is too Big: No problem is too small”\nTim Ratliff, ACS\n(208) 315 – 3745",
    "answer": "E",
    "explanation": "Kompyuterga oid har qanday muammo hal qilinadi (“no problem is too small”), operatsion tizimni yangilash ham shunga kiradi (E)."
   },
   {
    "title": "A1 Heating & Air Conditioning",
    "body": "Local – Reliable – Affordable\nBe warm. Be cool. Be comfy!\n208 634-1586",
    "answer": "D",
    "explanation": "Isitish va konditsioner xizmati (“Heating & Air Conditioning”). D."
   },
   {
    "title": "Happy Dog Inn – Dog Boarding",
    "body": "Daily * Weekly * Monthly\nNew Meadows\n347 – 2845 469-9598",
    "answer": "A",
    "explanation": "Itlarni bir kun, hafta yoki oyga qoldirish mumkin (“dog boarding … weekly”). A."
   },
   {
    "title": "Matt's Handyman Service",
    "body": "We Can Help Erase Your “Honey Do” List!\n• Home Improvements\n• Remodeling & Repair\n• Snow Removal – Patio – Decks – Walkways\nAffordable Prices and 28 Years Experience\nCall Matt: 315-4432",
    "answer": "F",
    "explanation": "Uyni qayta qurish (“remodeling”) – devorni olib, xonani kengaytirish. F."
   },
   {
    "title": "Self-Serve Pet Wash – Mc Call Pet Spa",
    "body": "No appointment necessary\nWednesday, Thursday, Friday 3-7 p.m.\nSaturday 1 – 5:30 p.m.\n102 N. 3rd Street, Next to Rudy's Gym\nCall (541) 786 – 2382",
    "answer": "J",
    "explanation": "“No appointment necessary” – oldindan yozilish shart emas. J."
   },
   {
    "title": "Pet Sitter",
    "body": "Going on vacation? Away for Weekend?\nI am 14 years old and have experience caring for cats and birds. Your home or mine.\nExcellent References.\nCall Sally Trent.\nPhone: 999 – 8250",
    "answer": "I",
    "explanation": "Uy hayvonlariga sizning uyingizda ham qarashi mumkin (“your home or mine”). I."
   },
   {
    "title": "Singing Lessons For All Ages!",
    "body": "Be popular at parties!\nFulfill your dreams!\n20 years coaching experience.\nMadame Rinaud... Coach to the Stars.\n555 – 5331.",
    "answer": "B",
    "explanation": "Qo'shiq aytishni o'rganib, bazmlarda e'tiborda bo'lasiz (“be popular at parties”). B."
   },
   {
    "title": "Cook Needed Immediately!",
    "body": "Hank's Fish & Chips\nPart-Time position cooking and serving take-out food orders.\nExperience preferred.\n$22/hour – plus tips\nWeekends only\nSend resume to: HankFish@yahoo.com",
    "answer": "G",
    "explanation": "Faqat dam olish kunlari ishlanadi (“weekends only”), ish kunlari boshqa ish topish mumkin (G)."
   }
  ]
 },
 {
  "n": 51,
  "label": "Exercise 51",
  "title": "Barlar va restoranlar",
  "intro": "Bars and Restaurants",
  "instr": "",
  "statements": [
   [
    "A",
    "This place is perfect for people who enjoy drinking wine outside at midnights."
   ],
   [
    "B",
    "Visitors may bring their alcohol or other drinks with themselves."
   ],
   [
    "C",
    "You won't have any problem with parking due its big size."
   ],
   [
    "D",
    "This restaurant is perfect for people who usually suffer from the shortage of time."
   ],
   [
    "E",
    "Guests should follow the schedule offered by the bar due to its limited space but high popularity."
   ],
   [
    "F",
    "You can enjoy the view of city along with eating seafood in this restaurant."
   ],
   [
    "G",
    "This restaurant may not serve clients during weekends."
   ],
   [
    "H",
    "It may cost a lot to have a dinner there because of the city center location."
   ],
   [
    "I",
    "Visitors who want to leave the city by train may choose this place unless they smoke."
   ],
   [
    "J",
    "If you don't eat meat and prefer smoking while sitting, this place is right for you."
   ]
  ],
  "texts": [
   {
    "title": "BAR 4U",
    "body": "You can watch the world go by through the big windows at the front of this busy city cafe. The menu includes fish and seafood, and you can sit there if you like, even if you're only having a glass of fruit juice.",
    "answer": "F",
    "explanation": "Katta derazalardan shaharni tomosha qilib, baliq va dengiz mahsulotlari yeyish mumkin. F."
   },
   {
    "title": "ALL THE RAJ",
    "body": "This city centre Indian restaurant, taking a comfortable but rather smoky place, offers some traditional vegetarian dishes as well as its well-known chicken and lamb food. Prices are not expensive, and there is a small wine list.",
    "answer": "J",
    "explanation": "Vegetarian taomlar bor va joy ancha tutunli (“rather smoky”), ya'ni chekish mumkin. J. Shahar markazida bo'lsa ham narxlar qimmat emas, shuning uchun H emas."
   },
   {
    "title": "THE HARVEST HOME",
    "body": "Just out the busy Cheltenham road, in the pretty village of Wibbly, this restaurant with its large car park is popular with passing motorists. The restaurant serves good simple food in a friendly and relaxed atmosphere.",
    "answer": "C",
    "explanation": "Katta avtoturargoh bor (“large car park”). C."
   },
   {
    "title": "THE OASIS",
    "body": "Take plenty of money with you if you go to this famous restaurant in the centre of the city. The owner changed six months ago, but people say that the new owner, who trained as a chef in Paris, is just as good.",
    "answer": "H",
    "explanation": "Shahar markazidagi mashhur restoran, ko'p pul olib boring (“take plenty of money”). H."
   },
   {
    "title": "LOCH TEEN",
    "body": "New in town, located in a basement room, this speciality seafood bar is already quite popular. Because of the limited space, they have to have two timetables – early evening (6.30) and later (8.30) – and you might feel it's a bit rushed.",
    "answer": "E",
    "explanation": "Joy kam va mashhur, shuning uchun ikki xil vaqt jadvali bor (“two timetables”). E."
   },
   {
    "title": "THE TERRACE WINE BAR",
    "body": "You can sit outside and eat under the stars here, where they serve food from midday till 3 am. The food is simple – crepes, pasta, burger – and good wine sorts, they serve beers from over 50 countries.",
    "answer": "A",
    "explanation": "Ochiq havoda, tungi 3 gacha yaxshi vino ichish mumkin (“sit outside … till 3 am … good wine”). A."
   },
   {
    "title": "DOWN TO EARTH",
    "body": "This bright, white restaurant (no smoking allowed) is situated next to the central train station. It's vegetables only here with a whole new world of delicious and imaginative dishes.",
    "answer": "I",
    "explanation": "Markaziy vokzal yonida, chekish mumkin emas (“no smoking … next to the central train station”). I. Chekish taqiqlangani uchun J emas."
   },
   {
    "title": "JOE'S DINER",
    "body": "Open early and late, this snack-bar is popular with both market workers and city business people. You'll only get quick and simple meals, but they'll be well cooked and quickly served. No alcohol licence.",
    "answer": "D",
    "explanation": "Tez tayyorlanib, tez beriladigan taomlar (“quickly served”): vaqti kam odamlar uchun (D)."
   }
  ]
 },
 {
  "n": 52,
  "label": "Exercise 52",
  "title": "Shahar bog'lari",
  "intro": "Parks in and around the city",
  "instr": "",
  "statements": [
   [
    "A",
    "People may have a picnic with their family in this park along with hiring a boat on the lake."
   ],
   [
    "B",
    "People who enjoy walking and riding a horse can visit this park."
   ],
   [
    "C",
    "School children can enjoy the live performance at the theatre and enjoy playing team games."
   ],
   [
    "D",
    "Friends can go there in order to escape from city noise and enjoy playing different games like football."
   ],
   [
    "E",
    "The animals living in this park are actually difficult to observe in other places due to their extinction."
   ],
   [
    "F",
    "People who enjoy riding a bike can visit this park regardless of their age."
   ],
   [
    "G",
    "People can enjoy using attractions which were brought from Europe."
   ],
   [
    "H",
    "This park is situated in the city center and was originally owned by a writer."
   ],
   [
    "I",
    "This park offers free snacks bar for every visitor."
   ],
   [
    "J",
    "People living in the city center can visit this park for watching the people who are interested in arts."
   ]
  ],
  "texts": [
   {
    "title": "HADLEY PARK",
    "body": "This park is in the peaceful village of Cranford, 20 km outside the city. The park has large green spaces for football and there is also an area of woodland, a boating lake, fish ponds and a variety of local wildlife. The public car park is free.",
    "answer": "D",
    "explanation": "Shahardan 20 km tashqarida, tinch qishloqda, futbol uchun maydonlar bor. D."
   },
   {
    "title": "HIGHDOWN PARK",
    "body": "The largest and most popular open space in the city. Highdown has many paths for keen walkers, as well as horse-riding and golf. The much-visited 19th century glasshouses contain an interesting exhibition about birds from around the world.",
    "answer": "B",
    "explanation": "Piyoda yurish yo'laklari va otda sayr (“paths for keen walkers … horse-riding”). B."
   },
   {
    "title": "BROCK PARK",
    "body": "A beautiful park on the edge of the city, Brock Park attracts huge crowds. The open-air theatre has a programme of plays suitable for school groups. There is a well-used basketball court and baseball field, a children's playground and a café. Climb Harry's Hill to admire the beautiful fields and forests beyond the city.",
    "answer": "C",
    "explanation": "Maktab guruhlari uchun ochiq teatr va jamoaviy o'yinlar (basketbol, beysbol). C."
   },
   {
    "title": "LILAC PARK AND HOUSE",
    "body": "This busy city-centre park has a long history dating back to the 1700s, when it belonged to the writer Thomas Crane. The house is open to the public and a guided visit can also include a walk around the famous rose gardens, finishing at the popular Butterfly Café.",
    "answer": "H",
    "explanation": "Shahar markazida, bir paytlar yozuvchi Tomas Kreynga tegishli bo'lgan (“belonged to the writer”). H."
   },
   {
    "title": "BOSCAWEN PARK",
    "body": "This small and peaceful park offers guided tours, given by the knowledgeable Environment Officers, and evening visitors to the park may be lucky enough to see rare frogs and bats. It is situated on the River Elton and can be reached in about 30 minutes from the city centre by river taxi. There is a snack bar and gift shop.",
    "answer": "E",
    "explanation": "Noyob qurbaqa va ko'rshapalaklarni ko'rish mumkin (“rare frogs and bats”). E. Snek-bar bor, lekin bepul deyilmagan (I emas)."
   },
   {
    "title": "EAST BANK PARK",
    "body": "This is a tiny, little-known park in the heart of the city, with gardens filled with sculptures, trees and flowers. It makes a perfect resting place, popular with local artists, and is within minutes of the theatre and entertainment district.",
    "answer": "J",
    "explanation": "Shahar markazida, mahalliy rassomlar sevgan joy (“popular with local artists”). J."
   },
   {
    "title": "VICTORIA PARK",
    "body": "This quiet park, on the edge of the city and easy to visit by public transport, has boats for hire on the lake, a skateboard park, basketball and tennis courts and a picnic area. Often seen in postcard views of the city, Victoria Park contains one of the oldest windmills in the country – the museum should not be missed.",
    "answer": "A",
    "explanation": "Ko'lda qayiq ijarasi va piknik maydoni (“boats for hire … picnic area”). A."
   },
   {
    "title": "ELMWOOD PARK",
    "body": "At Elmwood Park, there are walks on well-made paths and cycle rides for all abilities. Elmwood is just inside the city limit and has an area of quiet woodland, which is home to deer and other animals. The visitor centre, numerous display boards and a fun quiz make this a positive learning experience for all ages.",
    "answer": "F",
    "explanation": "Har qanday darajadagilar uchun velosiped sayri (“cycle rides for all abilities … all ages”). F."
   }
  ]
 },
 {
  "n": 53,
  "label": "Exercise 53",
  "title": "Festival tomoshalari",
  "intro": "",
  "instr": "You want to see some live entertainment. There are descriptions of eight festival performances. Decide which one is the most suitable for you.",
  "statements": [
   [
    "A",
    "You enjoy plays about real people who led interesting lives."
   ],
   [
    "B",
    "You want to listen to as much music from the past as possible, and particularly like listening to people singing."
   ],
   [
    "C",
    "You are planning to start a drama club for the children at your school. You would like to see some children acting if possible."
   ],
   [
    "D",
    "You are interested in comedies and winning prizes by participating in various shows."
   ],
   [
    "E",
    "You want to go out for the whole day with your friends. They all enjoy listening to pop music."
   ],
   [
    "F",
    "You love listening to music from the past in natural environment."
   ],
   [
    "G",
    "You want to go to the concert alone."
   ],
   [
    "H",
    "You love traditional dances and watching them in open air."
   ],
   [
    "I",
    "You would like to buy a ticket for the show online."
   ],
   [
    "J",
    "He would like to see people performing dances from as many other parts of the world as possible to give him some new ideas."
   ]
  ],
  "texts": [
   {
    "title": "International Youth Celebrations",
    "body": "Local youth groups, together with students from various countries including Spain, Finland, Austria and Estonia, are each performing three dance pieces. Then they will join together in a play about international friendship. The evening will finish with the singing of songs from different countries.",
    "answer": "J",
    "explanation": "Turli mamlakatlar yoshlari raqs ijro etadi: dunyoning ko'p joylaridan raqslarni ko'rish (J)."
   },
   {
    "title": "River Festival",
    "body": "A day of fun on the river bank, with a Chinese theme. Street entertainers and pop musicians perform during the day, followed by fireworks in the evening. Something for everybody to watch, both children and adults.",
    "answer": "E",
    "explanation": "Kun bo'yi (“a day of fun”) pop musiqachilar chiqadi. Do'stlar bilan butun kun, pop musiqa (E)."
   },
   {
    "title": "Songs of Summer",
    "body": "The Hunton Consort consists of eight voices singing music from hundreds of years ago right up to modern times. The group will perform songs, old and new, all of which are about the summer.",
    "answer": "B",
    "explanation": "Yuzlab yillik qo'shiqlarni sakkiz ovoz kuylaydi: o'tmish musiqasi va qo'shiq. B."
   },
   {
    "title": "Music in the Open Air",
    "body": "Well-known nationally for their traditional dance music, Jimmy Locke and his band play throughout the day in the open air on the Promenade Bandstand – if the weather allows!",
    "answer": "F",
    "explanation": "An'anaviy musiqa ochiq havoda (“traditional dance music … in the open air”). Kitob kaliti: F."
   },
   {
    "title": "Life Flows Between Us",
    "body": "Kent Arts and Libraries present the first performance of a new dance group called the Street Dancing Company. The group will perform dances from the past on several of the bridges in the town.",
    "answer": "H",
    "explanation": "O'tmish raqslari ochiq havoda, ko'priklarda ijro etiladi (“dances from the past on several of the bridges”). H."
   },
   {
    "title": "A Star May Be Born",
    "body": "Toni Arthur produces plays with seven- to eleven-year-olds, performed at the weekends for parents, family, and friends. The plays come from children's stories, and encouragement from the audience is always very welcome.",
    "answer": "C",
    "explanation": "7–11 yoshli bolalar o'ynaydigan spektakllar (“plays with seven- to eleven-year-olds”). C."
   },
   {
    "title": "Vita and Harold",
    "body": "The Image Theatre Company dramatizes the love-letters of Vita Sackville-West and Harold Nicholson. The play is about the couple's lives and their most unusual marriage. Unsuitable for children.",
    "answer": "A",
    "explanation": "Haqiqiy insonlar hayoti haqidagi spektakl (“about the couple's lives”). A."
   },
   {
    "title": "Variety Music Evening",
    "body": "A great evening with the latest pop songs, and comedy and dancing from several great and unusual performers. Members of the audience will be invited to join in and will have the chance of winning tickets to a theatre show.",
    "answer": "D",
    "explanation": "Komediya va tomoshabinlar ishtirok etib, sovrin yutishi mumkin (“chance of winning tickets”). D."
   }
  ]
 },
 {
  "n": 54,
  "label": "Exercise 54",
  "title": "Kafe va restoran tanlash",
  "intro": "",
  "instr": "You want to choose a place to eat or drink. There are eight restaurants and cafes. Decide which restaurant is the most suitable for you.",
  "statements": [
   [
    "A",
    "You and your daughter are going shopping at ten o'clock. You will have coffee before starting shopping."
   ],
   [
    "B",
    "You want to have a meal at a restaurant suitable for children. You'd like to sit outside."
   ],
   [
    "C",
    "You and your friend want to have a snack. Your friend is keen to try English food and you don't eat meat."
   ],
   [
    "D",
    "You would like to have dinner with your family in an excellent restaurant in the countryside."
   ],
   [
    "E",
    "You would like to have fish food."
   ],
   [
    "F",
    "You and your friends want to go for a late-night meal, but you don't have much money and don't like English meals."
   ],
   [
    "G",
    "You want to go out with your classmate to talk with. The café must have snacks and Italian coffee."
   ],
   [
    "H",
    "You want to eat vegetarian food prepared at home."
   ],
   [
    "I",
    "You have invited a Russian businessman to dinner. You want a restaurant in the city center and the food must be excellent."
   ],
   [
    "J",
    "You and your friends would like to watch a football match and have a beer."
   ]
  ],
  "texts": [
   {
    "title": "The White Horse Inn",
    "body": "has a top-class restaurant. It is in an attractive village seven kilometers from town. Head chef Paul Grant has won prizes for his traditional English food which is served in a comfortable setting. Large garden with children's play area.\nOpen 10.00-14.00, 19.00-23.00.",
    "answer": "D",
    "explanation": "Qishloqdagi yuqori darajali restoran (“top-class restaurant … attractive village”). D."
   },
   {
    "title": "The Silver Palace Chinese Restaurant",
    "body": "serves food from many parts of China at low prices. The atmosphere is warm and friendly, but it can get noisy. Reasonable service. Near the city centre, with a car park.\nOpen 12.00-14.00, 17.30-02.00.",
    "answer": "F",
    "explanation": "Arzon, ingliz taomi emas (xitoy oshxonasi), tungi 2 gacha ochiq. F."
   },
   {
    "title": "Dandelions",
    "body": "is a small self-service vegetarian cafe. Serves home-cooked food including soup, pizzas, salads, and wonderful desserts. Popular with office workers at lunchtime. Good value for money.\nOpen 11.30-14.30 only.",
    "answer": "H",
    "explanation": "Uyda tayyorlangan (“home-cooked”) vegetarian taomlar. H."
   },
   {
    "title": "The Tiny Tea Room",
    "body": "serves a selection of tea, coffee and good home-made cakes and pastries. Perfect for a refreshing rest and there is a games room for children. Gets very crowded at lunchtime.\nOpen 09.00-16.30.",
    "answer": "A",
    "explanation": "Soat 9 da ochiladi va qahva bor: soat 10 dagi xariddan oldin qahva ichish mumkin (A)."
   },
   {
    "title": "King's Restaurant",
    "body": "is a good choice for quick, inexpensive meals. This restaurant serves a wide range of English food. There is also an interesting vegetarian menu which includes a variety of hot dishes, and salads.\nOpen 11.00-22.00.",
    "answer": "C",
    "explanation": "Ingliz taomlari va vegetarian menyu ham bor: do'stingiz ingliz taomini, siz esa go'shtsiz ovqat yeysiz (C)."
   },
   {
    "title": "Bernini's",
    "body": "is a high-quality Italian restaurant. It is internationally recognized for its first-class food and service. Bernini's is close to the city center and parking is available.\nOpen evenings only 18.00-23.00.",
    "answer": "I",
    "explanation": "Shahar markaziga yaqin, birinchi darajali taom (“first-class food”). I."
   },
   {
    "title": "The Tower Coffee Bar",
    "body": "serves light snacks, soft drinks and excellent Italian coffee. Its friendly atmosphere is popular with students and young people, and it is a good meeting place for friends. Can be rather noisy!\nOpen midday to midnight.",
    "answer": "G",
    "explanation": "Yengil gazaklar va italyan qahvasi, do'stlar uchrashadigan joy. G."
   },
   {
    "title": "Gordon's",
    "body": "is a restaurant in an attractive part of town and has tables in the garden for sunny days. It's known for pizza, fried chicken and hamburgers. Gordon's has special prices for children's meals. Excellent food but service can be slow.\nOpen 12.00-20.00.",
    "answer": "B",
    "explanation": "Bog'da stollar bor (ochiq havoda) va bolalar taomi uchun maxsus narx. B."
   }
  ]
 },
 {
  "n": 55,
  "label": "Exercise 55",
  "title": "Sidneydagi diqqatga sazovor joylar",
  "intro": "",
  "instr": "You are on holiday in Sydney, Australia. There are descriptions of eight places to visit. Decide which place would be the most suitable for you.",
  "statements": [
   [
    "A",
    "You want to look at modern inventions and scientific discoveries. Your 12-year-old daughter goes with you."
   ],
   [
    "B",
    "You want to see some of the animals that Australia is famous for."
   ],
   [
    "C",
    "You are interested in modern buildings, and like to know as much as possible about them."
   ],
   [
    "D",
    "You are crazy about shopping and would like to go to a place where you can visit various kinds of shops."
   ],
   [
    "E",
    "You would like to find out as much as possible about Australian history and inhabitants."
   ],
   [
    "F",
    "You would like to know about railway systems in Australia."
   ],
   [
    "G",
    "You would like to find out more about Australian marine life and birds."
   ],
   [
    "H",
    "You want to buy gifts for your father who is interested in arts."
   ],
   [
    "I",
    "You want to visit a cactus museum."
   ],
   [
    "J",
    "You are a fan of books and movies and would like to see more about them."
   ]
  ],
  "texts": [
   {
    "title": "The Harbourside Development",
    "body": "is one of the world's most exciting places to shop. It's situated right on the edge of Sydney Harbour, and there are over 200 shops, selling everything from home-made sweets to the very latest in fashion; from Australian souvenirs to Swiss watches and Japanese cameras.",
    "answer": "D",
    "explanation": "200 dan ortiq turli do'kon (“over 200 shops, selling everything”). D."
   },
   {
    "title": "The Australian Wildlife Park",
    "body": "has been specially built to give people an extra close look at Australia's native animals. Have your photo taken with a kangaroo, touch and feed koala bears. There are talks every afternoon about these animals, which are only found in this part of the world. Excellent souvenir shop.",
    "answer": "B",
    "explanation": "Kenguru va koala – Avstraliya mashhur bo'lgan hayvonlar. B."
   },
   {
    "title": "The Australian Museum",
    "body": "A visit to the Australian Museum is like an adventure across Australia. There are exhibitions on the people and their way of life, and the whole continent. Talks and guided tours help to make your visit unforgettable. There's also a café and a good bookshop, selling excellent maps.",
    "answer": "E",
    "explanation": "Odamlar va ularning turmush tarzi haqida ko'rgazmalar: Avstraliya tarixi va aholisi (E)."
   },
   {
    "title": "The Opera House",
    "body": "This is a 20th century masterpiece of engineering and offers top international performances. A guided tour lasts two hours and is available any day between 9 am and 4 pm. Special 'backstage' tours are available on Sundays.",
    "answer": "C",
    "explanation": "XX asr muhandislik durdonasi, ikki soatlik ekskursiya: zamonaviy bino haqida ko'p bilish mumkin (C)."
   },
   {
    "title": "The State Library",
    "body": "is in the oldest part of Sydney. There are free film screenings, guided tours and educational activities. It has regular exhibitions of books on science and technology. Learn to use a micro-computer, watch a video, or look through the Library Shop.",
    "answer": "J",
    "explanation": "Kitoblar va bepul film namoyishlari (“free film screenings … exhibitions of books”). J."
   },
   {
    "title": "The Rocks",
    "body": "Surrounded by the modern city, the Rocks is the oldest part of Sydney and full of history. On weekends there are outdoor concerts and street theatre to enjoy. Every Saturday and Sunday there is a market where it is possible to buy the works of local artists.",
    "answer": "H",
    "explanation": "Mahalliy rassomlar asarlarini sotib olish mumkin – san'atga qiziqadigan otaga sovg'a (H)."
   },
   {
    "title": "The Powerhouse Museum",
    "body": "One of the world's leading museums, the Powerhouse Museum has over 25 exhibitions on the latest developments in science and technology. Everything from a NASA space station to the first car ever built can be found at this museum. There are also many activities for children here.",
    "answer": "A",
    "explanation": "Fan va texnika yangiliklari, bolalar uchun mashg'ulotlar ham bor. A."
   },
   {
    "title": "Taronga Zoo",
    "body": "has Australia's finest collection of rainforest birds and a sea-life centre which has many of the fish that can be found off the coasts of Australia and New Zealand. Taronga is also famous for its large group of South East Asian monkeys. Snacks are available at the cafe.",
    "answer": "G",
    "explanation": "Tropik o'rmon qushlari va dengiz hayoti markazi. G."
   }
  ]
 }
];

/* ===== data_p3.js ===== */
// CEFR Companion - Reading Part 3 (heading matching)
// Source: MULTILEVEL MASTER READING, Part 3 (pp. 170-261). Texts checked against the book pages;
// answers from the book key (p. 431-434); a few key misprints corrected by content (see explanation).
const READING_P3_EXERCISES = [
 {
  "n": 1,
  "title": "The Dos and Don'ts of Writing an Effective CV",
  "topic": "Samarali CV yozish",
  "sub": "",
  "headings": [
   [
    "A",
    "Capture immediate attention"
   ],
   [
    "B",
    "Concentrate on the quality, not quantity, of your achievements"
   ],
   [
    "C",
    "Rise above the competition"
   ],
   [
    "D",
    "Check, check and check again"
   ],
   [
    "E",
    "Don't expand the truth"
   ],
   [
    "F",
    "Don't list everything"
   ],
   [
    "G",
    "Use a confident tone and positive language"
   ],
   [
    "H",
    "Don't include a photo"
   ]
  ],
  "paragraphs": [
   {
    "body": "Don't hold anything back but make sure that your achievements are fantastic and not just that you are a fantastic communicator! Typically a CV should have 10 achievements on it that cover the main successes in your career to get the reader's attention.",
    "answer": "B",
    "evidence": "make sure that your achievements are fantastic",
    "explanation": "Paragraf yutuqlar soni emas, sifati muhimligini aytadi: atigi 10 ta, lekin ajoyib yutuq. Bu B sarlavhasidagi \"quality, not quantity\" fikriga mos."
   },
   {
    "body": "Make sure you include other skills that could set you apart from other candidates, such as languages and IT skills.",
    "answer": "C",
    "evidence": "other skills that could set you apart from other candidates",
    "explanation": "\"Set you apart from other candidates\" — boshqa nomzodlardan ajralib turish. C sarlavhasidagi \"rise above the competition\" (raqobatda ustun chiqish) ning sinonimi."
   },
   {
    "body": "Go through your CV thoroughly for correct spelling and grammar - spotting errors is a quick and easy way of weeding out weaker candidates when faced with a mountain of CVs to read. Don't just rely on your computer's spellchecker but get someone else to proof it - you may have spelt a word correctly but used it in the wrong place.",
    "answer": "D",
    "evidence": "Go through your CV thoroughly for correct spelling and grammar",
    "explanation": "Imlo va grammatikani sinchiklab tekshirish, boshqa odamga ham tekshirtirish haqida. D sarlavhasi: \"check, check and check again\"."
   },
   {
    "body": "Prioritise the content of your CV and detail the most relevant information first. Start with a hard-hitting personal profile that avoids clichés such as 'hard-working, team player with excellent communication skills'. Make sure that all your career history is punchy and to the point with qualified and quantified successes.",
    "answer": "A",
    "evidence": "Start with a hard-hitting personal profile",
    "explanation": "Eng muhim ma'lumotni boshiga qo'yish va \"hard-hitting\" (ta'sirli) profil bilan boshlash o'quvchining e'tiborini darhol tortadi. A: \"capture immediate attention\"."
   },
   {
    "body": "It is simply not true that the bigger the lies you put on your CV then the better the job you will get. Most employers are not fooled by creative embellishments and if you do manage to get a job based on this you could be let go of pretty quickly which won't look good on your CV.",
    "answer": "E",
    "evidence": "the bigger the lies you put on your CV",
    "explanation": "Yolg'on va \"creative embellishments\" (bo'rttirish) yozmaslik haqida. E sarlavhasidagi \"don't expand the truth\" — haqiqatni bo'rttirmang."
   },
   {
    "body": "An employer really doesn't need or want to know all the one-day training courses you have ever been on. Keep information relevant and to the point.",
    "answer": "F",
    "evidence": "doesn't need or want to know all the one-day training courses",
    "explanation": "Hamma kurslarni yozish shart emas, faqat keraklisini qoldiring. F: \"don't list everything\"."
   }
  ]
 },
 {
  "n": 2,
  "title": "",
  "topic": "Keraksiz shovqin",
  "sub": "",
  "headings": [
   [
    "A",
    "Always on duty"
   ],
   [
    "B",
    "Three are better than two"
   ],
   [
    "C",
    "A threat to health"
   ],
   [
    "D",
    "Various benefits"
   ],
   [
    "E",
    "Voices break concentration"
   ],
   [
    "F",
    "Noise from next door"
   ],
   [
    "G",
    "Noise you can't ignore"
   ],
   [
    "H",
    "Pointless music"
   ]
  ],
  "paragraphs": [
   {
    "body": "Unwanted noise is everywhere - and getting worse. It can make people ill with migraines, stomach upsets, skin problems and can even lead to terrible things, including murder. It is a public health problem which is not going to go away.",
    "answer": "C",
    "evidence": "It can make people ill",
    "explanation": "Shovqin migren, oshqozon va teri kasalliklariga olib keladi, bu \"public health problem\". C: \"a threat to health\" (sog'liqqa tahdid)."
   },
   {
    "body": "Our ears act as our warning signals. They are designed to tell us about danger, and they never turn off. Even in sleep, if someone calls your name, your brain will register the sound. So unwanted noise is like a continuous alarm that never lets us relax.",
    "answer": "A",
    "evidence": "they never turn off",
    "explanation": "Quloqlar hech qachon \"o'chmaydi\", hatto uyquda ham ishlaydi. A sarlavhasi: \"always on duty\" (doim navbatchilikda)."
   },
   {
    "body": "If it comes from neighbors, you will feel angry and probably trapped. People who don't complain about noisy neighbors are likely to get depressed, while those who do make their feelings known are often accused of being neurotic. Most people, however, do not end up murdering their neighbors; they simply move away.",
    "answer": "F",
    "evidence": "If it comes from neighbors",
    "explanation": "Qo'shnilardan keladigan shovqin haqida. F: \"noise from next door\" — \"next door\" = qo'shnilar."
   },
   {
    "body": "Long-term exposure to loud noise (levels above 90 decibels which is the equivalent of being in a noisy factory) can lead to hearing loss. But certain sounds are attention-grabbing, regardless of decibel level, and it is these sounds that are the most difficult to shut out.",
    "answer": "G",
    "evidence": "certain sounds are attention-grabbing, regardless of decibel level",
    "explanation": "Ba'zi tovushlar balandligidan qat'i nazar e'tiborni tortadi va ulardan qutulish eng qiyin (\"most difficult to shut out\"). G: \"noise you can't ignore\"."
   },
   {
    "body": "Research is being done on the effect of background noise on people's ability to concentrate, and it has been found that the most distracting noises are those which vary a lot in rhythm, frequency and speed. In fact, the human voice is one of the most distracting sounds.",
    "answer": "E",
    "evidence": "the human voice is one of the most distracting sounds",
    "explanation": "Diqqatni eng ko'p chalg'itadigan narsa inson ovozi ekani aytilgan. E: \"voices break concentration\"."
   },
   {
    "body": "The sound of two people talking can reduce concentration by 30%, but if a third person joins in, producing a more constant babble of noise, the reduction in concentration is less. For this reason, people often work better in a big, crowded office than in one which they share with just one or two others.",
    "answer": "B",
    "evidence": "if a third person joins in",
    "explanation": "Ikki kishi gaplashsa diqqat 30% ga tushadi, uchinchisi qo'shilsa bu pasayish kamroq bo'ladi. B: \"three are better than two\"."
   }
  ]
 },
 {
  "n": 3,
  "title": "The getaway blues",
  "topic": "Ta'tilga tayyorgarlikdagi stress",
  "sub": "A formula explains why it takes so long to relax on holiday",
  "headings": [
   [
    "A",
    "A mathematical model"
   ],
   [
    "B",
    "Mental effects of holiday preparation stress"
   ],
   [
    "C",
    "Statistics on holiday stress"
   ],
   [
    "D",
    "Stressful dream holiday"
   ],
   [
    "E",
    "Times have changed"
   ],
   [
    "F",
    "Holiday preparation"
   ],
   [
    "G",
    "A Caribbean dream holiday"
   ],
   [
    "H",
    "An issue not related to money"
   ]
  ],
  "paragraphs": [
   {
    "body": "With so much to do, going on holiday can be difficult. First, there's the flight to arrange, then the hotel or villa to book and that's before you've decided on the beach outfit, evening wear or reading material.",
    "answer": "F",
    "evidence": "there's the flight to arrange, then the hotel or villa to book",
    "explanation": "Paragrafda sayohatga tayyorgarlik sanab o'tiladi: chipta, mehmonxona, kiyim. F: \"holiday preparation\"."
   },
   {
    "body": "The whole year we dream about the long break from our daily routine. But making our dream holiday a reality is what makes the stress really start, so holidaymakers have to relax a few days after they arrive. Even if the surroundings are peaceful, there's no quick way to forget about work, the children's schooling, the leaking roof and all those other everyday problems we want to get away from.",
    "answer": "D",
    "evidence": "making our dream holiday a reality is what makes the stress really start",
    "explanation": "Orzudagi ta'tilni amalga oshirish stressni boshlab beradi. D: \"stressful dream holiday\"."
   },
   {
    "body": "Susan Jones, psychologist, and regular TV and radio commentator, says that stress caused by trying to arrange a holiday, creates hormonal changes in the body, including a change of mood. The result is that it takes the body a lot of time to get back its hormonal balance and become stress-free.",
    "answer": "B",
    "evidence": "creates hormonal changes in the body, including a change of mood",
    "explanation": "Tayyorgarlik stressi gormonlar va kayfiyatga ta'sir qiladi. B: \"mental effects of holiday preparation stress\"."
   },
   {
    "body": "The results of a survey by Lloyds Bank has confirmed Ms Jones' theories. Today's holidaymakers really are stressed out. More than 83 per cent of people surveyed admitted to being 'severely stressed' before going on holiday. More than a quarter of people said they needed the first few days of their holiday to recover. Some said that they became so anxious that they left home without making essential arrangements, such as feeding the cat (11%), and cancelling the milk (12%). Amazingly, a tiny minority of travelers (a little over 1%) actually forgot to tell their bosses they were going on holiday.",
    "answer": "C",
    "evidence": "More than 83 per cent of people surveyed",
    "explanation": "Paragraf so'rovnoma foizlari bilan to'la (83%, 11%, 12%, 1%). C: \"statistics on holiday stress\"."
   },
   {
    "body": "In fact there is a formula to calculate the amount of time needed to recover from the stress of preparing for our holiday. This formula, developed by Ms Jones, calculates the time spent preparing for the holiday, multiplied by the level of stress caused by the preparation, divided by the stress level of the holiday. The result is the number of hours needed to recover.",
    "answer": "A",
    "evidence": "there is a formula to calculate the amount of time",
    "explanation": "Vaqtni hisoblaydigan formula (ko'paytirish, bo'lish) — bu matematik model. A: \"a mathematical model\"."
   },
   {
    "body": "Ms Jones points out that taking a holiday is no longer a question of catching a bus to the nearest seaside resort. Today's lifestyles mean that going on holiday is a lot more stressful. Now we have to organise foreign travel, go on long difficult journeys and settle our home and work matters before we go.",
    "answer": "E",
    "evidence": "taking a holiday is no longer a question of catching a bus",
    "explanation": "Ilgari avtobusga chiqib dengizga borish kifoya edi, hozirgi hayot tarzi esa boshqacha. E: \"times have changed\"."
   }
  ]
 },
 {
  "n": 4,
  "title": "",
  "topic": "Jamie Oliver va boshqa muvaffaqiyat hikoyalari",
  "sub": "",
  "headings": [
   [
    "A",
    "Favorite instrument"
   ],
   [
    "B",
    "Success as a writer"
   ],
   [
    "C",
    "From education till position"
   ],
   [
    "D",
    "Avoiding foreign cuisine"
   ],
   [
    "E",
    "Who is James Trevor?"
   ],
   [
    "F",
    "An interest begins"
   ],
   [
    "G",
    "His education at home and abroad"
   ],
   [
    "H",
    "The price of success"
   ]
  ],
  "paragraphs": [
   {
    "body": "Restaurants and cooking are in his blood because his parents own and operate a successful pub and restaurant in Cambridge, where he grew up. At the age of eight he started cooking and helping the chefs prepare lunch for the pub's customers.",
    "answer": "F",
    "evidence": "At the age of eight he started cooking",
    "explanation": "Oshpazlikka qiziqish bolalikda, sakkiz yoshida, ota-onasining restoranida boshlangan. F: \"an interest begins\"."
   },
   {
    "body": "After uninteresting school years, he decided he wanted to cook and went on to study at Westminster catering college, where he completed his formal training. After college, he traveled to France to find out more about cooking and famous French cuisine. He also wanted to find his own style",
    "answer": "G",
    "evidence": "study at Westminster catering college",
    "explanation": "Avval Angliyada kollejda o'qigan, keyin Fransiyaga borgan: \"at home and abroad\". G: \"his education at home and abroad\"."
   },
   {
    "body": "James Trevor \"Jamie\" Oliver, born 27 May 1975, is a British celebrity, chef, restaurateur, media personality, known for his food-focused television shows, cookbooks and his global campaign for better food education. He has attracted all generations of food lovers with his ultra-tasty receipts shown on television",
    "answer": "E",
    "evidence": "James Trevor \"Jamie\" Oliver, born 27 May 1975",
    "explanation": "Paragraf u kimligini tanishtiradi: tug'ilgan sanasi, kasbi, mashhurligi. E: \"Who is James Trevor?\"."
   },
   {
    "body": "Our multi award winning Trevor James flute and saxophone ranges are now regarded as one of the leading brand names in woodwind instruments. We are currently distributing our instruments to 59 countries worldwide and work closely with established musicians and teachers internationally in our instrument research and development programmes.",
    "answer": "A",
    "evidence": "Trevor James flute and saxophone ranges",
    "explanation": "Bu paragraf oshpaz haqida emas, Trevor James nomli fleyta va saksofon brendi haqida. A: \"favorite instrument\"."
   },
   {
    "body": "To accompany the television series, Jamie's first book came out, and it was number one on the best-seller list for more than ten weeks. Then at the age of twenty-six, he became food editor for a magazine.",
    "answer": "B",
    "evidence": "Jamie's first book came out, and it was number one on the best-seller list",
    "explanation": "Birinchi kitobi bestseller bo'lgani aytiladi. B: \"success as a writer\"."
   },
   {
    "body": "He has taught at university in Australia, Hong Kong and New Zealand. He was Dean of Theology at the University of Auckland from 1993 until his appointment as Dean.",
    "answer": "C",
    "evidence": "He was Dean of Theology at the University of Auckland",
    "explanation": "Universitetlarda dars bergani va dekan lavozimiga kelgani aytiladi. C: \"from education till position\"."
   }
  ]
 },
 {
  "n": 5,
  "title": "The Truth About Lying",
  "topic": "Yolg'onning tabiati",
  "sub": "",
  "headings": [
   [
    "A",
    "Knowing the good from the bad"
   ],
   [
    "B",
    "Different categories"
   ],
   [
    "C",
    "A difficult distinction"
   ],
   [
    "D",
    "Why we need to lie"
   ],
   [
    "E",
    "Learnt then forbidden"
   ],
   [
    "F",
    "The worst kind?"
   ],
   [
    "G",
    "Both sides benefit"
   ],
   [
    "H",
    "How to hear lies"
   ]
  ],
  "paragraphs": [
   {
    "body": "Can you imagine a whole day without telling lies? 'Yes, of course,' most people would answer, but then they've probably forgotten all those little lies that are said so easily - 'This is delicious.', 'You look lovely in that shirt.', 'I'd love to come with you.', etc. Lying is a way of making life run more smoothly.",
    "answer": "D",
    "evidence": "Lying is a way of making life run more smoothly",
    "explanation": "Kichik yolg'onlar hayotni \"silliqroq\" qiladi, ya'ni bizga ular kerak. D: \"why we need to lie\"."
   },
   {
    "body": "We are told not to lie from the moment we learn how to do it. According to psychologist Catherine Brown, this is at the age of about four when children realize they can deceive people. We are not born liars.",
    "answer": "E",
    "evidence": "We are told not to lie from the moment we learn how to do it",
    "explanation": "Yolg'onni to'rt yoshda o'rganamiz va shu zahoti bizga yolg'on gapirmaslik buyuriladi. E: \"learnt then forbidden\" (o'rganilgan, keyin taqiqlangan)."
   },
   {
    "body": "In childhood, the line between imagination and lying is often not clear. Children are praised for creative imagination, but generally criticized for hiding the truth.",
    "answer": "C",
    "evidence": "the line between imagination and lying is often not clear",
    "explanation": "Bolalikda xayol va yolg'on orasidagi chegara aniq emas. C: \"a difficult distinction\" (ajratish qiyin)."
   },
   {
    "body": "As adults we have definite ideas about which kind of lies are OK and which are not. Very often the reason for lie is the important thing in accepting or rejecting the lie.",
    "answer": "A",
    "evidence": "we have definite ideas about which kind of lies are OK and which are not",
    "explanation": "Kattalar qaysi yolg'on yaxshi, qaysi yomon ekanini aniq biladi. A: \"knowing the good from the bad\"."
   },
   {
    "body": "Generally speaking there are three types of lies, and liars. The first sort of liar wants to please people, the second wants to protect him- or herself, the third sort doesn't care about other people and lies to get what he or she wants.",
    "answer": "B",
    "evidence": "there are three types of lies, and liars",
    "explanation": "Yolg'on va yolg'onchilarning uch turi sanab o'tiladi. B: \"different categories\"."
   },
   {
    "body": "If someone is fishing for compliments and you tell them what they want to hear, you probably think it's a 'kind' lie. However, you get something as a result of this lie - affection, friendship, peace and quiet.",
    "answer": "G",
    "evidence": "you get something as a result of this lie",
    "explanation": "\"Yaxshi\" yolg'ondan aytgan odam ham foyda oladi (do'stlik, tinchlik). G: \"both sides benefit\"."
   }
  ]
 },
 {
  "n": 6,
  "title": "Markets around the world",
  "topic": "Dunyo bo‘ylab bozorlar",
  "sub": "",
  "headings": [
   [
    "A",
    "Local art and craft work to take home"
   ],
   [
    "B",
    "Inexpensive things to eat straight from the countryside"
   ],
   [
    "C",
    "Toys for children of all ages"
   ],
   [
    "D",
    "Invent a new style for yourself at bargain prices"
   ],
   [
    "E",
    "Occasionally ignored shopping method"
   ],
   [
    "F",
    "Find gifts for winter celebrations"
   ],
   [
    "G",
    "Sell what you don't need"
   ],
   [
    "H",
    "A new city centre"
   ]
  ],
  "paragraphs": [
   {
    "body": "We have become so used to shopping in big supermarkets and chain stores, identical in every town, that we have forgotten about one important way to shop - markets. Markets are found in every country in the world, but wherever you go they are different and reveal the local culture - and agriculture. From farmers' markets selling fresh produce to craft and antique markets, they are the best place to find something unique at a great price.",
    "answer": "E",
    "evidence": "we have forgotten about one important way to shop - markets",
    "explanation": "Supermarketlarga o'rganib, bozorlarni \"unutib qo'ydik\". E: \"occasionally ignored shopping method\"."
   },
   {
    "body": "Food is at its cheapest and freshest in markets. Farmers often sell direct to the consumer, without all the packaging, shipping and advertising that increases costs in shops and supermarkets. You can often find unusual products and those that are not mass-produced. Food markets vary hugely according to where they are in the world. For example the Kauppatori market in Helsinki, Finland sells moose, reindeer and bear salami. Wherever you are, food will be locally produced and reasonably priced.",
    "answer": "B",
    "evidence": "Food is at its cheapest and freshest in markets",
    "explanation": "Bozorda oziq-ovqat eng arzon va yangi, fermerlar to'g'ridan-to'g'ri sotadi. B: \"inexpensive things to eat straight from the countryside\"."
   },
   {
    "body": "Markets are also good places to buy clothes. Some sell cheap new and second-hand clothes, while others specialize in vintage or ethically made clothes and original items. The markets of London are some of the best in the world for those who want to create a unique look for themselves. Many new designers start with a market stall, so if you are looking for a totally original item of clothing, you could get something really special at a bargain price at Brick Lane, Spitalfields or Portobello Road markets.",
    "answer": "D",
    "evidence": "those who want to create a unique look for themselves",
    "explanation": "Kiyim, o'ziga xos qiyofa yaratish va arzon narx haqida. D: \"invent a new style for yourself at bargain prices\"."
   },
   {
    "body": "Another type of market is a flea market. This is a much more informal type of market, where second-hand products can be sold by anyone. If you have unwanted items at home, you could take them to a flea market and sell them yourself. There are also antiques and possibly local crafts at this kind of market. In some parts of the world there may not even be stalls; rather, vendors lay out their goods on a sheet on the ground. In other parts of the world, flea markets have developed into car boot sales, where people sell their unwanted items from their cars.",
    "answer": "G",
    "evidence": "If you have unwanted items at home, you could take them to a flea market and sell them yourself",
    "explanation": "Keraksiz narsalaringizni o'zingiz sotishingiz mumkin. G: \"sell what you don't need\"."
   },
   {
    "body": "Some places, markets are directed at visitors and tend to sell handicrafts typical of the region. For many tourists, a visit to a nearby market to buy souvenirs is an important part of their holiday. Guadalajara in Mexico has a huge range of traditional textiles, glassware, ceramics and art works and Seoul in Korea has some wonderful original designs of all kinds of products at affordable prices. Countries in the Middle East usually have beautiful hand-made rugs and carpets, and Indian markets sell colorful handloom fabrics and beautiful silk scarves.",
    "answer": "A",
    "evidence": "tend to sell handicrafts typical of the region",
    "explanation": "Sayyohlarga mahalliy hunarmandchilik buyumlari va suvenirlar sotiladi. A: \"local art and craft work to take home\"."
   },
   {
    "body": "In Europe, Christmas is the time when seasonal markets are held to sell decorations and gifts for the festive season. One of the most famous of these is held in Wenceslas Square in Prague in the Czech Republic. The market is made up of colorfully decorated wooden huts selling traditional handicrafts, embroidered lace, wooden toys, scented candles, Christmas tree ornaments, and puppets and dolls beautifully dressed in traditional costumes. This looks very pretty, especially in the snow.",
    "answer": "F",
    "evidence": "Christmas is the time when seasonal markets are held to sell decorations and gifts",
    "explanation": "Rojdestvo, ya'ni qishki bayram uchun sovg'alar sotiladigan bozorlar. F: \"find gifts for winter celebrations\"."
   }
  ]
 },
 {
  "n": 7,
  "title": "",
  "topic": "Musiqaning turli vazifalari",
  "sub": "",
  "headings": [
   [
    "A",
    "Early instrument"
   ],
   [
    "B",
    "Music in education"
   ],
   [
    "C",
    "Important music"
   ],
   [
    "D",
    "Music for survival"
   ],
   [
    "E",
    "A great composer"
   ],
   [
    "F",
    "Modern music"
   ],
   [
    "G",
    "Music therapy"
   ],
   [
    "H",
    "Early music"
   ]
  ],
  "paragraphs": [
   {
    "body": "Music was an important part of culture and social life in ancient Greece. Choruses performed for entertainment, celebration and spiritual ceremonies, and musicians and singers had an important role in Greek theatre. Music was also part of children's basic education in ancient Greece.",
    "answer": "H",
    "evidence": "Music was an important part of culture and social life in ancient Greece",
    "explanation": "Qadimgi Yunonistondagi musiqa, ya'ni eng qadimgi musiqa haqida. H: \"early music\"."
   },
   {
    "body": "Birdsong sounds like music to our ears, but these sounds have a greater purpose to bird. Birds sing longer and more complex songs to attract a mate. They make shorter sounds as alarm in the time of danger or as a way of keeping contact with the members of a flock.",
    "answer": "D",
    "evidence": "They make shorter sounds as alarm in the time of danger",
    "explanation": "Qushlar sayrashi juft topish va xavfdan ogohlantirish uchun, ya'ni omon qolish uchun kerak. D: \"music for survival\"."
   },
   {
    "body": "Benjamin Britten was born on the feast day of Saint Cecilia, the patron saint of music, and he showed musical gifts very early in life. He began to write music as a child, and he later studied at the Royal College of Music. The first of his works to attract wide attention were the opera Sinfienitta and a set of choral variations A Boy Ws Born, written in 1934.",
    "answer": "E",
    "evidence": "Benjamin Britten was born on the feast day of Saint Cecilia",
    "explanation": "Bitta bastakorning hayoti va asarlari tasvirlangan. E: \"a great composer\"."
   },
   {
    "body": "Early instrumental section in an orchestra has principal who is responsible for leading the group and playing orchestral solos. The violins are divided into two groups, first violin and second violin, each with its own principal. The principal first violin is considered the leader not only of the string section, but of the entire orchestra, answering only to the conductor.",
    "answer": "C",
    "evidence": "is considered the leader not only of the string section, but of the entire orchestra",
    "explanation": "Orkestrdagi eng muhim ijrochi, birinchi skripka haqida. C: \"important music\"."
   },
   {
    "body": "Music training in schools common in North America and Europe because involvement in music is thought to teach important basic skills such as concentration, listening, and cooperation as well as improving the understanding of language and the ability to recall information.",
    "answer": "B",
    "evidence": "Music training in schools common in North America and Europe",
    "explanation": "Maktabdagi musiqa ta'limi va uning foydasi. B: \"music in education\"."
   },
   {
    "body": "The human body, generating both vocal and percussive sounds, may have been the first musical instrument. Percussion instruments such as stones and hollow logs are also possible examples. For instance, nine-thousand-year-old bone flutes or recorders have been found in Chinese archeological sites.",
    "answer": "A",
    "evidence": "may have been the first musical instrument",
    "explanation": "Birinchi cholg'u asboblari: inson tanasi, toshlar, 9000 yillik suyak nay. A: \"early instrument\"."
   }
  ]
 },
 {
  "n": 8,
  "title": "",
  "topic": "Gazetalar tarixi va vazifalari",
  "sub": "",
  "headings": [
   [
    "A",
    "Newspapers have been around for a long time"
   ],
   [
    "B",
    "Balancing subjective and objective"
   ],
   [
    "C",
    "How are they distributed?"
   ],
   [
    "D",
    "Exactly as it used to be"
   ],
   [
    "E",
    "Newspapers and the competition"
   ],
   [
    "F",
    "Newspapers are more than just news"
   ],
   [
    "G",
    "The golden age of newspapers"
   ],
   [
    "H",
    "Advertisements"
   ],
   [
    "I",
    "The printing process"
   ],
   [
    "J",
    "How do newspapers work?"
   ],
   [
    "K",
    "Publication in 1800s"
   ]
  ],
  "paragraphs": [
   {
    "body": "It may seem normal to you to get the daily newspaper in your mailbox. Newspapers are one of the earliest forms of mass communication. However, with the emergence of the Internet things are changing.",
    "answer": "A",
    "evidence": "Newspapers are one of the earliest forms of mass communication",
    "explanation": "Gazetalar ommaviy axborotning eng qadimgi turlaridan biri. A: \"newspapers have been around for a long time\"."
   },
   {
    "body": "The Internet has undoubtedly caused many newspaper offices to fear that they will soon be a thing of the past but the Internet is not the first form of media that seems to rival newspapers - television was actually the first. But neither of these has the portability and mobility of a newspaper. Newspapers are the only form of media that still gets the news to the public but can be taken out of a bag on the subway, or held while standing in line at the grocery store.",
    "answer": "E",
    "evidence": "the Internet is not the first form of media that seems to rival newspapers",
    "explanation": "Internet va televideniye gazetaning raqiblari sifatida taqqoslanadi. E: \"newspapers and the competition\"."
   },
   {
    "body": "Although newspapers came before television, radio, or even telegraphs, they have the same typical format today as they did when the first one was published. Newspapers follow easy-to-read formats. This means that you can find a newspaper from 1775 and still read it the same way you would read a newspaper today.",
    "answer": "D",
    "evidence": "they have the same typical format today as they did when the first one was published",
    "explanation": "Gazetaning shakli birinchi sonidan beri o'zgarmagan, 1775-yilgi gazetani bugun ham shunday o'qish mumkin. D: \"exactly as it used to be\"."
   },
   {
    "body": "It was shortly after the Civil War that newspapers truly had their glory days in America. This was a time when the public were starving for knowledge about what was happening and when political activity was high. Not only were there many, many newspapers created and distributed during this time but it's also the time in history when newspapers were a very lucrative business.",
    "answer": "G",
    "evidence": "newspapers truly had their glory days in America",
    "explanation": "\"Glory days\" — eng gullab-yashnagan davr, gazeta juda daromadli biznes bo'lgan. Mazmunan bu G: \"the golden age of newspapers\". Kitob kalitida 4-javob J deb berilgan, lekin paragraf gazeta qanday ishlashi haqida emas, shuning uchun bu yerda G qabul qilingan."
   },
   {
    "body": "Of course, the essence of newspapers is to print news, but the news division isn't the only part of a newspaper otherwise you would only have news stories from front to back. Open up any paper and you'll find classifieds, editorial pages, advertisements, letters to the editor, leisure pages with crosswords and much more.",
    "answer": "F",
    "evidence": "the news division isn't the only part of a newspaper",
    "explanation": "Gazetada yangiliklardan tashqari e'lonlar, xatlar, krossvordlar ham bor. F: \"newspapers are more than just news\"."
   },
   {
    "body": "Since editorial pages are opinion, the editors must be very careful in making sure that the line is not crossed between opinion and fact. Once this is done, the newspaper loses all credibility. The objective is to raise issues and awareness, not to simply make things up or cloud the issue so much with opinion that it becomes lost.",
    "answer": "B",
    "evidence": "the line is not crossed between opinion and fact",
    "explanation": "Muharrirlar fikr (subyektiv) va fakt (obyektiv) orasidagi chegarani saqlashi kerak. B: \"balancing subjective and objective\"."
   }
  ]
 },
 {
  "n": 9,
  "title": "",
  "topic": "San’at, ixtiro, sport va ovqat",
  "sub": "",
  "headings": [
   [
    "A",
    "early art"
   ],
   [
    "B",
    "a useful invention"
   ],
   [
    "C",
    "a dangerous sport"
   ],
   [
    "D",
    "unanswered question"
   ],
   [
    "E",
    "modern art"
   ],
   [
    "F",
    "a stolen invention"
   ],
   [
    "G",
    "a popular sport"
   ],
   [
    "H",
    "healthy eating"
   ]
  ],
  "paragraphs": [
   {
    "body": "Fans of more traditional sculpture and paintings that actually look like the subject they are based on often disapprove of more unusual art, such as Damien Hirst's pickled cows, Tracey Emin's filthy bed, or Martin Creeds's empty room. But who knows the answer to the question \"what is art?\" The definition of art has changed greatly through history, and will continue to change. It will always shock, as it has shocked throughout the centuries.",
    "answer": "D",
    "evidence": "who knows the answer to the question \"what is art?\"",
    "explanation": "\"San'at nima?\" degan savolga hech kim aniq javob bera olmaydi. D: \"unanswered question\"."
   },
   {
    "body": "In the mid-18th century, a man named Antonio Meucci found that sounds could travel electrical impulses through cooper wire. He developed the technology and in 1860, he held a public demonstration of the first telephone. Unfortunately, Meucci could not afford the $250 fee to file a patent for his invention. Two years later a man named Alexander Graham Bell, who shared a laboratory with Meucci filed a patent for a telephone and become a celebrity.",
    "answer": "F",
    "evidence": "filed a patent for a telephone and become a celebrity",
    "explanation": "Telefonni Meucci kashf qilgan, lekin patentni Bell olib, mashhur bo'lgan, ya'ni ixtiro \"o'g'irlangan\". F: \"a stolen invention\"."
   },
   {
    "body": "Association football, or soccer, is played by more than 20 million people in more than 140 countries. It is watched by almost half of the world's population. Although it is not enjoyed so much in India, the USA and Canada, it is the number one sport in all countries in Europe and Latin, almost the most important sport in Africa and is also becoming a major sport in China, Korea, Japan and Middle East.",
    "answer": "G",
    "evidence": "It is watched by almost half of the world's population",
    "explanation": "Futbolni 140 dan ortiq mamlakatda o'ynashadi va dunyoning yarmi tomosha qiladi. G: \"a popular sport\"."
   },
   {
    "body": "When Europeans first found the Magdalenian paintings on the walls of a cave in Spain in 1879, academics believed that the paintings were put there as a joke by modern painters. However, recent studies of the paintings have proved them to be authentic, and have shown that ancient ancestors who only used basic tools, were actually very talented artists.",
    "answer": "A",
    "evidence": "ancient ancestors who only used basic tools, were actually very talented artists",
    "explanation": "G'ordagi qadimgi rasmlar haqida. A: \"early art\"."
   },
   {
    "body": "New guidelines on the nutritional value of processed foods such as beef burgers and sausages are being introduced into schools in England. The food industry, schools and nutritionists all have a say on what should be on school dinner menus, which have been criticised in recent years for being unhealthy.",
    "answer": "H",
    "evidence": "New guidelines on the nutritional value of processed foods",
    "explanation": "Maktab ovqatlarining ozuqaviy qiymati va zararli ovqat haqida. H: \"healthy eating\"."
   },
   {
    "body": "In 1886, Josephine Cochran announced in disgust \"If nobody else is going to invent a dishwashing machine, I will do it myself\". And she did. At first only hotels and large restaurants bought her creation, but by the 1950s, dishwashers began to be used to be used homes. Josephine Cochran founded a company to manufacture her dishwashers, which eventually becoming Kitchen Aid.",
    "answer": "B",
    "evidence": "If nobody else is going to invent a dishwashing machine, I will do it myself",
    "explanation": "Idish yuvish mashinasi kundalik hayotda foydali ixtiro. B: \"a useful invention\"."
   }
  ]
 },
 {
  "n": 10,
  "title": "Looking after the countryside",
  "topic": "Milliy Trust qo‘riqchisi",
  "sub": "The National Trust is an organization whose aim is to conserve the British countryside. Gill Page visits the Lleyn Peninsula in North Wales and talks to one of the wardens employed by the Trust to look after the beautiful areas it owns.",
  "headings": [
   [
    "A",
    "The right qualities for the job"
   ],
   [
    "B",
    "What makes him good at the job?"
   ],
   [
    "C",
    "Towards agreement"
   ],
   [
    "D",
    "The problem of the outdoor life"
   ],
   [
    "E",
    "There to stay"
   ],
   [
    "F",
    "Getting things done"
   ],
   [
    "G",
    "Changes to the environment"
   ],
   [
    "H",
    "The most suitable candidate"
   ]
  ],
  "paragraphs": [
   {
    "body": "Common sense. That's what a National Trust Warden needs, according to Gareth Roberts. 'And you definitely need to be good at handling people, because you're continually dealing with farmers, visitors, conservationists and building firms.'",
    "answer": "A",
    "evidence": "That's what a National Trust Warden needs",
    "explanation": "Bu ishga nima kerakligi aytiladi: sog'lom aql va odamlar bilan til topisha olish. A: \"the right qualities for the job\"."
   },
   {
    "body": "Gareth was born and bred on the Lleyn Peninsula and worked on his parents' farm until he married. About 80 people applied for the post as National Trust Warden for the Lleyn Peninsula. In the end, Gareth's local knowledge and farming experience won him the job, despite his lack of formal training.",
    "answer": "H",
    "evidence": "won him the job, despite his lack of formal training",
    "explanation": "80 nomzod ichidan aynan Gareth tanlangan, ya'ni u eng mos nomzod bo'lgan. H: \"the most suitable candidate\"."
   },
   {
    "body": "'I find it particularly helpful that I still farm with my parents and that I can deal with farmers on the same level and be aware of their problems. Also, they can't take me in about anything!' he says. His farming life also means he is well able to cope with the physical demands of the job - erecting fences, planting trees, building walls.",
    "answer": "B",
    "evidence": "I find it particularly helpful that I still farm with my parents",
    "explanation": "Fermerlik tajribasi unga ishda nimasi bilan yordam berishini tushuntiradi. B: \"what makes him good at the job?\"."
   },
   {
    "body": "Since he has been with the Trust, Gareth says he has come to understand more about nature conservation. 'When I was a youngster,' he recalls, 'I used to pick and press flowers, collect butterfly larvae and old birds' nests. And I thought to myself recently, where would I find all those flowers, the birds' nests, the grasshoppers now? It's really become clear to me that farming has affected the countryside. It's not the farmers' fault - they were just doing what the government told them.'",
    "answer": "G",
    "evidence": "farming has affected the countryside",
    "explanation": "Gullar, qushlar va chigirtkalar yo'qolgan, dehqonchilik qishloq tabiatini o'zgartirgan. G: \"changes to the environment\"."
   },
   {
    "body": "Gareth says that, when he started his job, farmers and conservationists were set against each other. Both sides wanted things done their way. Now they are talking and can see each other's point of view. 'We're at the crossroads and there's just a small step needed to join them together,' says Gareth.",
    "answer": "C",
    "evidence": "Now they are talking and can see each other's point of view",
    "explanation": "Avval fermerlar va tabiatni muhofaza qiluvchilar bir-biriga qarshi edi, endi kelishuvga yaqin. C: \"towards agreement\"."
   },
   {
    "body": "Conservation is one of the main aspects of Gareth's work, along with public entry to the Trust's land, tree planting and maintenance, and meeting the Trust's tenant farmers. 'My role is to make sure jobs get finished, with as little fuss and as economically as possible. What I enjoy most is seeing projects completed, although about half my time is spent on reports, signing bills and so on.'",
    "answer": "F",
    "evidence": "My role is to make sure jobs get finished",
    "explanation": "Uning vazifasi ishlarni oxiriga yetkazish. F: \"getting things done\"."
   }
  ]
 },
 {
  "n": 11,
  "title": "",
  "topic": "Dunyo bo‘ylab sayohat",
  "sub": "",
  "headings": [
   [
    "A",
    "Hoping to be famous"
   ],
   [
    "B",
    "Reasons for the journey"
   ],
   [
    "C",
    "Brave decision"
   ],
   [
    "D",
    "A wonder of nature"
   ],
   [
    "E",
    "The last stop"
   ],
   [
    "F",
    "Places to see"
   ],
   [
    "G",
    "Means of transport"
   ],
   [
    "H",
    "Choosing the time"
   ]
  ],
  "paragraphs": [
   {
    "body": "Still determined by the sizeable gaps between the earth's continents, a Hungarian couple is planning an around-the-world trip in a Toyota truck. They know potential dangers waiting them on the way, but this is ignored to watch the thrills of the globe.",
    "answer": "C",
    "evidence": "They know potential dangers waiting them on the way",
    "explanation": "Xavflarni bila turib dunyo bo'ylab sayohatga chiqish jasoratli qaror. C: \"brave decision\"."
   },
   {
    "body": "Eszter and János Hando, both managers at multinational companies, set out for the big trip on May 20th from Hosok tere, but the real adventure will start in Iceland, the official starting point for the journey. 'We picked Iceland because it is such an unreal place with its volcanic activities. I just had to see it and show it to my wife,' János said.",
    "answer": "D",
    "evidence": "such an unreal place with its volcanic activities",
    "explanation": "Islandiya vulqonlari tufayli tanlangan, ya'ni tabiat mo''jizasi. D: \"a wonder of nature\"."
   },
   {
    "body": "'We want to travel and see the world, and meet other cultures, people and languages,' he said. They are not attempting to break records, though the trip is certainly an unusual one. They have own dreams for a long time so they are going to do their best to realize them.",
    "answer": "B",
    "evidence": "We want to travel and see the world, and meet other cultures",
    "explanation": "Nega sayohat qilishlari aytiladi: dunyoni ko'rish, madaniyatlar bilan tanishish, orzuni amalga oshirish. B: \"reasons for the journey\"."
   },
   {
    "body": "From Iceland, the journey will continue in north America and then lead south all the way to Chile. The Handos will take a ship to New Zealand and from there explore Australia, Southeast Asia, China and Japan. The trip will take in India, Tibet and Nepal as well. After motoring around the Saudi peninsula, they will go to Egypt.",
    "answer": "F",
    "evidence": "The trip will take in India, Tibet and Nepal as well",
    "explanation": "Boriladigan mamlakatlar ro'yxati berilgan. F: \"places to see\"."
   },
   {
    "body": "The final destination for the journey will be Cyprus, which the Handos hope to reach by the end of June next year. The journey will cover approximately 110,000 kilometers. This is rather a long journey for ordinary people.",
    "answer": "E",
    "evidence": "The final destination for the journey will be Cyprus",
    "explanation": "\"Final destination\" — oxirgi manzil. E: \"the last stop\"."
   },
   {
    "body": "The car, which will also serve as their bed and pantry, is a Toyota Hilux 2.4TD four-wheel-drive jeep. Although there is a bed on top of the car, János said he did not intend to spend all nights up there.",
    "answer": "G",
    "evidence": "is a Toyota Hilux 2.4TD four-wheel-drive jeep",
    "explanation": "Qaysi mashinada sayohat qilishlari tasvirlanadi. G: \"means of transport\"."
   }
  ]
 },
 {
  "n": 12,
  "title": "Water and Climate Change",
  "topic": "Suv va iqlim o‘zgarishi",
  "sub": "",
  "headings": [
   [
    "A",
    "Environmental change has always been with us"
   ],
   [
    "B",
    "Rivers and seas cause damage"
   ],
   [
    "C",
    "What is water?"
   ],
   [
    "D",
    "A pessimistic view of the future"
   ],
   [
    "E",
    "Disasters caused by the climate make us feel better"
   ],
   [
    "F",
    "How to solve flooding"
   ],
   [
    "G",
    "Humans' relationship with water"
   ],
   [
    "H",
    "The destructive force of water in former times"
   ]
  ],
  "paragraphs": [
   {
    "body": "Water is the giver and, at the same time, the taker of life. It covers most of the surface of the planet we live on and features large in the development of the human race. On present predictions, it is an element that is set to assume even greater significance.",
    "answer": "C",
    "evidence": "Water is the giver and, at the same time, the taker of life",
    "explanation": "Paragraf suvning o'zi nima ekanini ta'riflaydi. C: \"what is water?\"."
   },
   {
    "body": "Throughout history, water has had a huge impact on our lives. Humankind has always had a rather ambiguous relationship with water, on the one hand receiving enormous benefit from it, not just as a drinking source, but as a provider of food and a means whereby to travel and to trade. But forced to live close to water in order to survive and to develop, the relationship has not always been peaceful or beneficial. In fact, it has been quite the contrary. What has essentially been a necessity for survival has turned out in many instances to have a very destructive and life-threatening side.",
    "answer": "G",
    "evidence": "Humankind has always had a rather ambiguous relationship with water",
    "explanation": "Inson va suv o'rtasidagi foydali, lekin xavfli munosabat haqida. G: \"humans' relationship with water\"."
   },
   {
    "body": "Through the ages, great floods alternated with long periods of drought have assaulted people and their environment, hampering their fragile fight for survival. The dramatic changes to the environment that are now a feature of our daily news are not exactly new: fields that were once lush and fertile are now barren; lakes and rivers that were once teeming with life are now long gone; savannah has been turned to desert. What perhaps is new is our naive wonder when faced with the forces of nature.",
    "answer": "A",
    "evidence": "are not exactly new",
    "explanation": "Toshqin va qurg'oqchilik asrlar davomida bo'lgan, o'zgarishlar yangi emas. A: \"environmental change has always been with us\"."
   },
   {
    "body": "Today, we are more aware of climate change around the world. Floods in far-flung places are instant news for the whole world. Perhaps these events make us feel better as we face the destruction of our own property by floods and other natural disasters.",
    "answer": "E",
    "evidence": "Perhaps these events make us feel better",
    "explanation": "Uzoqdagi ofatlar haqidagi xabarlar bizni yupatadi. E: \"disasters caused by the climate make us feel better\"."
   },
   {
    "body": "In 2002, many parts of Europe suffered severe flood damage running into billions of euros. Properties across the continent collapsed into the sea as waves pounded the coastline wreaking havoc with sea defences. But it was not just the seas. Rivers swollen by heavy rains and by the effects of deforestation carried large volumes of water that wrecked many communities.",
    "answer": "B",
    "evidence": "Rivers swollen by heavy rains",
    "explanation": "Dengiz to'lqinlari ham, toshgan daryolar ham zarar keltirgan. B: \"rivers and seas cause damage\"."
   },
   {
    "body": "Building stronger and more sophisticated river defenses against flooding is the expensive short-term answer. There are simpler ways. Planting trees in highland areas, not just in Europe but in places like the Himalayas, to protect people living in low-lying regions like the Ganges Delta, is a cheaper and more attractive solution. Progress is already being made in convincing countries that the emission of carbon dioxide and other greenhouse gases is causing considerable damage to the environment. But more effort is needed in this direction.",
    "answer": "F",
    "evidence": "is a cheaper and more attractive solution",
    "explanation": "Toshqinga qarshi yechimlar: to'g'onlar, daraxt ekish. F: \"how to solve flooding\"."
   }
  ]
 },
 {
  "n": 13,
  "title": "Rock the Boat",
  "topic": "Yosh dengizchilar",
  "sub": "",
  "headings": [
   [
    "A",
    "Overcoming problems is part of the challenge of sailing"
   ],
   [
    "B",
    "Sailing tends to run in families"
   ],
   [
    "C",
    "Enthusiasm about sailing was infectious"
   ],
   [
    "D",
    "There's no hiding these sailors' ambitions"
   ],
   [
    "E",
    "There's always more you can learn about sailing"
   ],
   [
    "F",
    "Some basics about sailing were explained"
   ],
   [
    "G",
    "Sailors are used to waiting around"
   ],
   [
    "H",
    "These sailors have other talents"
   ]
  ],
  "paragraphs": [
   {
    "body": "The boats, or 'Oppies' as they are affectionately called, were lying bottom-up on the beach, their sails tightly wrapped beside them. 'There's been a delay,' the race organizer said, pointing at two flags waving in the breeze. He said the red-and white-striped one meant that there was a delay, while the red, white and blue one meant it would be for three hours.",
    "answer": "F",
    "evidence": "He said the red-and white-striped one meant that there was a delay",
    "explanation": "Musobaqa tashkilotchisi bayroqlarning ma'nosini tushuntiradi, ya'ni yelkanli sport asoslari. F: \"some basics about sailing were explained\"."
   },
   {
    "body": "No one looks disappointed, probably because they are accustomed to being ruled by the weather. Competitors — casually dressed in baggy shorts, T-shirts, deck shoes and an assortment of anoraks and baseball caps — played on bikes or skateboards or just chatted to kill the time. Spectators sat in groups in the clubhouse, eating rolls and drinking tea.",
    "answer": "G",
    "evidence": "they are accustomed to being ruled by the weather",
    "explanation": "Kechikishdan hech kim xafa emas, kutishga o'rganishgan. G: \"sailors are used to waiting around\"."
   },
   {
    "body": "I suddenly felt very pale and 'indoorsy' as I sat down with some of the tanned, blond champs. Nicky Barnes, 15, Elliot Willis, 14, Eddie Huntley, 13, and Paul Campbell Jones, 14, have been sailing for years, and certainly have the sea in their blood. Paul's dad sailed in the Olympics and Nicky started sailing because her dad dragged her along. 'I was terrified at first,' she confesses. Recently they successfully competed at the world championships.",
    "answer": "B",
    "evidence": "Paul's dad sailed in the Olympics and Nicky started sailing because her dad dragged her along",
    "explanation": "Ota-onalari ham yelkanchi, ya'ni bu oilaviy an'ana. B: \"sailing tends to run in families\"."
   },
   {
    "body": "Varying degrees of hard work go into their preparation, but Nicky does the most. She trains in winter and says it is hard, 'especially when all your friends are out partying'. Then she practices techniques, boat handling and wind strategy. Meanwhile, Elliot had learned how the shape of clouds and hills affects the wind. Eddie is more relaxed and a bit more confident about it: 'I don't like training. I've got better things to do.'",
    "answer": "A",
    "evidence": "She trains in winter and says it is hard",
    "explanation": "Qishda mashq qilish, do'stlar dam olayotganda ishlash kabi qiyinchiliklarni yengish. A: \"overcoming problems is part of the challenge of sailing\"."
   },
   {
    "body": "They all get on well, joking and teasing each other, but out on the water, competition is fierce. Paul doesn't hesitate to say the best thing about sailing is winning. They've all had nasty moments, but no one will admit to falling in. The boys happily told me of Micky's fear of fish, and Elliot tells a good tale about his boat being hit by a shark.",
    "answer": "D",
    "evidence": "the best thing about sailing is winning",
    "explanation": "Suvda raqobat qattiq, g'alaba qozonish istagini yashirishmaydi. D: \"there's no hiding these sailors' ambitions\"."
   },
   {
    "body": "Other sports, they stressed, tend to take second place: Elliot could play cricket for his area but doesn't, and Nicky plays hockey, 'but I'm not allowed to do it before big events'. The comments of their non-sailing friends about their boatie lifestyles ranged from 'a bit weird' to 'really cool'. Elliot thinks that only people who are jealous want to make fun of them.",
    "answer": "H",
    "evidence": "Elliot could play cricket for his area",
    "explanation": "Ular kriket va xokkey o'ynashni ham biladi. H: \"these sailors have other talents\"."
   }
  ]
 },
 {
  "n": 14,
  "title": "Food and entertainment",
  "topic": "Ispaniyada taom va tomoshalar",
  "sub": "",
  "headings": [
   [
    "A",
    "With nature"
   ],
   [
    "B",
    "Time to relax"
   ],
   [
    "C",
    "Entertainment with vegetables"
   ],
   [
    "D",
    "Entertainment with animals"
   ],
   [
    "E",
    "Food: eating habits"
   ],
   [
    "F",
    "Spain as a state"
   ],
   [
    "G",
    "Food: its features"
   ],
   [
    "H",
    "Population"
   ]
  ],
  "paragraphs": [
   {
    "body": "A unique food battle festival known as La Tomatina is celebrated in Spain every year on the last Wednesday of August. It involves thousands of people engaging in a brutal battle, throwing overripe tomatoes at each other. The festival spans more than a week and although there are many elements to the festival, such as parades, music, dancing and fireworks, they are all centered on the tomato fight.",
    "answer": "C",
    "evidence": "throwing overripe tomatoes at each other",
    "explanation": "Pomidor otish festivali, ya'ni sabzavot bilan bog'liq ko'ngilochar tadbir. C: \"entertainment with vegetables\"."
   },
   {
    "body": "Spanish cuisine is a heavenly mixture of chicken, mixed vegetables, fish and meats. Many of the most popular Spanish dishes are a type of Paella, which is a rice dish that features a variety of ingredients. Hot chocolate and churros are very popular desserts throughout the country. Spain is also famous for its aromatic wines and other alcoholic beverages like Sangria, Cava and authentic Spanish beer.",
    "answer": "G",
    "evidence": "Spanish cuisine is a heavenly mixture of chicken, mixed vegetables, fish and meats",
    "explanation": "Ispan oshxonasining tarkibi va mashhur taomlari. G: \"food: its features\"."
   },
   {
    "body": "Spain is very rich with traditions, especially those associated with food. For breakfast, some families buy fresh churros, pair them with hot chocolate and enjoy a leisurely morning routine. Lunch is another important meal of the day, and it is usually heavier than breakfast. This is sometimes followed by a siesta, an afternoon nap to get through post-lunch drowsiness. During this time, shops close and then open again after two or three hours of rest.",
    "answer": "E",
    "evidence": "For breakfast, some families buy fresh churros",
    "explanation": "Nonushta, tushlik va siesta, ya'ni ovqatlanish odatlari. E: \"food: eating habits\"."
   },
   {
    "body": "Spain is an important resting spot for migratory birds, and a home for many animals. But, unfortunately, many species of wildlife face threats from habitat loss and pollution. Due to centuries of tree cutting, large forests are now found only in a few areas in the country. Spain has created many national parks and refuges, but they cover only about seven percent of the country.",
    "answer": "A",
    "evidence": "Spain is an important resting spot for migratory birds",
    "explanation": "Qushlar, hayvonlar, o'rmonlar va milliy bog'lar haqida. A: \"with nature\"."
   },
   {
    "body": "Although there is a national parliament, Spain is one of the most decentralized democracies in Europe. Each of its 17 regions manages its own schools, hospitals, and other public services. The tourist services industry drives Spain's economy, but at the same time, since 1986, when Spain joined the European Community, it has worked to diversify its economy, by building important industries such as mining, shipbuilding, and textiles.",
    "answer": "F",
    "evidence": "Spain is one of the most decentralized democracies in Europe",
    "explanation": "Parlament, 17 ta mintaqa va iqtisodiyot, ya'ni davlat tuzilishi. F: \"Spain as a state\"."
   },
   {
    "body": "Bullfighting is one of the most famous traditions in Spain. This risky sport evolved from the ancient Roman gladiator games, with human matadors opposing charging bulls. However, this tradition has lately become widely debated and younger generations and animal-rights activists protest against bullfighting. Either way, it remains an iconic part of the country and bullfights take place in many Spanish towns and cities.",
    "answer": "D",
    "evidence": "Bullfighting is one of the most famous traditions in Spain",
    "explanation": "Buqalar jangi, ya'ni hayvonlar bilan bog'liq tomosha. D: \"entertainment with animals\"."
   }
  ]
 },
 {
  "n": 15,
  "title": "",
  "topic": "Flamingolar",
  "sub": "",
  "headings": [
   [
    "A",
    "How people started to collect their images"
   ],
   [
    "B",
    "Where they live"
   ],
   [
    "C",
    "How they confuse the scientists"
   ],
   [
    "D",
    "How they get their food"
   ],
   [
    "E",
    "What endangers them"
   ],
   [
    "F",
    "How people used to treat them"
   ],
   [
    "G",
    "How they breed"
   ],
   [
    "H",
    "How they scare the people"
   ]
  ],
  "paragraphs": [
   {
    "body": "Flamingos are very social and often live in large groups, called colonies, throughout the world. They are found in both the Eastern and Western hemispheres. The American Flamingo is the only one that lives in the wild in North America, and on many Caribbean islands such as the Bahamas, Cuba, and Hispaniola. It also lives in northern South America, the Galapagos Islands, and parts of Mexico.",
    "answer": "B",
    "evidence": "They are found in both the Eastern and Western hemispheres",
    "explanation": "Flamingolar qayerlarda yashashi: Karib orollari, Shimoliy va Janubiy Amerika, Meksika. B: \"where they live\"."
   },
   {
    "body": "Flamingos fish while walking in shallow water and mud. When a flaming0 notices its potential dinner (for example, shrimp, snails, and plantlike water organisms), it plunges its head into the water, twists its head upside down, and scoops the fish up using its upper beak like a shovel. Flamingos get their pink coloring from the carotenoid pigment in their food, which is the same pigment that makes carrots orange.",
    "answer": "D",
    "evidence": "scoops the fish up using its upper beak like a shovel",
    "explanation": "Ovqatni qanday tutishi tasvirlangan. D: \"how they get their food\"."
   },
   {
    "body": "Flamingos build nests that look like mounds of mud along waterways. The parents take turns sitting on the egg to keep it warm and after about 30 days the egg hatches. Young flamingos are born white, with soft, downy feathers and a straight bill. Both adult birds look after the newborn flamingo. The young leave the nest after about five days to join other young flamingos in small groups, returning to their parents for food.",
    "answer": "G",
    "evidence": "The parents take turns sitting on the egg",
    "explanation": "Uya qurish, tuxum bosish va jo'jalarni boqish, ya'ni ko'payish. G: \"how they breed\"."
   },
   {
    "body": "Scientists aren't 100% sure why flamingos stand on one leg, but they have some theories. One theory says that it is to keep one leg warm. Another idea is that flamingos are drying out one leg at a time. A third theory states that it helps them deceive their catch, because one leg looks more like a plant than do two. Whatever the reason, it is truly amazing that these top heavy birds can balance on one leg for hours at a time.",
    "answer": "C",
    "evidence": "Scientists aren't 100% sure why flamingos stand on one leg",
    "explanation": "Olimlar bir oyoqda turish sababini aniq bilmaydi, faqat nazariyalar bor. C: \"how they confuse the scientists\"."
   },
   {
    "body": "Ancient Egyptians believed that flamingos were the living representation of the god Ra. In the Americas, the Moche people of ancient Peru worshipped nature and paid a great deal of attention to these birds and often depicted flamingos in their art. However, Andean miners killed flamingos for their fat, which is believed to be a remedy for tuberculosis, and in Ancient Rome their tongues were considered a delicacy.",
    "answer": "F",
    "evidence": "Ancient Egyptians believed that flamingos were the living representation of the god Ra",
    "explanation": "Qadimda odamlar flamingolarga qanday munosabatda bo'lgani: sig'inishgan, ovlashgan, tilini yeyishgan. F: \"how people used to treat them\"."
   },
   {
    "body": "Many people have plastic flamingos in their yards as ornaments. This is a fun and inexpensive way to add some elegance to one's landscaping. In many parts of the world flamingos are popular collectibles, appearing in the form of magnets, water globes, and jewelry. They are also said to be an image that people find to be calming and exciting at the same time. For these purposes people buy millions of plastic flamingos annually all around the world.",
    "answer": "A",
    "evidence": "In many parts of the world flamingos are popular collectibles",
    "explanation": "Plastik flamingolar, magnitlar va boshqa tasvirlar yig'iladi. A: \"how people started to collect their images\"."
   }
  ]
 },
 {
  "n": 16,
  "title": "",
  "topic": "Dunyoning mashhur joylari",
  "sub": "",
  "headings": [
   [
    "A",
    "Ancient sculptures"
   ],
   [
    "B",
    "The really cool place"
   ],
   [
    "C",
    "Mysterious rocks"
   ],
   [
    "D",
    "Created to protect"
   ],
   [
    "E",
    "Natural wonder"
   ],
   [
    "F",
    "Lost city"
   ],
   [
    "G",
    "See a snake crawling down"
   ],
   [
    "H",
    "Go there now"
   ]
  ],
  "paragraphs": [
   {
    "body": "Eight thousand feet above sea level, this five-century-old pre-Columbian site was once home to the Incas. Until American historian Hiram Bingham publicized his findings of the area in a book called \"Across South America,\" the mountain-top ruins were widely unknown to anyone living outside of the Urubamba Valley. Since Spanish colonialists had no idea of Machu Picchu's existence, Incan architecture and design of the buildings were preserved.",
    "answer": "F",
    "evidence": "the mountain-top ruins were widely unknown",
    "explanation": "Machu Picchu uzoq vaqt hech kimga ma'lum bo'lmagan, ya'ni \"yo'qolgan\" shahar. F: \"lost city\"."
   },
   {
    "body": "Does the arrangement of the 25-ton sandstone blocks at Stonehenge suggest some sort of spiritual prediction? No one really knows. Theories about the nearly 5,000-year-old circular stone structure vary. The most intriguing time to visit Stonehenge is at sunset when a yellow-orange glow can be seen through the magnificent towers' arches making some people believe that it was originally a place of healing, while others think it was used for ancestor worship.",
    "answer": "C",
    "evidence": "suggest some sort of spiritual prediction? No one really knows",
    "explanation": "Stounxenj toshlari nima uchun qo'yilgani noma'lum. C: \"mysterious rocks\"."
   },
   {
    "body": "The 1,500-year-old pyramids, located near the town of Merida, may be less popular than their equivalents in Egypt, but they are just as remarkable. Although there are many structures there like the Temple of the Warriors or the Wall of Skulls, the main attraction is El Castillo, the 78-foot, 91-step central pyramid. The absolute best time to travel to El Castillo is at sunset when shadows give the illusion that a large serpent is sliding down the pyramid.",
    "answer": "G",
    "evidence": "a large serpent is sliding down the pyramid",
    "explanation": "Quyosh botganda soya piramidadan ilon tushayotgandek ko'rinadi. G: \"see a snake crawling down\"."
   },
   {
    "body": "The Earth's southernmost point, Antarctica, is the driest and coldest of the seven continents. For a place that is 98 per cent covered in one-mile deep ice, it is hard to imagine why anyone would want to visit it at all. But there is a strange beauty about Antarctica that is incomparable to anywhere else on the planet. Anyway, while Antarctica has no permanent residents there are often up to 5,000 researchers working there at a time.",
    "answer": "B",
    "evidence": "is the driest and coldest of the seven continents",
    "explanation": "Antarktida eng sovuq qit'a. \"Cool\" so'zi ham \"salqin\", ham \"ajoyib\" ma'nosida ishlatilgan. B: \"the really cool place\"."
   },
   {
    "body": "It is believed that hundreds of years ago the natives of Easter Island carved massive heads out of stone to honor their ancestors. Today, there are 887 \"moai,\" as the statues are called, which create a mysterious, yet intriguing landscape on this Polynesian island, which is a four-and-a-half hour flight from Lima, Peru. The tallest statue on the island, named Paro, is 33 feet high and weighs 82 tons.",
    "answer": "A",
    "evidence": "carved massive heads out of stone to honor their ancestors",
    "explanation": "Pasxa orolidagi qadimiy tosh haykallar (moai). A: \"ancient sculptures\"."
   },
   {
    "body": "North America's Red Canyon is 277 river miles long, eighteen miles wide, and one mile deep, and if it doesn't make your mouth drop with surprise, then you might not be human! Most tourists go there by car and there are plenty of spots along the way to pull the car over and have a look from the top. You can also go down into the canyon's depths and experience the very heart of the canyon by going rafting on the Colorado River, and even spend the night at a hotel below the rim.",
    "answer": "E",
    "evidence": "if it doesn't make your mouth drop with surprise",
    "explanation": "Kanyon inson qo'li bilan emas, tabiat tomonidan yaratilgan va hayratlanarli. E: \"natural wonder\"."
   }
  ]
 },
 {
  "n": 17,
  "title": "",
  "topic": "Max Factor va pardoz vositalari",
  "sub": "",
  "headings": [
   [
    "A",
    "New products, new leaders"
   ],
   [
    "B",
    "Good enough for the royal family"
   ],
   [
    "C",
    "From childhood and on"
   ],
   [
    "D",
    "Changes in cinematography, changes in make-up"
   ],
   [
    "E",
    "From women to the military"
   ],
   [
    "F",
    "New place, new make-up"
   ],
   [
    "G",
    "The company moves overseas"
   ],
   [
    "H",
    "From movie stars to every woman"
   ]
  ],
  "paragraphs": [
   {
    "body": "Max Factor is often called the father of modern make-up. The success story started in Max's early years. He was born Max Faktorowicz in Lodz, Poland, near the Russian border, around 1877. With 10 children, his parents could not afford formal education for their children, so at the age of eight Max was placed in an apprenticeship to a pharmacist. Years of mixing potions for the pharmacy developed his fascination with cosmetics.",
    "answer": "C",
    "evidence": "The success story started in Max's early years",
    "explanation": "Max Factorning bolaligi va sakkiz yoshidan boshlangan shogirdligi. C: \"from childhood and on\"."
   },
   {
    "body": "Eventually, Max opened his own shop in a suburb of Moscow, selling hand-made cosmetics. \"Health and beauty products\" became an important business for him. A traveling theatrical troupe bought and wore Max's make-up and wigs while performing for Russian nobility. Soon Max became the official cosmetic expert for members of the Russian court, the Imperial Grand Opera and the Ballet.",
    "answer": "B",
    "evidence": "Max became the official cosmetic expert for members of the Russian court",
    "explanation": "Rus imperatori saroyi uchun kosmetika yaratgan, ya'ni podsho oilasiga ham munosib. B: \"good enough for the royal family\"."
   },
   {
    "body": "In 1904, Max and his family moved to the United States. Max Faktorowicz was now Max Factor, the name given to him at Ellis Island by immigration officials. Now Max Factor was dreaming of movie actors and actresses using his products. He moved his family to Los Angeles. In 1914, Max Factor created a make-up specifically for movie actors that, unlike thick theatrical make-up, would not crack.",
    "answer": "F",
    "evidence": "Max and his family moved to the United States",
    "explanation": "AQShga ko'chib, kino aktyorlari uchun yangi grim yaratgan. F: \"new place, new make-up\"."
   },
   {
    "body": "The development of color film production required the Max Factor company to develop a new line of products. The existing make-up reflected surrounding colors. As a result of how bad they looked, many actors and actresses refused to appear in color films. At this time Frank Factor, Max's son, took the lead and developed a suitable product. It had a solid cake form and was applied with a damp sponge, which concealed skin imperfections.",
    "answer": "D",
    "evidence": "The development of color film production required the Max Factor company to develop a new line of products",
    "explanation": "Rangli kino paydo bo'lgach, grim ham o'zgarishi kerak bo'lgan. D: \"changes in cinematography, changes in make-up\"."
   },
   {
    "body": "Soon actresses and other women working on movie sets were stealing new makeup to use in their personal lives. Its only disadvantage for every day use was that it made the skin too dark under regular lights, having been designed for the powerful lights used in film studios, Frank Factor began developing lighter shades. In 1937, new \"Pan-Cake\" make-up was released to the public and it became one of the fastest selling cosmetic items.",
    "answer": "H",
    "evidence": "new \"Pan-Cake\" make-up was released to the public",
    "explanation": "Avval faqat aktrisalar uchun bo'lgan grim hamma ayollarga sotila boshlagan. H: \"from movie stars to every woman\"."
   },
   {
    "body": "After Max Factor's death, Frank Factor took the name Max Factor, Jr., and expanded the still private cosmetics firm. The company began development of a smear-proof lipstick which would not fade. A special machine was constructed to test the formula's resistance. The result was \"Tru-Color\" lipstick in six shades of red. During World War II, Max Factor developed makeup shades for use by the US Marine Corps in camouflaging faces.",
    "answer": "E",
    "evidence": "for use by the US Marine Corps in camouflaging faces",
    "explanation": "Ayollar kosmetikasidan tashqari harbiylar uchun niqob grimi ham ishlab chiqilgan. E: \"from women to the military\"."
   }
  ]
 },
 {
  "n": 18,
  "title": "",
  "topic": "G‘arb teatrining tarixi",
  "sub": "",
  "headings": [
   [
    "A",
    "Theatre and politics"
   ],
   [
    "B",
    "Ladies enter"
   ],
   [
    "C",
    "Origin of theatre"
   ],
   [
    "D",
    "Not the least important"
   ],
   [
    "E",
    "Varieties of theatres"
   ],
   [
    "F",
    "Stars for a repertoire"
   ],
   [
    "G",
    "A step to a wider variety"
   ],
   [
    "H",
    "Modern problems"
   ]
  ],
  "paragraphs": [
   {
    "body": "Modern Western theatre comes in large measure from ancient Greek drama, from which it takes technical terminology, classification into genres, and many of its themes, stock characters, and plot elements. The Greeks also developed the concepts of dramatic criticism, acting as a career, and theatre architecture. The theatre of ancient Greece consisted of three types of drama: tragedy, comedy, and the satyr play.",
    "answer": "C",
    "evidence": "Modern Western theatre comes in large measure from ancient Greek drama",
    "explanation": "G'arb teatrining kelib chiqishi qadimgi Yunon dramasiga borib taqaladi. C: \"origin of theatre\"."
   },
   {
    "body": "Western theatre developed and expanded considerably under the Romans. The Roman historian Livy wrote that the Romans first experienced theatre in the 4th century BC. The theatre of ancient Rome was a thriving and diverse art form, ranging from festival performances of street theatre, nude dancing, and acrobatics, to the staging of broadly appealing situation comedies, to the high-style, verbally elaborate tragedies.",
    "answer": "G",
    "evidence": "a thriving and diverse art form",
    "explanation": "Rimliklar davrida teatr turlari ko'paydi: ko'cha teatri, akrobatika, komediya, tragediya. G: \"a step to a wider variety\"."
   },
   {
    "body": "Theatre took on many different forms in the West between the 15th and 19th centuries, including commedia dell'arte and melodrama. The general trend was away from the poetic drama of the Greeks and the Renaissance and toward a more naturalistic prose style of dialogue, especially following the Industrial Revolution. Theatre today, broadly defined, includes performances of plays and musicals, ballets, operas and various other forms.",
    "answer": "E",
    "evidence": "Theatre took on many different forms in the West",
    "explanation": "XV–XIX asrlarda teatrning ko'plab turlari paydo bo'ldi. E: \"varieties of theatres\"."
   },
   {
    "body": "The eighteenth century in Britain introduced women to the stage, which would have been extremely inappropriate before. These women were looked at as celebrities but on the other hand, it was still very new and revolutionary that they were on the stage and some said they were unladylike and looked down on. Charles II did not like young men playing the parts of young women, so he asked that women play their own parts.",
    "answer": "B",
    "evidence": "introduced women to the stage",
    "explanation": "XVIII asrda ayollar sahnaga chiqa boshladi. B: \"ladies enter\"."
   },
   {
    "body": "Theatre took a big pause during 1642 and 1660 in England because of Cromwell's Interregnum. Theatre was seen as something sinful and the Puritans tried very hard to drive it out of their society. Because of this stagnant period, once Charles II came back to the throne in 1660, theatre (among other arts) exploded because of a lot of influence from France, where Charles was in exile the years previous to his reign.",
    "answer": "A",
    "evidence": "because of Cromwell's Interregnum",
    "explanation": "Kromvel hokimiyati davrida teatr taqiqlangan, ya'ni teatrga siyosat ta'sir qilgan. A: \"theatre and politics\"."
   },
   {
    "body": "Stagecraft is a term referring to the technical aspects of theatrical, film, and video production. It includes constructing scenery, hanging and focusing of lighting, design and procurement of costumes, makeup, props, stage management, and recording and mixing of sound. Considered a technical rather than an artistic field, it is equally crucial for the practical implementation of a designer's artistic idea.",
    "answer": "D",
    "evidence": "it is equally crucial for the practical implementation",
    "explanation": "Sahna texnikasi texnik soha bo'lsa ham, xuddi shunday muhim. D: \"not the least important\"."
   }
  ]
 },
 {
  "n": 19,
  "title": "",
  "topic": "Sayohat, mashhurlar va jurnallar",
  "sub": "",
  "headings": [
   [
    "A",
    "People and nature"
   ],
   [
    "B",
    "Star dreams"
   ],
   [
    "C",
    "Animals in danger"
   ],
   [
    "D",
    "Travel to stars"
   ],
   [
    "E",
    "Travel memories"
   ],
   [
    "F",
    "Family magazine"
   ],
   [
    "G",
    "Animal lover magazine"
   ],
   [
    "H",
    "Popular hobby"
   ]
  ],
  "paragraphs": [
   {
    "body": "Most people who spend a holiday travelling take a camera with them and photograph anything that interests them — sights of a city, views of mountains, lakes, waterfalls, men and women, children, ruins of ancient buildings, and even birds and animals. Later looking through their albums they will remember the happy time they have had, the islands, countries and cities they have seen.",
    "answer": "E",
    "evidence": "Later looking through their albums they will remember the happy time",
    "explanation": "Sayohatdagi suratlar yoqimli xotiralarni eslatadi. E: \"travel memories\"."
   },
   {
    "body": "Of course, different people dream of different things. Someone wishes calm and quiet life; others imagine their life as a never-ending adventure. The majority dream of something concrete: a villa in some warm place, an account in a Swiss bank, a splendid car... It's interesting to know what the dreams of people who already have all this are. Celebrities, as we know, never hide their unusual hobbies, and often shock us with their extravagant behaviour.",
    "answer": "B",
    "evidence": "It's interesting to know what the dreams of people who already have all this are",
    "explanation": "Hamma narsaga ega bo'lgan mashhurlar (\"stars\") nimani orzu qilishi haqida. B: \"star dreams\"."
   },
   {
    "body": "It is Junior Baseball Magazine's mission to provide information that enhances the youth baseball experience for the entire family. The player improves his skills and is more successful. The family enjoys the activity more and shares this precious time in their life. Junior Baseball emphasizes good sportsmanship, safety, physical fitness and wholesome family values.",
    "answer": "F",
    "evidence": "enhances the youth baseball experience for the entire family",
    "explanation": "Jurnal butun oila uchun mo'ljallangan. F: \"family magazine\"."
   },
   {
    "body": "The seas are in danger. They are filled with poison like industrial, nuclear and chemical waste. The Mediterranean Sea is already nearly dead; the North Sea is following it. The Aral Sea is on the brink of extinction. If nothing is done about it, one day nothing will be able to live in the seas. Every ten minutes one species of animal, plant or insect dies out forever.",
    "answer": "C",
    "evidence": "Every ten minutes one species of animal, plant or insect dies out forever",
    "explanation": "Dengizlar zaharlanmoqda, turlar yo'qolib ketmoqda. C: \"animals in danger\"."
   },
   {
    "body": "Lots of people all over the world enjoy collecting stamps. Stamps are like little pictures. Very often they show the flowers or the trees which grow in this or that country, or they can show different kinds of transport of the country. Stamps may also have portraits of famous people on them. Some stamps show art work from the history of the country.",
    "answer": "H",
    "evidence": "Lots of people all over the world enjoy collecting stamps",
    "explanation": "Marka yig'ish ko'pchilikning sevimli mashg'uloti. H: \"popular hobby\"."
   },
   {
    "body": "\"Friend\" is the title of my favourite magazine. It consists of 70 pages, with lots of colourful and bright pictures and provides interesting and useful information for people who love animals. The magazine includes numerous articles devoted to various topics connected with domestic animals, ways to take care of them, pet food, animal health and many other topics crucial for any animal lover.",
    "answer": "G",
    "evidence": "provides interesting and useful information for people who love animals",
    "explanation": "Hayvonlarni sevuvchilar uchun jurnal. G: \"animal lover magazine\"."
   }
  ]
 },
 {
  "n": 20,
  "title": "",
  "topic": "Sayohat va hayvonot bog'i",
  "sub": "",
  "headings": [
   [
    "A",
    "Difficult start"
   ],
   [
    "B",
    "A visit to the zoo"
   ],
   [
    "C",
    "Perfect for a quiet holiday"
   ],
   [
    "D",
    "Perfect for an active holiday"
   ],
   [
    "E",
    "Bad for animals"
   ],
   [
    "F",
    "Land of nature wonders"
   ],
   [
    "G",
    "New perspectives"
   ],
   [
    "H",
    "New rules to follow"
   ]
  ],
  "paragraphs": [
   {
    "body": "The mountains of Scotland (we call them the Highlands) are a wild and beautiful part of Europe. A golden eagle flies over the mountains. A deer walks through the silence of the forest. Salmon and trout swim in the clean, pure water of the rivers. Some say that not only fish swim in the deep water of Loch Ness. Speak to the people living by the Loch. Each person has a story of the monster, and some have photographs.",
    "answer": "F",
    "evidence": "Some say that not only fish swim in the deep water of Loch Ness",
    "explanation": "Burgutlar, kiyiklar, toza daryolar va Loch Ness afsonasi, ya'ni tabiat mo''jizalari o'lkasi. F: \"land of nature wonders\"."
   },
   {
    "body": "Tresco is a beautiful island with no cars, crowds or noise — just flowers, birds, long sandy beaches and the Tresco Abbey Garden. John and Wendy Pyatt welcome you to the Island Hotel, famous for delicious food, comfort and brilliant service. You will appreciate superb accommodation, free saunas and the indoor swimming pool.",
    "answer": "C",
    "evidence": "no cars, crowds or noise",
    "explanation": "Mashina, olomon va shovqin yo'q, faqat gullar va plyajlar: tinch dam olish uchun. C: \"perfect for a quiet holiday\"."
   },
   {
    "body": "The Camel and Wildlife Safari is a unique mixture of the traditional and modern. Kenya's countryside suits the Safari purposes exceptionally well. Tourists will have a chance to explore the bush country near Samburu, to travel on a camel back or to sleep out under the stars. Modern safari vehicles are always available for those who prefer comfort.",
    "answer": "D",
    "evidence": "to travel on a camel back or to sleep out under the stars",
    "explanation": "Tuyada yurish, butazorda sayr qilish kabi faol mashg'ulotlar. D: \"perfect for an active holiday\"."
   },
   {
    "body": "Arrival can be the hardest part of a trip. It is late, you are road-weary, and everything is new and strange. You need an affordable place to sleep, something to eat and drink, and probably a way to get around. But in general, it's a wonderful trip, full of wonderful and unusual places. Whether it is the first stop on a trip or the fifth city visited, every traveller feels a little overwhelmed stepping onto a new street in a new city.",
    "answer": "A",
    "evidence": "Arrival can be the hardest part of a trip",
    "explanation": "Yangi joyga yetib kelish eng qiyin qism. A: \"difficult start\"."
   },
   {
    "body": "No zoo has enough money to provide basic habitats or environments for all the species they keep. Most animals are put in a totally artificial environment, isolated from everything they would meet in their natural habitat. Many will agree that this isolation is harmful to the most of zoo inhabitants, it can even amount to cruelty.",
    "answer": "E",
    "evidence": "this isolation is harmful to the most of zoo inhabitants",
    "explanation": "Sun'iy muhit hayvonlarga zararli, hatto shafqatsizlik. E: \"bad for animals\"."
   },
   {
    "body": "A new London Zoo Project is a ten-year project to secure the future for the Zoo and for many endangered animals. The plan has been devised by both animal and business experts to provide world-leading accommodation for all our animals, to more fully engage and inform people about conservation issues, to redesign certain aspects of Zoo layout.",
    "answer": "G",
    "evidence": "to secure the future for the Zoo and for many endangered animals",
    "explanation": "Hayvonot bog'ining kelajagi uchun yangi o'n yillik loyiha. G: \"new perspectives\" (yangi istiqbollar). H to'g'ri emas: yangi qoidalar haqida gap yo'q."
   }
  ]
 },
 {
  "n": 21,
  "title": "",
  "topic": "Litva",
  "sub": "",
  "headings": [
   [
    "A",
    "Leisure and sport"
   ],
   [
    "B",
    "Geography"
   ],
   [
    "C",
    "Economic outlook"
   ],
   [
    "D",
    "National language"
   ],
   [
    "E",
    "Customs and traditions"
   ],
   [
    "F",
    "Freedom of media"
   ],
   [
    "G",
    "Public transport"
   ],
   [
    "H",
    "Modern history"
   ]
  ],
  "paragraphs": [
   {
    "body": "Lithuania is situated on the eastern Baltic coast and borders Latvia in the north, the Kaliningrad region of the Russian Federation and Poland in the southwest, and Belarus in the southwest and east. The geometrical centre of Europe lies in eastern Lithuania 25km north of its capital Vilnius. The landscape varies between lowland plains and hilly uplands and has a complex network of rivers.",
    "answer": "B",
    "evidence": "Lithuania is situated on the eastern Baltic coast",
    "explanation": "Joylashuv, chegaradosh davlatlar va landshaft. B: \"geography\"."
   },
   {
    "body": "Lithuania has historically been the least developed of the Baltic republics, with a smaller industrial base and greater dependence on agriculture. Sugar beet, cereals, potatoes and vegetables are the main crops. Lithuania's foreign trade has gradually changed during the 1990s and now the European Union, not Russia, is its main trading partner.",
    "answer": "C",
    "evidence": "the least developed of the Baltic republics",
    "explanation": "Sanoat, qishloq xo'jaligi va tashqi savdo. C: \"economic outlook\"."
   },
   {
    "body": "Lithuanian is the mother tongue for 80% of the population. After the country joined the European Union in 2004 this language has become one of the EU official languages. Lithuania has a large number of dialects for such a small territory, including High Lithuanian and Low Lithuanian.",
    "answer": "D",
    "evidence": "Lithuanian is the mother tongue for 80% of the population",
    "explanation": "Davlat tili va shevalar. D: \"national language\"."
   },
   {
    "body": "Lithuania offers different opportunities for a nice vacation. You can explore a range of large sand dunes and pine forests while hiking in the Curonian Spit National Park, take part in some action sports in Nida, a village that makes a true paradise for sailing, windsurfing, paragliding and kiting, or try out more extreme sports, such as hot-air ballooning and gliding.",
    "answer": "A",
    "evidence": "Lithuania offers different opportunities for a nice vacation",
    "explanation": "Dam olish, sayr va ekstremal sport turlari. A: \"leisure and sport\"."
   },
   {
    "body": "Those who are interested in folklore may enjoy their stay in Lithuania in any season of the year. The Mardi Gras celebrations are held in various Lithuanian cities and small towns at the beginning of February. The Folklore Festival is held in Vilnius' Old Town during in May. There you can see craft fairs, taste traditional dishes, join song and parties and listen to psalms.",
    "answer": "E",
    "evidence": "Those who are interested in folklore",
    "explanation": "Folklor, bayramlar, an'anaviy taomlar. E: \"customs and traditions\"."
   },
   {
    "body": "Lithuania's TV market is dominated by commercial channels. The radio market is similarly competitive. Lithuania's media are free and operate independently of the state, and there are no government-owned newspapers. However, politicians do occasionally attempt to influence editorial policy.",
    "answer": "F",
    "evidence": "Lithuania's media are free and operate independently of the state",
    "explanation": "OAV davlatdan mustaqil. F: \"freedom of media\"."
   }
  ]
 },
 {
  "n": 22,
  "title": "",
  "topic": "Norvegiya",
  "sub": "",
  "headings": [
   [
    "A",
    "Eating out"
   ],
   [
    "B",
    "Place to stay in"
   ],
   [
    "C",
    "Great outdoors"
   ],
   [
    "D",
    "National languages"
   ],
   [
    "E",
    "Ways of behaviour"
   ],
   [
    "F",
    "Nightlife"
   ],
   [
    "G",
    "Expenses"
   ],
   [
    "H",
    "Favourite food"
   ]
  ],
  "paragraphs": [
   {
    "body": "Norway is first of all a land for those who love nature. The breathtaking fjords in the southwest of the country and Europe's largest glacier are Norway's most attractive places, but there are many other reasons to visit this country in the north of Europe. There are wonderful opportunities to enjoy skiing, fishing and rock-climbing. Others can take pleasure in the charm of the Norwegian countryside, with its countless valleys, high mountain lakes and unbelievable views.",
    "answer": "C",
    "evidence": "Norway is first of all a land for those who love nature",
    "explanation": "Fyordlar, muzliklar, chang'i va baliq ovi, ya'ni ochiq havodagi tabiat. C: \"great outdoors\"."
   },
   {
    "body": "Many tourists coming to Norway in the summer prefer to stay in a cottage used by northern Norwegian fishermen during the winter cod-fishing season. Equipped with all the necessary facilities, these cottages are leased to holidaymakers, providing an attractive form of accommodation. They will often be actually over the water. Catching your own fish and cooking it on the fire will add a few pleasant moments to your holiday.",
    "answer": "B",
    "evidence": "these cottages are leased to holidaymakers",
    "explanation": "Sayyohlar baliqchilar uyida turishadi. B: \"place to stay in\"."
   },
   {
    "body": "Norway has a long history of fishing, although much of the high quality shellfish and other species caught off the coast are exported. However, fish remains a common dish, along with meat, potatoes and other root vegetables, although tastes have changed in recent years to involve a wider international choice, including pizzas and burgers. The most popular traditional hot snack is a form of sausage, sold at numerous outlets.",
    "answer": "H",
    "evidence": "fish remains a common dish",
    "explanation": "Baliq, go'sht, kartoshka va eng sevimli issiq gazak, ya'ni kolbasa. H: \"favourite food\"."
   },
   {
    "body": "Traditionally entertainment in the country is largely home-based, but this has been changing in recent years. Most Norwegians tend to go out only on Fridays and Saturdays, the rest of the week being fairly quiet. This is in no small part due to the high prices of food and drink, and the fact that the working day starts early. And at weekends, it is normal for the Norwegians to enjoy drinks at home before leaving it as late as 11.00 p.m.",
    "answer": "F",
    "evidence": "Most Norwegians tend to go out only on Fridays and Saturdays",
    "explanation": "Kechki ko'ngilochar hayot qanday o'tishi aytiladi. F: \"nightlife\"."
   },
   {
    "body": "Restaurants tend to be concentrated in city centres, while in recent years the pub culture has been gradually arriving in Norway. Cities are nowadays well supplied with a wide choice of bars, many of which offer food that has a lower price compared to the restaurants. Most villages of any size have at least one cafe or restaurant where it is possible to drink and eat out.",
    "answer": "A",
    "evidence": "Restaurants tend to be concentrated in city centres",
    "explanation": "Restoranlar, barlar, kafelar, ya'ni tashqarida ovqatlanish. A: \"eating out\"."
   },
   {
    "body": "Norwegians are generally sincere and polite, though communication doesn't often come easy — it is usually up to you to break the ice and establish contact. They can be very direct and rarely say 'please', which may seem rude, but it's due to the fact that the Norwegian language rarely uses the word. On the other hand, they say 'thank you' for almost everything. They also tend to address people by their first name even on many formal occasions.",
    "answer": "E",
    "evidence": "Norwegians are generally sincere and polite",
    "explanation": "Norvegiyaliklarning muomalasi va odatlari. E: \"ways of behaviour\"."
   }
  ]
 },
 {
  "n": 23,
  "title": "",
  "topic": "Futbol sirlari",
  "sub": "",
  "headings": [
   [
    "A",
    "Puree instead of pasta"
   ],
   [
    "B",
    "Ideal football shape"
   ],
   [
    "C",
    "Referee's perspective"
   ],
   [
    "D",
    "Length matters"
   ],
   [
    "E",
    "Stress of relaxation"
   ],
   [
    "F",
    "Footballers' diets"
   ],
   [
    "G",
    "Secret born in the USSR"
   ],
   [
    "H",
    "Flying fruit"
   ]
  ],
  "paragraphs": [
   {
    "body": "Good footballers must have something in their genes. Scientists have discovered a link between the length of a footballer's ring finger and their ability as a player. They compared the ring and index fingers of top players. Players whose ring fingers were longer compared to their index finger were more likely to be elite players. Some of the players found to have long ring fingers are Bryan Robson, Ossie Ardiles, Glenn Hoddle, Sir Stanley Matthews and Gazza.",
    "answer": "D",
    "evidence": "a link between the length of a footballer's ring finger and their ability",
    "explanation": "Nomsiz barmoq uzunligi futbolchining mahoratiga bog'liq. D: \"length matters\"."
   },
   {
    "body": "Fitness training is absolutely necessary for a first-rate football team. Jogging up and down the stadium a few times is not enough. What footballers really need is a quick start. Footballers can get this ability to start running very quickly by using a training method called 'plyometrics'. In the 1960s, athletes in the Soviet Union used plyometric exercises to improve their results in jumping. Step by step, the method has become very important for many sports that include sprinting and jumping.",
    "answer": "G",
    "evidence": "In the 1960s, athletes in the Soviet Union used plyometric exercises",
    "explanation": "Pliometrika usuli SSSRda paydo bo'lgan. Mazmunan bu G: \"secret born in the USSR\". Kitob kalitida 2 va 3-javoblar (F va G) almashib qolgan, bu yerda mazmunga qarab berildi."
   },
   {
    "body": "In the past, footballers used to have a big fried breakfast — or even a roast dinner — before a football match. In the new era of professional football, the menu of modern players has been radically reformed. Arsenal manager, Arsene Wenger, is known for his scientific method of feeding his team. When he first came to the club in 1996, he at once changed the players' dinner menus. Sugar, red meat, chips, fried foods and dairy products were out. Vegetables, fish, chicken and plenty of water were in.",
    "answer": "F",
    "evidence": "the menu of modern players has been radically reformed",
    "explanation": "Futbolchilarning ovqatlanishi o'zgargan: shakar va qovurilgan taom o'rniga sabzavot, baliq. F: \"footballers' diets\"."
   },
   {
    "body": "French diet specialists heavily criticized the pre-match diet of the England players in Euro '96. Their menu of tomato soup and spaghetti was said to be more likely to produce wind than a win. Potatoes, according to French scientists, make the best meal on the day of a game. They have glucides, which give the player a lot of energy. They also include useful vitamins. According to one piece of research, a player should eat 200-300 grams of mashed potatoes, boiled for 20 minutes, exactly three hours before going to the game.",
    "answer": "A",
    "evidence": "Potatoes, according to French scientists, make the best meal",
    "explanation": "Spagetti o'rniga kartoshka pyuresi tavsiya qilinadi. A: \"puree instead of pasta\"."
   },
   {
    "body": "Physics can explain a football wonder — the banana kick. This happens when a ball suddenly changes its direction at the end of its flight. At a certain speed, the air flowing over a flying ball becomes 'turbulent'. This means that the air moves irregularly over the ball. As the ball slows down, the air becomes 'smooth' again. This slowdown makes the ball turn dramatically, creating the wonderful 'banana' kicks that the spectators like so much.",
    "answer": "H",
    "evidence": "the banana kick",
    "explanation": "Havoda burilib uchadigan to'p \"banan\" zarbasi deyiladi. H: \"flying fruit\"."
   },
   {
    "body": "These days, footballs are made in a design based on the 'Buckminster Ball'. The American architect Richard Buckminster Fuller came up with the design when he was trying to find a way for constructing buildings using a minimum of materials. The ball is a series of geometrical figures, which can be fitted together to make a round body. The modern football is in fact a Buckminster Ball consisting of 32 pieces. When they are joined together and filled with air they make a perfect sphere.",
    "answer": "B",
    "evidence": "When they are joined together and filled with air they make a perfect sphere",
    "explanation": "To'pning ideal sharsimon shakli. B: \"ideal football shape\"."
   }
  ]
 },
 {
  "n": 24,
  "title": "",
  "topic": "Tennis va Uimbldon",
  "sub": "",
  "headings": [
   [
    "A",
    "Ads with wings"
   ],
   [
    "B",
    "Quick reaction"
   ],
   [
    "C",
    "Unexpected prize"
   ],
   [
    "D",
    "Training the mind"
   ],
   [
    "E",
    "Losing control"
   ],
   [
    "F",
    "Chemistry in tennis"
   ],
   [
    "G",
    "Welsh roots"
   ],
   [
    "H",
    "Too fast"
   ]
  ],
  "paragraphs": [
   {
    "body": "By now Wimbledon has become a popular national festival, together with Ascot and the Cup Final. Many people in Britain don't know that tennis was first played in Wales. It was there, in 1873, that Major Walter Wingfield played a game with the recently invented rubber balls and enjoyed it so much, that he decided to develop the standards of the game. He published the first book of tennis rules later that year. The first Wimbledon championship was held a few years later in 1877 and the British Lawn Tennis Association formed in 1888.",
    "answer": "G",
    "evidence": "tennis was first played in Wales",
    "explanation": "Tennis Uelsda paydo bo'lgan. G: \"Welsh roots\"."
   },
   {
    "body": "Good mental preparation is necessary for professional tennis players. In a long match they can be on the court for several hours with nobody to talk to. There can be hundreds of stops from the crowd, their opponent and, especially at Wimbledon, the rain. Players need to practice methods for improving their concentration and for motivating themselves when the game is going against them. They are often taught to imagine some situations, such as a tense tie-break. Then they imagine what to do with it.",
    "answer": "D",
    "evidence": "Good mental preparation is necessary",
    "explanation": "Diqqatni jamlash va vaziyatni tasavvur qilish mashqlari. D: \"training the mind\"."
   },
   {
    "body": "Many players find it impossible to stay calm in the stressful situation of a long tennis match and let their temper out. John McEnroe was famous for his quarrels with referees. Several players have been given warnings for throwing the racket or swearing. Some players lose matches they could easily win because their mind lets them down. Pat Rafter said that he couldn't breathe in his 2000 Wimbledon final. The stress of being near the victory can be too much for a person.",
    "answer": "E",
    "evidence": "let their temper out",
    "explanation": "O'yinchilar jahlini tiya olmaydi, raketka otadi, so'kinadi. E: \"losing control\"."
   },
   {
    "body": "The power of today's tennis game is only partly created by the athletes themselves. Much of it comes from their rackets. New designs mean players can hit the ball with more speed and accuracy than ever before. It started in the 1970s when the traditional wooden racket was replaced with metal. Since then different materials have been used. Graphite has made the biggest influence. Now the graphite can be mixed with materials such as boron and titanium to produce even stronger, and lighter, rackets.",
    "answer": "F",
    "evidence": "Graphite has made the biggest influence",
    "explanation": "Raketkalar materiali: metall, grafit, bor, titan, ya'ni kimyo. F: \"chemistry in tennis\"."
   },
   {
    "body": "Speed isn't always a good thing. Many fans are complaining that the speed of the game is making tennis boring to watch. After two years of testing, a new ball has now been invented which could slow down tennis and make it more exciting to watch. The ball is put together in exactly the same way as the one used now, but is 6% larger in diameter. The bigger ball gives the receiver 10% more reaction time in which to return the serve. So the number of aces — serves in a match that the receiver fails to return — will be far fewer.",
    "answer": "H",
    "evidence": "Speed isn't always a good thing",
    "explanation": "O'yin juda tez bo'lib ketgani muammo. H: \"too fast\"."
   },
   {
    "body": "When Irishman John Boland travelled to Athens for the first modern Olympic Games in 1896, he had no idea he would return home with the gold medal in tennis. But then, he had no idea he would compete either — he went to watch the competion. In comparison, today's Olympic tennis players include some of the best athletes in the world. They are used to five-star hotels and hundreds of thousands of dollars, but at the Olympic Games they will stay in the Olympic Village and compete for nothing but a gold medal.",
    "answer": "C",
    "evidence": "he had no idea he would return home with the gold medal in tennis",
    "explanation": "Tomosha qilgani borgan, lekin oltin medal olgan. C: \"unexpected prize\"."
   }
  ]
 },
 {
  "n": 25,
  "title": "",
  "topic": "Britaniya transporti muammolari",
  "sub": "",
  "headings": [
   [
    "A",
    "Bicycle is faster"
   ],
   [
    "B",
    "Controlling skies"
   ],
   [
    "C",
    "Office at home"
   ],
   [
    "D",
    "Lack of safety"
   ],
   [
    "E",
    "Paid roads"
   ],
   [
    "F",
    "Improving railways"
   ],
   [
    "G",
    "Blocked roads"
   ],
   [
    "H",
    "Buses instead of cars"
   ]
  ],
  "paragraphs": [
   {
    "body": "The world's first public passenger railway was built in Great Britain in 1826 and ran between the industrial north-eastern towns of Stockton and Darlington. After 180 years' experience the British say that their trains still don't seem to run efficiently or even safely. On average, about 500 accidents with broken rail tracks happen in the country every year.",
    "answer": "D",
    "evidence": "trains still don't seem to run efficiently or even safely",
    "explanation": "Har yili 500 ga yaqin temir yo'l avariyasi, ya'ni xavfsizlik yetishmaydi. D: \"lack of safety\"."
   },
   {
    "body": "The British government is promising to give £33.5 billion to modernise the railways before 2010. Another £30 billion is to come from the private sector. The main target is to increase safety and speed. For example, new London-to-Scotland high-speed trains significantly reduce journey times and in 2004 a warning system was installed throughout the country.",
    "answer": "F",
    "evidence": "to modernise the railways before 2010",
    "explanation": "Hukumat temir yo'lni zamonaviylashtirishga mablag' ajratadi. F: \"improving railways\"."
   },
   {
    "body": "Statistics show that only 12% of all journeys made in Britain are by public transport. The remaining 88% are made by car. Every year British people spend about two weeks travelling to and from work including nine days in their own cars. But anyone will say this isn't a quick and easy way to travel. In fact, a journey from London to Manchester frequently takes seven hours. A cyclist could get there quicker.",
    "answer": "A",
    "evidence": "A cyclist could get there quicker",
    "explanation": "Mashinada yetti soat yuriladi, velosipedchi tezroq yetib boradi. A: \"bicycle is faster\"."
   },
   {
    "body": "Every year there are about half a million traffic jams in Britain. That is nearly 10,000 a week. There are hundreds of big traffic jams every day. According to the forecast, the number of jams will grow by 20 per cent over the next ten years. Nearly a quarter British people find themselves in a jam every day and 55 per cent at least once a week.",
    "answer": "G",
    "evidence": "about half a million traffic jams in Britain",
    "explanation": "Tirbandliklar soni va ularning ko'payishi. G: \"blocked roads\"."
   },
   {
    "body": "Nowadays many British people take their children to school by car. Twenty years ago, nearly one in three primary school children made their own way to school. Now only one child in nine makes their own way. During the school year at 08:50 a.m. one car in five on the roads in any British town is taking children to school. The solution could be special school buses widely used in the USA.",
    "answer": "H",
    "evidence": "The solution could be special school buses",
    "explanation": "Bolalarni mashinada olib borish o'rniga maktab avtobuslari taklif qilinadi. H: \"buses instead of cars\"."
   },
   {
    "body": "Many scientists hope that new technologies allowing more people to work at home may help with traffic problems. Fewer people will work from 9 to 5 and travel to and from work during the rush hour. But only 15% of people now want to spend more time working at home. The workplace is, for many people, a place to meet other people and to talk to them, so they would miss it if they worked from home.",
    "answer": "C",
    "evidence": "allowing more people to work at home",
    "explanation": "Uydan ishlash tirbandlikni kamaytirishi mumkin. C: \"office at home\"."
   }
  ]
 },
 {
  "n": 26,
  "title": "",
  "topic": "Amerika, texnologiya va urf-odatlar",
  "sub": "",
  "headings": [
   [
    "A",
    "All in One"
   ],
   [
    "B",
    "Historical Separation"
   ],
   [
    "C",
    "US Younger Generation"
   ],
   [
    "D",
    "Britain, the World Empire"
   ],
   [
    "E",
    "Useful invention"
   ],
   [
    "F",
    "Verbal Misunderstanding"
   ],
   [
    "G",
    "Modern Branch of Industry"
   ],
   [
    "H",
    "Old Enough"
   ]
  ],
  "paragraphs": [
   {
    "body": "For 150 years America was a British colony. At that time British and American English were almost exactly the same. When America won the War of Independence in 1776, it became a free country. The USA was quickly growing richer, and millions of Europeans came to settle here. They brought new words and expressions to the language. As a result, English in America began to develop in its own way and today, there are certain differences in pronunciation, grammar, vocabulary and spelling between American and British English.",
    "answer": "B",
    "evidence": "English in America began to develop in its own way",
    "explanation": "Mustaqillikdan keyin Amerika ingliz tili Britaniyanikidan ajrala boshlagan. B: \"historical separation\"."
   },
   {
    "body": "Typical American teenagers are in fact very ordinary. They think their teachers make them work too hard, they love their parents but are sure they don't understand anything, and their friendships are the most important things in their lives. Some of them do have a lot of money to spend, but usually they have earned it themselves. Most young people take jobs while they are in school. They work at movie theatres, fastfood restaurants, gas stations, and stores to pay for their clothes and entertainment. Maybe this is what makes them so independent from their parents at such a young age?",
    "answer": "C",
    "evidence": "Typical American teenagers are in fact very ordinary",
    "explanation": "Amerikalik o'smirlar hayoti, ya'ni yosh avlod. C: \"US younger generation\"."
   },
   {
    "body": "Is it possible to have one device with the functions of a TV-set, a Pc and the Internet? With the advent of Internet TV it has become a reality. Imagine watching a film on TV and getting information on the actors in the film at the same time! To enter web-addresses and write e-mails you use a remote control and an onscreen keyboard or an optional wireless keyboard. By clicking a button, you can also read adverts, 'chat' with a friend, plan your holiday and play your favourite video games. And in the future you' be able to change the plot of the film you are watching!",
    "answer": "A",
    "evidence": "one device with the functions of a TV-set, a Pc and the Internet",
    "explanation": "Bitta qurilmada televizor, kompyuter va internet. A: \"all in one\"."
   },
   {
    "body": "When do you stop being a child and become an adult? There are lots of laws about the age when you can start doing things. In Britain, for example, you can get married at 16, but you cannot get a tattoo until you are 18. In most American states you can have a driving license at 17, but you cannot drink until you are 21. In Russia you can be put in prison when you are 16, but you cannot vote until you are 18. In fact, most European countries and the US have the same age for voting: 18. Many people, however, think that this is unfair. They would like to vote at an earlier age.",
    "answer": "H",
    "evidence": "When do you stop being a child and become an adult?",
    "explanation": "Turli ishlarni qaysi yoshdan qilish mumkinligi haqidagi qonunlar. H: \"old enough\"."
   },
   {
    "body": "Blue jeans were a by-product of the Gold Rush. The man who invented jeans, Levi Strauss, emigrated from Germany to San Francisco in 1850. Levi was 20 years old, and he decided to sell clothes to the miners who were in California in search of gold. When he was told that durable trousers were the most needed item of clothing, Levi began making jeans of heavy tent canvas. Levi's jeans were an immediate success. Soon he switched from canvas to a cotton fabric which came from Nimes, a city in France. The miners called it 'denim' and bought a lot of trousers from Strauss.",
    "answer": "E",
    "evidence": "Levi's jeans were an immediate success",
    "explanation": "Jinsi shimlar konchilar uchun chidamli kiyim sifatida ixtiro qilingan. E: \"useful invention\"."
   },
   {
    "body": "Some fifty years ago people hadn't even heard of computers, and today we cannot imagine our life without them. Computer technology is now the fastest-growing industry in the world. The first computer was the size of a minibus and weighed a ton. Today, its job can be done by a chip the size of a pinhead. And the revolution is still going on. Very soon we'll have computers that we'll wear on our wrists or even in our glasses and ear-rings. Such wearable computers are now being developed in the USA.",
    "answer": "G",
    "evidence": "Computer technology is now the fastest-growing industry in the world",
    "explanation": "Kompyuter texnologiyasi eng tez o'sayotgan soha. G: \"modern branch of industry\"."
   }
  ]
 },
 {
  "n": 27,
  "title": "",
  "topic": "Mobil telefonlar",
  "sub": "",
  "headings": [
   [
    "A",
    "SMS to premier"
   ],
   [
    "B",
    "New language"
   ],
   [
    "C",
    "For parents and friends"
   ],
   [
    "D",
    "Threat for kids"
   ],
   [
    "E",
    "Mobile future"
   ],
   [
    "F",
    "Radiation threat"
   ],
   [
    "G",
    "Mobile booking office"
   ],
   [
    "H",
    "Feeling of safety"
   ]
  ],
  "paragraphs": [
   {
    "body": "Mobile phones use 'radio waves' to send signals. Since the 1920s, scientists have known that radio waves can cause the heating of the skin and influence the nervous system. But mobile phones don't produce many radio waves. Still children should be especially careful about mobile phone use because their nervous system may be hurt. Children should only use mobiles for short calls.",
    "answer": "D",
    "evidence": "Children should only use mobiles for short calls",
    "explanation": "Bolalarning asab tizimi zarar ko'rishi mumkin. D: \"threat for kids\"."
   },
   {
    "body": "It is known that the strength of radio wave radiation decreases with distance. It suggests that hands-free sets may be effective in avoiding all the dangers of mobile phones. But another study described an increase in radiation that reached the user of a hands-free set. It says that the cable of the hands-free set acted as an antenna, directing more radio waves into the user's ear.",
    "answer": "F",
    "evidence": "directing more radio waves into the user's ear",
    "explanation": "Radioto'lqin nurlanishi va qulog'iga ko'proq nur tushishi. F: \"radiation threat\"."
   },
   {
    "body": "Train passengers will soon be able to buy tickets on their mobile phone. Chiltern Railways plans to sell tickets through mobile phones. The new technology sends a code to a mobile phone in a text message, which passengers can then scan at the station ticket barrier. It's hope the method will make buying tickets easier for passengers and help fight against queues at stations.",
    "answer": "G",
    "evidence": "Train passengers will soon be able to buy tickets on their mobile phone",
    "explanation": "Telefon orqali chipta sotish, ya'ni mobil kassa. G: \"mobile booking office\"."
   },
   {
    "body": "Many parents now use mobiles to control their children's behaviour. It gives parents peace of mind and makes young people feel protected. Parents say that young people are safer with mobiles than without them. But, while parents said they liked to call their children on the mobile to actually hear their voice, young people liked to send text messages to parents.",
    "answer": "H",
    "evidence": "makes young people feel protected",
    "explanation": "Telefon ota-onalarga xotirjamlik, yoshlarga himoya hissini beradi. H: \"feeling of safety\"."
   },
   {
    "body": "A research showed that those young people who have a mobile feel more independent and often use it to plan meetings both relatives and peers. In particular, young people often use mobiles to ask their parents if they can come home later. The study showed that girls more often text parents to let them know they were safe than boys. They also use text messaging for socializing purposes.",
    "answer": "C",
    "evidence": "plan meetings both relatives and peers",
    "explanation": "Yoshlar telefonni qarindoshlar va tengdoshlar bilan aloqa uchun ishlatadi. C: \"for parents and friends\"."
   },
   {
    "body": "It is not only parents who want to connect with young people through mobile technologies. Nowadays politicians and different organizations look for ways to use text messaging as a channel for communication with the young. In late 2004, the UK government offered people the opportunity to 'text Tony'. People were invited to send a text question to the prime minister to be answered as part of a 'mobile chat'.",
    "answer": "A",
    "evidence": "send a text question to the prime minister",
    "explanation": "Bosh vazirga SMS yuborish imkoniyati. A: \"SMS to premier\"."
   }
  ]
 },
 {
  "n": 28,
  "title": "Review of Research on the Effects of Food Promotion to Children",
  "topic": "Bolalar va oziq-ovqat reklamasi",
  "sub": "",
  "headings": [
   [
    "A",
    "Underestimating the effects advertising has on children"
   ],
   [
    "B",
    "How much children really know about food"
   ],
   [
    "C",
    "General points of agreements and disagreements of researchers"
   ],
   [
    "D",
    "Need to take action"
   ],
   [
    "E",
    "Evidence that advertising affects what children buy to eat"
   ],
   [
    "F",
    "Advertising's focus on unhealthy options"
   ],
   [
    "G",
    "How parents influence children's eating habits"
   ],
   [
    "H",
    "Connection of advertising and children's weight problems"
   ]
  ],
  "paragraphs": [
   {
    "body": "Children's food promotion is dominated by television advertising, and the great majority of this promotes the so-called 'Big Four' of pre-sugared breakfast cereals, soft-drinks, confectionary and savory snacks. In the last ten years advertising for fast food outlets has rapidly increased. There is some evidence that the dominance of television has recently begun to wane. The importance of strong, global branding reinforces a need for multi-faceted communications combining television with merchandising, 'tie-ins' and point of sale activity. The advertised diet contrasts sharply with that recommended by public health advisors, and themes of fun and fantasy or taste, rather than health and nutrition, are used to promote it to children. Meanwhile, the recommended diet gets little promotional support.",
    "answer": "F",
    "evidence": "the great majority of this promotes the so-called 'Big Four'",
    "explanation": "Reklama asosan shirin yorma, gazli ichimlik, konfet va gazaklarni targ'ib qiladi; tavsiya etilgan sog'lom ovqat esa reklama qilinmaydi. F: \"advertising's focus on unhealthy options\"."
   },
   {
    "body": "There is plenty of evidence that children notice and enjoy food promotion. However, establishing whether this actually influences them is a complex problem. The review tackled it by looking at studies that had examined possible effects on what children know about food, their food preferences, their actual food behaviour (both buying and eating), and their health outcomes (eg. obesity or cholesterol levels). The majority of studies examined food advertising, but a few examined other forms of food promotion. In terms of nutritional knowledge, food advertising seems to have little influence on children's general perceptions of what constitutes a healthy diet, but, in certain contexts, it does have an effect on more specific types of nutritional knowledge. For example, seeing soft drink and cereal adverts reduced primary aged children's ability to determine correctly whether or not certain products contained real fruit.",
    "answer": "B",
    "evidence": "food advertising seems to have little influence on children's general perceptions of what constitutes a healthy diet",
    "explanation": "Reklama bolalarning ovqat haqidagi bilimiga qanday ta'sir qilishi tahlil qilinadi. B: \"how much children really know about food\"."
   },
   {
    "body": "The review also found evidence that food promotion influences children's food preferences and their purchase behaviour. A study of primary school children, for instance, found that exposure to advertising influenced which foods they claimed to like; and another showed that labeling and signage on a vending machine had an effect on what was bought by secondary school pupils. A number of studies have also shown that food advertising can influence what children eat. One, for example, showed that advertising influenced a primary class's choice of daily snack at playtime.",
    "answer": "E",
    "evidence": "influences children's food preferences and their purchase behaviour",
    "explanation": "Reklama bolalar nimani yoqtirishi, nimani sotib olishi va yeyishiga ta'sir qiladi. E: \"evidence that advertising affects what children buy to eat\"."
   },
   {
    "body": "The next step, of trying to establish whether or not a link exists between food promotion and diet or obesity, is extremely difficult as it requires research to be done in real world settings. A number of studies have attempted this by using amount of television viewing as a proxy for exposure to television advertising. They have established a clear link between television viewing and diet, obesity, and cholesterol levels. It is impossible to say, however, whether this effect is caused by the advertising, the sedentary nature of television viewing or snacking that might take place whilst viewing. One study resolved this problem by taking a detailed diary of children's viewing habits. This showed that the more food adverts they saw, the more snacks and calories they consumed.",
    "answer": "H",
    "evidence": "a link exists between food promotion and diet or obesity",
    "explanation": "Reklama va semizlik o'rtasidagi bog'liqlik. H: \"connection of advertising and children's weight problems\"."
   },
   {
    "body": "Thus the literature does suggest food promotion is influencing children's diet in a number of ways. This does not amount to proof; as noted above with this kind of research, incontrovertible proof simply isn't attainable. Nor do all studies point to this conclusion; several have not found an effect. In addition, very few studies have attempted to measure how strong these effects are relative to other factors influencing children's food choices. Nonetheless, many studies have found clear effects and they have used sophisticated methodologies that make it possible to determine that i) these effects are not just due to chance; ii) they are independent of other factors that may influence diet, such as parents' eating habits or attitudes; and iii) they occur at a brand and category level.",
    "answer": "C",
    "evidence": "Nor do all studies point to this conclusion",
    "explanation": "Tadqiqotlar nimada kelishishi va nimada farq qilishi umumlashtiriladi. C: \"general points of agreements and disagreements of researchers\"."
   },
   {
    "body": "Furthermore, two factors suggest that these findings actually downplay the effect that food promotion has on children. First, the literature focuses principally on television advertising; the cumulative effect of this combined with other forms of promotion and marketing is likely to be significantly greater. Second, the studies have looked at direct effects on individual children, and understate indirect influences. For example, promotion for fast food outlets may not only influence the child, but also encourage parents to take them for meals and reinforce the idea that this is a normal and desirable behaviour.",
    "answer": "A",
    "evidence": "these findings actually downplay the effect",
    "explanation": "\"Downplay\" — kamaytirib ko'rsatish: reklamaning haqiqiy ta'siri bundan kattaroq. A: \"underestimating the effects advertising has on children\"."
   }
  ]
 },
 {
  "n": 29,
  "title": "Communicating Styles and Conflict",
  "topic": "Muloqot uslublari va nizo",
  "sub": "",
  "headings": [
   [
    "A",
    "Factual and analytical personality"
   ],
   [
    "B",
    "A lively person who encourages"
   ],
   [
    "C",
    "Lazy and careless personality"
   ],
   [
    "D",
    "Physical explanation"
   ],
   [
    "E",
    "Cautious and caring"
   ],
   [
    "F",
    "Summarising personality types"
   ],
   [
    "G",
    "The benefits of understanding communication styles"
   ],
   [
    "H",
    "Combined styles for workplace"
   ]
  ],
  "paragraphs": [
   {
    "body": "As far back as Hippocrates' time (460-370B.C.), people have tried to understand other people by characterizing them according to personality type or temperament. Hippocrates believed there were four different body fluids that influenced four basic types of temperament. His work was further developed 500 years later by Galen. These days there are any number of self-assessment tools that relate to the basic descriptions developed by Galen, although we no longer believe the source to be the types of body fluid that dominate our systems.",
    "answer": "D",
    "evidence": "four different body fluids that influenced four basic types of temperament",
    "explanation": "Gippokrat temperamentni tanadagi suyuqliklar bilan, ya'ni jismoniy sabab bilan tushuntirgan. D: \"physical explanation\"."
   },
   {
    "body": "The values in self-assessments that help determine personality style. Learning styles, communication styles, conflict-handling styles, or other aspects of individuals is that they help depersonalize conflict in interpersonal relationships. The depersonalization occurs when you realize that others aren't trying to be difficult, but they need different or more information than you do. They're not intending to be rude: they are so focused on the task they forget about greeting people. They would like to work faster but not at the risk of damaging the relationships needed to get the job done. They understand there is a job to do. But it can only be done right with the appropriate information, which takes time to collect. When used appropriately, understanding communication styles can help resolve conflict on teams. Very rarely are conflicts true personality issues. Usually they are issues of style, information needs, or focus.",
    "answer": "G",
    "evidence": "understanding communication styles can help resolve conflict on teams",
    "explanation": "Muloqot uslublarini tushunish nizolarni hal qilishga yordam beradi. G: \"the benefits of understanding communication styles\"."
   },
   {
    "body": "Hippocrates and later Galen determined there were four basic temperaments: sanguine, phlegmatic, melancholic and choleric. These descriptions were developed centuries ago and are still somewhat apt, although you could update the wording. In today's world, they translate into the four fairly common communication styles described below:",
    "answer": "F",
    "evidence": "there were four basic temperaments: sanguine, phlegmatic, melancholic and choleric",
    "explanation": "To'rt temperament umumlashtirib sanab o'tiladi. F: \"summarising personality types\"."
   },
   {
    "body": "The sanguine person would be the expressive or spirited style of communication. These people speak in pictures. They invest a lot of emotion and energy in their communication and often speak quickly. Putting their whole body into it. They are easily sidetracked onto a story that may or may not illustrate the point they are trying to make. Because of their enthusiasm, they are great team motivators. They are concerned about people and relationships. Their high levels of energy can come on strong at times and their focus is usually on the bigger picture, which means they sometimes miss the details or the proper order of things. These people find conflict or differences of opinion invigorating and love to engage in a spirited discussion. They love change and are constantly looking for new and exciting adventures.",
    "answer": "B",
    "evidence": "Because of their enthusiasm, they are great team motivators",
    "explanation": "Sangvinik hayajonli va energiyali, jamoani ruhlantiradi. Mazmunan B: \"a lively person who encourages\". Kitob kalitida C (\"lazy and careless\") berilgan, lekin matnda dangasalik haqida gap yo'q."
   },
   {
    "body": "The phlegmatic person - cool and persevering - translates into the technical or systematic communication style. This style of communication is focused on facts and technical details. Phlegmatic people have an orderly methodical way of approaching tasks, and their focus is very much on the task, not on the people, emotions, or concerns that the task may evoke. The focus is also more on the details necessary to accomplish a task. Sometimes the details overwhelm the big picture and focus needs to be brought back to the context of the task. People with this style think the facts should speak for themselves, and they are not as comfortable with conflict. They need time to adapt to change and need to understand both the logic of it and the steps involved.",
    "answer": "A",
    "evidence": "This style of communication is focused on facts and technical details",
    "explanation": "Flegmatik faktlar va texnik tafsilotlarga e'tibor beradi. A: \"factual and analytical personality\"."
   },
   {
    "body": "The melancholic person who is soft hearted and oriented toward doing things for others translates into the considerate or sympathetic communication style. A person with this communication style is focused on people and relationships. They are good listeners and do things for other people - sometimes to the detriment of getting things done for themselves. They want to solicit everyone's opinion and make sure everyone is comfortable with whatever is required to get the job done. At times this focus on others can distract from the task at hand. Because they are so concerned with the needs of others and smoothing over issues, they do not like conflict. They believe that change threatens the status quo and tends to make people feel uneasy, so people with this communication style, like phlegmatic people need time to consider the changes in order to adapt to them.",
    "answer": "E",
    "evidence": "They are good listeners and do things for other people",
    "explanation": "Melanxolik boshqalar haqida qayg'uradi va o'zgarishdan ehtiyot bo'ladi. E: \"cautious and caring\"."
   }
  ]
 },
 {
  "n": 30,
  "title": "Saving the British Bitterns",
  "topic": "Britaniya qamishqushlarini saqlash",
  "sub": "",
  "headings": [
   [
    "A",
    "International cooperation works"
   ],
   [
    "B",
    "Importance of food"
   ],
   [
    "C",
    "Began the calculation of the number"
   ],
   [
    "D",
    "Research into the reedbed"
   ],
   [
    "E",
    "Reserve established holding bittern in winter"
   ],
   [
    "F",
    "Fluctuation in bittern number"
   ],
   [
    "G",
    "Research findings into habitats and decisions made"
   ],
   [
    "H",
    "Research has been successful"
   ]
  ],
  "paragraphs": [
   {
    "body": "Breeding bitterns became extinct in the UK by 1886 but, following recolonization early last century, numbers rose to a peak of about 70 booming (singing) males in the 1950s, falling to fewer than 20 by the 1990s. In the late 1980s it was clear that the bittern was in trouble, but there was little information on which to base recovery actions.",
    "answer": "F",
    "evidence": "numbers rose to a peak of about 70 booming (singing) males in the 1950s, falling to fewer than 20",
    "explanation": "Bittern soni goh ko'payib, goh kamaygan (70 dan 20 dan kamgacha). F: \"fluctuation in bittern number\"."
   },
   {
    "body": "Bitterns have cryptic plumage and a shy nature, usually remaining hidden within the cover of reed bed vegetation. Our first challenge was to develop standard methods to monitor their numbers. The boom of the male bittern is its most distinctive feature during the breeding season, and we developed a method to count them using the sound patterns unique to each individual. This not only allows us to be much more certain of the number of booming males in the UK, but also enables us to estimate local survival of males from one year to the next.",
    "answer": "C",
    "evidence": "Our first challenge was to develop standard methods to monitor their numbers",
    "explanation": "Qushlarni ovozi orqali sanash usuli ishlab chiqilgan. C: \"began the calculation of the number\"."
   },
   {
    "body": "Our first direct understanding of the habitat needs of breeding bitterns came from comparisons of reed bed sites that had lost their booming birds with those that retained them. This research showed that bitterns had been retained in reed beds where the natural process of succession, or drying out, had been slowed through management. Based on this work, broad recommendations on how to manage and rehabilitate reed beds for bitterns were made, and funding was provided through the EU LIFE Fund to manage 13 sites within the core breeding range. This project, though led by the RSPB, involved many other organisations.",
    "answer": "G",
    "evidence": "Based on this work, broad recommendations",
    "explanation": "Tadqiqot natijalari va ular asosida qabul qilingan qarorlar. G: \"research findings into habitats and decisions made\"."
   },
   {
    "body": "To refine these recommendations and provide fine-scale, quantitative habitat prescriptions on the bitterns preferred feeding habitat, we radiotracked male bitterns on the RSPB's Minsmere and Leighton Moss reserves. This showed clear preferences for feeding in the wetter reed bed margins, particularly within the reed bed next to larger open pools. The average home range sizes of the male bitterns we followed (about 20 hectares) provided a good indication of the area of reed bed needed when managing or creating habitat for this species. Female bitterns undertake all the incubation and care of the young, so it was important to understand their needs as well. Over the course of our research, we located 87 bittern nests and found that female bitterns preferred to nest in areas of continuous vegetation, well into the reed bed, but where water was still present during the driest part of the breeding season.",
    "answer": "D",
    "evidence": "showed clear preferences for feeding in the wetter reed bed margins",
    "explanation": "Qamishzorda qushlar qayerda oziqlanishi va uya qurishi o'rganilgan. D: \"research into the reedbed\"."
   },
   {
    "body": "The success of the habitat prescriptions developed from this research has been spectacular. For instance, at Minsmere, booming bittern numbers gradually increased from one to 10 following reed bed lowering, a management technique designed to halt the drying out process. After a low point of 11 booming males in 1997, bittern numbers in Britain responded to all the habitat management work and started to increase for the first time since the 1950s.",
    "answer": "H",
    "evidence": "has been spectacular",
    "explanation": "Tadqiqot natijasi ajoyib bo'lgan: qushlar soni 1950-yillardan beri birinchi marta ko'paygan. H: \"research has been successful\"."
   },
   {
    "body": "The final phase of research involved understanding the diet, survival and dispersal of bittern chicks. To do this we fitted small radio tags to young bittern chicks in the nest, to determine their fate through to fledging and beyond. Many chicks did not survive to fledging and starvation was found to be the most likely reason for their demise. The fish prey fed to chicks was dominated by those species penetrating into the reed edge. So, an important element of recent studies (including a PhD with the University of Hull) has been the development of recommendations on habitat and water conditions to promote healthy native fish populations.",
    "answer": "B",
    "evidence": "starvation was found to be the most likely reason for their demise",
    "explanation": "Jo'jalar asosan ochlikdan o'lgan, ya'ni ovqat juda muhim. B: \"importance of food\"."
   }
  ]
 },
 {
  "n": 31,
  "title": "",
  "topic": "Sog'lom ovqatlanish odatlarini shakllantirish",
  "sub": "",
  "headings": [
   [
    "A",
    "Necessary Components"
   ],
   [
    "B",
    "Important Conclusion"
   ],
   [
    "C",
    "Useful Advice"
   ],
   [
    "D",
    "Significant Difference"
   ],
   [
    "E",
    "Health Risks"
   ],
   [
    "F",
    "Moderation Is the Key!"
   ],
   [
    "G",
    "Diet and Exercise"
   ],
   [
    "H",
    "Benefits of Good Nutrition"
   ]
  ],
  "paragraphs": [
   {
    "body": "Developing healthy eating habits is simpler and easier than you might think. You will look and feel better if you make a habit of eating healthfully. You will have more energy and your immune system will be stronger. When you eat a diet rich in fruits and vegetables you are lowering your risk of heart disease, cancers and many other serious health ailments. Healthy eating habits are your ticket to a healthier body and mind.",
    "answer": "H",
    "evidence": "Healthy eating habits are your ticket to a healthier body and mind",
    "explanation": "To'g'ri ovqatlanishning foydalari: energiya, immunitet, kasallik xavfining kamayishi. H: \"benefits of good nutrition\"."
   },
   {
    "body": "A four-week clinical trial that tested the new regimen found that overweight adults who consumed a high-protein, entirely vegan diet were able to lose about the same amount of weight as a comparison group of dieters on a high-carbohydrate, low-fat vegetarian dairy diet. But while those on the high-carbohydrate dairy diet experienced drops of 12 percent in their cholesterol, those on the high protein vegan diet saw cholesterol reductions of 20 percent.",
    "answer": "D",
    "evidence": "those on the high protein vegan diet saw cholesterol reductions of 20 percent",
    "explanation": "Ikki parhez solishtirilgan: vazn bir xil kamaygan, xolesterin esa 12% va 20%, ya'ni sezilarli farq. D: \"significant difference\"."
   },
   {
    "body": "'The idea preyed on me for a long time. If the Atkins Diet looks good, and it's got so much saturated fat and cholesterol in it, suppose we took that out and put vegetarian protein sources in, which may lower cholesterol,' Dr. Jenkins said. 'We know that nuts lower cholesterol and prevent heart disease, and soy is eaten in the Far East, where they don't get much heart disease. So we put these foods together as protein and fat sources.'",
    "answer": "A",
    "evidence": "So we put these foods together as protein and fat sources",
    "explanation": "Parhez uchun qaysi tarkibiy qismlar (yong'oq, soya) kerakligi tushuntiriladi. A: \"necessary components\"."
   },
   {
    "body": "The first official warning about the dangers of the Atkins diet was issued by the government amid concern about the rising number of people opting for the high fat, high protein diet. Cutting out starchy foods can be bad for your health because you could be missing out on a range of nutrients. Lowcarbohydrate diets tend to be high in fat, and this could increase your chances of developing coronary heart disease.",
    "answer": "E",
    "evidence": "this could increase your chances of developing coronary heart disease",
    "explanation": "Atkins parhezining sog'liq uchun xavflari. E: \"health risks\"."
   },
   {
    "body": "Earlier this year, a large study that compared different kinds of diets — including low-fat and low carbohydrate plans — found that the method didn't matter as long as people cut calories. That study also found that after two years, most people had regained at least some of the weight they had lost. Dr. Tuttle said that while different weight loss plans offer people different 'tricks' and strategies, ultimately, 'It really comes down to calories in and calories out.'",
    "answer": "B",
    "evidence": "It really comes down to calories in and calories out",
    "explanation": "Katta tadqiqot xulosasi: usul emas, kaloriya muhim. B: \"important conclusion\"."
   },
   {
    "body": "When you think about nutrition, be aware of serving sizes. Many people will eat everything on their plate, regardless of how hungry they actually are. If you know you tend to clean your plate, make an effort to reduce your serving size. If you're eating out or dining at a friend's house, don't be shy about asking for smaller portion sizes. Too much of any one food is a bad thing. There are no bad foods, just bad eating habits.",
    "answer": "F",
    "evidence": "Too much of any one food is a bad thing",
    "explanation": "Me'yorni saqlash, porsiyani kichraytirish. F: \"moderation is the key!\"."
   }
  ]
 },
 {
  "n": 32,
  "title": "",
  "topic": "Atrof-muhit muammolari",
  "sub": "",
  "headings": [
   [
    "A",
    "Disastrous Growth"
   ],
   [
    "B",
    "Possible Solutions"
   ],
   [
    "C",
    "Global Destruction"
   ],
   [
    "D",
    "Hazardous Waste"
   ],
   [
    "E",
    "Water Shortage"
   ],
   [
    "F",
    "Primary Reason"
   ],
   [
    "G",
    "Quick Change"
   ],
   [
    "H",
    "Invisible Threat"
   ]
  ],
  "paragraphs": [
   {
    "body": "Acid rain moves easily, affecting locations far beyond those that let out the pollution. As a result, this global pollution issue causes great debates between countries that fight over polluting each other's environments. The problem is that acid rain, one of the most important environmental problems of all, cannot be seen. Some scientists think that human production is primarily responsible, while others cite natural causes as well.",
    "answer": "H",
    "evidence": "cannot be seen",
    "explanation": "Kislotali yomg'irni ko'rib bo'lmaydi, ya'ni bu ko'rinmas tahdid. H: \"invisible threat\"."
   },
   {
    "body": "Air pollution has many disastrous effects that need to be curbed. In order to accomplish this, governments, scientists and environmentalists are using or testing a variety of methods aimed at reducing pollution. There are two main types of pollution control. Input controls are usually more effective than output controls. Output controls are also more expensive, making them less desirable to tax payers and polluting industries.",
    "answer": "B",
    "evidence": "are using or testing a variety of methods aimed at reducing pollution",
    "explanation": "Ifloslanishni kamaytirish usullari, ya'ni mumkin bo'lgan yechimlar. B: \"possible solutions\"."
   },
   {
    "body": "Global warming is called the greenhouse effect because the gases that are gathering above the earth make the planet comparable to a greenhouse. By trapping heat, the green-house effect is warming the planet and threatening the environment. Current fears stem largely from the fact that global warming is occurring at such a rapid pace. Models are predicting that over the next century, the global temperature will rise by several degrees.",
    "answer": "G",
    "evidence": "global warming is occurring at such a rapid pace",
    "explanation": "Global isish juda tez sodir bo'lmoqda. G: \"quick change\"."
   },
   {
    "body": "Individuals often throw out goods without realizing that they could be dangerous for the environment. No matter where people put these materials, there is always a chance that they could find their way into the ground, and eventually into our bodies. Special research is necessary to provide data on the effects of every chemical as well as to learn how combinations of these chemicals affect human health.",
    "answer": "D",
    "evidence": "they could be dangerous for the environment",
    "explanation": "Tashlab yuborilgan xavfli kimyoviy buyumlar haqida. D: \"hazardous waste\"."
   },
   {
    "body": "Only a few factors combine to create the problem of ozone layer depletion. The production and emission of CFCs, chlorofluorocarbons, is by far the leading cause. Many countries have called for the end of CFC production. However, those industries that do use CFCs do not want to discontinue usage of this highly valuable industrial chemical. So it's important to make people realize the disaster CFCs cause in the stratosphere.",
    "answer": "F",
    "evidence": "is by far the leading cause",
    "explanation": "\"Leading cause\" — asosiy sabab: ozon qatlami yemirilishining bosh sababi CFC. F: \"primary reason\"."
   },
   {
    "body": "Unlike some environmental issues, rainforest depletion has fortunately received significant public and media attention. According to some estimates, 50 million acres of rain forest are cut down every year. Every year, Brazil chops down an area of forest the size of the state of Nebraska. In Indonesia, Zaire, Papua New Guinea, Malaysia, Burma, the Philippines, Peru, Colombia, Bolivia, and Venezuela, rain forests that were once great have been lost.",
    "answer": "C",
    "evidence": "50 million acres of rain forest are cut down every year",
    "explanation": "Dunyoning ko'p mamlakatlarida o'rmonlar yo'q qilinmoqda. C: \"global destruction\"."
   }
  ]
 },
 {
  "n": 33,
  "title": "",
  "topic": "Iste'dodli bolalar",
  "sub": "",
  "headings": [
   [
    "A",
    "Gifted children have no support"
   ],
   [
    "B",
    "Modern tools for studying"
   ],
   [
    "C",
    "Special attitude is required"
   ],
   [
    "D",
    "Being gifted is not always easy"
   ],
   [
    "E",
    "Identifying the gifted child"
   ],
   [
    "F",
    "Gifted children always become famous"
   ],
   [
    "G",
    "Awareness of giftedness"
   ],
   [
    "H",
    "Lack of challenge may cause problems"
   ]
  ],
  "paragraphs": [
   {
    "body": "Gifted children's behaviour differs from that of their age-mates. Many gifted children learn to read early, with better comprehension of the nuances of language. As much as half of the gifted and talented population has learned to read before entering school. They can work independently at an earlier age and can concentrate for longer periods. They like to learn new things, are willing to examine the unusual, and are highly inquisitive.",
    "answer": "E",
    "evidence": "Gifted children's behaviour differs from that of their age-mates",
    "explanation": "Iqtidorli bolani qanday belgilaridan tanib olish mumkin: erta o'qish, mustaqil ishlash. E: \"identifying the gifted child\"."
   },
   {
    "body": "Being academically gifted is a topic laced with myths and fears, many of which are unfounded. Moreover, academically gifted children often face special problems. So do their parents. Schools treat those children differently from those whose talents lie in other areas, like music, art, and sports. Gifted children may also be learning disabled, or have another disability while being highly intelligent.",
    "answer": "D",
    "evidence": "academically gifted children often face special problems",
    "explanation": "Iqtidorli bolalar va ularning ota-onalari maxsus muammolarga duch keladi. D: \"being gifted is not always easy\"."
   },
   {
    "body": "Social and emotional difficulties are not directly linked to giftedness. Rather, they result from a lack of understanding by the child of the nature of their intellectual difference. Parents and teachers don't usually discuss this difference with them because of the concern that they may get a 'swelled head'. The risk is that gifted children may view their differences as 'weird' or 'bad' or try to ignore or deny them.",
    "answer": "G",
    "evidence": "they result from a lack of understanding by the child of the nature of their intellectual difference",
    "explanation": "Bola o'zining farqini anglamasligi muammo tug'diradi, ya'ni iqtidorni anglash muhim. G: \"awareness of giftedness\"."
   },
   {
    "body": "Most of the athletes are allowed to develop their special skills at whatever rate best suits them. No one tries to stop them from becoming much better baseball players or swimmers than their classmates. Yet if an academically gifted child tries to do two years of work in one, that's viewed as potentially harmful. Much of the concern focuses on the non-academic areas of these gifted children's development.",
    "answer": "A",
    "evidence": "that's viewed as potentially harmful",
    "explanation": "Sportchilarni qo'llab-quvvatlashadi, iqtidorli o'quvchiga esa tezroq o'qishga ruxsat berishmaydi. A: \"gifted children have no support\"."
   },
   {
    "body": "Researchers emphasize that for the vast majority of academically gifted children those concerns are groundless. In fact, these children are more likely to develop social and even academic problems if they don't feel intellectually challenged. If gifted children don't go to challenging programs, they may not learn how to learn. Eventually, in college or graduate school, they feel emotionally overwhelmed when they can't just coast I through their courses anymore.",
    "answer": "H",
    "evidence": "if they don't feel intellectually challenged",
    "explanation": "Bolaga qiyin vazifa berilmasa, keyinchalik muammolar paydo bo'ladi. H: \"lack of challenge may cause problems\"."
   },
   {
    "body": "Gifted children represent both a challenge and a resource for schools. Educators have responsibility to provide programs to meet the educational needs of gifted students who are capable of learning at advanced levels. Ideally, schools should have specifically trained teachers for gifted students to create a challenging and supportive learning environment for these children.",
    "answer": "C",
    "evidence": "schools should have specifically trained teachers for gifted students",
    "explanation": "Iqtidorli bolalar uchun maxsus dastur va o'qituvchilar, ya'ni alohida yondashuv kerak. C: \"special attitude is required\"."
   }
  ]
 },
 {
  "n": 34,
  "title": "",
  "topic": "Jakarta va Indoneziya",
  "sub": "",
  "headings": [
   [
    "A",
    "A taste of everything"
   ],
   [
    "B",
    "Shop till you drop"
   ],
   [
    "C",
    "City's tourist attractions"
   ],
   [
    "D",
    "Ancient traditions live on"
   ],
   [
    "E",
    "Activities for the adventurous and hardy"
   ],
   [
    "F",
    "On the crossroads of religions"
   ],
   [
    "G",
    "For the body, mind and soul"
   ],
   [
    "H",
    "From the high peaks to the deep seas"
   ]
  ],
  "paragraphs": [
   {
    "body": "Today Jakarta has much to offer, ranging from museums, art and antique markets, first class shopping to accommodations and a wide variety of cultural activities. Jakarta's most famous landmark, the National Monument or Monas is a 137m obelisk topped with a flame sculpture coated with 35 kg of gold. Among other places one can mention the National Museum that holds an extensive collection of ethnographic artifacts and relics, the Maritime Museum that exhibits Indonesia's seafaring traditions, including models of sea going vessels.",
    "answer": "C",
    "evidence": "Jakarta's most famous landmark",
    "explanation": "Jakartaning muzeylari va diqqatga sazovor joylari. C: \"city's tourist attractions\"."
   },
   {
    "body": "Sumatra is a paradise for nature lovers, its national parks are the largest in the world, home to a variety of monkeys, tigers and elephants. Facing the open sea, the western coastline of Sumatra and the waters surrounding Nias Island have big waves that make them one of the best surfer's beaches in Indonesia. There are beautiful coral reefs that are ideal for diving. For those who prefer night dives, the waters of Riau Archipelago offer a rewarding experience with marine scavengers of the dark waters.",
    "answer": "E",
    "evidence": "have big waves that make them one of the best surfer's beaches",
    "explanation": "Serfing, g'avvoslik, tungi sho'ng'ish, ya'ni jasur sayyohlar uchun mashg'ulotlar. E: \"activities for the adventurous and hardy\"."
   },
   {
    "body": "Various establishments offer professional pampering service with floral baths, body scrubs, aromatic oils, massages and meditation; rituals and treatments that use spices and aromatic herbs to promote physical and mental wellness. Various spa hotels are extremely popular. Indonesians believe that when treating the body you cure the mind.",
    "answer": "G",
    "evidence": "to promote physical and mental wellness",
    "explanation": "Spa, massaj, meditatsiya, ya'ni tana, aql va qalb uchun. G: \"for the body, mind and soul\"."
   },
   {
    "body": "Jakarta has a distinctly cosmopolitan flavor. Tantalize your taste buds with a gastronomic spree around the city's many eateries. Like French gourmet dining, exotic Asian cuisine, American fast food, stylish cafes, restaurants all compete to find a way into your heart through your stomach. The taste of Indonesia's many cultures can be found in almost any corner of the city: hot and spicy food from West Sumatra, sweet tastes of Central Java, the tangy fish dishes of North Sulawesi.",
    "answer": "A",
    "evidence": "Tantalize your taste buds",
    "explanation": "Fransuz, Osiyo, Amerika oshxonalari va mahalliy taomlar, ya'ni har xil ta'mlar. A: \"a taste of everything\"."
   },
   {
    "body": "In the face of constant exposure to modernization and foreign influences, the native people still faithfully cling to their culture and rituals. The pre-Hindu Bali Aga tribe still maintains their own traditions of architecture, pagan religion, dance and music, such as unique rituals of dances and gladiator-like battles between youths. On the island of Siberut native tribes have retained their Neolithic hunter-gathering culture.",
    "answer": "D",
    "evidence": "the native people still faithfully cling to their culture and rituals",
    "explanation": "Mahalliy qabilalar qadimiy an'analarini saqlab qolgan. D: \"ancient traditions live on\"."
   },
   {
    "body": "Whether you are a serious spender or half-hearted shopper, there is sure to be something for everybody in Jakarta. Catering to diverse tastes and pockets, the wide variety of things you can buy in Jakarta is mind boggling from the best of local handicrafts to haute couture labels. Modern super and hyper markets, multi-level shopping centers, retail and specialty shops, sell quality goods at a competitive price. Sidewalk bargains range from tropical blooms of vivid colors and scents in attractive bouquets to luscious fruits of the seasons.",
    "answer": "B",
    "evidence": "there is sure to be something for everybody in Jakarta",
    "explanation": "Do'konlar, bozorlar, savdo markazlari, ya'ni xarid qilish uchun joy. B: \"shop till you drop\"."
   }
  ]
 },
 {
  "n": 35,
  "title": "",
  "topic": "O'zgarish",
  "sub": "",
  "headings": [
   [
    "A",
    "Resistance to change"
   ],
   [
    "B",
    "Innovation in action"
   ],
   [
    "C",
    "Changing your routine"
   ],
   [
    "D",
    "A change for the better"
   ],
   [
    "E",
    "Changes in social trends"
   ],
   [
    "F",
    "Changing roles"
   ],
   [
    "G",
    "A first time for everything"
   ],
   [
    "H",
    "Managing change"
   ]
  ],
  "paragraphs": [
   {
    "body": "The arrival of a new baby is always a marvelous thing but the change can be disruptive and even stressful, especially for first-time parents. It is difficult to cope with the sleepless nights and constant demands of a newborn so it is important to organize your day differently to accommodate for these circumstances. For example, afternoon naps can help parents catch up on much-needed sleep.",
    "answer": "C",
    "evidence": "it is important to organize your day differently",
    "explanation": "Chaqaloq tug'ilgach, kun tartibini o'zgartirish kerak. C: \"changing your routine\"."
   },
   {
    "body": "Have you ever thought about doing a parachute jump? Join our two-day parachuting course and by the end you won't be able to resist the challenge. Parachuting is fun, safe and once you know the routine, you'll feel really confident about stepping out of that plane. Everyone can manage it and it can really change your attitude to adventure sports.",
    "answer": "G",
    "evidence": "Have you ever thought about doing a parachute jump?",
    "explanation": "Hech qachon qilmagan ishni, parashyutdan sakrashni birinchi marta sinab ko'rish. G: \"a first time for everything\"."
   },
   {
    "body": "Change is an inevitable part of the business cycle and it is crucial to plan and deal with it properly. At first, the organization needs to accept the change in circumstances, whether for the better or not. The next steps depend on the extent of the change, in other words, if it is something routine and of low impact, or something with wide implications for the business.",
    "answer": "H",
    "evidence": "it is crucial to plan and deal with it properly",
    "explanation": "Biznesda o'zgarishni rejalash va boshqarish. H: \"managing change\"."
   },
   {
    "body": "The first time I saw Sheffield park, I was shocked because it was a mess and it obviously hadn't been looked after in years. When I came back to the park five years later, it looked much neater and I had a nice walk around. Parks are not very trendy these days, they probably never have been, but they are an important part of a town and should be well managed.",
    "answer": "D",
    "evidence": "it looked much neater and I had a nice walk around",
    "explanation": "Park besh yilda yaxshi tomonga o'zgargan. D: \"a change for the better\"."
   },
   {
    "body": "Popular music seems to be running out of ideas. A recent trend is to take hits as far back as the 50s and 60s and re-release them with the lyrics changed. For many, there is something sacrilegious in seeing classics such as the Beatles' All you need is love downloadable as I met her online. The melody is the same but the words and sense are completely different, completely distorting the original song.",
    "answer": "E",
    "evidence": "A recent trend is to take hits as far back as the 50s and 60s",
    "explanation": "Musiqada yangi tendensiya, ya'ni jamiyatdagi o'zgarish. E: \"changes in social trends\"."
   },
   {
    "body": "This innovative executive programme gives professionals from different fields the opportunity to exchange positions for a limited period and gain a completely new insight into the business world. To give a recent example, Paula Wright, sales manager in a pharmaceuticals firm, spent three months as a consultant in an accountancy company. Her feedback and comments can be found on the website at the top of this brochure.",
    "answer": "F",
    "evidence": "the opportunity to exchange positions for a limited period",
    "explanation": "Mutaxassislar vaqtincha lavozim almashadi. F: \"changing roles\"."
   }
  ]
 },
 {
  "n": 36,
  "title": "",
  "topic": "Manchester yomg'iri va ofis binosi",
  "sub": "",
  "headings": [
   [
    "A",
    "A trick - will it fail?"
   ],
   [
    "B",
    "An unexpected narrow escape"
   ],
   [
    "C",
    "Two approaches to public use of office"
   ],
   [
    "D",
    "The best way to find shelter from the rain"
   ],
   [
    "E",
    "An Englishman's home is his castle"
   ],
   [
    "F",
    "A sudden obstacle"
   ],
   [
    "G",
    "Possible short-cut?"
   ],
   [
    "H",
    "One problem made worse by another"
   ]
  ],
  "paragraphs": [
   {
    "body": "I was caught out the other day in a Manchester downpour (a much rarer event than is generally supposed, as the Met Office figures will readily confirm). Troubles never coming singly, the street down which I was hurrying to my appointment turned out to be blocked by some vast sewer reconstruction scheme. It looked as though I had no alternative but to retrace my steps and make a long detour. And I was getting wetter by the minute.",
    "answer": "H",
    "evidence": "Troubles never coming singly",
    "explanation": "Yomg'irga qo'shimcha ko'cha ham yopiq, ya'ni bir muammo ustiga ikkinchisi. H: \"one problem made worse by another\"."
   },
   {
    "body": "But suddenly salvation seemed at hand in the shape of a large office building that loomed up on my right hand side. Glancing through what was clearly a rear entrance, I could see across a wide lobby and the front entrance to the street on the far side - the very street I was trying to get to. There was something to be said for these new \"prestige\" office developments after all.",
    "answer": "G",
    "evidence": "the very street I was trying to get to",
    "explanation": "Ofis binosi orqali kerakli ko'chaga qisqa yo'l bilan chiqish mumkindek tuyuladi. G: \"possible short-cut?\"."
   },
   {
    "body": "But not much. Completely blocking my path as I stepped through the swing doors into the lobby was a wide desk and behind it a middle-aged woman with a steely expression. \"Can I help you, sir?\" she said in a voice which suggested that that was the very last thing on her mind and that she knew very well what I was up to because I was the fiftieth person to use her lobby as a rat run that morning.",
    "answer": "F",
    "evidence": "Completely blocking my path",
    "explanation": "Yo'lni to'sib turgan stol va qattiqqo'l ayol, ya'ni kutilmagan to'siq. F: \"a sudden obstacle\"."
   },
   {
    "body": "Now I may have been completely wrong in crediting her with such prescience but what followed suggests otherwise. \"I have an appointment with Mr Henderson\", I lied. \"I think he's on the first floor.\" I waved my hand in the direction of the staircase and started off towards it. \"Just a minute. I don't think we have a Mr Henderson.\" Without removing her eyes from my face for a second she picked up a house phone. \"I'll ask Personnel,\" she said.",
    "answer": "A",
    "evidence": "I lied",
    "explanation": "Muallif yolg'on bahona o'ylab topadi, bu hiyla ish berarmikin? A: \"a trick - will it fail?\"."
   },
   {
    "body": "I was saved by the bell - the one on the phone on an adjoining desk. Putting down her own, she leaned over to answer it. Her eagle eye was off me and I was off towards the stairs and then to the door beyond and out into the street and the Manchester rain.",
    "answer": "B",
    "evidence": "I was saved by the bell",
    "explanation": "Telefon jiringlab, ayolning e'tibori chalg'iydi va muallif qochib qoladi. B: \"an unexpected narrow escape\"."
   },
   {
    "body": "Let me be the first to say that that was a pretty silly way for a grown-up man to behave and it reflects no credit on me at all. But neither does it reflect any credit on those who administer ordinary commercial office buildings as though they housed both MI5 and 6 with the crown jewels lodged temporarily in the basement. In America such places are generally regarded as being in the public domain, with newspaper stands and snack bars. It may be hard on the flooring but most owners consider this easily outweighed by the good that accrues to the corporate image.",
    "answer": "C",
    "evidence": "In America such places are generally regarded as being in the public domain",
    "explanation": "Britaniya va Amerikada ofis binolariga kirishga ikki xil yondashuv solishtiriladi. C: \"two approaches to public use of office\"."
   }
  ]
 },
 {
  "n": 37,
  "title": "",
  "topic": "AQShda o'qish",
  "sub": "",
  "headings": [
   [
    "A",
    "Be prepared for different methods of assessment"
   ],
   [
    "B",
    "Don't be afraid to speak up"
   ],
   [
    "C",
    "Make sure your work is your own"
   ],
   [
    "D",
    "Aim to be successful on your course"
   ],
   [
    "E",
    "Attend lectures regularly"
   ],
   [
    "F",
    "Don't believe everything you hear"
   ],
   [
    "G",
    "Feel free to discuss your education"
   ],
   [
    "H",
    "Don't worry about having a smart appearance"
   ]
  ],
  "paragraphs": [
   {
    "body": "American films exaggerate things in order to excite audiences and so they present a rather odd picture of what life in the US is really like. Even if some ideas are true for certain individuals, they may not be true in general. For example, although Americans tend to be louder than people from other cultures, many of the people you meet when you study in the US will be quiet and polite.",
    "answer": "F",
    "evidence": "American films exaggerate things",
    "explanation": "Filmlar AQSh hayotini bo'rttirib ko'rsatadi, eshitganingizga ishonavermang. F: \"don't believe everything you hear\"."
   },
   {
    "body": "Americans are much more assertive than most international visitors. They use words as tools to give their views and to accomplish goals. It is expected that you will offer opinions and attempt to persuade someone to adopt your view. Take the initiative and volunteer information that will be of interest. In an interview, talk about your goals and accomplishments. Eye contact is also important. It is not a sign of disrespect, but instead an indication of openness, honesty and enthusiasm.",
    "answer": "B",
    "evidence": "It is expected that you will offer opinions",
    "explanation": "Fikringizni aytish va tashabbus ko'rsatish kutiladi. B: \"don't be afraid to speak up\"."
   },
   {
    "body": "You will find that teaching styles in the US are very different from those in other countries. Teaching in the US is interactive and less dependent on rote learning. Professors prefer discussion and debate to passive silence and classes are often organised in groups. Students regularly visit lecturers to ask questions about their courses and how they are doing. Your faculty will also have open office hours for students to come by and ask questions.",
    "answer": "G",
    "evidence": "Students regularly visit lecturers to ask questions about their courses",
    "explanation": "O'qituvchilar bilan bemalol muhokama qilish mumkin. G: \"feel free to discuss your education\"."
   },
   {
    "body": "Americans tend to be more informal than people from other countries. It is common for Americans to wear casual clothing to school and to greet professors by first name. Nevertheless, good manners and politeness are always appropriate. If you are courteous and polite, and dress a little more formally than your American friends, it will only reflect well on you. However, as in most countries, it would be inappropriate to wear a T-shirt and jeans to an interview.",
    "answer": "H",
    "evidence": "It is common for Americans to wear casual clothing to school",
    "explanation": "Oddiy kiyinish odatiy hol, rasmiy kiyinish shart emas. H: \"don't worry about having a smart appearance\"."
   },
   {
    "body": "Unless the professor has indicated that collaboration is expected, you should produce your written work by yourself. Collaborating with fellow students on individual assignments is considered cheating. Studying with others is fine, but assignments should be completed alone. Likewise, using someone else's ideas or quoting a text without properly acknowledging the source is plagiarism. Cheating and plagiarism are grounds for failing or even expulsion.",
    "answer": "C",
    "evidence": "you should produce your written work by yourself",
    "explanation": "Ishni o'zingiz bajaring, ko'chirish va plagiat taqiqlanadi. C: \"make sure your work is your own\"."
   },
   {
    "body": "Your grade in most classes will be based on your scores on tests, quizzes, and assignments. If the class has a recitation or discussion section, active participation can improve your grade. The better the professor and teaching assistants know you and your work, the better they will be able to judge your progress. Good luck in your first semester!",
    "answer": "A",
    "evidence": "Your grade in most classes will be based on your scores on tests, quizzes, and assignments",
    "explanation": "Baholashning turli usullari: test, quiz, topshiriq, darsdagi faollik. A: \"be prepared for different methods of assessment\"."
   }
  ]
 },
 {
  "n": 38,
  "title": "South-East Asia on Track with Mass Transit Railways",
  "topic": "Janubi-Sharqiy Osiyoda metro",
  "sub": "A number of cities, including Toronto and Vancouver, are constructing mass transit railways in an attempt to overcome the inadequate road systems, where simply travelling five blocks can take over an hour. In this article we take a look at this form of transport in three South-East Asian cities: Bangkok, Kuala Lumpur and Singapore.",
  "headings": [
   [
    "A",
    "Using technology to increase safety"
   ],
   [
    "B",
    "A badly needed solution"
   ],
   [
    "C",
    "Making public transport affordable"
   ],
   [
    "D",
    "Linking different forms of public transport"
   ],
   [
    "E",
    "An efficient automated system"
   ],
   [
    "F",
    "Convincing the customers"
   ],
   [
    "G",
    "A series of difficulties"
   ],
   [
    "H",
    "A need for government help"
   ]
  ],
  "paragraphs": [
   {
    "body": "Bangkok is a thriving city with a population of six million and a further two million who travel into the city every day. Well-known for the terrible daily traffic jams, the Thai government desperately needed, a transport system that would reduce pressure on the already busy roads. In 1992, city administrators embarked upon the Sky Train project, notable for several reasons.",
    "answer": "B",
    "evidence": "the Thai government desperately needed, a transport system",
    "explanation": "Bangkok tirbandliklari uchun yangi transport tizimi juda zarur edi. B: \"a badly needed solution\"."
   },
   {
    "body": "First of all the government was reluctant to invest public funds in the huge project (around $1.7billion), so private investment had to be found. In the end, a conglomerate including Siemens and the Italian-Thai Construction Company won the contract but in 1997, when the Asian economic crisis hit, the whole enterprise nearly collapsed when nervous investors wanted to pull the plug. A second major issue was the actual construction, which was taking place in the middle of the road and, whilst accidents were rare, a taxi driver was killed when a beam fell from one of the viaducts. Construction was stopped for two months and stricter safety rules were implemented. A further difficulty involved personnel who all had to be trained from scratch.",
    "answer": "G",
    "evidence": "A second major issue",
    "explanation": "Moliya, inqiroz, avariya, kadrlar kabi ketma-ket muammolar. G: \"a series of difficulties\"."
   },
   {
    "body": "Yet despite all these problems, the Sky Train opened ahead of schedule. Now though, there is further challenge for the operators: persuading the people to use the system. Compared to the buses, tickets are not particularly cheap. In order to pay the debt, the operators need to aim for a minimum of 680,000 trips a day which presents a real marketing challenge. And the Sky Train is only the first part of an ambitious plan: a further 240 kilometers of track, including an underground portion, is already in the pipeline.",
    "answer": "F",
    "evidence": "persuading the people to use the system",
    "explanation": "Odamlarni yangi tizimdan foydalanishga ko'ndirish kerak. F: \"convincing the customers\"."
   },
   {
    "body": "Private investment in the rail system proved to be an unsuccessful approach for Malaysia, whose government was forced to take over the finances of Kuala Lumpur's mass transit system in 2001. Although construction had already been completed, severe financial problems hit the companies responsible for the transit system. Now, the government has arranged a $5.5 billion bond to buy the assets, which will then be leased back to the companies.",
    "answer": "H",
    "evidence": "whose government was forced to take over the finances",
    "explanation": "Xususiy sarmoya muvaffaqiyatsiz bo'lgach, hukumat yordamga kelgan. H: \"a need for government help\"."
   },
   {
    "body": "The Light Rail Transit (LRT) system has 24 stations and is a combination of tunnel and elevated track, designed to avoid impacting on existing roads. At present, around 10,000 people ride the train daily, but the target figure is 30,000. Safety and automation feature heavily: the trains are driverless, the signaling is fully automated and it is able to provide a service level of 90 seconds between trains during peak hours. In terms of safety, passengers can communicate directly with the control center from two-way phones and every platform has emergency buttons and CCTV cameras. There is even an 'intrusion detection system' which can detect when passengers get too close to the moving trains or tracks. As well as extending the system, the government is looking at introducing an integrated ticketing system for buses and LRT as well as merging six competing bus services.",
    "answer": "A",
    "evidence": "In terms of safety, passengers can communicate directly with the control center",
    "explanation": "Xavfsizlik uchun texnologiyalar: haydovchisiz poyezdlar, kameralar, kirish aniqlash tizimi. A: \"using technology to increase safety\"."
   },
   {
    "body": "Adding to Singapore's existing Mass Rapid Transit (MRT) is the new North East Line: a $2.6 billion, 20-kilometre underground system which was opened in 2003 by the state's Land Transport Authority. The line, including the stations, is fully automatic. It can carry 40,000 people per hour in each direction without anyone operating the trains or opening the doors at the station. Like the Malaysian system, an operating time of 90 seconds can be achieved during peak times, although currently, trains reach the stations every three minutes.",
    "answer": "E",
    "evidence": "The line, including the stations, is fully automatic",
    "explanation": "To'liq avtomatlashtirilgan va samarali tizim. E: \"an efficient automated system\"."
   }
  ]
 },
 {
  "n": 39,
  "title": "The crisis in advertising",
  "topic": "Reklama sohasidagi inqiroz",
  "sub": "",
  "headings": [
   [
    "A",
    "How advertising reached the majority of consumers"
   ],
   [
    "B",
    "An uncertain future"
   ],
   [
    "C",
    "Not everyone wants to see advertisements"
   ],
   [
    "D",
    "Strong sales don't require most of the spending on advertising to go to TV"
   ],
   [
    "E",
    "The rising cost of television advertising"
   ],
   [
    "F",
    "Advertisers' difficulties are nothing new - but they're getting worse"
   ],
   [
    "G",
    "Using consumers to do the advertising"
   ],
   [
    "H",
    "More television stations, but fewer people watch each one"
   ]
  ],
  "paragraphs": [
   {
    "body": "Advertisers have known for a long time that half the money they spent was wasted: their problem was that they didn't know which half. But now they're facing bigger challenges than ever before, and as a result, they're probably wasting even more of their advertising budget.",
    "answer": "F",
    "evidence": "now they're facing bigger challenges than ever before",
    "explanation": "Reklamachilarning muammosi eski, lekin hozir kuchaymoqda. F: \"advertisers' difficulties are nothing new - but they're getting worse\"."
   },
   {
    "body": "For years, the main media used for advertising in the USA were newspapers - now affected by a fall in the number of readers - magazines, television, radio, cinema and outdoor (that's, posters on billboards in the street). These have now been joined by the Internet. The most effective medium was television: when there were only two or three channels in each country, TV commercials were seen by maybe 90% of consumers, and advertisers from banks to airlines to car manufacturers spent vast amounts on television advertising.",
    "answer": "A",
    "evidence": "TV commercials were seen by maybe 90% of consumers",
    "explanation": "Televideniye orqali reklama iste'molchilarning ko'pchiligiga yetib borgan. A: \"how advertising reached the majority of consumers\"."
   },
   {
    "body": "Now, though, with the growth of satellite and cable TV, the number of channels has multiplied, so audiences are much smaller than in the past. Because of this, and the popularity of the Internet, advertisers may find they are reaching no more than a third of the public.",
    "answer": "H",
    "evidence": "the number of channels has multiplied, so audiences are much smaller",
    "explanation": "Kanallar ko'paygan, har birining tomoshabini kamaygan. H: \"more television stations, but fewer people watch each one\"."
   },
   {
    "body": "Another problem for advertisers is a change in attitudes. As the average American sees around 3,000 advertisements of various sorts every day, the findings of some recent surveys are hardly surprising: two-thirds of Americans would like to avoid advertising altogether - particularly on TV. Consumers are buying personal video recorders, not least because they make it possible to see TV programmes without watching the commercials.",
    "answer": "C",
    "evidence": "two-thirds of Americans would like to avoid advertising altogether",
    "explanation": "Ko'pchilik reklama ko'rishni xohlamaydi. C: \"not everyone wants to see advertisements\"."
   },
   {
    "body": "To deal with these challenges, companies are changing their approach to marketing. Procter & Gamble, manufacturer of many of the household goods found in millions of homes, is the world's biggest advertiser, spending $4 billion a year. In the 1990s, 90 per cent of that was spent on TV commercials, but now the percentage is much lower, and sales remain strong. In 2003, the company launched a nonprescription medicine, Prilosec. Only about a quarter of the marketing budget was spent on TV, while the rest went to other forms of marketing, and many in the advertising industry expected the launch to fail as a result. Instead, the product sold very well.",
    "answer": "D",
    "evidence": "Only about a quarter of the marketing budget was spent on TV",
    "explanation": "Reklama pulining ozi televizorga ketgan, lekin dori yaxshi sotilgan. D: \"strong sales don't require most of the spending on advertising to go to TV\"."
   },
   {
    "body": "It's hard to predict what advertising will be like in a few years' time, but it's sure to be far more varied than it was in the last century. It has always been the job of the advertising industry to be inventive. Now it isn't just a question of inventing new ads - advertisers are having to invent new ways of persuading consumers to buy.",
    "answer": "B",
    "evidence": "It's hard to predict what advertising will be like in a few years' time",
    "explanation": "Reklamaning kelajagini oldindan aytish qiyin. Mazmunan B: \"an uncertain future\". Kitob kalitida G berilgan, lekin paragrafda iste'molchilar reklama qilishi haqida gap yo'q."
   }
  ]
 },
 {
  "n": 40,
  "title": "Traffic jams - no end in sight",
  "topic": "Tirbandliklar",
  "sub": "There are no easy answers to the problems of traffic congestion.",
  "headings": [
   [
    "A",
    "A solution which is no solution"
   ],
   [
    "B",
    "Changing working practices"
   ],
   [
    "C",
    "Closing city centres to traffic"
   ],
   [
    "D",
    "Making cars more environmentally friendly"
   ],
   [
    "E",
    "Not doing enough"
   ],
   [
    "F",
    "Paying to get in"
   ],
   [
    "G",
    "A global problem"
   ]
  ],
  "paragraphs": [
   {
    "body": "Traffic congestion affects people throughout the world. Traffic jams cause smog in dozens of cities across both the developed and developing world. In the US, commuters spend an average of a full working week each year sitting in traffic jams, according to the Texas Transportation Institute. While alternative ways of getting around are available, most people still choose their cars because they are looking for convenience, comfort and privacy.",
    "answer": "G",
    "evidence": "Traffic congestion affects people throughout the world",
    "explanation": "Tirbandlik butun dunyo muammosi: rivojlangan va rivojlanayotgan mamlakatlarda. G: \"a global problem\"."
   },
   {
    "body": "The most promising technique for reducing city traffic called congestion pricing, whereby cities charge a toll to enter certain parts of town at certain times of day. In theory, if the toll is high enough, some drivers will cancel their trips or go by bus or train. And in practice it seems to work: Singapore, London and Stockholm have reduced traffic and pollution in city centres thanks to congestion pricing.",
    "answer": "F",
    "evidence": "cities charge a toll to enter certain parts of town",
    "explanation": "Shaharning ma'lum qismiga kirish uchun pul to'lanadi. F: \"paying to get in\"."
   },
   {
    "body": "Another way to reduce rush-hour traffic is for employers to implement flexitime, which lets employees travel to and from work at off-peak times to avoid the rush hour. Those who have to travel during busy times can do their part by sharing cars. Employers can also allow more staff to telecommute (work from home) so as to keep more cars off the road altogether.",
    "answer": "B",
    "evidence": "for employers to implement flexitime",
    "explanation": "Moslashuvchan ish vaqti va uydan ishlash, ya'ni ish tartibini o'zgartirish. B: \"changing working practices\"."
   },
   {
    "body": "Some urban planners still believe that the best way to ease traffic congestion is to build more roads, especially roads that can take drivers around or over crowded city streets. But such techniques do not really keep cars off the road; they only accommodate more of them.",
    "answer": "A",
    "evidence": "such techniques do not really keep cars off the road",
    "explanation": "Yangi yo'llar qurish muammoni hal qilmaydi, faqat mashinalar ko'payadi. A: \"a solution which is no solution\"."
   },
   {
    "body": "Other, more forward-thinking, planners know that more and more drivers and cars are taking to the roads every day, and they are unwilling to encourage more private automobiles when public transport is so much better both for people and the environment. For this reason, the American government has decided to spend some $7 billion on helping to increase capacity on public transport systems and upgrade them with more efficient technologies. But environmentalists complain that such funding is tiny compared to the $50 billion being spent on roads and bridges.",
    "answer": "E",
    "evidence": "such funding is tiny compared to the $50 billion being spent on roads and bridges",
    "explanation": "Jamoat transportiga ajratilgan mablag' yo'llarga sarflanganidan ancha kam. E: \"not doing enough\"."
   }
  ]
 },
 {
  "n": 41,
  "title": "",
  "topic": "Organik oziq-ovqat",
  "sub": "",
  "headings": [
   [
    "A",
    "Research into whether organic food is better for us"
   ],
   [
    "B",
    "Adding up the cost of organic food"
   ],
   [
    "C",
    "The factors that can affect food quality"
   ],
   [
    "D",
    "The rich and poor see things differently"
   ],
   [
    "E",
    "A description of organic farming"
   ],
   [
    "F",
    "Testing the taste of organic food"
   ],
   [
    "G",
    "Fear of science has created the organic trend"
   ],
   [
    "H",
    "The need to remove hidden dangers from food"
   ]
  ],
  "paragraphs": [
   {
    "body": "Europe is now the biggest market for organic food in the world, expanding by 25 percent a year over the past 10 years. So what is the attraction of organic food for some people? The really important thing is that organic sounds more 'natural'. Eating organic is a way of defining oneself as natural, good, caring, different from the junk-food-scoffing masses. As one journalist puts it: 'It feels closer to the source, the beginning, the start of things.' The real desire is to be somehow close to the soil, to Mother Nature.",
    "answer": "D",
    "evidence": "different from the junk-food-scoffing masses",
    "explanation": "Organik ovqat yeyuvchilar o'zini arzon fast-food yeydigan omma bilan qarama-qarshi qo'yadi, ya'ni boylar va kambag'allar narsalarga turlicha qaraydi. Mazmunan D: \"the rich and poor see things differently\". Kitob kalitida H berilgan, lekin bu paragrafda ovqatdagi yashirin xavflar haqida gap yo'q."
   },
   {
    "body": "Unlike conventional farming, the organic approach means farming with natural, rather than man-made, fertilisers and pesticides. Techniques such as crop rotation improve soil quality and help organic farmers compensate for the absence of man-made chemicals. As a method of food production, organic is, however, inefficient in its use of labour and land; there are severe limits to how much food can be produced. Also, the environmental benefits of not using artificial fertiliser are tiny compared with the amount of carbon dioxide emitted by transporting food (a great deal of Britain's organic produce is shipped in from other countries and transported from shop to home by car).",
    "answer": "E",
    "evidence": "the organic approach means farming with natural, rather than man-made, fertilisers",
    "explanation": "Organik dehqonchilik qanday ishlashi tasvirlangan. E: \"a description of organic farming\"."
   },
   {
    "body": "Organic farming is often claimed to be safer than conventional farming - for the environment and for consumers. Yet studies into organic farming worldwide continue to reject this claim. An extensive review by the UK Food Standards Agency found that there was no statistically significant difference between organic and conventional crops. Even where results indicated there was evidence of a difference, the reviewers found no sign that these differences would have any noticeable effect on health.",
    "answer": "A",
    "evidence": "studies into organic farming worldwide continue to reject this claim",
    "explanation": "Organik ovqat foydaliroqmi degan tadqiqotlar natijasi. A: \"research into whether organic food is better for us\"."
   },
   {
    "body": "The simplistic claim that organic food is more nutritious than conventional food was always likely to be misleading. Food is a natural product, and the health value of different foods will vary for a number of reasons, including freshness, the way the food is cooked, the type of soil it is grown in, the amount of sunlight and rain crops have received, and so on. Like. wise, the flavour of a carrot has less to do with whether it was fertilised with manure or something out of a plastic sack than with the variety of carrot and how long ago it was dug up. The differences created by these things are likely to be greater than any differences brought about by using an organic or nonorganic system of production. Indeed, even some 'organic' farms are quite different from one another.",
    "answer": "C",
    "evidence": "the health value of different foods will vary for a number of reasons",
    "explanation": "Ovqat sifatiga ta'sir qiluvchi omillar: yangilik, pishirish, tuproq, quyosh, yomg'ir. C: \"the factors that can affect food quality\"."
   },
   {
    "body": "The notion that organic food is safer than 'normal' food is also contradicted by the fact that many of our most common foods are full of natural toxins. Parsnips cause blisters on the skin of agricultural workers. Toasting bread creates carcinogens. As one research expert says: 'People think that the more natural something is, the better it is for them. That is simply not the case. In fact, it is the opposite that is true: the closer a plant is to its natural state, the more likely it is that it will poison you. Naturally, many plants do not want to be eaten, so we have spent 10,000 years developing agriculture and breeding out harmful traits from crops.'",
    "answer": "H",
    "evidence": "breeding out harmful traits from crops",
    "explanation": "Tabiiy o'simliklarda zaharlar bor, dehqonchilik ularni yo'qotish uchun rivojlangan. Mazmunan H: \"the need to remove hidden dangers from food\". Kitob kalitida B berilgan, lekin bu paragrafda organik ovqat narxi haqida gap yo'q."
   },
   {
    "body": "Yet educated Europeans are more scared of eating traces of a few, strictly regulated, man-made chemicals than they are of eating the ones that nature created directly. Surrounded by plentiful food, it's not nature they worry about, but technology. Our obsessions with the ethics and safety of what we eat - concerns about antibiotics in animals, additives in food, GM crops and so on - are symptomatic of a highly technological society that has little faith in its ability to use this technology wisely. In this context, the less something is touched by the human hand, the healthier people assume it must be.",
    "answer": "G",
    "evidence": "it's not nature they worry about, but technology",
    "explanation": "Odamlar texnologiyadan qo'rqadi, organik moda shundan kelib chiqqan. G: \"fear of science has created the organic trend\"."
   }
  ]
 },
 {
  "n": 42,
  "title": "Wily, wired consumers",
  "topic": "Ayyor, internetga bog'langan xaridorlar",
  "sub": "",
  "headings": [
   [
    "A",
    "Increasing customer confidence"
   ],
   [
    "B",
    "A benefit to retailers"
   ],
   [
    "C",
    "The bigger picture of how Internet use changes consumer behaviour"
   ],
   [
    "D",
    "Introducing a novel approach to purchasing"
   ],
   [
    "E",
    "The dangers for retailers"
   ],
   [
    "F",
    "Retraining staff"
   ],
   [
    "G",
    "Changing the face of the shop and the Internet site"
   ],
   [
    "H",
    "A look at the sales figures"
   ]
  ],
  "paragraphs": [
   {
    "body": "The amount of time people spend researching, checking prices, visiting stores and seeking advice from friends tends to rise in proportion to the value of the product they are thinking of buying. A new car is one of the biggest purchases people make, and buyers typically spend four to six weeks thinking over their choices. So why are some people now walking into car showrooms and ordering a vehicle without even asking for a test drive? Or turning up at an electrical store and pointing out the washing machine they want without seeking advice from a sales assistant? Welcome to a new style of shopping shaped by the Internet.",
    "answer": "D",
    "evidence": "Welcome to a new style of shopping shaped by the Internet",
    "explanation": "Internet yangi xarid uslubini yaratdi: odamlar sinab ko'rmasdan mashina buyurtma qiladi. D: \"introducing a novel approach to purchasing\"."
   },
   {
    "body": "More people are buying products online, especially at peak buying periods. The total value of e-commerce transactions in the United States in the fourth quarter of 2004 reached $18 billion, a 22% increase over the same period in 2003, according to the Department of Commerce in Washington DC. But that just represents 2% of America's total retail market and excludes services, such as online travel, the value of goods auctioned on the Internet, and the $34 billion-worth of goods that individuals trade on eBay.",
    "answer": "H",
    "evidence": "reached $18 billion, a 22% increase",
    "explanation": "Onlayn savdo raqamlari keltiriladi. H: \"a look at the sales figures\"."
   },
   {
    "body": "If you consider the Internet's wider influence over what people spend their money on, then the figures escalate out of sight. Some carmakers in America now find that eight out of ten of their buyers have logged on to the Internet to gather information about not just the exact vehicle they want, but also the price they are going to pay. Similarly with consumer electronics, nowadays if a customer wants to know which flat-screen TV they should buy, they are likely to start their shopping online - even though the vast majority will not complete the transaction there.",
    "answer": "C",
    "evidence": "the Internet's wider influence over what people spend their money on",
    "explanation": "Internet xaridorlar xatti-harakatiga kengroq ta'sir qiladi: 10 xaridordan 8 tasi avval internetda ma'lumot qidiradi. C: \"the bigger picture of how Internet use changes consumer behaviour\"."
   },
   {
    "body": "The Internet is moving the world closer to perfect product and price information. The additional knowledge it can provide makes consumers more self-assured and bold enough to go into a car dealership and refuse to bargain. As a result, the process of shopping is increasingly being divorced from the transaction itself. Consumers might surf the web at night and hit the shops during the day. Visiting bricks-and-mortar stores can provide the final confirmation that the item or group of items that they are interested in is right for them.",
    "answer": "A",
    "evidence": "makes consumers more self-assured",
    "explanation": "Ma'lumot xaridorni o'ziga ishonchliroq qiladi. A: \"increasing customer confidence\"."
   },
   {
    "body": "Far from losing trade to online merchants, stores that offer the sorts of goods people find out about online can gain from this new form of consumer behaviour. This is provided they offer attractive facilities, good guarantees and low prices.",
    "answer": "B",
    "evidence": "stores that offer the sorts of goods people find out about online can gain",
    "explanation": "Oddiy do'konlar ham bundan foyda ko'radi. B: \"a benefit to retailers\"."
   },
   {
    "body": "Merchants who charge too much and offer poor service, however, should beware. The same, too, for shaky manufacturers: smarter consumers know which products have a good reputation and which do not, because online they now read not only the sales blurb but also reviews from previous purchasers. And if customers are disappointed, a few clicks of the mouse will take them to places where they can let the world know.",
    "answer": "E",
    "evidence": "Merchants who charge too much and offer poor service, however, should beware",
    "explanation": "Qimmat va sifatsiz xizmat ko'rsatuvchi sotuvchilar uchun xavf. E: \"the dangers for retailers\"."
   }
  ]
 },
 {
  "n": 43,
  "title": "",
  "topic": "Oq ayiqlar",
  "sub": "",
  "headings": [
   [
    "A",
    "Reproduction"
   ],
   [
    "B",
    "The fur trade"
   ],
   [
    "C",
    "Physical characteristics"
   ],
   [
    "D",
    "Diet"
   ],
   [
    "E",
    "Habit and distribution"
   ],
   [
    "F",
    "Chances of survival"
   ]
  ],
  "paragraphs": [
   {
    "body": "The polar bear is the largest terrestrial carnivore. Adult males can measure more than nine feet in length and weigh between 770 and 1,430 pounds. The bear's body and neck are elongated, and the head is narrow and long with small, rounded ears. The polar bear's coat, covering it completely except for the nose and foot pads, is superbly adapted to Arctic environments. Along with a thick layer of body fat, the water-repellent coat insulates the bear from cold air and water. It also serves as camouflage; in fact, polar bears can sometimes Pass as snow drifts. The fur is 95 percent efficient in converting ultra-violet sun rays into usable heat. Its transparent hairs have a hollow inner core which scatters ultra-violet light by some unknown mechanism, converting it into heat when it reaches the bear's black skin. Surprisingly, the fur has no white pigment; it is the reflection of the sun that causes the fur to appear white.",
    "answer": "C",
    "evidence": "The polar bear is the largest terrestrial carnivore",
    "explanation": "O'lchami, vazni, tana tuzilishi va mo'ynasi tasvirlangan. C: \"physical characteristics\"."
   },
   {
    "body": "Polar bear populations can be found in northern Canada, Greenland, Norway and Russia, and there have been reports that polar bear tracks have been found as far north as the North Pole. The five million square-mile range of the polar bear circles the Arctic and contains stretches of open water where its primary prey - seals - are easily caught. Polar bears live on the annual Arctic sea ice that provides a platform from which they can hunt. But when the edge of the ice retreats to the north during summer, bears must follow the ice floes or become stranded on land where they must stay until the sea ice forms again in the fall.",
    "answer": "E",
    "evidence": "Polar bear populations can be found in northern Canada, Greenland, Norway and Russia",
    "explanation": "Qayerda tarqalgani va qanday yashashi. E: \"habit and distribution\"."
   },
   {
    "body": "Polar bears hunt ringed and bearded seals on the sea ice, between late April and mid-July, by breaking into seal dens in the sea ice. The dens are not visible from above, but seeing is less important than smelling to a polar bear - with their keen sense of smell, polar bears can detect the breathing holes of seals in their dens beneath the snow and ice. Plentiful access to food in this period is critical, particularly for pregnant females. As the southern edge of the arctic ice cap melts in summer, polar bears are stranded on land and spend their summers fasting, living off body fat stored from hunting in the spring and winter. As a result of global warming, sea ice in the Arctic is melting earlier and forming later each year. Ongoing research funded by WWF is finding that polar bears are left with less time on the ice to hunt for food and built up their fat stores, and increased time on land where they must fast. As their ice habitat shrinks, skinnier and hungrier polar bears face a grave Challenge to their survival. Polar bears also prey upon harp seals, as well as young walruses and beluga whales, narwhal, fish, and seabirds and their eggs.",
    "answer": "D",
    "evidence": "Polar bears hunt ringed and bearded seals",
    "explanation": "Nima yeyishi: tyulenlar, morjlar, baliqlar. D: \"diet\"."
   },
   {
    "body": "Polar bears breed in late March, April and May. The males actively seek out females by following their tracks on sea ice. They remain with the female for a short time, then leave in search of another female. During November and December, the female digs a maternity den in a drift of snow, maintaining and enlarging the chamber as the drifts cover her, snowing her in. Soon she gives birth to twins, which cuddle in their mother's thick fur. She ceases to feed throughout the winter and instead lives off her stored fat. Her milk, high in fat content, enables the cubs to keep warm and grow rapidly before leaving the dark den in March or April. Short trips are made to and from the den for several days as the cubs acclimate to the outside temperatures. Then the family leaves and makes its way to the sea ice where the mother feeds and protects her cubs. The family returns to the den the next winter and remains together during the following spring and summer. After two years together, the family disperses.",
    "answer": "A",
    "evidence": "Polar bears breed in late March, April and May",
    "explanation": "Juftlashish, uya qurish, bolalarini boqish. A: \"reproduction\"."
   },
   {
    "body": "With about 22,000 polar bears living in the wild, the species is not currently endangered, but its future is far from certain. In 1973, Canada, the United States, Denmark, Norway and the former U.S.S.R. signed the International Agreement on the Conservation of Polar Bears and their Habitat. This agreement restricts the hunting of polar bears and directs each nation to protect their habitats, but it does not protect the bears against the biggest man-made threat to their survival: global warming. If current warming trends continue unabated, scientists believe that polar bears may disappear within 100 years.",
    "answer": "F",
    "evidence": "its future is far from certain",
    "explanation": "Turning kelajagi va global isish tahdidi. F: \"chances of survival\"."
   }
  ]
 },
 {
  "n": 44,
  "title": "TV is no longer just for the home",
  "topic": "Do'kondagi televizor",
  "sub": "",
  "headings": [
   [
    "A",
    "Satisfied shoppers"
   ],
   [
    "B",
    "Making customers notice the ads"
   ],
   [
    "C",
    "Not just advertising"
   ],
   [
    "D",
    "Why not everyone is happy"
   ],
   [
    "E",
    "The advantages for advertisers compared with TV"
   ],
   [
    "F",
    "Ads designed for different departments"
   ],
   [
    "G",
    "A growing trend"
   ],
   [
    "H",
    "Information required"
   ]
  ],
  "paragraphs": [
   {
    "body": "Do we really want non-stop TV advertising without the boring programmes in between? Well, that's what more and more retailers are giving us, in the shape of in-store TV. Go into a supermarket or department store, and the chances are there will be plasma screens beaming the company's own TV channel at you.",
    "answer": "G",
    "evidence": "that's what more and more retailers are giving us",
    "explanation": "Do'kon televideniyesi tobora ko'payib bormoqda. G: \"a growing trend\"."
   },
   {
    "body": "In between news clips, recipe tips and beauty advice, the screens show advertisements for products in the aisles. The news and other editorial sections of the broadcast play an important role in preventing shoppers from feeling they are the constant target of ads. Advertorial pieces can be very effective: these are ads presented in the style of an editorial or journalistic report, and have been known to cause sales to treble or even quadruple.",
    "answer": "C",
    "evidence": "In between news clips, recipe tips and beauty advice",
    "explanation": "Ekranlarda faqat reklama emas, yangiliklar va maslahatlar ham beriladi. C: \"not just advertising\"."
   },
   {
    "body": "In the early years of in-store TV, too often screens were dotted randomly around stores, playing continuous adverts that were not tailored to the shopping environment. In terms of customer experience, it sometimes left a lot to be desired. This has been changing, though, as advertisers get more sophisticated at using in-store TV.",
    "answer": "D",
    "evidence": "it sometimes left a lot to be desired",
    "explanation": "Dastlab ekranlar tartibsiz edi, xaridorlarga yoqmagan. Mazmunan D: \"why not everyone is happy\". Kitob kalitida 3–6-javoblar bir qatorga surilib qolgan, bu yerda mazmunga qarab berildi."
   },
   {
    "body": "In-store ads have to be particularly attention-grabbing because people are there to shop, not watch TV. Unless an ad is outstanding, no-one watches it for more than a few seconds. Advertisers have realized that this requires a different approach from standard television, and often customize ads just for in-store TV. One ad for deodorant body spray certainly attracted attention. It was actually set in a store: a male shopper sprays on some of the product, making himself so attractive that women in the store run after him.",
    "answer": "B",
    "evidence": "In-store ads have to be particularly attention-grabbing",
    "explanation": "Do'kondagi reklama e'tiborni tortishi kerak. B: \"making customers notice the ads\"."
   },
   {
    "body": "Ads that communicate facts about a product or an offer appear to work better than the more emotional, slice-of-life advertising that dominates regular television. Shoppers are in the store to make purchases, and they want the ad to tell them specifically about a brand and what it is going to do for them.",
    "answer": "H",
    "evidence": "Ads that communicate facts about a product or an offer appear to work better",
    "explanation": "Xaridorlar mahsulot haqida aniq ma'lumot kutadi. H: \"information required\"."
   },
   {
    "body": "It is important to make sure customers are not bombarded with messages when they don't want to be, by ensuring that content is tightly tailored to particular store areas. Several TV channels need to be broadcast simultaneously: in the central aisle -which typically has five or six large plasma screens -the café, and so on. That allows advertisers to buy ad time in particular sections of the store: health and beauty, electronics or food, for instance, and reach customers just when they're deciding which brand of toothpaste or which DVD player to buy.",
    "answer": "F",
    "evidence": "tightly tailored to particular store areas",
    "explanation": "Do'konning har bir bo'limi uchun alohida reklama. F: \"ads designed for different departments\"."
   }
  ]
 },
 {
  "n": 45,
  "title": "Australia's first commercial wind farm",
  "topic": "Avstraliyaning birinchi tijorat shamol fermasi",
  "sub": "It's some years since the rotor blades began spinning in Esperance.",
  "headings": [
   [
    "A",
    "Benefiting from an earlier model"
   ],
   [
    "B",
    "Important operative conditions"
   ],
   [
    "C",
    "What makes Esperance different?"
   ],
   [
    "D",
    "What is a wind farm?"
   ],
   [
    "E",
    "How it's all linked up"
   ],
   [
    "F",
    "How a suitable location was found"
   ],
   [
    "G",
    "Comparing wind speeds in Australian cities"
   ],
   [
    "H",
    "Matching operational requirements with considerations of appearance"
   ]
  ],
  "paragraphs": [
   {
    "body": "Harvest time in Esperance is constant. As long as the wind blows — which is pretty much all the time - nine identical synchronised wind turbines reap the benefits of the dependable winds that gust up around the southern coastline of Western Australia. These sleek, white, robot-like wind turbines loom up on the horizon forming part of Australia's first commercial wind farm. They're not only functional machines that help provide electricity for this secluded coastal town, but increasingly, they're also drawcards for curious tourists and scientists alike.",
    "answer": "D",
    "evidence": "forming part of Australia's first commercial wind farm",
    "explanation": "Paragraf shamol elektr stansiyasi nima ekanini tasvirlaydi: turbinalar shamoldan elektr oladi. D: \"what is a wind farm?\"."
   },
   {
    "body": "Because of its isolation, Esperance is not linked to Western Power's grid which supplies electricity from gas-, coal- and oil-fired power stations to the widespread population of Western Australia. Before the wind turbines went in, Esperance's entire electricity needs were met by the diesel power station in town.",
    "answer": "C",
    "evidence": "Because of its isolation, Esperance is not linked to Western Power's grid",
    "explanation": "Esperance uzoqda joylashgani uchun umumiy tarmoqqa ulanmagan, bu uni boshqa shaharlardan ajratib turadi. C: \"what makes Esperance different?\"."
   },
   {
    "body": "The $5.8 million Ten Mile Lagoon project is not Esperance's first wind farm. The success of a smaller, experimental wind farm, at a spot called Salmon Beach, encouraged the State's power utility to take Esperance wind seriously. Today, the wind turbines at Ten Mile Lagoon work in conjunction with the diesel power station, significantly reducing the amount of the town's electricity generated by expensive diesel power.",
    "answer": "A",
    "evidence": "The success of a smaller, experimental wind farm",
    "explanation": "Avvalgi kichik tajriba stansiyasining muvaffaqiyati yangi loyihaga yo'l ochgan. A: \"benefiting from an earlier model\"."
   },
   {
    "body": "The wind farm is connected to the power station by a 33-kilovolt power line, and a radio link between the two allows operators to monitor and control each wind turbine. The nine 225-kilowatt Vestas wind turbines produce a total generating capacity of two megawatts and provide around 12 per cent of the energy requirements of Esperance and its surrounding districts.",
    "answer": "E",
    "evidence": "a radio link between the two allows operators to monitor and control each wind turbine",
    "explanation": "Stansiya elektr liniyasi va radio aloqa orqali ulangan. E: \"how it's all linked up\"."
   },
   {
    "body": "The power produced by a wind turbine depends on the size and efficiency of the machine and, of course, on the energy in the wind. The energy in the wind available to the wind turbines is proportional to wind speed cubed. Thus, the greater the wind speed, the greater the output of the turbine. In order to achieve optimum wind speeds, the right location is imperative. 'You have to accept the nature of the beast,' Mr Rosser, Western Power's physicist, said. 'As surface dwellers our perceptions of wind speeds are bad. As you go higher, wind speed increases significantly.'",
    "answer": "B",
    "evidence": "the right location is imperative",
    "explanation": "Turbina ishlashi uchun shamol tezligi va joy muhim. B: \"important operative conditions\"."
   },
   {
    "body": "The most favourable wind sites are on gently sloping hills, away from obstructions like trees and buildings and where the prevailing winds are not blocked. Computer modelling was used to select the optimum site for Esperance's wind farm. Scientists were concerned not only with efficiency, but also with protecting the coastal health environment which is rich in plant life and home to tiny pygmy and honey-possums, and a host of bird species. In addition, the wind farm is adjacent to Esperance's popular scenic tourist drive.",
    "answer": "F",
    "evidence": "Computer modelling was used to select the optimum site",
    "explanation": "Eng qulay joy kompyuter modeli yordamida tanlangan. F: \"how a suitable location was found\"."
   }
  ]
 },
 {
  "n": 46,
  "title": "Yoruba Town",
  "topic": "Yoruba shahri",
  "sub": "",
  "headings": [
   [
    "A",
    "Town facilities"
   ],
   [
    "B",
    "Colonisation"
   ],
   [
    "C",
    "Urban divisions"
   ],
   [
    "D",
    "Architectural home styles"
   ],
   [
    "E",
    "Types of settlements"
   ],
   [
    "F",
    "Historical foundations"
   ],
   [
    "G",
    "Domestic arrangements"
   ],
   [
    "H",
    "The residences of the rulers"
   ]
  ],
  "paragraphs": [
   {
    "body": "The Yoruba people of Nigeria classify their towns in two ways. Permanent towns with their own governments are called \"ilu\", whereas temporary settlements, set up to support work in the country are \"aba\". Although ilu tend to be larger than aba, the distinction is not one of size, some aba are large, while declining ilu can be small, but of purpose. There is no \"typical\" Yoruba town, but some features are common to most towns.",
    "answer": "E",
    "evidence": "classify their towns in two ways",
    "explanation": "Yoruba aholi punktlarining ikki turi: ilu va aba. E: \"types of settlements\"."
   },
   {
    "body": "In the 19th century most towns were heavily fortified and the foundations of these walls are sometimes visible. Collecting tolls to enter and exit through the walls was a major source of revenue for the old town rulers, as were market fees. The markets were generally located centrally and in small towns, while in large towns there were permanent stands made of corrugated iron or concrete. The market was usually next to the local ruler's palace.",
    "answer": "F",
    "evidence": "most towns were heavily fortified",
    "explanation": "XIX asrdagi devorlar, bojlar va bozorlar, ya'ni shaharlarning tarixiy asoslari. F: \"historical foundations\"."
   },
   {
    "body": "The palaces were often very large. In the 1930's, the area of Oyo's palace covered 17 acres, and consisted of a series of courtyards surrounded by private and public rooms. After colonisation, many of the palaces were completely or partially demolished. Often the rulers built two storey houses for themselves using some of the palace grounds for government buildings.",
    "answer": "H",
    "evidence": "The palaces were often very large",
    "explanation": "Hukmdorlarning saroylari va uylari. H: \"the residences of the rulers\"."
   },
   {
    "body": "The town is divided into different sections. In some towns these are regular, extending out from the center of the town like spokes on a wheel, while in others, where space is limited, they are more random. The different areas are further divided into compounds called \"ile\". These vary in size considerably from single dwellings to up to thirty houses. They tend to be larger in the North. Large areas are devoted to government administrative buildings. Newer developments such as industrial or commercial areas or apartment housing for civil servants tends to be build on the edge of the town.",
    "answer": "C",
    "evidence": "The town is divided into different sections",
    "explanation": "Shaharning qismlarga va \"ile\" deb ataladigan hovlilarga bo'linishi. C: \"urban divisions\"."
   },
   {
    "body": "Houses are rectangular and either have a courtyard in the center or the rooms come off a central corridor. Most social life occurs in the courtyard. They are usually built of hardened mud and have roofs of corrugated iron or, in the countryside, thatch. Buildings of this material are easy to alter, either by knocking down rooms or adding new ones. And can be improved by coating the walls with cement. Richer people often build their houses of concrete blocks and, if they can afford to, build two storey houses. Within compounds there can be quite a mixture of building types. Younger educated people may have well furnished houses while their older relatives live in mud walled buildings and sleep on mats on the floor.",
    "answer": "D",
    "evidence": "Houses are rectangular and either have a courtyard in the center",
    "explanation": "Uylarning shakli va qurilish materiallari. D: \"architectural home styles\"."
   },
   {
    "body": "The builder or the most senior man gets a room either near the entrance or, in a two storied house, next to the balcony. He usually has more than one room. Junior men get a room each and there are separate rooms for teenage boys and girls to sleep in. Younger children sleep with their mothers. Any empty room are used as storage, let out or, if they face the street, used as shops.",
    "answer": "G",
    "evidence": "Younger children sleep with their mothers",
    "explanation": "Uy ichida xonalar oila a'zolari o'rtasida qanday taqsimlanishi. G: \"domestic arrangements\"."
   }
  ]
 },
 {
  "n": 47,
  "title": "",
  "topic": "O'n to'rtinchi asrdagi London",
  "sub": "",
  "headings": [
   [
    "A",
    "City management"
   ],
   [
    "B",
    "Interior of the houses"
   ],
   [
    "C",
    "Bright colours"
   ],
   [
    "D",
    "Busy waterway"
   ],
   [
    "E",
    "Meeting the city's everyday needs"
   ],
   [
    "F",
    "City's finance"
   ],
   [
    "G",
    "City architecture"
   ],
   [
    "H",
    "City's leading position"
   ]
  ],
  "paragraphs": [
   {
    "body": "London was a good place to live in the fourteenth century, and all Londoners were very proud of it. It had a population of about forty thousand and that made it as large as the next four towns in England combined. Its political prestige was enormous, and whatever king occupied the throne in nearby Westminster, the opinions of Londoners had to be considered.",
    "answer": "H",
    "evidence": "Its political prestige was enormous",
    "explanation": "London aholisi va siyosiy nufuzi jihatidan yetakchi bo'lgan. H: \"city's leading position\"."
   },
   {
    "body": "In so busy a city, the problem of adequate water supply and sewage disposal and city cleaning were necessarily complicated. Each of the twenty-five areas of the city had at least one full-time street cleaner. Untidy trades like that of the butchers were kept as far away as possible from the centre. Each citizen had to have the road paved in front of his house.",
    "answer": "E",
    "evidence": "the problem of adequate water supply and sewage disposal and city cleaning",
    "explanation": "Suv ta'minoti, kanalizatsiya va ko'cha tozalash, ya'ni kundalik ehtiyojlar. E: \"meeting the city's everyday needs\"."
   },
   {
    "body": "The city was democratically and intelligently run, and mostly by men who received no pay for their services. The mayor received a large grant for entertainment purposes, and the town-sergeant and town-clerk were given salaries because theirs were full-time posts, but aldermen and members of the common council worked for nothing. They watched over the welfare of the city because they were its citizens.",
    "answer": "A",
    "evidence": "The city was democratically and intelligently run",
    "explanation": "Shaharni kim va qanday boshqargani. A: \"city management\"."
   },
   {
    "body": "The houses were somewhat dark, especially when the wooden shutters had to be closed, as glass was expensive and of poor quality. Most of the houses in London were built tightly packed together, with each storey extending further towards the street than the last one and sometimes the top floors of buildings on opposite sides of the street were so big that they actually met in the middle.",
    "answer": "G",
    "evidence": "each storey extending further towards the street than the last one",
    "explanation": "Uylar zich qurilgan, yuqori qavatlar ko'cha ustida tutashgan. G: \"city architecture\"."
   },
   {
    "body": "As if to compensate for the crooked dark streets and the small dark houses, the outsides of the houses were painted and carved, and priests walked in red and green boots. Even burial cloths were crimson and blue and gold. In churches, there were cloths of gold, with flowers and ostrich feathers woven of jewels and metallic thread. No one could have called London dull.",
    "answer": "C",
    "evidence": "the outsides of the houses were painted and carved",
    "explanation": "Qizil, yashil, qirmizi, ko'k va oltin ranglar. C: \"bright colours\"."
   },
   {
    "body": "A well-to-do family lived in a house where the main room was the hall. There were painted tables, cupboards and chairs with matching curtains in some bright, cheerful colour. The bedroom was a single upstairs room usually used by the whole family. The beds were the most valuable articles of furniture in the whole house. The kitchen and pantry were well equipped.",
    "answer": "B",
    "evidence": "A well-to-do family lived in a house where the main room was the hall",
    "explanation": "Uy ichidagi xonalar va mebellar. B: \"interior of the houses\"."
   }
  ]
 },
 {
  "n": 48,
  "title": "",
  "topic": "Sloveniya",
  "sub": "",
  "headings": [
   [
    "A",
    "The emerald beauty"
   ],
   [
    "B",
    "The oldest vine"
   ],
   [
    "C",
    "Like hiking?"
   ],
   [
    "D",
    "Slovenia's most popular musicians"
   ],
   [
    "E",
    "Forests cover more territory than urban areas"
   ],
   [
    "F",
    "The longest word in Slovene"
   ],
   [
    "G",
    "Resembling Venice"
   ],
   [
    "H",
    "Nuclear Power Plant"
   ]
  ],
  "paragraphs": [
   {
    "body": "Slovenia is known for good wines. But one thing about wine is particularly special in Slovenia. It is Stara Trta, 400 year old vine that is listed in the Guinness Book of World Records as the oldest vine on earth. It sits in the old part of Maribor. Every year it only yields about 50 kg of grapes, which makes about 25 liters of wine. And not only is the wine special - the bottles are specially made by the artist Oskar Kogoj. All in all, this maybe the best gift to bring from Slovenia.",
    "answer": "B",
    "evidence": "listed in the Guinness Book of World Records as the oldest vine on earth",
    "explanation": "400 yillik eng qadimgi tok. B: \"the oldest vine\"."
   },
   {
    "body": "It's dialektičnomaterialističen, and it means materialistic in a dialectic way. Whatever that means, with 26 letters, it's the undisputed champion in length. (This isn't the case in English, where debates rage about what the longest real word is.) In Slovene, some words come close like: buržoazno-nacionalističen, (bourgeose nationalistic) and starocerkvenoslovanščina (Old church Slavic).",
    "answer": "F",
    "evidence": "it's the undisputed champion in length",
    "explanation": "26 harfli eng uzun sloven so'zi. F: \"the longest word in Slovene\"."
   },
   {
    "body": "The Turguoise Soča river, which starts in Slovenia's Julian Alps, looks so unreal, in fact, that Disney chose to film the fantasy adventure film \"Prince Caspian\" by its banks. It has inspired great poets from Italy and Slovenia, and continues to wow visitors to this day.",
    "answer": "A",
    "evidence": "The Turguoise Soča river",
    "explanation": "Feruza rangli go'zal daryo. A: \"the emerald beauty\"."
   },
   {
    "body": "Slovenia has one nuclear power plant, which is located in the town of Krško. Krško is jointly run by Slovenia and Croatia and it provides enormous amounts of power to both countries. It supplies a full 25% of Slovenia's energy needs, and about 20% of Croatia's. It is expected to retire in 2023.",
    "answer": "H",
    "evidence": "Slovenia has one nuclear power plant",
    "explanation": "Krško atom elektr stansiyasi. H: \"nuclear power plant\"."
   },
   {
    "body": "About 58% of Slovenia's territory is forested. If that sounds like a lot, it's because it is. Especially in Europe. In fact, among European countries, only Finland has more forests (as a percentage of its total area). Slovenia comes second. It's ahead of its neighbours -- even ahead of Russia. The big European countries like France and Germany are about 30% forested.",
    "answer": "E",
    "evidence": "About 58% of Slovenia's territory is forested",
    "explanation": "Hududning katta qismini o'rmonlar egallagan. E: \"forests cover more territory than urban areas\"."
   },
   {
    "body": "The country has over 7,000 kilometres of mountain hiking trails. If you walked every trail in Slovenia, it would take you 3 months of non-stop, 24-hour walking. That's without stopping. Luckily, there are places to stop: the country has close to 200 mountain huts scattered across the country.",
    "answer": "C",
    "evidence": "over 7,000 kilometres of mountain hiking trails",
    "explanation": "Tog' so'qmoqlari va kulbalar, ya'ni piyoda sayohat ishqibozlari uchun. C: \"like hiking?\"."
   }
  ]
 },
 {
  "n": 49,
  "title": "",
  "topic": "Gazeta ishlab chiqarish",
  "sub": "",
  "headings": [
   [
    "A",
    "Robots working together"
   ],
   [
    "B",
    "Preparing LGVs for take-over"
   ],
   [
    "C",
    "Newspapers superseded by technology"
   ],
   [
    "D",
    "The LGVs' main functions"
   ],
   [
    "E",
    "Split location for newspaper production"
   ],
   [
    "F",
    "Getting the newspaper to the printing centre"
   ],
   [
    "G",
    "Controlling the robots"
   ],
   [
    "H",
    "Beware of robots!"
   ]
  ],
  "paragraphs": [
   {
    "body": "The newspaper production process has come a long way from the old days when the paper was written, edited, typeset and ultimately printed in one building with the journalists working on the upper floors and the printing presses going on the ground floor. These days the editor, sub-editors and journalists who put the paper together are likely to find themselves in a totally different building or maybe even in a different city. This is the situation which now prevails in Sydney. The daily paper is compiled at the editorial headquarters, known as the pre-press centre, in the heart of the city, but printed far away in the suburbs at the printing centre. Here human beings are in the minority as much of the work is done by automated machines controlled by computers.",
    "answer": "E",
    "evidence": "These days the editor, sub-editors and journalists",
    "explanation": "Ilgari gazeta bitta binoda tayyorlanardi, hozir esa tahririyat va bosmaxona alohida joyda. E: \"split location for newspaper production\"."
   },
   {
    "body": "Once the finished newspaper has been created for the next morning's edition, all the pages are transmitted electronically from the pre-press centre to the printing centre. The system of transmission is an update on the sophisticated page facsimile system already in use on many other newspapers. An image-setter at the printing centre delivers the pages as film. Each page takes less than a minute to produce, although for colour pages four versions, once each for black, cyan, magenta and yellow are sent. The pages are then processed into photographic negatives and the film is used to produce aluminium printing plates ready for the presses.",
    "answer": "F",
    "evidence": "all the pages are transmitted electronically from the pre-press centre to the printing centre",
    "explanation": "Sahifalar bosmaxonaga elektron yo'l bilan yetkaziladi. F: \"getting the newspaper to the printing centre\"."
   },
   {
    "body": "A procession of automated vehicles is busy at the new printing centre where the Sydney Morning Herald is printed each day. With lights flashing and warning horns honking, the robots (to give them their correct name, the LGVs or laser guided vehicles) look for all the world like enthusiastic machines from a science fiction movie, as they follow their own random paths around the plant busily getting on with their jobs. Automation of this kind is now standard in all modern newspaper plants. The robots can detect unauthorised personnel and alert security staff immediately if they find an \"intruder\"; not surprisingly, tall tales are already being told about the machines starting to take on personalities of their own.",
    "answer": "H",
    "evidence": "The robots can detect unauthorised personnel and alert security staff immediately",
    "explanation": "Robotlar begona odamlarni aniqlaydi, ular haqida qo'rqinchli gaplar yuradi. H: \"beware of robots!\"."
   },
   {
    "body": "The robots' principal job, however, is to shift the newsprint (the printing paper) that arrives at the plant in huge reels and emerges at the other end some time later as newspapers. Once the size of the day's paper and the publishing order are determined at head office, the information is punched into the computer and the LGVs are programmed to go about their work. The LGVs collect the appropriate size paper reels and take them where they have to go. When the press needs another reel its computer alerts the LGV system. The Sydney LGVs move busily around the press room fulfilling their two key functions - to collect reels of newsprint either from the reel stripping stations, or from the racked supplies in the newsprint storage area. At the stripping station the tough wrapping that helps to protect a reel of paper from rough handling is removed. Any damaged paper is peeled off and the reel is then weighed.",
    "answer": "D",
    "evidence": "The robots' principal job, however, is to shift the newsprint",
    "explanation": "LGVlarning asosiy vazifalari: qog'oz rulonlarini tashish. D: \"the LGVs' main functions\"."
   },
   {
    "body": "Then one of the four paster robots moves in. Specifically designed for the job, it trims the paper neatly and prepares the reel for the press. If required the reel can be loaded directly onto the press; if not needed immediately, an LGV takes it to the storage area. When the press computer calls for a reel, an LGV takes it to the reel loading area of the presses. It lifts the reel into the loading position and places it in the correct spot with complete accuracy. As each reel is used up, the press drops the heavy cardboard core into a waste bin. When the bin is full, another LGV collects it and deposits the cores into a shredder for recycling.",
    "answer": "A",
    "evidence": "Then one of the four paster robots moves in",
    "explanation": "Turli robotlar navbat bilan bir-biriga ish topshirib ishlaydi. A: \"robots working together\"."
   },
   {
    "body": "The LGVs move at walking speed. Should anyone step in front of one or get too close, sensors stop the vehicle until the path is clear. The company has chosen a laser-guide function system for the vehicles because, as the project development manager says \"The beauty of it is that if you want to change the routes, you can work out a new route on your computer and lay it down for them to follow\". When an LGV's batteries run low, it will take itself off line and go to the nearest battery maintenance point for replacement batteries. And all this is achieved with absolute minimum human input and a much reduced risk of injury to people working in the printing centres.",
    "answer": "G",
    "evidence": "you can work out a new route on your computer",
    "explanation": "Robotlar kompyuter va lazer orqali boshqariladi. G: \"controlling the robots\"."
   }
  ]
 },
 {
  "n": 50,
  "title": "",
  "topic": "Graffiti va o'smirlar",
  "sub": "",
  "headings": [
   [
    "A",
    "Vandalism"
   ],
   [
    "B",
    "Comfortable furniture"
   ],
   [
    "C",
    "Expression of feelings"
   ],
   [
    "D",
    "Missing teenager"
   ],
   [
    "E",
    "Teenage addict"
   ],
   [
    "F",
    "Graffiti artist"
   ],
   [
    "G",
    "Judging by appearances"
   ],
   [
    "H",
    "Teenager's room"
   ]
  ],
  "paragraphs": [
   {
    "body": "For many young people aerosol art is just as serious as wall painting was for their prehistoric ancestors. Graffiti is very personal to the teenager who produces it. The motivation behind a piece of graffiti can be happiness or sadness, frustration or relief. For some artists, graffiti is a reaction to what happens in their lives. For this reason, it is an art form that is very close to the hearts of the young.",
    "answer": "C",
    "evidence": "The motivation behind a piece of graffiti can be happiness or sadness",
    "explanation": "Graffiti o'smirning his-tuyg'ularini ifodalaydi. C: \"expression of feelings\"."
   },
   {
    "body": "I am allowed to do what I like with it. I don't have a lot of space, but it is my favourite place, so I spend a lot of time there. I am the youngest in the family so I also have a lot of old toys on the shelves. I sometimes get bored with the way it is and when I do I change it round. I often move the bed and change the posters on the walls. I've asked my parents for a television but I don't think I'd get one.",
    "answer": "H",
    "evidence": "it is my favourite place",
    "explanation": "O'smir o'z xonasi haqida gapiradi. H: \"teenager's room\"."
   },
   {
    "body": "I have been playing video games since I was ten. I am now fifteen and I can't get rid of my habit. These days I play for about twenty-five hours a week. Playing video games stops me from exercising and playing basketball and I have no time for friends. Many of the games are very violent but I don't take them seriously. They are just fun. I think the main problem with games is that they are too much fun.",
    "answer": "E",
    "evidence": "I can't get rid of my habit",
    "explanation": "Haftasiga 25 soat video o'yin o'ynaydi, ya'ni o'yinga qaram. E: \"teenage addict\"."
   },
   {
    "body": "First impressions are vital. For many employers, neat and tidy hair and smart clothes are as important as qualifications. What factors contribute to that vital first impression? It varies a lot according to our culture. For example, in the United States tall people are considered more reliable and serious in business. In many cultures physically attractive people are thought of as warmer, kinder, more sociable and even more intelligent.",
    "answer": "G",
    "evidence": "First impressions are vital",
    "explanation": "Odamlar tashqi ko'rinishga qarab baholanadi. G: \"judging by appearances\"."
   },
   {
    "body": "Dean Palmer is fourteen years old. He may also use the names Dick Page or Daryl Preston. He has short fair hair and is of medium height and slim build. He wears glasses. He was last seen wearing jeans, a brown leather jacket and black trainers. If he is at your school, or has ever been admitted into the school, please telephone the police immediately.",
    "answer": "D",
    "evidence": "please telephone the police immediately",
    "explanation": "Yo'qolgan o'smir haqida e'lon. D: \"missing teenager\"."
   },
   {
    "body": "I'm known as Chase. That's my tag. When I started I would go out at night with a few friends and just painted football slogans and things like that on any wall I could find I suppose it was a way of making a statement. Eventually I got caught. I still continue to express my feelings with the help of aerosol painting, but these days I get permission first.",
    "answer": "F",
    "evidence": "I'm known as Chase. That's my tag",
    "explanation": "Graffiti chizuvchi o'smirning o'zi gapiradi. F: \"graffiti artist\"."
   }
  ]
 }
];

/* ===== data_p4.js ===== */
// CEFR Companion - Reading Part 4
// Muqobil javobli test (A/B/C/D) + True / False / No Information (A=True, B=False, C=No Information)
// Source: MULTILEVEL MASTER READING, Part 4 (pp. 262-347); answers from the book key (pp. 434-435).
const READING_P4_EXERCISES = [
 {
  "n": 1,
  "title": "The Penny Black",
  "body": "It might not have looked very impressive, but the Penny Black, now 170 years old, was the first stamp to be created and it launched the modern postal system in Britain.\n\nBefore 1840 and the arrival of the Penny Black, you had to be rich and patient to use the Royal Mail. Delivery was charged according to the miles travelled and the number of sheets of paper used; a 2-page letter sent from Edinburgh to London, for example, would have cost 2 shillings, or more than £7 in today's money. And when the top-hatted letter carrier came to deliver it, it was the recipient who had to pay for the postage. Letter writers employed various ruses to reduce the cost, doing everything possible to cram more words onto a page. Nobody bothered with heavy envelopes; instead, letters would be folded and sealed with wax. You then had to find a post office - there were no pillar boxes - and hope your addressee didn't live in one of the several rural areas which were not served by the system. If you were lucky, your letter would arrive (it could take days) without being read or censored.\n\nThe state of mail had been causing concern throughout the 1830s, but it was Rowland Hill, an inventor, teacher and social reformer from Kidderminster, who proposed a workable plan for change. Worried that a dysfunctional, costly service would stifle communication just as Britain was in the swing of its second industrial revolution, he believed reform would ease the distribution of ideas and stimulate trade and business, delivering the same promise as the new railways.\n\nHill's proposal for the penny post, which meant any letter weighing less than half an ounce (14 grams) could be sent anywhere in Britain for about 30p in today's money, was so radical that the Postmaster General, Lord Lichfield, said, 'Of all the wild and visionary schemes which ever heard of, it is the most extravagant.' Lord Lichfield spoke for an establishment not convinced of the need for poor people to post anything. But merchants and reformers backed Hill. Soon the government told him to make his scheme work. And that meant inventing a new type of currency.\n\nHill quickly settled on 'a bit of paper covered at the back with a glutinous wash which the user might, by applying a little moisture, attach to the back of a letter'. Stamps would be printed in sheets of 240 that could be cut using scissors or a knife. Perforations would not arrive until 1854. The idea stuck, and in August 1839 the Treasury launched a design competition open to 'all artists, men of science and the public in general'. The new stamp would need to be resistant to forgery, and so it was a submission by one Mr Cheverton that Hill used as the basis for one of the most striking designs in history. Cheverton, who worked as a sculptor and an engineer, determined that a portrait of Queen Victoria, engraved for a commemorative coin when she was a 15-year-old princess, was detailed enough to make copying difficult, and recognizable enough to make fakes easy to spot. The words 'Postage' and 'One Penny' were added alongside flourishes and ornamental stars. Nobody thought to add the word 'Britain', as it was assumed that the stamps would solely be put to domestic use.\n\nWith the introduction of the new postal system, the Penny Black was an instant hit, and printers struggled to meet demand. By the end of 1840, more than 160 million letters had been sent - more than double the previous year. It created more work for the post office, whose reform continued with the introduction of red letter boxes, new branches and more frequent deliveries, even to the remotest address, but its lasting impact on society was more remarkable.",
  "questions": [
   {
    "q": "One of the characteristics of the postal service before the 1840s was that",
    "options": [
     "postmen were employed by various organizations.",
     "letters were restricted to a certain length.",
     "distance affected the price of postage.",
     "the price of delivery kept going up."
    ],
    "answer": "C"
   },
   {
    "q": "Letter writers in the 1830s",
    "options": [
     "were not responsible for the cost of delivery.",
     "tried to fit more than one letter into an envelope.",
     "could only send letters to people living in cities.",
     "knew all letters were automatically read by postal staff."
    ],
    "answer": "A"
   },
   {
    "q": "What does the text say about Hill in the 1830s?",
    "options": [
     "He was the first person to express concern about the postal system.",
     "He considered it would be more efficient for mail to be delivered by rail.",
     "He felt that postal service reform was necessary for commercial development.",
     "His plan received support from all the important figures of the day."
    ],
    "answer": "C"
   },
   {
    "q": "What did Cheverton say about the design of a new stamp?",
    "options": [
     "Any person can copy and use the design easily.",
     "Local people have never seen Queen Victoria lively.",
     "Counterfeit coins could easily be detected.",
     "It is useless to add the word \"Britain\" on the stamp."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "There was a fixed price for the delivery of letters before 1840.",
    "answer": "B"
   },
   {
    "s": "In the past, it was not possible to send letters to all parts of the country.",
    "answer": "A"
   },
   {
    "s": "Rowland Hill proposed to reduce the cost of envelopes to encourage trade and business.",
    "answer": "C"
   },
   {
    "s": "Lord Lichfield and all other people were against Hill's proposal about the new postal system.",
    "answer": "B"
   },
   {
    "s": "The main purpose of designing a new stamp was to make it difficult to counterfeit.",
    "answer": "A"
   }
  ],
  "answers": [
   "C",
   "A",
   "C",
   "C",
   "B",
   "A",
   "C",
   "B",
   "A"
  ],
  "explain": [
   {
    "evidence": "Delivery was charged according to the miles travelled",
    "why": "Narx bosib o'tilgan masofaga (milga) qarab olingan. Bu C variantidagi \"distance affected the price\" bilan bir xil."
   },
   {
    "evidence": "it was the recipient who had to pay for the postage",
    "why": "Pulni xatni oluvchi to'lagan, ya'ni xat yozuvchilar to'lamagan. A: \"not responsible for the cost of delivery\"."
   },
   {
    "evidence": "he believed reform would ease the distribution of ideas and stimulate trade and business",
    "why": "Hill islohot savdo va biznesni rivojlantiradi deb hisoblagan. C: \"reform was necessary for commercial development\". A noto'g'ri: muammo 1830-yillar davomida avvaldan muhokama qilingan."
   },
   {
    "evidence": "recognizable enough to make fakes easy to spot",
    "why": "Cheverton portret tufayli soxtalarini oson aniqlash mumkin bo'ladi degan. Kitob kalitida C berilgan (\"counterfeit ... could easily be detected\")."
   },
   {
    "evidence": "Delivery was charged according to the miles travelled and the number of sheets of paper used",
    "why": "Narx masofa va varaqlar soniga qarab o'zgargan, ya'ni belgilangan narx bo'lmagan. Shuning uchun False."
   },
   {
    "evidence": "one of the several rural areas which were not served by the system",
    "why": "Ba'zi qishloq hududlariga pochta xizmati yetib bormagan. True."
   },
   {
    "evidence": "he believed reform would ease the distribution of ideas and stimulate trade and business",
    "why": "Hill savdo uchun islohot taklif qilgan, lekin konvert narxini kamaytirish haqida matnda hech narsa yo'q. No Information."
   },
   {
    "evidence": "But merchants and reformers backed Hill",
    "why": "Lord Lichfield qarshi bo'lgan, lekin savdogarlar va islohotchilar Hillni qo'llab-quvvatlagan. \"Hamma qarshi edi\" degan gap noto'g'ri: False."
   },
   {
    "evidence": "The new stamp would need to be resistant to forgery",
    "why": "Yangi marka qalbakilashtirishga chidamli bo'lishi kerak edi. True."
   }
  ]
 },
 {
  "n": 2,
  "title": "Internet safety issues",
  "body": "The fact is that 93 percent of kids are online. Even if parents limit or ban internet access, kids have access at school, through a friend's smart phone, libraries, and schools. The internet is a tool that our children need to use and master with wisdom dispensed by parents. We need tech-savvy youth who will grow up to be leaders of the community. Many schools use websites such as EdModo to connect students and teachers.\n\nMy friend Reem is the vice principal of an Islamic School. She says that many teachers assign work from school that children need to research online. Some of the best homeschooling resources are online. Far too many parents do not allow their children monitored access to the internet, leading to two scenarios. Their children end up lying and using it behind their back; or are so sheltered that they do not know how to conduct themselves online when they finally do get access. On the other hand, more often than not, there are parents who freely give unmonitored access. But caretakers raising children in today's world need to think about several issues:\n\n• How does a parent know if his/her child is engaging in inappropriate Internet activities?\n\n• How would a parent know if his/her child is cyber-bullied if he or she does not tell them?\n\nAccording to Common Sense Media, \"Young teens don't yet have an 'off' switch in their brains. That means that they often act impulsively. This lack of impulse control, combined with online anonymity, could lead toward dangerous behaviors: cyber-bullying, inappropriate photo or video uploads, illegal downloads, meeting strangers - even cheating. Because socializing is so important to young people, online interactions can become pretty intense - whether they're playing games, chatting with friends, or sharing work.\" Using open communication and thoughtful intervention, parents can help their wired offspring learn how to maneuver electronic gadgets and the World Wide Web. Here are some tips on how to give children monitored access to the Internet:\n\n• spend time with your children online.\n\n• ask to see their Facebook page, their Instagrams, and Twitter feed.\n\nIt may seem like a foreign territory, but it is imperative that parents talk to their children about social media. At this stage, it is not our job to try to protect them by isolating them. It is our job to teach them how to deal with information and with people.\n\nYounger children often play on websites such as Movie Star Planet, Moshi Monsters, and new ones pop up every day. Most of these sites teach extreme consumerism as children 'play' to accumulate points or currency and use it to 'buy' stuff: furniture, VIP passes, etc.; urging your child to become 'Rich and Famous.' As responsible parents, we need to prevent children from becoming mindless consumers. If you do allow your child to visit these sites, then watch them while they play.\n\nTeach them not to talk to or chat with random strangers. That person with a name Girlie45 could, possibly, be a middle-aged predator.\n\nTeach them that everything that they put online is there forever. Anyone can cut, copy and paste pictures and text. Teach them how to be safe online because today it is as important as safety basics about locking the door or not playing with matches.",
  "questions": [
   {
    "q": "What does the author think about the educational value of prohibiting children from the internet?",
    "options": [
     "It is useless.",
     "It is important.",
     "It is effective.",
     "It is advisable."
    ],
    "answer": "A"
   },
   {
    "q": "What way of using the internet in education does the author mention (paragraph 2)?",
    "options": [
     "Finding ready-made research papers.",
     "Online instruction by the school administration.",
     "Communication platform for teachers and students.",
     "Teaching from home."
    ],
    "answer": "C"
   },
   {
    "q": "According to the text, the best way to protect children from internet hazards is to ...",
    "options": [
     "monitor their accounts on social networks.",
     "follow them online.",
     "ban them from using social networks.",
     "limit their access to the computer."
    ],
    "answer": "B"
   },
   {
    "q": "The danger of online games is, according to the author, in ...",
    "options": [
     "the possibility of losing one's money.",
     "availability of VIP passes.",
     "getting used to spending money easily.",
     "their accessibility."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "Some schools have a special system that allows students and teachers make communication with each other.",
    "answer": "A"
   },
   {
    "s": "Children face no difficulty in adjusting to the internet after removing the ban to use.",
    "answer": "B"
   },
   {
    "s": "All parents usually control the access of their children to the internet.",
    "answer": "B"
   },
   {
    "s": "Parents were advised to create a Facebook account to chat with their children online.",
    "answer": "C"
   },
   {
    "s": "Children should learn how to use the internet safely from their parents.",
    "answer": "A"
   }
  ],
  "answers": [
   "A",
   "C",
   "B",
   "C",
   "A",
   "B",
   "B",
   "C",
   "A"
  ],
  "explain": [
   {
    "evidence": "Even if parents limit or ban internet access, kids have access at school",
    "why": "Taqiqlasangiz ham bolalar maktabda, do'stining telefonida internetga kiradi, ya'ni taqiqlash befoyda. A: \"it is useless\"."
   },
   {
    "evidence": "Many schools use websites such as EdModo to connect students and teachers",
    "why": "EdModo o'qituvchi va o'quvchilarni bog'laydigan platforma. C: \"communication platform for teachers and students\"."
   },
   {
    "evidence": "spend time with your children online",
    "why": "Muallif bolalarni ajratib qo'yish emas, ular bilan birga onlayn bo'lishni maslahat beradi. B: \"follow them online\"."
   },
   {
    "evidence": "Most of these sites teach extreme consumerism",
    "why": "O'yinlar bolalarni haddan tashqari iste'molchilikka, ya'ni pulni oson sarflashga o'rgatadi. C."
   },
   {
    "evidence": "Many schools use websites such as EdModo to connect students and teachers",
    "why": "Maktablarda o'qituvchi va o'quvchi aloqasi uchun maxsus sayt bor. True."
   },
   {
    "evidence": "are so sheltered that they do not know how to conduct themselves online when they finally do get access",
    "why": "Taqiqdan keyin internetga chiqqan bolalar o'zini qanday tutishni bilmaydi, ya'ni qiynaladi. False."
   },
   {
    "evidence": "there are parents who freely give unmonitored access",
    "why": "Ko'p ota-onalar nazoratsiz ruxsat beradi, demak \"hamma ota-onalar nazorat qiladi\" degan gap noto'g'ri: False."
   },
   {
    "evidence": "ask to see their Facebook page, their Instagrams, and Twitter feed",
    "why": "Bolaning sahifasini ko'rishni so'rash tavsiya qilingan, lekin ota-onaga Facebook ochish haqida gap yo'q. No Information."
   },
   {
    "evidence": "Teach them how to be safe online",
    "why": "Ota-onalar bolalarga internetda xavfsizlikni o'rgatishi kerak. True."
   }
  ]
 },
 {
  "n": 3,
  "title": "Your amazing brain",
  "body": "You carry around a three-pound mass of wrinkly material in your head that controls every single thing you will ever do. From enabling you to think, learn, create, and feel emotions to controlling every blink, breath, and heartbeat - this fantastic control center is your brain. It is a structure so amazing that in the foreword to Discovering the Brain, famous scientist James Watson wrote, \"The brain is the most complex thing we have yet discovered in our universe. It contains hundreds of billions of cells interlinked through trillions of connections. The brain confuses the mind.\" Obviously to understand brain function, we need to confront its complexity.\n\nImagine your kitten is on the kitchen counter. She's about to step onto a stove. You have only seconds to act. Accessing the signals coming from your eyes, your brain quickly calculates when, where, and at what speed you will need to dive to intercept her. Then it orders your muscles to do so. Your timing is perfect and she's safe. No computer can come close to your brain's awesome ability to download, process, and react to the flood of information coming from your eyes, ears, and other sensory organs.\n\nYour brain contains about 100 billion microscopic cells called neurons - so many it would take you over 3,000 years to count them all. Whenever you dream, laugh, think, see, or move, it's because tiny chemical and electrical signals are racing between these neurons along billions of tiny neuron highways. Believe it or not, the activity in your brain never stops. Countless messages zip around inside it every second like a supercharged pinball machine. Your neurons create and send more messages than all the phones in the entire world. And while a single neuron generates only a tiny amount of electricity, all your neurons together can generate enough electricity to power a low-wattage bulb.\n\nNeurons send information to your brain at more than 150 miles (241 kilometers) per hour. For example, a bee lands on your bare foot. Sensory neurons in your skin relay this information to your spinal cord and brain at a speed of more than 150 miles (241 kilometers) per hour. Your brain then uses motor neurons to transmit the message back through your spinal cord to your foot to shake the bee off quickly. Motor neurons can relay this information at more than 200 miles (322 kilometers) per hour.\n\nRiding a bike seems impossible at first. But soon you master it. How? As you practice, your brain sends \"bike riding\" messages along certain pathways of neurons over and over, forming new connections. In fact, the structure of your brain changes every time you learn, as well as whenever you have a new thought or memory.\n\nIt is well known that any exercise that makes your heart beat faster, like running or playing basketball, is great for your body and can even help improve your mood. But large-scale efforts of scientists from a group of institutes from the National Institutes of Health have recently showed that for a period of time after you've exercised, your body produces a chemical that makes your brain more receptive for gaining new knowledge. So if you're stuck on a homework problem, go out and play a game of soccer, then try the problem again. You just might discover that you're able to solve it.",
  "questions": [
   {
    "q": "According to the text, the most distinctive characteristic of the brain is its",
    "options": [
     "ability to control the body.",
     "elaborateness.",
     "size",
     "weight."
    ],
    "answer": "B"
   },
   {
    "q": "The claims that the brain is better than any computer because it",
    "options": [
     "processes more information.",
     "works faster.",
     "can download information from different sources.",
     "character of messages we send."
    ],
    "answer": "A"
   },
   {
    "q": "The narrator compares the work of neurons to a pinball machine to",
    "options": [
     "show the character of brain work.",
     "raise awareness of the brain's nature.",
     "stress the amount of information that the brain processes.",
     "illustrate the shape of the neuron highways."
    ],
    "answer": "C"
   },
   {
    "q": "Comparing sensory and motor neurons, we can make a conclusion that",
    "options": [
     "motor neurons transmit information faster.",
     "there are more motor neurons.",
     "sensory neurons transmit information faster.",
     "there are more sensory neurons."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "The brain can leave any computer technology behind in reacting to situations.",
    "answer": "A"
   },
   {
    "s": "It is believed that the brain tends to stop in certain situations.",
    "answer": "B"
   },
   {
    "s": "Some mobile phones can send more messages as compared to the neurons of the brain.",
    "answer": "B"
   },
   {
    "s": "Bees are usually used for measuring the speed of sensory neurons.",
    "answer": "C"
   },
   {
    "s": "There is a positive relationship between playing games and brain productivity.",
    "answer": "A"
   }
  ],
  "answers": [
   "B",
   "A",
   "C",
   "A",
   "A",
   "B",
   "B",
   "C",
   "A"
  ],
  "explain": [
   {
    "evidence": "The brain is the most complex thing we have yet discovered in our universe",
    "why": "Miyaning asosiy xususiyati uning murakkabligi. \"Elaborateness\" = murakkablik, ya'ni B."
   },
   {
    "evidence": "No computer can come close to your brain's awesome ability to download, process, and react to the flood of information",
    "why": "Miya ko'zdan, quloqdan keladigan ma'lumot oqimini qayta ishlashda har qanday kompyuterdan ustun. A: \"processes more information\"."
   },
   {
    "evidence": "Countless messages zip around inside it every second like a supercharged pinball machine",
    "why": "Har soniyada son-sanoqsiz xabar o'tishini ko'rsatish uchun pinbol mashinasiga o'xshatilgan. C: miya qayta ishlaydigan ma'lumot miqdorini ta'kidlash."
   },
   {
    "evidence": "Motor neurons can relay this information at more than 200 miles (322 kilometers) per hour",
    "why": "Sezgi neyronlari soatiga 150 mil, motor neyronlar 200 mildan ortiq tezlikda ishlaydi. A: motor neyronlar tezroq."
   },
   {
    "evidence": "No computer can come close to your brain's awesome ability",
    "why": "Vaziyatga javob berishda hech qaysi kompyuter miyaga yetolmaydi. True."
   },
   {
    "evidence": "the activity in your brain never stops",
    "why": "Miya faoliyati hech qachon to'xtamaydi, shuning uchun \"ba'zi vaziyatlarda to'xtaydi\" degan gap noto'g'ri: False."
   },
   {
    "evidence": "Your neurons create and send more messages than all the phones in the entire world",
    "why": "Neyronlar dunyodagi barcha telefonlardan ko'proq xabar yuboradi. Teskarisi aytilgani uchun False."
   },
   {
    "evidence": "a bee lands on your bare foot",
    "why": "Ari faqat misol sifatida keltirilgan; tezlikni o'lchash uchun ari ishlatilishi haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "your body produces a chemical that makes your brain more receptive for gaining new knowledge",
    "why": "O'yindan keyin miya yangi bilimni yaxshiroq qabul qiladi. True."
   }
  ]
 },
 {
  "n": 4,
  "title": "Ordeal by water",
  "body": "It is tempting to see the river Thames as another artery in London's integrated transport system, the same colour blue on the map as the Victoria Underground line. In this ideal world, passengers move effortlessly from river ferry to train, bus or Tube, continuing their seamless journey carefree.\n\nUnfortunately, that is not exactly how it is. Father Thames is not as kind and even-tempered as it might seem as one is looking at the map. It is a muddy, tidal creek whose flukish currents insidiously rip round the base of bridges. Navigation is hard. And the river is not straight: it does giant loops, especially around the Canary Wharf financial district. A passenger alighting from a river ferry often has to walk five or ten minutes to the nearest land connection.\n\nWith London's Tube and buses bursting at the seams, a succession of entrepreneurs have braved these negatives and tried unsuccessfully to set up commuter services on this natural highway. Sean Collins reckons he is the 15th since 1905 - but this time things may have changed. His business, which started as Collins River Enterprises in 1999, shows every sign of surviving its second decade, despite the economy's woes and volatile fuel costs. Thames Clippers, as the firm is called these days, carried 3.2m passengers in 2009, running fast catamarans between Woolwich, downriver of the city centre, and Waterloo. Perhaps Mr. Collins, now its managing director, simply was lucky enough to pick the right time. The past decade has been kind to the Thames. Big property developments have sprung up on both sides of the river, and more are on their way before the 2012 Olympic games. And so far, at least, Canary Wharf seems to be weathering the financial storm. But there has been still another advantage: both public and private backing for the firm have been crucial.\n\nThames Clippers gets a small subsidy from Transport for London (TfL), part of the Greater London Authority. A big step towards welcome integration came in November, when passengers were first allowed to use their TfL Oyster fare cards on Thames Clippers, too. And recently, Greenwich Council agreed to pay £269,000 for guaranteed service between Greenwich and Woolwich over the next four years. One big problem is the jumbled ownership and management of landing piers: TfL owns 7 of the 13 in central London and various property developers the rest. At piers used jointly, the situation does not favour the ferries trying to stick to a timetable. They can be delayed by tourist boats hanging on for passengers. To have more control of its schedule, Thames Clippers took over the lease of the privately-owned London Bridge City Pier in November.\n\nAnother impediment is the unnecessarily rigid restriction on speed. The Port of London Authority (PLA) imposes a 12-knot limit west of Wapping, which means that boats can show their exhilarating 30-knot cruising speed only on the eastern stretches of the river.\n\nThe PLA supports the plan to get more people on the river but insists that safety is paramount. It also points out that tourists and freight, not just commuters, use the Thames. So for the moment, Thames Clippers' civilised catamarans to and from Waterloo remain a secret pleasure for the cognoscenti.",
  "questions": [
   {
    "q": "According to paragraphs 1 and 2, the Thames is",
    "options": [
     "fully integrated into London's transport system.",
     "not perfectly fit for solving London's transport problems.",
     "an ideal way to travel around the city.",
     "providing a shorter journey than on-land transport."
    ],
    "answer": "B"
   },
   {
    "q": "Which was the most important factor for Thames Clippers' success?",
    "options": [
     "Huge numbers of passengers.",
     "The luck of the owner.",
     "Private and public investments.",
     "New and fast catamarans."
    ],
    "answer": "C"
   },
   {
    "q": "Which barrier for Thames Clippers operations is NOT mentioned in the text?",
    "options": [
     "Inadequate fares for boat trips.",
     "Uncertainty about the timetable",
     "Joint ownership of the piers.",
     "Speed limit for river transport."
    ],
    "answer": "A"
   },
   {
    "q": "According to the title of the article, the author thinks that the river transport",
    "options": [
     "needs improvement.",
     "is not very promising.",
     "is suitable only for tourists.",
     "provides big business opportunities."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "Father Thames is so appropriate and suitable for passengers to move effortlessly.",
    "answer": "B"
   },
   {
    "s": "Sean Collins was the first entrepreneur who decided to upgrade commuter systems in London.",
    "answer": "B"
   },
   {
    "s": "The main reason for increasing the price of fares was volatile fuel costs.",
    "answer": "C"
   },
   {
    "s": "Most landing piers belong to a single company in central London.",
    "answer": "A"
   },
   {
    "s": "PLA imposes a fixed cruising speed limit for boats in all parts of the river.",
    "answer": "B"
   }
  ],
  "answers": [
   "B",
   "C",
   "A",
   "A",
   "B",
   "B",
   "C",
   "A",
   "B"
  ],
  "explain": [
   {
    "evidence": "Unfortunately, that is not exactly how it is",
    "why": "Xaritada daryo ideal yo'ldek ko'rinadi, aslida oqim kuchli, yo'l egri. B: London transport muammolarini hal qilishga to'liq mos emas."
   },
   {
    "evidence": "both public and private backing for the firm have been crucial",
    "why": "\"Crucial\" — hal qiluvchi: davlat va xususiy qo'llab-quvvatlash eng muhim omil bo'lgan. C."
   },
   {
    "evidence": "One big problem is the jumbled ownership and management of landing piers",
    "why": "Matnda iskala egaligi, jadvalning kechikishi va tezlik cheklovi tilga olingan, lekin chipta narxi haqida gap yo'q. A."
   },
   {
    "evidence": "Another impediment is the unnecessarily rigid restriction on speed",
    "why": "Sarlavha \"Ordeal by water\" (suvdagi sinov): ko'p to'siqlar sanalgan, ya'ni daryo transporti yaxshilanishi kerak. A: \"needs improvement\"."
   },
   {
    "evidence": "Father Thames is not as kind and even-tempered as it might seem",
    "why": "Temza xaritadagidek qulay emas: oqim xavfli, suzish qiyin. False."
   },
   {
    "evidence": "Sean Collins reckons he is the 15th since 1905",
    "why": "Collins birinchi emas, 1905-yildan beri 15-tadbirkor. False."
   },
   {
    "evidence": "despite the economy's woes and volatile fuel costs",
    "why": "Yoqilg'i narxi tilga olingan, lekin chipta narxi oshgani haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "TfL owns 7 of the 13 in central London",
    "why": "Markaziy Londondagi 13 iskaladan 7 tasi bitta tashkilotga (TfL) tegishli, ya'ni ko'pchiligi. True."
   },
   {
    "evidence": "imposes a 12-knot limit west of Wapping",
    "why": "Cheklov faqat Wapping'dan g'arbda amal qiladi, sharqda qayiqlar 30 uzelda yura oladi. \"Daryoning hamma qismida\" degani noto'g'ri: False."
   }
  ]
 },
 {
  "n": 5,
  "title": "Internet",
  "body": "Internet is one of the greatest tools we have today. Billions of bits of information, unlimited ways to connect, games to play, videos to watch, things to learn. There's something for everyone. We Facebook, tumble, stumble, and tweet more now than ever. Social media is connecting us in incredible ways. You can create communities of like-minded people that would never meet before on the Internet. But, due to this, we are spending copious amounts of time on the World Wide Web, and it's slowly changing who you are as a person. I went for a long period of time where I didn't read a book. I finally got around to picking up a few new books and as soon as I started reading them, I struggled. I couldn't hold concentration like I used to. I would read a whole paragraph with my mind elsewhere or had this constant anxious feeling to do something else, even when there was absolutely nothing else to do.\n\nMy mind would jump from one thought to another and I barely could read a chapter in one sitting. I talked to a few people about this, and I even looked to the trusty Internet for my solution. I found that I'm not alone; many people report the same type of concentration shift. The reason for this is the information overload via Internet. We take in 34 gigabytes of information each day now. That is 5 times more than we did 20 years ago. There is so much going on in our minds that we rarely spend any time on one particular bit of information because there is always something new and more intriguing just around the corner. When we land on a webpage, we spend the average of about 50 seconds, if that, and know that there are at least 5 other links we can click on the page. We can still concentrate, but our minds would much rather be focused on a series of things, not one thought. Not only is it altering our concentration on reading long works, but it's changing how we read. We no longer read; we skim. This is our way of adapting to this information overload. It would take too long to process all this information and we don't need everything. We sift through the information and get to the main point or relevant material. The way things are written online is changing for us as well. For anyone who has written a blog post, it's a much different style of writing compared to novels and even newspaper articles. The things we read online are as clear and concise as possible. Adjectives are a thing of the past. The information is usually already condensed for you, and is separated into neat headlines that make it easy to scan the page in a few seconds. We don't focus on comprehension anymore, we know what we're looking for and we find it quickly. The way we are reading things is just the start, the way we are thinking is changing too.\n\nBefore, we had calm linear thoughts, one thing led to another. Now, our thoughts are jumping back and forth between so many things. We have one thought, which leads to four or five other non-related thoughts, and then some time later we return to the original thought. This is a direct result of our attention being focused on so many things for so little time on the web. There is always a link that can take us somewhere new and start a new train of thoughts. We've developed a much more fluid way of thinking. And it's not a bad thing. It's making us more creative. You are much more efficient at combing and filtering through ideas, which in essence is what inspiration is. Linear thought is very organized and does not leave room for new ideas.\n\nSo, the Internet has become an essential part of our daily lives. But it's also important to disconnect for a while and to take care of your body and mind. Create a balance of time online and in the real world, so you can reap the positive cognitive abilities the Internet is giving you and avoid forming an unhealthy set of habits that will cost you later in life.",
  "questions": [
   {
    "q": "According to the author, the Internet changes people because",
    "options": [
     "of the amount of information it provides.",
     "it adds lots of friends.",
     "they spend too much time online.",
     "it helps to create new communities."
    ],
    "answer": "C"
   },
   {
    "q": "Why does the Internet, according to the author, influence reading concentration?",
    "options": [
     "It leaves less time for reading.",
     "It provides excessive information.",
     "The information there changes too fast.",
     "The bits of information there are very short."
    ],
    "answer": "B"
   },
   {
    "q": "Which of the following is NOT a feature of an online text?",
    "options": [
     "Lots of descriptive words.",
     "Informative headline.",
     "Reduced size.",
     "Clarity."
    ],
    "answer": "A"
   },
   {
    "q": "The way people read has changed because",
    "options": [
     "they had to read faster.",
     "they lost interest in serious literature.",
     "they don't need all the information they read about.",
     "they had to adjust to new conditions."
    ],
    "answer": "D"
   }
  ],
  "statements": [
   {
    "s": "Author states that there is not a direct relationship between making concentration and using the internet.",
    "answer": "B"
   },
   {
    "s": "The author used to read books while doing other tasks.",
    "answer": "C"
   },
   {
    "s": "In the past people used to receive less information than current people.",
    "answer": "A"
   },
   {
    "s": "Currently people do not read every single word in the information.",
    "answer": "A"
   },
   {
    "s": "It is becoming difficult to separate main ideas from the texts people read.",
    "answer": "B"
   }
  ],
  "answers": [
   "C",
   "B",
   "A",
   "D",
   "B",
   "C",
   "A",
   "A",
   "B"
  ],
  "explain": [
   {
    "evidence": "we are spending copious amounts of time on the World Wide Web, and it's slowly changing who you are as a person",
    "why": "Muallif fikricha, internetda juda ko'p vaqt o'tkazish insonni o'zgartiradi. C."
   },
   {
    "evidence": "The reason for this is the information overload via Internet",
    "why": "Diqqat buzilishining sababi haddan tashqari ko'p ma'lumot (\"information overload\"). B: \"provides excessive information\"."
   },
   {
    "evidence": "Adjectives are a thing of the past",
    "why": "Onlayn matnlarda sifatlar, ya'ni tasviriy so'zlar deyarli yo'q. Shuning uchun \"lots of descriptive words\" onlayn matn xususiyati emas: A."
   },
   {
    "evidence": "This is our way of adapting to this information overload",
    "why": "Odamlar ko'p ma'lumotga moslashish uchun \"skim\" qilib o'qiy boshlagan. D: \"they had to adjust to new conditions\"."
   },
   {
    "evidence": "I couldn't hold concentration like I used to",
    "why": "Muallif internet tufayli diqqatini jamlay olmay qolganini aytadi, ya'ni bog'liqlik bor. False."
   },
   {
    "evidence": "I went for a long period of time where I didn't read a book",
    "why": "Muallif uzoq vaqt kitob o'qimaganini aytadi, lekin kitobni boshqa ish bilan birga o'qigani haqida gap yo'q. No Information."
   },
   {
    "evidence": "That is 5 times more than we did 20 years ago",
    "why": "Bugun 20 yil oldingidan 5 marta ko'p ma'lumot olamiz. True."
   },
   {
    "evidence": "We no longer read; we skim",
    "why": "Har bir so'zni o'qimaymiz, ko'z yugurtirib chiqamiz. True."
   },
   {
    "evidence": "We sift through the information and get to the main point or relevant material",
    "why": "Odamlar asosiy fikrni tez topadi, ya'ni ajratish qiyinlashmagan. False."
   }
  ]
 },
 {
  "n": 6,
  "title": "Llandudno",
  "body": "Llandudno is truly a fine and handsome place, built on a generously proportioned bay and lined along its broad front with a huddle of prim but gracious nineteenth-century hotels that reminded me in the fading light of a line up of Victorian nannies. Llandudno was purpose-built as a resort in the mid-1800s, and it cultivates a nice old-fashioned air. I don't suppose that Lewis Carroll, who famously strolled this front with little Alice Liddell in the 1860s, would notice a great deal of change today.\n\nTo my consternation, the town was packed with weekending pensioners. Buses from all over were parked along the side streets, every hotel I called at was full, and in every dining room I could see crowds - veritable oceans - of nodding white heads spooning soup and conversing happily. Goodness knows what had brought them to the Welsh seaside at this bleak time of year. Farther on along the front there stood a clutch of guesthouses, large and virtually indistinguishable, and a few of them had vacancy signs in their windows. I had eight or ten to choose from, which always puts me in a mild fret because I have an unerring instinct for choosing badly. My wife can survey a row of guesthouses and instantly identify the one run by a white-haired widow with a fondness for children, and sparkling bathroom facilities, whereas I can generally count on choosing the one run by a guy with a grasping manner, and the sort of cough that makes you wonder where he puts the phlegm. Such, I felt, would be the case tonight.\n\nAll the guesthouses had boards out front listing their many amenities - COLOUR TV, HOSPITALITY TRAYS, FULL CENTRAL HEATING, and the coyly euphemistic EN SUITE ALL ROOMS, meaning private bathrooms. One place offered satellite TV and a trouser press, and another boasted CURRENT FIRE CERTIFICATE - something I had never thought to look for in a B&B. All this heightened my sense of unease and doom. How could I possibly choose intelligently among such a variety of options? I selected a place that looked reasonable enough from the outside - its board promised a color TV and coffee making facilities, about all I require these days for a Saturday night - but from the moment I set foot in the door I knew it was a bad choice. I was about to turn and flee when the owner emerged from a back room and stopped my retreat with an unenthusiastic \"Yes?\" A short conversation revealed that a single room with breakfast was for £19.50. It was entirely out of the question that I would stay the night in such a dismal place at such an exorbitant price, so I said, \"That sounds fine,\" and signed in. Well, it's so hard to say no. My room was everything I expected it to be - cold and cheerless with laminated furniture, grubbily matted carpet, and those mysterious ceiling stains that bring to mind a neglected corpse in the room above.\n\nThere was a tray of coffee things but the cups were disgusting, and the spoon was stuck to the tray. The bathroom, faintly illuminated by a distant light activated by a length of string, had curling floor tiles and years of accumulated dirt packed into every corner. I peered at the yellowy tile around the bath and sink and realized what the landlord did with his phlegm. A bath was out of the question, so I threw some cold water on my face, dried it with a towel that had the texture of shredded wheat, and gladly took my leave.",
  "questions": [
   {
    "q": "Llandudno is described as a",
    "options": [
     "fashionable 19th-century resort.",
     "beautiful growing resort.",
     "place where Lewis Carroll lived.",
     "place famous for its comfortable hotels."
    ],
    "answer": "A"
   },
   {
    "q": "The phrase \"veritable oceans\" in paragraph 2 refers to",
    "options": [
     "hotel dining rooms.",
     "hotel guests wearing white hats.",
     "old people dining in cafes.",
     "buses crowded with old Welsh people."
    ],
    "answer": "C"
   },
   {
    "q": "When choosing a guesthouse the narrator was worried because he",
    "options": [
     "wasn't good at making the right choice.",
     "could not find a place run by a kind old widow.",
     "did not know what to look for.",
     "missed his wife for help."
    ],
    "answer": "A"
   },
   {
    "q": "The narrator thought that the choice of a guesthouse used to be easier because",
    "options": [
     "all hotels had a private bathroom.",
     "there were fewer options on offer.",
     "there were fewer guest houses.",
     "they were all of B&B type."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "Llandudno enjoys the diversity of tourists from different age groups.",
    "answer": "A"
   },
   {
    "s": "The layouts of guesthouses are almost the same in Llandudno.",
    "answer": "A"
   },
   {
    "s": "The facilities which guesthouses offer differ significantly from each other.",
    "answer": "A"
   },
   {
    "s": "The author claims that the cost of the room was reasonable as he expected.",
    "answer": "B"
   },
   {
    "s": "The author decided to clean the bathroom first after entering the room.",
    "answer": "C"
   }
  ],
  "answers": [
   "A",
   "C",
   "A",
   "B",
   "A",
   "A",
   "A",
   "B",
   "C"
  ],
  "explain": [
   {
    "evidence": "Llandudno was purpose-built as a resort in the mid-1800s, and it cultivates a nice old-fashioned air",
    "why": "XIX asr o'rtasida qurilgan va eski zamon ruhini saqlagan kurort. A."
   },
   {
    "evidence": "veritable oceans - of nodding white heads spooning soup",
    "why": "\"Haqiqiy okeanlar\" — ovqatlanayotgan oq sochli keksalar to'dasi. C: \"old people dining\"."
   },
   {
    "evidence": "I have an unerring instinct for choosing badly",
    "why": "Muallif har doim yomon joyni tanlaydi, ya'ni to'g'ri tanlashni bilmaydi. A."
   },
   {
    "evidence": "How could I possibly choose intelligently among such a variety of options?",
    "why": "Hozir xizmatlar juda ko'p, shuning uchun tanlash qiyin. Ilgari variantlar kam bo'lgani uchun oson edi. B."
   },
   {
    "evidence": "the town was packed with weekending pensioners",
    "why": "Shaharda dam olishga kelgan nafaqaxo'rlar va boshqa yoshdagi sayyohlar (masalan, muallif) bor. Kitob kalitida True."
   },
   {
    "evidence": "large and virtually indistinguishable",
    "why": "Mehmonxonalar katta va bir-biridan deyarli farq qilmaydi. True."
   },
   {
    "evidence": "All the guesthouses had boards out front listing their many amenities",
    "why": "Har bir mehmonxona turli xizmatlarni taklif qiladi: rangli TV, shim dazmoli, yong'in sertifikati. True."
   },
   {
    "evidence": "such a dismal place at such an exorbitant price",
    "why": "Muallif narxni juda qimmat (\"exorbitant\") deb hisoblagan. False."
   },
   {
    "evidence": "A bath was out of the question",
    "why": "Muallif vannani tozalamagan, faqat yuzini yuvib chiqib ketgan. Tozalash haqida gap yo'q: No Information."
   }
  ]
 },
 {
  "n": 7,
  "title": "Reunion",
  "body": "The last time I saw my father was in Grand Central Station. I was going from my grandmother's in the Adirondacks to a cottage on the Cape that my mother had rented, and I wrote my father that I would be in New York between trains for an hour and a half, and asked if we could have lunch together. His secretary wrote to say that he would meet me at the information booth at noon, and at twelve o'clock sharp I saw him coming through the crowd.\n\nHe was a stranger to me - my mother divorced him three years ago and I hadn't been with him since - but as soon as I saw him I felt that he was my father, my flesh and blood, my future and my doom. I knew that when I was grown I would be something like him; I would have to plan my campaigns within his limitations. He was a big, good-looking man, and I was terribly happy to see him again.\n\nHe struck me on the back and shook my hand. \"Hi, Charlie,\" he said. \"Hi, boy. I'd like to take you up to my club, but it's in the Sixties, and if you have to catch an early train I guess we'd better get something to eat around here.\" He put his arm around me, and I smelled my father the way my mother sniffs a rose. It was a rich compound of whiskey, after-shave lotion, shoe polish, woollens, and the rankness of a mature male. I hoped that someone would see us together. I wished that we could be photographed. I wanted some record of our having been together. We went out of the station and up a side street to a restaurant. It was still early, and the place was empty.\n\nThe bartender was quarrelling with a delivery boy, and there was one very old waiter in a red coat down by the kitchen door. We sat down, and my father hailed the waiter in a loud voice. \"Kellner!\" he shouted. \"Garcon! You!\" His boisterousness in the empty restaurant seemed out of place. \"Could we have a little service here!\" he shouted. Then he clapped his hands. This caught the waiter's attention, and he shuffled over to our table. \"Were you clapping your hands at me?\" he asked. \"Calm down, calm down,\" my father said. \"It isn't too much to ask of you - if it wouldn't be too much above and beyond the call of duty, we would like a couple of Beefeater Gibsons.\" \"I don't like to be clapped at,\" the waiter said. \"I should have brought my whistle,\" my father said. \"I have a whistle that is audible only to the ears of old waiters. Now, take out your little pad and your little pencil and see if you can get this straight: two Beefeater Gibsons. Repeat after me: two Beefeater Gibsons.\" \"I think you'd better go somewhere else,\" the waiter said quietly. \"That,\" said my father, \"is one of the most brilliant suggestions I have ever heard. Come on, Charlie.\"\n\nI followed my father out of that restaurant into another. He was not so boisterous this time. Our drinks came, and he cross-questioned me about the baseball season. He then struck the edge of his empty glass with his knife and began shouting again. \"Garcon! You! Could we trouble you to bring us two more of the same.\" \"How old is the boy?\" the waiter asked. \"That,\" my father said, \"is none of your business.\" \"I'm sorry, sir,\" the waiter said, \"but I won't serve the boy another drink.\" \"Well, I have some news for you,\" my father said. \"I have some very interesting news for you. This doesn't happen to be the only restaurant in New York. They've opened another on the corner. Come on, Charlie.\" He paid the bill, and I followed him out of that restaurant into another.",
  "questions": [
   {
    "q": "The narrator was looking forward to meeting with his father because he",
    "options": [
     "hoped that his parents would get back together.",
     "expected to get a valuable present from him.",
     "wanted to stay with him in New York.",
     "missed the feeling of being with him."
    ],
    "answer": "D"
   },
   {
    "q": "The narrator's request to meet was accepted by his father",
    "options": [
     "unwillingly.",
     "with great pleasure.",
     "in a business-like manner.",
     "with much hope and expectation."
    ],
    "answer": "C"
   },
   {
    "q": "The narrator wanted to be photographed with his father because",
    "options": [
     "it was the happiest time of his life.",
     "he was proud of his father's good looks.",
     "he wanted to boast about his father to his friends.",
     "he wished to remember their moments together."
    ],
    "answer": "D"
   },
   {
    "q": "The father did not invite his son to his club because",
    "options": [
     "the son was pressed for time to catch a train.",
     "it was necessary to book in advance to enter the club.",
     "the man feared that his son would not behave properly.",
     "it was a closed club with no children allowed."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "Charlie's dad decided to take him to his club.",
    "answer": "B"
   },
   {
    "s": "Charlie did not want to have anything which reminds him of the time when he spent with his father.",
    "answer": "B"
   },
   {
    "s": "The waiter was angry with the behavior of Charlie's father towards him.",
    "answer": "A"
   },
   {
    "s": "Charlie's dad offered to go to another restaurant due to the absence of Charlie's favorite meal.",
    "answer": "C"
   },
   {
    "s": "New York is famous for its quality-served restaurants.",
    "answer": "C"
   }
  ],
  "answers": [
   "D",
   "C",
   "D",
   "A",
   "B",
   "B",
   "A",
   "C",
   "C"
  ],
  "explain": [
   {
    "evidence": "as soon as I saw him I felt that he was my father, my flesh and blood",
    "why": "Uch yildan beri ko'rmagan otasini sog'ingan va u bilan bo'lishdan juda xursand. D: \"missed the feeling of being with him\"."
   },
   {
    "evidence": "His secretary wrote to say that he would meet me at the information booth at noon",
    "why": "Ota o'zi emas, kotibasi orqali aniq vaqt va joy bilan javob bergan, ya'ni rasmiy, ishbilarmonlarcha. C."
   },
   {
    "evidence": "I wanted some record of our having been together",
    "why": "Birga o'tkazgan vaqtidan esdalik qolishini xohlagan. D: \"to remember their moments together\"."
   },
   {
    "evidence": "if you have to catch an early train I guess we'd better get something to eat around here",
    "why": "Klub uzoqda, o'g'li esa poyezdga ulgurishi kerak edi. A."
   },
   {
    "evidence": "I'd like to take you up to my club, but it's in the Sixties",
    "why": "Ota klubga olib borishni xohlagan, lekin vaqt yo'qligi uchun bormagan. False."
   },
   {
    "evidence": "I wished that we could be photographed",
    "why": "Charlie aksincha, otasi bilan o'tkazgan vaqtidan esdalik qolishini xohlagan. False."
   },
   {
    "evidence": "I don't like to be clapped at",
    "why": "Ofitsiant otaning qarsak chalib chaqirishidan norozi bo'lib, ularni boshqa joyga ketishga undagan. True."
   },
   {
    "evidence": "I think you'd better go somewhere else",
    "why": "Boshqa restoranga ofitsiant bilan janjal tufayli ketishgan; sevimli taom haqida gap yo'q. No Information."
   },
   {
    "evidence": "This doesn't happen to be the only restaurant in New York",
    "why": "Nyu-Yorkda restoranlar ko'p, lekin ularning sifati mashhurligi haqida ma'lumot yo'q. No Information."
   }
  ]
 },
 {
  "n": 8,
  "title": "",
  "body": "I arrived at the cloud forest in Ecuador ten days ago. I was one of a group of twelve volunteers that wanted to save the rainforest. My reasons for going on this trip were twofold: firstly, I wanted to collect and bring back alive some of the fascinating animals, birds and reptiles that inhabit this region; secondly, I had long cherished a dream to see South America: not the inhabited South America with its macadam roads, its cocktail bars, its express trains roaring through a landscape denuded of its flora and fauna by the beneficial influences of civilization. I wanted to see one of those few remaining parts of the continent that had escaped this fate and remained more or less as it was when America was first discovered: I wanted to see its rainforests, its vast lands of untouched, pure, natural wildlife. We were working together with local people and scientists and we were learning and seeing new things every day. Our lodge was comfortable, had breathtaking views and was in the middle of the rainforest. It was a two-hour walk from the nearest road, and it was even further to the nearest village.\n\nThe rainforest is truly an astonishing place. There are thousands of species of plants here and more than 700 species of birds. There are millions of insects and scientists think there may be around forty mammal species that haven't even been discovered. But what I was really amazed at how everything depends on everything else for survival.\n\nEvery tree in the rainforest is covered in a species of another kind. The black wasp uses the tarantula as a nest for its eggs, plants need monkeys for seed dispersal, and the clouds are necessary for the survival of the whole rainforest. This is because they provide moisture. The problem is, climate change is causing the clouds to rise by 1-2 meters every year. What will happen to the plants that need this moisture? What will happen to the animals that need those plants?\n\nOur job was to watch this changing ecosystem. One of my favourite projects was the bird survey. Every day a group of us set out at around five o'clock with a local scientist. At this time of the morning the air was filled with the sound of bird song. We had to identify the birds we hear and see and write down our findings. Later, we entered all our information into a computer at the lodge.\n\nWe also set up cameras to record pumas, spectacled bears and other large mammals. It was always exciting to see pumas because it meant there were other animals around that they would normally hunt. We fixed the cameras to trees around the reserve, and every day a team of volunteers collected the cameras memory cards.\n\nThere was a lot to do in the rainforest, but at least I felt like we were making a difference. However, soon I started collecting some animals and insects. I realized that as soon as the hunting got under way and the collection increased, most of my time would be taken up in looking after the animals, and I should not be able to wander far from camp. So I was eager to get into the forest while I had the chance. Nevertheless, I should mention the fact that without the help of the natives you would stand little chance of catching the animals you want, for they know the forest, having been born in it. Once the animal is caught, however, it is your job to keep it alive and well. If you left this part of it to the natives you would get precious little back alive.",
  "questions": [
   {
    "q": "According to the narrator scientists believe that",
    "options": [
     "plants in the rainforest do not need so much water.",
     "it's impossible to control the animals and birds in the forest.",
     "they should study animals without catching them.",
     "there is a number of unknown types of animals in the rainforest."
    ],
    "answer": "D"
   },
   {
    "q": "What type of work did the volunteers have to do?",
    "options": [
     "Study the birds' singing.",
     "Search for pumas and bears.",
     "Observe the changes in the wildlife.",
     "List the types of plants in the rainforest."
    ],
    "answer": "C"
   },
   {
    "q": "Why did the narrator go to the forest any time he had a chance to?",
    "options": [
     "He liked hunting with local people.",
     "He didn't have a chance to do any other work.",
     "He wouldn't have enough time for that later.",
     "He had to feed animals that he had caught."
    ],
    "answer": "C"
   },
   {
    "q": "According to the narrator he worked with local people because they",
    "options": [
     "protected the animals.",
     "were familiar with the place.",
     "saved his life.",
     "knew animals better."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "The only reason for traveling to Ecuador was to contribute to the protection of endangered animals.",
    "answer": "B"
   },
   {
    "s": "There were more areas influenced by civilization than untouched ones in South America.",
    "answer": "A"
   },
   {
    "s": "It took almost two hours for reaching to the nearest countryside from the center of the rainforest.",
    "answer": "B"
   },
   {
    "s": "There is an astonishing relationship between flora and fauna for their survival.",
    "answer": "A"
   },
   {
    "s": "Scientists used the sound of birds for observing different mammals.",
    "answer": "C"
   }
  ],
  "answers": [
   "D",
   "C",
   "C",
   "B",
   "B",
   "A",
   "B",
   "A",
   "C"
  ],
  "explain": [
   {
    "evidence": "there may be around forty mammal species that haven't even been discovered",
    "why": "Olimlar fikricha, hali kashf qilinmagan 40 ga yaqin sutemizuvchi turi bor. D."
   },
   {
    "evidence": "Our job was to watch this changing ecosystem",
    "why": "Ko'ngillilarning vazifasi o'zgarayotgan ekotizimni kuzatish edi. C."
   },
   {
    "evidence": "I should not be able to wander far from camp",
    "why": "Keyin hayvonlarni parvarish qilishga vaqt ketadi, shuning uchun hozirdan o'rmonga borishga shoshilgan. C."
   },
   {
    "evidence": "for they know the forest, having been born in it",
    "why": "Mahalliy aholi o'rmonni yaxshi biladi, chunki shu yerda tug'ilgan. B: \"were familiar with the place\"."
   },
   {
    "evidence": "My reasons for going on this trip were twofold",
    "why": "Sabab ikkita bo'lgan: hayvonlar yig'ish va Janubiy Amerikani ko'rish. \"Yagona sabab\" degani noto'g'ri: False."
   },
   {
    "evidence": "one of those few remaining parts of the continent that had escaped this fate",
    "why": "Tabiat saqlangan joylar \"few remaining\", ya'ni kam qolgan; ko'p qismi sivilizatsiya ta'sirida. True."
   },
   {
    "evidence": "It was a two-hour walk from the nearest road, and it was even further to the nearest village",
    "why": "Ikki soat eng yaqin yo'lgacha, qishloqqacha esa undan ham uzoq. False."
   },
   {
    "evidence": "how everything depends on everything else for survival",
    "why": "O'simlik va hayvonot dunyosi omon qolish uchun bir-biriga bog'liq. True."
   },
   {
    "evidence": "We had to identify the birds we hear and see",
    "why": "Qushlar ovozi qushlarni aniqlash uchun ishlatilgan; sutemizuvchilar esa kameralar bilan kuzatilgan. No Information."
   }
  ]
 },
 {
  "n": 9,
  "title": "",
  "body": "Scarcely had we settled into Reunion the Strawberry-pink Villa before my mother decided that I was running wild, and that it was necessary for me to have some sort of education. As usual when a problem arose, the entire family flung itself with enthusiasm into the task of solving it. Each member had his or her own idea of what was best for me. Sitting under the open window in the twilight, I had listened with interest, not unmixed with indignation, to the family discussion of my fate. Finally my mother decided that George would be a good teacher for me. Now it was settled. I wondered vaguely who George was, and why it was so necessary for me to have lessons. But the dusk was thick with flower-scents, and the olive groves were dark, mysterious, and fascinating. I forgot about the imminent danger of being educated, and went off with Roger to hunt for glow-worms in the sprawling brambles. Later I discovered that George was my brother's friend and he had come to Corfu to write. There was nothing very unusual about this, for all Larry's acquaintances in those days were either authors, poets, or painters.\n\nMy new teacher came over to the villa to discuss my education with Mother, and we were introduced. We regarded each other with suspicion. George was a very tall and extremely thin man with a brown beard and a pair of large spectacles. He had a deep, melancholy voice, a dry and sarcastic sense of humor. However, he was not upset by the fact that there were no school-books available on the island; he simply looked through his own library and appeared on the appointed day armed with his own selection of books. He patiently taught me Geography from the maps in the back of an ancient copy of Pears Encyclopedia, English from books that ranged from Wilde to Gibbon, French from the book called \"Le Petit Larousse\", and mathematics from memory. From my point of view the most important thing was that we devoted some of our time to natural history, and George carefully taught me how to observe and how to note down observations in a diary. At once my enthusiastic interest in nature became focused, for I found that by writing things down I could learn and remember much more. The only morning that I was ever on time for my lessons were those which were given up to natural history.\n\nEvery morning at nine George would come into the little dining-room of the villa, sit at the table methodically arranging the books. He would droop over the exercise-book pensively, pulling at his beard. Then in his large, clear writing he would set the task for me to solve. \"If it took two caterpillars a week to eat eight leaves, how long would four caterpillars take to eat the same number? Now, apply yourself to that.\" While I was struggling with the apparently insoluble problem of the caterpillar appetites, George was practicing some dancing moves in the hall as at that time he was engaged in learning some of the local dances, for which he had a passion. Through all this I would be watching him, fascinated, the exercise book lying forgotten in front of me. Mathematics was not one of our successful subjects.\n\nIn geography we made better progress, for George was able to give a more zoological tinge to the lesson. We drew giant maps and then filled in the various places of interest, together with drawings of the most exciting animals and birds to be found there.",
  "questions": [
   {
    "q": "How did the boy's family react to the problem of his education?",
    "options": [
     "Actively discussed the situation.",
     "Avoided any disputes on this topic.",
     "Showed no desire in solving it.",
     "Felt indifferent."
    ],
    "answer": "A"
   },
   {
    "q": "George was",
    "options": [
     "a teacher.",
     "a dancer.",
     "a writer.",
     "a mathematician."
    ],
    "answer": "C"
   },
   {
    "q": "How did the boy and George feel when they first met?",
    "options": [
     "They treated the situation with humor.",
     "They were upset about their studies.",
     "They didn't trust each other.",
     "They liked each other very much."
    ],
    "answer": "C"
   },
   {
    "q": "Why did the boy enjoy his lessons in natural history?",
    "options": [
     "He remembered much more from those lessons.",
     "He got very interested in the subject.",
     "He learned how to focus on the lesson.",
     "He finally learned how to write."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "The family used to deal with problems by analyzing everyone's opinions.",
    "answer": "A"
   },
   {
    "s": "The boy liked George's lessons more than his previous teacher's lessons.",
    "answer": "C"
   },
   {
    "s": "There were several options for choosing a book.",
    "answer": "B"
   },
   {
    "s": "Learning Geography and French was more essential than other subjects for the boy.",
    "answer": "B"
   },
   {
    "s": "The boy's teacher was taking dance lessons while he was working on an island.",
    "answer": "A"
   }
  ],
  "answers": [
   "A",
   "C",
   "C",
   "B",
   "A",
   "C",
   "B",
   "B",
   "A"
  ],
  "explain": [
   {
    "evidence": "the entire family flung itself with enthusiasm into the task of solving it",
    "why": "Butun oila muammoni hal qilishga ishtiyoq bilan kirishgan va har kim o'z fikrini aytgan. A: \"actively discussed\"."
   },
   {
    "evidence": "he had come to Corfu to write",
    "why": "George Korfuga yozish uchun kelgan, ya'ni u yozuvchi. C."
   },
   {
    "evidence": "We regarded each other with suspicion",
    "why": "Bir-biriga shubha bilan qarashgan, ya'ni ishonishmagan. C."
   },
   {
    "evidence": "At once my enthusiastic interest in nature became focused",
    "why": "Tabiatga bo'lgan qiziqishi kuchaygan, shuning uchun bu darslarga vaqtida kelgan. B: \"got very interested in the subject\"."
   },
   {
    "evidence": "Each member had his or her own idea of what was best for me",
    "why": "Har kim o'z fikrini aytgan va oila ularni muhokama qilgan. True."
   },
   {
    "evidence": "I wondered vaguely who George was",
    "why": "Bolaning oldingi o'qituvchisi haqida matnda hech narsa yo'q. No Information."
   },
   {
    "evidence": "there were no school-books available on the island",
    "why": "Orolda darslik umuman bo'lmagan; George o'z kutubxonasidan kitob olib kelgan. Tanlov ko'p bo'lmagan: False."
   },
   {
    "evidence": "From my point of view the most important thing was that we devoted some of our time to natural history",
    "why": "Bola uchun eng muhim fan tabiatshunoslik bo'lgan, geografiya va fransuz tili emas. False."
   },
   {
    "evidence": "he was engaged in learning some of the local dances",
    "why": "George orolda dars berish bilan birga mahalliy raqslarni o'rgangan. True."
   }
  ]
 },
 {
  "n": 10,
  "title": "Hazlitt's Hotel",
  "body": "I took a cab to Hazlitt's Hotel on Frith Street. I like Hazlitt's because it's intentionally obscure - it doesn't have a sign or a plaque or anything at all to betray its purpose - which puts you in a rare position of strength with your cab driver. Let me say right now that London cab drivers are without question the finest in the world. They are trustworthy, safe and honest, generally friendly and always polite. They keep their vehicles spotless inside and out, and they will put themselves to the most extraordinary inconvenience to drop you at the front entrance of your destination. There are really only a couple of odd things about them.\n\nOne is that they cannot drive more than two hundred feet in a straight line. I've never understood this, but no matter where you are or what the driving conditions, every two hundred feet a little bell goes off in their heads and they abruptly lunge down a side street. And when you get to your hotel or railway station or wherever it is you are going, they like to drive you all the way around it so that you can see it from all angles before alighting.\n\nThe other distinctive thing about them, and the reason I like to go to Hazlitt's, is that they cannot bear to admit that they don't know the location of something they feel they ought to know, like a hotel, which I think is rather sweet. To become a London cab driver you have to master something titled The Knowledge - in effect, learn every street, hospital, hotel, police station, cricket ground, cemetery and other notable landmarks in this amazingly vast and confusing city. It takes years and the cabbies are justifiably proud of their achievement. It would kill them to admit that there could exist in central London a hotel that they have never heard of. So what the cabbie does is probe. He drives in no particular direction for a block or two, then glances at you in the mirror and in an over casual voice says, \"Hazlitt's - that's the one on Curzon Street, innit, guv? Opposite the Blue Lion?\" But the instant he sees a knowing smile of demurral forming on your lips, he hastily says, \"No, hang on a minute, I'm thinking of the Hazelbury. Yeah, the Hazelbury. You want Hazlitt's, right?\" He'll drive on a bit in a fairly random direction. \"That's this side of Shepherd's Bush, innit?\" he'll suggest speculatively.\n\nWhen you tell him that it's on Frith Street, he says, \"Yeah, that's the one. Course it is. I know it - modern place, lots of glass.\" \"Actually, it's an eighteenth-century brick building.\" \"Course it is. I know it.\" And he immediately executes a dramatic U-turn, causing a passing cyclist to steer into a lamp-post (but that's all right because he has on cycle clips and one of those geeky slip stream helmets that all but invite you to knock him over). \"Yeah, you had me thinking of the Hazelbury,\" the driver adds, chuckling as if to say it's a lucky thing he sorted that one out for you, and then lunges down a little side street off the Strand called Running Sore Lane or Sphincter Passage, which, like so much else in London, you had never noticed was there before.",
  "questions": [
   {
    "q": "The narrator said that he liked London cab drivers because they",
    "options": [
     "can be trusted and nice to deal with.",
     "can drive in a straight line.",
     "know all the hotels and streets in the city.",
     "make friends easily."
    ],
    "answer": "A"
   },
   {
    "q": "Which of the following statements about London cab drivers is true according to the narrator?",
    "options": [
     "They prefer driving in a straight line.",
     "They prefer side streets to main streets.",
     "They have little bells in their cars.",
     "They let you see your hotel from all angles."
    ],
    "answer": "D"
   },
   {
    "q": "A reason why the narrator liked to go to Hazlitt's was that",
    "options": [
     "cab drivers liked driving there.",
     "it was in the center of the city.",
     "cab drivers didn't know where it was.",
     "it was an old brick building."
    ],
    "answer": "C"
   },
   {
    "q": "According to the narrator, to be a London cab driver, one has to",
    "options": [
     "be ready to study the city for years.",
     "be knowledgeable.",
     "be proud of the city.",
     "know all streets and places in London."
    ],
    "answer": "D"
   }
  ],
  "statements": [
   {
    "s": "It was easy to recognize Hazlitt's Hotel from its layout.",
    "answer": "B"
   },
   {
    "s": "Cab drivers usually try to take passengers as near as possible to their destinations regardless of rough routes.",
    "answer": "A"
   },
   {
    "s": "There are several requirements for becoming a cab driver in London.",
    "answer": "A"
   },
   {
    "s": "Cab drivers do not hesitate to ask about the route to the destination for passengers.",
    "answer": "B"
   },
   {
    "s": "Hazelbury and Hazlitt's Hotels are situated in different parts of London.",
    "answer": "C"
   }
  ],
  "answers": [
   "A",
   "D",
   "C",
   "D",
   "B",
   "A",
   "A",
   "B",
   "C"
  ],
  "explain": [
   {
    "evidence": "They are trustworthy, safe and honest, generally friendly and always polite",
    "why": "Haydovchilar ishonchli va muloyim. A: \"can be trusted and nice to deal with\"."
   },
   {
    "evidence": "they like to drive you all the way around it so that you can see it from all angles",
    "why": "Manzilni har tomondan ko'rsatish uchun atrofini aylanib chiqishadi. D."
   },
   {
    "evidence": "they cannot bear to admit that they don't know the location of something",
    "why": "Hazlitt's mehmonxonasini haydovchilar bilmaydi va buni tan olishni istamaydi, muallifga shu yoqadi. C."
   },
   {
    "evidence": "learn every street, hospital, hotel, police station, cricket ground, cemetery and other notable landmarks",
    "why": "Haydovchi bo'lish uchun Londondagi barcha ko'cha va joylarni bilish kerak. D."
   },
   {
    "evidence": "it doesn't have a sign or a plaque or anything at all to betray its purpose",
    "why": "Mehmonxonada hech qanday belgi yo'q, uni tashqaridan tanib bo'lmaydi. False."
   },
   {
    "evidence": "they will put themselves to the most extraordinary inconvenience to drop you at the front entrance",
    "why": "Har qanday noqulaylikka qaramay sizni to'g'ri eshik oldiga olib boradi. True."
   },
   {
    "evidence": "To become a London cab driver you have to master something titled The Knowledge",
    "why": "Haydovchi bo'lish uchun yillab \"The Knowledge\"ni o'rganish kerak, ya'ni talablar bor. True."
   },
   {
    "evidence": "So what the cabbie does is probe",
    "why": "Haydovchilar to'g'ridan-to'g'ri so'rashdan uyaladi, bilvosita taxmin qilib ko'radi. False."
   },
   {
    "evidence": "I'm thinking of the Hazelbury",
    "why": "Haydovchi Hazelbury'ni eslaydi, lekin uning qayerda joylashgani aniq aytilmagan. No Information."
   }
  ]
 },
 {
  "n": 11,
  "title": "",
  "body": "Lily and I had planned a movie marathon weekend. I was exhausted from work and she was stressed out from her classes, so we'd promised to spend the whole weekend parked on her couch and subsist solely on pizza and crisps. No healthy food. No diet Coke. And absolutely no strict, official clothes. Even though we talked all the time, we hadn't spent any real time together since I'd moved to the city.\n\nWe'd been friends since the eighth grade, when I first saw Lily crying alone at a cafeteria table. She'd just moved in with her grandmother and started at our school in Avon, after it became clear that her parents weren't coming home any time soon. The day I found her crying alone in the cafeteria was the day her grandmother had forced her to chop off her dirty dreadlocks and wear a dress, and Lily was not very happy about it. Something about the way she talked, the way she said, \"That's so nice of you,\" and \"Let's just forget about it\", charmed me, and we immediately became friends. We'd been inseparable through the rest of high school, and lived in the same room for all four years at Brown College. Lily hadn't yet decided whether she preferred girlish dresses or rough leather jackets, but we complemented each other well. And I missed her. Because with her first year as a graduate student and my exhausting work, we hadn't seen a whole lot of each other lately.\n\nLily was studying for her Ph.D. in Russian Literature at Columbia University and working odd jobs every free second she wasn't studying. Her grandmother barely had enough money to support herself, and Lily had to pay for the studies on her own. However, she seemed to be fond of such a way of life. She loved Russian culture ever since her eighth-grade teacher told her that Lily looked how he had always pictured Lolita, with her round face and curly black hair. She went directly home and read Nabokov's \"Lolita\", and then read everything else Nabokov wrote. And Tolstoy. And Gogol. And Chekhov. By the time we finished school, she was applying to Brown College to work with a specific professor who had a degree in Russian Literature. On interviewing a seventeen-year-old Lily the professor declared her one of the most well-read and passionate students of Russian literature he'd ever met. She still loved it, still studied Russian grammar and could read anything in its original.\n\nI couldn't wait for the weekend. My fourteen-hour workdays were registering in my feet, my upper arms, and my lower back. Glasses had replaced the contacts I'd worn for a decade because my eyes were too dry and tired to accept them anymore. I'd begun losing weight already as I never had time to eat properly, although I was drinking an enormous amount of coffee. I'd already weathered a flu infection and had paled significantly, and it had been only four weeks. I was only twenty-three years old. And my boss hadn't even been in the office yet. I knew I deserved a weekend.\n\nSaturday afternoon found us particularly motivated, and we managed to saunter round the city center for a few hours. We each bought some new clothes for the upcoming New Year's party and had a mug of hot chocolate from a sidewalk cafe. By the time we made it back to her apartment, we were exhausted and happy and spent the rest of the night watching old movies and eating pizza.",
  "questions": [
   {
    "q": "What did the girls hope to do that weekend?",
    "options": [
     "Talk all weekend.",
     "Have some more studies that weekend.",
     "Go to the cinema.",
     "Have a quiet weekend."
    ],
    "answer": "D"
   },
   {
    "q": "When the girl first met her friend, Lily",
    "options": [
     "lived with her parents.",
     "visited her grandmother.",
     "just came to live in Avon.",
     "had just lost her parents."
    ],
    "answer": "C"
   },
   {
    "q": "Lily was crying when the girl first met her because",
    "options": [
     "she missed her parents.",
     "her grandmother didn't like the way she talked.",
     "she had to wear clothes she didn't like.",
     "her grandmother had cut her hair short."
    ],
    "answer": "C"
   },
   {
    "q": "Why did the girl become friends with Lily?",
    "options": [
     "She liked Lily's dress.",
     "She became fascinated with her.",
     "They had common problems.",
     "She wanted to comfort her."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "Not meeting with their parents for a long time made Lily cry at the cafeteria.",
    "answer": "B"
   },
   {
    "s": "Sometimes Lily was not allowed to live with her best friend in a college dormitory.",
    "answer": "B"
   },
   {
    "s": "Lily and her best friend agreed to meet frequently after graduating Brown College.",
    "answer": "C"
   },
   {
    "s": "The professor was surprised about their interest in Lily towards Russian Literature.",
    "answer": "A"
   },
   {
    "s": "The author claims that she was not following the proper diet due to her huge workload",
    "answer": "A"
   }
  ],
  "answers": [
   "D",
   "C",
   "C",
   "B",
   "B",
   "B",
   "C",
   "A",
   "A"
  ],
  "explain": [
   {
    "evidence": "we'd promised to spend the whole weekend parked on her couch",
    "why": "Butun dam olishni divanda kino ko'rib, tinch o'tkazishni rejalashtirishgan. D: \"have a quiet weekend\"."
   },
   {
    "evidence": "She'd just moved in with her grandmother and started at our school in Avon",
    "why": "Lily buvisinikiga yangi ko'chib kelib, Avondagi maktabga endi kelgan edi. C."
   },
   {
    "evidence": "her grandmother had forced her to chop off her dirty dreadlocks and wear a dress",
    "why": "Buvisi uni ko'ylak kiyishga majburlagan, Lily bundan norozi edi. C: \"had to wear clothes she didn't like\". D emas: sochini buvisi kesmagan, unga kestirishga majbur qilgan."
   },
   {
    "evidence": "charmed me, and we immediately became friends",
    "why": "Lilyning gapirishi va muomalasi hikoyachini maftun qilgan. B: \"became fascinated with her\"."
   },
   {
    "evidence": "The day I found her crying alone in the cafeteria was the day her grandmother had forced her to chop off her dirty dreadlocks",
    "why": "Lily ota-onasini sog'ingani uchun emas, sochi va kiyimi sababli yig'lagan. False."
   },
   {
    "evidence": "lived in the same room for all four years at Brown College",
    "why": "To'rt yil davomida bitta xonada yashashgan. \"Ba'zan ruxsat berilmagan\" degani noto'g'ri: False."
   },
   {
    "evidence": "we hadn't seen a whole lot of each other lately",
    "why": "Ular kam ko'rishgan, lekin tez-tez uchrashishga kelishgani haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "the professor declared her one of the most well-read and passionate students of Russian literature he'd ever met",
    "why": "Professor Lilyning rus adabiyotiga qiziqishi va bilimidan hayratlangan. True."
   },
   {
    "evidence": "I never had time to eat properly",
    "why": "Ish ko'pligidan to'g'ri ovqatlanishga vaqti bo'lmagan. True."
   }
  ]
 },
 {
  "n": 12,
  "title": "Cry-baby",
  "body": "It was almost midnight before they got around to giving the Oscars to the really well-known personalities.\n\nAt first a series of guest stars had awarded the prizes: to the best designer, to the best special-effects man, for the best technical invention for motion pictures during the year, and to all the other people, so unknown outside the industry, but so significant within it.\n\nI looked around the theatre, recognizing most of the weighty faces in the business, but not caring much.\n\nYou see, I was pretty nervous. Myra Caldwell, whom I had brought to the ceremony, was sitting there beside me, and right across the aisle was Joan Weyland. Now, to get the picture properly, you have to remember that during that particular year Myra had played the sensational supporting role in The Devil Loses and had been called the greatest find in the history of pictures. But that was the same year that Joan Weyland had stolen a big picture called Calumet Centre right out from under the nose of one of the most famous female stars in the industry. The only other actress nominated was not given much chance. Now in a few minutes, they were going to announce who had won the Oscar for the Best Supporting Actress of the year. It was the hottest contest and everybody was aware of it. Furthermore, it was no secret that the two leading contestants would be delighted to boil each other in oil — win, lose, or draw. And here they were across the aisle from each other. Do you get why I was nervous?\n\nThen the lights went down. They were going to run short scenes from the pictures for which the actors and actresses had been nominated. The supporting-actress pictures were coming on, and here was Joan Weyland in her grand scene from Calumet Centre. The audience started to applaud as soon as they saw her. After that they ran a short episode from Whirlwind showing the other nominee, a refugee actress called Tanya Braden. I had never seen the picture of the actress, and the picture hadn't made much money, but there was no doubt she could act! She played the star's mother and she made you believe it.\n\nThen they ran Myra's big moment in The Devil Loses. After it was over, I tried to guess who had the biggest chance. \"I think I won,\" Myra said to me. The lights went up. The old actor, who had won the Supporting Actor award the year before, came through the curtains and prepared to present the award. I didn't see how I was going to live through the next few minutes. He got the envelope and began opening it very slowly. He was loving every second of it, the old man. Then he looked at the little piece of paper. \"The Winner,\" he said, then paused again, \"is Miss Tanya Braden, for her performance in Whirlwind.\"\n\nWell, I'm not too sure about the sequence of events that followed. I don't remember the applause, because Joan let out a loud cry from across the aisle that drowned out everything else. Then Myra started to cry. I don't mean cry like the ordinary person, but I mean cry so that the building shook. Then Joan jumped to her feet and started out, and her mother accompanied her. But I couldn't do anything with Myra. The show was interrupted and the whole theatre was staring at her. I picked her up and carried her out. It wasn't a very pleasant performance, but I think there is some excuse. After all, Joan is 8 years old, and Myra is only 6, and she isn't used to being up so late. I'm a little on her side anyway. And why not? I'm her father.",
  "questions": [
   {
    "q": "At the beginning of the Oscar ceremony prizes were awarded",
    "options": [
     "to the most famous stars among the winners.",
     "to the best director.",
     "for the best film.",
     "to the secondary members of shooting crews."
    ],
    "answer": "D"
   },
   {
    "q": "Joan Weyland and Myra Caldwell were present at the ceremony because they",
    "options": [
     "had both played in one film which had an Oscar nomination.",
     "had been nominated as two of the Best Supporting Actresses of the year.",
     "wanted to see the well-known personalities of the film industry.",
     "accompanied the nominees."
    ],
    "answer": "B"
   },
   {
    "q": "The narrator describes the relations between Joan and Myra as",
    "options": [
     "friendship.",
     "rivalry.",
     "sympathy.",
     "partnership."
    ],
    "answer": "B"
   },
   {
    "q": "The narrator liked the performance of the third nominee, Tanya Braden, because she",
    "options": [
     "played her part very convincingly.",
     "was very beautiful.",
     "was a well-known actress.",
     "played as a partner of a world-famous star."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "Usually, everybody could recognize easily the winners of the Oscars.",
    "answer": "B"
   },
   {
    "s": "The Devil Loses was the first role of Myre in the film industry.",
    "answer": "C"
   },
   {
    "s": "Tanya Braden was supposed to have very little probability to win the Best Supporting Actress.",
    "answer": "A"
   },
   {
    "s": "Whirlwind was so successful in terms of generating much budget.",
    "answer": "B"
   },
   {
    "s": "The author could remember exactly what happened after the announcement of the winner.",
    "answer": "B"
   }
  ],
  "answers": [
   "D",
   "B",
   "B",
   "A",
   "B",
   "C",
   "A",
   "B",
   "B"
  ],
  "explain": [
   {
    "evidence": "so unknown outside the industry, but so significant within it",
    "why": "Avval kino sohasidan tashqarida tanilmagan mutaxassislar (dizayner, maxsus effektlar ustasi) taqdirlangan. D."
   },
   {
    "evidence": "they were going to announce who had won the Oscar for the Best Supporting Actress of the year",
    "why": "Myra va Joan eng yaxshi ikkinchi darajali rol nominatsiyasida bellashgan. B."
   },
   {
    "evidence": "the two leading contestants would be delighted to boil each other in oil",
    "why": "Ikki raqib bir-birini yomon ko'radi, bu raqobat. B: \"rivalry\"."
   },
   {
    "evidence": "there was no doubt she could act! She played the star's mother and she made you believe it",
    "why": "Tanya rolni shunchalik ishonarli o'ynaganki, unga ishonasan. A."
   },
   {
    "evidence": "so unknown outside the industry",
    "why": "Dastlabki g'oliblarni kino sohasidan tashqarida hech kim tanimaydi. False."
   },
   {
    "evidence": "Myra had played the sensational supporting role in The Devil Loses",
    "why": "Myraning bu roli \"sensatsion\" deyilgan, lekin uning birinchi roli ekani aytilmagan. No Information."
   },
   {
    "evidence": "The only other actress nominated was not given much chance",
    "why": "Uchinchi nomzod Tanyaning g'alaba qozonishiga ishonch kam edi. True."
   },
   {
    "evidence": "the picture hadn't made much money",
    "why": "\"Whirlwind\" filmi ko'p pul topmagan. False."
   },
   {
    "evidence": "I'm not too sure about the sequence of events that followed",
    "why": "Muallif e'londan keyingi voqealar ketma-ketligini aniq eslamaydi. False."
   }
  ]
 },
 {
  "n": 13,
  "title": "Personality and Health",
  "body": "There is increasing evidence that health is linked to personality. However, until now, the relationship has not affected the way health care is delivered. There are several reasons for this. Some health workers doubt whether there is a direct link between health and personality or whether it's just a coincidence. Some feel it is their professional duty to treat all patients in the same way. Others argue that delivering health services according to patients' personalities will have minimal impact and therefore isn't worth the effort. However, some psychologists believe that applying different procedures to people with different personalities could have a significant, positive effect on health.\n\nResearch into personality has, in recent years, focused on the Big Five model of personality types. This model measures how neurotic, extrovert, open to experience, agreeable and conscientious a person is. Some of these personality types have been studied in relation to health. For example, conscientious people tend to be less likely to smoke, drink too much alcohol or be inactive. However, in other cases, the relationship is less clear. Neurotic behaviour, for instance, has been found in some studies to increase the risk of death, in others to protect people from illness and in others to have no link to health at all.\n\nEven so, if health workers applied an understanding of personality to the services they provide, they could influence the extent to which patients act on advice and follow their treatment. For example, high sensation-seeking individuals, who are extroverts and unconscientiously in the Big Five model and tend to take part in risky activities, respond to drama, energy and emotion. Thus, to encourage those people to follow health advice, health promotions can be designed to incorporate those factors. An example of this was the campaign SENTAR which aimed to reduce cannabis use among high sensation-seeking teenagers. By creating a suitable television advert, they successfully engaged these youths and reduced their recreational drug use. Of course, this approach isn't always possible. It is often impractical and expensive to create several versions of a campaign to reach different personality types. However, recent developments in computer technology, cookies and targeted advertising may allow this approach to be used more in future.\n\nPersonality could also be considered when sending messages, information and guidance to specific patients. Already, health information is usually available in various forms - printed, digital, audio, and so on - to be suitable and accessible for different users, such as the blind, the elderly, and people with reading difficulties. Research has also shown that, by identifying different patients' motivations for treatment and then corresponding with them in a way that reflects their motivations, patients will become more involved in their treatment, compared to when the same messages are sent to everyone. Correspondence could, therefore, be adapted to reflect patients' personality type, too. For example, less conscientious people could be sent phone reminders to attend appointments. So far, there has been very little research into the effectiveness of tailoring health guidance according to personality, so this area deserves further study.\n\nUntil now, the focus of personality-health research has been to explore the link between personality and health and has had very little practical application. Thus, health workers have not engaged deeply with it. However, by suggesting, trialing and implementing practices to engage patients with different personalities, the relationship between psychology researchers and health workers could improve, along with the health of the general public.",
  "questions": [
   {
    "q": "Who is the article most aimed at?",
    "options": [
     "psychologists",
     "patients at a clinic",
     "neurotic people",
     "health workers outside psychology"
    ],
    "answer": "D"
   },
   {
    "q": "Which of these is NOT a reason why clinicians do not currently consider personality in their approach to healthcare?",
    "options": [
     "They consider it their duty to treat all patients equally.",
     "They think the effect on a patient's health will be hardly noticeable.",
     "They lack sufficient training in psychology.",
     "They doubt whether a person's personality directly affects their health."
    ],
    "answer": "C"
   },
   {
    "q": "What can be concluded from the text about neurotic patients?",
    "options": [
     "They are at greater risk from early death than non-neurotic patients.",
     "There is no consistent link between a patient's level of neurosis and their health.",
     "Their neurosis protects them from becoming sick.",
     "They are more likely than non-neurotic patients to report illness."
    ],
    "answer": "B"
   },
   {
    "q": "It can be inferred that the campaign SENTAR...",
    "options": [
     "used drama and energy in its design.",
     "failed to reduce cannabis use among teenagers.",
     "was designed to attract conscientious, high sensation-seeking teenagers.",
     "was delivered across multiple media, including television and online."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "The correlation between health and personality has always been taken into account in the health care system.",
    "answer": "B"
   },
   {
    "s": "Some doctors believe that it is inefficient to treat patients depending on their personalities.",
    "answer": "A"
   },
   {
    "s": "There are controversial opinions about the effect of neurotic behavior on health.",
    "answer": "A"
   },
   {
    "s": "SENTAR campaign predicted a positive impact of their promotion on reducing drug use among teenagers.",
    "answer": "C"
   },
   {
    "s": "Understanding health information can be difficult for disabled people.",
    "answer": "B"
   }
  ],
  "answers": [
   "D",
   "C",
   "B",
   "A",
   "B",
   "A",
   "A",
   "C",
   "B"
  ],
  "explain": [
   {
    "evidence": "if health workers applied an understanding of personality to the services they provide",
    "why": "Maqola sog'liqni saqlash xodimlariga shaxs turini hisobga olishni tavsiya qiladi; ular psixolog emas. D."
   },
   {
    "evidence": "Some feel it is their professional duty to treat all patients in the same way",
    "why": "Matnda uchta sabab bor: bog'liqlikka shubha, hammaga teng munosabat, ta'sir kichikligi. Psixologiyadan ta'lim yetishmasligi aytilmagan. C."
   },
   {
    "evidence": "in some studies to increase the risk of death, in others to protect people from illness and in others to have no link to health at all",
    "why": "Tadqiqotlar bir-biriga zid natija bergan, ya'ni barqaror bog'liqlik yo'q. B."
   },
   {
    "evidence": "respond to drama, energy and emotion",
    "why": "Bunday o'smirlar drama va energiyaga javob beradi, SENTAR esa ularga mos reklama yaratgan. A."
   },
   {
    "evidence": "until now, the relationship has not affected the way health care is delivered",
    "why": "Shaxs va sog'liq aloqasi hozirgacha tibbiy xizmatda hisobga olinmagan. False."
   },
   {
    "evidence": "delivering health services according to patients' personalities will have minimal impact and therefore isn't worth the effort",
    "why": "Ba'zi shifokorlar bu ta'sir kichik va mehnatga arzimaydi deb hisoblaydi. True."
   },
   {
    "evidence": "Neurotic behaviour, for instance, has been found in some studies to increase the risk of death",
    "why": "Nevrotik xulqning sog'liqqa ta'siri haqida tadqiqotlar turlicha fikrda. True."
   },
   {
    "evidence": "they successfully engaged these youths and reduced their recreational drug use",
    "why": "Kampaniya natijasi aytilgan, lekin oldindan ijobiy natijani bashorat qilgani haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "to be suitable and accessible for different users, such as the blind, the elderly, and people with reading difficulties",
    "why": "Ma'lumot nogironlar uchun ham qulay shakllarda beriladi, ya'ni ular uchun qiyin emas. False."
   }
  ]
 },
 {
  "n": 14,
  "title": "",
  "body": "Six months ago I made a rash promise. The leader of the youth club in our village rang me in March saying, \"We're thinking of running a children's play scheme for a day in October half-term. Would you be prepared to help?\" My response was \"Sure, why not?\" In truth I was a little flattered to be asked, even though working as a care assistant with old people hardly qualified me for the role. Still, I duly put the date in my diary and of course I forgot all about it. I don't know if you've noticed this but time has a habit of speeding along faster than a police car chasing a robber and, before I knew it, the day was dawning.\n\nI arrived at the youth center that morning feeling full of trepidation. There was a gang of 12 helpers including me and each pair had been allocated a particular age group. Mine was the 10 to 11 year olds. Even with the planning meeting I had attended the week before, I worried about whether I was up to the task. Why hadn't I read through the copious lesson plans we were given beforehand? And wasn't the average 10-year-old more interested in the latest Play Station game than making things with paper and glue?\n\nAll too quickly the children began arriving. The look of relief on parents' faces as they handed their offspring over to us was quite comical. A handful of the children were already members of the club but the other forty five or so were from the local primary schools. Again I asked myself why I had elected to spend a day with all these 'little monsters' especially when I have two all of my own to contend with! I needn't have worried of course as it turned out to be a marvelous day. We watched entertaining DVD clips, learned 'action' songs, made clay pyramids, decorated biscuits, played memory games and spent some time in quiet reflection. I say 'we' because I rediscovered my inner child and joined in all the activities.\n\nThe particular highlight for me was the final rendition of \"He's got the whole world in his hands\" in the closing part of the day. The children knew the words and actions off by heart and sang so loudly it was almost enough to bring the roof down. It's difficult to explain those moments; only that the body tingles with the pleasure of having witnessed something so magical.\n\nOf course there were also moments of great poignancy. I found it difficult to stop thinking of one little girl, who mentioned oh-so-casually that her mum was in hospital and would be there for a long time. It's easy for us adults to idealize childhood and forget that some children have their own burden of anxieties and concerns. When I got home utterly exhausted, still with modeling clay under my fingernails, I reflected on what a privilege it had been.\n\nThere was one disappointment for the children and that was that the playscheme was only running for a day, and not the whole week. As I said farewell to my group, one of the children turned and said \"Can we do it again in the next holiday, Miss?\" My response was, \"Sure, why not?\"",
  "questions": [
   {
    "q": "When the first day of the job arrived the writer was surprised...",
    "options": [
     "that the day had come round so quickly.",
     "because she'd forgotten to write down the date.",
     "because she witnessed a car chase on the way.",
     "that she woke up at down."
    ],
    "answer": "A"
   },
   {
    "q": "When the writer arrived to start her job she",
    "options": [
     "put the children into pairs.",
     "realized she should have done more preparation.",
     "felt confident she could deal with 10 and 11 year olds.",
     "saw the children had brought their own electronic games to play with."
    ],
    "answer": "B"
   },
   {
    "q": "According to the writer, the parents were ...",
    "options": [
     "happy to stay with their children all day.",
     "worried about children from the other schools.",
     "nervous that their children might not behave themselves.",
     "glad to leave their children."
    ],
    "answer": "D"
   },
   {
    "q": "The writer's best moment ...",
    "options": [
     "occurred in the middle of the day.",
     "took her by surprise.",
     "was hard to put into words.",
     "was when the day was over."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "The author was confident in working with children when she came to the youth center.",
    "answer": "B"
   },
   {
    "s": "Helpers were provided with the plans of activities with children in advance.",
    "answer": "A"
   },
   {
    "s": "The emotions of the author were different in the beginning and at the end of the day.",
    "answer": "A"
   },
   {
    "s": "Serious family problem of a young girl made the author think about possible difficulties of childhood.",
    "answer": "A"
   },
   {
    "s": "The next play scheme was agreed to last not for a day but for a week.",
    "answer": "C"
   }
  ],
  "answers": [
   "A",
   "B",
   "D",
   "C",
   "B",
   "A",
   "A",
   "A",
   "C"
  ],
  "explain": [
   {
    "evidence": "before I knew it, the day was dawning",
    "why": "Vaqt shunchalik tez o'tganki, kun qanday kelganini sezmay qolgan. A."
   },
   {
    "evidence": "Why hadn't I read through the copious lesson plans we were given beforehand?",
    "why": "Oldindan berilgan reja varaqlarini o'qimaganidan afsuslangan, ya'ni ko'proq tayyorlanish kerak edi. B."
   },
   {
    "evidence": "The look of relief on parents' faces as they handed their offspring over to us was quite comical",
    "why": "Ota-onalar bolalarini topshirib, yengil tortgan, ya'ni xursand bo'lgan. D."
   },
   {
    "evidence": "It's difficult to explain those moments",
    "why": "Eng yaxshi lahzani so'z bilan tushuntirish qiyin bo'lgan. C."
   },
   {
    "evidence": "I worried about whether I was up to the task",
    "why": "Muallif bolalar bilan ishlay olishiga ishonmagan, xavotirda bo'lgan. False."
   },
   {
    "evidence": "the copious lesson plans we were given beforehand",
    "why": "Yordamchilarga reja varaqlari oldindan berilgan. True."
   },
   {
    "evidence": "feeling full of trepidation",
    "why": "Kun boshida xavotirda bo'lgan, oxirida esa bu \"imtiyoz\" bo'lganini his qilgan, ya'ni hissiyot o'zgargan. True."
   },
   {
    "evidence": "It's easy for us adults to idealize childhood and forget that some children have their own burden of anxieties",
    "why": "Onasi kasalxonada yotgan qizcha muallifni bolalikdagi qiyinchiliklar haqida o'ylashga majbur qilgan. True."
   },
   {
    "evidence": "Can we do it again in the next holiday, Miss?",
    "why": "Bolalar yana o'tkazishni so'ragan, lekin keyingisi bir hafta davom etishi kelishilmagan. No Information."
   }
  ]
 },
 {
  "n": 15,
  "title": "BE WEB WISE",
  "body": "Protect your computer, by all means, but don't forget to protect yourself, advises web safety expert, Amanda Knox.\n\nWe're always being urged to stay safe online. But in an era where the internet is part of our everyday lives for work, fun, study, shopping, even managing finances - it's not always easy to spot the dangers. Web safety expert, Amanda Knox, explores some of the issues lurking in cyberspace.\n\nHer first piece of advice is to install software and a firewall to protect your computer from viruses, hackers and criminals who want to steal your data or financial information. \"Think of these as your first line of defense,\" says Amanda.\n\nSo much for protecting yourself against intruders, but what about other problems? Say you've accidentally deleted an important file or you've been at the mercy of a natural disaster. Katy Marsh runs an online photography business from home and when a fire destroyed part of her house it could easily have spelled ruin for her business too. \"Luckily I keep a regular back-up of my data so it wasn't a catastrophe.\" Amanda advises that while back-ups are good to have we must ensure we protect our computers to start with.\n\nWhilst most of us are aware of the need to protect our computers, it seems we're more lax when it comes to looking out for ourselves, at least according to a recent web awareness survey. Web safety specialists say better personal awareness is needed and this is due in part to the rise of 'Social Networking' sites like 'Facebook' or 'Twitter', which allow us to connect with people around the world with similar interests and professional backgrounds. Chris Simpson, a computer programmer, learnt the hard way. \"I joined a free online networking group in the hope of making some professional contacts to help me find a new job. After a month, one of my online contacts invited me to take out a subscription to a club that promised access to a network of job recruiters. It turned out to be a waste of money. I ended up a laughing stock with my mates - they couldn't believe that someone in my job could get taken in so easily.\" No wonder then that Amanda warns, \"It's easy to get complacent and let our guard down when we meet someone with the same interests online.\"\n\nThis brings us to other potential pitfalls. Are the people you meet online who they really claim to be? Can you be sure the person you're chatting with is in fact a 22-year-old Maths undergraduate from London and not someone merely masquerading as a student to win your trust? Khaled, a postgrad from Manchester University, quickly realised that it was unwise of him to post his phone number and email address in the public forum of an online academic discussion group. He was soon bombarded with unwanted emails and nuisance phone calls. Yet, it's astonishing how many highly educated people do this without considering the consequences that anyone in the world could use the information to make (unwanted) contact.\n\nWhen networking and joining online communities it's better to be cautious about the amount of personal information you share. For example, it isn't always necessary to use your real name as a username when registering for a service. You could instead use a pseudonym, or a name that doesn't give away your real identity to other users. And is it really important to tell the world details about your school, college or any local clubs you're a member of? Sometimes it pays to be a little vague and simply say something like 'I'm studying at college in Madrid at the moment and I'm a member of a local tennis club'.",
  "questions": [
   {
    "q": "In the second paragraph the phrase \"first line of defence\" suggests something",
    "options": [
     "is the only option",
     "offers protection",
     "is an instruction",
     "shows weakness"
    ],
    "answer": "B"
   },
   {
    "q": "The effect of the fire was",
    "options": [
     "worse for Katy's business than her home.",
     "to ruin Katy's business",
     "for Katy's business as it could have been.",
     "to make Katy start to back up her data."
    ],
    "answer": "C"
   },
   {
    "q": "According to the web awareness survey, our attitude to our personal safety is rather",
    "options": [
     "relaxed",
     "concerned",
     "positive",
     "uncertain"
    ],
    "answer": "A"
   },
   {
    "q": "Regarding Khaled's experience the writer is surprised that",
    "options": [
     "people telephone complete strangers.",
     "people don't think of the results of their actions online.",
     "university students take part in online discussions.",
     "people sent emails to Khaled without asking permission."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "The spread of the internet may affect adversely the safety of people in many different ways.",
    "answer": "A"
   },
   {
    "s": "The main aim of hackers is to sell your financial information to third parties.",
    "answer": "C"
   },
   {
    "s": "For Katy, it was impossible to restore any materials related to her business after the fire.",
    "answer": "B"
   },
   {
    "s": "Simpson was lucky to find a new job with the help of his online contact.",
    "answer": "B"
   },
   {
    "s": "The author advises avoiding sharing accurate personal information on the internet to be safe.",
    "answer": "A"
   }
  ],
  "answers": [
   "B",
   "C",
   "A",
   "B",
   "A",
   "C",
   "B",
   "B",
   "A"
  ],
  "explain": [
   {
    "evidence": "Think of these as your first line of defense",
    "why": "\"Birinchi himoya chizig'i\" — dastur va firewall kompyuterni himoya qiladi. B: \"offers protection\"."
   },
   {
    "evidence": "Luckily I keep a regular back-up of my data so it wasn't a catastrophe",
    "why": "Zaxira nusxa tufayli yong'in biznesni yo'q qilmagan, ya'ni oqibat bo'lishi mumkin bo'lganchalik yomon bo'lmagan. C."
   },
   {
    "evidence": "it seems we're more lax when it comes to looking out for ourselves",
    "why": "\"Lax\" — beparvo, bo'shang: o'z xavfsizligimizga befarqroqmiz. A: \"relaxed\"."
   },
   {
    "evidence": "it's astonishing how many highly educated people do this without considering the consequences",
    "why": "Muallifni ma'lumotli odamlar ham oqibatini o'ylamasdan shaxsiy ma'lumot joylashi hayratga soladi. B."
   },
   {
    "evidence": "it's not always easy to spot the dangers",
    "why": "Internet hayotimizga kirib kelgani sayin turli xavflar paydo bo'lmoqda: viruslar, firibgarlik, begonalar. True."
   },
   {
    "evidence": "criminals who want to steal your data or financial information",
    "why": "Xakerlar ma'lumot o'g'irlashi aytilgan, lekin uni uchinchi shaxslarga sotishi haqida gap yo'q. No Information."
   },
   {
    "evidence": "I keep a regular back-up of my data so it wasn't a catastrophe",
    "why": "Zaxira nusxa bo'lgani uchun ma'lumotlarini tiklay olgan. False."
   },
   {
    "evidence": "It turned out to be a waste of money",
    "why": "Chris ish topmagan, pulini behuda sarflagan. False."
   },
   {
    "evidence": "it's better to be cautious about the amount of personal information you share",
    "why": "Haqiqiy ism o'rniga taxallus ishlatish va shaxsiy ma'lumotni kam berish tavsiya qilinadi. True."
   }
  ]
 },
 {
  "n": 16,
  "title": "Island Life",
  "body": "We live on the island of Hale. It's about four kilometres long and two kilometres wide at its broadest point, and it's joined to the mainland by a causeway called the Stand - a narrow road built across the mouth of the river which separates us from the rest of the country. Most of the time you wouldn't know we're on an island because the river mouth between us and the mainland is just a vast stretch of tall grasses and brown mud. But when there's a high tide and the water rises a half a metre or so above the road and nothing can pass until the tide goes out again a few hours later, then you know it's an island.\n\nWe were on our way back from the mainland. My older brother, Dominic, had just finished his first year at university in a town 150 km away. Dominic's train was due in at five and he'd asked for a lift back from the station. Now, Dad normally hates being disturbed when he's writing (which is just about all the time), and he also hates having to go anywhere, but despite the typical sighs and moans - why can't he get a taxi? what's wrong with the bus? - I could tell by the sparkle in his eyes that he was really looking forward to seeing Dominic.\n\nSo, anyway, Dad and I had driven to the mainland and picked up Dominic from the station. He had been talking non-stop from the moment he'd slung his rucksack in the boot and got in the car. University this, university that, writers, books, parties, people, money, gigs! And when I say talking, I don't mean talking as in having a conversation, I mean talking as in jabbering like a mad thing. I didn't like it ... the way he spoke and waved his hands around as if he was some kind of intellectual or something. It was embarrassing. It made me feel uncomfortable - that kind of discomfort you feel when someone you like, someone close to you, suddenly starts acting like a complete idiot. And I didn't like the way he was ignoring me, either. For all the attention I was getting I might as well not have been there. I felt a stranger in my own car.\n\nAs we approached the island on that Friday afternoon, the tide was low and the Stand welcomed us home, stretched out before us, clear and dry, beautifully hazy in the heat - a raised strip of grey concrete bound by white railings and a low footpath on either side, with rough cobbled banks leading down to the water. Beyond the railings, the water was glinting with that wonderful silver light we sometimes get here in the late afternoon which hazes through to the early evening.\n\nWe were about halfway across when I saw the boy. My first thought was how odd it was to see someone walking on the Stand. You don't often see people walking around here. Between Hale and Moulton (the nearest town about thirty kilometres away on the mainland), there's nothing but small cottages, farmland, heathland and a couple of hills. So islanders don't walk because of that. If they're going to Moulton they tend to take the bus. So the only pedestrians you're likely to see around here are walkers or bird-watchers. But even from a distance I could tell that the figure ahead didn't fit into either of these categories. I wasn't sure how I knew, I just did.\n\nAs we drew closer, he became clearer. He was actually a young man rather than a boy. Although he was on the small side, he wasn't as slight as I'd first thought. He wasn't exactly muscular, but he wasn't weedy-looking either. It's hard to explain. There was a sense of strength about him, a graceful strength that showed in his balance, the way he held himself, the way he walked!",
  "questions": [
   {
    "q": "In the first paragraph, what is Caitlin's main point about the island?",
    "options": [
     "It can be dangerous to try to cross from the mainland.",
     "It is much smaller than it looks from the mainland.",
     "It is only completely cut off at certain times.",
     "It can be a difficult place for people to live in."
    ],
    "answer": "C"
   },
   {
    "q": "What does Caitlin suggest about her father?",
    "options": [
     "His writing prevents him from doing things he wants to do with his family.",
     "His initial reaction to his son's request is different from usual.",
     "His true feelings are easily hidden from his daughter.",
     "His son's arrival is one event he will take time off for."
    ],
    "answer": "D"
   },
   {
    "q": "Caitlin emphasises her feelings of discomfort because she",
    "options": [
     "is embarrassed that she doesn't understand what her brother is talking about.",
     "feels confused about why she can't relate to her brother any more.",
     "is upset by the unexpected change in her brother's behaviour.",
     "feels foolish that her brother's attention is so important to her."
    ],
    "answer": "C"
   },
   {
    "q": "In the fourth paragraph, what is Caitlin's purpose in describing the island?",
    "options": [
     "to express her positive feelings about it.",
     "to explain how the road was built.",
     "to illustrate what kind of weather was usual.",
     "to describe her journey home."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "People can use the road to reach to the mainland anytime they want.",
    "answer": "B"
   },
   {
    "s": "It was not possible to detect that the father was waiting impatiently for a meeting with Dominic.",
    "answer": "A"
   },
   {
    "s": "Dominic behaved himself unusually and neglected his brother.",
    "answer": "A"
   },
   {
    "s": "People usually visit Hale Island for observing wild animals.",
    "answer": "B"
   },
   {
    "s": "The purpose of the strange pedestrian was to ask about the right way to get out of the island.",
    "answer": "C"
   }
  ],
  "answers": [
   "C",
   "D",
   "C",
   "A",
   "B",
   "A",
   "A",
   "B",
   "C"
  ],
  "explain": [
   {
    "evidence": "when there's a high tide and the water rises a half a metre or so above the road",
    "why": "Orol faqat suv ko'tarilganda materikdan uziladi, ya'ni ma'lum vaqtlarda. C."
   },
   {
    "evidence": "I could tell by the sparkle in his eyes that he was really looking forward to seeing Dominic",
    "why": "Otasi yozishdan chalg'ishni yomon ko'radi, lekin o'g'li kelishi uchun vaqt ajratadi. D."
   },
   {
    "evidence": "someone you like, someone close to you, suddenly starts acting like a complete idiot",
    "why": "Akasining kutilmaganda o'zgargan xulqidan noqulay bo'lgan. C."
   },
   {
    "evidence": "the Stand welcomed us home",
    "why": "\"Uyga xush kelibsiz\", \"ajoyib kumush nur\" kabi iboralar orolga bo'lgan iliq his-tuyg'uni bildiradi. A."
   },
   {
    "evidence": "nothing can pass until the tide goes out again a few hours later",
    "why": "Suv ko'tarilganda yo'ldan o'tib bo'lmaydi, demak istalgan vaqtda emas. False."
   },
   {
    "evidence": "despite the typical sighs and moans",
    "why": "Otasi tashqaridan doimiy nolalari bilan o'g'lini kutayotganini bildirmagan; buni faqat qizi ko'zidagi uchqundan sezgan. Kitob kalitida True."
   },
   {
    "evidence": "And I didn't like the way he was ignoring me, either",
    "why": "Dominic odatdagidan boshqacha gapirgan va singlisiga e'tibor bermagan. True."
   },
   {
    "evidence": "So the only pedestrians you're likely to see around here are walkers or bird-watchers",
    "why": "Bu yerda piyodalar kam, faqat sayr qiluvchilar yoki qush kuzatuvchilar uchraydi. Odamlar odatda yovvoyi hayvonlarni kuzatish uchun keladi degani noto'g'ri: False."
   },
   {
    "evidence": "My first thought was how odd it was to see someone walking on the Stand",
    "why": "Notanish yigit nima maqsadda kelgani matnda aytilmagan. No Information."
   }
  ]
 },
 {
  "n": 17,
  "title": "USA: Still looking for Gold",
  "body": "There are still prospectors searching for gold in the American Far West\n\nGOLD has always attracted people. At the start of the twentieth century, and during the nineteenth century, thousands of men went to the West of the United States, looking for gold. The \"Gold Rush\" lasted, on and off, for sixty or seventy years, then it finished.\n\nBut today, there are still men and women out in the West, looking for gold, as Andrew Rossiter found out.\n\nIt was a blistering hot day in summer. The track leading to \"Atlantic City\" (Wyoming) was dry and bumpy, and great clouds of dust blew up behind the car. In 1870, Atlantic City was a prosperous town, with several thousand inhabitants, mostly men. It was a strange place to find a town, mind you, hidden in little gulch in the middle of a wide scrub desert.\n\nAtlantic City began life as a staging post on one of the transcontinental trails, taken by emigrants en route for California. Soon however it became a roaring gold town, where people could make (or lose) their fortunes in a day. Few did make a fortune; many found enough gold to keep them happy, but a lot found nothing, or nothing much.\n\nThen, about seven years after the gold rush began, it finished. Suddenly, it seemed that there was no gold left in the ground. The miners packed their tools, their pans, and their bags, and went off somewhere else, to try their luck again. There were no more emigrants either; as soon as the first transcontinental railroad had opened in 1869, the old emigrant trails had been completely abandoned. The hotels closed, the shops closed, the bars closed, the jail closed; and before long, Atlantic City was a ghost town, uninhabited except by the occasional rancher or hunter, and the wandering coyotes. I didn't expect to find much in Atlantic City. I knew that a few people lived there again now, some of the old houses had been restored, and others had been built. But I didn't expect much.\n\nWe drove round a dusty bend, and there in front of us lay the town, a couple of dozen wooden buildings, some old, some new, and mostly pretty plain.\n\nSurprisingly there was a fire-station; then, in the middle of the town, a wooden \"saloon\". A drink, I thought, something to drink at last.\n\nI stopped the car in a cloud of dust, and we walked up the steps and into the saloon. I saw an old man called Brad. Brad hadn't spent all his life digging in tunnels and panning in streams, to find a few ounces of gold. In fact, he was a retired businessman, looking for gold as a hobby, and a nice way to pass the time in a wild, lonely and beautiful part of North America.\n\nMore than gold, no doubt, Brad was looking for a way of life, a dream of the past. If he had found no gold, he would not have been too worried. Few of today's amateur gold prospectors are there for the money; they're there for the fun, the isolation, and the nostalgia!. The legend of the west will go on inspiring people for many many years.",
  "questions": [
   {
    "q": "'Gold Rush'...",
    "options": [
     "happened only in the twentieth century.",
     "existed with some pauses.",
     "is continuing till now.",
     "lasted at least 70 years."
    ],
    "answer": "B"
   },
   {
    "q": "In the first paragraph, Andrew Rossiter was mentioned in order to",
    "options": [
     "how gold is necessary for both men and women.",
     "tell that gold searching is alive even today.",
     "give example of a gold searcher.",
     "to mean he was rich by finding gold"
    ],
    "answer": "B"
   },
   {
    "q": "In 1870 in Atlantic City",
    "options": [
     "more men than women used to live.",
     "the weather was the driest in the country.",
     "seven thousand people lived.",
     "poverty was common."
    ],
    "answer": "A"
   },
   {
    "q": "Emigrants used to",
    "options": [
     "prefer Atlantic City to California.",
     "build a railway system in Atlantic City which led to California.",
     "go through Atlantic City to reach California.",
     "avoid visiting Atlantic City while traveling."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "By the time transcontinental rail came to Wyoming, the city had been a crowded city.",
    "answer": "B"
   },
   {
    "s": "None of the houses built during 'Gold Rush' period exists today.",
    "answer": "B"
   },
   {
    "s": "The author did not expect a fire station to exist in Atlantic City.",
    "answer": "A"
   },
   {
    "s": "Brad had a business that sold gold.",
    "answer": "C"
   },
   {
    "s": "Majority of gold searchers in Atlantic city today are hoping to make a fortune.",
    "answer": "B"
   }
  ],
  "answers": [
   "B",
   "B",
   "A",
   "C",
   "B",
   "B",
   "A",
   "C",
   "B"
  ],
  "explain": [
   {
    "evidence": "The \"Gold Rush\" lasted, on and off, for sixty or seventy years",
    "why": "\"On and off\" — vaqti-vaqti bilan, ya'ni tanaffuslar bilan davom etgan. B."
   },
   {
    "evidence": "But today, there are still men and women out in the West, looking for gold, as Andrew Rossiter found out",
    "why": "Andrew Rossiter oltin qidirish bugun ham davom etayotganini ko'rsatish uchun tilga olingan. B."
   },
   {
    "evidence": "with several thousand inhabitants, mostly men",
    "why": "1870-yilda aholining asosiy qismi erkaklar bo'lgan. A."
   },
   {
    "evidence": "taken by emigrants en route for California",
    "why": "Muhojirlar Kaliforniyaga ketayotib Atlantic Citydan o'tgan. C."
   },
   {
    "evidence": "as soon as the first transcontinental railroad had opened in 1869, the old emigrant trails had been completely abandoned",
    "why": "Temir yo'l ochilgach eski yo'llar tashlab ketilgan va shahar bo'shab qolgan. False."
   },
   {
    "evidence": "some of the old houses had been restored",
    "why": "Eski uylarning ba'zilari qayta tiklangan, demak ular bugun ham bor. False."
   },
   {
    "evidence": "Surprisingly there was a fire-station",
    "why": "\"Surprisingly\" — kutilmaganda: muallif u yerda o't o'chirish stansiyasini kutmagan. True."
   },
   {
    "evidence": "he was a retired businessman, looking for gold as a hobby",
    "why": "Brad nafaqadagi biznesmen, oltinni hobbi sifatida qidiradi; oltin sotish biznesi haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "Few of today's amateur gold prospectors are there for the money",
    "why": "Bugungi oltin qidiruvchilarning ozchiligi boylik uchun keladi, ko'pchiligi zavq uchun. False."
   }
  ]
 },
 {
  "n": 18,
  "title": "Snakes",
  "body": "Snakes are elongated, legless, carnivorous reptiles that can be distinguished from legless lizards by their lack of eyelids and external ears. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung.\n\nLiving snakes are found on every continent except Antarctica, and on most smaller land masses; exceptions include some large islands, such as Ireland, Iceland, Greenland, the Hawaiian archipelago, and the islands of New Zealand, and many small islands of the Atlantic and central Pacific oceans. Additionally, sea snakes are widespread throughout the Indian and Pacific Oceans. More than 20 families are currently recognized. They range in size from the tiny, 10.4 cm (4.1 in)-long thread snake to the reticulated python of 6.95 meters (22.8 ft) in length. The fossil species Titanoboa cerrejonensis was 12.8 meters (42 ft) long. Snakes are thought to have evolved from either burrowing or aquatic lizards, perhaps during the Jurassic period.\n\nVenom\n\nMost species are nonvenomous and those that have venom use it primarily to kill and subdue prey rather than for self-defense. Some possess venom potent enough to cause painful injury or death to humans. The colloquial term \"poisonous snake\" is generally an incorrect label for snakes. A poison is inhaled or ingested, whereas venom produced by snakes is injected into its victim via fangs. It is worthwhile noting that certain birds, mammals, and other snakes (such as king snakes) that prey on venomous snakes have developed resistance and even immunity to certain venoms. Nonvenomous snakes either swallow prey alive or kill by constriction.\n\nFeeding and diet\n\nAll snakes are strictly carnivorous, eating small animals including lizards, frogs, other snakes, small mammals, birds, eggs, fish, snails or insects. Because snakes cannot bite or tear their food to pieces, they must swallow prey whole. The body size of a snake has a major influence on its eating habits. Smaller snakes eat smaller prey. Juvenile pythons might start out feeding on lizards or mice and graduate to small deer or antelope as an adult, for example. After eating, snakes become inactive while the process of digestion takes place.",
  "questions": [
   {
    "q": "Snakes differ from reptiles by the absence of",
    "options": [
     "legs and bones",
     "jaws and heads",
     "outer ears and eyelids",
     "skins and legs"
    ],
    "answer": "C"
   },
   {
    "q": "What does \"paired organs\" mean about snakes?",
    "options": [
     "their double organs stay one behind the other.",
     "their lung is in front of a kidney.",
     "their heart and kidney are side by side.",
     "legs are situated close to the kidney."
    ],
    "answer": "A"
   },
   {
    "q": "Titanoboa cerrejonensis",
    "options": [
     "lived in the past",
     "lived in the sea",
     "looked like lizards",
     "was 42 meters long"
    ],
    "answer": "A"
   },
   {
    "q": "Kingsnakes",
    "options": [
     "swallow preys alive",
     "has immune against other snakes' venom",
     "don't eat mammals",
     "cannot eat other snakes"
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "Snakes can be found everywhere in the world.",
    "answer": "B"
   },
   {
    "s": "Some living snakes may be 12.8 meters (42 ft) long.",
    "answer": "B"
   },
   {
    "s": "Not all species kill their preys using venomous bites.",
    "answer": "A"
   },
   {
    "s": "Young python feed on only mice and lizards.",
    "answer": "C"
   },
   {
    "s": "Snakes don't eat other prey while digesting a recently eaten animal.",
    "answer": "C"
   }
  ],
  "answers": [
   "C",
   "A",
   "A",
   "B",
   "B",
   "B",
   "A",
   "C",
   "C"
  ],
  "explain": [
   {
    "evidence": "by their lack of eyelids and external ears",
    "why": "Ilonlarda ko'z qovog'i va tashqi quloq yo'q. C."
   },
   {
    "evidence": "appear one in front of the other instead of side by side",
    "why": "Juft a'zolar yonma-yon emas, biri ikkinchisining oldida joylashgan. A."
   },
   {
    "evidence": "The fossil species Titanoboa cerrejonensis was 12.8 meters (42 ft) long",
    "why": "\"Fossil\" — qazilma: bu ilon o'tmishda yashagan. A. D noto'g'ri: uzunligi 42 metr emas, 42 fut (12,8 m)."
   },
   {
    "evidence": "other snakes (such as king snakes) that prey on venomous snakes have developed resistance and even immunity",
    "why": "Qirol ilonlari boshqa ilonlar zahariga immunitet hosil qilgan. B."
   },
   {
    "evidence": "Living snakes are found on every continent except Antarctica",
    "why": "Antarktida va ba'zi orollarda ilon yo'q. False."
   },
   {
    "evidence": "They range in size from the tiny, 10.4 cm (4.1 in)-long thread snake to the reticulated python of 6.95 meters",
    "why": "Bugungi eng uzun ilon 6,95 m; 12,8 m faqat qazilma Titanoboa. False."
   },
   {
    "evidence": "Most species are nonvenomous",
    "why": "Ko'p turlar zaharsiz, ular o'ljani tirikligicha yutadi yoki bo'g'adi. True."
   },
   {
    "evidence": "Juvenile pythons might start out feeding on lizards or mice",
    "why": "Yosh pitonlar kaltakesak yoki sichqondan boshlashi mumkin, lekin \"faqat\" shularni yeyishi aytilmagan. No Information."
   },
   {
    "evidence": "After eating, snakes become inactive while the process of digestion takes place",
    "why": "Ovqatdan keyin harakatsiz bo'lishi aytilgan, lekin bu vaqtda boshqa o'lja yemasligi haqida aniq gap yo'q. No Information."
   }
  ]
 },
 {
  "n": 19,
  "title": "",
  "body": "In 2010, the planetary defence team at NASA had identified and logged 90 per cent of the asteroids near Earth measuring 1km wide. These 'near-Earth objects', or NEOs, are the size of mountains and include anything within 50 million kilometres of Earth's orbit. With an estimated 50 left to record, NASA says none of the 887 it knows about are a significant danger to the planet.\n\nNow NASA is working towards recording some of the smaller asteroids, those measuring 140 metres wide or more. Of the 25,000 estimated asteroids of this size, so far about 8,000 have been registered, leaving 17,000 unaccounted for. Considering that a 19-metre asteroid that exploded above the city of Chelyabinsk in Russia in 2013 injured 1,200 people, these middle-sized asteroids would be a serious danger if they enter Earth's orbit.\n\nWhether NASA can find the remaining middle-sized NEOs depends on getting the money to build NEOCam, a 0.5-metre space telescope which would use infrared light to locate asteroids. If it did get the money, it could probably achieve its goal in ten years. Once logged, the planetary defence team would still need to work out how to defend the planet against being hit by the truly worrying asteroids - the PHAs.\n\n'Potentially Hazardous Asteroids' are rocks close enough to pass within 7.5 million kilometres of Earth's orbit. NASA has created a map of 1,400 PHAs, none of which are expected to be a threat in the next one hundred years. With technology already available, NASA can track these objects and make predictions about possible impact, at which point two defence solutions could be launched.\n\nThe first is DART - the Double Asteroid Redirection Test. Plans are scheduled to test DART on the moon of an asteroid called Didymos. 'Didymoon' is 150 metres wide, orbiting its 800-metre mother, and hopefully the impact of DART will knock it out of its orbit enough for Earth-based telescopes to pick up.\n\nAnother suggested defence against a PHA on course to hit Earth is to blow it up using a nuclear weapon. It may sound like a plot from a film, and it was the subject of the 1998 film Armageddon, but the Hypervelocity Asteroid Mitigation Mission for Emergency Response (HAMMER) is a genuine NASA proposal. The eight-ton rockets would be fired at an approaching asteroid with the hope of bumping it off course. If the asteroid was too close to Earth for this plan to work, the rockets would carry nuclear bombs to blow it up instead.",
  "questions": [
   {
    "q": "Almost all the NEOs which NASA identified are",
    "options": [
     "not dangerous for us",
     "not recorded fully.",
     "much larger than mountains",
     "travel Earth's orbit in a day."
    ],
    "answer": "A"
   },
   {
    "q": "Which is true about 1,200 people in the second paragraph?",
    "options": [
     "They all died in 2003.",
     "They left Chelyabinsk due to the danger of falling asteroid.",
     "They suffered from a middle-sized asteroid.",
     "NASA asked them questions about asteroids they saw."
    ],
    "answer": "C"
   },
   {
    "q": "Exploring the middle-sized dangerous asteroids",
    "options": [
     "is successfully completed in less than a year.",
     "requires new technology, funding and a decade.",
     "depends on NASA's sponsorship of the new project.",
     "is achievable without a NEOCam telescope."
    ],
    "answer": "B"
   },
   {
    "q": "Why was the film Armageddon mentioned in the text?",
    "options": [
     "to show how new technology was first used.",
     "to explain the process of producing new technology.",
     "to give an example of a NASA film.",
     "to give a clear picture of a new technology"
    ],
    "answer": "D"
   }
  ],
  "statements": [
   {
    "s": "Earth does not appear to be in danger from asteroids that measure one kilometer wide.",
    "answer": "A"
   },
   {
    "s": "We don't need to worry about small asteroids under 20 meters wide.",
    "answer": "B"
   },
   {
    "s": "A special telescope will provide a complete defense against asteroids hitting Earth.",
    "answer": "B"
   },
   {
    "s": "PHAs are the biggest concern, but they're still not an immediate threat.",
    "answer": "A"
   },
   {
    "s": "Didymoon's orbit is not stable.",
    "answer": "C"
   }
  ],
  "answers": [
   "A",
   "C",
   "B",
   "D",
   "A",
   "B",
   "B",
   "A",
   "C"
  ],
  "explain": [
   {
    "evidence": "NASA says none of the 887 it knows about are a significant danger to the planet",
    "why": "Ma'lum bo'lgan 887 ta katta asteroiddan hech biri Yer uchun xavfli emas. A."
   },
   {
    "evidence": "a 19-metre asteroid that exploded above the city of Chelyabinsk in Russia in 2013 injured 1,200 people",
    "why": "1200 kishi o'rtacha kattalikdagi asteroid portlashidan jabrlangan. C. A noto'g'ri: ular o'lmagan, jarohatlangan, voqea 2013-yilda bo'lgan."
   },
   {
    "evidence": "depends on getting the money to build NEOCam",
    "why": "Buning uchun yangi teleskop, mablag' va taxminan o'n yil kerak. B."
   },
   {
    "evidence": "It may sound like a plot from a film, and it was the subject of the 1998 film Armageddon",
    "why": "Film yangi texnologiyani (asteroidni portlatish) tasavvur qilishni osonlashtirish uchun tilga olingan. D."
   },
   {
    "evidence": "none of the 887 it knows about are a significant danger to the planet",
    "why": "1 km li asteroidlar Yer uchun jiddiy xavf tug'dirmaydi. True."
   },
   {
    "evidence": "a 19-metre asteroid that exploded above the city of Chelyabinsk in Russia in 2013 injured 1,200 people",
    "why": "Atigi 19 metrli asteroid ham 1200 kishini jarohatlagan, demak kichiklaridan ham xavotirlanish kerak. False."
   },
   {
    "evidence": "Once logged, the planetary defence team would still need to work out how to defend the planet",
    "why": "Teleskop asteroidlarni faqat topadi; himoya uchun alohida yechim kerak. False."
   },
   {
    "evidence": "none of which are expected to be a threat in the next one hundred years",
    "why": "PHAlar eng xavotirli, lekin yaqin yuz yilda xavf yo'q. True."
   },
   {
    "evidence": "hopefully the impact of DART will knock it out of its orbit",
    "why": "Didymoonning orbitasini o'zgartirish rejalashtirilgan, lekin orbita hozir beqarorligi haqida ma'lumot yo'q. No Information."
   }
  ]
 },
 {
  "n": 20,
  "title": "",
  "body": "Although he died almost half a century ago, Elvis Presley, the \"King of Rock 'n' Roll\", is still a hero for millions all over the world and Graceland, his home in Memphis, is a major tourist attraction.\n\nIt's hot and sticky in the summer in Memphis, Tennessee. The sea is hundreds of miles away from this city on the Mississippi river, yet that doesn't stop the tourists from coming. Some come just once, others make the trip regularly. These are the real fans, those for whom rock 'n' roll has only one voice, that of \"the King\" himself: Elvis Presley.\n\nMemphis is the city where Elvis lived for most of his professional life; and though he died in 1977, Memphis has not forgotten him. On the contrary, America's most famous rocker (the only one to have had his picture on a set of U.S. postage stamps!) has become the city's most famous son — and seems to get more and more important as the years go by.\n\nBest of Highway 51, just south of the city, is Graceland; this is the house which Elvis bought after he became a star, and which he kept till the day he died. Today it belongs to his daughter Lisa Marie, but is run as an Elvis Presley museum; it is the second most visited house in the U.S.A., after the White House.\n\nThe people who work at Graceland seem to be some of Elvis's biggest fans. They live and breathe Elvis! In the cafe, there is day-long Elvis on the music system; and as visitors are taken round Graceland, their guides talk about Elvis as if he were more than the King — more like the God of rock 'n' roll.\n\n\"Is it true Elvis died of drugs?\" asks a non-believer in the crowd of visitors being shown round the house.\n\nMost of the other visitors look at her angrily or in astonishment, as if she has said something terrible.\n\n\"Oh no,\" says the tour guide. For a moment her permanent cheek-to-cheek smile changes into a frown of discontent. \"Oh no, that's just a story, made up to discredit him. You know, Elvis had plenty of friends, but he sure had some enemies too. They made up a whole bunch of stories about him. There's no way Elvis took drugs. You know, he was even a federal agent. You'll see his card downstairs.\"\n\nThen the guide's 1000-watt smile springs back, and she changes the subject, plunging into eulogies about the wonderful style with which Elvis decorated his house.\n\nFor a poor boy brought up in a two-room shack in rural Mississippi, it probably was fairly good style. Elvis's tastes were brash, rather like those of many other ordinary unsophisticated folk. He liked the good things in life: girls, guitars and Cadillacs — and he sang about them regularly. That was one of the reasons why he became such a star.\n\nThe other reason was, of course, that Elvis really was a good artist, and he really did change the face of American popular music. Before Elvis, the only real rock 'n' roll singers were black, and their style was not quite the same as that of Elvis. Elvis was the first white rocker, and thus — in an age where black music, except jazz, was not widely appreciated outside the black community — he opened up a whole new branch of American popular music. As a young rocker, he was America's biggest star, and this reputation followed him into middle age.\n\nHis energy and his looks, however, did not. By the time he was forty, Elvis was a sick man, dependent on drugs. The thin athletic youth had become a fat prematurely-aged man. It was not surprising, really, that he did not survive beyond the age of 42.\n\nAs for his reputation, that is a different story. Elvis may have died in 1977; his influence, and his reputation, are still very much alive today.",
  "questions": [
   {
    "q": "Some of the tourists coming to Elvis Presley's home",
    "options": [
     "want never to come back again.",
     "visit there regularly.",
     "saw Elvis Presley in real life.",
     "like singing Elvis Presley's songs."
    ],
    "answer": "B"
   },
   {
    "q": "Which is the most frequently visited home in the US?",
    "options": [
     "Elvis Presley's house",
     "Elvis Presley's daughter's house",
     "White House",
     "Michael Jackson's house"
    ],
    "answer": "C"
   },
   {
    "q": "What annoyed most guests at Elvis Presley's house in the passage?",
    "options": [
     "tourists guide's explanation",
     "Elvis's daughter's attitude",
     "visitor's unexpected question",
     "the truth about Elvis Presley"
    ],
    "answer": "C"
   },
   {
    "q": "At the last years of his life, Elvis",
    "options": [
     "was dependent on medicines",
     "was a healthy mature man",
     "was addicted to smoking and drugs",
     "was very thin because of sickness."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "Elvis Presley is one of the few rockers whose picture appeared on the US stamps.",
    "answer": "B"
   },
   {
    "s": "Elvis paid a sums of money to buy his house in Graceland.",
    "answer": "C"
   },
   {
    "s": "Elvis worked as a national spy.",
    "answer": "A"
   },
   {
    "s": "Elvis was very healthy until his forty.",
    "answer": "B"
   },
   {
    "s": "Elvis's his impact, and his fame is still appreciated nowadays.",
    "answer": "A"
   }
  ],
  "answers": [
   "B",
   "C",
   "C",
   "A",
   "B",
   "C",
   "A",
   "B",
   "A"
  ],
  "explain": [
   {
    "evidence": "Some come just once, others make the trip regularly",
    "why": "Ba'zi sayyohlar bir marta, boshqalari muntazam keladi. B."
   },
   {
    "evidence": "it is the second most visited house in the U.S.A., after the White House",
    "why": "Eng ko'p tashrif buyuriladigan uy Oq uy, Graceland ikkinchi o'rinda. C."
   },
   {
    "evidence": "Most of the other visitors look at her angrily or in astonishment",
    "why": "Bir ayolning Elvis giyohvand moddadan o'lganmi degan kutilmagan savoli boshqalarni jahlini chiqargan. C."
   },
   {
    "evidence": "By the time he was forty, Elvis was a sick man, dependent on drugs",
    "why": "Umrining oxirida Elvis dori-darmonga qaram bo'lib qolgan. A. Chekish haqida gap yo'q, u ozg'in emas, semiz bo'lgan."
   },
   {
    "evidence": "the only one to have had his picture on a set of U.S. postage stamps",
    "why": "Elvis surati AQSh markalarida bo'lgan yagona rok xonanda. \"Bir nechtadan biri\" degani noto'g'ri: False."
   },
   {
    "evidence": "this is the house which Elvis bought after he became a star",
    "why": "Uyni sotib olgani aytilgan, lekin qancha pul to'lagani haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "he was even a federal agent",
    "why": "Gid Elvis hatto federal agent bo'lganini aytadi. Kitob kalitida True."
   },
   {
    "evidence": "By the time he was forty, Elvis was a sick man",
    "why": "Qirq yoshida Elvis allaqachon kasal bo'lgan. False."
   },
   {
    "evidence": "his influence, and his reputation, are still very much alive today",
    "why": "Elvisning ta'siri va shuhrati bugun ham saqlanib qolgan. True."
   }
  ]
 },
 {
  "n": 21,
  "title": "",
  "body": "social media, magazines and shop windows bombard people daily with things to buy, and British consumers are buying more clothes and shoes than ever before. Online shopping means it is easy for customers to buy without thinking, while major brands offer such cheap clothes that they can be treated like disposable items - worn two or three times and then thrown away.\n\nIn Britain, the average person spends more than £1,000 on new clothes a year, which is around four per cent of their income. That might not sound like much, but that figure hides two far more worrying trends for society and for the environment. First, a lot of that consumer spending is via credit cards. British people currently owe approximately £670 per adult to credit card companies. That's 66 per cent of the average wardrobe budget. Also, not only are people spending money they don't have, they're using it to buy things they don't need. Britain throws away 300,000 tons of clothing a year, most of which goes into landfill sites.\n\nPeople might not realize they are part of the disposable clothing problem because they donate their unwanted clothes to charities. But charity shops can't sell all those unwanted clothes. 'Fast fashion' goes out of fashion as quickly as it came in and is often too poor quality to recycle; people don't want to buy it second-hand. Huge quantities end up being thrown away, and a lot of clothes that charities can't sell are sent abroad, causing even more economic and environmental problems.\n\nHowever, a different trend is springing up in opposition to consumerism - the 'buy nothing' trend. The idea originated in Canada in the early 1990s and then moved to the US, where it became a rejection of the overspending and overconsumption of Black Friday and Cyber Monday during Thanksgiving weekend. On Buy Nothing Day people organize various types of protests and cut up their credit cards. Throughout the year, Buy Nothing groups organize the exchange and repair of items they already own.\n\nThe trend has now reached influencers on social media who usually share posts of clothing and make-up that they recommend for people to buy. Some YouTube stars now encourage their viewers not to buy anything at all for periods as long as a year. Two friends in Canada spent a year working towards buying only food. For the first three months they learned how to live without buying electrical goods, clothes or things for the house. For the next stage, they gave up services, for example haircuts, eating out at restaurants or buying petrol for their cars. In one year, they'd saved $55,000. The changes they made meant two fewer cars on the roads, a reduction in plastic and paper packaging and a positive impact on the environment from all the energy saved. If everyone followed a similar plan, the results would be impressive. But even if you can't manage a full year without going shopping, you can participate in the anti-consumerist movement by refusing to buy things you don't need. Buy Nothing groups send a clear message to companies that people are no longer willing to accept the environmental and human cost of overconsumption.",
  "questions": [
   {
    "q": "How much income do the Britons spend on buying clothes on average every year?",
    "options": [
     "more than a half",
     "majority",
     "none",
     "less than a tenth"
    ],
    "answer": "D"
   },
   {
    "q": "Which is not mentioned in the text as a worrying British lifestyle?",
    "options": [
     "They spend on items that are beyond their budget.",
     "They send on clothes that they don't need actually.",
     "They drop too many clothes into the rubbish.",
     "They wear clothes until they are too old to wear."
    ],
    "answer": "D"
   },
   {
    "q": "What is the idea behind the 'buy nothing' trend?",
    "options": [
     "stop purchasing completely",
     "prevent excessive spending on shopping",
     "ban Block Friday shopping offers",
     "stop getting loans from credit companies"
    ],
    "answer": "B"
   },
   {
    "q": "What do Nothing groups tell production companies?",
    "options": [
     "People are against damage to nature and society because of consumerism.",
     "People don't want to spend much money on items.",
     "Online shopping will replace traditional shops.",
     "Companies should not generate too much rubbish."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "people buy clothes because they want to throw them away.",
    "answer": "B"
   },
   {
    "s": "The amount the average Briton owes on credit cards is one-third of the amount they spend on clothes each year.",
    "answer": "B"
   },
   {
    "s": "Charities can find ways to use clothes even if they are not very good quality.",
    "answer": "B"
   },
   {
    "s": "Buy Nothing Day is popular only in the UK.",
    "answer": "C"
   },
   {
    "s": "If everyone followed the Buy Nothing idea, the environment would benefit.",
    "answer": "A"
   }
  ],
  "answers": [
   "D",
   "D",
   "B",
   "A",
   "B",
   "B",
   "B",
   "C",
   "A"
  ],
  "explain": [
   {
    "evidence": "which is around four per cent of their income",
    "why": "Daromadning taxminan 4 foizi, ya'ni o'ndan biridan kam. D."
   },
   {
    "evidence": "worn two or three times and then thrown away",
    "why": "Matnda qarz hisobiga xarid, keraksiz narsa olish, ko'p kiyim tashlash tilga olingan. Kiyimni eskirguncha kiyish aksincha, bu muammo emas. D."
   },
   {
    "evidence": "a rejection of the overspending and overconsumption",
    "why": "\"Hech narsa sotib olmaslik\" g'oyasi ortiqcha xarajat va iste'molga qarshi. B. A emas: ular faqat keraksiz narsani olmaslikni tavsiya qiladi."
   },
   {
    "evidence": "people are no longer willing to accept the environmental and human cost of overconsumption",
    "why": "Bu guruhlar kompaniyalarga odamlar haddan tashqari iste'molning tabiat va jamiyatga zararini qabul qilmasligini bildiradi. A."
   },
   {
    "evidence": "Online shopping means it is easy for customers to buy without thinking",
    "why": "Odamlar o'ylamay sotib oladi va kiyimni tez tashlaydi, lekin tashlash uchun sotib olishmaydi. False."
   },
   {
    "evidence": "That's 66 per cent of the average wardrobe budget",
    "why": "Qarz kiyim xarajatining uchdan biri emas, 66 foizi (uchdan ikkisi). False."
   },
   {
    "evidence": "charity shops can't sell all those unwanted clothes",
    "why": "Xayriya do'konlari sifatsiz kiyimlarni sota olmaydi, ko'pi tashlanadi. False."
   },
   {
    "evidence": "The idea originated in Canada in the early 1990s and then moved to the US",
    "why": "G'oya Kanadada paydo bo'lib, AQShga o'tgan; faqat Britaniyada mashhur degan gap yo'q. No Information."
   },
   {
    "evidence": "If everyone followed a similar plan, the results would be impressive",
    "why": "Hamma shunday qilsa, atrof-muhitga ta'siri katta bo'lardi. True."
   }
  ]
 },
 {
  "n": 22,
  "title": "",
  "body": "It is perhaps the most reproduced, recycled and ripped-off image of the 20th Century. Che Guevara, his eyes framed by heavy brows, a single-starred beret pulled over his unruly hair, stares out of the shot with glowering intensity. It's now more than 50 years since the Argentine-born rebel was shot dead, so any young radicals who cheered on his revolutionary struggles in Cuba and Bolivia are well into middle age.\n\nBut the image has been infinitely repeated - emblazoned on T-shirts and sprayed on to walls, transformed into pop art and used to wrap ice-creams and sell cigarettes - and its appeal has not faded. \"There is no other image like it. What other image has been sustained in this way?\" asks Trisha Ziff, the curator of a touring exhibition on the iconography of Che. \"Che Guevara has become a brand. And the brand's logo is the image, which represents change. It has becomes the icon of the outside thinker, at whatever level - whether it is anti-war, pro-green or anti-globalisation,\" she says.\n\nThe unchecked proliferation of the picture - based on a photograph by Alberto Korda in 1960 - is partly due to a political choice by Korda and others not to demand payment for non-commercial use of the image. Jim Fitzpatrick, who produced the well-known high-contrast drawing in the late 1960s as a young graphic artist, said he actively wanted his art to be spread. \"I deliberately designed it to breed like rabbits,\" he says of his image, which removes the original photograph's shadows and volume to create a stark and emblematic graphic portrait. \"I was determined that the image should receive the broadest possible circulation,\" he adds.\n\nFor Ms Ziff, Che Guevara's murder also marks the beginning of the mythical image. \"The birth of the image happens at the death of Che in October 1967,\" she says. \"He was good-looking, he was young, but more than that, he died for his ideals, so he automatically becomes an icon.\"\n\nThe story of the original photograph, of how it left Cuba and was carried by admirers to Europe before being reinterpreted in Mr Fitzpatrick's iconic drawing, is a fascinating journey in its own right. Alberto Korda captured his famous frame on 5 March 1960 during a mass funeral in Havana. A day earlier, a French cargo ship had exploded in the city's harbour, killing some 80 Cubans - an act Fidel Castro blamed on the US. Korda, Fidel Castro's official photographer, describes Che's expression in the picture, which he labelled \"Guerrillero Heroico\" (the heroic fighter), as \"encabronadao y dolente\" - angry and sad. Unpublished, the picture was seen only by those who passed through Korda's studio, where it hung on a wall.\n\nOne man who brought the image to Europe was the leftist Italian intellectual, Giangiacomo Feltrinelli, who distributed posters across Italy in 1967. After that, Korda's photograph made an appearance in several European magazines. Mr Fitzpatrick first came across a tiny version of it in the German weekly. Only months later, when he finally got his hands on a larger version of the photograph, was he able to produce the image that has such universal appeal. \"I'd got an original copy of the image sent to me by a guy involved with a group of Dutch anarchists, called the Provo.\"\n\nAfter Che Guevara's death, an outraged Mr Fitzpatrick furiously reprinted originals of the poster and sent it to left-wing political activist groups across Europe. Mr Fitzpatrick's version of Che arrived on the continent as many countries were changing, says Ms Ziff. \"His death was followed by demonstrations, first in Milan and then elsewhere. Very soon afterwards there was the Prague Spring and May '68 in France. Europe was in turmoil. People wanted change, disruption and rebellion and he became a symbol of that change.\"\n\nAs time went on, the meaning and the man represented by the image became separated in the western context, Ms Ziff explains. But in Latin America, she points out, Che Guevara's face remains a symbol of armed revolution and indigenous struggle. Combining capitalism and commerce, religion and revolution, the icon remains unchallenged, Ms Ziff says. \"There is no other image that remotely takes us to all these different places.\"",
  "questions": [
   {
    "q": "How does Che appear in the famous image?",
    "options": [
     "he seems content",
     "he's not looking at the photographer",
     "he's wearing something around his neck",
     "he looks clean-cut and tidy"
    ],
    "answer": "B"
   },
   {
    "q": "According to Trisha Ziff, who does the image represent well?",
    "options": [
     "ice cream and cigarette sellers",
     "those supporting military intervention",
     "ones who may be looking for revolutionary change",
     "the poorest generations"
    ],
    "answer": "C"
   },
   {
    "q": "What didn't the graphic image's creator try to make money from its use?",
    "options": [
     "he didn't need the money",
     "to help its spread",
     "he considers profit to be 'anti-revolutionary.'",
     "he didn't know it was being used without permission"
    ],
    "answer": "B"
   },
   {
    "q": "Where was the original photo in the years after it was taken?",
    "options": [
     "in possession of the photographer",
     "on tour throughout Europe",
     "in Fidel Castro's office in Havana",
     "it remained undeveloped"
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "In the picture called \"Guerrillero Heroico\" Che was described as cheerful.",
    "answer": "B"
   },
   {
    "s": "Korda's photo published in several articles before Ciangiacomo Feltrelli spread posters in Italy.",
    "answer": "B"
   },
   {
    "s": "Mr Fitzpatrick earned a huge amount of money by sending Che Guevara's posters to political activist groups in Europe.",
    "answer": "C"
   },
   {
    "s": "Che Guevara became an inspiration to protests in Europe in the late 1970s.",
    "answer": "A"
   },
   {
    "s": "According to Ziff, the image's legacy lasts because it means many things to many people.",
    "answer": "A"
   }
  ],
  "answers": [
   "B",
   "C",
   "B",
   "A",
   "B",
   "B",
   "C",
   "A",
   "A"
  ],
  "explain": [
   {
    "evidence": "stares out of the shot with glowering intensity",
    "why": "Che suratdan tashqariga, ya'ni fotografga emas, uzoqqa qarab turibdi. B."
   },
   {
    "evidence": "It has becomes the icon of the outside thinker",
    "why": "Ziff fikricha, rasm o'zgarish izlovchi, boshqacha fikrlovchilarning ramzi. C."
   },
   {
    "evidence": "I was determined that the image should receive the broadest possible circulation",
    "why": "Fitzpatrick rasm iloji boricha keng tarqalishini xohlagani uchun pul talab qilmagan. B."
   },
   {
    "evidence": "Unpublished, the picture was seen only by those who passed through Korda's studio, where it hung on a wall",
    "why": "Rasm uzoq vaqt fotografning studiyasida devorda osilib turgan. A."
   },
   {
    "evidence": "as \"encabronadao y dolente\" - angry and sad",
    "why": "Korda Cheni jahldor va g'amgin deb ta'riflagan, xursand emas. False."
   },
   {
    "evidence": "After that, Korda's photograph made an appearance in several European magazines",
    "why": "Jurnallarda Feltrinelli plakatlaridan keyin chiqqan, oldin emas. False."
   },
   {
    "evidence": "furiously reprinted originals of the poster and sent it to left-wing political activist groups across Europe",
    "why": "Plakatlarni yuborgan, lekin bundan pul topgani aytilmagan; aksincha, u keng tarqalishini xohlagan. No Information."
   },
   {
    "evidence": "Europe was in turmoil. People wanted change, disruption and rebellion and he became a symbol of that change",
    "why": "Che Yevropadagi norozilik harakatlari ramziga aylangan. Matnda bu 1967–68-yillar, lekin kitob kalitida True."
   },
   {
    "evidence": "There is no other image that remotely takes us to all these different places",
    "why": "Rasm ko'p narsani anglatadi: kapitalizm, savdo, din, inqilob. True."
   }
  ]
 },
 {
  "n": 23,
  "title": "",
  "body": "Juliette Brindak started a social networking site for tweens when she was 16, and it's doing better than ever. Miss O and Friends generates 10 million monthly visits, a twenty-fold increase from its inception in 2005. It's also worth around $15 million, according to early investor Procter & Gamble. When she was ten, Brindak drew characters for a set of five friends she called \"Cool Girls,\" who were all inspired by real-life girls. The main cool girl, Miss O, represents her younger sister Olivia. The set of \"Cool Girls\" would eventually become \"Miss O and Friends.\"\n\nIn the beginning — like many startups — Brindak reached out to family members and friends for investment money. Her mother, a graphic designer, brought her drawings to life while her father, who has a background in business, aided in the fundamentals of creating the company. What started out as a few sketches on the way home from a family vacation quickly ballooned into a haven for millions of adolescents. The site was ranked the third largest girls-only Web site in 2011, according to Inc. Magazine.\n\nNow, at 23, Brindak isn't as in tune with what tween girls are looking for, so she uses the site as an avenue to understand their needs. Through polls, quizzes, and the \"Gir12Girl\" wall, members are able to keep Brindak updated. \"In November 2011, girls were writing on the Gir12Girl wall asking if we could get them tickets to a One Direction concert. This was the first time we ever heard about One Direction and we were able to create a concert/sponsorship with Simon & Schuster's 'Dork Diaries' books and winning tickets.\" She's made it possible — through contests — for her users to see celebrities, such as Justin Bieber, Miley Cyrus and the Jonas Brothers, in concert. Currently, she's offering an all-expense paid trip to Canada for four lucky fans to see Taylor Swift's show.\n\nThrough high school and college, the site has continued to improve. When it was originally launched, there was little more than a few catchy graphics. \"There was a homepage, which had the five Miss O characters and simple flash animations,\" Brindak says. \"There was hardly anything to it, but it was definitely a start.\" Now the site boasts message boards, quizzes, games, music, and more.\n\nBut managing the site as a college student at Washington University in St. Louis was no easy task. \"One teacher, who ironically was an entrepreneur and taught my class on social entrepreneurship, was the only one who wouldn't budge about dates. I had a final on the same day I had to fly out to California for a really important meeting and he said that if I missed it, I would get an entire letter grade taken off my final grade. Luckily, the meeting got moved, but I was so shocked about his reaction.\"\n\nInstead of the typical business majors most entrepreneurs study, Brindak decided to focus on Anthropology and Public Health because her site revolves around women's health issues. \"I was able to learn so much about cultures around the world and also become informed and aware about different ways that I can reach out to women,\" Brindak says. \"The goal for the site was, and still is, to help young girls build confidence and self-esteem.\"\n\nTo share her users' stories with the world, Brindak published the book Miss O & Friends: Write On! The Miss O & Friends Collection of Rockin' Fiction, a compilation of user-submitted stories. Brindak tells us she plans on publishing more books in the near future. \"We started off with a business plan that we have used as our guide, but that business plan is always changing. We continue to find new ways to engage girls, to generate revenue, and new outlets that are appropriate for Miss O and our community.\"",
  "questions": [
   {
    "q": "When the website first appeared...",
    "options": [
     "It included photos of Juliette's family.",
     "Only two sites for girls had more visitors.",
     "It needed some financial help.",
     "Juliette's parents gave up their jobs to help her."
    ],
    "answer": "C"
   },
   {
    "q": "What do we learn in the third paragraph?",
    "options": [
     "Members provide information to help the site stay relevant.",
     "The website now sells tickets for musical events.",
     "Juliette was a fan of One Direction.",
     "Site members can pay to meet famous singers."
    ],
    "answer": "A"
   },
   {
    "q": "How is the site described in paragraph four?",
    "options": [
     "It's pretty basic but is getting better.",
     "There is a wide range of elements.",
     "The original cool girls now sing.",
     "It was more challenging to make in the beginning."
    ],
    "answer": "B"
   },
   {
    "q": "What do we learn about Juliette's time at university?",
    "options": [
     "She found her exams challenging to pass.",
     "She had to cancel a business trip because of an exam.",
     "She was surprised by a teacher's reaction.",
     "Some teachers were unhappy she was working and studying."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "A famous magazine announced Bindak's website as the best site for ladies in 2011.",
    "answer": "B"
   },
   {
    "s": "Various functions on her website help Bindak know what is interesting for teenage girls.",
    "answer": "A"
   },
   {
    "s": "To go to Taylor Swift's show in Canada, selected fans must pay only for their air tickets.",
    "answer": "B"
   },
   {
    "s": "Bindak chose to study Public Health at university because entrepreneurs suggested it.",
    "answer": "C"
   },
   {
    "s": "Bindak's book tells about the experiences of various users of her site.",
    "answer": "A"
   }
  ],
  "answers": [
   "C",
   "A",
   "B",
   "C",
   "B",
   "A",
   "B",
   "C",
   "A"
  ],
  "explain": [
   {
    "evidence": "Brindak reached out to family members and friends for investment money",
    "why": "Boshida sayt uchun oila va do'stlardan sarmoya so'ralgan, ya'ni moliyaviy yordam kerak bo'lgan. C."
   },
   {
    "evidence": "members are able to keep Brindak updated",
    "why": "So'rovnoma va testlar orqali a'zolar saytni dolzarb qilib turishga yordam beradi. A."
   },
   {
    "evidence": "Now the site boasts message boards, quizzes, games, music, and more",
    "why": "Hozir saytda juda ko'p bo'limlar bor. B."
   },
   {
    "evidence": "I was so shocked about his reaction",
    "why": "Universitetda bir o'qituvchining munosabati uni hayratga solgan. C."
   },
   {
    "evidence": "The site was ranked the third largest girls-only Web site in 2011",
    "why": "Jurnal saytni eng yaxshi emas, uchinchi eng katta qizlar sayti deb atagan. False."
   },
   {
    "evidence": "Through polls, quizzes, and the \"Gir12Girl\" wall, members are able to keep Brindak updated",
    "why": "Saytdagi so'rovnoma, test va devor qizlarga nima qiziqligini bilishga yordam beradi. True."
   },
   {
    "evidence": "Currently, she's offering an all-expense paid trip to Canada",
    "why": "Barcha xarajatlar to'lanadi, muxlislar hech narsa to'lamaydi. False."
   },
   {
    "evidence": "Brindak decided to focus on Anthropology and Public Health because her site revolves around women's health issues",
    "why": "U bu fanni sayti ayollar salomatligiga oid bo'lgani uchun tanlagan; tadbirkorlarning maslahati haqida gap yo'q. No Information."
   },
   {
    "evidence": "a compilation of user-submitted stories",
    "why": "Kitobda sayt foydalanuvchilarining hikoyalari jamlangan. True."
   }
  ]
 },
 {
  "n": 24,
  "title": "Fatherhood Today",
  "body": "MODERN men see fatherhood as their biggest life-changing experience and desperately want to be 'hands on' during their partner's pregnancy and the upbringing of their child. The days of fatherhood being limited to discipline and breadwinning look to be long gone, as a third of today's dads say they would even consider leaving work to take on the role of full-time father. But despite being anxious about the birth of their child, men are more worried about money than losing their freedom.\n\nThe results of Pregnancy & Births magazine's annual fatherhood survey reveal the respect with which many men now regard the role of fatherhood. More than 2,000 couples across the UK who were expecting their first child were asked about their feelings. According to 98% of the fathers-to-be, they believe fatherhood will make them happy and 90% say it is their biggest life-changing event ever'. It seems that men are taking childrearing seriously, wanting to be 'hands on' both before and after birth. Nine out of ten dads-to-be attend scans and check-ups; only 2% of the men surveyed would not be at the birth because they \"could not face it\". Eight out of 10 women say their partner is more caring during the pregnancy and 83% of men would rather stay in with their partner than go out with friends. 72% of men say they will take two weeks' leave. A further 77% say they wish they could have more time off to bond with their baby.\n\nHowever, more than half of the men questioned still think that the mother should take time off work if the child is ill, but 39% said they would share it. Modern fathers-to be are also more likely to do chores compared to decades ago: almost half of them do more housework, 41% do more meal preparation and a third go shopping more. The role of child rearing has changed dramatically over the past 50 years and more men would consider leaving work to raise their child. A third of the men surveyed say they would be prepared to be a full-time stay-at-home dad, another third would like to work part-time while the rest wish to continue with work.\n\nDr. Maureen Marks, a specialist psychiatrist on fathers and their changing roles, does not believe the survey sample is wide enough. But she agrees that men's parental roles have changed dramatically. Dr. Marks, a senior lecturer at the Institute of Psychiatry, King's College London, said \"Generally speaking, men are more able to be involved. As women are working more, they are not totally dependent on their husbands for money so the roles are less rigid.\" She believes that, although the roles have been modified, biological differences are important. \"Women are the ones who carry the child and many breast-feed. In those early days, however involved the father is, they miss that connection,\" she said. However, men make up for this when the child is old enough to be played with. \"Men are much more active when playing with their children and encourage their sociability, but when children need comforting or soothing they tend to go to their mother.\"\n\nTom Beardshaw, from the charity Fathers Direct, believes these results confirm society's changing views on fatherhood. He said, \"this confirms the equal opportunities research which shocked a lot of people by how much fathers want to get involved. There are historical changes such as women working more, and also positive male role models, such as George Clooney, who show that being a proud father is not an unmanly attribute to have.\"",
  "questions": [
   {
    "q": "Several modern fathers",
    "options": [
     "are willing to give up their careers to be stay-at-home parents.",
     "think fatherhood provides discipline in their lives.",
     "would feel afraid of not being able to raise a child.",
     "are working hard to save money for the future."
    ],
    "answer": "A"
   },
   {
    "q": "According to the article, a majority of men today",
    "options": [
     "still do not want to attend the birth of their children.",
     "take an active part in pre-natal care.",
     "wish they could afford to have leave when a child is born.",
     "do not wish to have a child."
    ],
    "answer": "C"
   },
   {
    "q": "If a child were ill, most of the men questioned said",
    "options": [
     "either partner could stay with the child.",
     "the mother should take time off work.",
     "they would stay off work themselves.",
     "the children themselves would get well."
    ],
    "answer": "B"
   },
   {
    "q": "Dr. Marks comments that",
    "options": [
     "both parents need to take equal time with their newborn baby.",
     "children don't care which parent is around when they are upset.",
     "traditional roles for parenting has changed.",
     "the rote of fathers must be changed."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "According to the Pregnancy & Birth magazine survey, three-quarters of the respondents think there is no more important event that changes their life than having their first child.",
    "answer": "A"
   },
   {
    "s": "The fathers who are expecting a new birth tend to do as much housework today as they did ten years ago.",
    "answer": "B"
   },
   {
    "s": "According to Dr. Maureen Marks, the survey's outcome cannot help us reach a reliable conclusion.",
    "answer": "A"
   },
   {
    "s": "Men and women are equally good at boosting children's social skills.",
    "answer": "B"
   },
   {
    "s": "Working mothers are worse at child upbringing than the one who doesn't work.",
    "answer": "C"
   }
  ],
  "answers": [
   "A",
   "C",
   "B",
   "C",
   "A",
   "B",
   "A",
   "B",
   "C"
  ],
  "explain": [
   {
    "evidence": "a third of today's dads say they would even consider leaving work to take on the role of full-time father",
    "why": "Otalarning uchdan biri bola tarbiyasi uchun ishini tashlashga tayyor. A."
   },
   {
    "evidence": "A further 77% say they wish they could have more time off to bond with their baby",
    "why": "Ko'pchilik bola bilan ko'proq vaqt o'tkazish uchun ta'til olishni xohlaydi. Kitob kalitida C."
   },
   {
    "evidence": "more than half of the men questioned still think that the mother should take time off work if the child is ill",
    "why": "Yarmidan ko'pi bola kasal bo'lsa onasi ishdan qolishi kerak deb hisoblaydi. B."
   },
   {
    "evidence": "But she agrees that men's parental roles have changed dramatically",
    "why": "Dr Marks otalarning an'anaviy roli o'zgarganiga qo'shiladi. C."
   },
   {
    "evidence": "90% say it is their biggest life-changing event ever",
    "why": "90 foiz, ya'ni to'rtdan uchdan ham ko'p qismi buni hayotidagi eng muhim o'zgarish deb biladi. True."
   },
   {
    "evidence": "Modern fathers-to be are also more likely to do chores compared to decades ago",
    "why": "Hozirgi otalar o'n yillar oldingiga qaraganda uy ishini ko'proq qiladi. \"O'shancha\" degani noto'g'ri: False."
   },
   {
    "evidence": "does not believe the survey sample is wide enough",
    "why": "Uning fikricha, so'rovnoma qamrovi tor, shuning uchun ishonchli xulosa chiqarib bo'lmaydi. True."
   },
   {
    "evidence": "Men are much more active when playing with their children and encourage their sociability",
    "why": "Bolaning muloqot ko'nikmalarini ko'proq otalar rivojlantiradi, onalar esa yupatadi. Teng emas: False."
   },
   {
    "evidence": "As women are working more, they are not totally dependent on their husbands for money",
    "why": "Ishlaydigan onalar bola tarbiyasida yomonroq ekani haqida matnda gap yo'q. No Information."
   }
  ]
 },
 {
  "n": 25,
  "title": "",
  "body": "Alan McCormick, 16, lives near Sacramento, California, and has been learning Chinese for two years. \"The lessons are interesting because our teacher explains to us what the characters mean and how they become what they are. Sometimes we also watch Chinese movies. The hardest thing is to write characters and listen to other people speak Mandarin.\" California has had close ties to China for many years. Since many immigrants came from China originally, the Chinese language has often been passed on by family members. What is interesting is that in the last few years, kids like Alan, who have no direct ties to China, are learning Mandarin a lot earlier and in greater numbers. Currently, more than 100 schools in California are offering Mandarin classes.\n\nSpanish has always been the second most important language in many parts of the USA, although German and French are also old favorites. That Mandarin, a much more exotic language, is able to penetrate this standing is due largely to China's increased global presence. Officially, there are more than 80,000 nationals from the People's Republic of China in America, including 27,000 students. But many more ethnic Chinese from all over the world live here too. Not surprisingly, interest in all things Chinese has grown - food, art, fengshui, acupuncture, gongfu, sports. Bruce Lee and Jacky Chan have always held an audience, but now, so do Ang Lee and Zhang Yimou. Chinese film festivals, concerts, and even Chinese disco nights draw American audiences too.\n\nBut it is not easy teaching American kids Mandarin. Many lower secondary schools offer the language as an after school activity much as football or music club is offered. So students come from different classes and ages and tend not to meet one another daily. There is also little support at home, unlike Chinese or Chinese-American children who usually attend Chinese schools run by Chinese organisations, and which follow a mainland or Taiwanese curriculum. \"We all found that after a little while, Chinese classes [for American kids] slowed down and language learners became demotivated by the increasing number of complicated characters. They needed for a very long time to learn simple questions and answers. Students could not express what they really wanted to express. And, after learning so much, they still could not read interesting stuff,\" says Lu Wing, a teacher, interpreter and textbook author. The problems are compounded by the lack of staff and of appropriate teaching material. Many schools employ a native Chinese national who may or may not be qualified, and they are not paid very well.\n\nThe Association of Chinese Teachers in America has organised workshops and seminars to exchange ideas and resources. But the training and certification of teachers will continue to be difficult as there is no central authority. Student numbers need to increase significantly before the various state ministries of education will get involved seriously, and students can only be attracted if good teachers exist in the first place. Wing has written a textbook which has become the official learning material for Chinese at upper secondary levels in some states. \"I separated the learning of characters from the training of dialogues. This strategy allowed the students to start character learning a bit more systematically, which in itself enhances the possibilities of character training: more characters are remembered in shorter time. On the other hand, without the burden of needing to read and write every single character in a dialogue text, the students were able to get on to more interesting subjects of discussion much earlier than before.\"\n\nWing stresses that young learners need to learn in a fun, interactive way and encourages the use of theatre, songs, games, films, competitions, picture shows and presentations for parents and other students. \"And, of course having the possibility to travel to China is one of the most attractive aims for learning the language.\" When asked about his opinion, Alan responded that he would like to go to China one day, but only for vacations. He may have heard that Chinese children have a much longer school day than kids in America and that they have a lot more tests! The future of Mandarin in Californian schools seems bright. Some schools in various states have incorporated Mandarin into the school curriculum and are offering it as a pre-university subject. Wing's earliest group of students who started as children many years ago still has regular class reunions. Many are now studying the Chinese language at an advanced level or subjects like Asian Business Management at universities. \"It is always a pleasure to be invited to their meetings; seeing their progress and success is the most wonderful gift for me as their teacher,\" says Wing.",
  "questions": [
   {
    "q": "American students like Alan McCormick",
    "options": [
     "are becoming more interested in attending Mandarin classes.",
     "think it's easy to learn to write Chinese characters.",
     "will work as translators when they leave school.",
     "wish Mandarin to be a global language."
    ],
    "answer": "A"
   },
   {
    "q": "A large number of Chinese people in America",
    "options": [
     "are causing Mandarin to become the most taught foreign language in school.",
     "are creating more interest in the Chinese culture as a whole.",
     "are more interested in learning German or French.",
     "are starting to learn Spanish."
    ],
    "answer": "B"
   },
   {
    "q": "American kids learning Mandarin",
    "options": [
     "are often not able to get beyond the beginner level.",
     "get a lot of encouragement from their parents.",
     "need to learn according to the curriculum of schools in China or Taiwan.",
     "love cartoon in Mandarin."
    ],
    "answer": "A"
   },
   {
    "q": "Mandarin teachers in America are",
    "options": [
     "certified by the Ministry of Education in the state where they live.",
     "challenged by the lack of suitable textbooks and resources.",
     "generally trained teachers who came from China.",
     "all graduated from universities in China."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "All Chinese language speakers in California learn Chinese from their relatives at home.",
    "answer": "C"
   },
   {
    "s": "Chinese is becoming one of the most popular languages in the US as the number of Chinese people and the influence of China are rising there.",
    "answer": "A"
   },
   {
    "s": "All the native speaker teachers who teach Chinese in the US have sufficient qualifications in their role.",
    "answer": "B"
   },
   {
    "s": "In Wing's teaching textbooks, the characters are taught many later in lessons than the dialogues.",
    "answer": "C"
   },
   {
    "s": "Currently, the students are learning Chinese only at elementary levels in the US.",
    "answer": "B"
   }
  ],
  "answers": [
   "A",
   "B",
   "A",
   "B",
   "C",
   "A",
   "B",
   "C",
   "B"
  ],
  "explain": [
   {
    "evidence": "kids like Alan, who have no direct ties to China, are learning Mandarin a lot earlier and in greater numbers",
    "why": "Xitoy bilan aloqasi yo'q bolalar ham mandarin tilini tobora ko'proq o'rganmoqda. A."
   },
   {
    "evidence": "Not surprisingly, interest in all things Chinese has grown",
    "why": "Xitoyliklar ko'payishi bilan Xitoy madaniyatiga (taom, san'at, sport) qiziqish oshgan. B."
   },
   {
    "evidence": "Students could not express what they really wanted to express",
    "why": "O'quvchilar uzoq vaqt oddiy savol-javobdan nariga o'tolmaydi, ya'ni boshlang'ich darajada qoladi. A."
   },
   {
    "evidence": "The problems are compounded by the lack of staff and of appropriate teaching material",
    "why": "O'qituvchilar mos darslik va materiallar yetishmasligidan qiynaladi. B."
   },
   {
    "evidence": "the Chinese language has often been passed on by family members",
    "why": "Ko'pincha oila a'zolari orqali o'rganiladi, lekin \"hamma\" shunday o'rganishi aytilmagan. No Information."
   },
   {
    "evidence": "is due largely to China's increased global presence",
    "why": "Xitoyning dunyodagi ta'siri ortgani sababli mandarin tili mashhurlashmoqda. True."
   },
   {
    "evidence": "Many schools employ a native Chinese national who may or may not be qualified",
    "why": "Ba'zi o'qituvchilar malakali bo'lmasligi mumkin. \"Hammasi malakali\" degani noto'g'ri: False."
   },
   {
    "evidence": "I separated the learning of characters from the training of dialogues",
    "why": "Wing ierogliflar va dialoglarni alohida o'rgatadi, lekin ierogliflar keyinroq o'rgatilishi aytilmagan. No Information."
   },
   {
    "evidence": "Many are now studying the Chinese language at an advanced level",
    "why": "Ba'zi talabalar xitoy tilini yuqori darajada o'rganmoqda, faqat boshlang'ich emas. False."
   }
  ]
 },
 {
  "n": 26,
  "title": "Changing attitudes toward marriage",
  "body": "by Michael Klozof\n\nHave you already planned your big day, the extravagant reception, the beautiful wedding dress, the romantic location? Or do you feel that marriage is outdated, and prefer cohabitating or the single life? Trends show that people's attitudes to relationships and family life have changed and that many people are moving away from the traditional path their parents or grandparents may have taken. Statistics show that in many European countries those who do marry are getting older. The average age has been gradually increasing and today stands at around 30. Yet in the developing world things are vastly different; one in every three girls is married by the age of 18, and 1 in 7, by 15. Many of these weddings are what are called forced marriages, where one or both participants are coerced into matrimony without their free consent. This practice is different from arranged marriage which may be willingly agreed to.\n\nMany parents believe that there is nothing wrong with choosing the person their child will marry. They feel that they are doing what is best for their child, who is too young yet to appreciate their motives and is bound by duty to accept their parents' wishes. If a prospective bride or groom objects, it may be seen as damaging the family honour. For many parents, particularly those living outside their native countries, the preservation of culture is of utmost importance, and by having their son or daughter marry someone from their own background, they can ensure that their traditions will be kept alive.\n\nWhile the Universal Declaration of Human Rights states that marriage shall be entered into only with the free and full consent of the intending spouses, in some countries early or forced marriages account for 60% of all unions. Some of the reasons for these circumstances are poverty and gender inequality. For low income families, girls are often viewed as an economic burden. They may occupy a low status in those societies, have few rights and may be 'sold' into marriage. In many countries, early marriage is so common that families may not even realise that they are breaking the law, so, while the tradition is illegal, it is tolerated and officials look the other way. In some cases, promises are made when the child is very young, with girls being used to help form alliances between families. Sometimes forced marriages occur to prevent unsuitable relationships, that is, children dating people from outside their ethnic, cultural or religious group. Alternatively, forced marriages may take place to assist with claims for residence or citizenship in another country.\n\nPoverty is recognised as one of the main influences of arranged marriages, with a girl sometimes being wed to a much older man to benefit her and her family. This form of transaction may be seen as helping to ensure the future safety of the child. In parts of Africa a 'bride price' of money or goods is paid to compensate for the parents' loss of a daughter. It provides the parents with a lump sum to invest while the daughter gains a husband who can provide for her for the rest of her life. This security is particularly valuable in times of bad harvests, food shortages or war.\n\nThe consequences of these early marriages are often damaging for female children, who are taken out of school and, as a result, have low levels of education. Many may even be illiterate, and they often lack life skills, knowledge of health, and reproduction. Therefore many husbands assume control of all decisions, while the wives take on a more submissive role. They may suffer from abuse and domestic violence. For some there is also the possibility of being widowed early and left without financial support. It is clear how these forced marriages are considered a violation of children's rights, everyone under 18 being classed as a child. But it is a mistake to imagine that the only victims of forced marriage are young, uneducated girls from strict, traditional families in countries far away. Reports show that men and women of many ages, from many cultural backgrounds are affected by this, with thousands of cases happening in Europe. Religion, tradition, financial security, family honour, and securing visas and citizenship are the main causes. But each situation is unique and many cases go unreported, as victims fear the consequences if they go against their families' wishes, so a lot of many girls goes unheard.",
  "questions": [
   {
    "q": "Many parents believe that an arranged marriage",
    "options": [
     "is an important cultural ritual popular among young people.",
     "is something their child will appreciate later.",
     "should occur between different nationalities.",
     "never happens in the future."
    ],
    "answer": "B"
   },
   {
    "q": "Families who force their children into marriage",
    "options": [
     "are aware that it is illegal.",
     "are encouraged by local leaders.",
     "believe it is an accepted part of their culture.",
     "are all rich."
    ],
    "answer": "C"
   },
   {
    "q": "Money is given to the",
    "options": [
     "bride as security for her future.",
     "bride's parents so that they give away their daughter.",
     "future husband to encourage him to marry the bride.",
     "groom to take the bride."
    ],
    "answer": "B"
   },
   {
    "q": "People who have been forced into marriage are",
    "options": [
     "afraid to ask for help.",
     "committing a crime in Europe.",
     "teenage girls from poor, religious families.",
     "the happiest in the world."
    ],
    "answer": "A"
   }
  ],
  "statements": [
   {
    "s": "Around a third of all girls in poor countries get married until they are 15 years old.",
    "answer": "B"
   },
   {
    "s": "The only reason for forced marriages is that men and women don't have equal rights in society.",
    "answer": "B"
   },
   {
    "s": "Parents usually set the amount for 'bride price for their daughters in Africa.",
    "answer": "C"
   },
   {
    "s": "In many cases, forced marriages lead to literacy issues for men.",
    "answer": "B"
   },
   {
    "s": "It is clear that young women are the sole sufferers in the cases of forced marriages.",
    "answer": "B"
   }
  ],
  "answers": [
   "B",
   "C",
   "B",
   "A",
   "B",
   "B",
   "C",
   "B",
   "B"
  ],
  "explain": [
   {
    "evidence": "who is too young yet to appreciate their motives",
    "why": "Ota-onalar farzandi hozir yosh, keyinroq ularning niyatini tushunadi deb o'ylaydi. B."
   },
   {
    "evidence": "families may not even realise that they are breaking the law",
    "why": "Bu odat shunchalik keng tarqalganki, oilalar uni madaniyatning odatiy qismi deb biladi. C."
   },
   {
    "evidence": "a 'bride price' of money or goods is paid to compensate for the parents' loss of a daughter",
    "why": "Pul qizini berganlik uchun kelinning ota-onasiga to'lanadi. B."
   },
   {
    "evidence": "victims fear the consequences if they go against their families' wishes",
    "why": "Qurbonlar oilasiga qarshi chiqishdan qo'rqib, yordam so'ramaydi. A."
   },
   {
    "evidence": "one in every three girls is married by the age of 18, and 1 in 7, by 15",
    "why": "15 yoshgacha uchdan biri emas, yettidan biri turmushga chiqadi; uchdan biri 18 yoshgacha. False."
   },
   {
    "evidence": "Some of the reasons for these circumstances are poverty and gender inequality",
    "why": "Sabablar ko'p: qashshoqlik, tengsizlik, an'ana, fuqarolik. \"Yagona sabab\" degani noto'g'ri: False."
   },
   {
    "evidence": "In parts of Africa a 'bride price' of money or goods is paid",
    "why": "Qalin to'lanishi aytilgan, lekin uning miqdorini kim belgilashi haqida ma'lumot yo'q. No Information."
   },
   {
    "evidence": "The consequences of these early marriages are often damaging for female children",
    "why": "Savodsizlik muammosi erkaklarga emas, maktabdan olingan qizlarga tegishli. False."
   },
   {
    "evidence": "Reports show that men and women of many ages, from many cultural backgrounds are affected by this",
    "why": "Faqat yosh qizlar emas, turli yoshdagi erkak va ayollar ham jabr ko'radi. False."
   }
  ]
 },
 {
  "n": 27,
  "title": "A losing battle",
  "body": "Not every beautiful plant growing in your garden or in the countryside is a welcome sight. We are not talking about normal weeds - plants which are not wanted, but can be removed with a bit of hard work. This article features another category: species, often from overseas, that grow where they do not belong and are dangerous for humans and even buildings. These non-native plants invade new areas, spread rapidly and are difficult to remove. As a result, they are called non-native invasive plants. Not growing in their home country, the problem with many of these plants is that they often have no natural enemies to keep them under control.\n\nA good example of non-native invasive plants is Japanese knotweed. The World Conservation Union lists this plant as one of the world's worst invasive species, because it can grow through hard surfaces, such as roads and walls. In the UK, it is already causing massive damage to roads and affecting property values. Japanese knotweed originally came from Asia and grows naturally on the sides of volcanoes, where volcanic ash keeps it from spreading. It was introduced to the West by the botanist Philippe von Siebold, who sent it to the Royal Botanical Gardens Kew in August 1850 in a parcel of plants. The attractive plant, which reaches a height of three to four metres, was much admired and quickly became very popular with the Victorians. Garden centres sold it commercially and it was deliberately planted all over the UK. Since 1981 it has been a crime to plant or grow Japanese knotweed in the wild. This includes moving polluted soil or plant cuttings. If you are caught doing so, you can be fined or even sent to prison for up to two years.\n\nIt is not illegal to have this plant on your property, but you as the landowner have the legal responsibility to ensure that it does not spread to your neighbours' land. Anyone wishing to sell a house with Japanese knotweed within seven metres of their property has a problem. Many banks will refuse to give potential buyers a loan and insurance companies will not bear the cost of damage caused by this plant. Additionally, neighbours could take legal action because their properties are also in danger indirectly. Japanese knotweed is incredibly difficult and expensive to remove. It grows very quickly and aggressively, with roots three metres deep and seven metres across. You can try and dig it out yourself, but because it spreads underground, it is almost impossible to ensure all the roots have been removed. Consequently, the plant will soon appear again. Also, this plant is classified as special waste, so you have to take it to a place that has permission to dispose of it, which may mean you have to pay a huge fee. Alternatively, the plant can be treated with a chemical weed killer. This takes about three years to be effective and is slightly cheaper than removing it manually. Considering the seriousness of the situation, professional help is the most effective and sensible way to solve the problem.\n\nAnother invasive species is the giant hogweed which comes from central Asia. It was first introduced to European gardens in the middle of the 19th century because of its impressive white flowers which are grouped together on umbrella like heads. It can have a height of up to five metres and grows at riversides and anywhere else where the soil is moist. The problem with this plant is the liquid inside it, known as the sap. If you come into contact with it, and are then exposed to sunlight, you will receive blistering burns that sometimes stay for several weeks and may well leave a scar. If you touch this plant, clean the skin area with lots of soap and water and then consult a doctor. The problem is that a victim, not being aware of the danger, does not notice anything is wrong until a few days later. And the biggest issue with this plant is that children are tempted to play with it due to its large leaves and exciting hollow stalks. There have been many cases of hospitalisation.\n\nThese are just two examples, but they have something in common. They started their invasion as a beautiful plant specimen brought home from a far-away country without anyone being aware of the consequences of this action. Due to today's globalisation, we have a new responsibility: to protect location-specific environments and not move native plants from country to country.",
  "questions": [
   {
    "q": "Invasive plants are covering increasingly large areas because",
    "options": [
     "it is not possible to get rid of them.",
     "the climate of a non-native country suits them better.",
     "they don't have to defend themselves against anything.",
     "they don't need much water."
    ],
    "answer": "C"
   },
   {
    "q": "Japanese knotweed",
    "options": [
     "cultivation can result in serious punishment.",
     "has spread all over Britain accidentally.",
     "is still available commercially.",
     "is yet to be researched."
    ],
    "answer": "A"
   },
   {
    "q": "Having Japanese knotweed on your property means you",
    "options": [
     "can only successfully sell your house via a bank.",
     "may have a serious dispute with your neighbor.",
     "need to take out additional insurance.",
     "can get a lot of fruits."
    ],
    "answer": "B"
   },
   {
    "q": "To get rid of Japanese knotweed, the author recommends",
    "options": [
     "choosing the slower, more inexpensive method.",
     "letting experts take on the responsibility.",
     "working very carefully on your own.",
     "burning it."
    ],
    "answer": "B"
   }
  ],
  "statements": [
   {
    "s": "If you grow Japanese knotweed in your garden, it does not mean that you break the law.",
    "answer": "A"
   },
   {
    "s": "The complete removal of Japanese knotweed is challenging due to its strong root system.",
    "answer": "A"
   },
   {
    "s": "The time and cost required to eradicate Japanese knotweed with herbicides are as much as by doing it manually.",
    "answer": "B"
   },
   {
    "s": "There have been many cases when people died of being poisoned by the giant hogweed.",
    "answer": "C"
   },
   {
    "s": "The author believes that people should be very careful to transfer native species to new locations.",
    "answer": "A"
   }
  ],
  "answers": [
   "C",
   "A",
   "B",
   "B",
   "A",
   "A",
   "B",
   "C",
   "A"
  ],
  "explain": [
   {
    "evidence": "they often have no natural enemies to keep them under control",
    "why": "Yangi joyda tabiiy dushmanlari yo'q, ya'ni ular o'zini himoya qilishi shart emas. C."
   },
   {
    "evidence": "If you are caught doing so, you can be fined or even sent to prison for up to two years",
    "why": "Uni tabiatda o'stirish jinoyat, jarima yoki ikki yilgacha qamoq bilan jazolanadi. A."
   },
   {
    "evidence": "neighbours could take legal action",
    "why": "Qo'shnilar sudga berishi mumkin, ya'ni jiddiy nizo kelib chiqadi. B."
   },
   {
    "evidence": "professional help is the most effective and sensible way to solve the problem",
    "why": "Muallif mutaxassislarga murojaat qilishni maslahat beradi. B."
   },
   {
    "evidence": "It is not illegal to have this plant on your property",
    "why": "O'z hududingizda bo'lishi qonunni buzish emas, faqat tabiatga ekish taqiqlangan. True."
   },
   {
    "evidence": "with roots three metres deep and seven metres across",
    "why": "Ildizi chuqur va keng tarqalgan, shuning uchun to'liq yo'qotish qiyin. True."
   },
   {
    "evidence": "This takes about three years to be effective and is slightly cheaper than removing it manually",
    "why": "Kimyoviy usul uch yil vaqt oladi va qo'lda olib tashlashdan biroz arzonroq. Vaqt ham, narx ham bir xil emas: False."
   },
   {
    "evidence": "There have been many cases of hospitalisation",
    "why": "Ko'p odam kasalxonaga tushgan, lekin zaharlanib o'lgani aytilmagan. No Information."
   },
   {
    "evidence": "not move native plants from country to country",
    "why": "Muallif o'simliklarni mamlakatdan mamlakatga ko'chirmaslikka chaqiradi. True."
   }
  ]
 },
 {
  "n": 28,
  "title": "If you leave me now...",
  "body": "Firms are increasingly anxious to keep staff, says Hugh Thompson\n\nThe job market is tight and all indications are that it is getting tighter. And the fact that workers are increasingly on the move is just one symptom of this.\n\nNearly one third of all part-time workers and one in five of all workers now make a move each year. In some industries it is even worse. According to the Chartered Institute of Personnel & Development's labour turnover survey, the wholesale and retail trades and the hotel, restaurant and leisure industries experience something like a 50% turnover rate.\n\nBy occupational types, unskilled manual and sales are showing a one-third turnover rate each year and professional and manual are not much better. Over a quarter of staff leaving have not been with the organisation more than six months and a similar number of leavers have been with the company less than two years. Half of all companies now feel that staff turnover has increased in the past five years, with half putting that down to the more buoyant job market and 40% to fewer career opportunities in leaner companies.\n\nOn average it costs something like £1,900 to replace an employee. That does not include the hidden costs associated with disruption — the costs of temporary replacement, the training and relocation of a new employee. Experts put the real cost of losing an employee at between half and one and a half times an annual salary. Hardly surprisingly two-thirds of companies now place staff retention as a fairly high priority. When it comes to retaining key workers, the percentage of companies thinking the issue will become increasingly important rises to 80 %, according to a report by Sanders & Sidney.\n\nIn some areas such as the boom sector of call centres, which is seen as badly-paid, boring work, a third of managers see high turnover as unavoidable. A report by T MP World-Wide showed that three-quarters of call centres experience recruitment problems. Chief Executive John Tarrant said: \"We have clients with more than 100% staff turnover. Either they recruit continually or they change their cultures so that staff can feel they belong. Money is not the answer; listening and communication is.\"\n\nOf course, with so many unfilled vacancies and so much choice, workers are bound to be more on the move. Companies are having to offer more imaginative and more flexible packages to keep their staff. Everything from share options to looking after more and more of the employees' domestic chores is being used.\n\nHowever, the job market no longer accepts only one type of contract. Both sides have accepted that there is a very different attitude to jobs which do not involve a full-time or long term commitment. This particular job market makes employees feel braver about leaving and changing jobs, says Nick Page of TMP.\n\nMany employers are now using cleverer internet screening and job application forms in an attempt to filter out less desirable workers before they get to the interview stage. For employers one of the worst scenarios is not only being forced into recruiting too many of the wrong workers but having the wrong workers stay the longest to do the most damage.",
  "questions": [
   {
    "q": "The article concerns",
    "options": [
     "advice on finding a job.",
     "mobility among workers.",
     "salaries in different jobs.",
     "ways to train workers"
    ],
    "answer": "B"
   },
   {
    "q": "The rate of employee fluctuation for all industries is about",
    "options": [
     "20%.",
     "30%.",
     "50%."
    ],
    "answer": "A"
   },
   {
    "q": "Different rates of turnover in different industries are",
    "options": [
     "fairly small.",
     "not mentioned in the text.",
     "quite significant.",
     "lower than before."
    ],
    "answer": "C"
   },
   {
    "q": "The cost of finding a new member of staff",
    "options": [
     "is considered unimportant by many companies.",
     "is easy to calculate.",
     "may exceed the annual salary of an employee.",
     "is very little."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "Employees in call centers usually experience little job satisfaction.",
    "answer": "A"
   },
   {
    "s": "Firms sometimes offer incentives to keep employees from leaving",
    "answer": "A"
   },
   {
    "s": "One thing employees may be offered is that they receive help in the home.",
    "answer": "A"
   },
   {
    "s": "Employees are generally willing to accept long-term contracts.",
    "answer": "B"
   },
   {
    "s": "Wrong workers cannot apply for job on the internet.",
    "answer": "C"
   }
  ],
  "answers": [
   "B",
   "A",
   "C",
   "C",
   "A",
   "A",
   "A",
   "B",
   "C"
  ],
  "explain": [
   {
    "evidence": "the fact that workers are increasingly on the move",
    "why": "Maqola xodimlarning ish joyini tez-tez almashtirishi haqida. B: \"mobility among workers\"."
   },
   {
    "evidence": "one in five of all workers now make a move each year",
    "why": "Beshtadan biri, ya'ni 20 foiz har yili ishini almashtiradi. A."
   },
   {
    "evidence": "experience something like a 50% turnover rate",
    "why": "Ba'zi sohalarda 50%, boshqalarida 33%: farq sezilarli. C."
   },
   {
    "evidence": "Experts put the real cost of losing an employee at between half and one and a half times an annual salary",
    "why": "Xarajat yillik maoshning bir yarim baravarigacha bo'lishi mumkin. C."
   },
   {
    "evidence": "which is seen as badly-paid, boring work",
    "why": "Kol-markazlardagi ish kam maoshli va zerikarli, ya'ni qoniqish kam. True."
   },
   {
    "evidence": "Companies are having to offer more imaginative and more flexible packages to keep their staff",
    "why": "Kompaniyalar xodimlarni ushlab qolish uchun turli imtiyozlar taklif qiladi. True."
   },
   {
    "evidence": "looking after more and more of the employees' domestic chores",
    "why": "Xodimlarning uy ishlariga yordam berish ham taklif qilinadi. True."
   },
   {
    "evidence": "there is a very different attitude to jobs which do not involve a full-time or long term commitment",
    "why": "Endi ko'pchilik qisqa muddatli ishni afzal ko'radi, uzoq muddatli shartnomani emas. False."
   },
   {
    "evidence": "cleverer internet screening and job application forms",
    "why": "Ish beruvchilar keraksiz nomzodlarni internet orqali saralaydi, lekin ular onlayn ariza bera olmasligi aytilmagan. No Information."
   }
  ]
 },
 {
  "n": 29,
  "title": "",
  "body": "Unfortunately, lots of students overlook the value of taking a year off from their studies. Far from being a year wasted, a gap year between school and university could actually prove to be very beneficial to your future, especially if you make the most of it by working and travelling abroad. Not only are you likely to increase your self-confidence by living in another country, the valuable work experience will look great on you CV - a great advantage when it comes to hunting for a job after college. Taking a year or a year-and-a-half off does not have to be difficult if you do your homework. Although travelling or working abroad for voluntary organizations may prove expensive if you lack sufficient funds, it is possible to combine your travels with paid work experience. There are non-profit organizations, which have enabled thousands of full-time students to work in different countries, for example the USA, Canada and Australia each year.\n\nThere is a wide range of programmes to choose from and they are designed to be self-financing, so you should be able to earn back your initial expenses and have sufficient money to pay for your post-work travels. Work America and Work Canada are open to full time students and these who have postponed their entry and have been accepted to a university for the following year. Those taking part in the programme can get almost any job anywhere for the summer, moreover, there are countries where they can work up to 12 months. It is even possible to work on a fishing boat on the Pacific Ocean if that appeals. Most, however, would tend to work in temporary jobs within the tourism industry, mainly in restaurants and hotels. Work America Counsellors place both students and non-students at children's summer camps in the USA. Those aged between 19 and 35, with relevant experience of working with groups of children, can spend up to eight weeks teaching sporting, arts and drama activities at camp and have time to travel around North America afterwards. For these who would rather work behind the scenes, the KAMP programme places students in kitchen and maintenance positions. Both programmes include return transatlantic flights, free board and lodging and pocket-money.\n\nWork Australia offers 18-25 year olds with more time to spare, the opportunity to work and travel \"down under\" for up to 12 months. There are several departures from London or Los Angeles throughout August, September and October, so it's an ideal programme for gap-year students or those who have just graduated. You can even link it to one of The North American programmes to get the most out of the experience. Patrick Woodbridge spent a year travelling around Australia. His most enjoyable job in Australia was as a receptionist, cook and cleaner at \"Backpack Australia\", a crazy place in Adelaide. He left there with great memories and a bursting address book. Over the next month Patrick travelled around in a station wagon with friends. \"We went diving at the Great Barrier Reef, drove through sugarcane fields and tropical fruit plantations, watched the sunset over Ayers Rock and lived on cheese and jab sandwiches. It was incredible.\" On the importance of his year off, Patrick said, \"I feel my trip has taught me a lot - from the importance of tolerance and experiencing new cultures, to how to cook. My self-confidence has improved amazingly.\" Taking a year off does require forward planning, so you'll need to apply this October for next year's summer programme. Work America arranges visas, flights, airport greetings and back-up support for participants, which makes organizing your trip very easy. All you have to do is decide where you want to go!",
  "questions": [
   {
    "q": "It is advantageous to take a year out because you can",
    "options": [
     "spend a relaxing period before university.",
     "gain experience.",
     "finance your further studies.",
     "read more books."
    ],
    "answer": "B"
   },
   {
    "q": "Taking a year off is not necessarily difficult if",
    "options": [
     "you work hard during your year out.",
     "you are a hard-working student.",
     "you make the right inquiries.",
     "you are physically fit."
    ],
    "answer": "C"
   },
   {
    "q": "Taking time off between school and university is",
    "options": [
     "better if you go abroad.",
     "fairly difficult to arrange.",
     "impossible if you have no money.",
     "suitable if you are bilingual."
    ],
    "answer": "A"
   },
   {
    "q": "To work with Work America Counsellors, you have to",
    "options": [
     "be able to travel around the country.",
     "be a full-time student.",
     "have worked with children before.",
     "know English."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "During the gap year, you must submit homework to your school teacher.",
    "answer": "C"
   },
   {
    "s": "Only summer work programs are available for students during their gap year.",
    "answer": "B"
   },
   {
    "s": "A student can be involved in Work America Counsellors for maximum of two months.",
    "answer": "B"
   },
   {
    "s": "KAMP covers the participants' daily living costs.",
    "answer": "A"
   },
   {
    "s": "Patrick Woodbridge developed the endurance to eat unappetizing foods during his year off in Australia.",
    "answer": "C"
   }
  ],
  "answers": [
   "B",
   "C",
   "A",
   "C",
   "C",
   "B",
   "B",
   "A",
   "C"
  ],
  "explain": [
   {
    "evidence": "the valuable work experience will look great on you CV",
    "why": "Chet elda ishlash va yashash qimmatli tajriba beradi. B: \"gain experience\"."
   },
   {
    "evidence": "Taking a year or a year-and-a-half off does not have to be difficult if you do your homework",
    "why": "\"Do your homework\" bu yerda uy vazifasi emas, kerakli ma'lumotni oldindan surishtirish degani. C: \"make the right inquiries\"."
   },
   {
    "evidence": "especially if you make the most of it by working and travelling abroad",
    "why": "Bo'sh yil, ayniqsa, chet elda ishlab, sayohat qilinsa foydali bo'ladi. A: \"better if you go abroad\"."
   },
   {
    "evidence": "with relevant experience of working with groups of children",
    "why": "Lagerda ishlash uchun bolalar guruhi bilan ishlash tajribasi kerak. C."
   },
   {
    "evidence": "if you do your homework",
    "why": "\"Homework\" bu yerda tayyorgarlik ma'nosida; maktab o'qituvchisiga uy vazifasi topshirish haqida gap yo'q. No Information."
   },
   {
    "evidence": "there are countries where they can work up to 12 months",
    "why": "Faqat yozgi dasturlar emas, 12 oygacha ishlash mumkin bo'lgan dasturlar ham bor. False."
   },
   {
    "evidence": "can spend up to eight weeks",
    "why": "Sakkiz hafta, ya'ni taxminan ikki oy. Kitob kalitida False berilgan (8 hafta aniq ikki oydan biroz kam)."
   },
   {
    "evidence": "Both programmes include return transatlantic flights, free board and lodging and pocket-money",
    "why": "KAMP ishtirokchilarning ovqati va turar joyini to'laydi. True."
   },
   {
    "evidence": "lived on cheese and jab sandwiches",
    "why": "Patrick pishloqli sendvich yegani aytilgan, lekin u yoqimsiz ovqatga chidashni o'rgangani haqida gap yo'q. No Information."
   }
  ]
 },
 {
  "n": 30,
  "title": "DRIVING IN THE SAHARA",
  "body": "Driving in the Sahara is top on many romantic adventurers' travel lists. Images of explorers traversing silent dunes, camping among Bedouin villagers, watching mirages turn to caravans of camels and back again make the imagination of the intrepid desert lover swoon. While it is true that the Sahara can be unforgiving to the unprepared, driving in the Moroccan Sahara and other North African countries can be exhilarating and safe, if travelers take proper precautions. There are two choices for overlanding the Sahara: renting a four-wheel drive vehicle in your destination or bringing your own car from Europe. Obviously, if you plan a short trip in Morocco, Tunisia or Egypt, you should consider renting. But if you plan to go nomad in the desert for a longer period or across borders, you need to bring your own car. And that takes planning and preparation and a bit of expense. However, once you're actually in the desert, you'll spend very little money, and the experience of clear desert nights, towering dunes and oasis campsites will be worth the effort in getting there. Getting to the Sahara is simpler than people imagine. Nevertheless, it's what accounts for most of the cost of touring the Sahara (aside from vehicle acquisition or rental and preparation). If you are flying and planning to rent a vehicle, flights to Casablanca and Tunis are available. Connecting flights will take you closer to the desert and vehicles can be rented in major towns and cities. If you are planning a longer trip and thinking of shipping your vehicle to Africa, you'd be much better off transporting it directly into any North African port. Choosing a vehicle for a Saharan journey is vital. For the rigors of the Sahara, locals, commercial operators and travellers choose Toyota's Land Cruiser or Land Rover; that provide quality and strength along with large engines that can keep a fully loaded machine moving in power sapping conditions. Fuel and water will account for up to half of your payload. You can never carry enough fuel and water, but fuel is the more important as the car is your lifeline. You should bring adequate water to provide ten liters per person per day in winter, in reality you will use half of that - but the extra can make all the difference, if necessary. You should never finish a route with empty containers. Locally bought bottled water is a good way of gauging your rationing, otherwise use purpose made tanks. In Tunisia and Morocco, you can pretty much stay in some kind of accommodation every other night, but in the larger countries covering the interior you must be self-sufficient. In the desert, fruit and vegetables tend to be locally grown and scrawny or trucked in and expensive. One thing you can get in every village for a few pennies is bread - 'khobsa' in Arabic. Don't overlook some sweet or savory snacks and bring your favorite quality foods. Meals will be the highlight of some possibly tiring days. Bottled gas is the most convenient power source for cooking and available in larger towns. A twin ring camping stove will do, plus a volcano kettle for a quick brew while the food cooks. A thermos flask filled at breakfast will provide a hot drink for lunchtime without the need to set the stove up. Burn whatever garbage you can, and rush and bury the rest or dump it at edge of town trash dumps. The Simplistic idea of the Sahara baking by day and freezing by night has become exaggerated over the years. In the summer, it's hot around the clock and in winter at high altitudes, nights may reach freezing. But the important thing is protection from the sun and wind and repairing or recovering the car; plus a good night's sleep. Short pants and dresses may be fine in the beach resorts, but are not acceptable in the more traditional desert communities. Cover up as locals do to protect your skin and get used to wearing headwear for the same reason- especially on midday walks when a cooling breeze will disguise the burning sun.",
  "questions": [
   {
    "q": "Bringing your car when you visit the Sahara",
    "options": [
     "is very expensive.",
     "is advisable if you plan to visit more than one country.",
     "is not worth the costs.",
     "is good if you are not afraid of wild animals."
    ],
    "answer": "B"
   },
   {
    "q": "You will need to bring or rent a challenging four-wheel drive vehicle to roam the desert because",
    "options": [
     "it can carry a large supply of water.",
     "it has enough space to sleep in it.",
     "its powerful engine will keep you going even in extreme conditions.",
     "it will be cheaper for you."
    ],
    "answer": "C"
   },
   {
    "q": "If you want to keep track of your available water supply, one method is to",
    "options": [
     "have built-in water tanks in your car.",
     "stock up on bottled water.",
     "use no more than five liters per day.",
     "ask your neighbour."
    ],
    "answer": "B"
   },
   {
    "q": "In Tunisia and Morocco",
    "options": [
     "you can buy high-quality locally grown vegetables.",
     "locals usually use gas stoves for cooking.",
     "it is quite easy to find lodging.",
     "locals give their homes to you."
    ],
    "answer": "C"
   }
  ],
  "statements": [
   {
    "s": "In the Sahara a traveler drinks 10 liters of water a day on average in summer.",
    "answer": "C"
   },
   {
    "s": "'Khobsa' is more expensive than fruits in the villages in the Sahara.",
    "answer": "C"
   },
   {
    "s": "Taking hot water in the thermos flask in the morning can save your time in the afternoon.",
    "answer": "A"
   },
   {
    "s": "Putting trash on fire during your travel is not advisable.",
    "answer": "B"
   },
   {
    "s": "Wearing long clothes has some benefits during your Sahara travel.",
    "answer": "A"
   }
  ],
  "answers": [
   "B",
   "C",
   "B",
   "C",
   "C",
   "C",
   "A",
   "B",
   "A"
  ],
  "explain": [
   {
    "evidence": "if you plan to go nomad in the desert for a longer period or across borders, you need to bring your own car",
    "why": "Uzoq muddat yoki bir necha mamlakat bo'ylab sayohat qilinsa, o'z mashinangiz kerak. B."
   },
   {
    "evidence": "large engines that can keep a fully loaded machine moving in power sapping conditions",
    "why": "Kuchli dvigatel og'ir sharoitda ham mashinani yurgizadi. C."
   },
   {
    "evidence": "Locally bought bottled water is a good way of gauging your rationing",
    "why": "Shishadagi suv sotib olish qancha suv qolganini kuzatishga yordam beradi. B."
   },
   {
    "evidence": "you can pretty much stay in some kind of accommodation every other night",
    "why": "Tunis va Marokashda deyarli har kuni turar joy topish mumkin. C."
   },
   {
    "evidence": "You should bring adequate water to provide ten liters per person per day in winter, in reality you will use half of that",
    "why": "10 litr qishki zaxira hisobi, aslida yarmi ishlatiladi; yozdagi o'rtacha ichish miqdori aytilmagan. No Information."
   },
   {
    "evidence": "One thing you can get in every village for a few pennies is bread",
    "why": "Non arzon ekani aytilgan, lekin meva narxi bilan aniq solishtirilmagan. No Information."
   },
   {
    "evidence": "A thermos flask filled at breakfast will provide a hot drink for lunchtime without the need to set the stove up",
    "why": "Ertalab termosga quyilgan suv tushlikda plitani yoqmasdan ichishga imkon beradi. True."
   },
   {
    "evidence": "Burn whatever garbage you can",
    "why": "Muallif chiqindini yoqishni maslahat beradi. False."
   },
   {
    "evidence": "Cover up as locals do to protect your skin",
    "why": "Uzun kiyim terini quyoshdan himoya qiladi va mahalliy odatlarga mos. True."
   }
  ]
 }
];

/* ===== data_p5.js ===== */
// CEFR Companion - Reading Part 5
// Source: MULTILEVEL MASTER READING, Part 5 (pp. 352-419)
// 1-4: gap-fill (ONE WORD and/or A NUMBER, javob matnda bor), 5-6: muqobil javobli test
// Muqobil javoblar "/" bilan ajratilgan.
const READING_P5_EXERCISES = [
 {
  "n": 1,
  "title": "The rise of fast food",
  "body": "It is astonishing to contemplate how popular junk food has become, given that the first fast food restaurant in the US only opened its doors a mere century ago. Since then, high-calorie processed meals have taken over the world, with multinational restaurant chains aggressively chasing levels of growth that show no signs of slowing down. Much of this expansion is currently taking place in less developed parts of the world, where the potential for customer loyalty is seen as easier to develop, but it is not just in these areas where such growth is visible. Indeed, a recent study from the University of Cambridge found that the number of takeaways in the United Kingdom rose by 45 percent between 1997 and 2015. This explosion in the takeaway trade is not an inevitable outcome of what we call 'progress'. On the Contrary, it comes in the face of an increasing body of evidence that we are heading for dietary disaster.\n\nYet, despite nutrition experts' best efforts to educate people about the dangers of a diet filled with processed food, it appears that the world doesn't want to listen. Medical specialists point out that, although eating too much unhealthy food is likely to be as dangerous in the long-term as smoking, regular consumption of high-calorie food has somehow become more socially acceptable than ever. While local authorities in some towns and cities have taken measures to combat the rise in this trend by limiting the number of fast food outlets permitted to be open simultaneously, critics argue that people have every right to make their own decisions about what they eat and how they choose to live. However, the way in which we have come to binge on takeaways isn't only a personal issue of weight gain, or of buying larger clothes. The consequences of mass overconsumption should strike fear into the hearts of everyone.\n\nResearch suggests that there is an evolutionary reason as to why people compulsively overeat -it is simply part of our innate behavior. When humans evolved, we did not have the abundant supply of food that we enjoy today, and so eating was more about survival than pleasure. We became more likely to opt for high-calorie foods, with high-fat content, that could sustain us through cold winters when the supply of nourishment became sparse. This explains why a 600-calorie burger seems so attractive: it awakens our primal side, makes us feel well fed, and inspires contentment. Processed food stimulates the reward response in our brains, so we feel compelled to overeat, and not necessarily in a healthy way. Junk food acts as a trigger for chemicals such as the 'feel-good' dopamine to flood through the brain and induce a sensation of happiness. Meanwhile, high amounts of sugar and sodium (one of the chemicals in salt and other ingredients of fast food) cause a huge surge in blood sugar, pushing it to unnatural levels.\n\nThis occurs within the first few moments of eating a high-calorie meal. From there, routinely processing such high levels of sodium is impossible, and the body's organs are pushed beyond their natural working capacity in trying to do so. The kidneys cannot remove all the excess salt from the blood, and thus an overdose of sodium causes the heart to pump faster while transporting blood through the veins. There are multiple dangers of high blood pressure, especially for the elderly and in the long-term. Sodium taken on in such quantities can lead to dehydration, a condition whose symptoms are extremely similar to hunger, and this leads to a painful truth: as soon you have finished your junk food meal, you immediately start to crave another. Thereafter, the body starts to digest the food. Usually, this takes between four and 12 hours, but with fast food, where the fat content is so much higher, the same process lasts at least three days.",
  "gaps": [
   {
    "text": "In developing countries, gaining the ____ of customers is seemed to be much simple.",
    "answer": "loyalty"
   },
   {
    "text": "There are clear facts that the widespread takeaway business is resulting in the ____ failure among people.",
    "answer": "dietary"
   },
   {
    "text": "The bad impacts of eating unhealthy food regularly might be hazardous like the adverse effects of ____.",
    "answer": "smoking"
   },
   {
    "text": "The absence of enough food ____ in the past is directly linked with the overeating habits of current people.",
    "answer": "supply"
   }
  ],
  "mcq": [
   {
    "q": "Which solution was offered by the government to decrease the consumption of unhealthy food?",
    "options": [
     "to show more advertisements related to the consequences of eating much fast food.",
     "to increase the price of high-calorie fast foods like burgers.",
     "to inspect carefully the proportion of chemicals in junk foods.",
     "to put the restriction on the number of fast food restaurants opened together."
    ],
    "answer": "D",
    "evidence": "limiting the number of fast food outlets permitted to be open simultaneously",
    "explanation": "Mahalliy hokimiyat bir vaqtda ochiq bo'ladigan fast-food restoranlar sonini cheklagan. D."
   },
   {
    "q": "What is the effect of dehydration on people?",
    "options": [
     "People don't feel full despite the amount of junk food they consume.",
     "The process of digesting food takes more time than usual.",
     "It leads to increased levels of blood sugar.",
     "The number of heartbeats increases under dehydration."
    ],
    "answer": "A",
    "evidence": "a condition whose symptoms are extremely similar to hunger",
    "explanation": "Suvsizlanish belgilari ochlikka o'xshaydi, shuning uchun ovqatdan keyin darhol yana yegingiz keladi. Mazmunan A. Kitob kalitida B berilgan, lekin hazmning uzayishi suvsizlanish emas, yog' miqdori bilan bog'liq."
   }
  ]
 },
 {
  "n": 2,
  "title": "The growing global threat of antibiotic resistance",
  "body": "Antibiotics have been one of humanity's success stories for hundreds of years, being responsible both for saving the lives of millions of patients and for helping scientists to take enormous steps in the fields of medical and surgical treatment. But this success has come at a price. The growing resistance of many bacterial strains to the curative effects of antibiotics is such a concern that it has been referred to, in some quarters, as the greatest threat to our continued existence on earth. We have become careless, it is argued, not only in our reliance on the quick fix of medicine if we feel even slightly under the weather, but also in taking the availability of antibiotics for granted, using them incorrectly, not following the prescribed dosage. This has given rise to a new form of superbacteria, a type which is able to fight off antibiotic treatment with ease.\n\nAlthough their resistance to antibiotics has been built up over a long period of time, bacteria actually replicate extraordinarily quickly, and any resistance developed is also duplicated as they divide. In addition, those bacteria carrying resistance genes happen to spread those genes further via 'horizontal gene transfer', a process whereby one bacterium passes on the resistance gene from another without even needing to be its parent. What makes the spread of these strains more difficult to control is that it occurs in a cyclical process. In the case of humans, when a person becomes infected and the resistant bacteria set up home in the gut, the sufferer has two choices: look for help or stay at home. In seeking medical assistance, whether through an appointment to visit their local doctor, or taking themselves to hospital, they contaminate other patients, later to be discharged and sent home. The resistant bacteria then spread out into the local community. This is also the end result if the infected person decides not to seek any medical assistance at all: they keep the bacteria at home and allow them to breed without treatment.\n\nLivestock also play their part in dispersing these newly evolved, bulletproof microorganisms into the food chain. These resilient bacteria do not discriminate between man and beast, and so animals play host to the very same bacteria as are found in humans, with the end result that our farms and abattoirs have become breeding grounds for inter-species infection, In fact, even after slaughter, these bacteria can easily survive on animal carcasses, remaining alive and reproducing until the point of purchase and beyond, eventually invading our systems when we ingest the flesh as infected meat. So is the answer simply to become a vegetarian? Sadly not. The very same resistant bacteria will leave a host animal's gut in the form of faeces, which are employed in agriculture as manure to support food crops. From there, the wheat, maize and corn that are grown for human consumption transport the bacteria into our bodies. There really is no escape.\n\nAs a race, humans have seen remarkable health benefits over the years as a huge number of illnesses have been treated by antibiotics, but we now face a global emergency as antibiotic-resistant bacteria are beginning to emerge more rapidly and frequently than ever before. Not only has this created a potential health crisis, since we are increasingly unable to provide the sick with treatment as a result of worldwide overuse of these drugs, but it is also unlikely to be tackled any time soon, as the powerful pharmaceutical companies are primarily driven by profit and see little benefit in researching and creating new antibiotics. It simply does not work on the balance sheet, and so it falls to governments and individuals around the world to find ways to manage the crisis. Coordinating such efforts will not be easy.",
  "gaps": [
   {
    "text": "People are destroying their health system by consuming ____ which is actually infected.",
    "answer": "meat"
   },
   {
    "text": "The rapid emergence of antibiotic-resistant bacteria could put a stop to the health ____ that have been enjoyed by humanity.",
    "answer": "benefits"
   },
   {
    "text": "Owing to its ____ antibiotic treatment of people with illnesses is becoming dangerously less effective.",
    "answer": "overuse"
   },
   {
    "text": "With pharmaceutical companies preoccupied with profit, responsible governments and individuals must take steps to tackle the ____ themselves.",
    "answer": "crisis"
   }
  ],
  "mcq": [
   {
    "q": "In the first paragraph, the author believes that",
    "options": [
     "the production of antibiotics has increased significantly in the past decades.",
     "change in people's lifestyle has reduced the resistance of bacteria to antibiotics.",
     "people are not serious about their attitude toward antibiotics.",
     "scientists are successfully developing new antibiotics to fight bacteria."
    ],
    "answer": "C",
    "evidence": "We have become careless",
    "explanation": "Muallif fikricha, odamlar antibiotiklarga beparvo munosabatda: ularni noto'g'ri va keragidan ko'p ishlatadi. C."
   },
   {
    "q": "What happens if a certain animal gets infected with bacteria?",
    "options": [
     "Bacteria stay on the body of that animal until it dies.",
     "Bacteria lose their strength to infect other animals after some time.",
     "This animal's meat becomes delicious to eat but becomes harmful to health.",
     "Bacteria stay alive even after the infected animal is butchered."
    ],
    "answer": "D",
    "evidence": "even after slaughter, these bacteria can easily survive on animal carcasses",
    "explanation": "Hayvon so'yilgandan keyin ham bakteriyalar tirik qoladi. D."
   }
  ]
 },
 {
  "n": 3,
  "title": "Modern Art",
  "body": "The term 'Modern Art' refers to art from the period 1860s to 1970s and encompasses the work of such well-known names as Vincent Van Gogh, Paul Cezanne, and Pablo Picasso. Modern Art represents the discarding of the artistic traditions of the past in favor of a spirit of experimentation. It conceptualized the functions of art in new ways and introduced different ideas about the nature of materials. Two artists who had a huge impact on modern art in the twentieth century were Robert Rauschenberg and Andy Warhol. Arguably, they both had an important influence on art as we know it today, but whereas Warhol became a household name, Rauschenberg is remembered only by those in the artistic community.\n\nMilton Ernest Rauschenberg, who later became known as Robert Rauschenberg, was born in Port Arthur, Texas in 1925, while Andrew Warhola -Andy Warhol -was born in 1928 in Pittsburgh, Pennsylvania. Both were of European heritage, born to working class families. In Rauschenberg's case, his childhood environment was hardly inspiring - a blue-collar town that has been described as a 'cultural wasteland with no art'. His father had no understanding of art and gave him no encouragement. His mother, on the other hand, supported her son as much as she could. For much of his life, Rauschenberg had been waiting for the opportunity to leave his hot sticky industrial home town and he did so in 1944, moving to California. Like Rauschenberg, Warhol was close to his mother. A sickly child, he spent a lot of time at home with her. Though he was missing a lot of school, he was developing his artistic skills and tastes, so it was actually an important period of his life. He eventually enrolled in the Carnegie Institute in Pittsburgh, where he took his first steps into the art world. Eventually, both artists gravitated towards New York, which, by the early 1950s had taken over from Paris as the centre of the Avant Garde.\n\nArtistically, what the two have in common is the willingness to innovate, take chances and be different from everything that had gone before. Both were a new type of artist who embraced and drew inspiration from popular culture. Both rejected the orthodoxical views of 'high' and 'low' art. To their minds, anything could be art. Rauschenberg produced paintings and sculptures and even combined them to produce mixed media, working with a variety of less conventional materials including silk, metal and glass. It has been said that 'the whole world was his canvas'. He was the ultimate avenger, prepared to use anything he could find in his artworks, even going so far as to incorporate such disparate objects as socks, bedspreads and car parts into his work. His 1953 piece entitled Automobile Tire Print was conceptual art as never seen before and would ensure him a place in the art history books.\n\nWarhol's work was equally innovative, drawing from the world around him, but somewhat different in approach. He rose to fame with his iconic Campbell's Soup Can series, which even today is seen as one of the most definitive images of the Pop Art movement. The simple red and white depictions of an everyday item have been hanging in kitchens and cafes around the world since the 1960s. It's a similar story for his iconic series of movie star portraits -including such popular culture figures as Marilyn Monroe, Elvis Presley and Elizabeth Taylor. Like Rauschenberg, he didn't limit himself to just one medium. In 1964 he produced his first exhibition of sculpture, which consisted of hundreds of imitation supermarket product boxes, most famously Brillo and Heinz. It was an exhibition which confounded critics and helped cement his credentials as an artist challenging the status quo.\n\nNot content with subverting the conventional art forms of painting and sculpture, both Rauschenberg and Warhol experimented beyond them. Rauschenberg collaborated with musicians, costume designers, dancers and even scientists, never ceasing to expand the possibilities of what art could be. He has been described as 'the wind blowing through the art world, pollinating everything'. Warhol, too, dabbled in other fields, including rock music and film, and engaged in Performance Art, with his multimedia show The Exploding Plastic Inevitable becoming one of the works he is best remembered for. This show pioneered many lighting innovations which rock musicians have been using in their shows since the 1960s.",
  "gaps": [
   {
    "text": "Rauschenberg's father was not interested in modern art and young artist didn't take any ____ from his father.",
    "answer": "encouragement"
   },
   {
    "text": "Rauschenberg and Warhol both had a great ____ towards innovation and using any opportunity effectively.",
    "answer": "willingness"
   },
   {
    "text": "Both artists preferred to use materials that were not so ____ like silk and boxes.",
    "answer": "conventional"
   },
   {
    "text": "Warhol developed various sculptures which were made of product boxes and showed them in the ____.",
    "answer": "exhibition"
   }
  ],
  "mcq": [
   {
    "q": "What is the main similarity between Warhol and Rauschenberg in terms of their work?",
    "options": [
     "They always used unusual materials.",
     "They both became very famous.",
     "They were both risk takers.",
     "Their work always combined painting and sculpture."
    ],
    "answer": "C",
    "evidence": "what the two have in common is the willingness to innovate, take chances and be different",
    "explanation": "Ikkalasini birlashtiradigan asosiy jihat: yangilik qilish va tavakkal qilish (\"take chances\"). Mazmunan C: \"they were both risk takers\". Kitob kalitida A berilgan, lekin matnda ikkalasi ham \"doim\" g'ayrioddiy material ishlatgani aytilmagan."
   },
   {
    "q": "In what way are the artists' backgrounds similar?",
    "options": [
     "Their mothers were the most influential on them.",
     "They were born in America to families with ancestry in Europe.",
     "Their families pushed them to go to Art School.",
     "Their families moved to New York."
    ],
    "answer": "B",
    "evidence": "Both were of European heritage, born to working class families",
    "explanation": "Ikkalasi ham Amerikada, ajdodlari Yevropadan bo'lgan oilada tug'ilgan. B."
   }
  ]
 },
 {
  "n": 4,
  "title": "Modern and post-modern sculpture",
  "body": "Modern sculpture has its origins in the work of Frenchman Auguste Rodin. Born into a modest family in 1840, Rodin began his creative journey in the 1860s, a journey that would lead to him being remembered as the 'bridge' between traditional and modern sculpture. Before Rodin, sculpture told stories about the past: religion, history, myth and literature. Sculptures typically left little to the imagination. Figures tended to be idealized in some way to avoid any imperfections of the model. Rodin can be considered a realist in that he refused to improve on what he saw in front of him. He considered all of nature beautiful and if a model was old and wrinkled, he would be portrayed as such. Moreover, like much of the art that he helped inspire for later generations, his work spoke to the emotions and imagination: both his and his viewers'. The stories he told were internal and conceptual and there was no right or wrong way to interpret them.\n\nRodin was inspired by the fragments of Greek and Roman sculpture that were being discovered by archaeologists during his time. He was one of the first sculptors to treat fragments or parts of figures as complete works of art. One of his most famous works is Large hand of a pianist. In this piece he demonstrated one of the characteristics of Modern Art- to make visible things that are not, such as energy, sound and rhythm. He sculpted elongated fingers to make visible music being played effortlessly. Groundbreaking for its time, this concept has been taken forward by sculptors right up to the present day.\n\nRodin worked mainly in bronze and was fascinated by the effect of light on irregular surfaces. In particular, he realized that light bouncing off textured bronze surfaces could create the illusion of movement. He pioneered two new techniques: marcottage and assemblage. Marcottage means creating a new work by putting together pieces from different existing works. Assemblage, which was further developed later by artists like Picasso, began with Rodin's technique of repeatedly casting the same figure and using multiple casts to create a new piece.\n\nThe Late Modern Period (1900 to 1945), which saw the rise of extreme distortion - and then abstraction - in sculpture can be seen as a natural development from the pioneering work of Rodin. Romanian French sculptor Constantin Brancusi was one of the leading exponents of this style. He attempted to reduce the physical world to three basic forms: egg, pebble and grass blade. The development of Rodin's assemblage also continued and came to represent the building of sculptures rather than carving or moulding them. Picasso's sculptures were called 'Constructions' and used a range of different objects and materials. The rise of minimalism, a movement that reduces sculpture to its most essential features, comes very much from this tradition.\n\nThanks to the work of these 'forefathers', Modern sculpture embraces many forms and styles. It is increasingly common to see it created outdoors, often in view of the spectators. One form of outdoor sculpture is known as Earth Art, which is based on nature and makes use of rocks, branches, leaves, dirt, soil, water and other naturally occurring materials. Another offshoot is kinetic sculpture - sculpture that involves moving parts. Mobiles are one such example. Early examples had moving parts powered by wind or touch and later some were even powered by machines. Other pioneering forms of Modern sculpture include ice sculptures used in culinary art and sound sculptures - such as Aeolian harps 'played' by the wind.\n\nArt installations are another example of how sculpture has developed in the Modern and Post-modern eras. They can be defined as a work of art consisting of multiple components, often though not necessarily in mixed media, usually exhibited in an indoor gallery space in an arrangement specified by the artist. Installations are multi-sensory experiences built for a specific time and space. They are often highly imaginative and bring different materials together to create something original and unexpected. The audience is drawn to them because they are immersive, often allowing audience participation. One such installation was Cloud City, a huge construction created by Argentinian sculptor Tomas Saraceno. It consisted of 16 interconnected modules, 16.5 by 8.5 metres, displayed on the roof of the Metropolitan Museum of Art in New York. Visitors were able to walk up and inside the modules.",
  "gaps": [
   {
    "text": "One of Rodin's popular sculpture focuses on the ____ of an artist which were being used to play music without struggle.",
    "answer": "fingers"
   },
   {
    "text": "Rodin was surprised when he saw the reflection of the light on uneven ____.",
    "answer": "surfaces"
   },
   {
    "text": "Earth Art style of outdoor sculpture requires depending on ____ while developing a sculpture.",
    "answer": "nature"
   },
   {
    "text": "Art installations are usually so ____ and various materials are used for developing an extraordinary masterpiece.",
    "answer": "imaginative"
   }
  ],
  "mcq": [
   {
    "q": "Assemblage",
    "options": [
     "was first used by Pablo Picasso.",
     "uses only three basic forms.",
     "involves several artists working on the same theme.",
     "creates a single composition from a number of versions of an individual."
    ],
    "answer": "D",
    "evidence": "repeatedly casting the same figure and using multiple casts to create a new piece",
    "explanation": "Bitta figuraning bir nechta quymasidan yangi asar yaratiladi. D."
   },
   {
    "q": "Art installations",
    "options": [
     "always use mixed media.",
     "are always outdoors.",
     "usually allow viewers to interact with them.",
     "typically last a long time."
    ],
    "answer": "C",
    "evidence": "often allowing audience participation",
    "explanation": "Installatsiyalar ko'pincha tomoshabinlarga ishtirok etish imkonini beradi. C. A va B noto'g'ri: \"not necessarily in mixed media\", \"usually ... indoor\"."
   }
  ]
 },
 {
  "n": 5,
  "title": "The future of journalism",
  "body": "It is not only on sites like Facebook and Twitter that amateur journalism is on the rise. There are now open publishing sites, such as the Independent Media Center or 'Indymedia', which aim to bring a 'grassroots dimension' into the news arena. Ohmynews, one of South Korea's most influential online sources for the latest in current affairs, has 2 million readers every day and a nationwide army of 26,000 'citizen' journalists. More and more often these citizen journalists and open sites are getting the scoop on major stories. The first mention of the problems facing the doomed space shuttle Columbia appeared on an online discussion forum 11 minutes before the Associated Press broke the news. What is more, there has been a fundamental change in how we interact with the news. Nowadays, with the growth in online versions of newspapers, the public can easily comment, point out errors, and share alternative viewpoints. These opportunities are particularly vital if you find yourself the subject of a news story - whether for positive or negative reasons. If the story involves you, you can provide vital context and supplementary information which can change readers' views on your story. When this trend for participatory media was in its infancy, there was plenty of mistrust of amateur 'journalists' who lacked the credentials of journalists working in established media outlets. If a story didn't come from well-known news organizations like CNN or The Times, it wasn't taken seriously. Now that perception is changing. Trust in alternative media sources is growing. In fact, mainstream media now regularly recruit members of their own staff from the ranks of amateur news bloggers. Simultaneously, there has been a general shift away from a 'broadcast model', in which the few broadcast to the many, towards a more inclusive model in which the audience can play an active role. The traditional 'filter then publish' news model has been replaced by 'publish then filter', with millions of keen amateurs involved at all stages of the process. Of course, like anything else, participatory journalism has its critics and in particular there are those who claim that news reporting on social media is used to manipulate people and even spread misinformation or 'fake news'. Whilst this is no doubt true in some cases, it is a sweeping generalization. For example, during the 2011 London riots, it was widely reported on mainstream media that the rioters and looters used social media to spread news about what was happening and to incite others towards violence and protest. However, what is interesting is that the event has now been studied in detail and it has been revealed that this was not the case. In actual fact, citizen journalists played a positive role as the situation unfurled. They were the first to alert the authorities to early incidents of rioting taking place, and helped the police identify offenders by photographing them in the act and sharing the photos on social media. Without ordinary Londoners responding to news in this way, many of the perpetrators would most likely have escaped justice.",
  "gaps": [
   {
    "text": "The approach of people towards the ____ changed significantly in recent years.",
    "answer": "news"
   },
   {
    "text": "When the ____ find any mistakes in the articles of online newspapers, they tend to reply immediately.",
    "answer": "public"
   },
   {
    "text": "The real-life participants of some news can provide ____ data which may change the views of the public towards this news.",
    "answer": "supplementary"
   },
   {
    "text": "Citizen journalists helped police to find criminals who participated in riots through ____.",
    "answer": "photos"
   }
  ],
  "mcq": [
   {
    "q": "What has amateur journalism been accused of increasing the risk of?",
    "options": [
     "fake news",
     "critical thinking",
     "untrue stories"
    ],
    "answer": "A",
    "evidence": "used to manipulate people and even spread misinformation or 'fake news'",
    "explanation": "Tanqidchilar havaskor jurnalistlarni soxta yangilik tarqatishda ayblaydi. A."
   },
   {
    "q": "What did citizen journalists help police to do during the London riots?",
    "options": [
     "play a positive role",
     "identify offenders",
     "alert the authorities"
    ],
    "answer": "B",
    "evidence": "helped the police identify offenders by photographing them in the act",
    "explanation": "Fuqaro jurnalistlar huquqbuzarlarni suratga olib, politsiyaga ularni aniqlashda yordam bergan. B."
   }
  ]
 },
 {
  "n": 6,
  "title": "A biography of Kilian Jornet",
  "body": "When you picture mountain climbers scaling Mount Everest, what probably comes to mind are teams of climbers with Sherpa guides leading them to the summit, equipped with oxygen masks, supplies and tents. And in most cases you'd be right, as 97 per cent of climbers use oxygen to ascend to Everest's summit at 8,850 metres above sea level. The thin air at high altitudes makes most people breathless at 3,500 metres, and the vast majority of climbers use oxygen past 7,000 metres. A typical climbing group will have 8-15 people in it, with an almost equal number of guides, and they'll spend weeks to get to the top after reaching Base Camp.\n\nBut ultra-distance and mountain runner Kilian Jornet Burgada ascended the mountain in May 2017 alone, without an oxygen mask or fixed ropes for climbing.\n\nOh, and he did it in 26 hours.\n\nWith food poisoning.\n\nAnd then, five days later, he did it again, this time in only 17 hours.\n\nBorn in 1987, Kilian has been training for Everest his whole life. And that really does mean his whole life, as he grew up 2,000 metres above sea level in the Pyrenees in the ski resort of Lles de Cerdanya in Catalonia, north-eastern Spain. While other children his age were learning to walk, Kilian was on skis. At one and a half years old he did a five-hour hike with his mother, entirely under his own steam. He left his peers even further behind when he climbed his first mountain and competed in his first cross-country ski race at age three. By age seven, he had scaled a 4,000er and, at ten, he did a 42-day crossing of the Pyrenees.\n\nHe was 13 when he says he started to take it 'seriously' and trained with the Ski Mountaineering Technical Centre (CTEMC) in Catalonia, entering competitions and working with a coach. At 18, he took over his own Ski-mountaineering and trail-running training, with a schedule that only allows a couple of weeks of rest a year. He does as many as 1,140 hours of endurance training a year, plus strength training and technical workouts as well as specific training in the week before a race. For his record-breaking ascent and descent of the Matterhorn, he prepared by climbing the mountain ten times until he knew every detail of it, even including where the sun would be shining at every part of the day.\n\nSleeping only seven hours a night, Kilian Jornet seems almost superhuman. His resting heartbeat is extremely low at 33 beats per minute, compared with the average man's 60 per minute or an athlete's 40 per minute. He breathes more efficiently than average people too, taking in more oxygen per breath, and he has a much faster recovery time after exercise as his body quickly breaks down lactic acid - the acid in muscles that causes pain after exercise.\n\nAll this is thanks to his childhood in the mountains and to genetics, but it is his mental strength that sets him apart. He often sets himself challenges to see how long he can endure difficult conditions in order to truly understand what his body and mind can cope with. For example, he almost gave himself kidney failure after only drinking 3.5 litres of water on a 100km run in temperatures of around 400C.\n\nIt would take a book to list all the races and awards he's won and the mountains he's climbed. And even here, Kilian's achievements exceed the average person as, somehow, he finds time to record his career on his blog and has written three books, Run or Die, The Invisible Border and Summits of My Life.",
  "gaps": [
   {
    "text": "The ____ of Kilian were lacking behind him when he climbed the mountain for the first time.",
    "answer": "peers"
   },
   {
    "text": "At the age of ____ he saw mountaineering as more than a hobby.",
    "answer": "13"
   },
   {
    "text": "Kilian managed to take only a few days offs during a year because of his busy training ____ at the age of 18.",
    "answer": "schedule"
   },
   {
    "text": "There were two essential reasons for the strong health of Kilian such as mountains and ____.",
    "answer": "genetics"
   }
  ],
  "mcq": [
   {
    "q": "The majority of climbers on Everest",
    "options": [
     "need oxygen to finish their ascent.",
     "are accompanied.",
     "make slow progress to the top.",
     "all of the above."
    ],
    "answer": "D",
    "evidence": "97 per cent of climbers use oxygen to ascend to Everest's summit",
    "explanation": "Ko'pchilik kislorod ishlatadi, gid bilan boradi va tepaga haftalab chiqadi, ya'ni hamma variant to'g'ri. D."
   },
   {
    "q": "Kilian partly owes his incredible fitness to ...",
    "options": [
     "the way he makes extra time for sleep.",
     "his ability to recover from injury.",
     "where he grew up.",
     "all of the above."
    ],
    "answer": "C",
    "evidence": "All this is thanks to his childhood in the mountains and to genetics",
    "explanation": "Uning chidamliligi qisman tog'da o'sgani tufayli. C."
   }
  ]
 },
 {
  "n": 7,
  "title": "A threat to bananas",
  "body": "In the 1950s, Central American commercial banana growers were facing the death of their most lucrative product, the Gros Michel banana, known as Big Mike. And now it's happening again to Big Mike's successor - the Cavendish.\n\nWith its easily transported, thick-skinned and sweet-tasting fruit, the Gros Michel banana plant dominated the plantations of Central America. United Fruit, the main grower and exporter in South America at the time, mass-produced its bananas in the most efficient way possible: it cloned shoots from the stems of plants instead of growing plants from seeds, and cultivated them in densely packed fields.\n\nUnfortunately, these conditions are also perfect for the spread of the fungus Fusarium oxysporum f. sp. cubense, which attacks the plant's roots and prevents it from transporting water to the stem and leaves. The TR-I strain of the fungus was resistant to crop sprays and travelled around on boots or the tyres of trucks, slowly infecting plantations across the region. In an attempt to escape the fungus, farmers abandoned infected fields, flooded them and then replanted crops somewhere else, often cutting down rainforest to do so.\n\nTheir efforts failed. So, instead, they searched for a variety of banana that the fungus didn't affect. They found the Cavendish, as it was called, in the greenhouse of a British duke. It wasn't as well suited to shipping as the Gros Michel, but its bananas tasted good enough to keep consumers happy. Most importantly, TR-I didn't seem to affect it. In a few years, United Fruit had saved itself from bankruptcy by filling its plantations with thousands of the new plants, copying the same monoculture growing conditions Gros Michel had thrived in.\n\nWhile the operation was a huge success for the Latin American industry, the Cavendish banana itself is far from safe. In 2014, South East Asia, another major banana producer, exported four million tons of Cavendish bananas. But, in 2015, its exports had dropped by 46 per cent thanks to a combination of another strain of the fungus, TR-4, and bad weather.\n\nGrowing practices in South East Asia haven't helped matters. Growers can't always afford the expensive lab-based methods to clone plants from shoots without spreading the disease. Also, they often aren't strict enough about cleaning farm equipment and quarantining infected fields. As a result, the fungus has spread to Australia, the Middle East and Mozambique - and Latin America, heavily dependent on its monoculture Cavendish crops, could easily be next.\n\nRacing against the inevitable, scientists are working on solving the problem by genetically modifying the Cavendish with genes from TR-4-resistant banana species. Researchers at the Queensland University of Technology have successfully grown two kinds of modified plant which have remained resistant for three years so far. But some experts think this is just a sophisticated version of the same temporary solution the original Cavendish provided. If the new bananas are planted in the same monocultures as the Cavendish and the Gros Michel before it, the risk is that another strain of the disease may rise up to threaten the modified plants too.",
  "gaps": [
   {
    "text": "The distinct feature of United Fruit is that this company doesn't use any ____ for growing banana plants.",
    "answer": "seeds"
   },
   {
    "text": "In search of suitable fields for the cultivation of banana plants, ____ was destroyed too.",
    "answer": "rainforest"
   },
   {
    "text": "The United Fruit managed to protect itself from facing ____ after the cultivation of new banana plants.",
    "answer": "bankruptcy"
   },
   {
    "text": "For the last 3 years, the new types of banana plants were ____ against threats like fungus.",
    "answer": "resistant"
   }
  ],
  "mcq": [
   {
    "q": "The spread of the TR-I strain was ...",
    "options": [
     "caused by lack of water.",
     "speeded up by the flooding of banana fields.",
     "slowed down by crop spraying.",
     "helped by the movement of people and vehicles."
    ],
    "answer": "D",
    "evidence": "travelled around on boots or the tyres of trucks",
    "explanation": "Zamburug' odamlarning etigi va yuk mashinalari g'ildiragida tarqalgan. D."
   },
   {
    "q": "South East Asia's Cavendish exports fell in 2015 because ...",
    "options": [
     "a new strain of the fungus has developed.",
     "farmers can't afford new farming technology.",
     "they had to quarantine their fruit.",
     "they depended too much on other countries."
    ],
    "answer": "A",
    "evidence": "thanks to a combination of another strain of the fungus, TR-4, and bad weather",
    "explanation": "Eksport zamburug'ning yangi turi TR-4 va yomon ob-havo tufayli kamaygan. A."
   }
  ]
 },
 {
  "n": 8,
  "title": "Cultural behavior in business",
  "body": "Much of today's business is conducted across international borders, and while the majority of the global business community might share the use of English as a common language, the nuances and expectations of business communication might differ greatly from culture to culture. A lack of understanding of the cultural norms and practices of our business acquaintances can result in unfair judgements, misunderstandings and breakdowns in communication. Here are three basic areas of differences in the business etiquette around the world that could help stand you in good stead when you next find yourself working with someone from a different culture.\n\nAddressing someone When discussing this topic in a training course, a German trainee and a British trainee got into a hot debate about whether it was appropriate for someone with a doctorate to use the corresponding title on their business card. The British trainee maintained that anyone who wasn't a medical doctor expecting to be addressed as 'Dr' was disgustingly pompous and full of themselves. The German trainee, however, argued that the hard work and years of education put into earning that PhD should give them full rights to expect to be addressed as 'Dr'.\n\nThis stark difference in opinion over something that could be conceived as minor and thus easily overlooked goes to show that we often attach meaning to even the most mundane practices. When things that we are used to are done differently, it could spark the strongest reactions in us. While many Continental Europeans and Latin Americans prefer to be addressed with a title, for example Mr or Ms and their surname when meeting someone in a business context for the first time, Americans, and increasingly the British, now tend to prefer using their first names. The best thing to do is to listen and observe how your conversation partner addresses you and, if you are still unsure, do not be afraid to ask them how they would like to be addressed.\n\nSmiling A famous Russian proverb states that 'a smile without reason is a sign of idiocy' and a so-called 'smile of respect' is seen as insincere and often regarded with suspicion in Russia. Yet in countries like the United States, Australia and Britain, smiling is often interpreted as a sign of openness, friendship and respect, and is frequently used to break the ice.\n\nIn a piece of research done on smiles across cultures, the researchers found that smiling individuals were considered more intelligent than non-smiling people in countries such as Germany, Switzerland, China and Malaysia. However, in countries like Russia, Japan, South Korea and Iran, pictures of smiling faces were rated as less intelligent than the non-smiling ones. Meanwhile, in countries like India, Argentina and the Maldives, smiling was associated with dishonesty.\n\nEye contact An American or British person might be looking their client in the eye to show that they are paying full attention to what is being said, but if that client is from Japan or Korea, they might find the direct eye contact awkward or even disrespectful. In parts of South America and Africa, prolonged eye contact could also be seen as challenging authority. In the Middle East, eye contact across genders is considered inappropriate, although eye contact within a gender could signify honesty and truthfulness.",
  "gaps": [
   {
    "text": "people from Latin America like to be called with a ____ as well as their surnames when they meet with a person for the first time.",
    "answer": "title"
   },
   {
    "text": "While people from the United States or Australia regard smiling with no reason normally, Russian people may have a ____ if somebody smiles without reason.",
    "answer": "suspicion"
   },
   {
    "text": "people judge differently whether or not you are ____ depending on your smile in different countries.",
    "answer": "intelligent"
   },
   {
    "text": "It is ____ to make eye contact with a person from another gender in the Middle East.",
    "answer": "inappropriate"
   }
  ],
  "mcq": [
   {
    "q": "If you are not sure how to address someone, you should ...",
    "options": [
     "use the title you see on their business card.",
     "make your decision based on cultural stereotypes about their country.",
     "address them the way you'd like to be addressed.",
     "ask them what they would like you to call them."
    ],
    "answer": "D",
    "evidence": "do not be afraid to ask them how they would like to be addressed",
    "explanation": "Ishonchingiz komil bo'lmasa, qanday murojaat qilishni so'rang. D."
   },
   {
    "q": "Americans and British people sometimes use eye contact to show that they ...",
    "options": [
     "like the speaker.",
     "are really listening to what is being said.",
     "are honest and truthful.",
     "are attending to every need of the speaker."
    ],
    "answer": "B",
    "evidence": "to show that they are paying full attention to what is being said",
    "explanation": "Ko'zga qarash diqqat bilan tinglayotganini bildiradi. B."
   }
  ]
 },
 {
  "n": 9,
  "title": "Four positive books about the world",
  "body": "Factfulness - Hans Rosling with Ola Rosling and Anna Rosling Rönnlund In Factfulness, Professor Hans Rosling, along with two collaborators, asks simple questions about the world. Questions like 'How many girls finish school?' and 'What percentage of the world's population is poor?' It turns out the majority of us get the answers to these questions completely wrong. Why does this happen? Factfulness sets out to explain why, showing that there are several instincts humans have that distort our perspective. For example, most people divide the world into US and THEM. In addition, we often believe that things are getting worse. And we are consuming large amounts of media that use a sales model based on making us afraid. But according to the authors, the world isn't as bad as we think. Yes, there are real concerns. But we should adopt a mindset of factfulness - only carrying opinions that are supported by strong facts. This book is not concerned with the underlying reasons for poverty or progress, or what should be done about these issues. It focuses on our instinctive biases, offering practical advice to help us see the good as well as the bad in the world.\n\nEnlightenment Now - Steven Pinker Are things getting worse every day? Is progress an impossible goal? In Enlightenment Now, Steven Pinker looks at the big picture of human progress and finds good news. We are living longer, healthier, freer and happier lives.\n\nPinker asks us to stop paying so much attention to negative headlines and news that declares the end of the world. Instead, he shows us some carefully selected data. In 75 surprising graphs, we see that safety, peace, knowledge and health are getting better all over the world. When the evidence does not support his argument, however, he dismisses it. Economic inequality, he claims, is not really a problem, because it is not actually that important for human well-being. One cannot help wondering how many people actually living in poverty would agree.\n\nThe real problem, Pinker argues, is that the Enlightenment values of reason and science are under attack. When commentators and demagogues appeal to people's tribalism, fatalism and distrust, then we are in danger of causing irreparable damage to important institutions like democracy and world co-operation.\n\nThe Rational Optimist - Matt Ridley For more than two hundred years the pessimists have been winning the public debate. They tell us that things are getting worse. But in fact, life is getting better. Income, food availability and lifespan are rising; disease, violence and child mortality are falling. These trends are happening all around the world. Africa is slowly coming out of poverty, just as Asia did before. The internet, mobile phones and worldwide trade are making the lives of millions of people much better.\n\nBest-selling author Matt Ridley doesn't only explain how things are getting better; he gives us reasons why as well. He shows us how human culture evolves in a positive direction thanks to the exchange of ideas and specialisation. This bold book looks at the entirety of human history - from the Stone Age to the 21st century - and changes the notion that it's all going downhill. The glass really is half-full.",
  "gaps": [
   {
    "text": "In Factfulness, the author states that people have ____ which tend to distract their outlook.",
    "answer": "instincts"
   },
   {
    "text": "In Factfulness, the author points out that there are certain factors that contribute to the development of countries and unfortunately, reasons for ____.",
    "answer": "poverty"
   },
   {
    "text": "The ____ which Pinker collected demonstrate that the overall well-being of the world's population is getting better in general.",
    "answer": "data"
   },
   {
    "text": "Apart from describing how people's lives are getting better, Ridley also provided exact ____ for this trend.",
    "answer": "reasons"
   }
  ],
  "mcq": [
   {
    "q": "Which book covers a long period of human history?",
    "options": [
     "Factfulness",
     "Enlightenment Now",
     "The Rational Optimist",
     "None of these"
    ],
    "answer": "C",
    "evidence": "looks at the entirety of human history - from the Stone Age to the 21st century",
    "explanation": "\"The Rational Optimist\" tosh asridan XXI asrgacha bo'lgan butun insoniyat tarixini ko'rib chiqadi. C."
   },
   {
    "q": "Which book claims that human intuition negatively affects the way people think about the world?",
    "options": [
     "Factfulness",
     "Enlightenment Now",
     "The Rational Optimist",
     "None of the above"
    ],
    "answer": "A",
    "evidence": "there are several instincts humans have that distort our perspective",
    "explanation": "\"Factfulness\" insonning instinktlari dunyoqarashni buzishini aytadi. A."
   }
  ]
 },
 {
  "n": 10,
  "title": "Giving and receiving feedback",
  "body": "Your manager stops you and says she needs to have a word about your performance in the recent project. You worry about it all weekend, wondering what you might have done wrong. When you step into her office on Monday morning she begins by praising you for the good work you've done on the project, and you wonder if this is the obligatory praise that starts off the typical 'feedback sandwich'. You know how the feedback sandwich goes: say something nice, say what you really want to say, say something nice again.\n\nIn an attempt to inject some positivity into their feedback, many managers rely on sandwiching negative feedback between two positive comments. However, when feedback becomes such a routine, employees can start to perceive positive feedback as simply a form of sugarcoating the negatives, thus diminishing its value. Instead, positive feedback should not simply be seen as something to cushion the negative, but should be delivered so as to reinforce and encourage good performance. Below are three tips to help you make positive feedback count.\n\n1. Don't always follow positive feedback with negative feedback When positive and negative feedback always appear to go hand in hand, the positives can become devalued and ignored. Ensure there are times when positive feedback is given for its own sake and resist the temptation to offer constructive criticism.\n\n2. Cultivate a 'growth mindset'\n\nPsychologist and 'growth mindset' proponent Carol Dweck spoke of the plasticity of the brain and our ability to develop skills and talents that we might not have been good at to start with. Many of us tend to focus our praise on the end result and seemingly innate talents, e.g. 'You really have an eye for details' or 'You have a real talent for organising events'. However, research suggests that by focusing on the process of how things are done - praising effort, experimentation and problem-solving strategies - we can encourage the development of new skills and the continued honing of talents.\n\n3. Create a culture of offering positive feedback Make giving positive feedback part of your team/department/company culture. Don't just wait for special moments like appraisals to give feedback. Offer informal positive feedback when making small talk or when walking down a corridor. Feedback doesn't have to only come from the higher ranks either. Encourage peer feedback among team members and colleagues and actively ask them for positive comments on each other's performances. It might take time to counter the effects of an environment where there is a cynical view of positive feedback, but in the long run, by embracing positive feedback, you can not only enhance working performance but also enrich the quality of life in the workplace.",
  "gaps": [
   {
    "text": "Managers often use the strategy of ____ negative feedback after and before positive comments which results in decreasing the value of positive comments.",
    "answer": "sandwiching"
   },
   {
    "text": "Dweck claims that it is more important to pay much attention to the ____ of successful works done by employees rather than focusing on the final result.",
    "answer": "process"
   },
   {
    "text": "It is advised not to wait for special occasions for giving positive feedback since it is possible to give positive feedback frequently which is actually ____.",
    "answer": "informal"
   },
   {
    "text": "Although people still have ____ perspectives towards positive feedback, this will not last long since it improves work efficiency.",
    "answer": "cynical"
   }
  ],
  "mcq": [
   {
    "q": "What does the 'feedback sandwich' involve?",
    "options": [
     "Giving positive feedback by accompanying it with negative feedback",
     "Giving negative feedback by accompanying it with positive feedback",
     "Creating a feedback culture in an organization",
     "Devaluing positive feedback"
    ],
    "answer": "B",
    "evidence": "sandwiching negative feedback between two positive comments",
    "explanation": "Salbiy fikr ikki ijobiy fikr orasiga qo'yiladi. B."
   },
   {
    "q": "The 'growth mindset' idea is that ...",
    "options": [
     "we can become good at things that we might initially not seem to have a talent for.",
     "we should focus on honing the talents that we are born with.",
     "the end result is more important than the process.",
     "we must not tell people that they are good at certain things."
    ],
    "answer": "A",
    "evidence": "our ability to develop skills and talents that we might not have been good at to start with",
    "explanation": "Boshida yaxshi bo'lmagan ishni ham o'rganib, rivojlantirish mumkin. A."
   }
  ]
 },
 {
  "n": 11,
  "title": "A Good Night's Sleep",
  "body": "Air pollution might be linked to poor sleep, say researchers looking into the impact of toxic air on our slumbers. The study explored the proportion of time participants spent asleep in bed at night compared with being awake - a measure known as sleep efficiency. The results reveal that greater exposure to nitrogen dioxide and small particulates known as PM 2.5s are linked with a greater chance of having low sleep efficiency. That, researchers say, could be down to the impact of air pollution on the body.\n\n'Your nose, your sinuses and the back of your throat can all be irritated by those pollutants so that can cause some sleep disruption,' said Martha Billings, assistant professor of medicine at the University of Washington and co-author of the research. The study drew on air pollution data captured for nitrogen dioxide and PM2.5 levels over a five-year period in six US cities, including data captured near the homes of the 1,863 participants. The data was then used to provide estimates of pollution levels in the home. From the results, the team grouped the participants according to their sleep efficiency, finding that the top quarter of the participants had a sleep efficiency of about 93% or higher, while the bottom quarter had a sleep efficiency of 88% or less. The team then took all of the participants and split them into four groups based on their exposure to air pollution. After taking into account a host of factors including age, smoking status and conditions such as obstructive sleep apnea, the team found that those who were exposed to the highest levels of air pollution over five years were more likely to be in the bottom group for sleep efficiency than those exposed to the lowest levels.\n\nMore specifically, high levels of nitrogen dioxide increased the odds of having low sleep efficiency by almost 60%, while high levels of PM2.5s increased the odds by almost 50%. Higher levels of pollution were also linked to greater periods of time spent awake after going to sleep. However, it is not clear whether the pollution itself was affecting the participants' sleep or whether the poorer sleep quality might be down to other factors linked to pollution, such as the noise generated by traffic. In addition, data from one week's sleep might not reflect an individual's typical sleep pattern.\n\nScott Weichenthal, an epidemiologist from McGill University in Canada, who was not involved in the study, said the research did not prove that air pollution caused poor sleep, but he added that 'There is certainly increasing evidence that air pollution affects our body in ways that we didn't appreciate before.' Roy Harrison, professor of environmental health at the university of Birmingham, said a link between pollution and sleep was not unexpected. 'Previous research has shown associations between nitrogen dioxide exposures and effects upon various physiological and biochemical functions in the body, as well as hospital admissions and mortality,' he said. should therefore come as no surprise that such exposures also affect sleep patterns.'",
  "gaps": [
   {
    "text": "The researchers found that there are 2 essential reasons for low sleep efficiency such as taking more nitrogen dioxide as well as tiny ____ during the day.",
    "answer": "particulates"
   },
   {
    "text": "The levels of air pollution were measured during a half-decade in the houses of ____ research subjects.",
    "answer": "1,863/1863"
   },
   {
    "text": "The participants of the research were then divided into several groups depending on the rate of their ____ to air pollution.",
    "answer": "exposure"
   },
   {
    "text": "Harrison states that it is not actually ____ to observe the relationship between pollution and sleep efficiency.",
    "answer": "unexpected"
   }
  ],
  "mcq": [
   {
    "q": "Why does the writer explain how the researchers separated the participants into different groups?",
    "options": [
     "To show that it made the research easier to control.",
     "To illustrate how the research was more balanced.",
     "To explain how the researchers wanted to compare the effects of different parameters.",
     "To show the research was easy to explain."
    ],
    "answer": "C",
    "evidence": "split them into four groups based on their exposure to air pollution",
    "explanation": "Ishtirokchilar uyqu samaradorligi va ifloslanish darajasiga qarab guruhlarga bo'lingan, so'ng turli omillar ta'siri solishtirilgan. C."
   },
   {
    "q": "The writer quotes the opinion of other scientists not involved in the study to ...",
    "options": [
     "show that some experts feel the data didn't prove a causal relationship between sleep efficiency and pollution.",
     "demonstrate the research was poorly done.",
     "explain the size of the group was inadequate.",
     "state the study should be repeated."
    ],
    "answer": "A",
    "evidence": "said the research did not prove that air pollution caused poor sleep",
    "explanation": "Tadqiqotda qatnashmagan olim natija sabab-oqibatni isbotlamaganini aytadi. A."
   }
  ]
 },
 {
  "n": 12,
  "title": "Superfast earthquakes",
  "body": "California may be in danger of losing its major cities. Several along the coast were built upon a dangerous section of fault line known for ferocity and speed. Some faults can send earthquakes zooming along the ground faster than the speed of sound, scientists say—and California's San Andreas Fault may be one of them. Most earthquake faults \"unzip\" at around 3 kilometers a second. But evidence is growing that some faults can send quakes zooming much faster—up to 6 kilometers a second. \"They are moving faster than the speed of sound, like a sonic boom,\" said Reah Kapur, a seismologist at Wentworth University in the U.K. These hasty earthquakes cause much more damage on the ground and are more likely to topple buildings, snap bridges, and crinkle highways than regular upheavals. Now it turns out that the San Andreas Fault may be one of these earthquake \"superhighways.\" It has taken Kapur nearly 30 years to prove their existence because superfast earthquakes are rare. But on February 12, 2006, a magnitude 7.6 earthquake struck the Khatota coastal region of Madagascar. That quake unzipped over 500 kilometers of fault, providing the long-awaited opportunity. Kapur and her colleagues, by studying the seismic activity, have been able to map out the earthquake's trek. \"The quake started slowly, but then accelerated to speeds of a super shear-wave speed, traveling for more than 100 kilometers at a speed of nearly 6 kilometers per second, Kapur said. Kapur and colleagues also realized that the fast section of the Madagascar fault happened to be very long and straight, like a true beam. \"When a fault has curves and bends in it, then the earthquake slows,\" Kapur said. \"But on a long straightaway, it can reach breakneck speeds.\" Theories are now abound concerning the reason for the colossal damage caused by California's 1904 earthquake. \"Directly beneath San Francisco is a long straight section,\" Kapur said. Efforts are underway to effectively utilize this information. \"Much can be done to ensure buildings can cope with the higher frequencies of a faster wave,\" said Lacy Underawl, a seismologist at Nebraska State University, who wasn't involved in Kapur's work. \"New buildings can be built on balls and located on bedrock rather than soft sediments,\" she added. San Francisco isn't the only major city at risk. Further down the San Andreas Fault, another section of \"freeway\" exists underneath the Carrizo Plain down to the Baja Peninsula, Kapur and colleagues say. \"As an earthquake moves along this section it is likely to send out shock waves in front, which may focus on cities like Modesto, Santa Cruz, and Los Angeles, some of the most densely populated parts of California,\" Kapur said. In a presentation to the National Academy of Subterranean Associates, Kapur outlined the need to classify all the world's fissures according to their probable earthquake speed. She believes that communities can be better prepared if faults are better categorized.",
  "gaps": [
   {
    "text": "Rapid earthquakes may lead to more damage than upheavals since they can destroy constructions and ____ main roads.",
    "answer": "crinkle"
   },
   {
    "text": "The earthquake which occurred in Madagascar was a good ____ for Kapur and her colleagues for observing the seismic activity more deeply.",
    "answer": "opportunity"
   },
   {
    "text": "Underawl advised that it is not suitable to locate new constructions on ____.",
    "answer": "sediments"
   },
   {
    "text": "Kapur mentioned that categorizing fissures in the world is so beneficial because it allows ____ to be ready for possible faults.",
    "answer": "communities"
   }
  ],
  "mcq": [
   {
    "q": "The major cities of California are in danger, because...",
    "options": [
     "the earthquakes are too frequent in the region.",
     "a number of them are located above faults.",
     "the faults are ferocious and zoom faster than sound.",
     "San Andreas is an active fault."
    ],
    "answer": "B",
    "evidence": "Several along the coast were built upon a dangerous section of fault line",
    "explanation": "Qirg'oqdagi bir nechta shahar xavfli yoriq ustiga qurilgan. B."
   },
   {
    "q": "The seismic activity...",
    "options": [
     "has to reach 7.6 to be a superfast earthquake.",
     "reached the 100 km per minute speed in the Khatota region.",
     "changed speed and became a superfast earthquake.",
     "studies helped Kapur predict where to expect the earthquake."
    ],
    "answer": "C",
    "evidence": "The quake started slowly, but then accelerated to speeds of a super shear-wave speed",
    "explanation": "Zilzila sekin boshlanib, keyin tezlashgan va o'ta tez zilzilaga aylangan. C."
   }
  ]
 },
 {
  "n": 13,
  "title": "A common cause of illness",
  "body": "Sometimes there is a common cause for apparently different illnesses. Take for instance various kinds of tumors, which are groupings of cells continuously separating. And lately, a spectacular medical theory has developed. It speculates how illnesses of the central nervous system — such as Lou Gehrig's disease, AIDS and rubella — use a similar process of reproduction. The theory replaces the idea of continuous re-creation with the idea that the body does not remove its own waste properly. Normally, the cause of these diseases is mishandled plutons. What keeps the system busy, is the process of collecting the waste of healthy cells. Carrier cells pick up the waste as they travel through the blood stream and deposit it in waste depots. Healthy cells create plenty of junk that keep the system busy. The process includes compressing the waste by the means of folding. This can be a lengthy process and with so many steps, that an error is likely to occur. In such a case, the waste must be removed before it causes damage to any serious degree. In a recent issue of the Pacific Rim Journal of Medicine, Al Chervik of Tokyo Medical School, who helped discover the proteasome 20 years ago, explained the process of the biological waste-disposal system when the brain is infected by a particularly nasty, communicable protein called a pluton. Plutons cause Kluziod-Johan disease (or \"wasting disease\" in deer) by reorganizing the structure of normal proteins in their own image. Dr CherVik proposes that small groups of plutons penetrate the waste-processing proteasome and cease the cellular garbage disposal. Waste material would remain in the brain and the accumulating toxins would kill the nerve cells. Experimentations on how plutons disrupt nerve cells have revealed the transformation of the brain into a semi-hard substance. The astonishingly young Janice Laub of Ripon College, was successfully able to demonstrate this process by using a Petri dish of mouse nerve cells and an incandescent reading lamp. Her results clearly showed how the cells had been transformed to a waste acid.\n\nThe whole process began with Laub administering a deadly substance to the nerve cells with disease-causing plutons. This caused the cells to degrade quickly and create a loose inner core. The plutons passed though the cells skin, then gathered in bunches and liquidated the center. She then administered an antidote that isolated the accumulated plutons, but left the cell's essential components. The hypothesis was proven as the cell regained its faculties and was able to begin removing waste.\n\nLiving pelicans were used in a separate experiment, and similar results were proven. When the pelicans were infected with plutons, toxins collected in their brains. The toxin was connected to amino acids slated for disposal. However, once the plutons had entered the brain, the garbage managed to remain.\n\nLaub's results support the hypothesis that brain cells are motivated by plutons to make long latent viruses come back. She further speculated that these viruses might even carry plutons to other nerve cells, spreading the infection and causing even greater damage to other parts of the brain. If that idea proves correct, plutons would provide many answers to tumor creation.",
  "gaps": [
   {
    "text": "The waste which is generated in the ____ cells is later collected by another cell responsible for delivering it in depots.",
    "answer": "healthy"
   },
   {
    "text": "It is not surprising to observe an ____ due to the complex and long-lasting process of waste removal.",
    "answer": "error"
   },
   {
    "text": "The findings of Ripon's research demonstrate that plutons played an essential role in converting the cells into an ____.",
    "answer": "acid"
   },
   {
    "text": "Apart from the mouse, ____ were also applied in an observation to provide evidence on the direct impact of plutons on the collection of toxins in the brain.",
    "answer": "pelicans"
   }
  ],
  "mcq": [
   {
    "q": "The basis of the new theory is...",
    "options": [
     "the waste handling mechanisms of the cells.",
     "the continuous reproduction of cells.",
     "called plutons.",
     "the importance of keeping the body busy."
    ],
    "answer": "A",
    "evidence": "The theory replaces the idea of continuous re-creation with the idea that the body does not remove its own waste properly",
    "explanation": "Yangi nazariya hujayralar chiqindini qanday chiqarishiga asoslangan. A."
   },
   {
    "q": "An error is likely to occur, because...",
    "options": [
     "the process takes a long time.",
     "the process is difficult.",
     "it is bound to happen.",
     "plutons cause damage before they are handled."
    ],
    "answer": "B",
    "evidence": "This can be a lengthy process and with so many steps, that an error is likely to occur",
    "explanation": "Jarayon ko'p bosqichli va murakkab, shuning uchun xato bo'lishi mumkin. Kitob kalitida B (\"the process is difficult\")."
   }
  ]
 },
 {
  "n": 14,
  "title": "The sweet scent of success",
  "body": "One of Australia's latest innovation successes stems from a lemon-scented bathroom cleaner called Shower Power, the formula for which was concocted in a factory in Yatala, Queensland. In 1995, Tom Quinn and John Heron bought a struggling cleaning products business, OzKleen, for $250,000. It was selling 100 different kinds of cleaning products, mainly in bulk. The business was in bad shape, the cleaning formulas were ineffective and environmentally harsh, and there were few regular clients. Now Shower Power is claimed to be the top-selling bathroom cleaning product in the country. In the past 12 months, almost four million bottles of OzKleen's Power products have been sold and the company forecasts 2004 sales of 10 million bottles. The company's sales in 2003 reached $11 million, with 700k of business being exports. In particular, Shower Power is making big inroads on the British market.\n\nOzKleen's turnaround began when Quinn and Heron hired an industrial chemist to revitalize the product line. Market research showed that people were looking for a better cleaner for the bathroom, universally regarded as the hardest room in the home to clean. The company also wanted to make the product formulas more environmentally friendly. One of Tom Quinn's sons, Peter, aged 24 at the time, began working with the chemist on the formulas, looking at the potential for citrus-based cleaning products. He detested all the chlorine-based cleaning products that dominated the market. \"We didn't want to use chlorine, simple as that,\" he says. \"It offers bad working conditions and there's no money in it.\" Peter looked at citrus ingredients, such as orange peel, to replace the petroleum by-products in cleaners. He is credited with finding the Shower Power formula. \"The head,\" he says. The company is the recipe is in a vault somewhere and in my sole owner of the intellectual property.\n\nTo begin with, Shower Power was sold only in commercial quantities but Tom Quinn decided to sell it in 750ml bottles after the constant \"raves\" from customers at their retail store at Beenleigh, near Brisbane. Customers were traveling long distances to buy supplies. Others began writing to OzKleen to say how good Shower Power was. \"We did a dummy label and went to see Woolworths,\" Tom Quinn says. The Woolworths buyer took a bottle home and was able to remove a stain from her basin that had been impossible to shift. From that point on, she championed the product and OzKleen had its first supermarket order, for a palette of Shower Power worth $3000. \"We were over the moon,\" says OzKleen's financial controller, Belinda McDonnell.\n\nPeter Quinn says OzKleen's approach to research and development is open slather. \"If I need it, I get it. It is about doing something simple that no one else is doing. Most of these things are just sitting in front of people it's just seeing the opportunities.\" With a tried and tested product, OzKleen is expanding overseas and developing more Powerbrand household products. Tom Quinn, who previously ran a real estate agency, says: \"We are competing with the same market all over the world, the cleaning products are sold everywhere.\" Shower Power, known as Bath power in Britain, was launched four years ago with the help of an export development grant from the Federal Government. \"We wanted to do it straight away because we realized we had the same opportunities worldwide.\" OzKleen is already number three in the British market, and the next stop is France. The Power range includes cleaning products for carpets, kitchens and pre-wash stain removal. The Quinn and Heron families are still involved. OzKleen has been approached with offers to buy the company, but Tom Quinn says he is happy with things as they are. \"We're having too much fun.\"",
  "gaps": [
   {
    "text": "When Quinn and Heron started running OzKleen, the company used to sell various cleaning products, especially in ____.",
    "answer": "bulk"
   },
   {
    "text": "Peter Quinn argues that the use of ____ doesn't bring any financial profit to the company along with forcing employees to work in bad conditions.",
    "answer": "chlorine"
   },
   {
    "text": "In Woolworths, the problem of a customer related to her ____ was successfully sorted out after the use of Shower Power.",
    "answer": "basin"
   },
   {
    "text": "Peter Quinn points out that they have equal ____ across the world for entering to international markets like the British.",
    "answer": "opportunities"
   }
  ],
  "mcq": [
   {
    "q": "Tom Quinn changed the bottle size to 750ml to make Shower Power",
    "options": [
     "easier to package.",
     "appealing to individual customers.",
     "popular in foreign markets.",
     "attractive to supermarkets."
    ],
    "answer": "B",
    "evidence": "Tom Quinn decided to sell it in 750m",
    "explanation": "Mahsulot avval faqat katta hajmda sotilgan; do'kon xaridorlari maqtagach, oddiy xaridorlar uchun 750 ml shishada sotila boshlagan. B."
   },
   {
    "q": "Why did Tom Quinn decide not to sell OzKleen?",
    "options": [
     "No one wanted to buy OzKleen.",
     "New products were being developed in OzKleen.",
     "He couldn't arrange the price with the buyer.",
     "He wanted to keep things unchanged."
    ],
    "answer": "D",
    "evidence": "Tom Quinn says he is happy with things as they are",
    "explanation": "Kompaniyani sotib olish takliflari bo'lgan, lekin Tom hamma narsa hozirgidek qolishini xohlaydi. D."
   }
  ]
 },
 {
  "n": 15,
  "title": "How to spot a liar",
  "body": "However much we may abhor it, deception comes naturally to all living things. Birds do it by feigning injury to lead hungry predators away from nesting young. Spider crabs do it by disguise: adorning themselves with strips of kelp and other debris, they pretend to be something they are not - and so escape their enemies. Nature amply rewards successful deceivers by allowing them to survive long enough to mate and reproduce. So it may come as no surprise to learn that human beings- who, according to psychologist Gerald Johnson of the University of South California, are lied to about 200 times a day, roughly one untruth every 5 minutes- often deceive for exactly the same reasons: to save their own skins or to get something they can't get by other means.\n\nBut knowing how to catch deceit can be just as important a survival skill as knowing how to tell a lie and get away with it. A person able to spot falsehood quickly is unlikely to be swindled by an unscrupulous business associate or hoodwinked by a devious spouse. Luckily, nature provides more than enough clues to trap dissemblers in their own tangled webs if you know where to look. By closely observing facial expressions, body language and tone of voice, practically anyone can recognise the tell-tale signs of lying. Researchers are even programming computers - like those used on Lie Detector -to get at the truth by analysing the same physical cues available to the naked eye and ear. \"With the proper training, many people can learn to reliably detect lies,\" says Paul Ekman, professor of psychology at the University of California, San Francisco, who has spent the past 15 years studying the secret art of deception.\n\nIn order to know what kind of lies work best, successful liars need to accurately assess other people's emotional states. Ekman's research shows that this same emotional intelligence is essential for good lie detectors, too. The emotional state to watch out for is stress, the conflict most liars feel between the truth and what they actually say and do.\n\nEven high-tech lie detectors don't detect lies as such; they merely detect the physical cues of emotions, which may or may not correspond to what the person being tested is saying. Polygraphs, for instance, measure respiration, heart rate and skin conductivity, which tend to increase when people are nervous - as they usually are when lying. Nervous people typically perspire, and the salts contained in perspiration conducts electricity. That's why sudden leap in skin conductivity indicates nervousness -about getting caught, perhaps -which makes, in turn, suggest that someone is being economical with the truth. On the other hand, it might also mean that the lights in the television studio are too hot- which is one reason polygraph tests are inadmissible in court. \"Good lie detectors don't rely on a single thing\" says Ekman, but interpret clusters of verbal and non-verbal clues that suggest someone might be lying.\"\n\nThe clues are written all over the face. Because the musculature of the face is directly connected to the areas of the brain that processes emotion, the countenance can be a window to the soul. Neurological studies even suggest that genuine emotions travel different pathways through the brain than insincere ones. If a patient paralyzed by stroke on one side of the face, for example, is asked to smile deliberately, only the mobile side of the mouth is raised. But tell that same person a funny joke, and the patient breaks into a full and spontaneous smile. Very few people -most notably, actors and politicians are able to consciously control all of their facial expressions. Lies can often be caught when the liar's true feelings briefly leak through the mask of deception. We don't think before we feel, Ekman says. \"Expressions tend to show up on the face before we're even conscious of experiencing an emotion.\"",
  "gaps": [
   {
    "text": "Johnson mentions that the most common reason for deceiving people is to protect their ____.",
    "answer": "skin"
   },
   {
    "text": "Fortunately, there are more than enough ____ which are provided by the nature to detect a lying person.",
    "answer": "clues"
   },
   {
    "text": "One of the emotional states which should be observed carefully is ____ which puts liars in awkward situation.",
    "answer": "stress"
   },
   {
    "text": "The main reason for the rejection of polygraph tests in the court is ____.",
    "answer": "lights"
   }
  ],
  "mcq": [
   {
    "q": "Lie detectors can't be used as evidence in a court of law because",
    "options": [
     "lights often cause lie detectors to malfunction.",
     "they are based on too many verbal and non-verbal clues.",
     "polygraph tests are often inaccurate.",
     "there may be many causes of certain body behavior."
    ],
    "answer": "D",
    "evidence": "it might also mean that the lights in the television Studio are too hot",
    "explanation": "Terlash yolg'ondan ham, studiya chiroqlarining issiqligidan ham bo'lishi mumkin, ya'ni bitta tana belgisining sababi ko'p. Shuning uchun poligraf sudda dalil bo'lmaydi. D."
   },
   {
    "q": "Why does the author mention the paralyzed patients?",
    "options": [
     "To demonstrate how a paralyzed patient smiles",
     "To show the relation between true emotions and body behavior",
     "To examine how they were paralyzed",
     "To show the importance of happiness from recovery"
    ],
    "answer": "B",
    "evidence": "genuine emotions travel different pathways through the brain than insincere ones",
    "explanation": "Falaj bemor misolida haqiqiy his-tuyg'u va yuz ifodasi orasidagi bog'liqlik ko'rsatilgan. B."
   }
  ]
 },
 {
  "n": 16,
  "title": "The innovation of grocery stores",
  "body": "In 1885, a Virginia boy named Clarence Saunders began working part-time as a clerk in a grocery store when he was 14 years old, and quit school when the shopkeeper offered him full-time work with room and board. Later he worked in an Alabama coke plant and in a Tennessee sawmill before he returned to the grocery business. By 1900, when he was nineteen years old, he was earning $30 a month as a salesman for a wholesale grocer. During his years working in the grocery stores, he found that it was very inconvenient and inefficient for people to buy things because more than a century ago, long before there were computers, shopping was done quite differently than it is today. Entering a store, the customer would approach the counter (or wait for a clerk to become available) and place an order, either verbally or, as was often the case for boys running errands, in the form of a note or list. While the customer waited, the clerk would more behind the counter and throughout the store, select the items on the list - some from shelves so high that long-handled grasping device had to be used - and bring them back to the counter to be tallied and bagged or boxed. The process might be expedited by the customer calling or sending in the order beforehand, or by the order being handled by a delivery boy on a bike, but otherwise, it did not vary greatly. Saunders, a flamboyant and innovative man, noticed that this method resulted in wasted time and expense, so he came up with an unheard-of solution that would revolutionize the entire grocery industry: he developed a way for shoppers to serve themselves. So in 1902, he moved to Memphis where he developed his concept to form a grocery wholesale cooperative and a full-service grocery store. For his new \"cafeteria grocery\", Saunders divided his grocery into three distinct areas: 1) A front \"lobby\" forming an entrance and exit and checkouts at the front. 2) A sales department, which was specially designed to allow customers to roam the aisles and select their own groceries. Removing unnecessary clerks, creating elaborate aisle displays, and rearranging the store to force customers to view all of the merchandise and over the shelving and cabinets units of sales department were \"galleries\" where supervisors were allowed to keep an eye on the customers while not disturbing them. 3) And another section of his store is the room only allowed for the clerks which were called the \"stockroom\" or \"storage room\" where large refrigerators were situated to keep fresh products from being perishable. The new format allowed multiple customers to shop at the same time and led to the previously unknown phenomenon of impulse shopping. Though this format of grocery market was drastically different from its competitors, the style became the standard for the modern grocery store and later supermarket. On September 6, 1916, Saunders launched the self-service revolution in the USA by opening the first self-service Piggly Wiggly store, at 79 Jefferson Street in Memphis, Tennessee, with its characteristic turnstile at the entrance. Customers paid cash and selected their own goods from the shelves. It was unlike any other grocery store of that time. Inside a Piggly Wiggly, shoppers were not at the mercy of shop clerks. They were free to roam the store, check out the merchandise and get what they needed with their own two hands and feet. Prices on items at Piggly Wiggly were clearly marked. No one pressured customers to buy milk or pickles. And the biggest benefit at the Piggly Wiggly was that shoppers saved money. Self-service was positive all around.",
  "gaps": [
   {
    "text": "In the past, grocery stores didn't use any ____ which are making today's shopping more comfortable and efficient for people.",
    "answer": "computers"
   },
   {
    "text": "Saunders offered to ____ the full grocery stores industry by applying a number of effective solutions.",
    "answer": "revolutionize/revolutionise"
   },
   {
    "text": "The new concept developed by Saunders decreased the number of clerks and other improvements which allowed customers to see every ____ which was available in the grocery store.",
    "answer": "merchandise"
   },
   {
    "text": "In 1916, due to the introduction of self-service store launched by Saunders, clients didn't feel ____ while they were buying groceries.",
    "answer": "pressured"
   }
  ],
  "mcq": [
   {
    "q": "Why did Clarence Saunders want to propel the innovation of grocery stores at his age?",
    "options": [
     "Because he was an enthusiastic and creative man.",
     "Because his boss wanted to reform the grocery industry.",
     "Because he wanted to develop its efficiency and make a great profit as well.",
     "Because he worried about the future competition from the industry."
    ],
    "answer": "C",
    "evidence": "noticed that this method resulted in wasted time and expense",
    "explanation": "U eski usulda vaqt va pul behuda ketishini ko'rib, samaradorlikni oshirmoqchi bo'lgan. C."
   },
   {
    "q": "The Piggly Wiggly store was",
    "options": [
     "located in New York.",
     "mainly featured in self-service.",
     "initially very unpopular with customers.",
     "developed with a pessimistic future."
    ],
    "answer": "B",
    "evidence": "launched the self-service revolution in the USA by opening the first self-service Piggly Wiggly store",
    "explanation": "Piggly Wiggly birinchi o'z-o'ziga xizmat ko'rsatish do'koni bo'lgan. B. A noto'g'ri: do'kon Memfisda edi."
   }
  ]
 },
 {
  "n": 17,
  "title": "Paul Zak",
  "body": "Paul Zak is renowned among his colleagues for two things he does disconcertingly soon after meeting people. The first is hugging: seeing me approach, he springs to his feet, and enfolds me in his arms. The second is talking them into having needles stuck into their arms to draw blood. I escape our encounter unpunctured, but plenty don't, willingly, of course. Zak's work has involved extracting blood from, amongst others, a couple on their wedding day, people who have been dancing, and a group in Papua New Guinea preparing to perform traditional rituals.\n\nHaving dipped into his book, The Moral Molecule, I know that what drives Zak's hunger for blood is his interest in oxytocin. Long known as a female reproductive hormone, oxytocin emerges from Zak's research as something much more. Being treated decently, he says, causes people's oxytocin levels to rise, prompting them to behave more decently, while experimental subjects given an artificial oxytocin boost behave more generously and trustingly. Describing the chemical as the 'moral molecule that keeps society together', Zak offers nothing less than a vast explanation of whole swathes of philosophical questions. The subtitle of the book, the new science of what makes us good or evil, gives a sense of this.\n\nThe aforementioned wedding took place at a house in England, where Zak set up the equipment needed to collect blood. He took samples, before and after the ceremony, from the bride and groom, and various guests, then transferred his spoils to his laboratory. There, he discovered the results he'd been expecting: the ceremony caused oxytocin to spike. And it did so 'in direct proportion to the likely intensity of emotional engagement in the event'. The bride recorded the highest increase, followed by close family members, then less closely involved friends. Mapping the wedding's oxytocin levels gave rise, in Zak's words, to an amazing human 'solar system' with the bride as the sun, the hormone finely calibrated to the emotional warmth each guest felt.\n\nZak's interest in oxytocin was fuelled by experiments involving the Trust Game. Participant A is invited to lend some money to a stranger, Participant B. They're told that any money A sends will triple in value, whereupon B can return some as a thank-you. According to traditional models, the game should break down before it begins. B, acting selfishly, has no reason to give any money back - and, knowing this, A shouldn't send any in the first place. However, as in previous research with this tried and tested set up the vast majority of A-people send money, while an even larger percentage of B-people return some. Zak's analysis of the oxytocin in participants' bloodstreams reveals that by sending money to B, person A is giving a sign of trust - and for person B, being on the receiving end causes oxytocin levels to increase, motivating more generous behaviour in return.\n\nThe possible implications are intriguing. Evolution has given us oxytocin, a biological mechanism that lets us be instinctively trusting and kind - or 'moral'. Mixing science and morality prompts suspicion, however. Just because something is 'natural' doesn't mean it's 'right', and efforts to derive moral codes from science rarely end well. Moreover, it's unclear what Zak means when he says oxytocin, or the lack of it, 'makes' us good or evil. Still, none of this undermines the pragmatic aspect of Zak's work. If oxytocin is the mechanism through which moral action takes place, then by manipulating oxytocin, we might boost levels of trust, generosity, and ultimately happiness.",
  "gaps": [
   {
    "text": "The main purpose of Zak is to get the samples of ____ from any people who visit the wedding in order to conduct his research analysis.",
    "answer": "blood"
   },
   {
    "text": "The research indicates that oxytocin which is actually ____ given to participants makes them become more generous and trustworthy.",
    "answer": "artificially/artificial"
   },
   {
    "text": "Zak applied a special ____ which was necessary for getting the samples of blood from the bride and groom as well as guests.",
    "answer": "equipment"
   },
   {
    "text": "It isn't proven exactly whether oxytocin leads people to become better or to make them ____.",
    "answer": "evil"
   }
  ],
  "mcq": [
   {
    "q": "What is the writer referring to with the word \"spoils\" in the third paragraph?",
    "options": [
     "Equipment.",
     "Samples.",
     "Guests.",
     "Results."
    ],
    "answer": "B",
    "evidence": "then transferred his spoils to his laboratory",
    "explanation": "Laboratoriyaga olib ketilgan \"o'lja\" — to'y paytida olingan qon namunalari. B."
   },
   {
    "q": "What does the writer say about Zak's Trust Game experiments?",
    "options": [
     "They demonstrate the importance of money in human relations.",
     "Their artificiality means that what they tell us is of limited value.",
     "The results challenge conventional notions of human behavior.",
     "They were constructed in a way that was clever and innovative."
    ],
    "answer": "C",
    "evidence": "According to traditional models, the game should break down before it begins",
    "explanation": "An'anaviy nazariyaga ko'ra odamlar xudbin bo'lishi kerak edi, lekin ko'pchilik pul yuborgan va qaytargan. Natijalar odatiy qarashlarga zid. C."
   }
  ]
 },
 {
  "n": 18,
  "title": "San Francisco",
  "body": "The San Francisco of today has a rich and colourful history, starting in 1776, when it was founded by colonists from Spain, through The California Gold Rush of 1849, to being rebuilt after the 1906 earthquake and fire. In all this time it has seen some dark days, but none darker than the present. It became famous as the home of technology with its Silicon Valley, and the relationship the city has with this industry is the cause of all the pain, because of a proposal to levy a 'tech tax' on the companies that have fueled the city's transformation into a place that is increasingly uninhabitable for people on low or medium incomes.\n\nUnder the plan, large tech employers in the city, potentially including Google, Twitter, Uber, Airbnb and Salesforce, would be required to pay a 1.5% payroll tax. The estimated $120m in annual revenue would be used to fund affordable housing and services for the city's large homeless population - 57.4% of homes there are worth more than $1m, but hundreds of people sleep in tents on the street every night.\n\nThe rapid tech boom in the city threatens its ability to thrive and prosper because every week brings new outrages, whether it's the tenant in North Beach who, it emerged this week, received a notice informing him that his rent was increasing from $1,800 a month to $8,000, or the kindergarten teacher whose building was bought by two tech workers and, it was revealed this month, is now facing eviction for nuisance violations that include using appliances.\n\nThe city is deeply divided politically between technological evangelists who believe passionately in an industry that has spurred the local economy and made the already rich even richer, and others who believe the sector's recent encroachment into the city is responsible for erasing the city's rich culture and sparking a housing crisis.\n\nMeanwhile, more than a few tech workers have gained viral notoriety for anti-homeless screeds, such as a February 2016 open letter that included the complaint, 'I shouldn't have to see the pain, struggle, and despair of homeless people to and from my way to work every day.'\n\nA seminal moment came in 2011, when homegrown Twitter threatened to decamp somewhere cheaper and more business friendly. The city responded, first by offering a payroll tax break to companies like Twitter that located in its rundown Central Market neighborhood, and then by phasing out the payroll tax altogether and replacing it with a gross receipts tax - a popular change for tech companies that often have large workforces before they have any revenue.\n\nThe companies that took advantage of San Francisco's tech-friendly incentives were, back then, just getting started. Today, that same stretch of the city, where Twitter put down roots, now hosts companies (Uber, Spotify, Dolby, Square, Zendesk, Yammer) whose valuations collectively approach $100bn. Silicon Valley natives like Google, Linkedin, and even Apple are rapidly expanding into the city too.\n\nThe tech tax would partially turn back the clock, bringing back the 1.5% payroll tax, but only for tech companies. But surprisingly, the proposal has met with fierce resistance. The city's tech, political, and media establishment have savaged the proposal, and its mayor called it a 'job-killing' measure that would 'return this city back to the days of the Great Recession'. The San Francisco Chronicle called the tax 'a dangerously dumb idea' that is 'profoundly reckless and self-defeating'.",
  "gaps": [
   {
    "text": "Technological ____ is seen as an essential reason for most problems that local people are experiencing in San Francisco.",
    "answer": "industry"
   },
   {
    "text": "The money generated from imposing a tax on the employers of big companies is usually used to support ____ people.",
    "answer": "homeless"
   },
   {
    "text": "The author claims that high technological development in the city ____ the opportunities for the city to flourish and make progress.",
    "answer": "threatens"
   },
   {
    "text": "The government of San Francisco offered several ____ which were applied for encouraging even new technological companies.",
    "answer": "incentives"
   }
  ],
  "mcq": [
   {
    "q": "What, according to the writer, are the objectives of the people who advocate this plan in the second paragraph?",
    "options": [
     "To raise enough money to build homes for the homeless.",
     "To finance community projects.",
     "To pay for keeping homeless people away from the tech area.",
     "To pay the homeless to move to another city."
    ],
    "answer": "A",
    "evidence": "would be used to fund affordable housing and services for the city's large homeless population",
    "explanation": "Soliqdan tushgan pul uysizlar uchun arzon uy-joy va xizmatlarga sarflanadi. A."
   },
   {
    "q": "Why, as the writer suggests in the sixth paragraph, did the city levy a receipts tax rather than a gross payroll tax in the past?",
    "options": [
     "Because startups had large numbers of employees but limited sales.",
     "Because the city wanted to encourage investment.",
     "Because the city wanted to encourage the development of a rundown area.",
     "Because the city wanted to reduce unemployment."
    ],
    "answer": "A",
    "evidence": "a popular change for tech companies that often have large workforces before they have any revenue",
    "explanation": "Startaplarda xodim ko'p, daromad esa kam bo'lgani uchun ish haqi solig'i o'rniga tushum solig'i joriy qilingan. A."
   }
  ]
 },
 {
  "n": 19,
  "title": "Born to be sporty",
  "body": "Want your child to be good at sport, make the school team and maybe one day even compete on the world stage? Well, try to ensure that your would-be Olympian or World Cup winner is born in November or, failing that, in October. A study led by one of the country's leading experts on children's physical activity has found that school pupils born in those months were fitter than everyone else in their class.\n\nNovember- and October-born children emerged as fitter, stronger and more powerful than their peers born in the other 10 months of the year, especially those whose birthdays fell in April or June. Dr Gavin Sandercock, from the Centre for Sports and Exercise Science at Essex University, and colleagues found that autumn-born children enjoyed \"a clear physical advantage\" over their classmates.\n\nThe research involved 8,550 boys and girls aged between 10 and 16 from 26 state schools in Essex. All were tested between 2007 and 2010 on three different measures of fitness: stamina, handgrip strength and lower body power. The results revealed that a child's month of birth could make \"significant\" differences to their levels of cardiovascular fitness, muscle strength and ability to accelerate, all of which predict how good someone is at sport, in which such attributes are vital. Performances at school sports days in the weeks ahead may bear out the findings.\n\nNovember-born children were the fittest overall as they had the most stamina and power and were the second strongest. Those born in October were almost as fit, scoring highest for strength and coming third for power, with December children close behind.\n\nThe gap in physical prowess between children in the same class but born in different months was sometimes very wide. \"For example, we found that a boy born in November can run at least 10% faster, jump 12% higher and is 15% more powerful than a child of the same age born in April. This is, potentially, a huge physical advantage,\" said Sandercock. Such gaps could ultimately decide who became a top-level athlete because, as the paper says, \"selection into elite sports may often depend on very small margins or differences in an individual's physical performance\".\n\nThe study, which has been published in the International Journal of Sports Medicine, found that when scores for the three kinds of fitness were combined, those born in April were the least fit, then those in June. That could see those children excluded from school teams and becoming sporting underachievers, he said.\n\nThe findings seem to show that children born in the early months of the school year enjoy a double \"autumn advantage\" - they are already known to have an academic advantage and now they also appear to be better-equipped for sport too. The results show that something other than \"the relative age effect\" - the greater maturity of those born early in the school year - is at work, especially as the fittest children were not the tallest or heaviest, he added.\n\nThe authors believe that autumn-born children's greater exposure over the summer months, towards the end of pregnancy, to vitamin D - the \"sunshine vitamin\" linked to a range of health benefits - is the most likely explanation. \"Seasonal differences in intrauterine vitamin D concentrations seem most plausible,\" they say. John Steele, chief executive of the Youth Sport Trust, said the quality of a young person's introduction to PE and sport at school can be \"a major factor\" in their sporting development. \"Children that get a high quality first experience, that develops their physical literacy, are those that will have greater agility, balance and coordination, and are more likely to develop an enjoyment of physical activity and excel in sport as they grow up\", he said.",
  "gaps": [
   {
    "text": "When compared to the ____ the children born in November and October appeared to be fitter.",
    "answer": "peers"
   },
   {
    "text": "The Sandercock's team identified at least 10% ____ in the performance in running, jumping and strength between the children born in April and November.",
    "answer": "gap"
   },
   {
    "text": "Authors link better fitness of autumn-born children with exposing special vitamin from ____ during pregnancy period.",
    "answer": "sunshine"
   },
   {
    "text": "According to John Steele, how good PE is taught at school is a key ____ in encouraging athletics among the youth.",
    "answer": "factor"
   }
  ],
  "mcq": [
   {
    "q": "The main focus of the text is ...",
    "options": [
     "findings of recent research on the significance of birth time.",
     "sports achievements of children whose birthdays fall into November.",
     "differences between autumn-born children and those born in summer.",
     "comparison of academic and athletic achievements of autumn-born children."
    ],
    "answer": "A",
    "evidence": "a child's month of birth could make \"significant\" differences",
    "explanation": "Matn bolaning tug'ilgan oyi uning jismoniy tayyorgarligiga ta'siri haqidagi tadqiqot natijalariga bag'ishlangan. A."
   },
   {
    "q": "According to the research, children born in April or June ...",
    "options": [
     "are more academically inclined than their autumn-born peers.",
     "appear to be more athletic than those born during the autumn months.",
     "are regarded as less lucky by their peers born in October or November.",
     "tend to demonstrate less strength than those born during the rest of the year."
    ],
    "answer": "D",
    "evidence": "those born in April were the least fit, then those in June",
    "explanation": "Aprel va iyunda tug'ilganlar eng kam chidamli va kuchli chiqqan. D."
   }
  ]
 },
 {
  "n": 20,
  "title": "Deserts on Our Doorstep",
  "body": "Empty reservoirs, dried-up rivers and eroded soils could signal a permanent shift in climate for southern Europe.\n\nWhen it rained in Spain earlier this year, the nation celebrated. The torrential storms broke a five-year drought, refilling many reservoirs and aquifers and bringing hope to some of Europe's most parched regions. But the jubilation was short-lived. Far from allaying fears about long-term water shortages across the Mediterranean, it is now clear that the downpours simply reinforced the trend of a generation, in which long periods of drought are broken by intense storms.\n\nThere is now growing concern that, because of global warming, such conditions will become the norm in southern Europe. As the signatories to the Climate Change Convention meet in Geneva next week to discuss how to prevent disruptive climate change in the 21st century, climatologists are claiming that the first stages of \"desertification\" can already be seen in Spain, Portugal, Greece and Italy. In fact, they argue that the process has been under way for three decades.\n\nThe most detailed warning to date comes in a report completed earlier this year by a research programme called Medalus, funded by the European Commission and coordinated by John Thornes, a geographer at Kings College, London. Medalus has spent five years bringing together climate modelling, remote sensing and detailed studies of land and water at field sites to build up a picture of ecological change in the region. Drawing on the expertise of more than 40 European scientists, the report concludes that climate change is happening now, in Europe, with potentially devastating consequences for millions of people.\n\nMediterranean Europe has always lived on a climatic knife edge. Typically around 60 centimetres of rain falls each year, mostly in winter, often over just a few days. But in southeast Spain, for instance, average rainfall is only around 20 centimetres a year, with only 5 centimetres in a very dry year such as 1995. Of that, most evaporates; perhaps a tenth reaches rivers.\n\nDroughts are becoming more frequent, and lasting longer. The extended drought in Spain from 1990 to 1995 was only part of a long-term trend. Thornes told a conference on Europe's climate, organised by the European Commission in Brussels in May, that new analyses of rainfall data reveal 'a turning point towards progressively lower rainfall since about 1963\". At the same time, there has been \"a clear increase in the number and duration of both heat waves and violent storms,\" he said.\n\nReduced rainfall will also have major implications for vegetation. Ian Woodward of the University of Sheffield says that \"there will be a significant reduction in plant cover\" in those areas that are already low in vegetation. A study for Medalus of three species of grass and shrub prevalent in Spain found that seed germination among all three species had completely failed in 1993 and 1994.\n\nVegetation loss often triggers erosion, as soil is left bare. Rainwater runs off the land quickly, rather than infiltrating soils, causing the paradox of more flooding and drier soils. In Greece and Spain, more than 40 per cent of the soil is already suffering from erosion; in Turkey the figure is 70 per cent. In parts of Spain and Italy, annual soil loss exceeds 250 tonnes per hectare. There is much scientific debate around the world about desertification and the processes that cause it. Some scientists argue that human abuse of the land only rarely leads to its permanent loss. What few doubt is that permanent climate change will create deserts. And permanent climate change is what the highly vulnerable lands of southern Europe face today. Global warming is not just on Europe's doorstep. It has stepped inside.",
  "gaps": [
   {
    "text": "____ has already begun threatening to the parts of Europe for the past thirty years.",
    "answer": "desertification"
   },
   {
    "text": "The study conducted by ____ shows that a great deal of Europeans will be adversely affected by climate change.",
    "answer": "Medalus"
   },
   {
    "text": "Only a ____ of rainfall actually reaches rivers in the part of Spain.",
    "answer": "tenth"
   },
   {
    "text": "The length and number of hot breeze and terrible ____ has increased.",
    "answer": "storms"
   }
  ],
  "mcq": [
   {
    "q": "When vegetation is reduced significantly,",
    "options": [
     "it helps to save water in Spain and Greece.",
     "the floods can easily be prevented.",
     "soil becomes useless to grow harvests.",
     "it indirectly leads to increased chances of flooding."
    ],
    "answer": "D",
    "evidence": "causing the paradox of more flooding and drier soils",
    "explanation": "O'simlik kamaysa tuproq yalang'ochlanib eroziyaga uchraydi, suv tez oqib ketadi va toshqin ko'payadi. D."
   },
   {
    "q": "What is the overall message that the writer of this article wants to convey?",
    "options": [
     "Europeans will start to feel the effect of global warming soon.",
     "Europe's drought problems are over now.",
     "Northern Europeans do not need to worry about climate change.",
     "The effects of global warming can already be seen in parts of Europe."
    ],
    "answer": "D",
    "evidence": "Global warming is not just on Europe's doorstep. It has stepped inside",
    "explanation": "Global isish ta'siri Yevropaning ba'zi qismlarida allaqachon sezilmoqda. D."
   }
  ]
 },
 {
  "n": 21,
  "title": "Elephants' Early Warning System",
  "body": "A new study shows that elephants may communicate with other herds through seismic vibrations.\n\nFew sights in nature are as awesome as a six-ton elephant guarding her baby from a hungry predator. Rather than retreat, the threatened mother is likely to launch a mock charge - a terrifying display of ground stomping, ear flapping and frantic screaming designed to frighten off lions and hyenas.\n\nBut elephant researchers have discovered that there is more to a mock charge than meets the eye. According to a new study in the Journal of the Acoustical Society of America (JASA), foot stomping and low-frequency rumbling also generate seismic waves in the ground that can travel nearly 20 miles along the surface of the earth. More astonishing is the discovery that elephants may be able to sense these vibrations and interpret them as warning signals of a distant danger.\n\n'Elephants may be able to detect stress from a herd many miles away,' says Caitlin O'Connell-Rodwell, an affiliate of the Stanford Centre for Conservation Biology. 'They may be communicating at much farther distances than we thought,' adds O'Connell-Rodwell, author of the JASA study. In the early '90s, O'Connell-Rodwell began to suspect there was more to long-distance elephant communication than airborne rumblings alone. 'I started working with elephants in Etosha National Park in 1992,' she recalls. 'I was observing them at a drinking hole when I noticed this strange set of behaviours. They would lean forward, pick up one leg and freeze - or begin stomping their feet for no apparent reason.' She theorized that the elephants were responding to vibrations in the ground from approaching herds. 'When I returned to the University of California at Davis, I teamed up with my Ph.D. adviser, Lynette Hart, and geophysicist Byron Aranson to find out if there really are seismic communications among elephants,' she says. To test the theory that elephants transmit and receive underground messages, O'Connell-Rodwell and her colleagues conducted several experiments with elephants in Africa, India and at a captive elephant facility in Texas, USA. 'We went to Etosha National Park in Namibia and recorded three acoustic calls commonly made by wild African elephants,' she says. 'One is a warning call, another is a greeting and the third is the elephant equivalent of 'Let's go!'\n\nThe researchers wanted to find out if elephants would respond to recordings played through the ground; so they installed seismic transmitters at a tourist facility in Zimbabwe where eight trained, young elephants were housed. The idea was to convert audible 'Greetings!' 'Warning!' and 'Let's go!' calls into underground seismic waves that an elephant could feel but not hear directly through the air. 'We used a mix of elephant calls, synthesized low-frequency tones, rock music and silence for comparison,' says O'Connell-Rodwell. 'When the Warning calls were played, one female got so agitated that she bent down and bit the ground,' she notes. 'That's very unusual behaviour for an elephant, but it has been observed in the wild under conditions of extreme agitation.' The young female had the same agitated response each time the experiment was repeated.\n\nResearchers also played recorded calls to seven captive males. 'The bulls reacted too, but their response was much more subtle,' notes O'Connell-Rodwell. 'We think they're sensing these underground vibrations through their feet,' she adds. 'Seismic waves could travel from their toenails to the ear via bone conduction.'",
  "gaps": [
   {
    "text": "According to newly published findings, by stomping their feet, elephants tend to send a ____ message to other elephants in the distance.",
    "answer": "warning"
   },
   {
    "text": "O'Connell-Rodwell wanted to study elephants further because she witnessed unusual ____ of these giant animals.",
    "answer": "behaviour/behavior"
   },
   {
    "text": "When warning calls were played in the experiment, an elephant bit the ground, which case was ____ before, but when they had agitated extremely.",
    "answer": "observed"
   },
   {
    "text": "The scientists hypothesized that elephants use their ____ to detect the vibrations.",
    "answer": "feet"
   }
  ],
  "mcq": [
   {
    "q": "According to newly published findings",
    "options": [
     "a mother elephant uses a mock charge to protect her young.",
     "a mother elephant is unable to defend her young from lions.",
     "an elephant's mock charge is not simply a loud noise.",
     "an elephant can create a louder noise by stomping its foot than with its call."
    ],
    "answer": "C",
    "evidence": "there is more to a mock charge than meets the eye",
    "explanation": "Soxta hujum faqat baland ovoz emas: oyoq tepish yer orqali seysmik to'lqin ham chiqaradi. C."
   },
   {
    "q": "The elephants Caitlin saw in 1992 were acting strangely because",
    "options": [
     "they were not drinking from the waterhole.",
     "they were moving their feet constantly.",
     "they made acoustic calls to another herd.",
     "occasionally, they would raise a leg and stay very still."
    ],
    "answer": "D",
    "evidence": "They would lean forward, pick up one leg and freeze",
    "explanation": "Fillar oldinga engashib, bir oyog'ini ko'tarib qotib qolardi. D."
   }
  ]
 },
 {
  "n": 22,
  "title": "The Pursuit of Happiness",
  "body": "Compared with misery, happiness is a relatively unexplored terrain for social scientists. Between 1967 and 1994, 46,380 articles indexed in Psychological Abstracts mentioned depression, 36,851 anxiety, and 5,099 anger. Only 2,389 spoke of happiness, 2,340 life satisfaction, and 405 joy.\n\nRecently we and other researchers have begun a systematic study of happiness. During the past two decades, dozens of investigators throughout the world have asked several hundred thousand representative sampled people to reflect on their happiness and satisfaction with life or what psychologists call \"subjective well-being\". In the US the National Opinion Research Center at the University of Chicago has surveyed a representative sample of roughly 1,500 people a year since 1957; the Institute for Social Research at the University of Michigan has carried out similar studies on a less regular basis, as has the Gallup Organization. Government-funded efforts have also probed the moods of European countries.\n\nWe have uncovered some surprising findings. People are happier than one might expect, and happiness does not appear to depend significantly on external circumstances. Although viewing life as a tragedy has a long and honorable history, the responses of random samples of people around the world about their happiness paints a much rosier picture. In the University of Chicago surveys, three in 10 Americans say they are very happy', for example. Only one in 10 chooses the most negative description \"not too happy\". The majority describe themselves as \"pretty happy\"\n\nHow can social scientists measure something as hard to pin down as happiness? Most researchers simply ask people to report their feelings of happiness or unhappiness and to assess how satisfying their lives are. Such self-reported well-being is moderately consistent over years of retesting. Furthermore, those who say they are happy and satisfied seem happy to their close friends and family members and to a psychologist-interviewer. Their daily mood ratings reveal more positive emotions, and they smile more than those who call themselves unhappy. Self-reported happiness also predicts other indicators of well-being. Compared with the depressed, happy people are less self-focused, less hostile and abusive, and less susceptible to disease.\n\nWe have found that the even distribution of happiness cuts across almost all demographic classifications of age, economic class, race and educational level. In addition, almost all strategies for assessing subjective well-being - including those that sample people's experience by polling them at random times with beepers - turn up similar findings. Interviews with representative samples of people of all ages, for example, reveal that no time of life is notably happier or unhappier. Similarly, men and women are equally likely to declare themselves \"very happy\" and \"satisfied\" with life, according to a statistical digest of 146 studies by Marilyn J. Haring, William Stock and Morris A. Okun, all then at Arizona State University.\n\nWealth is also a poor predictor of happiness. People have not become happier over time as their cultures have become more affluent. Even though Americans earn twice as much in today's dollars as they did in 1957, the proportion of those telling surveyors from the National Opinion Research Center that they are \"very happy\" has declined from 35 to 29 percent. Even very rich people - those surveyed among Forbes magazine's 100 Wealthiest Americans - are only slightly happier than the average American. Those whose income has increased over a 10-year period are not happier than those whose income is stagnant. Indeed, in most nations the correlation between income and happiness is negligible - only in the poorest countries, such as Bangladesh and India, is income a good measure of emotional well-being.",
  "gaps": [
   {
    "text": "Social scientists have researched unhappiness enough, but happiness is still quite ____ area for them.",
    "answer": "unexplored"
   },
   {
    "text": "Among depressed people, ____ can develop more than among happy people.",
    "answer": "disease"
   },
   {
    "text": "Incomes in the States have doubled over the past forty years, but happiness levels have ____ over the same period.",
    "answer": "declined"
   },
   {
    "text": "Happiness level was found to be equal between the people whose earnings rose over a decade and those whose income stayed ____ the same time.",
    "answer": "stagnant"
   }
  ],
  "mcq": [
   {
    "q": "What point are the writers making in the opening paragraph?",
    "options": [
     "Happiness levels have risen since 1967.",
     "Journals take a biased view of happiness.",
     "Happiness is not a well-documented research area.",
     "People tend to think negatively about themselves."
    ],
    "answer": "C",
    "evidence": "Compared with misery, happiness is a relatively unexplored terrain for social scientists",
    "explanation": "Baxt haqida maqolalar juda kam, ya'ni bu yaxshi o'rganilmagan soha. C."
   },
   {
    "q": "What do the writers say about their research findings?",
    "options": [
     "They had predicted the results correctly.",
     "They felt people had responded dishonestly.",
     "They conflict with those of other researchers.",
     "Happiness levels are higher than they had believed."
    ],
    "answer": "D",
    "evidence": "People are happier than one might expect",
    "explanation": "Tadqiqotchilar odamlar kutilganidan baxtliroq ekanini aniqlagan. D."
   }
  ]
 },
 {
  "n": 23,
  "title": "Armed and dangerous",
  "body": "The yacht was anchored 200 meters off the Queensland coast when Chris Slough dived into the water. That's when it got him. 'I felt a couple of little stings on my chest,\" he says, 'but I thought nothing of it and carried on.' But as soon as he got back on the boat he realized he was in big trouble. 'I suddenly came over very nauseous', he says. Within minutes he was in agonizing pain, vomiting and struggling to breathe. 'It felt like my organs were popping out.'\n\nChris had been stung by an Irukandji, a vicious creature named after an aboriginal tribe whose folklore tells of a terrible illness that struck people who went swimming in the sea. Irukandji, a species of box jellyfish, grow no bigger than a peanut, yet relative to their size are probably the most toxic creatures on earth, putting many people in the hospital each year with 'Irukandji syndrome'. All but invisible in the water, their transparent bodies are covered from head to tentacle tip in stinger cells that discharge at the slightest touch, harpooning your skin with venomous barbs. The sting itself is often so mild that you barely notice it until the powerful venom kicks in.\n\nWhen Chris arrived in hospital, he was given a massive dose of painkillers but no antivenin. Despite the severity and frequency of Irukandji stings, no one has characterized its venom or identified the properties of that of any other species of box jellyfish. In fact, almost everything about box jellyfish is a mystery. Chris was lucky not to have brushed up against chironex fleckeri, a brutish creature the size of a birthday cake with sixty sting-encrusted tentacles.\n\nJamie Seymour, a tropical biologist at James Cook University in Cairns, has developed a technique for tracking chironex's movements using tiny ultrasonic transmitters stuck on with surgical superglue. True jellyfish are dim-witted ocean drifters, but, the first time Seymour managed to tag a chironex with one of these, it immediately headed straight for the bottom, then suddenly swam off covering nearly half a kilometer in fifteen minutes.\n\nAnother remarkable feature of box jellyfish is their visual system. They have twenty-four eyes, arranged in clusters of six, one on each side of their cuboid body. Each cluster contains two types of an eye - four simple light-sensing pits plus two sophisticated 'camera eyes'. The latter are anatomically similar to human eyes, with lenses, retinas, and corneas, and can form detailed color images, but all this sophisticated equipment begs a question. How do box jellies deal with all the information their eyes gather when they don't have a brain? What happens, for example, when two different eyes are sending out contradictory information? No one knows.\n\nTheir predatory eating habits also explain why they have such lethal stings. It's one thing to stalk fish, but how do you catch them when all you have are flimsy, rubbery tentacles? The answer is to take them out with as much lethal force as possible. A chironex sting certainly does that - its venom can dispatch a fish in less than two minutes. It's just an evolutionary accident that the toxin works so well for us too. Seymour suspects there are more deaths than are officially recognized. He points out that chironex fleckeri was thought to be confined to northern Australian waters but has now been found in Papua New Guinea, Malaysia, Indonesia, the Philippines, Thailand and Vietnam. The Irukandji too is probably widespread in the Indo-Pacific. 'People are getting stung and killed all over the tropics without anybody realizing the true cause,' he says.",
  "gaps": [
   {
    "text": "Relative size of box jellyfish is as large as a ____.",
    "answer": "peanut"
   },
   {
    "text": "Seymour fastens small ____ to the box jellyfish.",
    "answer": "transmitters"
   },
   {
    "text": "Box jellyfish lack ____ for processing visual data.",
    "answer": "brain/brains"
   },
   {
    "text": "Because it is now clear that box jellyfish live in more places than previously known, the number of ____ may be more than then recorded.",
    "answer": "deaths"
   }
  ],
  "mcq": [
   {
    "q": "At first, box jellyfish stings may not hurt much",
    "options": [
     "because they have excellent eyesight.",
     "because these creatures live in more places than was realized.",
     "because they are not a kind of jellyfish.",
     "because they cause much less pain than venom."
    ],
    "answer": "D",
    "evidence": "The sting itself is often so mild that you barely notice it until the powerful venom kicks in",
    "explanation": "Chaqish o'zi juda yengil, kuchli og'riq zahar ta'sir qila boshlagandan keyin seziladi. D."
   },
   {
    "q": "Doctors could not give Chris antivenin at the hospital",
    "options": [
     "because we don't know how many kinds of box jellyfish there are.",
     "because they need to go after the fish they eat.",
     "because the exact nature of the venom is unknown.",
     "because the number of human victims is probably underestimated."
    ],
    "answer": "C",
    "evidence": "no one has characterized its venom",
    "explanation": "Zaharning tarkibi hali aniqlanmagan, shuning uchun qarshi zahar yo'q. C."
   }
  ]
 },
 {
  "n": 24,
  "title": "Lost Civilization of Peru",
  "body": "Two thousand years ago, a mysterious and little-known civilization ruled the northern coast of Peru. Its people were called the Moche. They built huge and bizarre pyramids that still dominate the surrounding countryside - some well over a hundred feet tall. Many are so heavily eroded they look like natural hills. Only close up can you see they are made up of millions of mud bricks. Several of the pyramids, known as 'huacas', contain rich collections of murals depicting both secular and sacred scenes from the Moche world. Others house the elaborate tombs of Moche leaders. Out in the desert, archaeologists have also found the 2,000-year-old remains of an extensive system of mud brick aqueducts which enabled the Moche to tame their desert environment. Many are still in use today. As archaeologists have excavated at Moche sites they've unearthed some of the most fabulous pottery and jewelry ever to emerge from an ancient civilization. The Moche were pioneers of metal-working techniques like gilding and early forms of soldering. These skills enabled them to create extraordinarily intricate artifacts: ear studs and necklaces, nose rings and helmets, many heavily inlaid with gold and precious stones.\n\nBut it was the pottery that gave the archaeologists their first real insight into Moche life. The Moche left no written record but they did leave a fabulous account of their life and times in paintings on pots and vessels. Many show everyday events and objects such as people, fish, birds, and other animals. Others show scenes from what, at first sight, look like a series of battles. But as the archaeologists studied them more closely they realized they weren't ordinary battles: all the soldiers were dressed alike; the same images were repeated time and again. When the battle was won, the vanquished were ritually sacrificed. It was, the archaeologists slowly realized, a story not of war but ritual combat followed by human sacrifice. But what did it mean? The first breakthrough came when Canadian archaeologist Dr. Steve Bourget, of the University of Texas in Austin, discovered a collection of bones at one of the most important Moche huacas. Many of the skeletons were deeply encased in mud which meant the burials had to have taken place in the rain. Yet in this part of Peru, it almost never rains. Bourget realized there had to be a deliberate connection between the rain and the sacrifices. It led him to a new insight into the Moche world. The Moche, like most desert societies, had practiced a form of the ritual designed to celebrate or encourage rain. The sacrifices were about making an unpredictable world more predictable. A harsh environment had molded a harsh civilization with an elaborate set of rituals designed to ensure its survival. These discoveries answered one question - what the painted scenes were all about- but still left a central riddle. Why had Moche society finally collapsed? Clues came first from climate researchers gathering evidence of the region's climatic history, which suggested that at around AD 560 to AD 650 there was a thirty-year period of exceptionally wet weather, followed by a severe drought lasting another thirty years.\n\nIn the late 1990s, American archaeologist Dr. Tom Dillehay revisited some of the more obscure Moche sites and found that the dates didn't match the climate catastrophe explanation. Many of these settlements were later than AD 650, so clearly, the weather hadn't been the immediate cause of their demise. He also found that, instead of constructing huge huacas, the Moche had started building fortresses. They had been at war. But who with? Searching the site for clues, Dillehay's team were unable to find any non-Moche military artifacts. It could only mean one thing: the Moche had been fighting amongst themselves.",
  "gaps": [
   {
    "text": "Many Moche ____ that helped to water the land are working today.",
    "answer": "aqueducts"
   },
   {
    "text": "Dr. Steve Bourget found graves in which people were buried during the ____.",
    "answer": "rain"
   },
   {
    "text": "Dillehay found evidence that Moche society had survived beyond ____.",
    "answer": "AD 650/650"
   },
   {
    "text": "The first evidence of military activity was the discovery of ____.",
    "answer": "fortresses"
   }
  ],
  "mcq": [
   {
    "q": "In some huacas",
    "options": [
     "Moche leaders still live.",
     "there are a huge collection of gold and silver treasures.",
     "chiefs were buried.",
     "leaders built their houses."
    ],
    "answer": "C",
    "evidence": "Others house the elaborate tombs of Moche leaders",
    "explanation": "Ba'zi huacalarda Moche yo'lboshchilarining qabrlari bor. C."
   },
   {
    "q": "Pottery designs",
    "options": [
     "show armed fighting and the practice of killing people within Moche society.",
     "had scenes of the Moche fighting foreign armies.",
     "illustrate common agricultural practices in Moche society.",
     "are decorated with texts in Moche language."
    ],
    "answer": "A",
    "evidence": "a story not of war but ritual combat followed by human sacrifice",
    "explanation": "Kulolchilik rasmlarida Moche jamiyati ichidagi marosimiy jang va qurbonlik tasvirlangan. A."
   }
  ]
 },
 {
  "n": 25,
  "title": "Hyperpolyglots - A case of brainpower or hard work?",
  "body": "In 1996, Dick Hudson, a professor of linguistics at University College London posted an email to a list serve for language scientists asking if anyone knew who held the world record for the number of languages they could speak. Replies listed the names of well-known polyglots, such as Giuseppe Mezzofanti, an eighteenth-century Italian cardinal.\n\nThen, in 2003, Hudson received an unexpected reply to his email from someone who had belatedly come across his question. The writer, 'N', described how his grandfather, who was Sicilian and had never gone to school, could learn languages with such remarkable ease that by the end of his life he could speak seventy, and read and write fifty-six. N's grandfather was twenty when he moved to New York in the early 1900s. There he worked on the railways, which brought him into contact with travelers speaking many languages. When N was ten, he accompanied his grandfather on a cruise which took them to over 20 countries, from Venezuela to Hong Kong and Japan. N claimed that whatever port they visited, his grandfather knew the local language.\n\nWhen Hudson read N's note, he immediately recognized the potential significance of the claims and posted them on the Internet. In his posting, he coined the term 'hyperpolyglot', which he defined as someone who speaks six languages or more.\n\nUntil recently, there was little scientific information about hyperpolyglots. Mezzofanti, for example, was supposed to have known seventy-two languages and to have spoken thirty-nine fluently, but nowadays such tales are often greeted with skepticism. In the discussion that followed Hudson's publication of N's claims, a reader disputed the Mezzofanti story, saying he found it absolutely preposterous and pointing out how long it would take to learn seventy-two languages. Assuming that each language has 20,000 words and that Mezzofanti could remember a word after encountering it once, he would have to learn one word a minute, twelve hours a day for five-and-a-half years! Professional linguists, too, are divided on this question. Philip Herdina, at the University of Innsbruck in Austria, is a skeptic. He doubts whether anyone has the capacity to speak seventy-two languages, arguing that maintaining this ability would take resources from other activities. But if ability to learn many languages is the norm, why are so few people able to exploit it? Stephen Krashen, from the University of California, maintains that exceptional language learners simply work harder, and have a better understanding of how they learn. Krashen cites the case of Lomb Kato, an eighty-six-year-old Hungarian interpreter who could speak sixteen languages. Lomb apparently felt she had no special talent for languages: she had taken classes in Chinese and Polish, but the others she taught herself. According to Krashen, Lomb was an ordinary person with no special qualities, apart from a desire to learn languages and an effective way of achieving this aim.\n\nOther researchers say that exceptional brains play a more significant role. In the 1980s, neurolinguist Loraine Obler of the City University of New York found a talented language learner she called 'CJ', who could speak five languages. CJ had learned to read late, had an average IQ, and had always been a mediocre student. However, on the Modern Language Aptitude Test, he scored extremely high. His verbal memory was very good, he could remember lists of words for weeks, but he quickly forgot images and numbers, and had problems reading maps. All of this seemed to indicate that CJ's language talent was inborn and not related to a higher level of general intellectual ability.",
  "gaps": [
   {
    "text": "N came from a family which was partly of ____ origin.",
    "answer": "Sicilian"
   },
   {
    "text": "The evidence of unusual linguistic ability came from two relatives. The first was N's ____.",
    "answer": "grandfather"
   },
   {
    "text": "N's grandfather was said to speak ____ languages.",
    "answer": "70/seventy"
   },
   {
    "text": "N witnessed this ability during a tour of more than ____.",
    "answer": "20 countries/20/twenty countries"
   }
  ],
  "mcq": [
   {
    "q": "Who thinks that successful language learning requires motivation, application, and a learning strategy?",
    "options": [
     "Loraine Obler",
     "Stephen Krashen",
     "Mezzofanti",
     "Philip Herdina"
    ],
    "answer": "B",
    "evidence": "exceptional language learners simply work harder, and have a better understanding of how they learn",
    "explanation": "Krashen fikricha, muvaffaqiyat qunt, ko'proq mehnat va to'g'ri o'rganish usuliga bog'liq. B."
   },
   {
    "q": "Who thinks that language aptitude is probably inherited, not a facet of intelligence?",
    "options": [
     "Loraine Obler",
     "Stephen Krashen",
     "Mezzofanti",
     "Philip Herdina"
    ],
    "answer": "A",
    "evidence": "CJ's language talent was inborn and not related to a higher level of general intellectual ability",
    "explanation": "Obler tadqiqotiga ko'ra, til qobiliyati tug'ma va umumiy aql darajasiga bog'liq emas. A."
   }
  ]
 },
 {
  "n": 26,
  "title": "Telescopes in the Andes",
  "body": "It is dawn in the Andes. A grimy carpet of red dust stretches over rolling featureless hills towards a horizon dominated by the icy cone of Chile's Licancabur volcano. There are no trees, no bushes, not even a blade of grass in this lifeless landscape. Even the atmosphere is alien. At 5,000 metres above the sea, oxygen levels are puny. Move suddenly, and bright spots blur your vision before you start to stagger and retch. This is Chajnantor, the most inhospitable portion of Chile's Atacama desert, and one of the world's most arid places. The annual rainfall here is negligible- a few drops of moisture scattered yearly on desiccated, empty land. You wouldn't last a day unprotected in this dead zone. It is hostile, threatening, and in a few years is destined to provide astronomers with a new home. It is extraordinary. Nevertheless, the European Southern Observatory has committed itself to begin building an array of giant microwave receivers on Chajnantor. When completed, these machines will allow the world's astronomers to view the birth of thousands of planetary systems in the deepest recesses of our galaxy and probe the early universe's 'Dark Ages', when dust obscured the cosmos and the first stars flickered into existence. Unique knowledge is expected to flow from Alma, the Atacama large Millimetre Array. Each Alma receiver will consist of a transportable structure supporting a dish measuring 10 metres in diameter. Extending outwards from the smooth metal surface of the dish will be three support arms that hold a sub-reflector. This will direct the radio waves down into the heart of the receiver, where signals can be amplified, recorded and analysed. To vary its angle it will be mounted on an elevation structure, beneath which will be around on the steel base, the cylindrical platform for the receiver. Scientists are now satisfied they know about the universe's birth and about its childhood. But they still need to learn about its early infancy thirteen billion years ago, after the newly-born cosmos had exploded into existence and the heavens had filled with superheated particles, a thin gruel of matter that somehow coalesced to produce heavy solid objects. 'We want to know how a hot, fluid the universe turned into one with galaxies and stars and planets and continents and, eventually, people,' says UK astronomer Dr. Paul Murdin. 'We want to know how heavens got structure. In short, we want to understand how we got from the Big Bang to people. 'One answer is to build even bigger optical telescopes to gather photons from even more distant- and therefore older- objects. However, really distant galaxies recede from us so rapidly that much of their light transformed - by an effect as the Doppler shift- into microwave radiation.\n\nAnd that is why Chajnantor is so important. Its receivers will be built specifically to collect this precious microwave radiation and help astronomers to understand one of science's last major cosmological mysteries: the structured, solid nature of the cosmos. But collecting microwave radiation has one major drawback, as Esteban Illanes, of the European Southern Observatory, explains. 'It is absorbed by water. An observatory at sea level would pick up nothing. All the microwaves coming down from space would have been absorbed by clouds or water vapor in the atmosphere before they reached our instruments. That is why we picked Chajnantor. It is high and dry-perfect for picking up microwaves.'",
  "gaps": [
   {
    "text": "The lack of ____ makes Chajnantor one of the driest areas in the globe.",
    "answer": "rainfall"
   },
   {
    "text": "One feature of the Alma telescopes is they are ____.",
    "answer": "transportable"
   },
   {
    "text": "Dr. Paul Murdin's final aim is to reveal how ____ came into existence.",
    "answer": "people"
   },
   {
    "text": "In Chajnantor, scientists can receive more microwaves as in this place ____ can not take them in.",
    "answer": "water"
   }
  ],
  "mcq": [
   {
    "q": "According to the information given in the reading passage, which is the feature of Chajnantor?",
    "options": [
     "completely flat land",
     "unfriendly local people",
     "intense heat during the day",
     "a total lack of vegetation"
    ],
    "answer": "D",
    "evidence": "There are no trees, no bushes, not even a blade of grass",
    "explanation": "Chajnantorda daraxt ham, buta ham, hatto o't ham yo'q. D."
   },
   {
    "q": "Which of these reasons is given by the writer for siting the telescope at Chajnantor?",
    "options": [
     "to minimize the effect of Doppler shift",
     "to avoid the limitations of optical telescope",
     "to discover how the universe began.",
     "to see how the universe was changing ten billion years ago."
    ],
    "answer": "B",
    "evidence": "One answer is to build even bigger optical telescopes",
    "explanation": "Optik teleskoplarning cheklovi bor, shuning uchun mikroto'lqin qabul qiluvchilar kerak. B."
   }
  ]
 },
 {
  "n": 27,
  "title": "Boys and literacy",
  "body": "Research into gender differences in education has tended to focus on the poor performance of girls in science and maths, virtually ignoring the low achievement of boys in reading and writing. According to Cecilia Reynolds, from the Ontario Institute for Studies in Education, it has long been recognized that girls did well in literacy and that boys did not, but there was no great concern about this because, in the real world, boys were still going to get better jobs and salaries. However, a 2004 study by the Council of Ministers of Education found that Canadian girls are outperforming boys in literacy skills by a wider margin than previously thought. Among thirteen-year-olds, about ten percent more girls than boys meet expected targets for literacy, and among sixteen-year-olds, about seventeen percent more girls write at an age-appropriate level.\n\nAs if that wasn't bad enough, recent testing has shown for the first time that the performance gap that once existed between boys and girls in science and maths has now almost disappeared too. Some experts even predict that at some time in the future, girls may actually move ahead of boys in science. According to Paul Cappon, Director General of the Council of Ministers of Education, one of the consequences of this will be to put girls in the lead in relation both to university entrance and to achievement in the labor market. Already, only forty-two per cent of university graduates in Canada are male, and that number is dropping each year.\n\nWhile experts agree that now is the time to focus on the long-standing gender gap in literacy, their explanations for it, and their solutions, vary widely. In a culture that favours equal opportunity and advocates political correctness, some have found it difficult to discuss this troubling gender gap without entering into the touchy domain of sexism.\n\nSome educators have put the blame directly on policy and its implementation by women teachers, saying that since the educational practice has aimed at improving the performance of girls, boys have been forgotten. Cecilia Reynolds has warned that it is important to address any differences between boys and girls without assigning blame. Nevertheless, although she doesn't believe boys were forgotten, she does admit that insufficient attention may have been paid to their different learning needs. Others have pointed to a more subtle cause, to what Paul Cappon has called the 'feminization' of education. Increasingly, teaching is becoming dominated by females as more young women enter the profession and more older men retire, he says. That leaves boys with few male role models in the classroom. \"It's women doing the teaching. Boys in the socialization process will tend to discount the importance of that particular subject area when it's only women teaching it,\" he suggests.\n\nCappon also thinks the kinds of reading materials available in schools may be better suited to girls than boys. As he points out, the current wisdom is that boys' reading preferences include factual and instructional material that will help them understand particular areas of interest, whereas girls are attracted to stories that explore interpersonal relationships.\n\nWhat policymakers ultimately decide to do may depend on how far the results of the recent study are judged to be an accurate reflection of the general situation. Cecilia Reynolds emphasizes that gender differences are statistical, with significant numbers of individuals everywhere not following the general trend. Although she does not believe we should be seriously concerned, she does think that in the future, parents and teachers will need to pay more attention to what is happening to boys both at home and in the classroom.",
  "gaps": [
   {
    "text": "Research suggests that the gender gap in maths and science has ____.",
    "answer": "disappeared"
   },
   {
    "text": "The proportion of male graduates in Canada is ____.",
    "answer": "dropping"
   },
   {
    "text": "Whereas girls enjoy reading about ____, boys prefer non-fiction.",
    "answer": "relationships"
   },
   {
    "text": "According to Paul Cappon, some textbooks at school are less ____ to boys than girls.",
    "answer": "suited"
   }
  ],
  "mcq": [
   {
    "q": "Which one is Cecilia Reynolds's opinion?",
    "options": [
     "There are inborn differences in the way boys and girls learn.",
     "Boys' poor literacy performance did not disadvantage them professionally in the past.",
     "The high proportion of women in teaching is a disadvantage for boys.",
     "Boys and girls respond differently to different teaching styles."
    ],
    "answer": "B",
    "evidence": "there was no great concern about this because, in the real world, boys were still going to get better jobs and salaries",
    "explanation": "Reynoldsning fikricha, ilgari o'g'il bolalarning savodxonligi pastligi ularning ish va maoshiga zarar qilmagan. B."
   },
   {
    "q": "What problem does Paul Cappon see because of the increased number of women teachers in the classroom?",
    "options": [
     "Teachers pay personal attention to only girls.",
     "They cannot teach lessons very well.",
     "They cannot be good role models for boys.",
     "Men teachers have to leave their jobs at schools."
    ],
    "answer": "C",
    "evidence": "That leaves boys with few male role models in the classroom",
    "explanation": "Ayol o'qituvchilar ko'payib, o'g'il bolalar uchun erkak namuna kam qolgan. C."
   }
  ]
 },
 {
  "n": 28,
  "title": "When is a room not a room?",
  "body": "There was a bit of a fuss at a Tate Britain exhibition of modern art a few years ago. A woman was hurrying through the large room that housed an intriguing work entitled Lights Going On and Off in a Gallery, in which, lights went on and off in a gallery. Suddenly the woman's necklace and the beads spilled over the floor. As we bent down to pick them up, man said:'Perhaps, this is part of the installation.'Another that would make it performance art rather than an installation.\"Or a happening,' said the third.\n\nThese are confusing times for the visual arts audience, which is growing rapidly. More and more of London's gallery space is being devoted to installations, so what we need is the answer to three simple questions. What is installation art? Why has it become so ubiquitous? And why is it so irritating?\n\nFirst question first. What are installations? 'Installations', answers the Thames and Hudson Dictionary of Art and Artists with misplaced self-confidence, 'only exist as long as they are installed.' Thanks for that. The dictionary continues more promisingly: installations are 'multi-media, multi-dimensional, and multi-form works which are created temporarily for a particular space or site either outdoors or indoors, in a museum or gallery'. As a first stab at a definition, this isn't bad. It rules out paintings, sculptures, frescoes and other intuitively non-installation artworks. It also says that anything can be an installation so long as it has art status conferred on it, so the flashing fluorescent tube in your kitchen is not art because it hasn't got the nod from the gallery. The only problem is that this definition is incomplete. In some cases, installations have been bought and moved out of the gallery for which they were intended and re-installed in a different context. Also, unlike looking at paintings or sculptures, you often need to move through or around installations to appreciate the full impact of the work. What this suggests is that we are barking up the wrong tree by trying to define installations. They do not all share a set of essential characteristics. Some will demand audience participation, some will be site-specific, some will be conceptual jokes involving only a light bulb.\n\nWhich brings us to the second question: why are there so many of them around the moment? There have been installations since Marcel Duchamp put a urinal in New York gallery in 1917 and called it art. This was the most resonant gesture in twentieth-century art, discrediting notions of taste, skill, and craftsmanship, and suggesting that everyone could be an artist. But why has the number of installations been going up so quickly?\n\nAnother example is Double Bind, Juan Munoz's huge work at the Tate Modern gallery in London. A false mezzanine floor in the massive main exhibition hall is full of holes, some real, some trompe l'oeil. A pair of lifts chillingly lit go up and down, heading nowhere. To get the full impact, and to go beyond mere illusionism, you need to go downstairs and look up through the holes. There are grey men living in rooms between the floorboards, installations within the installation. I don't necessarily understand or like all installation art, but I was moved by this. It's creepy and beautiful and strange, but ultimately you, the spectator, need to make an effort to get something out of it.",
  "gaps": [
   {
    "text": "The author gives an example of a ____ from the Thames and Hudson Dictionary that explains what installations are.",
    "answer": "definition"
   },
   {
    "text": "Marcel Duchamp started a new world of art by giving an art status to an ____.",
    "answer": "urinal"
   },
   {
    "text": "The best place to appreciate Munoz's installation is ____.",
    "answer": "downstairs"
   },
   {
    "text": "The writer felt ____ by watching Double Bind.",
    "answer": "moved"
   }
  ],
  "mcq": [
   {
    "q": "The writer includes the story about the beads to show that",
    "options": [
     "installations are a relatively unsophisticated art form.",
     "people get away from installation art as fast as they can.",
     "the audience often actively participates in modern art.",
     "the public is unsure what modern art forms consist of."
    ],
    "answer": "D",
    "evidence": "Perhaps, this is part of the installation",
    "explanation": "Tomoshabinlar munchoqlar sochilishi ham san'at asarimi yoki yo'qmi, bilmay qolishgan, ya'ni zamonaviy san'at nimadan iboratligini aniq bilishmaydi. D."
   },
   {
    "q": "What important features do all installation works have in common?",
    "options": [
     "immobility.",
     "viewer involvement.",
     "humour.",
     "none."
    ],
    "answer": "D",
    "evidence": "They do not all share a set of essential characteristics",
    "explanation": "Barcha installatsiyalar uchun umumiy asosiy xususiyat yo'q. D: \"none\"."
   }
  ]
 },
 {
  "n": 29,
  "title": "Jumping spiders",
  "body": "For a stalking predator, the element of surprise is crucial. And for jumping spiders that sneak onto other spiders' webs to prey on their owners, it can be the difference between having lunch and becoming it. Now zoologists have discovered the secret of these spiders' tactics: creeping forward when their prey's web is vibrating.\n\nThe fifteen known species of Portia jumping spiders are relatively small, with adults being about two centimeters long (that's smaller than the cap on most pens). They habitually stay in the webs of other spiders, and in an area of these webs that is as out-of-the-way as possible. Portia spiders live mostly in tropical forests, where the climate is hot and humid. They hunt a range of other spiders, some of which could easily turn the tables on them. 'They will attack something about twice their own size if they are really hungry,' says Stimson Wilcox of Binghamton University in New York State. Wilcox and his colleague, Kristen Gentile of the University of Canterbury in Christchurch, New Zealand, wanted to find out how Portia spiders keep the upper hand.\n\nThe researchers allowed various prey spiders to spin webs in the laboratory and then introduced Portia spiders. To simulate the shaking effect of a breeze the zoologists used either a model aircraft propeller or attached a tiny magnet to the centre of the web which could be vibrated by applying a varying electrical field. The researchers noticed that the stalking Portia spiders moved more when the webs were shaking than when they were still and they were more likely to capture their prey during tests in which the webs were periodically shaken than in those where the webs were undisturbed. If the spiders were placed onto unoccupied webs, they would make no attempt to change their movements.\n\nIt is the Portia spider's tactic of making its victims' webs shake that has most intrigued the researchers. They noticed that the spiders would sometimes shake their quarry's web violently, then creep forwards up to five millimeters before the vibrations died down. 'They'd make a big pluck with one of their hind legs,' says Wilcox. These twangs were much more powerful than the gentler vibrations Portia spiders use to mimic a trapped insect, and the researchers were initially surprised that the prey spiders did not respond to them in any way. But they have since discovered that the violent twanging produces a pattern of vibrations that match those caused by a twig falling onto the web.\n\nOther predators make use of natural 'smokescreens' or disguise to hide from their prey: lions hunting at night, for example, move in on their prey when clouds obscure the moon. 'But this is the first example of an animal making its own smokescreen that we know of,' says Wilcox. 'Portia spiders are clearly intelligent and they often learn from their prey as they are trying to capture it. They do this by making different signals on the web of their prey until the prey spider makes a movement. In general, Portia spiders adjust their stalking strategy according to their prey and what the prey is doing. Thus, Portia spiders use trial-and-error learning in stalking. Sometimes they will even take an indirect route to reach a prey spider they can see from a distance. This can sometimes take one to two hours following a predetermined route. When it does this, the Portia spider is actually solving problems and thinking ahead about its actions.'",
  "gaps": [
   {
    "text": "Scientists have recently found out about jumping spiders that the key to catching prey is to approach ____ web.",
    "answer": "vibrating"
   },
   {
    "text": "A mature Portia spider is no bigger than a pen's ____.",
    "answer": "cap"
   },
   {
    "text": "In the laboratory condition, scientists tried to make a natural environment, so they placed special equipment in the ____ of the spider web.",
    "answer": "centre/center"
   },
   {
    "text": "Portia spiders can learn the behavior of their prey by using various ____ before they attack.",
    "answer": "signals"
   }
  ],
  "mcq": [
   {
    "q": "In their laboratory experiments, the researchers found that the Portia spiders moved most when the web was",
    "options": [
     "vibrating.",
     "motionless.",
     "undisturbed.",
     "unoccupied."
    ],
    "answer": "A",
    "evidence": "moved more when the webs were shaking than when they were still",
    "explanation": "O'rgimchaklar to'r tebranganda ko'proq harakat qilgan. A."
   },
   {
    "q": "The Portia spider demonstrates 'thinking ahead' when it",
    "options": [
     "chooses prey that is a short distance away.",
     "takes a longer route to reach its prey.",
     "reaches its prey in a short time.",
     "solves the problem of locating its prey."
    ],
    "answer": "D",
    "evidence": "the Portia spider is actually solving problems and thinking ahead about its actions",
    "explanation": "O'ljaga yetish muammosini hal qilganda u oldindan o'ylab harakat qiladi. Kitob kalitida D."
   }
  ]
 },
 {
  "n": 30,
  "title": "The history of the biro",
  "body": "One chilly autumn morning in 1945, five thousand shoppers crowded the pavements outside Gimbels Department Store in New York City. The day before, Gimbels had taken out a full-page newspaper advertisement in the New York Times, announcing the sale of the first ballpoint pens in the United States. The new writing instrument was heralded as \"fantastic, miraculous ... guaranteed to write for two years without refilling!\" Within six hours, Gimbels had sold its entire stock of ten thousand ballpoints at $12.50 each - approximately $130 at today's prices.\n\nIn fact, this 'new' pen was not new after all, and was just the latest development in a long search for the best way to deliver ink to paper. In 1884 Lewis Waterman had patented the fountain pen, giving him the sole rights to manufacture it. This marked a significant leap forward in writing technology, but fountain pens soon became notorious for leaking. In 1888, a leather tanner named John Loud devised and patented the first \"rolling-pointed marker pen\" for marking leather. Loud's design contained a reservoir of ink in a cartridge and a rotating ball point that was constantly bathed on one side with ink. Loud's pen was never manufactured, however, and over the next five decades, 350 additional patents were issued for similar ball-type pens, though none advanced beyond the design stage. Each had their own faults, but the major difficulty was the ink: if the ink was thin, the pens leaked, and if it was too thick, they clogged. Depending on the climate or air temperature, sometimes the pens would do both. Almost fifty years later, Ladislas and Georg Biro, two Hungarian brothers, came up with a solution to this problem. In 1935 Ladislas Biro was working as a journalist, editing a small newspaper. He found himself becoming more and more frustrated by the amount of time he wasted filling fountain pens with ink and cleaning up ink smudges. What's more, the sharp tip of his fountain pen often scratched or tore through the thin newsprint paper. Ladislas and Georg (a chemist) set about making models of new pen designs and creating better inks to use in them. Ladislas had observed that the type of ink used in newspaper printing dried rapidly, leaving the paper dry and smudge-free. He was determined to construct a pen using the same type of ink. However, the thicker ink would not flow from a regular pen nib so he had to develop a new type of point. Biro came up with the idea of fitting his pen with a tiny ball bearing in its tip. As the pen moved along the paper, the ball bearing rotated and picked up ink from the ink cartridge which it delivered to the paper.\n\nThe first Biro pen, like the designs that had gone before it, relied on gravity for the ink to flow to the ball bearing at the tip. This meant that the pens only worked when they were held straight up, and even then the ink flow was sometimes too heavy, leaving big smudges of ink on the paper. The Biro brothers had a rethink and eventually devised a new design, which relied on capillary action rather than gravity to feed the ink. This meant that the ink could flow more smoothly to the tip and the pen could be held at an angle rather than straight up. In 1938, as World War II broke out, the Biro brothers fled to Argentina, where they applied for a patent for their pen and established their first factory.\n\nMeanwhile, in June 1945 an American named Milton Reynolds stumbled upon the Biro pen while on vacation in Buenos Aires. Immediately seeing its commercial potential, he bought several pens and returned to Chicago, where he discovered that Loud's original 1888 patent had long since expired. This meant that the ballpoint was now in the public domain, and he, therefore, wasted no time making a copy based on the Biro design. Establishing his pen company with just $26,000, Reynolds quickly set up a factory with 300 workers who began production on 6th October 1945, stamping out pens from precious scraps of aluminum that hadn't been used during the war for military equipment or weapons. Just 23 days later, it was Reynolds' ballpoint pen that caused the stampede at Gimbels Department Store. Following the ballpoint's debut in New York City, Eversharp challenged Reynolds in the law courts, but lost the case because the Biro brothers had failed to secure a U.S. patent on their invention.",
  "gaps": [
   {
    "text": "The material on which the first ballpoint pen was designed to write was ____.",
    "answer": "leather"
   },
   {
    "text": "In his work, Biro felt ____ with the issues of fountain pens.",
    "answer": "frustrated"
   },
   {
    "text": "The Biro brothers opened their first factory in ____.",
    "answer": "Argentina"
   },
   {
    "text": "The first American biro factory began production in ____.",
    "answer": "1945"
   }
  ],
  "mcq": [
   {
    "q": "The problem with the ballpoint pens invented between 1888 and 1935 was that",
    "options": [
     "they cost a great deal of money to manufacture.",
     "the technology to manufacture them did not exist.",
     "they could not write on ordinary paper.",
     "they were affected by weather conditions."
    ],
    "answer": "D",
    "evidence": "Depending on the climate or air temperature, sometimes the pens would do both",
    "explanation": "Bu ruchkalar ob-havo va haroratga qarab oqardi yoki tiqilib qolardi. D."
   },
   {
    "q": "Milton Reynolds was able to copy the Biro brothers' design because",
    "options": [
     "the Biro brothers' original patent was out of date.",
     "it was legal to copy other designs at the time.",
     "they did not have a patent for North America.",
     "the Biro brothers permitted him."
    ],
    "answer": "C",
    "evidence": "because the Biro brothers had failed to secure a U.S. patent on their invention",
    "explanation": "Biro aka-ukalarning AQShda patenti bo'lmagani uchun Reynolds dizaynni nusxalay olgan. C. A noto'g'ri: muddati o'tgan patent Loudga tegishli edi."
   }
  ]
 }
];
