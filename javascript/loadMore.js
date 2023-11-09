document.addEventListener("DOMContentLoaded", function() {
  const menuGroups = document.querySelectorAll("#maki-menu, #nigiri-menu, #sashimi-menu");

  menuGroups.forEach(function(menuGroup) {
    const menuItems = menuGroup.querySelectorAll(".menu-item");
    const loadMoreButton = menuGroup.querySelector(".loadMore");
    const itemsToShow = 2;

    //Hide all menu-items.
    menuItems.forEach(function(item) {
      item.style.display = "none";
    });

    //Show the first 'itemsToShow' menu-items.
    for (let i = 0; i < itemsToShow; i++) {
      if (menuItems[i]) {
        menuItems[i].style.display = "flex";
      }
    }

    //Show two more menu items when clicking the loadMore button
    loadMoreButton.addEventListener("click", function(e) {
      e.preventDefault();
      const hiddenItems = Array.from(menuItems).filter(function(item) {
        return item.style.display === "none";
      });

      for (let i = 0; i < itemsToShow; i++) {
        if (hiddenItems[i]) {
          hiddenItems[i].style.display = "flex";
        }
      }

      if (hiddenItems.length <= itemsToShow) {
        loadMoreButton.style.display = "none"; //Hide the button when there are no more items to load
      }
    });
  });
});
