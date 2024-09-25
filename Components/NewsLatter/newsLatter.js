document.querySelector(".notify-button").addEventListener("click", () => {
  const emailInput = document.querySelector(".email-input");
  if (emailInput.value) {
    alert(
      `Thank you for joining us! We will keep you informed with the latest news and updates through this email ${emailInput.value}!`
    );
  } else {
    alert("Please enter a valid email address.");
  }
});
