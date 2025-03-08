// //// ELEMENTS

const learnMoreBtn = document.querySelector(".learn");
const milestones = document.querySelector(".key-milestones");
const milestonesbtn = document.getElementById("milestones");
const storiesbtn = document.getElementById("stories1");
const headerStories = document.querySelector(".header-stories");
const change = document.querySelector(".java");

// ARRAY
let index = 0;
const words = [
  "future!",
  "community!",
  "society!",
  "generation!",
  "economy!",
  "family!",
  "environment!",
  "workplace!",
];

// EVENT LISTENERS
learnMoreBtn.addEventListener("click", function () {
  milestones.scrollIntoView({
    behavior: "smooth",
  });
});

milestonesbtn.addEventListener("click", function () {
  milestones.scrollIntoView({
    behavior: "smooth",
  });
});

storiesbtn.addEventListener("click", function () {
  headerStories.scrollIntoView({
    behavior: "smooth",
  });
});

// learnMoreBtn.textContent = "LEARN MORE";
const changer = function () {
  setInterval(() => {
    change.textContent = words[index].toUpperCase();
    index += 1 % words.length;
    if (index === words.length - 1) {
      index = 0;
    }
  }, 3000);
};

changer();

//  swiper component

const swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  observer: true, // Detects changes
  observeParents: true, // Watches for changes in parent elements
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
