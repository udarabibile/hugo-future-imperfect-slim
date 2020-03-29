// Flyout Menu Functions
var flyoutmenus = {
  ".lang-toggle": "#lang-menu",
  ".share-toggle": "#share-menu",
  ".nav-toggle": "#site-nav-menu"
};

$.each(flyoutmenus, function( key, value ) {
  $(key).on("click", function() {
    $(".flyout-menu").not($(value + ".flyout-menu")).removeClass("active");
    if ($("#wrapper").hasClass('overlay') && $(value).hasClass('active')) {
      $("#wrapper").removeClass('overlay');
    } else {
      $("#wrapper").addClass('overlay');
    }
    $(value).toggleClass('active');
  });
});


// Click anywhere outside a flyout to close
$(document).on("click", function(e) {
  if ($(e.target).is(".lang-toggle, .lang-toggle span, #lang-menu, .share-toggle, .share-toggle i, #share-menu, .search-toggle, search.toggle i, #search-menu, .nav-toggle, .nav-toggle i, #site-nav") === false) {
    $(".flyout-menu").removeClass("active");
    $("#wrapper").removeClass('overlay');
  }
});

// Check to see if the window is top if not then display button
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});

// Click event to scroll to top
$('#back-to-top').click(function() {
  $('html, body').animate({scrollTop: 0}, 1000);
  return false;
});

// BIBI: DARK TOGGLE
var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

toggle.addEventListener("click", () => {
    if (toggle.className === "fa fa-moon fa-2x") {
        setTheme("dark");
    } else if (toggle.className === "fa fa-sun fa-2x") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fa fa-sun fa-2x";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fa fa-moon fa-2x";
    }
}

var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);