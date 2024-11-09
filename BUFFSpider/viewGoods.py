import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
# 设置字体为 SimHei（黑体），这是一种常见的支持中文的字体
plt.rcParams['font.sans-serif'] = ['SimHei']  # 解决中文显示问题
plt.rcParams['axes.unicode_minus'] = False  # 解决负号显示问题
# 1. 读取 Excel 文件
# 请确保 'ak47数据.xlsx' 文件路径正确
df = pd.read_excel('ak47数据.xlsx')

# 查看数据的前几行，确认加载是否正确
print(df.head())

# 2. 数据清洗（如果有缺失值，可以选择填充或删除）
print("缺失值情况：")
print(df.isnull().sum())

# 选择填充缺失值，或删除缺失值
# 例如用0填充缺失值
df.fillna(0, inplace=True)

# 3. 可视化示例

# 3.1 在售数量与最低售价的关系
plt.figure(figsize=(10, 6))
sns.scatterplot(x='在售数量', y='最低售价', data=df, hue='品质', palette='viridis')

# 设置标题和标签
plt.title('在售数量与最低售价的关系', fontsize=16)
plt.xlabel('在售数量', fontsize=12)
plt.ylabel('最低售价', fontsize=12)

# 显示图形
plt.show()

# 3.2 不同商品品质的数量分布
plt.figure(figsize=(8, 5))
sns.countplot(x='品质', data=df, palette='Set2')

# 设置标题和标签
plt.title('不同品质商品的数量分布', fontsize=16)
plt.xlabel('品质', fontsize=12)
plt.ylabel('数量', fontsize=12)

# 显示图形
plt.show()

# 3.3 最低售价的分布情况
plt.figure(figsize=(8, 5))
sns.histplot(df['最低售价'], kde=True, color='purple')

# 设置标题和标签
plt.title('最低售价的分布', fontsize=16)
plt.xlabel('最低售价', fontsize=12)
plt.ylabel('频次', fontsize=12)

# 显示图形
plt.show()

# 3.4 各商品在售数量的条形图
plt.figure(figsize=(12, 6))
sns.barplot(x='名称', y='在售数量', data=df, palette='coolwarm')

# 设置标题和标签
plt.title('各商品在售数量', fontsize=16)
plt.xlabel('商品名称', fontsize=12)
plt.ylabel('在售数量', fontsize=12)
plt.xticks(rotation=45)  # 旋转X轴标签，以避免重叠

# 显示图形
plt.show()
