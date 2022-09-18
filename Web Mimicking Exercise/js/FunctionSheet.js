function showDropdown1() {
  document.getElementById("Menu1Dropdown").classList.toggle("show");
}

function showDropdown2() {
    document.getElementById("Menu2Dropdown").classList.toggle("show");
  }

window.onclick = function(event) {
  if (!event.target.matches('.Menu1')) {
    var dropdowns = document.getElementsByClassName("Menu1-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openForm() {
    document.getElementById("PopupBox").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("PopupBox").style.display = "none";
  }