const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.aside-close');
const sideNav = document.querySelector('.side-nav');
const backdrop = document.querySelector('.backdrop');
const scrollLock = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  scrollLock.classList.add('overflow-hidden');
  setTimeout(() => {
    backdrop.classList.remove('hidden');
  }, 600);
  sideNav.classList.toggle('right-0');
});

closeBtn.addEventListener('click', () => {
  scrollLock.classList.remove('overflow-hidden');
  setTimeout(() => {
    backdrop.classList.add('hidden');
  }, 600);
  sideNav.classList.toggle('right-0');
});
