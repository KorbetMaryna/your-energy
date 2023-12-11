    var currentUrl = window.location.href;

    var navLinks = document.querySelectorAll('.header-nav-list-item a');

    navLinks.forEach(function(link) {
        if (link.href === currentUrl || (link.getAttribute('href') === '../index.html' && currentUrl.endsWith('/index.html'))) {
            link.classList.add('header-nav-current');
        } else {
            link.classList.remove('header-nav-current');
        }
    });