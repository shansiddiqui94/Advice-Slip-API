import axios from "axios";
const button = document.getElementById("message");

function advice(random) {
  const url = `https://api.adviceslip.com/advice`;
  axios
    .get(url)
    .then(function (response) {
      let resp = response.data.slip.advice;

      document.getElementById("random").innerText = `${resp}`;

      console.log(response);
    })
    .catch(function (error) {
      const messageElement = document.getElementById("error");
      messageElement.innerText = error;
      messageElement.style.color = "black";
    });
}
window.onload = function () {
  document.getElementById("message").onclick = function () {
    advice(random);
  };
};
