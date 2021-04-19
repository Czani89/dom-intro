function calcBill() {
  function calculateBill(bill) {
    var total = 0;
    var billItems = bill.split(",");

    for (let i = 0; i < billItems.length; i++) {
      var billType = billItems[i].trim();
      if (billType === "call") {
        total += 2.75;
      }
      if (billType === "sms") {
        total += 0.75;
      }
    }
    return total;
  }

  function setCalcClass(bill) {
    if (calculateBill(bill) >= 20 && calculateBill(bill) < 30) {
      return "warning";
    } else if (calculateBill(bill) >= 30) {
      return "danger";
    }
  }

  return {
    calculateBill,

    setCalcClass,
  };
}
