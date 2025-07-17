// console.log("button clicking file added");

// 1 set event handler
// document.getElementById("Button-login").addEventListener("click", function () {
//   console.log("button clicked");
//   // 2 get phone number
//   const phoneNumber = document.getElementById("phone-number").value;
//   console.log("Phone Number:", phoneNumber);
//   // 3 get pin number
//   const pinNumber = document.getElementById("pin-number").value;
//   console.log("Pin Number:", pinNumber);
//   // 4 temporary code check
//   if (phoneNumber === "123456" && pinNumber === "1234") {
//     console.log("Login successful");
//   } else {
//     console.log("Login failed");
//   }
// });

document.getElementById("Button-login").addEventListener("click", function () {
  console.log("button clicked");
  const phoneNumber = document.getElementById("phone-number").value;
  const pinNumber = document.getElementById("pin-number").value;
  console.log("Phone Number:", phoneNumber);
  console.log("Pin Number:", pinNumber);
  if (phoneNumber === "123456" && pinNumber === "1234") {
    console.log("Login successful");
    window.location.href = "home.html"; // Redirect to home page on successful login
  } else {
    console.log("Login failed");
  }
});
