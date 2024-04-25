var slider = document.querySelector('.slider');
var sliderList = slider.querySelector('.slider-list');
var sliderItems = slider.querySelectorAll('.slider-item');
var sliderNav = slider.querySelector('.slider-nav');
var sliderNavItems = slider.querySelectorAll('.slider-nav-item');
var sliderPrev = slider.querySelector('.slider-prev');
var sliderNext = slider.querySelector('.slider-next');

var currentIndex = 0;
var timer = null;

// 初始化
function init() {
  // 设置轮播图宽度
  sliderList.style.width = sliderItems.length * 100 + '%';
  // 设置每个轮播项宽度
  for (var i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.width = 100 / sliderItems.length + '%';
  }
  // 绑定事件
  sliderNav.addEventListener('click', handleNavClick);
  sliderPrev.addEventListener('click', handlePrevClick);
  sliderNext.addEventListener('click', handleNextClick);
  // 自动播放
  startAutoPlay();
}

// 处理导航点击事件
function handleNavClick(event) {
  if (event.target.classList.contains('slider-nav-item')) {
    var index = Array.prototype.indexOf.call(sliderNavItems, event.target);
    goToSlide(index);
  }
}

// 处理上一张点击事件
function handlePrevClick(event) {
  goToSlide(currentIndex - 1);
}

// 处理下一张点击事件
function handleNextClick(event) {
  goToSlide(currentIndex + 1);
}

// 切换到指定索引的轮播项
function goToSlide(index) {
  if (index < 0) {
    index = sliderItems.length - 1;
  } else if (index >= sliderItems.length) {
    index = 0;
  }
  currentIndex = index;
  sliderList.style.transition = 'all .3s ease';
  sliderList.style.transform = 'translateX(-' + currentIndex * 100 / sliderItems.length + '%)';
  updateNav();
}

// 更新导航状态
function updateNav() {
  for (var i = 0; i < sliderNavItems.length; i++) {
    if (i === currentIndex) {
      sliderNavItems[i].classList.add('active');
    } else {
      sliderNavItems[i].classList.remove('active');
    }
  }
}

// 开始自动播放
function startAutoPlay() {
  timer = setInterval(function() {
    goToSlide(currentIndex + 1);
  }, 3000);
}

// 停止自动播放
function stopAutoPlay() {
  clearInterval(timer);
}

// 初始化轮播图
init();
