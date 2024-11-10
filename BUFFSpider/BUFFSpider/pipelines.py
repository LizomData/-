# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import openpyxl
import mysql.connector  # 或者使用 pymysql

class BuffspiderPipeline:
    def __init__(self):
        self.wb=openpyxl.Workbook()
        self.ws=self.wb.active
        self.ws.title='ak47商品'
        self.ws.append(('名称','在售数量','最低售价',"品质",'图片url'))


        db_config = {
            'host': 'localhost',
            'user': 'alimysql',
            'password': 'lZHUO1979.',
            'database': 'spiderUser',
            "port": 7891
        }

        # 建立数据库连接
        # self.db_connection = mysql.connector.connect(**db_config)
        # self.cursor = self.db_connection.cursor()



    def close_spider(self,spider):
        self.wb.save("ak47数据.xlsx")
        self.db_connection.close()  # 关闭数据库连接

    def process_item(self, item, spider):
        self.ws.append((
            item.get("short_name",""),
            item.get("sell_num",""),
            item.get("sell_min_price",""),
            item.get("localized_name", ""),
            item.get("icon_url",""),
        ))
        return item

        # 保存到MySQL数据库
        insert_query = """
               INSERT INTO data (short_name, sell_num, sell_min_price, localized_name, icon_url)
               VALUES (%s, %s, %s, %s, %s)
               """
        data = (
            item.get("short_name", ""),
            item.get("sell_num", ""),
            item.get("sell_min_price", ""),
            item.get("localized_name", ""),
            item.get("icon_url", "")
        )
        self.cursor.execute(insert_query, data)
        self.db_connection.commit()

        return item