window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.add("top-0");
  } else {
        navbar.classList.remove("sticky");
        navbar.classList.remove("top-0");
    }
}
const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.querySelector("#date").innerText=event.toLocaleDateString('bn-BD', options);