
const dragArea = document.getElementById('dragArea');
let jsonData = replace_key; // 用来存储解析后的 JSON 数据
let currentPage = 0; // 当前页数
let n = 0;
let parts;
let names;
const itemsPerPage = 16; // 每页显示的条目数

// 阻止默认行为，防止文件被打开
dragArea.addEventListener('dragover', function (event) {
  event.preventDefault();
  dragArea.style.backgroundColor = '#f0f0f0';
});

dragArea.addEventListener('dragleave', function (event) {
  event.preventDefault();
  dragArea.style.backgroundColor = '';

});

// 当拖拽离开页面时隐藏拖拽区域
document.body.addEventListener('dragleave', function (event) {
  event.preventDefault();
  dragArea.classList.remove('active'); // 隐藏拖拽区域
});

// 当文件被拖放到页面时
dragArea.addEventListener('drop', function (event) {
  event.preventDefault();
  dragArea.classList.remove('active'); // 隐藏拖拽区域

  const files = event.dataTransfer.files;
  if (files.length > 0) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    addFilesToList(files);
  }
});

dragArea.classList.remove('active'); // 隐藏拖拽区域

const liElements = document.querySelectorAll('.item');
liElements.forEach(li => {
  li.remove();
});

// 初始化分页
currentPage = 0; // 重新加载时从第一页开始
renderPage();

// 更新按钮状态
updateButtons();

function addFilesToList(files) {
  const file = files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      // 解析 JSON 内容
      jsonData = JSON.parse(e.target.result);

      // 初始化分页
      currentPage = 0; // 重新加载时从第一页开始
      renderPage();

      // 更新按钮状态
      updateButtons();
    } catch (err) {
      console.error('无法解析JSON文件:', err);
    }
  };

  // 读取文件为文本
  reader.readAsText(file);
}

// 渲染当前页的数据
function renderPage() {
  const list = document.getElementsByClassName('item');
  console.log(list);

  //list.innerHTML = ''; // 清空现有的列表项

  // 计算当前页应该显示的数据
  const start = currentPage * itemsPerPage;
  const end = Math.min(start + itemsPerPage, jsonData.length);
  const pageData = jsonData.slice(start, end);

  // 遍历当前页数据并生成 li
  pageData.forEach(item => {

    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const h3Link = document.createElement('a');
    const p = document.createElement('p');
    const strong = document.createElement('strong');
    const span = document.createElement('span');
    const span1 = document.createElement('span');
    const sellNum = item.sell_num > 1000 ? '1000+' : item.sell_num;
    console.log(sellNum);





    strong.textContent = "¥ " + item.sell_min_price;
    p.appendChild(strong);

    span1.textContent = sellNum + "件在售";
    console.log(span1);
    p.appendChild(span1);

    li.className = 'item';
    img.src = item.icon_url;
    //img.alt = item; // 设置图片的 alt 属性

    h3Link.textContent = item.name; // 设置 h3 内的链接文本

    str = h3Link.textContent;

    parts = str.split(" | ");
    names = parts[1].split(" ")[0];

    h3Link.href = `./test/index.html?n=${img.src}&namess=${names}`; // 设置 h3 内的链接

    // 设置 a 的链接和内容
    a.href = `./test/index.html?n=${img.src}&namess=${names}`; // 设置图片链接
    a.appendChild(img); // 将 img img添加到 a 中



    // 设置 h3 的文本内容和链接




    console.log(names);

    h3.appendChild(h3Link); // 将链接添加到 h3 中

    span.textContent = item.localized_name;
    span.className = "color";



    // 将元素添加到结构中
    li.appendChild(a);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(span);
    container.appendChild(li);
    //container.backgroundColor = "rgba(238, 235, 232, 0.5)";


    let colors = document.querySelectorAll(".color");
    colors.forEach(element => {
      // 获取元素的文本内容
      let textContent = element.textContent.trim();
      // 根据文本内容设置不同的颜色
      if (textContent === "破损不堪") {
        element.style.backgroundColor = "#B7625F"; // 重要设置为红色
      } else if (textContent === "久经沙场") {
        element.style.backgroundColor = "#F1AD4D"; // 警告设置为橙色
      } else if (textContent === "略有磨损") {
        element.style.backgroundColor = "#488B48"; // 其他设置为绿色
      } else if (textContent === "崭新出厂") {
        element.style.backgroundColor = "#397439"
      } else if (textContent === "战痕累累") {
        element.style.backgroundColor = "#993A38"
      }
    });
  });
}
// 文件上传时的事件监听
document.getElementById('dragArea').addEventListener('change', function (event) {

})

// 更新分页按钮的状态
function updateButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // 上一页按钮的状态
  prevBtn.disabled = currentPage === 0;

  // 下一页按钮的状态
  nextBtn.disabled = currentPage >= Math.ceil(jsonData.length / itemsPerPage) - 1;
}

// 获取所有的 <li> 元素





// 点击上一页按钮
//const list = document.getElementsByClassName('item');
document.getElementById('prevBtn').addEventListener('click', function () {
  if (currentPage > 0) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    currentPage--;
    renderPage();
    updateButtons();
  }
});

// 点击下一页按钮
document.getElementById('nextBtn').addEventListener('click', function () {
  if (currentPage < Math.ceil(jsonData.length / itemsPerPage) - 1) {
    const liElements = document.querySelectorAll('.item');
    console.log(liElements)
    liElements.forEach(li => {
      li.remove();
    });
    currentPage++;
    renderPage();
    updateButtons();
  }
});
