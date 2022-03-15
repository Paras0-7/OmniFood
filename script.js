const yearEl = document.querySelector(".year");
// sticky nav - bar

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-90px",
};

const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky");
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

// smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
      // const sectionCoords = section.getBoundingClientRect();
      // console.log(sectionCoords);
      // window.scrollTo(
      //   sectionCoords.left,
      //   window.pageYOffset + sectionCoords.top
      // );
      header.classList.remove("nav-open");
    }
  });
});
