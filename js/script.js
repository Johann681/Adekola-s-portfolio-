var typed = new Typed(".typing",{
    strings:["Web Designer", "Web Developer","Graphic Designer","Philosopher",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


  window.addEventListener('load', function() {
    // Wait for 5 seconds before starting the fade-out
    setTimeout(function() {
      // Get the preloader element and add the fade-out class
      var preloader = document.getElementById('preloader');
      preloader.classList.add('fade-out');
      
      // After the fade-out transition (1 second), remove the preloader from the DOM and remove the nav
      setTimeout(function(){
        preloader.parentNode.removeChild(preloader);
        
        // Remove the nav menu (if it exists)
        var nav = document.querySelector('.nav');
        if (nav) {
          nav.parentNode.removeChild(nav);
        }
      }, 1000); // Match this timeout to the CSS transition duration
    }, 2000); // 5000 ms = 5 seconds
  });


  let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide navbar
        navbar.classList.add('hidden');
      } else {
        // Scrolling up - show navbar
        navbar.classList.remove('hidden');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
