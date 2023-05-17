const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      closeLine = document.getElementById('close-line')


if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
    
    }

    if(closeLine) {
        closeLine.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }
    

    const navLink = document.querySelectorAll('nav_link')

    function listAction() {
        const navMenu = document.getElementById('nav-menu')

        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))