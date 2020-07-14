// Slick Slider
$(".slider").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 5,
  autoplay: true,
  autoplaySpeed: 3000,
});

let ghibliData, userInput;

const $title = $(".title");
const $description = $(".description");
const $release = $(".release");
const $input = $("option");

$("form").on("submit", handleGetData);
function handleGetData(event) {
  event.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `https://ghibliapi.herokuapp.com/films/${userInput}`,
  }).then(
    (data) => {
      console.log(data);
      filmData = data;
      render();
    },
    (error) => {
      console.log("ERROR IS ", error);
    }
  );
}

function render() {
  $title.html(filmData.title);
  $description.html(filmData.description);
  $release.html(filmData.release_date);
}

// const container = $(".slider");

// var request = new XMLHttpRequest();
// request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);
//   if (request.status >= 200 && request.status < 400) {
//     data.forEach((movie) => {
//       render();
//     });
//   } else {
//     alert("OH NO");
//   }
// };

// request.send();

// function render() {
//   var card = $(
//     `<div class="slider__item"><img src="https://www.gstatic.com/tv/thumb/v22vodart/29914/p29914_v_v8_af.jpg" /></div>"`
//   );
//   $(container).append(card);
// }
