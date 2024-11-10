var myImage = document.getElementById('myImage');

var currentImageName = document.getElementById('currentImageName');
// 图片名称数组
var imageNames = [
  '墨岩', '火神', '可燃冰', '二西莫夫', '红线', '混沌点阵', '表面淬火', '传承', '燃料喷射器', '夜愿', '卡特尔', '前线迷雾', '野荷', '水栽竹', '血腥运动', 'X射线'
];

// 图片路径数组，假设每个名称对应一个图片文件
var images = imageNames.map(function(name) {
  return './images/ak/' + name + '.png';
});

// 当前图片索引
var currentImageIndex = 0;

function updateChart() {
  var buffData5 = generateRandomData(30);
  var steamData5 = generateRandomData(30);
  var myChart5 = echarts.init(document.querySelector(".line1 .chart"));
  option5.series[0].data = buffData5;
  option5.series[1].data = steamData5;
  myChart5.setOption(option5);

}
// 为左箭头添加点击事件监听器
document.getElementById('left_div').addEventListener('click', function() {
  
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateChart();
    animateImage('left');
    
  }
});

// 为右箭头添加点击事件监听器
document.getElementById('right_div').addEventListener('click', function() {
  
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateChart();
    animateImage('right');
    
  }
});

// 动画图片的函数
function animateImage(document) {
  var nextImageSrc = images[currentImageIndex];
  var nextImage = new Image(); // 创建一个新的Image对象
  nextImage.src = nextImageSrc; // 设置新图片的src
  
  // 等待新图片加载完成
  nextImage.onload = function() {
    // 执行动画效果
    if (document == 'left') {
      // 向左动画
      myImage.style.left = '-105%'; // 将当前图片移动到左侧
    } else {
      // 向右动画
      myImage.style.left = '105%'; // 将当前图片移动到右侧
    }
    
    setTimeout(function() {
      myImage.src = nextImageSrc; // 切换图片
      myImage.style.left = '0'; // 将新图片移动到视图中
      currentImageName.textContent = imageNames[currentImageIndex]; // 更新图片名称
    }, 500); // 等待动画完成
  };
  
  // 如果图片已经在缓存中，onload事件可能不会触发，所以直接执行动画
  if (nextImage.complete) {
    nextImage.onload();
  }
}