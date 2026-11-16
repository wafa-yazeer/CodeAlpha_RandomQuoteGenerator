(function () {
  "use strict";

  var CATEGORIES = ["Motivation", "Success", "Life", "Wisdom", "Coding"];

  var CARD_THEMES = [
    { id: "classic", name: "Classic" },
    { id: "midnight", name: "Midnight" },
    { id: "blush", name: "Blush" },
    { id: "ocean", name: "Ocean" },
    { id: "sage", name: "Sage" },
    { id: "paper", name: "Paper" }
  ];

  // [text, author, category]
  var BASE = [
    // Motivation
    ["The only way to do great work is to love what you do.", "Steve Jobs", "Motivation"],
    ["Stay hungry, stay foolish.", "Steve Jobs", "Motivation"],
    ["It does not matter how slowly you go as long as you do not stop.", "Confucius", "Motivation"],
    ["Fall seven times, stand up eight.", "Japanese proverb", "Motivation"],
    ["The journey of a thousand miles begins with a single step.", "Lao Tzu", "Motivation"],
    ["Start where you are. Use what you have. Do what you can.", "Arthur Ashe", "Motivation"],
    ["Dreams don't work unless you do.", "John C. Maxwell", "Motivation"],
    ["Do what you can, with what you have, where you are.", "Theodore Roosevelt", "Motivation"],
    ["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese proverb", "Motivation"],
    ["A river cuts through rock not because of its power, but because of its persistence.", "Jim Watkins", "Motivation"],
    ["Well begun is half done.", "Aristotle", "Motivation"],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzky", "Motivation"],
    ["The expert in anything was once a beginner.", "Helen Hayes", "Motivation"],
    ["Energy and persistence conquer all things.", "Benjamin Franklin", "Motivation"],
    ["Perseverance is not a long race; it is many short races one after the other.", "Walter Elliot", "Motivation"],
    ["The way to get started is to quit talking and begin doing.", "Walt Disney", "Motivation"],
    ["Don't watch the clock; do what it does. Keep going.", "Sam Levenson", "Motivation"],
    ["The only impossible journey is the one you never begin.", "Tony Robbins", "Motivation"],
    ["Fortune favors the bold.", "Virgil", "Motivation"],
    ["Nothing will work unless you do.", "Maya Angelou", "Motivation"],
    ["The best way out is always through.", "Robert Frost", "Motivation"],
    ["Great things are done by a series of small things brought together.", "Vincent van Gogh", "Motivation"],

    // Success
    ["Well done is better than well said.", "Benjamin Franklin", "Success"],
    ["Excellence is not an act, but a habit.", "Will Durant", "Success"],
    ["Whether you think you can, or you think you can't, you're right.", "Henry Ford", "Success"],
    ["The best way to predict the future is to invent it.", "Alan Kay", "Success"],
    ["An investment in knowledge pays the best interest.", "Benjamin Franklin", "Success"],
    ["The best revenge is massive success.", "Frank Sinatra", "Success"],
    ["If you want to lift yourself up, lift up someone else.", "Booker T. Washington", "Success"],
    ["A smooth sea never made a skilled sailor.", "English proverb", "Success"],
    ["Luck is what happens when preparation meets opportunity.", "Seneca", "Success"],
    ["Genius is one percent inspiration and ninety-nine percent perspiration.", "Thomas Edison", "Success"],
    ["If you cannot do great things, do small things in a great way.", "Napoleon Hill", "Success"],
    ["Whatever the mind of man can conceive and believe, it can achieve.", "Napoleon Hill", "Success"],
    ["Strive not to be a success, but rather to be of value.", "Albert Einstein", "Success"],
    ["Success usually comes to those who are too busy to be looking for it.", "Henry David Thoreau", "Success"],
    ["I attribute my success to this: I never gave or took any excuse.", "Florence Nightingale", "Success"],
    ["Nothing great was ever achieved without enthusiasm.", "Ralph Waldo Emerson", "Success"],
    ["If you want to go fast, go alone. If you want to go far, go together.", "African proverb", "Success"],
    ["Alone we can do so little; together we can do so much.", "Helen Keller", "Success"],
    ["Design is not just what it looks like and feels like. Design is how it works.", "Steve Jobs", "Success"],

    // Life
    ["To live is the rarest thing in the world. Most people exist, that is all.", "Oscar Wilde", "Life"],
    ["Happiness is not something ready made. It comes from your own actions.", "Dalai Lama", "Life"],
    ["Turn your wounds into wisdom.", "Oprah Winfrey", "Life"],
    ["Courage is grace under pressure.", "Ernest Hemingway", "Life"],
    ["The only thing we have to fear is fear itself.", "Franklin D. Roosevelt", "Life"],
    ["That which does not kill us makes us stronger.", "Friedrich Nietzsche", "Life"],
    ["Nothing in life is to be feared, it is only to be understood.", "Marie Curie", "Life"],
    ["The purpose of our lives is to be happy.", "Dalai Lama", "Life"],
    ["Not everything that is faced can be changed, but nothing can be changed until it is faced.", "James Baldwin", "Life"],
    ["Everything you've ever wanted is on the other side of fear.", "George Addair", "Life"],
    ["What you do makes a difference, and you have to decide what kind of difference you want to make.", "Jane Goodall", "Life"],
    ["It is not that we have a short time to live, but that we waste much of it.", "Seneca", "Life"],
    ["We suffer more often in imagination than in reality.", "Seneca", "Life"],
    ["The happiness of your life depends upon the quality of your thoughts.", "Marcus Aurelius", "Life"],
    ["He who has a why to live can bear almost any how.", "Friedrich Nietzsche", "Life"],
    ["There is no greater agony than bearing an untold story inside you.", "Maya Angelou", "Life"],
    ["Be kind, for everyone you meet is fighting a hard battle.", "Ian Maclaren", "Life"],
    ["No act of kindness, no matter how small, is ever wasted.", "Aesop", "Life"],
    ["The only way to make sense out of change is to plunge into it, move with it, and join the dance.", "Alan Watts", "Life"],
    ["I am not afraid of storms, for I am learning how to sail my ship.", "Louisa May Alcott", "Life"],
    ["Life is either a daring adventure or nothing at all.", "Helen Keller", "Life"],
    ["Your time is limited, so don't waste it living someone else's life.", "Steve Jobs", "Life"],

    // Wisdom
    ["The unexamined life is not worth living.", "Socrates", "Wisdom"],
    ["Imagination is more important than knowledge.", "Albert Einstein", "Wisdom"],
    ["Learning never exhausts the mind.", "Leonardo da Vinci", "Wisdom"],
    ["I think, therefore I am.", "René Descartes", "Wisdom"],
    ["Talent hits a target no one else can hit; genius hits a target no one else can see.", "Arthur Schopenhauer", "Wisdom"],
    ["Happiness depends upon ourselves.", "Aristotle", "Wisdom"],
    ["Waste no more time arguing about what a good man should be. Be one.", "Marcus Aurelius", "Wisdom"],
    ["The mind is not a vessel to be filled, but a fire to be kindled.", "Plutarch", "Wisdom"],
    ["Knowledge is power.", "Francis Bacon", "Wisdom"],
    ["No man ever steps in the same river twice, for it's not the same river and he's not the same man.", "Heraclitus", "Wisdom"],
    ["Education is the most powerful weapon which you can use to change the world.", "Nelson Mandela", "Wisdom"],
    ["I have no special talent. I am only passionately curious.", "Albert Einstein", "Wisdom"],
    ["Think before you speak. Read before you think.", "Fran Lebowitz", "Wisdom"],

    // Coding
    ["Talk is cheap. Show me the code.", "Linus Torvalds", "Coding"],
    ["Programs must be written for people to read, and only incidentally for machines to execute.", "Harold Abelson", "Coding"],
    ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Martin Fowler", "Coding"],
    ["Premature optimization is the root of all evil.", "Donald Knuth", "Coding"],
    ["Make it work, make it right, make it fast.", "Kent Beck", "Coding"],
    ["Simplicity is prerequisite for reliability.", "Edsger W. Dijkstra", "Coding"],
    ["First, solve the problem. Then, write the code.", "John Johnson", "Coding"]
  ].map(function (q, i) {
    return { id: "b" + i, text: q[0], author: q[1], cat: q[2], custom: false };
  });

  var KEYS = { custom: "lw_custom", favs: "lw_favs", theme: "lw_theme", card: "lw_card" };

  function load(key, fallback) {
    try {
      var v = JSON.parse(localStorage.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
  }

  var custom = load(KEYS.custom, []);
  var favs = load(KEYS.favs, []);
  var category = "All";
  var cardTheme = load(KEYS.card, "classic");
  var current = null;
  var lastId = null;
  var installPrompt = null;

  var $ = function (id) { return document.getElementById(id); };
  var el = {
    card: $("card"), avatar: $("avatar"), text: $("quoteText"), author: $("quoteAuthor"),
    newBtn: $("newBtn"), favBtn: $("favBtn"), copyBtn: $("copyBtn"), imgBtn: $("imgBtn"),
    shareBtn: $("shareBtn"), speakBtn: $("speakBtn"), chips: $("chips"), themes: $("themes"),
    themeBtn: $("themeBtn"), themeIcon: $("themeIcon"), installBtn: $("installBtn"), toast: $("toast"),
    form: $("addForm"), inText: $("inText"), inAuthor: $("inAuthor"), inCat: $("inCat"),
    errText: $("errText"), myList: $("myList"), favList: $("favList"), favSearch: $("favSearch")
  };

  function allQuotes() { return BASE.concat(custom); }
  function pool() {
    return allQuotes().filter(function (q) { return category === "All" || q.cat === category; });
  }
  function findById(id) {
    var all = allQuotes();
    for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
    return null;
  }
  function initials(name) {
    var clean = name.replace(/\(.*?\)/g, "").trim();
    var parts = clean.split(/\s+/).filter(Boolean);
    if (!parts.length) return "?";
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  }
  function quoted(q) { return "\u201C" + q.text + "\u201D"; }
  function plain(q) { return quoted(q) + " \u2014 " + q.author; }

  var toastTimer;
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.classList.remove("show"); }, 1900);
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  }

  function pick() {
    var p = pool();
    if (!p.length) return null;
    if (p.length === 1) return p[0];
    var q;
    do { q = p[Math.floor(Math.random() * p.length)]; } while (q.id === lastId);
    return q;
  }

  function animate() {
    el.card.classList.remove("swap");
    void el.card.offsetWidth;
    el.card.classList.add("swap");
  }

  function updateFavButton() {
    var saved = !!current && favs.indexOf(current.id) !== -1;
    el.favBtn.setAttribute("aria-pressed", saved ? "true" : "false");
    el.favBtn.setAttribute("aria-label", saved ? "Remove from favorites" : "Save to favorites");
  }

  function showQuote() {
    stopSpeaking();
    var q = pick();
    current = q;
    if (!q) {
      el.text.textContent = "No quotes in this category yet. Add one in the Add tab.";
      el.author.textContent = "";
      el.avatar.textContent = "LW";
      updateFavButton();
      return;
    }
    lastId = q.id;
    el.text.textContent = quoted(q);
    el.author.textContent = q.author;
    el.avatar.textContent = initials(q.author);
    updateFavButton();
    animate();
  }

  function renderChips() {
    el.chips.innerHTML = "";
    ["All"].concat(CATEGORIES).forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.textContent = c;
      b.setAttribute("aria-pressed", c === category ? "true" : "false");
      b.addEventListener("click", function () {
        category = c;
        renderChips();
        showQuote();
      });
      el.chips.appendChild(b);
    });
  }

  function applyCardTheme() {
    el.card.setAttribute("data-card", cardTheme);
    Array.prototype.forEach.call(el.themes.children, function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-card") === cardTheme ? "true" : "false");
    });
  }

  function renderThemes() {
    el.themes.innerHTML = "";
    CARD_THEMES.forEach(function (t) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "swatch";
      b.setAttribute("data-card", t.id);
      b.setAttribute("aria-label", t.name + " card style");
      b.title = t.name;
      b.addEventListener("click", function () {
        cardTheme = t.id;
        save(KEYS.card, cardTheme);
        applyCardTheme();
      });
      el.themes.appendChild(b);
    });
    if (!CARD_THEMES.some(function (t) { return t.id === cardTheme; })) cardTheme = "classic";
    applyCardTheme();
  }

  function emptyState(title, body) {
    var d = document.createElement("div");
    d.className = "empty";
    var s = document.createElement("strong");
    s.textContent = title;
    d.appendChild(s);
    d.appendChild(document.createTextNode(body));
    return d;
  }

  function makeItem(q, label, onRemove) {
    var row = document.createElement("div");
    row.className = "item";
    var left = document.createElement("div");
    var t = document.createElement("p");
    t.className = "t";
    t.textContent = quoted(q);
    var a = document.createElement("p");
    a.className = "a";
    a.textContent = q.author;
    left.appendChild(t);
    left.appendChild(a);
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "icon-btn";
    btn.setAttribute("aria-label", label);
    btn.innerHTML = '<svg class="ic"><use href="#i-trash"/></svg>';
    btn.addEventListener("click", onRemove);
    row.appendChild(left);
    row.appendChild(btn);
    return row;
  }

  function renderFavs() {
    el.favList.innerHTML = "";
    var term = el.favSearch.value.trim().toLowerCase();
    var items = favs.map(findById).filter(Boolean);
    el.favSearch.hidden = items.length === 0;
    if (!items.length) {
      el.favList.appendChild(emptyState("No favorites yet", "Tap the heart on a quote to keep it here."));
      return;
    }
    var shown = items.filter(function (q) {
      return !term || q.text.toLowerCase().indexOf(term) !== -1 || q.author.toLowerCase().indexOf(term) !== -1;
    });
    if (!shown.length) {
      el.favList.appendChild(emptyState("No matches", "Try a different word or author."));
      return;
    }
    shown.forEach(function (q) {
      el.favList.appendChild(makeItem(q, "Remove from favorites", function () {
        favs = favs.filter(function (id) { return id !== q.id; });
        save(KEYS.favs, favs);
        renderFavs();
        updateFavButton();
      }));
    });
  }

  function renderMine() {
    el.myList.innerHTML = "";
    if (!custom.length) {
      el.myList.appendChild(emptyState("Start your collection", "Quotes you add show up in the random mix."));
      return;
    }
    custom.forEach(function (q) {
      el.myList.appendChild(makeItem(q, "Delete this quote", function () {
        if (!window.confirm("Delete this quote?")) return;
        custom = custom.filter(function (c) { return c.id !== q.id; });
        favs = favs.filter(function (id) { return id !== q.id; });
        save(KEYS.custom, custom);
        save(KEYS.favs, favs);
        if (current && current.id === q.id) { lastId = null; showQuote(); }
        renderMine();
        toast("Quote deleted");
      }));
    });
  }

  function showView(name) {
    ["home", "add", "favs"].forEach(function (n) {
      $("view-" + n).classList.toggle("is-active", n === name);
    });
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.getAttribute("data-view") === name;
      t.classList.toggle("is-active", on);
      if (on) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
    });
    if (name === "favs") renderFavs();
    if (name === "add") renderMine();
    window.scrollTo(0, 0);
  }

  function copyText(str) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(str);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = str;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy") ? resolve() : reject(new Error("copy failed")); } catch (e) { reject(e); }
      document.body.removeChild(ta);
    });
  }

  /* ---------- Quote image (Canvas) ---------- */

  function wrapLines(ctx, text, maxWidth) {
    var words = text.split(/\s+/);
    var lines = [];
    var line = "";
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line);
        line = w;
      } else {
        line = test;
      }
    });
    if (line) lines.push(line);
    return lines;
  }

  function drawQuoteImage(q) {
    var W = 1080, H = 1350;
    var canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    var ctx = canvas.getContext("2d");

    var cs = getComputedStyle(el.card);
    var p = function (name) { return cs.getPropertyValue(name).trim(); };
    var SERIF = 'Newsreader, Georgia, "Times New Roman", serif';
    var SANS = 'Figtree, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';

    var grad = ctx.createLinearGradient(0, 0, W * 0.35, H);
    grad.addColorStop(0, p("--c-bg1"));
    grad.addColorStop(1, p("--c-bg2"));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // avatar with initials
    ctx.fillStyle = p("--c-avatar");
    ctx.beginPath();
    ctx.arc(W / 2, 230, 72, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = p("--c-ink");
    ctx.font = "500 46px " + SANS;
    ctx.fillText(initials(q.author), W / 2, 232);

    // quote text, shrinks until it fits
    var zoneTop = 380, zoneH = 640, maxW = 820;
    var size = 78, lines, lh;
    var text = quoted(q);
    do {
      ctx.font = "italic 400 " + size + "px " + SERIF;
      lines = wrapLines(ctx, text, maxW);
      lh = size * 1.4;
      size -= 4;
    } while (lines.length * lh > zoneH && size > 30);

    ctx.fillStyle = p("--c-ink");
    var startY = zoneTop + (zoneH - lines.length * lh) / 2;
    lines.forEach(function (ln, i) {
      ctx.fillText(ln, W / 2, startY + lh * (i + 0.5));
    });

    // divider
    ctx.strokeStyle = p("--c-line");
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 70, 1075);
    ctx.lineTo(W / 2 + 70, 1075);
    ctx.stroke();

    // author
    ctx.fillStyle = p("--c-ink");
    ctx.font = "600 34px " + SANS;
    if ("letterSpacing" in ctx) ctx.letterSpacing = "5px";
    ctx.fillText(q.author.toUpperCase(), W / 2, 1140);
    if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";

    // watermark
    ctx.fillStyle = p("--c-soft");
    ctx.font = "500 28px " + SANS;
    ctx.fillText("little wisdom.", W / 2, 1262);

    return canvas;
  }

  function makeImageBlob(q) {
    var fonts = document.fonts && document.fonts.load
      ? Promise.all([
          document.fonts.load("italic 400 40px Newsreader"),
          document.fonts.load("500 30px Figtree"),
          document.fonts.load("600 30px Figtree")
        ]).catch(function () {})
      : Promise.resolve();
    return fonts.then(function () {
      var canvas = drawQuoteImage(q);
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          blob ? resolve(blob) : reject(new Error("Image failed"));
        }, "image/png");
      });
    });
  }

  function slug(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "quote";
  }

  function downloadImage() {
    if (!current) return;
    el.imgBtn.classList.add("is-busy");
    makeImageBlob(current).then(function (blob) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "quote-" + slug(current.author) + ".png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
      toast("Image saved");
    }).catch(function () {
      toast("Couldn't create the image");
    }).then(function () {
      el.imgBtn.classList.remove("is-busy");
    });
  }

  function shareQuote() {
    if (!current) return;
    var q = current;
    makeImageBlob(q).then(function (blob) {
      var file = new File([blob], "quote.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        return navigator.share({ files: [file], text: plain(q) });
      }
      if (navigator.share) {
        return navigator.share({ text: plain(q) });
      }
      return copyText(plain(q)).then(function () { toast("Sharing isn't supported here. Quote copied."); });
    }).catch(function (err) {
      if (err && err.name === "AbortError") return;
      toast("Couldn't share");
    });
  }

  function speakQuote() {
    if (!current || !("speechSynthesis" in window)) return;
    var synth = window.speechSynthesis;
    if (synth.speaking) { synth.cancel(); return; }
    var u = new SpeechSynthesisUtterance(current.text + " By " + current.author + ".");
    u.rate = 0.95;
    synth.speak(u);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var dark = theme === "dark";
    el.themeIcon.setAttribute("href", dark ? "#i-sun" : "#i-moon");
    el.themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#181714" : "#F2EFE9");
  }

  /* ---------- Events ---------- */

  el.newBtn.addEventListener("click", showQuote);

  el.favBtn.addEventListener("click", function () {
    if (!current) return;
    var i = favs.indexOf(current.id);
    if (i === -1) { favs.push(current.id); toast("Saved to favorites"); }
    else { favs.splice(i, 1); toast("Removed from favorites"); }
    save(KEYS.favs, favs);
    updateFavButton();
  });

  el.copyBtn.addEventListener("click", function () {
    if (!current) return;
    copyText(plain(current))
      .then(function () { toast("Quote copied"); })
      .catch(function () { toast("Couldn't copy. Select the text instead."); });
  });

  el.imgBtn.addEventListener("click", downloadImage);
  el.shareBtn.addEventListener("click", shareQuote);
  el.speakBtn.addEventListener("click", speakQuote);
  if (!("speechSynthesis" in window)) el.speakBtn.hidden = true;

  el.themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    save(KEYS.theme, next);
  });

  document.querySelectorAll(".tab").forEach(function (t) {
    t.addEventListener("click", function () { showView(t.getAttribute("data-view")); });
  });

  el.favSearch.addEventListener("input", renderFavs);
  el.inText.addEventListener("input", function () { el.errText.textContent = ""; });

  el.form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = el.inText.value.trim();
    if (text.length < 5) {
      el.errText.textContent = "Enter a quote with at least 5 characters.";
      el.inText.focus();
      return;
    }
    custom.push({
      id: "c" + Date.now(),
      text: text,
      author: el.inAuthor.value.trim() || "Unknown",
      cat: el.inCat.value,
      custom: true
    });
    save(KEYS.custom, custom);
    el.form.reset();
    el.errText.textContent = "";
    renderMine();
    toast("Quote added");
  });

  /* ---------- Install (PWA) ---------- */

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    installPrompt = e;
    el.installBtn.hidden = false;
  });
  window.addEventListener("appinstalled", function () {
    installPrompt = null;
    el.installBtn.hidden = true;
    toast("App installed");
  });
  el.installBtn.addEventListener("click", function () {
    if (!installPrompt) return;
    installPrompt.prompt();
    installPrompt.userChoice.then(function () {
      installPrompt = null;
      el.installBtn.hidden = true;
    });
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { /* offline mode unavailable */ });
    });
  }

  /* ---------- Start ---------- */

  CATEGORIES.forEach(function (c) {
    var o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    el.inCat.appendChild(o);
  });

  var savedTheme = load(KEYS.theme, null);
  applyTheme(savedTheme || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  renderChips();
  renderThemes();
  showQuote();
})();
