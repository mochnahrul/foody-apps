import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// Fetch data json
import ("../DATA.json")
.then(({default: jsonData}) => {
  let restaurantData = jsonData["restaurants"];
  let restaurantList = "";
  restaurantData.forEach(restaurant => {
    restaurantList += `
      <article class="restaurant-item">
        <div class="restaurant-item__thumbnail">
          <div class="gradient"></div>
          <img src="${restaurant["pictureId"]}" alt="${restaurant["name"]}">
          <div class="restaurant-item__info">
            <div class="restaurant-item__city">
              <i class="fas fa-map-marker-alt"></i>
              <p>${restaurant["city"]}</p>
            </div>
            <div class="restaurant-item__rating">
              <i class="fas fa-star ${getColor(restaurant["rating"])}"></i>
              <p class="${getColor(restaurant["rating"])}">${restaurant["rating"]}</p>
            </div>
          </div>
        </div>
        <div class="restaurant-item__content">
          <h3 class="restaurant-item__title"><a href="#">${restaurant["name"]}</a></h3>
          <p class="restaurant-item__description">${restaurant["description"]}</p>
        </div>
      </article>
    `;
  });
  document.querySelector(".restaurants").innerHTML = restaurantList;
});

// Rating color
function getColor(vote) {
  if (vote >= 4) {
    return "green";
  } else if (vote >= 3) {
    return "orange";
  } else {
    return "red";
  }
}

// Hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function() {
  const navbar = document.querySelector(".navbar");
  const navLink = document.querySelectorAll(".nav-link");

  if (navbar.style.transform === "scale(1, 1)") {
    navbar.style.transform = "scale(1, 0)";
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.opacity = "0";
      navLink[i].style.transition = "opacity 0.15s ease-in-out";
    }
  } else {
    navbar.style.transform = "scale(1, 1)";
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.opacity = "1";
      navLink[i].style.transition = "opacity 0.25s ease-in-out 0.25s";
    }
  }
})

// Scroll top
const scrollBtn = document.querySelector(".scroll-top");

scrollBtn.addEventListener("click", function() {
  window.scrollTo(0, 0);
})

// Hide scroll button
window.onscroll = function() {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
