let visits = Number(localStorage.getItem("visits") || 0);
let earnings = Number(localStorage.getItem("earnings") || 0);

/* تحديث الإحصائيات */
document.getElementById("visitsCount").innerText = visits;
document.getElementById("earningsCount").innerText = "$" + earnings.toFixed(2);

/* عدد الألعاب */
document.getElementById("gamesCount").innerText =
window.games ? window.games.length : 0;

/* عدد الأخبار */
document.getElementById("newsCount").innerText =
typeof news !== "undefined" ? news.length : 0;