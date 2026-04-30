const focusScoreEl = document.getElementById("focusScore");
const alertText = document.getElementById("alertText");
const appUsageEl = document.getElementById("appUsage");

const API_URL = "https://present-real-omnipage--arunavabhol.replit.app";

async function logActivity(event, duration = null) {
  const res = await fetch(`${API_URL}/log_activity`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      timestamp: Date.now() / 1000,
      event,
      duration,
    }),
  });
  return res.json();
}

async function getAnalysis() {
  const res = await fetch(`${API_URL}/get_analysis`);
  return res.json();
}

async function fetchData() {
  try {
    const data = await getAnalysis();

    focusScoreEl.innerText = data.focus_score + "%";
    alertText.innerText = data.status;

    appUsageEl.innerHTML = `
      <li>VS Code - ${data.app_usage?.["VS Code"] || "N/A"}</li>
      <li>Chrome - ${data.app_usage?.["Chrome"] || "N/A"}</li>
      <li>YouTube - ${data.app_usage?.["YouTube"] || "N/A"}</li>
    `;
  } catch (err) {
    alertText.innerText = "⚠️ Backend not reachable";
    console.error(err);
  }
}

setInterval(fetchData, 3000);
fetchData();
