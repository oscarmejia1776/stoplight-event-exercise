//create stop, slow and go button variables
let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

//create stop, slow and go light variables
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

//create bulbOn variable for each light and set equal to false.
let redBulbOn = false;
let yellowBulbOn = false;
let greenBulbOn = false;

//define the functions for all three lights that will toggle the specific class list on or off when the function is called.
let redLight = function () {
  stopLight.classList.toggle("stop");

  //set bulbOn variable to !bulbOn to switch between true and false.
  redBulbOn = !redBulbOn;

  //Set conditional that logs `"<specific button.textContent> bulb on"` to the console if true, else `"<specific button.textContent> bulb off"` if false.
  if (redBulbOn) {
    console.log(`${stopButton.textContent} bulb on`);
  } else {
    console.log(`${stopButton.textContent} bulb off`);
  }
};

//repeat for other lights
let yellowLight = function () {
  slowLight.classList.toggle("slow");
  yellowBulbOn = !yellowBulbOn;
  if (yellowBulbOn) {
    console.log(`${slowButton.textContent} bulb on`);
  } else {
    console.log(`${slowButton.textContent} bulb off`);
  }
};

let greenLight = function () {
  goLight.classList.toggle("go");
  greenBulbOn = !greenBulbOn;
  if (greenBulbOn) {
    console.log(`${goButton.textContent} bulb on`);
  } else {
    console.log(`${goButton.textContent} bulb off`);
  }
};

//add event listeners to each button and use the color specific variable as the function and "click" as the event
stopButton.addEventListener("click", redLight);
slowButton.addEventListener("click", yellowLight);
goButton.addEventListener("click", greenLight);

//create variable that targets all the buttons
let buttons = document.querySelectorAll(".button");

//iterate through all of the buttons using a forEach loop
buttons.forEach(function (buttons) {
  // add an eventListener for "mouseenter" that logs to the console `Entered <buttons.textContent> button`
  buttons.addEventListener("mouseenter", function () {
    console.log(`Entered ${buttons.textContent} button`);
  });
});

//iterate through all of the buttons using a forEach loop
buttons.forEach(function (buttons) {
  // add an eventListener for "mouseleave" that logs to the console `Entered <buttons.textContent> button`
  buttons.addEventListener("mouseleave", function () {
    console.log(`Left ${buttons.textContent} button`);
  });
});
