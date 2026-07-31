/* ============================================================
   GIRLFRIEND'S DAY — SCRIPT
   Reads everything from CONFIG (config.js). Photos and any
   extra reasons a visitor adds are saved in the browser via
   localStorage, so nothing needs a server or database.
   ============================================================ */

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  /* ---------- fill in text from CONFIG ---------- */

  function applyText() {
    $("gateTag").textContent = CONFIG.heartEmoji + " " + CONFIG.envelopeTag;
    $("seal").textContent = CONFIG.sealEmoji;
    $("tapHint").textContent = CONFIG.tapToOpenText + " ♡";

    $("heroTag").textContent = CONFIG.heroTag;
    $("heroTitle").textContent = CONFIG.heroTitle;
    $("heroSubtitle").textContent = CONFIG.heroSubtitle;
    $("heroBody").textContent = CONFIG.heroBody;

    if (CONFIG.petNameLine) {
      $("petLine").hidden = false;
      $("petLine").textContent = CONFIG.petNameLine;
    }

    if (CONFIG.songTitle) {
      $("songCard").hidden = false;
      $("songTitle").textContent = CONFIG.songTitle;
      $("songSubtitle").textContent = CONFIG.songSubtitle;
      $("audio").src = CONFIG.songFile;
      if (CONFIG.songQuote) {
        $("songQuote").hidden = false;
        $("songQuote").textContent = CONFIG.songQuote;
      }
    }

    if (CONFIG.heroJumpText) $("heroJumpBtn").textContent = CONFIG.heroJumpText + " →";

    $("momentsTag").textContent = CONFIG.momentsTag;
    $("momentsTitle").textContent = CONFIG.momentsTitle;
    $("momentsSubtitle").textContent = CONFIG.momentsSubtitle;
    if (CONFIG.momentsJumpText) $("momentsJumpBtn").textContent = CONFIG.momentsJumpText + " →";

    $("detailsTag").textContent = CONFIG.detailsTag;
    $("detailsTitle").textContent = CONFIG.detailsTitle;
    $("detailsSubtitle").textContent = CONFIG.detailsSubtitle;
    if (CONFIG.detailsJumpText) $("detailsJumpBtn").textContent = CONFIG.detailsJumpText + " →";

    $("bouquetTag").textContent = CONFIG.bouquetTag;
    $("bouquetTitle").textContent = CONFIG.bouquetTitle;
    $("bouquetSubtitle").textContent = CONFIG.bouquetSubtitle;

    $("letterTag").textContent = CONFIG.letterTag;
    const letterBody = $("letterBody");
    letterBody.innerHTML = "";
    CONFIG.letterParagraphs.forEach((p) => {
      const el = document.createElement("p");
      el.textContent = p;
      letterBody.appendChild(el);
    });
    $("letterSignoff").textContent = "— " + CONFIG.yourSignOff.toUpperCase();

    document.title = CONFIG.heroTitle + " · " + CONFIG.herName;
  }

  /* ---------- floating background hearts & teddies ---------- */

  function initFloaties() {
    const holder = $("floaties");
    const icons = ["🧸", "💗", "💕", "🐻", "♡"];
    const count = window.innerWidth < 560 ? 8 : 14;
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.textContent = icons[i % icons.length];
      span.style.left = Math.random() * 96 + "%";
      span.style.top = Math.random() * 100 + "%";
      span.style.fontSize = (0.9 + Math.random() * 1.1) + "rem";
      span.style.animationDuration = (12 + Math.random() * 10) + "s";
      span.style.animationDelay = (Math.random() * 6) + "s";
      holder.appendChild(span);
    }
  }

  /* ---------- the wax-seal envelope gate ---------- */

  function initGate() {
    const gate = $("gate");
    const envelope = $("envelope");

    function openGate() {
      envelope.classList.add("open");
      setTimeout(() => gate.classList.add("hidden"), 550);
      document.body.style.overflow = "";
    }

    document.body.style.overflow = "hidden";
    envelope.addEventListener("click", openGate);
    envelope.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openGate(); }
    });
  }

  /* ---------- scroll reveal ---------- */

  function initReveal() {
    document.querySelectorAll("section, footer").forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in");
      }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------- song player ---------- */

  function initSong() {
    const audio = $("audio");
    const playBtn = $("songPlay");
    const fill = $("songFill");
    if (!CONFIG.songTitle) return;

    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().catch(() => {
          alert("Add your song file at " + CONFIG.songFile + " to play it here.");
        });
        playBtn.textContent = "❚❚";
      } else {
        audio.pause();
        playBtn.textContent = "▶";
      }
    });

    audio.addEventListener("timeupdate", () => {
      if (audio.duration) fill.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    });
    audio.addEventListener("ended", () => { playBtn.textContent = "▶"; fill.style.width = "0%"; });
  }

  /* ---------- hero album preview strip ---------- */

  function initPreviewRow() {
    const row = $("previewRow");
    row.innerHTML = "";
    const shots = (CONFIG.photos || []).slice(0, 3);
    if (!shots.length) {
      // gentle placeholder hearts until real photos are added
      for (let i = 0; i < 3; i++) {
        const t = document.createElement("div");
        t.className = "preview-thumb";
        t.textContent = "♡";
        row.appendChild(t);
      }
      return;
    }
    shots.forEach((p) => {
      const t = document.createElement("div");
      t.className = "preview-thumb";
      const img = document.createElement("img");
      img.src = p.src;
      img.alt = p.caption || "a photo of us";
      t.appendChild(img);
      row.appendChild(t);
    });
  }

  /* ---------- little details ---------- */

  function initDetails() {
    const grid = $("detailsGrid");
    grid.innerHTML = "";
    CONFIG.details.forEach((d) => {
      const card = document.createElement("div");
      card.className = "detail-card";

      const icon = document.createElement("div");
      icon.className = "detail-icon";
      icon.textContent = d.icon;

      const textWrap = document.createElement("div");
      const label = document.createElement("div");
      label.className = "detail-label";
      label.textContent = d.label;
      const value = document.createElement("div");
      value.className = "detail-value";
      value.textContent = d.value;
      textWrap.appendChild(label);
      textWrap.appendChild(value);

      card.appendChild(icon);
      card.appendChild(textWrap);
      grid.appendChild(card);
    });
  }

  /* ---------- photo gallery ----------
     Base photos come from CONFIG.photos (committed to the repo, so
     they show up for HER on any device with no upload needed).
     Anything added through the "add photos" box is layered on top
     and saved only in that browser's localStorage. */

  const PHOTOS_KEY = "gfday_extra_photos_v1";

  function basePhotos() {
    if (CONFIG.photos && CONFIG.photos.length) {
      return CONFIG.photos.map((p) => ({ src: p.src, caption: p.caption || "" }));
    }
    // first-run placeholder so the stack isn't empty
    return [{ src: "", caption: CONFIG.defaultCaption }];
  }

  function loadExtraPhotos() {
    try {
      const raw = localStorage.getItem(PHOTOS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore corrupt storage */ }
    return [];
  }

  function saveExtraPhotos(list) {
    try { localStorage.setItem(PHOTOS_KEY, JSON.stringify(list)); }
    catch (e) { alert("Couldn't save that photo — your browser storage may be full."); }
  }

  function initGallery() {
    const base = basePhotos();
    let photos = [...base, ...loadExtraPhotos()];
    let index = 0;

    // helper: persist only the part of `photos` beyond the base list
    function persistExtra() {
      saveExtraPhotos(photos.slice(base.length));
    }

    const stack = $("stack");
    const stackIndex = $("stackIndex");
    const thumbRow = $("thumbRow");
    const prevBtn = $("prevBtn");
    const nextBtn = $("nextBtn");
    const captionInput = $("captionInput");
    const dropzone = $("dropzone");
    const photoInput = $("photoInput");

    function render() {
      stack.innerHTML = "";
      photos.forEach((p, i) => {
        const card = document.createElement("div");
        card.className = "photo-card";
        const offset = i - index;
        card.style.transform = `translateY(${offset * 6}px) scale(${1 - Math.abs(offset) * 0.04})`;
        card.style.opacity = offset === 0 ? "1" : "0";
        card.style.zIndex = String(100 - Math.abs(offset));
        card.style.pointerEvents = offset === 0 ? "auto" : "none";

        const frame = document.createElement("div");
        frame.className = "photo-frame";
        if (p.src) {
          const img = document.createElement("img");
          img.src = p.src;
          img.alt = p.caption || "a photo of us";
          frame.appendChild(img);
        } else {
          frame.textContent = "add your first photo below ↓";
        }

        if (photos.length > 1 && offset === 0 && i >= base.length) {
          const del = document.createElement("button");
          del.className = "photo-remove";
          del.setAttribute("aria-label", "Remove this photo");
          del.textContent = "✕";
          del.addEventListener("click", (ev) => {
            ev.stopPropagation();
            photos.splice(i, 1);
            if (index >= photos.length) index = photos.length - 1;
            persistExtra();
            render();
          });
          frame.appendChild(del);
        }

        const cap = document.createElement("div");
        cap.className = "photo-caption";
        cap.textContent = p.caption || "";

        card.appendChild(frame);
        card.appendChild(cap);
        stack.appendChild(card);
      });

      stackIndex.textContent = `${index + 1} / ${photos.length}`;
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === photos.length - 1;
      captionInput.value = photos[index] ? (photos[index].caption || "") : "";

      thumbRow.innerHTML = "";
      photos.forEach((p, i) => {
        const t = document.createElement("button");
        t.className = "thumb" + (i === index ? " active" : "");
        t.setAttribute("aria-label", "Go to photo " + (i + 1));
        if (p.src) {
          const img = document.createElement("img");
          img.src = p.src;
          t.appendChild(img);
        } else {
          t.textContent = "♡";
        }
        t.addEventListener("click", () => { index = i; render(); });
        thumbRow.appendChild(t);
      });
    }

    function addFiles(fileList) {
      const files = Array.from(fileList || []).filter((f) => f.type.startsWith("image/"));
      if (!files.length) return;
      let remaining = files.length;
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (photos.length === 1 && !photos[0].src) {
            photos[0] = { src: reader.result, caption: CONFIG.defaultCaption };
          } else {
            photos.push({ src: reader.result, caption: "" });
          }
          index = photos.length - 1;
          remaining--;
          if (remaining === 0) { persistExtra(); render(); }
        };
        reader.readAsDataURL(file);
      });
    }

    prevBtn.addEventListener("click", () => { if (index > 0) { index--; render(); } });
    nextBtn.addEventListener("click", () => { if (index < photos.length - 1) { index++; render(); } });

    photoInput.addEventListener("change", (e) => {
      addFiles(e.target.files);
      e.target.value = "";
    });

    // clean drag & drop on the dropzone card
    ["dragenter", "dragover"].forEach((evt) => {
      dropzone.addEventListener(evt, (e) => {
        e.preventDefault();
        dropzone.classList.add("dragover");
      });
    });
    ["dragleave", "dragend"].forEach((evt) => {
      dropzone.addEventListener(evt, () => dropzone.classList.remove("dragover"));
    });
    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      addFiles(e.dataTransfer.files);
    });

    $("captionSave").addEventListener("click", () => {
      if (!photos[index]) return;
      photos[index].caption = captionInput.value.trim();
      persistExtra();
      render();
    });

    render();
  }

  /* ---------- bouquet / reasons ---------- */

  const REASONS_KEY = "gfday_extra_reasons_v1";

  function loadExtraReasons() {
    try {
      const raw = localStorage.getItem(REASONS_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return [];
  }

  function saveExtraReasons(list) {
    try { localStorage.setItem(REASONS_KEY, JSON.stringify(list)); } catch (e) { /* ignore */ }
  }

  const ICONS = ["🌸", "🌷", "🌼", "💠", "🌺", "🌻", "🌹", "🪻", "💗", "🧸"];

  function initBouquet() {
    const grid = $("bouquetGrid");
    let extra = loadExtraReasons();

    function render() {
      grid.innerHTML = "";
      const all = [...CONFIG.reasons, ...extra];
      all.forEach((r) => {
        const card = document.createElement("div");
        card.className = "bloom-card";
        const icon = document.createElement("div");
        icon.className = "bloom-icon";
        icon.textContent = r.icon;
        const text = document.createElement("div");
        text.className = "bloom-text";
        text.textContent = r.text;
        card.appendChild(icon);
        card.appendChild(text);
        grid.appendChild(card);
      });
    }

    $("reasonSave").addEventListener("click", () => {
      const input = $("reasonInput");
      const val = input.value.trim();
      if (!val) return;
      const icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      extra.push({ icon, text: val });
      saveExtraReasons(extra);
      input.value = "";
      render();
    });

    render();
  }

  /* ---------- boot ---------- */

  document.addEventListener("DOMContentLoaded", () => {
    applyText();
    initFloaties();
    initGate();
    initReveal();
    initSong();
    initPreviewRow();
    initDetails();
    initGallery();
    initBouquet();
  });
})();
