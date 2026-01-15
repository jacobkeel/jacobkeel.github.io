const PASSWORD = "design";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".password-protected")) {
    const input = prompt("This case study is password protected. Enter password:");

    if (input !== PASSWORD) {
      document.body.innerHTML = "<p style='padding:2rem'>Access denied.</p>";
    }
  }
});
