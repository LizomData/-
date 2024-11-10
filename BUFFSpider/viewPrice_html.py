import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from datetime import datetime
import mpld3
from mpld3 import plugins
import webbrowser

# 设置支持中文的字体
# 请确保您的系统中安装了相应的中文字体，例如SimHei
plt.rcParams['font.family'] = 'SimHei'  # 黑体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
# 示例数据
data = {
    "price_history": [
        [1728547200000, 4.3],
        [1728590400000, 4.29],
        [1728633600000, 4.68],
        [1728676800000, 4.6],
        [1728720000000, 4.6],
        [1728763200000, 4.29],
        [1728806400000, 4.26],
        [1728849600000, 4.25],
        [1728892800000, 4.23],
        [1728936000000, 4.2],
        [1728979200000, 4.07],
        [1729022400000, 4.05],
        [1729065600000, 4.24],
        [1729108800000, 4.2],
        [1729152000000, 4.1],
        [1729195200000, 3.99],
        [1729238400000, 4.08],
        [1729281600000, 4.07],
        [1729324800000, 4.02],
        [1729368000000, 4.01],
        [1729411200000, 3.98],
        [1729454400000, 3.95],
        [1729497600000, 3.94],
        [1729540800000, 3.91],
        [1729584000000, 3.66],
        [1729627200000, 3.8],
        [1729670400000, 3.8],
        [1729713600000, 3.81],
        [1729756800000, 3.75],
        [1729800000000, 3.75],
        [1729843200000, 3.78],
        [1729886400000, 3.92],
        [1729929600000, 3.92],
        [1729972800000, 3.91],
        [1730016000000, 3.88],
        [1730059200000, 3.88],
        [1730102400000, 3.87],
        [1730145600000, 3.86],
        [1730188800000, 3.95],
        [1730232000000, 3.93],
        [1730275200000, 3.94],
        [1730318400000, 3.95],
        [1730361600000, 3.97],
        [1730404800000, 3.99],
        [1730448000000, 3.98],
        [1730491200000, 3.99],
        [1730534400000, 3.96],
        [1730577600000, 3.94],
        [1730620800000, 3.86],
        [1730664000000, 3.82],
        [1730707200000, 3.78],
        [1730750400000, 3.78],
        [1730793600000, 3.78],
        [1730836800000, 3.77],
        [1730880000000, 3.75],
        [1730923200000, 3.7],
        [1730966400000, 3.7],
        [1731009600000, 3.7],
        [1731052800000, 3.69],
        [1731096000000, 3.69],
        [1731139200000, 3.7]
    ]
}

# 将时间戳转换为日期和价格列表
timestamps = [entry[0] for entry in data["price_history"]]
prices = [entry[1] for entry in data["price_history"]]
dates = [datetime.fromtimestamp(ts / 1000) for ts in timestamps]

# 创建图表
fig, ax = plt.subplots(figsize=(12, 6))
line, = ax.plot(dates, prices, color='#4a90e2',linestyle='-', linewidth=2, marker='o', markersize=5)

# 设置图表标题和标签
ax.set_title("价格走势 (BUFF价格)", fontsize=14)
ax.set_xlabel("日期", fontsize=12)
ax.set_ylabel("价格 (¥)", fontsize=12)

# 设置 x 轴格式为“月-日”
ax.xaxis.set_major_formatter(mdates.DateFormatter('%m-%d'))
ax.xaxis.set_major_locator(mdates.DayLocator(interval=5))  # 每隔 5 天显示一次刻度
plt.xticks(rotation=45)

# 添加网格和 y 轴范围
ax.set_ylim(3.5, 5)

# 添加网格
ax.grid(color='gray', linestyle='--', linewidth=0.5, alpha=0.7)

# 调整布局
plt.tight_layout()

# 创建 tooltip 信息（日期和价格）
tooltips = [f"<b>日期:</b> {date.strftime('%m-%d')}<br><b>价格:</b> ¥{price:.2f}" for date, price in zip(dates, prices)]

# 将 tooltip 添加到图表上
tooltip = plugins.PointHTMLTooltip(line, labels=tooltips, css="font-size: 12px; background-color: #f2f2f2; padding: 5px; border-radius: 5px;")
plugins.connect(fig, tooltip)

# plt.show()
# 使用 mpld3 将图表转换为 HTML
html_str = mpld3.fig_to_html(fig)

# 保存到 HTML 文件
html_filename = "price_chart_with_tooltip.html"
with open(html_filename, "w", encoding="utf-8") as f:
    f.write(html_str)

# 使用默认浏览器打开 HTML 文件
webbrowser.open(html_filename)

print("HTML 文件已生成并在浏览器中打开: price_chart_with_tooltip.html")