document.addEventListener('DOMContentLoaded', function() { //hamburger menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
        console.log(navLinks)
    });
});

document

// Selecteer de knop en de popup
let openButton = document.querySelector('.open-popup');
let closeButton = document.querySelector('.close-popup')
let popup = document.querySelector('.popup');


// Functie om de popup te tonen
let showPopup = function() {
    popup.style.display = 'flex';
};

let removePopup = function() { // popup weeer weghalen
    popup.style.display = 'none';
};

// Voeg een eventlistener toe aan de knop
openButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', removePopup)


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".cat-button");
    const articles = document.querySelectorAll(".webinar-article");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
         
            const category = button.textContent.toLowerCase();

          
            buttons.forEach(btn => btn.setAttribute("aria-pressed", false));
            button.setAttribute("aria-pressed", true); //aria controle

       
            articles.forEach((article) => { //veberg de artikelen 
                const articleCategory = article.getAttribute("data-category");
                if (category === "all" || articleCategory === category) {
                    article.style.display = "block"; //laten zien als je op alles klikt of als de catergory overeenkomt
                } else {
                    article.style.display = "none"; //anders weg laten
                }
            });
        });
    });
});

