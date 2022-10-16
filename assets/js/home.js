var page = window.location.pathname.split("/").pop(),
   page = page.split(".html").shift();

const getElement = (element) => document.querySelector(element);

if (page == "index" || page == "") {
   document.addEventListener("DOMContentLoaded", () => {
      setBrand();

      getElement(".search-toggle").addEventListener("click", () => {
         getElement("html").style.overflowY = "hidden";
         getElement("body").classList.add("p-0");
      });
      getElement(".btn-modal").addEventListener("click", () => {
         getElement("html").style.overflowY = "auto";
      });
   });
   document.addEventListener("scroll", () => {
      setBrand();
      getScrollPosition();
   });
}

function setBrand() {
   if (window.innerWidth > 576) {
      getElement(".nav-brand").classList.remove("d-none");
   } else {
      getElement(".nav-brand").classList.add("d-none");
      getElement(".nav-toggler-open").classList.add("ms-auto");
   }
}

var scrollObject = {};
window.onscroll = getScrollPosition;
function getScrollPosition() {
   scrollObject = {
      x: window.pageXOffset,
      y: window.pageYOffset,
   };
   if (scrollObject.y > 180) {
      getElement("nav").style.background = "linear-gradient(315deg, #292e38, #343d50)";
      getElement("nav").classList.add("shadow");
      getElement(".nav-brand").classList.remove("d-none");
   } else {
      getElement("nav").style.background = "transparent";
      getElement("nav").classList.remove("shadow");
   }
}
