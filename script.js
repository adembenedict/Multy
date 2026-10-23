document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Tab Navigation Logic ---
  const navTabs = document.querySelectorAll(".nav-tab");
  const tabContents = document.querySelectorAll(".tab-content");

  navTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      navTabs.forEach((t) => t.classList.remove("active"));
      
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all tab content sections
      tabContents.forEach((content) => (content.style.display = "none"));

      // Show targeted tab content section
      const targetId = tab.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "flex";
      }
    });
  });

  // --- 2. Mood Option Selection Logic ---
  const moodButtons = document.querySelectorAll(".mood-btn");
  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      moodButtons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // --- 3. Quiz Option Selection Logic ---
  const optionButtons = document.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      optionButtons.forEach((o) => o.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // --- 4. Cooldown Timer Logic ---
  const startTimerBtn = document.getElementById("start-timer-btn");
  const resetTimerBtn = document.getElementById("reset-timer-btn");
  const timerDisplay = document.getElementById("countdown-timer");

  let timerInterval = null;
  let timeRemaining = 300; // 5 minutes in seconds

  function updateDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  if (startTimerBtn) {
    startTimerBtn.addEventListener("click", () => {
      if (timerInterval) return; // Prevent multiple intervals

      timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
          timeRemaining--;
          updateDisplay();
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
          alert("Cooldown finished!");
        }
      }, 1000);
    });
  }

  if (resetTimerBtn) {
    resetTimerBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
      timeRemaining = 300;
      updateDisplay();
    });
  }
});