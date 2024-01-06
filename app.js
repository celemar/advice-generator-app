const getAdviceButton = document.getElementById("get-advice");
const adviceCounter = document.getElementById("advice-counter");

function fetchAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceText = document.getElementById("advice-text");
      adviceText.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.error(error);
    });
}

window.addEventListener("load", fetchAdvice);
getAdviceButton.addEventListener("click", () => {
  fetchAdvice()
  const randomCount = Math.floor(Math.random() * 999);
  adviceCounter.textContent = `Advice #${randomCount}`;
});