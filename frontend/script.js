const focusScoreEl = document.getElementById("focusScore");
const alertText = document.getElementById("alertText");
const appUsageEl = document.getElementById("appUsage");

let focusScore = 75;

function updateUI() {
focusScoreEl.innerText = focusScore + "%";

if (focusScore < 40) {
alertText.innerText = "⚠️ Low focus detected. Take a break.";
} else if (focusScore < 70) {
alertText.innerText = "⚡ Moderate focus. Try deep work.";
} else {
alertText.innerText = "🔥 You're in peak productivity!";
}

appUsageEl.innerHTML = `     <li>VS Code - 2 hrs</li>     <li>Chrome - 1.5 hrs</li>     <li>YouTube - 45 mins</li>
  `;
}

const ctx = document.getElementById("productivityChart").getContext("2d");

new Chart(ctx, {
type: "line",
data: {
labels: ["9AM", "10AM", "11AM", "12PM", "1PM"],
datasets: [{
label: "Focus %",
data: [60, 70, 80, 50, 75],
borderColor: "#38bdf8",
fill: false
}]
}
});

setInterval(() => {
focusScore = Math.floor(Math.random() * 100);
updateUI();
}, 3000);

updateUI();
