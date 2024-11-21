const adviceId = document.querySelector(".adviceId");
const adviceCont = document.querySelector(".adviceContent p");
const quotes = document.querySelector(".quotes");

function getAdvice(apiLink) {
  const myRequest = new XMLHttpRequest();
  myRequest.onload = () => {
    if (myRequest.status === 200 && myRequest.readyState === 4) {
      let data = myRequest.responseText;
      console.log(JSON.parse(data));
      let randomAdvice = Math.floor(Math.random() * JSON.parse(data).length);
      adviceId.innerHTML = "#" + JSON.parse(data).slip.id;
      adviceCont.innerHTML = `" ${JSON.parse(data).slip.advice} "`;
    }
  };
  myRequest.open("GET", apiLink);
  myRequest.send();
}

document.querySelector(".dice").onclick = function (e) {
  getAdvice("https://api.adviceslip.com/advice");
};

getAdvice("https://api.adviceslip.com/advice");
