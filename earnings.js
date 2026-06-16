let visits = Number(localStorage.getItem("visits") || 0);
let earnings = Number(localStorage.getItem("earnings") || 0);

/* زيادة زيارة كل مرة يدخل المستخدم */
function addVisit() {
visits += 1;

/* 🔥 حساب أرباح تقديرية */
let baseRate = 0.01; // 1 زيارة = 0.01$
let multiplier = 1;

/* إذا المستخدم يزور أكثر = زيادة أرباح */
if (visits > 10) multiplier = 1.2;
if (visits > 50) multiplier = 1.5;
if (visits > 100) multiplier = 2;
if (visits > 200) multiplier = 3;

/* حساب الأرباح */
earnings += baseRate * multiplier;

/* حفظ */
localStorage.setItem("visits", visits);
localStorage.setItem("earnings", earnings.toFixed(2));
}

/* عرض الأرباح */
function showStats() {
const box = document.getElementById("statsBox");

if (!box) return;

box.innerHTML = `
<div class="stats">
<p>👁️ الزيارات: ${visits}</p>
<p>💰 الأرباح: $${earnings.toFixed(2)}</p>
</div>
`;
}

/* تشغيل */
addVisit();
showStats();