const submitButton = document.querySelector(".sub-btn");

const form = document.getElementById("form");

const emailInput = document.querySelector("#emailInput");

const errorImage = document.getElementById("error-img");

const faildAlert = document.getElementById("alert-fail");

const successAlert = document.getElementById("alert-success");

function showElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

//1- first we have 2 element with the class of hidden that dont show up
// -and also we have an element that shows up only if the test passes on
//2- we should first delete classname of hidden
//3- then we have to have a timeout to
//4- change the visibility again to hidden by adding classname of hidden

const validateEmail = (e) => {
  const email = emailInput.value;
  const emailValidation =
    /^(?:[a-z0-9.]){2,30}@{1}(?:[a-z0-9-]){2,30}\.{1}(?:[a-z0-9]){2,3}(?:\.(?:[a-z0-9]){2,3})?$/;
  if (!emailValidation.test(email)) {
    console.log("hi");

    showElement(errorImage);
    showElement(faildAlert);

    setTimeout(hideElement, 3000, errorImage);
    setTimeout(hideElement, 3000, faildAlert);

    console.log("this after that");
  } else {
    console.log("hello");
    showElement(successAlert);

    setTimeout(hideElement, 5000, successAlert);
    emailInput.value = "";
  }
  //basicaly this function and this if statement looks up the validation of email and if written input passses the test (i dont know about this test thing, i just blindcopied this part from my friend -Vanza- from frontend-Mentor) then it shows the thank you message and also the input value gets formatted
  //but if it doesnt pass the test, then we have to elements that will show on the screen that both had a class of hidden and then after 3 seconds they disspear from screen again

  //one of the things that i wanted to add but i couldnt was to add a transition to this appearing and disappearing element on the screen but i will definetly look up for a solution for that
  // i think its because i just delete a classname and dont change it from something to something else. so maybe ill try to change the classname attribute instead of removing or adding to it
};

form.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();
  validateEmail();
});

//special thanks to my friend Vanza who i learned a lot from his work and code. i always look up to his codebase when i struggle in a situation and most of the time he has an answer for me
