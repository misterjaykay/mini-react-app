const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/recipe", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const recipeSeed = [
    {
        title: "Carrot Cake",
        ingreident : [
            "350g Cake Floure",
            "300ml Avocado Oil (or Sunflower/Grapeseed)",
            "300g Brown Sugar",
            "3 Eggs",
            "250~300g Grated Carrots",
            "2ts Baking Powder",
            "1ts Cinnamon Powder",
            "2ts Ginger Powder",
            "Dash of nutmeg",
            "Dash of cloves",
            "100g Grated Mixed Nuts"
        ],
        direction: [
            "준비된 당근을 강판에 갈기.",
            "큰 볼에 오일과 설탕 섞기.",
            "계란 3개와 바닐라 추가.",
            "1의 당근과 생강, 시나몬, 정향, 넛메그 추가.",
            "밀가루는 체에 쳐서 더한후 살살 폴딩.",
            "유산지 팬에 깔고 섭씨 175도 25분",
            "식으면 가로로 반으로 잘라서 아이싱은 가운데, 위, 옆 모두",
            "생크림에 설탕 한스푼씩 추가하며 단단해질때까지 휘핑 (단단한 고깔모자)",
            "마스카포네 넣고 휘핑/폴딩후 냉장고 1시간 보관후 아이싱 바르기",
            "로즈마리로 장식"
        ],
        image: "./assets/images/carrot-cake.jpg",
        cuisine: "English",
        category: [ "Desert" ]
    },
    {
        title: "English Scone",
        ingreident: [
            "밀가루 (박력분/중력분) 300g",
            "무염버터 90g",
            "베이킹 파우더 1ts (5ml)",
            "설탕 2Tb (30ml)",
            "소금 1/4 ts (1.25ml)",
            "우유 110ml"
        ],
        direction: [
            "밀가루, 소금, 설탕 체치기",
            "차가운 버터 작은 큐브 모양으로 잘라서 1에 넣기",
            "손가락으로 버터 잘게 부수며 가루와 섞기 (젖은 모래 같은 질감)",
            "우유를 네번에 걸쳐 접듯이 반죽 (가루 가운데 화산모양 홈을 파고 넣기)",
            "밀대로 2~3cm 두께로 밀어주고 쿠키커터로 자르기",
            "계란물 글레이징",
            "섭씨 200도 10~15분"
        ],
        image: "./assets/images/english-scone.jpg",
        cuisine: "English",
        category: [
            "Desert",
            "Breakfast"
        ]
    },
    {
        title: "Berry Scone",
        ingreident: [
            "밀가루 (박력분/중력분) 400g",
            "무염버터 90g",
            "베이킹 파우더 3ts (15ml)",
            "설탕 3Tb (45ml)",
            "소금 ¼ ts (1.25ml)",
            "우유 120ml (레몬즙 몇방울+바닐라 약간)",
            "베리 (건포도, 크랜베리, 블랙커런트, 혹은 견과류) 90g"
        ],
        direction: [
            "밀가루, 소금, 설탕 체치기",
            "차가운 버터 작은 큐브 모양으로 잘라서 1에 넣기",
            "손가락으로 버터 잘게 부수며 가루와 섞기 (젖은 모래 같은 질감)",
            "우유믹스와 베리 넣어주기",
            "밀대로 2~3cm 두께로 밀어주고 쿠키커터로 자르기",
            "계란물 글레이징",
            "섭씨 220도 10~15분"
        ],
        image: "./assets/images/berry-scone.jpg",
        cuisine: "English",
        category: [
            "Desert",
            "Breakfast"
        ]
    },
    {
        title: "Yorkshire Pudding",
        ingreident: [
            "100g Flour",
            "100ml Milk",
            "100ml Water",
            "2 Eggs",
            "Salt To Taste"
        ],
        direction: [
            "밀가루, 달걀, 물, 소금 넣고 덩어리 없어지게 섞어주기",
            "최소 30분에서 반나절 냉장실에서 휴지 시키기 (cover it up)",
            "팬케이크 틀에 식물성 기름 부어주기 (최대 ¼~⅕ 정도 혹은 바닥만 찰랑거리게)",
            "오일만 섭씨 200도 20분 (밑에 떨어지는 오일 받쳐줄 팬)",
            "냉동실에서 반죽꺼내어 한번 잘 저어주고 뜨거운 기름에 조심스럽게 부어주기",
            "오븐에서 20분 더 익히기"
        ],
        image: "./assets/images/yorkshire-pudding.jpg",
        cuisine: "English",
        category: [ "Desert" ]
    }

];

db.Recipe.deleteMany({})
.then(() => db.Recipe.insertMany(recipeSeed))
.then(data => {
    console.log("Records Inserted");
    process.exit(0);
})
.catch(err => {
    console.log(err);
    process.exit(1);
})