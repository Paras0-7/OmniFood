const yearEl = document.querySelector(".year");
// sticky nav - bar

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-96px",
};

const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(obsCallback, options);
observer.observe(document.querySelector(".section-hero"));

//  mobile navigation

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function (e) {
  header.classList.toggle("nav-open");
});
