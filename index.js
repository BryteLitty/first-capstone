// Featured Speakers Data
const data = [
  {
    name: 'Bryte Litty',
    title: 'Senior Engineer at Officium Africa',
    bio: 'With over 10 years of experience in Product Development and Agile Team management.',
    image: './assets/images/first.jpg',
  },

  {
    name: 'Wonder Bills',
    title: 'Ghana School of Law',
    bio: 'Tech lawyer with 8 years of experience on topics such as Universal Acceptance, Data Protection and Digital Rights.',
    image: './assets/images/second.jpg',
  },
  {
    name: 'Jerry Wealthman',
    title: 'Systems Engineer at TrueElectronics',
    bio: 'Seasoned Electrical Engineer with over 15 years of experience with top companies like Tullow Oil and Open Labs',
    image: './assets/images/jerry.jpg',
  },
  {
    name: 'Blessing Addisson',
    title: 'Research Scientist at Purple.ai',
    bio: 'Senior AI research scientist with deep knowledge on Machine Learning and Big Data. Poised to impact Women in Tech.',
    image: './assets/images/addis.webp',
  },
  {
    name: 'Coirris Iris',
    title: 'Communication Strategist',
    bio: "A vibrant lady with excellent communiction abilities. She's a visionary Women Leader and head of communication at OpenLab. ",
    image: './assets/images/will.webp',
  },
  {
    name: 'Nunya Great',
    title: 'Cyber Security Expert',
    bio: 'Senior Systems Analyst at the Boring Company and Tesla with over 8 years of industry experience in Cyber Security.',
    image: './assets/images/some.jpg',
  },
];

// mobile menu selectors
const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-item');

const speakers = document.querySelector('.speakers');

// open nav menu when bar when nav icon is clicked
openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});

const featuredSpeakers = () => {
  for (let i = 0; i < data.length; i += 1) {
    speakers.innerHTML += `
        <div class="img-card col-md-5">
                    <div class="img-container">
                        
                        <img src="${data[i].image}" alt="someone">
                    </div>

                    <div class="info">
                        <h3 class="name">${data[i].name}</h3>
                        <h3 class="title">${data[i].title}</h3>
                        <hr class="short-line">
                        <p class="bio">
                            ${data[i].bio}
                        </p>
                    </div>
                </div>
        `;
  }
};

window.addEventListener('DOMContentLoaded', featuredSpeakers());
