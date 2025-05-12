function toggleMenu()
{
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open")
    icon.classList.toggle("open")



}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



  const scriptURL = 'https://script.google.com/macros/s/AKfycbzvdVaS5QjLy7_qzGceoPRLuEIJjbM_Tp6A0inZC5t1BSyVfidSQYQxIbK-y5CCCWPpyA/exec'
  const form = document.forms['submit-to-google-sheet']

  const message = document.getElementById("message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "You have sent the message successfully!!"
        setTimeout(function(){
          message.innerHTML = ""
        }, 2300);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector('.title');
  const underline = document.createElement('div');
  underline.classList.add('underline');
  
  // Append the underline element inside the text element
  textElement.appendChild(underline);
  
  // Set the width of the underline to 80% of the text width (adjust as needed)
  const textWidth = textElement.offsetWidth;
  const underlineWidth = textWidth * 0.7;  // 80% of the text width
  underline.style.width = underlineWidth + 'px';
  underline.style.left = (textWidth - underlineWidth) / 2 + 'px';  // Center the underline
});
// var typed = new typed(".text",{
//   Strings: ["Frontend Developer","Freelancer","Tech Enthusiast"],
//   typeSpeed:100,
//   backSpeed:100,
//   backDelay:100,
//   loop:true
// });


// const roles = [
//   "Frontend Developer",
//   "Tech Enthusiast",
//   "Creative Coder"
// ];

// const roleText = document.getElementById("text");
// let index = 0;

// function showNextRole() {
//   roleText.style.opacity = 0;

//   setTimeout(() => {
//     roleText.textContent = roles[index];
//     roleText.style.opacity = 1;
//     index = (index + 1) % roles.length;
//   }, 500);
// }

// setInterval(showNextRole, 2000); // Change every 3s
// showNextRole(); // initial 


const roles = [
  "Frontend Developer",
  "Tech Enthusiast",
  "Creative Coder"
];

const roleText = document.getElementById("text");
let index = 0;

// Measure max width of all roles and set fixed width
const temp = document.createElement("span");
temp.style.visibility = "hidden";
temp.style.position = "absolute";
temp.style.whiteSpace = "nowrap";
temp.style.font = window.getComputedStyle(roleText).font;
document.body.appendChild(temp);

let maxWidth = 0;
roles.forEach(role => {
  temp.textContent = role;
  maxWidth = Math.max(maxWidth, temp.offsetWidth);
});
roleText.style.display = "inline-block";
roleText.style.width = `${maxWidth}px`;

function showNextRole() {
  roleText.style.opacity = 0;

  setTimeout(() => {
    roleText.textContent = roles[index];
    roleText.style.opacity = 1;
    index = (index + 1) % roles.length;
  }, 400);
}

setInterval(showNextRole, 2000);
showNextRole();



let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("certificate-card");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }



  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let manualScroll = false;
  let scrollTimeout;

  // Scrollspy logic
  function setActiveLinkOnScroll() {
    if (manualScroll) return;

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 220;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLinkOnScroll);

  // Manual click detection
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // prevent default to control smooth scroll
      manualScroll = true;

      // Remove active from all, add to clicked one
      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      const offsetTop = target.offsetTop - 80; // adjust for navbar

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Delay re-enabling scroll spy
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        manualScroll = false;
        setActiveLinkOnScroll(); // ensure proper section is active
      }, 1000); // 1 second is usually enough
    });
  });

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// const trailLength = 20;
// const trailColor = "217,104,70"; //RGB values for cyan color
// const trail = [];
// function draw() {
//   ctx.fillStyle = "rgba(0,0,0,0.1)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < trail.length; i++) {
//     const alpha = 1;
//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(trail[i].x, trail[i].y, 8, 0, Math.PI * 2);
//     ctx.fillStyle = `rgba(${trailColor},${alpha})`;
//     ctx.closePath();
//     ctx.fill();
//     ctx.restore();
//   }
//   window.requestAnimationFrame(draw);
// }
// function addTrailPoint(x, y) {
//   trail.push({ x, y });
//   if (trail.length > 1) {
//     trail.shift();
//   }
// }
// let mouseX = 0,
//   mouseY = 0;
// const startDrawing = (e) => {
//   const newX = e.clientX;
//   const newY = e.clientY;
//   addTrailPoint(newX, newY);
//   mouseX = newX;
//   mouseY = newY;
// };
// canvas.addEventListener("mousemove", startDrawing);
// window.onload = () => {
//   window.requestAnimationFrame(draw);
// };



// // Use a more specific event listener
// document.body.addEventListener('mousemove', function(e) {
//   const cursor = document.querySelector('.circle-cursor');
//   if (cursor) { // Ensure element exists
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
//   }
// });


const cursor = document.querySelector(".circle-cursor");
      document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      });

