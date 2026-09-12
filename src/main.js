import "./style.css";

// ---------- Header state ----------
const header = document.querySelector(".site-header");
const hasHero = !!document.querySelector(".hero");

function headerState() {
  if (!header) return;
  const scrolled = window.scrollY > 60;
  if (hasHero) {
    header.classList.toggle("on-hero", !scrolled);
    header.classList.toggle("solid", scrolled);
  } else {
    header.classList.add("solid");
  }
}
headerState();
window.addEventListener("scroll", headerState, { passive: true });

// ---------- Menu overlay ----------
const overlay = document.querySelector(".menu-overlay");
document.querySelectorAll(".burger").forEach((b) =>
  b.addEventListener("click", () => {
    overlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  })
);

function closeMenu() {
  overlay?.classList.remove("open");
  document.body.style.overflow = "";
}
document.querySelector(".menu-close")?.addEventListener("click", closeMenu);
overlay?.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
window.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

// ---------- Hero video play/pause ----------
const heroVideo = document.querySelector(".hero-video");
const videoToggle = document.querySelector(".video-toggle");
const PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>';
const PLAY_ICON = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';

videoToggle?.addEventListener("click", () => {
  if (!heroVideo) return;
  if (heroVideo.paused) {
    heroVideo.play();
    videoToggle.innerHTML = PAUSE_ICON;
  } else {
    heroVideo.pause();
    videoToggle.innerHTML = PLAY_ICON;
  }
});

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// ---------- Accordion ----------
document.querySelectorAll(".acc-q").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.closest(".acc-item");
    const panel = item.querySelector(".acc-a");
    const open = panel.style.maxHeight && panel.style.maxHeight !== "0px";

    item.parentElement.querySelectorAll(".acc-item").forEach((other) => {
      other.querySelector(".acc-a").style.maxHeight = "0px";
      other.querySelector(".sign").textContent = "+";
    });

    if (!open) {
      panel.style.maxHeight = panel.scrollHeight + "px";
      q.querySelector(".sign").textContent = "−";
    }
  });
});

// open the first FAQ item by default
const firstAcc = document.querySelector(".acc-item");
if (firstAcc) {
  const p = firstAcc.querySelector(".acc-a");
  p.style.maxHeight = p.scrollHeight + "px";
  firstAcc.querySelector(".sign").textContent = "−";
}

// ---------- Testimonials ----------
const slides = document.querySelectorAll(".tslide");
const dots = document.querySelectorAll(".dots button");
let tIndex = 0;
let tTimer;

function showTestimonial(i) {
  tIndex = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle("on", n === tIndex));
  dots.forEach((d, n) => d.classList.toggle("on", n === tIndex));
}

if (slides.length) {
  showTestimonial(0);
  dots.forEach((d, n) =>
    d.addEventListener("click", () => {
      showTestimonial(n);
      clearInterval(tTimer);
      tTimer = setInterval(() => showTestimonial(tIndex + 1), 7000);
    })
  );
  tTimer = setInterval(() => showTestimonial(tIndex + 1), 7000);
}

// ---------- Sliders ----------
document.querySelectorAll(".slider-wrap").forEach((wrap) => {
  const track = wrap.querySelector(".slider");
  const step = () => Math.min(track.clientWidth * 0.85, 480);
  wrap.querySelector(".s-prev")?.addEventListener("click", () =>
    track.scrollBy({ left: -step(), behavior: "smooth" })
  );
  wrap.querySelector(".s-next")?.addEventListener("click", () =>
    track.scrollBy({ left: step(), behavior: "smooth" })
  );
});

// ---------- Gallery filters ----------
const filterBtns = document.querySelectorAll(".gal-filters .btn");
filterBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const cat = btn.dataset.filter;
    document.querySelectorAll(".gal-section").forEach((sec) => {
      sec.style.display = cat === "all" || sec.dataset.cat === cat ? "" : "none";
    });
  })
);

// ---------- Lightbox ----------
const lbItems = Array.from(document.querySelectorAll("[data-full]"));
if (lbItems.length) {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lb-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6L6 18"/></svg></button>
    <button class="lb-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 5l-7 7 7 7"/></svg></button>
    <img src="" alt="" />
    <button class="lb-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 5l7 7-7 7"/></svg></button>`;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  let lbIndex = 0;

  const visible = () => lbItems.filter((el) => el.offsetParent !== null);
  const show = (i) => {
    const items = visible();
    if (!items.length) return;
    lbIndex = (i + items.length) % items.length;
    lbImg.src = items[lbIndex].dataset.full;
  };

  lbItems.forEach((el) =>
    el.addEventListener("click", () => {
      lbIndex = visible().indexOf(el);
      show(lbIndex);
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    })
  );

  const close = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", () => show(lbIndex - 1));
  lb.querySelector(".lb-next").addEventListener("click", () => show(lbIndex + 1));
  lb.addEventListener("click", (e) => e.target === lb && close());
  window.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(lbIndex - 1);
    if (e.key === "ArrowRight") show(lbIndex + 1);
  });
}

// ---------- Scroll to top ----------
document.querySelector(".to-top")?.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// ---------- Booking bar ----------
const bookingForm = document.getElementById("booking-bar-form");
if (bookingForm) {
  const checkIn = bookingForm.querySelector("#b-checkin");
  const checkOut = bookingForm.querySelector("#b-checkout");
  const today = new Date().toISOString().split("T")[0];
  if (checkIn) checkIn.min = today;
  if (checkOut) checkOut.min = today;
  checkIn?.addEventListener("change", () => {
    if (checkOut) checkOut.min = checkIn.value || today;
  });

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      villa: bookingForm.querySelector("#b-villa").value,
      checkin: checkIn.value,
      checkout: checkOut.value,
      guests: bookingForm.querySelector("#b-guests").value,
    });
    window.location.href = `reservation.html?${params}`;
  });
}

// ---------- Reservation page ----------
const resForm = document.getElementById("reservation-form");
if (resForm) {
  const p = new URLSearchParams(window.location.search);
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el && val) el.value = val;
  };
  set("r-villa", p.get("villa"));
  set("r-checkin", p.get("checkin"));
  set("r-checkout", p.get("checkout"));
  set("r-guests", p.get("guests"));

  resForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resForm.style.display = "none";
    document.getElementById("reservation-done").style.display = "block";
    window.scrollTo({ top: resForm.offsetTop - 140, behavior: "smooth" });
  });
}

// ---------- Contact form ----------
document.querySelectorAll(".mock-form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("[type=submit]");
    const label = btn.textContent;
    btn.textContent = "Message sent ✓";
    btn.disabled = true;
    form.reset();
    setTimeout(() => {
      btn.textContent = label;
      btn.disabled = false;
    }, 3200);
  });
});
