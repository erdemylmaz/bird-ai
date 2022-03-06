const aboutDiv = document.querySelector(".about");
const projectsDiv = document.querySelector(".projects");
// const contactDiv = document.querySelector('.about');
const ery = document.querySelector(".ery");

const aboutLink = document.querySelector(".about-link");
const projectsLink = document.querySelector(".projects-link");
// const contactLink = document.querySelector('.contact-link')

let aboutPosition = aboutDiv.getBoundingClientRect().y;
let projectsPosition = projectsDiv.getBoundingClientRect().y;
// let contactPosition = contactDiv.getBoundingClientRect().y;

aboutLink.addEventListener("click", () => {
  //   let topPosition = aboutDiv.getBoundingClientRect().y;
  //   console.log(topPosition);

  window.scrollTo({
    top: aboutPosition,
  });
});

projectsLink.addEventListener("click", () => {
  //   let topPosition = projectsDiv.getBoundingClientRect().y;

  window.scrollTo({
    top: projectsPosition,
  });
});

ery.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

// contactLink.addEventListener("click", () => {
//   let topPosition = contactDiv.getBoundingClientRect().top;

//   window.scrollTo({
//     top: contactPosition,
//   });
// });
