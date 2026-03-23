const messageParagraphs = [
  "Happy anniversary, my love. Thank you for making life feel calmer, brighter, and so much sweeter just by being in it.",
  "I love how the smallest moments with you somehow become the ones I never want to forget, whether it is a quiet drive, a soft little laugh, or a day that felt ordinary until we shared it.",
  "This site is only a tiny love letter compared to everything I feel for you, but I wanted it to feel gentle, thoughtful, and completely made with you in mind.",
  "I hope we keep finding new reasons to celebrate us, keep collecting small favorite memories, and keep making life feel this warm together."
];

const reasons = [
  "your laugh",
  "our tiny adventures",
  "the way you make everything softer",
  "cozy drives with you",
  "every future plan we dream up",
  "how easy it feels to be myself around you"
];

const memories = [
  {
    eyebrow: "Golden Hour Walk",
    title: "The kind of evening where even the air feels softer.",
    copy: "The light turns pastel, everything slows down, and somehow just walking next to you feels like enough to make the whole day better.",
    detail: "Quiet steps, warm light, and one more reason to stay out a little longer.",
    align: "left",
    art: createBackdropSvg({
      top: "#def2ff",
      bottom: "#fff2e6",
      hill: "#cfe8ff",
      glow: "#ffd8bc",
      detail: "#ffffff",
      accent: "#8bc2ff"
    }),
    depth: createDepthSvg({
      accent: "#8bc2ff",
      detail: "#ffe7cf",
      sticker: "#ffffff",
      stroke: "#6fa8e6",
      label: "Walk"
    }),
    washTop: "rgba(223, 243, 255, 0.94)",
    washBottom: "rgba(255, 244, 234, 0.84)"
  },
  {
    eyebrow: "Blue Hour Drive",
    title: "Windows down, music on, nowhere urgent to be.",
    copy: "Those little drives where the sky turns blue and everything feels suspended for a while are some of my favorite versions of us.",
    detail: "Just enough light left, one playlist, and your hand finding mine at the stoplights.",
    align: "right",
    art: createBackdropSvg({
      top: "#d6ebff",
      bottom: "#eef7ff",
      hill: "#bddcff",
      glow: "#ffd7c2",
      detail: "#ffffff",
      accent: "#7fb6ff"
    }),
    depth: createDepthSvg({
      accent: "#7fb6ff",
      detail: "#ffe8d9",
      sticker: "#ffffff",
      stroke: "#679ee0",
      label: "Drive"
    }),
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)"
  },
  {
    eyebrow: "Sweet Little Detours",
    title: "The tiny plans always end up feeling the most special.",
    copy: "A quick dessert stop, a lazy store run, a random walk that turns into a memory. I love how easy it is for us to turn simple things into favorites.",
    detail: "Little plans somehow become the ones I replay the most.",
    align: "left",
    art: createBackdropSvg({
      top: "#dff3ff",
      bottom: "#fff4ea",
      hill: "#c5e4ff",
      glow: "#ffd9c4",
      detail: "#ffffff",
      accent: "#8fc8eb"
    }),
    depth: createDepthSvg({
      accent: "#82c6e5",
      detail: "#ffe9d8",
      sticker: "#ffffff",
      stroke: "#67abc8",
      label: "Treat"
    }),
    washTop: "rgba(223, 243, 255, 0.95)",
    washBottom: "rgba(255, 244, 235, 0.83)"
  },
  {
    eyebrow: "Rainy Day Hiding",
    title: "The quiet kind of day that only feels good with the right person.",
    copy: "When everything outside turns gray, being close to you somehow makes the whole day feel warmer, slower, and exactly where I want to be.",
    detail: "Blankets, low light, and no reason to be anywhere else.",
    align: "right",
    art: createBackdropSvg({
      top: "#d2e7ff",
      bottom: "#f4fbff",
      hill: "#bddbff",
      glow: "#ffe0cb",
      detail: "#f7fbff",
      accent: "#7db5ff"
    }),
    depth: createDepthSvg({
      accent: "#7db5ff",
      detail: "#fbe7d4",
      sticker: "#ffffff",
      stroke: "#689fe1",
      label: "Rain"
    }),
    washTop: "rgba(210, 231, 255, 0.95)",
    washBottom: "rgba(244, 251, 255, 0.84)"
  },
  {
    eyebrow: "Slow Sunday",
    title: "The kind of peace I only really feel with you.",
    copy: "No big plans, no rush, just that easy feeling of being together while the day unfolds in its own soft little way.",
    detail: "The best reset is usually just time with you.",
    align: "left",
    art: createBackdropSvg({
      top: "#dcf0ff",
      bottom: "#fff1e9",
      hill: "#cde8ff",
      glow: "#ffd8c4",
      detail: "#ffffff",
      accent: "#8ac2ff"
    }),
    depth: createDepthSvg({
      accent: "#8ac2ff",
      detail: "#ffe6d2",
      sticker: "#ffffff",
      stroke: "#72ace8",
      label: "Sunday"
    }),
    washTop: "rgba(220, 240, 255, 0.94)",
    washBottom: "rgba(255, 241, 233, 0.84)"
  }
];

const playlist = [
  {
    title: "Love... at first sight",
    artist: "Regina Song",
    src: "./assets/music/love... at first sight.mp3",
    cover: createCoverSvg({
      top: "#87c2ff",
      bottom: "#d7ecff",
      accent: "#fff5ef",
      line: "#5a96dd",
      label: "BW"
    })
  },
  {
    title: "Track 02",
    artist: "Add artist name",
    src: "./assets/music/song-02.mp3",
    cover: createCoverSvg({
      top: "#91d2ff",
      bottom: "#fff1e8",
      accent: "#ffffff",
      line: "#74b1ed",
      label: "CD"
    })
  },
  {
    title: "Track 03",
    artist: "Add artist name",
    src: "./assets/music/song-03.mp3",
    cover: createCoverSvg({
      top: "#7eb9ff",
      bottom: "#d2ecff",
      accent: "#ffe6d4",
      line: "#5e99de",
      label: "SK"
    })
  }
];

const heroStage = document.querySelector("#hero");
const heroHint = document.querySelector("#hero-hint");
const petalCanvas = document.querySelector("#petal-canvas");
const startJourneyButton = document.querySelector("#start-journey");
const galleryIntro = document.querySelector("#gallery-intro");
const messageStage = document.querySelector("#message-stage");
const openLetterJourneyButton = document.querySelector("#open-letter-journey");
const memoryStack = document.querySelector("#memory-stack");
const messageContent = document.querySelector("#message-content");
const messageReasons = document.querySelector("#message-reasons");
const letterCard = document.querySelector("#letter-card");
const letterToggle = document.querySelector("#letter-toggle");
const navButtons = Array.from(document.querySelectorAll("[data-scroll-target]"));

const musicTitle = document.querySelector("#music-title");
const musicArtist = document.querySelector("#music-artist");
const musicCover = document.querySelector("#music-cover");
const musicStatus = document.querySelector("#music-status");
const playPauseButton = document.querySelector("#play-pause");
const prevTrackButton = document.querySelector("#prev-track");
const nextTrackButton = document.querySelector("#next-track");
const volumeSlider = document.querySelector("#volume-slider");
const musicWidget = document.querySelector(".music-widget");

const audio = new Audio();
audio.preload = "metadata";
let currentTrackIndex = 0;
let autoplayPrimed = false;
let lastUserVolume = Number(volumeSlider.value) / 100;
let hasStartedJourney = false;

renderMessage();
renderReasons();
renderMemories();
setupMemoryReveal();
setupLetter();
setupJourney();
setupSectionNav();
setupMusicPlayer();
initAmbientEffects();
initDogScene();

function renderMessage() {
  messageContent.innerHTML = "";
  messageParagraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    messageContent.appendChild(p);
  });
}

function renderReasons() {
  const placements = [
    { top: "13%", left: "8%", rotate: "-8deg" },
    { top: "20%", right: "10%", rotate: "7deg" },
    { top: "42%", left: "6%", rotate: "-5deg" },
    { top: "54%", right: "8%", rotate: "9deg" },
    { top: "74%", left: "14%", rotate: "-7deg" },
    { top: "80%", right: "14%", rotate: "6deg" }
  ];

  messageReasons.innerHTML = "";
  reasons.forEach((reason, index) => {
    const token = document.createElement("span");
    token.className = "love-orb";
    token.textContent = reason;
    token.style.top = placements[index].top;
    token.style.setProperty("--orb-rotate", placements[index].rotate);

    if (placements[index].left) {
      token.style.left = placements[index].left;
    }

    if (placements[index].right) {
      token.style.right = placements[index].right;
    }

    messageReasons.appendChild(token);
  });
}

function renderMemories() {
  memoryStack.innerHTML = "";

  memories.forEach((memory, index) => {
    const scene = document.createElement("section");
    scene.className = `memory-scene memory-scene--${memory.align}`;
    scene.id = `memory-${index + 1}`;

    scene.innerHTML = `
      <div class="memory-media">
        <article class="spatial-card">
          <div
            class="spatial-card__inner"
            style="
              --art-image: url('${memory.art}');
              --depth-image: url('${memory.depth}');
              --wash-top: ${memory.washTop};
              --wash-bottom: ${memory.washBottom};
            "
          >
            <div class="spatial-card__wash"></div>
            <div class="spatial-card__art"></div>
            <div class="spatial-card__depth"></div>
            <div class="spatial-card__shine"></div>
            <div class="spatial-card__caption">
              <h4>${memory.eyebrow}</h4>
              <p>${memory.detail}</p>
            </div>
          </div>
        </article>
      </div>
      <div class="memory-copy">
        <p class="memory-copy__eyebrow">${memory.eyebrow}</p>
        <h3>${memory.title}</h3>
        <p>${memory.copy}</p>
        <span class="memory-copy__detail">${memory.detail}</span>
      </div>
    `;

    setupSpatialCard(scene.querySelector(".spatial-card"));
    memoryStack.appendChild(scene);
  });
}

function setupMemoryReveal() {
  const scenes = Array.from(document.querySelectorAll(".memory-scene"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  scenes.forEach((scene) => observer.observe(scene));
}

function setupSpatialCard(card) {
  const updateCard = (event) => {
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const rotateY = (x - 0.5) * 18;
    const rotateX = (0.5 - y) * 14;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
    card.style.setProperty("--glare-x", `${x * 100}%`);
    card.style.setProperty("--glare-y", `${y * 100}%`);
    card.style.setProperty("--lift", "-6px");
  };

  card.addEventListener("pointerenter", () => {
    card.classList.add("is-hovered");
  });

  card.addEventListener("pointermove", updateCard);

  card.addEventListener("pointerleave", () => {
    card.classList.remove("is-hovered");
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--glare-x", "50%");
    card.style.setProperty("--glare-y", "50%");
    card.style.setProperty("--lift", "0px");
  });
}

function setupLetter() {
  letterToggle.addEventListener("click", () => {
    setLetterState(!letterCard.classList.contains("is-open"));
  });
}

function setLetterState(isOpen) {
  letterCard.classList.toggle("is-open", isOpen);
  letterToggle.setAttribute("aria-expanded", String(isOpen));
  letterToggle.textContent = isOpen ? "Fold the note" : "Open the note";
}

function setupJourney() {
  const beginJourney = () => {
    if (hasStartedJourney) {
      return;
    }

    hasStartedJourney = true;
    heroStage.classList.add("is-transitioning");
    heroHint.textContent = "Drifting down into the gallery...";

    window.setTimeout(() => {
      galleryIntro.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  startJourneyButton.addEventListener("click", beginJourney);

  heroStage.addEventListener("mouseup", (event) => {
    if (event.button !== 0) {
      return;
    }

    if (event.target.closest(".start-journey")) {
      return;
    }

    beginJourney();
  });

  openLetterJourneyButton.addEventListener("click", () => {
    messageStage.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setLetterState(true), 650);
  });
}

function setupSectionNav() {
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.scrollTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const sections = Array.from(document.querySelectorAll("[data-journey-section]"));
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) {
        return;
      }

      const activeId = visibleEntry.target.id;
      navButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.scrollTarget === activeId);
      });
    },
    {
      threshold: [0.35, 0.6, 0.8]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function initAmbientEffects() {
  if (!petalCanvas) {
    return;
  }

  const ctx = petalCanvas.getContext("2d");
  if (!ctx) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rootStyle = document.documentElement.style;
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    active: false
  };
  const parallax = { x: 0, y: 0 };
  const targetParallax = { x: 0, y: 0 };
  const petals = [];
  const petalCount = reduceMotion ? 24 : 68;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let latestScroll = window.scrollY;
  let frameId = 0;
  let lastTime = performance.now();

  function createPetal(fromTop = false) {
    return {
      x: Math.random() * (width + 80) - 40,
      y: fromTop ? -20 - Math.random() * height * 0.35 : Math.random() * height,
      size: 4.5 + Math.random() * 6.2,
      fallSpeed: 18 + Math.random() * 26,
      drift: -10 + Math.random() * 20,
      swing: 8 + Math.random() * 12,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 1 + Math.random() * 1.45,
      rotation: Math.random() * Math.PI,
      rotationSpeed: -1.1 + Math.random() * 2.2,
      opacity: 0.2 + Math.random() * 0.2
    };
  }

  function resetPetal(petal, fromTop = true) {
    petal.x = Math.random() * (width + 80) - 40;
    petal.y = fromTop ? -20 - Math.random() * height * 0.3 : Math.random() * height;
    petal.size = 4.5 + Math.random() * 6.2;
    petal.fallSpeed = 18 + Math.random() * 26;
    petal.drift = -10 + Math.random() * 20;
    petal.swing = 8 + Math.random() * 12;
    petal.sway = Math.random() * Math.PI * 2;
    petal.swaySpeed = 1 + Math.random() * 1.45;
    petal.rotation = Math.random() * Math.PI;
    petal.rotationSpeed = -1.1 + Math.random() * 2.2;
    petal.opacity = 0.2 + Math.random() * 0.2;
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.25);

    petalCanvas.width = Math.floor(width * dpr);
    petalCanvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!petals.length) {
      for (let index = 0; index < petalCount; index += 1) {
        petals.push(createPetal(false));
      }
      return;
    }

    petals.forEach((petal) => {
      if (petal.x > width + 40 || petal.y > height + 40) {
        resetPetal(petal, false);
      }
    });
  }

  function drawPetal(petal) {
    ctx.save();
    ctx.translate(petal.x, petal.y);
    ctx.rotate(petal.rotation);
    ctx.scale(1, 0.78);
    ctx.globalAlpha = petal.opacity;

    ctx.fillStyle = "#f5bfd0";
    ctx.beginPath();
    ctx.moveTo(0, -petal.size);
    ctx.bezierCurveTo(
      petal.size * 0.76,
      -petal.size * 0.42,
      petal.size * 0.88,
      petal.size * 0.44,
      0,
      petal.size
    );
    ctx.bezierCurveTo(
      -petal.size * 0.88,
      petal.size * 0.44,
      -petal.size * 0.76,
      -petal.size * 0.42,
      0,
      -petal.size
    );
    ctx.fill();

    ctx.globalAlpha = petal.opacity * 0.45;
    ctx.fillStyle = "#fff5f8";
    ctx.beginPath();
    ctx.ellipse(
      -petal.size * 0.12,
      -petal.size * 0.08,
      petal.size * 0.34,
      petal.size * 0.18,
      -0.4,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.restore();
  }

  function updatePetals(deltaSeconds) {
    ctx.clearRect(0, 0, width, height);

    petals.forEach((petal) => {
      petal.sway += petal.swaySpeed * deltaSeconds;
      petal.x += (petal.drift + Math.sin(petal.sway) * petal.swing) * deltaSeconds;
      petal.y += petal.fallSpeed * deltaSeconds;
      petal.rotation += petal.rotationSpeed * deltaSeconds;

      if (pointer.active) {
        const dx = petal.x - pointer.x;
        const dy = petal.y - pointer.y;
        const distanceSquared = dx * dx + dy * dy;
        const interactionRadius = 26000;

        if (distanceSquared < interactionRadius) {
          const distance = Math.sqrt(distanceSquared) || 1;
          const force = (1 - distanceSquared / interactionRadius) * 112;
          petal.x += (dx / distance) * force * deltaSeconds;
          petal.y += (dy / distance) * force * deltaSeconds * 0.92;
          petal.rotation += force * 0.022 * deltaSeconds;
        }
      }

      if (petal.y > height + 30 || petal.x < -80 || petal.x > width + 80) {
        resetPetal(petal, true);
      }

      drawPetal(petal);
    });
  }

  function animate(now) {
    frameId = 0;

    if (document.hidden) {
      return;
    }

    const deltaSeconds = Math.min((now - lastTime) / 1000, 0.033);
    lastTime = now;

    parallax.x += (targetParallax.x - parallax.x) * (reduceMotion ? 0.08 : 0.06);
    parallax.y += (targetParallax.y - parallax.y) * (reduceMotion ? 0.08 : 0.06);

    const maxScroll = Math.max(document.documentElement.scrollHeight - height, 1);
    const scrollProgress = latestScroll / maxScroll;
    const scrollShift = scrollProgress * 720;
    const backgroundDrift = scrollProgress * 160;
    rootStyle.setProperty("--parallax-x", `${parallax.x.toFixed(2)}px`);
    rootStyle.setProperty("--parallax-y", `${parallax.y.toFixed(2)}px`);
    rootStyle.setProperty("--scroll-shift", `${scrollShift.toFixed(2)}px`);
    rootStyle.setProperty("--background-drift", `${backgroundDrift.toFixed(2)}px`);

    updatePetals(deltaSeconds);
    frameId = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener(
    "scroll",
    () => {
      latestScroll = window.scrollY;
    },
    { passive: true }
  );
  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      targetParallax.x = ((event.clientX / Math.max(width, 1)) - 0.5) * 64;
      targetParallax.y = ((event.clientY / Math.max(height, 1)) - 0.5) * 50;
    },
    { passive: true }
  );
  window.addEventListener("pointerleave", () => {
    pointer.active = false;
    targetParallax.x = 0;
    targetParallax.y = 0;
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !frameId) {
      lastTime = performance.now();
      frameId = requestAnimationFrame(animate);
    }
  });

  resizeCanvas();
  frameId = requestAnimationFrame(animate);
}

function setupMusicPlayer() {
  audio.volume = lastUserVolume;
  audio.loop = false;
  updateTrackUI(playlist[currentTrackIndex]);
  loadTrack(currentTrackIndex);

  playPauseButton.addEventListener("click", async () => {
    if (audio.paused) {
      autoplayPrimed = true;
      await playCurrentTrack();
    } else {
      audio.pause();
    }
  });

  prevTrackButton.addEventListener("click", async () => {
    await changeTrack(-1, true);
  });

  nextTrackButton.addEventListener("click", async () => {
    await changeTrack(1, true);
  });

  volumeSlider.addEventListener("input", () => {
    lastUserVolume = Number(volumeSlider.value) / 100;
    audio.volume = lastUserVolume;
    musicStatus.textContent = lastUserVolume === 0 ? "Muted for a moment." : "Volume adjusted.";
  });

  audio.addEventListener("play", () => {
    musicWidget.classList.add("is-playing");
    playPauseButton.setAttribute("aria-label", "Pause music");
    musicStatus.textContent = "Playing softly in the background.";
  });

  audio.addEventListener("pause", () => {
    musicWidget.classList.remove("is-playing");
    playPauseButton.setAttribute("aria-label", "Play music");
    if (autoplayPrimed) {
      musicStatus.textContent = "Paused. Tap play whenever you want the playlist back.";
    }
  });

  audio.addEventListener("ended", async () => {
    await changeTrack(1, true);
  });

  audio.addEventListener("loadeddata", () => {
    if (!autoplayPrimed) {
      musicStatus.textContent = "Ready to play from your local MP3 files.";
    }
  });

  audio.addEventListener("error", () => {
    musicStatus.textContent = "Add your MP3 files to assets/music and keep the filenames listed in main.js.";
  });
}

async function changeTrack(direction, shouldPlay) {
  currentTrackIndex = (currentTrackIndex + direction + playlist.length) % playlist.length;
  await loadTrack(currentTrackIndex);
  if (shouldPlay) {
    autoplayPrimed = true;
    await playCurrentTrack();
  }
}

async function loadTrack(index) {
  const track = playlist[index];
  updateTrackUI(track);
  audio.src = track.src;
  audio.load();
}

async function playCurrentTrack() {
  try {
    await audio.play();
  } catch (error) {
    musicStatus.textContent = "Tap play after you add your MP3 files to assets/music.";
  }
}

function updateTrackUI(track) {
  musicTitle.textContent = track.title;
  musicArtist.textContent = track.artist;
  musicCover.style.backgroundImage = `url('${track.cover}')`;
  musicStatus.textContent = autoplayPrimed
    ? "Queued and ready."
    : "Drop your MP3s into assets/music, then tap play.";
}

async function initDogScene() {
  const canvas = document.querySelector("#dog-scene");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  try {
    const THREE = await import("https://unpkg.com/three@0.164.1/build/three.module.js");
    const { GLTFLoader } = await import("https://unpkg.com/three@0.164.1/examples/jsm/loaders/GLTFLoader.js");

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 1.4, 8.4);

    const ambient = new THREE.HemisphereLight(0xf9fdff, 0xc8dff3, 2.8);
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(4, 7, 5);

    const fill = new THREE.DirectionalLight(0xb9dcff, 1.4);
    fill.position.set(-5, 3, 4);

    const rim = new THREE.DirectionalLight(0xffeee4, 0.8);
    rim.position.set(1, 2, -4);

    scene.add(ambient, key, fill, rim);

    const floorGlow = new THREE.Mesh(
      new THREE.CircleGeometry(3.8, 48),
      new THREE.MeshBasicMaterial({
        color: 0xb8d7ff,
        transparent: true,
        opacity: 0.2
      })
    );
    floorGlow.rotation.x = -Math.PI / 2;
    floorGlow.position.y = -1.38;
    scene.add(floorGlow);

    const floorCore = new THREE.Mesh(
      new THREE.CircleGeometry(2.5, 40),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.42
      })
    );
    floorCore.rotation.x = -Math.PI / 2;
    floorCore.position.y = -1.35;
    scene.add(floorCore);

    const dogRoot = new THREE.Group();
    scene.add(dogRoot);

    const sparklePalette = [0xd8edff, 0xffe8d8, 0xffffff, 0xc8e7ff];
    const sparkles = [];

    for (let i = 0; i < 14; i += 1) {
      const sparkle = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.07 + (i % 3) * 0.02, 0),
        new THREE.MeshStandardMaterial({
          color: sparklePalette[i % sparklePalette.length],
          roughness: 0.85,
          flatShading: true
        })
      );

      sparkle.userData = {
        angle: (Math.PI * 2 * i) / 14,
        radius: 2.4 + (i % 4) * 0.22,
        height: -0.05 + (i % 5) * 0.32,
        speed: 0.38 + (i % 4) * 0.08
      };

      sparkles.push(sparkle);
      scene.add(sparkle);
    }

    const pointer = { x: 0, y: 0 };
    const smoothPointer = { x: 0, y: 0 };

    heroStage.addEventListener("pointermove", (event) => {
      const bounds = heroStage.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    });

    heroStage.addEventListener("pointerleave", () => {
      pointer.x = 0;
      pointer.y = 0;
    });

    const loader = new GLTFLoader();
    loader.load(
      "./assets/golden-retriever.glb",
      (gltf) => {
        const dog = gltf.scene;
        dog.traverse((child) => {
          if (child.isMesh) {
            child.frustumCulled = false;
          }
        });

        const initialBox = new THREE.Box3().setFromObject(dog);
        const center = initialBox.getCenter(new THREE.Vector3());
        const size = initialBox.getSize(new THREE.Vector3());
        dog.position.sub(center);

        const scale = 4.4 / Math.max(size.x, size.y, size.z);
        dog.scale.setScalar(scale);

        const adjustedBox = new THREE.Box3().setFromObject(dog);
        dog.position.y += -1.15 - adjustedBox.min.y;
        dog.position.x += 0.15;
        dog.rotation.y = 0.65;

        dogRoot.add(dog);
      },
      undefined,
      () => {
        showSceneFallback();
      }
    );

    const resizeScene = () => {
      const width = heroStage.clientWidth;
      const height = heroStage.clientHeight;
      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resizeScene);
    resizeObserver.observe(heroStage);
    resizeScene();

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const lerpAmount = reduceMotion ? 0.2 : 0.08;

      smoothPointer.x += (pointer.x - smoothPointer.x) * lerpAmount;
      smoothPointer.y += (pointer.y - smoothPointer.y) * lerpAmount;

      const transitionAmount = heroStage.classList.contains("is-transitioning") ? 1 : 0;
      const targetRotationY = 0.65 + smoothPointer.x * 0.32 + transitionAmount * 0.28;
      const targetRotationX = smoothPointer.y * 0.05 - transitionAmount * 0.03;

      dogRoot.rotation.y += (targetRotationY - dogRoot.rotation.y) * 0.06;
      dogRoot.rotation.x += (targetRotationX - dogRoot.rotation.x) * 0.06;
      dogRoot.position.x += (smoothPointer.x * 0.18 - dogRoot.position.x) * 0.04;
      dogRoot.position.y = Math.sin(elapsed * 1.45) * 0.07;

      camera.position.z += ((transitionAmount ? 7.6 : 8.4) - camera.position.z) * 0.03;
      floorGlow.scale.setScalar(1 + Math.sin(elapsed * 1.4) * 0.015);

      sparkles.forEach((sparkle) => {
        const { angle, radius, height, speed } = sparkle.userData;
        const orbit = angle + elapsed * speed;
        sparkle.position.set(
          Math.cos(orbit) * radius,
          height + Math.sin(elapsed * speed * 2 + angle) * 0.18,
          Math.sin(orbit) * radius * 0.52
        );
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();
  } catch (error) {
    showSceneFallback();
  }

  function showSceneFallback() {
    if (heroStage.querySelector(".scene-fallback")) {
      return;
    }

    const fallback = document.createElement("div");
    fallback.className = "scene-fallback";
    fallback.textContent = "The public golden retriever model could not load here, but the rest of the anniversary story is ready.";
    heroStage.appendChild(fallback);
  }
}

function createBackdropSvg(colors) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${colors.top}" />
          <stop offset="100%" stop-color="${colors.bottom}" />
        </linearGradient>
      </defs>
      <rect width="800" height="1000" rx="64" fill="url(#sky)" />
      <circle cx="590" cy="200" r="124" fill="${colors.glow}" opacity="0.62" />
      <ellipse cx="250" cy="210" rx="120" ry="40" fill="${colors.detail}" opacity="0.7" />
      <ellipse cx="422" cy="174" rx="95" ry="30" fill="${colors.detail}" opacity="0.58" />
      <path d="M0 680C132 628 266 664 380 620C492 576 617 620 800 560V1000H0Z" fill="${colors.hill}" />
      <path d="M0 744C182 670 338 736 516 688C636 656 710 690 800 666V1000H0Z" fill="${colors.accent}" opacity="0.3" />
      <g fill="${colors.detail}" opacity="0.7">
        <circle cx="148" cy="586" r="14" />
        <circle cx="690" cy="630" r="10" />
        <circle cx="226" cy="636" r="11" />
      </g>
    </svg>
  `;

  return svgToDataUri(svg);
}

function createDepthSvg({ accent, detail, sticker, stroke, label }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
      <g transform="translate(108 116)">
        <rect x="0" y="0" width="584" height="430" rx="48" fill="${sticker}" opacity="0.82" />
        <rect x="46" y="52" width="492" height="320" rx="28" fill="${detail}" />
        <circle cx="136" cy="144" r="62" fill="${accent}" opacity="0.3" />
        <path d="M178 278c38-70 156-102 232-48 77 55 62 152-24 191-78 35-187-6-223-81-16-35-12-51 15-62Z" fill="${accent}" opacity="0.72" />
        <path d="M225 248c18-28 50-43 84-43 62 0 112 50 112 112 0 22-7 43-20 61-40 9-83 7-127-5-54-15-86-71-49-125Z" fill="${detail}" opacity="0.95" />
        <circle cx="314" cy="246" r="22" fill="${sticker}" opacity="0.88" />
        <path d="M118 88c32-22 71-32 118-32 58 0 118 19 168 58" fill="none" stroke="${stroke}" stroke-width="14" stroke-linecap="round" opacity="0.55" />
        <path d="M470 306c24-17 53-48 62-88" fill="none" stroke="${stroke}" stroke-width="12" stroke-linecap="round" opacity="0.62" />
      </g>
      <g transform="translate(186 624)">
        <rect x="0" y="0" width="428" height="112" rx="56" fill="${sticker}" opacity="0.86" />
        <text x="214" y="68" text-anchor="middle" font-family="Arial, sans-serif" font-size="42" fill="${stroke}" letter-spacing="6">${label}</text>
      </g>
    </svg>
  `;

  return svgToDataUri(svg);
}

function createCoverSvg({ top, bottom, accent, line, label }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="cover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${top}" />
          <stop offset="100%" stop-color="${bottom}" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="90" fill="url(#cover)" />
      <circle cx="290" cy="110" r="66" fill="${accent}" opacity="0.85" />
      <circle cx="148" cy="194" r="96" fill="${accent}" opacity="0.38" />
      <path d="M88 252c62-58 145-76 214-42" fill="none" stroke="${line}" stroke-width="22" stroke-linecap="round" opacity="0.8" />
      <path d="M94 308c62-54 146-69 214-36" fill="none" stroke="${line}" stroke-width="18" stroke-linecap="round" opacity="0.5" />
      <text x="200" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="86" font-weight="700" fill="${line}">${label}</text>
    </svg>
  `;

  return svgToDataUri(svg);
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;
}
