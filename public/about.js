function about_me() {
  var bday = new Date("06/08/2004");
  var today = new Date();

  // To calculate the time difference of two dates 
  var Difference_In_Time = today.getTime() - bday.getTime();
  Difference_In_Time = (Difference_In_Time / 1000) / 31556952;

  let age = Difference_In_Time.toFixed(3);
  document.getElementById("founder-name").innerHTML = `Emmanuel Koledoye (~${age})`;
}

about_me();

function dropdownMenu() {
  var dropdown = document.getElementById("dropdown");
  var logoContainer = document.querySelector(".general_background");

  // Hide the dropdown initially
  dropdown.style.display = "none";

  function isScrollPastLogoContainer() {
    var logoContainerRect = logoContainer.getBoundingClientRect();
    return logoContainerRect.bottom < 0;
  }

  function handleScroll() {
    if (isScrollPastLogoContainer()) {
      dropdown.style.display = "flex";
    } else {
      dropdown.style.display = "none";
    }
  }

  // Attach the scroll event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger the initial check
  handleScroll();
}

dropdownMenu();

function triangleToggle() {
  let triangle = document.getElementById("triangle");
  let dropdown = document.getElementById("dropdown");
  let message = "💀";
  dropdown.style.transition = "0.2s";
  dropdown.addEventListener("mouseover", () => {
    triangle.innerHTML = message;
  })

  dropdown.addEventListener("mouseout", () => {
    triangle.innerHTML = "";
  })

  dropdown.addEventListener("click", () => {
    triangle.innerHTML = message;
    setTimeout(() => {
      // give the user 2 seconds to see the notice
      triangle.innerHTML = "";
    }, 2000);
  });
}

triangleToggle()