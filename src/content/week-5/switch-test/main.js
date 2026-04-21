

// ============================================
// 1. Load saved theme (runs immediately)
// ============================================
const saved = localStorage.getItem("theme");
if (!saved || saved === "system") {
  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (osDark) {
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
} else {
  document.documentElement.dataset.theme = saved;
}


// ============================================
// STEP 2.2: Open/close the dropdown
// adds and EventListener so that when we click off the menu it closes, we
// are bascially removing the ".open" class so .theme-menu goes back to
// display: none;
// ============================================
const dropdown = document.querySelector(".theme-dropdown");
const trigger = document.querySelector(".theme-trigger");

trigger.addEventListener("click", function (event) {
    event.stopPropagation();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

// ============================================
//STEP 3 THEME BUTTONS ON CLICK
// ============================================

//THE WAY THAT WILL MAKE SENSE RIGHT NOW
const systemBtn = document.querySelector("button[data-theme='system']");
const lightBtn = document.querySelector("button[data-theme='light']");
const darkBtn = document.querySelector("button[data-theme='dark']");

systemBtn.addEventListener("click", function () {
    console.log("system clicked");
  localStorage.setItem("theme", "system");
  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (osDark) {
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
  dropdown.classList.remove("open");
});

lightBtn.addEventListener("click", function () {
    console.log("light clicked");
  localStorage.setItem("theme", "light");
  document.documentElement.dataset.theme = "light";
  dropdown.classList.remove("open");
});

darkBtn.addEventListener("click", function () {
  console.log("dark clicked");
  localStorage.setItem("theme", "dark");
  document.documentElement.dataset.theme = "dark";
  dropdown.classList.remove("open");
});

  
