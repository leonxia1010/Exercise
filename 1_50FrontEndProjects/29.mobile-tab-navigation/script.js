const imgs = document.querySelectorAll('.content');

const tabs = document.querySelectorAll('div ul li');

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', (e) => {
    removeTabActive();
    removeImgShow();
    e.currentTarget.classList.add('active');
    imgs[idx].classList.add('show');
  });
});

function removeTabActive() {
  tabs.forEach((tab) => tab.classList.remove('active'));
}

function removeImgShow() {
  imgs.forEach((img) => img.classList.remove('show'));
}
