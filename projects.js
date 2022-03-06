const projectsLeftArea = document.querySelector(".projects-left");
const projectsRightArea = document.querySelector(".projects-right");

// const hoverDiv = document.querySelector(".hover");
// const projectsArea = document.querySelector(".projects-area");

const projects = [
  {
    name: "twitter hr bot",
    description: "it shares my heart rate every 10 minutes",
    link: "https://www.twitter.com/erdmProgramming",
  },
  {
    name: "wordle game",
    description: "word puzzle game exact same as wordle",
    link: "http://www.tech-e.tech/wordle",
  },
  {
    name: "goblins of time",
    description:
      "an event's webpage called 'goblins of time' for twitch streamer swaggybark",
    link: "http://www.tech-e.tech/goblins-of-time",
  },
  {
    name: "snake ai",
    description:
      "kinda snake game but ai plays it, you can see it on top of the page",
    link: "http://www.github.com/erdemylmaz/snake-ai",
  },
];

projects.map((project, index) => {
  let div = document.createElement("a");
  div.className = "project";
  div.href = project.link;
  div.setAttribute("target", "_blank");

  div.innerHTML = `
		<div class="project-title">${project.name}</div>
		<div class="project-about">${project.description}</div>
	`;

  if (index % 2 == 1) {
    projectsRightArea.appendChild(div);
  } else {
    projectsLeftArea.appendChild(div);
  }
});

// onLeave = (e) => {
//   hoverDiv.style.opacity = "0";

//   projectsDivs.forEach((div) => {
//     let title = div.querySelector(".project-title");
//     title.style.color = "#fff";
//   });
// };

// onHover = (e) => {
//   let project = e.currentTarget;

//   let width = project.getBoundingClientRect().width;
//   let height = project.getBoundingClientRect().height;

//   // let posX = project.getBoundingClientRect().x - width;
//   // let posY = project.getBoundingClientRect().y;
//   let posY = project.getBoundingClientRect().y + pageHeight;
//   let posX = project.getBoundingClientRect().x;

//   console.log(posX, posY, pageHeight);

//   hoverDiv.style.opacity = "1";

//   hoverDiv.style.width = `${width}px`;
//   hoverDiv.style.height = `${height}px`;

//   hoverDiv.style.top = `${posY}px`;
//   hoverDiv.style.left = `${posX}px`;

//   projectsDivs.forEach((div) => {
//     let title = div.querySelector(".project-title");
//     if (div == project) {
//       title.style.color = "#000";
//     } else {
//       title.style.color = "#fff";
//     }
//   });
// };

// let projectsDivs = document.querySelectorAll(".project");

// projectsDivs.forEach((projectDiv) => {
//   projectDiv.addEventListener("mouseenter", onHover);
// });

// projectsArea.addEventListener("mouseleave", onLeave);
