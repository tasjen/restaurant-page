(() => {
  "use strict";
  !(function () {
    const e = document.createElement("nav");
    e.id = "navbar";
    const t = document.createElement("li");
    (t.id = "home"), (t.textContent = "Home"), t.classList.add("onpage");
    const n = document.createElement("li");
    (n.id = "menu"), (n.textContent = "Menu");
    const c = document.createElement("li");
    (c.id = "contact"), (c.textContent = "Contact");
    const d = document.createElement("ul");
    d.appendChild(t),
      d.appendChild(n),
      d.appendChild(c),
      e.appendChild(d),
      document.querySelector("#content").appendChild(e);
  })(),
    (function () {
      const e = document.createElement("main"),
        t = document.createElement("div");
      t.textContent = "1";
      const n = document.createElement("div");
      n.textContent = "2";
      const c = document.createElement("div");
      c.textContent = "3";
      const d = document.createElement("div");
      (d.textContent = "4"),
        e.appendChild(t),
        e.appendChild(n),
        e.appendChild(c),
        e.appendChild(d),
        document.querySelector("#content").appendChild(e);
    })();
})();