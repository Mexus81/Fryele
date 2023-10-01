// Add an event listener for mouseenter to show the dropdown
document.querySelector(".dropdown").addEventListener("mouseenter", function() {
    document.getElementById("myDropdown").classList.add("show");
  });
  
  // Add an event listener for mouseleave to hide the dropdown
  document.querySelector(".dropdown").addEventListener("mouseleave", function() {
    document.getElementById("myDropdown").classList.remove("show");
  });