const messageParagraphs = [
  "To the amazing girl who has officially put up with me for a year now, Happy One-Year Anniversary! From the day I met you to now, so much has changed! Over the course of our year together, I’ve seen so many different sides of you: headstrong yet accommodating, vulnerable yet confident, energetic yet peaceful, and diligent yet lazy. And each one of these, I love dearly, even those you might think of as negative, because everything you do is so irresistibly adorable.",
  "Whether you're plopped on the couch ready for a massage, tucked in the bed watching a tv show or sat in your chair, tirelessly studying for an exam, its impossible to find a moment I don't find you endearing and admirable. Though, I do sometimes wish you'd be less harsh on yourself. Sometimes you seem to forget what an amazingly talented and smart girl you are, so I just wanted to remind you, 多有点自信！You're the most beautiful, talented, and intelligent lady I know, so don't count yourself short!",
  "If you heard that out loud, I'm sure you'd probably say something like, “bruh, shut-up,” but that's okay, I love that part of you too. In fact, I love the little dance you do when you eat something tasty, I love the way you bat your eyelashes at me when you want to do something, I love how you scoot into my arms when we cuddle at night, I love the little butt wiggle you do when I’m lying on your back, and there's so many things I love about you that I'm sure my computer would struggle to show them all. To tell you the truth, if it's something you do, I’m sure I would find it lovable and cute. You say I’m easy, but maybe you should just consider that you’re way too charming. It's all your fault, really.",
  "If I’m guessing correctly, that was probably another one of those “bruh, shut-up” moments, but again, that’s okay. More than anything, I just hope you always remember that you can feel safe to be your unfiltered self, because nothing could change my love and admiration for you.",
  "When we’re together, it sometimes feels like we’re already an old married couple–bickering about dinner, doing our work side-by-side, and filling out your apartment together. And like any old married couple, we have our disagreements, our ups, and our downs. But even then, there’s no one I’d rather stand beside through it all than you. So please stay me just a bit longer, and I'll cherish every moment I have with you. I love you the most,",
];

const memories = [
  {
    eyebrow: "",
    title: "Our First Night Together",
    copy: "The only shuttle ride I enjoyed",
    detail: "",
    align: "right",
    photo: "./assets/gallery/IMG_0283.JPG",
    washTop: "rgba(223, 243, 255, 0.94)",
    washBottom: "rgba(255, 244, 234, 0.84)",
    lineTilt: "-2.2deg",
    cardTilt: "-2.8deg",
    swayRange: "1.3deg",
    swayDuration: "7.6s",
    swayDelay: "-1.4s"
  },
  {
    eyebrow: "",
    title: "Your First Bouquet Of Flowers",
    copy: "A shoddy bouquet I prepared with an assortment of flowers I bought from walmart, publix, and H-mart",
    detail: "",
    align: "left",
    photo: "./assets/gallery/IMG_0243.JPG",
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)",
    lineTilt: "0.75deg",
    cardTilt: "2.1deg",
    swayRange: "1.45deg",
    swayDuration: "8.3s",
    swayDelay: "-2.2s"
  },
  {
    eyebrow: "",
    title: "JRC Stone Hall At The End Of The Hallway",
    copy: "Perhaps my first time using a skincare face mask",
    detail: "",
    align: "right",
    photo: "./assets/gallery/IMG_0304.JPG",
    washTop: "rgba(223, 243, 255, 0.94)",
    washBottom: "rgba(255, 244, 234, 0.84)",
    lineTilt: "-1.8deg",
    cardTilt: "-1.9deg",
    swayRange: "1.3deg",
    swayDuration: "7.6s",
    swayDelay: "-1.4s"
  },
  {
    eyebrow: "",
    title: "Memories At Oxford",
    copy: "I'm not sure if you could tell, but I love hugs with you the most",
    detail: "",
    align: "left",
    photo: "./assets/gallery/IMG_0330.JPG",
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)",
    lineTilt: "1.05deg",
    cardTilt: "1.2deg",
    swayRange: "1.45deg",
    swayDuration: "8.3s",
    swayDelay: "-2.2s"
  },
  {
    eyebrow: "",
    title: "Our First Month Anniversary Dinner",
    copy: "Haven't my photography skills gotten so much better? This was the only picture where the table didn't take up half the picture...",
    detail: "",
    align: "right",
    photo: "./assets/gallery/IMG_3444.JPG",
    washTop: "rgba(223, 243, 255, 0.94)",
    washBottom: "rgba(255, 244, 234, 0.84)",
    lineTilt: "-2.3deg",
    cardTilt: "-1.9deg",
    swayRange: "1.3deg",
    swayDuration: "7.6s",
    swayDelay: "-1.4s"
  },
  {
    eyebrow: "",
    title: "A Relaxing Position For Amelia",
    copy: "I hope my wrist heals quickly so you can get back to hanging on my arm ASAP",
    detail: "",
    align: "left",
    photo: "./assets/gallery/IMG_3448.JPG",
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)",
    lineTilt: "1.05deg",
    cardTilt: "1.2deg",
    swayRange: "1.45deg",
    swayDuration: "8.3s",
    swayDelay: "-2.2s"
  },
  {
    eyebrow: "",
    title: "Stocking Up At IKEA",
    copy: "The beginning to the hundreds of memories we would make in a little apartment on North Decatur Road",
    detail: "",
    align: "left",
    photo: "./assets/gallery/img-1718-photo.jpg",
    washTop: "rgba(223, 243, 255, 0.94)",
    washBottom: "rgba(255, 244, 234, 0.84)",
    lineTilt: "-0.6deg",
    cardTilt: "-1.8deg",
    swayRange: "1.3deg",
    swayDuration: "7.6s",
    swayDelay: "-1.4s"
  },
  {
    eyebrow: "",
    title: "Vacation with a sleepyhead",
    copy: "Your legs really are quite soft",
    detail: "",
    align: "right",
    photo: "./assets/gallery/img-3359-photo.jpg",
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)",
    lineTilt: "0.75deg",
    cardTilt: "2.1deg",
    swayRange: "1.45deg",
    swayDuration: "8.3s",
    swayDelay: "-2.2s"
  },
  {
    eyebrow: "",
    title: "Holding Hands On A Big Mountain",
    copy: "I don't want you to trip and hurt yourself so hold on and never let go",
    detail: "",
    align: "left",
    photo: "./assets/gallery/img-8972-photo.jpg",
    washTop: "rgba(220, 240, 255, 0.94)",
    washBottom: "rgba(255, 241, 233, 0.84)",
    lineTilt: "-0.55deg",
    cardTilt: "-1.7deg",
    swayRange: "1.1deg",
    swayDuration: "7.1s",
    swayDelay: "-0.7s"
  },
  {
    eyebrow: "",
    title: "The Luckiest Guy Ever",
    copy: "\"How did he pull you\" -Katherine Hu",
    detail: "",
    align: "right",
    photo: "./assets/gallery/IMG_9136.jpg",
    washTop: "rgba(231, 242, 255, 0.95)",
    washBottom: "rgba(255, 245, 236, 0.84)",
    lineTilt: "0.6deg",
    cardTilt: "1.8deg",
    swayRange: "1.35deg",
    swayDuration: "8.8s",
    swayDelay: "-3.1s"
  },
  {
    eyebrow: "",
    title: "Last Day At Oxford",
    copy: "Somehow, You made me love my first semester at Oxford.",
    detail: "",
    align: "left",
    photo: "./assets/gallery/img-9787-photo.jpg",
    washTop: "rgba(214, 235, 255, 0.95)",
    washBottom: "rgba(238, 247, 255, 0.82)",
    lineTilt: "1.05deg",
    cardTilt: "1.2deg",
    swayRange: "1.45deg",
    swayDuration: "8.3s",
    swayDelay: "-2.2s"
  },
];

const playlist = [
  
  {
    title: "Nothing",
    artist: "Bruno Mars",
    src: "./assets/music/Nothing.mp3",
    cover: "./assets/music/icons/track-04"
  },
  {
    title: "I Like Me Better",
    artist: "Lauv",
    src: "./assets/music/I Like Me Better.mp3",
    cover: "./assets/music/icons/track-05"
  },
  {
    title: "Hold me, never let go",
    artist: "Rocco",
    src: "./assets/music/hold me, never let go.mp3",
    cover: "./assets/music/icons/track-02"
  },
  {
    title: "Love... at first sight",
    artist: "Regina Song",
    src: "./assets/music/love... at first sight.mp3",
    cover: "./assets/music/icons/track-01"
  },
  {
    title: "Jupiter To Mars",
    artist: "Rocco",
    src: "./assets/music/Jupiter to Mars.mp3",
    cover: "./assets/music/icons/track-02"
  },
  {
    title: "Glue Song",
    artist: "beabadoobee",
    src: "./assets/music/Glue Song.mp3",
    cover: "./assets/music/icons/track-03"
  },
  
  
];

const modelCatalog = {
  pocky: {
    label: "Pocky",
    alt: "Pocky, a low poly golden retriever",
    candidates: [
      "./assets/low poly dog 3d model.glb",
      "./assets/golden-retriever.glb"
    ],
    cameraOrbit: "32deg 78deg auto",
    minCameraOrbit: "auto 58deg auto",
    maxCameraOrbit: "auto 102deg auto",
    fieldOfView: "24deg",
    exposure: "1.02",
    status: "Pocky is on screen. Drag to orbit."
  },
  yuki: {
    label: "Yuki",
    alt: "Yuki, a seal",
    candidates: [
      "./assets/yuki.glb",
      "./assets/Yuki.glb",
      "./assets/yuki seal.glb",
      "./assets/Yuki seal.glb",
      "./assets/yuki-seal.glb",
      "./assets/Yuki-seal.glb",
      "./assets/seal.glb"
    ],
    cameraOrbit: "18deg 76deg auto",
    minCameraOrbit: "auto 60deg auto",
    maxCameraOrbit: "auto 100deg auto",
    fieldOfView: "25deg",
    exposure: "1.04",
    status: "Yuki is on screen. Drag to orbit."
  }
};

const heroStage = document.querySelector("#hero");
const petalCanvas = document.querySelector("#petal-canvas");
const dogViewer = document.querySelector("#dog-viewer");
const heroStatus = document.querySelector("#hero-status");
const heroMenuButtons = Array.from(document.querySelectorAll("[data-hero-target]"));
const modelButtons = Array.from(document.querySelectorAll("[data-model-key]"));
const galleryIntro = document.querySelector("#gallery-intro");
const messageStage = document.querySelector("#message-stage");
const memoryStack = document.querySelector("#memory-stack");
const messageContent = document.querySelector("#message-content");
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
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const audio = new Audio();
audio.preload = "metadata";
audio.autoplay = true;
audio.playsInline = true;
const trackCoverExtensions = [".png", ".jpg", ".jpeg"];
let currentTrackIndex = 0;
let autoplayPrimed = false;
let lastUserVolume = Number(volumeSlider.value) / 100;
let activeCoverLoadId = 0;
let activeModelKey = "pocky";
let pendingModelCandidates = [];
let currentModelConfig = modelCatalog[activeModelKey];
let modelFallbackTimeout = 0;
let startupAutoplayResolved = false;
let startupAutoplayArmed = false;

syncVisualMode();
renderMessage();
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

function renderMemories() {
  memoryStack.innerHTML = "";

  memories.forEach((memory, index) => {
    const scene = document.createElement("section");
    scene.className = `memory-scene memory-scene--${memory.align}`;
    scene.id = `memory-${index + 1}`;
    scene.style.setProperty("--line-tilt", memory.lineTilt);

    scene.innerHTML = `
      <div class="memory-media">
        <div class="memory-line" aria-hidden="true"></div>
        <article
          class="spatial-card"
          style="
            --card-tilt: ${memory.cardTilt};
            --sway-range: ${memory.swayRange};
            --sway-duration: ${memory.swayDuration};
            --sway-delay: ${memory.swayDelay};
          "
        >
          <div class="spatial-card__motion">
            <div class="spatial-card__hang">
              <div class="spatial-card__assembly">
                <div class="spatial-card__pin" aria-hidden="true"></div>
                <div
                  class="spatial-card__inner"
                  style="
                    --wash-top: ${memory.washTop};
                    --wash-bottom: ${memory.washBottom};
                  "
                >
                  <div class="spatial-card__wash"></div>
                  <div class="spatial-card__frame">
                    <img
                      class="spatial-card__photo spatial-card__photo--primary"
                      src="${memory.photo}"
                      alt="${memory.eyebrow}"
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    >
                  </div>
                  <div class="spatial-card__shine"></div>
                  <div class="spatial-card__caption">
                    <h4>${memory.eyebrow}</h4>
                  </div>
                </div>
              </div>
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
  heroMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.heroTarget);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });

      if (button.dataset.heroTarget === "message-stage") {
        window.setTimeout(() => setLetterState(true), 650);
      }
    });
  });

  const syncNavVisibility = () => {
    if (!heroStage) {
      return;
    }

    const showNav = window.scrollY > Math.max(72, heroStage.clientHeight * 0.18);
    document.body.classList.toggle("nav-visible", showNav);
  };

  syncNavVisibility();
  window.addEventListener("scroll", syncNavVisibility, { passive: true });
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

  const rootStyle = document.documentElement.style;
  const pointer = {
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.35,
    active: false
  };
  const parallax = { x: 0, y: 0 };
  const targetParallax = { x: 0, y: 0 };
  const petals = [];
  const petalCount = prefersReducedMotion ? 48 : 168;

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
      fallSpeed: 25 + Math.random() * 26,
      drift: -10 + Math.random() * 20,
      swing: 8 + Math.random() * 12,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 1 + Math.random() * 1.45,
      rotation: Math.random() * Math.PI,
      rotationSpeed: -1.1 + Math.random() * 2.2,
      opacity: 0.8 + Math.random() * 0.2
    };
  }

  function resetPetal(petal, fromTop = true) {
    petal.x = Math.random() * (width + 80) - 40;
    petal.y = fromTop ? -20 - Math.random() * height * 0.3 : Math.random() * height;
    petal.size = 4.5 + Math.random() * 6.2;
    petal.fallSpeed = 25 + Math.random() * 26;
    petal.drift = -10 + Math.random() * 20;
    petal.swing = 8 + Math.random() * 12;
    petal.sway = Math.random() * Math.PI * 2;
    petal.swaySpeed = 1 + Math.random() * 1.45;
    petal.rotation = Math.random() * Math.PI;
    petal.rotationSpeed = -1.1 + Math.random() * 2.2;
    petal.opacity = 0.8 + Math.random() * 0.2;
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1);

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
    if (document.body.classList.contains("mode-yuki")) {
      drawGinkgoLeaf(petal);
      return;
    }

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

  function drawGinkgoLeaf(petal) {
    const size = petal.size * 1.22;

    ctx.save();
    ctx.translate(petal.x, petal.y);
    ctx.rotate(petal.rotation);
    ctx.globalAlpha = petal.opacity * 0.96;

    ctx.fillStyle = "#f0cf73";
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.quadraticCurveTo(size * 0.18, size * 0.26, size * 0.96, -size * 0.04);
    ctx.bezierCurveTo(size * 0.7, -size * 0.86, size * 0.16, -size * 1.02, 0, -size * 0.36);
    ctx.bezierCurveTo(-size * 0.16, -size * 1.02, -size * 0.7, -size * 0.86, -size * 0.96, -size * 0.04);
    ctx.quadraticCurveTo(-size * 0.18, size * 0.26, 0, size);
    ctx.fill();

    ctx.strokeStyle = "rgba(179, 126, 42, 0.52)";
    ctx.lineWidth = Math.max(1, size * 0.08);
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, size);
    ctx.lineTo(0, -size * 0.16);
    ctx.moveTo(0, size * 0.12);
    ctx.lineTo(size * 0.38, -size * 0.18);
    ctx.moveTo(0, size * 0.12);
    ctx.lineTo(-size * 0.38, -size * 0.18);
    ctx.stroke();

    ctx.globalAlpha = petal.opacity * 0.28;
    ctx.fillStyle = "#fff4c9";
    ctx.beginPath();
    ctx.ellipse(
      -size * 0.18,
      -size * 0.2,
      size * 0.28,
      size * 0.16,
      -0.46,
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
        const interactionRadius = 52000;

        if (distanceSquared < interactionRadius) {
          const distance = Math.sqrt(distanceSquared) || 1;
          const force = (1 - distanceSquared / interactionRadius) * 162;
          petal.x += (dx / distance) * force * deltaSeconds;
          petal.y += (dy / distance) * force * deltaSeconds * 0.96;
          petal.rotation += force * 0.03 * deltaSeconds;
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

    parallax.x += (targetParallax.x - parallax.x) * (prefersReducedMotion ? 0.08 : 0.06);
    parallax.y += (targetParallax.y - parallax.y) * (prefersReducedMotion ? 0.08 : 0.06);

    const maxScroll = Math.max(document.documentElement.scrollHeight - height, 1);
    const scrollProgress = latestScroll / maxScroll;
    const scrollShift = scrollProgress * 720;
    rootStyle.setProperty("--parallax-x", `${parallax.x.toFixed(2)}px`);
    rootStyle.setProperty("--parallax-y", `${parallax.y.toFixed(2)}px`);
    rootStyle.setProperty("--scroll-shift", `${scrollShift.toFixed(2)}px`);

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
  void attemptStartupAutoplay();

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
    musicStatus.textContent = "Playing. ";
  });

  audio.addEventListener("pause", () => {
    musicWidget.classList.remove("is-playing");
    playPauseButton.setAttribute("aria-label", "Play music");
    if (autoplayPrimed) {
      musicStatus.textContent = "Paused. ";
    }
  });

  audio.addEventListener("ended", async () => {
    await changeTrack(1, true);
  });

  audio.addEventListener("loadeddata", () => {
    if (!startupAutoplayResolved && !audio.error) {
      void attemptStartupAutoplay();
    }
  });

  audio.addEventListener("error", () => {
    startupAutoplayResolved = true;
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

async function attemptStartupAutoplay() {
  if (startupAutoplayResolved || audio.error || !audio.src) {
    return;
  }

  musicStatus.textContent = "Starting the playlist...";

  try {
    autoplayPrimed = true;
    await audio.play();
    startupAutoplayResolved = true;
  } catch (error) {
    autoplayPrimed = false;

    if (audio.error) {
      musicStatus.textContent = "Add your MP3 files to assets/music and keep the filenames listed in main.js.";
      return;
    }

    musicStatus.textContent = "";
    armStartupAutoplay();
  }
}

function armStartupAutoplay() {
  if (startupAutoplayArmed || startupAutoplayResolved) {
    return;
  }

  startupAutoplayArmed = true;

  const resumePlayback = async () => {
    window.removeEventListener("pointerdown", resumePlayback);
    window.removeEventListener("keydown", resumePlayback);
    startupAutoplayArmed = false;
    await attemptStartupAutoplay();
  };

  window.addEventListener("pointerdown", resumePlayback, { once: true, passive: true });
  window.addEventListener("keydown", resumePlayback, { once: true });
}

async function playCurrentTrack() {
  try {
    await audio.play();
    startupAutoplayResolved = true;
  } catch (error) {
    musicStatus.textContent = audio.error
      ? "Add your MP3 files to assets/music and keep the filenames listed in main.js."
      : "Playback is waiting for browser permission. Tap play again or interact with the page once.";
  }
}

function updateTrackUI(track) {
  musicTitle.textContent = track.title;
  musicArtist.textContent = track.artist;
  setTrackCover(track.cover);
  musicStatus.textContent = autoplayPrimed
    ? "Queued and ready."
    : "Starting the playlist...";
}

function setTrackCover(coverPath) {
  const loadId = ++activeCoverLoadId;

  if (!coverPath) {
    musicCover.style.removeProperty("--music-cover-art");
    return;
  }

  const candidates = /\.[a-z0-9]+$/i.test(coverPath)
    ? [coverPath]
    : trackCoverExtensions.map((extension) => `${coverPath}${extension}`);

  tryLoadTrackCover(candidates, 0, loadId);
}

function tryLoadTrackCover(candidates, index, loadId) {
  if (index >= candidates.length) {
    if (loadId === activeCoverLoadId) {
      musicCover.style.removeProperty("--music-cover-art");
    }
    return;
  }

  const src = candidates[index];
  const image = new Image();

  image.onload = () => {
    if (loadId !== activeCoverLoadId) {
      return;
    }

    const safeSrc = src.replace(/\\/g, "/").replace(/"/g, "%22");
    musicCover.style.setProperty("--music-cover-art", `url("${safeSrc}")`);
  };

  image.onerror = () => {
    tryLoadTrackCover(candidates, index + 1, loadId);
  };

  image.src = src;
}

async function initDogScene() {
  if (!dogViewer || !heroStage) {
    return;
  }

  if (prefersReducedMotion) {
    dogViewer.removeAttribute("auto-rotate");
  } else {
    dogViewer.setAttribute("auto-rotate", "");
  }

  heroStage.addEventListener("pointerdown", (event) => {
    if (event.target.closest("#dog-viewer")) {
      heroStage.classList.add("is-orbiting");
    }
  });

  window.addEventListener("pointerup", () => {
    heroStage.classList.remove("is-orbiting");
  });

  modelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextKey = button.dataset.modelKey;
      if (!nextKey || nextKey === activeModelKey) {
        return;
      }

      activeModelKey = nextKey;
      currentModelConfig = modelCatalog[activeModelKey] || modelCatalog.pocky;
      syncVisualMode();
      updateModelButtonState();
      loadCurrentModel();
    });
  });

  dogViewer.addEventListener("load", () => {
    if (modelFallbackTimeout) {
      window.clearTimeout(modelFallbackTimeout);
    }

    dogViewer.style.opacity = "1";
    heroStage.classList.add("is-model-ready");
    heroStage.querySelector(".scene-fallback")?.remove();
    heroStatus.textContent = currentModelConfig.status;
  });

  dogViewer.addEventListener("error", () => {
    tryNextModelCandidate();
  });

  updateModelButtonState();
  loadCurrentModel();

  function updateModelButtonState() {
    modelButtons.forEach((button) => {
      const isActive = button.dataset.modelKey === activeModelKey;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function loadCurrentModel() {
    syncVisualMode();
    heroStage.classList.remove("is-model-ready");
    heroStage.querySelector(".scene-fallback")?.remove();
    pendingModelCandidates = currentModelConfig.candidates.map((path) =>
      new URL(path, import.meta.url).href
    );

    dogViewer.alt = currentModelConfig.alt;
    dogViewer.setAttribute("camera-orbit", currentModelConfig.cameraOrbit);
    dogViewer.setAttribute("min-camera-orbit", currentModelConfig.minCameraOrbit);
    dogViewer.setAttribute("max-camera-orbit", currentModelConfig.maxCameraOrbit);
    dogViewer.setAttribute("field-of-view", currentModelConfig.fieldOfView);
    dogViewer.setAttribute("exposure", currentModelConfig.exposure);
    heroStatus.textContent = `Loading ${currentModelConfig.label}...`;

    if (modelFallbackTimeout) {
      window.clearTimeout(modelFallbackTimeout);
    }

    modelFallbackTimeout = window.setTimeout(() => {
      if (!heroStage.classList.contains("is-model-ready")) {
        showSceneFallback(getModelFallbackMessage());
      }
    }, 5000);

    tryNextModelCandidate();
  }

  function tryNextModelCandidate() {
    const nextModelSrc = pendingModelCandidates.shift();
    if (!nextModelSrc) {
      showSceneFallback(getModelFallbackMessage());
      return;
    }

    dogViewer.src = nextModelSrc;
  }

  function getModelFallbackMessage() {
    if (window.location.protocol === "file:") {
      return "The 3D model viewer is blocked over file://. Run the local preview server from the README to view Pocky or Yuki.";
    }

    if (activeModelKey === "yuki") {
      return "Yuki could not be found yet. Add Yuki's .glb file to /assets and the switcher will pick it up automatically.";
    }

    return "Pocky could not load here right now, but the gallery and message are still available.";
  }

  function showSceneFallback(message) {
    dogViewer.style.opacity = "0";
    heroStage.classList.remove("is-model-ready");
    heroStatus.textContent = message;

    const existing = heroStage.querySelector(".scene-fallback");
    if (existing) {
      existing.textContent = message;
      return;
    }

    const fallback = document.createElement("div");
    fallback.className = "scene-fallback";
    fallback.textContent = message;
    heroStage.appendChild(fallback);
  }
}

function syncVisualMode() {
  document.body.classList.toggle("mode-yuki", activeModelKey === "yuki");
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
