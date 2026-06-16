const newsContainer = document.getElementById("newsContainer");

const news = [
{
title:"GTA VI يقترب من الإصدار",
desc:"تسريبات جديدة حول موعد إطلاق اللعبة المنتظرة.",
img:"https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800",
date:"2026-06-05",
game:"GTA V"
},
{
title:"Fortnite تحديث ضخم جديد",
desc:"أسلحة وخريطة جديدة بالكامل في الموسم القادم.",
img:"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800",
date:"2026-06-04",
game:"Fortnite"
},
{
title:"Red Dead Redemption 3 إشاعات قوية",
desc:"Rockstar تعمل على مشروع جديد.",
img:"https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800",
date:"2026-06-03",
game:"Red Dead Redemption 2"
},
{
title:"Minecraft تحديث الجرافيك",
desc:"تحسينات كبيرة في الرسوميات.",
img:"https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800",
date:"2026-06-02",
game:"Minecraft"
}
];

function renderNews() {
newsContainer.innerHTML = "";

news.forEach(n => {
newsContainer.innerHTML += `
<div class="news-card">
<img src="${n.img}">
<div class="news-content">
<h3>${n.title}</h3>
<p>${n.desc}</p>
<span>🎮 ${n.game} | 📅 ${n.date}</span>
</div>
</div>
`;
});
}

renderNews();