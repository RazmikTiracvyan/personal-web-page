// menu part

const MENU_ITEMS = [
  { inner: "Home", href:'#about' },
  { inner: "Skills", href:'#skills' },
  { inner: "Portfolio", href:'#portfolio' },
  { inner: "Contact", href:'#contact' },
];

MENU_ITEMS.forEach((e) => {
  document.getElementById("right_part").innerHTML += `
            <a class="menu_items" href='${e.href}'>
                ${e.inner}
                <div class="line_under"></div>
            </a>
    `;
});

// icons part

const ICONS = [
  {
    icon: '<i class="fab fa-facebook-f"></i>',
    link: "https://www.facebook.com/profile.php?id=100009501771824",
  },
  {
    icon: '<i class="fab fa-linkedin-in"></i>',
    link: "https://www.linkedin.com/in/razmik-tiratsvyan-a15254265/",
  },
  {
    icon: '<i class="fab fa-instagram"></i>',
    link: "https://www.instagram.com/",
  },
  { icon: '<i class="fab fa-twitter"></i>', link: "https://x.com/?lang=en" },
];

ICONS.forEach((e) => {
  document.getElementById("icons_part").innerHTML += `
            <a href='${e.link}' target='blank'>
                <div class="link_to_social">${e.icon}</div>
            </a>
      `;
});

// responsive opening menu

let open_responsive = false;

MENU_ITEMS.forEach((e) => {
  document.getElementById("rm").innerHTML += `
              <div class="menu_items">
                  ${e.inner}
              </div>
      `;
});

document.getElementById("m2").addEventListener("click", () => {
  open_responsive = !open_responsive;
  if (open_responsive) document.getElementById("rm").style.height = "100vh";
  else document.getElementById("rm").style.height = "0";
});

// skills

const SKILLS = [
  { inner: "HTML/CSS", image: "htmlcss.png" },
  { inner: "JavaScript", image: "js.png" },
  { inner: "React JS (Next JS)", image: "react.png" },
  { inner: "Redux", image: "redux.png" },
  { inner: "Node JS (Express JS)", image: "node.png" },
  { inner: "Mongo DB", image: "mongodb.png" },
  { inner: "SQL", image: "sql.png" },
];

SKILLS.forEach((e) => {
  document.getElementById("flexed_skills").innerHTML += `
            <div class="mini_card">
                <img src='../static/${e.image}' width="70%">
                <div class="skill_name">${e.inner}</div>
            </div>
    `;
});

// portfolio

const PORTFOLIO = [
  {
    inner: "R'SOFT Web",
    image: "rsoft.png",
    width: "80%",
    href: "https://www.rsoft.am/",
  },
  {
    inner: "Mayyan Art",
    image: "mayyan.png",
    width: "130%",
    href: "https://mayyanart.com/",
  },
  {
    inner: "Faustova",
    image: "faustova.png",
    width: "130%",
    href: "https://faustovaclinic.com/",
  },
  {
    inner: "Redux",
    image: "ecomotors.png",
    width: "80%",
    href: "https://ecomotors.am/",
  },
];

PORTFOLIO.forEach((e) => {
  document.getElementById("flexed_portfolio").innerHTML += `
      <a href='${e.href}' target='blank'>
            <div class="mini_card2">
                <img src='../static/${e.image}' width='100%' height='100%'>
            </div>
      </a>
    `;
});

// contact icons

const CONTACT_ICONS = [
  {
    icon: '<i class="fab fa-facebook-f"></i>',
    link: "Raz Tiracvyan",
  },
  {
    icon: '<i class="fab fa-linkedin-in"></i>',
    link: "Razmik Tiratsvyan",
  },
  {
    icon: '<i class="fab fa-instagram"></i>',
    link: "raztiracvyan",
  },
  {
    icon: '<i class="fas fa-phone-alt"></i>',
    link: "+374 55710208",
  },
  {
    icon: '<i class="fas fa-envelope"></i>',
    link: "raztiracvyan1@gmail.com",
  },
  {
    icon: '<i class="fab fa-telegram-plane"></i>',
    link: "@raztiracvyan",
  },
];

CONTACT_ICONS.forEach((e) => {
  document.getElementById("contact_info").innerHTML += `
    <div class='item_contact'><span class='icon_contact'>${e.icon}</span> <span>${e.link}</span></div>
  `;
});


//////


// Add animations when elements come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } 
  );

  elements.forEach((el) => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", animateOnScroll);




document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("div[id]");
  const menuItems = document.querySelectorAll(".menu_items");

  let currentSectionId = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  menuItems.forEach((item) => {
    if (item.getAttribute("href") === `#${currentSectionId}`) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
