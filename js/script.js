// Slick Slider ----
$(".slider").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 3000,
});

const app = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h3 = document.createElement("h3");
      h3.textContent = movie.title;

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 299);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
    });
  } else {
    console.log("error");
  }
};

request.send();
