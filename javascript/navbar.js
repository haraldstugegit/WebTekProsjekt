
document.addEventListener('DOMContentLoaded', function() {
    var navbar = `
        <div id="banner" class="banner">
        <h1 id="site-title">Sakura Sushi</h1>
            <div id="navbar">
                <a href="homepage.html"><button class="navbtn" id="home">Home</button></a>
                <a href="about.html"><button class="navbtn" id="about">About Us</button></a>
                <a href="menu.html"><button class="navbtn" id="menu">Menu</button></a>
                <a href="contactUs.html"><button class="navbtn" id="contact">Contact Us</button></a>
                <a href="openingHours.html"><button class="navbtn" id="opening">Opening Hours</button></a>
            </div>
        </div>
`;
    var foot = `
        <div class="footer-left">
            <h3>Copyright information: </h3>
            <ul>
                <li>Source code is private information.</ul>
            </ul>
        </div>
        <div class="footer-middle">
            <a href="#" id="terms-media-link"><h3 id="rightFooter">Terms & Conditions</h3></a>
        </div>
        <div class="footer-right">
            <a href="#" class="social-media-link">
                <img src="images/insta.png" alt="Social Media Icon">
            </a>
        </div>
    `;

document.body.insertAdjacentHTML('afterbegin', navbar);

var footer = document.getElementById("footBanner");

if (footer) {
    footer.insertAdjacentHTML('afterbegin', foot);
}

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
