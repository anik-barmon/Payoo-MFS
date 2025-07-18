document
  .getElementById("btn-cash-out-money")
  .addEventListener("click", function () {
    const amount = document.getElementById("input-cash-out-money").value;
    const inputCashOutMoney = parseFloat(amount);
    const pin = document.getElementById("input-cash-out-pin-number").value;
    console.log("Cash Out Amount:", amount);
    console.log("Pin entered:", pin);
    if (pin === "1234") {
      console.log("Processing cash out...");
      const currentBalanceText =
        document.getElementById("available-balance").innerText;
      const currentBalanceValue = parseFloat(
        currentBalanceText.replace("$", "")
      );
      const newBalance = currentBalanceValue - inputCashOutMoney;
      document.getElementById(
        "available-balance"
      ).innerText = `$${newBalance.toFixed(2)}`;
      console.log("Cash Out Successful. New Balance:", newBalance.toFixed(2));
      //   console.log("Current Balance:", currentBalanceText);
    } else {
      alert("Failed to cash out money");
      console.log("Failed to cash out money");
    }
  });
