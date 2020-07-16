const filmList = $("#film-list");

const container = document.createElement("div");
container.setAttribute("class", "container");

filmList.append(container);

const slider = document.getElementsByClassName("slider");

var request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
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

      const slide = document.createElement("div");
      slide.setAttribute("class", "slider__item");

      container.appendChild(card);
      card.appendChild(h3);
      card.appendChild(p);
    });
  } else {
    console.log("error");
  }
};

request.send();
sliderInit();

// Slick Slider ----
function sliderInit() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
}
