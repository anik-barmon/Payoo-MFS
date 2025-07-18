// // Add money to account
// // step 1 add event handler
// document.getElementById("btn-add-money").addEventListener("click", function () {
//   // step 2 get amount
//   const amount = document.getElementById("input-add-money").value;
//   console.log("Amount added:", amount);
//   // step 3 get pin
//   const pin = document.getElementById("input-pin-number").value;
//   console.log("Pin entered:", pin);
//   // step 4 temporary code check
//   if (amount && pin === "1234") {
//     console.log("Money added successfully");
//     // step 5 current  balance

//     const currentBalance = document.getElementById("available-balance");
//     const currentBalanceValue = parseFloat(
//       currentBalance.textContent.replace("$", "")
//     );
//     const newBalance = currentBalanceValue + parseFloat(amount);
//     currentBalance.textContent = `$${newBalance.toFixed(2)}`;
//     // step 6 update the balance in the ui/dom
//     // document.getElementById("input-add-money").value = "";
//     // document.getElementById("input-pin-number").value = "";
//     // alert("Money added successfully");
//     // console.log("New balance:", newBalance);
//   } else {
//     alert("Failed to add money");
//     console.log("Failed to add money");
//   }
// });
// ///
document.getElementById("btn-add-money").addEventListener("click", function () {
  const amount = document.getElementById("input-add-money").value;
  const inputAddMoney = parseFloat(amount);
  const pin = document.getElementById("input-pin-number").value;
  console.log("Amount added:", amount);
  console.log("Pin entered:", pin);
  if (pin === "1234") {
    console.log("Money added successfully");
    const currentBalanceText =
      document.getElementById("available-balance").innerText;
    const currentBalanceValue = parseFloat(currentBalanceText.replace("$", ""));
    const newBalance = currentBalanceValue + inputAddMoney;
    document.getElementById(
      "available-balance"
    ).innerText = `$${newBalance.toFixed(2)}`;
    // console.log("Current Balance:", currentBalanceText);
  } else {
    alert("Failed to add money");
    console.log("Failed to add money");
  }
});
