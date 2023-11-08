// Get all the menu items
const menuItems = document.querySelectorAll('.menu li');

// Add a hover event listener to each menu item
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('mouseenter', () => {
        // Change the background color on hover
        menuItem.style.backgroundColor = '#f0f0f0';
    });

    menuItem.addEventListener('mouseleave', () => {
        // Restore the background color on mouse leave
        menuItem.style.backgroundColor = 'transparent';
    });
});
