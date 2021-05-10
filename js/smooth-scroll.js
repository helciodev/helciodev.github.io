
// smooth scroll for the navigation
$("nav ul a").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});
$(".animate-bounce a").on("click", function (e) {
  // 1
  e.preventDefault();
  // 2
  const href = $(this).attr("href");
  // 3
  $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

// arrows
const lang = document.getElementById('lang-arrow')
const frameWork = document.getElementById('framework-arrow');
const skills = document.getElementById('skills-arrow');

// dropdowns
const dropdownLang = document.getElementById('dropdown-lang');

const dropdownFrame = document.getElementById('dropdown-framework');

const dropdownSkills = document.getElementById('dropdown-skills');

lang.addEventListener('click' ,showLang)

function showLang() {
  dropdownLang.classList.toggle('hidden')
  this.classList.toggle('rotate')

}

frameWork.addEventListener('click', showFrameWorks)

function showFrameWorks () {
  dropdownFrame.classList.toggle('hidden')
  this.classList.toggle('rotate')
}

skills.addEventListener('click', showSkills)

function showSkills () {
  dropdownSkills.classList.toggle('hidden')
  this.classList.toggle('rotate')
}

const navigationLinks = Array.from( document.getElementsByClassName('navigationlink'))
const check = document.querySelector('.navigationcheckbox')

navigationLinks.forEach ( link => link.addEventListener('click', uncheckBtn))

function uncheckBtn () {
    check.checked = false
}