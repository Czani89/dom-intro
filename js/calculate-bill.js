var calculatebuttonElement = document.querySelector(".calculateBtn");

var billTotalElement = document.querySelector(".billTotal");

var billStringElement = document.querySelector(".billString");
let billFunction = calcBill();

function calculateBtnClicked() {
  const billString = billStringElement.value;
  console.log(billString);

  let totals = billFunction.calculateBill(billString);

  console.log(totals);

  billTotalElement.innerHTML = billFunction
    .calculateBill(billString)
    .toFixed(2);

  billTotalElement.classList.remove("danger");
  billTotalElement.classList.remove("warning");
  billTotalElement.classList.add(billFunction.setCalcClass(billString));
}
calculatebuttonElement.addEventListener("click", calculateBtnClicked);
