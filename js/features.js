document.getElementById("show-cash-out").addEventListener("click", function () {
  document.querySelector(".card-body.shadow.hidden").classList.remove("hidden");
  document.querySelector(".card-body.shadow").classList.add("hidden");
  console.log("Cash Out section displayed");
});

document
  .getElementById("show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
    console.log("Add Money section displayed");
  });
