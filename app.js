(() => {
  const state = {
    lang: "ro",
    tab: "drinks"
  };

  const grid = document.getElementById("categoryGrid");
  const underline = document.querySelector(".tabs__underline");
  const langButtons = Array.from(document.querySelectorAll(".lang__btn"));
  const tabButtons = Array.from(document.querySelectorAll(".tab"));

  function t(key) {
    const dict = window.MENU_DATA?.i18n?.[state.lang] || {};
    return dict[key] || key;
  }

  function setLang(next) {
    state.lang = next;
    document.documentElement.lang = next;

    for (const btn of langButtons) {
      const pressed = btn.dataset.lang === next;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    }

    for (const node of document.querySelectorAll("[data-i18n]")) {
      node.textContent = t(node.getAttribute("data-i18n"));
    }

    renderGrid();
  }

  function setTab(next) {
    state.tab = next;
    for (const btn of tabButtons) {
      const selected = btn.dataset.tab === next;
      btn.setAttribute("aria-selected", selected ? "true" : "false");
    }

    underline.style.transform = next === "drinks" ? "translateX(0%)" : "translateX(100%)";
    renderGrid();
  }

  function renderGrid() {
    const items = window.MENU_DATA?.pages?.[state.tab] || [];
    grid.innerHTML = "";

    for (const item of items) {
      const card = document.createElement("a");
      card.className = "card";
      card.href = item.href || "#";
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", t(item.key));

      const img = document.createElement("div");
      img.className = "card__img";
      img.dataset.variant = item.variant || "";

      const label = document.createElement("div");
      label.className = "card__label";

      const title = document.createElement("span");
      title.textContent = t(item.key);

      const arrow = document.createElement("span");
      arrow.className = "card__arrow";
      arrow.setAttribute("aria-hidden", "true");

      label.appendChild(title);
      label.appendChild(arrow);
      card.appendChild(img);
      card.appendChild(label);

      grid.appendChild(card);
    }
  }

  for (const btn of langButtons) {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  }

  for (const btn of tabButtons) {
    btn.addEventListener("click", () => setTab(btn.dataset.tab));
  }

  // Initial
  setLang(state.lang);
  setTab(state.tab);
})();
