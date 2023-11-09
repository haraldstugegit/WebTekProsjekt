$(document).ready(function(){
  $("#maki-menu, #nigiri-menu, #sashimi-menu").each(function() {
      const menuGroup = $(this);
      const menuItems = menuGroup.find(".menu-item");
      const loadMoreButton = menuGroup.find(".loadMore");
      const itemsToShow = 2;

      //Hide all menu items.
      menuItems.hide();

      //Show the first 'itemsToShow' menu items.
      menuItems.slice(0, itemsToShow).show();

      //Show two more menu items when clicking loadMore button
      loadMoreButton.on("click", function(e){
          e.preventDefault();
          const hiddenItems = menuItems.filter(":hidden");
          hiddenItems.slice(0, itemsToShow).slideDown();

          if(hiddenItems.length <= itemsToShow) {
              loadMoreButton.hide(); // Hide the button when there are no more items to load
          }
      });
  });
});
