//const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");
//
//loginButton.addEventListener("click", (e) => {
//    e.preventDefault();
//    const username = loginForm.username.value;
//    const password = loginForm.password.value;
//
//    if (username === "user" && password === "web_dev") {
//        alert("You have successfully logged in.");
//        location.reload();
//    } else {
//        loginErrorMsg.style.opacity = 1;
//    }




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}