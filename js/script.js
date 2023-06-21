window.addEventListener('DOMContentLoaded', function() {
    var menuLinks = document.querySelectorAll('.menu a');
  
    for (var i = 0; i < menuLinks.length; i++) {
      menuLinks[i].addEventListener('click', scrollToSection);
    }
  
    function scrollToSection(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      var targetOffset = targetElement.offsetTop;
  
      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  
    window.addEventListener('scroll', function() {
      var menu = document.querySelector('.menu');
  
      if (window.pageYOffset > 0) {
        menu.classList.add('fixed-menu');
      } else {
        menu.classList.remove('fixed-menu');
      }
    });
  });
  