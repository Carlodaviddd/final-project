//Highlight the current active page
//https://www.geeksforgeeks.org/how-to-make-active-navbar-in-html-css-and-javascript/
const currentPage = window.location.pathname.split("/").pop();
const links = document.querySelectorAll(".navbar a");

for (let i = 0; i < links.length; i++) {
  if (links[i].getAttribute("href") === currentPage) {
    links[i].classList.add("active");
    break;
  }
}
