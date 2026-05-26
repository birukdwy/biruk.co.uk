// biruk.co.uk — minimal enhancements, no dependencies.

// Keep the footer copyright year current.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
