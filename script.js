let startingCount = 0;
let countBy = 1;
let negNum = false;

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const startingCountUI = document.querySelector("#current-count");
const countByUI = document.querySelector("#count-by");
startingCountUI.textContent = startingCount;
countByUI.textContent = countBy;

plus.addEventListener("click", e =>{
    startingCount += countBy;
    startingCountUI.textContent = startingCount;
});

minus.addEventListener("click", e =>{
    if(!negNum && startingCount === 0) return;
    startingCount -= countBy;
    startingCountUI.textContent = startingCount;
})



