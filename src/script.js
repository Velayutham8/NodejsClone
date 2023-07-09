const lightIcon = document.getElementById('lighticon');
const darkIcon = document.getElementById('darkicon');
const langIcon = document.getElementById('langicon');

const headerSection = document.getElementById('header');
const footerSection = document.getElementById('footer');
const bodySection = document.getElementById('body');

const languageContainer = document.getElementById('language');

let allLanguageElement = [];

const links = document.querySelectorAll('a');

let languages = [
  'Deutsch',
  'English',
  'Español',
  'Français',
  'Bahasa Indonesia',
  'Italiano',
];

lightIcon.addEventListener('click', () => {
  switchThemeIcon();

  changeToLightMode();
});

darkIcon.addEventListener('click', () => {
  switchThemeIcon();

  changeToDarkMode();
});

//Alert message for all links
links.forEach((link) => {
  link.addEventListener('click', () => {
    alert('This is link!');
  });
});

//List the language in hidden div
languageContainer.innerHTML = languages
  .map((el) => {
    return `<p name='singlelang' class='mb-5 w-2/3 mx-4 hover:bg-[#84ba64] hover:underline p-1 rounded-md'>${el}</p>`;
  })
  .join('');

//Get All Language Elements
allLanguageElement = document.getElementsByName('singlelang');

//This function adds event listener to each language element
allLanguageElement.forEach((el) => {
  el.addEventListener('click', () => {
    languageContainer.classList.toggle('hidden');
  });
});

//List a language into p tag inside div
langIcon.addEventListener('click', () => {
  languageContainer.classList.toggle('hidden');
});

//Toggles the dark-light mode icons
const switchThemeIcon = () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');
};

let darkClass = 'dark-HF-background';
let lightClass = 'light-HF-background';

const changeToLightMode = () => {
  headerSection.classList.replace(darkClass, lightClass);
  footerSection.classList.replace(darkClass, lightClass);
  languageContainer.classList.replace(darkClass, lightClass);
  bodySection.classList.replace('dark-body', 'light-body');
};

const changeToDarkMode = () => {
  headerSection.classList.replace(lightClass, darkClass);
  footerSection.classList.replace(lightClass, darkClass);

  languageContainer.classList.replace(lightClass, darkClass);
  bodySection.classList.replace('light-body', 'dark-body');
};
