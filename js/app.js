let menu = document.querySelector(".menu")
let togBtn = document.querySelector("#toggler")

togBtn.addEventListener("click", function() {
    menu.classList.toggle("active");
});


/* progress bar logic */
const cirProgress = document.querySelectorAll(".progress"); // target all progress classes

Array.from(cirProgress).forEach(item => {
    const proVal = item.getAttribute("data-value"); // read value from data-value attribute
    console.log(`proVal =`, proVal); // print the values in console

    const pro = item.querySelector(".pro-val"); // target pro-val class

    let startVal = 0; // starting value
    let endVal = Number(proVal); // ending value
    let speed = 50; // timer speed

    // timer
    const progress = setInterval(() => {
        startVal++; // increment the start value by 1
        pro.textContent = `${startVal}%`; // display the start value in circle
        pro.style.color = `black`; // value color 

        // adding background colors to each progress circle
        item.style.background = `conic-gradient(orange ${startVal * 3.6}deg,deepskyblue 0deg)`;

        // if start value reaches end value stop the timer
        if (startVal === endVal) {
            clearInterval(progress); // to clear the timer
        }
    }, speed);
});
document.querySelector(".yr").innerText = new DataTransfer().getFullYear();