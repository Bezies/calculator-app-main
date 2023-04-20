
// TOGGLE 

const buttons = document.getElementsByClassName("button");
const arr = [...buttons];
const main = document.querySelector("main");

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
        main.classList.add("theme1");
        main.classList.remove("theme2");
        main.classList.remove("theme3");
    } else if (index == 1) {
        main.classList.add("theme2");
        main.classList.remove("theme1");
        main.classList.remove("theme3");
    } else {
        main.classList.add("theme3")
        main.classList.remove("theme2");
        main.classList.remove("theme1");
    }
 
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});





// CALCULATOR 



// AJOUT CHIFFRES 
let numbers = [];

const result = document.querySelector("#screen-result");



// NOMBRE 1
const keysNumbers = document.querySelectorAll(".keys");

keysNumbers.forEach((element) => {

        element.addEventListener("click", () => {
            numbers.push(element.innerHTML);
            result.innerHTML = numbers.join('');
        })
})







// DELETE 

const del = document.querySelector("#delete");

    del.addEventListener("click", () => {
        let poped = numbers.pop();
        result.innerHTML = numbers.join('');
    }) 




// EGAL 
const egal = document.querySelector("#egal")

egal.addEventListener("click", () => {
    let screen = numbers.join('')
    result.innerHTML = (eval(screen.replace("x", "*"))).toFixed(2);
    numbers = [];
})




// RESET 
const reset = document.querySelector("#reset")

    reset.addEventListener("click", () => {
        numbers = [];
        result.innerHTML = ""
    })


