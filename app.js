const getAdviceButton = document.getElementById("get-advice");
const adviceCounter = document.getElementById("advice-counter");

let count = 0;

function incrementCounter() {
  count++;
  adviceCounter.textContent = `advice #${count}`;
}

getAdviceButton.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())

    .then((data) => {
      const adviceText = document.getElementById("advice-text");
      adviceText.textContent = data.slip.advice;
    })

    .catch((error) => {
      console.error(error);
    });
    incrementCounter()
});
