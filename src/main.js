import "./style.css";

// Header scroll state
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 40);
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
navToggle?.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => document.body.classList.remove("menu-open"))
);

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el, i) => {
    el.style.setProperty("--i", i % 8);
    io.observe(el);
  });
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// Active nav link
const path = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a[data-nav]").forEach((a) => {
  if (a.getAttribute("data-nav") === path) a.classList.add("active");
});

// ---------- Gallery lightbox ----------
const galleryItems = Array.from(document.querySelectorAll("[data-lightbox]"));
if (galleryItems.length) {
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = `
    <button class="lightbox-close" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <button class="lightbox-nav prev" aria-label="Previous">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><path d="M15 5l-7 7 7 7"/></svg>
    </button>
    <img src="" alt="" />
    <button class="lightbox-nav next" aria-label="Next">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="20" height="20"><path d="M9 5l7 7-7 7"/></svg>
    </button>
    <div class="lightbox-caption"></div>
  `;
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  const lbCap = lb.querySelector(".lightbox-caption");
  let current = 0;

  const visible = () => galleryItems.filter((el) => el.offsetParent !== null);

  const show = (i) => {
    const items = visible();
    if (!items.length) return;
    current = (i + items.length) % items.length;
    const el = items[current];
    lbImg.src = el.getAttribute("data-full") || el.querySelector("img").src;
    lbCap.textContent = el.getAttribute("data-caption") || "";
  };

  galleryItems.forEach((el) => {
    el.addEventListener("click", () => {
      const items = visible();
      current = items.indexOf(el);
      show(current);
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };

  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });
  lb.querySelector(".prev").addEventListener("click", () => show(current - 1));
  lb.querySelector(".next").addEventListener("click", () => show(current + 1));
  window.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}

// ---------- Gallery filters ----------
const filterBtns = document.querySelectorAll(".filter-btn");
if (filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-filter");
      document.querySelectorAll(".gallery-item").forEach((item) => {
        const match = cat === "all" || item.getAttribute("data-cat") === cat;
        item.style.display = match ? "" : "none";
      });
    });
  });
}

// ---------- Facade video embeds (click to load YouTube) ----------
document.querySelectorAll(".video-feature[data-yt]").forEach((el) => {
  el.addEventListener("click", function activate() {
    const id = el.getAttribute("data-yt");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    el.innerHTML = "";
    el.appendChild(iframe);
    el.removeEventListener("click", activate);
  });
});

// ---------- Booking form ----------
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  const villaSelect = document.getElementById("villa-select");
  const checkIn = document.getElementById("check-in");
  const checkOut = document.getElementById("check-out");
  const guestsInput = document.getElementById("guests-input");
  const nightsEl = document.getElementById("summary-nights");
  const totalEl = document.getElementById("summary-total");
  const villaNameEl = document.getElementById("summary-villa");
  const villaThumb = document.getElementById("summary-thumb-img");

  const villaData = {
    sunset: { name: "Sunset Villa", price: 480, img: villaSelect?.querySelector('[value="sunset"]')?.dataset.img },
    aegean: { name: "Aegean Suite", price: 360, img: villaSelect?.querySelector('[value="aegean"]')?.dataset.img },
    olive: { name: "Olive Grove Residence", price: 620, img: villaSelect?.querySelector('[value="olive"]')?.dataset.img },
  };

  const today = new Date();
  const iso = (d) => d.toISOString().split("T")[0];
  if (checkIn && !checkIn.value) {
    const inD = new Date(today);
    inD.setDate(inD.getDate() + 14);
    checkIn.value = iso(inD);
  }
  if (checkOut && !checkOut.value) {
    const outD = new Date(today);
    outD.setDate(outD.getDate() + 18);
    checkOut.value = iso(outD);
  }
  if (checkIn) checkIn.min = iso(today);

  function updateSummary() {
    const villa = villaData[villaSelect?.value] || villaData.sunset;
    if (villaNameEl) villaNameEl.textContent = villa.name;
    if (villaThumb && villa.img) villaThumb.src = villa.img;

    let nights = 3;
    if (checkIn?.value && checkOut?.value) {
      const inD = new Date(checkIn.value);
      const outD = new Date(checkOut.value);
      const diff = Math.round((outD - inD) / 86400000);
      nights = diff > 0 ? diff : 0;
      if (diff <= 0 && checkOut) {
        const fixed = new Date(inD);
        fixed.setDate(fixed.getDate() + 1);
        checkOut.value = iso(fixed);
        nights = 1;
      }
    }
    if (nightsEl) nightsEl.textContent = `${nights} night${nights === 1 ? "" : "s"}`;
    if (totalEl) totalEl.textContent = `€${(nights * villa.price).toLocaleString()}`;
  }

  [villaSelect, checkIn, checkOut].forEach((el) => el?.addEventListener("change", updateSummary));

  document.querySelectorAll(".stepper").forEach((stepper) => {
    const input = stepper.querySelector("input");
    stepper.querySelector(".minus")?.addEventListener("click", () => {
      input.value = Math.max(1, parseInt(input.value || "1", 10) - 1);
    });
    stepper.querySelector(".plus")?.addEventListener("click", () => {
      input.value = Math.min(12, parseInt(input.value || "1", 10) + 1);
    });
  });

  updateSummary();

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    bookingForm.style.display = "none";
    document.querySelector(".booking-sidebar")?.style.setProperty("display", "none");
    const successPanel = document.getElementById("booking-success");
    successPanel?.classList.add("show");
    successPanel?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

// ---------- Contact form (mock) ----------
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector("button[type=submit]");
    const original = btn.textContent;
    btn.textContent = "Message sent ✓";
    btn.disabled = true;
    contactForm.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 3200);
  });
}
