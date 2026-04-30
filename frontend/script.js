const focusScoreEl = document.getElementById("focusScore");
const alertText = document.getElementById("alertText");
const appUsageEl = document.getElementById("appUsage");

const API_URL = "https://present-real-omnipage--arunavabhol.replit.app/get_analysis";

function fetchData() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {

      focusScoreEl.innerText = data.focus_score + "%";
      alertText.innerText = data.status;

      appUsageEl.innerHTML = `
        <li>VS Code - ${data.app_usage?.["VS Code"] || "N/A"}</li>
        <li>Chrome - ${data.app_usage?.["Chrome"] || "N/A"}</li>
        <li>YouTube - ${data.app_usage?.["YouTube"] || "N/A"}</li>
      `;
    })
    .catch(err => {
      alertText.innerText = "⚠️ Backend not reachable";
      console.error(err);
    });
}

setInterval(fetchData, 3000);
fetchData();
