import json

import matplotlib.pyplot as plt
from datetime import datetime
import matplotlib.dates as mdates

# 设置支持中文的字体
# 请确保您的系统中安装了相应的中文字体，例如SimHei
plt.rcParams['font.family'] = 'SimHei'  # 黑体
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题

# 数据
data=[]
names=[]

import os

# 指定要读取的目录路径
directory = "saveData/pricesData"

# 获取该目录下的所有文件和子目录
for filename in os.listdir(directory):
    # 构建文件的完整路径
    file_path = os.path.join(directory, filename)
    if os.path.isfile(file_path):
        names.append(filename[:-5].replace('_','-'))
        with open(file_path,'r',encoding='UTF-8') as f:
            list=json.loads(f.read())
            data.append(list)

for i,item in enumerate(data):
    # 提取时间戳和价格
    timestamps = [entry[0] for entry in item]
    prices = [entry[1] for entry in item]

    # 将时间戳转换为datetime对象
    dates = [datetime.utcfromtimestamp(ts / 1000) for ts in timestamps]

    # 创建图形
    plt.figure(figsize=(12, 6))

    # 绘制价格曲线
    plt.plot(dates, prices, marker='o', color='#4a90e2', linestyle='-', linewidth=2, markersize=4)

    # 设置标题和标签
    plt.title(f"{names[i]}  价格走势(BUFF价格)", fontsize=16)
    plt.xlabel("日期", fontsize=14)
    plt.ylabel("价格", fontsize=14)

    # 格式化x轴日期
    plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%m-%d'))
    plt.gca().xaxis.set_major_locator(mdates.DayLocator(interval=5))
    plt.xticks(rotation=45)

    # 设置y轴范围
    plt.ylim(min(prices)-2, max(prices)+2)

    # 添加网格
    plt.grid(color='gray', linestyle='--', linewidth=0.5, alpha=0.7)

    # 调整布局
    plt.tight_layout()

    # 显示图表
    plt.show()
