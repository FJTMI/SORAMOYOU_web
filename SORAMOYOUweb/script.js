const headerLogo = document.querySelector('header');
const homeSection = document.querySelector('#makeSORAMOYOU');

//スクロールでヘッダーロゴサイズ変える
new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      headerLogo.classList.add('scroll');
    } else {
      // 1番上の要素が少しでも見えたら（トップに戻ったら）クラスを外す
      headerLogo.classList.remove('scroll');
    }
    });
  }, {threshold: 0.2})
  .observe(homeSection);

  // スクロールでリストの文字サイズ変える
  const mainLogo = document.querySelector('.main-logo');
  const listObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    const entrySection = entry.target.getAttribute('data-navi');
    const targetNavi = document.querySelector(entrySection);
    if (entry.isIntersecting) {
      targetNavi.classList.add('scroll');
      if (entrySection === '.navi1') {
        mainLogo.classList.add('scroll');
      }
    } else {
      targetNavi.classList.remove('scroll');
    }
  });
}, {
  rootMargin: "-35% 0px -65% 0px"
});

document.querySelectorAll('.links').forEach(el => {listObserver.observe(el)});

//最初の日付
const welcomeTrigger = document.querySelector('.welcomeTrigger');
const welcome = document.querySelector('.welcome');
const mainImage = document.querySelector('.main-image');

const welcomeDate = document.querySelector('.welcomeDate');
const changeDate = document.querySelector('.changeDate');
const welcomeText = document.querySelectorAll('.welcomeText');


welcomeTrigger.addEventListener('click', () => {
  //changeList.classList.toggle('open');
  const removeElement = welcomeDate.querySelector('.changes');
  if (removeElement && changeDate) {
    changeDate.appendChild(removeElement);
  }

  welcome.classList.toggle('close');
  removeElement.classList.toggle('toggle');
  mainImage.classList.toggle('welClose');
  welcomeText.forEach(text => text.classList.toggle('close'));
});


//選択肢隠し
const triggers = document.querySelector('.changeDateBanner');
//const changeDate = document.querySelector('.changeDate');
const changeList = document.querySelector('.changeList');


triggers.addEventListener('click', () => {
    changeDate.classList.toggle('open');
    changeList.classList.toggle('open');
  });



