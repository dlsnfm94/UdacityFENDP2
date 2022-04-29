// build the nav
const sections = Array.from(document.getElementsByTagName('section'));
const navBar = document.getElementById("navbar__list");
for (section of sections) {
    const navItem = document.createElement('li');
    const navItemLink = document.createElement('a');
    navItemLink.textContent = section.dataset.nav;
    navItemLink.classList.add('menu__link');
    navItem.appendChild(navItemLink);
    navBar.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport
function isNearViewportTop(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >=0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

for (let i = 1; i <= 5; i++) {
    const sectionN = document.getElementById('section'+i);
    const navItem = document.getElementsByClassName('menu__link')[i-1];
    document.addEventListener('scroll', function() {
        if (isNearViewportTop(sectionN)) {
            sectionN.classList.add('landing__container_active');
            navItem.classList.add('menu_link_active');
        }
        else {
            sectionN.classList.remove('landing__container_active');
            navItem.classList.remove('menu_link_active');
        }
    })
}

// Scroll to section
for (let i = 0; i < 5; i++) {
    const navItemLink = document.getElementsByClassName('menu__link')[i];
    const section = document.getElementById('section'+(i+1));
    
    navItemLink.addEventListener('click', function(event) {
        event.preventDefault();
        section.scrollIntoView({behavior:"smooth"});
    })
}


