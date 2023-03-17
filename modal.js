/* eslint-disable */
// pop-up menu

const proj = [
  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/Math-Magician.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['JavaScript', 'HTML', 'Css'],

    href: 'https://github.com/Eternalgratis/Math-magician',

    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/bookstore.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['JavaScript', 'CSS', 'HTML'],

    href: 'https://github.com/Eternalgratis/Bookstore',

    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/leaderboard.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['HTML', 'CSS', 'JavaScript'],

    href: 'https://github.com/Eternalgratis/Leaderboard',

    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/spaceTravelers.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['React', 'CSS', 'HTML'],

    href: 'https://github.com/Eternalgratis/Space-Travelers',

    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/car-cruise.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['Ruby on rails', 'Jsx', 'React'],

    href: 'https://github.com/Eternalgratis/car_cruise_rental',

    // liveUrl:
    // sourceUrl:
  },

  {
    projectTitle: 'Multi-Post Stories',

    projectImage: 'images/awesomebooks.png',

    projectSubtitle: 'Gain+Glory',

    skills: ['JavaScript', 'CSS', 'HTML'],

    href: 'https://github.com/Eternalgratis/AwesomebooksES6',

    // liveUrl:
    // sourceUrl:
  },
];

// Adding projects section

function showProj() {
  let projCard = '';
  for (let projIndex = 0; projIndex < proj.length; projIndex += 1) {
    const worksection = `
  
    <div class='Projects'>
                <div class='empty-div'>
                <img src='${proj[projIndex].projectImage}' alt='project image' class='portfolio'>
                </div>
                <div class='Proj-text1'>
                    <h3>${proj[projIndex].projectTitle}</h3>
                    <h3>${proj[projIndex].projectSubtitle}</h3>
                    <ul class='pro-tech'>
                        <li>${proj[projIndex].skills[0]}</li>
                        <li>${proj[projIndex].skills[1]}</li>
                        <li>${proj[projIndex].skills[2]}</li>
                    </ul>
                    <br>
                    <a class='pro-btn' href='${proj[projIndex].href}'>See Project</a>
                </div>
            </div>
  `;

    projCard = projCard.concat(worksection);
  }

  return projCard;
}

const projHTML = showProj();

const worksSection = document.getElementById('works-section');
worksSection.insertAdjacentHTML('beforeend', projHTML);
const modal = document.querySelector('.Modal');

// Modal popup
const showModal = () => {
  modal.classList.add('active');
};

const seeProjectBtns = document.querySelectorAll('.pro-btn');

seeProjectBtns.forEach((probtn) => {
  probtn.addEventListener('click', showModal);
});

const closeContainer = document.querySelector('.close-container');
closeContainer.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Form Validation
 
const form = document.querySelector('#contact-details');
const formEmail = form.elements.email;
const formErrorMessage = document.querySelector('.error-message');

form.addEventListener('submit', async(event) => {
  event.preventDefault();
  const email =  document.getElementById('email').value;
  const name =  document.getElementById('name').value;
  const lastName = document.getElementById('last-name').value;
  const continent =  document.getElementById('continent').value;
  const message =  document.getElementById('message').value;

  const url = `https://formspree.io/f/mleklyzv`;

  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body :JSON.stringify({email, name, lastName, continent, message})
  }
  try {
    const response = await fetch(url, options)
    console.log('response', response)
    form.reset();
  }
  catch(error) {
  }
});
