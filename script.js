const headerLogo = document.querySelector('header');
const homeSection = document.querySelector('#makeSORAMOYOU');
const topTrigger =document.querySelector('.topTrigger');
const phoneNavis = document.querySelectorAll('.navi-links li');

//スクロールでヘッダーロゴサイズ変える
new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      headerLogo.classList.add('scroll');
      topTrigger.classList.add('scroll');
      phoneNavis.forEach(li => {li.classList.remove('phoneNavi');});
    } else {
      // 1番上の要素が少しでも見えたら（トップに戻ったら）クラスを外す
      headerLogo.classList.remove('scroll');
      topTrigger.classList.remove('scroll');
      phoneNavis.forEach(li => {li.classList.add('phoneNavi');});
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

window.addEventListener('click', (e) => {
  // クリックされた要素が、展開している要素（changeDate/changeList）の中に含まれていない場合
  if (!changeDate.contains(e.target) && !changeList.contains(e.target)) {
    changeDate.classList.remove('open');
    changeList.classList.remove('open');
  }
});

//オフライン時
const offImg = document.querySelector('.offImg');
const offText = document.querySelector('.offText');
const mainImg = document.querySelector('.main-image');
const whenText = document.querySelector('.whenThisSORAMOYOU');

function updateOnlineStatus() {
  if (navigator.onLine) {
    //banner.classList.add('hidden'); // オンラインなら隠す
    offImg.classList.remove('offline'); 
    offText.classList.remove('offline'); 
    mainImg.classList.remove('offline'); 
    whenText.classList.remove('offline'); 
    welcome.classList.remove('offline'); 
    changeList.classList.remove('offline'); 
    console.log("オン")
  } else {
    //banner.classList.remove('hidden'); // オフラインなら表示
    offImg.classList.add('offline'); 
    offText.classList.add('offline'); 
    mainImg.classList.add('offline'); 
    whenText.classList.add('offline'); 
    welcome.classList.add('offline'); 
    changeList.classList.add('offline'); 
    console.log("オフ")
  }
}

// 状態が変わった瞬間に実行されるようにイベントを登録
window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// ページを開いた瞬間にも一度チェック
updateOnlineStatus();
