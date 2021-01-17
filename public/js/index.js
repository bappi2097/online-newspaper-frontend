window.onscroll = function () { myFunction() };

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
document.querySelector("#date").innerText = event.toLocaleDateString('bn-BD', options);

function tabChanged(e, tab_no) {
      let nav_tabs = document.querySelectorAll('.nav-tab');
      let tabs = document.querySelectorAll('.tab');
      for (nav_tab of nav_tabs) {
            nav_tab.classList.remove('border-b-4');
            nav_tab.classList.remove('border-red-400');
      }
      e.classList.add('border-b-4');
      e.classList.add('border-red-400');
      for (tab of tabs) {
            tab.classList.add('hidden');
      }
      document.querySelector('#tab-' + tab_no).classList.remove('hidden');
}