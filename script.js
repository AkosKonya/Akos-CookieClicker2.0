let score = 0; // Sparar spelarens poäng och börjar på 0
let pointsPerClick = 1; // Bestämmer hur många poäng varje klick ger
const scoreElement = document.getElementById("score"); // Hämtar elementet som visar poängen
const clickTarget = document.getElementById("click-target"); // Hämtar knappen som spelaren klickar på
const pointsPerClickElement = document.getElementById("points-per-click"); // Hämtar elementet som visar poäng per klick
const messageArea = document.getElementById("message-area"); // Hämtar området där meddelanden visas
function updateDisplay() // Skapar en funktion som uppdaterar informationen på sidan
{ 
    scoreElement.textContent = score; // Visar spelarens aktuella poäng
    pointsPerClickElement.textContent = pointsPerClick; // Visar hur många poäng varje klick ger
}
function handleClick() // Skapar en funktion som körs när spelaren klickar
{ 
    score += pointsPerClick; // Ökar poängen med värdet i pointsPerClick
    updateDisplay(); // Uppdaterar poängen på webbsidan
    messageArea.textContent = "+" + pointsPerClick; // Visar hur många poäng spelaren fick
}
clickTarget.addEventListener("click", handleClick); // Lyssnar efter klick och kör handleClick när knappen trycks
updateDisplay(); // Uppdaterar sidan direkt när spelet startar