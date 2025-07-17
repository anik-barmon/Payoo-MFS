// console.log("button clicking file added");
// 1 set event handler
document.getElementById("Button-login").addEventListener("click", function () {
  console.log("button clicked");
  // 2 get phone number
  const phoneNumber = document.getElementById("phone-number").value;
  console.log("Phone Number:", phoneNumber);
});
