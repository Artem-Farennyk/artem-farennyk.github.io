function toggleSearch() {
  var searchInput = document.getElementById("search-input")
  var navButtons = document.getElementsByClassName("header-nav-button")

  if (searchInput.style.display === "none") {
    searchInput.style.display = "block"
    for (var i = 0; i < navButtons.length; i++) {
      navButtons[i].style.display = "none"
    }
    searchInput.focus()
  } else {
    searchInput.style.display = "none"
    for (var i = 0; i < navButtons.length; i++) {
      navButtons[i].style.display = "block"
    }
  }
}

function hideSearch() {
  var searchInput = document.getElementById("search-input")
  var navButtons = document.getElementsByClassName("header-nav-button")

  searchInput.style.display = "none"
  for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].style.display = "block"
  }
}

function checkForEnter(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    var searchInput = document.getElementById("search-input")
    searchInput.value = ""
    hideSearch()
  }
}

function showPopup(event) {
  event.preventDefault()
  var popup = document.querySelector(".popup")
  popup.style.display = "block"
}

function closePopup(event) {
  var popup = document.querySelector(".popup")
  popup.style.display = "none"
}

function submitForm(event) {
  event.preventDefault()
  var emailInput = document.getElementById("emailInput")

  if (emailInput.checkValidity()) {
    emailInput.value = ""
    closePopup(event)
  } else {
    emailInput.reportValidity()
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var popup = document.querySelector(".popup")
  popup.addEventListener("click", closePopup)

  var popupContent = document.querySelector(".popup-content")
  popupContent.addEventListener("click", function (event) {
    event.stopPropagation()
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.getElementsByClassName("menu-search-input")

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        this.value = ""
      }
    })
  }
})

