/**
 * ====================================================================
 * PRIVATE LOVE LETTER & EXPERIENCE: REKHA & AKKI
 * ====================================================================
 * ALL PERSONAL CONTENT IS CONFIGURED IN THE BLOCK BELOW.
 * Edit any lines, dates, photos, or text directly in this CONFIG object.
 * ====================================================================
 */

const CONFIG = {
  // ------------------------------------------------------------------
  // 1. GATE & AUTHENTICATION
  // ------------------------------------------------------------------
  // The secret password. Can be a special date or word.
  // Accepted inputs can be tested against normalized string (e.g. '1402', '14/02', 'rekha')
  password: "1402", // Tip: Change to your special anniversary date, e.g., "2410" or "1402"
  passwordHint: "Our special date (DDMM) or the day everything changed...",
  playfulWrongAttempts: [
    "Not so fast, darling...",
    "Nice try, but you know what opens this...",
    "Think back to the night when time stopped...",
    "Patience, my love... try again.",
    "Only you hold the key to this door."
  ],

  // ------------------------------------------------------------------
  // 2. NAMES & HERO
  // ------------------------------------------------------------------
  herName: "Rekha",
  hisName: "Akki",
  heroTagline: "I can't stop thinking about you.",
  heroSubline: "Close the door. Dim the lights. Take your time.",

  // ------------------------------------------------------------------
  // 3. "THINGS I THINK ABOUT" (Sensual, teasing, romantic one-liners)
  // ------------------------------------------------------------------
  thoughts: [
    "The way your eyes darken right before you lean in to kiss me.",
    "How your laugh softens into something private when it's just the two of us in the quiet.",
    "The scent of your skin lingering on my pillow hours after you've slipped away.",
    "The curve of your neck where my lips always seem to find their home.",
    "How dangerous you look when you give me that slow, knowing half-smile from across the room.",
    "The memory of your hands tangled in my hair, pulling me closer until breathing feels impossible.",
    "What goes through your mind in the seconds before our skin touches.",
    "How effortless it is for you to completely undo my composure with a single whisper.",
    "Waking up next to you with tangled sheets, the morning light lazy and unhurried.",
    "The quiet shudder when my fingertips trace the small of your back.",
    "How every room feels empty until you walk into it—and every room feels too crowded when I just want you alone.",
    "The undeniable, magnetic tension every single time our eyes meet across the dark."
  ],

  // ------------------------------------------------------------------
  // 4. "TONIGHT, I WANT..." (Tap-to-reveal secret intentions / fantasies)
  // ------------------------------------------------------------------
  desires: [
    {
      title: "Slow Motion",
      teaser: "Touch to unlock",
      secret: "Slow dancing barefoot in the living room with no music, just the sound of your breath against my collarbone."
    },
    {
      title: "No Rush",
      teaser: "Touch to unlock",
      secret: "Soft, deliberate kisses trailing down your jawline and neck until every defense you have completely melts."
    },
    {
      title: "The Whispers",
      teaser: "Touch to unlock",
      secret: "Pulling you flush against me in the dark and whispering things in your ear that make you bite your lip."
    },
    {
      title: "Zero Distance",
      teaser: "Touch to unlock",
      secret: "Holding you so close there isn't room for even a whisper between our bodies."
    },
    {
      title: "Late Hours",
      teaser: "Touch to unlock",
      secret: "Losing all track of time, letting midnight blur into dawn without once letting you go."
    },
    {
      title: "Surrender",
      teaser: "Touch to unlock",
      secret: "Taking your hand, looking straight into your eyes, and letting everything else in the universe fade out."
    }
  ],

  // ------------------------------------------------------------------
  // 5. PRIVATE GALLERY (Add real photos to /assets/photos/ and update here)
  // ------------------------------------------------------------------
  gallery: [
    {
      src: "assets/photos/photo1.svg",
      caption: "That glance that started a fire.",
      date: "Our Secret Archive"
    },
    {
      src: "assets/photos/photo2.svg",
      caption: "Wrapped up in you, where the world can't find us.",
      date: "Midnight Memories"
    },
    {
      src: "assets/photos/photo3.svg",
      caption: "Your silhouette in the candlelit gloom.",
      date: "Private Frame"
    },
    {
      src: "assets/photos/photo4.svg",
      caption: "Just you, effortlessly breathtaking.",
      date: "Always & Forever"
    }
  ],

  // ------------------------------------------------------------------
  // 6. WHISPERS (Secret press & hold message & voice note)
  // ------------------------------------------------------------------
  whisperSecret: "If you were standing right in front of me right this second, I wouldn't let you leave this room until morning. You have no idea how intoxicating you are to me.",
  voiceNoteAudio: "assets/audio/voice-note.mp3",
  voiceNoteDuration: "0:45",

  // ------------------------------------------------------------------
  // 7. LOVE LETTER, AFTER DARK
  // ------------------------------------------------------------------
  letter: `Rekha,

It's well past midnight as I write this, and as always, you are the only thing echoing in my head.

There is something hypnotic about you—a warmth, a fierce quiet beauty that renders everything else irrelevant. I love the way we talk for hours about nothing and everything, but God, I also crave the moments when words run out. When it's just the sound of our breathing, the heat radiating off your skin, and that unspoken language that only exists between your touch and mine.

You have this effortless way of pulling me under. One look from you and whatever armor I thought I had just crumbles. I want you in every possible way: your thoughts, your laughter, your wildest dreams, and every quiet, unguarded breath you take when you're completely wrapped in my arms.

Thank you for being my haven, my temptation, and the sweetest fire I never want to put out.

Close this screen whenever you're ready... and come find me.`,

  // ------------------------------------------------------------------
  // 8. DARES & PROMISES
  // ------------------------------------------------------------------
  dares: [
    "Send me a voice note right now saying the first sultry thing that comes to your mind.",
    "Close your eyes for thirty seconds and remember the last time my lips were against your neck.",
    "Tell me one thing you've secretly wanted us to do in the dark but haven't said out loud yet.",
    "Put your phone down, look in the mirror, and remind yourself how dangerously gorgeous you are.",
    "Wear my favorite fragrance the next time we meet, and don't let me leave your side.",
    "Give in completely next time we're together—no holding back, no rushing."
  ],
  promises: [
    "I promise to always look at you with the exact same hunger and adoration as the day I realized I loved you.",
    "I promise never to let the spark become routine. We will always have our midnight fires.",
    "I promise to make you feel fiercely desired, deeply cherished, and completely safe in my hands.",
    "I promise to kiss you like it's our first time, every single time.",
    "I promise to listen to what you say—and pay even closer attention to what you leave unsaid.",
    "I promise that no matter how loud the world gets, our private world will always belong solely to us."
  ],

  // ------------------------------------------------------------------
  // 9. FINALE MESSAGES
  // ------------------------------------------------------------------
  finale: {
    onMyWay: {
      title: "My heart just skipped a beat.",
      message: "The door is unlocked, the candles are burning low, and I am counting every single second until you're right here in my arms.",
      signoff: "Hurry to me, Rekha."
    },
    makeMeWait: {
      title: "You love playing with fire, don't you?",
      message: "Every minute you make me wait only makes what happens when we're together that much more intense. Take your time... anticipation is half the pleasure.",
      signoff: "I'll be waiting in the dark for you."
    }
  },

  // Ambient track (Web Audio synthesizer is built-in as an instant ambient fallback!)
  audioTrack: "assets/audio/ambient.mp3"
};

/**
 * ====================================================================
 * APPLICATION CONTROLLER & INTERACTION ENGINE
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initGate();
  initDynamicContent();
  initParticles();
  initAudioExperience();
  initHoldInteraction();
  initVoiceNotePlayer();
  initLoveLetter();
  initDaresAndPromises();
  initFinale();
});

/**
 * 1. PRIVACY GATE CONTROLLER
 */
function initGate() {
  const gateOverlay = document.getElementById("gateOverlay");
  const gateForm = document.getElementById("gateForm");
  const gatePassword = document.getElementById("gatePassword");
  const gateFeedback = document.getElementById("gateFeedback");
  const gateHintBtn = document.getElementById("gateHintBtn");
  const gateHintText = document.getElementById("gateHintText");
  const toggleVisibilityBtn = document.getElementById("togglePasswordVisibility");

  if (!gateOverlay) return;

  // Set hint text from CONFIG
  if (gateHintText) {
    gateHintText.textContent = CONFIG.passwordHint;
  }

  // Toggle Hint Visibility
  if (gateHintBtn && gateHintText) {
    gateHintBtn.addEventListener("click", () => {
      gateHintText.hidden = !gateHintText.hidden;
    });
  }

  // Toggle Password Mask
  if (toggleVisibilityBtn && gatePassword) {
    toggleVisibilityBtn.addEventListener("click", () => {
      const isPassword = gatePassword.type === "password";
      gatePassword.type = isPassword ? "text" : "password";
      toggleVisibilityBtn.style.color = isPassword ? "var(--rose-gold)" : "var(--text-muted)";
    });
  }

  // Handle Gate Verification
  let wrongAttemptIndex = 0;
  gateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const entered = gatePassword.value.trim().toLowerCase().replace(/[-/\s]/g, "");
    const expected = CONFIG.password.trim().toLowerCase().replace(/[-/\s]/g, "");

    // Also accept "rekha" or "akki" or expected password
    if (entered === expected || entered === "rekha" || entered === "akki") {
      gateFeedback.style.color = "var(--rose-gold)";
      gateFeedback.textContent = "Welcome, my love...";
      
      // Haptic feedback if supported
      if (navigator.vibrate) navigator.vibrate([30, 50, 30]);

      setTimeout(() => {
        gateOverlay.classList.add("unlocked");
        document.body.classList.remove("is-locked");
        
        // Trigger ambient music immediately on valid gesture
        if (window.ambientSynth) {
          window.ambientSynth.start();
        }
      }, 700);
    } else {
      // Pick teasing message
      const tease = CONFIG.playfulWrongAttempts[wrongAttemptIndex % CONFIG.playfulWrongAttempts.length];
      wrongAttemptIndex++;
      gateFeedback.textContent = tease;
      
      // Gentle shake
      gatePassword.style.transform = "translateX(-8px)";
      setTimeout(() => gatePassword.style.transform = "translateX(8px)", 80);
      setTimeout(() => gatePassword.style.transform = "translateX(-4px)", 160);
      setTimeout(() => gatePassword.style.transform = "translateX(0)", 240);
    }
  });
}

/**
 * 2. POPULATE DYNAMIC CONTENT FROM CONFIG
 */
function initDynamicContent() {
  // Names & Hero
  const heroName = document.getElementById("heroName");
  if (heroName) heroName.textContent = CONFIG.herName;
  const heroTagline = document.getElementById("heroTagline");
  if (heroTagline) heroTagline.textContent = CONFIG.heroTagline;

  // 3. Thoughts Stack
  const thoughtsStack = document.getElementById("thoughtsStack");
  if (thoughtsStack) {
    thoughtsStack.innerHTML = CONFIG.thoughts.map((thought, idx) => `
      <article class="thought-card" data-observe="fade-up">
        <div class="thought-index">Whisper ${String(idx + 1).padStart(2, '0')}</div>
        <p class="thought-text">${escapeHtml(thought)}</p>
      </article>
    `).join("");
  }

  // 4. Desires Grid
  const desireCardsGrid = document.getElementById("desireCardsGrid");
  if (desireCardsGrid) {
    desireCardsGrid.innerHTML = CONFIG.desires.map((desire, idx) => `
      <div class="desire-card" tabindex="0" role="button" aria-expanded="false" data-index="${idx}">
        <div class="desire-card-inner">
          <div class="desire-front">
            <div class="card-seal" aria-hidden="true">✦</div>
            <div class="front-title">${escapeHtml(desire.title)}</div>
            <div class="front-hint">${escapeHtml(desire.teaser)}</div>
          </div>
          <div class="desire-back">
            <p class="desire-quote">"${escapeHtml(desire.secret)}"</p>
            <span class="desire-tag font-script">Yours, completely</span>
          </div>
        </div>
      </div>
    `).join("");

    // Desire Cards click & keyboard flip
    desireCardsGrid.querySelectorAll(".desire-card").forEach(card => {
      const toggle = () => {
        const isRevealed = card.classList.toggle("is-revealed");
        card.setAttribute("aria-expanded", isRevealed ? "true" : "false");
        if (navigator.vibrate) navigator.vibrate(20);
      };
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  // 5. Gallery Grid
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = CONFIG.gallery.map((item, idx) => `
      <div class="gallery-card" data-index="${idx}">
        <div class="gallery-media-wrapper">
          <img src="${escapeHtml(item.src)}" alt="Intimate memory" class="gallery-img" loading="lazy">
          <div class="gallery-veil" role="button" tabindex="0" aria-label="Tap to unveil photo">
            <div class="veil-icon" aria-hidden="true">✧</div>
            <span class="veil-text">Tap to Unveil</span>
            <span class="veil-subtext">Private Frame</span>
          </div>
        </div>
        <div class="gallery-caption">
          <p class="gallery-caption-text">${escapeHtml(item.caption)}</p>
          <p class="gallery-caption-date font-script">${escapeHtml(item.date)}</p>
        </div>
      </div>
    `).join("");

    // Gallery Veil Click
    galleryGrid.querySelectorAll(".gallery-card").forEach(card => {
      const veil = card.querySelector(".gallery-veil");
      if (!veil) return;
      const unveil = () => {
        card.classList.toggle("unveiled");
        if (navigator.vibrate) navigator.vibrate(25);
      };
      veil.addEventListener("click", unveil);
      veil.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          unveil();
        }
      });
    });
  }

  // 7. Letter Salutation & Signer
  const salutation = document.getElementById("letterSalutation");
  if (salutation) salutation.textContent = `My Dearest ${CONFIG.herName},`;
  const signer = document.getElementById("letterSigner");
  if (signer) signer.textContent = CONFIG.hisName;

  // Setup scroll observer for scroll-triggered elements
  initScrollObserver();
}

/**
 * SCROLL OBSERVER (Slow subtle reveals)
 */
function initScrollObserver() {
  const cards = document.querySelectorAll('.thought-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  cards.forEach(card => observer.observe(card));
}

/**
 * 3. PARTICLE & EMBER SYSTEM WITH MOUSE TRAIL
 */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  // Ambient drifting embers
  const particles = [];
  const maxParticles = window.innerWidth < 600 ? 25 : 50;

  class Ember {
    constructor(x, y, isTrail = false) {
      this.reset(x, y, isTrail);
    }
    reset(x, y, isTrail = false) {
      this.x = x !== undefined ? x : Math.random() * width;
      this.y = y !== undefined ? y : (isTrail ? y : Math.random() * height);
      this.size = isTrail ? Math.random() * 2.5 + 1 : Math.random() * 2 + 0.6;
      this.speedY = isTrail ? (Math.random() - 0.5) * 1.5 - 0.8 : -Math.random() * 0.45 - 0.15;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.opacity = isTrail ? 0.9 : Math.random() * 0.6 + 0.2;
      this.decay = isTrail ? Math.random() * 0.02 + 0.015 : 0;
      this.hue = Math.random() > 0.4 ? 12 : 350; // Rose-gold or deep crimson
      this.saturation = 80;
      this.lightness = Math.random() * 30 + 55;
      this.isTrail = isTrail;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.isTrail) {
        this.opacity -= this.decay;
      } else {
        if (this.y < -10) this.y = height + 10;
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
      }
    }
    draw() {
      if (this.opacity <= 0) return;
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.opacity})`;
      ctx.shadowBlur = this.size * 4;
      ctx.shadowColor = `hsla(${this.hue}, 90%, 60%, ${this.opacity * 0.8})`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Ember());
  }

  const trailParticles = [];

  // Mouse / Touch spark trail
  function addTrailEmber(x, y) {
    if (trailParticles.length > 40) trailParticles.shift();
    trailParticles.push(new Ember(x, y, true));
  }

  window.addEventListener("mousemove", (e) => {
    addTrailEmber(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) {
      addTrailEmber(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // Animation Loop
  function loop() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const tp = trailParticles[i];
      tp.update();
      tp.draw();
      if (tp.opacity <= 0) {
        trailParticles.splice(i, 1);
      }
    }

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Global helper for finale ember burst
  window.burstEmbers = function(originX, originY, count = 70) {
    for (let i = 0; i < count; i++) {
      const p = new Ember(originX || width / 2, originY || height / 2, true);
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 5 + 2;
      p.speedX = Math.cos(angle) * speed;
      p.speedY = Math.sin(angle) * speed;
      p.size = Math.random() * 3 + 1.5;
      p.decay = Math.random() * 0.015 + 0.008;
      p.lightness = Math.random() * 40 + 50;
      trailParticles.push(p);
    }
  };
}

/**
 * 4. AMBIENT MUSIC ENGINE (Web Audio Generative Drone + MP3 fallback)
 */
function initAudioExperience() {
  const toggleBtn = document.getElementById("audioToggleBtn");
  const audioLabel = document.getElementById("audioLabel");
  if (!toggleBtn) return;

  // Sultry Generative Web Audio Synthesizer
  class SultrySoundscape {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.oscillators = [];
      this.gainNode = null;
    }
    init() {
      if (this.ctx) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master output with warm soft saturation
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Lowpass warmth filter (removes harshness, keeps sensual velvet hum)
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(380, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

      this.masterGain.connect(this.filter);
      this.filter.connect(this.ctx.destination);

      // Sultry Minor-9th Chord Frequencies (F# minor 9th: F#2, C#3, A3, E4, G#4)
      const freqs = [92.50, 138.59, 220.00, 329.63, 415.30];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Subtle detune for lush analog warmth
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, this.ctx.currentTime);

        // Individual voice gain
        oscGain.gain.setValueAtTime(0.12 / freqs.length, this.ctx.currentTime);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);
        osc.start();
        this.oscillators.push(osc);
      });

      // Slow breathing LFO filter modulation
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime); // very slow breath (12.5s)
      lfoGain.gain.setValueAtTime(120, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(this.filter.frequency);
      lfo.start();
    }
    start() {
      this.init();
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      this.masterGain.gain.linearRampToValueAtTime(0.65, this.ctx.currentTime + 3);
      this.isPlaying = true;
      toggleBtn.classList.add("is-playing");
      if (audioLabel) audioLabel.textContent = "Music: On";
    }
    stop() {
      if (!this.ctx || !this.isPlaying) return;
      this.masterGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.2);
      this.isPlaying = false;
      toggleBtn.classList.remove("is-playing");
      if (audioLabel) audioLabel.textContent = "Music: Off";
    }
    toggle() {
      if (this.isPlaying) {
        this.stop();
      } else {
        this.start();
      }
    }
  }

  window.ambientSynth = new SultrySoundscape();

  toggleBtn.addEventListener("click", () => {
    window.ambientSynth.toggle();
  });
}

/**
 * 5. WHISPERS: PRESS & HOLD INTERACTION
 */
function initHoldInteraction() {
  const holdButton = document.getElementById("holdButton");
  const ringProgress = document.getElementById("ringProgress");
  const holdStatus = document.getElementById("holdStatus");
  const whisperSecretRevealed = document.getElementById("whisperSecretRevealed");
  const whisperSecretText = document.getElementById("whisperSecretText");

  if (!holdButton || !ringProgress) return;

  if (whisperSecretText) {
    whisperSecretText.textContent = CONFIG.whisperSecret;
  }

  const circumference = 2 * Math.PI * 60; // r=60 => ~377
  ringProgress.style.strokeDasharray = `${circumference}`;
  ringProgress.style.strokeDashoffset = `${circumference}`;

  let holdTimer = null;
  let startTime = 0;
  const holdDuration = 2400; // 2.4 seconds to unlock

  function startHold(e) {
    e.preventDefault();
    startTime = Date.now();
    holdButton.classList.add("is-active");
    if (holdStatus) holdStatus.textContent = "Keep holding... feel it building...";
    if (navigator.vibrate) navigator.vibrate(30);

    function step() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / holdDuration, 1);
      const offset = circumference - (progress * circumference);
      ringProgress.style.strokeDashoffset = `${offset}`;

      if (progress < 1) {
        holdTimer = requestAnimationFrame(step);
      } else {
        // Complete!
        completeHold();
      }
    }
    holdTimer = requestAnimationFrame(step);
  }

  function cancelHold() {
    if (holdTimer) cancelAnimationFrame(holdTimer);
    holdButton.classList.remove("is-active");
    ringProgress.style.strokeDashoffset = `${circumference}`;
    if (!whisperSecretRevealed.classList.contains("revealed")) {
      if (holdStatus) holdStatus.textContent = "Press and hold the burning seal... don't let go.";
    }
  }

  function completeHold() {
    holdButton.classList.remove("is-active");
    if (navigator.vibrate) navigator.vibrate([60, 80, 100]);
    if (holdStatus) holdStatus.textContent = "Unveiled just for you.";
    whisperSecretRevealed.classList.add("revealed");

    if (window.burstEmbers) {
      const rect = holdButton.getBoundingClientRect();
      window.burstEmbers(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
    }
  }

  // Mouse & Touch events
  holdButton.addEventListener("mousedown", startHold);
  window.addEventListener("mouseup", cancelHold);

  holdButton.addEventListener("touchstart", startHold, { passive: false });
  window.addEventListener("touchend", cancelHold);
  window.addEventListener("touchcancel", cancelHold);
}

/**
 * 6. VOICE NOTE PLAYER
 */
function initVoiceNotePlayer() {
  const vnPlayBtn = document.getElementById("vnPlayBtn");
  const vnPlayIcon = document.getElementById("vnPlayIcon");
  const vnPauseIcon = document.getElementById("vnPauseIcon");
  const vnWaveform = document.getElementById("vnWaveform");
  const vnProgressFill = document.getElementById("vnProgressFill");
  const vnCurrentTime = document.getElementById("vnCurrentTime");
  const vnDuration = document.getElementById("vnDuration");
  const audioEl = document.getElementById("voiceNoteAudio");

  if (!vnPlayBtn || !audioEl) return;

  if (vnDuration) vnDuration.textContent = CONFIG.voiceNoteDuration;

  let isSimulatedPlaying = false;
  let simulatedTimer = null;
  let simulatedSeconds = 0;
  const totalSimulatedSeconds = 45;

  function togglePlay() {
    // If real audio file loads, play it; otherwise run simulated sensual audio preview
    if (audioEl.currentSrc && !audioEl.error && audioEl.readyState >= 2) {
      if (audioEl.paused) {
        audioEl.play();
        setPlayingState(true);
      } else {
        audioEl.pause();
        setPlayingState(false);
      }
    } else {
      // Simulated playback demonstration
      if (!isSimulatedPlaying) {
        isSimulatedPlaying = true;
        setPlayingState(true);
        simulatedTimer = setInterval(() => {
          simulatedSeconds++;
          const mins = Math.floor(simulatedSeconds / 60);
          const secs = String(simulatedSeconds % 60).padStart(2, "0");
          if (vnCurrentTime) vnCurrentTime.textContent = `${mins}:${secs}`;
          if (vnProgressFill) {
            vnProgressFill.style.width = `${(simulatedSeconds / totalSimulatedSeconds) * 100}%`;
          }

          if (simulatedSeconds >= totalSimulatedSeconds) {
            clearInterval(simulatedTimer);
            isSimulatedPlaying = false;
            setPlayingState(false);
            simulatedSeconds = 0;
            if (vnProgressFill) vnProgressFill.style.width = "0%";
            if (vnCurrentTime) vnCurrentTime.textContent = "0:00";
          }
        }, 1000);
      } else {
        clearInterval(simulatedTimer);
        isSimulatedPlaying = false;
        setPlayingState(false);
      }
    }
  }

  function setPlayingState(playing) {
    if (playing) {
      vnPlayIcon.classList.add("hidden");
      vnPauseIcon.classList.remove("hidden");
      vnWaveform.classList.add("is-active");
    } else {
      vnPlayIcon.classList.remove("hidden");
      vnPauseIcon.classList.add("hidden");
      vnWaveform.classList.remove("is-active");
    }
  }

  vnPlayBtn.addEventListener("click", togglePlay);

  // Real audio events if present
  audioEl.addEventListener("timeupdate", () => {
    if (!audioEl.duration) return;
    const progress = (audioEl.currentTime / audioEl.duration) * 100;
    if (vnProgressFill) vnProgressFill.style.width = `${progress}%`;
    const mins = Math.floor(audioEl.currentTime / 60);
    const secs = String(Math.floor(audioEl.currentTime % 60)).padStart(2, "0");
    if (vnCurrentTime) vnCurrentTime.textContent = `${mins}:${secs}`;
  });

  audioEl.addEventListener("ended", () => {
    setPlayingState(false);
    if (vnProgressFill) vnProgressFill.style.width = "0%";
    if (vnCurrentTime) vnCurrentTime.textContent = "0:00";
  });
}

/**
 * 7. LOVE LETTER TYPEWRITER
 */
function initLoveLetter() {
  const letterBody = document.getElementById("letterBody");
  const skipBtn = document.getElementById("skipTypewriterBtn");
  const replayBtn = document.getElementById("replayTypewriterBtn");
  const letterSection = document.getElementById("letter");

  if (!letterBody || !letterSection) return;

  const fullText = CONFIG.letter;
  let charIndex = 0;
  let typingInterval = null;
  let hasStarted = false;

  function typeLetter() {
    if (typingInterval) clearInterval(typingInterval);
    letterBody.textContent = "";
    charIndex = 0;
    hasStarted = true;

    if (skipBtn) skipBtn.classList.remove("hidden");
    if (replayBtn) replayBtn.classList.add("hidden");

    typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        letterBody.textContent = fullText.slice(0, charIndex + 1);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        if (skipBtn) skipBtn.classList.add("hidden");
        if (replayBtn) replayBtn.classList.remove("hidden");
      }
    }, 38); // Sensual, natural pace
  }

  function skipTypewriter() {
    if (typingInterval) clearInterval(typingInterval);
    letterBody.textContent = fullText;
    if (skipBtn) skipBtn.classList.add("hidden");
    if (replayBtn) replayBtn.classList.remove("hidden");
  }

  if (skipBtn) skipBtn.addEventListener("click", skipTypewriter);
  if (replayBtn) replayBtn.addEventListener("click", typeLetter);

  // Trigger typing when section scrolls into view
  const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStarted) {
        typeLetter();
      }
    });
  }, { threshold: 0.25 });

  letterObserver.observe(letterSection);
}

/**
 * 8. DARES AND PROMISES
 */
function initDaresAndPromises() {
  const tabDares = document.getElementById("tabDares");
  const tabPromises = document.getElementById("tabPromises");
  const daresPanel = document.getElementById("daresPanel");
  const promisesPanel = document.getElementById("promisesPanel");

  const dareCounter = document.getElementById("dareCounter");
  const dareText = document.getElementById("dareText");
  const nextDareBtn = document.getElementById("nextDareBtn");

  const promiseCounter = document.getElementById("promiseCounter");
  const promiseText = document.getElementById("promiseText");
  const nextPromiseBtn = document.getElementById("nextPromiseBtn");

  let currentDare = 0;
  let currentPromise = 0;

  function updateDare(idx) {
    if (!dareText || !dareCounter) return;
    dareCounter.textContent = `Dare ${idx + 1} of ${CONFIG.dares.length}`;
    dareText.style.opacity = 0;
    setTimeout(() => {
      dareText.textContent = CONFIG.dares[idx];
      dareText.style.opacity = 1;
    }, 200);
  }

  function updatePromise(idx) {
    if (!promiseText || !promiseCounter) return;
    promiseCounter.textContent = `Promise ${idx + 1} of ${CONFIG.promises.length}`;
    promiseText.style.opacity = 0;
    setTimeout(() => {
      promiseText.textContent = CONFIG.promises[idx];
      promiseText.style.opacity = 1;
    }, 200);
  }

  // Initial populate
  updateDare(0);
  updatePromise(0);

  if (nextDareBtn) {
    nextDareBtn.addEventListener("click", () => {
      currentDare = (currentDare + 1) % CONFIG.dares.length;
      updateDare(currentDare);
      if (navigator.vibrate) navigator.vibrate(20);
    });
  }

  if (nextPromiseBtn) {
    nextPromiseBtn.addEventListener("click", () => {
      currentPromise = (currentPromise + 1) % CONFIG.promises.length;
      updatePromise(currentPromise);
      if (navigator.vibrate) navigator.vibrate(20);
    });
  }

  // Tabs
  if (tabDares && tabPromises) {
    tabDares.addEventListener("click", () => {
      tabDares.classList.add("active");
      tabPromises.classList.remove("active");
      tabDares.setAttribute("aria-selected", "true");
      tabPromises.setAttribute("aria-selected", "false");
      daresPanel.hidden = false;
      promisesPanel.hidden = true;
    });

    tabPromises.addEventListener("click", () => {
      tabPromises.classList.add("active");
      tabDares.classList.remove("active");
      tabPromises.setAttribute("aria-selected", "true");
      tabDares.setAttribute("aria-selected", "false");
      promisesPanel.hidden = false;
      daresPanel.hidden = true;
    });
  }
}

/**
 * 9. FINALE ACTIONS & EMBER EXPLOSION
 */
function initFinale() {
  const btnOnMyWay = document.getElementById("btnOnMyWay");
  const btnMakeMeWait = document.getElementById("btnMakeMeWait");
  const finaleResponse = document.getElementById("finaleResponse");
  const finaleResTitle = document.getElementById("finaleResTitle");
  const finaleResMessage = document.getElementById("finaleResMessage");
  const finaleResSignoff = document.getElementById("finaleResSignoff");
  const finaleDismissBtn = document.getElementById("finaleDismissBtn");

  if (!btnOnMyWay || !btnMakeMeWait) return;

  function showFinaleMessage(data, evt) {
    if (!finaleResponse) return;
    finaleResTitle.textContent = data.title;
    finaleResMessage.textContent = data.message;
    finaleResSignoff.textContent = data.signoff;
    finaleResponse.hidden = false;

    // Trigger celebratory ember fireworks
    if (window.burstEmbers) {
      const rect = evt.target.getBoundingClientRect();
      window.burstEmbers(rect.left + rect.width / 2, rect.top, 80);
      setTimeout(() => {
        window.burstEmbers(window.innerWidth / 2, window.innerHeight / 2, 100);
      }, 300);
    }

    if (navigator.vibrate) navigator.vibrate([40, 60, 40, 80]);

    finaleResponse.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  btnOnMyWay.addEventListener("click", (e) => {
    showFinaleMessage(CONFIG.finale.onMyWay, e);
  });

  btnMakeMeWait.addEventListener("click", (e) => {
    showFinaleMessage(CONFIG.finale.makeMeWait, e);
  });

  if (finaleDismissBtn) {
    finaleDismissBtn.addEventListener("click", () => {
      finaleResponse.hidden = true;
    });
  }
}

/**
 * Helper: Escape HTML to avoid XSS
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
