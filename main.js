const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const menuIcon = document.getElementById('menu-icon');
const slideoutMenu = document.getElementById('slideout-menu');

// Search Box toggle animation 
searchIcon.addEventListener('click', () => {
        if (searchBox.style.top == '74px') {
            searchBox.style.top = '24px';
            searchBox.style.pointerEvents = 'none';
            searchBox.style.zIndex = '-1';
        } else {
            searchBox.style.top = '74px';
            searchBox.style.pointerEvents = 'auto';
            searchBox.style.zIndex = '1';
        }
    });
    


const menuSlide = () => {
  // Hamburger menu toggle animation 
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('toggle');
  
  // Menu slide animation
  if (slideoutMenu.style.display === "block") {
    slideoutMenu.style.display = "none";    
  } else {
    slideoutMenu.style.display = "block";
  }
 
  });
}

menuSlide();



