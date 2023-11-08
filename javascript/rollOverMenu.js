document.addEventListener("DOMContentLoaded", function () {
    // Define the link URLs for each button
    const links = {
      home: "homepage.html",
      about: "about.html",
      menu: "menu.html",
      contact: "contactUs.html",
      opening: "openingHours.html",
    };
  
    // Update the href attributes for each button in the navigation menu
    for (const buttonId in links) {
      const button = document.getElementById(buttonId);
      if (button) {
        button.href = links[buttonId];
      }
    }
  });

