// -- ROOT --
const root = document.getElementById('root');

// -- MAIN --
const main = document.createElement('main');

// -- HEADER --

const header = document.createElement('header');

const logo = document.createElement('img');
logo.classList.add('header--img');
logo.src = 'https://w7.pngwing.com/pngs/471/813/png-transparent-quiz-exam-icon-button-test-examination-logo-education-college-knowledge.png';
logo.alt = 'Logo Quiz';
header.appendChild(logo);

const title = document.createElement('h1');
title.classList.add('header--title');
title.textContent = 'Dynamic Quiz';
header.appendChild(title);

const description = document.createElement('h3');
description.classList.add('header--descr');
description.textContent = 'Web Dynamique - Final project';
header.appendChild(description);


main.appendChild(header);
root.appendChild(main);