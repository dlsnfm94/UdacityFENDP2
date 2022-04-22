// build the nav
const navBar = document.getElementById("navbar__list");
for (let i = 1; i <= 5; i++) {
    const navItem = document.createElement('li');
    navItem.innerHTML = "<a class=\"menu__link\" href=\"#section"+i+"\">Section "+i+" </a>";
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
    const navItem = document.querySelectorAll('.menu__link')[i-1];
    document.addEventListener('scroll', function() {
        if (isNearViewportTop(sectionN)) {
            sectionN.classList.add('your-active-class');
            navItem.style.backgroundColor = '#333';
            navItem.style.color = '#fff';
        }
        else {
            sectionN.classList.remove('your-active-class');
            navItem.style.backgroundColor = '#fff';
            navItem.style.color = '#333';
        }
    })
}

// Scroll to section
for (let i = 0; i < 5; i++) {
    const navItem = document.querySelectorAll('.menu__link')[i];
    const section = document.getElementById('section'+(i+1));
    
    navItem.addEventListener('click', function() {
        scrollTo(section);
    })
}


