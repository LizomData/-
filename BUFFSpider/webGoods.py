import json

# 1. 读取文本文件中的 JSON 数据
file_path = 'webView/js/data_list2.js'  # 你的 JSON 文件路径
with open('items.json', 'r', encoding='utf-8') as f:
    goods = json.loads(f.read())  # 解析 JSON 数据

with open(file_path, 'r', encoding='utf-8') as f:
    js_data = f.read()  # 解析 JSON 数据
    js_data=js_data.replace('replace_key',json.dumps(goods))

# 4. 将更新后的内容写回到原始 JavaScript 文件
with open('webView/js/data_list.js', 'w', encoding='utf-8') as f:
    f.write(js_data)  # 写回更新后的 JS 文件内容

