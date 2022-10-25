// Featured Speakers Data
const data = [
    {
        name: "Bryte Litty Tricqx",
        title: "Berkam School of Law",
        bio: "This niqqa really understand what it takes to implement systems thinking",
        image: "./assets/images/boy.png"
    }
]

// mobile menu selectors
const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-item');


// open nav menu when bar when nav icon is clicked
openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show-mobile-menu')
});

closeBtn.addEventListener('click',  () => {
    mobileMenu.classList.remove('show-mobile-menu');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show-mobile-menu');
    })
});

console.log(navLinks);

