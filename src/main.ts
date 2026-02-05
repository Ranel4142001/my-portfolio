/**
 * ===============================
 * MOBILE NAVIGATION TOGGLE
 * Keeps hamburger icon & menu state in sync
 * ===============================
 */
const mobileToggle = document.querySelector(
  ".mobile-toggle",
) as HTMLButtonElement;
const navLinks = document.querySelector(".nav-links") as HTMLUListElement;
const progressBar = document.getElementById("progressBar") as HTMLElement;

/**
 * Toggle mobile menu open / close
 */
const toggleMenu = (isOpen: boolean) => {
  if (!mobileToggle || !navLinks) return;

  navLinks.classList.toggle("active", isOpen);
  const spans = mobileToggle.querySelectorAll("span");

  if (isOpen) {
    // Transform hamburger into X
    (spans[0] as HTMLElement).style.transform =
      "rotate(45deg) translate(5px, 5px)";
    (spans[1] as HTMLElement).style.opacity = "0";
    (spans[2] as HTMLElement).style.transform =
      "rotate(-45deg) translate(7px, -7px)";
  } else {
    // Reset hamburger icon
    spans.forEach((span) => ((span as HTMLElement).style.transform = "none"));
    (spans[1] as HTMLElement).style.opacity = "1";
  }
};

// Toggle menu on button click
mobileToggle?.addEventListener("click", () => {
  const isOpening = !navLinks.classList.contains("active");
  toggleMenu(isOpening);
});

// Close menu when a nav link is clicked
document.querySelectorAll<HTMLAnchorElement>(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

/**
 * ===============================
 * INTERSECTION OBSERVER – REVEAL ANIMATIONS
 * Replays animation on scroll UP and DOWN
 * ===============================
 */
const observerOptions: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

/**
 * Reveal observer callback
 */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;

    if (entry.isIntersecting) {
      // Animate IN
      target.style.opacity = "1";
      target.style.transform =
        "translateZ(0) translateX(0) translateY(0) rotateX(0) rotateY(0)";
      target.style.filter = "blur(0)";

      // Add floating animation after reveal finishes
      target.addEventListener(
        "transitionend",
        () => {
          if (
            target.classList.contains("project-card") ||
            target.classList.contains("stat-card")
          ) {
            target.classList.add("floating");
          }
        },
        { once: true },
      );
    } else {
      // Animate OUT (when scrolling back up)
      target.classList.remove("floating");
      target.style.opacity = "0";
      target.style.filter = "blur(10px)";

      // Reset transform based on direction
      const direction = target.dataset.direction;

      switch (direction) {
        case "left":
          target.style.transform = "translateX(-80px)";
          break;
        case "right":
          target.style.transform = "translateX(80px)";
          break;
        case "bottom":
          target.style.transform = "translateY(80px)";
          break;
        case "zoom":
          target.style.transform = "scale(0.8)";
          break;
        default:
          target.style.transform = "translateY(40px)";
      }
    }
  });
}, observerOptions);

/**
 * ===============================
 * INITIALIZE REVEAL ELEMENTS
 * Assigns direction + observes them
 * ===============================
 */
const elementsToReveal = document.querySelectorAll<HTMLElement>(
  "section, .project-card, .skill-category, .stat-card",
);

const directions = ["left", "right", "bottom", "zoom"];

elementsToReveal.forEach((el, index) => {
  // Base hidden state
  el.classList.add("reveal-hidden");

  // Assign entry direction
  const dir = directions[index % directions.length];
  el.dataset.direction = dir;

  // Initial transform setup
  switch (dir) {
    case "left":
      el.style.transform = "translateX(-80px)";
      break;
    case "right":
      el.style.transform = "translateX(80px)";
      break;
    case "bottom":
      el.style.transform = "translateY(80px)";
      break;
    case "zoom":
      el.style.transform = "scale(0.8)";
      break;
  }

  el.style.opacity = "0";
  el.style.filter = "blur(10px)";

  // Start observing
  revealObserver.observe(el);
});

/**
 * ===============================
 * SCROLL EVENTS
 * Progress bar, nav active state, hero parallax
 * ===============================
 */
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;

  /**
   * Scroll progress bar
   */
  if (progressBar) {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    progressBar.style.width = `${(scrolled / height) * 100}%`;
  }

  /**
   * Active nav link highlighting
   */
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const id = section.getAttribute("id");

    const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (scrolled > sectionTop && scrolled <= sectionTop + sectionHeight) {
      navLink?.classList.add("active");
    } else {
      navLink?.classList.remove("active");
    }
  });

  /**
   * Hero parallax + fade effect
   */
  const heroContent = document.querySelector(".hero-content") as HTMLElement;
  if (heroContent && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
    heroContent.style.opacity = `${1 - scrolled / 600}`;
  }
});

/**
 * ===============================
 * SMOOTH SCROLL FOR ANCHOR LINKS
 * ===============================
 */
document
  .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
  .forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(
        anchor.getAttribute("href") || "",
      ) as HTMLElement;

      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: "smooth",
        });
      }
    });
  });

/**
 * ===============================
 * CV DOWNLOAD HANDLER
 * ===============================
 */
const handleDownload = () => {
  window.open("/Ranel_Dahil_CV.pdf", "_blank");
};

document
  .getElementById("downloadBtn")
  ?.addEventListener("click", handleDownload);
document
  .getElementById("heroDownloadBtn")
  ?.addEventListener("click", handleDownload);

/**
 * ===============================
 * CONTACT FORM HANDLING
 * ===============================
 */
const contactForm = document.querySelector(".contact-form") as HTMLFormElement;

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  console.log("Form Data:", Object.fromEntries(formData));

  alert("Thank you! Your message has been sent successfully.");
  contactForm.reset();
});

export {};
