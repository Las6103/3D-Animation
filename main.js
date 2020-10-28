// DOM Elements
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const shoe = document.querySelector(".shoe img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");



// Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(150px)";
  shoe.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Reset
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback
  title.style.transform = "translateZ(0px)";
  shoe.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});

// GyroScope
// let gyroscope = new Gyroscope({frequency: 60});

// gyroscope.addEventListener('reading', e => {
//   console.log("Angular velocity along the X-axis " + gyroscope.x);
//   console.log("Angular velocity along the Y-axis " + gyroscope.y);
//   console.log("Angular velocity along the Z-axis " + gyroscope.z);
//   title.innerHTML = `testing this shit ${gyroscope.x}`
// });
// gyroscope.start();

